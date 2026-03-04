import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";
import { getSeasonPassTierByIndex } from "@/lib/games/premium-season-pass";

const postSchema = z.object({
  tierIndex: z.number().int().min(0),
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
      error: "Premium subscription required for season pass rewards.",
      code: "PREMIUM_REQUIRED",
      upgradeUrl: "/billing/paywall",
    },
    { status: 402 },
  );
}

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("does not exist") || lower.includes("could not find");
}

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:season-pass:claim:post", {
    max: 60,
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

    const body = await request.json().catch(() => null);
    const parsed = postSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
    }

    const tier = getSeasonPassTierByIndex(parsed.data.tierIndex);
    if (!tier) {
      return NextResponse.json({ error: "Unknown season pass tier." }, { status: 404 });
    }

    const admin = createSupabaseAdminClient();
    const nowIso = new Date().toISOString();
    const seasonQuery = await admin
      .from("game_seasons")
      .select("id, slug, title, starts_at, ends_at")
      .eq("status", "active")
      .lte("starts_at", nowIso)
      .gte("ends_at", nowIso)
      .order("starts_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (seasonQuery.error || !seasonQuery.data) {
      if (seasonQuery.error && isMissingTableError(String(seasonQuery.error.message ?? ""))) {
        return NextResponse.json({ error: "Premium season tables not migrated yet." }, { status: 503 });
      }
      return NextResponse.json({ error: "No active season available for claim." }, { status: 409 });
    }

    const entry = await admin
      .from("game_season_entries")
      .select("total_points")
      .eq("season_id", seasonQuery.data.id)
      .eq("user_id", user.id)
      .maybeSingle();

    const totalPoints = Math.max(0, entry.data?.total_points ?? 0);
    if (totalPoints < tier.pointsRequired) {
      return NextResponse.json(
        {
          error: "Season pass tier is not unlocked yet.",
          points: totalPoints,
          pointsRequired: tier.pointsRequired,
          pointsRemaining: tier.pointsRequired - totalPoints,
        },
        { status: 409 },
      );
    }

    const existingClaim = await admin
      .from("game_season_reward_claims")
      .select("id, claimed_at")
      .eq("season_id", seasonQuery.data.id)
      .eq("user_id", user.id)
      .eq("tier_index", tier.tierIndex)
      .maybeSingle();

    if (existingClaim.error && !isMissingTableError(String(existingClaim.error.message ?? ""))) {
      return NextResponse.json({ error: "Failed to verify existing reward claim." }, { status: 500 });
    }
    if (existingClaim.data) {
      return NextResponse.json(
        {
          alreadyClaimed: true,
          tierIndex: tier.tierIndex,
          rewardCode: tier.rewardCode,
          rewardLabel: tier.rewardLabel,
          claimedAt: existingClaim.data.claimed_at,
        },
        { status: 200 },
      );
    }

    const claimInsert = await admin
      .from("game_season_reward_claims")
      .insert({
        season_id: seasonQuery.data.id,
        user_id: user.id,
        tier_index: tier.tierIndex,
        reward_code: tier.rewardCode,
        reward_payload: tier.rewardPayload,
      })
      .select("id, claimed_at")
      .maybeSingle();

    if (claimInsert.error || !claimInsert.data) {
      if (claimInsert.error && isMissingTableError(String(claimInsert.error.message ?? ""))) {
        return NextResponse.json({ error: "Season pass reward claims table not migrated yet." }, { status: 503 });
      }
      return NextResponse.json({ error: "Failed to claim season pass reward." }, { status: 500 });
    }

    return NextResponse.json({
      claimed: true,
      claimId: claimInsert.data.id,
      claimedAt: claimInsert.data.claimed_at,
      season: {
        id: seasonQuery.data.id,
        slug: seasonQuery.data.slug,
        title: seasonQuery.data.title,
      },
      tier: {
        tierIndex: tier.tierIndex,
        pointsRequired: tier.pointsRequired,
        rewardCode: tier.rewardCode,
        rewardLabel: tier.rewardLabel,
        rewardPayload: tier.rewardPayload,
      },
    });
  } catch (error) {
    console.error("Unexpected error in POST /api/games/premium/season-pass/claim:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
