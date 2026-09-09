import { createHash } from "crypto";

/**
 * Hash an identifier (IP or email) for rate limiting and abuse prevention.
 * We never store raw IPs — only a one-way hash. This keeps us honest about
 * privacy: we can detect repeat submissions without keeping a log of IPs.
 */
export function hashIdentifier(input: string): string {
  if (!input) return "";
  // Use a stable salt so hashes are consistent within a deployment.
  const salt = process.env.RATE_LIMIT_SALT || "skymind-automation-v1";
  return createHash("sha256")
    .update(`${salt}::${input.trim().toLowerCase()}`)
    .digest("hex");
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // First IP in the chain is the client
    return forwarded.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
