import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const defaultOutJson = path.resolve("public/LAUNCH-SIGNOFF-REPORT.json");
const defaultOutMd = path.resolve("public/LAUNCH-SIGNOFF-REPORT.md");
const defaultSourceFile = ".env.production.audit";

function parseArgs(argv) {
  const hasFlag = (flag) => argv.includes(flag) || argv.includes(flag.replace(/^--/, ""));
  const readOption = (flag) => {
    const exactIndex = argv.indexOf(flag);
    if (exactIndex >= 0 && argv[exactIndex + 1]) {
      return argv[exactIndex + 1];
    }

    const prefix = `${flag}=`;
    const inline = argv.find((entry) => entry.startsWith(prefix));
    if (inline) {
      return inline.slice(prefix.length);
    }

    return "";
  };

  return {
    json: hasFlag("--json"),
    noFail: hasFlag("--no-fail"),
    sourceFile: readOption("--source-file") || defaultSourceFile,
    outJson: readOption("--out-json") || defaultOutJson,
    outMd: readOption("--out-md") || defaultOutMd,
  };
}

function runStep(step) {
  const startedAt = Date.now();
  const result = spawnSync(step.command, step.args, {
    encoding: "utf8",
    shell: process.platform === "win32",
    maxBuffer: 30 * 1024 * 1024,
  });

  return {
    exitCode: typeof result.status === "number" ? result.status : 1,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    durationMs: Date.now() - startedAt,
  };
}

function parseJsonOutput(stdout) {
  const trimmed = (stdout ?? "").trim();
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

function readJsonFile(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function firstUsefulLine(text) {
  return (text ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line.length > 0) ?? "";
}

function summarizeBuild(step, result) {
  if (result.exitCode === 0) {
    return {
      status: "pass",
      detail: "Production build completed.",
      payload: null,
    };
  }

  return {
    status: "fail",
    detail: firstUsefulLine(result.stderr) || firstUsefulLine(result.stdout) || "Build command failed.",
    payload: null,
  };
}

function summarizeEnv(step, result) {
  const payload = parseJsonOutput(result.stdout);
  if (!payload || !payload.totals) {
    return {
      status: "fail",
      detail: "Unable to parse env readiness JSON.",
      payload,
    };
  }

  const pass = Number(payload.totals.pass ?? 0);
  const warn = Number(payload.totals.warn ?? 0);
  const fail = Number(payload.totals.fail ?? 0);
  const runtime = payload.runtime?.runtime ?? "unknown";
  const status = result.exitCode !== 0 || fail > 0 || warn > 0 ? "fail" : "pass";

  return {
    status,
    detail: `pass=${pass} warn=${warn} fail=${fail} runtime=${runtime}`,
    payload,
  };
}

function summarizeChecklist(step, result) {
  const payload = readJsonFile(path.resolve("public/PRODUCTION-ENV-CHECKLIST.json"));
  const envTotals = payload?.envReport?.totals;

  if (!envTotals) {
    return {
      status: result.exitCode === 0 ? "warn" : "fail",
      detail: result.exitCode === 0
        ? "Checklist command passed but checklist JSON payload was not readable."
        : "Production checklist command failed and checklist JSON payload was not readable.",
      payload,
    };
  }

  const pass = Number(envTotals.pass ?? 0);
  const warn = Number(envTotals.warn ?? 0);
  const fail = Number(envTotals.fail ?? 0);
  const status = result.exitCode !== 0 || fail > 0 || warn > 0 ? "fail" : "pass";

  return {
    status,
    detail: `pass=${pass} warn=${warn} fail=${fail}`,
    payload,
  };
}

function summarizePreflight(step, result) {
  const payload = parseJsonOutput(result.stdout);
  if (!payload || !payload.totals) {
    return {
      status: "fail",
      detail: "Unable to parse ops preflight JSON.",
      payload,
    };
  }

  const pass = Number(payload.totals.pass ?? 0);
  const warn = Number(payload.totals.warn ?? 0);
  const fail = Number(payload.totals.fail ?? 0);
  const skip = Number(payload.totals.skip ?? 0);
  const status = result.exitCode !== 0 || fail > 0 || warn > 0 ? "fail" : "pass";

  return {
    status,
    detail: `pass=${pass} warn=${warn} fail=${fail} skip=${skip}`,
    payload,
  };
}

function summarizeBackendIntegration(step, result) {
  const payload = parseJsonOutput(result.stdout) || readJsonFile(path.resolve("public/BACKEND-INTEGRATION-SMOKE-REPORT.json"));
  if (!payload || !payload.totals) {
    return {
      status: result.exitCode === 0 ? "warn" : "fail",
      detail: result.exitCode === 0
        ? "Integration command passed but integration JSON payload was not readable."
        : "Integration command failed and integration JSON payload was not readable.",
      payload,
    };
  }

  const pass = Number(payload.totals.pass ?? 0);
  const warn = Number(payload.totals.warn ?? 0);
  const fail = Number(payload.totals.fail ?? 0);
  const status = result.exitCode !== 0 || fail > 0 || warn > 0 ? "fail" : "pass";

  return {
    status,
    detail: `pass=${pass} warn=${warn} fail=${fail}`,
    payload,
  };
}

function summarizeApiReadiness(step, result) {
  const payload = parseJsonOutput(result.stdout) || readJsonFile(path.resolve("public/API-CONNECTION-READINESS-PROD-LIVE.json"));
  if (!payload || !payload.totals) {
    return {
      status: result.exitCode === 0 ? "warn" : "fail",
      detail: result.exitCode === 0
        ? "API readiness command passed but JSON payload was not readable."
        : "API readiness command failed and JSON payload was not readable.",
      payload,
    };
  }

  const ready = Number(payload.totals.ready ?? 0);
  const needsKeys = Number(payload.totals.needs_keys ?? 0);
  const optionalPending = Number(payload.totals.optional_pending ?? 0);
  const notRequired = Number(payload.totals.not_required ?? 0);
  const status = result.exitCode !== 0 || needsKeys > 0 ? "fail" : "pass";

  return {
    status,
    detail: `ready=${ready} needs_keys=${needsKeys} optional_pending=${optionalPending} not_required=${notRequired}`,
    payload,
  };
}

function renderMarkdown(report) {
  const lines = [];
  lines.push("# Launch Signoff Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push(`Source file: ${report.sourceFile}`);
  lines.push("Runtime gate: production live-mode required");
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Overall: ${report.overall.toUpperCase()}`);
  lines.push(`- Pass: ${report.totals.pass}`);
  lines.push(`- Warn: ${report.totals.warn}`);
  lines.push(`- Fail: ${report.totals.fail}`);
  lines.push(`- Total steps: ${report.totals.total}`);
  lines.push("");
  lines.push("## Gate Steps");
  lines.push("");
  lines.push("| Step | Status | Duration (ms) | Detail |");
  lines.push("| --- | --- | ---: | --- |");
  for (const step of report.steps) {
    lines.push(`| ${step.name} | ${step.status.toUpperCase()} | ${step.durationMs} | ${step.detail} |`);
  }
  lines.push("");

  const blockers = report.steps.filter((step) => step.status !== "pass");
  if (blockers.length > 0) {
    lines.push("## Blockers");
    lines.push("");
    for (const blocker of blockers) {
      lines.push(`- ${blocker.name}: ${blocker.detail}`);
    }
    lines.push("");
  }

  lines.push("## Artifacts");
  lines.push("");
  for (const artifact of report.artifacts) {
    lines.push(`- ${artifact}`);
  }
  lines.push("");

  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const startedAt = Date.now();

  const steps = [
    {
      id: "build",
      name: "Production Build",
      command: "npm",
      args: ["run", "build"],
      summarize: summarizeBuild,
    },
    {
      id: "env_readiness",
      name: "Env Readiness (Production Strict)",
      command: "node",
      args: [
        "scripts/check-env.mjs",
        "--json",
        "--runtime",
        "production",
        "--source-file",
        args.sourceFile,
        "--fail-on-warn",
      ],
      summarize: summarizeEnv,
    },
    {
      id: "env_checklist",
      name: "Production Env Checklist",
      command: "node",
      args: [
        "scripts/generate-production-env-checklist.mjs",
        "--source-file",
        args.sourceFile,
        "--out-file",
        "PRODUCTION-ENV-CHECKLIST.md",
        "--out-json",
        "public/PRODUCTION-ENV-CHECKLIST.json",
      ],
      summarize: summarizeChecklist,
    },
    {
      id: "ops_preflight",
      name: "Ops Preflight (Production Audit)",
      command: "node",
      args: [
        "scripts/ops-preflight.mjs",
        "--json",
        "--env-runtime",
        "production",
        "--env-source-file",
        args.sourceFile,
        "--strict-warn",
        "--skip-auth-billing-smoke",
      ],
      summarize: summarizePreflight,
    },
    {
      id: "backend_integration",
      name: "Backend Integration Smoke (Full)",
      command: "node",
      args: ["scripts/backend-integration-smoke.mjs", "--include-route-smoke", "--json"],
      summarize: summarizeBackendIntegration,
    },
    {
      id: "api_readiness",
      name: "API Readiness (Production Live)",
      command: "node",
      args: [
        "scripts/api-connection-readiness-report.mjs",
        "--json",
        "--runtime",
        "production",
        "--source-file",
        args.sourceFile,
        "--out-json",
        "public/API-CONNECTION-READINESS-PROD-LIVE.json",
        "--out-md",
        "public/API-CONNECTION-READINESS-PROD-LIVE.md",
      ],
      summarize: summarizeApiReadiness,
    },
  ];

  const results = [];
  for (const step of steps) {
    const runResult = runStep(step);
    const summary = step.summarize(step, runResult);
    const check = {
      id: step.id,
      name: step.name,
      command: `${step.command} ${step.args.join(" ")}`,
      exitCode: runResult.exitCode,
      status: summary.status,
      detail: summary.detail,
      durationMs: runResult.durationMs,
      outputPreview: {
        stdout: runResult.stdout.trim().slice(0, 2000),
        stderr: runResult.stderr.trim().slice(0, 2000),
      },
      payload: summary.payload ?? null,
    };
    results.push(check);

    const label = check.status === "pass" ? "PASS" : check.status === "warn" ? "WARN" : "FAIL";
    console.log(`[${label}] ${check.name} - ${check.detail} (${check.durationMs}ms)`);
  }

  const totals = {
    pass: results.filter((step) => step.status === "pass").length,
    warn: results.filter((step) => step.status === "warn").length,
    fail: results.filter((step) => step.status === "fail").length,
    total: results.length,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    durationMs: Date.now() - startedAt,
    sourceFile: path.resolve(args.sourceFile),
    strictLiveMode: true,
    overall: totals.fail > 0 || totals.warn > 0 ? "blocked" : "green",
    totals,
    steps: results,
    artifacts: [
      "public/LAUNCH-SIGNOFF-REPORT.json",
      "public/LAUNCH-SIGNOFF-REPORT.md",
      "public/BACKEND-INTEGRATION-SMOKE-REPORT.json",
      "public/API-CONNECTION-READINESS-PROD-LIVE.json",
      "public/PRODUCTION-ENV-CHECKLIST.json",
      "PRODUCTION-ENV-CHECKLIST.md",
    ],
  };

  fs.mkdirSync(path.dirname(args.outJson), { recursive: true });
  fs.writeFileSync(args.outJson, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(args.outMd, renderMarkdown(report), "utf8");
  console.log(`Wrote ${path.relative(process.cwd(), args.outJson)}`);
  console.log(`Wrote ${path.relative(process.cwd(), args.outMd)}`);

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  }

  if (!args.noFail && (totals.fail > 0 || totals.warn > 0)) {
    process.exitCode = 1;
  }
}

main();
