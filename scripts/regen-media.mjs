/**
 * regen-media.mjs
 *
 * Marks completed image and/or video jobs for regeneration using the new
 * enriched-prompt workflow.
 *
 * Strategy:
 *   - Saves the current output_url in metadata.old_output_url (old file
 *     remains accessible at that URL as fallback while regen is in progress)
 *   - Resets status → "queued" and stage → "generating_base_image"
 *   - Clears base-image refs so video jobs restart from step 1
 *   - Stamps metadata.regen_reason = "prompt_enrichment_v2" for audit trail
 *   - Does NOT touch animation jobs (TTS audio — different pipeline)
 *
 * Usage:
 *   node scripts/regen-media.mjs                 # dry-run preview
 *   node scripts/regen-media.mjs --apply         # write to DB
 *   node scripts/regen-media.mjs --asset image   # images only
 *   node scripts/regen-media.mjs --asset video   # videos only
 *   node scripts/regen-media.mjs --apply --asset image
 */

import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const envPath = path.resolve(".env");

function parseArgs(argv) {
  const options = { apply: false, asset: "all" };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--apply") options.apply = true;
    if (argv[i] === "--asset" && argv[i + 1]) options.asset = argv[++i];
  }
  if (!["all", "image", "video"].includes(options.asset)) {
    console.error(`Invalid --asset "${options.asset}". Use image|video|all.`);
    process.exit(1);
  }
  return options;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const env = {};
  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i > 0) env[t.slice(0, i).trim()] = t.slice(i + 1).trim().replace(/^(['"])(.*)\1$/, "$2");
  }
  return env;
}

async function fetchCompletedJobs(supabase, assetTypes) {
  const jobs = [];
  let lastId = null;

  while (true) {
    let q = supabase
      .from("media_generation_jobs")
      .select("id, asset_type, output_url, metadata")
      .eq("status", "completed")
      .in("asset_type", assetTypes)
      .order("id", { ascending: true })
      .limit(500);
    if (lastId) q = q.gt("id", lastId);

    const { data, error } = await q;
    if (error) throw new Error(`Fetch error: ${error.message}`);
    if (!data || data.length === 0) break;
    jobs.push(...data);
    lastId = data[data.length - 1].id;
    if (data.length < 500) break;
  }

  return jobs;
}

function buildResetPayload(job, nowIso) {
  const oldMeta = job.metadata && typeof job.metadata === "object" ? job.metadata : {};

  // Preserve old output URL as fallback reference
  const oldOutputUrl = job.output_url ?? oldMeta.old_output_url ?? null;

  const newMeta = {
    ...oldMeta,
    // Archive old output
    old_output_url: oldOutputUrl,
    old_output_archived_at: nowIso,
    regen_reason: "prompt_enrichment_v2",
    regen_queued_at: nowIso,
    // Clear active generation state — force restart from base image
    stage: "generating_base_image",
    base_image_filename: null,
    base_image_subfolder: null,
    base_image_type: null,
    base_image_ref: null,
    base_image_url: null,
    visual_prompt: null,
    image_provider: null,
  };

  return {
    status: "queued",
    output_url: null,
    completed_at: null,
    metadata: newMeta,
  };
}

async function applyInChunks(supabase, jobs, chunkSize = 50) {
  const nowIso = new Date().toISOString();
  let done = 0;
  let errors = 0;

  for (let i = 0; i < jobs.length; i += chunkSize) {
    const chunk = jobs.slice(i, i + chunkSize);
    await Promise.all(
      chunk.map(async (job) => {
        const payload = buildResetPayload(job, nowIso);
        const { error } = await supabase
          .from("media_generation_jobs")
          .update(payload)
          .eq("id", job.id)
          .eq("status", "completed"); // safety: only reset if still completed
        if (error) {
          console.error(`  [FAIL] ${job.id}: ${error.message}`);
          errors++;
        } else {
          done++;
        }
      }),
    );
    process.stdout.write(`\r  Updated ${done}/${jobs.length} ...`);
  }

  console.log(""); // newline after progress
  return { done, errors };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const env = parseEnvFile(envPath);

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.EXPO_PUBLIC_SUPABASE_URL ||
    env.NEXT_PUBLIC_SUPABASE_URL || env.EXPO_PUBLIC_SUPABASE_URL;
  const serviceKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const assetTypes = options.asset === "all" ? ["image", "video"] : [options.asset];

  console.log(`Fetching completed ${assetTypes.join("/")} jobs...`);
  const jobs = await fetchCompletedJobs(supabase, assetTypes);
  console.log(`Found ${jobs.length} completed jobs to reset.`);

  // Show breakdown
  const byType = {};
  const byProvider = {};
  for (const j of jobs) {
    byType[j.asset_type] = (byType[j.asset_type] ?? 0) + 1;
    const provider = j.metadata?.image_provider ?? "unknown";
    byProvider[provider] = (byProvider[provider] ?? 0) + 1;
  }
  console.log(
    `  By type: ${Object.entries(byType).map(([k, v]) => `${k}=${v}`).join(", ")}`,
  );
  console.log(
    `  By provider: ${Object.entries(byProvider).map(([k, v]) => `${k}=${v}`).join(", ")}`,
  );

  if (jobs.length === 0) {
    console.log("Nothing to regenerate.");
    return;
  }

  // Preview a few
  console.log("\nSample jobs to reset:");
  for (const j of jobs.slice(0, 5)) {
    const oldUrl = (j.output_url ?? "none").slice(0, 90);
    console.log(`  [${j.asset_type}] ${j.id}`);
    console.log(`    current output_url: ${oldUrl}`);
    console.log(`    → will be archived to metadata.old_output_url`);
  }

  if (!options.apply) {
    console.log(`\nDry-run complete. ${jobs.length} jobs would be reset to queued.`);
    console.log("Run with --apply to write changes.");
    return;
  }

  console.log(`\nApplying reset to ${jobs.length} jobs...`);
  const { done, errors } = await applyInChunks(supabase, jobs);

  console.log(`\n=== regen-media summary ===`);
  console.log(`Reset to queued: ${done}`);
  if (errors > 0) console.log(`Errors: ${errors}`);
  console.log(`Old output_url archived in metadata.old_output_url on each job.`);
  console.log(`The overnight runner will now regenerate all ${done} jobs with enriched prompts.`);
}

main().catch((err) => {
  console.error("Fatal:", err instanceof Error ? err.message : err);
  process.exit(1);
});
