import { db } from "@/lib/db";

// Simple time-window rate limiter using the database.
// Limits are per-identifier (hashed IP + email) over a rolling window.

const WINDOW_MINUTES = 15;
const MAX_REQUESTS_PER_WINDOW = 3;

type RateLimitResult = {
  ok: boolean;
  remaining: number;
  resetAt: Date;
};

export async function checkRateLimit(identifier: string): Promise<RateLimitResult> {
  if (!identifier) {
    // No identifier? Allow but conservatively.
    return { ok: true, remaining: 0, resetAt: new Date(Date.now() + WINDOW_MINUTES * 60_000) };
  }

  const now = new Date();
  const windowEnd = new Date(now.getTime() + WINDOW_MINUTES * 60_000);

  const existing = await db.contactRateLimit.findUnique({
    where: { key: identifier },
  });

  if (!existing) {
    await db.contactRateLimit.create({
      data: {
        key: identifier,
        count: 1,
        windowEnd,
      },
    });
    return { ok: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetAt: windowEnd };
  }

  // If the window has passed, reset.
  if (existing.windowEnd < now) {
    await db.contactRateLimit.update({
      where: { key: identifier },
      data: { count: 1, windowEnd },
    });
    return { ok: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetAt: windowEnd };
  }

  // Within window — increment and check.
  const newCount = existing.count + 1;
  if (newCount > MAX_REQUESTS_PER_WINDOW) {
    return {
      ok: false,
      remaining: 0,
      resetAt: existing.windowEnd,
    };
  }

  await db.contactRateLimit.update({
    where: { key: identifier },
    data: { count: newCount },
  });

  return {
    ok: true,
    remaining: MAX_REQUESTS_PER_WINDOW - newCount,
    resetAt: existing.windowEnd,
  };
}
