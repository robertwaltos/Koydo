#!/usr/bin/env node

/**
 * export-music-universe-cc-attribution.mjs
 *
 * Builds in-app-friendly attribution packs from CC enrichment outputs.
 *
 * Inputs:
 * - data/music-universe/cc-enrichment/_summary.json
 * - data/music-universe/cc-enrichment/<genre>.json
 *
 * Outputs:
 * - public/music-universe/credits/_credits-summary.json
 * - public/music-universe/credits/credits-rollup.json
 * - public/music-universe/credits/<genre>.credits.json
 * - public/music-universe/credits/<genre>.credits.md
 */

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const ENRICHMENT_DIR = path.join(ROOT, "data", "music-universe", "cc-enrichment");
const ENRICHMENT_SUMMARY_PATH = path.join(ENRICHMENT_DIR, "_summary.json");
const DEFAULT_OUT_DIR = path.join(ROOT, "public", "music-universe", "credits");

function parseArgs(argv) {
  const opts = {
    outDir: DEFAULT_OUT_DIR,
    maxPerGenre: 100,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--out-dir" && argv[i + 1]) {
      opts.outDir = path.resolve(ROOT, String(argv[i + 1]).trim());
      i += 1;
      continue;
    }
    if (arg.startsWith("--out-dir=")) {
      opts.outDir = path.resolve(ROOT, String(arg.split("=")[1] || "").trim());
      continue;
    }
    if (arg === "--max-per-genre" && argv[i + 1]) {
      opts.maxPerGenre = toPositiveInt(argv[i + 1], opts.maxPerGenre);
      i += 1;
      continue;
    }
    if (arg.startsWith("--max-per-genre=")) {
      opts.maxPerGenre = toPositiveInt(arg.split("=")[1], opts.maxPerGenre);
      continue;
    }
  }

  if (opts.maxPerGenre < 1) {
    opts.maxPerGenre = 1;
  }
  return opts;
}

function toPositiveInt(value, fallback) {
  const parsed = Number.parseInt(String(value), 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }
  return parsed;
}

function mdEscape(value) {
  return String(value || "").replaceAll("|", "\\|").trim();
}

function toCreditLine(track) {
  if (track.attribution && String(track.attribution).trim()) {
    return String(track.attribution).trim();
  }
  const title = String(track.title || "Untitled");
  const creator = String(track.creator || "Unknown creator");
  const license = String(track.licenseDisplay || track.license || "").toUpperCase();
  const url = String(track.foreignLandingUrl || track.detailUrl || track.audioUrl || "");
  return `"${title}" by ${creator} (${license}). ${url}`.trim();
}

function normalizeCredit(track) {
  const sourceUrl = String(track.foreignLandingUrl || track.detailUrl || "");
  const audioUrl = String(track.audioUrl || "");
  return {
    id: String(track.id || ""),
    title: String(track.title || "Untitled"),
    creator: String(track.creator || "Unknown"),
    source: String(track.source || track.provider || ""),
    license: String(track.license || "").toLowerCase(),
    licenseDisplay: String(track.licenseDisplay || "").trim(),
    licenseUrl: String(track.licenseUrl || "").trim(),
    sourceUrl,
    audioUrl,
    attribution: toCreditLine(track),
  };
}

function buildMarkdown(genreName, credits) {
  const lines = [
    `# ${genreName} Credits`,
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "These tracks are licensed CC BY / CC0 and require attribution where applicable.",
    "",
    "| Title | Creator | License | Source |",
    "| --- | --- | --- | --- |",
  ];

  for (const credit of credits) {
    const title = mdEscape(credit.title);
    const creator = mdEscape(credit.creator);
    const license = mdEscape(credit.licenseDisplay || credit.license.toUpperCase());
    const sourceCell = credit.sourceUrl
      ? `[${mdEscape(credit.source || "source")}](${credit.sourceUrl})`
      : mdEscape(credit.source || "source");
    lines.push(`| ${title} | ${creator} | ${license} | ${sourceCell} |`);
  }

  lines.push("");
  lines.push("## Attribution Text");
  lines.push("");
  for (const credit of credits) {
    lines.push(`- ${credit.attribution}`);
  }
  lines.push("");

  return lines.join("\n");
}

async function loadJson(filePath) {
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const summary = await loadJson(ENRICHMENT_SUMMARY_PATH);
  const genres = Array.isArray(summary.genres) ? summary.genres : [];

  await fs.mkdir(opts.outDir, { recursive: true });

  const rollup = [];
  let totalCredits = 0;

  for (const genre of genres) {
    const genreId = String(genre.genreId || "").trim();
    if (!genreId) {
      continue;
    }

    const genrePath = path.join(ENRICHMENT_DIR, `${genreId}.json`);
    try {
      const payload = await loadJson(genrePath);
      const rawTracks = Array.isArray(payload.tracks) ? payload.tracks : [];
      const credits = rawTracks.slice(0, opts.maxPerGenre).map(normalizeCredit);
      totalCredits += credits.length;

      const genreOutJsonPath = path.join(opts.outDir, `${genreId}.credits.json`);
      const genreOutMdPath = path.join(opts.outDir, `${genreId}.credits.md`);

      const genreCreditPayload = {
        generatedAt: new Date().toISOString(),
        genre: {
          id: genreId,
          name: String(genre.genreName || genreId),
          rank: Number(genre.rank || 0),
        },
        totalCredits: credits.length,
        credits,
      };

      await fs.writeFile(genreOutJsonPath, JSON.stringify(genreCreditPayload, null, 2));
      await fs.writeFile(genreOutMdPath, buildMarkdown(String(genre.genreName || genreId), credits));

      rollup.push({
        genreId,
        genreName: String(genre.genreName || genreId),
        rank: Number(genre.rank || 0),
        totalCredits: credits.length,
        jsonPath: path.relative(ROOT, genreOutJsonPath).replaceAll("\\", "/"),
        markdownPath: path.relative(ROOT, genreOutMdPath).replaceAll("\\", "/"),
        credits,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`[music-cc-credits] warn ${genreId}: ${message}`);
    }
  }

  const summaryPayload = {
    generatedAt: new Date().toISOString(),
    genres: rollup.length,
    totalCredits,
    outDir: path.relative(ROOT, opts.outDir).replaceAll("\\", "/"),
  };

  const summaryPath = path.join(opts.outDir, "_credits-summary.json");
  const rollupPath = path.join(opts.outDir, "credits-rollup.json");

  await fs.writeFile(summaryPath, JSON.stringify(summaryPayload, null, 2));
  await fs.writeFile(
    rollupPath,
    JSON.stringify(
      {
        generatedAt: summaryPayload.generatedAt,
        genres: rollup,
      },
      null,
      2,
    ),
  );

  console.log(`[music-cc-credits] done: ${path.relative(ROOT, summaryPath).replaceAll("\\", "/")}`);
}

main().catch((error) => {
  console.error("[music-cc-credits] FATAL:", error.message);
  process.exit(1);
});
