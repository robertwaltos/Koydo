#!/usr/bin/env node
/**
 * run-codex-verification-sweep.mjs
 *
 * Batch runner for codex-localization-audit across many modules for one locale.
 *
 * Usage:
 *   node scripts/run-codex-verification-sweep.mjs --locale es
 *   node scripts/run-codex-verification-sweep.mjs --locale es --limit 100
 *   node scripts/run-codex-verification-sweep.mjs --locale es --module accounting-finance-301
 *   node scripts/run-codex-verification-sweep.mjs --locale es --apply --verify-with-ai --ai-limit 80
 */

import fs from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();

function parseArgs(argv) {
  const opts = {
    locale: "",
    limit: 0,
    moduleId: "",
    apply: false,
    verifyWithAi: false,
    aiLimit: 0,
    batchSize: 40,
    keepModuleReports: false,
    eligibleOnly: false,

  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("--locale=")) {
      opts.locale = String(arg.split("=")[1] || "").trim();
      continue;
    }
    if (arg.startsWith("--limit=")) {
      opts.limit = Math.max(0, Number(arg.split("=")[1]) || 0);
      continue;
    }
    if (arg.startsWith("--module=")) {
      opts.moduleId = String(arg.split("=")[1] || "").trim();
      continue;
    }
    if (arg === "--locale" && argv[i + 1]) {
      opts.locale = String(argv[++i]).trim();
      continue;
    }
    if (arg === "--limit" && argv[i + 1]) {
      opts.limit = Math.max(0, Number(argv[++i]) || 0);
      continue;
    }
    if (arg === "--module" && argv[i + 1]) {
      opts.moduleId = String(argv[++i]).trim();
      continue;
    }
    if (arg === "--apply") {
      opts.apply = true;
      continue;
    }
    if (arg === "--keep-module-reports") {
      opts.keepModuleReports = true;
      continue;
    }
    if (arg === "--eligible-only") {
      opts.eligibleOnly = true;
      continue;
    }
    if (arg === "--verify-with-ai") {
      opts.verifyWithAi = true;
      continue;
    }
    if (arg === "--ai-limit" && argv[i + 1]) {
      opts.aiLimit = Math.max(0, Number(argv[++i]) || 0);
      continue;
    }
    if (arg === "--batch-size" && argv[i + 1]) {
      opts.batchSize = Math.max(1, Number(argv[++i]) || 40);
      continue;
    }
    if (!arg.startsWith("--")) {
      if (!opts.locale) {
        opts.locale = String(arg).trim();
        continue;
      }
      if (!opts.moduleId && opts.limit === 0 && /^\d+$/.test(String(arg).trim())) {
        opts.limit = Math.max(0, Number(arg) || 0);
        continue;
      }
      if (!opts.moduleId) {
        opts.moduleId = String(arg).trim();
        continue;
      }
    }
  }

  return opts;
}

function toMd(summary) {
  const lines = [];
  lines.push(`# Codex Verification Sweep (${summary.locale})`);
  lines.push("");
  lines.push(`Generated: ${summary.generatedAt}`);
  lines.push(`Mode: ${summary.apply ? "apply" : "dry-run"}`);
  lines.push("");
  lines.push("## Totals");
  lines.push(`- Modules scanned: ${summary.modulesScanned}`);
  lines.push(`- Verified: ${summary.statusCounts.verified || 0}`);
  lines.push(`- Fixed required: ${summary.statusCounts.fixed_required || 0}`);
  lines.push(`- Blocked: ${summary.statusCounts.blocked || 0}`);
  lines.push(`- Unknown/failed: ${summary.statusCounts.unknown || 0}`);
  lines.push(`- AI reviewed fields: ${summary.aiTotals.reviewed || 0}`);
  lines.push(`- AI flagged fields: ${summary.aiTotals.flagged || 0}`);
  lines.push(`- AI fixes applied: ${summary.aiTotals.fixedApplied || 0}`);
  lines.push(`- AI batch errors: ${summary.aiTotals.errors || 0}`);
  lines.push("");
  lines.push("## Station Blockers");
  lines.push(`- Station 1 blocked: ${summary.stationBlockCounts.station1 || 0}`);
  lines.push(`- Station 2 blocked: ${summary.stationBlockCounts.station2 || 0}`);
  lines.push(`- Station 3 blocked: ${summary.stationBlockCounts.station3 || 0}`);
  lines.push(`- Station 4 blocked/fixes: ${summary.stationBlockCounts.station4 || 0}`);
  lines.push("");
  lines.push("## Top Systemic Issues");
  if (summary.topIssues.length === 0) {
    lines.push("- none");
  } else {
    for (const issue of summary.topIssues.slice(0, 20)) {
      lines.push(`- ${issue.type}: ${issue.count}`);
    }
  }
  lines.push("");
  lines.push("## Sample Blocked Modules");
  if (summary.sampleBlocked.length === 0) {
    lines.push("- none");
  } else {
    for (const row of summary.sampleBlocked.slice(0, 30)) {
      lines.push(`- ${row.moduleId}: ${row.reason}`);
    }
  }
  lines.push("");
  return lines.join("\n");
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (!opts.locale) {
    console.error("Usage: node scripts/run-codex-verification-sweep.mjs --locale <locale> [--limit N] [--module id] [--apply]");
    process.exit(1);
  }

  const localeDir = path.join(ROOT, "public", "translations", opts.locale);
  if (!existsSync(localeDir)) {
    console.error(`Missing locale directory: ${localeDir}`);
    process.exit(1);
  }

  const files = await fs.readdir(localeDir);
  const moduleIds = files
    .filter((fileName) => fileName.endsWith(".json"))
    .filter((fileName) => !fileName.startsWith("_"))
    .filter((fileName) => !fileName.endsWith(".codex-audit.json"))
    .map((fileName) => fileName.replace(/\.json$/i, ""))
    .sort();

  let targetModules = moduleIds;
  if (opts.moduleId) {
    targetModules = moduleIds.filter((id) => id === opts.moduleId);
  }
  if (opts.eligibleOnly && !opts.moduleId) {
    const priorSweepPath = path.join(localeDir, "_codex-audit-sweep.json");
    if (!existsSync(priorSweepPath)) {
      console.error(`Missing prior sweep report required for --eligible-only: ${priorSweepPath}`);
      process.exit(1);
    }
    const priorSweep = JSON.parse(await fs.readFile(priorSweepPath, "utf8"));
    const eligibleSet = new Set(
      (Array.isArray(priorSweep.modules) ? priorSweep.modules : [])
        .filter((entry) => entry.station1 && entry.station3)
        .map((entry) => entry.moduleId),
    );
    targetModules = targetModules.filter((id) => eligibleSet.has(id));
  }
  if (opts.limit > 0 && targetModules.length > opts.limit) {
    targetModules = targetModules.slice(0, opts.limit);
  }

  if (targetModules.length === 0) {
    console.log("No modules matched the sweep filter.");
    process.exit(0);
  }

  console.log(
    `[codex-sweep] locale=${opts.locale} modules=${targetModules.length} mode=${opts.apply ? "apply" : "dry-run"}`,
  );

  const statusCounts = { verified: 0, fixed_required: 0, blocked: 0, unknown: 0 };
  const stationBlockCounts = { station1: 0, station2: 0, station3: 0, station4: 0 };
  const issueCounts = {};
  const sampleBlocked = [];
  const aiTotals = { reviewed: 0, flagged: 0, fixedApplied: 0, errors: 0 };
  const modules = [];

  for (let i = 0; i < targetModules.length; i++) {
    const moduleId = targetModules[i];
    const reportPath = path.join("public", "translations", opts.locale, `${moduleId}.codex-audit.json`);
    const absoluteReportPath = path.join(ROOT, reportPath);
    const args = ["scripts/codex-localization-audit.mjs", opts.locale, moduleId, "--report-path", reportPath];
    if (!opts.apply) args.push("--dry-run");
    if (opts.verifyWithAi) args.push("--verify-with-ai", "--ai-limit", String(opts.aiLimit), "--batch-size", String(opts.batchSize));
    if (opts.apply) args.push("--apply-fixes");

    const run = spawnSync("node", args, { cwd: ROOT, encoding: "utf8" });
    const exitCode = Number(run.status ?? 1);

    let report = null;
    try {
      const raw = await fs.readFile(absoluteReportPath, "utf8");
      report = JSON.parse(raw);
    } catch {
      report = null;
    }

    const finalStatus = report?.summary?.finalStatus || (exitCode === 0 ? "verified" : exitCode === 2 ? "blocked" : "unknown");
    if (Object.prototype.hasOwnProperty.call(statusCounts, finalStatus)) {
      statusCounts[finalStatus] += 1;
    } else {
      statusCounts.unknown += 1;
    }

    if (report?.chain) {
      if (!report.chain.station1?.ok) stationBlockCounts.station1 += 1;
      if (!report.chain.station2?.ok) stationBlockCounts.station2 += 1;
      if (!report.chain.station3?.ok) stationBlockCounts.station3 += 1;
      if (!report.chain.station4?.ok) stationBlockCounts.station4 += 1;
    }

    const recurring = Array.isArray(report?.summary?.recurringIssues) ? report.summary.recurringIssues : [];
    for (const issue of recurring) {
      issueCounts[issue.type] = (issueCounts[issue.type] || 0) + Number(issue.count || 0);
    }
    aiTotals.reviewed += Number(report?.ai?.reviewed || 0);
    aiTotals.flagged += Number(report?.ai?.flagged || 0);
    aiTotals.fixedApplied += Number(report?.ai?.fixedApplied || 0);
    aiTotals.errors += Number(report?.ai?.errors || 0);

    if (finalStatus !== "verified" && sampleBlocked.length < 80) {
      const reason =
        report?.chain?.station3?.detail ||
        report?.chain?.station2?.detail ||
        report?.chain?.station1?.detail ||
        "unknown";
      sampleBlocked.push({ moduleId, reason });
    }

    modules.push({
      moduleId,
      status: finalStatus,
      exitCode,
      station1: Boolean(report?.chain?.station1?.ok),
      station2: Boolean(report?.chain?.station2?.ok),
      station3: Boolean(report?.chain?.station3?.ok),
      station4: Boolean(report?.chain?.station4?.ok),
      reportPath: absoluteReportPath,
    });

    if (!opts.keepModuleReports) {
      await fs.rm(absoluteReportPath, { force: true });
      await fs.rm(absoluteReportPath.replace(/\.json$/i, ".md"), { force: true });
    }

    if ((i + 1) % 25 === 0 || i + 1 === targetModules.length) {
      console.log(`[codex-sweep] progress ${i + 1}/${targetModules.length}`);
    }
  }

  const topIssues = Object.entries(issueCounts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 40);

  const summary = {
    generatedAt: new Date().toISOString(),
    locale: opts.locale,
    apply: opts.apply,
    modulesScanned: targetModules.length,
    statusCounts,
    stationBlockCounts,
    aiTotals,
    topIssues,
    sampleBlocked,
    modules,
  };

  const sweepJsonPath = path.join(localeDir, "_codex-audit-sweep.json");
  const sweepMdPath = path.join(localeDir, "_codex-audit-sweep.md");
  await fs.writeFile(sweepJsonPath, JSON.stringify(summary, null, 2));
  await fs.writeFile(sweepMdPath, toMd(summary));

  console.log(`[codex-sweep] done. JSON: ${sweepJsonPath}`);
  console.log(`[codex-sweep] done. MD:   ${sweepMdPath}`);
}

main().catch((error) => {
  console.error("FATAL:", error.message);
  process.exit(1);
});
