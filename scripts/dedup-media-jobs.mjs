/**
 * dedup-media-jobs.mjs
 *
 * Finds duplicate media_generation_jobs rows (same asset_type + lesson_id)
 * and deletes all but the NEWEST row per combo.
 *
 * Usage:
 *   node scripts/dedup-media-jobs.mjs              # dry run
 *   node scripts/dedup-media-jobs.mjs --apply      # live delete
 *   node scripts/dedup-media-jobs.mjs --asset animation  # scope to asset type
 */
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

// ── env ──────────────────────────────────────────────────────────────────────
const envPath = path.resolve(".env");
const env = {};
for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
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
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });

// ── args ─────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const DRY_RUN = !args.includes("--apply");
const ASSET_FILTER = (() => {
  const idx = args.indexOf("--asset");
  return idx >= 0 ? args[idx + 1] : null;
})();

console.log(`=== DEDUP MEDIA JOBS ${DRY_RUN ? "[DRY RUN]" : "[LIVE]"} ===`);
if (ASSET_FILTER) console.log(`Asset filter: ${ASSET_FILTER}`);
if (DRY_RUN) console.log("Pass --apply to delete duplicates.\n");

// ── paginated fetch ───────────────────────────────────────────────────────────
const PAGE = 1000;
const allRows = [];
let lastId = "00000000-0000-0000-0000-000000000000";
let page = 0;

while (true) {
  let q = supabase
    .from("media_generation_jobs")
    .select("id, asset_type, lesson_id, module_id, status, created_at")
    .gt("id", lastId)
    .order("id", { ascending: true })
    .limit(PAGE);

  if (ASSET_FILTER) q = q.eq("asset_type", ASSET_FILTER);

  const { data, error } = await q;
  if (error) { console.error("Fetch error:", JSON.stringify(error)); process.exit(1); }
  if (!data || data.length === 0) break;

  allRows.push(...data);
  lastId = data[data.length - 1].id;
  page++;
  process.stdout.write(`\rFetched ${allRows.length} rows...`);
  if (data.length < PAGE) break;
}
console.log(`\nTotal rows fetched: ${allRows.length}`);

// ── find dupes ────────────────────────────────────────────────────────────────
// Group by asset_type::lesson_id (module_id may be null — normalize to empty string)
const groups = new Map();
for (const row of allRows) {
  const k = `${row.asset_type}::${row.lesson_id ?? ""}`;
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push(row);
}

const toDelete = [];
let dupeGroups = 0;

for (const [key, rows] of groups) {
  if (rows.length <= 1) continue;
  dupeGroups++;

  // Keep the newest row (latest created_at). If tie, keep by id sort descending.
  rows.sort((a, b) => {
    const tDiff = new Date(b.created_at) - new Date(a.created_at);
    if (tDiff !== 0) return tDiff;
    return b.id > a.id ? 1 : -1;
  });

  const keep = rows[0];
  const del = rows.slice(1);
  toDelete.push(...del.map(r => r.id));

  if (dupeGroups <= 20 || DRY_RUN) {
    console.log(`  DUPE [${key}]: ${rows.length} rows → keep ${keep.id} (${keep.status} @ ${keep.created_at?.slice(0, 10)}), delete ${del.length}`);
  }
}

console.log(`\nDuplicate groups: ${dupeGroups}`);
console.log(`Rows to delete:   ${toDelete.length}`);

if (toDelete.length === 0) {
  console.log("Nothing to delete. DB is clean.");
  process.exit(0);
}

if (DRY_RUN) {
  console.log("\n[DRY RUN] No changes made. Re-run with --apply to delete.");
  process.exit(0);
}

// ── delete in batches ─────────────────────────────────────────────────────────
const BATCH = 200;
let deleted = 0;

for (let i = 0; i < toDelete.length; i += BATCH) {
  const batch = toDelete.slice(i, i + BATCH);
  const { error } = await supabase
    .from("media_generation_jobs")
    .delete()
    .in("id", batch);

  if (error) {
    console.error(`Delete error at batch ${i / BATCH + 1}:`, JSON.stringify(error));
    process.exit(1);
  }
  deleted += batch.length;
  process.stdout.write(`\rDeleted ${deleted} / ${toDelete.length}...`);
}

console.log(`\n\nDeleted ${deleted} duplicate rows.`);
console.log("=== DONE ===");
