import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getDb } from "@/lib/db";
import { parseContactForm } from "@/lib/validations/contact";
import { checkRateLimit } from "@/lib/rate-limit";
import { hashIdentifier, getClientIp, isSameOrigin } from "@/lib/security";
import { sendLeadAlert } from "@/lib/lead-alert";

export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16 * 1024;
const FALLBACK_SALT = "skymind-automation-v1";
const RECEIVED =
  "Thanks — your inquiry has been received. We'll respond within one business day.";

const fail = (status: number, error: string, extra: Record<string, unknown> = {}) =>
  NextResponse.json({ ok: false, error, ...extra }, { status });

export async function POST(request: Request) {
  const { env, ctx } = getCloudflareContext();

  if (!isSameOrigin(request)) return fail(403, "Forbidden.");

  // Content-Length can be absent or wrong, so the body size is checked again after reading.
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return fail(413, "Request too large.");
  }
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return fail(413, "Request too large.");

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail(400, "Invalid request body.");
  }

  // Honeypot: answer bots with an ordinary success so they learn nothing.
  if (typeof body === "object" && body && (body as { website?: unknown }).website) {
    return NextResponse.json({ ok: true, message: RECEIVED }, { status: 201 });
  }

  const parsed = parseContactForm(body);
  if (!parsed.success) {
    return fail(422, "Validation failed.", { fields: parsed.error.flatten().fieldErrors });
  }
  const data = parsed.data;

  if (!env.RATE_LIMIT_SALT) console.warn("[contact] RATE_LIMIT_SALT is not set; IP hashes use a public salt");
  const ipHash = hashIdentifier(getClientIp(request), env.RATE_LIMIT_SALT || FALLBACK_SALT);

  try {
    const rl = await checkRateLimit(ipHash);
    if (!rl.ok) {
      const retryAfter = Math.max(1, Math.ceil((rl.resetAt.getTime() - Date.now()) / 1000));
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Please try again later.", retryAfter: rl.resetAt.toISOString() },
        { status: 429, headers: { "Retry-After": String(retryAfter) } },
      );
    }
  } catch (err) {
    // A rate-limit outage should not cost a real lead.
    console.error("[contact] rate-limit check failed:", err);
  }

  const id = crypto.randomUUID();
  const now = new Date().toISOString();
  try {
    await getDb()
      .prepare(
        `INSERT INTO "ContactLead" ("id","name","email","company","phone","companySize","service","budgetRange",
          "timeline","goal","currentSystems","message","source","status","ipHash","userAgent","createdAt","updatedAt")
         VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10,?11,?12,'website','new',?13,?14,?15,?15)`,
      )
      .bind(
        id,
        data.name,
        data.email.toLowerCase(),
        data.company || null,
        data.phone || null,
        data.companySize || null,
        data.service || null,
        data.budgetRange || null,
        data.timeline || null,
        data.goal,
        data.currentSystems || null,
        data.message || data.goal,
        ipHash,
        request.headers.get("user-agent")?.slice(0, 255) || null,
        now,
      )
      .run();
  } catch (err) {
    console.error("[contact] failed to store lead:", err);
    return fail(500, "Something went wrong on our side. Please try again.");
  }

  // The lead is already stored; the alert goes out after the response is sent.
  ctx.waitUntil(
    sendLeadAlert(env, data, id).catch((err) => console.error(`[contact] alert failed for lead ${id}:`, err)),
  );

  return NextResponse.json({ ok: true, message: RECEIVED, id }, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ ok: true, endpoint: "contact" });
}
