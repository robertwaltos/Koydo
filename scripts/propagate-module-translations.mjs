#!/usr/bin/env node
/**
 * scripts/propagate-module-translations.mjs
 * 
 * Target-triggers the 19-language translation pipeline for a specific module.
 * 
 * Usage:
 *   node scripts/propagate-module-translations.mjs --module <moduleId>
 */

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const ROOT = process.cwd();

function parseArgs(argv) {
  const opts = { moduleId: "" };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("--module=")) {
      opts.moduleId = arg.split("=")[1];
    } else if (arg === "--module" && argv[i + 1]) {
      opts.moduleId = argv[++i];
    }
  }
  return opts;
}

const LOCALES = [
  "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru", "pl",
  "pt", "it", "tr", "vi", "th", "id", "uk", "bn", "ur"
];

async function runCommand(cmd, args) {
  return new Promise((resolve, reject) => {
    console.log(`🚀 Running: ${cmd} ${args.join(" ")}`);
    const proc = spawn(cmd, args, { stdio: "inherit", windowsHide: true });
    proc.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} failed with code ${code}`));
    });
  });
}

async function main() {
  const { moduleId } = parseArgs(process.argv.slice(2));
  if (!moduleId) {
    console.error("Usage: node scripts/propagate-module-translations.mjs --module <moduleId>");
    process.exit(1);
  }

  console.log(`\n🌍 Starting Global Propagation for module: ${moduleId}`);

  // 1. Target Extraction
  console.log("📦 Extracting new smoothed strings...");
  await runCommand("node", ["scripts/extract-translatable-content.mjs", "--module", moduleId]);

  // 2. Parallel Translation
  console.log(`⚡ Spawning 19-language parallel translation for ${moduleId}...`);
  const tasks = LOCALES.map(locale => {
    return new Promise((resolve) => {
      const logFile = path.join(ROOT, "logs", `propagate-${moduleId}-${locale}.log`);
      const out = fs.openSync(logFile, "w");
      
      const proc = spawn("node", [
        "scripts/translate-simple.mjs",
        locale,
        "--module-id", moduleId,
        "--batch-size", "40",
        "--sleep", "1000",
        "--model", "gemini-3.1-pro-preview"
      ], { 
        windowsHide: true,
        stdio: ['ignore', out, out]
      });

      proc.on("close", (code) => {
        fs.closeSync(out);
        console.log(`   ✅ [${locale.toUpperCase()}] Finished with code ${code}`);
        resolve({ locale, code });
      });
    });
  });

  const results = await Promise.all(tasks);
  
  // 3. Final Sync (Writer)
  console.log("\n💾 Writing final translation outputs...");
  for (const locale of LOCALES) {
    try {
      await runCommand("node", ["scripts/write-translation-output.mjs", "--locale", locale]);
    } catch (e) {
      console.warn(`   ⚠️  Failed to write output for ${locale}: ${e.message}`);
    }
  }

  console.log(`\n🎉 Propagation complete for ${moduleId} across 19 languages.`);
}

main().catch(e => {
  console.error("FATAL:", e);
  process.exit(1);
});
