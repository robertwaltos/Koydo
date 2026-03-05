import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";

/**
 * GET /api/readings?id=<readingId> — Fetch a single reading
 * GET /api/readings?moduleId=<moduleId> — Fetch readings for a module
 */
export async function GET(request: Request) {
  const gate = await requireFeature("readings_viewer", request);
  if (gate) return gate;

  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const moduleId = url.searchParams.get("moduleId");

  const supabase = await createSupabaseServerClient();

  if (id) {
    const { data, error } = await supabase
      .from("readings")
      .select("id, title, content, author, estimated_minutes, module_id")
      .eq("id", id)
      .maybeSingle();

    if (error || !data) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ reading: data });
  }

  if (moduleId) {
    const { data } = await supabase
      .from("readings")
      .select("id, title, author, estimated_minutes")
      .eq("module_id", moduleId)
      .order("sort_order");

    return NextResponse.json({ readings: data ?? [] });
  }

  return NextResponse.json({ error: "Provide id or moduleId" }, { status: 400 });
}
