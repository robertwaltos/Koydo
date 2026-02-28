import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const coverageReportPath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-DOMAIN-COVERAGE-REPORT.json");
const defaultDomains = [
  "electricians",
  "microelectronics",
  "micro-circuits",
  "cpu-gpu-memory-design",
  "coding",
  "ai-workflows",
  "gardening",
  "food-science",
  "electrical-engineering",
  "civil-engineering",
  "plumbing",
  "hvac",
  "meteorology",
  "nursing",
  "law",
  "medicine",
];

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

  const domainsRaw = getArgValue("--domains") ?? "";
  const domains = domainsRaw
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  return {
    coverageFile: path.resolve(projectRoot, getArgValue("--coverage-file") ?? coverageReportPath),
    domains: domains.length > 0 ? domains : defaultDomains,
    minDocs: Math.max(1, Number(getArgValue("--min-docs") ?? 1)),
    noFail: hasFlag("--no-fail"),
    json: hasFlag("--json"),
  };
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(args.coverageFile)) {
    console.error(`Missing coverage report: ${args.coverageFile}`);
    console.error("Run: npm run knowledgebase:coverage");
    process.exit(1);
  }

  const coverage = readJson(args.coverageFile);
  const byDomainRows = Array.isArray(coverage.byDomain) ? coverage.byDomain : [];
  const byDomainMap = new Map(byDomainRows.map((row) => [String(row.domainId).toLowerCase(), row]));

  const checks = args.domains.map((domainId) => {
    const row = byDomainMap.get(domainId);
    const docCount = Number(row?.docCount ?? 0);
    const pass = docCount >= args.minDocs;
    return {
      domainId,
      docCount,
      minDocs: args.minDocs,
      status: pass ? "pass" : "fail",
    };
  });

  const totals = {
    pass: checks.filter((row) => row.status === "pass").length,
    fail: checks.filter((row) => row.status === "fail").length,
    total: checks.length,
  };

  const report = {
    generatedAt: new Date().toISOString(),
    coverageFile: path.relative(projectRoot, args.coverageFile),
    minDocs: args.minDocs,
    totals,
    checks,
  };

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log("Knowledgebase domain gate");
    console.log("");
    for (const row of checks) {
      const label = row.status.toUpperCase().padEnd(4, " ");
      console.log(`[${label}] ${row.domainId} - ${row.docCount} docs (required ${row.minDocs})`);
    }
    console.log("");
    console.log(`Summary: ${totals.pass} pass / ${totals.fail} fail (total ${totals.total})`);
  }

  if (!args.noFail && totals.fail > 0) {
    process.exitCode = 1;
  }
}

main();
