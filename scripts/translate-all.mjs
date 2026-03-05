#!/usr/bin/env node
/**
 * translate-all.mjs — Run translation for all supported locales sequentially.
 * Each locale runs in a fresh child process so memory is fully reclaimed between runs.
 */

import { execFileSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";

// Load .env and .env.local to grab the OPENAI_MEDIA_API_KEY
function loadEnv(file) {
  try {
    const data = fs.readFileSync(file, 'utf8');
    data.split('\n').forEach(line => {
      const match = line.match(/^([^#=]+)=(.*)$/);
      if (match) process.env[match[1].trim()] = match[2].trim();
    });
  } catch (e) {}
}

loadEnv('.env');
loadEnv('.env.local');

// Override OPENAI_API_KEY with OPENAI_MEDIA_API_KEY which has credits
if (process.env.OPENAI_MEDIA_API_KEY) {
  process.env.OPENAI_API_KEY = process.env.OPENAI_MEDIA_API_KEY;
}

const ALL_LOCALES = ["es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru", "pl"];
const locales = process.argv.slice(2);
const targets = locales.length > 0 ? locales : ALL_LOCALES;

const script = path.join(process.cwd(), "scripts", "translate-simple.mjs");

for (const locale of targets) {
  console.log(`\n${"#".repeat(60)}`);
  console.log(`#  Starting ${locale.toUpperCase()}`);
  console.log(`${"#".repeat(60)}\n`);

  try {
    execFileSync(process.execPath, [
      "--max-old-space-size=4096",
      "--expose-gc",
      script,
      locale,
    ], {
      stdio: "inherit",
      cwd: process.cwd(),
      env: process.env, // Pass the overridden environment
      timeout: 12 * 60 * 60 * 1000, // 12 hour timeout per locale
    });
    console.log(`\n✓ ${locale.toUpperCase()} completed successfully\n`);
  } catch (e) {
    console.error(`\n✗ ${locale.toUpperCase()} failed: ${e.message}\n`);
    // Continue to next locale — don't abort everything
  }
}

console.log("\nAll locales processed.");

