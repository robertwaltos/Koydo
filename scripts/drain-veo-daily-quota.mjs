#!/usr/bin/env node

/**
 * Daily Veo quota drainer.
 *
 * Purpose:
 * - Generate videos continuously with Veo until quota/rate limits stop progress.
 * - Detect daily quota exhaustion from 429 responses and persist discovered limits.
 * - Save artifacts + run report for automation visibility.
 *
 * Primary prompt source:
 * - public/LESSON-MEDIA-PROMPT-PACK.json (seedanceVideo, fallback to lessonImage)
 *
 * Usage:
 *   node scripts/drain-veo-daily-quota.mjs
 *   node scripts/drain-veo-daily-quota.mjs --model veo-3.1-fast-generate-preview --duration-seconds 4
 *   node scripts/drain-veo-daily-quota.mjs --dry-run --max-requests 5
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const DEFAULT_MODEL = "veo-3.1-fast-generate-preview";
const DEFAULT_ASPECT_RATIO = "16:9";
const DEFAULT_DURATION_SECONDS = 4;
const DEFAULT_DELAY_MS = 1500;
const DEFAULT_MAX_REQUESTS = 300;
const DEFAULT_MAX_RUNTIME_MINUTES = 120;
const DEFAULT_POLL_INTERVAL_MS = 12000;
const DEFAULT_POLL_TIMEOUT_MS = 12 * 60 * 1000;
const DEFAULT_MAX_CONSECUTIVE_429 = 3;
const DEFAULT_OUTPUT_DIR = "public/generated-videos/daily-veo-drain";
const DEFAULT_REPORT_PATH = "public/DAILY-VEO-DRAIN-REPORT.json";
const PROMPT_PACK_PATH = "public/LESSON-MEDIA-PROMPT-PACK.json";

const STYLE_VARIANTS = [
  "smooth cinematic camera movement with stable composition",
  "clean educational motion graphic style without text overlays",
  "high-clarity instructional visualization with calm pacing",
  "premium classroom-safe animation style, no logos",
  "scientifically grounded visual narrative with gentle transitions",
];

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const raw = fs.readFileSync(filePath, "utf8");
  const values = {};

  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex <= 0) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^(['"])(.*)\1$/, "$2");
    values[key] = value;
  }

  return values;
}

function parseNumber(input, fallback) {
  const value = Number(input);
  return Number.isFinite(value) ? value : fallback;
}

function parseArgs(argv) {
  const options = {
    model: DEFAULT_MODEL,
    aspectRatio: DEFAULT_ASPECT_RATIO,
    durationSeconds: DEFAULT_DURATION_SECONDS,
    delayMs: DEFAULT_DELAY_MS,
    maxRequests: DEFAULT_MAX_REQUESTS,
    maxRuntimeMinutes: DEFAULT_MAX_RUNTIME_MINUTES,
    pollIntervalMs: DEFAULT_POLL_INTERVAL_MS,
    pollTimeoutMs: DEFAULT_POLL_TIMEOUT_MS,
    maxConsecutive429: DEFAULT_MAX_CONSECUTIVE_429,
    outputDir: path.resolve(DEFAULT_OUTPUT_DIR),
    reportPath: path.resolve(DEFAULT_REPORT_PATH),
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--model" && argv[i + 1]) {
      options.model = String(argv[i + 1]);
      i += 1;
    } else if (arg === "--aspect-ratio" && argv[i + 1]) {
      options.aspectRatio = String(argv[i + 1]);
      i += 1;
    } else if (arg === "--duration-seconds" && argv[i + 1]) {
      const candidate = parseInt(argv[i + 1], 10);
      options.durationSeconds = [4, 6, 8].includes(candidate)
        ? candidate
        : DEFAULT_DURATION_SECONDS;
      i += 1;
    } else if (arg === "--delay-ms" && argv[i + 1]) {
      options.delayMs = Math.max(0, parseInt(argv[i + 1], 10) || DEFAULT_DELAY_MS);
      i += 1;
    } else if (arg === "--max-requests" && argv[i + 1]) {
      options.maxRequests = Math.max(1, parseInt(argv[i + 1], 10) || DEFAULT_MAX_REQUESTS);
      i += 1;
    } else if (arg === "--max-runtime-minutes" && argv[i + 1]) {
      options.maxRuntimeMinutes = Math.max(
        1,
        parseNumber(argv[i + 1], DEFAULT_MAX_RUNTIME_MINUTES),
      );
      i += 1;
    } else if (arg === "--poll-interval-ms" && argv[i + 1]) {
      options.pollIntervalMs = Math.max(
        1000,
        parseInt(argv[i + 1], 10) || DEFAULT_POLL_INTERVAL_MS,
      );
      i += 1;
    } else if (arg === "--poll-timeout-ms" && argv[i + 1]) {
      options.pollTimeoutMs = Math.max(
        10000,
        parseInt(argv[i + 1], 10) || DEFAULT_POLL_TIMEOUT_MS,
      );
      i += 1;
    } else if (arg === "--max-consecutive-429" && argv[i + 1]) {
      options.maxConsecutive429 = Math.max(
        1,
        parseInt(argv[i + 1], 10) || DEFAULT_MAX_CONSECUTIVE_429,
      );
      i += 1;
    } else if (arg === "--output-dir" && argv[i + 1]) {
      options.outputDir = path.resolve(argv[i + 1]);
      i += 1;
    } else if (arg === "--report-path" && argv[i + 1]) {
      options.reportPath = path.resolve(argv[i + 1]);
      i += 1;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--help" || arg === "-h") {
      console.log("Usage: node scripts/drain-veo-daily-quota.mjs [options]");
      console.log("Options:");
      console.log(`  --model <name>                 Default: ${DEFAULT_MODEL}`);
      console.log(`  --aspect-ratio <value>         Default: ${DEFAULT_ASPECT_RATIO}`);
      console.log("  --duration-seconds <4|6|8>     Default: 4");
      console.log(`  --delay-ms <n>                 Default: ${DEFAULT_DELAY_MS}`);
      console.log(`  --max-requests <n>             Default: ${DEFAULT_MAX_REQUESTS}`);
      console.log(`  --max-runtime-minutes <n>      Default: ${DEFAULT_MAX_RUNTIME_MINUTES}`);
      console.log(`  --poll-interval-ms <n>         Default: ${DEFAULT_POLL_INTERVAL_MS}`);
      console.log(`  --poll-timeout-ms <n>          Default: ${DEFAULT_POLL_TIMEOUT_MS}`);
      console.log(`  --max-consecutive-429 <n>      Default: ${DEFAULT_MAX_CONSECUTIVE_429}`);
      console.log(`  --output-dir <path>            Default: ${DEFAULT_OUTPUT_DIR}`);
      console.log(`  --report-path <path>           Default: ${DEFAULT_REPORT_PATH}`);
      console.log("  --dry-run                      Print plan only");
      process.exit(0);
    }
  }

  return options;
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function maskKey(apiKey) {
  if (!apiKey || apiKey.length < 12) return "missing";
  return `${apiKey.slice(0, 6)}...${apiKey.slice(-4)}`;
}

function sanitizeSlug(value) {
  return value.replace(/[^a-zA-Z0-9_-]/g, "_").slice(0, 80);
}

function loadPromptPool() {
  const fallbackPrompts = [
    {
      id: "fallback-solar-video",
      prompt: "A smooth educational flythrough of the solar system emphasizing relative planet scale and orbital spacing.",
    },
    {
      id: "fallback-cell-video",
      prompt: "A calm educational journey through a living cell showing organelles and molecular transport.",
    },
  ];

  if (!fs.existsSync(PROMPT_PACK_PATH)) {
    return fallbackPrompts;
  }

  try {
    const pack = JSON.parse(fs.readFileSync(PROMPT_PACK_PATH, "utf8"));
    const candidates = [];

    for (const moduleEntry of pack.modules ?? []) {
      for (const lesson of moduleEntry.lessons ?? []) {
        const promptCandidate =
          lesson?.prompts?.seedanceVideo || lesson?.prompts?.lessonImage || null;
        if (!promptCandidate || typeof promptCandidate !== "string") continue;

        candidates.push({
          id: `${moduleEntry.moduleId}-${lesson.lessonId}`,
          prompt: promptCandidate.trim(),
        });
      }
    }

    const deduped = [];
    const seen = new Set();
    for (const entry of candidates) {
      const hash = crypto.createHash("sha1").update(entry.prompt).digest("hex");
      if (seen.has(hash)) continue;
      seen.add(hash);
      deduped.push(entry);
    }

    return deduped.length > 0 ? deduped : fallbackPrompts;
  } catch {
    return fallbackPrompts;
  }
}

function buildPromptVariant(basePrompt, sequence) {
  const style = STYLE_VARIANTS[sequence % STYLE_VARIANTS.length];
  return [
    basePrompt,
    `Style directive: ${style}.`,
    "No text overlays, no logos, no watermarks, no copyrighted characters.",
    "Classroom-safe educational visual motion.",
  ].join(" ");
}

function parseQuotaError(errorPayload, fallbackText = "") {
  const message = String(errorPayload?.error?.message || fallbackText || "");
  const detail = Array.isArray(errorPayload?.error?.details)
    ? errorPayload.error.details.find((item) => item && typeof item === "object")
    : null;
  const metadata = detail?.metadata && typeof detail.metadata === "object" ? detail.metadata : {};

  const metricFromMessage = /metric:\s*([^,\n]+)/i.exec(message)?.[1]?.trim();
  const limitFromMessage = /limit:\s*(\d+)/i.exec(message)?.[1];
  const modelFromMessage = /model:\s*([a-zA-Z0-9._:-]+)/i.exec(message)?.[1];

  const metric =
    String(metadata.metric ?? metadata.quota_metric ?? metricFromMessage ?? "").trim() || null;
  const limit = parseNumber(metadata.limit ?? limitFromMessage, NaN);
  const model = String(metadata.model ?? modelFromMessage ?? "").trim() || null;
  const isDailyMetric =
    Boolean(metric && /per_day/i.test(metric)) || /per_day/i.test(message);

  return {
    statusCode: Number(errorPayload?.error?.code || NaN),
    errorStatus: String(errorPayload?.error?.status || ""),
    message,
    metric,
    limit: Number.isFinite(limit) ? limit : null,
    model,
    isDailyMetric,
  };
}

async function startVeoOperation({
  apiKey,
  model,
  prompt,
  aspectRatio,
  durationSeconds,
}) {
  const url = `${GEMINI_BASE}/models/${model}:predictLongRunning?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        aspectRatio,
        personGeneration: "allow_all",
        durationSeconds,
        sampleCount: 1,
      },
    }),
  });

  const text = await response.text().catch(() => "");
  let payload = null;
  try {
    payload = JSON.parse(text);
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const error = new Error(
      `Veo start ${response.status}: ${payload?.error?.message ?? text.slice(0, 500)}`,
    );
    error.responseStatus = response.status;
    error.responsePayload = payload;
    error.responseText = text;
    throw error;
  }

  const operationName = payload?.name;
  if (!operationName) {
    throw new Error("Veo start succeeded but no operation name was returned");
  }

  return operationName;
}

async function pollVeoOperation({
  apiKey,
  operationName,
  pollIntervalMs,
  pollTimeoutMs,
}) {
  const started = Date.now();
  const url = `${GEMINI_BASE}/${operationName}?key=${apiKey}`;

  while (Date.now() - started < pollTimeoutMs) {
    const response = await fetch(url);
    const text = await response.text().catch(() => "");
    let payload = null;
    try {
      payload = JSON.parse(text);
    } catch {
      payload = null;
    }

    if (!response.ok) {
      const error = new Error(
        `Veo poll ${response.status}: ${payload?.error?.message ?? text.slice(0, 500)}`,
      );
      error.responseStatus = response.status;
      error.responsePayload = payload;
      error.responseText = text;
      throw error;
    }

    if (payload?.done) {
      const video = payload?.response?.generateVideoResponse?.generatedSamples?.[0]?.video;
      const b64 = video?.bytesBase64Encoded;
      if (b64) {
        return Buffer.from(b64, "base64");
      }

      const uri = video?.uri;
      if (!uri) {
        throw new Error("Veo operation completed without video bytes or URI");
      }

      let mediaResponse = await fetch(uri);
      if (!mediaResponse.ok && !uri.includes("key=")) {
        const separator = uri.includes("?") ? "&" : "?";
        mediaResponse = await fetch(`${uri}${separator}key=${apiKey}`);
      }
      if (!mediaResponse.ok) {
        const mediaText = await mediaResponse.text().catch(() => "");
        throw new Error(`Veo media download ${mediaResponse.status}: ${mediaText.slice(0, 500)}`);
      }

      const arrayBuffer = await mediaResponse.arrayBuffer();
      return Buffer.from(arrayBuffer);
    }

    await sleep(pollIntervalMs);
  }

  throw new Error(`Veo poll timed out after ${pollTimeoutMs}ms`);
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const envFromFile = {
    ...parseEnvFile(path.resolve(".env")),
    ...parseEnvFile(path.resolve(".env.local")),
  };

  const apiKey = process.env.GOOGLE_API_KEY || envFromFile.GOOGLE_API_KEY || "";
  if (!apiKey) {
    console.log("[skip] GOOGLE_API_KEY not found. Nothing to drain.");
    return;
  }

  const promptPool = loadPromptPool();
  ensureDir(options.outputDir);
  ensureDir(path.dirname(options.reportPath));

  const report = {
    generatedAt: new Date().toISOString(),
    date: new Date().toISOString().slice(0, 10),
    model: options.model,
    aspectRatio: options.aspectRatio,
    durationSeconds: options.durationSeconds,
    apiKey: maskKey(apiKey),
    sourcePromptCount: promptPool.length,
    options: {
      delayMs: options.delayMs,
      maxRequests: options.maxRequests,
      maxRuntimeMinutes: options.maxRuntimeMinutes,
      pollIntervalMs: options.pollIntervalMs,
      pollTimeoutMs: options.pollTimeoutMs,
      maxConsecutive429: options.maxConsecutive429,
      outputDir: options.outputDir,
      dryRun: options.dryRun,
    },
    attempts: 0,
    generatedCount: 0,
    dailyQuotaDiscovered: null,
    quotaMetric: null,
    stopReason: null,
    elapsedSeconds: 0,
    samples: [],
    errors: [],
  };

  console.log("═══════════════════════════════════════════════════════════");
  console.log(" Daily Veo Quota Drainer");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(
    `Model: ${options.model} (${options.durationSeconds}s) | Key: ${maskKey(apiKey)} | Prompt pool: ${promptPool.length}`,
  );
  console.log(
    `Max requests: ${options.maxRequests} | Runtime cap: ${options.maxRuntimeMinutes}m | Delay: ${options.delayMs}ms`,
  );
  if (options.dryRun) console.log("Mode: DRY RUN");
  console.log("");

  const startedAt = Date.now();
  const maxRuntimeMs = options.maxRuntimeMinutes * 60 * 1000;
  let promptIndex = 0;
  let consecutive429 = 0;

  while (report.attempts < options.maxRequests) {
    if (Date.now() - startedAt >= maxRuntimeMs) {
      report.stopReason = "max_runtime_reached";
      break;
    }

    const promptEntry = promptPool[promptIndex % promptPool.length];
    promptIndex += 1;
    report.attempts += 1;

    const prompt = buildPromptVariant(promptEntry.prompt, report.attempts);
    const fileId = sanitizeSlug(promptEntry.id || `item-${report.attempts}`);
    const filename = `${new Date().toISOString().replace(/[:.]/g, "-")}_${fileId}_${report.attempts}.mp4`;
    const outputPath = path.join(options.outputDir, filename);
    const outputUrl = outputPath.split(path.sep).join("/");

    if (options.dryRun) {
      report.generatedCount += 1;
      if (report.samples.length < 5) {
        report.samples.push({
          id: promptEntry.id,
          outputPath: outputUrl,
          dryRun: true,
        });
      }
      console.log(`[${report.attempts}] dry-run ${promptEntry.id}`);
      continue;
    }

    try {
      const operationName = await startVeoOperation({
        apiKey,
        model: options.model,
        prompt,
        aspectRatio: options.aspectRatio,
        durationSeconds: options.durationSeconds,
      });
      console.log(`[${report.attempts}] started operation: ${operationName}`);

      const videoBuffer = await pollVeoOperation({
        apiKey,
        operationName,
        pollIntervalMs: options.pollIntervalMs,
        pollTimeoutMs: options.pollTimeoutMs,
      });

      fs.writeFileSync(outputPath, videoBuffer);
      report.generatedCount += 1;
      consecutive429 = 0;
      if (report.samples.length < 15) {
        report.samples.push({
          id: promptEntry.id,
          outputPath: outputUrl,
          operationName,
          generatedAt: new Date().toISOString(),
        });
      }

      if (options.delayMs > 0) {
        await sleep(options.delayMs);
      }
    } catch (error) {
      const statusCode = Number(error.responseStatus || NaN);
      const parsed = parseQuotaError(error.responsePayload, error.responseText || error.message);

      if (statusCode === 429 && parsed.isDailyMetric) {
        report.dailyQuotaDiscovered = parsed.limit;
        report.quotaMetric = parsed.metric;
        report.stopReason = "daily_quota_exhausted";
        report.errors.push({
          atAttempt: report.attempts,
          statusCode: 429,
          errorStatus: parsed.errorStatus,
          metric: parsed.metric,
          limit: parsed.limit,
          message: parsed.message.slice(0, 400),
        });
        console.log(
          `[quota] daily quota exhausted (metric=${parsed.metric || "unknown"}, limit=${parsed.limit ?? "unknown"})`,
        );
        break;
      }

      if (statusCode === 429) {
        consecutive429 += 1;
        report.errors.push({
          atAttempt: report.attempts,
          statusCode: 429,
          errorStatus: parsed.errorStatus,
          metric: parsed.metric,
          limit: parsed.limit,
          consecutive429,
          message: parsed.message.slice(0, 300),
        });
        if (consecutive429 >= options.maxConsecutive429) {
          report.stopReason = "quota_or_rate_exhausted_unknown";
          report.quotaMetric = parsed.metric;
          if (parsed.limit != null) {
            report.dailyQuotaDiscovered = parsed.limit;
          }
          console.log(
            `[quota] repeated 429 responses (${consecutive429}) with no detailed metric; stopping run`,
          );
          break;
        }

        console.log("[rate-limit] non-daily 429 detected; backing off 30s and retrying");
        await sleep(30_000);
        continue;
      }

      report.errors.push({
        atAttempt: report.attempts,
        statusCode: Number.isFinite(statusCode) ? statusCode : null,
        message: String(error.message || error).slice(0, 400),
      });
      console.log(`[warn] attempt ${report.attempts} failed: ${String(error.message || error).slice(0, 200)}`);

      if (report.errors.length >= 5) {
        report.stopReason = "too_many_errors";
        break;
      }
    }
  }

  if (!report.stopReason) {
    report.stopReason = "max_requests_reached";
  }

  report.generatedAt = new Date().toISOString();
  report.elapsedSeconds = Math.round((Date.now() - startedAt) / 1000);
  fs.writeFileSync(options.reportPath, JSON.stringify(report, null, 2));

  console.log("");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(" Drain Summary");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`Generated this run: ${report.generatedCount}`);
  console.log(`Attempts:           ${report.attempts}`);
  console.log(`Stop reason:        ${report.stopReason}`);
  console.log(`Daily limit found:  ${report.dailyQuotaDiscovered ?? "not discovered"}`);
  console.log(`Quota metric:       ${report.quotaMetric ?? "n/a"}`);
  console.log(`Report:             ${options.reportPath}`);
}

main().catch((error) => {
  console.error("[fatal]", error?.message || error);
  process.exit(1);
});
