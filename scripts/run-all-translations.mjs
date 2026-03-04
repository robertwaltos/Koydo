#!/usr/bin/env node
/**
 * run-all-translations.mjs
 *
 * Master script to run translations for all priority locales.
 * Spawns separate processes for each locale with proper logging.
 *
 * Usage:
 *   node scripts/run-all-translations.mjs
 *   node scripts/run-all-translations.mjs --locales es,zh,pl
 *   node scripts/run-all-translations.mjs --locales es --recheck-first
 */

import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const LOGS_DIR = path.join(ROOT, "logs");
await fs.mkdir(LOGS_DIR, { recursive: true });

function parseArgs(argv) {
  const opts = { locales: ["es", "zh", "pl"], recheckFirst: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--locales" && argv[i + 1]) opts.locales = argv[++i].split(",");
    if (argv[i] === "--recheck-first") opts.recheckFirst = true;
  }
  return opts;
}

const opts = parseArgs(process.argv.slice(2));

function launchTranslation(locale, extraArgs = []) {
  const logOut = path.join(LOGS_DIR, `${locale}-translate.log`);
  const logErr = path.join(LOGS_DIR, `${locale}-translate-err.log`);

  const args = [
    "--max-old-space-size=8192",
    "--env-file=.env",
    "scripts/translate-curriculum-batch.mjs",
    "--locale", locale,
    "--apply",
    "--resume",
    "--concurrency", "5",
    ...extraArgs,
  ];

  console.log(`[${locale}] Launching: node ${args.join(" ")}`);
  console.log(`[${locale}] Logs: ${logOut}`);

  const outFd = fs.open(logOut, "a").then(f => f);
  const errFd = fs.open(logErr, "a").then(f => f);

  return Promise.all([outFd, errFd]).then(([out, err]) => {
    const child = spawn("node", args, {
      cwd: ROOT,
      stdio: ["ignore", out, err],
      detached: true,
    });

    child.unref();
    console.log(`[${locale}] PID: ${child.pid}`);
    return { locale, pid: child.pid };
  });
}

async function main() {
  console.log("=== Koydo Translation Pipeline ===");
  console.log(`Locales: ${opts.locales.join(", ")}`);
  console.log(`Recheck existing: ${opts.recheckFirst}`);
  console.log("");

  const launched = [];

  for (const locale of opts.locales) {
    const extraArgs = [];
    if (opts.recheckFirst && locale === "es") {
      extraArgs.push("--recheck");
    }
    const info = await launchTranslation(locale, extraArgs);
    launched.push(info);
    // Stagger launches by 5 seconds to avoid initial API burst
    if (opts.locales.indexOf(locale) < opts.locales.length - 1) {
      console.log("  (waiting 5s before next launch...)\n");
      await new Promise(r => setTimeout(r, 5000));
    }
  }

  console.log("\n=== All jobs launched ===");
  for (const { locale, pid } of launched) {
    console.log(`  ${locale}: PID ${pid} → logs/${locale}-translate.log`);
  }
  console.log("\nMonitor with:");
  console.log("  Get-Content logs/es-translate.log -Tail 5 -Wait");
  console.log("  Get-Content logs/zh-translate.log -Tail 5 -Wait");
  console.log("  Get-Content logs/pl-translate.log -Tail 5 -Wait");
}

main().catch(e => { console.error(e); process.exit(1); });
