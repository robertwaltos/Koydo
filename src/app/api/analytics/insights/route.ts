import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** GET /api/analytics/insights — AI-powered learning analytics */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Gather data from multiple sources
  const [gamification, studySessions, certificates, quizScores] = await Promise.all([
    supabase.from("gamification_states").select("*").eq("user_id", user.id).single(),
    supabase.from("study_sessions").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).limit(30),
    supabase.from("user_certificates").select("*").eq("user_id", user.id),
    supabase.from("quiz_game_scores").select("*").eq("user_id", user.id).order("created_at", { ascending: false }).limit(20),
  ]);

  const gState = gamification.data;
  const sessions = studySessions.data ?? [];
  const certs = certificates.data ?? [];
  const quizzes = quizScores.data ?? [];

  // Compute insights
  const totalStudyMinutes = sessions.reduce((sum, s) => sum + (s.duration_minutes ?? 0), 0);
  const avgSessionMinutes = sessions.length > 0 ? Math.round(totalStudyMinutes / sessions.length) : 0;

  // Study pattern (which days are most active)
  const dayCount: Record<string, number> = {};
  for (const s of sessions) {
    const day = new Date(s.created_at).toLocaleDateString("en-US", { weekday: "long" });
    dayCount[day] = (dayCount[day] ?? 0) + 1;
  }
  const mostActiveDay = Object.entries(dayCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "N/A";

  // Quiz performance
  const quizAvg = quizzes.length > 0
    ? Math.round(quizzes.reduce((s, q) => s + (q.score / q.total_questions) * 100, 0) / quizzes.length)
    : 0;

  // Streak analysis
  const currentStreak = (gState?.streaks as Record<string, number>)?.current ?? 0;
  const bestStreak = (gState?.streaks as Record<string, number>)?.best ?? 0;

  // Generate AI recommendations
  const recommendations: string[] = [];
  if (totalStudyMinutes < 60) recommendations.push("Try to study at least 15 minutes per day to build a consistent habit.");
  if (avgSessionMinutes < 15) recommendations.push("Longer study sessions (20-30 min) can improve retention. Try the Pomodoro technique!");
  if (quizAvg > 0 && quizAvg < 70) recommendations.push("Your quiz scores suggest reviewing fundamentals. Try the glossary and flashcards.");
  if (quizAvg >= 90) recommendations.push("Excellent quiz performance! Consider moving to more advanced modules.");
  if (currentStreak >= 7) recommendations.push("Amazing streak! Keep it up \u2014 consistency is the key to mastery.");
  if (currentStreak === 0) recommendations.push("Start a learning streak today! Even 5 minutes counts.");
  if (certs.length > 5) recommendations.push("Great certificate collection! Share your portfolio to showcase your achievements.");

  const insights = {
    overview: {
      totalXP: gState?.points ?? 0,
      level: gState?.level ?? 1,
      currentStreak,
      bestStreak,
      modulesCompleted: certs.filter((c) => c.certificate_type === "module_completion").length,
      totalCertificates: certs.length,
    },
    studyPatterns: {
      totalStudyMinutes,
      avgSessionMinutes,
      totalSessions: sessions.length,
      mostActiveDay,
      studyDayDistribution: dayCount,
    },
    performance: {
      quizAverage: quizAvg,
      totalQuizzesTaken: quizzes.length,
      recentQuizzes: quizzes.slice(0, 5).map((q) => ({
        score: q.score,
        total: q.total_questions,
        pct: Math.round((q.score / q.total_questions) * 100),
        date: q.created_at,
      })),
    },
    recommendations,
    weeklyActivity: sessions.slice(0, 7).map((s) => ({
      date: s.created_at,
      minutes: s.duration_minutes ?? 0,
    })),
  };

  return NextResponse.json(insights);
}
