import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const defaultQueuePath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-INGESTION-QUEUE.json");
const outputDir = path.resolve(projectRoot, "data/knowledgebase/raw");
const pdfOutputDir = path.resolve(projectRoot, "data/knowledgebase/raw-pdf");
const defaultOutJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-INGEST-RUN-REPORT.json");
const defaultOutMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-INGEST-RUN-REPORT.md");

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
    limit: Math.max(1, Number(getArgValue("--limit") ?? positionalNumeric ?? 20)),
    timeoutMs: Math.max(1000, Number(getArgValue("--timeout-ms") ?? 20000)),
    queueFile: path.resolve(projectRoot, getArgValue("--queue-file") ?? defaultQueuePath),
    outFile: path.resolve(projectRoot, getArgValue("--out-file") ?? defaultOutJson),
    outMdFile: path.resolve(projectRoot, getArgValue("--out-md-file") ?? defaultOutMd),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
    allowBinary: hasFlag("--allow-binary"),
    balanced: !hasFlag("--no-balanced"),
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

function htmlToText(html) {
  const withoutScripts = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ");
  const text = withoutScripts
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|li|h1|h2|h3|h4|h5|h6|section|article)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#39;/gi, "'")
    .replace(/&quot;/gi, '"');
  return normalizeWhitespace(text);
}

function safeFileName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Ingest Run Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Attempted: ${report.totals.attempted}`);
  lines.push(`- Succeeded: ${report.totals.succeeded}`);
  lines.push(`- Failed: ${report.totals.failed}`);
  lines.push(`- Skipped unsupported: ${report.totals.skippedUnsupported}`);
  lines.push(`- Saved PDF pending extraction: ${report.totals.savedPdfPendingExtraction}`);
  lines.push("");
  lines.push("## Results");
  lines.push("");
  lines.push("| Queue ID | Status | Content Type | Chars | Output | Saved PDF | URL |");
  lines.push("| --- | --- | --- | --- | --- | --- | --- |");
  for (const row of report.results) {
    lines.push(
      `| ${row.queueId} | ${row.status} | ${row.contentType ?? "unknown"} | ${row.characters ?? 0} | ${row.outputPath ?? "-"} | ${row.savedPdfPath ?? "-"} | ${row.url} |`,
    );
  }
  return lines.join("\n");
}

function selectQueueItems(items, limit, balanced) {
  const queued = items.filter((item) => item.status === "queued");
  if (!balanced) {
    return queued.slice(0, limit);
  }

  const buckets = new Map();
  for (const item of queued) {
    const key = item.sourceId ?? "unknown";
    if (!buckets.has(key)) {
      buckets.set(key, []);
    }
    buckets.get(key).push(item);
  }

  const selected = [];
  const keys = [...buckets.keys()];
  while (selected.length < limit) {
    let progressed = false;
    for (const key of keys) {
      const bucket = buckets.get(key);
      if (!bucket || bucket.length === 0) continue;
      selected.push(bucket.shift());
      progressed = true;
      if (selected.length >= limit) break;
    }
    if (!progressed) break;
  }

  return selected;
}

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      headers: {
        "User-Agent": "Koydo-Knowledgebase-Ingest/1.0",
      },
    });
    const arrayBuffer = await response.arrayBuffer();
    return {
      ok: response.ok,
      status: response.status,
      contentType: response.headers.get("content-type") ?? "application/octet-stream",
      bytes: Buffer.from(arrayBuffer),
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      contentType: "unknown",
      bytes: Buffer.alloc(0),
      error: error instanceof Error ? error.message : "Unknown fetch error",
    };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(args.queueFile)) {
    console.error(`Missing queue file: ${args.queueFile}`);
    console.error("Run: npm run knowledgebase:queue");
    process.exit(1);
  }

  const queueReport = readJson(args.queueFile);
  const queue = selectQueueItems(queueReport.queue ?? [], args.limit, args.balanced);
  fs.mkdirSync(outputDir, { recursive: true });
  fs.mkdirSync(pdfOutputDir, { recursive: true });

  const results = [];
  for (const item of queue) {
    const fetched = await fetchWithTimeout(item.url, args.timeoutMs);
    if (!fetched.ok) {
      results.push({
        queueId: item.queueId,
        sourceId: item.sourceId,
        status: "failed",
        httpStatus: fetched.status,
        contentType: fetched.contentType,
        error: fetched.error || `HTTP ${fetched.status}`,
        url: item.url,
      });
      continue;
    }

    const contentType = fetched.contentType.toLowerCase();
    const isStaticAssetType =
      contentType.includes("image/")
      || contentType.includes("font/")
      || contentType.includes("javascript")
      || contentType.includes("text/css")
      || contentType.includes("application/octet-stream");
    const isHtml = contentType.includes("text/html") || item.linkType.endsWith("_html");
    const isPlainText =
      contentType.includes("text/plain")
      || contentType.includes("application/json")
      || item.linkType.endsWith("_text");
    const isPdf = contentType.includes("pdf") || item.linkType.endsWith("_pdf");

    let normalizedText = "";
    let status = "succeeded";
    let error = null;
    let savedPdfPath = null;

    if (isStaticAssetType && !args.allowBinary) {
      status = "skipped_unsupported";
      error = "Static asset content type is not eligible for text ingest.";
    } else if (isHtml) {
      normalizedText = htmlToText(fetched.bytes.toString("utf8"));
    } else if (isPlainText) {
      normalizedText = normalizeWhitespace(fetched.bytes.toString("utf8"));
    } else if (isPdf && !args.allowBinary) {
      const pdfBase = safeFileName(item.queueId || `${item.sourceId}-${Date.now()}`);
      const pdfPath = path.join(pdfOutputDir, `${pdfBase}.pdf`);
      fs.writeFileSync(pdfPath, fetched.bytes);
      savedPdfPath = path.relative(projectRoot, pdfPath);
      status = "saved_pdf_pending_extraction";
      error = "PDF saved for extraction. Run: npm run knowledgebase:pdf:extract";
    } else if (!args.allowBinary) {
      status = "skipped_unsupported";
      error = "Unsupported content type for text-first ingest.";
    } else {
      normalizedText = fetched.bytes.toString("base64");
    }

    if (status === "succeeded" && normalizedText.length < 120) {
      status = "failed";
      error = "Extracted content is too short for useful ingestion.";
    }

    let outputPath = null;
    if (status === "succeeded") {
      const fileBase = safeFileName(item.queueId || `${item.sourceId}-${Date.now()}`);
      const filePath = path.join(outputDir, `${fileBase}.md`);
      const domainTags = Array.isArray(item.domainTags)
        ? item.domainTags.map((value) => String(value).trim()).filter(Boolean)
        : [];
      const document = [
        "---",
        `queue_id: ${item.queueId}`,
        `source_id: ${item.sourceId}`,
        `source_name: ${item.sourceName}`,
        `category: ${item.category}`,
        `tier: ${item.tier}`,
        `link_type: ${item.linkType}`,
        `priority: ${item.priority ?? ""}`,
        `domain_tags: ${domainTags.join(",")}`,
        `rights_status: ${item.rightsStatus ?? ""}`,
        `rights_policy: ${item.rightsPolicy ?? ""}`,
        `url: ${item.url}`,
        `fetched_at: ${new Date().toISOString()}`,
        `content_type: ${contentType}`,
        "---",
        "",
        normalizedText,
        "",
      ].join("\n");
      fs.writeFileSync(filePath, document, "utf8");
      outputPath = path.relative(projectRoot, filePath);
    }

    results.push({
      queueId: item.queueId,
      sourceId: item.sourceId,
      status,
      httpStatus: fetched.status,
      contentType: fetched.contentType,
      characters: normalizedText.length,
      outputPath,
      savedPdfPath,
      error,
      url: item.url,
    });
  }

  const report = {
    generatedAt: new Date().toISOString(),
    options: {
      limit: args.limit,
      timeoutMs: args.timeoutMs,
      balanced: args.balanced,
      allowBinary: args.allowBinary,
      queueFile: path.relative(projectRoot, args.queueFile),
    },
    totals: {
      attempted: results.length,
      succeeded: results.filter((row) => row.status === "succeeded").length,
      failed: results.filter((row) => row.status === "failed").length,
      skippedUnsupported: results.filter((row) => row.status === "skipped_unsupported").length,
      savedPdfPendingExtraction: results.filter((row) => row.status === "saved_pdf_pending_extraction").length,
    },
    results,
  };

  if (args.writeReport) {
    fs.mkdirSync(path.dirname(args.outFile), { recursive: true });
    fs.writeFileSync(args.outFile, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(args.outMdFile, toMarkdown(report), "utf8");
  }

  if (args.json) {
    console.log(JSON.stringify(report, null, 2));
    return;
  }

  console.log("Knowledgebase ingest run");
  console.log("");
  console.log(`Attempted: ${report.totals.attempted}`);
  console.log(`Succeeded: ${report.totals.succeeded}`);
  console.log(`Failed: ${report.totals.failed}`);
  console.log(`Skipped unsupported: ${report.totals.skippedUnsupported}`);
  console.log(`Saved PDF pending extraction: ${report.totals.savedPdfPendingExtraction}`);
  console.log("");
  console.log(`Queue JSON: ${args.queueFile}`);
  console.log(`Report JSON: ${args.outFile}`);
  console.log(`Report MD: ${args.outMdFile}`);
}

void main();
