import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

function parseArgs(argv) {
  const args = {
    sourceFile: ".env.production.audit",
    outFile: "PRODUCTION-ENV-CHECKLIST.md",
    outJson: "",
    runtime: "production",
    noFail: false,
  };

  const parseOptionValue = (arg, index) => {
    const equalsIndex = arg.indexOf("=");
    if (equalsIndex >= 0) {
      return { value: arg.slice(equalsIndex + 1).trim(), consumedNext: false };
    }

    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      return { value: "", consumedNext: false };
    }

    return { value: next.trim(), consumedNext: true };
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--no-fail") {
      args.noFail = true;
      continue;
    }

    if (arg === "--source-file" || arg.startsWith("--source-file=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) args.sourceFile = parsed.value;
      if (parsed.consumedNext) i += 1;
      continue;
    }

    if (arg === "--out-file" || arg.startsWith("--out-file=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) args.outFile = parsed.value;
      if (parsed.consumedNext) i += 1;
      continue;
    }

    if (arg === "--out-json" || arg.startsWith("--out-json=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) args.outJson = parsed.value;
      if (parsed.consumedNext) i += 1;
      continue;
    }

    if (arg === "--runtime" || arg.startsWith("--runtime=")) {
      const parsed = parseOptionValue(arg, i);
      if (parsed.value) args.runtime = parsed.value;
      if (parsed.consumedNext) i += 1;
      continue;
    }
  }

  return args;
}

function escapeCell(value) {
  return String(value ?? "")
    .replace(/\|/g, "\\|")
    .replace(/\r?\n/g, " ")
    .trim();
}

function toMarkdown({ envReport, command, commandExitCode, sourceFile, runtime }) {
  const checks = Array.isArray(envReport.checks) ? envReport.checks : [];
  const totals = envReport.totals ?? { pass: 0, warn: 0, fail: 0, total: 0 };
  const failures = checks.filter((check) => check.status === "fail");
  const warnings = checks.filter((check) => check.status === "warn");

  const lines = [];
  lines.push("# Production Environment Checklist");
  lines.push("");
  lines.push(`Generated: ${envReport.generatedAt ?? new Date().toISOString()}`);
  lines.push(`Runtime: ${runtime}`);
  lines.push(`Source file: ${sourceFile}`);
  lines.push(`Command: \`${command}\``);
  lines.push(`Command exit code: ${commandExitCode}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Pass: ${totals.pass ?? 0}`);
  lines.push(`- Warn: ${totals.warn ?? 0}`);
  lines.push(`- Fail: ${totals.fail ?? 0}`);
  lines.push(`- Total checks: ${totals.total ?? checks.length}`);
  lines.push("");
  lines.push("## Check Results");
  lines.push("");
  lines.push("| Check | Status | Detail |");
  lines.push("| --- | --- | --- |");
  for (const check of checks) {
    lines.push(`| ${escapeCell(check.label)} | ${escapeCell(String(check.status ?? "").toUpperCase())} | ${escapeCell(check.detail)} |`);
  }

  lines.push("");
  lines.push("## Launch Blockers");
  lines.push("");
  if (failures.length === 0) {
    lines.push("- None.");
  } else {
    for (const check of failures) {
      lines.push(`- ${check.label}: ${check.detail}`);
    }
  }

  lines.push("");
  lines.push("## Warnings");
  lines.push("");
  if (warnings.length === 0) {
    lines.push("- None.");
  } else {
    for (const check of warnings) {
      lines.push(`- ${check.label}: ${check.detail}`);
    }
  }

  return lines.join("\n");
}

function runCheckEnv({ sourceFile, runtime }) {
  const commandArgs = [
    "scripts/check-env.mjs",
    "--json",
    "--runtime",
    runtime,
    "--source-file",
    sourceFile,
    "--fail-on-warn",
  ];

  const result = spawnSync("node", commandArgs, {
    encoding: "utf8",
  });

  const stdout = (result.stdout ?? "").trim();
  const stderr = (result.stderr ?? "").trim();
  const exitCode = typeof result.status === "number" ? result.status : 1;

  let envReport = null;
  if (stdout) {
    try {
      envReport = JSON.parse(stdout);
    } catch {
      envReport = null;
    }
  }

  return {
    envReport,
    stdout,
    stderr,
    exitCode,
    command: `node ${commandArgs.join(" ")}`,
  };
}

function ensureParentDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const outFilePath = path.resolve(process.cwd(), args.outFile);
  const outJsonPath = args.outJson ? path.resolve(process.cwd(), args.outJson) : "";
  const sourceFilePath = args.sourceFile;

  const checkResult = runCheckEnv({
    sourceFile: sourceFilePath,
    runtime: args.runtime,
  });

  if (!checkResult.envReport) {
    const message = [
      "Unable to parse JSON from scripts/check-env.mjs.",
      checkResult.stderr ? `stderr: ${checkResult.stderr}` : "",
      checkResult.stdout ? `stdout: ${checkResult.stdout}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    console.error(message);
    process.exitCode = 1;
    return;
  }

  const markdown = toMarkdown({
    envReport: checkResult.envReport,
    command: checkResult.command,
    commandExitCode: checkResult.exitCode,
    sourceFile: sourceFilePath,
    runtime: args.runtime,
  });

  ensureParentDir(outFilePath);
  fs.writeFileSync(outFilePath, markdown);
  console.log(`Wrote ${outFilePath}`);

  if (outJsonPath) {
    const jsonReport = {
      generatedAt: new Date().toISOString(),
      command: checkResult.command,
      commandExitCode: checkResult.exitCode,
      sourceFile: sourceFilePath,
      runtime: args.runtime,
      envReport: checkResult.envReport,
    };
    ensureParentDir(outJsonPath);
    fs.writeFileSync(outJsonPath, JSON.stringify(jsonReport, null, 2));
    console.log(`Wrote ${outJsonPath}`);
  }

  const totals = checkResult.envReport.totals ?? { pass: 0, warn: 0, fail: 0 };
  console.log(`Summary: pass=${totals.pass ?? 0} warn=${totals.warn ?? 0} fail=${totals.fail ?? 0}`);

  if (!args.noFail && checkResult.exitCode !== 0) {
    process.exitCode = 1;
  }
}

main();
