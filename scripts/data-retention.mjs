#!/usr/bin/env node
/**
 * data-retention.mjs
 * ──────────────────
 * Automated data-retention cleanup for Koydo.
 *
 * Retention windows (configurable via app_settings):
 *   • learning_events  → data_retention_learning_events_days  (default 365)
 *   • ai_tutor_conversations → data_retention_ai_conversations_days (default 90)
 *   • ai_moderation_log → data_retention_moderation_log_days   (default 90)
 *   • telemetry_events  → data_retention_telemetry_days        (default 90)
 *   • admin_action_logs → never deleted (compliance)
 *   • soft-deleted profiles (deleted_at) → data_retention_soft_delete_days (default 7)
 *
 * Usage:
 *   node scripts/data-retention.mjs                  # dry-run
 *   node scripts/data-retention.mjs --apply           # actually delete
 *   node scripts/data-retention.mjs --apply --verbose  # with row-level logging
 *   node scripts/data-retention.mjs --help
 */

import { createClient } from "@supabase/supabase-js";

/* ──────────── Defaults ──────────── */
const DEFAULTS = {
  learning_events_days: 365,
  ai_conversations_days: 90,
  moderation_log_days: 90,
  soft_delete_days: 7,
};

const MAX_DELETE_PER_TABLE = 5000;

/* ──────────── CLI parsing ──────────── */
function printUsage() {
  console.log("Usage: node scripts/data-retention.mjs [options]");
  console.log("");
  console.log("Options:");
  console.log("  --apply      Perform deletions (default is dry-run)");
  console.log("  --verbose    Show extra detail");
  console.log("  --help       Show this help");
}

function parseArgs(argv) {
  const opts = { apply: false, verbose: false };
  for (const arg of argv) {
    if (arg === "--apply") opts.apply = true;
    else if (arg === "--verbose") opts.verbose = true;
    else if (arg === "--help" || arg === "-h") { printUsage(); process.exit(0); }
  }
  return opts;
}

/* ──────────── Supabase admin client ──────────── */
function createAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

/* ──────────── Setting resolution ──────────── */
async function resolveRetentionDays(admin, key, fallback) {
  const { data } = await admin
    .from("app_settings")
    .select("value")
    .eq("key", key)
    .maybeSingle();
  if (data?.value !== undefined && data.value !== null) {
    const v = typeof data.value === "object" ? data.value : Number(data.value);
    if (typeof v === "number" && Number.isFinite(v) && v > 0) return v;
  }
  return fallback;
}

/* ──────────── Core purge ──────────── */
async function purgeTable(admin, { table, dateColumn, retentionDays, extraFilters, apply, verbose }) {
  const cutoff = new Date(Date.now() - retentionDays * 86_400_000).toISOString();

  // Count
  let countQuery = admin
    .from(table)
    .select("id", { count: "exact", head: true })
    .lt(dateColumn, cutoff);
  if (extraFilters) countQuery = extraFilters(countQuery);
  const { count, error: countErr } = await countQuery;
  if (countErr) {
    // Table might not exist yet
    if (countErr.message?.includes("does not exist") || countErr.message?.includes("relation")) {
      console.log(`  ⏭  ${table} — table not found, skipping.`);
      return { table, counted: 0, deleted: 0, skipped: true };
    }
    throw new Error(`Count failed on ${table}: ${countErr.message}`);
  }

  const eligible = count ?? 0;
  console.log(`  📊 ${table}: ${eligible} rows older than ${retentionDays}d (cutoff ${cutoff.slice(0, 10)})`);

  if (!apply || eligible === 0) {
    return { table, counted: eligible, deleted: 0, skipped: !apply };
  }

  // Delete in batches
  let totalDeleted = 0;
  let batchNum = 0;
  while (totalDeleted < eligible && totalDeleted < MAX_DELETE_PER_TABLE) {
    batchNum++;
    let delQuery = admin
      .from(table)
      .delete({ count: "exact" })
      .lt(dateColumn, cutoff)
      .limit(500);
    if (extraFilters) delQuery = extraFilters(delQuery);
    const { count: deleted, error: delErr } = await delQuery;
    if (delErr) throw new Error(`Delete batch ${batchNum} on ${table}: ${delErr.message}`);
    const batchDeleted = deleted ?? 0;
    totalDeleted += batchDeleted;
    if (verbose) console.log(`    batch ${batchNum}: deleted ${batchDeleted}`);
    if (batchDeleted === 0) break;
  }

  console.log(`  🗑  ${table}: deleted ${totalDeleted} rows.`);
  return { table, counted: eligible, deleted: totalDeleted, skipped: false };
}

/* ──────────── Hard-delete soft-deleted profiles ──────────── */
async function purgeSoftDeletedProfiles(admin, retentionDays, apply, verbose) {
  const cutoff = new Date(Date.now() - retentionDays * 86_400_000).toISOString();

  const { count, error: countErr } = await admin
    .from("user_profiles")
    .select("user_id", { count: "exact", head: true })
    .not("deleted_at", "is", null)
    .lt("deleted_at", cutoff);

  if (countErr) {
    if (countErr.message?.includes("deleted_at")) {
      console.log("  ⏭  user_profiles.deleted_at column not found, skipping.");
      return { table: "user_profiles (soft-delete)", counted: 0, deleted: 0, skipped: true };
    }
    throw countErr;
  }

  const eligible = count ?? 0;
  console.log(`  📊 user_profiles (soft-deleted): ${eligible} rows past ${retentionDays}d grace`);

  if (!apply || eligible === 0) {
    return { table: "user_profiles (soft-delete)", counted: eligible, deleted: 0, skipped: !apply };
  }

  const { count: deleted, error: delErr } = await admin
    .from("user_profiles")
    .delete({ count: "exact" })
    .not("deleted_at", "is", null)
    .lt("deleted_at", cutoff)
    .limit(MAX_DELETE_PER_TABLE);

  if (delErr) throw delErr;

  const d = deleted ?? 0;
  console.log(`  🗑  user_profiles (soft-deleted): hard-deleted ${d} rows.`);
  return { table: "user_profiles (soft-delete)", counted: eligible, deleted: d, skipped: false };
}

/* ──────────── Main ──────────── */
async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const admin = createAdmin();

  console.log(`\n🔒  Koydo Data Retention — ${opts.apply ? "APPLY MODE" : "DRY RUN"}`);
  console.log(`    ${new Date().toISOString()}\n`);

  // Resolve retention windows from app_settings
  const learningDays = await resolveRetentionDays(admin, "data_retention_learning_events_days", DEFAULTS.learning_events_days);
  const aiConvoDays = await resolveRetentionDays(admin, "data_retention_ai_conversations_days", DEFAULTS.ai_conversations_days);
  const modLogDays = await resolveRetentionDays(admin, "data_retention_moderation_log_days", DEFAULTS.moderation_log_days);
  const softDelDays = await resolveRetentionDays(admin, "data_retention_soft_delete_days", DEFAULTS.soft_delete_days);

  const results = [];

  results.push(await purgeTable(admin, {
    table: "learning_events",
    dateColumn: "event_at",
    retentionDays: learningDays,
    apply: opts.apply,
    verbose: opts.verbose,
  }));

  results.push(await purgeTable(admin, {
    table: "ai_tutor_conversations",
    dateColumn: "created_at",
    retentionDays: aiConvoDays,
    apply: opts.apply,
    verbose: opts.verbose,
  }));

  results.push(await purgeTable(admin, {
    table: "ai_moderation_log",
    dateColumn: "created_at",
    retentionDays: modLogDays,
    apply: opts.apply,
    verbose: opts.verbose,
  }));

  results.push(await purgeSoftDeletedProfiles(admin, softDelDays, opts.apply, opts.verbose));

  // Log the run
  try {
    await admin.from("data_retention_runs").insert({
      run_type: "scheduled",
      status: "completed",
      rows_deleted: Object.fromEntries(results.map((r) => [r.table, r.deleted])),
    });
  } catch (e) {
    console.warn("  ⚠  Could not log retention run:", e.message);
  }

  // Summary
  console.log("\n── Summary ──");
  for (const r of results) {
    const tag = r.skipped ? "skip" : r.deleted > 0 ? `deleted ${r.deleted}` : "0 deleted";
    console.log(`  ${r.table}: ${r.counted} eligible → ${tag}`);
  }

  const totalDeleted = results.reduce((sum, r) => sum + r.deleted, 0);
  console.log(`\n✅  Total rows deleted: ${totalDeleted}\n`);
}

main().catch((err) => {
  console.error("❌  Data retention failed:", err);
  process.exit(1);
});
