#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const RUN_REPORT_PATH = path.join(ROOT, "public", "GAMES-500-PIPELINE-RUN.json");

function relativeFromRoot(target) {
  return path.relative(ROOT, target).replaceAll("\\", "/");
}

function runStep(step) {
  const startedAt = Date.now();
  const result = spawnSync(step.command, step.args, {
    cwd: ROOT,
    stdio: "inherit",
    shell: true,
  });
  const durationMs = Date.now() - startedAt;
  const status = result.status ?? 1;
  return {
    id: step.id,
    command: `${step.command} ${step.args.join(" ")}`.trim(),
    status: status === 0 ? "pass" : "fail",
    exitCode: status,
    durationMs,
  };
}

async function writeRunReport(report) {
  await fs.mkdir(path.dirname(RUN_REPORT_PATH), { recursive: true });
  await fs.writeFile(RUN_REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8");
}

async function main() {
  const passthroughArgs = process.argv.slice(2);
  const steps = [
    {
      id: "implementation-audit",
      command: "node",
      args: ["scripts/games-implementation-audit.mjs"],
    },
    {
      id: "spec-audit-500",
      command: "node",
      args: ["scripts/games500-spec-audit.mjs"],
    },
    {
      id: "games1-contract-audit",
      command: "node",
      args: ["scripts/games1-contract-audit.mjs"],
    },
    {
      id: "reward-realm-contract-test",
      command: "node",
      args: ["scripts/test-games-reward-realm-contract.mjs"],
    },
    {
      id: "open-source-audit",
      command: "node",
      args: ["scripts/audit-open-source-game-repos.mjs"],
    },
    {
      id: "factory-plan",
      command: "node",
      args: ["scripts/build-500-games-factory-plan.mjs", ...passthroughArgs],
    },
    {
      id: "xr-readiness-status",
      command: "node",
      args: ["scripts/check-device-gateway-physical-validation.mjs", "--no-fail"],
    },
  ];

  const startedAtIso = new Date().toISOString();
  const stepResults = [];
  let failed = false;
  let firstFailureCode = 0;

  for (const step of steps) {
    const result = runStep(step);
    stepResults.push(result);
    if (result.status === "fail") {
      failed = true;
      firstFailureCode = result.exitCode;
      break;
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    startedAt: startedAtIso,
    finishedAt: new Date().toISOString(),
    status: failed ? "fail" : "pass",
    steps: stepResults,
    output: relativeFromRoot(RUN_REPORT_PATH),
  };

  await writeRunReport(report);

  console.log(
    `[games-500-factory-pipeline] status=${report.status} steps=${stepResults.length} report=${relativeFromRoot(RUN_REPORT_PATH)}`,
  );

  if (failed) {
    process.exitCode = firstFailureCode || 1;
  }
}

main().catch((error) => {
  console.error("[games-500-factory-pipeline] failed:", error);
  process.exitCode = 1;
});
