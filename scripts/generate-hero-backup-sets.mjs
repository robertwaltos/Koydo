#!/usr/bin/env node

/**
 * Hero Backup Set Generator
 *
 * Generates experimental, net-new hero assets into isolated backup folders.
 * This script does not wire assets into the app; it only stages alternatives.
 *
 * Output root:
 *   public/assets/hero-backups/
 *
 * Usage:
 *   node scripts/generate-hero-backup-sets.mjs
 *   node scripts/generate-hero-backup-sets.mjs --dry-run
 *   node scripts/generate-hero-backup-sets.mjs --max-requests 20 --quality high
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const OPENAI_IMAGE_ENDPOINT = "https://api.openai.com/v1/images/generations";
const DEFAULT_MODEL = "gpt-image-1";
const DEFAULT_QUALITY = "low";
const DEFAULT_SIZE = "1536x1024";
const DEFAULT_DELAY_MS = 350;
const DEFAULT_MAX_REQUESTS = 120;
const DEFAULT_OUTPUT_ROOT = "public/assets/hero-backups";
const DEFAULT_MANIFEST_FILENAME = "HERO-BACKUP-GENERATION-MANIFEST.json";
const DEFAULT_AUDIT_FILENAME = "HERO-ASSET-NEEDS-AUDIT.md";
const DEFAULT_README_FILENAME = "README.md";

const STYLE_SETS = [
  {
    id: "set-01-organic-watercolor",
    title: "Organic Watercolor Storyworld",
    styleDirection:
      "hand-painted watercolor storyworld with soft brush texture, natural gradients, and emotionally warm scenes",
    palette: "honey gold, moss green, powder blue, and coral accents",
    composition: "curved organic flow, layered depth haze, gentle pathways and open breathing room",
    lighting: "diffuse golden-hour sunlight with low contrast shadows",
    energy: "calm wonder and inclusive discovery",
  },
  {
    id: "set-02-neon-future-stem",
    title: "Neon Future STEM City",
    styleDirection:
      "futuristic cinematic STEM cityscape with clean architectural lines, holographic motifs, and dynamic atmosphere",
    palette: "electric cyan, magenta, deep navy, and chrome highlights",
    composition: "strong perspective lines, parallax depth, and deliberate focal hierarchy",
    lighting: "night scene with neon rim lighting and volumetric fog",
    energy: "high-energy innovation and momentum",
  },
  {
    id: "set-03-minimal-geo-editorial",
    title: "Minimal Geometric Editorial",
    styleDirection:
      "bold editorial illustration using geometric forms, minimal detail density, and premium publication-style framing",
    palette: "sand, terracotta, muted teal, charcoal, and warm cream",
    composition: "asymmetric balance, large negative space, and disciplined shape language",
    lighting: "soft studio lighting with clean tonal separation",
    energy: "focused confidence and clarity",
  },
  {
    id: "set-04-tactile-papercraft",
    title: "Tactile Papercraft Collage",
    styleDirection:
      "layered paper-cut collage aesthetic with tactile edges, stacked shapes, and handcrafted dimensionality",
    palette: "playful primaries with warm neutral paper tones",
    composition: "layered planes, cast paper shadows, and clear visual landmarks",
    lighting: "softbox overhead with subtle paper depth shadows",
    energy: "playful curiosity and hands-on creativity",
  },
];

const CORE_SLOTS = [
  {
    id: "hero-home",
    filename: "hero-home.png",
    purpose:
      "primary homepage hero image for global learning platform",
    compositionHint:
      "full-bleed panoramic learning world with room for headline copy on left side",
    subjectHint:
      "diverse learners across age ranges exploring math, science, language, and creative learning motifs",
  },
  {
    id: "bg-lower-page",
    filename: "bg-lower-page.png",
    purpose:
      "persistent lower-page background image",
    compositionHint:
      "wide atmospheric environment with low visual noise and subtle details",
    subjectHint:
      "landscape or abstract learning environment without dominant foreground characters",
  },
  {
    id: "bg-auth-page",
    filename: "bg-auth-page.png",
    purpose:
      "full-page sign-in and sign-up background",
    compositionHint:
      "welcoming entry scene with clear central depth path and uncluttered mid-frame",
    subjectHint:
      "safe, calm, premium educational atmosphere signaling trust and belonging",
  },
  {
    id: "hero-auth-card",
    filename: "hero-auth-card.png",
    purpose:
      "inset auth card hero illustration",
    compositionHint:
      "focused medium-shot composition with crisp subject separation and card-friendly framing",
    subjectHint:
      "one to two learners plus mentor guidance cue, optimistic educational symbolism",
  },
];

const APP_PROFILES = [
  {
    appId: "koydo_main",
    displayName: "Koydo",
    focus: "all subjects for all ages",
    audience: "children, teens, adults, teachers, and families",
    region: "global",
    locales: ["en"],
    culturalCue: "globally inclusive and non-region-specific visual language",
  },
  {
    appId: "koydo_junior",
    displayName: "Koydo Junior",
    focus: "early math, reading, and science",
    audience: "ages 3-8",
    region: "global",
    locales: ["en", "es", "fr", "de"],
    culturalCue: "friendly playful shapes and age-appropriate exploration",
  },
  {
    appId: "koydo_sat",
    displayName: "Koydo SAT Prep",
    focus: "SAT readiness in math, reading, and science reasoning",
    audience: "ages 14-19",
    region: "us",
    locales: ["en"],
    culturalCue: "focused academic confidence and exam preparation energy",
  },
  {
    appId: "koydo_finance",
    displayName: "Koydo Finance Pro",
    focus: "finance and accounting mastery",
    audience: "older teens and adults",
    region: "global",
    locales: ["en", "es", "de", "ja", "zh"],
    culturalCue: "professional, structured, analytical visual motifs",
  },
  {
    appId: "koydo_math",
    displayName: "Koydo Math Forge",
    focus: "math skill-building from fundamentals to advanced",
    audience: "ages 8-18",
    region: "global",
    locales: ["en", "es", "fr", "de", "zh", "ja", "ko"],
    culturalCue: "visualized formulas, geometry, and problem-solving momentum",
  },
  {
    appId: "koydo_arena",
    displayName: "Koydo Arena",
    focus: "game-based learning across subjects",
    audience: "ages 5+",
    region: "global",
    locales: ["all"],
    culturalCue: "competitive but positive learning challenge atmosphere",
  },
  {
    appId: "koydo_math_es",
    displayName: "Koydo Matematicas",
    focus: "math for Spanish-speaking learners",
    audience: "ages 8-18",
    region: "latam",
    locales: ["es"],
    culturalCue: "latam-friendly classroom ambiance with modern urban warmth",
  },
  {
    appId: "koydo_exam_jp",
    displayName: "Koydo Exam JP",
    focus: "Japan exam preparation",
    audience: "ages 15-19",
    region: "jp",
    locales: ["ja"],
    culturalCue: "disciplined study atmosphere with clean Japanese contemporary design cues",
  },
  {
    appId: "koydo_junior_de",
    displayName: "Koydo Junior DE",
    focus: "early learning for German-speaking families",
    audience: "ages 3-8",
    region: "dach",
    locales: ["de"],
    culturalCue: "playful but tidy kindergarten-like visual structure",
  },
  {
    appId: "koydo_ar",
    displayName: "Koydo Arabic",
    focus: "full curriculum for Arabic-speaking learners",
    audience: "all ages",
    region: "mena",
    locales: ["ar"],
    culturalCue: "warm geometric motifs inspired by contemporary MENA design language",
  },
  {
    appId: "koydo_kr",
    displayName: "Koydo KR",
    focus: "math, science, and coding",
    audience: "ages 8-18",
    region: "kr",
    locales: ["ko"],
    culturalCue: "high-focus STEM lab aesthetic with clean modern Korean visual rhythm",
  },
  {
    appId: "koydo_hi",
    displayName: "Koydo Hindi",
    focus: "full curriculum for Hindi-speaking learners",
    audience: "all ages",
    region: "in",
    locales: ["hi", "en"],
    culturalCue: "vibrant but balanced Indian contemporary educational mood",
  },
  {
    appId: "koydo_math_zh",
    displayName: "Koydo Math ZH",
    focus: "math-focused learning for Chinese-speaking learners",
    audience: "ages 8-18",
    region: "cn",
    locales: ["zh"],
    culturalCue: "precise high-discipline math environment with modern East Asian visual precision",
  },
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
    let value = trimmed.slice(separatorIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"'))
      || (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }
  return values;
}

function parseArgs(argv) {
  const options = {
    model: DEFAULT_MODEL,
    quality: DEFAULT_QUALITY,
    size: DEFAULT_SIZE,
    outputRoot: path.resolve(DEFAULT_OUTPUT_ROOT),
    delayMs: DEFAULT_DELAY_MS,
    maxRequests: DEFAULT_MAX_REQUESTS,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--model" && argv[i + 1]) {
      options.model = String(argv[i + 1]);
      i += 1;
    } else if (arg === "--quality" && argv[i + 1]) {
      options.quality = String(argv[i + 1]);
      i += 1;
    } else if (arg === "--size" && argv[i + 1]) {
      options.size = String(argv[i + 1]);
      i += 1;
    } else if (arg === "--output-root" && argv[i + 1]) {
      options.outputRoot = path.resolve(argv[i + 1]);
      i += 1;
    } else if (arg === "--delay-ms" && argv[i + 1]) {
      const value = parseInt(argv[i + 1], 10);
      options.delayMs = Number.isFinite(value) && value >= 0 ? value : DEFAULT_DELAY_MS;
      i += 1;
    } else if (arg === "--max-requests" && argv[i + 1]) {
      const value = parseInt(argv[i + 1], 10);
      options.maxRequests = Number.isFinite(value) && value > 0 ? value : DEFAULT_MAX_REQUESTS;
      i += 1;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--help" || arg === "-h") {
      console.log("Usage: node scripts/generate-hero-backup-sets.mjs [options]");
      console.log("Options:");
      console.log(`  --model <name>          Default: ${DEFAULT_MODEL}`);
      console.log(`  --quality <low|high>    Default: ${DEFAULT_QUALITY}`);
      console.log(`  --size <WxH>            Default: ${DEFAULT_SIZE}`);
      console.log(`  --output-root <path>    Default: ${DEFAULT_OUTPUT_ROOT}`);
      console.log(`  --delay-ms <n>          Default: ${DEFAULT_DELAY_MS}`);
      console.log(`  --max-requests <n>      Default: ${DEFAULT_MAX_REQUESTS}`);
      console.log("  --dry-run               Plan only, no API calls");
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

function buildCorePrompt(set, slot) {
  return [
    `Create a premium educational app hero asset for "${slot.purpose}".`,
    `Visual family: ${set.title}.`,
    `Art direction: ${set.styleDirection}.`,
    `Palette: ${set.palette}.`,
    `Composition: ${slot.compositionHint}; ${set.composition}.`,
    `Lighting: ${set.lighting}.`,
    `Energy: ${set.energy}.`,
    `Subject: ${slot.subjectHint}.`,
    "This must be a fresh concept and must not imitate any existing Koydo media.",
    "No text overlays, no logos, no watermarks, no branded UI chrome, no copyrighted characters.",
    "Education-safe, globally inclusive, and production-quality.",
  ].join(" ");
}

function buildMicroPrompt(set, app) {
  const locales = app.locales.join(", ");
  return [
    `Create a micro-app specific home hero backup asset for "${app.displayName}" (${app.appId}).`,
    `Audience: ${app.audience}. Subject focus: ${app.focus}.`,
    `Target market: ${app.region}. Supported locales: ${locales}.`,
    `Cultural direction: ${app.culturalCue}.`,
    `Visual family: ${set.title}.`,
    `Art direction: ${set.styleDirection}.`,
    `Palette: ${set.palette}.`,
    `Composition: full-bleed landscape hero with clean copy-safe area and strong focal hierarchy; ${set.composition}.`,
    `Lighting: ${set.lighting}. Energy: ${set.energy}.`,
    "This must be a fresh concept and must not imitate any existing Koydo media.",
    "No text overlays, no logos, no watermarks, no copyrighted characters.",
    "Classroom-safe and globally respectful representation.",
  ].join(" ");
}

function buildPlan(outputRoot) {
  const items = [];
  for (const set of STYLE_SETS) {
    for (const slot of CORE_SLOTS) {
      const relativePath = path.join(set.id, "core", slot.filename);
      items.push({
        id: `${set.id}::core::${slot.id}`,
        setId: set.id,
        setTitle: set.title,
        scope: "core",
        slot: slot.id,
        appId: null,
        outputPath: path.join(outputRoot, relativePath),
        relativeOutputPath: relativePath.split(path.sep).join("/"),
        prompt: buildCorePrompt(set, slot),
      });
    }
    for (const app of APP_PROFILES) {
      const relativePath = path.join(set.id, "microapps", app.appId, "hero-home.png");
      items.push({
        id: `${set.id}::microapp::${app.appId}`,
        setId: set.id,
        setTitle: set.title,
        scope: "microapp",
        slot: "hero-home",
        appId: app.appId,
        appName: app.displayName,
        outputPath: path.join(outputRoot, relativePath),
        relativeOutputPath: relativePath.split(path.sep).join("/"),
        prompt: buildMicroPrompt(set, app),
      });
    }
  }
  return items;
}

function readManifest(manifestPath) {
  if (!fs.existsSync(manifestPath)) return null;
  try {
    return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  } catch {
    return null;
  }
}

function writeManifest(manifestPath, manifest) {
  ensureDir(path.dirname(manifestPath));
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

function writeNeedsAudit(auditPath, options, plan) {
  const coreCount = CORE_SLOTS.length * STYLE_SETS.length;
  const microCount = APP_PROFILES.length * STYLE_SETS.length;
  const totalCount = plan.length;

  const lines = [];
  lines.push("# Hero Asset Needs Audit");
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push(`Model: ${options.model}`);
  lines.push(`Quality: ${options.quality}`);
  lines.push(`Size: ${options.size}`);
  lines.push("");
  lines.push("## Current Hero Surfaces");
  lines.push("");
  lines.push("- `hero-home` - primary home hero surface");
  lines.push("- `bg-lower-page` - lower-page persistent background");
  lines.push("- `bg-auth-page` - auth full-page background");
  lines.push("- `hero-auth-card` - auth inset card hero");
  lines.push("");
  lines.push("## Micro-App / International Coverage");
  lines.push("");
  for (const app of APP_PROFILES) {
    lines.push(`- \`${app.appId}\` (${app.displayName}) - ${app.focus}; locales: ${app.locales.join(", ")}; region: ${app.region}`);
  }
  lines.push("");
  lines.push("## Backup Set Plan");
  lines.push("");
  for (const set of STYLE_SETS) {
    lines.push(`- \`${set.id}\` - ${set.title}`);
  }
  lines.push("");
  lines.push("## Counts");
  lines.push("");
  lines.push(`- Core backup assets planned: ${coreCount}`);
  lines.push(`- Micro-app/international hero assets planned: ${microCount}`);
  lines.push(`- Total planned outputs: ${totalCount}`);
  lines.push("");
  lines.push("## Notes");
  lines.push("");
  lines.push("- Assets are staged only under `public/assets/hero-backups/`.");
  lines.push("- No runtime wiring changes are made by this script.");
  lines.push("- Prompts are explicitly net-new and avoid copying current media direction.");
  lines.push("");

  ensureDir(path.dirname(auditPath));
  fs.writeFileSync(auditPath, lines.join("\n"), "utf8");
}

function writeReadme(readmePath) {
  const lines = [];
  lines.push("# Hero Backup Assets");
  lines.push("");
  lines.push("This directory contains experimental backup hero asset sets.");
  lines.push("");
  lines.push("- No files here are wired to runtime by default.");
  lines.push("- Each `set-*` folder is a distinct visual direction.");
  lines.push("- `core/` contains semantic hero slots.");
  lines.push("- `microapps/` contains per-app hero variants.");
  lines.push("");
  lines.push("Use `HERO-BACKUP-GENERATION-MANIFEST.json` for generation status and metadata.");
  lines.push("");

  fs.writeFileSync(readmePath, lines.join("\n"), "utf8");
}

async function generateImageWithOpenAi({ apiKey, model, prompt, size, quality }) {
  const response = await fetch(OPENAI_IMAGE_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt,
      n: 1,
      size,
      quality,
    }),
    signal: AbortSignal.timeout(6 * 60 * 1000),
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
      `OpenAI ${response.status}: ${payload?.error?.message ?? text.slice(0, 500)}`,
    );
    error.statusCode = response.status;
    error.errorCode = payload?.error?.code ?? null;
    error.errorType = payload?.error?.type ?? null;
    throw error;
  }

  const item = payload?.data?.[0];
  if (item?.b64_json) {
    return Buffer.from(item.b64_json, "base64");
  }
  if (item?.url) {
    const mediaResponse = await fetch(item.url);
    if (!mediaResponse.ok) {
      throw new Error(`OpenAI media fetch ${mediaResponse.status}`);
    }
    return Buffer.from(await mediaResponse.arrayBuffer());
  }
  throw new Error("OpenAI returned no image payload");
}

function normalizeError(err) {
  const statusCode = Number(err?.statusCode ?? err?.status ?? NaN);
  const errorCode = String(err?.errorCode ?? "").trim();
  const errorType = String(err?.errorType ?? "").trim();
  const message = err instanceof Error ? err.message : String(err);
  const quotaLike =
    errorCode === "insufficient_quota"
    || errorType === "insufficient_quota"
    || /insufficient[_\s-]?quota/i.test(message)
    || /you exceeded your current quota/i.test(message)
    || /billing/i.test(message);
  return {
    statusCode: Number.isFinite(statusCode) ? statusCode : null,
    errorCode: errorCode || null,
    errorType: errorType || null,
    message,
    quotaLike,
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  const envFileValues = {
    ...parseEnvFile(path.resolve(".env")),
    ...parseEnvFile(path.resolve(".env.local")),
  };
  const apiKey =
    process.env.OPENAI_MEDIA_API_KEY
    || process.env.OPENAI_API_KEY
    || envFileValues.OPENAI_MEDIA_API_KEY
    || envFileValues.OPENAI_API_KEY
    || "";

  if (!apiKey) {
    throw new Error("OPENAI_MEDIA_API_KEY / OPENAI_API_KEY not found");
  }

  const outputRoot = options.outputRoot;
  const manifestPath = path.join(outputRoot, DEFAULT_MANIFEST_FILENAME);
  const auditPath = path.join(outputRoot, DEFAULT_AUDIT_FILENAME);
  const readmePath = path.join(outputRoot, DEFAULT_README_FILENAME);
  ensureDir(outputRoot);

  const plan = buildPlan(outputRoot);
  const previousManifest = readManifest(manifestPath);
  const previousItems = new Map();
  for (const item of previousManifest?.items ?? []) {
    if (item?.id) previousItems.set(item.id, item);
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    outputRoot: outputRoot.split(path.sep).join("/"),
    apiKey: maskKey(apiKey),
    runner: {
      model: options.model,
      quality: options.quality,
      size: options.size,
      maxRequests: options.maxRequests,
      delayMs: options.delayMs,
      dryRun: options.dryRun,
    },
    sets: STYLE_SETS,
    appProfiles: APP_PROFILES,
    totals: {
      planned: plan.length,
      attempts: 0,
      completed: 0,
      skippedExisting: 0,
      failed: 0,
      dryRunPlanned: 0,
    },
    stopReason: null,
    errors: [],
    items: [],
  };

  writeNeedsAudit(auditPath, options, plan);
  writeReadme(readmePath);

  console.log("==========================================================");
  console.log(" Hero Backup Generator (Net-New Experimental Sets)");
  console.log("==========================================================");
  console.log(`Output root: ${outputRoot}`);
  console.log(`Model: ${options.model} | Quality: ${options.quality} | Size: ${options.size}`);
  console.log(`Plan size: ${plan.length} assets`);
  if (options.dryRun) console.log("Mode: DRY RUN");
  console.log("");

  for (const [index, item] of plan.entries()) {
    const promptHash = crypto.createHash("sha1").update(item.prompt).digest("hex");
    const existing = fs.existsSync(item.outputPath);

    if (existing && !options.dryRun) {
      manifest.totals.skippedExisting += 1;
      const previous = previousItems.get(item.id);
      manifest.items.push({
        id: item.id,
        setId: item.setId,
        scope: item.scope,
        slot: item.slot,
        appId: item.appId ?? null,
        appName: item.appName ?? null,
        outputPath: item.relativeOutputPath,
        promptHash,
        status: "skipped_existing",
        bytes: fs.statSync(item.outputPath).size,
        previousStatus: previous?.status ?? null,
      });
      continue;
    }

    if (manifest.totals.attempts >= options.maxRequests) {
      manifest.stopReason = "max_requests_reached";
      break;
    }

    manifest.totals.attempts += 1;
    const label = `${index + 1}/${plan.length}`;
    console.log(`[${label}] ${item.id}`);

    if (options.dryRun) {
      manifest.totals.dryRunPlanned += 1;
      manifest.items.push({
        id: item.id,
        setId: item.setId,
        scope: item.scope,
        slot: item.slot,
        appId: item.appId ?? null,
        appName: item.appName ?? null,
        outputPath: item.relativeOutputPath,
        promptHash,
        status: "dry_run",
      });
      continue;
    }

    try {
      const buffer = await generateImageWithOpenAi({
        apiKey,
        model: options.model,
        prompt: item.prompt,
        size: options.size,
        quality: options.quality,
      });
      ensureDir(path.dirname(item.outputPath));
      fs.writeFileSync(item.outputPath, buffer);
      manifest.totals.completed += 1;
      manifest.items.push({
        id: item.id,
        setId: item.setId,
        scope: item.scope,
        slot: item.slot,
        appId: item.appId ?? null,
        appName: item.appName ?? null,
        outputPath: item.relativeOutputPath,
        promptHash,
        status: "completed",
        bytes: buffer.length,
      });
      console.log(`  [ok] ${item.relativeOutputPath} (${Math.round(buffer.length / 1024)} KB)`);
    } catch (err) {
      const normalized = normalizeError(err);
      manifest.totals.failed += 1;
      manifest.errors.push({
        id: item.id,
        ...normalized,
      });
      manifest.items.push({
        id: item.id,
        setId: item.setId,
        scope: item.scope,
        slot: item.slot,
        appId: item.appId ?? null,
        appName: item.appName ?? null,
        outputPath: item.relativeOutputPath,
        promptHash,
        status: "failed",
        error: normalized.message,
      });
      console.log(`  [error] ${normalized.message}`);

      if (normalized.quotaLike || normalized.statusCode === 429) {
        manifest.stopReason = normalized.quotaLike
          ? "openai_quota_exhausted"
          : "openai_rate_limited";
        break;
      }
    }

    writeManifest(manifestPath, manifest);
    await sleep(options.delayMs);
  }

  if (!manifest.stopReason) {
    manifest.stopReason = "completed_or_skipped_all";
  }
  manifest.generatedAt = new Date().toISOString();
  writeManifest(manifestPath, manifest);

  console.log("");
  console.log("==========================================================");
  console.log(" Hero Backup Generation Summary");
  console.log("==========================================================");
  console.log(`Planned:            ${manifest.totals.planned}`);
  console.log(`Attempts:           ${manifest.totals.attempts}`);
  console.log(`Completed:          ${manifest.totals.completed}`);
  console.log(`Skipped existing:   ${manifest.totals.skippedExisting}`);
  console.log(`Failed:             ${manifest.totals.failed}`);
  if (options.dryRun) {
    console.log(`Dry-run planned:    ${manifest.totals.dryRunPlanned}`);
  }
  console.log(`Stop reason:        ${manifest.stopReason}`);
  console.log(`Manifest:           ${manifestPath}`);
  console.log(`Needs audit:        ${auditPath}`);
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Fatal: ${message}`);
  process.exitCode = 1;
});

