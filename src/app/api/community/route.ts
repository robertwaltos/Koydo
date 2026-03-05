import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";

/**
 * GET /api/community — Get recent community activity feed events
 */
export async function GET(request: Request) {
  const gate = await requireFeature("community_activity_feed", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("activity_feed_events")
    .select("id, event_type, user_display_name, metadata, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  return NextResponse.json({ events: data ?? [] });
}
