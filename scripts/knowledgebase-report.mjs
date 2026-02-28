import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const sourcesPath = path.resolve(projectRoot, "src/lib/knowledgebase/source-registry.json");
const rightsPath = path.resolve(projectRoot, "src/lib/knowledgebase/source-rights.json");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-SOURCES-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-SOURCES-REPORT.md");

function parseArgs(argv) {
  const hasFlag = (flag) => {
    const plain = flag.replace(/^--/, "");
    return argv.includes(flag) || argv.includes(plain);
  };

  return {
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
  };
}

function loadSources() {
  const raw = fs.readFileSync(sourcesPath, "utf8");
  return JSON.parse(raw);
}

function loadSourceRights() {
  if (!fs.existsSync(rightsPath)) return [];
  const raw = fs.readFileSync(rightsPath, "utf8");
  const rows = JSON.parse(raw);
  return Array.isArray(rows) ? rows : [];
}

function countBy(list, key) {
  const counts = {};
  for (const item of list) {
    const value = item?.[key] ?? "unknown";
    counts[value] = (counts[value] ?? 0) + 1;
  }
  return counts;
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Sources Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total sources: ${report.totals.total}`);
  lines.push(`- Official curriculum sources: ${report.totals.officialCurriculum}`);
  lines.push(`- Free course transcript sources: ${report.totals.freeCourseTranscripts}`);
  lines.push(`- Automation allowed: ${report.totals.automationAllowed}`);
  lines.push("");
  lines.push("## Tier Counts");
  lines.push("");
  for (const [tier, value] of Object.entries(report.byTier)) {
    lines.push(`- ${tier}: ${value}`);
  }
  lines.push("");
  lines.push("## Category Counts");
  lines.push("");
  for (const [category, value] of Object.entries(report.byCategory)) {
    lines.push(`- ${category}: ${value}`);
  }
  lines.push("");
  lines.push("## Rights Status Counts");
  lines.push("");
  for (const [status, value] of Object.entries(report.byRightsStatus)) {
    lines.push(`- ${status}: ${value}`);
  }
  lines.push("");
  lines.push("## Sources");
  lines.push("");
  lines.push("| ID | Category | Tier | Automation | Rights | Policy | URL |");
  lines.push("| --- | --- | --- | --- | --- | --- | --- |");
  for (const source of report.sources) {
    lines.push(
      `| ${source.id} | ${source.category} | ${source.tier} | ${source.automationAllowed ? "yes" : "no"} | ${source.rightsStatus} | ${source.ingestionPolicy} | ${source.url} |`,
    );
  }
  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const sources = loadSources();
  const rightsRows = loadSourceRights();
  const rightsBySource = new Map(
    rightsRows
      .filter((row) => typeof row?.sourceId === "string")
      .map((row) => [row.sourceId, row]),
  );
  const sourcesWithRights = sources.map((source) => {
    const rights = rightsBySource.get(source.id);
    return {
      ...source,
      rightsStatus: String(rights?.rightsStatus ?? "missing"),
      ingestionPolicy: String(rights?.ingestionPolicy ?? "unknown"),
      requiresManualReview: Boolean(rights?.requiresManualReview ?? true),
    };
  });
  const byTier = countBy(sources, "tier");
  const byCategory = countBy(sources, "category");
  const byRightsStatus = countBy(sourcesWithRights, "rightsStatus");

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      total: sources.length,
      officialCurriculum: sources.filter((s) => s.category === "official_curriculum").length,
      freeCourseTranscripts: sources.filter((s) => s.category === "free_course_transcripts").length,
      automationAllowed: sources.filter((s) => s.automationAllowed).length,
      rightsMapped: sourcesWithRights.filter((s) => s.rightsStatus !== "missing").length,
    },
    byTier,
    byCategory,
    byRightsStatus,
    sources: sourcesWithRights,
  };

  if (args.writeReport) {
    fs.mkdirSync(path.dirname(outJson), { recursive: true });
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(outMd, toMarkdown(report), "utf8");
  }

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  console.log("Knowledgebase source registry report");
  console.log("");
  console.log(`Total sources: ${report.totals.total}`);
  console.log(`Official curriculum: ${report.totals.officialCurriculum}`);
  console.log(`Free course transcripts: ${report.totals.freeCourseTranscripts}`);
  console.log(`Automation allowed: ${report.totals.automationAllowed}`);
  console.log(`Rights mapped: ${report.totals.rightsMapped}`);
  console.log("");
  console.log(`Report JSON: ${outJson}`);
  console.log(`Report MD: ${outMd}`);
}

main();
