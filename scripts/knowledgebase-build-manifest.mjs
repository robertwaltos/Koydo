import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const rawDir = path.resolve(projectRoot, "data/knowledgebase/raw");
const domainCatalogPath = path.resolve(projectRoot, "src/lib/knowledgebase/domain-priority.json");
const manifestPath = path.resolve(projectRoot, "data/knowledgebase/manifest.json");
const chunksPath = path.resolve(projectRoot, "data/knowledgebase/chunks.jsonl");
const reportJsonPath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-MANIFEST-REPORT.json");
const reportMdPath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-MANIFEST-REPORT.md");

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
    chunkChars: Math.max(300, Number(getArgValue("--chunk-chars") ?? 1400)),
    overlapChars: Math.max(0, Number(getArgValue("--overlap-chars") ?? 200)),
    minChunkChars: Math.max(80, Number(getArgValue("--min-chunk-chars") ?? 220)),
    maxDocs: Math.max(0, Number(getArgValue("--max-docs") ?? 0)),
    maxDocsPerSource: Math.max(0, Number(getArgValue("--max-docs-per-source") ?? 0)),
    maxChunksPerSource: Math.max(0, Number(getArgValue("--max-chunks-per-source") ?? 0)),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
  };
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function decodeEntities(input) {
  return String(input ?? "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/&#34;/gi, '"');
}

function normalizeWhitespace(input) {
  return String(input ?? "")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function parseFrontMatter(markdown) {
  if (!markdown.startsWith("---\n")) {
    return {
      frontMatter: {},
      body: markdown,
    };
  }
  const endIndex = markdown.indexOf("\n---\n", 4);
  if (endIndex === -1) {
    return {
      frontMatter: {},
      body: markdown,
    };
  }

  const frontMatterRaw = markdown.slice(4, endIndex);
  const body = markdown.slice(endIndex + 5);
  const frontMatter = {};
  for (const line of frontMatterRaw.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    frontMatter[key] = value;
  }
  return {
    frontMatter,
    body,
  };
}

function cleanBodyText(input) {
  const navLike = new Set([
    "back to top",
    "skip to navigation",
    "skip to main content",
    "search",
    "home",
    "downloads",
    "help and support",
    "resources",
    "menu",
    "about",
    "contact us",
  ]);

  let text = String(input ?? "");
  text = decodeEntities(text);
  text = text.replace(/\\r\\n/g, "\n");
  text = text.replace(/\\n/g, "\n");
  text = text.replace(/&#34;\}\}"[^\n]*/g, "");
  text = text.replace(/\{\{[^}]{0,120}\}\}/g, " ");
  text = normalizeWhitespace(text);

  const lines = text.split("\n");
  const filtered = [];
  let lastLine = "";
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    const lower = line.toLowerCase();
    if (line.length <= 40 && navLike.has(lower)) continue;
    if (line === lastLine) continue;
    filtered.push(line);
    lastLine = line;
  }

  return normalizeWhitespace(filtered.join("\n"));
}

function chunkText(text, chunkChars, overlapChars, minChunkChars) {
  if (!text) return [];
  if (text.length <= chunkChars) {
    return text.length >= minChunkChars ? [text] : [];
  }

  const chunks = [];
  const step = Math.max(1, chunkChars - overlapChars);
  let start = 0;
  while (start < text.length) {
    const end = Math.min(text.length, start + chunkChars);
    const chunk = text.slice(start, end).trim();
    if (chunk.length >= minChunkChars) {
      chunks.push(chunk);
    }
    if (end >= text.length) break;
    start += step;
  }
  return chunks;
}

function countKeywordOccurrences(text, keyword) {
  const normalizedKeyword = String(keyword ?? "").trim().toLowerCase();
  if (!normalizedKeyword) return 0;
  const escaped = normalizedKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = /^[a-z0-9]+$/i.test(normalizedKeyword)
    ? new RegExp(`\\b${escaped}\\b`, "gi")
    : new RegExp(escaped, "gi");
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function scoreDomains(text, domains) {
  const lower = String(text ?? "").toLowerCase();
  const rows = [];
  for (const domain of domains) {
    let score = 0;
    for (const keyword of domain.keywords ?? []) {
      score += countKeywordOccurrences(lower, keyword);
    }
    if (score > 0) {
      rows.push({
        domainId: String(domain.id).toLowerCase(),
        score,
      });
    }
  }
  rows.sort((a, b) => b.score - a.score);
  return rows;
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Manifest Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Docs scanned: ${report.totals.docsScanned}`);
  lines.push(`- Docs included: ${report.totals.docsIncluded}`);
  lines.push(`- Chunks created: ${report.totals.chunksCreated}`);
  lines.push(`- Avg chunk chars: ${report.totals.avgChunkChars}`);
  if (report.options.maxDocsPerSource > 0) {
    lines.push(`- Max docs per source: ${report.options.maxDocsPerSource}`);
  }
  if (report.options.maxChunksPerSource > 0) {
    lines.push(`- Max chunks per source: ${report.options.maxChunksPerSource}`);
  }
  lines.push("");
  lines.push("## By Source");
  lines.push("");
  for (const [sourceId, count] of Object.entries(report.totals.bySource)) {
    lines.push(`- ${sourceId}: ${count} chunks`);
  }
  lines.push("");
  lines.push("## Output");
  lines.push("");
  lines.push(`- Manifest: ${report.outputs.manifestFile}`);
  lines.push(`- Chunks: ${report.outputs.chunksFile}`);
  return lines.join("\n");
}

function estimateTokens(text) {
  return Math.ceil(String(text ?? "").length / 4);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(rawDir)) {
    console.error(`Missing raw directory: ${rawDir}`);
    console.error("Run knowledgebase ingest first.");
    process.exit(1);
  }
  if (!fs.existsSync(domainCatalogPath)) {
    console.error(`Missing domain catalog: ${domainCatalogPath}`);
    process.exit(1);
  }

  const domainCatalog = readJson(domainCatalogPath);
  const domains = Array.isArray(domainCatalog.domains) ? domainCatalog.domains : [];
  const files = fs.readdirSync(rawDir).filter((name) => name.toLowerCase().endsWith(".md"));
  const selectedFiles = args.maxDocs > 0 ? files.slice(0, args.maxDocs) : files;

  const docs = [];
  const chunkRows = [];
  const bySource = {};
  const docsBySource = {};
  let totalChunkChars = 0;

  for (const fileName of selectedFiles) {
    const filePath = path.join(rawDir, fileName);
    const rawMarkdown = fs.readFileSync(filePath, "utf8");
    const parsed = parseFrontMatter(rawMarkdown);
    const docSourceId = parsed.frontMatter.source_id || "unknown";

    if (args.maxDocsPerSource > 0 && (docsBySource[docSourceId] ?? 0) >= args.maxDocsPerSource) {
      continue;
    }

    const cleaned = cleanBodyText(parsed.body);
    if (cleaned.length < args.minChunkChars) continue;

    const docId = parsed.frontMatter.queue_id || fileName.replace(/\.md$/i, "");
    const domainScores = scoreDomains(cleaned, domains);
    const docDomainTags = domainScores.slice(0, 8).map((row) => row.domainId);
    let chunks = chunkText(cleaned, args.chunkChars, args.overlapChars, args.minChunkChars);

    if (args.maxChunksPerSource > 0) {
      const remaining = Math.max(0, args.maxChunksPerSource - (bySource[docSourceId] ?? 0));
      if (remaining <= 0) {
        continue;
      }
      if (chunks.length > remaining) {
        chunks = chunks.slice(0, remaining);
      }
    }

    if (chunks.length === 0) continue;

    for (let index = 0; index < chunks.length; index += 1) {
      const chunkTextValue = chunks[index];
      const chunkDomainScores = scoreDomains(chunkTextValue, domains);
      const chunkDomainTags = chunkDomainScores.slice(0, 5).map((row) => row.domainId);
      const chunkId = `${docId}-c${String(index + 1).padStart(3, "0")}`;
      const row = {
        chunk_id: chunkId,
        doc_id: docId,
        source_id: docSourceId,
        source_name: parsed.frontMatter.source_name || "",
        category: parsed.frontMatter.category || "",
        tier: parsed.frontMatter.tier || "",
        link_type: parsed.frontMatter.link_type || "",
        url: parsed.frontMatter.url || "",
        fetched_at: parsed.frontMatter.fetched_at || "",
        domain_tags: chunkDomainTags,
        estimated_tokens: estimateTokens(chunkTextValue),
        text: chunkTextValue,
      };
      chunkRows.push(row);
      totalChunkChars += chunkTextValue.length;
      bySource[docSourceId] = (bySource[docSourceId] ?? 0) + 1;
    }

    docsBySource[docSourceId] = (docsBySource[docSourceId] ?? 0) + 1;

    docs.push({
      doc_id: docId,
      source_id: docSourceId,
      source_name: parsed.frontMatter.source_name || "",
      category: parsed.frontMatter.category || "",
      url: parsed.frontMatter.url || "",
      path: path.relative(projectRoot, filePath),
      chars: cleaned.length,
      chunk_count: chunks.length,
      domain_tags: docDomainTags,
    });
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    options: {
      chunkChars: args.chunkChars,
      overlapChars: args.overlapChars,
      minChunkChars: args.minChunkChars,
      maxDocs: args.maxDocs,
      maxDocsPerSource: args.maxDocsPerSource,
      maxChunksPerSource: args.maxChunksPerSource,
    },
    totals: {
      docsIncluded: docs.length,
      chunksCreated: chunkRows.length,
    },
    docs,
  };

  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  fs.writeFileSync(chunksPath, chunkRows.map((row) => JSON.stringify(row)).join("\n"), "utf8");

  const report = {
    generatedAt: manifest.generatedAt,
    options: manifest.options,
    totals: {
      docsScanned: selectedFiles.length,
      docsIncluded: docs.length,
      chunksCreated: chunkRows.length,
      avgChunkChars: chunkRows.length > 0 ? Math.round(totalChunkChars / chunkRows.length) : 0,
      bySource,
    },
    outputs: {
      manifestFile: path.relative(projectRoot, manifestPath),
      chunksFile: path.relative(projectRoot, chunksPath),
      reportJson: path.relative(projectRoot, reportJsonPath),
      reportMd: path.relative(projectRoot, reportMdPath),
    },
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

  console.log("Knowledgebase manifest build");
  console.log("");
  console.log(`Docs scanned: ${report.totals.docsScanned}`);
  console.log(`Docs included: ${report.totals.docsIncluded}`);
  console.log(`Chunks created: ${report.totals.chunksCreated}`);
  console.log(`Avg chunk chars: ${report.totals.avgChunkChars}`);
  console.log("");
  console.log(`Manifest JSON: ${manifestPath}`);
  console.log(`Chunks JSONL: ${chunksPath}`);
  console.log(`Report JSON: ${reportJsonPath}`);
  console.log(`Report MD: ${reportMdPath}`);
}

main();
