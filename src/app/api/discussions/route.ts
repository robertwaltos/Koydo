import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/discussions?moduleId=...&lessonId=... — list discussion posts */
export async function GET(req: NextRequest) {
  const moduleId = req.nextUrl.searchParams.get("moduleId");
  if (!moduleId) return NextResponse.json({ error: "moduleId required" }, { status: 400 });

  const lessonId = req.nextUrl.searchParams.get("lessonId");
  const supabase = await createSupabaseServerClient();

  let query = supabase
    .from("discussion_posts")
    .select("id, user_id, module_id, lesson_id, parent_id, body, upvotes, created_at")
    .eq("module_id", moduleId)
    .order("created_at", { ascending: true })
    .limit(50);

  if (lessonId) query = query.eq("lesson_id", lessonId);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ posts: data });
}

/** POST /api/discussions — create a discussion post */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { moduleId, lessonId, parentId, text } = body;

  if (!moduleId || !text?.trim()) {
    return NextResponse.json({ error: "moduleId and text required" }, { status: 400 });
  }

  // Basic length limit
  if (text.length > 2000) {
    return NextResponse.json({ error: "Post too long (max 2000 chars)" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("discussion_posts")
    .insert({
      user_id: user.id,
      module_id: moduleId,
      lesson_id: lessonId ?? null,
      parent_id: parentId ?? null,
      body: text.trim(),
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ post: data }, { status: 201 });
}

/** DELETE /api/discussions?id=... — delete own post */
export async function DELETE(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const { error } = await supabase
    .from("discussion_posts")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
