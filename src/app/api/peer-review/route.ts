import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type ReviewStatus = "pending" | "in_review" | "completed";

/** GET /api/peer-review — list submissions available for review, or own submissions */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const view = req.nextUrl.searchParams.get("view") ?? "available";

  if (view === "mine") {
    // User's own submissions
    const { data } = await supabase
      .from("peer_reviews")
      .select("*")
      .eq("author_id", user.id)
      .order("created_at", { ascending: false })
      .limit(50);
    return NextResponse.json({ submissions: data ?? [] });
  }

  // Available submissions to review (not authored by this user, pending review)
  const { data } = await supabase
    .from("peer_reviews")
    .select("*")
    .neq("author_id", user.id)
    .eq("status", "pending")
    .order("created_at", { ascending: true })
    .limit(20);

  return NextResponse.json({ submissions: data ?? [] });
}

/** POST /api/peer-review — submit work for peer review OR submit a review */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  // Submit a new piece for review
  if (body.action === "submit") {
    const { moduleId, lessonId, title, content } = body;
    if (!moduleId || !title?.trim() || !content?.trim()) {
      return NextResponse.json({ error: "moduleId, title, and content required" }, { status: 400 });
    }

    const { data, error } = await supabase.from("peer_reviews").insert({
      author_id: user.id,
      module_id: moduleId,
      lesson_id: lessonId || null,
      title: title.trim().slice(0, 200),
      content: content.trim().slice(0, 5000),
      status: "pending" as ReviewStatus,
    }).select().single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ submission: data });
  }

  // Submit a review for someone else's work
  if (body.action === "review") {
    const { submissionId, rating, feedback } = body;
    if (!submissionId || !rating || !feedback?.trim()) {
      return NextResponse.json({ error: "submissionId, rating, and feedback required" }, { status: 400 });
    }

    const clampedRating = Math.max(1, Math.min(5, Math.round(rating)));

    const { error: reviewError } = await supabase.from("peer_review_feedback").insert({
      submission_id: submissionId,
      reviewer_id: user.id,
      rating: clampedRating,
      feedback: feedback.trim().slice(0, 2000),
    });

    if (reviewError) return NextResponse.json({ error: reviewError.message }, { status: 500 });

    // Mark submission as completed if it has received a review
    await supabase
      .from("peer_reviews")
      .update({ status: "completed" as ReviewStatus })
      .eq("id", submissionId);

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
