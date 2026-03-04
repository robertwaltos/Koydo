import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isPremiumUserWithClient } from "@/lib/billing/premium-access";

const postSchema = z.object({
  roomCode: z.string().trim().min(4).max(16),
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

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:games:premium:rooms:join:post", {
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

    const admin = createSupabaseAdminClient();
    const room = await admin
      .from("game_rooms")
      .select("id, room_code, mode, status, max_players")
      .eq("room_code", parsed.data.roomCode.toUpperCase())
      .maybeSingle();

    if (room.error || !room.data) {
      return NextResponse.json({ error: "Room not found." }, { status: 404 });
    }
    if (room.data.status !== "open" && room.data.status !== "active") {
      return NextResponse.json({ error: "Room is closed." }, { status: 409 });
    }

    const players = await admin
      .from("game_room_players")
      .select("user_id")
      .eq("room_id", room.data.id);
    const currentCount = players.data?.length ?? 0;
    if (currentCount >= room.data.max_players) {
      return NextResponse.json({ error: "Room is full." }, { status: 409 });
    }

    const join = await admin
      .from("game_room_players")
      .upsert({
        room_id: room.data.id,
        user_id: user.id,
        team: currentCount % 2 === 0 ? "alpha" : "beta",
        ready: false,
      }, {
        onConflict: "room_id,user_id",
      });

    if (join.error) {
      return NextResponse.json({ error: "Failed to join room." }, { status: 500 });
    }

    await admin
      .from("game_rooms")
      .update({ status: "active" })
      .eq("id", room.data.id)
      .eq("status", "open");

    return NextResponse.json({
      room: {
        id: room.data.id,
        roomCode: room.data.room_code,
        mode: room.data.mode,
        status: "active",
      },
      realtimeChannel: `game-room:${room.data.id}`,
    });
  } catch (error) {
    console.error("Unexpected error in POST /api/games/premium/rooms/join:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
