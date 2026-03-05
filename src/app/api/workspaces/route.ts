import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/workspaces — list user's collaborative workspaces */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data } = await supabase
    .from("workspaces")
    .select("*, workspace_members!inner(user_id)")
    .eq("workspace_members.user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(20);

  return NextResponse.json({ workspaces: data ?? [] });
}

/** POST /api/workspaces — create a workspace, join, or update content */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  if (body.action === "create") {
    const { name, description, moduleId } = body;
    if (!name?.trim()) return NextResponse.json({ error: "name required" }, { status: 400 });

    const { data: ws, error } = await supabase.from("workspaces").insert({
      owner_id: user.id,
      name: name.trim().slice(0, 100),
      description: description?.trim().slice(0, 500) || null,
      module_id: moduleId || null,
      content: "",
    }).select().single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    // Add creator as member
    await supabase.from("workspace_members").insert({
      workspace_id: ws.id,
      user_id: user.id,
      role: "owner",
    });

    return NextResponse.json({ workspace: ws });
  }

  if (body.action === "join") {
    const { workspaceId } = body;
    if (!workspaceId) return NextResponse.json({ error: "workspaceId required" }, { status: 400 });

    await supabase.from("workspace_members").upsert({
      workspace_id: workspaceId,
      user_id: user.id,
      role: "member",
    });

    return NextResponse.json({ ok: true });
  }

  if (body.action === "update-content") {
    const { workspaceId, content } = body;
    if (!workspaceId) return NextResponse.json({ error: "workspaceId required" }, { status: 400 });

    await supabase.from("workspaces")
      .update({ content: (content ?? "").slice(0, 50000), updated_at: new Date().toISOString() })
      .eq("id", workspaceId);

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
