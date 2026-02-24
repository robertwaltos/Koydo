#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "src", "app");
const REPORT_JSON = path.join(ROOT, "public", "UI-STYLE-AUDIT-REPORT.json");
const REPORT_MD = path.join(ROOT, "public", "UI-STYLE-AUDIT-REPORT.md");

const CHECKS = [
  { id: "legacy_border_black", label: "Legacy border-black classes", regex: /border-black\/(10|15)/g },
  { id: "legacy_bg_zinc", label: "Legacy bg-zinc-50 classes", regex: /bg-zinc-50/g },
  { id: "legacy_hover_black", label: "Legacy hover:bg-black/5 classes", regex: /hover:bg-black\/5/g },
  { id: "legacy_dark_border", label: "Legacy dark:border* classes", regex: /dark:border[^\s"']*/g },
  { id: "legacy_dark_bg_zinc", label: "Legacy dark:bg-zinc* classes", regex: /dark:bg-zinc[^\s"']*/g },
  { id: "legacy_dark_text_zinc", label: "Legacy dark:text-zinc* classes", regex: /dark:text-zinc[^\s"']*/g },
];

const args = new Set(process.argv.slice(2));
const writeReport = args.has("--write-report");
const noFail = args.has("--no-fail");

async function walkFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walkFiles(fullPath);
      }
      if (!/\.(tsx?|jsx?|css)$/i.test(entry.name)) {
        return [];
      }
      return [fullPath];
    }),
  );
  return files.flat();
}

function toRelative(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

async function main() {
  const files = await walkFiles(APP_DIR);
  const findings = [];
  const summaryByCheck = Object.fromEntries(CHECKS.map((check) => [check.id, 0]));

  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    const lines = content.split(/\r?\n/);
    lines.forEach((line, index) => {
      for (const check of CHECKS) {
        check.regex.lastIndex = 0;
        const matches = line.match(check.regex);
        if (!matches) continue;
        for (const token of matches) {
          findings.push({
            file: toRelative(file),
            line: index + 1,
            checkId: check.id,
            checkLabel: check.label,
            token,
          });
          summaryByCheck[check.id] += 1;
        }
      }
    });
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    totalFindings: findings.length,
    checks: CHECKS.map((check) => ({
      id: check.id,
      label: check.label,
      count: summaryByCheck[check.id] ?? 0,
    })),
    findings,
  };

  if (writeReport) {
    await fs.writeFile(REPORT_JSON, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

    const mdLines = [
      "# UI Style Audit Report",
      "",
      `Generated: ${payload.generatedAt}`,
      "",
      `Total findings: ${payload.totalFindings}`,
      "",
      "## Summary",
      "",
      ...payload.checks.map((check) => `- ${check.label}: ${check.count}`),
      "",
      "## Findings",
      "",
    ];

    if (findings.length === 0) {
      mdLines.push("- No findings.");
    } else {
      for (const finding of findings) {
        mdLines.push(
          `- \`${finding.file}:${finding.line}\` | ${finding.checkLabel} | \`${finding.token}\``,
        );
      }
    }

    mdLines.push("");
    await fs.writeFile(REPORT_MD, mdLines.join("\n"), "utf8");
  }

  if (findings.length > 0) {
    console.error(`UI style audit failed: ${findings.length} finding(s).`);
    if (!noFail) {
      process.exit(1);
    }
  }

  console.log(`UI style audit completed: ${findings.length} finding(s).`);
}

main().catch((error) => {
  console.error("UI style audit failed unexpectedly.");
  console.error(error);
  process.exit(1);
});

