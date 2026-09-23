import { getDb } from "@/lib/db";

const WINDOW_MS = 15 * 60_000;
const MAX_REQUESTS_PER_WINDOW = 3;

type RateLimitResult = {
  ok: boolean;
  remaining: number;
  resetAt: Date;
};

// One statement, so two concurrent submissions cannot both read "no row" and
// both insert. Timestamps are ISO-8601 UTC strings, which compare correctly as
// text. The count keeps rising past the limit; the window reset clears it.
const UPSERT = `
  INSERT INTO "ContactRateLimit" ("id", "key", "count", "windowEnd", "createdAt", "updatedAt")
  VALUES (?1, ?2, 1, ?3, ?4, ?4)
  ON CONFLICT ("key") DO UPDATE SET
    "count" = CASE WHEN "windowEnd" <= ?4 THEN 1 ELSE "count" + 1 END,
    "windowEnd" = CASE WHEN "windowEnd" <= ?4 THEN ?3 ELSE "windowEnd" END,
    "updatedAt" = ?4
  RETURNING "count", "windowEnd"`;

export async function checkRateLimit(key: string): Promise<RateLimitResult> {
  const now = new Date();
  const row = await getDb()
    .prepare(UPSERT)
    .bind(crypto.randomUUID(), key, new Date(now.getTime() + WINDOW_MS).toISOString(), now.toISOString())
    .first<{ count: number; windowEnd: string }>();

  if (!row) throw new Error("rate-limit upsert returned no row");

  return {
    ok: row.count <= MAX_REQUESTS_PER_WINDOW,
    remaining: Math.max(0, MAX_REQUESTS_PER_WINDOW - row.count),
    resetAt: new Date(row.windowEnd),
  };
}
