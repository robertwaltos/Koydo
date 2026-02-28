import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const projectRoot = process.cwd();
const scriptsDir = path.resolve(projectRoot, "scripts");
const reportJsonPath = path.resolve(projectRoot, "public/UNUSED-SCRIPTS-REPORT.json");
const reportMdPath = path.resolve(projectRoot, "public/UNUSED-SCRIPTS-REPORT.md");

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

function toPosixPath(value) {
  return value.replace(/\\/g, "/");
}

function getScriptFiles() {
  if (!fs.existsSync(scriptsDir)) return [];
  return fs
    .readdirSync(scriptsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function getPackageScriptReferences() {
  const packageJsonPath = path.resolve(projectRoot, "package.json");
  const raw = fs.readFileSync(packageJsonPath, "utf8");
  const parsed = JSON.parse(raw);
  const scripts = parsed?.scripts ?? {};
  const references = new Set();

  for (const value of Object.values(scripts)) {
    if (typeof value !== "string") continue;
    const matches = value.matchAll(/scripts\/([A-Za-z0-9_.-]+)/g);
    for (const match of matches) {
      references.add(match[1]);
    }
  }

  return references;
}

function findExternalReferences(fileName) {
  const scriptRelativePath = `scripts/${fileName}`;
  const tokens = [scriptRelativePath, fileName];
  const hits = new Set();

  for (const token of tokens) {
    const result = spawnSync(
      "rg",
      [
        "--line-number",
        "--fixed-strings",
        "--glob",
        "!node_modules/**",
        "--glob",
        "!.next/**",
        "--glob",
        "!scripts/**",
        token,
        ".",
      ],
      {
        cwd: projectRoot,
        encoding: "utf8",
      },
    );

    if (result.error) {
      continue;
    }

    const lines = (result.stdout ?? "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    for (const line of lines) {
      const [filePath, lineNumber] = line.split(":", 3);
      if (!filePath || !lineNumber) continue;
      hits.add(`${toPosixPath(filePath)}:${lineNumber}`);
    }
  }

  return [...hits].sort((a, b) => a.localeCompare(b));
}

function classifyScript({ fileName, packageReferenced, externalReferences }) {
  const extension = path.extname(fileName).toLowerCase();
  const shellScript = extension === ".sh" || extension === ".ps1" || extension === ".bat";

  if (packageReferenced) return "active";
  if (externalReferences.length > 0) return "review";
  if (shellScript) return "review";
  return "candidate_unused";
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Unused Scripts Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total scripts: ${report.totals.total}`);
  lines.push(`- Active (package-linked): ${report.totals.active}`);
  lines.push(`- Review (externally referenced/manual): ${report.totals.review}`);
  lines.push(`- Candidate unused: ${report.totals.candidateUnused}`);
  lines.push("");
  lines.push("## Details");
  lines.push("");
  lines.push("| Script | Status | Package Ref | External refs |");
  lines.push("| --- | --- | --- | --- |");
  for (const row of report.scripts) {
    lines.push(
      `| ${row.fileName} | ${row.status} | ${row.packageReferenced ? "yes" : "no"} | ${row.externalReferences.length} |`,
    );
  }

  const candidates = report.scripts.filter((row) => row.status === "candidate_unused");
  if (candidates.length > 0) {
    lines.push("");
    lines.push("## Candidate Unused Scripts");
    lines.push("");
    for (const row of candidates) {
      lines.push(`- ${row.fileName}`);
    }
  }

  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const scriptFiles = getScriptFiles();
  const packageReferences = getPackageScriptReferences();

  const rows = scriptFiles.map((fileName) => {
    const packageReferenced = packageReferences.has(fileName);
    const externalReferences = findExternalReferences(fileName);
    const status = classifyScript({
      fileName,
      packageReferenced,
      externalReferences,
    });

    return {
      fileName,
      packageReferenced,
      externalReferences,
      status,
    };
  });

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      total: rows.length,
      active: rows.filter((row) => row.status === "active").length,
      review: rows.filter((row) => row.status === "review").length,
      candidateUnused: rows.filter((row) => row.status === "candidate_unused").length,
    },
    scripts: rows,
  };

  if (args.writeReport) {
    fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true });
    fs.writeFileSync(reportJsonPath, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(reportMdPath, toMarkdown(report), "utf8");
  }

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  console.log("Unused scripts audit");
  console.log("");
  console.log(`Total scripts: ${report.totals.total}`);
  console.log(`Active: ${report.totals.active}`);
  console.log(`Review: ${report.totals.review}`);
  console.log(`Candidate unused: ${report.totals.candidateUnused}`);
  console.log("");
  console.log(`Report JSON: ${reportJsonPath}`);
  console.log(`Report MD: ${reportMdPath}`);

  const candidates = rows.filter((row) => row.status === "candidate_unused");
  if (candidates.length > 0) {
    console.log("");
    console.log("Candidate unused scripts:");
    for (const row of candidates) {
      console.log(`- ${row.fileName}`);
    }
  }
}

main();
