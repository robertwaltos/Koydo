import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getLessonById } from "@/lib/modules";

type FollowupPack = {
  summary?: string;
  focusSkills?: string[];
  studyPlan?: Array<{
    dayLabel?: string;
    goal?: string;
    tasks?: string[];
  }>;
};

type FollowupRow = {
  lesson_id: string;
  module_id: string | null;
  updated_at: string;
  pack: FollowupPack | null;
};

function isMissingFollowupTableError(message: string | undefined) {
  if (!message) return false;
  const normalized = message.toLowerCase();
  return (
    normalized.includes("ai_followup_materials") &&
    (normalized.includes("does not exist") ||
      normalized.includes("could not find the table") ||
      normalized.includes("relation"))
  );
}

function buildDayLabel(date: Date) {
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function addDays(baseDate: Date, days: number) {
  const next = new Date(baseDate);
  next.setDate(baseDate.getDate() + days);
  return next;
}

function normalizeTask(task: string) {
  return task.replace(/\s+/g, " ").trim();
}

function extractTasksFromPack(pack: FollowupPack | null | undefined) {
  const tasks: string[] = [];
  for (const planDay of pack?.studyPlan ?? []) {
    for (const task of planDay.tasks ?? []) {
      const normalized = normalizeTask(task);
      if (!normalized) continue;
      tasks.push(normalized);
    }
  }
  return tasks.slice(0, 8);
}

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data, error } = await supabase
      .from("ai_followup_materials")
      .select("lesson_id, module_id, updated_at, pack")
      .eq("user_id", user.id)
      .eq("status", "completed")
      .order("updated_at", { ascending: false })
      .limit(8);

    if (error) {
      if (isMissingFollowupTableError(error.message)) {
        return NextResponse.json({
          source: "rule_based",
          setupRequired: true,
          message: "AI follow-up storage is not ready. Apply latest Supabase schema.",
          days: [],
        });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const rows = (data ?? []) as FollowupRow[];
    if (rows.length === 0) {
      return NextResponse.json({
        source: "rule_based",
        setupRequired: false,
        message: "Complete lessons to unlock your weekly AI study plan.",
        days: [],
      });
    }

    const baseDate = new Date();
    const days = Array.from({ length: 7 }).map((_, index) => {
      const targetDate = addDays(baseDate, index);
      const selected = rows[index % rows.length];
      const lessonLookup = getLessonById(selected.lesson_id);
      const tasksFromPack = extractTasksFromPack(selected.pack);
      const tasks =
        tasksFromPack.length > 0
          ? tasksFromPack.slice(index % Math.max(1, tasksFromPack.length), (index % Math.max(1, tasksFromPack.length)) + 3)
          : [
              "Review one lesson chunk and summarize it in your own words.",
              "Do a 10-minute practice round with no notes.",
              "Write one correction rule from a recent mistake.",
            ];

      const normalizedTasks = tasks.length >= 3 ? tasks : [...tasks, "Teach the concept aloud in 60 seconds."].slice(0, 3);

      return {
        dayOffset: index,
        dayLabel: buildDayLabel(targetDate),
        isoDate: targetDate.toISOString(),
        lessonId: selected.lesson_id,
        lessonTitle: lessonLookup?.lesson.title ?? selected.lesson_id,
        moduleTitle: lessonLookup?.learningModule.title ?? null,
        tasks: normalizedTasks,
      };
    });

    return NextResponse.json({
      source: "rule_based",
      setupRequired: false,
      generatedAt: new Date().toISOString(),
      days,
    });
  } catch (error) {
    console.error("Unexpected AI weekly study-plan error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
