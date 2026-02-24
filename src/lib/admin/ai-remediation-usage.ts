import type { SupabaseClient } from "@supabase/supabase-js";

export type AiRemediationUsageTopLesson = {
  lessonId: string;
  worksheets: number;
};

export type AiRemediationTopLessonMetric = {
  lessonId: string;
  count: number;
};

export type AiRemediationUsageDailyPoint = {
  day: string;
  generated: number;
  downloaded: number;
  completed: number;
  failed: number;
};

export type AiRemediationUsageSummary = {
  generatedAt: string;
  setupRequired: boolean;
  message?: string;
  generatedToday: number;
  generated7d: number;
  viewedToday: number;
  downloadedToday: number;
  downloaded7d: number;
  completedToday: number;
  completed7d: number;
  activeUsersToday: number;
  failedToday: number;
  completionRateToday: number;
  viewToDownloadRateToday: number;
  downloadToCompletionRateToday: number;
  sampledGeneratedRows: number;
  rowsTruncated: boolean;
  topLessons: AiRemediationUsageTopLesson[];
};

function getStartOfUtcDayIso() {
  const now = new Date();
  const start = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0),
  );
  return start.toISOString();
}

function isMissingWorksheetTableError(message: string | undefined) {
  if (!message) return false;
  const normalized = message.toLowerCase();
  return (
    normalized.includes("ai_remediation_worksheets") &&
    (normalized.includes("does not exist") ||
      normalized.includes("could not find the table") ||
      normalized.includes("relation"))
  );
}

function getStartOfUtcDay(date: Date) {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0, 0),
  );
}

function formatIsoDay(date: Date) {
  return date.toISOString().slice(0, 10);
}

function asDate(value: string | null | undefined) {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function withinRangeInclusive(date: Date, min: Date, max: Date) {
  return date.getTime() >= min.getTime() && date.getTime() <= max.getTime();
}

export async function loadAiRemediationUsageSummary(
  admin: SupabaseClient,
  options?: { maxSampleRows?: number },
): Promise<AiRemediationUsageSummary> {
  const generatedAt = new Date().toISOString();
  const startOfDayIso = getStartOfUtcDayIso();
  const sevenDayCutoff = new Date();
  sevenDayCutoff.setUTCDate(sevenDayCutoff.getUTCDate() - 7);
  const sevenDayCutoffIso = sevenDayCutoff.toISOString();
  const maxSampleRows = Math.max(500, Math.min(20000, Number(options?.maxSampleRows ?? 5000)));

  const [generatedResult, generated7dResult, viewedResult, downloadedResult, downloaded7dResult, completedResult, completed7dResult, failedResult] =
    await Promise.all([
      admin
        .from("ai_remediation_worksheets")
        .select("user_id, lesson_id", { count: "exact" })
        .eq("status", "completed")
        .gte("created_at", startOfDayIso)
        .limit(maxSampleRows),
      admin
        .from("ai_remediation_worksheets")
        .select("id", { count: "exact", head: true })
        .eq("status", "completed")
        .gte("created_at", sevenDayCutoffIso),
      admin
        .from("ai_remediation_worksheets")
        .select("id", { count: "exact", head: true })
        .not("viewed_at", "is", null)
        .gte("viewed_at", startOfDayIso),
      admin
        .from("ai_remediation_worksheets")
        .select("id", { count: "exact", head: true })
        .not("downloaded_at", "is", null)
        .gte("downloaded_at", startOfDayIso),
      admin
        .from("ai_remediation_worksheets")
        .select("id", { count: "exact", head: true })
        .not("downloaded_at", "is", null)
        .gte("downloaded_at", sevenDayCutoffIso),
      admin
        .from("ai_remediation_worksheets")
        .select("id", { count: "exact", head: true })
        .not("completed_at", "is", null)
        .gte("completed_at", startOfDayIso),
      admin
        .from("ai_remediation_worksheets")
        .select("id", { count: "exact", head: true })
        .not("completed_at", "is", null)
        .gte("completed_at", sevenDayCutoffIso),
      admin
        .from("ai_remediation_worksheets")
        .select("id", { count: "exact", head: true })
        .eq("status", "failed")
        .gte("updated_at", startOfDayIso),
    ]);

  if (generatedResult.error) {
    if (isMissingWorksheetTableError(generatedResult.error.message)) {
      return {
        generatedAt,
        setupRequired: true,
        message: "Remediation worksheet table is not available. Apply latest Supabase schema.",
        generatedToday: 0,
        generated7d: 0,
        viewedToday: 0,
        downloadedToday: 0,
        downloaded7d: 0,
        completedToday: 0,
        completed7d: 0,
        activeUsersToday: 0,
        failedToday: 0,
        completionRateToday: 0,
        viewToDownloadRateToday: 0,
        downloadToCompletionRateToday: 0,
        sampledGeneratedRows: 0,
        rowsTruncated: false,
        topLessons: [],
      };
    }
    throw new Error(generatedResult.error.message);
  }

  for (const result of [generated7dResult, viewedResult, downloadedResult, downloaded7dResult, completedResult, completed7dResult, failedResult]) {
    if (result.error) {
      if (isMissingWorksheetTableError(result.error.message)) {
        return {
          generatedAt,
          setupRequired: true,
          message: "Remediation worksheet table is not available. Apply latest Supabase schema.",
          generatedToday: 0,
          generated7d: 0,
          viewedToday: 0,
          downloadedToday: 0,
          downloaded7d: 0,
          completedToday: 0,
          completed7d: 0,
          activeUsersToday: 0,
          failedToday: 0,
          completionRateToday: 0,
          viewToDownloadRateToday: 0,
          downloadToCompletionRateToday: 0,
          sampledGeneratedRows: 0,
          rowsTruncated: false,
          topLessons: [],
        };
      }
      throw new Error(result.error.message);
    }
  }

  const generatedRows = (generatedResult.data ?? []) as Array<{
    user_id: string;
    lesson_id: string;
  }>;
  const sampledGeneratedRows = generatedRows.length;
  const generatedToday = Math.max(0, Number(generatedResult.count ?? sampledGeneratedRows));
  const generated7d = Math.max(0, Number(generated7dResult.count ?? 0));
  const rowsTruncated = sampledGeneratedRows >= maxSampleRows && generatedToday > sampledGeneratedRows;
  const viewedToday = Math.max(0, Number(viewedResult.count ?? 0));
  const downloadedToday = Math.max(0, Number(downloadedResult.count ?? 0));
  const downloaded7d = Math.max(0, Number(downloaded7dResult.count ?? 0));
  const completedToday = Math.max(0, Number(completedResult.count ?? 0));
  const completed7d = Math.max(0, Number(completed7dResult.count ?? 0));
  const failedToday = Math.max(0, Number(failedResult.count ?? 0));
  const completionRateToday = generatedToday > 0 ? Math.round((completedToday / generatedToday) * 100) : 0;
  const viewToDownloadRateToday =
    viewedToday > 0 ? Math.round((downloadedToday / viewedToday) * 100) : 0;
  const downloadToCompletionRateToday =
    downloadedToday > 0 ? Math.round((completedToday / downloadedToday) * 100) : 0;

  const userSet = new Set(generatedRows.map((row) => row.user_id));
  const byLesson = new Map<string, number>();
  for (const row of generatedRows) {
    byLesson.set(row.lesson_id, (byLesson.get(row.lesson_id) ?? 0) + 1);
  }
  const topLessons = Array.from(byLesson.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([lessonId, worksheets]) => ({
      lessonId,
      worksheets,
    }));

  return {
    generatedAt,
    setupRequired: false,
    generatedToday,
    generated7d,
    viewedToday,
    downloadedToday,
    downloaded7d,
    completedToday,
    completed7d,
    activeUsersToday: userSet.size,
    failedToday,
    completionRateToday,
    viewToDownloadRateToday,
    downloadToCompletionRateToday,
    sampledGeneratedRows,
    rowsTruncated,
    topLessons,
  };
}

export async function loadAiRemediationUsageTimeseries(
  admin: SupabaseClient,
  options?: { days?: number; maxSampleRows?: number },
): Promise<{
  generatedAt: string;
  setupRequired: boolean;
  message?: string;
  days: number;
  points: AiRemediationUsageDailyPoint[];
  rowsTruncated: boolean;
}> {
  const generatedAt = new Date().toISOString();
  const days = Math.max(1, Math.min(30, Number(options?.days ?? 14)));
  const maxSampleRows = Math.max(2000, Math.min(100000, Number(options?.maxSampleRows ?? 30000)));
  const now = new Date();
  const endDay = getStartOfUtcDay(now);
  const startDay = new Date(endDay);
  startDay.setUTCDate(startDay.getUTCDate() - (days - 1));
  const endExclusive = new Date(endDay);
  endExclusive.setUTCDate(endExclusive.getUTCDate() + 1);
  const startIso = startDay.toISOString();

  const [generatedRowsResult, downloadedRowsResult, completedRowsResult, failedRowsResult] =
    await Promise.all([
      admin
        .from("ai_remediation_worksheets")
        .select("created_at")
        .eq("status", "completed")
        .gte("created_at", startIso)
        .order("created_at", { ascending: false })
        .limit(maxSampleRows),
      admin
        .from("ai_remediation_worksheets")
        .select("downloaded_at")
        .not("downloaded_at", "is", null)
        .gte("downloaded_at", startIso)
        .order("downloaded_at", { ascending: false })
        .limit(maxSampleRows),
      admin
        .from("ai_remediation_worksheets")
        .select("completed_at")
        .not("completed_at", "is", null)
        .gte("completed_at", startIso)
        .order("completed_at", { ascending: false })
        .limit(maxSampleRows),
      admin
        .from("ai_remediation_worksheets")
        .select("updated_at")
        .eq("status", "failed")
        .gte("updated_at", startIso)
        .order("updated_at", { ascending: false })
        .limit(maxSampleRows),
    ]);

  const errorResult = [generatedRowsResult, downloadedRowsResult, completedRowsResult, failedRowsResult].find(
    (result) => result.error,
  );
  if (errorResult?.error) {
    if (isMissingWorksheetTableError(errorResult.error.message)) {
      return {
        generatedAt,
        setupRequired: true,
        message: "Remediation worksheet table is not available. Apply latest Supabase schema.",
        days,
        points: [],
        rowsTruncated: false,
      };
    }
    throw new Error(errorResult.error.message);
  }

  const pointsMap = new Map<string, AiRemediationUsageDailyPoint>();
  for (let offset = 0; offset < days; offset += 1) {
    const dayDate = new Date(startDay);
    dayDate.setUTCDate(dayDate.getUTCDate() + offset);
    const day = formatIsoDay(dayDate);
    pointsMap.set(day, {
      day,
      generated: 0,
      downloaded: 0,
      completed: 0,
      failed: 0,
    });
  }

  const increment = (isoDate: string | null | undefined, key: keyof Omit<AiRemediationUsageDailyPoint, "day">) => {
    const parsed = asDate(isoDate);
    if (!parsed || !withinRangeInclusive(parsed, startDay, endExclusive)) return;
    const bucket = pointsMap.get(formatIsoDay(parsed));
    if (!bucket) return;
    bucket[key] += 1;
  };

  for (const row of (generatedRowsResult.data ?? []) as Array<{ created_at: string }>) {
    increment(row.created_at, "generated");
  }
  for (const row of (downloadedRowsResult.data ?? []) as Array<{ downloaded_at: string | null }>) {
    increment(row.downloaded_at, "downloaded");
  }
  for (const row of (completedRowsResult.data ?? []) as Array<{ completed_at: string | null }>) {
    increment(row.completed_at, "completed");
  }
  for (const row of (failedRowsResult.data ?? []) as Array<{ updated_at: string }>) {
    increment(row.updated_at, "failed");
  }

  const rowsTruncated = [generatedRowsResult, downloadedRowsResult, completedRowsResult, failedRowsResult].some(
    (result) => (result.data?.length ?? 0) >= maxSampleRows,
  );

  return {
    generatedAt,
    setupRequired: false,
    days,
    points: Array.from(pointsMap.values()).sort((a, b) => a.day.localeCompare(b.day)),
    rowsTruncated,
  };
}

export async function loadAiRemediationTopLessons(
  admin: SupabaseClient,
  options?: { days?: number; topN?: number; maxSampleRows?: number },
): Promise<{
  generatedAt: string;
  setupRequired: boolean;
  message?: string;
  days: number;
  topDownloaded: AiRemediationTopLessonMetric[];
  topCompleted: AiRemediationTopLessonMetric[];
  rowsTruncated: boolean;
}> {
  const generatedAt = new Date().toISOString();
  const days = Math.max(1, Math.min(30, Number(options?.days ?? 14)));
  const topN = Math.max(1, Math.min(20, Number(options?.topN ?? 10)));
  const maxSampleRows = Math.max(2000, Math.min(100000, Number(options?.maxSampleRows ?? 30000)));
  const cutoffDate = new Date();
  cutoffDate.setUTCDate(cutoffDate.getUTCDate() - days);
  const cutoffIso = cutoffDate.toISOString();

  const [downloadRowsResult, completeRowsResult] = await Promise.all([
    admin
      .from("ai_remediation_worksheets")
      .select("lesson_id, downloaded_at")
      .not("downloaded_at", "is", null)
      .gte("downloaded_at", cutoffIso)
      .order("downloaded_at", { ascending: false })
      .limit(maxSampleRows),
    admin
      .from("ai_remediation_worksheets")
      .select("lesson_id, completed_at")
      .not("completed_at", "is", null)
      .gte("completed_at", cutoffIso)
      .order("completed_at", { ascending: false })
      .limit(maxSampleRows),
  ]);

  const errorResult = [downloadRowsResult, completeRowsResult].find((result) => result.error);
  if (errorResult?.error) {
    if (isMissingWorksheetTableError(errorResult.error.message)) {
      return {
        generatedAt,
        setupRequired: true,
        message: "Remediation worksheet table is not available. Apply latest Supabase schema.",
        days,
        topDownloaded: [],
        topCompleted: [],
        rowsTruncated: false,
      };
    }
    throw new Error(errorResult.error.message);
  }

  const byDownloaded = new Map<string, number>();
  const byCompleted = new Map<string, number>();

  for (const row of (downloadRowsResult.data ?? []) as Array<{ lesson_id: string }>) {
    byDownloaded.set(row.lesson_id, (byDownloaded.get(row.lesson_id) ?? 0) + 1);
  }
  for (const row of (completeRowsResult.data ?? []) as Array<{ lesson_id: string }>) {
    byCompleted.set(row.lesson_id, (byCompleted.get(row.lesson_id) ?? 0) + 1);
  }

  const topDownloaded = Array.from(byDownloaded.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([lessonId, count]) => ({ lessonId, count }));

  const topCompleted = Array.from(byCompleted.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([lessonId, count]) => ({ lessonId, count }));

  const rowsTruncated =
    (downloadRowsResult.data?.length ?? 0) >= maxSampleRows ||
    (completeRowsResult.data?.length ?? 0) >= maxSampleRows;

  return {
    generatedAt,
    setupRequired: false,
    days,
    topDownloaded,
    topCompleted,
    rowsTruncated,
  };
}
