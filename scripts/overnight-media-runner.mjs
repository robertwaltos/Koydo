/**
 * overnight-media-runner.mjs
 *
 * Runs ALL queued media jobs on the local GPU overnight with:
 *  - ComfyUI health checks + automatic restart on crash
 *  - Bounded batches with configurable sleep between them
 *  - Stuck-job reset before every pass
 *  - Separate image pass → video pass sequencing
 *  - One retry sweep for failed jobs once each round
 *  - Graceful SIGINT / SIGTERM shutdown (returns running → queued)
 *  - Full timestamped log to /tmp/overnight-runner.log
 *
 * Usage (from WSL or PowerShell cwd = koydo-web/):
 *   node scripts/overnight-media-runner.mjs [options]
 *
 * Options:
 *   --batch-size <n>         Jobs per pass (default: 25)
 *   --sleep-secs <n>         Seconds to sleep between batches (default: 15)
 *   --max-hours <n>          Hard stop after N hours (default: 10)
 *   --comfy-url <url>        ComfyUI base URL (default: http://127.0.0.1:8188)
 *   --comfy-script <path>    Shell script to restart ComfyUI (default: /mnt/d/PythonProjects/Koydo/start_comfyui.sh)
 *   --comfy-boot-secs <n>    Seconds to wait after starting ComfyUI (default: 180)
 *   --mode <image|video|all> Limit to one asset type (default: all)
 *   --skip-video             Only process images — skip video stage entirely
 *   --dry-run                Print plan without executing any jobs
 *
 * One-liner to run overnight in WSL background:
 *   wsl bash -c "cd /mnt/d/PythonProjects/Koydo/koydo-web && nohup node scripts/overnight-media-runner.mjs > /tmp/overnight.log 2>&1 & disown; echo OVERNIGHT_PID:\$!"
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

// ---------------------------------------------------------------------------
// Logging
// ---------------------------------------------------------------------------

const LOG_FILE = "/tmp/overnight-runner.log";

function ts() {
  return new Date().toISOString().replace("T", " ").slice(0, 19);
}

function log(msg) {
  const line = `[${ts()}] ${msg}`;
  console.log(line);
  // Append to log file (best-effort — may not be writable on Windows)
  try {
    fs.appendFileSync(LOG_FILE, line + "\n");
  } catch {
    // non-fatal
  }
}

function logSection(title) {
  const bar = "═".repeat(60);
  log(bar);
  log(`  ${title}`);
  log(bar);
}

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const opts = {
    batchSize: 25,
    sleepSecs: 15,
    maxHours: 10,
    comfyUrl: "http://127.0.0.1:8188",
    comfyScript: "/mnt/d/PythonProjects/Koydo/start_comfyui.sh",
    comfyBootSecs: 180,
    mode: "all", // all | image | video
    skipVideo: false,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--batch-size" && argv[i + 1]) { opts.batchSize = Math.max(1, parseInt(argv[++i], 10) || 25); continue; }
    if (arg === "--sleep-secs" && argv[i + 1]) { opts.sleepSecs = Math.max(0, parseInt(argv[++i], 10) || 15); continue; }
    if (arg === "--max-hours" && argv[i + 1]) { opts.maxHours = Math.max(0.1, parseFloat(argv[++i]) || 10); continue; }
    if (arg === "--comfy-url" && argv[i + 1]) { opts.comfyUrl = argv[++i]; continue; }
    if (arg === "--comfy-script" && argv[i + 1]) { opts.comfyScript = argv[++i]; continue; }
    if (arg === "--comfy-boot-secs" && argv[i + 1]) { opts.comfyBootSecs = Math.max(30, parseInt(argv[++i], 10) || 180); continue; }
    if (arg === "--mode" && argv[i + 1]) { opts.mode = argv[++i]; continue; }
    if (arg === "--skip-video") { opts.skipVideo = true; continue; }
    if (arg === "--dry-run") { opts.dryRun = true; continue; }
  }
  return opts;
}

// ---------------------------------------------------------------------------
// Env / Supabase
// ---------------------------------------------------------------------------

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
    const rawVal = trimmed.slice(sep + 1).trim();
    values[key] = rawVal.replace(/^(['"])(.*)\1$/, "$2");
  }
  return values;
}

// ---------------------------------------------------------------------------
// Sleep
// ---------------------------------------------------------------------------

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ---------------------------------------------------------------------------
// ComfyUI health check
// ---------------------------------------------------------------------------

async function isComfyUIAlive(comfyUrl) {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch(`${comfyUrl}/queue`, { signal: ctrl.signal });
    clearTimeout(timer);
    return res.ok;
  } catch {
    return false;
  }
}

async function waitForComfyUI(comfyUrl, maxMs) {
  const deadline = Date.now() + maxMs;
  while (Date.now() < deadline) {
    if (await isComfyUIAlive(comfyUrl)) return true;
    await sleep(10000);
  }
  return false;
}

async function ensureComfyUI(comfyUrl, comfyScript, bootSecs, dryRun) {
  if (await isComfyUIAlive(comfyUrl)) {
    log("ComfyUI health: OK");
    return true;
  }

  log(`ComfyUI not responding at ${comfyUrl} — attempting restart...`);
  if (dryRun) {
    log("[dry-run] Would start ComfyUI via: bash " + comfyScript);
    return false;
  }

  if (!fs.existsSync(comfyScript)) {
    log(`ERROR: ComfyUI start script not found: ${comfyScript}`);
    return false;
  }

  try {
    spawnSync("bash", [comfyScript], { stdio: "inherit" });
  } catch (e) {
    log(`ERROR launching ComfyUI script: ${e.message}`);
    return false;
  }

  log(`ComfyUI started — waiting up to ${bootSecs}s for it to become ready...`);
  const ready = await waitForComfyUI(comfyUrl, bootSecs * 1000);
  if (ready) {
    log("ComfyUI is ready.");
    return true;
  }

  log("ERROR: ComfyUI did not become ready in time.");
  return false;
}

// ---------------------------------------------------------------------------
// Queue stats from Supabase
// ---------------------------------------------------------------------------

async function getQueueStats(supabase) {
  const [queuedImages, queuedVideos, failedImages, failedVideos, runningAll] = await Promise.all([
    supabase.from("media_generation_jobs").select("id", { count: "exact", head: true }).eq("status", "queued").eq("asset_type", "image"),
    supabase.from("media_generation_jobs").select("id", { count: "exact", head: true }).eq("status", "queued").eq("asset_type", "video"),
    supabase.from("media_generation_jobs").select("id", { count: "exact", head: true }).eq("status", "failed").eq("asset_type", "image"),
    supabase.from("media_generation_jobs").select("id", { count: "exact", head: true }).eq("status", "failed").eq("asset_type", "video"),
    supabase.from("media_generation_jobs").select("id", { count: "exact", head: true }).eq("status", "running"),
  ]);
  return {
    queued: { image: queuedImages.count ?? 0, video: queuedVideos.count ?? 0 },
    failed: { image: failedImages.count ?? 0, video: failedVideos.count ?? 0 },
    running: runningAll.count ?? 0,
  };
}

// ---------------------------------------------------------------------------
// Reset stuck running jobs (mark running → queued)
// ---------------------------------------------------------------------------

async function resetStuckJobs(supabase, staleMinutes = 60) {
  const cutoff = new Date(Date.now() - staleMinutes * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from("media_generation_jobs")
    .update({ status: "queued", error: null })
    .eq("status", "running")
    .lt("updated_at", cutoff)
    .select("id");

  if (error) {
    log(`WARN: reset stuck jobs error: ${error.message}`);
    return 0;
  }
  const count = data?.length ?? 0;
  if (count > 0) log(`Reset ${count} stuck running jobs (older than ${staleMinutes}m) → queued`);
  return count;
}

// ---------------------------------------------------------------------------
// Retry failed jobs
// ---------------------------------------------------------------------------

async function retryFailedJobs(supabase, assetTypes, limit) {
  const { data, error } = await supabase
    .from("media_generation_jobs")
    .update({ status: "queued", error: null })
    .eq("status", "failed")
    .in("asset_type", assetTypes)
    .limit(limit)
    .select("id");

  if (error) {
    log(`WARN: retry failed jobs error: ${error.message}`);
    return 0;
  }
  const count = data?.length ?? 0;
  if (count > 0) log(`Re-queued ${count} failed jobs for retry`);
  return count;
}

// ---------------------------------------------------------------------------
// Run one batch via child process
// ---------------------------------------------------------------------------

function runBatch(mode, batchSize, envPath, dryRun) {
  const scriptPath = path.resolve("scripts/process-media-jobs.mjs");
  const args = [scriptPath, "--mode", mode, "--limit", String(batchSize)];

  log(`→ Running batch: node process-media-jobs.mjs --mode ${mode} --limit ${batchSize}`);

  if (dryRun) {
    log("[dry-run] Skipping actual execution.");
    return { success: true, exitCode: 0 };
  }

  const result = spawnSync(process.execPath, args, {
    stdio: "inherit",
    cwd: path.resolve("."),
    env: { ...process.env },
    timeout: 45 * 60 * 1000, // 45-minute hard timeout per batch
  });

  if (result.error) {
    log(`ERROR running batch: ${result.error.message}`);
    return { success: false, exitCode: 1 };
  }

  if (result.status !== 0) {
    log(`Batch exited with code ${result.status}`);
    return { success: false, exitCode: result.status ?? 1 };
  }

  return { success: true, exitCode: 0 };
}

// ---------------------------------------------------------------------------
// Main loop
// ---------------------------------------------------------------------------

let shutdownRequested = false;

process.on("SIGINT", () => {
  log("Received SIGINT — requesting graceful shutdown after current batch...");
  shutdownRequested = true;
});
process.on("SIGTERM", () => {
  log("Received SIGTERM — requesting graceful shutdown after current batch...");
  shutdownRequested = true;
});

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const envValues = parseEnvFile(path.resolve(".env"));

  const supabaseUrl = envValues.NEXT_PUBLIC_SUPABASE_URL || envValues.EXPO_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = envValues.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.error("FATAL: Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env");
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, serviceKey);
  const startTime = Date.now();
  const maxMs = opts.maxHours * 60 * 60 * 1000;

  // ── Boot summary ─────────────────────────────────────────────────────────
  logSection("OVERNIGHT MEDIA RUNNER — START");
  log(`Config: batch=${opts.batchSize} sleep=${opts.sleepSecs}s maxHours=${opts.maxHours} mode=${opts.mode} skipVideo=${opts.skipVideo} dryRun=${opts.dryRun}`);
  log(`ComfyUI: ${opts.comfyUrl}`);
  log(`Hard stop at: ${new Date(startTime + maxMs).toISOString()}`);

  const statsInit = await getQueueStats(supabase);
  log(`Initial queue — images: ${statsInit.queued.image} queued / ${statsInit.failed.image} failed | videos: ${statsInit.queued.video} queued / ${statsInit.failed.video} failed | running: ${statsInit.running}`);

  if (opts.dryRun) log("[dry-run] DRY-RUN MODE — no jobs will actually be processed");

  // ── Overall tracking ──────────────────────────────────────────────────────
  let totalBatches = 0;
  let totalSuccessBatches = 0;
  let totalFailedBatches = 0;
  let comfyRestartCount = 0;
  let consecutiveComfyFailures = 0;

  // Determine pass order based on --mode
  const doImages = opts.mode === "all" || opts.mode === "image";
  const doVideos = (opts.mode === "all" || opts.mode === "video") && !opts.skipVideo;

  // ── Phase 1: IMAGE PASS ───────────────────────────────────────────────────
  if (doImages) {
    logSection("PHASE 1 — IMAGE GENERATION");
    let imagePassNum = 0;

    while (!shutdownRequested && Date.now() - startTime < maxMs) {
      // Time check
      const elapsed = Date.now() - startTime;
      const remaining = maxMs - elapsed;
      log(`Time remaining: ${Math.round(remaining / 60000)}m`);

      // Stats check
      const stats = await getQueueStats(supabase);
      log(`Queue: ${stats.queued.image} image queued | ${stats.failed.image} failed | ${stats.running} running`);

      if (stats.queued.image === 0 && stats.failed.image === 0) {
        log("All image jobs done — exiting image phase.");
        break;
      }

      // Reset stuck jobs every pass
      await resetStuckJobs(supabase, 60);

      // Retry failed images (once per 5 passes to avoid tight loop)
      if (imagePassNum % 5 === 0 && stats.failed.image > 0) {
        const retriedCount = await retryFailedJobs(supabase, ["image"], opts.batchSize);
        if (retriedCount > 0) log(`Retried ${retriedCount} failed image jobs`);
      }

      // Ensure ComfyUI is alive
      const comfyOk = await ensureComfyUI(opts.comfyUrl, opts.comfyScript, opts.comfyBootSecs, opts.dryRun);
      if (!comfyOk) {
        consecutiveComfyFailures++;
        if (consecutiveComfyFailures >= 3) {
          log("ERROR: ComfyUI failed to start 3 times — aborting runner.");
          break;
        }
        log(`ComfyUI unavailable (attempt ${consecutiveComfyFailures}/3) — waiting 120s before retry...`);
        await sleep(120_000);
        continue;
      }
      consecutiveComfyFailures = 0;

      // Run the batch
      imagePassNum++;
      totalBatches++;
      log(`─── Image pass #${imagePassNum} ───`);
      const result = runBatch("image", opts.batchSize, path.resolve(".env"), opts.dryRun);
      if (result.success) {
        totalSuccessBatches++;
      } else {
        totalFailedBatches++;
        log(`Batch failed (exit ${result.exitCode}) — will pause ${opts.sleepSecs * 2}s before retry`);
        await sleep(opts.sleepSecs * 2 * 1000);
        continue;
      }

      // Sleep between batches
      if (opts.sleepSecs > 0 && !shutdownRequested) {
        log(`Sleeping ${opts.sleepSecs}s...`);
        await sleep(opts.sleepSecs * 1000);
      }
    }

    // Final retry sweep for any remaining failed images
    if (!shutdownRequested) {
      const stats = await getQueueStats(supabase);
      if (stats.failed.image > 0) {
        log(`Final image retry sweep: ${stats.failed.image} failed jobs`);
        await retryFailedJobs(supabase, ["image"], opts.batchSize * 2);
        await sleep(5000);
        runBatch("image", opts.batchSize, path.resolve(".env"), opts.dryRun);
      }
    }
  }

  // ── Phase 2: VIDEO PASS ───────────────────────────────────────────────────
  if (doVideos && !shutdownRequested && Date.now() - startTime < maxMs) {
    logSection("PHASE 2 — VIDEO GENERATION (Wan I2V)");
    let videoPassNum = 0;

    while (!shutdownRequested && Date.now() - startTime < maxMs) {
      const elapsed = Date.now() - startTime;
      const remaining = maxMs - elapsed;
      log(`Time remaining: ${Math.round(remaining / 60000)}m`);

      const stats = await getQueueStats(supabase);
      log(`Queue: ${stats.queued.video} video queued | ${stats.failed.video} failed | ${stats.running} running`);

      if (stats.queued.video === 0 && stats.failed.video === 0) {
        log("All video jobs done — exiting video phase.");
        break;
      }

      await resetStuckJobs(supabase, 90); // longer timeout for video (WanI2V is slow)

      if (videoPassNum % 5 === 0 && stats.failed.video > 0) {
        const retriedCount = await retryFailedJobs(supabase, ["video"], opts.batchSize);
        if (retriedCount > 0) log(`Retried ${retriedCount} failed video jobs`);
      }

      const comfyOk = await ensureComfyUI(opts.comfyUrl, opts.comfyScript, opts.comfyBootSecs, opts.dryRun);
      if (!comfyOk) {
        consecutiveComfyFailures++;
        if (consecutiveComfyFailures >= 3) {
          log("ERROR: ComfyUI failed to start 3 times — aborting runner.");
          break;
        }
        await sleep(120_000);
        continue;
      }
      consecutiveComfyFailures = 0;

      videoPassNum++;
      totalBatches++;
      log(`─── Video pass #${videoPassNum} ───`);
      const result = runBatch("video", opts.batchSize, path.resolve(".env"), opts.dryRun);
      if (result.success) {
        totalSuccessBatches++;
      } else {
        totalFailedBatches++;
        log(`Video batch failed — pausing ${opts.sleepSecs * 2}s...`);
        await sleep(opts.sleepSecs * 2 * 1000);
        continue;
      }

      if (opts.sleepSecs > 0 && !shutdownRequested) {
        log(`Sleeping ${opts.sleepSecs}s...`);
        await sleep(opts.sleepSecs * 1000);
      }
    }
  }

  // ── Final summary ─────────────────────────────────────────────────────────
  const totalMs = Date.now() - startTime;
  const statsEnd = await getQueueStats(supabase);
  logSection("OVERNIGHT RUNNER — COMPLETE");
  log(`Runtime: ${Math.round(totalMs / 60000)} minutes`);
  log(`Batches: ${totalBatches} total | ${totalSuccessBatches} successful | ${totalFailedBatches} failed`);
  log(`ComfyUI restarts: ${comfyRestartCount}`);
  log(`Final queue — images: ${statsEnd.queued.image} queued / ${statsEnd.failed.image} failed | videos: ${statsEnd.queued.video} queued / ${statsEnd.failed.video} failed`);
  if (shutdownRequested) log("Stopped by user request (SIGINT/SIGTERM).");
  else if (Date.now() - startTime >= maxMs) log(`Stopped: max runtime of ${opts.maxHours}h reached.`);
  else log("Stopped: queue fully drained.");
  log(`Full log at: ${LOG_FILE}`);
}

main().catch((err) => {
  log(`FATAL: ${err.message || err}`);
  process.exit(1);
});
