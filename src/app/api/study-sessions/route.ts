import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/study-sessions — recent study sessions + today's total */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const [recentRes, todayRes] = await Promise.all([
    supabase
      .from("study_sessions")
      .select("*")
      .eq("user_id", user.id)
      .order("started_at", { ascending: false })
      .limit(20),
    supabase
      .from("study_sessions")
      .select("duration_seconds")
      .eq("user_id", user.id)
      .gte("started_at", todayStart.toISOString()),
  ]);

  const todayMinutes = Math.round(
    (todayRes.data ?? []).reduce((sum, s) => sum + (s.duration_seconds || 0), 0) / 60
  );

  return NextResponse.json({
    sessions: recentRes.data ?? [],
    todayMinutes,
  });
}

/** POST /api/study-sessions — record a completed study session */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { durationSeconds, subject } = body;

  if (typeof durationSeconds !== "number" || durationSeconds < 1) {
    return NextResponse.json({ error: "durationSeconds required (positive integer)" }, { status: 400 });
  }

  // Cap at 4 hours to prevent abuse
  const capped = Math.min(durationSeconds, 14400);

  const { data, error } = await supabase
    .from("study_sessions")
    .insert({
      user_id: user.id,
      duration_seconds: capped,
      subject: subject ?? null,
      ended_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ session: data }, { status: 201 });
}
