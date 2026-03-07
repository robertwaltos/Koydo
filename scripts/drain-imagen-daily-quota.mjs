#!/usr/bin/env node

/**
 * Daily Imagen quota drainer.
 *
 * Purpose:
 * - Discover the effective daily request limit for a specific Imagen model.
 * - Generate assets continuously until daily quota is exhausted.
 * - Persist a daily report for workflow visibility.
 *
 * Primary prompt source:
 * - public/LESSON-MEDIA-PROMPT-PACK.json (lessonImage prompts)
 *
 * Usage:
 *   node scripts/drain-imagen-daily-quota.mjs
 *   node scripts/drain-imagen-daily-quota.mjs --model imagen-4.0-generate-001 --max-runtime-minutes 90
 *   node scripts/drain-imagen-daily-quota.mjs --dry-run --max-requests 20
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta";
const DEFAULT_MODEL = "imagen-4.0-generate-001";
const DEFAULT_ASPECT_RATIO = "16:9";
const DEFAULT_DELAY_MS = 750;
const DEFAULT_MAX_REQUESTS = 600;
const DEFAULT_MAX_RUNTIME_MINUTES = 120;
const DEFAULT_OUTPUT_DIR = "public/generated-images/daily-imagen-drain";
const DEFAULT_REPORT_PATH = "public/DAILY-IMAGEN-DRAIN-REPORT.json";
const PROMPT_PACK_PATH = "public/LESSON-MEDIA-PROMPT-PACK.json";

const STYLE_VARIANTS = [
  "cinematic educational visualization, no text overlays",
  "clean infographic-inspired composition, no labels",
  "studio-lit concept art, high readability",
  "isometric educational diorama, no typography",
  "premium science illustration with clear focal hierarchy",
  "minimal classroom-safe visual storytelling frame",
  "high-detail atmospheric scene, child-safe, no logos",
  "bright concept card style suitable for immersive learning UI",
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
    delayMs: DEFAULT_DELAY_MS,
    maxRequests: DEFAULT_MAX_REQUESTS,
    maxRuntimeMinutes: DEFAULT_MAX_RUNTIME_MINUTES,
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
    } else if (arg === "--output-dir" && argv[i + 1]) {
      options.outputDir = path.resolve(argv[i + 1]);
      i += 1;
    } else if (arg === "--report-path" && argv[i + 1]) {
      options.reportPath = path.resolve(argv[i + 1]);
      i += 1;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--help" || arg === "-h") {
      console.log("Usage: node scripts/drain-imagen-daily-quota.mjs [options]");
      console.log("Options:");
      console.log(`  --model <name>                 Default: ${DEFAULT_MODEL}`);
      console.log(`  --aspect-ratio <value>         Default: ${DEFAULT_ASPECT_RATIO}`);
      console.log(`  --delay-ms <n>                 Default: ${DEFAULT_DELAY_MS}`);
      console.log(`  --max-requests <n>             Default: ${DEFAULT_MAX_REQUESTS}`);
      console.log(`  --max-runtime-minutes <n>      Default: ${DEFAULT_MAX_RUNTIME_MINUTES}`);
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
      id: "fallback-solar",
      prompt: "Educational solar system cross-section with clear scale relationships and atmospheric depth. No text overlays.",
    },
    {
      id: "fallback-cell",
      prompt: "Immersive cell biology scene showing organelles as a coherent ecosystem. No text overlays.",
    },
    {
      id: "fallback-tectonics",
      prompt: "Scientific tectonic plate boundary visualization with subduction and rift dynamics. No text overlays.",
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
        const lessonPrompt = lesson?.prompts?.lessonImage;
        if (!lessonPrompt || typeof lessonPrompt !== "string") continue;

        candidates.push({
          id: `${moduleEntry.moduleId}-${lesson.lessonId}`,
          prompt: lessonPrompt.trim(),
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
    "Classroom-safe educational visual.",
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

async function generateImageWithImagen({ apiKey, model, aspectRatio, prompt }) {
  const url = `${GEMINI_BASE}/models/${model}:predict?key=${apiKey}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio,
        personGeneration: "allow_all",
        outputOptions: { mimeType: "image/png" },
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
      `Imagen ${response.status}: ${payload?.error?.message ?? text.slice(0, 500)}`,
    );
    error.responseStatus = response.status;
    error.responsePayload = payload;
    error.responseText = text;
    throw error;
  }

  const bytes = payload?.predictions?.[0]?.bytesBase64Encoded;
  if (!bytes) {
    throw new Error("Imagen response missing bytesBase64Encoded");
  }

  return Buffer.from(bytes, "base64");
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
    apiKey: maskKey(apiKey),
    sourcePromptCount: promptPool.length,
    options: {
      delayMs: options.delayMs,
      maxRequests: options.maxRequests,
      maxRuntimeMinutes: options.maxRuntimeMinutes,
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
  console.log(" Daily Imagen Quota Drainer");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(
    `Model: ${options.model} | Key: ${maskKey(apiKey)} | Prompt pool: ${promptPool.length}`,
  );
  console.log(
    `Max requests: ${options.maxRequests} | Runtime cap: ${options.maxRuntimeMinutes}m | Delay: ${options.delayMs}ms`,
  );
  if (options.dryRun) console.log("Mode: DRY RUN");
  console.log("");

  const startedAt = Date.now();
  const maxRuntimeMs = options.maxRuntimeMinutes * 60 * 1000;
  let promptIndex = 0;

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
    const filename = `${new Date().toISOString().replace(/[:.]/g, "-")}_${fileId}_${report.attempts}.png`;
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
      const imageBuffer = await generateImageWithImagen({
        apiKey,
        model: options.model,
        aspectRatio: options.aspectRatio,
        prompt,
      });

      fs.writeFileSync(outputPath, imageBuffer);
      report.generatedCount += 1;

      if (report.samples.length < 15) {
        report.samples.push({
          id: promptEntry.id,
          outputPath: outputUrl,
          generatedAt: new Date().toISOString(),
        });
      }

      if (report.generatedCount % 10 === 0) {
        console.log(`[ok] generated ${report.generatedCount} images so far`);
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
        report.errors.push({
          atAttempt: report.attempts,
          statusCode: 429,
          errorStatus: parsed.errorStatus,
          metric: parsed.metric,
          message: parsed.message.slice(0, 300),
        });
        console.log("[rate-limit] non-daily 429 detected; backing off 30s and continuing");
        await sleep(30_000);
        continue;
      }

      report.errors.push({
        atAttempt: report.attempts,
        statusCode: Number.isFinite(statusCode) ? statusCode : null,
        message: String(error.message || error).slice(0, 400),
      });

      if (report.errors.length >= 5) {
        report.stopReason = "too_many_errors";
        break;
      }
    }

    if (options.delayMs > 0) {
      await sleep(options.delayMs);
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

