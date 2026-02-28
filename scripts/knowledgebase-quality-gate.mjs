import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const defaultRawDir = path.resolve(projectRoot, "data/knowledgebase/raw");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-QUALITY-GATE-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-QUALITY-GATE-REPORT.md");

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
    rawDir: path.resolve(projectRoot, getArgValue("--raw-dir") ?? defaultRawDir),
    maxSearchRatio: Math.max(0, Math.min(1, Number(getArgValue("--max-search-ratio") ?? 0.35))),
    maxDuplicateRatio: Math.max(0, Math.min(1, Number(getArgValue("--max-duplicate-ratio") ?? 0.25))),
    failOnThreshold: hasFlag("--fail-on-threshold"),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
  };
}

function readMarkdown(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function parseFrontMatter(markdown) {
  if (!markdown.startsWith("---\n")) {
    return { frontMatter: {}, body: markdown };
  }
  const endIndex = markdown.indexOf("\n---\n", 4);
  if (endIndex === -1) {
    return { frontMatter: {}, body: markdown };
  }
  const rawFrontMatter = markdown.slice(4, endIndex);
  const body = markdown.slice(endIndex + 5);
  const frontMatter = {};
  for (const line of rawFrontMatter.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    frontMatter[key] = value;
  }
  return { frontMatter, body };
}

function isSearchLandingUrl(url) {
  const lower = String(url ?? "").toLowerCase();
  return lower.includes("/search/?q=") || lower.includes("/search?q=") || lower.includes("/search-results?query=");
}

function isCourseContentUrl(url) {
  const lower = String(url ?? "").toLowerCase();
  if (isSearchLandingUrl(lower)) return false;
  return lower.includes("/courses/") || lower.includes("/pages/") || lower.includes("/download");
}

function normalizeBodyForHash(body) {
  return String(body ?? "")
    .replace(/\r/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function hashText(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = (hash * 16777619) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
}

function ratio(part, total) {
  if (total <= 0) return 0;
  return part / total;
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Quality Gate Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Docs scanned: ${report.totals.docs}`);
  lines.push(`- Search landing docs: ${report.totals.searchDocs} (${report.totals.searchRatio})`);
  lines.push(`- Course-content docs: ${report.totals.courseDocs} (${report.totals.courseRatio})`);
  lines.push(`- Duplicate docs (all): ${report.totals.duplicateDocsAll} (${report.totals.duplicateRatioAll})`);
  lines.push(`- Duplicate docs (non-search): ${report.totals.duplicateDocsNonSearch} (${report.totals.duplicateRatioNonSearch})`);
  lines.push(`- Gate status: ${report.gate.status}`);
  lines.push("");
  lines.push("## Thresholds");
  lines.push("");
  lines.push(`- Max search ratio: ${report.thresholds.maxSearchRatio}`);
  lines.push(`- Max duplicate ratio (non-search): ${report.thresholds.maxDuplicateRatio}`);
  lines.push("");
  if (report.duplicates.length > 0) {
    lines.push("## Duplicate Groups");
    lines.push("");
    for (const group of report.duplicates.slice(0, 20)) {
      lines.push(`- hash=${group.hash} docs=${group.docs.length}`);
      for (const doc of group.docs) {
        lines.push(`  - ${doc.path} (${doc.url})`);
      }
    }
  }
  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(args.rawDir)) {
    console.error(`Missing raw directory: ${args.rawDir}`);
    process.exit(1);
  }

  const fileNames = fs.readdirSync(args.rawDir).filter((name) => name.toLowerCase().endsWith(".md"));
  const docs = fileNames.map((fileName) => {
    const filePath = path.join(args.rawDir, fileName);
    const markdown = readMarkdown(filePath);
    const { frontMatter, body } = parseFrontMatter(markdown);
    const url = String(frontMatter.url ?? "");
    const bodyHash = hashText(normalizeBodyForHash(body));
    return {
      path: path.relative(projectRoot, filePath),
      url,
      bodyHash,
      isSearchLanding: isSearchLandingUrl(url),
      isCourseContent: isCourseContentUrl(url),
    };
  });

  const byHash = new Map();
  for (const doc of docs) {
    if (!byHash.has(doc.bodyHash)) {
      byHash.set(doc.bodyHash, []);
    }
    byHash.get(doc.bodyHash).push(doc);
  }

  const duplicateGroups = [...byHash.entries()]
    .filter(([, rows]) => rows.length > 1)
    .map(([hash, rows]) => ({
      hash,
      docs: rows,
    }))
    .sort((a, b) => b.docs.length - a.docs.length);

  const duplicateDocsAll = duplicateGroups.reduce((sum, group) => sum + group.docs.length, 0);
  const duplicateNonSearchGroups = duplicateGroups
    .map((group) => ({
      hash: group.hash,
      docs: group.docs.filter((doc) => !doc.isSearchLanding),
    }))
    .filter((group) => group.docs.length > 1);
  const duplicateDocsNonSearch = duplicateNonSearchGroups.reduce((sum, group) => sum + group.docs.length, 0);
  const searchDocs = docs.filter((doc) => doc.isSearchLanding).length;
  const courseDocs = docs.filter((doc) => doc.isCourseContent).length;
  const searchRatio = ratio(searchDocs, docs.length);
  const duplicateRatioAll = ratio(duplicateDocsAll, docs.length);
  const nonSearchDocs = docs.length - searchDocs;
  const duplicateRatioNonSearch = ratio(duplicateDocsNonSearch, nonSearchDocs);
  const gateViolations = [];
  if (searchRatio > args.maxSearchRatio) {
    gateViolations.push(`search_ratio_exceeded (${searchRatio.toFixed(3)} > ${args.maxSearchRatio.toFixed(3)})`);
  }
  if (duplicateRatioNonSearch > args.maxDuplicateRatio) {
    gateViolations.push(
      `duplicate_ratio_exceeded_non_search (${duplicateRatioNonSearch.toFixed(3)} > ${args.maxDuplicateRatio.toFixed(3)})`,
    );
  }

  const report = {
    generatedAt: new Date().toISOString(),
    thresholds: {
      maxSearchRatio: args.maxSearchRatio,
      maxDuplicateRatio: args.maxDuplicateRatio,
    },
    totals: {
      docs: docs.length,
      searchDocs,
      searchRatio: Number(searchRatio.toFixed(3)),
      courseDocs,
      courseRatio: Number(ratio(courseDocs, docs.length).toFixed(3)),
      nonSearchDocs,
      duplicateDocsAll,
      duplicateRatioAll: Number(duplicateRatioAll.toFixed(3)),
      duplicateDocsNonSearch,
      duplicateRatioNonSearch: Number(duplicateRatioNonSearch.toFixed(3)),
    },
    gate: {
      status: gateViolations.length > 0 ? "fail" : "pass",
      violations: gateViolations,
    },
    duplicates: duplicateGroups,
    duplicatesNonSearch: duplicateNonSearchGroups,
  };

  if (args.writeReport) {
    fs.mkdirSync(path.dirname(outJson), { recursive: true });
    fs.writeFileSync(outJson, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(outMd, toMarkdown(report), "utf8");
  }

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log("Knowledgebase quality gate");
    console.log("");
    console.log(`Docs: ${report.totals.docs}`);
    console.log(`Search docs: ${report.totals.searchDocs} (${report.totals.searchRatio})`);
    console.log(`Course docs: ${report.totals.courseDocs} (${report.totals.courseRatio})`);
    console.log(`Duplicate docs (all): ${report.totals.duplicateDocsAll} (${report.totals.duplicateRatioAll})`);
    console.log(`Duplicate docs (non-search): ${report.totals.duplicateDocsNonSearch} (${report.totals.duplicateRatioNonSearch})`);
    console.log(`Gate: ${report.gate.status}`);
    console.log("");
    console.log(`Report JSON: ${outJson}`);
    console.log(`Report MD: ${outMd}`);
  }

  if (args.failOnThreshold && report.gate.status === "fail") {
    process.exitCode = 1;
  }
}

main();
