import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const rawDir = path.resolve(projectRoot, "data/knowledgebase/raw");
const domainCatalogPath = path.resolve(projectRoot, "src/lib/knowledgebase/domain-priority.json");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-DOMAIN-COVERAGE-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-DOMAIN-COVERAGE-REPORT.md");

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
  const selectedDomains = domainsRaw
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);

  return {
    minScore: Math.max(1, Number(getArgValue("--min-score") ?? 1)),
    topDocs: Math.max(1, Number(getArgValue("--top-docs") ?? 5)),
    domains: selectedDomains,
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
  };
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function readMarkdownFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function parseFrontMatter(content) {
  if (!content.startsWith("---\n")) {
    return {
      frontMatter: {},
      body: content,
    };
  }

  const endIndex = content.indexOf("\n---\n", 4);
  if (endIndex === -1) {
    return {
      frontMatter: {},
      body: content,
    };
  }

  const frontMatterRaw = content.slice(4, endIndex);
  const body = content.slice(endIndex + 5);
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

function parseDomainTags(rawValue) {
  return String(rawValue ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
}

function countKeywordOccurrences(text, keyword) {
  const normalizedKeyword = String(keyword).trim().toLowerCase();
  if (!normalizedKeyword) return 0;
  const escaped = normalizedKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\b${escaped}\\b`, "gi");
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function computeDomainScores(text, domains, minScore) {
  const scores = [];
  for (const domain of domains) {
    const keywordScores = [];
    let totalScore = 0;
    for (const keyword of domain.keywords ?? []) {
      const count = countKeywordOccurrences(text, keyword);
      if (count > 0) {
        keywordScores.push({ keyword, count });
        totalScore += count;
      }
    }

    if (totalScore >= minScore) {
      scores.push({
        domainId: String(domain.id).toLowerCase(),
        score: totalScore,
        matchedKeywords: keywordScores.sort((a, b) => b.count - a.count).slice(0, 8),
      });
    }
  }
  return scores.sort((a, b) => b.score - a.score);
}

function dedupeKeywords(rows) {
  const map = new Map();
  for (const row of rows) {
    const key = String(row?.keyword ?? "").toLowerCase();
    if (!key) continue;
    const existing = map.get(key);
    if (!existing || Number(row.count ?? 0) > Number(existing.count ?? 0)) {
      map.set(key, {
        keyword: String(row.keyword),
        count: Number(row.count ?? 0),
      });
    }
  }
  return [...map.values()];
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Domain Coverage Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Documents scanned: ${report.totals.documentsScanned}`);
  lines.push(`- Documents with domain matches: ${report.totals.documentsMatched}`);
  lines.push(`- Documents matched by text: ${report.totals.documentsMatchedByText}`);
  lines.push(`- Documents matched by metadata tags: ${report.totals.documentsMatchedByMetadata}`);
  lines.push(`- Domains with at least one document: ${report.totals.domainsCovered}`);
  lines.push(`- Domains with no documents yet: ${report.totals.domainsMissing}`);
  lines.push("");
  if ((report.filters.domains ?? []).length > 0) {
    lines.push(`- Filtered domains: ${(report.filters.domains ?? []).join(", ")}`);
    lines.push("");
  }

  lines.push("## Domain Counts");
  lines.push("");
  for (const item of report.byDomain) {
    lines.push(`- ${item.domainId}: ${item.docCount} docs (max score ${item.maxScore})`);
  }
  lines.push("");

  lines.push("## Missing Domains");
  lines.push("");
  if (report.missingDomains.length === 0) {
    lines.push("- none");
  } else {
    for (const domainId of report.missingDomains) {
      lines.push(`- ${domainId}`);
    }
  }
  lines.push("");

  lines.push("## Top Docs by Domain");
  lines.push("");
  for (const item of report.byDomain) {
    lines.push(`### ${item.domainId}`);
    lines.push("");
    if (item.topDocs.length === 0) {
      lines.push("- no docs");
    } else {
      for (const doc of item.topDocs) {
        const source = doc.sourceId ? `source=${doc.sourceId}` : "source=unknown";
        const evidence = doc.matchSource ? `, evidence=${doc.matchSource}` : "";
        lines.push(`- ${doc.path} (score=${doc.score}, ${source}${evidence})`);
      }
    }
    lines.push("");
  }

  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(domainCatalogPath)) {
    console.error(`Missing domain catalog: ${domainCatalogPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(rawDir)) {
    console.error(`Missing raw corpus directory: ${rawDir}`);
    console.error("Run knowledgebase ingestion first.");
    process.exit(1);
  }

  const catalog = readJson(domainCatalogPath);
  const allDomains = Array.isArray(catalog.domains) ? catalog.domains : [];
  const selectedDomainSet = new Set(args.domains);
  const activeDomains = allDomains.filter((domain) => {
    if (selectedDomainSet.size === 0) return true;
    return selectedDomainSet.has(String(domain.id).toLowerCase());
  });

  const files = fs.readdirSync(rawDir).filter((name) => name.toLowerCase().endsWith(".md"));
  const docs = [];

  for (const fileName of files) {
    const filePath = path.join(rawDir, fileName);
    const content = readMarkdownFile(filePath);
    const parsed = parseFrontMatter(content);
    const bodyLower = parsed.body.toLowerCase();
    const textDomainScores = computeDomainScores(bodyLower, activeDomains, args.minScore).map((score) => ({
      ...score,
      matchSource: "text",
    }));
    const scoreByDomain = new Map(textDomainScores.map((score) => [score.domainId, score]));
    const metadataDomainTags = parseDomainTags(parsed.frontMatter.domain_tags);
    const activeDomainSet = new Set(activeDomains.map((domain) => String(domain.id).toLowerCase()));
    for (const domainId of metadataDomainTags) {
      if (!activeDomainSet.has(domainId)) continue;
      const existing = scoreByDomain.get(domainId);
      if (!existing) {
        scoreByDomain.set(domainId, {
          domainId,
          score: args.minScore,
          matchedKeywords: [{ keyword: "domain_tag", count: 1 }],
          matchSource: "metadata",
        });
      } else if (existing.matchSource === "text") {
        existing.matchSource = "text+metadata";
        existing.matchedKeywords = dedupeKeywords([
          ...existing.matchedKeywords,
          { keyword: "domain_tag", count: 1 },
        ]);
      }
    }
    const domainScores = [...scoreByDomain.values()].sort((a, b) => b.score - a.score);
    docs.push({
      path: path.relative(projectRoot, filePath),
      sourceId: parsed.frontMatter.source_id ?? "",
      queueId: parsed.frontMatter.queue_id ?? "",
      domainScores,
    });
  }

  const byDomain = [];
  for (const domain of activeDomains) {
    const domainId = String(domain.id).toLowerCase();
    const matchedDocs = docs
      .map((doc) => {
        const match = doc.domainScores.find((score) => score.domainId === domainId);
        if (!match) return null;
        return {
          path: doc.path,
          sourceId: doc.sourceId,
          queueId: doc.queueId,
          score: match.score,
          matchedKeywords: match.matchedKeywords,
          matchSource: match.matchSource ?? "text",
        };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score);

    byDomain.push({
      domainId,
      docCount: matchedDocs.length,
      maxScore: matchedDocs[0]?.score ?? 0,
      topDocs: matchedDocs.slice(0, args.topDocs),
    });
  }

  byDomain.sort((a, b) => b.docCount - a.docCount || b.maxScore - a.maxScore);

  const coveredDomains = byDomain.filter((entry) => entry.docCount > 0).map((entry) => entry.domainId);
  const missingDomains = byDomain.filter((entry) => entry.docCount === 0).map((entry) => entry.domainId);
  const documentsMatched = docs.filter((doc) => doc.domainScores.length > 0);
  const documentsMatchedByText = docs.filter((doc) =>
    doc.domainScores.some((score) =>
      String(score.matchSource ?? "text").includes("text"),
    ),
  );
  const documentsMatchedByMetadata = docs.filter((doc) =>
    doc.domainScores.some((score) =>
      String(score.matchSource ?? "").includes("metadata"),
    ),
  );

  const report = {
    generatedAt: new Date().toISOString(),
    filters: {
      minScore: args.minScore,
      topDocs: args.topDocs,
      domains: args.domains,
    },
    totals: {
      documentsScanned: docs.length,
      documentsMatched: documentsMatched.length,
      documentsMatchedByText: documentsMatchedByText.length,
      documentsMatchedByMetadata: documentsMatchedByMetadata.length,
      domainsCovered: coveredDomains.length,
      domainsMissing: missingDomains.length,
    },
    byDomain,
    missingDomains,
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

  console.log("Knowledgebase domain coverage");
  console.log("");
  console.log(`Documents scanned: ${report.totals.documentsScanned}`);
  console.log(`Documents with domain matches: ${report.totals.documentsMatched}`);
  console.log(`Matched by text: ${report.totals.documentsMatchedByText}`);
  console.log(`Matched by metadata tags: ${report.totals.documentsMatchedByMetadata}`);
  console.log(`Domains covered: ${report.totals.domainsCovered}`);
  console.log(`Domains missing: ${report.totals.domainsMissing}`);
  if (args.domains.length > 0) {
    console.log(`Filtered domains: ${args.domains.join(", ")}`);
  }
  console.log("");
  console.log(`Report JSON: ${outJson}`);
  console.log(`Report MD: ${outMd}`);
}

main();
