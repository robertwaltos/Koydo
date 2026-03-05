import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/leaderboard — weekly XP leaderboard (top 50) */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Get gamification states ordered by points (weekly proxy — points accumulated)
  // In a production system this would use a weekly_xp column reset by cron
  const { data: leaders, error } = await supabase
    .from("gamification_states")
    .select("user_id, points, level")
    .order("points", { ascending: false })
    .limit(50);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Get current user's rank
  const userEntry = leaders?.find((l) => l.user_id === user.id);
  const userRank = userEntry
    ? (leaders?.indexOf(userEntry) ?? -1) + 1
    : null;

  // Anonymize user IDs for privacy (show first 4 chars only)
  const board = (leaders ?? []).map((l, i) => ({
    rank: i + 1,
    displayId: l.user_id === user.id ? "You" : `Learner-${l.user_id.slice(0, 4)}`,
    points: l.points ?? 0,
    level: l.level ?? 1,
    isCurrentUser: l.user_id === user.id,
  }));

  return NextResponse.json({
    leaderboard: board,
    userRank,
    userPoints: userEntry?.points ?? 0,
  });
}
