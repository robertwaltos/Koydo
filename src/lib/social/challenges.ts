/**
 * Challenge management utilities.
 */

import type { SupabaseClient } from "@supabase/supabase-js";

export type ChallengeType = "xp_race" | "lesson_count" | "streak" | "quiz_score";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  circleId: string | null;
  challengeType: ChallengeType;
  targetValue: number;
  subject: string | null;
  startsAt: string;
  endsAt: string;
  status: "draft" | "active" | "completed" | "cancelled";
  maxParticipants: number;
  participantCount: number;
  createdAt: string;
}

export interface ChallengeParticipant {
  userId: string;
  currentValue: number;
  rank: number;
  completed: boolean;
  joinedAt: string;
}

export interface CreateChallengeInput {
  title: string;
  description?: string;
  circleId?: string;
  challengeType: ChallengeType;
  targetValue: number;
  subject?: string;
  endsAt: string; // ISO datetime
  maxParticipants?: number;
}

/**
 * Create a challenge and auto-join the creator.
 */
export async function createChallenge(
  supabase: SupabaseClient,
  userId: string,
  input: CreateChallengeInput,
): Promise<{ challenge: Challenge | null; error: string | null }> {
  const endsAt = new Date(input.endsAt);
  const now = new Date();

  if (endsAt <= now) {
    return { challenge: null, error: "End date must be in the future." };
  }

  // Max 7-day challenges
  const maxEnd = new Date(now);
  maxEnd.setDate(maxEnd.getDate() + 7);
  if (endsAt > maxEnd) {
    return { challenge: null, error: "Challenges can last at most 7 days." };
  }

  const { data, error } = await supabase
    .from("challenges")
    .insert({
      title: input.title.trim(),
      description: (input.description ?? "").trim(),
      created_by: userId,
      circle_id: input.circleId || null,
      challenge_type: input.challengeType,
      target_value: Math.max(1, Math.min(input.targetValue, 10000)),
      subject: input.subject?.trim() || null,
      starts_at: now.toISOString(),
      ends_at: endsAt.toISOString(),
      status: "active",
      max_participants: Math.min(input.maxParticipants ?? 50, 200),
    })
    .select()
    .single();

  if (error) {
    return { challenge: null, error: error.message };
  }

  // Auto-join creator
  await supabase.from("challenge_participants").insert({
    challenge_id: data.id,
    user_id: userId,
    current_value: 0,
  });

  return {
    challenge: mapChallengeRow(data, 1),
    error: null,
  };
}

/**
 * Join a challenge.
 */
export async function joinChallenge(
  supabase: SupabaseClient,
  userId: string,
  challengeId: string,
): Promise<{ error: string | null }> {
  const { data: challenge } = await supabase
    .from("challenges")
    .select("id, status, max_participants, ends_at")
    .eq("id", challengeId)
    .single();

  if (!challenge) return { error: "Challenge not found." };
  if (challenge.status !== "active") return { error: "Challenge is not active." };
  if (new Date(challenge.ends_at) < new Date()) return { error: "Challenge has ended." };

  const { count } = await supabase
    .from("challenge_participants")
    .select("id", { count: "exact", head: true })
    .eq("challenge_id", challengeId);

  if ((count ?? 0) >= challenge.max_participants) {
    return { error: "Challenge is full." };
  }

  const { error } = await supabase.from("challenge_participants").upsert(
    {
      challenge_id: challengeId,
      user_id: userId,
      current_value: 0,
    },
    { onConflict: "challenge_id,user_id" },
  );

  return { error: error?.message ?? null };
}

/**
 * Get challenge leaderboard (ranked participants).
 */
export async function getChallengeLeaderboard(
  supabase: SupabaseClient,
  challengeId: string,
): Promise<ChallengeParticipant[]> {
  const { data } = await supabase
    .from("challenge_participants")
    .select("user_id, current_value, completed, joined_at")
    .eq("challenge_id", challengeId)
    .order("current_value", { ascending: false })
    .limit(100);

  if (!data) return [];

  return data.map(
    (
      row: {
        user_id: string;
        current_value: number;
        completed: boolean;
        joined_at: string;
      },
      i: number,
    ) => ({
      userId: row.user_id,
      currentValue: row.current_value,
      rank: i + 1,
      completed: row.completed,
      joinedAt: row.joined_at,
    }),
  );
}

/**
 * Update a participant's progress (called server-side after events).
 */
export async function updateChallengeProgress(
  supabase: SupabaseClient,
  challengeId: string,
  userId: string,
  incrementValue: number,
): Promise<void> {
  const { data: challenge } = await supabase
    .from("challenges")
    .select("target_value, status")
    .eq("id", challengeId)
    .single();

  if (!challenge || challenge.status !== "active") return;

  const { data: participant } = await supabase
    .from("challenge_participants")
    .select("current_value")
    .eq("challenge_id", challengeId)
    .eq("user_id", userId)
    .single();

  if (!participant) return;

  const newValue = participant.current_value + incrementValue;
  const completed = newValue >= challenge.target_value;

  await supabase
    .from("challenge_participants")
    .update({
      current_value: newValue,
      completed,
      last_updated_at: new Date().toISOString(),
    })
    .eq("challenge_id", challengeId)
    .eq("user_id", userId);
}

/**
 * List active challenges for a user (joined or in their circles).
 */
export async function getUserChallenges(
  supabase: SupabaseClient,
  userId: string,
): Promise<Challenge[]> {
  // Get challenges the user has joined
  const { data: participations } = await supabase
    .from("challenge_participants")
    .select("challenge_id")
    .eq("user_id", userId);

  if (!participations || participations.length === 0) return [];

  const challengeIds = participations.map((p: { challenge_id: string }) => p.challenge_id);

  const { data: challenges } = await supabase
    .from("challenges")
    .select("*")
    .in("id", challengeIds)
    .order("ends_at", { ascending: true });

  if (!challenges) return [];

  const result: Challenge[] = [];
  for (const c of challenges) {
    const { count } = await supabase
      .from("challenge_participants")
      .select("id", { count: "exact", head: true })
      .eq("challenge_id", c.id);
    result.push(mapChallengeRow(c, count ?? 0));
  }

  return result;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapChallengeRow(row: any, participantCount: number): Challenge {
  return {
    id: row.id,
    title: row.title,
    description: row.description ?? "",
    createdBy: row.created_by,
    circleId: row.circle_id,
    challengeType: row.challenge_type,
    targetValue: row.target_value,
    subject: row.subject,
    startsAt: row.starts_at,
    endsAt: row.ends_at,
    status: row.status,
    maxParticipants: row.max_participants,
    participantCount,
    createdAt: row.created_at,
  };
}
