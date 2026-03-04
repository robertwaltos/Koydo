#!/usr/bin/env node
/**
 * translate-sequential.mjs
 *
 * Runs translations for ES, ZH, PL SEQUENTIALLY (one at a time)
 * to avoid OpenAI rate-limit deadlocks from parallel processes.
 *
 * ES: recheck existing 228K, then translate remaining 136K
 * ZH: translate 364K from scratch
 * PL: translate 364K from scratch
 *
 * Usage:
 *   node --max-old-space-size=8192 --env-file=.env scripts/translate-sequential.mjs
 *   node --max-old-space-size=8192 --env-file=.env scripts/translate-sequential.mjs --start-from zh
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const LOGS = path.join(ROOT, "logs");
await fs.mkdir(LOGS, { recursive: true });

// Parse CLI
let startFrom = "es";
for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] === "--start-from" && process.argv[i + 1]) {
    startFrom = process.argv[++i];
  }
}

const jobs = [
  {
    locale: "es",
    label: "Spanish (recheck + translate remaining)",
    args: ["--locale", "es", "--apply", "--resume", "--recheck", "--concurrency", "3"],
  },
  {
    locale: "zh",
    label: "Simplified Chinese (from scratch)",
    args: ["--locale", "zh", "--apply", "--no-resume", "--concurrency", "4"],
  },
  {
    locale: "pl",
    label: "Polish (from scratch)",
    args: ["--locale", "pl", "--apply", "--no-resume", "--concurrency", "4"],
  },
];

// Skip jobs before --start-from
const startIdx = jobs.findIndex(j => j.locale === startFrom);
const jobsToRun = startIdx >= 0 ? jobs.slice(startIdx) : jobs;

console.log("=== Koydo Sequential Translation Pipeline ===");
console.log(`Jobs: ${jobsToRun.map(j => j.locale).join(" → ")}`);
console.log(`Started: ${new Date().toISOString()}\n`);

for (const job of jobsToRun) {
  const startTime = Date.now();
  console.log(`\n${"=".repeat(60)}`);
  console.log(`Starting: ${job.label}`);
  console.log(`Time: ${new Date().toISOString()}`);
  console.log(`${"=".repeat(60)}\n`);

  const logFile = path.join(LOGS, `${job.locale}-translate.log`);
  const errFile = path.join(LOGS, `${job.locale}-translate-err.log`);

  // Clear old logs
  await fs.writeFile(logFile, "");
  await fs.writeFile(errFile, "");

  const nodeArgs = [
    "--max-old-space-size=6144",
    "--expose-gc",
    "--env-file=.env",
    "scripts/translate-curriculum-batch.mjs",
    ...job.args,
  ];

  try {
    // Run synchronously so we complete one locale before starting the next
    execFileSync("node", nodeArgs, {
      cwd: ROOT,
      stdio: ["ignore", "inherit", "inherit"],
      timeout: 0, // no timeout — let it run as long as needed
      maxBuffer: 100 * 1024 * 1024, // 100 MB buffer
    });

    const elapsed = ((Date.now() - startTime) / 60000).toFixed(1);
    console.log(`\n✓ ${job.locale} completed in ${elapsed} minutes`);
  } catch (e) {
    const elapsed = ((Date.now() - startTime) / 60000).toFixed(1);
    console.error(`\n✗ ${job.locale} failed after ${elapsed} minutes: ${e.message}`);
    // Continue with next locale even if one fails
    console.log(`  Continuing with remaining locales...`);
  }
}

console.log(`\n${"=".repeat(60)}`);
console.log(`All jobs complete: ${new Date().toISOString()}`);
console.log(`${"=".repeat(60)}`);
