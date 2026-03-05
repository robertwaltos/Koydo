import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/peer-tutoring — list available tutoring requests or sessions */
export async function GET(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const view = req.nextUrl.searchParams.get("view") ?? "open";

  if (view === "mine") {
    const { data } = await supabase
      .from("tutoring_requests")
      .select("*")
      .or(`requester_id.eq.${user.id},tutor_id.eq.${user.id}`)
      .order("created_at", { ascending: false })
      .limit(30);
    return NextResponse.json({ requests: data ?? [] });
  }

  // Open requests from others
  const { data } = await supabase
    .from("tutoring_requests")
    .select("*")
    .neq("requester_id", user.id)
    .eq("status", "open")
    .order("created_at", { ascending: true })
    .limit(20);

  return NextResponse.json({ requests: data ?? [] });
}

/** POST /api/peer-tutoring — create a help request or accept one */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  if (body.action === "request") {
    const { subject, topic, description } = body;
    if (!subject?.trim() || !topic?.trim()) {
      return NextResponse.json({ error: "subject and topic required" }, { status: 400 });
    }

    const { data, error } = await supabase.from("tutoring_requests").insert({
      requester_id: user.id,
      subject: subject.trim().slice(0, 100),
      topic: topic.trim().slice(0, 200),
      description: description?.trim().slice(0, 1000) || null,
      status: "open",
    }).select().single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ request: data });
  }

  if (body.action === "accept") {
    const { requestId } = body;
    if (!requestId) return NextResponse.json({ error: "requestId required" }, { status: 400 });

    const { data, error } = await supabase
      .from("tutoring_requests")
      .update({ tutor_id: user.id, status: "matched" })
      .eq("id", requestId)
      .eq("status", "open")
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ request: data });
  }

  if (body.action === "complete") {
    const { requestId } = body;
    await supabase
      .from("tutoring_requests")
      .update({ status: "completed" })
      .eq("id", requestId)
      .or(`requester_id.eq.${user.id},tutor_id.eq.${user.id}`);
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
