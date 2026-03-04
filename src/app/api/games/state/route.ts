import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  calculatePoints,
  calculateStars,
  normalizeGameScore,
  reportGameResult,
} from "@/lib/games/scoring";
import {
  GAME_DIFFICULTIES,
  isValidGameId,
  type GamePlay,
  type GameResult,
  type GameStars,
  type GameType,
} from "@/lib/games/types";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { buildTrustedInternalApiUrl } from "@/lib/security/internal-origin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import {
  applyValidatedEventToLeaderboard,
  validateChallengeEventPayload,
} from "@/lib/social/cohort-challenges";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getRegisteredGame } from "@/lib/games/catalog";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";
import { computeRewardRealmMasteryFromEvents } from "@/lib/games/reward-realm";

/** Accept both legacy 8 types and catalog IDs (e.g. "math-quiz-001") */
const gameTypeSchema = z.string().refine(isValidGameId, {
  message: "Invalid game type or catalog game ID",
});

const gameStarsSchema = z.union([
  z.literal(0),
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);

const querySchema = z.object({
  studentProfileId: z.string().uuid().optional(),
  limit: z.coerce.number().int().min(1).max(200).default(50),
});

const postSchema = z.object({
  gameType: gameTypeSchema,
  difficulty: z.enum(GAME_DIFFICULTIES),
  score: z.number().int().min(0),
  maxScore: z.number().int().min(1),
  timeMs: z.number().int().min(0).max(30 * 60 * 1000),
  customGameId: z.string().min(3).max(64).regex(/^[a-z0-9-]+$/).optional(),
  studentProfileId: z.string().uuid().optional(),
  guardianUnlockPhrase: z.string().min(3).max(64).optional(),
});

const metadataGameResultSchema = z.object({
  source: z.string(),
  result: z.object({
    gameType: gameTypeSchema,
    score: z.number().int().min(0),
    maxScore: z.number().int().min(1),
    stars: gameStarsSchema,
    timeMs: z.number().int().min(0),
    difficulty: z.enum(GAME_DIFFICULTIES),
  }),
  awardedPoints: z.number().int().optional(),
  normalizedScore: z.number().optional(),
  pointsDelta: z.number().int().optional(),
});

type GamificationContractResponse = {
  state?: unknown;
  event?: unknown;
  policy?: unknown;
  warning?: string;
  error?: string;
  details?: unknown;
};

type SocialSyncResult = {
  syncedChallenges: number;
  warnings: string[];
};

type PremiumSyncResult = {
  seasonUpdated: boolean;
  clansUpdated: number;
  warnings: string[];
};

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    {
      error: "Too many requests. Please retry shortly.",
    },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

const GUARDIAN_UNLOCK_PHRASE = "GUARDIAN UNLOCK";

function isGuardianUnlockPhraseValid(phrase: string | undefined): boolean {
  if (typeof phrase !== "string") return false;
  return phrase.trim().toUpperCase() === GUARDIAN_UNLOCK_PHRASE;
}

async function validateProfileOwnership(
  userId: string,
  studentProfileId: string | undefined,
) {
  if (!studentProfileId) return { profile: null as null | { id: string; ageYears: number | null }, errorResponse: null };

  const supabase = await createSupabaseServerClient();
  const { data: profile, error } = await supabase
    .from("student_profiles")
    .select("id, age_years")
    .eq("id", studentProfileId)
    .eq("account_id", userId)
    .maybeSingle();

  if (error || !profile) {
    return {
      profile: null,
      errorResponse: NextResponse.json(
        { error: "Student profile not found for current account." },
        { status: 403 },
      ),
    };
  }

  return {
    profile: { id: profile.id, ageYears: profile.age_years },
    errorResponse: null,
  };
}

async function loadRewardRealmMastery(
  userId: string,
  studentProfileId: string | undefined,
): Promise<{
  mastery: ReturnType<typeof computeRewardRealmMasteryFromEvents>;
  error: string | null;
  tableMissing: boolean;
}> {
  const supabase = await createSupabaseServerClient();
  const query = supabase
    .from("gamification_events")
    .select("metadata")
    .eq("user_id", userId)
    .eq("event_type", "points_awarded")
    .order("created_at", { ascending: false })
    .limit(600);

  if (studentProfileId) {
    query.eq("student_profile_id", studentProfileId);
  }

  const { data, error } = await query;
  if (error) {
    return {
      mastery: computeRewardRealmMasteryFromEvents([]),
      error: error.message,
      tableMissing: isMissingTableError(error.message),
    };
  }

  return {
    mastery: computeRewardRealmMasteryFromEvents(data ?? []),
    error: null,
    tableMissing: false,
  };
}

function extractPlay(metadata: unknown, eventId: string, createdAt: string): GamePlay | null {
  const parsed = metadataGameResultSchema.safeParse(metadata);
  if (!parsed.success) return null;

  const { source, result: rawResult, awardedPoints, normalizedScore, pointsDelta } = parsed.data;
  if (source !== "mini_game" && source !== "daily_challenge") return null;

  const result = { ...rawResult, gameType: rawResult.gameType as GameType };

  return {
    id: eventId,
    createdAt,
    ...result,
    pointsAwarded:
      typeof awardedPoints === "number"
        ? awardedPoints
        : typeof pointsDelta === "number"
          ? pointsDelta
          : calculatePoints(result.stars, result.difficulty),
    normalized:
      typeof normalizedScore === "number"
        ? normalizedScore
        : normalizeGameScore(result),
  };
}

function computeBestStreak(plays: readonly GamePlay[]): number {
  if (plays.length === 0) return 0;

  const uniqueDates = Array.from(
    new Set(plays.map((play) => play.createdAt.slice(0, 10))),
  ).sort();
  if (uniqueDates.length === 0) return 0;

  const dayMs = 24 * 60 * 60 * 1000;
  let currentStreak = 1;
  let bestStreak = 1;

  for (let index = 1; index < uniqueDates.length; index += 1) {
    const previous = Date.parse(`${uniqueDates[index - 1]}T00:00:00Z`);
    const current = Date.parse(`${uniqueDates[index]}T00:00:00Z`);
    if (Number.isNaN(previous) || Number.isNaN(current)) continue;

    if (current - previous === dayMs) {
      currentStreak += 1;
      if (currentStreak > bestStreak) bestStreak = currentStreak;
    } else {
      currentStreak = 1;
    }
  }

  return bestStreak;
}

function computeAverageStars(plays: readonly GamePlay[]): number {
  if (plays.length === 0) return 0;
  const sum = plays.reduce((acc, play) => acc + play.stars, 0);
  return Number((sum / plays.length).toFixed(2));
}

async function postGamificationEvent(
  request: NextRequest,
  payload: {
    eventType:
      | "badge_earned"
      | "level_up"
      | "quest_complete"
      | "streak_started"
      | "streak_kept"
      | "streak_reset"
      | "points_awarded";
    pointsDelta: number;
    badgeId?: string;
    questId?: string;
    studentProfileId?: string;
    metadata?: Record<string, unknown>;
  },
) {
  const url = buildTrustedInternalApiUrl(request, "/api/language/gamification/state");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: request.headers.get("cookie") ?? "",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const body = (await response.json().catch(() => ({}))) as GamificationContractResponse;
  return {
    ok: response.ok,
    status: response.status,
    body,
  };
}

async function syncResultToActiveSocialChallenges(input: {
  userId: string;
  gameId: string;
  result: GameResult;
}): Promise<SocialSyncResult> {
  const admin = createSupabaseAdminClient();
  const warnings: string[] = [];
  const nowIso = new Date().toISOString();

  const membershipQuery = await admin
    .from("social_cohort_members")
    .select("cohort_id")
    .eq("user_id", input.userId)
    .eq("status", "active")
    .limit(20);

  if (membershipQuery.error) {
    warnings.push("Unable to load social cohort memberships.");
    return { syncedChallenges: 0, warnings };
  }

  const cohortIds = Array.from(
    new Set((membershipQuery.data ?? []).map((row) => row.cohort_id).filter(Boolean)),
  );
  if (cohortIds.length === 0) {
    return { syncedChallenges: 0, warnings };
  }

  const challengeQuery = await admin
    .from("social_challenges")
    .select("id, cohort_id")
    .in("cohort_id", cohortIds)
    .eq("status", "active")
    .lte("starts_at", nowIso)
    .gte("ends_at", nowIso)
    .limit(25);

  if (challengeQuery.error) {
    warnings.push("Unable to load active social challenges.");
    return { syncedChallenges: 0, warnings };
  }

  const activeChallenges = challengeQuery.data ?? [];
  if (activeChallenges.length === 0) {
    return { syncedChallenges: 0, warnings };
  }

  const validated = validateChallengeEventPayload({
    source: "assignment",
    sourceEventId: `game:${input.gameId}:${crypto.randomUUID().slice(0, 12)}`,
    scorePercentage: Math.max(0, Math.min(1, input.result.score / input.result.maxScore)),
    totalQuestions: input.result.maxScore,
    completedAt: nowIso,
  });

  if (!validated.ok) {
    warnings.push("Challenge event did not meet validation thresholds.");
    return { syncedChallenges: 0, warnings };
  }

  let syncedChallenges = 0;
  for (const challenge of activeChallenges) {
    const joinUpsert = await admin
      .from("social_challenge_participants")
      .upsert({
        cohort_id: challenge.cohort_id,
        challenge_id: challenge.id,
        user_id: input.userId,
        status: "active",
      }, {
        onConflict: "challenge_id,user_id",
      });

    if (joinUpsert.error) {
      warnings.push(`Could not join challenge ${challenge.id}.`);
      continue;
    }

    const eventInsert = await admin
      .from("social_challenge_events")
      .insert({
        cohort_id: challenge.cohort_id,
        challenge_id: challenge.id,
        user_id: input.userId,
        event_type: validated.event.eventType,
        source: validated.event.source,
        source_event_id: `${validated.event.sourceEventId}:${challenge.id.slice(0, 8)}`,
        score_percentage: validated.event.scorePercentage,
        total_questions: validated.event.totalQuestions,
        points_awarded: validated.event.pointsAwarded,
        validated: true,
        moderation_state: "approved",
        metadata: {
          source: "games_state_auto_sync",
          gameId: input.gameId,
          stars: input.result.stars,
          difficulty: input.result.difficulty,
        },
        created_at: validated.event.completedAt,
      });

    if (eventInsert.error) {
      warnings.push(`Could not write challenge event for ${challenge.id}.`);
      continue;
    }

    const currentBoard = await admin
      .from("social_challenge_leaderboard")
      .select("user_id, total_points, validated_event_count, updated_at")
      .eq("challenge_id", challenge.id)
      .eq("user_id", input.userId)
      .maybeSingle();

    const nextBoardRow = applyValidatedEventToLeaderboard(
      currentBoard.data
        ? {
          userId: currentBoard.data.user_id,
          totalPoints: currentBoard.data.total_points,
          validatedEventCount: currentBoard.data.validated_event_count,
          updatedAt: currentBoard.data.updated_at,
        }
        : null,
      validated.event,
      input.userId,
    );

    const boardUpsert = await admin
      .from("social_challenge_leaderboard")
      .upsert({
        cohort_id: challenge.cohort_id,
        challenge_id: challenge.id,
        user_id: input.userId,
        total_points: nextBoardRow.totalPoints,
        validated_event_count: nextBoardRow.validatedEventCount,
        updated_at: nextBoardRow.updatedAt,
      }, {
        onConflict: "challenge_id,user_id",
      });

    if (boardUpsert.error) {
      warnings.push(`Could not update leaderboard for ${challenge.id}.`);
      continue;
    }

    syncedChallenges += 1;
  }

  return {
    syncedChallenges,
    warnings,
  };
}

async function syncResultToPremiumProgression(input: {
  userId: string;
  pointsAwarded: number;
  combo: number;
}): Promise<PremiumSyncResult> {
  const admin = createSupabaseAdminClient();
  const warnings: string[] = [];
  const nowIso = new Date().toISOString();

  const season = await admin
    .from("game_seasons")
    .select("id")
    .eq("status", "active")
    .lte("starts_at", nowIso)
    .gte("ends_at", nowIso)
    .order("starts_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  let seasonUpdated = false;
  if (!season.error && season.data) {
    const current = await admin
      .from("game_season_entries")
      .select("total_points, best_combo")
      .eq("season_id", season.data.id)
      .eq("user_id", input.userId)
      .maybeSingle();

    const nextPoints = (current.data?.total_points ?? 0) + input.pointsAwarded;
    const nextCombo = Math.max(current.data?.best_combo ?? 0, input.combo);
    const upsert = await admin
      .from("game_season_entries")
      .upsert({
        season_id: season.data.id,
        user_id: input.userId,
        total_points: nextPoints,
        best_combo: nextCombo,
        updated_at: nowIso,
      }, {
        onConflict: "season_id,user_id",
      });
    if (!upsert.error) seasonUpdated = true;
  } else if (season.error) {
    warnings.push("Could not sync season progression.");
  }

  const clans = await admin
    .from("game_clan_members")
    .select("clan_id, contribution_points")
    .eq("user_id", input.userId)
    .eq("status", "active")
    .limit(10);

  let clansUpdated = 0;
  if (clans.error) {
    warnings.push("Could not sync clan contributions.");
  } else {
    for (const membership of clans.data ?? []) {
      const update = await admin
        .from("game_clan_members")
        .update({
          contribution_points: (membership.contribution_points ?? 0) + input.pointsAwarded,
          updated_at: nowIso,
        })
        .eq("clan_id", membership.clan_id)
        .eq("user_id", input.userId);
      if (!update.error) clansUpdated += 1;
    }
  }

  return { seasonUpdated, clansUpdated, warnings };
}

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:state:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const query = querySchema.safeParse({
    studentProfileId: request.nextUrl.searchParams.get("studentProfileId") ?? undefined,
    limit: request.nextUrl.searchParams.get("limit") ?? undefined,
  });

  if (!query.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: query.error.flatten() },
      { status: 400 },
    );
  }

  const ownershipError = await validateProfileOwnership(user.id, query.data.studentProfileId);
  if (ownershipError.errorResponse) return ownershipError.errorResponse;

  const playsLimit = query.data.limit;
  const fetchLimit = Math.max(playsLimit * 4, 200);

  const eventQuery = supabase
    .from("gamification_events")
    .select("id, event_type, metadata, created_at")
    .eq("user_id", user.id)
    .eq("event_type", "points_awarded")
    .order("created_at", { ascending: false })
    .limit(fetchLimit);

  if (query.data.studentProfileId) {
    eventQuery.eq("student_profile_id", query.data.studentProfileId);
  }

  const { data: events, error: eventsError } = await eventQuery;

  if (eventsError) {
    if (isMissingTableError(eventsError.message)) {
      return NextResponse.json(
        { error: "Gamification tables not migrated yet." },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to load game plays.",
      },
      { status: 500 },
    );
  }

  const parsedPlays = (events ?? [])
    .map((event) => extractPlay(event.metadata, event.id, event.created_at))
    .filter((play): play is GamePlay => play !== null);

  const plays = parsedPlays.slice(0, playsLimit);

  return NextResponse.json({
    plays,
    stats: {
      totalPlayed: parsedPlays.length,
      avgStars: computeAverageStars(parsedPlays),
      bestStreak: computeBestStreak(parsedPlays),
    },
  });
}

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:state:post", {
    max: 45,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  try {
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
    const ownership = await validateProfileOwnership(user.id, payload.studentProfileId);
    if (ownership.errorResponse) return ownership.errorResponse;

    const gameLookupId = payload.customGameId ?? payload.gameType;
    const guardianOverrideRequested = isGuardianUnlockPhraseValid(payload.guardianUnlockPhrase);
    let guardianOverrideApplied = false;
    const registeredGame = getRegisteredGame(gameLookupId);
    if (registeredGame) {
      if (!ownership.profile) {
        return NextResponse.json(
          {
            error: "studentProfileId is required for age-verified game submissions.",
            required: "studentProfileId",
          },
          { status: 400 },
        );
      }
      if (typeof ownership.profile.ageYears !== "number") {
        return NextResponse.json(
          { error: "Learner age is not configured on the selected profile." },
          { status: 409 },
        );
      }
      if (
        ownership.profile.ageYears < registeredGame.ageMin
        || ownership.profile.ageYears > registeredGame.ageMax
      ) {
        if (!guardianOverrideRequested) {
          return NextResponse.json(
            {
              error: "Selected game is age-locked for this learner profile.",
              gameId: registeredGame.id,
              allowedAgeRange: { min: registeredGame.ageMin, max: registeredGame.ageMax },
              learnerAge: ownership.profile.ageYears,
              requiresGuardianUnlock: true,
            },
            { status: 403 },
          );
        }
        guardianOverrideApplied = true;
      }
    }

    if (registeredGame?.track === "Reward Realm") {
      const masteryCheck = await loadRewardRealmMastery(user.id, ownership.profile?.id);
      if (masteryCheck.error) {
        return NextResponse.json(
          {
            error: masteryCheck.tableMissing
              ? "Reward Realm is locked until gamification tracking is ready."
              : "Unable to verify Reward Realm mastery status right now.",
            requiresEducationalMastery: true,
            mastery: masteryCheck.mastery,
          },
          { status: masteryCheck.tableMissing ? 503 : 500 },
        );
      }

      if (!masteryCheck.mastery.unlocked) {
        return NextResponse.json(
          {
            error: "Reward Realm is locked. Complete educational mastery milestones first.",
            gameId: registeredGame.id,
            requiresEducationalMastery: true,
            mastery: masteryCheck.mastery,
          },
          { status: 403 },
        );
      }
    }

    const draftResult: GameResult = {
      gameType: payload.gameType as GameType,
      difficulty: payload.difficulty,
      score: payload.score,
      maxScore: payload.maxScore,
      timeMs: payload.timeMs,
      stars: calculateStars(payload.score, payload.maxScore) as GameStars,
    };

    const { stars, points, normalized } = await reportGameResult(draftResult);
    const result: GameResult = {
      ...draftResult,
      stars,
    };

    const pointsEvent = await postGamificationEvent(request, {
      eventType: "points_awarded",
      pointsDelta: points,
      studentProfileId: payload.studentProfileId,
      metadata: {
        source: "mini_game",
        customGameId: payload.customGameId ?? null,
        guardianOverrideApplied,
        result,
        awardedPoints: points,
        normalizedScore: normalized,
      },
    });

    if (!pointsEvent.ok) {
      return NextResponse.json(
        {
          error: "Failed to persist game result.",
        },
        { status: pointsEvent.status },
      );
    }

    let badgeEarned: string | undefined;
    let badgeWarning: string | undefined;
    if (stars === 3) {
      badgeEarned = `perfect-${result.gameType}`;
      const badgeEvent = await postGamificationEvent(request, {
        eventType: "badge_earned",
        pointsDelta: 0,
        badgeId: badgeEarned,
        studentProfileId: payload.studentProfileId,
        metadata: {
          source: "mini_game",
          customGameId: payload.customGameId ?? null,
          guardianOverrideApplied,
          result,
          awardedPoints: points,
          normalizedScore: normalized,
        },
      });

      if (!badgeEvent.ok) {
        badgeWarning = "Points were awarded, but badge awarding failed.";
        badgeEarned = undefined;
      }
    }

    const premium = await isPremiumUserWithClient(supabase, user.id);
    const socialSync = premium
      ? await syncResultToActiveSocialChallenges({
        userId: user.id,
        gameId: payload.customGameId ?? payload.gameType,
        result,
      })
      : { syncedChallenges: 0, warnings: ["Premium required for live social competition sync."] };
    const premiumSync = premium
      ? await syncResultToPremiumProgression({
        userId: user.id,
        pointsAwarded: points,
        combo: result.stars === 3 ? 3 : result.stars,
      })
      : { seasonUpdated: false, clansUpdated: 0, warnings: ["Premium required for seasons/clans sync."] };

    return NextResponse.json({
      result,
      pointsAwarded: points,
      socialSync,
      premiumSync,
      ...(badgeEarned ? { badgeEarned } : {}),
      ...(badgeWarning ? { badgeWarning } : {}),
    });
  } catch (error) {
    console.error("Unexpected error in /api/games/state:", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
