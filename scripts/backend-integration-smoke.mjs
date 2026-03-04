import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const outJson = path.resolve("public/BACKEND-INTEGRATION-SMOKE-REPORT.json");
const outMd = path.resolve("public/BACKEND-INTEGRATION-SMOKE-REPORT.md");

const CONTRACT_STEPS = [
  {
    id: "placement_scoring_contract",
    name: "Placement diagnostic scoring contract",
    command: "node",
    args: ["scripts/test-placement-diagnostic-scoring.mjs"],
  },
  {
    id: "placement_flow_contract",
    name: "Placement diagnostic flow contract",
    command: "node",
    args: ["scripts/test-placement-diagnostic-flow-contract.mjs"],
  },
  {
    id: "audiobook_checkpoint_contract",
    name: "Audiobook checkpoint contract",
    command: "node",
    args: ["scripts/test-audiobook-checkpoint-contract.mjs"],
  },
  {
    id: "device_gateway_confidence_contract",
    name: "Device gateway confidence contract",
    command: "node",
    args: ["scripts/test-device-gateway-confidence-contract.mjs"],
  },
  {
    id: "review_queue_contract",
    name: "Review queue contract",
    command: "node",
    args: ["scripts/test-review-queue-contract.mjs"],
  },
  {
    id: "remediation_tasking_contract",
    name: "Remediation tasking contract",
    command: "node",
    args: ["scripts/test-remediation-tasking-contract.mjs"],
  },
  {
    id: "offline_progress_sync_contract",
    name: "Offline progress sync contract",
    command: "node",
    args: ["scripts/test-offline-progress-sync-contract.mjs"],
  },
  {
    id: "social_cohorts_contract",
    name: "Social cohorts and challenges contract",
    command: "node",
    args: ["scripts/test-social-cohorts-challenges-contract.mjs"],
  },
  {
    id: "creator_pipeline_contract",
    name: "Creator pipeline contract",
    command: "node",
    args: ["scripts/test-creator-pipeline-contract.mjs"],
  },
  {
    id: "storyforge_cinema_contract",
    name: "StoryForge cinema contract",
    command: "node",
    args: ["scripts/test-storyforge-cinema-contract.mjs"],
  },
  {
    id: "teacher_access_contract",
    name: "Teacher access contract",
    command: "node",
    args: ["scripts/test-teacher-access-contract.mjs"],
  },
  {
    id: "billing_webhook_lock_contract",
    name: "Billing webhook processing lock contract",
    command: "node",
    args: ["scripts/test-billing-webhook-processing-lock.mjs"],
  },
  {
    id: "revenuecat_resolution_contract",
    name: "RevenueCat offerings resolution contract",
    command: "node",
    args: ["scripts/test-revenuecat-offerings-resolution.mjs"],
  },
];

function parseArgs(argv) {
  const hasFlag = (flag) => argv.includes(flag) || argv.includes(flag.replace(/^--/, ""));
  const includeRouteSmoke = hasFlag("--include-route-smoke");
  const skipRouteSmoke = hasFlag("--skip-route-smoke") || !includeRouteSmoke;

  return {
    json: hasFlag("--json"),
    noFail: hasFlag("--no-fail"),
    writeReport: !hasFlag("--no-write-report"),
    skipRouteSmoke,
    includeBuildForRouteSmoke: hasFlag("--route-smoke-with-build"),
  };
}

function runStep(step) {
  const startedAt = Date.now();
  const result = spawnSync(step.command, step.args, {
    encoding: "utf8",
    shell: process.platform === "win32",
    maxBuffer: 20 * 1024 * 1024,
  });

  return {
    exitCode: typeof result.status === "number" ? result.status : 1,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    durationMs: Date.now() - startedAt,
  };
}

function parseJsonOutput(stdout) {
  const trimmed = stdout.trim();
  if (!trimmed) return null;

  try {
    return JSON.parse(trimmed);
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start < 0 || end <= start) {
      return null;
    }
    try {
      return JSON.parse(trimmed.slice(start, end + 1));
    } catch {
      return null;
    }
  }
}

function firstUsefulLine(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line.length > 0) ?? "";
}

function summarizeOpsPreflight(result) {
  const parsed = parseJsonOutput(result.stdout);
  if (!parsed || !parsed.totals) {
    return {
      status: "fail",
      detail: "Unable to parse JSON output from ops preflight.",
      payload: parsed,
    };
  }

  const pass = Number(parsed.totals.pass ?? 0);
  const warn = Number(parsed.totals.warn ?? 0);
  const fail = Number(parsed.totals.fail ?? 0);
  const skip = Number(parsed.totals.skip ?? 0);
  const status =
    result.exitCode !== 0 || fail > 0 ? "fail" : warn > 0 || skip > 0 ? "warn" : "pass";

  return {
    status,
    detail: `pass=${pass} warn=${warn} fail=${fail} skip=${skip}`,
    payload: parsed,
  };
}

function summarizeCommand(result) {
  if (result.exitCode === 0) {
    return {
      status: "pass",
      detail: "Command passed.",
    };
  }

  const reason = firstUsefulLine(result.stderr) || firstUsefulLine(result.stdout) || "Command failed.";
  return {
    status: "fail",
    detail: reason,
  };
}

function hasMissingBuildError(result) {
  const combined = `${result.stdout}\n${result.stderr}`.toLowerCase();
  return combined.includes("could not find a production build");
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Backend Integration Smoke Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Duration: ${report.totalDurationMs}ms`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Pass: ${report.totals.pass}`);
  lines.push(`- Warn: ${report.totals.warn}`);
  lines.push(`- Fail: ${report.totals.fail}`);
  lines.push(`- Total checks: ${report.totals.total}`);
  lines.push("");
  lines.push("## Checks");
  lines.push("");
  lines.push("| Check | Status | Duration (ms) | Detail |");
  lines.push("| --- | --- | ---: | --- |");
  for (const check of report.checks) {
    lines.push(`| ${check.name} | ${String(check.status).toUpperCase()} | ${check.durationMs} | ${check.detail} |`);
  }
  lines.push("");

  const nonPassChecks = report.checks.filter((check) => check.status !== "pass");
  if (nonPassChecks.length > 0) {
    lines.push("## Attention Items");
    lines.push("");
    for (const check of nonPassChecks) {
      lines.push(`- ${check.name}: ${check.detail}`);
    }
    lines.push("");
  }

  lines.push("## Commands");
  lines.push("");
  for (const check of report.checks) {
    lines.push(`- ${check.name}: \`${check.command}\``);
  }
  lines.push("");
  return lines.join("\n");
}

function printCheck(check) {
  const label = check.status === "pass" ? "PASS" : check.status === "warn" ? "WARN" : "FAIL";
  console.log(`[${label}] ${check.name} - ${check.detail} (${check.durationMs}ms)`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const startedAt = Date.now();
  const checks = [];

  const steps = [
    {
      id: "ops_preflight",
      name: "Ops preflight (env/db/webhook/auth-billing)",
      command: "node",
      args: ["scripts/ops-preflight.mjs", "--json", "--start-server-if-needed"],
      kind: "ops-preflight-json",
    },
    ...(
      args.skipRouteSmoke
        ? []
        : [{
          id: "route_smoke",
          name: "Route smoke (launch-critical paths + /api/health)",
          command: "node",
          args: args.includeBuildForRouteSmoke
            ? ["scripts/smoke-test.mjs"]
            : ["scripts/smoke-test.mjs", "--skip-build"],
          fallbackArgs: args.includeBuildForRouteSmoke ? null : ["scripts/smoke-test.mjs"],
          kind: "command",
        }]
    ),
    ...CONTRACT_STEPS.map((step) => ({ ...step, kind: "command" })),
  ];

  for (const step of steps) {
    let result = runStep(step);
    let summary =
      step.kind === "ops-preflight-json" ? summarizeOpsPreflight(result) : summarizeCommand(result);
    let commandUsed = [step.command, ...step.args].join(" ");

    if (
      step.id === "route_smoke"
      && summary.status === "fail"
      && step.fallbackArgs
      && hasMissingBuildError(result)
    ) {
      const fallbackResult = runStep({
        ...step,
        args: step.fallbackArgs,
      });
      const fallbackSummary = summarizeCommand(fallbackResult);
      commandUsed = [step.command, ...step.fallbackArgs].join(" ");
      result = fallbackResult;
      summary = {
        ...fallbackSummary,
        detail:
          fallbackSummary.status === "pass"
            ? "No prebuilt .next output was available; reran route smoke with build and passed."
            : `No prebuilt .next output was available; reran route smoke with build but failed: ${fallbackSummary.detail}`,
      };
    }

    const check = {
      id: step.id,
      name: step.name,
      status: summary.status,
      detail: summary.detail,
      durationMs: result.durationMs,
      command: commandUsed,
      exitCode: result.exitCode,
      outputPreview: {
        stdout: result.stdout.trim().slice(0, 2000),
        stderr: result.stderr.trim().slice(0, 2000),
      },
      payload: "payload" in summary ? summary.payload : null,
    };

    checks.push(check);
    printCheck(check);
  }

  const totals = {
    pass: checks.filter((check) => check.status === "pass").length,
    warn: checks.filter((check) => check.status === "warn").length,
    fail: checks.filter((check) => check.status === "fail").length,
    total: checks.length,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    totalDurationMs: Date.now() - startedAt,
    totals,
    checks,
  };

  if (args.writeReport) {
    fs.mkdirSync(path.dirname(outJson), { recursive: true });
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(outMd, toMarkdown(report), "utf8");
    console.log(`Wrote ${path.relative(process.cwd(), outJson)}`);
    console.log(`Wrote ${path.relative(process.cwd(), outMd)}`);
  }

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  }

  if (!args.noFail && totals.fail > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(detail);
  process.exitCode = 1;
});
