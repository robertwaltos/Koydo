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
  GAME_TYPES,
  type GamePlay,
  type GameResult,
  type GameStars,
} from "@/lib/games/types";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { buildTrustedInternalApiUrl } from "@/lib/security/internal-origin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";

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
  gameType: z.enum(GAME_TYPES),
  difficulty: z.enum(GAME_DIFFICULTIES),
  score: z.number().int().min(0),
  maxScore: z.number().int().min(1),
  timeMs: z.number().int().min(0).max(30 * 60 * 1000),
  studentProfileId: z.string().uuid().optional(),
});

const metadataGameResultSchema = z.object({
  source: z.string(),
  result: z.object({
    gameType: z.enum(GAME_TYPES),
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

async function validateProfileOwnership(
  userId: string,
  studentProfileId: string | undefined,
) {
  if (!studentProfileId) return null;

  const supabase = await createSupabaseServerClient();
  const { data: profile, error } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("id", studentProfileId)
    .eq("account_id", userId)
    .maybeSingle();

  if (error || !profile) {
    return NextResponse.json(
      { error: "Student profile not found for current account." },
      { status: 403 },
    );
  }

  return null;
}

function extractPlay(metadata: unknown, eventId: string, createdAt: string): GamePlay | null {
  const parsed = metadataGameResultSchema.safeParse(metadata);
  if (!parsed.success) return null;

  const { source, result, awardedPoints, normalizedScore, pointsDelta } = parsed.data;
  if (source !== "mini_game" && source !== "daily_challenge") return null;

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
  if (ownershipError) return ownershipError;

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
    const ownershipError = await validateProfileOwnership(user.id, payload.studentProfileId);
    if (ownershipError) return ownershipError;

    const draftResult: GameResult = {
      gameType: payload.gameType,
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

    return NextResponse.json({
      result,
      pointsAwarded: points,
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
