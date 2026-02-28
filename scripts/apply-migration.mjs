/**
 * apply-migration.mjs
 * Applies a .sql migration file to Supabase.
 *
 * Strategy 1 (preferred): Management API via SUPABASE_ACCESS_TOKEN in .env
 * Strategy 2 (fallback):  Direct pg connection via POSTGRES_URL or SUPABASE_DB_PASSWORD
 *
 * Usage:
 *   node scripts/apply-migration.mjs <path-to-sql-file>
 *   node scripts/apply-migration.mjs <path-to-sql-file> --dry-run
 *
 * Get a personal access token at: https://app.supabase.com/account/tokens
 */
import fs from "node:fs";
import path from "node:path";
import pg from "pg";

const { Client } = pg;

// ── env ─────────────────────────────────────────────────────────────────────
const envRaw = fs.readFileSync(".env", "utf8");
const env = {};
for (const line of envRaw.split(/\r?\n/)) {
  const t = line.trim();
  if (!t || t.startsWith("#")) continue;
  const i = t.indexOf("=");
  if (i > 0) {
    let val = t.slice(i + 1).trim();
    if (val.length >= 2 && ((val[0] === '"' && val[val.length-1] === '"') || (val[0] === "'" && val[val.length-1] === "'"))) {
      val = val.slice(1, -1);
    }
    env[t.slice(0, i).trim()] = val;
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || "";
const dbPassword = process.env.SUPABASE_DB_PASSWORD || env.SUPABASE_DB_PASSWORD || "";
const accessToken = process.env.SUPABASE_ACCESS_TOKEN || env.SUPABASE_ACCESS_TOKEN || "";
const postgresUrl = process.env.POSTGRES_URL || env.POSTGRES_URL || process.env.DATABASE_URL || env.DATABASE_URL || "";
const refMatch = supabaseUrl.match(/https:\/\/([a-z0-9]+)\.supabase\.co/);
const projectRef = refMatch?.[1];

const sqlFile = process.argv[2];
const DRY_RUN = process.argv.includes("--dry-run");

if (!sqlFile) {
  console.error("Usage: node scripts/apply-migration.mjs <path-to-sql> [--dry-run]");
  process.exit(1);
}

if (!projectRef) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL in .env");
  process.exit(1);
}

const sql = fs.readFileSync(path.resolve(sqlFile), "utf8").trim();

console.log(`=== APPLY MIGRATION${DRY_RUN ? " [DRY RUN]" : ""} ===`);
console.log(`File:    ${sqlFile}`);
console.log(`Project: ${projectRef}`);
console.log(`\nSQL:\n${sql}\n`);

if (DRY_RUN) {
  console.log("[DRY RUN] No changes applied. Remove --dry-run to execute.");
  process.exit(0);
}

// ── Strategy 1: Management API (requires SUPABASE_ACCESS_TOKEN) ──────────────
if (accessToken) {
  const apiUrl = `https://api.supabase.com/v1/projects/${projectRef}/database/query`;
  console.log(`Using Management API (SUPABASE_ACCESS_TOKEN)...`);
  const resp = await fetch(apiUrl, {
    method: "POST",
    headers: { "Authorization": `Bearer ${accessToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query: sql }),
  });
  const body = await resp.text();
  if (resp.ok) {
    console.log("✔ Migration applied successfully.");
    try { const j = JSON.parse(body); if (j.length) console.log("Result:", j); } catch { /**/ }
    process.exit(0);
  }
  console.error(`API error ${resp.status}: ${body}`);
  process.exit(1);
}

// ── Strategy 2: Direct DB via POSTGRES_URL or DB password ────────────────────
if (!postgresUrl && !dbPassword) {
  console.error("No SUPABASE_ACCESS_TOKEN, POSTGRES_URL, or SUPABASE_DB_PASSWORD found in .env.");
  console.error("Set SUPABASE_ACCESS_TOKEN in .env (get one at https://app.supabase.com/account/tokens).");
  process.exit(1);
}
const host = `db.${projectRef}.supabase.co`;
const client = postgresUrl
  ? new Client({ connectionString: postgresUrl, ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 15000 })
  : new Client({ host, port: 5432, database: "postgres", user: "postgres", password: dbPassword, ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 15000 });

console.log(postgresUrl ? `Connecting via POSTGRES_URL...` : `Connecting to ${host}:5432...`);
await client.connect();
console.log("Connected.");

try {
  const result = await client.query(sql);
  console.log("✔ Migration applied successfully.");
  if (Array.isArray(result)) {
    for (const r of result) if (r.command) console.log(" ", r.command);
  } else if (result.command) {
    console.log(" ", result.command);
  }
} finally {
  await client.end();
}

