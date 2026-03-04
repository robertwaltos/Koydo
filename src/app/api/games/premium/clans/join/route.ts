import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";

const postSchema = z.object({
  inviteCode: z.string().trim().min(6).max(24),
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
      error: "Premium subscription required for clans.",
      code: "PREMIUM_REQUIRED",
      upgradeUrl: "/billing/paywall",
    },
    { status: 402 },
  );
}

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:clans:join:post", {
    max: 40,
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

    const admin = createSupabaseAdminClient();
    const clan = await admin
      .from("game_clans")
      .select("id, name, invite_code")
      .eq("invite_code", parsed.data.inviteCode.toUpperCase())
      .eq("is_active", true)
      .maybeSingle();

    if (clan.error || !clan.data) {
      return NextResponse.json({ error: "Clan not found for invite code." }, { status: 404 });
    }

    const joined = await admin
      .from("game_clan_members")
      .upsert({
        clan_id: clan.data.id,
        user_id: user.id,
        role: "member",
        status: "active",
      }, {
        onConflict: "clan_id,user_id",
      });

    if (joined.error) {
      return NextResponse.json({ error: "Failed to join clan." }, { status: 500 });
    }

    return NextResponse.json({ clan: clan.data });
  } catch (error) {
    console.error("Unexpected error in POST /api/games/premium/clans/join:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
