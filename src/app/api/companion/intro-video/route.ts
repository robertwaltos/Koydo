import { NextRequest, NextResponse } from "next/server";
import { serverEnv } from "@/lib/config/env";

const HEYGEN_API_KEY = serverEnv.HEYGEN_API_KEY ?? "";

/**
 * GET /api/companion/intro-video?videoId=xxx
 *
 * Server-side proxy to HeyGen's video_status.get endpoint.
 * Returns a fresh signed CDN URL so we never expose the API key client-side.
 */
export async function GET(req: NextRequest) {
  const videoId = req.nextUrl.searchParams.get("videoId");
  if (!videoId) {
    return NextResponse.json({ error: "Missing videoId" }, { status: 400 });
  }

  if (!HEYGEN_API_KEY) {
    return NextResponse.json({ error: "HeyGen API key not configured" }, { status: 503 });
  }

  try {
    const res = await fetch(
      `https://api.heygen.com/v1/video_status.get?video_id=${encodeURIComponent(videoId)}`,
      {
        headers: {
          "X-Api-Key": HEYGEN_API_KEY,
          Accept: "application/json",
        },
        // Cache for 1 hour — signed URLs last ~1 year, re-fetching daily is plenty
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `HeyGen returned ${res.status}` },
        { status: 502 },
      );
    }

    const json = await res.json();
    const data = json?.data;

    if (data?.status !== "completed" || !data?.video_url) {
      return NextResponse.json(
        { error: `Video not ready: ${data?.status ?? "unknown"}` },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { videoUrl: data.video_url as string, duration: data.duration as number },
      {
        headers: {
          // Let the client cache 55 minutes so we stay well inside the 1-hour revalidate window
          "Cache-Control": "public, max-age=3300, stale-while-revalidate=600",
        },
      },
    );
  } catch (err) {
    console.error("[intro-video] HeyGen fetch failed:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
