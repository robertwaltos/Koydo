import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const sourcesPath = path.resolve(projectRoot, "src/lib/knowledgebase/source-registry.json");
const sourceRightsPath = path.resolve(projectRoot, "src/lib/knowledgebase/source-rights.json");
const domainCatalogPath = path.resolve(projectRoot, "src/lib/knowledgebase/domain-priority.json");
const sourceLinkFiltersPath = path.resolve(projectRoot, "src/lib/knowledgebase/source-link-filters.json");
const defaultHarvestPath = path.resolve(projectRoot, "public/KNOWLEDGEBASE-HARVEST-REPORT.json");
const defaultOutJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-INGESTION-QUEUE.json");
const defaultOutMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-INGESTION-QUEUE.md");

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
  const positionalText =
    argv.find((value) => !value.startsWith("--") && value.includes(","))
    ?? null;
  const domainsRaw = getArgValue("--domains") ?? positionalText ?? "";
  const selectedDomains = domainsRaw
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  const rightsModeRaw = String(getArgValue("--rights-mode") ?? "approved-or-conditional").toLowerCase();
  const rightsMode = ["off", "approved-only", "approved-or-conditional"].includes(rightsModeRaw)
    ? rightsModeRaw
    : "approved-or-conditional";

  return {
    maxPerSource: Math.max(1, Number(getArgValue("--max-per-source") ?? positionalNumeric ?? 20)),
    category: String(getArgValue("--category") ?? "all").toLowerCase(),
    domains: selectedDomains,
    strictDomains: hasFlag("--strict-domains"),
    allowGeneralCurriculumFallback: !hasFlag("--no-general-curriculum-fallback"),
    allowExternalLinks: hasFlag("--allow-external-links"),
    harvestFile: path.resolve(projectRoot, getArgValue("--harvest-file") ?? defaultHarvestPath),
    rightsFile: path.resolve(projectRoot, getArgValue("--rights-file") ?? sourceRightsPath),
    rightsMode,
    outFile: path.resolve(projectRoot, getArgValue("--out-file") ?? defaultOutJson),
    outMdFile: path.resolve(projectRoot, getArgValue("--out-md-file") ?? defaultOutMd),
    includeYellow: hasFlag("--include-yellow"),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
  };
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function hashText(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = (hash * 16777619) >>> 0;
  }
  return hash.toString(16).padStart(8, "0");
}

function sanitizeId(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function classifyLink(url) {
  const lower = url.toLowerCase();
  if (lower.endsWith(".vtt") || lower.endsWith(".srt")) {
    return "transcript_timed_text";
  }
  if (lower.endsWith(".txt")) {
    return "transcript_text";
  }
  if (lower.endsWith(".pdf")) {
    if (lower.includes("transcript") || lower.includes("subtitle")) {
      return "transcript_pdf";
    }
    return "curriculum_pdf";
  }
  if (lower.includes("transcript") || lower.includes("subtitle") || lower.includes("caption")) {
    return "transcript_html";
  }
  if (lower.includes("curriculum") || lower.includes("syllabus") || lower.includes("course")) {
    return "curriculum_html";
  }
  return "document_html";
}

function normalizeUrlForQueue(url) {
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return url;
  }
}

function decodeUrlLoose(url) {
  try {
    return decodeURIComponent(String(url ?? ""));
  } catch {
    return String(url ?? "");
  }
}

function isLikelyDocumentUrl(url) {
  const lower = url.toLowerCase();
  const blockedExtensions = [
    ".ico",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
    ".css",
    ".js",
    ".mjs",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
    ".map",
    ".zip",
    ".tar",
    ".gz",
    ".mp4",
    ".mp3",
  ];

  if (blockedExtensions.some((extension) => lower.endsWith(extension))) {
    return false;
  }
  if (lower.includes("webarchive.nationalarchives.gov.uk")) {
    return false;
  }
  return true;
}

function loadDomainCatalog() {
  if (!fs.existsSync(domainCatalogPath)) {
    return {
      domains: [],
    };
  }
  return readJson(domainCatalogPath);
}

function loadSourceLinkFilters() {
  if (!fs.existsSync(sourceLinkFiltersPath)) {
    return {};
  }
  return readJson(sourceLinkFiltersPath);
}

function loadSourceRights(filePath) {
  if (!fs.existsSync(filePath)) {
    return new Map();
  }
  const rows = readJson(filePath);
  if (!Array.isArray(rows)) {
    return new Map();
  }
  return new Map(
    rows
      .filter((row) => typeof row?.sourceId === "string" && row.sourceId.trim().length > 0)
      .map((row) => [row.sourceId, row]),
  );
}

function normalizeRightsStatus(value) {
  const normalized = String(value ?? "").toLowerCase().trim();
  if (normalized === "approved" || normalized === "conditional" || normalized === "blocked") {
    return normalized;
  }
  return "missing";
}

function shouldIncludeByRights(sourceId, rightsBySource, rightsMode) {
  if (rightsMode === "off") {
    return {
      include: true,
      status: "not_checked",
      policy: "not_checked",
      requiresManualReview: false,
    };
  }
  const rights = rightsBySource.get(sourceId);
  if (!rights) {
    return {
      include: false,
      status: "missing",
      policy: "unknown",
      requiresManualReview: true,
    };
  }

  const status = normalizeRightsStatus(rights.rightsStatus);
  const policy = String(rights.ingestionPolicy ?? "unknown");
  const requiresManualReview = Boolean(rights.requiresManualReview ?? true);

  if (status === "blocked" || status === "missing") {
    return {
      include: false,
      status,
      policy,
      requiresManualReview,
    };
  }
  if (rightsMode === "approved-only") {
    return {
      include: status === "approved",
      status,
      policy,
      requiresManualReview,
    };
  }
  return {
    include: status === "approved" || status === "conditional",
    status,
    policy,
    requiresManualReview,
  };
}

function matchesKeywordBoundary(text, keyword) {
  const normalizedText = String(text ?? "").toLowerCase();
  const normalizedKeyword = String(keyword ?? "").toLowerCase().trim();
  if (!normalizedKeyword) return false;

  const canonicalText = normalizedText.replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
  const canonicalKeyword = normalizedKeyword.replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
  if (canonicalKeyword && canonicalText.includes(canonicalKeyword)) {
    return true;
  }

  const escaped = normalizedKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (/^[a-z0-9]+$/i.test(normalizedKeyword)) {
    const regex = new RegExp(`\\b${escaped}\\b`, "i");
    return regex.test(normalizedText);
  }
  return normalizedText.includes(normalizedKeyword);
}

function detectDomains(domainCatalog, sourceMeta, linkUrl, linkContextText) {
  const decodedUrl = decodeUrlLoose(linkUrl);
  const candidateText = `${sourceMeta.name ?? ""} ${sourceMeta.notes ?? ""} ${sourceMeta.region ?? ""} ${linkUrl} ${decodedUrl} ${linkContextText ?? ""}`
    .toLowerCase();
  const matches = [];

  for (const domain of domainCatalog.domains ?? []) {
    const keywords = domain.keywords ?? [];
    if (keywords.some((keyword) => matchesKeywordBoundary(candidateText, keyword))) {
      matches.push(String(domain.id).toLowerCase());
    }
  }

  if (matches.length === 0 && sourceMeta.category === "official_curriculum") {
    matches.push("general-curriculum");
  }

  return [...new Set(matches)];
}

function canUseLinkForSource(sourceMeta, candidateUrl, allowExternalLinks) {
  if (allowExternalLinks) return true;
  try {
    const sourceHost = new URL(String(sourceMeta.url)).hostname.replace(/^www\./, "");
    const candidateHost = new URL(String(candidateUrl)).hostname.replace(/^www\./, "");
    return candidateHost === sourceHost || candidateHost.endsWith(`.${sourceHost}`);
  } catch {
    return false;
  }
}

function passesSourceLinkFilters(sourceId, url, sourceLinkFilters) {
  const rules = sourceLinkFilters[sourceId];
  if (!rules) return true;

  const lowerUrl = String(url ?? "").toLowerCase();
  const allowContainsAny = Array.isArray(rules.allowContainsAny) ? rules.allowContainsAny : [];
  const denyContainsAny = Array.isArray(rules.denyContainsAny) ? rules.denyContainsAny : [];

  if (denyContainsAny.some((needle) => lowerUrl.includes(String(needle).toLowerCase()))) {
    return false;
  }
  if (allowContainsAny.length === 0) {
    return true;
  }
  return allowContainsAny.some((needle) => lowerUrl.includes(String(needle).toLowerCase()));
}

function priorityFor(linkType) {
  if (linkType.startsWith("transcript_")) return "high";
  if (linkType.startsWith("curriculum_")) return "medium";
  return "normal";
}

function levelFromPriority(priority) {
  if (priority === "high") return 1;
  if (priority === "medium") return 2;
  return 3;
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
  if (lower.endsWith(".pdf")) score += 6;
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
  lines.push("# Knowledgebase Ingestion Queue");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total queued links: ${report.totals.queued}`);
  lines.push(`- Sources represented: ${report.totals.sources}`);
  lines.push(`- High priority: ${report.totals.priority.high}`);
  lines.push(`- Medium priority: ${report.totals.priority.medium}`);
  lines.push(`- Normal priority: ${report.totals.priority.normal}`);
  lines.push("");
  if ((report.filters.domains ?? []).length > 0) {
    lines.push("## Domain Filter");
    lines.push("");
    lines.push(`- Selected domains: ${(report.filters.domains ?? []).join(", ")}`);
    lines.push(`- Strict mode: ${report.filters.strictDomains ? "yes" : "no"}`);
    lines.push(`- General curriculum fallback: ${report.filters.allowGeneralCurriculumFallback ? "yes" : "no"}`);
    lines.push("");
  }
  lines.push("## Rights Filter");
  lines.push("");
  lines.push(`- Rights mode: ${report.filters.rightsMode}`);
  lines.push(`- Rights file: ${report.filters.rightsFile}`);
  lines.push("");
  lines.push("### Rights Status Counts");
  lines.push("");
  for (const [status, count] of Object.entries(report.totals.byRightsStatus ?? {})) {
    lines.push(`- ${status}: ${count}`);
  }
  lines.push("");
  lines.push("### Quality Tier Counts");
  lines.push("");
  for (const [tier, count] of Object.entries(report.totals.byQualityTier ?? {})) {
    lines.push(`- ${tier}: ${count}`);
  }
  lines.push("");
  lines.push("## Domain Coverage");
  lines.push("");
  for (const [domainId, count] of Object.entries(report.totals.byDomain)) {
    lines.push(`- ${domainId}: ${count}`);
  }
  lines.push("");
  lines.push("## Link Type Counts");
  lines.push("");
  for (const [type, count] of Object.entries(report.totals.byLinkType)) {
    lines.push(`- ${type}: ${count}`);
  }
  lines.push("");
  lines.push("## Queue Items");
  lines.push("");
  lines.push("| Queue ID | Source | Domains | Category | Link Type | Priority | Quality | Rights | Manual Review | URL |");
  lines.push("| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |");
  for (const item of report.queue) {
    lines.push(
      `| ${item.queueId} | ${item.sourceId} | ${(item.domainTags ?? []).join(", ")} | ${item.category} | ${item.linkType} | ${item.priority} | ${item.qualityTier ?? "unknown"} (${item.qualityScore ?? 0}) | ${item.rightsStatus ?? "unknown"} | ${item.requiresManualReview ? "yes" : "no"} | ${item.url} |`,
    );
  }
  return lines.join("\n");
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!fs.existsSync(sourcesPath)) {
    console.error(`Missing source registry: ${sourcesPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(domainCatalogPath)) {
    console.error(`Missing domain catalog: ${domainCatalogPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(sourceLinkFiltersPath)) {
    console.error(`Missing source link filters: ${sourceLinkFiltersPath}`);
    process.exit(1);
  }
  if (args.rightsMode !== "off" && !fs.existsSync(args.rightsFile)) {
    console.error(`Missing source rights file: ${args.rightsFile}`);
    process.exit(1);
  }
  if (!fs.existsSync(args.harvestFile)) {
    console.error(`Missing harvest report: ${args.harvestFile}`);
    console.error("Run: npm run knowledgebase:harvest");
    process.exit(1);
  }

  const sources = readJson(sourcesPath);
  const domainCatalog = loadDomainCatalog();
  const sourceLinkFilters = loadSourceLinkFilters();
  const rightsBySource = loadSourceRights(args.rightsFile);
  const harvest = readJson(args.harvestFile);
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  const allowedTiers = new Set(args.includeYellow ? ["green", "yellow"] : ["green"]);
  const selectedCategory = args.category;
  const selectedDomains = new Set(args.domains);
  const queue = [];
  const seenUrls = new Set();

  for (const sourceResult of harvest.sources ?? []) {
    const sourceMeta = sourceById.get(sourceResult.id);
    if (!sourceMeta) continue;
    if (!sourceMeta.automationAllowed) continue;
    if (!allowedTiers.has(sourceMeta.tier)) continue;
    if (selectedCategory !== "all" && sourceMeta.category !== selectedCategory) continue;

    const rightsDecision = shouldIncludeByRights(sourceMeta.id, rightsBySource, args.rightsMode);
    if (!rightsDecision.include) continue;

    const sourcePageTitle = String(sourceResult.pageTitle ?? "");
    const candidateMetaRows = Array.isArray(sourceResult.candidateLinkMeta)
      ? sourceResult.candidateLinkMeta
      : [];
    const metaByUrl = new Map(
      candidateMetaRows
        .filter((row) => typeof row?.url === "string")
        .map((row) => [normalizeUrlForQueue(row.url), row]),
    );
    const links = (sourceResult.candidateLinks ?? [])
      .map((entry) => {
        if (typeof entry === "string") return normalizeUrlForQueue(entry);
        if (entry && typeof entry.url === "string") return normalizeUrlForQueue(entry.url);
        return "";
      })
      .filter((link) => typeof link === "string" && link.startsWith("http"))
      .slice(0, args.maxPerSource);

    for (const link of links) {
      const normalizedLink = normalizeUrlForQueue(link);
      if (!isLikelyDocumentUrl(normalizedLink)) continue;
      if (!canUseLinkForSource(sourceMeta, normalizedLink, args.allowExternalLinks)) continue;
      if (!passesSourceLinkFilters(sourceMeta.id, normalizedLink, sourceLinkFilters)) continue;
      if (seenUrls.has(normalizedLink)) continue;
      seenUrls.add(normalizedLink);

      const linkMeta = metaByUrl.get(normalizedLink) ?? null;
      const linkContextText = `${linkMeta?.anchorText ?? ""} ${linkMeta?.pageTitle ?? sourcePageTitle}`.trim();
      const domainTags = detectDomains(domainCatalog, sourceMeta, normalizedLink, linkContextText);
      const hasExplicitDomainMatch = domainTags.some((domainId) => selectedDomains.has(domainId));
      const hasGeneralCurriculumFallback =
        args.allowGeneralCurriculumFallback
        && sourceMeta.category === "official_curriculum"
        && domainTags.includes("general-curriculum");
      const hasDomainMatch = hasExplicitDomainMatch || hasGeneralCurriculumFallback;
      if (selectedDomains.size > 0 && args.strictDomains && !hasDomainMatch) {
        continue;
      }

      let linkType = classifyLink(normalizedLink);
      if (
        sourceMeta.category === "free_course_transcripts"
        && (linkType === "document_html" || linkType === "curriculum_html")
      ) {
        linkType = "transcript_html";
      }
      const priority = priorityFor(linkType);
      const queueId = `${sanitizeId(sourceMeta.id)}-${hashText(normalizedLink).slice(0, 10)}`;
      const basePriorityLevel = levelFromPriority(priority);
      const qualityScore = qualityScoreForUrl(normalizedLink);
      const qualityTier = qualityTierFromScore(qualityScore);
      const qualityPenalty = qualityTier === "low" ? 0.5 : qualityTier === "medium" ? 0.2 : 0;
      const priorityLevel =
        selectedDomains.size > 0 && hasDomainMatch
          ? Math.max(0.25, basePriorityLevel - 0.5 + qualityPenalty)
          : basePriorityLevel + qualityPenalty;

      queue.push({
        queueId,
        sourceId: sourceMeta.id,
        sourceName: sourceMeta.name,
        region: sourceMeta.region,
        category: sourceMeta.category,
        tier: sourceMeta.tier,
        automationAllowed: sourceMeta.automationAllowed,
        transcriptFormat: sourceMeta.transcriptFormat ?? "unknown",
        linkType,
        priority,
        qualityScore,
        qualityTier,
        priorityLevel,
        domainMatch: hasDomainMatch,
        domainMatchType: hasExplicitDomainMatch ? "explicit" : hasGeneralCurriculumFallback ? "general_fallback" : "none",
        domainTags,
        contextTitle: linkMeta?.pageTitle ?? sourcePageTitle,
        contextAnchorText: linkMeta?.anchorText ?? "",
        rightsStatus: rightsDecision.status,
        rightsPolicy: rightsDecision.policy,
        requiresManualReview: rightsDecision.requiresManualReview,
        status: "queued",
        url: normalizedLink,
        discoveredFrom: sourceMeta.url,
        createdAt: new Date().toISOString(),
      });
    }
  }

  queue.sort((a, b) => {
    if (a.priorityLevel !== b.priorityLevel) {
      return a.priorityLevel - b.priorityLevel;
    }
    if ((a.qualityScore ?? 0) !== (b.qualityScore ?? 0)) {
      return (b.qualityScore ?? 0) - (a.qualityScore ?? 0);
    }
    return a.sourceId.localeCompare(b.sourceId);
  });

  const byLinkType = {};
  const byDomain = {};
  const byRightsStatus = {};
  const byQualityTier = {};
  const byPriority = {
    high: 0,
    medium: 0,
    normal: 0,
  };
  const sourceSet = new Set();
  for (const item of queue) {
    byLinkType[item.linkType] = (byLinkType[item.linkType] ?? 0) + 1;
    byPriority[item.priority] = (byPriority[item.priority] ?? 0) + 1;
    const rightsStatus = item.rightsStatus ?? "unknown";
    byRightsStatus[rightsStatus] = (byRightsStatus[rightsStatus] ?? 0) + 1;
    const qualityTier = item.qualityTier ?? "unknown";
    byQualityTier[qualityTier] = (byQualityTier[qualityTier] ?? 0) + 1;
    for (const domainId of item.domainTags ?? []) {
      byDomain[domainId] = (byDomain[domainId] ?? 0) + 1;
    }
    sourceSet.add(item.sourceId);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    filters: {
      maxPerSource: args.maxPerSource,
      category: args.category,
      domains: args.domains,
      strictDomains: args.strictDomains,
      allowGeneralCurriculumFallback: args.allowGeneralCurriculumFallback,
      allowExternalLinks: args.allowExternalLinks,
      rightsMode: args.rightsMode,
      rightsFile: path.relative(projectRoot, args.rightsFile),
      harvestFile: path.relative(projectRoot, args.harvestFile),
      includeYellow: args.includeYellow,
    },
    totals: {
      queued: queue.length,
      sources: sourceSet.size,
      priority: byPriority,
      byLinkType,
      byRightsStatus,
      byQualityTier,
      byDomain,
    },
    queue,
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

  console.log("Knowledgebase ingestion queue");
  console.log("");
  console.log(`Queued links: ${report.totals.queued}`);
  console.log(`Sources represented: ${report.totals.sources}`);
  console.log(`High priority: ${report.totals.priority.high}`);
  console.log(`Medium priority: ${report.totals.priority.medium}`);
  console.log(`Normal priority: ${report.totals.priority.normal}`);
  console.log(`Quality tiers: high=${report.totals.byQualityTier.high ?? 0}, medium=${report.totals.byQualityTier.medium ?? 0}, low=${report.totals.byQualityTier.low ?? 0}`);
  console.log(`Rights mode: ${args.rightsMode}`);
  if (args.domains.length > 0) {
    console.log(`Domains: ${args.domains.join(", ")}`);
    console.log(`Strict domains: ${args.strictDomains ? "yes" : "no"}`);
  }
  console.log("");
  console.log(`Harvest JSON: ${args.harvestFile}`);
  console.log(`Report JSON: ${args.outFile}`);
  console.log(`Report MD: ${args.outMdFile}`);
}

main();
