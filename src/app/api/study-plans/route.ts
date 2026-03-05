import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";

const upsertSchema = z.object({
  dayOfWeek: z.number().min(0).max(6),
  hour: z.number().min(0).max(23),
  subjectId: z.string().min(1).max(100),
  label: z.string().min(1).max(200),
});

/**
 * GET /api/study-plans — fetch current user's weekly study plan slots
 */
export async function GET(request: Request) {
  const gate = await requireFeature("study_planning", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("account_id", user.id)
    .limit(1)
    .maybeSingle();

  if (!profile) return NextResponse.json({ slots: [] });

  const { data: slots } = await supabase
    .from("study_plans")
    .select("*")
    .eq("profile_id", profile.id)
    .order("day_of_week")
    .order("hour");

  return NextResponse.json({ slots: slots ?? [] });
}

/**
 * POST /api/study-plans — add or update a study plan slot
 */
export async function POST(request: Request) {
  const gate = await requireFeature("study_planning", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  const parsed = upsertSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid slot data" }, { status: 400 });

  const { data: profile } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("account_id", user.id)
    .limit(1)
    .maybeSingle();

  if (!profile) return NextResponse.json({ error: "No profile" }, { status: 404 });

  const { error } = await supabase.from("study_plans").upsert(
    {
      profile_id: profile.id,
      day_of_week: parsed.data.dayOfWeek,
      hour: parsed.data.hour,
      subject_id: parsed.data.subjectId,
      label: parsed.data.label,
    },
    { onConflict: "profile_id,day_of_week,hour" },
  );

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}

/**
 * DELETE /api/study-plans — remove a study plan slot
 */
export async function DELETE(request: Request) {
  const gate = await requireFeature("study_planning", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await supabase.from("study_plans").delete().eq("id", id);
  return NextResponse.json({ ok: true });
}
