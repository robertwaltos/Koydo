#!/usr/bin/env node
/**
 * write-translation-output.mjs
 *
 * Reads state-{locale}.json and key-to-hash.json,
 * writes per-module translation files to public/translations/{locale}/.
 *
 * Separated from the translator so the translator never needs to load
 * the 88MB key-to-hash.json file during translation.
 *
 * Usage:
 *   node --max-old-space-size=4096 scripts/write-translation-output.mjs --locale es
 *   node --max-old-space-size=4096 scripts/write-translation-output.mjs --locale all
 */

import fs from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data", "translations");
const OUTPUT_BASE = path.join(ROOT, "public", "translations");

const LOCALES = ["es", "zh", "pl", "fr", "de", "ar", "hi", "ja", "ko", "ru", "pt", "it", "tr", "vi", "th", "id", "uk"];

// CLI
const args = process.argv.slice(2);
let targetLocale = null;
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--locale") targetLocale = args[++i];
}
if (!targetLocale) { console.error("Usage: --locale es|zh|pl|all"); process.exit(1); }

const locales = targetLocale === "all" ? LOCALES.filter(l => existsSync(path.join(DATA_DIR, `state-${l}.json`))) : [targetLocale];

async function writeLocale(locale) {
  console.log(`\n=== Writing output for: ${locale} ===`);

  // Load key-to-hash
  console.log("  Loading key-to-hash.json...");
  const keyToHash = JSON.parse(readFileSync(path.join(DATA_DIR, "key-to-hash.json"), "utf8"));
  const keyCount = Object.keys(keyToHash).length;
  console.log(`  ${keyCount.toLocaleString()} key mappings loaded`);

  // Load state
  console.log("  Loading state...");
  const state = JSON.parse(readFileSync(path.join(DATA_DIR, `state-${locale}.json`), "utf8"));
  const hashCount = Object.keys(state.completedHashes || {}).length;
  console.log(`  ${hashCount.toLocaleString()} completed translations`);

  // Group keys by module
  const moduleFields = {};
  let matched = 0;
  for (const [key, hash] of Object.entries(keyToHash)) {
    const translation = state.completedHashes?.[hash];
    if (!translation) continue;

    const moduleId = key.split(":")[0];
    const fieldPath = key.slice(key.indexOf(":") + 1);

    if (!moduleFields[moduleId]) moduleFields[moduleId] = {};
    moduleFields[moduleId][fieldPath] = translation;
    matched++;
  }

  console.log(`  ${matched.toLocaleString()} keys matched to translations across ${Object.keys(moduleFields).length} modules`);

  // Write per-module files
  const localeDir = path.join(OUTPUT_BASE, locale);
  await fs.mkdir(localeDir, { recursive: true });

  let filesWritten = 0;
  const manifest = { locale, generatedAt: new Date().toISOString(), modules: {} };

  for (const [moduleId, fields] of Object.entries(moduleFields)) {
    const fieldCount = Object.keys(fields).length;
    if (fieldCount === 0) continue;

    const moduleFile = {
      locale,
      moduleId,
      translatedAt: new Date().toISOString(),
      engineUsed: "simple-v2",
      fieldCount,
      fields,
    };

    await fs.writeFile(path.join(localeDir, `${moduleId}.json`), JSON.stringify(moduleFile));
    filesWritten++;
    manifest.modules[moduleId] = { fields: fieldCount };
  }

  // Write manifest
  await fs.writeFile(path.join(localeDir, "_manifest.json"), JSON.stringify(manifest, null, 2));

  console.log(`  Wrote ${filesWritten} module files to public/translations/${locale}/`);
  return filesWritten;
}

async function main() {
  for (const locale of locales) {
    if (!existsSync(path.join(DATA_DIR, `state-${locale}.json`))) {
      console.log(`  Skipping ${locale} — no state file`);
      continue;
    }
    await writeLocale(locale);
  }
  console.log("\nDone!");
}

main().catch(e => { console.error("FATAL:", e); process.exit(1); });
