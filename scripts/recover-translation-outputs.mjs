#!/usr/bin/env node
/**
 * recover-translation-outputs.mjs
 *
 * Rebuilds per-module JSON translation files from the state file.
 * The state file (data/translations/state-{locale}.json) contains all
 * completed hash->translation mappings. This script re-maps them to
 * per-module output files in public/translations/{locale}/.
 *
 * Usage:
 *   node scripts/recover-translation-outputs.mjs --locale es
 *   node scripts/recover-translation-outputs.mjs --locale es --dry-run
 */

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const translationsDir = path.join(ROOT, "data", "translations");
const outputBaseDir = path.join(ROOT, "public", "translations");

function parseArgs(argv) {
  const opts = { locale: null, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--locale" && argv[i + 1]) opts.locale = argv[++i];
    if (argv[i] === "--dry-run") opts.dryRun = true;
  }
  return opts;
}

const opts = parseArgs(process.argv.slice(2));
if (!opts.locale) {
  console.error("Usage: --locale es|zh|pl [--dry-run]");
  process.exit(1);
}

async function main() {
  const locale = opts.locale;

  console.log(`Recovering ${locale} translation output files...`);
  console.log("Loading key-to-hash.json...");
  const keyToHash = JSON.parse(await fs.readFile(path.join(translationsDir, "key-to-hash.json"), "utf8"));
  const totalKeys = Object.keys(keyToHash).length;
  console.log(`  ${totalKeys.toLocaleString()} keys loaded`);

  console.log(`Loading state-${locale}.json...`);
  const stateFile = path.join(translationsDir, `state-${locale}.json`);
  try {
    await fs.access(stateFile);
  } catch {
    console.error(`State file not found: ${stateFile}`);
    process.exit(1);
  }
  const state = JSON.parse(await fs.readFile(stateFile, "utf8"));
  const completedHashes = state.completedHashes || {};
  const completedCount = Object.keys(completedHashes).length;
  console.log(`  ${completedCount.toLocaleString()} translated hashes loaded`);

  // Group keys by module and resolve translations
  console.log("Mapping translations to modules...");
  const moduleKeys = {};
  let matchedKeys = 0;
  let unmatchedKeys = 0;

  for (const [key, hash] of Object.entries(keyToHash)) {
    const moduleId = key.split(":")[0];
    if (!moduleKeys[moduleId]) moduleKeys[moduleId] = {};
    const fieldPath = key.slice(key.indexOf(":") + 1);
    const translation = completedHashes[hash];
    if (translation) {
      moduleKeys[moduleId][fieldPath] = translation;
      matchedKeys++;
    } else {
      unmatchedKeys++;
    }
  }

  const moduleIds = Object.keys(moduleKeys);
  const modulesWithData = moduleIds.filter(id => Object.keys(moduleKeys[id]).length > 0);
  console.log(`  ${modulesWithData.length} modules have translated content`);
  console.log(`  ${matchedKeys.toLocaleString()} keys matched (${((matchedKeys / totalKeys) * 100).toFixed(1)}%)`);
  console.log(`  ${unmatchedKeys.toLocaleString()} keys still pending translation`);

  if (opts.dryRun) {
    console.log("\n[DRY RUN] Would write the above. Pass without --dry-run to execute.");
    // Show top 20 modules by field count
    const sorted = modulesWithData.map(id => ({ id, count: Object.keys(moduleKeys[id]).length }))
      .sort((a, b) => b.count - a.count);
    console.log("\nTop 20 modules by translated fields:");
    for (const m of sorted.slice(0, 20)) {
      console.log(`  ${m.id}: ${m.count} fields`);
    }
    return;
  }

  // Write per-module JSON files
  const localeDir = path.join(outputBaseDir, locale);
  await fs.mkdir(localeDir, { recursive: true });

  let filesWritten = 0;
  const manifest = { locale, generatedAt: new Date().toISOString(), recoveredFrom: "state-file", modules: {} };

  for (const moduleId of modulesWithData) {
    const fields = moduleKeys[moduleId];
    const fieldCount = Object.keys(fields).length;
    if (fieldCount === 0) continue;

    const moduleFile = {
      locale,
      moduleId,
      translatedAt: new Date().toISOString(),
      engineUsed: "consensus-v1",
      recoveredFromState: true,
      fieldCount,
      fields,
    };

    const filePath = path.join(localeDir, `${moduleId}.json`);
    await fs.writeFile(filePath, JSON.stringify(moduleFile));
    filesWritten++;
    manifest.modules[moduleId] = { fields: fieldCount };
  }

  // Write manifest
  const manifestPath = path.join(localeDir, "_manifest.json");
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\nRecovery complete!`);
  console.log(`  Written: ${filesWritten} module translation files`);
  console.log(`  Output:  ${localeDir}`);
  console.log(`  Keys recovered: ${matchedKeys.toLocaleString()} / ${totalKeys.toLocaleString()} (${((matchedKeys / totalKeys) * 100).toFixed(1)}%)`);
}

main().catch(e => { console.error(e); process.exit(1); });
