#!/usr/bin/env node
/**
 * run-all-translations.mjs
 *
 * Master script to run translations for all priority locales.
 * Runs locales **sequentially** by default to avoid OOM (each process needs ~8 GB).
 *
 * Usage:
 *   node --env-file=.env scripts/run-all-translations.mjs
 *   node --env-file=.env scripts/run-all-translations.mjs --locales es,zh,pl
 *   node --env-file=.env scripts/run-all-translations.mjs --locales es --recheck-first
 *   node --env-file=.env scripts/run-all-translations.mjs --parallel   # legacy: detached processes
 */

import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const LOGS_DIR = path.join(ROOT, "logs");
await fs.mkdir(LOGS_DIR, { recursive: true });

function parseArgs(argv) {
  const opts = { locales: ["es", "zh", "pl"], recheckFirst: false, parallel: false };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--locales" && argv[i + 1]) opts.locales = argv[++i].split(",");
    if (argv[i] === "--recheck-first") opts.recheckFirst = true;
    if (argv[i] === "--parallel") opts.parallel = true;
  }
  return opts;
}

const opts = parseArgs(process.argv.slice(2));

function buildArgs(locale, extraArgs = []) {
  return [
    "--max-old-space-size=8192",
    "--env-file=.env",
    "scripts/translate-curriculum-batch.mjs",
    "--locale", locale,
    "--apply",
    "--resume",
    "--concurrency", "5",
    ...extraArgs,
  ];
}

/** Run a single locale translation and wait for it to finish. */
function runSequential(locale, extraArgs = []) {
  const args = buildArgs(locale, extraArgs);
  const logOut = path.join(LOGS_DIR, `${locale}-translate.log`);
  const logErr = path.join(LOGS_DIR, `${locale}-translate-err.log`);

  console.log(`\n[${locale}] Starting: node ${args.join(" ")}`);
  console.log(`[${locale}] Logs → ${logOut}`);

  return new Promise(async (resolve, reject) => {
    const out = await fs.open(logOut, "a");
    const err = await fs.open(logErr, "a");

    const child = spawn("node", args, {
      cwd: ROOT,
      stdio: ["ignore", out.fd, err.fd],
    });

    child.on("close", async (code) => {
      await out.close();
      await err.close();
      if (code === 0) {
        console.log(`[${locale}] ✓ Completed successfully`);
        resolve({ locale, code });
      } else {
        console.error(`[${locale}] ✗ Exited with code ${code} — check ${logErr}`);
        resolve({ locale, code }); // resolve (not reject) so remaining locales still run
      }
    });

    child.on("error", async (e) => {
      await out.close();
      await err.close();
      console.error(`[${locale}] ✗ Spawn error: ${e.message}`);
      resolve({ locale, code: 1 });
    });
  });
}

/** Launch a detached process (legacy parallel mode). */
async function launchDetached(locale, extraArgs = []) {
  const args = buildArgs(locale, extraArgs);
  const logOut = path.join(LOGS_DIR, `${locale}-translate.log`);
  const logErr = path.join(LOGS_DIR, `${locale}-translate-err.log`);

  console.log(`[${locale}] Launching (detached): node ${args.join(" ")}`);
  console.log(`[${locale}] Logs → ${logOut}`);

  const out = await fs.open(logOut, "a");
  const err = await fs.open(logErr, "a");

  const child = spawn("node", args, {
    cwd: ROOT,
    stdio: ["ignore", out.fd, err.fd],
    detached: true,
  });

  child.unref();
  console.log(`[${locale}] PID: ${child.pid}`);
  return { locale, pid: child.pid };
}

async function main() {
  console.log("=== Koydo Translation Pipeline ===");
  console.log(`Locales: ${opts.locales.join(", ")}`);
  console.log(`Mode: ${opts.parallel ? "parallel (detached)" : "sequential"}`);
  console.log(`Recheck existing: ${opts.recheckFirst}`);

  if (opts.parallel) {
    // Legacy parallel mode — may OOM on machines with < 24 GB RAM
    const launched = [];
    for (const locale of opts.locales) {
      const extraArgs = opts.recheckFirst && locale === "es" ? ["--recheck"] : [];
      launched.push(await launchDetached(locale, extraArgs));
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
    for (const { locale } of launched) {
      console.log(`  Get-Content logs/${locale}-translate.log -Tail 5 -Wait`);
    }
  } else {
    // Sequential mode (default) — one locale at a time, safe on 16 GB machines
    const results = [];
    for (const locale of opts.locales) {
      const extraArgs = opts.recheckFirst && locale === "es" ? ["--recheck"] : [];
      const result = await runSequential(locale, extraArgs);
      results.push(result);
    }

    console.log("\n=== Translation Pipeline Complete ===");
    for (const { locale, code } of results) {
      console.log(`  ${locale}: ${code === 0 ? "✓ success" : `✗ exit code ${code}`}`);
    }
  }
}

main().catch(e => { console.error(e); process.exit(1); });
