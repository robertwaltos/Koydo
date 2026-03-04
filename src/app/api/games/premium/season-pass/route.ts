import { NextRequest, NextResponse } from "next/server";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";
import { buildSeasonPassProgress } from "@/lib/games/premium-season-pass";

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
      error: "Premium subscription required for season pass.",
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

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:season-pass:get", {
    max: 120,
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
    const seasonQuery = await admin
      .from("game_seasons")
      .select("id, slug, title, description, starts_at, ends_at")
      .eq("status", "active")
      .lte("starts_at", nowIso)
      .gte("ends_at", nowIso)
      .order("starts_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (seasonQuery.error) {
      if (isMissingTableError(String(seasonQuery.error.message ?? ""))) {
        return NextResponse.json({ error: "Premium season tables not migrated yet." }, { status: 503 });
      }
      return NextResponse.json({ error: "Failed to load season pass." }, { status: 500 });
    }

    const season = seasonQuery.data;
    if (!season) {
      return NextResponse.json({
        season: null,
        points: 0,
        bestCombo: 0,
        currentTier: 0,
        tiers: [],
        nextTier: null,
        claimableCount: 0,
      });
    }

    const [entryQuery, claimsQuery] = await Promise.all([
      admin
        .from("game_season_entries")
        .select("total_points, best_combo")
        .eq("season_id", season.id)
        .eq("user_id", user.id)
        .maybeSingle(),
      admin
        .from("game_season_reward_claims")
        .select("tier_index")
        .eq("season_id", season.id)
        .eq("user_id", user.id),
    ]);

    if (entryQuery.error && !isMissingTableError(String(entryQuery.error.message ?? ""))) {
      return NextResponse.json({ error: "Failed to load season points." }, { status: 500 });
    }
    if (claimsQuery.error) {
      if (isMissingTableError(String(claimsQuery.error.message ?? ""))) {
        return NextResponse.json(
          { error: "Season pass reward claims table not migrated yet." },
          { status: 503 },
        );
      }
      return NextResponse.json({ error: "Failed to load season pass claims." }, { status: 500 });
    }

    const points = Math.max(0, entryQuery.data?.total_points ?? 0);
    const bestCombo = Math.max(0, entryQuery.data?.best_combo ?? 0);
    const claimedTierIndexes = (claimsQuery.data ?? []).map((row) => row.tier_index);
    const progress = buildSeasonPassProgress(points, claimedTierIndexes);

    return NextResponse.json({
      season: {
        id: season.id,
        slug: season.slug,
        title: season.title,
        description: season.description,
        startsAt: season.starts_at,
        endsAt: season.ends_at,
      },
      points,
      bestCombo,
      ...progress,
    });
  } catch (error) {
    console.error("Unexpected error in /api/games/premium/season-pass:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
