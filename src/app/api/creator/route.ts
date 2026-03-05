import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/creator — list creator submissions */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const view = req.nextUrl.searchParams.get("view") ?? "mine";

  if (view === "review") {
    // Admin/reviewer view — pending submissions
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
    if (!["admin", "educator", "reviewer"].includes(profile?.role ?? "")) {
      return NextResponse.json({ error: "Reviewer access required" }, { status: 403 });
    }
    const { data } = await supabase
      .from("creator_submissions")
      .select("*")
      .eq("status", "pending")
      .order("created_at", { ascending: true })
      .limit(30);
    return NextResponse.json({ submissions: data ?? [] });
  }

  // Creator's own submissions
  const { data } = await supabase
    .from("creator_submissions")
    .select("*")
    .eq("creator_id", user.id)
    .order("created_at", { ascending: false })
    .limit(30);

  return NextResponse.json({ submissions: data ?? [] });
}

/** POST /api/creator — submit content for review or update status */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  if (body.action === "submit") {
    const { title, contentType, subject, gradeLevel, content, description } = body;
    if (!title?.trim() || !content?.trim()) {
      return NextResponse.json({ error: "title and content required" }, { status: 400 });
    }

    const { data, error } = await supabase.from("creator_submissions").insert({
      creator_id: user.id,
      title: title.trim().slice(0, 200),
      content_type: contentType ?? "lesson",
      subject: subject?.trim() ?? "General",
      grade_level: gradeLevel ?? "6-8",
      content: content.trim().slice(0, 50000),
      description: description?.trim().slice(0, 1000) || null,
      status: "pending",
    }).select().single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ submission: data });
  }

  if (body.action === "review") {
    // Reviewer approves or rejects
    const { submissionId, status, reviewNotes } = body;
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single();
    if (!["admin", "educator", "reviewer"].includes(profile?.role ?? "")) {
      return NextResponse.json({ error: "Reviewer access required" }, { status: 403 });
    }

    await supabase.from("creator_submissions").update({
      status: status === "approved" ? "approved" : "rejected",
      reviewer_id: user.id,
      review_notes: reviewNotes?.trim().slice(0, 1000) || null,
      reviewed_at: new Date().toISOString(),
    }).eq("id", submissionId);

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
