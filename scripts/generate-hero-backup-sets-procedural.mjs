#!/usr/bin/env node

/**
 * Procedural Hero Backup Generator
 *
 * Creates net-new experimental hero assets without external APIs.
 * Output only; does not wire any asset into runtime.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const DEFAULT_SIZE = "1536x1024";
const DEFAULT_MAX_REQUESTS = 200;
const DEFAULT_OUTPUT_ROOT = "public/assets/hero-backups";
const MANIFEST_FILENAME = "HERO-BACKUP-PROCEDURAL-MANIFEST.json";

const STYLE_SETS = [
  {
    id: "set-01-organic-watercolor",
    title: "Organic Watercolor Storyworld",
    background: ["#fff5db", "#d8efda", "#d9e9ff"],
    accents: ["#f2a65a", "#7db46c", "#6ea9d4", "#f08080"],
    motif: "organic",
  },
  {
    id: "set-02-neon-future-stem",
    title: "Neon Future STEM City",
    background: ["#060b26", "#151a46", "#0a1238"],
    accents: ["#22d3ee", "#f472b6", "#60a5fa", "#c084fc"],
    motif: "neon",
  },
  {
    id: "set-03-minimal-geo-editorial",
    title: "Minimal Geometric Editorial",
    background: ["#f4ecdf", "#e7dac8", "#f8f2e8"],
    accents: ["#d97757", "#4f7f76", "#3f3d3a", "#c6a86b"],
    motif: "geo",
  },
  {
    id: "set-04-tactile-papercraft",
    title: "Tactile Papercraft Collage",
    background: ["#f7efe3", "#efe3d1", "#f9f5ed"],
    accents: ["#ef4444", "#3b82f6", "#f59e0b", "#16a34a"],
    motif: "paper",
  },
];

const CORE_SLOTS = [
  { id: "hero-home", filename: "hero-home.png" },
  { id: "bg-lower-page", filename: "bg-lower-page.png" },
  { id: "bg-auth-page", filename: "bg-auth-page.png" },
  { id: "hero-auth-card", filename: "hero-auth-card.png" },
];

const APP_PROFILES = [
  { appId: "koydo_main", displayName: "Koydo" },
  { appId: "koydo_junior", displayName: "Koydo Junior" },
  { appId: "koydo_sat", displayName: "Koydo SAT Prep" },
  { appId: "koydo_finance", displayName: "Koydo Finance Pro" },
  { appId: "koydo_math", displayName: "Koydo Math Forge" },
  { appId: "koydo_arena", displayName: "Koydo Arena" },
  { appId: "koydo_math_es", displayName: "Koydo Matematicas" },
  { appId: "koydo_exam_jp", displayName: "Koydo Exam JP" },
  { appId: "koydo_junior_de", displayName: "Koydo Junior DE" },
  { appId: "koydo_ar", displayName: "Koydo Arabic" },
  { appId: "koydo_kr", displayName: "Koydo KR" },
  { appId: "koydo_hi", displayName: "Koydo Hindi" },
  { appId: "koydo_math_zh", displayName: "Koydo Math ZH" },
];

function parseArgs(argv) {
  const opts = {
    outputRoot: path.resolve(DEFAULT_OUTPUT_ROOT),
    size: DEFAULT_SIZE,
    maxRequests: DEFAULT_MAX_REQUESTS,
    dryRun: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--output-root" && argv[i + 1]) {
      opts.outputRoot = path.resolve(argv[i + 1]);
      i += 1;
    } else if (arg === "--size" && argv[i + 1]) {
      opts.size = String(argv[i + 1]);
      i += 1;
    } else if (arg === "--max-requests" && argv[i + 1]) {
      const value = parseInt(argv[i + 1], 10);
      opts.maxRequests = Number.isFinite(value) && value > 0 ? value : DEFAULT_MAX_REQUESTS;
      i += 1;
    } else if (arg === "--dry-run") {
      opts.dryRun = true;
    } else if (arg === "--help" || arg === "-h") {
      console.log("Usage: node scripts/generate-hero-backup-sets-procedural.mjs [options]");
      console.log(`  --output-root <path>   Default: ${DEFAULT_OUTPUT_ROOT}`);
      console.log(`  --size <WxH>           Default: ${DEFAULT_SIZE}`);
      console.log(`  --max-requests <n>     Default: ${DEFAULT_MAX_REQUESTS}`);
      console.log("  --dry-run              Plan only");
      process.exit(0);
    }
  }
  return opts;
}

function parseSize(size) {
  const m = /^(\d{3,5})x(\d{3,5})$/i.exec(size.trim());
  if (!m) return { width: 1536, height: 1024 };
  return { width: parseInt(m[1], 10), height: parseInt(m[2], 10) };
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function seededRng(seedText) {
  const hash = crypto.createHash("sha256").update(seedText).digest();
  let state = hash.readUInt32LE(0);
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
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
      });
    }
  }
  return items;
}

function buildSlotOverlay(slot, width, height, colorA, colorB) {
  if (slot === "hero-home") {
    return `
      <circle cx="${width * 0.68}" cy="${height * 0.5}" r="${Math.round(height * 0.23)}" fill="${colorA}" fill-opacity="0.22"/>
      <circle cx="${width * 0.68}" cy="${height * 0.5}" r="${Math.round(height * 0.16)}" fill="${colorB}" fill-opacity="0.25"/>
    `;
  }
  if (slot === "bg-lower-page") {
    return `
      <path d="M0 ${Math.round(height * 0.78)} C ${Math.round(width * 0.18)} ${Math.round(height * 0.72)}, ${Math.round(width * 0.35)} ${Math.round(height * 0.9)}, ${Math.round(width * 0.52)} ${Math.round(height * 0.8)} C ${Math.round(width * 0.68)} ${Math.round(height * 0.7)}, ${Math.round(width * 0.82)} ${Math.round(height * 0.9)}, ${width} ${Math.round(height * 0.78)} L ${width} ${height} L 0 ${height} Z" fill="${colorA}" fill-opacity="0.2"/>
    `;
  }
  if (slot === "bg-auth-page") {
    return `
      <path d="M${Math.round(width * 0.5)} ${Math.round(height * 0.12)} L${Math.round(width * 0.6)} ${Math.round(height * 0.88)} L${Math.round(width * 0.4)} ${Math.round(height * 0.88)} Z" fill="${colorB}" fill-opacity="0.18"/>
      <ellipse cx="${Math.round(width * 0.5)}" cy="${Math.round(height * 0.88)}" rx="${Math.round(width * 0.2)}" ry="${Math.round(height * 0.08)}" fill="${colorA}" fill-opacity="0.16"/>
    `;
  }
  return `
    <rect x="${Math.round(width * 0.13)}" y="${Math.round(height * 0.14)}" width="${Math.round(width * 0.74)}" height="${Math.round(height * 0.72)}" rx="${Math.round(height * 0.05)}" fill="${colorA}" fill-opacity="0.14" stroke="${colorB}" stroke-opacity="0.45" stroke-width="3"/>
    <circle cx="${Math.round(width * 0.31)}" cy="${Math.round(height * 0.49)}" r="${Math.round(height * 0.08)}" fill="${colorB}" fill-opacity="0.28"/>
    <circle cx="${Math.round(width * 0.56)}" cy="${Math.round(height * 0.53)}" r="${Math.round(height * 0.06)}" fill="${colorA}" fill-opacity="0.3"/>
  `;
}

function buildOrganicLayers(width, height, set, rng) {
  const blobs = [];
  for (let i = 0; i < 12; i += 1) {
    const cx = Math.round(width * (0.08 + rng() * 0.84));
    const cy = Math.round(height * (0.08 + rng() * 0.84));
    const r = Math.round(height * (0.08 + rng() * 0.2));
    const color = set.accents[i % set.accents.length];
    blobs.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" fill-opacity="${(0.12 + rng() * 0.18).toFixed(3)}"/>`);
  }
  return blobs.join("\n");
}

function buildNeonLayers(width, height, set, rng) {
  const lines = [];
  for (let i = 0; i < 24; i += 1) {
    const y = Math.round((height / 24) * i + rng() * 6);
    const color = set.accents[i % set.accents.length];
    lines.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${color}" stroke-opacity="0.10" stroke-width="1"/>`);
  }
  for (let i = 0; i < 10; i += 1) {
    const x1 = Math.round(width * rng());
    const y1 = Math.round(height * rng());
    const x2 = Math.round(width * rng());
    const y2 = Math.round(height * rng());
    const color = set.accents[(i + 1) % set.accents.length];
    lines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-opacity="0.22" stroke-width="${1 + Math.round(rng() * 3)}"/>`);
  }
  return lines.join("\n");
}

function buildGeoLayers(width, height, set, rng) {
  const shapes = [];
  for (let i = 0; i < 10; i += 1) {
    const w = Math.round(width * (0.12 + rng() * 0.28));
    const h = Math.round(height * (0.12 + rng() * 0.28));
    const x = Math.round(rng() * (width - w));
    const y = Math.round(rng() * (height - h));
    const rx = Math.round(8 + rng() * 28);
    const color = set.accents[i % set.accents.length];
    shapes.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${color}" fill-opacity="${(0.16 + rng() * 0.16).toFixed(3)}"/>`);
  }
  for (let i = 0; i < 8; i += 1) {
    const cx = Math.round(width * rng());
    const cy = Math.round(height * rng());
    const r = Math.round(height * (0.03 + rng() * 0.1));
    const color = set.accents[(i + 2) % set.accents.length];
    shapes.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" fill-opacity="${(0.18 + rng() * 0.15).toFixed(3)}"/>`);
  }
  return shapes.join("\n");
}

function buildPaperLayers(width, height, set, rng) {
  const layers = [];
  for (let i = 0; i < 7; i += 1) {
    const yBase = Math.round(height * (0.35 + i * 0.09));
    const color = set.accents[i % set.accents.length];
    const c1 = Math.round(width * (0.2 + rng() * 0.2));
    const c2 = Math.round(width * (0.55 + rng() * 0.2));
    const y1 = yBase - Math.round(height * (0.05 + rng() * 0.08));
    const y2 = yBase + Math.round(height * (0.05 + rng() * 0.08));
    layers.push(`<path d="M0 ${yBase} C ${c1} ${y1}, ${c2} ${y2}, ${width} ${yBase} L ${width} ${height} L 0 ${height} Z" fill="${color}" fill-opacity="${(0.18 + rng() * 0.2).toFixed(3)}"/>`);
  }
  return layers.join("\n");
}

function buildProceduralSvg({ set, slot, appId, width, height }) {
  const seed = `${set.id}|${slot}|${appId ?? "core"}`;
  const rng = seededRng(seed);
  const bgA = set.background[0];
  const bgB = set.background[1];
  const bgC = set.background[2];
  const accentA = set.accents[Math.floor(rng() * set.accents.length)];
  const accentB = set.accents[Math.floor(rng() * set.accents.length)];

  let motifLayers = "";
  if (set.motif === "organic") motifLayers = buildOrganicLayers(width, height, set, rng);
  else if (set.motif === "neon") motifLayers = buildNeonLayers(width, height, set, rng);
  else if (set.motif === "geo") motifLayers = buildGeoLayers(width, height, set, rng);
  else motifLayers = buildPaperLayers(width, height, set, rng);

  const slotOverlay = buildSlotOverlay(slot, width, height, accentA, accentB);
  const appIndex = appId ? APP_PROFILES.findIndex((entry) => entry.appId === appId) : -1;
  const appBadgeColor = appIndex >= 0
    ? set.accents[appIndex % set.accents.length]
    : accentA;

  const appBadge = appId
    ? `<circle cx="${Math.round(width * 0.92)}" cy="${Math.round(height * 0.12)}" r="${Math.round(height * 0.045)}" fill="${appBadgeColor}" fill-opacity="0.55"/>`
    : "";

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgA}"/>
      <stop offset="52%" stop-color="${bgB}"/>
      <stop offset="100%" stop-color="${bgC}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  ${motifLayers}
  ${slotOverlay}
  ${appBadge}
</svg>
  `.trim();
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const { width, height } = parseSize(opts.size);
  const plan = buildPlan(opts.outputRoot);
  const manifestPath = path.join(opts.outputRoot, MANIFEST_FILENAME);
  ensureDir(opts.outputRoot);

  const manifest = {
    generatedAt: new Date().toISOString(),
    provider: "procedural-svg-sharp",
    size: `${width}x${height}`,
    outputRoot: opts.outputRoot.split(path.sep).join("/"),
    totals: {
      planned: plan.length,
      attempts: 0,
      completed: 0,
      skippedExisting: 0,
      failed: 0,
      dryRunPlanned: 0,
    },
    stopReason: null,
    items: [],
    errors: [],
  };

  console.log("==========================================================");
  console.log(" Procedural Hero Backup Generator");
  console.log("==========================================================");
  console.log(`Output root: ${opts.outputRoot}`);
  console.log(`Canvas: ${width}x${height}`);
  console.log(`Plan size: ${plan.length}`);
  if (opts.dryRun) console.log("Mode: DRY RUN");
  console.log("");

  for (let index = 0; index < plan.length; index += 1) {
    if (manifest.totals.attempts >= opts.maxRequests) {
      manifest.stopReason = "max_requests_reached";
      break;
    }
    const item = plan[index];
    if (fs.existsSync(item.outputPath) && !opts.dryRun) {
      manifest.totals.skippedExisting += 1;
      manifest.items.push({
        id: item.id,
        setId: item.setId,
        scope: item.scope,
        slot: item.slot,
        appId: item.appId ?? null,
        outputPath: item.relativeOutputPath,
        status: "skipped_existing",
        bytes: fs.statSync(item.outputPath).size,
      });
      continue;
    }

    manifest.totals.attempts += 1;
    console.log(`[${index + 1}/${plan.length}] ${item.id}`);
    if (opts.dryRun) {
      manifest.totals.dryRunPlanned += 1;
      manifest.items.push({
        id: item.id,
        setId: item.setId,
        scope: item.scope,
        slot: item.slot,
        appId: item.appId ?? null,
        outputPath: item.relativeOutputPath,
        status: "dry_run",
      });
      continue;
    }

    try {
      const set = STYLE_SETS.find((entry) => entry.id === item.setId);
      if (!set) throw new Error(`Missing set config for ${item.setId}`);
      const svg = buildProceduralSvg({
        set,
        slot: item.slot,
        appId: item.appId,
        width,
        height,
      });
      const pngBuffer = await sharp(Buffer.from(svg, "utf8"))
        .png({ compressionLevel: 9, quality: 100 })
        .toBuffer();

      ensureDir(path.dirname(item.outputPath));
      fs.writeFileSync(item.outputPath, pngBuffer);
      manifest.totals.completed += 1;
      manifest.items.push({
        id: item.id,
        setId: item.setId,
        scope: item.scope,
        slot: item.slot,
        appId: item.appId ?? null,
        outputPath: item.relativeOutputPath,
        status: "completed",
        bytes: pngBuffer.length,
      });
      console.log(`  [ok] ${item.relativeOutputPath} (${Math.round(pngBuffer.length / 1024)} KB)`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      manifest.totals.failed += 1;
      manifest.errors.push({ id: item.id, message });
      manifest.items.push({
        id: item.id,
        setId: item.setId,
        scope: item.scope,
        slot: item.slot,
        appId: item.appId ?? null,
        outputPath: item.relativeOutputPath,
        status: "failed",
        error: message,
      });
      console.log(`  [error] ${message}`);
    }

    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  }

  if (!manifest.stopReason) manifest.stopReason = "completed_or_skipped_all";
  manifest.generatedAt = new Date().toISOString();
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  console.log("");
  console.log("==========================================================");
  console.log(" Procedural Generation Summary");
  console.log("==========================================================");
  console.log(`Planned:            ${manifest.totals.planned}`);
  console.log(`Attempts:           ${manifest.totals.attempts}`);
  console.log(`Completed:          ${manifest.totals.completed}`);
  console.log(`Skipped existing:   ${manifest.totals.skippedExisting}`);
  console.log(`Failed:             ${manifest.totals.failed}`);
  if (opts.dryRun) console.log(`Dry-run planned:    ${manifest.totals.dryRunPlanned}`);
  console.log(`Stop reason:        ${manifest.stopReason}`);
  console.log(`Manifest:           ${manifestPath}`);
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Fatal: ${message}`);
  process.exitCode = 1;
});

