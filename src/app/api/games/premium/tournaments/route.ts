import { NextRequest, NextResponse } from "next/server";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";

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
      error: "Premium subscription required for tournaments.",
      code: "PREMIUM_REQUIRED",
      upgradeUrl: "/billing/paywall",
    },
    { status: 402 },
  );
}

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:tournaments:get", {
    max: 100,
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
    const premium = await isPremiumUserWithClient(supabase, user.id);
    if (!premium) return premiumRequiredResponse();

    const admin = createSupabaseAdminClient();
    const nowIso = new Date().toISOString();
    const tournaments = await admin
      .from("social_challenges")
      .select("id, cohort_id, title, description, starts_at, ends_at, status, created_at")
      .eq("status", "active")
      .lte("starts_at", nowIso)
      .gte("ends_at", nowIso)
      .order("created_at", { ascending: false })
      .limit(20);

    if (tournaments.error) {
      return NextResponse.json({ error: "Failed to load tournaments." }, { status: 500 });
    }

    const tournamentRows = tournaments.data ?? [];
    const tournamentIds = tournamentRows.map((entry) => entry.id);
    const participantsByChallenge: Record<string, number> = {};
    const joinedChallengeIds = new Set<string>();

    if (tournamentIds.length > 0) {
      const participants = await admin
        .from("social_challenge_participants")
        .select("challenge_id, user_id, status")
        .in("challenge_id", tournamentIds)
        .eq("status", "active");

      if (participants.error) {
        return NextResponse.json({ error: "Failed to load tournament participants." }, { status: 500 });
      }

      for (const participant of participants.data ?? []) {
        participantsByChallenge[participant.challenge_id] = (participantsByChallenge[participant.challenge_id] ?? 0) + 1;
        if (participant.user_id === user.id) {
          joinedChallengeIds.add(participant.challenge_id);
        }
      }
    }

    return NextResponse.json({
      tournaments: tournamentRows.map((entry) => ({
        id: entry.id,
        cohortId: entry.cohort_id,
        title: entry.title,
        description: entry.description,
        startsAt: entry.starts_at,
        endsAt: entry.ends_at,
        status: entry.status,
        participantCount: participantsByChallenge[entry.id] ?? 0,
        joined: joinedChallengeIds.has(entry.id),
      })),
    });
  } catch (error) {
    console.error("Unexpected error in /api/games/premium/tournaments:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
