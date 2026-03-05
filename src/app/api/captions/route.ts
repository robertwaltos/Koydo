import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";

/**
 * GET /api/captions?videoId=<id>&lang=<lang> — Fetch caption track URL
 */
export async function GET(request: Request) {
  const gate = await requireFeature("caption_renderer", request);
  if (gate) return gate;

  const url = new URL(request.url);
  const videoId = url.searchParams.get("videoId");
  const lang = url.searchParams.get("lang") ?? "en";

  if (!videoId) {
    return NextResponse.json({ error: "videoId required" }, { status: 400 });
  }

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase
    .from("video_captions")
    .select("id, video_id, language, vtt_url")
    .eq("video_id", videoId)
    .eq("language", lang)
    .maybeSingle();

  if (!data) {
    return NextResponse.json({ error: "Caption not found" }, { status: 404 });
  }

  return NextResponse.json({ caption: data });
}
