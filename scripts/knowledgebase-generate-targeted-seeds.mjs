import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const domainCatalogPath = path.resolve(projectRoot, "src/lib/knowledgebase/domain-priority.json");
const targetedSeedsPath = path.resolve(projectRoot, "src/lib/knowledgebase/targeted-seeds.json");
const backlogReportPath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-BACKLOG-REPORT.json");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-SEED-PLAN-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-SEED-PLAN-REPORT.md");

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
    backlogFile: path.resolve(projectRoot, getArgValue("--backlog-file") ?? backlogReportPath),
    domainFile: path.resolve(projectRoot, getArgValue("--domain-file") ?? domainCatalogPath),
    seedsFile: path.resolve(projectRoot, getArgValue("--seeds-file") ?? targetedSeedsPath),
    maxKeywords: Math.max(2, Number(getArgValue("--max-keywords") ?? 5)),
    sourceId: String(getArgValue("--source-id") ?? "mit-ocw"),
    apply: hasFlag("--apply"),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
  };
}

function readJson(filePath, fallbackValue = null) {
  if (!fs.existsSync(filePath)) {
    return fallbackValue;
  }
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function normalizeDomainId(value) {
  return String(value ?? "").trim().toLowerCase();
}

function buildMitSearchUrl(term) {
  return `https://ocw.mit.edu/search/?q=${encodeURIComponent(term)}`;
}

function dedupe(values) {
  return [...new Set(values)];
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Seed Plan Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Backlog domains scanned: ${report.totals.backlogDomains}`);
  lines.push(`- Domains already seeded: ${report.totals.alreadySeeded}`);
  lines.push(`- Domains added: ${report.totals.added}`);
  lines.push(`- Apply mode: ${report.options.apply ? "yes" : "no"}`);
  lines.push("");
  lines.push("## Added Domains");
  lines.push("");
  if (report.addedDomains.length === 0) {
    lines.push("- none");
  } else {
    for (const row of report.addedDomains) {
      lines.push(`### ${row.domainId}`);
      lines.push("");
      lines.push(`- Source ID: ${row.sourceId}`);
      lines.push("- Seed URLs:");
      for (const url of row.seedUrls) {
        lines.push(`  - ${url}`);
      }
      lines.push("");
    }
  }
  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(args.domainFile)) {
    console.error(`Missing domain catalog: ${args.domainFile}`);
    process.exit(1);
  }
  if (!fs.existsSync(args.backlogFile)) {
    console.error(`Missing backlog report: ${args.backlogFile}`);
    console.error("Run: npm run knowledgebase:backlog");
    process.exit(1);
  }

  const domainCatalog = readJson(args.domainFile, { domains: [] });
  const backlog = readJson(args.backlogFile, { backlog: [] });
  const existingSeeds = readJson(args.seedsFile, { domains: {} }) ?? { domains: {} };
  const domains = Array.isArray(domainCatalog.domains) ? domainCatalog.domains : [];
  const backlogRows = Array.isArray(backlog.backlog) ? backlog.backlog : [];
  const domainById = new Map(domains.map((domain) => [normalizeDomainId(domain.id), domain]));

  const nextSeeds = {
    ...existingSeeds,
    domains: {
      ...(existingSeeds.domains ?? {}),
    },
  };

  const addedDomains = [];
  let alreadySeeded = 0;

  for (const row of backlogRows) {
    const domainId = normalizeDomainId(row.domainId);
    if (!domainId) continue;
    if (nextSeeds.domains[domainId]) {
      alreadySeeded += 1;
      continue;
    }

    const domainMeta = domainById.get(domainId);
    const keywords = Array.isArray(domainMeta?.keywords) ? domainMeta.keywords : [domainId];
    const queryTerms = dedupe([domainId.replace(/-/g, " "), ...keywords])
      .map((value) => String(value).trim())
      .filter(Boolean)
      .slice(0, args.maxKeywords);

    const seedUrls = queryTerms.map(buildMitSearchUrl);
    nextSeeds.domains[domainId] = {
      sourceId: args.sourceId,
      seedUrls,
    };
    addedDomains.push({
      domainId,
      sourceId: args.sourceId,
      seedUrls,
    });
  }

  if (args.apply) {
    fs.writeFileSync(args.seedsFile, `${JSON.stringify(nextSeeds, null, 2)}\n`, "utf8");
  }

  const report = {
    generatedAt: new Date().toISOString(),
    options: {
      apply: args.apply,
      sourceId: args.sourceId,
      maxKeywords: args.maxKeywords,
      backlogFile: path.relative(projectRoot, args.backlogFile),
      domainFile: path.relative(projectRoot, args.domainFile),
      seedsFile: path.relative(projectRoot, args.seedsFile),
    },
    totals: {
      backlogDomains: backlogRows.length,
      alreadySeeded,
      added: addedDomains.length,
    },
    addedDomains,
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

  console.log("Knowledgebase targeted seed plan");
  console.log("");
  console.log(`Backlog domains scanned: ${report.totals.backlogDomains}`);
  console.log(`Domains already seeded: ${report.totals.alreadySeeded}`);
  console.log(`Domains added: ${report.totals.added}`);
  console.log(`Apply mode: ${args.apply ? "yes" : "no"}`);
  console.log("");
  console.log(`Report JSON: ${outJson}`);
  console.log(`Report MD: ${outMd}`);
}

main();
