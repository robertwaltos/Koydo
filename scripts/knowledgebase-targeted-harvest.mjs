import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const sourcesPath = path.resolve(projectRoot, "src/lib/knowledgebase/source-registry.json");
const domainCatalogPath = path.resolve(projectRoot, "src/lib/knowledgebase/domain-priority.json");
const targetedSeedsPath = path.resolve(projectRoot, "src/lib/knowledgebase/targeted-seeds.json");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-HARVEST-TARGETED-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-HARVEST-TARGETED-REPORT.md");

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
    domains,
    timeoutMs: Math.max(1000, Number(getArgValue("--timeout-ms") ?? 20000)),
    maxLinksPerSeed: Math.max(5, Number(getArgValue("--max-links-per-seed") ?? 50)),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
  };
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw);
}

function normalizeUrl(url) {
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return url;
  }
}

function stripHtml(input) {
  return String(input ?? "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function extractPageTitle(html) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) return "";
  return stripHtml(match[1]);
}

function extractAnchorRows(html, baseUrl) {
  const anchorMatches = [
    ...html.matchAll(/<a\b[^>]*href\s*=\s*"([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi),
    ...html.matchAll(/<a\b[^>]*href\s*=\s*'([^']+)'[^>]*>([\s\S]*?)<\/a>/gi),
  ];

  const pageTitle = extractPageTitle(html);
  const rows = [];
  for (const match of anchorMatches) {
    const rawHref = match[1];
    const rawAnchorHtml = match[2] ?? "";
    if (!rawHref) continue;
    try {
      const resolved = new URL(rawHref, baseUrl);
      rows.push({
        url: normalizeUrl(resolved.toString()),
        anchorText: stripHtml(rawAnchorHtml).slice(0, 240),
        pageTitle,
      });
    } catch {
      // Ignore invalid URL.
    }
  }
  return rows;
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

function sameHostOrSubdomain(sourceUrl, candidateUrl) {
  try {
    const sourceHost = new URL(sourceUrl).hostname.replace(/^www\./, "");
    const candidateHost = new URL(candidateUrl).hostname.replace(/^www\./, "");
    return candidateHost === sourceHost || candidateHost.endsWith(`.${sourceHost}`);
  } catch {
    return false;
  }
}

function matchesDomainOrLearningKeywords(row, domainKeywords) {
  const learningKeywords = [
    "transcript",
    "subtitle",
    "caption",
    "curriculum",
    "syllabus",
    "course",
    "lecture",
    "module",
  ];
  const decodedUrl = decodeUrlLoose(row.url);
  const haystack = `${row.url} ${decodedUrl} ${row.anchorText}`.toLowerCase();
  const domainMatch = domainKeywords.some((keyword) => haystack.includes(String(keyword).toLowerCase()));
  const learningMatch = learningKeywords.some((keyword) => haystack.includes(keyword));
  return domainMatch || learningMatch;
}

function decodeUrlLoose(url) {
  try {
    return decodeURIComponent(String(url ?? ""));
  } catch {
    return String(url ?? "");
  }
}

function addCandidateRow(aggregate, row, domainId) {
  const existing = aggregate.candidateLinkMeta.find((entry) => entry.url === row.url);
  if (existing) {
    if (!existing.domainHints.includes(domainId)) {
      existing.domainHints.push(domainId);
    }
    if ((row.anchorText ?? "").length > (existing.anchorText ?? "").length) {
      existing.anchorText = row.anchorText;
    }
    if (!existing.seedUrl && row.seedUrl) {
      existing.seedUrl = row.seedUrl;
    }
    return;
  }

  aggregate.candidateLinkMeta.push({
    url: row.url,
    anchorText: row.anchorText ?? "",
    pageTitle: row.pageTitle ?? "",
    seedUrl: row.seedUrl ?? "",
    domainHints: [domainId],
  });
}

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      headers: {
        "User-Agent": "Koydo-Knowledgebase-Targeted-Harvest/1.0",
      },
    });
    const text = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      text,
      error: null,
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      text: "",
      error: error instanceof Error ? error.message : "Unknown fetch error",
    };
  } finally {
    clearTimeout(timer);
  }
}

function toMarkdown(report) {
  const lines = [];
  lines.push("# Knowledgebase Targeted Harvest Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Domains targeted: ${(report.domains ?? []).join(", ") || "none"}`);
  lines.push(`- Seed pages attempted: ${report.totals.seedAttempted}`);
  lines.push(`- Seed pages succeeded: ${report.totals.seedSucceeded}`);
  lines.push(`- Seed pages failed: ${report.totals.seedFailed}`);
  lines.push(`- Candidate links found: ${report.totals.candidateLinks}`);
  lines.push("");
  lines.push("## Source Results");
  lines.push("");
  for (const source of report.sources) {
    lines.push(`### ${source.id}`);
    lines.push("");
    lines.push(`- Source URL: ${source.url}`);
    lines.push(`- Seed attempts: ${source.seedStats.attempted}`);
    lines.push(`- Seed succeeded: ${source.seedStats.succeeded}`);
    lines.push(`- Candidate links: ${source.candidateLinks.length}`);
    lines.push(`- Domain hints: ${source.domainHints.join(", ") || "none"}`);
    if (source.seedStats.failures.length > 0) {
      lines.push("- Failures:");
      for (const failure of source.seedStats.failures.slice(0, 6)) {
        lines.push(`  - ${failure.seedUrl} (${failure.error || `HTTP ${failure.status}`})`);
      }
    }
    lines.push("");
  }
  return lines.join("\n");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(sourcesPath) || !fs.existsSync(domainCatalogPath) || !fs.existsSync(targetedSeedsPath)) {
    console.error("Missing required knowledgebase config files.");
    process.exit(1);
  }

  const sourceRegistry = readJson(sourcesPath);
  const sourceById = new Map(sourceRegistry.map((source) => [source.id, source]));
  const domainCatalog = readJson(domainCatalogPath);
  const domainById = new Map(
    (domainCatalog.domains ?? []).map((domain) => [String(domain.id).toLowerCase(), domain]),
  );
  const targetedSeeds = readJson(targetedSeedsPath);
  const seedDomains = targetedSeeds.domains ?? {};
  const selectedDomains = args.domains.length > 0
    ? args.domains.filter((domainId) => domainById.has(domainId) && seedDomains[domainId])
    : Object.keys(seedDomains);

  const seedQueue = [];
  for (const domainId of selectedDomains) {
    const seedConfig = seedDomains[domainId];
    const seedSources = Array.isArray(seedConfig?.sources)
      ? seedConfig.sources
      : [{ sourceId: seedConfig?.sourceId, seedUrls: seedConfig?.seedUrls }];

    for (const sourceConfig of seedSources) {
      const sourceId = sourceConfig?.sourceId;
      const seedUrls = Array.isArray(sourceConfig?.seedUrls) ? sourceConfig.seedUrls : [];
      if (!sourceId || seedUrls.length === 0 || !sourceById.has(sourceId)) continue;

      for (const seedUrl of seedUrls) {
        seedQueue.push({
          domainId,
          sourceId,
          seedUrl: normalizeUrl(seedUrl),
        });
      }
    }
  }

  const aggregates = new Map();
  let seedSucceeded = 0;
  let seedFailed = 0;

  for (const seed of seedQueue) {
    const sourceMeta = sourceById.get(seed.sourceId);
    if (!sourceMeta) continue;

    const domainMeta = domainById.get(seed.domainId);
    const domainKeywords = Array.isArray(domainMeta?.keywords) ? domainMeta.keywords : [];
    const fetched = await fetchWithTimeout(seed.seedUrl, args.timeoutMs);

    const aggregate = aggregates.get(seed.sourceId) ?? {
      id: seed.sourceId,
      url: sourceMeta.url,
      status: 0,
      success: false,
      error: null,
      pageTitle: "",
      candidateLinks: [],
      candidateLinkMeta: [],
      domainHints: [],
      seedStats: {
        attempted: 0,
        succeeded: 0,
        failures: [],
      },
    };
    aggregate.seedStats.attempted += 1;

    if (!fetched.ok) {
      seedFailed += 1;
      aggregate.seedStats.failures.push({
        seedUrl: seed.seedUrl,
        status: fetched.status,
        error: fetched.error,
      });
      aggregates.set(seed.sourceId, aggregate);
      continue;
    }

    seedSucceeded += 1;
    aggregate.success = true;
    aggregate.status = 200;
    aggregate.seedStats.succeeded += 1;

    const anchorRows = extractAnchorRows(fetched.text, seed.seedUrl);
    const seedSelfRow = {
      url: normalizeUrl(seed.seedUrl),
      anchorText: "seed-url",
      pageTitle: extractPageTitle(fetched.text),
      seedUrl: seed.seedUrl,
    };
    const rows = [seedSelfRow, ...anchorRows];
    for (const row of rows.slice(0, args.maxLinksPerSeed + 1)) {
      if (!sameHostOrSubdomain(sourceMeta.url, row.url)) continue;
      if (!isLikelyDocumentUrl(row.url)) continue;
      if (!matchesDomainOrLearningKeywords(row, domainKeywords)) continue;
      addCandidateRow(aggregate, row, seed.domainId);
    }

    aggregate.pageTitle = aggregate.pageTitle || extractPageTitle(fetched.text);
    aggregates.set(seed.sourceId, aggregate);
  }

  const sources = [...aggregates.values()].map((source) => {
    source.candidateLinks = source.candidateLinkMeta.map((row) => row.url);
    const domainHintSet = new Set();
    for (const row of source.candidateLinkMeta) {
      for (const domainId of row.domainHints ?? []) {
        domainHintSet.add(domainId);
      }
    }
    source.domainHints = [...domainHintSet].sort();
    return source;
  });

  const report = {
    generatedAt: new Date().toISOString(),
    domains: selectedDomains,
    totals: {
      seedAttempted: seedQueue.length,
      seedSucceeded,
      seedFailed,
      candidateLinks: sources.reduce((sum, source) => sum + source.candidateLinks.length, 0),
      candidateLinkMeta: sources.reduce((sum, source) => sum + source.candidateLinkMeta.length, 0),
    },
    sources,
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

  console.log("Knowledgebase targeted harvest");
  console.log("");
  console.log(`Domains: ${selectedDomains.join(", ") || "none"}`);
  console.log(`Seed attempted: ${report.totals.seedAttempted}`);
  console.log(`Seed succeeded: ${report.totals.seedSucceeded}`);
  console.log(`Seed failed: ${report.totals.seedFailed}`);
  console.log(`Candidate links: ${report.totals.candidateLinks}`);
  console.log("");
  console.log(`Report JSON: ${outJson}`);
  console.log(`Report MD: ${outMd}`);
}

void main();
