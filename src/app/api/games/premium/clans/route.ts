import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";

const postSchema = z.object({
  name: z.string().trim().min(3).max(48),
  description: z.string().trim().max(240).optional(),
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

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:clans:get", {
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
    const memberships = await admin
      .from("game_clan_members")
      .select("clan_id, role, contribution_points")
      .eq("user_id", user.id)
      .eq("status", "active");

    if (memberships.error) {
      const message = String(memberships.error.message ?? "");
      if (message.toLowerCase().includes("does not exist") || message.toLowerCase().includes("could not find")) {
        return NextResponse.json({ error: "Premium clan tables not migrated yet." }, { status: 503 });
      }
      return NextResponse.json({ error: "Failed to load clan memberships." }, { status: 500 });
    }

    const clanIds = (memberships.data ?? []).map((row) => row.clan_id);
    if (clanIds.length === 0) {
      return NextResponse.json({ clans: [] });
    }

    const clans = await admin
      .from("game_clans")
      .select("id, name, description, invite_code, owner_user_id, is_active, created_at")
      .in("id", clanIds);

    if (clans.error) {
      return NextResponse.json({ error: "Failed to load clans." }, { status: 500 });
    }

    return NextResponse.json({
      clans: (clans.data ?? []).map((clan) => ({
        ...clan,
        membership: memberships.data?.find((entry) => entry.clan_id === clan.id) ?? null,
      })),
    });
  } catch (error) {
    console.error("Unexpected error in /api/games/premium/clans:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:clans:post", {
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
    const inviteCode = `CLAN-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    const clanInsert = await admin
      .from("game_clans")
      .insert({
        owner_user_id: user.id,
        name: parsed.data.name,
        description: parsed.data.description ?? null,
        invite_code: inviteCode,
        is_active: true,
      })
      .select("id, name, description, invite_code, created_at")
      .maybeSingle();

    if (clanInsert.error || !clanInsert.data) {
      return NextResponse.json({ error: "Failed to create clan." }, { status: 500 });
    }

    await admin
      .from("game_clan_members")
      .upsert({
        clan_id: clanInsert.data.id,
        user_id: user.id,
        role: "owner",
        status: "active",
      }, { onConflict: "clan_id,user_id" });

    return NextResponse.json({ clan: clanInsert.data });
  } catch (error) {
    console.error("Unexpected error in POST /api/games/premium/clans:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
