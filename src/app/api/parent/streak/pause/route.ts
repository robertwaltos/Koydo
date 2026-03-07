import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const requestSchema = z.object({
  studentProfileId: z.string().uuid(),
  days: z.number().int().min(1).max(30),
  reason: z.enum(["sick_day", "vacation", "other"]),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { studentProfileId, days, reason } = parsed.data;

  const supabase = await createSupabaseServerClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Ensure user owns this student profile
  const { data: profile, error: profileError } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("id", studentProfileId)
    .eq("account_id", user.id)
    .single();

  if (profileError || !profile) {
    return NextResponse.json({ error: "Profile not found or access denied." }, { status: 403 });
  }

  const frozenUntil = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();

  // 1. Update gamification state
  const { error: updateError } = await supabase
    .from("gamification_states")
    .upsert(
      { 
        student_profile_id: studentProfileId, 
        streak_frozen_until: frozenUntil 
      },
      { onConflict: "student_profile_id" }
    );

  if (updateError) {
    return NextResponse.json({ error: "Failed to update streak state." }, { status: 500 });
  }

  // 2. Log the pause
  await supabase
    .from("gamification_streak_pauses")
    .insert({
      student_profile_id: studentProfileId,
      parent_user_id: user.id,
      reason,
      frozen_until: frozenUntil
    });

  return NextResponse.json({ success: true, frozenUntil });
}
