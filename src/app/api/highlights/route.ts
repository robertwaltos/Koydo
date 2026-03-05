import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const HIGHLIGHT_COLORS = ["yellow", "green", "blue", "pink", "orange"];

/** GET /api/highlights?moduleId=x&lessonId=y — list user highlights */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ highlights: [] });

  const moduleId = req.nextUrl.searchParams.get("moduleId");
  const lessonId = req.nextUrl.searchParams.get("lessonId");

  let query = supabase
    .from("user_highlights")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (moduleId) query = query.eq("module_id", moduleId);
  if (lessonId) query = query.eq("lesson_id", lessonId);

  const { data } = await query.limit(200);

  return NextResponse.json({ highlights: data ?? [] });
}

/** POST /api/highlights — create a highlight */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { moduleId, lessonId, selectedText, annotation, color, positionStart, positionEnd } = body;

  if (!moduleId || !selectedText?.trim()) {
    return NextResponse.json({ error: "moduleId and selectedText required" }, { status: 400 });
  }

  const safeColor = HIGHLIGHT_COLORS.includes(color) ? color : "yellow";

  const { data, error } = await supabase.from("user_highlights").insert({
    user_id: user.id,
    module_id: moduleId,
    lesson_id: lessonId || null,
    selected_text: selectedText.trim().slice(0, 2000),
    annotation: annotation?.trim().slice(0, 1000) || null,
    color: safeColor,
    position_start: positionStart ?? null,
    position_end: positionEnd ?? null,
  }).select().single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ highlight: data });
}

/** DELETE /api/highlights?id=x — delete a highlight */
export async function DELETE(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  await supabase.from("user_highlights").delete().eq("id", id).eq("user_id", user.id);

  return NextResponse.json({ ok: true });
}

/** PATCH /api/highlights — update annotation or color */
export async function PATCH(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, annotation, color } = await req.json();
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (annotation !== undefined) updates.annotation = annotation?.trim().slice(0, 1000) || null;
  if (color && HIGHLIGHT_COLORS.includes(color)) updates.color = color;

  const { data, error } = await supabase
    .from("user_highlights")
    .update(updates)
    .eq("id", id)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ highlight: data });
}
