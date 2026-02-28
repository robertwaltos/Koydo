import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  GAMIFICATION_LIMITS,
  getLanguageLearningPolicySnapshot,
} from "@/lib/language-learning";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const eventTypeSchema = z.enum([
  "badge_earned",
  "level_up",
  "quest_complete",
  "streak_started",
  "streak_kept",
  "streak_reset",
  "points_awarded",
]);

const postSchema = z.object({
  eventType: eventTypeSchema,
  pointsDelta: z.number().int().default(0),
  badgeId: z.string().min(1).max(80).optional(),
  badgeLabel: z.string().min(1).max(120).optional(),
  questId: z.string().min(1).max(120).optional(),
  studentProfileId: z.string().uuid().optional(),
  metadata: z.record(z.string(), z.unknown()).default({}),
});

type BadgeEntry = {
  id: string;
  label?: string;
  earnedAt: string;
};

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

function toBadgeEntries(input: unknown): BadgeEntry[] {
  if (!Array.isArray(input)) return [];

  return input
    .filter((item) => item && typeof item === "object" && "id" in item)
    .map((item) => {
      const row = item as Record<string, unknown>;
      return {
        id: String(row.id),
        label: typeof row.label === "string" ? row.label : undefined,
        earnedAt:
          typeof row.earnedAt === "string"
            ? row.earnedAt
            : new Date().toISOString(),
      };
    });
}

function toStringArray(input: unknown): string[] {
  if (!Array.isArray(input)) return [];
  return input
    .filter((item) => typeof item === "string" && item.trim().length > 0)
    .map((item) => String(item));
}

function toStreaks(input: unknown): { daily: number; weekly: number } {
  if (!input || typeof input !== "object") {
    return { daily: 0, weekly: 0 };
  }

  const row = input as Record<string, unknown>;
  return {
    daily: Number.isFinite(row.daily) ? Math.max(0, Number(row.daily)) : 0,
    weekly: Number.isFinite(row.weekly) ? Math.max(0, Number(row.weekly)) : 0,
  };
}

function capLevel(points: number) {
  const inferred = Math.floor(points / 100) + 1;
  return Math.min(GAMIFICATION_LIMITS.maxGlobalLevels, Math.max(1, inferred));
}

export async function GET(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const studentProfileId = request.nextUrl.searchParams.get("studentProfileId");
  const stateQuery = supabase
    .from("gamification_states")
    .select(
      "id, user_id, student_profile_id, points, level, badges, quests_completed, streaks, last_activity_at, updated_at",
    )
    .eq("user_id", user.id);

  const eventQuery = supabase
    .from("gamification_events")
    .select("id, event_type, metadata, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(50);

  if (studentProfileId) {
    stateQuery.eq("student_profile_id", studentProfileId);
    eventQuery.eq("student_profile_id", studentProfileId);
  }

  const [{ data: state, error: stateError }, { data: events, error: eventError }] =
    await Promise.all([stateQuery.maybeSingle(), eventQuery]);

  if (stateError || eventError) {
    const tableMissing =
      (stateError?.message && isMissingTableError(stateError.message)) ||
      (eventError?.message && isMissingTableError(eventError.message));

    if (tableMissing) {
      return NextResponse.json(
        {
          error: "Gamification tables not migrated yet.",
          policy: getLanguageLearningPolicySnapshot(),
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to load gamification state.",
        details: stateError?.message ?? eventError?.message ?? "Unknown error",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    state,
    events: events ?? [],
    policy: getLanguageLearningPolicySnapshot(),
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid request payload",
        details: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const payload = parsed.data;
  const nowIso = new Date().toISOString();

  const { data: currentState, error: stateReadError } = await supabase
    .from("gamification_states")
    .select("points, level, badges, quests_completed, streaks")
    .eq("user_id", user.id)
    .maybeSingle();

  if (stateReadError && !isMissingTableError(stateReadError.message)) {
    return NextResponse.json(
      {
        error: "Failed to read current gamification state.",
        details: stateReadError.message,
      },
      { status: 500 },
    );
  }

  const tableMissing =
    Boolean(stateReadError?.message && isMissingTableError(stateReadError.message));
  if (tableMissing) {
    return NextResponse.json(
      {
        error: "Gamification tables not migrated yet.",
        policy: getLanguageLearningPolicySnapshot(),
      },
      { status: 503 },
    );
  }

  const currentPoints =
    typeof currentState?.points === "number" ? Math.max(0, currentState.points) : 0;
  const nextPoints = Math.max(0, currentPoints + payload.pointsDelta);
  const nextLevel = capLevel(nextPoints);

  const badges = toBadgeEntries(currentState?.badges);
  if (
    payload.badgeId &&
    !badges.some((badge) => badge.id === payload.badgeId) &&
    badges.length < GAMIFICATION_LIMITS.maxBadgesPerModule
  ) {
    badges.push({
      id: payload.badgeId,
      label: payload.badgeLabel,
      earnedAt: nowIso,
    });
  }

  const questsCompleted = toStringArray(currentState?.quests_completed);
  if (payload.questId && !questsCompleted.includes(payload.questId)) {
    questsCompleted.push(payload.questId);
  }

  const streaks = toStreaks(currentState?.streaks);

  const { data: upsertedState, error: upsertError } = await supabase
    .from("gamification_states")
    .upsert({
      user_id: user.id,
      student_profile_id: payload.studentProfileId ?? null,
      points: nextPoints,
      level: nextLevel,
      badges,
      quests_completed: questsCompleted,
      streaks,
      last_activity_at: nowIso,
      updated_at: nowIso,
    }, {
      onConflict: "user_id",
    })
    .select(
      "id, user_id, student_profile_id, points, level, badges, quests_completed, streaks, last_activity_at, updated_at",
    )
    .maybeSingle();

  if (upsertError) {
    if (isMissingTableError(upsertError.message)) {
      return NextResponse.json(
        {
          error: "Gamification tables not migrated yet.",
          policy: getLanguageLearningPolicySnapshot(),
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to update gamification state.",
        details: upsertError.message,
      },
      { status: 500 },
    );
  }

  const eventMetadata = {
    ...payload.metadata,
    pointsDelta: payload.pointsDelta,
    badgeId: payload.badgeId ?? null,
    badgeLabel: payload.badgeLabel ?? null,
    questId: payload.questId ?? null,
    pointsAfter: nextPoints,
    levelAfter: nextLevel,
  };

  const { data: insertedEvent, error: eventInsertError } = await supabase
    .from("gamification_events")
    .insert({
      user_id: user.id,
      student_profile_id: payload.studentProfileId ?? null,
      event_type: payload.eventType,
      metadata: eventMetadata,
    })
    .select("id, event_type, metadata, created_at")
    .maybeSingle();

  if (eventInsertError) {
    if (isMissingTableError(eventInsertError.message)) {
      return NextResponse.json(
        {
          state: upsertedState,
          event: null,
          warning: "State updated but events table is not available yet.",
          policy: getLanguageLearningPolicySnapshot(),
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        error: "State updated but event logging failed.",
        state: upsertedState,
        details: eventInsertError.message,
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    state: upsertedState,
    event: insertedEvent,
    policy: getLanguageLearningPolicySnapshot(),
  });
}
