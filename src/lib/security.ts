import { createHash } from "crypto";

/**
 * One-way hash for IPs, so repeat submissions can be detected without storing
 * addresses. The salt must be a secret: IPv4 is small enough to brute-force
 * against a known salt, which would make these hashes reversible.
 */
export function hashIdentifier(input: string, salt: string): string {
  return createHash("sha256")
    .update(`${salt}::${input.trim().toLowerCase()}`)
    .digest("hex");
}

/**
 * CF-Connecting-IP is set by Cloudflare and cannot be supplied by the client.
 * X-Forwarded-For can: Cloudflare appends the real address after whatever the
 * client sent, so trusting its first entry lets anyone pick their own IP.
 */
export function getClientIp(request: Request): string {
  return request.headers.get("cf-connecting-ip")?.trim() || "unknown";
}

/** Rejects cross-site posts: a browser always sends Origin on a cross-origin POST. */
export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === request.headers.get("host");
  } catch {
    return false;
  }
}
