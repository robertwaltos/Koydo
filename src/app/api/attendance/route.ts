import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";

/**
 * GET /api/attendance?profileId=xxx — check if student checked in today
 */
export async function GET(request: Request) {
  const gate = await requireFeature("attendance_checkin", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const { searchParams } = new URL(request.url);
  const profileId = searchParams.get("profileId");

  if (!profileId) return NextResponse.json({ error: "Missing profileId" }, { status: 400 });

  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  const { data } = await supabase
    .from("attendance_records")
    .select("id")
    .eq("profile_id", profileId)
    .eq("check_in_date", today)
    .maybeSingle();

  return NextResponse.json({ checkedInToday: !!data });
}

const postSchema = z.object({
  profileId: z.string().uuid(),
});

/**
 * POST /api/attendance — record daily check-in
 */
export async function POST(request: Request) {
  const gate = await requireFeature("attendance_checkin", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid profileId" }, { status: 400 });

  // Verify profile belongs to user
  const { data: profile } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("id", parsed.data.profileId)
    .eq("account_id", user.id)
    .maybeSingle();

  if (!profile) return NextResponse.json({ error: "Profile not found" }, { status: 404 });

  const today = new Date().toISOString().slice(0, 10);

  // Upsert to prevent duplicates
  const { error } = await supabase.from("attendance_records").upsert(
    {
      profile_id: profile.id,
      check_in_date: today,
      checked_in_at: new Date().toISOString(),
    },
    { onConflict: "profile_id,check_in_date" },
  );

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true, checkedInToday: true });
}
