import { NextResponse } from "next/server";
import { examTrackProfiles } from "@/lib/exam/tracks";

export async function GET() {
  return NextResponse.json({
    success: true,
    generatedAt: new Date().toISOString(),
    tracks: Object.values(examTrackProfiles),
  });
}
