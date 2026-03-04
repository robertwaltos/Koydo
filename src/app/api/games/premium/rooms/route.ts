import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";

const postSchema = z.object({
  mode: z.enum(["duel", "party", "coop"]).default("duel"),
  maxPlayers: z.number().int().min(2).max(12).default(4),
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
      error: "Premium subscription required for realtime rooms.",
      code: "PREMIUM_REQUIRED",
      upgradeUrl: "/billing/paywall",
    },
    { status: 402 },
  );
}

function buildRoomCode() {
  return `R-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
}

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:rooms:get", {
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
    const roomsQuery = await admin
      .from("game_rooms")
      .select("id, room_code, mode, status, max_players, host_user_id, created_at")
      .eq("status", "open")
      .order("created_at", { ascending: false })
      .limit(25);

    if (roomsQuery.error) {
      const message = String(roomsQuery.error.message ?? "");
      if (message.toLowerCase().includes("does not exist") || message.toLowerCase().includes("could not find")) {
        return NextResponse.json({ error: "Premium room tables not migrated yet." }, { status: 503 });
      }
      return NextResponse.json({ error: "Failed to load rooms." }, { status: 500 });
    }

    return NextResponse.json({ rooms: roomsQuery.data ?? [] });
  } catch (error) {
    console.error("Unexpected error in /api/games/premium/rooms:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:rooms:post", {
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
    const created = await admin
      .from("game_rooms")
      .insert({
        host_user_id: user.id,
        room_code: buildRoomCode(),
        mode: parsed.data.mode,
        status: "open",
        max_players: parsed.data.maxPlayers,
      })
      .select("id, room_code, mode, status, max_players, host_user_id, created_at")
      .maybeSingle();

    if (created.error || !created.data) {
      return NextResponse.json({ error: "Failed to create room." }, { status: 500 });
    }

    await admin
      .from("game_room_players")
      .upsert({
        room_id: created.data.id,
        user_id: user.id,
        team: "alpha",
        ready: false,
      }, {
        onConflict: "room_id,user_id",
      });

    return NextResponse.json({ room: created.data });
  } catch (error) {
    console.error("Unexpected error in POST /api/games/premium/rooms:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
