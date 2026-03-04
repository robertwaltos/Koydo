import { createHash } from "crypto";
import { serverEnv } from "@/lib/config/env";

export type RegulatoryFeed = {
  sourceName: string;
  sourceUrl: string;
  updateType: "sanctions_update" | "tax_filing_change" | "regulatory_notice";
  jurisdiction: string;
};

const DEFAULT_FEEDS: RegulatoryFeed[] = [
  {
    sourceName: "OFAC Recent Actions",
    sourceUrl: "https://ofac.treasury.gov/recent-actions",
    updateType: "sanctions_update",
    jurisdiction: "US",
  },
  {
    sourceName: "IRS Forms and Instructions",
    sourceUrl: "https://www.irs.gov/forms-instructions",
    updateType: "tax_filing_change",
    jurisdiction: "US",
  },
  {
    sourceName: "IRS e-file News",
    sourceUrl: "https://www.irs.gov/e-file-providers",
    updateType: "tax_filing_change",
    jurisdiction: "US",
  },
];

type ParsedUpdate = {
  title: string;
  summary: string;
  updateDate: string | null;
  effectiveDate: string | null;
  actionRequired: boolean;
  actionSeverity: "info" | "warning" | "critical";
  actionNotes: string | null;
};

function normalizeText(input: string) {
  return input.replace(/\s+/g, " ").trim();
}

function parseDateCandidate(text: string) {
  const match = text.match(/\b(20\d{2})[-/](\d{1,2})[-/](\d{1,2})\b/);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!Number.isFinite(year) || !Number.isFinite(month) || !Number.isFinite(day)) return null;
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function hashUpdate(sourceName: string, title: string, summary: string) {
  return createHash("sha256")
    .update(`${sourceName}:${title}:${summary}`)
    .digest("hex");
}

function parseFeedConfig(): RegulatoryFeed[] {
  const configured = (serverEnv.REGULATORY_UPDATE_FEEDS ?? "").trim();
  if (!configured) return DEFAULT_FEEDS;
  try {
    const parsed = JSON.parse(configured) as RegulatoryFeed[];
    if (!Array.isArray(parsed) || parsed.length === 0) return DEFAULT_FEEDS;
    return parsed.filter((entry) => Boolean(entry.sourceName && entry.sourceUrl));
  } catch {
    return DEFAULT_FEEDS;
  }
}

function parseHtmlSignals(sourceName: string, html: string): ParsedUpdate[] {
  const lines = html
    .split(/[\r\n]+/)
    .map((line) => normalizeText(line.replace(/<[^>]+>/g, " ")))
    .filter((line) => line.length > 20)
    .slice(0, 300);

  const updates: ParsedUpdate[] = [];
  for (const line of lines) {
    const lower = line.toLowerCase();
    if (!(lower.includes("sanction") || lower.includes("irs") || lower.includes("form 1042") || lower.includes("form 1099") || lower.includes("withholding") || lower.includes("report"))) {
      continue;
    }
    const updateDate = parseDateCandidate(line);
    const actionRequired = lower.includes("effective") || lower.includes("must") || lower.includes("required") || lower.includes("deadline");
    const actionSeverity: "info" | "warning" | "critical" =
      lower.includes("blocked") || lower.includes("prohibit")
        ? "critical"
        : actionRequired
          ? "warning"
          : "info";
    updates.push({
      title: normalizeText(`${sourceName}: ${line.slice(0, 180)}`),
      summary: line.slice(0, 500),
      updateDate,
      effectiveDate: updateDate,
      actionRequired,
      actionSeverity,
      actionNotes: actionRequired ? "Review and validate operational impact." : null,
    });
    if (updates.length >= 8) break;
  }
  return updates;
}

export async function collectRegulatoryUpdates() {
  const feeds = parseFeedConfig();
  const updates: Array<ParsedUpdate & { sourceName: string; sourceUrl: string; updateType: RegulatoryFeed["updateType"]; jurisdiction: string; updateHash: string }> = [];

  for (const feed of feeds) {
    const response = await fetch(feed.sourceUrl, {
      method: "GET",
      headers: { "User-Agent": "Koydo-ComplianceBot/1.0 (+https://koydo.app)" },
      cache: "no-store",
    }).catch(() => null);
    if (!response || !response.ok) {
      updates.push({
        sourceName: feed.sourceName,
        sourceUrl: feed.sourceUrl,
        updateType: feed.updateType,
        jurisdiction: feed.jurisdiction,
        title: `${feed.sourceName}: fetch failed`,
        summary: `Could not fetch regulatory feed. HTTP status ${response?.status ?? "none"}.`,
        updateDate: new Date().toISOString().slice(0, 10),
        effectiveDate: null,
        actionRequired: true,
        actionSeverity: "warning",
        actionNotes: "Manual review required: feed retrieval failed.",
        updateHash: hashUpdate(feed.sourceName, `${feed.sourceName}: fetch failed`, String(response?.status ?? "none")),
      });
      continue;
    }

    const html = await response.text();
    const parsed = parseHtmlSignals(feed.sourceName, html);
    for (const item of parsed) {
      updates.push({
        ...item,
        sourceName: feed.sourceName,
        sourceUrl: feed.sourceUrl,
        updateType: feed.updateType,
        jurisdiction: feed.jurisdiction,
        updateHash: hashUpdate(feed.sourceName, item.title, item.summary),
      });
    }
  }

  return updates;
}
