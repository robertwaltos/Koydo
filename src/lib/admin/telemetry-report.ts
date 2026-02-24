import { learningEventTypes, type LearningEventType } from "@/lib/analytics/learning-events";

export type LearningEventReportRow = {
  user_id: string;
  module_id: string | null;
  lesson_id: string;
  event_type: LearningEventType | string;
  event_at: string;
};

export type TelemetryDailyCsvRow = {
  day: string;
  event_type: string;
  event_count: number;
  unique_users: number;
  unique_modules: number;
  unique_lessons: number;
};

export type TelemetrySummary = {
  totalEvents: number;
  uniqueUsers: number;
  uniqueModules: number;
  uniqueLessons: number;
  eventTypeCounts: Record<string, number>;
  lessonViews: number;
  lessonCompletions: number;
  completionToViewRatio: number;
};

export function buildTelemetryDailyCsvRows(rows: LearningEventReportRow[]) {
  type AggregateBucket = {
    eventCount: number;
    userIds: Set<string>;
    moduleIds: Set<string>;
    lessonIds: Set<string>;
  };

  const bucketMap = new Map<string, AggregateBucket>();

  for (const row of rows) {
    const eventAt = new Date(row.event_at);
    if (Number.isNaN(eventAt.getTime())) {
      continue;
    }
    const day = eventAt.toISOString().slice(0, 10);
    const eventType = String(row.event_type || "unknown");
    const key = `${day}|${eventType}`;
    const bucket =
      bucketMap.get(key) ??
      (() => {
        const created = {
          eventCount: 0,
          userIds: new Set<string>(),
          moduleIds: new Set<string>(),
          lessonIds: new Set<string>(),
        };
        bucketMap.set(key, created);
        return created;
      })();

    bucket.eventCount += 1;
    if (row.user_id) bucket.userIds.add(row.user_id);
    if (row.module_id) bucket.moduleIds.add(row.module_id);
    if (row.lesson_id) bucket.lessonIds.add(row.lesson_id);
  }

  const normalizedRows: TelemetryDailyCsvRow[] = Array.from(bucketMap.entries()).map(
    ([key, value]) => {
      const [day, eventType] = key.split("|");
      return {
        day,
        event_type: eventType,
        event_count: value.eventCount,
        unique_users: value.userIds.size,
        unique_modules: value.moduleIds.size,
        unique_lessons: value.lessonIds.size,
      };
    },
  );

  const orderedTypes = new Map<string, number>(
    learningEventTypes.map((eventType, index) => [eventType, index]),
  );

  normalizedRows.sort((left, right) => {
    if (left.day !== right.day) {
      return left.day < right.day ? 1 : -1;
    }
    const leftOrder = orderedTypes.get(left.event_type) ?? 999;
    const rightOrder = orderedTypes.get(right.event_type) ?? 999;
    if (leftOrder !== rightOrder) return leftOrder - rightOrder;
    return left.event_type.localeCompare(right.event_type);
  });

  return normalizedRows;
}

export function buildTelemetrySummary(rows: LearningEventReportRow[]): TelemetrySummary {
  const userIds = new Set<string>();
  const moduleIds = new Set<string>();
  const lessonIds = new Set<string>();
  const eventTypeCounts: Record<string, number> = {};

  for (const row of rows) {
    if (row.user_id) userIds.add(row.user_id);
    if (row.module_id) moduleIds.add(row.module_id);
    if (row.lesson_id) lessonIds.add(row.lesson_id);
    const eventType = String(row.event_type || "unknown");
    eventTypeCounts[eventType] = (eventTypeCounts[eventType] ?? 0) + 1;
  }

  const lessonViews = eventTypeCounts.lesson_viewed ?? 0;
  const lessonCompletions = eventTypeCounts.lesson_completed ?? 0;
  const completionToViewRatio =
    lessonViews > 0 ? Number((lessonCompletions / lessonViews).toFixed(4)) : 0;

  return {
    totalEvents: rows.length,
    uniqueUsers: userIds.size,
    uniqueModules: moduleIds.size,
    uniqueLessons: lessonIds.size,
    eventTypeCounts,
    lessonViews,
    lessonCompletions,
    completionToViewRatio,
  };
}
