import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * GET /api/gamification/streak-freeze — Get streak freeze status.
 * POST /api/gamification/streak-freeze — Use a streak freeze (manual) or earn one.
 *
 * Streak freezes are stored in gamification_states.streaks JSONB:
 *   { daily: number, weekly: number, freezesAvailable: number, lastFreezeUsedAt: string | null }
 *
 * Users earn 1 freeze per 7-day streak milestone (max 2 stored).
 * Freezes auto-activate when the daily cron detects a missed day.
 */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: state } = await supabase
    .from("gamification_states")
    .select("streaks")
    .eq("user_id", user.id)
    .maybeSingle();

  const streaks = (state?.streaks ?? {}) as Record<string, unknown>;
  return NextResponse.json({
    daily: Number(streaks.daily) || 0,
    weekly: Number(streaks.weekly) || 0,
    freezesAvailable: Number(streaks.freezesAvailable) || 0,
    lastFreezeUsedAt: streaks.lastFreezeUsedAt ?? null,
  });
}

export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const action = body?.action as string | undefined;

  const { data: state } = await supabase
    .from("gamification_states")
    .select("streaks")
    .eq("user_id", user.id)
    .maybeSingle();

  const streaks = (state?.streaks ?? { daily: 0, weekly: 0 }) as Record<string, unknown>;
  const freezesAvailable = Number(streaks.freezesAvailable) || 0;
  const MAX_FREEZES = 2;

  if (action === "earn") {
    // Award a freeze (called by streak milestone logic)
    if (freezesAvailable >= MAX_FREEZES) {
      return NextResponse.json({ error: "Maximum freezes already stored.", freezesAvailable }, { status: 400 });
    }
    const updated = { ...streaks, freezesAvailable: freezesAvailable + 1 };
    await supabase
      .from("gamification_states")
      .update({ streaks: updated, updated_at: new Date().toISOString() })
      .eq("user_id", user.id);

    return NextResponse.json({ success: true, freezesAvailable: freezesAvailable + 1 });
  }

  if (action === "use") {
    // Manually use a freeze to protect today's streak
    if (freezesAvailable <= 0) {
      return NextResponse.json({ error: "No streak freezes available." }, { status: 400 });
    }
    const updated = {
      ...streaks,
      freezesAvailable: freezesAvailable - 1,
      lastFreezeUsedAt: new Date().toISOString(),
    };
    await supabase
      .from("gamification_states")
      .update({ streaks: updated, updated_at: new Date().toISOString() })
      .eq("user_id", user.id);

    return NextResponse.json({ success: true, freezesAvailable: freezesAvailable - 1 });
  }

  return NextResponse.json({ error: "Invalid action. Use 'earn' or 'use'." }, { status: 400 });
}
