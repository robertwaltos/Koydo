import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { requireFeature } from "@/lib/platform/require-feature";

const createSchema = z.object({
  profileId: z.string().uuid(),
  prompt: z.string().min(1).max(500),
  response: z.string().min(1).max(2000),
  lessonId: z.string().optional(),
});

/**
 * GET /api/journal?profileId=<id>[&lessonId=<id>] — List journal entries
 */
export async function GET(request: Request) {
  const gate = await requireFeature("reflection_journal", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const profileId = url.searchParams.get("profileId");
  const lessonId = url.searchParams.get("lessonId");

  if (!profileId) return NextResponse.json({ error: "profileId required" }, { status: 400 });

  let query = supabase
    .from("reflection_journal")
    .select("id, prompt, response, lesson_id, created_at")
    .eq("profile_id", profileId)
    .order("created_at", { ascending: false })
    .limit(20);

  if (lessonId) {
    query = query.eq("lesson_id", lessonId);
  }

  const { data } = await query;
  return NextResponse.json({ entries: data ?? [] });
}

/**
 * POST /api/journal — Create a journal entry
 */
export async function POST(request: Request) {
  const gate = await requireFeature("reflection_journal", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Verify profile ownership
  const { data: profile } = await supabase
    .from("student_profiles")
    .select("id")
    .eq("id", parsed.data.profileId)
    .eq("account_id", user.id)
    .maybeSingle();

  if (!profile) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { data, error } = await supabase
    .from("reflection_journal")
    .insert({
      profile_id: parsed.data.profileId,
      prompt: parsed.data.prompt,
      response: parsed.data.response,
      lesson_id: parsed.data.lessonId ?? null,
    })
    .select("id, prompt, response, lesson_id, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ entry: data });
}
