import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAllLearningModules } from "@/lib/modules";

type MasteryRow = {
  skill_id: string;
  mastery_level: number;
};

type ProgressRow = {
  lesson_id: string;
  next_review_at: string;
};

function toIdSet(rows: ProgressRow[]) {
  return new Set(rows.map((row) => row.lesson_id));
}

function isDue(nextReviewAt: string | null | undefined) {
  if (!nextReviewAt) return false;
  const reviewDate = new Date(nextReviewAt).getTime();
  return Number.isFinite(reviewDate) && reviewDate <= Date.now();
}

export async function GET() {
  try {
    const learningModules = getAllLearningModules();
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [masteryResult, progressResult] = await Promise.all([
      supabase
        .from("user_skill_mastery")
        .select("skill_id, mastery_level")
        .eq("user_id", user.id)
        .order("mastery_level", { ascending: true }),
      supabase
        .from("user_learning_progress")
        .select("lesson_id, next_review_at")
        .eq("user_id", user.id),
    ]);

    if (masteryResult.error) {
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
    if (progressResult.error) {
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    const skillMastery = (masteryResult.data ?? []) as MasteryRow[];
    const progressRows = (progressResult.data ?? []) as ProgressRow[];
    const completedLessonIds = toIdSet(progressRows);

    const weakSkills = skillMastery
      .filter((row) => Number(row.mastery_level ?? 0) < 0.7)
      .slice(0, 5)
      .map((row) => row.skill_id);

    const dueLessonIds = new Set(
      progressRows.filter((row) => isDue(row.next_review_at)).map((row) => row.lesson_id),
    );

    type Candidate = {
      lessonId: string;
      moduleId: string;
      lessonTitle: string;
      moduleTitle: string;
      score: number;
      reason: string;
    };
    const candidates: Candidate[] = [];

    for (const learningModule of learningModules) {
      for (const lesson of learningModule.lessons) {
        let score = 0;
        const reasons: string[] = [];
        const isCompleted = completedLessonIds.has(lesson.id);
        const isDueReview = dueLessonIds.has(lesson.id);

        if (!isCompleted) {
          score += 6;
          reasons.push("new lesson");
        }

        if (isDueReview) {
          score += 5;
          reasons.push("due for spaced review");
        }

        const lessonSkillIds = (lesson.questions ?? []).map((q) => q.skillId);
        const weakMatches = lessonSkillIds.filter((skillId) => weakSkills.includes(skillId)).length;
        if (weakMatches > 0) {
          score += weakMatches * 3;
          reasons.push(`targets ${weakMatches} weak skill${weakMatches > 1 ? "s" : ""}`);
        }

        if (lesson.type === "video" && !isCompleted) {
          score += 1;
          reasons.push("video introduction");
        }

        if (score <= 0) {
          continue;
        }

        candidates.push({
          lessonId: lesson.id,
          moduleId: learningModule.id,
          lessonTitle: lesson.title,
          moduleTitle: learningModule.title,
          score,
          reason: reasons.join("; "),
        });
      }
    }

    candidates.sort((a, b) => b.score - a.score);
    const topCandidate = candidates[0] ?? null;

    if (!topCandidate) {
      return NextResponse.json({
        recommendation: null,
        weakSkills,
        dueLessons: dueLessonIds.size,
      });
    }

    const recommendedLesson = learningModules
      .flatMap((m) => m.lessons)
      .find((l) => l.id === topCandidate.lessonId);

    return NextResponse.json({
      recommendation: recommendedLesson,
      recommendationContext: topCandidate,
      weakSkills,
      dueLessons: dueLessonIds.size,
      candidateCount: candidates.length,
    });

  } catch (err) {
    console.error("Unexpected error in recommendations route:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
