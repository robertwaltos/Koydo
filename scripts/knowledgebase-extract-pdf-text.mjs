import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const projectRoot = process.cwd();
const queuePath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-INGESTION-QUEUE.json");
const pdfInputDir = path.resolve(projectRoot, "data/knowledgebase/raw-pdf");
const outputDir = path.resolve(projectRoot, "data/knowledgebase/raw");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-PDF-EXTRACT-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-PDF-EXTRACT-REPORT.md");

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

  const positionalNumeric =
    argv.find((value) => !value.startsWith("--") && !value.includes("=") && !Number.isNaN(Number(value)))
    ?? null;

  return {
    limit: Math.max(1, Number(getArgValue("--limit") ?? positionalNumeric ?? 50)),
    engine: String(getArgValue("--engine") ?? "auto").toLowerCase(),
    overwrite: hasFlag("--overwrite"),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
    noFail: hasFlag("--no-fail"),
  };
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function normalizeWhitespace(input) {
  return input
    .replace(/\u00a0/g, " ")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function commandExists(command, args = ["--version"]) {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    shell: false,
  });
  return !result.error;
}

function detectAvailableEngines() {
  const pdftotextAvailable = commandExists("pdftotext", ["-v"]);
  const pythonPyPdf = spawnSync(
    "python",
    ["-c", "import pypdf; print('ok')"],
    { encoding: "utf8", shell: false },
  );
  const pypdfAvailable = !pythonPyPdf.error && pythonPyPdf.status === 0;

  return {
    pdftotext: pdftotextAvailable,
    pypdf: pypdfAvailable,
  };
}

function extractWithPdftotext(pdfPath) {
  const result = spawnSync("pdftotext", ["-layout", "-enc", "UTF-8", pdfPath, "-"], {
    encoding: "utf8",
    shell: false,
    maxBuffer: 32 * 1024 * 1024,
  });
  if (result.error || result.status !== 0) {
    return {
      ok: false,
      text: "",
      error: result.error?.message || result.stderr || `pdftotext exit ${result.status}`,
    };
  }
  return {
    ok: true,
    text: result.stdout ?? "",
    error: null,
  };
}

function extractWithPyPdf(pdfPath) {
  const pythonCode = [
    "import sys",
    "from pypdf import PdfReader",
    "reader = PdfReader(sys.argv[1])",
    "parts = []",
    "for page in reader.pages:",
    "    parts.append(page.extract_text() or '')",
    "print('\\n\\n'.join(parts))",
  ].join("\n");

  const result = spawnSync("python", ["-c", pythonCode, pdfPath], {
    encoding: "utf8",
    shell: false,
    maxBuffer: 32 * 1024 * 1024,
    env: {
      ...process.env,
      PYTHONIOENCODING: "utf-8",
    },
  });

  if (result.error || result.status !== 0) {
    return {
      ok: false,
      text: "",
      error: result.error?.message || result.stderr || `python/pypdf exit ${result.status}`,
    };
  }

  return {
    ok: true,
    text: result.stdout ?? "",
    error: null,
  };
}

function chooseEngineOrder(argsEngine, available) {
  if (argsEngine === "pdftotext") return ["pdftotext"];
  if (argsEngine === "pypdf") return ["pypdf"];
  if (available.pdftotext) return ["pdftotext", "pypdf"];
  return ["pypdf", "pdftotext"];
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase PDF Extraction Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Attempted: ${report.totals.attempted}`);
  lines.push(`- Succeeded: ${report.totals.succeeded}`);
  lines.push(`- Failed: ${report.totals.failed}`);
  lines.push(`- Skipped existing: ${report.totals.skippedExisting}`);
  lines.push("");
  lines.push(`- Engine availability: pdftotext=${report.engineAvailability.pdftotext ? "yes" : "no"}, pypdf=${report.engineAvailability.pypdf ? "yes" : "no"}`);
  lines.push("");
  lines.push("## Results");
  lines.push("");
  lines.push("| Queue ID | Status | Engine | Chars | Output | PDF | Error |");
  lines.push("| --- | --- | --- | --- | --- | --- | --- |");
  for (const row of report.results) {
    lines.push(
      `| ${row.queueId} | ${row.status} | ${row.engine ?? "-"} | ${row.characters ?? 0} | ${row.outputPath ?? "-"} | ${row.pdfPath ?? "-"} | ${row.error ?? "-"} |`,
    );
  }
  return lines.join("\n");
}

function buildFrontMatter(queueMeta, queueId, pdfPath, engine) {
  const lines = ["---"];
  lines.push(`queue_id: ${queueId}`);
  if (queueMeta) {
    lines.push(`source_id: ${queueMeta.sourceId ?? ""}`);
    lines.push(`source_name: ${queueMeta.sourceName ?? ""}`);
    lines.push(`category: ${queueMeta.category ?? ""}`);
    lines.push(`tier: ${queueMeta.tier ?? ""}`);
    lines.push(`link_type: ${queueMeta.linkType ?? "curriculum_pdf"}`);
    lines.push(`url: ${queueMeta.url ?? ""}`);
    lines.push(`domains: ${(queueMeta.domainTags ?? []).join(", ")}`);
  }
  lines.push(`pdf_path: ${pdfPath}`);
  lines.push(`extracted_at: ${new Date().toISOString()}`);
  lines.push(`extract_engine: ${engine}`);
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const engineAvailability = detectAvailableEngines();
  const engineOrder = chooseEngineOrder(args.engine, engineAvailability);

  if (!fs.existsSync(pdfInputDir)) {
    console.error(`Missing PDF input directory: ${pdfInputDir}`);
    console.error("Run: npm run knowledgebase:ingest");
    process.exit(1);
  }

  const queueMap = new Map();
  if (fs.existsSync(queuePath)) {
    const queueReport = readJson(queuePath);
    for (const row of queueReport.queue ?? []) {
      queueMap.set(row.queueId, row);
    }
  }

  fs.mkdirSync(outputDir, { recursive: true });
  const pdfFiles = fs.readdirSync(pdfInputDir)
    .filter((name) => name.toLowerCase().endsWith(".pdf"))
    .slice(0, args.limit);

  const results = [];
  for (const fileName of pdfFiles) {
    const pdfPath = path.join(pdfInputDir, fileName);
    const queueId = fileName.replace(/\.pdf$/i, "");
    const queueMeta = queueMap.get(queueId) ?? null;
    const outputPath = path.join(outputDir, `${queueId}.md`);

    if (!args.overwrite && fs.existsSync(outputPath)) {
      results.push({
        queueId,
        status: "skipped_existing",
        engine: null,
        characters: 0,
        outputPath: path.relative(projectRoot, outputPath),
        pdfPath: path.relative(projectRoot, pdfPath),
        error: null,
      });
      continue;
    }

    let extractedText = "";
    let usedEngine = null;
    let extractionError = null;

    for (const engine of engineOrder) {
      if (engine === "pdftotext" && !engineAvailability.pdftotext) continue;
      if (engine === "pypdf" && !engineAvailability.pypdf) continue;

      const extracted =
        engine === "pdftotext"
          ? extractWithPdftotext(pdfPath)
          : extractWithPyPdf(pdfPath);

      if (extracted.ok) {
        extractedText = normalizeWhitespace(extracted.text);
        usedEngine = engine;
        extractionError = null;
        break;
      }

      extractionError = extracted.error;
    }

    if (!usedEngine) {
      results.push({
        queueId,
        status: "failed",
        engine: null,
        characters: 0,
        outputPath: null,
        pdfPath: path.relative(projectRoot, pdfPath),
        error:
          extractionError
          || "No PDF extraction engine is available. Install pdftotext or python+pypdf.",
      });
      continue;
    }

    if (extractedText.length < 120) {
      results.push({
        queueId,
        status: "failed",
        engine: usedEngine,
        characters: extractedText.length,
        outputPath: null,
        pdfPath: path.relative(projectRoot, pdfPath),
        error: "Extracted PDF text is too short for ingestion.",
      });
      continue;
    }

    const frontMatter = buildFrontMatter(queueMeta, queueId, path.relative(projectRoot, pdfPath), usedEngine);
    const document = `${frontMatter}${extractedText}\n`;
    fs.writeFileSync(outputPath, document, "utf8");

    results.push({
      queueId,
      status: "succeeded",
      engine: usedEngine,
      characters: extractedText.length,
      outputPath: path.relative(projectRoot, outputPath),
      pdfPath: path.relative(projectRoot, pdfPath),
      error: null,
    });
  }

  const report = {
    generatedAt: new Date().toISOString(),
    options: {
      limit: args.limit,
      engine: args.engine,
      overwrite: args.overwrite,
    },
    engineAvailability,
    totals: {
      attempted: results.length,
      succeeded: results.filter((row) => row.status === "succeeded").length,
      failed: results.filter((row) => row.status === "failed").length,
      skippedExisting: results.filter((row) => row.status === "skipped_existing").length,
    },
    results,
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

  console.log("Knowledgebase PDF extraction");
  console.log("");
  console.log(`Attempted: ${report.totals.attempted}`);
  console.log(`Succeeded: ${report.totals.succeeded}`);
  console.log(`Failed: ${report.totals.failed}`);
  console.log(`Skipped existing: ${report.totals.skippedExisting}`);
  console.log(
    `Engine availability: pdftotext=${engineAvailability.pdftotext ? "yes" : "no"}, pypdf=${engineAvailability.pypdf ? "yes" : "no"}`,
  );
  console.log("");
  console.log(`Report JSON: ${outJson}`);
  console.log(`Report MD: ${outMd}`);

  if (!args.noFail && report.totals.failed > 0) {
    process.exitCode = 1;
  }
}

main();
