import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/portfolio — public-facing skill portfolio data */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Fetch all portfolio data in parallel
  const [gamificationRes, certificatesRes, badgesRes, profileRes] = await Promise.all([
    supabase
      .from("gamification_states")
      .select("points, level, badges, streaks")
      .eq("user_id", user.id)
      .maybeSingle(),
    supabase
      .from("user_certificates")
      .select("*")
      .eq("user_id", user.id)
      .order("issued_at", { ascending: false }),
    supabase
      .from("gamification_states")
      .select("badges")
      .eq("user_id", user.id)
      .maybeSingle(),
    supabase
      .from("user_profiles")
      .select("display_name, birth_date")
      .eq("user_id", user.id)
      .maybeSingle(),
  ]);

  const gamification = gamificationRes.data;
  const certificates = certificatesRes.data ?? [];
  const badges = (badgesRes.data?.badges as Array<{ id: string; earnedAt: string }>) ?? [];

  // Compute stats
  const totalXP = gamification?.points ?? 0;
  const level = gamification?.level ?? 1;
  const streaks = (gamification?.streaks as { daily?: number; best?: number }) ?? {};
  const modulesCompleted = certificates.filter((c) => c.certificate_type === "module_completion").length;
  const examsPassed = certificates.filter((c) => c.certificate_type === "exam_pass").length;
  const milestonesEarned = certificates.filter((c) => c.certificate_type === "milestone").length;

  return NextResponse.json({
    displayName: profileRes.data?.display_name ?? "Learner",
    totalXP,
    level,
    currentStreak: streaks.daily ?? 0,
    bestStreak: streaks.best ?? 0,
    modulesCompleted,
    examsPassed,
    milestonesEarned,
    badgeCount: badges.length,
    certificates: certificates.slice(0, 20),
    badges: badges.slice(0, 30),
    joinedAt: user.created_at,
  });
}
