import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const domainCatalogPath = path.resolve(projectRoot, "src/lib/knowledgebase/domain-priority.json");
const chunksPath = path.resolve(projectRoot, "data/knowledgebase/chunks.jsonl");
const outPackPath = path.resolve(projectRoot, "data/knowledgebase/lesson-authoring-pack.json");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-LESSON-PACK-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-LESSON-PACK-REPORT.md");

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
    maxChunksPerDomain: Math.max(10, Number(getArgValue("--max-chunks-per-domain") ?? 80)),
    minScore: Math.max(1, Number(getArgValue("--min-score") ?? 2)),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
  };
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function readJsonLines(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
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

function isSearchLandingUrl(url) {
  const lower = String(url ?? "").toLowerCase();
  return lower.includes("/search/?q=") || lower.includes("/search?q=") || lower.includes("/search-results?query=");
}

function qualityScoreForUrl(url) {
  const lower = String(url ?? "").toLowerCase();
  let score = 60;
  if (lower.includes("/courses/")) score += 25;
  if (lower.includes("/pages/")) score += 10;
  if (lower.includes("/download")) score += 8;
  if (isSearchLandingUrl(lower)) score -= 30;
  if (lower.includes("/about") || lower.includes("/contact") || lower.includes("/help")) score -= 25;
  return Math.max(0, Math.min(100, score));
}

function qualityTierFromScore(score) {
  if (score >= 70) return "high";
  if (score >= 45) return "medium";
  return "low";
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Lesson Pack Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Domains exported: ${report.totals.domains}`);
  lines.push(`- Chunks considered: ${report.totals.chunksScanned}`);
  lines.push(`- Chunks exported: ${report.totals.chunksExported}`);
  lines.push(`- Output pack: ${report.outputs.pack}`);
  lines.push("");
  lines.push("## Domain Counts");
  lines.push("");
  for (const row of report.domainSummaries) {
    lines.push(`- ${row.domainId}: ${row.chunkCount} chunks, ${row.sourceCount} sources`);
  }
  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(domainCatalogPath)) {
    console.error(`Missing domain catalog: ${domainCatalogPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(chunksPath)) {
    console.error(`Missing chunks file: ${chunksPath}`);
    console.error("Run: npm run knowledgebase:manifest");
    process.exit(1);
  }

  const catalog = readJson(domainCatalogPath);
  const domains = Array.isArray(catalog.domains) ? catalog.domains : [];
  const chunks = readJsonLines(chunksPath);

  const packDomains = [];
  let totalExported = 0;

  for (const domain of domains) {
    const domainId = String(domain.id).toLowerCase();
    const keywords = Array.isArray(domain.keywords) ? domain.keywords : [];
    const scored = [];

    for (const chunk of chunks) {
      const text = String(chunk.text ?? "").toLowerCase();
      let keywordScore = 0;
      for (const keyword of keywords) {
        keywordScore += countKeywordOccurrences(text, keyword);
      }

      const domainTags = Array.isArray(chunk.domain_tags)
        ? chunk.domain_tags.map((value) => String(value).toLowerCase())
        : [];
      const hasDomainTag = domainTags.includes(domainId);
      const qualityScore = qualityScoreForUrl(chunk.url);
      const qualityTier = qualityTierFromScore(qualityScore);
      const qualityAdjustment = qualityTier === "high" ? 1.2 : qualityTier === "medium" ? 1 : 0.7;
      const baseScore = keywordScore + (hasDomainTag ? 2 : 0);
      const finalScore = Number((baseScore * qualityAdjustment).toFixed(3));

      if (finalScore < args.minScore) continue;

      scored.push({
        chunk_id: chunk.chunk_id,
        doc_id: chunk.doc_id,
        source_id: chunk.source_id,
        source_name: chunk.source_name,
        category: chunk.category,
        url: chunk.url,
        estimated_tokens: chunk.estimated_tokens,
        quality_score: qualityScore,
        quality_tier: qualityTier,
        has_domain_tag: hasDomainTag,
        keyword_score: keywordScore,
        final_score: finalScore,
        text: chunk.text,
      });
    }

    scored.sort((a, b) => b.final_score - a.final_score || b.quality_score - a.quality_score);
    const selected = scored.slice(0, args.maxChunksPerDomain);
    totalExported += selected.length;

    const sources = [...new Set(selected.map((row) => row.source_id))].sort();
    packDomains.push({
      domain_id: domainId,
      keywords,
      chunk_count: selected.length,
      source_count: sources.length,
      sources,
      chunks: selected,
    });
  }

  const lessonPack = {
    generatedAt: new Date().toISOString(),
    options: {
      maxChunksPerDomain: args.maxChunksPerDomain,
      minScore: args.minScore,
    },
    domains: packDomains,
  };

  fs.mkdirSync(path.dirname(outPackPath), { recursive: true });
  fs.writeFileSync(outPackPath, JSON.stringify(lessonPack, null, 2), "utf8");

  const report = {
    generatedAt: lessonPack.generatedAt,
    options: lessonPack.options,
    totals: {
      domains: packDomains.length,
      chunksScanned: chunks.length,
      chunksExported: totalExported,
    },
    domainSummaries: packDomains.map((domain) => ({
      domainId: domain.domain_id,
      chunkCount: domain.chunk_count,
      sourceCount: domain.source_count,
    })),
    outputs: {
      pack: path.relative(projectRoot, outPackPath),
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
    return;
  }

  console.log("Knowledgebase lesson pack export");
  console.log("");
  console.log(`Domains exported: ${report.totals.domains}`);
  console.log(`Chunks scanned: ${report.totals.chunksScanned}`);
  console.log(`Chunks exported: ${report.totals.chunksExported}`);
  console.log("");
  console.log(`Pack JSON: ${outPackPath}`);
  console.log(`Report JSON: ${outJson}`);
  console.log(`Report MD: ${outMd}`);
}

main();
