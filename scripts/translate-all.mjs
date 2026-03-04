#!/usr/bin/env node
/**
 * translate-all.mjs — Run ES → ZH → PL translation sequentially.
 * Each locale runs in a fresh child process so memory is fully reclaimed between runs.
 *
 * Usage:
 *   node scripts/translate-all.mjs
 *   node scripts/translate-all.mjs zh pl        # skip es, do only zh and pl
 */

import { execFileSync } from "node:child_process";
import path from "node:path";

const locales = process.argv.slice(2);
const targets = locales.length > 0 ? locales : ["es", "zh", "pl"];

const script = path.join(process.cwd(), "scripts", "translate-simple.mjs");

for (const locale of targets) {
  console.log(`\n${"#".repeat(60)}`);
  console.log(`#  Starting ${locale.toUpperCase()}`);
  console.log(`${"#".repeat(60)}\n`);

  try {
    execFileSync(process.execPath, [
      "--max-old-space-size=4096",
      "--expose-gc",
      "--env-file=.env",
      script,
      locale,
    ], {
      stdio: "inherit",
      cwd: process.cwd(),
      timeout: 12 * 60 * 60 * 1000, // 12 hour timeout per locale
    });
    console.log(`\n✓ ${locale.toUpperCase()} completed successfully\n`);
  } catch (e) {
    console.error(`\n✗ ${locale.toUpperCase()} failed: ${e.message}\n`);
    // Continue to next locale — don't abort everything
  }
}

console.log("\nAll locales processed.");
