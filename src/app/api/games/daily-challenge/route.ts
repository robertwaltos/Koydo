import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { calculateStars, reportGameResult } from "@/lib/games/scoring";
import { getDailyChallengeSeed } from "@/lib/games/content-banks";
import {
  GAME_DIFFICULTIES,
  GAME_TYPES,
  type GameDifficulty,
  type GameResult,
  type GameType,
} from "@/lib/games/types";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { buildTrustedInternalApiUrl } from "@/lib/security/internal-origin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const querySchema = z.object({
  studentProfileId: z.string().uuid().optional(),
});

const postSchema = z.object({
  gameType: z.enum(GAME_TYPES),
  difficulty: z.enum(GAME_DIFFICULTIES),
  score: z.number().int().min(0),
  maxScore: z.number().int().min(1),
  timeMs: z.number().int().min(0).max(30 * 60 * 1000),
  studentProfileId: z.string().uuid().optional(),
});

type DailyChallenge = {
  id: string;
  title: string;
  description: string;
  gameType: GameType;
  difficulty: GameDifficulty;
  rewardPoints: number;
};

type GamificationContractResponse = {
  state?: unknown;
  event?: unknown;
  policy?: unknown;
  warning?: string;
  error?: string;
  details?: unknown;
};

const GAME_TITLES: Record<GameType, string> = {
  "letter-catcher": "Letter Catcher",
  "word-builder": "Word Builder",
  "number-crunch": "Number Crunch",
  "pattern-train": "Pattern Train",
  "story-sequencer": "Story Sequencer",
  "memory-match": "Memory Match",
  "color-mixer": "Color Mixer",
  "shape-safari": "Shape Safari",
};

const GAME_DESCRIPTIONS: Record<GameType, string> = {
  "letter-catcher": "Catch the right letters as quickly and accurately as possible.",
  "word-builder": "Build CVC words with the correct letter sequence.",
  "number-crunch": "Solve short math equations with speed and precision.",
  "pattern-train": "Find the missing item and complete each pattern.",
  "story-sequencer": "Order story steps into the correct sequence.",
  "memory-match": "Match memory pairs using focus and recall.",
  "color-mixer": "Mix colors and identify the resulting shade correctly.",
  "shape-safari": "Spot and identify shapes from their properties.",
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

function hashString(input: string) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash * 31 + input.charCodeAt(index)) | 0;
  }
  return Math.abs(hash);
}

function isWeekend(seedDate: string): boolean {
  const day = new Date(`${seedDate}T00:00:00Z`).getUTCDay();
  return day === 0 || day === 6;
}

function buildDailyChallenge(seedDate: string): DailyChallenge {
  const hash = hashString(seedDate);
  const gameType = GAME_TYPES[hash % GAME_TYPES.length] as GameType;
  const difficulty =
    GAME_DIFFICULTIES[Math.floor(hash / 7) % GAME_DIFFICULTIES.length] as GameDifficulty;

  const baseRewardByDifficulty: Record<GameDifficulty, number> = {
    easy: 16,
    medium: 24,
    hard: 32,
  };

  const weekendBonus = isWeekend(seedDate) ? 8 : 0;
  const rewardPoints = baseRewardByDifficulty[difficulty] + weekendBonus;

  return {
    id: `daily-${seedDate}`,
    title: `${GAME_TITLES[gameType]} Challenge`,
    description: GAME_DESCRIPTIONS[gameType],
    gameType,
    difficulty,
    rewardPoints,
  };
}

function isChallengeCompletedFromMetadata(
  metadata: unknown,
  challengeId: string,
  questId: string,
): boolean {
  if (!metadata || typeof metadata !== "object") return false;
  const row = metadata as Record<string, unknown>;
  return row.challengeId === challengeId || row.questId === questId;
}

async function hasCompletedChallenge(
  userId: string,
  challengeId: string,
  questId: string,
  studentProfileId?: string,
): Promise<{ completed: boolean; error: string | null; tableMissing: boolean }> {
  const supabase = await createSupabaseServerClient();
  const query = supabase
    .from("gamification_events")
    .select("metadata")
    .eq("user_id", userId)
    .eq("event_type", "quest_complete")
    .order("created_at", { ascending: false })
    .limit(200);

  if (studentProfileId) {
    query.eq("student_profile_id", studentProfileId);
  }

  const { data, error } = await query;
  if (error) {
    console.error("Failed to load daily challenge completion history.", toSafeErrorRecord(error));
    return {
      completed: false,
      error: "Failed to load daily challenge completion history.",
      tableMissing: isMissingTableError(error.message),
    };
  }

  const completed = (data ?? []).some((event) =>
    isChallengeCompletedFromMetadata(event.metadata, challengeId, questId));
  return { completed, error: null, tableMissing: false };
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
  const rateLimit = await enforceIpRateLimit(request, "api:games:daily:get", {
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
  });
  if (!query.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: query.error.flatten() },
      { status: 400 },
    );
  }

  const ownershipError = await validateProfileOwnership(user.id, query.data.studentProfileId);
  if (ownershipError) return ownershipError;

  const seed = getDailyChallengeSeed();
  const challenge = buildDailyChallenge(seed);
  const questId = `daily-challenge:${seed}`;
  const completion = await hasCompletedChallenge(
    user.id,
    challenge.id,
    questId,
    query.data.studentProfileId,
  );

  if (completion.tableMissing) {
    return NextResponse.json(
      { error: "Gamification tables not migrated yet." },
      { status: 503 },
    );
  }

  if (completion.error) {
    return NextResponse.json(
      {
        error: "Failed to load daily challenge status.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    challenge,
    completed: completion.completed,
  });
}

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:daily:post", {
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

    const seed = getDailyChallengeSeed();
    const challenge = buildDailyChallenge(seed);
    const questId = `daily-challenge:${seed}`;

    if (
      payload.gameType !== challenge.gameType
      || payload.difficulty !== challenge.difficulty
    ) {
      return NextResponse.json(
        {
          error: "Submitted game result does not match today's challenge.",
          expected: {
            gameType: challenge.gameType,
            difficulty: challenge.difficulty,
          },
        },
        { status: 400 },
      );
    }

    const completion = await hasCompletedChallenge(
      user.id,
      challenge.id,
      questId,
      payload.studentProfileId,
    );

    if (completion.tableMissing) {
      return NextResponse.json(
        { error: "Gamification tables not migrated yet." },
        { status: 503 },
      );
    }

    if (completion.error) {
      return NextResponse.json(
        {
          error: "Unable to verify daily challenge completion.",
        },
        { status: 500 },
      );
    }

    if (completion.completed) {
      return NextResponse.json(
        { error: "Daily challenge already completed." },
        { status: 409 },
      );
    }

    const draftResult: GameResult = {
      gameType: payload.gameType,
      difficulty: payload.difficulty,
      score: payload.score,
      maxScore: payload.maxScore,
      timeMs: payload.timeMs,
      stars: calculateStars(payload.score, payload.maxScore),
    };

    const reported = await reportGameResult(draftResult);
    const result: GameResult = {
      ...draftResult,
      stars: reported.stars,
    };

    if (reported.stars < 1) {
      return NextResponse.json(
        { error: "Daily challenge requires at least 1 star to complete." },
        { status: 400 },
      );
    }

    const pointsAwardEvent = await postGamificationEvent(request, {
      eventType: "points_awarded",
      pointsDelta: reported.points,
      studentProfileId: payload.studentProfileId,
      metadata: {
        source: "daily_challenge",
        challengeId: challenge.id,
        challengeDate: seed,
        result,
        awardedPoints: reported.points,
        normalizedScore: reported.normalized,
      },
    });

    if (!pointsAwardEvent.ok) {
      return NextResponse.json(
        {
          error: "Failed to award game points.",
        },
        { status: pointsAwardEvent.status },
      );
    }

    const completionEvent = await postGamificationEvent(request, {
      eventType: "quest_complete",
      pointsDelta: challenge.rewardPoints,
      questId,
      studentProfileId: payload.studentProfileId,
      metadata: {
        source: "daily_challenge",
        challengeId: challenge.id,
        challengeDate: seed,
        bonusPoints: challenge.rewardPoints,
        result,
      },
    });

    if (!completionEvent.ok) {
      return NextResponse.json(
        {
          error: "Failed to complete daily challenge.",
        },
        { status: completionEvent.status },
      );
    }

    return NextResponse.json({
      success: true,
      bonusPoints: challenge.rewardPoints,
    });
  } catch (error) {
    console.error(
      "Unexpected error in /api/games/daily-challenge:",
      toSafeErrorRecord(error),
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
