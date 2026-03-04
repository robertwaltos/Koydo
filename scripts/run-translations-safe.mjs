#!/usr/bin/env node
/**
 * run-translations-safe.mjs
 *
 * Runs translate-simple.mjs for ES → ZH → PL sequentially.
 * Each locale runs as a child process so memory is fully freed between locales.
 * After each locale, runs write-translation-output.mjs to generate module files.
 *
 * Usage:
 *   node --env-file=.env scripts/run-translations-safe.mjs
 *   node --env-file=.env scripts/run-translations-safe.mjs --start-from zh
 */

import { execFileSync } from "node:child_process";

const jobs = [
  { locale: "es", sleep: 2000, batch: 50 },
  { locale: "zh", sleep: 2500, batch: 50 },
  { locale: "pl", sleep: 2500, batch: 50 },
];

// Parse --start-from
let startFrom = "es";
for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] === "--start-from" && process.argv[i + 1]) {
    startFrom = process.argv[++i];
  }
}

const startIdx = jobs.findIndex(j => j.locale === startFrom);
const toRun = startIdx >= 0 ? jobs.slice(startIdx) : jobs;

console.log(`=== Safe Translation Pipeline ===`);
console.log(`Locales: ${toRun.map(j => j.locale).join(" → ")}`);
console.log(`Started: ${new Date().toISOString()}\n`);

for (const job of toRun) {
  const t0 = Date.now();
  console.log(`\n${"=".repeat(50)}`);
  console.log(`TRANSLATE: ${job.locale.toUpperCase()}`);
  console.log(`${"=".repeat(50)}`);

  try {
    execFileSync("node", [
      "--env-file=.env",
      "scripts/translate-simple.mjs",
      "--locale", job.locale,
      "--sleep", String(job.sleep),
      "--batch-size", String(job.batch),
    ], { cwd: process.cwd(), stdio: "inherit", timeout: 0 });

    const mins = ((Date.now() - t0) / 60000).toFixed(1);
    console.log(`\n✓ ${job.locale} translation done (${mins} min)`);
  } catch (e) {
    const mins = ((Date.now() - t0) / 60000).toFixed(1);
    console.error(`\n✗ ${job.locale} translation failed after ${mins} min: ${e.message}`);
    console.log("  Continuing to next locale...");
  }

  // Write output files (separate process, separate memory)
  console.log(`\nWriting ${job.locale} output files...`);
  try {
    execFileSync("node", [
      "--max-old-space-size=4096",
      "scripts/write-translation-output.mjs",
      "--locale", job.locale,
    ], { cwd: process.cwd(), stdio: "inherit", timeout: 0 });
    console.log(`✓ ${job.locale} output files written`);
  } catch (e) {
    console.error(`✗ ${job.locale} output writing failed: ${e.message}`);
  }
}

console.log(`\n${"=".repeat(50)}`);
console.log(`Pipeline complete: ${new Date().toISOString()}`);
console.log(`${"=".repeat(50)}`);
