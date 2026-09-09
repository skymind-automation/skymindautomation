import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { parseContactForm } from "@/lib/validations/contact";
import { checkRateLimit } from "@/lib/rate-limit";
import { hashIdentifier, getClientIp } from "@/lib/security";
import { siteConfig } from "@/config/site";

// Force this endpoint to be dynamic — it always interacts with the DB.
export const dynamic = "force-dynamic";

// Reject unreasonably large payloads early.
const MAX_BODY_BYTES = 16 * 1024; // 16 KB

export async function POST(request: Request) {
  // 1. Size guard.
  const contentLength = request.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return NextResponse.json(
      { ok: false, error: "Request too large." },
      { status: 413 },
    );
  }

  // 2. Parse JSON safely.
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // 3. Validate with Zod.
  const parsed = parseContactForm(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed.",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const data = parsed.data;

  // 4. Rate limit by hashed IP + email combo.
  const ip = getClientIp(request);
  const ipHash = hashIdentifier(ip);
  const emailHash = hashIdentifier(data.email);
  const rateLimitKey = `${ipHash}::${emailHash}`;

  try {
    const rl = await checkRateLimit(rateLimitKey);
    if (!rl.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: "Too many submissions. Please try again later.",
          retryAfter: rl.resetAt.toISOString(),
        },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil((rl.resetAt.getTime() - Date.now()) / 1000)) },
        },
      );
    }
  } catch (err) {
    // If rate limit infra fails, fail open but log. We don't want to block real users.
    console.error("[contact] rate-limit check failed:", err);
  }

  // 5. Persist the lead.
  try {
    const lead = await db.contactLead.create({
      data: {
        name: data.name,
        email: data.email.toLowerCase(),
        company: data.company || null,
        phone: data.phone || null,
        companySize: data.companySize || null,
        service: data.service || null,
        budgetRange: data.budgetRange || null,
        timeline: data.timeline || null,
        goal: data.goal,
        currentSystems: data.currentSystems || null,
        message: data.message || data.goal,
        ipHash,
        userAgent: request.headers.get("user-agent")?.slice(0, 255) || null,
        source: "website",
      },
    });

    // 6. (Optional) Email notification hook.
    // Wire up your email provider here (Resend, SES, Postmark, etc.).
    // We keep the integration abstracted so secrets stay server-side.
    try {
      await maybeNotifyByEmail({
        to: siteConfig.email,
        subject: `New AI inquiry — ${data.service || "General"} — ${data.name}`,
        leadId: lead.id,
        data,
      });
    } catch (err) {
      // Email is best-effort — the lead is already stored.
      console.error("[contact] email notification failed:", err);
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Thanks — your inquiry has been received. We'll respond within one business day.",
        id: lead.id,
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("[contact] failed to persist lead:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong on our side. Please try again." },
      { status: 500 },
    );
  }
}

// Lightweight health for monitoring.
export async function GET() {
  return NextResponse.json({ ok: true, endpoint: "contact" });
}

/**
 * Email provider integration point.
 *
 * Replace this with your provider call (Resend, SES, Postmark, etc.).
 * The function receives already-validated data and never exposes secrets.
 *
 * Example (Resend):
 *   import { Resend } from 'resend';
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ from, to, subject, html });
 *
 * Until configured, this is a no-op that logs server-side only.
 */
async function maybeNotifyByEmail(args: {
  to: string;
  subject: string;
  leadId: string;
  data: {
    name: string;
    email: string;
    company?: string;
    service?: string;
    goal: string;
  };
}) {
  if (!process.env.EMAIL_PROVIDER_ENABLED) {
    // No provider configured — log and exit cleanly.
    if (process.env.NODE_ENV !== "production") {
      console.log(`[contact] new lead ${args.leadId} for ${args.to}`);
    }
    return;
  }

  // When a provider is configured, implement the actual send here.
  // Secrets MUST come from environment variables only.
}
