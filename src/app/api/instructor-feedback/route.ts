import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";

/**
 * GET /api/instructor-feedback?profileId=xxx — teacher feedback for a student
 */
export async function GET(request: Request) {
  const gate = await requireFeature("instructor_feedback", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const { searchParams } = new URL(request.url);
  const profileId = searchParams.get("profileId");

  if (!profileId) {
    return NextResponse.json({ error: "Missing profileId" }, { status: 400 });
  }

  // Verify the requesting user owns this profile
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: profile } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("id", profileId)
    .eq("account_id", user.id)
    .maybeSingle();

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  const { data: feedback, error } = await supabase
    .from("instructor_feedback")
    .select("id, instructor_name, comment, assignment_title, created_at, rating")
    .eq("student_profile_id", profileId)
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ feedback: feedback ?? [] });
}
