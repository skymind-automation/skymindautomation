import type { ContactFormValues } from "@/lib/validations/contact";

// resend.dev can only deliver to the Resend account's own address. Once the
// domain is verified in Resend, set LEAD_ALERT_FROM to an address on it.
const DEFAULT_FROM = "SkyMind Automation <onboarding@resend.dev>";

type LeadAlertEnv = Pick<CloudflareEnv, "RESEND_API_KEY" | "LEAD_ALERT_TO" | "LEAD_ALERT_FROM">;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const FIELDS: [keyof ContactFormValues, string][] = [
  ["name", "Name"],
  ["email", "Email"],
  ["company", "Company"],
  ["phone", "Phone"],
  ["companySize", "Company size"],
  ["service", "Service"],
  ["budgetRange", "Budget"],
  ["timeline", "Timeline"],
  ["goal", "Goal"],
  ["currentSystems", "Current systems"],
  ["message", "Message"],
];

export async function sendLeadAlert(env: LeadAlertEnv, lead: ContactFormValues, leadId: string) {
  if (!env.RESEND_API_KEY || !env.LEAD_ALERT_TO) {
    console.warn(`[lead-alert] not configured; lead ${leadId} is stored but no alert was sent`);
    return;
  }

  const rows = FIELDS.filter(([key]) => lead[key]).map(([key, label]) => [label, String(lead[key])]);
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n\n") + `\n\nLead ID: ${leadId}`;
  const html =
    `<table cellpadding="8" style="border-collapse:collapse;font:14px/1.5 system-ui,sans-serif">` +
    rows
      .map(
        ([label, value]) =>
          `<tr><td style="vertical-align:top;color:#666;white-space:nowrap">${label}</td>` +
          `<td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
      )
      .join("") +
    `</table><p style="color:#999;font:12px system-ui,sans-serif">Lead ID: ${leadId}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: env.LEAD_ALERT_FROM || DEFAULT_FROM,
      to: [env.LEAD_ALERT_TO],
      reply_to: lead.email,
      subject: `New inquiry: ${lead.name}${lead.company ? ` (${lead.company})` : ""} — ${lead.service || "General"}`,
      text,
      html,
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    console.error(`[lead-alert] Resend rejected lead ${leadId}: ${res.status} ${await res.text()}`);
  }
}
