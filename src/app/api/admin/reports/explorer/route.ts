import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { getAllWorldScenes } from "@/lib/explorer/scenes";
import { getExplorerTopics } from "@/lib/explorer/topics";
import {
  getRecommendationMeta,
  toRecommendationType,
  type RecommendationType,
} from "@/lib/explorer/recommendations";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

type ExplorerEventRow = {
  user_id: string;
  module_id: string | null;
  lesson_id: string;
  event_type: string;
  event_at: string;
  payload: unknown;
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
  suggestionType: RecommendationType;
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
  topSuggestionType: RecommendationType | null;
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

type MissionPrepPerformanceThresholds = {
  minSheetSample: number;
  minOpenRateFromSelection: number;
  minPrintRateFromOpen: number;
};

type MissionPrepPerformanceStatus = "low_sample" | "healthy" | "watch" | "critical";

type MissionPrepPerformanceEvaluation = {
  status: MissionPrepPerformanceStatus;
  reason: string;
  isFlagged: boolean;
};

type ExplorerAvailableTopic = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  badge: string | null;
};

function parseDays(value: string | null) {
  if (!value) return 30;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return 30;
  return Math.max(1, Math.min(90, Math.trunc(parsed)));
}

function parseTopicFilter(value: string | null) {
  return normalizeKey(value);
}

function parseIntegerRange(
  value: string | null,
  input: { defaultValue: number; min: number; max: number },
) {
  const { defaultValue, min, max } = input;
  if (!value) return defaultValue;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return defaultValue;
  return Math.max(min, Math.min(max, Math.trunc(parsed)));
}

function parseRateThreshold(value: string | null, defaultValue: number) {
  if (!value) return defaultValue;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return defaultValue;
  const normalized = parsed > 1 ? parsed / 100 : parsed;
  if (!Number.isFinite(normalized)) return defaultValue;
  return Math.max(0, Math.min(1, normalized));
}

function parseBooleanFlag(value: string | null) {
  const normalized = normalizeKey(value);
  return normalized === "1" || normalized === "true" || normalized === "yes";
}

function escapeCsvCell(value: string | number | null) {
  const text = value === null ? "" : String(value);
  if (!/[",\n]/.test(text)) return text;
  return `"${text.replace(/"/g, '""')}"`;
}

function toCsvResponse(input: {
  filename: string;
  headers: string[];
  rows: Array<Array<string | number | null>>;
}) {
  const { filename, headers, rows } = input;
  const lines = [headers.join(",")];
  for (const row of rows) {
    lines.push(row.map((value) => escapeCsvCell(value)).join(","));
  }
  const csv = lines.join("\n");
  return new NextResponse(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}

function getPayloadValue(payload: unknown, key: string) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) return null;
  const value = (payload as Record<string, unknown>)[key];
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return null;
}

function getPayloadBoolean(payload: unknown, key: string) {
  const value = getPayloadValue(payload, key);
  if (value === "true") return true;
  if (value === "false") return false;
  return null;
}

function normalizeKey(value: string | null | undefined) {
  if (!value) return null;
  const normalized = value.trim().toLowerCase();
  return normalized || null;
}

const WORLD_SCENE_BY_TOPIC_ID = new Map(
  getAllWorldScenes().map((scene) => [normalizeKey(scene.topicId), scene]),
);

const CANONICAL_EXPLORER_TOPICS: ExplorerAvailableTopic[] = getExplorerTopics()
  .map((topic) => {
    const id = normalizeKey(topic.id);
    if (!id) return null;
    const scene = WORLD_SCENE_BY_TOPIC_ID.get(id);
    return {
      id,
      title: topic.title,
      subtitle: topic.subtitle,
      imageSrc: topic.imageSrc,
      imageAlt: topic.imageAlt,
      badge: scene?.badge ?? null,
    } satisfies ExplorerAvailableTopic;
  })
  .filter((topic): topic is ExplorerAvailableTopic => Boolean(topic))
  .sort(
    (left, right) => left.title.localeCompare(right.title) || left.id.localeCompare(right.id),
  );

function parseTopicFromLessonId(lessonId: string) {
  const match = lessonId.match(/^explore:topic:([a-z0-9_-]+)$/i);
  return match?.[1]?.toLowerCase() ?? null;
}

function parseModuleFromLessonId(lessonId: string) {
  const match = lessonId.match(/^explore:module:([a-z0-9_-]+)$/i);
  return match?.[1]?.toLowerCase() ?? null;
}

function increment(map: Map<string, number>, key: string | null) {
  const normalized = normalizeKey(key);
  if (!normalized) return;
  map.set(normalized, (map.get(normalized) ?? 0) + 1);
}

function toRankedRows(map: Map<string, number>, labelKey: string) {
  return Array.from(map.entries())
    .map(([label, count]) => ({ [labelKey]: label, count }))
    .sort((left, right) => right.count - left.count || String(left[labelKey]).localeCompare(String(right[labelKey])));
}

function toUtcDayKey(input: Date) {
  if (Number.isNaN(input.getTime())) return null;
  return new Date(
    Date.UTC(input.getUTCFullYear(), input.getUTCMonth(), input.getUTCDate()),
  )
    .toISOString()
    .slice(0, 10);
}

function getTrendDayKeys(days: number) {
  const keys: string[] = [];
  const now = new Date();
  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const day = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - offset),
    );
    keys.push(day.toISOString().slice(0, 10));
  }
  return keys;
}

function incrementRecommendationTypeCount(
  map: Map<RecommendationType, number>,
  type: RecommendationType,
) {
  map.set(type, (map.get(type) ?? 0) + 1);
}

function incrementNestedRecommendationTypeCount(
  map: Map<string, Map<RecommendationType, number>>,
  key: string,
  type: RecommendationType,
) {
  const existing = map.get(key) ?? new Map<RecommendationType, number>();
  existing.set(type, (existing.get(type) ?? 0) + 1);
  map.set(key, existing);
}

function incrementRecommendationTrendByType(input: {
  map: Map<
    RecommendationType,
    Map<string, { recommendationImpressions: number; recommendationSelections: number }>
  >;
  suggestionType: RecommendationType;
  dayKey: string | null;
  metric: "impression" | "selection";
}) {
  const { map, suggestionType, dayKey, metric } = input;
  if (!dayKey) return;
  const byDay = map.get(suggestionType) ?? new Map();
  const existing = byDay.get(dayKey) ?? {
    recommendationImpressions: 0,
    recommendationSelections: 0,
  };
  const updated =
    metric === "impression"
      ? {
          recommendationImpressions: existing.recommendationImpressions + 1,
          recommendationSelections: existing.recommendationSelections,
        }
      : {
          recommendationImpressions: existing.recommendationImpressions,
          recommendationSelections: existing.recommendationSelections + 1,
        };
  byDay.set(dayKey, updated);
  map.set(suggestionType, byDay);
}

function getRecommendationByTopicRows(input: {
  topicModuleViews: Map<string, number>;
  topicRecommendationImpressions: Map<string, number>;
  topicRecommendationSelections: Map<string, number>;
  topicSelectionTypeCounts: Map<string, Map<RecommendationType, number>>;
}): RecommendationByTopicRow[] {
  const {
    topicModuleViews,
    topicRecommendationImpressions,
    topicRecommendationSelections,
    topicSelectionTypeCounts,
  } = input;

  const topicSet = new Set<string>([
    ...topicModuleViews.keys(),
    ...topicRecommendationImpressions.keys(),
    ...topicRecommendationSelections.keys(),
  ]);

  return Array.from(topicSet)
    .map((topicId) => {
      const moduleViews = topicModuleViews.get(topicId) ?? 0;
      const recommendationImpressions =
        topicRecommendationImpressions.get(topicId) ?? 0;
      const recommendationSelections =
        topicRecommendationSelections.get(topicId) ?? 0;
      const suggestionTypeCounts = topicSelectionTypeCounts.get(topicId) ?? new Map();

      let topSuggestionType: RecommendationType | null = null;
      let topSuggestionCount = 0;
      for (const [type, count] of suggestionTypeCounts.entries()) {
        if (count > topSuggestionCount) {
          topSuggestionType = type;
          topSuggestionCount = count;
        }
      }

      const suggestionMeta = topSuggestionType
        ? getRecommendationMeta(topSuggestionType)
        : null;

      return {
        topicId,
        moduleViews,
        recommendationImpressions,
        recommendationSelections,
        recommendationImpressionRateFromModuleView:
          moduleViews > 0
            ? Number((recommendationImpressions / moduleViews).toFixed(3))
            : null,
        recommendationSelectionRateFromImpression:
          recommendationImpressions > 0
            ? Number((recommendationSelections / recommendationImpressions).toFixed(3))
            : null,
        topSuggestionType,
        topSuggestionLabel: suggestionMeta?.label ?? null,
        topSuggestionIcon: suggestionMeta?.icon ?? null,
      };
    })
    .sort(
      (left, right) =>
        right.recommendationSelections - left.recommendationSelections ||
        right.recommendationImpressions - left.recommendationImpressions ||
        right.moduleViews - left.moduleViews ||
        left.topicId.localeCompare(right.topicId),
    );
}

function getSuggestionTypeRows(input: {
  viewsByType: Map<RecommendationType, number>;
  selectionsByType: Map<RecommendationType, number>;
  moduleViews: number;
}) {
  const { viewsByType, selectionsByType, moduleViews } = input;
  const typeSet = new Set<RecommendationType>([
    ...viewsByType.keys(),
    ...selectionsByType.keys(),
  ]);

  return Array.from(typeSet)
    .map((suggestionType) => {
      const viewCount = viewsByType.get(suggestionType) ?? 0;
      const selectionCount = selectionsByType.get(suggestionType) ?? 0;
      const meta = getRecommendationMeta(suggestionType);
      return {
        suggestionType,
        label: meta.label,
        icon: meta.icon,
        count: selectionCount,
        selectionCount,
        viewCount,
        impressionCount: viewCount,
        selectionRateFromTypeViews:
          viewCount > 0 ? Number((selectionCount / viewCount).toFixed(3)) : null,
        selectionRateFromModuleViews:
          moduleViews > 0 ? Number((selectionCount / moduleViews).toFixed(3)) : null,
      };
    })
    .sort(
      (left, right) =>
        right.selectionCount - left.selectionCount ||
        right.viewCount - left.viewCount ||
        left.label.localeCompare(right.label),
    );
}

function getRecommendationTrendBySuggestionTypeRows(input: {
  trendBySuggestionType: Map<
    RecommendationType,
    Map<string, { recommendationImpressions: number; recommendationSelections: number }>
  >;
  trendDayKeys: string[];
}) {
  const { trendBySuggestionType, trendDayKeys } = input;
  return Array.from(trendBySuggestionType.entries())
    .flatMap(([suggestionType, byDay]) => {
      const meta = getRecommendationMeta(suggestionType);
      return trendDayKeys
        .map((dayKey) => {
          const bucket = byDay.get(dayKey) ?? {
            recommendationImpressions: 0,
            recommendationSelections: 0,
          };
          return {
            date: dayKey,
            suggestionType,
            label: meta.label,
            icon: meta.icon,
            recommendationImpressions: bucket.recommendationImpressions,
            recommendationSelections: bucket.recommendationSelections,
            recommendationSelectionRateFromImpression:
              bucket.recommendationImpressions > 0
                ? Number(
                    (
                      bucket.recommendationSelections /
                      bucket.recommendationImpressions
                    ).toFixed(3),
                  )
                : null,
          } satisfies RecommendationTrendBySuggestionTypeRow;
        })
        .filter(
          (entry) =>
            entry.recommendationImpressions > 0 || entry.recommendationSelections > 0,
        );
    })
    .sort(
      (left, right) =>
        left.date.localeCompare(right.date) ||
        right.recommendationSelections - left.recommendationSelections ||
        left.label.localeCompare(right.label),
    );
}

function getMissionPrepByTopicRows(input: {
  topicMissionPrepSheetSelections: Map<string, number>;
  topicMissionPrepOpens: Map<string, number>;
  topicMissionPrepPrints: Map<string, number>;
}) {
  const {
    topicMissionPrepSheetSelections,
    topicMissionPrepOpens,
    topicMissionPrepPrints,
  } = input;

  const topicSet = new Set<string>([
    ...topicMissionPrepSheetSelections.keys(),
    ...topicMissionPrepOpens.keys(),
    ...topicMissionPrepPrints.keys(),
  ]);

  return Array.from(topicSet)
    .map((topicId) => {
      const sheetSelections = topicMissionPrepSheetSelections.get(topicId) ?? 0;
      const opens = topicMissionPrepOpens.get(topicId) ?? 0;
      const prints = topicMissionPrepPrints.get(topicId) ?? 0;
      return {
        topicId,
        sheetSelections,
        opens,
        prints,
        openRateFromSelection:
          sheetSelections > 0 ? Number((opens / sheetSelections).toFixed(3)) : null,
        printRateFromOpen: opens > 0 ? Number((prints / opens).toFixed(3)) : null,
        printRateFromSelection:
          sheetSelections > 0 ? Number((prints / sheetSelections).toFixed(3)) : null,
      } satisfies MissionPrepByTopicRow;
    })
    .sort(
      (left, right) =>
        right.prints - left.prints ||
        right.opens - left.opens ||
        right.sheetSelections - left.sheetSelections ||
        left.topicId.localeCompare(right.topicId),
    );
}

function incrementMissionPrepTrendByTopic(input: {
  map: Map<string, Map<string, { sheetSelections: number; opens: number; prints: number }>>;
  topicId: string | null;
  dayKey: string | null;
  metric: "sheetSelection" | "open" | "print";
}) {
  const { map, topicId, dayKey, metric } = input;
  const normalizedTopicId = normalizeKey(topicId);
  if (!normalizedTopicId || !dayKey) return;

  const byDay = map.get(normalizedTopicId) ?? new Map();
  const existing = byDay.get(dayKey) ?? {
    sheetSelections: 0,
    opens: 0,
    prints: 0,
  };
  const updated =
    metric === "sheetSelection"
      ? {
          sheetSelections: existing.sheetSelections + 1,
          opens: existing.opens,
          prints: existing.prints,
        }
      : metric === "open"
        ? {
            sheetSelections: existing.sheetSelections,
            opens: existing.opens + 1,
            prints: existing.prints,
          }
        : {
            sheetSelections: existing.sheetSelections,
            opens: existing.opens,
            prints: existing.prints + 1,
          };

  byDay.set(dayKey, updated);
  map.set(normalizedTopicId, byDay);
}

function getMissionPrepTrendByTopicRows(input: {
  trendByTopic: Map<
    string,
    Map<string, { sheetSelections: number; opens: number; prints: number }>
  >;
  trendDayKeys: string[];
}) {
  const { trendByTopic, trendDayKeys } = input;
  return Array.from(trendByTopic.entries())
    .flatMap(([topicId, byDay]) =>
      trendDayKeys
        .map((dayKey) => {
          const bucket = byDay.get(dayKey) ?? {
            sheetSelections: 0,
            opens: 0,
            prints: 0,
          };
          return {
            date: dayKey,
            topicId,
            sheetSelections: bucket.sheetSelections,
            opens: bucket.opens,
            prints: bucket.prints,
            openRateFromSelection:
              bucket.sheetSelections > 0
                ? Number((bucket.opens / bucket.sheetSelections).toFixed(3))
                : null,
            printRateFromOpen:
              bucket.opens > 0 ? Number((bucket.prints / bucket.opens).toFixed(3)) : null,
            printRateFromSelection:
              bucket.sheetSelections > 0
                ? Number((bucket.prints / bucket.sheetSelections).toFixed(3))
                : null,
          } satisfies MissionPrepTrendByTopicRow;
        })
        .filter(
          (entry) => entry.sheetSelections > 0 || entry.opens > 0 || entry.prints > 0,
        ),
    )
    .sort(
      (left, right) =>
        right.date.localeCompare(left.date) ||
        right.prints - left.prints ||
        right.opens - left.opens ||
        right.sheetSelections - left.sheetSelections ||
        left.topicId.localeCompare(right.topicId),
      );
}

function evaluateMissionPrepPerformance(input: {
  sheetSelections: number;
  openRateFromSelection: number | null;
  printRateFromOpen: number | null;
  thresholds: MissionPrepPerformanceThresholds;
}): MissionPrepPerformanceEvaluation {
  const { sheetSelections, openRateFromSelection, printRateFromOpen, thresholds } = input;
  if (sheetSelections < thresholds.minSheetSample) {
    return {
      status: "low_sample",
      reason: `Needs at least ${thresholds.minSheetSample} sheet selections.`,
      isFlagged: false,
    };
  }

  const reasons: string[] = [];
  if (
    openRateFromSelection !== null &&
    openRateFromSelection < thresholds.minOpenRateFromSelection
  ) {
    reasons.push(
      `Sheet->Open ${openRateFromSelection.toFixed(3)} below ${thresholds.minOpenRateFromSelection.toFixed(3)}.`,
    );
  }
  if (printRateFromOpen !== null && printRateFromOpen < thresholds.minPrintRateFromOpen) {
    reasons.push(
      `Open->Print ${printRateFromOpen.toFixed(3)} below ${thresholds.minPrintRateFromOpen.toFixed(3)}.`,
    );
  }

  if (reasons.length === 0) {
    return {
      status: "healthy",
      reason: "Rates are above configured thresholds.",
      isFlagged: false,
    };
  }
  if (reasons.length >= 2) {
    return {
      status: "critical",
      reason: reasons.join(" "),
      isFlagged: true,
    };
  }
  return {
    status: "watch",
    reason: reasons[0],
    isFlagged: true,
  };
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const { searchParams } = new URL(request.url);
  const days = parseDays(searchParams.get("days"));
  const requestedTopicFilter = parseTopicFilter(searchParams.get("topicId"));
  const format = normalizeKey(searchParams.get("format"));
  const exportType = normalizeKey(searchParams.get("export"));
  const wantsMissionPrepTrendByTopicCsv =
    format === "csv" && exportType === "mission_prep_trend_by_topic";
  const missionPrepThresholds = {
    minSheetSample: parseIntegerRange(searchParams.get("minSheetSample"), {
      defaultValue: 8,
      min: 1,
      max: 500,
    }),
    minOpenRateFromSelection: parseRateThreshold(
      searchParams.get("minOpenRateFromSelection"),
      0.6,
    ),
    minPrintRateFromOpen: parseRateThreshold(searchParams.get("minPrintRateFromOpen"), 0.5),
  } satisfies MissionPrepPerformanceThresholds;
  const missionPrepFlaggedOnly = parseBooleanFlag(searchParams.get("flaggedOnly"));
  const missionPrepIncludeStatus =
    parseBooleanFlag(searchParams.get("includeStatus")) || missionPrepFlaggedOnly;
  const availableTopicMeta = [...CANONICAL_EXPLORER_TOPICS];
  const availableTopics = availableTopicMeta.map((topic) => topic.id);
  const availableTopicSet = new Set(availableTopics);
  const topicFilter =
    requestedTopicFilter && availableTopicSet.has(requestedTopicFilter)
      ? requestedTopicFilter
      : null;
  const cutoffIso = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("learning_events")
    .select("user_id, module_id, lesson_id, event_type, event_at, payload")
    .gte("event_at", cutoffIso)
    .or("module_id.eq.explorer,lesson_id.ilike.explore:%")
    .order("event_at", { ascending: false })
    .limit(100000);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const rows = (data ?? []) as ExplorerEventRow[];
  const trendDayKeys = getTrendDayKeys(days);
  const trendBuckets = new Map<
    string,
    {
      moduleViews: number;
      recommendationImpressions: number;
      recommendationSelections: number;
      missionPrepSheetSelections: number;
      missionPrepOpens: number;
      missionPrepPrints: number;
    }
  >();
  for (const dayKey of trendDayKeys) {
    trendBuckets.set(dayKey, {
      moduleViews: 0,
      recommendationImpressions: 0,
      recommendationSelections: 0,
      missionPrepSheetSelections: 0,
      missionPrepOpens: 0,
      missionPrepPrints: 0,
    });
  }

  const uniqueUsers = new Set<string>();
  const byAction = new Map<string, number>();
  const byTopic = new Map<string, number>();
  const byModule = new Map<string, number>();
  const suggestionViewsByType = new Map<RecommendationType, number>();
  const suggestionSelectionsByType = new Map<RecommendationType, number>();
  const recommendationTrendBySuggestionType = new Map<
    RecommendationType,
    Map<string, { recommendationImpressions: number; recommendationSelections: number }>
  >();
  const topicModuleViews = new Map<string, number>();
  const topicRecommendationImpressions = new Map<string, number>();
  const topicRecommendationSelections = new Map<string, number>();
  const topicSelectionTypeCounts = new Map<string, Map<RecommendationType, number>>();
  const topicMissionPrepSheetSelections = new Map<string, number>();
  const topicMissionPrepOpens = new Map<string, number>();
  const topicMissionPrepPrints = new Map<string, number>();
  const missionPrepTrendByTopic = new Map<
    string,
    Map<string, { sheetSelections: number; opens: number; prints: number }>
  >();

  let lobbyViews = 0;
  let topicViews = 0;
  let moduleViews = 0;
  let worldSelections = 0;
  let questionSelections = 0;
  let portalSelections = 0;
  let moduleSelections = 0;
  let moduleLessonSelections = 0;
  let moduleRecommendedSelections = 0;
  let moduleRecommendationImpressions = 0;
  let missionPrepSheetSelections = 0;
  let missionPrepOpens = 0;
  let missionPrepPrints = 0;

  for (const row of rows) {
    const dayKey = toUtcDayKey(new Date(row.event_at));
    if (dayKey && !trendBuckets.has(dayKey)) {
      trendBuckets.set(dayKey, {
        moduleViews: 0,
        recommendationImpressions: 0,
        recommendationSelections: 0,
        missionPrepSheetSelections: 0,
        missionPrepOpens: 0,
        missionPrepPrints: 0,
      });
    }
    const trendBucket = dayKey ? trendBuckets.get(dayKey) : null;

    uniqueUsers.add(row.user_id);

    const action = getPayloadValue(row.payload, "action") ?? row.event_type;
    increment(byAction, action);

    const payloadTopic =
      getPayloadValue(row.payload, "topicId") ??
      getPayloadValue(row.payload, "targetTopicId");
    const topicFromLessonId = parseTopicFromLessonId(row.lesson_id);
    const normalizedTopicId = normalizeKey(payloadTopic ?? topicFromLessonId);
    if (topicFilter && normalizedTopicId !== topicFilter) {
      continue;
    }
    increment(byTopic, normalizedTopicId);
    const payloadModule = getPayloadValue(row.payload, "moduleId");
    const moduleFromLessonId = parseModuleFromLessonId(row.lesson_id);
    increment(byModule, payloadModule ?? moduleFromLessonId);
    const suggestionType = toRecommendationType(
      getPayloadValue(row.payload, "suggestionType") ??
        getPayloadValue(row.payload, "recommendationType"),
    );

    if (row.event_type === "lesson_viewed" && row.lesson_id === "explore:lobby") {
      lobbyViews += 1;
    }
    if (row.event_type === "lesson_viewed" && row.lesson_id.startsWith("explore:topic:")) {
      topicViews += 1;
    }
    if (row.event_type === "lesson_viewed" && row.lesson_id.startsWith("explore:module:")) {
      moduleViews += 1;
      if (trendBucket) {
        trendBucket.moduleViews += 1;
      }
      if (normalizedTopicId) {
        increment(topicModuleViews, normalizedTopicId);
      }
      const hasRecommendedLesson =
        getPayloadBoolean(row.payload, "hasRecommendedLesson") === true;
      if (hasRecommendedLesson || Boolean(suggestionType)) {
        moduleRecommendationImpressions += 1;
        if (trendBucket) {
          trendBucket.recommendationImpressions += 1;
        }
        if (normalizedTopicId) {
          increment(topicRecommendationImpressions, normalizedTopicId);
        }
        if (suggestionType) {
          incrementRecommendationTypeCount(suggestionViewsByType, suggestionType);
          incrementRecommendationTrendByType({
            map: recommendationTrendBySuggestionType,
            suggestionType,
            dayKey,
            metric: "impression",
          });
        }
      }
    }
    const payloadAction = getPayloadValue(row.payload, "action");
    if (payloadAction === "world_selected") {
      worldSelections += 1;
    }
    if (payloadAction === "question_selected") {
      questionSelections += 1;
    }
    if (payloadAction === "world_portal_selected") {
      portalSelections += 1;
    }
    if (payloadAction === "module_selected") {
      moduleSelections += 1;
    }
    if (payloadAction === "module_lesson_selected") {
      moduleLessonSelections += 1;
    }
    if (payloadAction === "module_recommended_selected") {
      moduleRecommendedSelections += 1;
      if (trendBucket) {
        trendBucket.recommendationSelections += 1;
      }
      if (normalizedTopicId) {
        increment(topicRecommendationSelections, normalizedTopicId);
      }
      if (suggestionType) {
        incrementRecommendationTypeCount(
          suggestionSelectionsByType,
          suggestionType,
        );
        incrementRecommendationTrendByType({
          map: recommendationTrendBySuggestionType,
          suggestionType,
          dayKey,
          metric: "selection",
        });
        if (normalizedTopicId) {
          incrementNestedRecommendationTypeCount(
            topicSelectionTypeCounts,
            normalizedTopicId,
            suggestionType,
          );
        }
      }
    }
    if (payloadAction === "mission_prep_sheet_selected") {
      missionPrepSheetSelections += 1;
      if (trendBucket) {
        trendBucket.missionPrepSheetSelections += 1;
      }
      incrementMissionPrepTrendByTopic({
        map: missionPrepTrendByTopic,
        topicId: normalizedTopicId,
        dayKey,
        metric: "sheetSelection",
      });
      if (normalizedTopicId) {
        increment(topicMissionPrepSheetSelections, normalizedTopicId);
      }
    }
    if (payloadAction === "mission_prep_opened") {
      missionPrepOpens += 1;
      if (trendBucket) {
        trendBucket.missionPrepOpens += 1;
      }
      incrementMissionPrepTrendByTopic({
        map: missionPrepTrendByTopic,
        topicId: normalizedTopicId,
        dayKey,
        metric: "open",
      });
      if (normalizedTopicId) {
        increment(topicMissionPrepOpens, normalizedTopicId);
      }
    }
    if (payloadAction === "mission_prep_printed") {
      missionPrepPrints += 1;
      if (trendBucket) {
        trendBucket.missionPrepPrints += 1;
      }
      incrementMissionPrepTrendByTopic({
        map: missionPrepTrendByTopic,
        topicId: normalizedTopicId,
        dayKey,
        metric: "print",
      });
      if (normalizedTopicId) {
        increment(topicMissionPrepPrints, normalizedTopicId);
      }
    }
  }

  const recommendationTrend: RecommendationTrendPoint[] = trendDayKeys.map((dayKey) => {
    const bucket = trendBuckets.get(dayKey) ?? {
      moduleViews: 0,
      recommendationImpressions: 0,
      recommendationSelections: 0,
      missionPrepSheetSelections: 0,
      missionPrepOpens: 0,
      missionPrepPrints: 0,
    };
    return {
      date: dayKey,
      moduleViews: bucket.moduleViews,
      recommendationImpressions: bucket.recommendationImpressions,
      recommendationSelections: bucket.recommendationSelections,
      recommendationImpressionRateFromModuleView:
        bucket.moduleViews > 0
          ? Number((bucket.recommendationImpressions / bucket.moduleViews).toFixed(3))
          : null,
      recommendationSelectionRateFromImpression:
        bucket.recommendationImpressions > 0
          ? Number(
              (bucket.recommendationSelections / bucket.recommendationImpressions).toFixed(3),
            )
          : null,
    };
  });

  const missionPrepTrend: MissionPrepTrendPoint[] = trendDayKeys.map((dayKey) => {
    const bucket = trendBuckets.get(dayKey) ?? {
      moduleViews: 0,
      recommendationImpressions: 0,
      recommendationSelections: 0,
      missionPrepSheetSelections: 0,
      missionPrepOpens: 0,
      missionPrepPrints: 0,
    };
    return {
      date: dayKey,
      sheetSelections: bucket.missionPrepSheetSelections,
      opens: bucket.missionPrepOpens,
      prints: bucket.missionPrepPrints,
      openRateFromSelection:
        bucket.missionPrepSheetSelections > 0
          ? Number((bucket.missionPrepOpens / bucket.missionPrepSheetSelections).toFixed(3))
          : null,
      printRateFromOpen:
        bucket.missionPrepOpens > 0
          ? Number((bucket.missionPrepPrints / bucket.missionPrepOpens).toFixed(3))
          : null,
      printRateFromSelection:
        bucket.missionPrepSheetSelections > 0
          ? Number((bucket.missionPrepPrints / bucket.missionPrepSheetSelections).toFixed(3))
          : null,
    };
  });

  const summary = {
    days,
    topicFilter,
    availableTopics,
    availableTopicMeta,
    cutoffIso,
    totalEvents: rows.length,
    uniqueUsers: uniqueUsers.size,
    funnel: {
      lobbyViews,
      worldSelections,
      topicViews,
      moduleViews,
      questionSelections,
      portalSelections,
      moduleSelections,
      moduleLessonSelections,
      moduleRecommendedSelections,
      moduleRecommendationImpressions,
      missionPrepSheetSelections,
      missionPrepOpens,
      missionPrepPrints,
      topicViewRateFromLobby:
        lobbyViews > 0 ? Number((topicViews / lobbyViews).toFixed(3)) : null,
      questionSelectionRateFromWorldSelect:
        worldSelections > 0
          ? Number((questionSelections / worldSelections).toFixed(3))
          : null,
      moduleViewRateFromTopicView:
        topicViews > 0 ? Number((moduleViews / topicViews).toFixed(3)) : null,
      moduleLessonSelectionRateFromModuleView:
        moduleViews > 0
          ? Number((moduleLessonSelections / moduleViews).toFixed(3))
          : null,
      moduleRecommendedSelectionRateFromModuleView:
        moduleViews > 0
          ? Number((moduleRecommendedSelections / moduleViews).toFixed(3))
          : null,
      moduleRecommendationImpressionRateFromModuleView:
        moduleViews > 0
          ? Number((moduleRecommendationImpressions / moduleViews).toFixed(3))
          : null,
      moduleRecommendedSelectionRateFromRecommendationImpression:
        moduleRecommendationImpressions > 0
          ? Number(
              (moduleRecommendedSelections / moduleRecommendationImpressions).toFixed(3),
            )
          : null,
      missionPrepSheetSelectionRateFromTopicView:
        topicViews > 0 ? Number((missionPrepSheetSelections / topicViews).toFixed(3)) : null,
      missionPrepOpenRateFromSheetSelection:
        missionPrepSheetSelections > 0
          ? Number((missionPrepOpens / missionPrepSheetSelections).toFixed(3))
          : null,
      missionPrepPrintRateFromOpen:
        missionPrepOpens > 0 ? Number((missionPrepPrints / missionPrepOpens).toFixed(3)) : null,
      missionPrepPrintRateFromSheetSelection:
        missionPrepSheetSelections > 0
          ? Number((missionPrepPrints / missionPrepSheetSelections).toFixed(3))
          : null,
    },
    byAction: toRankedRows(byAction, "action"),
    byTopic: toRankedRows(byTopic, "topicId"),
    byModule: toRankedRows(byModule, "moduleId"),
    bySuggestionType: getSuggestionTypeRows({
      viewsByType: suggestionViewsByType,
      selectionsByType: suggestionSelectionsByType,
      moduleViews,
    }),
    recommendationByTopic: getRecommendationByTopicRows({
      topicModuleViews,
      topicRecommendationImpressions,
      topicRecommendationSelections,
      topicSelectionTypeCounts,
    }),
    missionPrepByTopic: getMissionPrepByTopicRows({
      topicMissionPrepSheetSelections,
      topicMissionPrepOpens,
      topicMissionPrepPrints,
    }),
    missionPrepTrendByTopic: getMissionPrepTrendByTopicRows({
      trendByTopic: missionPrepTrendByTopic,
      trendDayKeys,
    }),
    missionPrepTrend,
    recommendationTrend,
    recommendationTrendBySuggestionType: getRecommendationTrendBySuggestionTypeRows({
      trendBySuggestionType: recommendationTrendBySuggestionType,
      trendDayKeys,
    }),
    recentEvents: rows.slice(0, 50).map((row) => ({
      eventAt: row.event_at,
      eventType: row.event_type,
      lessonId: row.lesson_id,
      action: getPayloadValue(row.payload, "action"),
      topicId:
        getPayloadValue(row.payload, "topicId") ??
        getPayloadValue(row.payload, "targetTopicId") ??
        parseTopicFromLessonId(row.lesson_id),
      moduleId:
        getPayloadValue(row.payload, "moduleId") ??
        parseModuleFromLessonId(row.lesson_id),
      destination: getPayloadValue(row.payload, "destination"),
    })),
  };

  if (wantsMissionPrepTrendByTopicCsv) {
    const topicTitleById = new Map(
      availableTopicMeta.map((topic) => [topic.id, topic.title]),
    );
    const scoredRows = summary.missionPrepTrendByTopic.map((row) => ({
      row,
      performance: evaluateMissionPrepPerformance({
        sheetSelections: row.sheetSelections,
        openRateFromSelection: row.openRateFromSelection,
        printRateFromOpen: row.printRateFromOpen,
        thresholds: missionPrepThresholds,
      }),
    }));
    const exportRows = missionPrepFlaggedOnly
      ? scoredRows.filter((entry) => entry.performance.isFlagged)
      : scoredRows;
    const defaultHeaders = [
      "date",
      "topic_id",
      "topic_title",
      "sheet_selections",
      "opens",
      "prints",
      "open_rate_from_selection",
      "print_rate_from_open",
      "print_rate_from_selection",
    ];
    const statusHeaders = missionPrepIncludeStatus
      ? [
          "status",
          "status_reason",
          "is_flagged",
          "threshold_min_sheet_sample",
          "threshold_min_open_rate_from_selection",
          "threshold_min_print_rate_from_open",
        ]
      : [];
    return toCsvResponse({
      filename: `explorer-mission-prep-daily-by-topic-${days}d-${topicFilter ?? "all-topics"}${missionPrepFlaggedOnly ? "-flagged" : ""}.csv`,
      headers: [...defaultHeaders, ...statusHeaders],
      rows: exportRows.map(({ row, performance }) => [
        row.date,
        row.topicId,
        topicTitleById.get(row.topicId) ?? row.topicId,
        row.sheetSelections,
        row.opens,
        row.prints,
        row.openRateFromSelection,
        row.printRateFromOpen,
        row.printRateFromSelection,
        ...(missionPrepIncludeStatus
          ? [
              performance.status,
              performance.reason,
              performance.isFlagged ? 1 : 0,
              missionPrepThresholds.minSheetSample,
              missionPrepThresholds.minOpenRateFromSelection,
              missionPrepThresholds.minPrintRateFromOpen,
            ]
          : []),
      ]),
    });
  }

  return NextResponse.json(summary);
}

