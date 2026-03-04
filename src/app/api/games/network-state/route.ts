import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { rankChallengeLeaderboard } from "@/lib/social/cohort-challenges";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";

const postSchema = z.object({
  action: z.literal("join"),
  cohortId: z.string().uuid(),
  challengeId: z.string().uuid(),
});

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: { "Retry-After": String(retryAfterSeconds) },
    },
  );
}

function premiumRequiredResponse() {
  return NextResponse.json(
    {
      error: "Premium subscription required for network multiplayer features.",
      code: "PREMIUM_REQUIRED",
      upgradeUrl: "/billing/paywall",
    },
    { status: 402 },
  );
}

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:network-state:get", {
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
  const premium = await isPremiumUserWithClient(supabase, user.id);
  if (!premium) return premiumRequiredResponse();

  try {
    const admin = createSupabaseAdminClient();
    const membershipsQuery = await admin
      .from("social_cohort_members")
      .select("cohort_id, role, status, joined_at")
      .eq("user_id", user.id)
      .eq("status", "active")
      .limit(20);

    if (membershipsQuery.error) {
      return NextResponse.json(
        { error: "Failed to load network memberships." },
        { status: 500 },
      );
    }

    const memberships = membershipsQuery.data ?? [];
    const cohortIds = Array.from(new Set(memberships.map((row) => row.cohort_id)));

    if (cohortIds.length === 0) {
      return NextResponse.json({
        cohorts: [],
        activeChallenges: [],
      });
    }

    const cohortsQuery = await admin
      .from("social_cohorts")
      .select("id, name, description, visibility, is_active")
      .in("id", cohortIds);

    if (cohortsQuery.error) {
      return NextResponse.json(
        { error: "Failed to load cohorts." },
        { status: 500 },
      );
    }

    const nowIso = new Date().toISOString();
    const challengesQuery = await admin
      .from("social_challenges")
      .select("id, cohort_id, title, description, status, starts_at, ends_at, created_at")
      .in("cohort_id", cohortIds)
      .eq("status", "active")
      .lte("starts_at", nowIso)
      .gte("ends_at", nowIso)
      .order("created_at", { ascending: false })
      .limit(30);

    if (challengesQuery.error) {
      return NextResponse.json(
        { error: "Failed to load active challenges." },
        { status: 500 },
      );
    }

    const challenges = challengesQuery.data ?? [];
    const challengeIds = challenges.map((challenge) => challenge.id);
    if (challengeIds.length === 0) {
      return NextResponse.json({
        cohorts: (cohortsQuery.data ?? []).map((cohort) => ({
          ...cohort,
          membership: memberships.find((entry) => entry.cohort_id === cohort.id) ?? null,
        })),
        activeChallenges: [],
      });
    }

    const [participantsQuery, leaderboardQuery] = await Promise.all([
      admin
        .from("social_challenge_participants")
        .select("challenge_id, user_id, status")
        .in("challenge_id", challengeIds)
        .eq("status", "active"),
      admin
        .from("social_challenge_leaderboard")
        .select("challenge_id, user_id, total_points, validated_event_count, updated_at")
        .in("challenge_id", challengeIds)
        .order("total_points", { ascending: false })
        .order("validated_event_count", { ascending: false })
        .order("updated_at", { ascending: true }),
    ]);

    if (participantsQuery.error) {
      return NextResponse.json(
        { error: "Failed to load challenge participants." },
        { status: 500 },
      );
    }

    if (leaderboardQuery.error) {
      return NextResponse.json(
        { error: "Failed to load challenge leaderboard." },
        { status: 500 },
      );
    }

    const participants = participantsQuery.data ?? [];
    const leaderboardRows = leaderboardQuery.data ?? [];

    const activeChallenges = challenges.map((challenge) => {
      const rows = leaderboardRows
        .filter((row) => row.challenge_id === challenge.id)
        .map((row) => ({
          userId: row.user_id,
          totalPoints: row.total_points,
          validatedEventCount: row.validated_event_count,
          updatedAt: row.updated_at,
        }));
      const ranked = rankChallengeLeaderboard(rows).slice(0, 10);
      const myEntry = rankChallengeLeaderboard(rows).find((row) => row.userId === user.id) ?? null;
      const participantCount = participants.filter((row) => row.challenge_id === challenge.id).length;
      const joined = participants.some((row) => row.challenge_id === challenge.id && row.user_id === user.id);

      return {
        id: challenge.id,
        cohortId: challenge.cohort_id,
        title: challenge.title,
        description: challenge.description,
        startsAt: challenge.starts_at,
        endsAt: challenge.ends_at,
        participantCount,
        joined,
        leaderboardTop: ranked,
        myEntry,
      };
    });

    return NextResponse.json({
      cohorts: (cohortsQuery.data ?? []).map((cohort) => ({
        ...cohort,
        membership: memberships.find((entry) => entry.cohort_id === cohort.id) ?? null,
      })),
      activeChallenges,
    });
  } catch (error) {
    console.error("Unexpected error in /api/games/network-state", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:network-state:post", {
    max: 50,
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
  const premium = await isPremiumUserWithClient(supabase, user.id);
  if (!premium) return premiumRequiredResponse();

  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  try {
    const membership = await admin
      .from("social_cohort_members")
      .select("id")
      .eq("cohort_id", parsed.data.cohortId)
      .eq("user_id", user.id)
      .eq("status", "active")
      .maybeSingle();

    if (membership.error || !membership.data) {
      return NextResponse.json(
        { error: "You are not an active member of this cohort." },
        { status: 403 },
      );
    }

    const joined = await admin
      .from("social_challenge_participants")
      .upsert({
        cohort_id: parsed.data.cohortId,
        challenge_id: parsed.data.challengeId,
        user_id: user.id,
        status: "active",
      }, {
        onConflict: "challenge_id,user_id",
      });

    if (joined.error) {
      return NextResponse.json({ error: "Failed to join challenge." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unexpected error in POST /api/games/network-state", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
