import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const sourcesPath = path.resolve(projectRoot, "src/lib/knowledgebase/source-registry.json");
const rightsPath = path.resolve(projectRoot, "src/lib/knowledgebase/source-rights.json");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-RIGHTS-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-RIGHTS-REPORT.md");

const allowedStatuses = new Set(["approved", "conditional", "blocked"]);
const allowedPolicies = new Set([
  "full_text_with_attribution",
  "transcript_only_with_attribution",
  "manual_review_required",
]);

function parseArgs(argv) {
  const hasFlag = (flag) => {
    const plain = flag.replace(/^--/, "");
    return argv.includes(flag) || argv.includes(plain);
  };

  const getArgValue = (flag) => {
    const plain = flag.replace(/^--/, "");
    const flagIndex = argv.indexOf(flag);
    const plainIndex = argv.indexOf(plain);
    const inline = argv.find((value) => value.startsWith(`${plain}=`));
    if (flagIndex !== -1) return argv[flagIndex + 1] ?? null;
    if (plainIndex !== -1) return argv[plainIndex + 1] ?? null;
    if (inline) return inline.slice(plain.length + 1);
    return null;
  };

  return {
    sourceFile: path.resolve(projectRoot, getArgValue("--source-file") ?? sourcesPath),
    rightsFile: path.resolve(projectRoot, getArgValue("--rights-file") ?? rightsPath),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
    failOnMissing: hasFlag("--fail-on-missing"),
    failOnConditional: hasFlag("--fail-on-conditional"),
    failOnBlocked: hasFlag("--fail-on-blocked"),
  };
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function safeString(value) {
  return String(value ?? "").trim();
}

function normalizeStatus(value) {
  const normalized = safeString(value).toLowerCase();
  return allowedStatuses.has(normalized) ? normalized : "missing";
}

function normalizePolicy(value) {
  const normalized = safeString(value).toLowerCase();
  return allowedPolicies.has(normalized) ? normalized : "unknown";
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Rights Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Sources in registry: ${report.totals.sources}`);
  lines.push(`- Approved: ${report.totals.approved}`);
  lines.push(`- Conditional: ${report.totals.conditional}`);
  lines.push(`- Blocked: ${report.totals.blocked}`);
  lines.push(`- Missing policy rows: ${report.totals.missing}`);
  lines.push(`- Automated ingest ready: ${report.totals.automationReady}`);
  lines.push(`- Manual review required: ${report.totals.manualReviewRequired}`);
  lines.push("");
  lines.push("## Status Counts By Category");
  lines.push("");
  for (const [category, row] of Object.entries(report.byCategory)) {
    lines.push(
      `- ${category}: approved=${row.approved}, conditional=${row.conditional}, blocked=${row.blocked}, missing=${row.missing}`,
    );
  }
  lines.push("");
  lines.push("## Source Decisions");
  lines.push("");
  lines.push("| Source ID | Category | Tier | Rights | Policy | Auto Ready | Manual Review |");
  lines.push("| --- | --- | --- | --- | --- | --- | --- |");
  for (const row of report.sources) {
    lines.push(
      `| ${row.sourceId} | ${row.category} | ${row.tier} | ${row.rightsStatus} | ${row.ingestionPolicy} | ${row.automationReady ? "yes" : "no"} | ${row.requiresManualReview ? "yes" : "no"} |`,
    );
  }
  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(args.sourceFile)) {
    console.error(`Missing source registry: ${args.sourceFile}`);
    process.exit(1);
  }
  if (!fs.existsSync(args.rightsFile)) {
    console.error(`Missing rights policy file: ${args.rightsFile}`);
    process.exit(1);
  }

  const sources = readJson(args.sourceFile);
  const rightsRows = readJson(args.rightsFile);
  const rightsById = new Map(rightsRows.map((row) => [safeString(row.sourceId), row]));

  const mappedSources = sources.map((source) => {
    const sourceId = safeString(source.id);
    const rights = rightsById.get(sourceId);
    const rightsStatus = normalizeStatus(rights?.rightsStatus);
    const ingestionPolicy = normalizePolicy(rights?.ingestionPolicy);
    const requiresManualReview = Boolean(rights?.requiresManualReview ?? true);
    const automationReady =
      Boolean(source.automationAllowed)
      && rightsStatus === "approved"
      && !requiresManualReview
      && ingestionPolicy !== "unknown";

    return {
      sourceId,
      sourceName: safeString(source.name),
      category: safeString(source.category || "unknown"),
      tier: safeString(source.tier || "unknown"),
      automationAllowed: Boolean(source.automationAllowed),
      rightsStatus,
      ingestionPolicy,
      requiresManualReview,
      requiresAttribution: Boolean(rights?.requiresAttribution ?? true),
      allowedAssetTypes: Array.isArray(rights?.allowedAssetTypes)
        ? rights.allowedAssetTypes.map((value) => safeString(value)).filter(Boolean)
        : [],
      notes: safeString(rights?.notes),
      hasPolicyRow: Boolean(rights),
      automationReady,
    };
  });

  const byCategory = {};
  for (const row of mappedSources) {
    const category = row.category || "unknown";
    if (!byCategory[category]) {
      byCategory[category] = {
        approved: 0,
        conditional: 0,
        blocked: 0,
        missing: 0,
      };
    }
    if (row.rightsStatus === "approved") byCategory[category].approved += 1;
    else if (row.rightsStatus === "conditional") byCategory[category].conditional += 1;
    else if (row.rightsStatus === "blocked") byCategory[category].blocked += 1;
    else byCategory[category].missing += 1;
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      sources: mappedSources.length,
      approved: mappedSources.filter((row) => row.rightsStatus === "approved").length,
      conditional: mappedSources.filter((row) => row.rightsStatus === "conditional").length,
      blocked: mappedSources.filter((row) => row.rightsStatus === "blocked").length,
      missing: mappedSources.filter((row) => row.rightsStatus === "missing").length,
      automationReady: mappedSources.filter((row) => row.automationReady).length,
      manualReviewRequired: mappedSources.filter((row) => row.requiresManualReview).length,
    },
    byCategory,
    sources: mappedSources.sort((a, b) => a.sourceId.localeCompare(b.sourceId)),
    outputs: {
      reportJson: path.relative(projectRoot, outJson),
      reportMd: path.relative(projectRoot, outMd),
    },
  };

  if (args.writeReport) {
    fs.mkdirSync(path.dirname(outJson), { recursive: true });
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(outMd, toMarkdown(report), "utf8");
  }

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log("Knowledgebase rights report");
    console.log("");
    console.log(`Sources: ${report.totals.sources}`);
    console.log(`Approved: ${report.totals.approved}`);
    console.log(`Conditional: ${report.totals.conditional}`);
    console.log(`Blocked: ${report.totals.blocked}`);
    console.log(`Missing: ${report.totals.missing}`);
    console.log(`Automation ready: ${report.totals.automationReady}`);
    console.log(`Manual review required: ${report.totals.manualReviewRequired}`);
    console.log("");
    console.log(`Report JSON: ${outJson}`);
    console.log(`Report MD: ${outMd}`);
  }

  if (args.failOnMissing && report.totals.missing > 0) {
    process.exitCode = 1;
  }
  if (args.failOnConditional && report.totals.conditional > 0) {
    process.exitCode = 1;
  }
  if (args.failOnBlocked && report.totals.blocked > 0) {
    process.exitCode = 1;
  }
}

main();
