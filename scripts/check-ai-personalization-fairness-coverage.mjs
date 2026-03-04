#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_JSON = path.join(ROOT, "public", "AI-PERSONALIZATION-FAIRNESS-AUDIT.json");
const OUT_MD = path.join(ROOT, "public", "AI-PERSONALIZATION-FAIRNESS-AUDIT.md");

const TARGETS = [
  {
    id: "ai:recommendations",
    file: "src/app/api/ai/recommendations/route.ts",
    requiredMarkers: [
      "enforceIpRateLimit",
      "api:ai:recommendations:get",
      '.eq("user_id", user.id)',
      "buildAdaptiveRemediationQueue",
    ],
  },
  {
    id: "ai:tutor",
    file: "src/app/api/ai/tutor/route.ts",
    requiredMarkers: [
      "enforceIpRateLimit",
      "api:ai:tutor:post",
      "shouldAskClarifyingQuestion",
      "withGroundingBlock",
      "groundingScore",
    ],
  },
];

const PROTECTED_ATTRIBUTE_TOKENS = [
  "gender",
  "race",
  "ethnicity",
  "religion",
  "sexual_orientation",
  "disability",
  "immigration_status",
];

function readFileOrNull(relPath) {
  const fullPath = path.join(ROOT, relPath);
  if (!fs.existsSync(fullPath)) return null;
  return fs.readFileSync(fullPath, "utf8");
}

function hasToken(source, token) {
  const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`\\b${escaped}\\b`, "i");
  return re.test(source);
}

function runAudit() {
  const checks = [];

  for (const target of TARGETS) {
    const source = readFileOrNull(target.file);
    if (!source) {
      checks.push({
        id: `${target.id}:exists`,
        status: "fail",
        detail: `${target.file} is missing.`,
      });
      continue;
    }

    checks.push({
      id: `${target.id}:exists`,
      status: "pass",
      detail: `${target.file} exists.`,
    });

    const missingMarkers = target.requiredMarkers.filter((marker) => !source.includes(marker));
    checks.push({
      id: `${target.id}:required-markers`,
      status: missingMarkers.length === 0 ? "pass" : "fail",
      detail:
        missingMarkers.length === 0
          ? "All required fairness/safety markers are present."
          : `Missing markers: ${missingMarkers.join(", ")}`,
    });

    const protectedAttributeHits = PROTECTED_ATTRIBUTE_TOKENS.filter((token) => hasToken(source, token));
    checks.push({
      id: `${target.id}:protected-attribute-usage`,
      status: protectedAttributeHits.length === 0 ? "pass" : "fail",
      detail:
        protectedAttributeHits.length === 0
          ? "No protected attribute tokens detected in personalization path."
          : `Detected protected-attribute token(s): ${protectedAttributeHits.join(", ")}`,
    });
  }

  const totals = {
    total: checks.length,
    pass: checks.filter((check) => check.status === "pass").length,
    warn: checks.filter((check) => check.status === "warn").length,
    fail: checks.filter((check) => check.status === "fail").length,
  };

  return {
    generatedAt: new Date().toISOString(),
    totals,
    checks,
    notes: [
      "This is a static fairness-coverage gate for AI personalization routes.",
      "It enforces guard markers and blocks protected-attribute token usage at code level.",
      "It does not replace outcome-based fairness evaluation on production telemetry.",
    ],
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# AI Personalization Fairness Audit");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push(
    `Checks: ${report.totals.total} | Pass: ${report.totals.pass} | Warn: ${report.totals.warn} | Fail: ${report.totals.fail}`,
  );
  lines.push("");
  lines.push("| ID | Status | Detail |");
  lines.push("| --- | --- | --- |");
  for (const check of report.checks) {
    lines.push(`| ${check.id} | ${String(check.status).toUpperCase()} | ${check.detail} |`);
  }
  lines.push("");
  lines.push("## Notes");
  lines.push("");
  for (const note of report.notes) {
    lines.push(`- ${note}`);
  }
  lines.push("");
  return lines.join("\n");
}

function main() {
  const report = runAudit();
  fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(OUT_MD, toMarkdown(report), "utf8");
  process.stdout.write("AI personalization fairness coverage check\n");
  process.stdout.write(
    `Checked: ${report.totals.total} (pass=${report.totals.pass}, warn=${report.totals.warn}, fail=${report.totals.fail})\n`,
  );

  if (report.totals.fail > 0) {
    process.stdout.write("FAIL: Fairness coverage gaps detected.\n");
    process.exit(1);
  }

  process.stdout.write("PASS: AI personalization fairness coverage markers are present.\n");
}

main();
