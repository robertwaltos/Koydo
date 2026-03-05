import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/whiteboard — list user's whiteboards */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data } = await supabase
    .from("whiteboards")
    .select("id, title, module_id, updated_at, created_at")
    .eq("owner_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(30);

  return NextResponse.json({ whiteboards: data ?? [] });
}

/** POST /api/whiteboard — create or save a whiteboard */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  if (body.action === "create") {
    const { title, moduleId } = body;
    const { data, error } = await supabase.from("whiteboards").insert({
      owner_id: user.id,
      title: (title ?? "Untitled").slice(0, 200),
      module_id: moduleId || null,
      canvas_data: JSON.stringify({ elements: [], version: 1 }),
    }).select().single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ whiteboard: data });
  }

  if (body.action === "save") {
    const { id, canvasData } = body;
    if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

    await supabase.from("whiteboards")
      .update({
        canvas_data: JSON.stringify(canvasData).slice(0, 500000),
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .eq("owner_id", user.id);

    return NextResponse.json({ ok: true });
  }

  if (body.action === "load") {
    const { id } = body;
    const { data } = await supabase
      .from("whiteboards")
      .select("*")
      .eq("id", id)
      .eq("owner_id", user.id)
      .single();

    return NextResponse.json({ whiteboard: data });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}

/** DELETE /api/whiteboard?id=x — delete a whiteboard */
export async function DELETE(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  await supabase.from("whiteboards").delete().eq("id", id).eq("owner_id", user.id);
  return NextResponse.json({ ok: true });
}
