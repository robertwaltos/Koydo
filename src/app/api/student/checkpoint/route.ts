import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const checkpointSchema = z.object({
  checkpointUrl: z.string().min(1).max(500),
  moduleTitle: z.string().min(1).max(200),
  lessonTitle: z.string().min(1).max(200),
});

/**
 * POST /api/student/checkpoint — Save the learner's current position
 * so the dashboard can offer "Continue where you left off".
 */
export async function POST(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = checkpointSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const { checkpointUrl, moduleTitle, lessonTitle } = parsed.data;

  // Find the active student profile for this user
  const { data: profile, error: profileError } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("account_id", user.id)
    .limit(1)
    .maybeSingle();

  if (profileError || !profile) {
    return NextResponse.json({ error: "No student profile found" }, { status: 404 });
  }

  const { error: updateError } = await supabase
    .from("student_profiles")
    .update({
      last_checkpoint_url: checkpointUrl,
      last_module_title: moduleTitle,
      last_lesson_title: lessonTitle,
      last_checkpoint_at: new Date().toISOString(),
    })
    .eq("id", profile.id);

  if (updateError) {
    // Graceful degradation — column may not be migrated yet
    console.warn("Checkpoint save failed (column may not exist):", updateError.message);
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  return NextResponse.json({ ok: true });
}
