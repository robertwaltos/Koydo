import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { requireFeature } from "@/lib/platform/require-feature";

/**
 * GET /api/social/percentile?profileId=<id> — Get XP percentile rank
 */
export async function GET(request: Request) {
  const gate = await requireFeature("peer_comparison", request);
  if (gate) return gate;

  const url = new URL(request.url);
  const profileId = url.searchParams.get("profileId");
  if (!profileId) return NextResponse.json({ error: "profileId required" }, { status: 400 });

  const admin = createSupabaseAdminClient();

  // Get this user's XP
  const { data: myState } = await admin
    .from("gamification_states")
    .select("points")
    .eq("student_profile_id", profileId)
    .maybeSingle();

  const myXP = myState?.points ?? 0;

  // Get all XP values for percentile calculation
  const { data: allStates } = await admin
    .from("gamification_states")
    .select("points")
    .order("points", { ascending: true });

  const allPoints = (allStates ?? []).map((s: { points: number }) => s.points);
  const totalPeers = allPoints.length;

  if (totalPeers === 0) {
    return NextResponse.json({ percentile: 50, totalPeers: 0, myXP, medianXP: 0 });
  }

  const belowCount = allPoints.filter((p: number) => p < myXP).length;
  const percentile = Math.round((belowCount / totalPeers) * 100);
  const medianXP = allPoints[Math.floor(totalPeers / 2)];

  return NextResponse.json({ percentile, totalPeers, myXP, medianXP });
}
