/**
 * Leaderboard computation from validated gamification_states and learning_events.
 *
 * Supports multiple board types:
 *  - xp:     Total points from gamification_states
 *  - streak: Current daily streak
 *  - weekly: Points earned in the last 7 days (from gamification_events)
 *  - lessons: Completed lessons count (from learning_events)
 */

import type { SupabaseClient } from "@supabase/supabase-js";

export type LeaderboardScope =
  | { kind: "global" }
  | { kind: "circle"; circleId: string }
  | { kind: "class"; classId: string };

export type LeaderboardMetric = "xp" | "streak" | "weekly_xp" | "lessons";

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  value: number;
  rank: number;
  isCurrentUser: boolean;
}

export interface LeaderboardResult {
  metric: LeaderboardMetric;
  scope: LeaderboardScope;
  entries: LeaderboardEntry[];
  currentUserRank: number | null;
  updatedAt: string;
}

/**
 * Fetch leaderboard for a given metric and scope.
 * All queries use validated data only — no client-reported scores.
 */
export async function getLeaderboard(
  supabase: SupabaseClient,
  currentUserId: string,
  metric: LeaderboardMetric,
  scope: LeaderboardScope,
  limit = 25,
): Promise<LeaderboardResult> {
  let entries: LeaderboardEntry[];

  switch (metric) {
    case "xp":
      entries = await getXpLeaderboard(supabase, currentUserId, scope, limit);
      break;
    case "streak":
      entries = await getStreakLeaderboard(supabase, currentUserId, scope, limit);
      break;
    case "weekly_xp":
      entries = await getWeeklyXpLeaderboard(supabase, currentUserId, scope, limit);
      break;
    case "lessons":
      entries = await getLessonsLeaderboard(supabase, currentUserId, scope, limit);
      break;
    default:
      entries = [];
  }

  const currentUserRank =
    entries.find((e) => e.isCurrentUser)?.rank ?? null;

  return {
    metric,
    scope,
    entries,
    currentUserRank,
    updatedAt: new Date().toISOString(),
  };
}

// ── XP leaderboard (total points) ─────────────────────────────────

async function getXpLeaderboard(
  supabase: SupabaseClient,
  currentUserId: string,
  scope: LeaderboardScope,
  limit: number,
): Promise<LeaderboardEntry[]> {
  let query = supabase
    .from("gamification_states")
    .select("user_id, points")
    .order("points", { ascending: false })
    .limit(limit);

  query = applyScopeFilter(query, scope, "user_id");

  const { data } = await query;
  if (!data) return [];

  return (data as { user_id: string; points: number }[]).map((row, i) => ({
    userId: row.user_id,
    displayName: anonymizeUserId(row.user_id),
    value: row.points,
    rank: i + 1,
    isCurrentUser: row.user_id === currentUserId,
  }));
}

// ── Streak leaderboard ─────────────────────────────────────────────

async function getStreakLeaderboard(
  supabase: SupabaseClient,
  currentUserId: string,
  scope: LeaderboardScope,
  limit: number,
): Promise<LeaderboardEntry[]> {
  let query = supabase
    .from("gamification_states")
    .select("user_id, streaks")
    .order("last_activity_at", { ascending: false })
    .limit(limit * 2); // fetch extra to allow sorting by streak

  query = applyScopeFilter(query, scope, "user_id");

  const { data } = await query;
  if (!data) return [];

  const rows = (data as { user_id: string; streaks: { daily?: number } }[])
    .map((row) => ({
      userId: row.user_id,
      dailyStreak: row.streaks?.daily ?? 0,
    }))
    .sort((a, b) => b.dailyStreak - a.dailyStreak)
    .slice(0, limit);

  return rows.map((row, i) => ({
    userId: row.userId,
    displayName: anonymizeUserId(row.userId),
    value: row.dailyStreak,
    rank: i + 1,
    isCurrentUser: row.userId === currentUserId,
  }));
}

// ── Weekly XP (from gamification_events) ───────────────────────────

async function getWeeklyXpLeaderboard(
  supabase: SupabaseClient,
  currentUserId: string,
  scope: LeaderboardScope,
  limit: number,
): Promise<LeaderboardEntry[]> {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  let query = supabase
    .from("gamification_events")
    .select("user_id, metadata")
    .eq("event_type", "points_awarded")
    .gte("created_at", oneWeekAgo.toISOString())
    .limit(5000); // reasonable cap

  query = applyScopeFilter(query, scope, "user_id");

  const { data } = await query;
  if (!data) return [];

  // Aggregate points per user
  const totals = new Map<string, number>();
  for (const row of data as { user_id: string; metadata: { points?: number } }[]) {
    const pts = row.metadata?.points ?? 0;
    totals.set(row.user_id, (totals.get(row.user_id) ?? 0) + pts);
  }

  const sorted = [...totals.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);

  return sorted.map(([userId, value], i) => ({
    userId,
    displayName: anonymizeUserId(userId),
    value,
    rank: i + 1,
    isCurrentUser: userId === currentUserId,
  }));
}

// ── Lessons completed leaderboard ──────────────────────────────────

async function getLessonsLeaderboard(
  supabase: SupabaseClient,
  currentUserId: string,
  scope: LeaderboardScope,
  limit: number,
): Promise<LeaderboardEntry[]> {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  let query = supabase
    .from("learning_events")
    .select("user_id")
    .eq("event_type", "lesson_completed")
    .gte("event_at", thirtyDaysAgo.toISOString())
    .limit(10000);

  query = applyScopeFilter(query, scope, "user_id");

  const { data } = await query;
  if (!data) return [];

  const counts = new Map<string, number>();
  for (const row of data as { user_id: string }[]) {
    counts.set(row.user_id, (counts.get(row.user_id) ?? 0) + 1);
  }

  const sorted = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);

  return sorted.map(([userId, value], i) => ({
    userId,
    displayName: anonymizeUserId(userId),
    value,
    rank: i + 1,
    isCurrentUser: userId === currentUserId,
  }));
}

// ── Helpers ────────────────────────────────────────────────────────

function applyScopeFilter<T extends { in: (col: string, values: string[]) => T }>(
  query: T,
  scope: LeaderboardScope,
  userCol: string,
): T {
  // Scope filtering is handled at the API layer by pre-fetching member IDs
  // and passing them via .in() filter. This function is a placeholder for
  // the pattern — actual scoping is done in the API route.
  return query;
}

/**
 * Privacy-safe display name: first 4 chars of UUID + "..."
 * The API layer can replace this with actual display names
 * for users who have opted in to public profiles.
 */
function anonymizeUserId(userId: string): string {
  return `User-${userId.slice(0, 4)}`;
}

/**
 * Get user IDs for a given scope (circle or class members).
 * Called at the API layer before querying leaderboards.
 */
export async function getScopeMemberIds(
  supabase: SupabaseClient,
  scope: LeaderboardScope,
): Promise<string[]> {
  if (scope.kind === "global") return []; // no filter

  if (scope.kind === "circle") {
    const { data } = await supabase
      .from("study_circle_members")
      .select("user_id")
      .eq("circle_id", scope.circleId);
    return (data ?? []).map((r: { user_id: string }) => r.user_id);
  }

  if (scope.kind === "class") {
    const { data } = await supabase
      .from("class_enrollments")
      .select("learner_user_id")
      .eq("class_id", scope.classId);
    return (data ?? []).map((r: { learner_user_id: string }) => r.learner_user_id);
  }

  return [];
}

/**
 * Generate a random 6-char invite code for study circles.
 */
export function generateInviteCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I confusion
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}
