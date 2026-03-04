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
      error: "Premium subscription required for seasons.",
      code: "PREMIUM_REQUIRED",
      upgradeUrl: "/billing/paywall",
    },
    { status: 402 },
  );
}

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:seasons:get", {
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
      .select("id, slug, title, description, starts_at, ends_at, status")
      .eq("status", "active")
      .lte("starts_at", nowIso)
      .gte("ends_at", nowIso)
      .order("starts_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (seasonQuery.error) {
      const message = String(seasonQuery.error.message ?? "");
      if (message.toLowerCase().includes("does not exist") || message.toLowerCase().includes("could not find")) {
        return NextResponse.json({ error: "Premium season tables not migrated yet." }, { status: 503 });
      }
      return NextResponse.json({ error: "Failed to load active season." }, { status: 500 });
    }

    const season = seasonQuery.data;
    if (!season) {
      return NextResponse.json({ season: null, leaderboard: [], myEntry: null });
    }

    const [leaderboardQuery, myQuery] = await Promise.all([
      admin
        .from("game_season_entries")
        .select("user_id, total_points, best_combo, updated_at")
        .eq("season_id", season.id)
        .order("total_points", { ascending: false })
        .order("best_combo", { ascending: false })
        .order("updated_at", { ascending: true })
        .limit(50),
      admin
        .from("game_season_entries")
        .select("user_id, total_points, best_combo, updated_at")
        .eq("season_id", season.id)
        .eq("user_id", user.id)
        .maybeSingle(),
    ]);

    return NextResponse.json({
      season: {
        id: season.id,
        slug: season.slug,
        title: season.title,
        description: season.description,
        startsAt: season.starts_at,
        endsAt: season.ends_at,
      },
      leaderboard: leaderboardQuery.data ?? [],
      myEntry: myQuery.data ?? null,
    });
  } catch (error) {
    console.error("Unexpected error in /api/games/premium/seasons:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
