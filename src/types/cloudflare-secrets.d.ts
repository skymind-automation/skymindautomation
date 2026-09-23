// Worker secrets, set with `wrangler secret put` or in the dashboard. They are
// not in wrangler.jsonc, so `wrangler types` cannot generate them.
interface CloudflareEnv {
  RESEND_API_KEY?: string;
  LEAD_ALERT_TO?: string;
  LEAD_ALERT_FROM?: string;
  RATE_LIMIT_SALT?: string;
}
