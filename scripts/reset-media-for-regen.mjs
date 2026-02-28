/**
 * reset-media-for-regen.mjs
 *
 * Prepares the pipeline for a full media regeneration run:
 *   1. Deletes all previously generated image files from public/generated-images/
 *   2. Resets DB jobs:
 *        - status=completed  (image)  → queued  (regenerate with new prompts)
 *        - status=failed     (any)    → queued  (retry)
 *        - status=running    (any)    → queued  (recover stuck)
 *      Optionally includes video jobs (--include-video).
 *
 * This is DESTRUCTIVE — run once before starting overnight-media-runner.mjs.
 *
 * Usage:
 *   node scripts/reset-media-for-regen.mjs [--include-video] [--dry-run]
 *
 * Flags:
 *   --include-video   Also reset completed/failed video jobs (default: images only)
 *   --dry-run         Print what would happen without making changes
 *   --yes             Skip confirmation prompt (for automation)
 */

import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { createClient } from "@supabase/supabase-js";

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────

function ts() {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
}

function log(msg) {
  console.log(`[${ts()}] ${msg}`);
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const values = {};
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const sep = trimmed.indexOf("=");
    if (sep <= 0) continue;
    const key = trimmed.slice(0, sep).trim();
    values[key] = trimmed.slice(sep + 1).trim().replace(/^(['"])(.*)\1$/, "$2");
  }
  return values;
}

function parseArgs(argv) {
  return {
    includeVideo: argv.includes("--include-video"),
    dryRun: argv.includes("--dry-run"),
    yes: argv.includes("--yes"),
  };
}

async function confirm(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim().toLowerCase() === "y");
    });
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// File deletion
// ──────────────────────────────────────────────────────────────────────────────

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif"]);

function deleteGeneratedImages(dryRun) {
  const dir = path.resolve("public/generated-images");
  if (!fs.existsSync(dir)) {
    log(`Directory does not exist (nothing to delete): ${dir}`);
    return 0;
  }

  const entries = fs.readdirSync(dir);
  const images = entries.filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()));

  if (images.length === 0) {
    log("public/generated-images/ is already empty.");
    return 0;
  }

  log(`Found ${images.length} image file(s) in public/generated-images/`);

  if (dryRun) {
    for (const f of images) log(`  [dry-run] would delete: ${f}`);
    return images.length;
  }

  let deleted = 0;
  for (const f of images) {
    try {
      fs.unlinkSync(path.join(dir, f));
      deleted++;
    } catch (e) {
      log(`  WARN: could not delete ${f}: ${e.message}`);
    }
  }
  log(`Deleted ${deleted}/${images.length} image files from public/generated-images/`);
  return deleted;
}

// ──────────────────────────────────────────────────────────────────────────────
// DB resets
// ──────────────────────────────────────────────────────────────────────────────

async function resetBatch(supabase, fromStatus, assetTypes, dryRun, label) {
  if (dryRun) {
    // Just count
    const { count } = await supabase
      .from("media_generation_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", fromStatus)
      .in("asset_type", assetTypes);
    log(`  [dry-run] would reset ${count ?? 0} ${label} jobs (${fromStatus} → queued)`);
    return count ?? 0;
  }

  // Reset in batches of 500 to avoid timeout
  let total = 0;
  for (;;) {
    // Fetch a batch of IDs to update (Supabase update with limit requires workaround)
    const { data: rows, error: fetchErr } = await supabase
      .from("media_generation_jobs")
      .select("id")
      .eq("status", fromStatus)
      .in("asset_type", assetTypes)
      .limit(500);

    if (fetchErr) {
      log(`  ERROR fetching ${label} jobs: ${fetchErr.message}`);
      break;
    }
    if (!rows || rows.length === 0) break;

    const ids = rows.map((r) => r.id);
    const { error: updateErr } = await supabase
      .from("media_generation_jobs")
      .update({
        status: "queued",
        error: null,
        output_url: null,
        completed_at: null,
        // Clear metadata stage so image stage runs fresh
        metadata: null,
      })
      .in("id", ids);

    if (updateErr) {
      log(`  ERROR updating ${label} jobs: ${updateErr.message}`);
      break;
    }

    total += ids.length;
    log(`  Reset ${ids.length} ${label} ${fromStatus} jobs → queued (running total: ${total})`);
    if (rows.length < 500) break; // last batch
  }
  return total;
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(path.resolve(".env"));
  const supabaseUrl = envValues.NEXT_PUBLIC_SUPABASE_URL || envValues.EXPO_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = envValues.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.error("FATAL: Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, serviceKey);
  const imageTypes = ["image"];
  const allTypes = opts.includeVideo ? ["image", "video"] : ["image"];

  // ── Current counts ────────────────────────────────────────────────────────
  const countRows = await Promise.all([
    supabase.from("media_generation_jobs").select("id", { count: "exact", head: true }).eq("status", "completed").in("asset_type", allTypes),
    supabase.from("media_generation_jobs").select("id", { count: "exact", head: true }).eq("status", "failed").in("asset_type", allTypes),
    supabase.from("media_generation_jobs").select("id", { count: "exact", head: true }).eq("status", "running").in("asset_type", allTypes),
    supabase.from("media_generation_jobs").select("id", { count: "exact", head: true }).eq("status", "queued").in("asset_type", allTypes),
  ]);

  console.log("\n════════════════════════════════════════════════════════════");
  console.log("  MEDIA REGENERATION RESET");
  console.log("════════════════════════════════════════════════════════════");
  console.log(`  Asset types:  ${allTypes.join(", ")}`);
  console.log(`  Dry-run:      ${opts.dryRun}`);
  console.log("");
  console.log("  Current DB state:");
  console.log(`    completed: ${countRows[0].count ?? "?"}`);
  console.log(`    failed:    ${countRows[1].count ?? "?"}`);
  console.log(`    running:   ${countRows[2].count ?? "?"}`);
  console.log(`    queued:    ${countRows[3].count ?? "?"} (already queued — not touched)`);
  console.log("");
  console.log("  Actions:");
  console.log("    ✦ Delete all files in public/generated-images/");
  console.log("    ✦ Reset completed image jobs    → queued (fresh generation with new prompts)");
  console.log("    ✦ Reset failed jobs             → queued (retry)");
  console.log("    ✦ Reset stuck running jobs      → queued (recover)");
  if (opts.includeVideo) {
    console.log("    ✦ Reset completed video jobs    → queued");
  }
  console.log("════════════════════════════════════════════════════════════\n");

  if (!opts.dryRun && !opts.yes) {
    const ok = await confirm("Proceed? This is destructive and cannot be undone. [y/N] ");
    if (!ok) {
      console.log("Aborted.");
      process.exit(0);
    }
  }

  // ── Step 1: delete image files ────────────────────────────────────────────
  log("Step 1: Deleting generated image files...");
  deleteGeneratedImages(opts.dryRun);

  // ── Step 2: reset completed image jobs ───────────────────────────────────
  log("Step 2: Resetting completed image jobs → queued...");
  const completedReset = await resetBatch(supabase, "completed", imageTypes, opts.dryRun, "completed image");

  // ── Step 3: reset failed jobs ─────────────────────────────────────────────
  log("Step 3: Resetting failed jobs → queued...");
  const failedReset = await resetBatch(supabase, "failed", allTypes, opts.dryRun, "failed");

  // ── Step 4: reset stuck running ───────────────────────────────────────────
  log("Step 4: Resetting stuck running jobs → queued...");
  const runningReset = await resetBatch(supabase, "running", allTypes, opts.dryRun, "running");

  // ── Step 5 (optional): reset completed video jobs ─────────────────────────
  let videoReset = 0;
  if (opts.includeVideo) {
    log("Step 5: Resetting completed video jobs → queued...");
    videoReset = await resetBatch(supabase, "completed", ["video"], opts.dryRun, "completed video");
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  console.log("\n════════════════════════════════════════════════════════════");
  console.log("  RESET COMPLETE");
  console.log("════════════════════════════════════════════════════════════");
  if (opts.dryRun) console.log("  [DRY-RUN — no changes were made]");
  console.log(`  Completed image jobs reset: ${completedReset}`);
  console.log(`  Failed jobs reset:          ${failedReset}`);
  console.log(`  Running jobs reset:         ${runningReset}`);
  if (opts.includeVideo) console.log(`  Completed video jobs reset: ${videoReset}`);
  console.log("");
  console.log("  Next step — run the overnight generator:");
  console.log("    wsl bash -c \"cd /mnt/d/PythonProjects/Koydo/koydo-web \\");
  console.log("      && nohup node scripts/overnight-media-runner.mjs \\");
  console.log("      > /tmp/overnight.log 2>&1 & disown; echo PID:\\$!\"");
  console.log("════════════════════════════════════════════════════════════\n");
}

main().catch((err) => {
  console.error("FATAL:", err.message || err);
  process.exit(1);
});
