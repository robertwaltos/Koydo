import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/notes — list user's notes, optionally filtered by module/lesson */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const moduleId = req.nextUrl.searchParams.get("moduleId");
  const lessonId = req.nextUrl.searchParams.get("lessonId");

  let query = supabase
    .from("user_notes")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(100);

  if (moduleId) query = query.eq("module_id", moduleId);
  if (lessonId) query = query.eq("lesson_id", lessonId);

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ notes: data });
}

/** POST /api/notes — create or update a note */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, moduleId, lessonId, content } = body;

  if (typeof content !== "string") {
    return NextResponse.json({ error: "content is required" }, { status: 400 });
  }

  if (id) {
    // Update existing note
    const { data, error } = await supabase
      .from("user_notes")
      .update({ content, updated_at: new Date().toISOString() })
      .eq("id", id)
      .eq("user_id", user.id)
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ note: data });
  }

  // Create new note
  const { data, error } = await supabase
    .from("user_notes")
    .insert({
      user_id: user.id,
      module_id: moduleId ?? null,
      lesson_id: lessonId ?? null,
      content,
    })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ note: data }, { status: 201 });
}

/** DELETE /api/notes?id=... — delete a note */
export async function DELETE(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const { error } = await supabase
    .from("user_notes")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
