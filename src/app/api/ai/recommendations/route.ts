import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getAllLearningModules } from "@/lib/modules";
import { buildAdaptiveRemediationQueue } from "@/lib/exam/remediation-queue";

type MasteryRow = {
  skill_id: string;
  mastery_level: number;
};

type ProgressRow = {
  lesson_id: string;
  next_review_at: string | null;
};

type ExamErrorRow = {
  lesson_id: string;
  skill_id: string | null;
  error_type: string;
  created_at: string;
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

    const [masteryResult, progressResult, examErrorResult] = await Promise.all([
      supabase
        .from("user_skill_mastery")
        .select("skill_id, mastery_level")
        .eq("user_id", user.id)
        .order("mastery_level", { ascending: true }),
      supabase
        .from("user_learning_progress")
        .select("lesson_id, next_review_at")
        .eq("user_id", user.id),
      supabase
        .from("user_exam_error_logs")
        .select("lesson_id, skill_id, error_type, created_at")
        .eq("user_id", user.id)
        .eq("resolved", false)
        .order("created_at", { ascending: false })
        .limit(500),
    ]);

    if (masteryResult.error) {
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
    if (progressResult.error) {
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
    if (examErrorResult.error) {
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    const skillMastery = (masteryResult.data ?? []) as MasteryRow[];
    const progressRows = (progressResult.data ?? []) as ProgressRow[];
    const unresolvedExamErrors = (examErrorResult.data ?? []) as ExamErrorRow[];
    const completedLessonIds = toIdSet(progressRows);

    const weakSkills = skillMastery
      .filter((row) => Number(row.mastery_level ?? 0) < 0.7)
      .slice(0, 5)
      .map((row) => row.skill_id);

    const dueLessonIds = new Set(
      progressRows.filter((row) => isDue(row.next_review_at)).map((row) => row.lesson_id),
    );

    const remediation = buildAdaptiveRemediationQueue({
      learningModules,
      progressRows,
      unresolvedErrors: unresolvedExamErrors,
      masteryRows: skillMastery,
      maxItems: 24,
    });
    const remediationByLessonId = new Map(
      remediation.queue.map((item) => [item.lessonId, item] as const),
    );
    const topErrorSkillSet = new Set(remediation.summary.topSkills.map((entry) => entry.skillId));

    const topErrorLessons = remediation.queue.slice(0, 5).map((item) => ({
      lessonId: item.lessonId,
      lessonTitle: item.lessonTitle,
      moduleId: item.moduleId,
      moduleTitle: item.moduleTitle,
      count: item.openErrorCount,
      urgencyScore: item.urgencyScore,
      priority: item.priority,
      reason: item.reason,
      suggestedFocus: item.suggestedFocus,
    }));

    const examRemediation = {
      unresolvedCount: remediation.summary.unresolvedCount,
      topLessons: topErrorLessons,
      topSkills: remediation.summary.topSkills,
      topErrorTypes: remediation.summary.topErrorTypes,
      queue: remediation.queue.slice(0, 8),
      priorityCounts: remediation.summary.priorityCounts,
      dueLessonCount: remediation.summary.dueLessonCount,
    };

    type Candidate = {
      lessonId: string;
      moduleId: string;
      lessonTitle: string;
      moduleTitle: string;
      score: number;
      reason: string;
      reasons: string[];
    };
    const candidates: Candidate[] = [];

    for (const learningModule of learningModules) {
      for (const lesson of learningModule.lessons) {
        let score = 0;
        const reasons: string[] = [];
        const isCompleted = completedLessonIds.has(lesson.id);
        const isDueReview = dueLessonIds.has(lesson.id);
        const remediationItem = remediationByLessonId.get(lesson.id);

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

        const unresolvedLessonErrorCount = remediationItem?.openErrorCount ?? 0;
        if (unresolvedLessonErrorCount > 0) {
          score += Math.max(4, unresolvedLessonErrorCount * 3);
          reasons.push(
            `${unresolvedLessonErrorCount} open exam error${unresolvedLessonErrorCount > 1 ? "s" : ""}`,
          );
        }

        if (remediationItem) {
          score += Math.min(14, Math.max(2, Math.round(remediationItem.urgencyScore / 2)));
          reasons.push(`remediation priority ${remediationItem.priority}`);
        }

        const errorSkillMatches = lessonSkillIds.filter((skillId) => topErrorSkillSet.has(skillId)).length;
        if (errorSkillMatches > 0) {
          score += errorSkillMatches * 2;
          reasons.push(`matches ${errorSkillMatches} frequent error skill${errorSkillMatches > 1 ? "s" : ""}`);
        }

        if (
          remediation.summary.unresolvedCount > 0 &&
          lesson.type === "quiz" &&
          typeof lesson.quizBlueprint?.timeLimitMinutes === "number" &&
          lesson.quizBlueprint.timeLimitMinutes > 0
        ) {
          score += 2;
          reasons.push("timed quiz remediation");
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
          reasons,
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
        examRemediation,
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
      examRemediation,
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
