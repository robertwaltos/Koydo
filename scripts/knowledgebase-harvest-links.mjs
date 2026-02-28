import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const sourcesPath = path.resolve(projectRoot, "src/lib/knowledgebase/source-registry.json");
const outJson = path.resolve(projectRoot, "public/KNOWLEDGEBASE-HARVEST-REPORT.json");
const outMd = path.resolve(projectRoot, "public/KNOWLEDGEBASE-HARVEST-REPORT.md");

function parseArgs(argv) {
  const hasFlag = (flag) => {
    const plain = flag.replace(/^--/, "");
    return argv.includes(flag) || argv.includes(plain);
  };
  const getArgValue = (flag) => {
    const plain = flag.replace(/^--/, "");
    const index = argv.indexOf(flag);
    const plainIndex = argv.indexOf(plain);
    if (index !== -1) return argv[index + 1] ?? null;
    if (plainIndex !== -1) return argv[plainIndex + 1] ?? null;
    return null;
  };
  const positional = argv.find((value) => !value.startsWith("--") && !Number.isNaN(Number(value))) ?? null;

  return {
    limit: Math.max(1, Number(getArgValue("--limit") ?? positional ?? 10)),
    timeoutMs: Math.max(1000, Number(getArgValue("--timeout-ms") ?? 20000)),
    writeReport: hasFlag("--write-report") || !hasFlag("--no-write-report"),
    json: hasFlag("--json"),
  };
}

function loadSources() {
  const raw = fs.readFileSync(sourcesPath, "utf8");
  return JSON.parse(raw);
}

function unique(items) {
  return [...new Set(items)];
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

function extractCandidateLinks(html, baseUrl) {
  const anchorMatches = [
    ...html.matchAll(/<a\b[^>]*href\s*=\s*"([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi),
    ...html.matchAll(/<a\b[^>]*href\s*=\s*'([^']+)'[^>]*>([\s\S]*?)<\/a>/gi),
  ];
  const pageTitle = extractPageTitle(html);
  const resolvedRows = [];
  for (const match of anchorMatches) {
    const rawHref = match[1];
    const rawAnchorHtml = match[2] ?? "";
    const anchorText = stripHtml(rawAnchorHtml).slice(0, 240);
    if (!rawHref) continue;
    try {
      const url = new URL(rawHref, baseUrl);
      resolvedRows.push({
        url: normalizeUrl(url.toString()),
        anchorText,
        pageTitle,
      });
    } catch {
      // Ignore invalid URLs.
    }
  }

  const keywords = [
    "transcript",
    "subtitle",
    "syllabus",
    "curriculum",
    "course",
    "lecture",
    "vtt",
    "srt",
  ];

  const dedup = new Map();
  for (const row of resolvedRows) {
    const key = row.url;
    const haystack = `${row.url} ${row.anchorText}`.toLowerCase();
    const isCandidate = keywords.some((keyword) => haystack.includes(keyword));
    if (!isCandidate) continue;
    const existing = dedup.get(key);
    if (!existing || row.anchorText.length > existing.anchorText.length) {
      dedup.set(key, row);
    }
  }

  const candidateRows = [...dedup.values()].slice(0, 50);
  return {
    candidateLinks: unique(candidateRows.map((row) => row.url)),
    candidateLinkMeta: candidateRows,
    pageTitle,
  };
}

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      headers: {
        "User-Agent": "Koydo-Knowledgebase-Harvest/1.0",
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
  lines.push("# Knowledgebase Harvest Report");
  lines.push("");
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- Sources attempted: ${report.totals.attempted}`);
  lines.push(`- Sources succeeded: ${report.totals.succeeded}`);
  lines.push(`- Sources failed: ${report.totals.failed}`);
  lines.push(`- Candidate links found: ${report.totals.candidateLinks}`);
  lines.push(`- Candidate links with metadata: ${report.totals.candidateLinkMeta}`);
  lines.push("");
  lines.push("## Source Results");
  lines.push("");
  for (const source of report.sources) {
    lines.push(`### ${source.id}`);
    lines.push("");
    lines.push(`- URL: ${source.url}`);
    lines.push(`- HTTP: ${source.status}`);
    lines.push(`- Success: ${source.success ? "yes" : "no"}`);
    if (source.error) {
      lines.push(`- Error: ${source.error}`);
    }
    if (source.pageTitle) {
      lines.push(`- Page title: ${source.pageTitle}`);
    }
    lines.push(`- Candidate links: ${source.candidateLinks.length}`);
    if ((source.candidateLinkMeta ?? []).length > 0) {
      for (const row of source.candidateLinkMeta.slice(0, 10)) {
        const label = row.anchorText ? ` (${row.anchorText})` : "";
        lines.push(`  - ${row.url}${label}`);
      }
    }
    lines.push("");
  }
  return lines.join("\n");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const sources = loadSources()
    .filter((source) => source.automationAllowed)
    .slice(0, args.limit);

  const results = [];
  for (const source of sources) {
    const fetched = await fetchWithTimeout(source.url, args.timeoutMs);
    const extracted = fetched.ok
      ? extractCandidateLinks(fetched.text, source.url)
      : { candidateLinks: [], candidateLinkMeta: [], pageTitle: "" };
    results.push({
      id: source.id,
      url: source.url,
      status: fetched.status,
      success: fetched.ok,
      error: fetched.error,
      pageTitle: extracted.pageTitle,
      candidateLinks: extracted.candidateLinks,
      candidateLinkMeta: extracted.candidateLinkMeta,
    });
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      attempted: results.length,
      succeeded: results.filter((row) => row.success).length,
      failed: results.filter((row) => !row.success).length,
      candidateLinks: results.reduce((sum, row) => sum + row.candidateLinks.length, 0),
      candidateLinkMeta: results.reduce((sum, row) => sum + (row.candidateLinkMeta?.length ?? 0), 0),
    },
    sources: results,
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

  console.log("Knowledgebase harvest links");
  console.log("");
  console.log(`Attempted: ${report.totals.attempted}`);
  console.log(`Succeeded: ${report.totals.succeeded}`);
  console.log(`Failed: ${report.totals.failed}`);
  console.log(`Candidate links: ${report.totals.candidateLinks}`);
  console.log("");
  console.log(`Report JSON: ${outJson}`);
  console.log(`Report MD: ${outMd}`);
}

void main();
