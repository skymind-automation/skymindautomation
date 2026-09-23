import { getCloudflareContext } from "@opennextjs/cloudflare";

export function getEnv(): CloudflareEnv {
  return getCloudflareContext().env;
}

export function getDb(): D1Database {
  return getEnv().skymind_db;
}
