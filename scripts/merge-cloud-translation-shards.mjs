#!/usr/bin/env node

import fs from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data", "translations");
const CLOUD_DIR = path.join(DATA_DIR, "cloud-tasks");

function parseArgs(argv) {
  const opts = { locale: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--locale" && argv[i + 1]) opts.locale = argv[++i];
    else if (!a.startsWith("--") && !opts.locale) opts.locale = a;
  }
  return opts;
}

const opts = parseArgs(process.argv.slice(2));
if (!opts.locale) {
  console.error("Usage: node scripts/merge-cloud-translation-shards.mjs --locale <locale>");
  process.exit(1);
}

const locale = opts.locale;
const statePath = path.join(DATA_DIR, `state-${locale}.json`);
const cloudLocaleDir = path.join(CLOUD_DIR, locale);
const outputsDir = path.join(cloudLocaleDir, "outputs");

async function main() {
  if (!existsSync(outputsDir)) {
    console.error(`Missing outputs dir: ${outputsDir}`);
    process.exit(1);
  }

  let state = { locale, completedHashes: {}, stats: {} };
  try {
    state = JSON.parse(readFileSync(statePath, "utf8"));
  } catch {}

  const files = (await fs.readdir(outputsDir)).filter((f) => f.endsWith(".json")).sort();
  let merged = 0;

  for (const file of files) {
    const raw = await fs.readFile(path.join(outputsDir, file), "utf8");
    const parsed = JSON.parse(raw);
    for (const [hash, translation] of Object.entries(parsed.translations || {})) {
      if (!state.completedHashes[hash]) {
        state.completedHashes[hash] = translation;
        merged++;
      }
    }
  }

  state.savedAt = new Date().toISOString();
  state.engine = "cloud-workers-v1";
  state.stats = {
    ...(state.stats || {}),
    mergedCloudShardFiles: files.length,
    mergedCloudTranslations: merged,
  };

  await fs.writeFile(statePath, JSON.stringify(state));
  console.log(JSON.stringify({ locale, files: files.length, merged }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

