import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { rankChallengeLeaderboard } from "@/lib/social/cohort-challenges";
import { isMissingSocialTableError } from "@/lib/social/errors";
import { requireCohortMembership } from "@/lib/social/membership";
import { SOCIAL_COHORT_ROLES } from "@/lib/social/roles";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(200).default(50),
});

type LeaderboardRow = {
  user_id: string;
  total_points: number;
  validated_event_count: number;
  updated_at: string;
};

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

export async function GET(
  request: Request,
  context: { params: Promise<{ cohortId: string; challengeId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:social:cohorts:challenge:leaderboard:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const query = querySchema.safeParse({
    limit: new URL(request.url).searchParams.get("limit") ?? undefined,
  });
  if (!query.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: query.error.flatten() },
      { status: 400 },
    );
  }

  const { cohortId, challengeId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireCohortMembership(admin, user.id, cohortId, SOCIAL_COHORT_ROLES);
  if (!membership.ok) return membership.response;

  const { data: challenge, error: challengeError } = await admin
    .from("social_challenges")
    .select("id")
    .eq("cohort_id", cohortId)
    .eq("id", challengeId)
    .maybeSingle();

  if (challengeError) {
    if (isMissingSocialTableError(challengeError)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to resolve social challenge for leaderboard.", toSafeErrorRecord(challengeError));
    return NextResponse.json({ error: "Failed to load leaderboard." }, { status: 500 });
  }

  if (!challenge) {
    return NextResponse.json({ error: "Challenge not found." }, { status: 404 });
  }

  const { data, error } = await admin
    .from("social_challenge_leaderboard")
    .select("user_id, total_points, validated_event_count, updated_at")
    .eq("challenge_id", challengeId)
    .order("total_points", { ascending: false })
    .order("validated_event_count", { ascending: false })
    .order("updated_at", { ascending: true })
    .order("user_id", { ascending: true })
    .limit(query.data.limit);

  if (error) {
    if (isMissingSocialTableError(error)) {
      return NextResponse.json(
        { error: "Social cohort tables are not migrated yet." },
        { status: 503 },
      );
    }

    console.error("Failed to load challenge leaderboard.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load leaderboard." }, { status: 500 });
  }

  const rankedRows = rankChallengeLeaderboard(
    ((data ?? []) as LeaderboardRow[]).map((row) => ({
      userId: row.user_id,
      totalPoints: row.total_points,
      validatedEventCount: row.validated_event_count,
      updatedAt: row.updated_at,
    })),
  );

  return NextResponse.json({
    leaderboard: rankedRows,
  });
}