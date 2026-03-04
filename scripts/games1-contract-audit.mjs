#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const MASTER_JSON_PATH = path.join(ROOT, "public", "GAMES-500-MASTER-CATALOG.json");
const MASTER_MD_PATH = path.join(ROOT, "GAMES-500-MASTER-CATALOG.md");
const AUDIT_JSON_PATH = path.join(ROOT, "public", "GAMES1-CONTRACT-AUDIT.json");
const AUDIT_MD_PATH = path.join(ROOT, "GAMES1-CONTRACT-AUDIT.md");

const REQUIRED_TOTAL = 500;
const REQUIRED_COLUMNS_LINE =
  "| Game # | Title | Subject/Topic | Engine | Core Mechanic | Popular Inspiration | Key Features | Learning Objectives (if educational) | XR Retention Impact | Hardware Profile |";

const AGE_GROUP_TARGETS = [
  { label: "Kindergarten (4-6)", count: 100 },
  { label: "Elementary (7-11)", count: 150 },
  { label: "Middle School (12-14)", count: 100 },
  { label: "High School (15-18)", count: 100 },
  { label: "College (19+)", count: 50 },
];

const ENGINE_TARGETS = [
  { label: "Unreal Engine 5.5+", count: 200 },
  { label: "Unity 6+", count: 200 },
  { label: "Godot 4.3+", count: 100 },
];

const TRACK_TARGETS = [
  { label: "Educational Core", count: 400 },
  { label: "Reward Realm", count: 100 },
];

function relativeFromRoot(target) {
  return path.relative(ROOT, target).replaceAll("\\", "/");
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key];
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
  }, {});
}

function rowsInMarkdownSection(markdown, sectionLabel) {
  const heading = `## ${sectionLabel}`;
  const headingIndex = markdown.indexOf(heading);
  if (headingIndex < 0) return { found: false, rowCount: 0 };

  const afterHeading = markdown.slice(headingIndex);
  const nextHeadingIndex = afterHeading.slice(heading.length).search(/\n##\s+/);
  const section = nextHeadingIndex >= 0
    ? afterHeading.slice(0, heading.length + nextHeadingIndex + 1)
    : afterHeading;

  const rowCount = section
    .split(/\r?\n/)
    .filter(
      (line) =>
        line.startsWith("| ")
        && !line.startsWith("|---")
        && line !== REQUIRED_COLUMNS_LINE,
    ).length;

  return { found: true, rowCount };
}

function buildMarkdown(report) {
  const checkRows = report.checks
    .map((check) => `| ${check.name} | ${check.status.toUpperCase()} | ${check.details} |`)
    .join("\n");

  const ageRows = Object.entries(report.counts.ageGroups)
    .map(([label, count]) => `| ${label} | ${count} |`)
    .join("\n");

  const engineRows = Object.entries(report.counts.engines)
    .map(([label, count]) => `| ${label} | ${count} |`)
    .join("\n");

  const trackRows = Object.entries(report.counts.tracks)
    .map(([label, count]) => `| ${label} | ${count} |`)
    .join("\n");

  return [
    "# Games1 Contract Audit",
    "",
    `Generated: ${report.generatedAt}`,
    `Status: ${report.status.toUpperCase()}`,
    "",
    "## Checks",
    "| Check | Status | Details |",
    "|---|---|---|",
    checkRows || "| none | PASS | no checks recorded |",
    "",
    "## Age Groups",
    "| Age Group | Count |",
    "|---|---:|",
    ageRows || "| none | 0 |",
    "",
    "## Engine Split",
    "| Engine | Count |",
    "|---|---:|",
    engineRows || "| none | 0 |",
    "",
    "## Track Split",
    "| Track | Count |",
    "|---|---:|",
    trackRows || "| none | 0 |",
    "",
    "## Outputs",
    `- JSON: \`${relativeFromRoot(AUDIT_JSON_PATH)}\``,
    `- Markdown: \`${relativeFromRoot(AUDIT_MD_PATH)}\``,
    "",
  ].join("\n");
}

async function main() {
  const checks = [];
  const fail = (name, details) => checks.push({ name, status: "fail", details });
  const pass = (name, details) => checks.push({ name, status: "pass", details });

  let masterJsonRaw;
  let masterMarkdown;
  try {
    [masterJsonRaw, masterMarkdown] = await Promise.all([
      fs.readFile(MASTER_JSON_PATH, "utf8"),
      fs.readFile(MASTER_MD_PATH, "utf8"),
    ]);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Missing master catalog artifacts. Run 'npm run games:audit:spec500' first. (${message})`,
    );
  }

  const parsed = JSON.parse(masterJsonRaw);
  const rows = Array.isArray(parsed.rows) ? parsed.rows : [];

  if (rows.length === REQUIRED_TOTAL) {
    pass("total-catalog-size", `${rows.length}/${REQUIRED_TOTAL}`);
  } else {
    fail("total-catalog-size", `${rows.length}/${REQUIRED_TOTAL}`);
  }

  const numbers = rows.map((row) => row.number);
  const ids = rows.map((row) => row.id);
  const titles = rows.map((row) => String(row.title).trim().toLowerCase());

  const uniqueNumbers = new Set(numbers).size;
  const uniqueIds = new Set(ids).size;
  const uniqueTitles = new Set(titles).size;

  if (uniqueNumbers === REQUIRED_TOTAL && Math.min(...numbers) === 1 && Math.max(...numbers) === REQUIRED_TOTAL) {
    pass("numbering-1-to-500", "All game numbers are unique and complete.");
  } else {
    fail("numbering-1-to-500", `uniqueNumbers=${uniqueNumbers} min=${Math.min(...numbers)} max=${Math.max(...numbers)}`);
  }

  if (uniqueIds === REQUIRED_TOTAL) {
    pass("unique-ids", "All game IDs are unique.");
  } else {
    fail("unique-ids", `Unique IDs: ${uniqueIds}/${REQUIRED_TOTAL}`);
  }

  if (uniqueTitles === REQUIRED_TOTAL) {
    pass("unique-titles", "All titles are unique.");
  } else {
    fail("unique-titles", `Unique titles: ${uniqueTitles}/${REQUIRED_TOTAL}`);
  }

  const ageCounts = countBy(rows, "ageGroup");
  const engineCounts = countBy(rows, "engine");
  const trackCounts = countBy(rows, "track");

  for (const target of AGE_GROUP_TARGETS) {
    const actual = ageCounts[target.label] ?? 0;
    if (actual === target.count) {
      pass(`age-${target.label}`, `${actual}/${target.count}`);
    } else {
      fail(`age-${target.label}`, `${actual}/${target.count}`);
    }
  }

  for (const target of ENGINE_TARGETS) {
    const actual = engineCounts[target.label] ?? 0;
    if (actual === target.count) {
      pass(`engine-${target.label}`, `${actual}/${target.count}`);
    } else {
      fail(`engine-${target.label}`, `${actual}/${target.count}`);
    }
  }

  for (const target of TRACK_TARGETS) {
    const actual = trackCounts[target.label] ?? 0;
    if (actual === target.count) {
      pass(`track-${target.label}`, `${actual}/${target.count}`);
    } else {
      fail(`track-${target.label}`, `${actual}/${target.count}`);
    }
  }

  const headerOccurrences = masterMarkdown
    .split(/\r?\n/)
    .filter((line) => line.trim() === REQUIRED_COLUMNS_LINE)
    .length;

  if (headerOccurrences === AGE_GROUP_TARGETS.length) {
    pass("markdown-required-columns", `Header appears ${headerOccurrences} times.`);
  } else {
    fail("markdown-required-columns", `Header appears ${headerOccurrences} times; expected ${AGE_GROUP_TARGETS.length}.`);
  }

  for (const target of AGE_GROUP_TARGETS) {
    const section = rowsInMarkdownSection(masterMarkdown, target.label);
    if (!section.found) {
      fail(`markdown-section-${target.label}`, "Section heading missing.");
      continue;
    }
    if (section.rowCount === target.count) {
      pass(`markdown-section-${target.label}`, `Rows=${section.rowCount}`);
    } else {
      fail(`markdown-section-${target.label}`, `Rows=${section.rowCount}; expected ${target.count}`);
    }
  }

  const requiredRowFields = [
    "id",
    "number",
    "title",
    "ageGroup",
    "subjectTopic",
    "engine",
    "coreMechanic",
    "popularInspiration",
    "keyFeatures",
    "learningObjectives",
    "xrRetentionImpact",
    "hardwareProfile",
    "track",
  ];

  const rowsWithMissingFields = rows.filter((row) =>
    requiredRowFields.some((field) => {
      const value = row[field];
      return value === null || value === undefined || String(value).trim().length === 0;
    }),
  );

  if (rowsWithMissingFields.length === 0) {
    pass("row-required-fields", "All required fields are populated.");
  } else {
    fail("row-required-fields", `${rowsWithMissingFields.length} rows missing required fields.`);
  }

  const status = checks.some((check) => check.status === "fail") ? "fail" : "pass";
  const report = {
    generatedAt: new Date().toISOString(),
    status,
    checks,
    counts: {
      ageGroups: ageCounts,
      engines: engineCounts,
      tracks: trackCounts,
    },
    outputs: {
      masterJson: relativeFromRoot(MASTER_JSON_PATH),
      masterMarkdown: relativeFromRoot(MASTER_MD_PATH),
      auditJson: relativeFromRoot(AUDIT_JSON_PATH),
      auditMarkdown: relativeFromRoot(AUDIT_MD_PATH),
    },
  };

  await fs.mkdir(path.dirname(AUDIT_JSON_PATH), { recursive: true });
  await Promise.all([
    fs.writeFile(AUDIT_JSON_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8"),
    fs.writeFile(AUDIT_MD_PATH, `${buildMarkdown(report)}\n`, "utf8"),
  ]);

  const failures = checks.filter((check) => check.status === "fail").length;
  console.log(`[games1-contract-audit] status=${status} checks=${checks.length} failures=${failures}`);

  if (status === "fail") {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error("[games1-contract-audit] failed:", error);
  process.exitCode = 1;
});

