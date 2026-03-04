import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { computeMood, type CompanionMood } from "@/lib/greeter/companion-mood";

/**
 * GET /api/companion/mood
 *
 * Computes the companion's current mood based on server-side signals:
 *  - streak data from student_progress
 *  - lesson completion records
 *  - last visit timestamp from companion_chat_history
 *
 * Returns the mood context for the client to apply to greetings & chat.
 */
export async function GET(_req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ mood: "neutral" as CompanionMood, reason: "Not authenticated" });
  }

  // Gather signals in parallel
  const [streakResult, todayLessonsResult, lastVisitResult] = await Promise.all([
    // Current streak from student profiles
    supabase
      .from("student_profiles")
      .select("current_streak")
      .eq("user_id", user.id)
      .limit(1)
      .single(),

    // Lessons completed today
    supabase
      .from("lesson_progress")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("status", "completed")
      .gte("completed_at", new Date(new Date().setHours(0, 0, 0, 0)).toISOString()),

    // Last companion activity
    supabase
      .from("companion_chat_history")
      .select("last_active_at")
      .eq("user_id", user.id)
      .order("last_active_at", { ascending: false })
      .limit(1)
      .single(),
  ]);

  const currentStreak = streakResult.data?.current_streak ?? 0;
  const lessonsCompletedToday = todayLessonsResult.count ?? 0;
  const lastActiveAt = lastVisitResult.data?.last_active_at
    ? new Date(lastVisitResult.data.last_active_at as string).getTime()
    : undefined;

  // Check if first visit today
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const isFirstVisitToday = !lastActiveAt || lastActiveAt < todayStart.getTime();

  const isExamRoute = false; // Server can't know — client passes this via query if needed

  const moodCtx = computeMood({
    lastVisitTimestamp: lastActiveAt,
    currentStreak,
    lessonsCompletedToday,
    isFirstVisitToday,
    isExamRoute,
  });

  return NextResponse.json(moodCtx, {
    headers: {
      "Cache-Control": "private, max-age=60, stale-while-revalidate=120",
    },
  });
}
