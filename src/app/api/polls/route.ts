import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/polls?moduleId=x — get polls for a module/lesson */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const moduleId = req.nextUrl.searchParams.get("moduleId");

  let query = supabase
    .from("quick_polls")
    .select("*")
    .order("created_at", { ascending: false });

  if (moduleId) query = query.eq("module_id", moduleId);

  const { data: polls } = await query.limit(20);

  // Get user's responses
  const pollIds = (polls ?? []).map((p) => p.id);
  let responses: Record<string, string> = {};

  if (pollIds.length > 0) {
    const { data: userResponses } = await supabase
      .from("poll_responses")
      .select("poll_id, selected_option")
      .eq("user_id", user.id)
      .in("poll_id", pollIds);

    for (const r of userResponses ?? []) {
      responses[r.poll_id] = r.selected_option;
    }
  }

  return NextResponse.json({
    polls: (polls ?? []).map((p) => ({
      ...p,
      userResponse: responses[p.id] ?? null,
    })),
  });
}

/** POST /api/polls — create a poll or respond to one */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  if (body.action === "create") {
    const { moduleId, lessonId, question, options } = body;
    if (!question?.trim() || !Array.isArray(options) || options.length < 2 || options.length > 6) {
      return NextResponse.json({ error: "question and 2-6 options required" }, { status: 400 });
    }

    const { data, error } = await supabase.from("quick_polls").insert({
      creator_id: user.id,
      module_id: moduleId || null,
      lesson_id: lessonId || null,
      question: question.trim().slice(0, 300),
      options: options.map((o: string) => o.trim().slice(0, 100)),
      results: Object.fromEntries(options.map((o: string) => [o.trim(), 0])),
    }).select().single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ poll: data });
  }

  if (body.action === "vote") {
    const { pollId, selectedOption } = body;
    if (!pollId || !selectedOption) {
      return NextResponse.json({ error: "pollId and selectedOption required" }, { status: 400 });
    }

    // Check if already voted
    const { data: existing } = await supabase
      .from("poll_responses")
      .select("id")
      .eq("poll_id", pollId)
      .eq("user_id", user.id)
      .single();

    if (existing) {
      return NextResponse.json({ error: "Already voted" }, { status: 409 });
    }

    // Record vote
    const { error: voteError } = await supabase.from("poll_responses").insert({
      poll_id: pollId,
      user_id: user.id,
      selected_option: selectedOption,
    });

    if (voteError) return NextResponse.json({ error: voteError.message }, { status: 500 });

    // Update results count via RPC or direct JSON update
    const { data: poll } = await supabase
      .from("quick_polls")
      .select("results")
      .eq("id", pollId)
      .single();

    if (poll?.results) {
      const results = poll.results as Record<string, number>;
      results[selectedOption] = (results[selectedOption] ?? 0) + 1;
      await supabase.from("quick_polls").update({ results }).eq("id", pollId);
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
