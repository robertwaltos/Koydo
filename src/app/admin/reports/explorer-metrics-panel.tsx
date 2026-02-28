"use client";

import Image from "next/image";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SoftCard from "@/app/components/ui/soft-card";

type ExplorerFunnel = {
  lobbyViews: number;
  worldSelections: number;
  topicViews: number;
  moduleViews: number;
  questionSelections: number;
  portalSelections: number;
  moduleSelections: number;
  moduleLessonSelections: number;
  moduleRecommendedSelections: number;
  moduleRecommendationImpressions: number;
  topicViewRateFromLobby: number | null;
  questionSelectionRateFromWorldSelect: number | null;
  moduleViewRateFromTopicView: number | null;
  moduleLessonSelectionRateFromModuleView: number | null;
  moduleRecommendedSelectionRateFromModuleView: number | null;
  moduleRecommendationImpressionRateFromModuleView: number | null;
  moduleRecommendedSelectionRateFromRecommendationImpression: number | null;
  missionPrepSheetSelections: number;
  missionPrepOpens: number;
  missionPrepPrints: number;
  missionPrepSheetSelectionRateFromTopicView: number | null;
  missionPrepOpenRateFromSheetSelection: number | null;
  missionPrepPrintRateFromOpen: number | null;
  missionPrepPrintRateFromSheetSelection: number | null;
};

type ExplorerActionRow = {
  action: string;
  count: number;
};

type ExplorerTopicRow = {
  topicId: string;
  count: number;
};

type ExplorerModuleRow = {
  moduleId: string;
  count: number;
};

type ExplorerSuggestionTypeRow = {
  suggestionType: string;
  label: string;
  icon: string;
  count: number;
  selectionCount: number;
  viewCount: number;
  impressionCount: number;
  selectionRateFromTypeViews: number | null;
  selectionRateFromModuleViews: number | null;
};

type ExplorerRecentEvent = {
  eventAt: string;
  eventType: string;
  lessonId: string;
  action: string | null;
  topicId: string | null;
  moduleId: string | null;
  destination: string | null;
};

type RecommendationTrendPoint = {
  date: string;
  moduleViews: number;
  recommendationImpressions: number;
  recommendationSelections: number;
  recommendationImpressionRateFromModuleView: number | null;
  recommendationSelectionRateFromImpression: number | null;
};

type RecommendationTrendBySuggestionTypeRow = {
  date: string;
  suggestionType: string;
  label: string;
  icon: string;
  recommendationImpressions: number;
  recommendationSelections: number;
  recommendationSelectionRateFromImpression: number | null;
};

type RecommendationByTopicRow = {
  topicId: string;
  moduleViews: number;
  recommendationImpressions: number;
  recommendationSelections: number;
  recommendationImpressionRateFromModuleView: number | null;
  recommendationSelectionRateFromImpression: number | null;
  topSuggestionType: string | null;
  topSuggestionLabel: string | null;
  topSuggestionIcon: string | null;
};

type MissionPrepByTopicRow = {
  topicId: string;
  sheetSelections: number;
  opens: number;
  prints: number;
  openRateFromSelection: number | null;
  printRateFromOpen: number | null;
  printRateFromSelection: number | null;
};

type MissionPrepTrendPoint = {
  date: string;
  sheetSelections: number;
  opens: number;
  prints: number;
  openRateFromSelection: number | null;
  printRateFromOpen: number | null;
  printRateFromSelection: number | null;
};

type MissionPrepTrendByTopicRow = {
  date: string;
  topicId: string;
  sheetSelections: number;
  opens: number;
  prints: number;
  openRateFromSelection: number | null;
  printRateFromOpen: number | null;
  printRateFromSelection: number | null;
};

type MissionPrepTopicMetric = "sheetSelections" | "opens" | "prints";

type MissionPrepTopicTrendSummary = {
  topicId: string;
  metricTotal: number;
  totalSheetSelections: number;
  totalOpens: number;
  totalPrints: number;
  openRateFromSelection: number | null;
  printRateFromSelection: number | null;
  printRateFromOpen: number | null;
  points: SparklinePoint[];
};

type MissionPrepPerformanceThresholds = {
  minSheetSample: number;
  minOpenRateFromSelection: number;
  minPrintRateFromOpen: number;
};

type SparklinePoint = {
  date: string;
  value: number;
};

type SparklineDelta = {
  latestDate: string;
  latestValue: number;
  previousDate: string | null;
  previousValue: number | null;
  deltaValue: number | null;
  deltaRate: number | null;
};

type SuggestionTypeTrendSnapshot = {
  latestDate: string;
  latestImpressions: number;
  latestSelections: number;
  previousDate: string | null;
  previousImpressions: number | null;
  previousSelections: number | null;
  impressionDelta: number | null;
  impressionDeltaRate: number | null;
  selectionDelta: number | null;
  selectionDeltaRate: number | null;
};

type ExplorerAvailableTopicMeta = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  badge: string | null;
};

type ExplorerSummaryResponse = {
  days: number;
  topicFilter: string | null;
  availableTopics: string[];
  availableTopicMeta: ExplorerAvailableTopicMeta[];
  cutoffIso: string;
  totalEvents: number;
  uniqueUsers: number;
  funnel: ExplorerFunnel;
  byAction: ExplorerActionRow[];
  byTopic: ExplorerTopicRow[];
  byModule: ExplorerModuleRow[];
  bySuggestionType: ExplorerSuggestionTypeRow[];
  recommendationByTopic: RecommendationByTopicRow[];
  missionPrepByTopic: MissionPrepByTopicRow[];
  missionPrepTrend: MissionPrepTrendPoint[];
  missionPrepTrendByTopic: MissionPrepTrendByTopicRow[];
  recommendationTrend: RecommendationTrendPoint[];
  recommendationTrendBySuggestionType: RecommendationTrendBySuggestionTypeRow[];
  recentEvents: ExplorerRecentEvent[];
  error?: string;
};

const DAY_OPTIONS = [7, 14, 30, 60, 90];
const DEFAULT_DAYS = 30;

function parseDaysParam(value: string | null) {
  if (!value) return DEFAULT_DAYS;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return DEFAULT_DAYS;
  const normalized = Math.trunc(parsed);
  return DAY_OPTIONS.includes(normalized) ? normalized : DEFAULT_DAYS;
}

function parseTopicParam(value: string | null) {
  if (!value) return "";
  return value.trim().toLowerCase();
}

function getCanonicalTopicIds(input: {
  availableTopics?: string[] | null;
  availableTopicMeta?: ExplorerAvailableTopicMeta[] | null;
}) {
  const fromMeta = (input.availableTopicMeta ?? [])
    .map((topic) => ({
      id: parseTopicParam(topic.id),
      title: topic.title.trim(),
    }))
    .filter((topic): topic is { id: string; title: string } => topic.id.length > 0)
    .sort((left, right) => {
      const leftLabel = left.title || left.id;
      const rightLabel = right.title || right.id;
      return leftLabel.localeCompare(rightLabel) || left.id.localeCompare(right.id);
    })
    .map((topic) => topic.id);
  if (fromMeta.length > 0) return fromMeta;

  const fromIds = (input.availableTopics ?? [])
    .map((topicId) => parseTopicParam(topicId))
    .filter((topicId): topicId is string => topicId.length > 0)
    .sort((left, right) => left.localeCompare(right));
  return Array.from(new Set(fromIds));
}

function getTopicLabelMap(topicMeta: ExplorerAvailableTopicMeta[] | undefined) {
  const labels = new Map<string, string>();
  for (const topic of topicMeta ?? []) {
    const id = parseTopicParam(topic.id);
    if (!id) continue;
    labels.set(id, topic.title.trim() || id);
  }
  return labels;
}

function getTopicBadgeMap(topicMeta: ExplorerAvailableTopicMeta[] | undefined) {
  const badges = new Map<string, string>();
  for (const topic of topicMeta ?? []) {
    const id = parseTopicParam(topic.id);
    if (!id) continue;
    if (topic.badge && topic.badge.trim().length > 0) {
      badges.set(id, topic.badge.trim());
    }
  }
  return badges;
}

function getTopicMetaMap(topicMeta: ExplorerAvailableTopicMeta[] | undefined) {
  const metaByTopicId = new Map<string, ExplorerAvailableTopicMeta>();
  for (const topic of topicMeta ?? []) {
    const id = parseTopicParam(topic.id);
    if (!id) continue;
    metaByTopicId.set(id, topic);
  }
  return metaByTopicId;
}

function getTopicDisplayData(
  topicId: string,
  labels: Map<string, string>,
  badges: Map<string, string>,
  topicMetaById: Map<string, ExplorerAvailableTopicMeta>,
) {
  const normalizedTopicId = parseTopicParam(topicId);
  if (!normalizedTopicId) {
    return {
      text: topicId,
      badge: null,
      imageSrc: null,
      imageAlt: null,
    };
  }
  const label = labels.get(normalizedTopicId);
  const text =
    !label || label.toLowerCase() === normalizedTopicId
      ? normalizedTopicId
      : `${label} (${normalizedTopicId})`;
  const meta = topicMetaById.get(normalizedTopicId);
  return {
    text,
    badge: badges.get(normalizedTopicId) ?? null,
    imageSrc: meta?.imageSrc ?? null,
    imageAlt: meta?.imageAlt ?? null,
  };
}

function formatTopicDisplay(
  topicId: string,
  labels: Map<string, string>,
  badges: Map<string, string>,
) {
  const normalizedTopicId = parseTopicParam(topicId);
  if (!normalizedTopicId) return topicId;
  const label = labels.get(normalizedTopicId);
  const displayLabel =
    !label || label.toLowerCase() === normalizedTopicId
      ? normalizedTopicId
      : `${label} (${normalizedTopicId})`;
  const badge = badges.get(normalizedTopicId);
  return badge ? `${badge} ${displayLabel}` : displayLabel;
}

function formatRate(value: number | null) {
  if (value === null) return "n/a";
  return `${Math.round(value * 100)}%`;
}

function formatTrendDate(date: string) {
  const parsed = new Date(`${date}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

function buildTrendSparklinePoints(input: {
  rows: RecommendationTrendPoint[] | undefined;
  metric: "moduleViews" | "recommendationImpressions" | "recommendationSelections";
}) {
  const { rows, metric } = input;
  return (rows ?? []).map((row) => ({
    date: row.date,
    value: row[metric],
  }));
}

function buildTypeTrendSparklinePoints(input: {
  rows: RecommendationTrendBySuggestionTypeRow[] | undefined;
  metric: "recommendationImpressions" | "recommendationSelections";
}) {
  const byDay = new Map<string, number>();
  for (const row of input.rows ?? []) {
    byDay.set(row.date, (byDay.get(row.date) ?? 0) + row[input.metric]);
  }
  return Array.from(byDay.entries())
    .sort((left, right) => left[0].localeCompare(right[0]))
    .map(([date, value]) => ({ date, value }));
}

function buildMissionPrepTrendSparklinePoints(input: {
  rows: MissionPrepTrendPoint[] | undefined;
  metric: "sheetSelections" | "opens" | "prints";
}) {
  const { rows, metric } = input;
  return (rows ?? []).map((row) => ({
    date: row.date,
    value: row[metric],
  }));
}

function MiniSparkline(input: {
  points: SparklinePoint[];
  barClassName: string;
  emptyLabel: string;
}) {
  const { points, barClassName, emptyLabel } = input;
  if (points.length === 0) {
    return <p className="text-[11px] text-zinc-500">{emptyLabel}</p>;
  }
  const maxValue = Math.max(1, ...points.map((point) => point.value));
  return (
    <div className="flex h-10 items-end gap-1" role="img" aria-label={emptyLabel}>
      {points.map((point) => {
        const percent = Math.round((point.value / maxValue) * 100);
        const heightPercent = Math.max(8, percent);
        return (
          <span
            key={point.date}
            title={`${formatTrendDate(point.date)}: ${point.value}`}
            className={`w-1.5 rounded-t ${barClassName}`}
            style={{ height: `${heightPercent}%` }}
          />
        );
      })}
    </div>
  );
}

function getSparklineDelta(points: SparklinePoint[]): SparklineDelta | null {
  if (points.length === 0) return null;
  const latest = points[points.length - 1];
  const previous = points.length > 1 ? points[points.length - 2] : null;
  if (!previous) {
    return {
      latestDate: latest.date,
      latestValue: latest.value,
      previousDate: null,
      previousValue: null,
      deltaValue: null,
      deltaRate: null,
    };
  }
  const deltaValue = latest.value - previous.value;
  return {
    latestDate: latest.date,
    latestValue: latest.value,
    previousDate: previous.date,
    previousValue: previous.value,
    deltaValue,
    deltaRate: previous.value > 0 ? deltaValue / previous.value : null,
  };
}

function formatSignedNumber(value: number) {
  return value > 0 ? `+${value}` : String(value);
}

function formatSignedPercent(value: number) {
  const rounded = Math.round(value * 100);
  return rounded > 0 ? `+${rounded}%` : `${rounded}%`;
}

function getSparklineDeltaPresentation(input: {
  delta: SparklineDelta | null;
  emptyLabel: string;
}) {
  const { delta, emptyLabel } = input;
  if (!delta) {
    return {
      text: emptyLabel,
      className: "text-zinc-500",
    };
  }
  if (delta.deltaValue === null || delta.previousDate === null || delta.previousValue === null) {
    return {
      text: `Latest ${formatTrendDate(delta.latestDate)}: ${delta.latestValue} (no prior day)`,
      className: "text-zinc-600",
    };
  }
  if (delta.deltaValue > 0) {
    return {
      text: `▲ ${formatSignedNumber(delta.deltaValue)} vs prior day${delta.deltaRate !== null ? ` (${formatSignedPercent(delta.deltaRate)})` : ""}`,
      className: "text-emerald-700",
    };
  }
  if (delta.deltaValue < 0) {
    return {
      text: `▼ ${formatSignedNumber(delta.deltaValue)} vs prior day${delta.deltaRate !== null ? ` (${formatSignedPercent(delta.deltaRate)})` : ""}`,
      className: "text-rose-700",
    };
  }
  return {
    text: "▬ No change vs prior day",
    className: "text-zinc-600",
  };
}

function buildSuggestionTypeTrendMap(
  rows: RecommendationTrendBySuggestionTypeRow[] | undefined,
) {
  const byType = new Map<
    string,
    Map<string, { recommendationImpressions: number; recommendationSelections: number }>
  >();
  for (const row of rows ?? []) {
    const byDate = byType.get(row.suggestionType) ?? new Map();
    const existing = byDate.get(row.date) ?? {
      recommendationImpressions: 0,
      recommendationSelections: 0,
    };
    byDate.set(row.date, {
      recommendationImpressions:
        existing.recommendationImpressions + row.recommendationImpressions,
      recommendationSelections:
        existing.recommendationSelections + row.recommendationSelections,
    });
    byType.set(row.suggestionType, byDate);
  }

  const snapshotByType = new Map<string, SuggestionTypeTrendSnapshot>();
  for (const [suggestionType, byDate] of byType.entries()) {
    const sortedDates = Array.from(byDate.keys()).sort((left, right) =>
      left.localeCompare(right),
    );
    if (sortedDates.length === 0) continue;
    const latestDate = sortedDates[sortedDates.length - 1];
    const previousDate =
      sortedDates.length > 1 ? sortedDates[sortedDates.length - 2] : null;
    const latest = byDate.get(latestDate) ?? {
      recommendationImpressions: 0,
      recommendationSelections: 0,
    };
    const previous = previousDate
      ? byDate.get(previousDate) ?? {
          recommendationImpressions: 0,
          recommendationSelections: 0,
        }
      : null;
    const impressionDelta = previous
      ? latest.recommendationImpressions - previous.recommendationImpressions
      : null;
    const selectionDelta = previous
      ? latest.recommendationSelections - previous.recommendationSelections
      : null;

    snapshotByType.set(suggestionType, {
      latestDate,
      latestImpressions: latest.recommendationImpressions,
      latestSelections: latest.recommendationSelections,
      previousDate,
      previousImpressions: previous ? previous.recommendationImpressions : null,
      previousSelections: previous ? previous.recommendationSelections : null,
      impressionDelta,
      impressionDeltaRate:
        previous && previous.recommendationImpressions > 0 && impressionDelta !== null
          ? impressionDelta / previous.recommendationImpressions
          : null,
      selectionDelta,
      selectionDeltaRate:
        previous && previous.recommendationSelections > 0 && selectionDelta !== null
          ? selectionDelta / previous.recommendationSelections
          : null,
    });
  }
  return snapshotByType;
}

function getDeltaChipPresentation(input: {
  label: string;
  deltaValue: number | null;
  deltaRate: number | null;
}) {
  const { label, deltaValue, deltaRate } = input;
  if (deltaValue === null) {
    return {
      text: `${label}: n/a`,
      className: "border-zinc-300 bg-surface text-zinc-600",
    };
  }
  if (deltaValue > 0) {
    return {
      text: `${label}: ▲ ${formatSignedNumber(deltaValue)}${
        deltaRate !== null ? ` (${formatSignedPercent(deltaRate)})` : ""
      }`,
      className: "border-emerald-300 bg-emerald-50 text-emerald-700",
    };
  }
  if (deltaValue < 0) {
    return {
      text: `${label}: ▼ ${formatSignedNumber(deltaValue)}${
        deltaRate !== null ? ` (${formatSignedPercent(deltaRate)})` : ""
      }`,
      className: "border-rose-300 bg-rose-50 text-rose-700",
    };
  }
  return {
    text: `${label}: ▬ 0`,
    className: "border-zinc-300 bg-surface text-zinc-600",
  };
}

function getMissionPrepPerformance(input: {
  sheetSelections: number;
  openRateFromSelection: number | null;
  printRateFromOpen: number | null;
  thresholds: MissionPrepPerformanceThresholds;
}) {
  const { sheetSelections, openRateFromSelection, printRateFromOpen, thresholds } = input;
  if (sheetSelections < thresholds.minSheetSample) {
    return {
      label: "Low sample",
      className: "border-zinc-300 bg-surface-muted/50 text-zinc-700",
      pillClassName: "border-zinc-300 bg-surface text-zinc-600",
      reasons: [`Needs at least ${thresholds.minSheetSample} sheet selections.`],
      isFlagged: false,
    };
  }

  const reasons: string[] = [];
  if (
    openRateFromSelection !== null &&
    openRateFromSelection < thresholds.minOpenRateFromSelection
  ) {
    reasons.push(
      `Sheet→Open ${formatRate(openRateFromSelection)} below ${formatRate(
        thresholds.minOpenRateFromSelection,
      )}.`,
    );
  }
  if (printRateFromOpen !== null && printRateFromOpen < thresholds.minPrintRateFromOpen) {
    reasons.push(
      `Open→Print ${formatRate(printRateFromOpen)} below ${formatRate(
        thresholds.minPrintRateFromOpen,
      )}.`,
    );
  }

  if (reasons.length === 0) {
    return {
      label: "Healthy",
      className: "border-emerald-300 bg-emerald-50/60 text-emerald-900",
      pillClassName: "border-emerald-300 bg-emerald-50 text-emerald-700",
      reasons: ["Rates are above configured thresholds."],
      isFlagged: false,
    };
  }

  if (reasons.length >= 2) {
    return {
      label: "Critical",
      className: "border-rose-300 bg-rose-50/70 text-rose-900",
      pillClassName: "border-rose-300 bg-rose-50 text-rose-700",
      reasons,
      isFlagged: true,
    };
  }

  return {
    label: "Watch",
    className: "border-amber-300 bg-amber-50/70 text-amber-900",
    pillClassName: "border-amber-300 bg-amber-50 text-amber-700",
    reasons,
    isFlagged: true,
  };
}

function buildMissionPrepTopicTrendSummaries(input: {
  rows: MissionPrepTrendByTopicRow[] | undefined;
  missionPrepTrendRows: MissionPrepTrendPoint[] | undefined;
  selectedMetric: MissionPrepTopicMetric;
}) {
  const rows = input.rows ?? [];
  if (rows.length === 0) return [];

  const dayKeys = [...(input.missionPrepTrendRows ?? []).map((row) => row.date)];
  const dayKeySet = new Set(dayKeys);
  const byTopic = new Map<
    string,
    Map<string, { sheetSelections: number; opens: number; prints: number }>
  >();

  for (const row of rows) {
    if (!dayKeySet.has(row.date)) {
      dayKeys.push(row.date);
      dayKeySet.add(row.date);
    }
    const byDay = byTopic.get(row.topicId) ?? new Map();
    const existing = byDay.get(row.date) ?? {
      sheetSelections: 0,
      opens: 0,
      prints: 0,
    };
    byDay.set(row.date, {
      sheetSelections: existing.sheetSelections + row.sheetSelections,
      opens: existing.opens + row.opens,
      prints: existing.prints + row.prints,
    });
    byTopic.set(row.topicId, byDay);
  }

  const orderedDayKeys = dayKeys.sort((left, right) => left.localeCompare(right));

  return Array.from(byTopic.entries())
    .map(([topicId, byDay]) => {
      let totalSheetSelections = 0;
      let totalOpens = 0;
      let totalPrints = 0;
      for (const bucket of byDay.values()) {
        totalSheetSelections += bucket.sheetSelections;
        totalOpens += bucket.opens;
        totalPrints += bucket.prints;
      }

      return {
        topicId,
        metricTotal:
          input.selectedMetric === "sheetSelections"
            ? totalSheetSelections
            : input.selectedMetric === "opens"
              ? totalOpens
              : totalPrints,
        totalSheetSelections,
        totalOpens,
        totalPrints,
        openRateFromSelection:
          totalSheetSelections > 0
            ? Number((totalOpens / totalSheetSelections).toFixed(3))
            : null,
        printRateFromSelection:
          totalSheetSelections > 0
            ? Number((totalPrints / totalSheetSelections).toFixed(3))
            : null,
        printRateFromOpen:
          totalOpens > 0 ? Number((totalPrints / totalOpens).toFixed(3)) : null,
        points: orderedDayKeys.map((dayKey) => ({
          date: dayKey,
          value:
            input.selectedMetric === "sheetSelections"
              ? (byDay.get(dayKey)?.sheetSelections ?? 0)
              : input.selectedMetric === "opens"
                ? (byDay.get(dayKey)?.opens ?? 0)
                : (byDay.get(dayKey)?.prints ?? 0),
        })),
      } satisfies MissionPrepTopicTrendSummary;
    })
    .sort(
      (left, right) =>
        right.metricTotal - left.metricTotal ||
        right.totalPrints - left.totalPrints ||
        right.totalOpens - left.totalOpens ||
        right.totalSheetSelections - left.totalSheetSelections ||
        left.topicId.localeCompare(right.topicId),
    );
}

export default function ExplorerMetricsPanel() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600" /></div>}>
      <ExplorerMetricsPanelInner />
    </Suspense>
  );
}

function ExplorerMetricsPanelInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [days, setDays] = useState(() => parseDaysParam(searchParams.get("days")));
  const [topicFilter, setTopicFilter] = useState(() =>
    parseTopicParam(searchParams.get("topicId")),
  );
  const [topicOptions, setTopicOptions] = useState<string[]>([]);
  const [missionPrepTopicCardMetric, setMissionPrepTopicCardMetric] =
    useState<MissionPrepTopicMetric>("prints");
  const [missionPrepMinSheetSample, setMissionPrepMinSheetSample] = useState(8);
  const [missionPrepMinOpenRate, setMissionPrepMinOpenRate] = useState(0.6);
  const [missionPrepMinPrintRateFromOpen, setMissionPrepMinPrintRateFromOpen] =
    useState(0.5);
  const [summary, setSummary] = useState<ExplorerSummaryResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const canonicalTopicIds = useMemo(
    () => (summary ? getCanonicalTopicIds(summary) : []),
    [summary],
  );
  const topicLabels = useMemo(
    () => getTopicLabelMap(summary?.availableTopicMeta),
    [summary?.availableTopicMeta],
  );
  const topicBadges = useMemo(
    () => getTopicBadgeMap(summary?.availableTopicMeta),
    [summary?.availableTopicMeta],
  );
  const topicMetaById = useMemo(
    () => getTopicMetaMap(summary?.availableTopicMeta),
    [summary?.availableTopicMeta],
  );
  const activeTopicDisplay = topicFilter
    ? getTopicDisplayData(topicFilter, topicLabels, topicBadges, topicMetaById)
    : null;
  const activeTopicLabel = activeTopicDisplay
    ? activeTopicDisplay.badge
      ? `${activeTopicDisplay.badge} ${activeTopicDisplay.text}`
      : activeTopicDisplay.text
    : null;
  const recommendationImpressionSparkline = useMemo(
    () =>
      buildTrendSparklinePoints({
        rows: summary?.recommendationTrend,
        metric: "recommendationImpressions",
      }),
    [summary?.recommendationTrend],
  );
  const recommendationSelectionSparkline = useMemo(
    () =>
      buildTrendSparklinePoints({
        rows: summary?.recommendationTrend,
        metric: "recommendationSelections",
      }),
    [summary?.recommendationTrend],
  );
  const recommendationTypeImpressionSparkline = useMemo(
    () =>
      buildTypeTrendSparklinePoints({
        rows: summary?.recommendationTrendBySuggestionType,
        metric: "recommendationImpressions",
      }),
    [summary?.recommendationTrendBySuggestionType],
  );
  const recommendationTypeSelectionSparkline = useMemo(
    () =>
      buildTypeTrendSparklinePoints({
        rows: summary?.recommendationTrendBySuggestionType,
        metric: "recommendationSelections",
      }),
    [summary?.recommendationTrendBySuggestionType],
  );
  const missionPrepSheetSparkline = useMemo(
    () =>
      buildMissionPrepTrendSparklinePoints({
        rows: summary?.missionPrepTrend,
        metric: "sheetSelections",
      }),
    [summary?.missionPrepTrend],
  );
  const missionPrepOpenSparkline = useMemo(
    () =>
      buildMissionPrepTrendSparklinePoints({
        rows: summary?.missionPrepTrend,
        metric: "opens",
      }),
    [summary?.missionPrepTrend],
  );
  const missionPrepPrintSparkline = useMemo(
    () =>
      buildMissionPrepTrendSparklinePoints({
        rows: summary?.missionPrepTrend,
        metric: "prints",
      }),
    [summary?.missionPrepTrend],
  );
  const recommendationImpressionDelta = useMemo(
    () => getSparklineDelta(recommendationImpressionSparkline),
    [recommendationImpressionSparkline],
  );
  const recommendationSelectionDelta = useMemo(
    () => getSparklineDelta(recommendationSelectionSparkline),
    [recommendationSelectionSparkline],
  );
  const recommendationTypeImpressionDelta = useMemo(
    () => getSparklineDelta(recommendationTypeImpressionSparkline),
    [recommendationTypeImpressionSparkline],
  );
  const recommendationTypeSelectionDelta = useMemo(
    () => getSparklineDelta(recommendationTypeSelectionSparkline),
    [recommendationTypeSelectionSparkline],
  );
  const missionPrepSheetDelta = useMemo(
    () => getSparklineDelta(missionPrepSheetSparkline),
    [missionPrepSheetSparkline],
  );
  const missionPrepOpenDelta = useMemo(
    () => getSparklineDelta(missionPrepOpenSparkline),
    [missionPrepOpenSparkline],
  );
  const missionPrepPrintDelta = useMemo(
    () => getSparklineDelta(missionPrepPrintSparkline),
    [missionPrepPrintSparkline],
  );
  const recommendationImpressionDeltaPresentation = useMemo(
    () =>
      getSparklineDeltaPresentation({
        delta: recommendationImpressionDelta,
        emptyLabel: "No impression daily deltas yet.",
      }),
    [recommendationImpressionDelta],
  );
  const recommendationSelectionDeltaPresentation = useMemo(
    () =>
      getSparklineDeltaPresentation({
        delta: recommendationSelectionDelta,
        emptyLabel: "No suggested tap daily deltas yet.",
      }),
    [recommendationSelectionDelta],
  );
  const recommendationTypeImpressionDeltaPresentation = useMemo(
    () =>
      getSparklineDeltaPresentation({
        delta: recommendationTypeImpressionDelta,
        emptyLabel: "No recommendation-type impression deltas yet.",
      }),
    [recommendationTypeImpressionDelta],
  );
  const recommendationTypeSelectionDeltaPresentation = useMemo(
    () =>
      getSparklineDeltaPresentation({
        delta: recommendationTypeSelectionDelta,
        emptyLabel: "No recommendation-type selection deltas yet.",
      }),
    [recommendationTypeSelectionDelta],
  );
  const missionPrepSheetDeltaPresentation = useMemo(
    () =>
      getSparklineDeltaPresentation({
        delta: missionPrepSheetDelta,
        emptyLabel: "No mission-prep sheet daily deltas yet.",
      }),
    [missionPrepSheetDelta],
  );
  const missionPrepOpenDeltaPresentation = useMemo(
    () =>
      getSparklineDeltaPresentation({
        delta: missionPrepOpenDelta,
        emptyLabel: "No mission-prep open daily deltas yet.",
      }),
    [missionPrepOpenDelta],
  );
  const missionPrepPrintDeltaPresentation = useMemo(
    () =>
      getSparklineDeltaPresentation({
        delta: missionPrepPrintDelta,
        emptyLabel: "No mission-prep print daily deltas yet.",
      }),
    [missionPrepPrintDelta],
  );
  const suggestionTypeTrendMap = useMemo(
    () => buildSuggestionTypeTrendMap(summary?.recommendationTrendBySuggestionType),
    [summary?.recommendationTrendBySuggestionType],
  );
  const missionPrepThresholds = useMemo(
    () =>
      ({
        minSheetSample: missionPrepMinSheetSample,
        minOpenRateFromSelection: missionPrepMinOpenRate,
        minPrintRateFromOpen: missionPrepMinPrintRateFromOpen,
      }) satisfies MissionPrepPerformanceThresholds,
    [
      missionPrepMinOpenRate,
      missionPrepMinPrintRateFromOpen,
      missionPrepMinSheetSample,
    ],
  );
  const missionPrepTopicTrendSummaries = useMemo(
    () =>
      buildMissionPrepTopicTrendSummaries({
        rows: summary?.missionPrepTrendByTopic,
        missionPrepTrendRows: summary?.missionPrepTrend,
        selectedMetric: missionPrepTopicCardMetric,
      }),
    [
      missionPrepTopicCardMetric,
      summary?.missionPrepTrend,
      summary?.missionPrepTrendByTopic,
    ],
  );
  const missionPrepFlaggedTopicCount = useMemo(
    () =>
      missionPrepTopicTrendSummaries.filter((entry) =>
        getMissionPrepPerformance({
          sheetSelections: entry.totalSheetSelections,
          openRateFromSelection: entry.openRateFromSelection,
          printRateFromOpen: entry.printRateFromOpen,
          thresholds: missionPrepThresholds,
        }).isFlagged,
      ).length,
    [missionPrepThresholds, missionPrepTopicTrendSummaries],
  );

  const renderTopicWithVisual = useCallback(
    (topicId: string) => {
      const display = getTopicDisplayData(topicId, topicLabels, topicBadges, topicMetaById);
      return (
        <span className="inline-flex items-center gap-1.5">
          {display.imageSrc ? (
            <Image
              src={display.imageSrc}
              alt={display.imageAlt ?? display.text}
              width={18}
              height={18}
              className="h-[18px] w-[18px] rounded-full border border-border/70 bg-white object-cover"
            />
          ) : null}
          <span>
            {display.badge ? `${display.badge} ` : ""}
            {display.text}
          </span>
        </span>
      );
    },
    [topicBadges, topicLabels, topicMetaById],
  );

  useEffect(() => {
    const nextDays = parseDaysParam(searchParams.get("days"));
    const nextTopic = parseTopicParam(searchParams.get("topicId"));
    setDays((current) => (current === nextDays ? current : nextDays));
    setTopicFilter((current) => (current === nextTopic ? current : nextTopic));
  }, [searchParams]);

  const updateFilterQuery = useCallback(
    (nextDays: number, nextTopicFilter: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("days", String(nextDays));
      if (nextTopicFilter) {
        params.set("topicId", nextTopicFilter);
      } else {
        params.delete("topicId");
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const downloadMissionPrepTrendByTopicCsv = useCallback(async (options?: {
    flaggedOnly?: boolean;
  }) => {
    const flaggedOnly = options?.flaggedOnly === true;
    if ((summary?.missionPrepTrendByTopic ?? []).length === 0) return;
    if (flaggedOnly && missionPrepFlaggedTopicCount === 0) return;
    try {
      const params = new URLSearchParams({
        days: String(summary?.days ?? days),
        format: "csv",
        export: "mission_prep_trend_by_topic",
        includeStatus: "1",
        minSheetSample: String(missionPrepMinSheetSample),
        minOpenRateFromSelection: String(missionPrepMinOpenRate),
        minPrintRateFromOpen: String(missionPrepMinPrintRateFromOpen),
      });
      if (flaggedOnly) {
        params.set("flaggedOnly", "1");
      }
      if (topicFilter) {
        params.set("topicId", topicFilter);
      }
      const response = await fetch(`/api/admin/reports/explorer?${params.toString()}`, {
        method: "GET",
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Unable to download mission-prep trend CSV.");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const disposition = response.headers.get("content-disposition");
      const filenameMatch = disposition?.match(/filename="?([^"]+)"?/i);
      link.href = url;
      link.download =
        filenameMatch?.[1] ??
        `explorer-mission-prep-daily-by-topic-${summary?.days ?? days}d${flaggedOnly ? "-flagged" : ""}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (downloadError) {
      setError(
        downloadError instanceof Error
          ? downloadError.message
          : "Unable to download mission-prep trend CSV.",
      );
    }
  }, [
    days,
    missionPrepFlaggedTopicCount,
    missionPrepMinOpenRate,
    missionPrepMinPrintRateFromOpen,
    missionPrepMinSheetSample,
    summary?.days,
    summary?.missionPrepTrendByTopic,
    topicFilter,
  ]);

  const loadSummary = useCallback(async () => {
    setLoading(true);
    try {
      const search = new URLSearchParams({ days: String(days) });
      if (topicFilter) {
        search.set("topicId", topicFilter);
      }
      const response = await fetch(`/api/admin/reports/explorer?${search.toString()}`, {
        method: "GET",
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => ({}))) as ExplorerSummaryResponse;
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to load explorer metrics.");
      }
      setSummary(payload);
      const canonicalTopics = getCanonicalTopicIds(payload);
      setTopicOptions((current) => {
        if (canonicalTopics.length > 0) return canonicalTopics;
        const all = new Set(current);
        for (const entry of payload.byTopic ?? []) {
          all.add(entry.topicId);
        }
        return Array.from(all).sort((left, right) => left.localeCompare(right));
      });
      setError("");
    } catch (loadError) {
      setSummary(null);
      setError(
        loadError instanceof Error ? loadError.message : "Unable to load explorer metrics.",
      );
    } finally {
      setLoading(false);
    }
  }, [days, topicFilter]);

  useEffect(() => {
    void loadSummary();
  }, [loadSummary]);

  useEffect(() => {
    if (!summary || !topicFilter) return;
    const canonicalTopics = getCanonicalTopicIds(summary);
    if (canonicalTopics.length === 0) return;
    if (canonicalTopics.includes(topicFilter)) return;
    setTopicFilter("");
    updateFilterQuery(days, "");
  }, [days, summary, topicFilter, updateFilterQuery]);

  const topicSelectOptions =
    canonicalTopicIds.length === 0 &&
    topicFilter &&
    !topicOptions.includes(topicFilter)
      ? [topicFilter, ...topicOptions]
      : topicOptions;

  return (
    <SoftCard as="section" className="p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold">Explorer Funnel (Image-First UX)</h2>
            {topicFilter ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[11px] font-semibold text-zinc-700">
                <span className="text-zinc-600">Topic Filter:</span>
                {renderTopicWithVisual(topicFilter)}
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-xs text-zinc-600">
            Tracks visual world taps, question taps, and world-to-world portal flow.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-zinc-600" htmlFor="explorer-days-window">
            Window
          </label>
          <select
            id="explorer-days-window"
            value={days}
            onChange={(event) => {
              const nextDays = Number(event.target.value);
              setDays(nextDays);
              updateFilterQuery(nextDays, topicFilter);
            }}
            className="ui-focus-ring rounded-full border border-border bg-surface px-3 py-2 text-xs"
          >
            {DAY_OPTIONS.map((value) => (
              <option key={value} value={value}>
                {value}d
              </option>
            ))}
          </select>
          <label className="text-xs text-zinc-600" htmlFor="explorer-topic-filter">
            Topic
          </label>
          <select
            id="explorer-topic-filter"
            value={topicFilter}
            onChange={(event) => {
              const nextTopic = event.target.value;
              setTopicFilter(nextTopic);
              updateFilterQuery(days, nextTopic);
            }}
            className="ui-focus-ring rounded-full border border-border bg-surface px-3 py-2 text-xs"
          >
            <option value="">All</option>
            {topicSelectOptions.map((topicId) => (
              <option key={topicId} value={topicId}>
                {formatTopicDisplay(topicId, topicLabels, topicBadges)}
              </option>
            ))}
          </select>
          {topicFilter ? (
            <button
              type="button"
              onClick={() => {
                setTopicFilter("");
                updateFilterQuery(days, "");
              }}
              className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground"
            >
              Clear Topic
            </button>
          ) : null}
          <button
            type="button"
            onClick={() => void loadSummary()}
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-3 py-2 text-xs font-semibold text-foreground"
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {error ? (
        <p className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          {error}
        </p>
      ) : null}

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Events</p>
          <p className="mt-1 text-2xl font-semibold">{summary?.totalEvents ?? 0}</p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Unique Users</p>
          <p className="mt-1 text-2xl font-semibold">{summary?.uniqueUsers ?? 0}</p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Lobby → Topic Views</p>
          <p className="mt-1 text-2xl font-semibold">
            {formatRate(summary?.funnel.topicViewRateFromLobby ?? null)}
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            World Select → Question
          </p>
          <p className="mt-1 text-2xl font-semibold">
            {formatRate(summary?.funnel.questionSelectionRateFromWorldSelect ?? null)}
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Topic → Module Views</p>
          <p className="mt-1 text-2xl font-semibold">
            {formatRate(summary?.funnel.moduleViewRateFromTopicView ?? null)}
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Module View → Lesson
          </p>
          <p className="mt-1 text-2xl font-semibold">
            {formatRate(summary?.funnel.moduleLessonSelectionRateFromModuleView ?? null)}
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Module View → Rec. Impression
          </p>
          <p className="mt-1 text-2xl font-semibold">
            {formatRate(summary?.funnel.moduleRecommendationImpressionRateFromModuleView ?? null)}
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Rec. Impression → Suggested Tap
          </p>
          <p className="mt-1 text-2xl font-semibold">
            {formatRate(
              summary?.funnel.moduleRecommendedSelectionRateFromRecommendationImpression ??
                null,
            )}
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Topic View → Mission Prep Sheet
          </p>
          <p className="mt-1 text-2xl font-semibold">
            {formatRate(summary?.funnel.missionPrepSheetSelectionRateFromTopicView ?? null)}
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Mission Prep Sheet → Open
          </p>
          <p className="mt-1 text-2xl font-semibold">
            {formatRate(summary?.funnel.missionPrepOpenRateFromSheetSelection ?? null)}
          </p>
        </article>
        <article className="rounded-md border border-border bg-surface p-3">
          <p className="text-xs uppercase tracking-wide text-zinc-500">
            Mission Prep Open → Print
          </p>
          <p className="mt-1 text-2xl font-semibold">
            {formatRate(summary?.funnel.missionPrepPrintRateFromOpen ?? null)}
          </p>
        </article>
      </div>

      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          lobbyViews: {summary?.funnel.lobbyViews ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          worldSelections: {summary?.funnel.worldSelections ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          topicViews: {summary?.funnel.topicViews ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          moduleViews: {summary?.funnel.moduleViews ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          questionSelections: {summary?.funnel.questionSelections ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          portalSelections: {summary?.funnel.portalSelections ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          moduleSelections: {summary?.funnel.moduleSelections ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          moduleLessonSelections: {summary?.funnel.moduleLessonSelections ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          moduleRecommendedSelections: {summary?.funnel.moduleRecommendedSelections ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          recommendationImpressions: {summary?.funnel.moduleRecommendationImpressions ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          missionPrepSheetSelections: {summary?.funnel.missionPrepSheetSelections ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          missionPrepOpens: {summary?.funnel.missionPrepOpens ?? 0}
        </article>
        <article className="rounded-md border border-border bg-surface p-3 text-xs">
          missionPrepPrints: {summary?.funnel.missionPrepPrints ?? 0}
        </article>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-4">
        <article className="rounded-md border border-border bg-surface p-3">
          <h3 className="text-sm font-semibold">Top Actions</h3>
          <ul className="mt-2 space-y-1 text-xs text-zinc-700">
            {(summary?.byAction ?? []).slice(0, 8).map((entry) => (
              <li key={entry.action} className="flex items-center justify-between">
                <span>{entry.action}</span>
                <span className="font-medium">{entry.count}</span>
              </li>
            ))}
            {(summary?.byAction ?? []).length === 0 ? (
              <li className="text-zinc-500">No explorer actions in this window.</li>
            ) : null}
          </ul>
        </article>

        <article className="rounded-md border border-border bg-surface p-3">
          <h3 className="text-sm font-semibold">Top Topics</h3>
          <ul className="mt-2 space-y-1 text-xs text-zinc-700">
            {(summary?.byTopic ?? []).slice(0, 8).map((entry) => (
              <li key={entry.topicId} className="flex items-center justify-between">
                {renderTopicWithVisual(entry.topicId)}
                <span className="font-medium">{entry.count}</span>
              </li>
            ))}
            {(summary?.byTopic ?? []).length === 0 ? (
              <li className="text-zinc-500">No topic activity in this window.</li>
            ) : null}
          </ul>
        </article>

        <article className="rounded-md border border-border bg-surface p-3">
          <h3 className="text-sm font-semibold">Top Modules</h3>
          <ul className="mt-2 space-y-1 text-xs text-zinc-700">
            {(summary?.byModule ?? []).slice(0, 8).map((entry) => (
              <li key={entry.moduleId} className="flex items-center justify-between">
                <span>{entry.moduleId}</span>
                <span className="font-medium">{entry.count}</span>
              </li>
            ))}
            {(summary?.byModule ?? []).length === 0 ? (
              <li className="text-zinc-500">No module activity in this window.</li>
            ) : null}
          </ul>
        </article>

        <article className="rounded-md border border-border bg-surface p-3">
          <h3 className="text-sm font-semibold">Recommendation Types</h3>
          <ul className="mt-2 space-y-1 text-xs text-zinc-700">
            {(summary?.bySuggestionType ?? []).slice(0, 8).map((entry) => {
              const trendSnapshot = suggestionTypeTrendMap.get(entry.suggestionType);
              const selectionChip = getDeltaChipPresentation({
                label: "Taps",
                deltaValue: trendSnapshot?.selectionDelta ?? null,
                deltaRate: trendSnapshot?.selectionDeltaRate ?? null,
              });
              const impressionChip = getDeltaChipPresentation({
                label: "Impr",
                deltaValue: trendSnapshot?.impressionDelta ?? null,
                deltaRate: trendSnapshot?.impressionDeltaRate ?? null,
              });
              return (
                <li
                  key={entry.suggestionType}
                  className="rounded-md border border-border/60 px-2 py-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">
                      {entry.icon} {entry.label}
                    </span>
                    <span className="font-medium">{entry.selectionCount}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-zinc-500">
                    {entry.suggestionType} · impressions {entry.impressionCount} · type CTR{" "}
                    {formatRate(entry.selectionRateFromTypeViews)} · module view CTR{" "}
                    {formatRate(entry.selectionRateFromModuleViews)}
                  </p>
                  {trendSnapshot ? (
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      Latest {formatTrendDate(trendSnapshot.latestDate)} · taps{" "}
                      {trendSnapshot.latestSelections} · impressions{" "}
                      {trendSnapshot.latestImpressions}
                    </p>
                  ) : (
                    <p className="mt-0.5 text-[11px] text-zinc-500">
                      No daily trend yet for this reason.
                    </p>
                  )}
                  <div className="mt-1 flex flex-wrap gap-1">
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${selectionChip.className}`}
                    >
                      {selectionChip.text}
                    </span>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${impressionChip.className}`}
                    >
                      {impressionChip.text}
                    </span>
                  </div>
                </li>
              );
            })}
            {(summary?.bySuggestionType ?? []).length === 0 ? (
              <li className="text-zinc-500">
                No recommendation-type events in this window.
              </li>
            ) : null}
          </ul>
        </article>
      </div>

      <article className="mt-4 rounded-md border border-border bg-surface p-3">
        <h3 className="text-sm font-semibold">Recommendation Trend (Daily)</h3>
        <p className="mt-1 text-xs text-zinc-500">
          Module views vs recommendation impressions and taps over time
          {activeTopicLabel ? ` for topic "${activeTopicLabel}".` : " for all topics."}
        </p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <div className="rounded-md border border-border/70 bg-surface-muted/50 p-2">
            <p className="text-[11px] font-medium text-zinc-600">Impressions Trend</p>
            {recommendationImpressionDelta ? (
              <p className="text-[11px] text-zinc-500">
                Latest {formatTrendDate(recommendationImpressionDelta.latestDate)}:{" "}
                {recommendationImpressionDelta.latestValue}
              </p>
            ) : null}
            <p
              className={`text-[11px] font-semibold ${recommendationImpressionDeltaPresentation.className}`}
            >
              {recommendationImpressionDeltaPresentation.text}
            </p>
            <MiniSparkline
              points={recommendationImpressionSparkline}
              barClassName="bg-cyan-500/80"
              emptyLabel="No impression trend points."
            />
          </div>
          <div className="rounded-md border border-border/70 bg-surface-muted/50 p-2">
            <p className="text-[11px] font-medium text-zinc-600">Suggested Tap Trend</p>
            {recommendationSelectionDelta ? (
              <p className="text-[11px] text-zinc-500">
                Latest {formatTrendDate(recommendationSelectionDelta.latestDate)}:{" "}
                {recommendationSelectionDelta.latestValue}
              </p>
            ) : null}
            <p
              className={`text-[11px] font-semibold ${recommendationSelectionDeltaPresentation.className}`}
            >
              {recommendationSelectionDeltaPresentation.text}
            </p>
            <MiniSparkline
              points={recommendationSelectionSparkline}
              barClassName="bg-emerald-500/80"
              emptyLabel="No selection trend points."
            />
          </div>
        </div>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border text-zinc-500">
                <th className="px-2 py-1 font-medium">Date</th>
                <th className="px-2 py-1 font-medium">Module Views</th>
                <th className="px-2 py-1 font-medium">Rec. Impressions</th>
                <th className="px-2 py-1 font-medium">Suggested Taps</th>
                <th className="px-2 py-1 font-medium">View → Impression</th>
                <th className="px-2 py-1 font-medium">Impression → Tap</th>
              </tr>
            </thead>
            <tbody>
              {(summary?.recommendationTrend ?? []).map((entry) => (
                <tr key={entry.date} className="border-b border-border/60">
                  <td className="px-2 py-1 text-zinc-600">
                    {formatTrendDate(entry.date)}
                  </td>
                  <td className="px-2 py-1">{entry.moduleViews}</td>
                  <td className="px-2 py-1">{entry.recommendationImpressions}</td>
                  <td className="px-2 py-1">{entry.recommendationSelections}</td>
                  <td className="px-2 py-1">
                    {formatRate(entry.recommendationImpressionRateFromModuleView)}
                  </td>
                  <td className="px-2 py-1">
                    {formatRate(entry.recommendationSelectionRateFromImpression)}
                  </td>
                </tr>
              ))}
              {(summary?.recommendationTrend ?? []).length === 0 ? (
                <tr>
                  <td className="px-2 py-2 text-zinc-500" colSpan={6}>
                    No recommendation trend data for this window.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </article>

      <article className="mt-4 rounded-md border border-border bg-surface p-3">
        <h3 className="text-sm font-semibold">Mission Prep Trend (Daily)</h3>
        <p className="mt-1 text-xs text-zinc-500">
          Mission-prep sheet selections, opens, and prints over time
          {activeTopicLabel ? ` for topic "${activeTopicLabel}".` : " for all topics."}
        </p>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          <div className="rounded-md border border-border/70 bg-surface-muted/50 p-2">
            <p className="text-[11px] font-medium text-zinc-600">Sheet Selection Trend</p>
            {missionPrepSheetDelta ? (
              <p className="text-[11px] text-zinc-500">
                Latest {formatTrendDate(missionPrepSheetDelta.latestDate)}:{" "}
                {missionPrepSheetDelta.latestValue}
              </p>
            ) : null}
            <p className={`text-[11px] font-semibold ${missionPrepSheetDeltaPresentation.className}`}>
              {missionPrepSheetDeltaPresentation.text}
            </p>
            <MiniSparkline
              points={missionPrepSheetSparkline}
              barClassName="bg-sky-500/80"
              emptyLabel="No sheet-selection trend points."
            />
          </div>
          <div className="rounded-md border border-border/70 bg-surface-muted/50 p-2">
            <p className="text-[11px] font-medium text-zinc-600">Open Trend</p>
            {missionPrepOpenDelta ? (
              <p className="text-[11px] text-zinc-500">
                Latest {formatTrendDate(missionPrepOpenDelta.latestDate)}:{" "}
                {missionPrepOpenDelta.latestValue}
              </p>
            ) : null}
            <p className={`text-[11px] font-semibold ${missionPrepOpenDeltaPresentation.className}`}>
              {missionPrepOpenDeltaPresentation.text}
            </p>
            <MiniSparkline
              points={missionPrepOpenSparkline}
              barClassName="bg-indigo-500/80"
              emptyLabel="No mission-prep open trend points."
            />
          </div>
          <div className="rounded-md border border-border/70 bg-surface-muted/50 p-2">
            <p className="text-[11px] font-medium text-zinc-600">Print Trend</p>
            {missionPrepPrintDelta ? (
              <p className="text-[11px] text-zinc-500">
                Latest {formatTrendDate(missionPrepPrintDelta.latestDate)}:{" "}
                {missionPrepPrintDelta.latestValue}
              </p>
            ) : null}
            <p className={`text-[11px] font-semibold ${missionPrepPrintDeltaPresentation.className}`}>
              {missionPrepPrintDeltaPresentation.text}
            </p>
            <MiniSparkline
              points={missionPrepPrintSparkline}
              barClassName="bg-emerald-500/80"
              emptyLabel="No mission-prep print trend points."
            />
          </div>
        </div>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border text-zinc-500">
                <th className="px-2 py-1 font-medium">Date</th>
                <th className="px-2 py-1 font-medium">Sheet Selections</th>
                <th className="px-2 py-1 font-medium">Opens</th>
                <th className="px-2 py-1 font-medium">Prints</th>
                <th className="px-2 py-1 font-medium">Sheet → Open</th>
                <th className="px-2 py-1 font-medium">Open → Print</th>
                <th className="px-2 py-1 font-medium">Sheet → Print</th>
              </tr>
            </thead>
            <tbody>
              {(summary?.missionPrepTrend ?? []).map((entry) => (
                <tr key={entry.date} className="border-b border-border/60">
                  <td className="px-2 py-1 text-zinc-600">{formatTrendDate(entry.date)}</td>
                  <td className="px-2 py-1">{entry.sheetSelections}</td>
                  <td className="px-2 py-1">{entry.opens}</td>
                  <td className="px-2 py-1">{entry.prints}</td>
                  <td className="px-2 py-1">{formatRate(entry.openRateFromSelection)}</td>
                  <td className="px-2 py-1">{formatRate(entry.printRateFromOpen)}</td>
                  <td className="px-2 py-1">{formatRate(entry.printRateFromSelection)}</td>
                </tr>
              ))}
              {(summary?.missionPrepTrend ?? []).length === 0 ? (
                <tr>
                  <td className="px-2 py-2 text-zinc-500" colSpan={7}>
                    No mission-prep trend data for this window.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </article>

      <article className="mt-4 rounded-md border border-border bg-surface p-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-semibold">Mission Prep Daily Trend by Topic</h3>
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                void downloadMissionPrepTrendByTopicCsv();
              }}
              disabled={(summary?.missionPrepTrendByTopic ?? []).length === 0}
              className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              Download CSV
            </button>
            <button
              type="button"
              onClick={() => {
                void downloadMissionPrepTrendByTopicCsv({ flaggedOnly: true });
              }}
              disabled={
                (summary?.missionPrepTrendByTopic ?? []).length === 0 ||
                missionPrepFlaggedTopicCount === 0
              }
              className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Download Flagged CSV
            </button>
          </div>
        </div>
        <p className="mt-1 text-xs text-zinc-500">
          Per-topic mission-prep daily movement for world-level diagnostics
          {activeTopicLabel
            ? ` (currently filtered to "${activeTopicLabel}").`
            : " (showing all topics)."}
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-md border border-border/70 bg-surface-muted/50 p-2 text-xs text-zinc-700 sm:col-span-2 lg:col-span-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
              Topic Card Controls
            </p>
            <div className="grid gap-2 lg:grid-cols-3">
              <div>
                <p className="mb-1 text-[11px] font-medium text-zinc-600">Card Metric</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { value: "prints" as const, label: "Prints" },
                    { value: "opens" as const, label: "Opens" },
                    { value: "sheetSelections" as const, label: "Sheet Selections" },
                  ].map((option) => {
                    const isActive = missionPrepTopicCardMetric === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setMissionPrepTopicCardMetric(option.value)}
                        className={`ui-focus-ring inline-flex min-h-10 items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                          isActive
                            ? "border-zinc-900 bg-zinc-900 text-white"
                            : "border-border bg-surface text-zinc-700 hover:bg-surface-muted"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-medium text-zinc-600">Thresholds</p>
                <div className="grid grid-cols-3 gap-1.5">
                  <label className="text-[10px] text-zinc-600">
                    Min Sheets
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={missionPrepMinSheetSample}
                      onChange={(event) => {
                        const parsed = Number(event.target.value);
                        if (!Number.isFinite(parsed)) return;
                        setMissionPrepMinSheetSample(
                          Math.max(1, Math.min(200, Math.trunc(parsed))),
                        );
                      }}
                      className="ui-focus-ring mt-1 w-full rounded-md border border-border bg-surface px-2 py-1 text-[11px]"
                    />
                  </label>
                  <label className="text-[10px] text-zinc-600">
                    Min Sheet→Open %
                    <input
                      type="number"
                      min={0}
                      max={100}
                      step={1}
                      value={Math.round(missionPrepMinOpenRate * 100)}
                      onChange={(event) => {
                        const parsed = Number(event.target.value);
                        if (!Number.isFinite(parsed)) return;
                        setMissionPrepMinOpenRate(
                          Math.max(0, Math.min(1, Math.round(parsed) / 100)),
                        );
                      }}
                      className="ui-focus-ring mt-1 w-full rounded-md border border-border bg-surface px-2 py-1 text-[11px]"
                    />
                  </label>
                  <label className="text-[10px] text-zinc-600">
                    Min Open→Print %
                    <input
                      type="number"
                      min={0}
                      max={100}
                      step={1}
                      value={Math.round(missionPrepMinPrintRateFromOpen * 100)}
                      onChange={(event) => {
                        const parsed = Number(event.target.value);
                        if (!Number.isFinite(parsed)) return;
                        setMissionPrepMinPrintRateFromOpen(
                          Math.max(0, Math.min(1, Math.round(parsed) / 100)),
                        );
                      }}
                      className="ui-focus-ring mt-1 w-full rounded-md border border-border bg-surface px-2 py-1 text-[11px]"
                    />
                  </label>
                </div>
              </div>
              <div className="rounded-md border border-border/60 bg-surface p-2">
                <p className="text-[11px] font-medium text-zinc-700">Flagged Topics</p>
                <p className="mt-0.5 text-2xl font-semibold text-zinc-900">
                  {missionPrepFlaggedTopicCount}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-500">
                  Watch or Critical using configured thresholds.
                </p>
              </div>
            </div>
          </article>
          {missionPrepTopicTrendSummaries.slice(0, 6).map((entry) => {
            const delta = getSparklineDelta(entry.points);
            const deltaPresentation = getSparklineDeltaPresentation({
              delta,
              emptyLabel: `No ${missionPrepTopicCardMetric === "sheetSelections" ? "sheet selection" : missionPrepTopicCardMetric.slice(0, -1)} trend yet.`,
            });
            const performance = getMissionPrepPerformance({
              sheetSelections: entry.totalSheetSelections,
              openRateFromSelection: entry.openRateFromSelection,
              printRateFromOpen: entry.printRateFromOpen,
              thresholds: missionPrepThresholds,
            });
            return (
              <article
                key={`mission-prep-topic-card-${entry.topicId}`}
                className={`rounded-md border p-2 ${performance.className}`}
              >
                <p className="text-[11px] font-medium text-zinc-700">
                  {renderTopicWithVisual(entry.topicId)}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-500">
                  {missionPrepTopicCardMetric === "sheetSelections"
                    ? "Sheet Selections"
                    : missionPrepTopicCardMetric === "opens"
                      ? "Opens"
                      : "Prints"}{" "}
                  {entry.metricTotal} ·
                  {" "}
                  Prints {entry.totalPrints} · Opens {entry.totalOpens} · Sheets{" "}
                  {entry.totalSheetSelections}
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-500">
                  Open rate: {formatRate(entry.openRateFromSelection)} ·
                  {" "}
                  Print rates: Sheet→Print {formatRate(entry.printRateFromSelection)} · Open→Print{" "}
                  {formatRate(entry.printRateFromOpen)}
                </p>
                <p className="mt-1">
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${performance.pillClassName}`}
                  >
                    {performance.label}
                  </span>
                </p>
                <p className="mt-0.5 text-[11px] text-zinc-600">
                  {performance.reasons.join(" ")}
                </p>
                <p className={`mt-0.5 text-[11px] font-semibold ${deltaPresentation.className}`}>
                  {deltaPresentation.text}
                </p>
                <MiniSparkline
                  points={entry.points}
                  barClassName={
                    missionPrepTopicCardMetric === "sheetSelections"
                      ? "bg-sky-500/80"
                      : missionPrepTopicCardMetric === "opens"
                        ? "bg-indigo-500/80"
                        : "bg-emerald-500/80"
                  }
                  emptyLabel={`No ${missionPrepTopicCardMetric === "sheetSelections" ? "sheet selection" : missionPrepTopicCardMetric.slice(0, -1)} trend points.`}
                />
              </article>
            );
          })}
          {missionPrepTopicTrendSummaries.length === 0 ? (
            <article className="rounded-md border border-border/70 bg-surface-muted/50 p-2 text-xs text-zinc-500 sm:col-span-2 lg:col-span-3">
              No mission-prep topic trends available for the current filter window.
            </article>
          ) : null}
        </div>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border text-zinc-500">
                <th className="px-2 py-1 font-medium">Date</th>
                <th className="px-2 py-1 font-medium">Topic</th>
                <th className="px-2 py-1 font-medium">Sheet Selections</th>
                <th className="px-2 py-1 font-medium">Opens</th>
                <th className="px-2 py-1 font-medium">Prints</th>
                <th className="px-2 py-1 font-medium">Sheet → Open</th>
                <th className="px-2 py-1 font-medium">Open → Print</th>
                <th className="px-2 py-1 font-medium">Sheet → Print</th>
                <th className="px-2 py-1 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {(summary?.missionPrepTrendByTopic ?? []).slice(0, 120).map((entry) => {
                const performance = getMissionPrepPerformance({
                  sheetSelections: entry.sheetSelections,
                  openRateFromSelection: entry.openRateFromSelection,
                  printRateFromOpen: entry.printRateFromOpen,
                  thresholds: missionPrepThresholds,
                });
                return (
                  <tr
                    key={`${entry.date}-${entry.topicId}`}
                    className={`border-b border-border/60 ${performance.isFlagged ? "bg-amber-50/40" : ""}`}
                  >
                    <td className="px-2 py-1 text-zinc-600">{formatTrendDate(entry.date)}</td>
                    <td className="px-2 py-1 text-zinc-700">
                      {renderTopicWithVisual(entry.topicId)}
                    </td>
                    <td className="px-2 py-1">{entry.sheetSelections}</td>
                    <td className="px-2 py-1">{entry.opens}</td>
                    <td className="px-2 py-1">{entry.prints}</td>
                    <td className="px-2 py-1">{formatRate(entry.openRateFromSelection)}</td>
                    <td className="px-2 py-1">{formatRate(entry.printRateFromOpen)}</td>
                    <td className="px-2 py-1">{formatRate(entry.printRateFromSelection)}</td>
                    <td className="px-2 py-1">
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${performance.pillClassName}`}
                      >
                        {performance.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {(summary?.missionPrepTrendByTopic ?? []).length === 0 ? (
                <tr>
                  <td className="px-2 py-2 text-zinc-500" colSpan={9}>
                    No mission-prep daily topic trend data for this window.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </article>

      <article className="mt-4 rounded-md border border-border bg-surface p-3">
        <h3 className="text-sm font-semibold">Daily Trend by Recommendation Type</h3>
        <p className="mt-1 text-xs text-zinc-500">
          Impression and tap performance by recommendation reason
          {activeTopicLabel ? ` for topic "${activeTopicLabel}".` : " for all topics."}
        </p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <div className="rounded-md border border-border/70 bg-surface-muted/50 p-2">
            <p className="text-[11px] font-medium text-zinc-600">Type Impressions (All Reasons)</p>
            {recommendationTypeImpressionDelta ? (
              <p className="text-[11px] text-zinc-500">
                Latest {formatTrendDate(recommendationTypeImpressionDelta.latestDate)}:{" "}
                {recommendationTypeImpressionDelta.latestValue}
              </p>
            ) : null}
            <p
              className={`text-[11px] font-semibold ${recommendationTypeImpressionDeltaPresentation.className}`}
            >
              {recommendationTypeImpressionDeltaPresentation.text}
            </p>
            <MiniSparkline
              points={recommendationTypeImpressionSparkline}
              barClassName="bg-indigo-500/80"
              emptyLabel="No recommendation-type impression points."
            />
          </div>
          <div className="rounded-md border border-border/70 bg-surface-muted/50 p-2">
            <p className="text-[11px] font-medium text-zinc-600">Type Suggested Taps (All Reasons)</p>
            {recommendationTypeSelectionDelta ? (
              <p className="text-[11px] text-zinc-500">
                Latest {formatTrendDate(recommendationTypeSelectionDelta.latestDate)}:{" "}
                {recommendationTypeSelectionDelta.latestValue}
              </p>
            ) : null}
            <p
              className={`text-[11px] font-semibold ${recommendationTypeSelectionDeltaPresentation.className}`}
            >
              {recommendationTypeSelectionDeltaPresentation.text}
            </p>
            <MiniSparkline
              points={recommendationTypeSelectionSparkline}
              barClassName="bg-violet-500/80"
              emptyLabel="No recommendation-type selection points."
            />
          </div>
        </div>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border text-zinc-500">
                <th className="px-2 py-1 font-medium">Date</th>
                <th className="px-2 py-1 font-medium">Reason</th>
                <th className="px-2 py-1 font-medium">Impressions</th>
                <th className="px-2 py-1 font-medium">Suggested Taps</th>
                <th className="px-2 py-1 font-medium">Impression → Tap</th>
              </tr>
            </thead>
            <tbody>
              {(summary?.recommendationTrendBySuggestionType ?? [])
                .slice(-56)
                .map((entry) => (
                  <tr
                    key={`${entry.date}-${entry.suggestionType}`}
                    className="border-b border-border/60"
                  >
                    <td className="px-2 py-1 text-zinc-600">
                      {formatTrendDate(entry.date)}
                    </td>
                    <td className="px-2 py-1">
                      {entry.icon} {entry.label}
                    </td>
                    <td className="px-2 py-1">{entry.recommendationImpressions}</td>
                    <td className="px-2 py-1">{entry.recommendationSelections}</td>
                    <td className="px-2 py-1">
                      {formatRate(entry.recommendationSelectionRateFromImpression)}
                    </td>
                  </tr>
                ))}
              {(summary?.recommendationTrendBySuggestionType ?? []).length === 0 ? (
                <tr>
                  <td className="px-2 py-2 text-zinc-500" colSpan={5}>
                    No recommendation-type trend data for this window.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </article>

      <article className="mt-4 rounded-md border border-border bg-surface p-3">
        <h3 className="text-sm font-semibold">Recommendation by Topic</h3>
        <p className="mt-1 text-xs text-zinc-500">
          Topic-level recommendation impressions, taps, and top selected suggestion reason.
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border text-zinc-500">
                <th className="px-2 py-1 font-medium">Topic</th>
                <th className="px-2 py-1 font-medium">Module Views</th>
                <th className="px-2 py-1 font-medium">Rec. Impressions</th>
                <th className="px-2 py-1 font-medium">Suggested Taps</th>
                <th className="px-2 py-1 font-medium">View → Impression</th>
                <th className="px-2 py-1 font-medium">Impression → Tap</th>
                <th className="px-2 py-1 font-medium">Top Reason</th>
              </tr>
            </thead>
            <tbody>
              {(summary?.recommendationByTopic ?? []).slice(0, 12).map((entry) => (
                <tr key={entry.topicId} className="border-b border-border/60">
                  <td className="px-2 py-1 text-zinc-700">
                    {renderTopicWithVisual(entry.topicId)}
                  </td>
                  <td className="px-2 py-1">{entry.moduleViews}</td>
                  <td className="px-2 py-1">{entry.recommendationImpressions}</td>
                  <td className="px-2 py-1">{entry.recommendationSelections}</td>
                  <td className="px-2 py-1">
                    {formatRate(entry.recommendationImpressionRateFromModuleView)}
                  </td>
                  <td className="px-2 py-1">
                    {formatRate(entry.recommendationSelectionRateFromImpression)}
                  </td>
                  <td className="px-2 py-1 text-zinc-600">
                    {entry.topSuggestionType
                      ? `${entry.topSuggestionIcon ?? ""} ${entry.topSuggestionLabel ?? entry.topSuggestionType}`.trim()
                      : "n/a"}
                  </td>
                </tr>
              ))}
              {(summary?.recommendationByTopic ?? []).length === 0 ? (
                <tr>
                  <td className="px-2 py-2 text-zinc-500" colSpan={7}>
                    No recommendation-topic data for this window.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </article>

      <article className="mt-4 rounded-md border border-border bg-surface p-3">
        <h3 className="text-sm font-semibold">Mission Prep by Topic</h3>
        <p className="mt-1 text-xs text-zinc-500">
          Topic-level mission prep sheet selections, opens, and prints.
        </p>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border text-zinc-500">
                <th className="px-2 py-1 font-medium">Topic</th>
                <th className="px-2 py-1 font-medium">Sheet Selections</th>
                <th className="px-2 py-1 font-medium">Opens</th>
                <th className="px-2 py-1 font-medium">Prints</th>
                <th className="px-2 py-1 font-medium">Sheet → Open</th>
                <th className="px-2 py-1 font-medium">Open → Print</th>
                <th className="px-2 py-1 font-medium">Sheet → Print</th>
              </tr>
            </thead>
            <tbody>
              {(summary?.missionPrepByTopic ?? []).slice(0, 12).map((entry) => (
                <tr key={entry.topicId} className="border-b border-border/60">
                  <td className="px-2 py-1 text-zinc-700">
                    {renderTopicWithVisual(entry.topicId)}
                  </td>
                  <td className="px-2 py-1">{entry.sheetSelections}</td>
                  <td className="px-2 py-1">{entry.opens}</td>
                  <td className="px-2 py-1">{entry.prints}</td>
                  <td className="px-2 py-1">{formatRate(entry.openRateFromSelection)}</td>
                  <td className="px-2 py-1">{formatRate(entry.printRateFromOpen)}</td>
                  <td className="px-2 py-1">{formatRate(entry.printRateFromSelection)}</td>
                </tr>
              ))}
              {(summary?.missionPrepByTopic ?? []).length === 0 ? (
                <tr>
                  <td className="px-2 py-2 text-zinc-500" colSpan={7}>
                    No mission prep topic data for this window.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </article>

      <article className="mt-4 rounded-md border border-border bg-surface p-3">
        <h3 className="text-sm font-semibold">Recent Explorer Events</h3>
        <div className="mt-2 overflow-x-auto">
          <table className="min-w-full text-left text-xs">
            <thead>
              <tr className="border-b border-border text-zinc-500">
                <th className="px-2 py-1 font-medium">When</th>
                <th className="px-2 py-1 font-medium">Action</th>
                <th className="px-2 py-1 font-medium">Topic</th>
                <th className="px-2 py-1 font-medium">Module</th>
                <th className="px-2 py-1 font-medium">Destination</th>
              </tr>
            </thead>
            <tbody>
              {(summary?.recentEvents ?? []).slice(0, 12).map((entry) => (
                <tr key={`${entry.eventAt}-${entry.lessonId}-${entry.action ?? entry.eventType}`} className="border-b border-border/60">
                  <td className="px-2 py-1 text-zinc-600">
                    {new Date(entry.eventAt).toLocaleString()}
                  </td>
                  <td className="px-2 py-1">{entry.action ?? entry.eventType}</td>
                  <td className="px-2 py-1">
                    {entry.topicId
                      ? renderTopicWithVisual(entry.topicId)
                      : "n/a"}
                  </td>
                  <td className="px-2 py-1">{entry.moduleId ?? "n/a"}</td>
                  <td className="max-w-[260px] truncate px-2 py-1 text-zinc-600">
                    {entry.destination ?? entry.lessonId}
                  </td>
                </tr>
              ))}
              {(summary?.recentEvents ?? []).length === 0 ? (
                <tr>
                  <td className="px-2 py-2 text-zinc-500" colSpan={5}>
                    No explorer events found for this time window.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </article>
    </SoftCard>
  );
}
