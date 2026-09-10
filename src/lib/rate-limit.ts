import { getDb } from "@/lib/db";

const WINDOW_MINUTES = 15;
const MAX_REQUESTS_PER_WINDOW = 3;

type RateLimitResult = {
  ok: boolean;
  remaining: number;
  resetAt: Date;
};

export async function checkRateLimit(
  identifier: string
): Promise<RateLimitResult> {
  const db = getDb();

  // No identifier? Fail conservatively.
  if (!identifier) {
    return {
      ok: false,
      remaining: 0,
      resetAt: new Date(Date.now() + WINDOW_MINUTES * 60_000),
    };
  }

  const now = new Date();
  const windowEnd = new Date(
    now.getTime() + WINDOW_MINUTES * 60_000
  );

  const existing = await db.contactRateLimit.findUnique({
    where: { key: identifier },
  });

  // First request for this identifier.
  if (!existing) {
    await db.contactRateLimit.create({
      data: {
        key: identifier,
        count: 1,
        windowEnd,
      },
    });

    return {
      ok: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetAt: windowEnd,
    };
  }

  // Existing window has expired — start a new window.
  if (existing.windowEnd <= now) {
    await db.contactRateLimit.update({
      where: { key: identifier },
      data: {
        count: 1,
        windowEnd,
      },
    });

    return {
      ok: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetAt: windowEnd,
    };
  }

  // Already at the limit.
  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      ok: false,
      remaining: 0,
      resetAt: existing.windowEnd,
    };
  }

  // Increment within the active window.
  const updated = await db.contactRateLimit.update({
    where: { key: identifier },
    data: {
      count: {
        increment: 1,
      },
    },
  });

  return {
    ok: true,
    remaining: Math.max(
      0,
      MAX_REQUESTS_PER_WINDOW - updated.count
    ),
    resetAt: existing.windowEnd,
  };
}
