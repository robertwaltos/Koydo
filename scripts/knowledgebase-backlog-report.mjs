import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const domainCatalogPath = path.resolve(projectRoot, "src/lib/knowledgebase/domain-priority.json");
const coveragePath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-DOMAIN-COVERAGE-REPORT.json");
const queuePath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-INGESTION-QUEUE-PRIORITY.json");
const fallbackQueuePath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-INGESTION-QUEUE.json");
const harvestPath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-HARVEST-REPORT.json");
const manifestPath = path.resolve(projectRoot, "data/knowledgebase/manifest.json");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-BACKLOG-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-BACKLOG-REPORT.md");

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
    coverageFile: path.resolve(projectRoot, getArgValue("--coverage-file") ?? coveragePath),
    queueFile: path.resolve(projectRoot, getArgValue("--queue-file") ?? queuePath),
    fallbackQueueFile: path.resolve(projectRoot, getArgValue("--fallback-queue-file") ?? fallbackQueuePath),
    harvestFile: path.resolve(projectRoot, getArgValue("--harvest-file") ?? harvestPath),
    manifestFile: path.resolve(projectRoot, getArgValue("--manifest-file") ?? manifestPath),
    minHealthyDocs: Math.max(1, Number(getArgValue("--min-healthy-docs") ?? 5)),
    maxActionsPerDomain: Math.max(1, Number(getArgValue("--max-actions-per-domain") ?? 5)),
    failOnBacklog: hasFlag("--fail-on-backlog"),
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

function classifyHealth(docCount, minHealthyDocs) {
  if (docCount <= 0) return "critical";
  if (docCount < minHealthyDocs) return "needs_growth";
  return "healthy";
}

function matchesKeywordBoundary(text, keyword) {
  const normalizedText = String(text ?? "").toLowerCase();
  const normalizedKeyword = String(keyword ?? "").toLowerCase().trim();
  if (!normalizedKeyword) return false;

  const escaped = normalizedKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (/^[a-z0-9]+$/i.test(normalizedKeyword)) {
    const regex = new RegExp(`\\b${escaped}\\b`, "i");
    return regex.test(normalizedText);
  }
  return normalizedText.includes(normalizedKeyword);
}

function scoreKeywordMatches(text, keywords) {
  let score = 0;
  for (const keyword of keywords ?? []) {
    if (matchesKeywordBoundary(text, keyword)) {
      score += 1;
    }
  }
  return score;
}

function hashText(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = (hash * 16777619) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
}

function buildActionPlan(healthStatus, recommendedItems) {
  const hasRecommendations = recommendedItems.length > 0;
  if (healthStatus === "critical") {
    if (!hasRecommendations) {
      return {
        action: "seed_new_sources",
        summary: "No indexed docs and no queued candidates. Add targeted seeds and rerun harvest.",
        recommendedItems: [],
      };
    }
    return {
      action: "expand_now",
      summary: "No documents indexed yet. Prioritize ingestion immediately.",
      recommendedItems,
    };
  }
  if (healthStatus === "needs_growth") {
    if (!hasRecommendations) {
      return {
        action: "seed_new_sources",
        summary: "Coverage is below threshold and queue is exhausted. Add targeted source seeds and rerun harvest.",
        recommendedItems: [],
      };
    }
    return {
      action: "grow_coverage",
      summary: "Coverage exists but remains below healthy threshold.",
      recommendedItems,
    };
  }
  return {
    action: "monitor",
    summary: "Coverage currently healthy. Keep periodic refresh cadence.",
    recommendedItems: [],
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Backlog Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Domains total: ${report.totals.domains}`);
  lines.push(`- Healthy domains: ${report.totals.healthy}`);
  lines.push(`- Needs growth: ${report.totals.needsGrowth}`);
  lines.push(`- Critical gaps: ${report.totals.critical}`);
  lines.push(`- Min healthy docs: ${report.options.minHealthyDocs}`);
  lines.push(`- Queue file used: ${report.options.queueFile}`);
  lines.push("");
  lines.push("## Priority Backlog");
  lines.push("");
  if (report.backlog.length === 0) {
    lines.push("- No backlog items. All domains are healthy.");
  } else {
    for (const row of report.backlog) {
      lines.push(`### ${row.domainId}`);
      lines.push("");
      lines.push(`- Doc count: ${row.docCount}`);
      lines.push(`- Health: ${row.healthStatus}`);
      lines.push(`- Action: ${row.plan.action}`);
      lines.push(`- Notes: ${row.plan.summary}`);
      if (row.plan.recommendedItems.length > 0) {
        lines.push("- Recommended items:");
        for (const item of row.plan.recommendedItems) {
          const id = item.queueId || item.candidateId;
          lines.push(`  - [${item.kind}] ${id} (${item.sourceId}) ${item.url}`);
        }
      } else {
        lines.push("- Recommended items: none");
      }
      lines.push("");
    }
  }
  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(domainCatalogPath)) {
    console.error(`Missing domain catalog: ${domainCatalogPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(args.coverageFile)) {
    console.error(`Missing coverage report: ${args.coverageFile}`);
    console.error("Run: npm run knowledgebase:coverage");
    process.exit(1);
  }

  const catalog = readJson(domainCatalogPath, { domains: [] });
  const coverage = readJson(args.coverageFile, { byDomain: [] });
  const preferredQueue = readJson(args.queueFile, null);
  const fallbackQueue = readJson(args.fallbackQueueFile, { queue: [] });
  const harvest = readJson(args.harvestFile, { sources: [] });
  const manifest = readJson(args.manifestFile, { docs: [] });

  const preferredQueueRows = Array.isArray(preferredQueue?.queue) ? preferredQueue.queue : [];
  const fallbackQueueRows = Array.isArray(fallbackQueue?.queue) ? fallbackQueue.queue : [];
  const coverageRows = Array.isArray(coverage?.byDomain) ? coverage.byDomain : [];
  const domains = Array.isArray(catalog?.domains) ? catalog.domains : [];
  const harvestSources = Array.isArray(harvest?.sources) ? harvest.sources : [];
  const indexedDocIds = new Set(
    (Array.isArray(manifest?.docs) ? manifest.docs : [])
      .map((doc) => String(doc?.doc_id ?? "").trim())
      .filter(Boolean),
  );
  const coverageByDomain = new Map(
    coverageRows.map((row) => [normalizeDomainId(row.domainId), Number(row.docCount ?? 0)]),
  );

  const domainRows = domains.map((domain, index) => {
    const domainId = normalizeDomainId(domain.id);
    const keywords = Array.isArray(domain.keywords) ? domain.keywords : [];
    const docCount = coverageByDomain.get(domainId) ?? 0;
    const healthStatus = classifyHealth(docCount, args.minHealthyDocs);
    const queueRecommendations = preferredQueueRows
      .filter((item) => Array.isArray(item.domainTags) && item.domainTags.map(normalizeDomainId).includes(domainId))
      .filter((item) => !indexedDocIds.has(String(item.queueId ?? "").trim()))
      .sort((a, b) => Number(a.priorityLevel ?? 99) - Number(b.priorityLevel ?? 99))
      .slice(0, args.maxActionsPerDomain)
      .map((item) => ({
        kind: "queue",
        queueId: String(item.queueId ?? ""),
        sourceId: String(item.sourceId ?? ""),
        priority: String(item.priority ?? ""),
        rightsStatus: String(item.rightsStatus ?? "unknown"),
        requiresManualReview: Boolean(item.requiresManualReview ?? true),
        url: String(item.url ?? ""),
      }));
    const fallbackQueueRecommendations = fallbackQueueRows
      .filter((item) => Array.isArray(item.domainTags) && item.domainTags.map(normalizeDomainId).includes(domainId))
      .filter((item) => !indexedDocIds.has(String(item.queueId ?? "").trim()))
      .sort((a, b) => Number(a.priorityLevel ?? 99) - Number(b.priorityLevel ?? 99))
      .slice(0, args.maxActionsPerDomain)
      .map((item) => ({
        kind: "queue",
        queueId: String(item.queueId ?? ""),
        sourceId: String(item.sourceId ?? ""),
        priority: String(item.priority ?? ""),
        rightsStatus: String(item.rightsStatus ?? "unknown"),
        requiresManualReview: Boolean(item.requiresManualReview ?? true),
        url: String(item.url ?? ""),
      }));
    const harvestCandidates = harvestSources.flatMap((source) => {
      const sourceId = String(source?.id ?? "");
      const sourceName = String(source?.name ?? sourceId);
      const sourceUrl = String(source?.url ?? "");
      const rows = Array.isArray(source?.candidateLinkMeta)
        ? source.candidateLinkMeta
        : Array.isArray(source?.candidateLinks)
          ? source.candidateLinks.map((url) => ({ url, anchorText: "", pageTitle: "" }))
          : [];
      return rows
        .map((row) => {
          const url = String(row?.url ?? row ?? "");
          if (!url) return null;
          const anchorText = String(row?.anchorText ?? "");
          const pageTitle = String(row?.pageTitle ?? source?.pageTitle ?? "");
          const haystack = `${url} ${anchorText} ${pageTitle} ${sourceName} ${sourceUrl}`.toLowerCase();
          const score = scoreKeywordMatches(haystack, keywords);
          if (score <= 0) return null;
          const candidateId = `${sourceId}-${hashText(url).slice(0, 8)}`;
          if (indexedDocIds.has(candidateId)) return null;
          return {
            kind: "harvest_candidate",
            candidateId,
            sourceId,
            priority: "candidate",
            rightsStatus: "unknown",
            requiresManualReview: true,
            score,
            url,
          };
        })
        .filter(Boolean);
    });
    const bestHarvestByUrl = new Map();
    for (const candidate of harvestCandidates) {
      const key = String(candidate.url);
      const existing = bestHarvestByUrl.get(key);
      if (!existing || Number(candidate.score ?? 0) > Number(existing.score ?? 0)) {
        bestHarvestByUrl.set(key, candidate);
      }
    }
    const fallbackHarvestRecommendations = [...bestHarvestByUrl.values()]
      .sort((a, b) => Number(b.score ?? 0) - Number(a.score ?? 0))
      .slice(0, args.maxActionsPerDomain);

    const recommendations = queueRecommendations.length > 0
      ? queueRecommendations
      : fallbackQueueRecommendations.length > 0
        ? fallbackQueueRecommendations
        : fallbackHarvestRecommendations;

    return {
      domainId,
      rank: index + 1,
      docCount,
      healthStatus,
      plan: buildActionPlan(healthStatus, recommendations),
    };
  });

  const backlog = domainRows
    .filter((row) => row.healthStatus !== "healthy")
    .sort((a, b) => a.docCount - b.docCount || a.rank - b.rank);

  const report = {
    generatedAt: new Date().toISOString(),
    options: {
      minHealthyDocs: args.minHealthyDocs,
      maxActionsPerDomain: args.maxActionsPerDomain,
      coverageFile: path.relative(projectRoot, args.coverageFile),
      queueFile: path.relative(
        projectRoot,
        preferredQueueRows.length > 0 ? args.queueFile : args.fallbackQueueFile,
      ),
      harvestFile: path.relative(projectRoot, args.harvestFile),
      manifestFile: path.relative(projectRoot, args.manifestFile),
    },
    totals: {
      domains: domainRows.length,
      healthy: domainRows.filter((row) => row.healthStatus === "healthy").length,
      needsGrowth: domainRows.filter((row) => row.healthStatus === "needs_growth").length,
      critical: domainRows.filter((row) => row.healthStatus === "critical").length,
      backlog: backlog.length,
    },
    domains: domainRows,
    backlog,
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

  console.log("Knowledgebase backlog report");
  console.log("");
  console.log(`Domains total: ${report.totals.domains}`);
  console.log(`Healthy: ${report.totals.healthy}`);
  console.log(`Needs growth: ${report.totals.needsGrowth}`);
  console.log(`Critical: ${report.totals.critical}`);
  console.log(`Backlog domains: ${report.totals.backlog}`);
  console.log("");
  console.log(`Report JSON: ${outJson}`);
  console.log(`Report MD: ${outMd}`);

  if (args.failOnBacklog && report.totals.backlog > 0) {
    process.exitCode = 1;
  }
}

main();
