import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { requireFeature } from "@/lib/platform/require-feature";

const createSchema = z.object({
  profileId: z.string().uuid(),
  goalType: z.enum(["daily_lessons", "daily_minutes", "weekly_lessons", "weekly_xp"]),
  target: z.number().int().min(1).max(999),
});

/**
 * GET /api/goals?profileId=<id> — Get active goals for a profile
 */
export async function GET(request: Request) {
  const gate = await requireFeature("goal_setting", request);
  if (gate) return gate;

  const url = new URL(request.url);
  const profileId = url.searchParams.get("profileId");
  if (!profileId) return NextResponse.json({ error: "profileId required" }, { status: 400 });

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("learning_goals")
    .select("id, goal_type, target, current, period_start")
    .eq("profile_id", profileId)
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  return NextResponse.json({ goals: data ?? [] });
}

/**
 * POST /api/goals — Create or update a goal
 */
export async function POST(request: Request) {
  const gate = await requireFeature("goal_setting", request);
  if (gate) return gate;

  const body = await request.json().catch(() => ({}));
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", details: parsed.error.issues }, { status: 400 });
  }

  const { profileId, goalType, target } = parsed.data;
  const admin = createSupabaseAdminClient();

  // Deactivate existing goals of same type
  await admin
    .from("learning_goals")
    .update({ is_active: false })
    .eq("profile_id", profileId)
    .eq("goal_type", goalType);

  // Create new goal
  const periodStart = new Date().toISOString().slice(0, 10);
  const { data, error } = await admin
    .from("learning_goals")
    .insert({
      profile_id: profileId,
      goal_type: goalType,
      target,
      current: 0,
      period_start: periodStart,
      is_active: true,
    })
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, goalId: data.id });
}
