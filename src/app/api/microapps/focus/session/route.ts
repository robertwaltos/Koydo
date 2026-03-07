import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "edge";

/**
 * Focus Session Tracking API
 * Records completed Pomodoro focus or break sessions to Supabase.
 */
export async function POST(req: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { mode, duration } = body;

    if (!mode || !duration) {
      return NextResponse.json({ error: "Mode and duration are required" }, { status: 400 });
    }

    // ── Log the session to the database ──────────────────────────────────────
    const { data: session, error: insertError } = await supabase
      .from("focus_sessions")
      .insert({
        user_id: user.id,
        mode,
        duration_minutes: Math.round(duration),
      })
      .select()
      .single();

    if (insertError) {
      console.error("[Focus API] Insert Error:", insertError);
      return NextResponse.json({ error: "Failed to record session" }, { status: 500 });
    }

    // ── Reward Logic (Integration Hook for MMO) ──────────────────────────────
    // We could call a background task here to update their global 
    // "Focus Crystals" balance based on the session duration.

    return NextResponse.json({ success: true, session });

  } catch (err) {
    console.error("[Focus API] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
