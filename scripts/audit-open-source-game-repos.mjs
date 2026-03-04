#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const REPOS_DIR = path.join(ROOT, "data", "open-source-games");
const JSON_OUT = path.join(ROOT, "public", "OPEN-SOURCE-GAME-RESEARCH.json");
const MD_OUT = path.join(ROOT, "OPEN-SOURCE-GAME-RESEARCH.md");

const HIGH_SIGNAL_PATTERNS = [
  { id: "eval", regex: /\beval\s*\(/g },
  { id: "new-function", regex: /\bnew\s+Function\s*\(/g },
  { id: "document-write", regex: /document\.write\s*\(/g },
  { id: "innerhtml-assign", regex: /\.innerHTML\s*=/g },
  { id: "http-url", regex: /http:\/\/[^\s"'`]+/g },
];

const PRESET_INTEGRATION = {
  "2048": {
    category: "logic",
    mechanic: "grid-merge",
    ageBand: "8-17",
    childSafeFit: "high",
    integrationTrack: "port-core-mechanic",
  },
  "javascript-tetris": {
    category: "logic",
    mechanic: "block-stack",
    ageBand: "8-17",
    childSafeFit: "high",
    integrationTrack: "port-core-mechanic",
  },
  "openstreetguesser": {
    category: "adventure",
    mechanic: "geo-discovery",
    ageBand: "10-17",
    childSafeFit: "medium",
    integrationTrack: "adapt-with-safe-map-mode",
  },
};

function relativeFromRoot(target) {
  return path.relative(ROOT, target).replaceAll("\\", "/");
}

async function readTextIfExists(targetPath) {
  try {
    return await fs.readFile(targetPath, "utf8");
  } catch {
    return null;
  }
}

async function listFilesRecursive(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".git") continue;
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursive(full)));
      continue;
    }
    files.push(full);
  }
  return files;
}

function isScannableText(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return [".js", ".ts", ".tsx", ".jsx", ".html", ".css", ".md", ".json", ".txt"].includes(ext);
}

function detectLicense(licenseText) {
  if (!licenseText) return "unknown";
  if (/mit license/i.test(licenseText)) return "MIT";
  if (/permission is hereby granted, free of charge/i.test(licenseText) && /without restriction/i.test(licenseText)) {
    return "MIT-like";
  }
  if (/apache license/i.test(licenseText)) return "Apache-2.0";
  if (/gnu general public license/i.test(licenseText)) return "GPL";
  return "unknown";
}

function summarizeFindings(findings) {
  if (findings.length === 0) return "No high-signal risky patterns found in scanned text files.";
  const counts = findings.reduce((acc, finding) => {
    acc[finding.pattern] = (acc[finding.pattern] ?? 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts)
    .map(([pattern, count]) => `${pattern}:${count}`)
    .join(", ");
}

function toMarkdown(report) {
  const rows = report.repos
    .map((repo) => {
      return `| ${repo.name} | ${repo.license} | ${repo.commit} | ${repo.integrationTrack} | ${repo.childSafeFit} | ${repo.riskSummary} |`;
    })
    .join("\n");

  const details = report.repos
    .map((repo) => {
      const topFindings = repo.findings.slice(0, 5)
        .map((finding) => `- \`${finding.pattern}\` in \`${finding.file}\``)
        .join("\n");
      return [
        `### ${repo.name}`,
        `- Remote: ${repo.remote}`,
        `- License: ${repo.license}`,
        `- Category: ${repo.category}`,
        `- Mechanic: ${repo.mechanic}`,
        `- Age band: ${repo.ageBand}`,
        `- Integration track: ${repo.integrationTrack}`,
        `- Risk summary: ${repo.riskSummary}`,
        topFindings ? topFindings : "- No flagged lines in sampled patterns.",
        "",
      ].join("\n");
    })
    .join("\n");

  return [
    "# Open Source Game Research",
    "",
    `Generated: ${report.generatedAt}`,
    "",
    "## Scope",
    "- Audited local clones under `data/open-source-games`.",
    "- License + static pattern checks + integration classification.",
    "",
    "## Candidate Summary",
    "| Repo | License | Commit | Integration Track | Child Safe Fit | Risk Summary |",
    "|---|---|---|---|---|---|",
    rows || "| none | - | - | - | - | - |",
    "",
    "## Repo Details",
    details || "No repos found.",
    "",
  ].join("\n");
}

async function inspectRepo(repoPath) {
  const name = path.basename(repoPath);
  const remote = (() => {
    try {
      return execFileSync("git", ["-C", repoPath, "config", "--get", "remote.origin.url"], { encoding: "utf8" }).trim();
    } catch {
      return "unknown";
    }
  })();

  const commit = (() => {
    try {
      return execFileSync("git", ["-C", repoPath, "rev-parse", "--short", "HEAD"], { encoding: "utf8" }).trim();
    } catch {
      return "unknown";
    }
  })();
  const readme = await readTextIfExists(path.join(repoPath, "README.md"));
  const licenseText =
    (await readTextIfExists(path.join(repoPath, "LICENSE"))) ??
    (await readTextIfExists(path.join(repoPath, "LICENSE.txt")));
  const license = detectLicense(licenseText);

  const files = await listFilesRecursive(repoPath);
  const findings = [];
  for (const file of files) {
    if (!isScannableText(file)) continue;
    const content = await readTextIfExists(file);
    if (!content) continue;
    for (const pattern of HIGH_SIGNAL_PATTERNS) {
      if (pattern.regex.test(content)) {
        findings.push({
          pattern: pattern.id,
          file: relativeFromRoot(file),
        });
      }
      pattern.regex.lastIndex = 0;
    }
  }

  const preset = PRESET_INTEGRATION[name] ?? {
    category: "logic",
    mechanic: "to-classify",
    ageBand: "8-17",
    childSafeFit: "unknown",
    integrationTrack: "evaluate",
  };

  return {
    name,
    remote,
    commit,
    readmeSummary: readme?.split("\n")[0] ?? "",
    license,
    category: preset.category,
    mechanic: preset.mechanic,
    ageBand: preset.ageBand,
    childSafeFit: preset.childSafeFit,
    integrationTrack: preset.integrationTrack,
    findings,
    riskSummary: summarizeFindings(findings),
  };
}

async function main() {
  const exists = await fs.stat(REPOS_DIR).then(() => true).catch(() => false);
  if (!exists) {
    throw new Error(`Repos directory not found: ${relativeFromRoot(REPOS_DIR)}`);
  }

  const entries = await fs.readdir(REPOS_DIR, { withFileTypes: true });
  const repoDirs = entries.filter((entry) => entry.isDirectory()).map((entry) => path.join(REPOS_DIR, entry.name));
  const repos = [];
  for (const repoDir of repoDirs) {
    repos.push(await inspectRepo(repoDir));
  }

  const report = {
    generatedAt: new Date().toISOString(),
    sourceDirectory: relativeFromRoot(REPOS_DIR),
    repoCount: repos.length,
    repos,
  };

  await fs.mkdir(path.dirname(JSON_OUT), { recursive: true });
  await Promise.all([
    fs.writeFile(JSON_OUT, `${JSON.stringify(report, null, 2)}\n`, "utf8"),
    fs.writeFile(MD_OUT, `${toMarkdown(report)}\n`, "utf8"),
  ]);

  console.log(`[open-source-game-audit] repos=${report.repoCount}`);
}

main().catch((error) => {
  console.error("[open-source-game-audit] failed:", error);
  process.exitCode = 1;
});
