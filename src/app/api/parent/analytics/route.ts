import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

export const dynamic = "force-dynamic";

// ── Helpers ─────────────────────────────────────────────────────────────────

function dayKey(d: Date): string {
  return d.toISOString().split("T")[0];
}

function weekDay(d: Date): string {
  return d.toLocaleDateString("en", { weekday: "short" });
}

function subDays(date: Date, n: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() - n);
  return d;
}

/** Calculate current streak from an array of date strings (YYYY-MM-DD). */
function calculateStreak(activeDays: Set<string>): { current: number; longest: number } {
  if (activeDays.size === 0) return { current: 0, longest: 0 };

  const today = dayKey(new Date());
  const yesterday = dayKey(subDays(new Date(), 1));

  // Current streak — starts from today or yesterday
  let current = 0;
  let cursor = activeDays.has(today) ? new Date() : activeDays.has(yesterday) ? subDays(new Date(), 1) : null;

  if (cursor) {
    while (activeDays.has(dayKey(cursor))) {
      current++;
      cursor = subDays(cursor, 1);
    }
  }

  // Longest streak
  const sortedDays = [...activeDays].sort();
  let longest = 0;
  let run = 1;
  for (let i = 1; i < sortedDays.length; i++) {
    const prev = new Date(sortedDays[i - 1]);
    const curr = new Date(sortedDays[i]);
    const diffMs = curr.getTime() - prev.getTime();
    if (diffMs <= 86400000 * 1.5) {
      run++;
    } else {
      if (run > longest) longest = run;
      run = 1;
    }
  }
  if (run > longest) longest = run;

  return { current, longest };
}

// ── Main handler ────────────────────────────────────────────────────────────

export async function GET(request: NextRequest) {
  const rl = await enforceIpRateLimit(request, "api:parent:analytics", {
    max: 30,
    windowMs: 60_000,
  });
  if (!rl.allowed) {
    return NextResponse.json({ error: "Rate limited" }, { status: 429 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Verify parent
  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_parent")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile?.is_parent) {
    return NextResponse.json({ error: "Not a parent account" }, { status: 403 });
  }

  // Get child profiles
  const { data: children } = await supabase
    .from("student_profiles")
    .select("id, display_name, grade_level, age_years, initial_assessment_status, updated_at")
    .eq("account_id", user.id)
    .order("created_at", { ascending: true });

  const childIds = (children ?? []).map((c) => c.id);

  if (childIds.length === 0) {
    return NextResponse.json({
      children: [],
      activityTrend: [],
      subjectBreakdown: [],
      scoreTrend: [],
      aiTutorUsage: [],
      heatmap: [],
      skills: [],
      streak: { current: 0, longest: 0 },
      totals: { totalSessions: 0, totalMinutes: 0, avgScore: 0, activeDays: 0 },
    });
  }

  const searchParams = request.nextUrl.searchParams;
  const childFilter = searchParams.get("childId");
  const filteredIds = childFilter && childIds.includes(childFilter) ? [childFilter] : childIds;
  const daysBack = Math.min(Number(searchParams.get("days") ?? 90), 365);
  const sinceDate = subDays(new Date(), daysBack).toISOString();

  // ── Parallel queries ────────────────────────────────────────────────────

  const [eventsResult, conversationsResult, masteryResult, attemptsResult] = await Promise.all([
    // Learning events for activity + heatmap
    supabase
      .from("learning_events")
      .select("event_type, event_at, metadata, student_profile_id")
      .in("student_profile_id", filteredIds)
      .gte("event_at", sinceDate)
      .order("event_at", { ascending: true })
      .limit(2000),

    // AI tutor conversations
    supabase
      .from("ai_tutor_conversations")
      .select("id, student_profile_id, lesson_id, message_count, created_at")
      .in("student_profile_id", filteredIds)
      .gte("created_at", sinceDate)
      .order("created_at", { ascending: true })
      .limit(500),

    // Skill mastery data
    supabase
      .from("user_skill_mastery")
      .select("skill_id, mastery_level, correct_streak, total_attempts, last_practiced_at")
      .eq("user_id", user.id)
      .order("mastery_level", { ascending: false })
      .limit(20),

    // Pronunciation attempts for score trends
    supabase
      .from("pronunciation_attempts")
      .select("overall_score, grading_mode, created_at, student_profile_id")
      .in("student_profile_id", filteredIds)
      .gte("created_at", sinceDate)
      .order("created_at", { ascending: true })
      .limit(500),
  ]);

  const events = eventsResult.data ?? [];
  const conversations = conversationsResult.data ?? [];
  const mastery = masteryResult.data ?? [];
  const attempts = attemptsResult.data ?? [];

  // ── Activity trend (daily sessions + estimated minutes) ─────────────────

  const dailyMap = new Map<string, { sessions: number; minutes: number }>();
  const activeDays = new Set<string>();

  for (const ev of events) {
    const day = ev.event_at ? dayKey(new Date(ev.event_at)) : null;
    if (!day) continue;
    activeDays.add(day);
    const entry = dailyMap.get(day) ?? { sessions: 0, minutes: 0 };
    entry.sessions++;
    // Estimate ~3 min per learning event
    entry.minutes += 3;
    dailyMap.set(day, entry);
  }

  // Fill in missing days
  const activityTrend: { date: string; sessions: number; minutes: number }[] = [];
  const cursor = new Date(sinceDate);
  const today = new Date();
  while (cursor <= today) {
    const key = dayKey(cursor);
    const entry = dailyMap.get(key);
    activityTrend.push({
      date: key,
      sessions: entry?.sessions ?? 0,
      minutes: entry?.minutes ?? 0,
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  // For cleaner charts: aggregate to weekly if > 30 days
  let displayTrend = activityTrend;
  if (daysBack > 30) {
    const weeklyMap = new Map<string, { date: string; sessions: number; minutes: number }>();
    for (const day of activityTrend) {
      const d = new Date(day.date);
      // Week start (Monday)
      const weekStart = new Date(d);
      weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
      const wk = dayKey(weekStart);
      const entry = weeklyMap.get(wk) ?? { date: `W ${wk.slice(5)}`, sessions: 0, minutes: 0 };
      entry.sessions += day.sessions;
      entry.minutes += day.minutes;
      weeklyMap.set(wk, entry);
    }
    displayTrend = [...weeklyMap.values()];
  }

  // ── Subject breakdown ───────────────────────────────────────────────────

  const subjectMap = new Map<string, number>();
  for (const ev of events) {
    const eventType = ev.event_type ?? "other";
    const label = eventType
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c: string) => c.toUpperCase());
    subjectMap.set(label, (subjectMap.get(label) ?? 0) + 3);
  }
  const subjectBreakdown = [...subjectMap.entries()]
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);

  // ── Score trend ─────────────────────────────────────────────────────────

  const scoreTrend: { date: string; score: number }[] = [];
  for (const att of attempts) {
    const score = Number(att.overall_score);
    if (Number.isNaN(score) || !att.created_at) continue;
    scoreTrend.push({
      date: dayKey(new Date(att.created_at)),
      score: Math.round(score * 100) / 100,
    });
  }

  // ── AI tutor usage by day-of-week ───────────────────────────────────────

  const dowMap = new Map<string, { conversations: number; messages: number }>();
  for (const c of conversations) {
    if (!c.created_at) continue;
    const day = weekDay(new Date(c.created_at));
    const entry = dowMap.get(day) ?? { conversations: 0, messages: 0 };
    entry.conversations++;
    entry.messages += Number(c.message_count ?? 0);
    dowMap.set(day, entry);
  }
  const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const aiTutorUsage = dayOrder.map((day) => ({
    day,
    conversations: dowMap.get(day)?.conversations ?? 0,
    messages: dowMap.get(day)?.messages ?? 0,
  }));

  // ── Heatmap data (last 90 days) ────────────────────────────────────────

  const heatmap = [...activeDays].map((date) => ({
    date,
    count: dailyMap.get(date)?.sessions ?? 0,
  }));

  // ── Skills for radar chart ─────────────────────────────────────────────

  const skills = mastery.slice(0, 8).map((s) => ({
    skill: (s.skill_id ?? "unknown")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c: string) => c.toUpperCase()),
    score: Math.round(Number(s.mastery_level ?? 0) * 100),
  }));

  // ── Streak ─────────────────────────────────────────────────────────────

  const streak = calculateStreak(activeDays);

  // ── Totals ─────────────────────────────────────────────────────────────

  const totalSessions = events.length;
  const totalMinutes = totalSessions * 3;
  const scores = attempts
    .map((a) => Number(a.overall_score))
    .filter((s) => !Number.isNaN(s));
  const avgScore = scores.length > 0
    ? Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length)
    : 0;

  // ── Per-child mini-summaries ───────────────────────────────────────────

  const childSummaries = (children ?? []).map((child) => {
    const childEvents = events.filter((e) => e.student_profile_id === child.id);
    const childAttempts = attempts.filter((a) => a.student_profile_id === child.id);
    const childConversations = conversations.filter((c) => c.student_profile_id === child.id);
    const childScores = childAttempts
      .map((a) => Number(a.overall_score))
      .filter((s) => !Number.isNaN(s));

    return {
      id: child.id,
      displayName: child.display_name,
      gradeLevel: child.grade_level,
      ageYears: child.age_years,
      assessmentStatus: child.initial_assessment_status,
      totalSessions: childEvents.length,
      totalMinutes: childEvents.length * 3,
      avgScore: childScores.length > 0
        ? Math.round(childScores.reduce((s, v) => s + v, 0) / childScores.length)
        : 0,
      conversationCount: childConversations.length,
      lastActive: child.updated_at,
    };
  });

  return NextResponse.json({
    children: childSummaries,
    activityTrend: displayTrend,
    subjectBreakdown,
    scoreTrend,
    aiTutorUsage,
    heatmap,
    skills,
    streak,
    totals: {
      totalSessions,
      totalMinutes,
      avgScore,
      activeDays: activeDays.size,
    },
  });
}
