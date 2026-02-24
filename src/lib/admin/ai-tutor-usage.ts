import type { SupabaseClient } from "@supabase/supabase-js";
import { serverEnv } from "@/lib/config/env";

export type AiTutorUsageTopUser = {
  userId: string;
  questions: number;
};

export type AiTutorUsageSummary = {
  generatedAt: string;
  setupRequired: boolean;
  message?: string;
  dailyLimit: number;
  usageTracked: boolean;
  questionsToday: number;
  answersToday: number;
  activeUsersToday: number;
  usersAtOrAboveLimit: number;
  sampledQuestionRows: number;
  rowsTruncated: boolean;
  topUsers: AiTutorUsageTopUser[];
};

function getStartOfUtcDayIso() {
  const now = new Date();
  const start = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0),
  );
  return start.toISOString();
}

function isMissingTutorTableError(message: string | undefined) {
  if (!message) return false;
  const normalized = message.toLowerCase();
  return (
    normalized.includes("ai_tutor_conversations") &&
    (normalized.includes("does not exist") ||
      normalized.includes("could not find the table") ||
      normalized.includes("relation"))
  );
}

export async function loadAiTutorUsageSummary(
  admin: SupabaseClient,
  options?: { maxSampleRows?: number },
): Promise<AiTutorUsageSummary> {
  const generatedAt = new Date().toISOString();
  const dailyLimit = Math.max(0, Number(serverEnv.AI_TUTOR_DAILY_LIMIT ?? 0));
  const maxSampleRows = Math.max(500, Math.min(20000, Number(options?.maxSampleRows ?? 5000)));
  const startOfDayIso = getStartOfUtcDayIso();

  const [questionsResult, answersResult] = await Promise.all([
    admin
      .from("ai_tutor_conversations")
      .select("user_id", { count: "exact" })
      .eq("role", "user")
      .gte("created_at", startOfDayIso)
      .limit(maxSampleRows),
    admin
      .from("ai_tutor_conversations")
      .select("id", { count: "exact", head: true })
      .eq("role", "assistant")
      .gte("created_at", startOfDayIso),
  ]);

  if (questionsResult.error) {
    if (isMissingTutorTableError(questionsResult.error.message)) {
      return {
        generatedAt,
        setupRequired: true,
        message: "Tutor usage tracking table is not available. Apply latest Supabase schema.",
        dailyLimit,
        usageTracked: false,
        questionsToday: 0,
        answersToday: 0,
        activeUsersToday: 0,
        usersAtOrAboveLimit: 0,
        sampledQuestionRows: 0,
        rowsTruncated: false,
        topUsers: [],
      };
    }
    throw new Error(questionsResult.error.message);
  }

  if (answersResult.error) {
    if (isMissingTutorTableError(answersResult.error.message)) {
      return {
        generatedAt,
        setupRequired: true,
        message: "Tutor usage tracking table is not available. Apply latest Supabase schema.",
        dailyLimit,
        usageTracked: false,
        questionsToday: 0,
        answersToday: 0,
        activeUsersToday: 0,
        usersAtOrAboveLimit: 0,
        sampledQuestionRows: 0,
        rowsTruncated: false,
        topUsers: [],
      };
    }
    throw new Error(answersResult.error.message);
  }

  const sampledRows = (questionsResult.data ?? []) as Array<{ user_id: string }>;
  const sampledQuestionRows = sampledRows.length;
  const questionsToday = Math.max(0, Number(questionsResult.count ?? sampledQuestionRows));
  const answersToday = Math.max(0, Number(answersResult.count ?? 0));
  const rowsTruncated = sampledQuestionRows >= maxSampleRows && questionsToday > sampledQuestionRows;

  const counts = new Map<string, number>();
  for (const row of sampledRows) {
    const current = counts.get(row.user_id) ?? 0;
    counts.set(row.user_id, current + 1);
  }

  const topUsers = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([userId, questions]) => ({
      userId,
      questions,
    }));

  const usersAtOrAboveLimit =
    dailyLimit > 0
      ? Array.from(counts.values()).filter((value) => value >= dailyLimit).length
      : 0;

  return {
    generatedAt,
    setupRequired: false,
    dailyLimit,
    usageTracked: true,
    questionsToday,
    answersToday,
    activeUsersToday: counts.size,
    usersAtOrAboveLimit,
    sampledQuestionRows,
    rowsTruncated,
    topUsers,
  };
}
