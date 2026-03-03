/**
 * GET  /api/assignments/[id] — Get assignment details (teacher sees answers, student doesn't)
 * POST /api/assignments/[id] — Submit assignment answers (student)
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { scoreQuizSubmission, type GeneratedQuiz } from "@/lib/assignments/quiz-generator";

const submitSchema = z.object({
  answers: z.record(z.string(), z.string()),
});

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(request: Request, context: RouteContext) {
  try {
    const { id: assignmentId } = await context.params;

    const rateLimit = await enforceIpRateLimit(request, "api:assignments:detail", {
      max: 30,
      windowMs: 60_000,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: assignment, error: fetchError } = await supabase
      .from("class_assignments")
      .select("id, class_id, assigned_by, assigned_at, due_at, module_id, metadata")
      .eq("id", assignmentId)
      .single();

    if (fetchError || !assignment) {
      return NextResponse.json({ error: "Assignment not found." }, { status: 404 });
    }

    const meta = (assignment.metadata ?? {}) as Record<string, unknown>;
    const generatedQuiz = (meta.generated_quiz ?? {}) as Record<string, unknown>;
    const isTeacher = assignment.assigned_by === user.id;

    // Check student has access (enrolled in the class)
    if (!isTeacher) {
      const { data: enrollment } = await supabase
        .from("class_enrollments")
        .select("id")
        .eq("class_id", assignment.class_id)
        .eq("learner_user_id", user.id)
        .eq("parent_consent", true)
        .single();

      if (!enrollment) {
        return NextResponse.json({ error: "Access denied." }, { status: 403 });
      }
    }

    // Strip correct answers for students
    const rawQuestions = (generatedQuiz.questions ?? []) as Array<Record<string, unknown>>;
    const questions = rawQuestions.map((q) => {
      const base = {
        questionId: q.questionId,
        text: q.text,
        skillId: q.skillId,
        options: q.options,
        difficultyTier: q.difficultyTier,
      };
      if (isTeacher) {
        return {
          ...base,
          correctOptionId: q.correctOptionId,
          hint: q.hint,
          explanation: q.explanation,
          sourceModuleId: q.sourceModuleId,
        };
      }
      return base;
    });

    // Check if student already submitted
    let existingSubmission: Record<string, unknown> | null = null;
    if (!isTeacher) {
      const adminClient = createSupabaseAdminClient();
      const { data: submission } = await adminClient
        .from("assignment_submissions")
        .select("id, score, total, percentage, passed, submitted_at")
        .eq("assignment_id", assignmentId)
        .eq("learner_user_id", user.id)
        .single();
      existingSubmission = submission;
    }

    // If teacher, get all submissions
    let submissions: Array<Record<string, unknown>> = [];
    if (isTeacher) {
      const adminClient = createSupabaseAdminClient();
      const { data } = await adminClient
        .from("assignment_submissions")
        .select("id, learner_user_id, score, total, percentage, passed, submitted_at, skill_breakdown")
        .eq("assignment_id", assignmentId)
        .order("submitted_at", { ascending: false });
      submissions = data ?? [];
    }

    return NextResponse.json({
      assignment: {
        id: assignment.id,
        classId: assignment.class_id,
        title: (meta.title as string) ?? "Untitled",
        description: (meta.description as string) ?? null,
        questions,
        estimatedMinutes: (generatedQuiz.estimatedMinutes as number) ?? 0,
        skillsCovered: generatedQuiz.skillsCovered ?? [],
        dueAt: assignment.due_at,
        assignedAt: assignment.assigned_at,
        status: (meta.status as string) ?? "published",
      },
      isTeacher,
      existingSubmission,
      submissions: isTeacher ? submissions : undefined,
    });
  } catch (error) {
    console.error("Unexpected assignment detail error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request, context: RouteContext) {
  try {
    const { id: assignmentId } = await context.params;

    const rateLimit = await enforceIpRateLimit(request, "api:assignments:submit", {
      max: 10,
      windowMs: 60_000,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
      );
    }

    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const validation = submitSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    // Fetch assignment
    const { data: assignment, error: fetchError } = await supabase
      .from("class_assignments")
      .select("id, class_id, assigned_by, due_at, metadata")
      .eq("id", assignmentId)
      .single();

    if (fetchError || !assignment) {
      return NextResponse.json({ error: "Assignment not found." }, { status: 404 });
    }

    // Can't submit your own assignment (teacher check)
    if (assignment.assigned_by === user.id) {
      return NextResponse.json({ error: "Teachers cannot submit their own assignments." }, { status: 403 });
    }

    // Enrollment check
    const { data: enrollment } = await supabase
      .from("class_enrollments")
      .select("id")
      .eq("class_id", assignment.class_id)
      .eq("learner_user_id", user.id)
      .eq("parent_consent", true)
      .single();

    if (!enrollment) {
      return NextResponse.json({ error: "You are not enrolled in this class." }, { status: 403 });
    }

    // Check for existing submission
    const adminClient = createSupabaseAdminClient();
    const { data: existing } = await adminClient
      .from("assignment_submissions")
      .select("id")
      .eq("assignment_id", assignmentId)
      .eq("learner_user_id", user.id)
      .single();

    if (existing) {
      return NextResponse.json({ error: "You have already submitted this assignment." }, { status: 409 });
    }

    // Check due date
    if (assignment.due_at) {
      const dueDate = new Date(assignment.due_at);
      if (dueDate < new Date()) {
        return NextResponse.json({ error: "This assignment is past due." }, { status: 422 });
      }
    }

    // Score the submission
    const meta = (assignment.metadata ?? {}) as Record<string, unknown>;
    const generatedQuizData = meta.generated_quiz as Record<string, unknown> | undefined;
    if (!generatedQuizData) {
      return NextResponse.json({ error: "Assignment has no quiz data." }, { status: 422 });
    }

    const quiz: GeneratedQuiz = {
      questions: (generatedQuizData.questions as GeneratedQuiz["questions"]) ?? [],
      totalQuestions: (generatedQuizData.questions as unknown[])?.length ?? 0,
      estimatedMinutes: (generatedQuizData.estimatedMinutes as number) ?? 0,
      skillsCovered: (generatedQuizData.skillsCovered as string[]) ?? [],
      modulesUsed: (generatedQuizData.modulesUsed as string[]) ?? [],
      blueprint: (generatedQuizData.blueprint as GeneratedQuiz["blueprint"]) ?? {},
    };

    const result = scoreQuizSubmission(quiz, validation.data.answers);

    // Save submission
    const { data: submission, error: saveError } = await adminClient
      .from("assignment_submissions")
      .insert({
        assignment_id: assignmentId,
        learner_user_id: user.id,
        class_id: assignment.class_id,
        answers: validation.data.answers,
        score: result.score,
        total: result.total,
        percentage: result.percentage,
        passed: result.passed,
        skill_breakdown: result.skillBreakdown,
        per_question: result.perQuestion,
      })
      .select("id, submitted_at")
      .single();

    if (saveError) {
      console.error("Failed to save submission:", toSafeErrorRecord(saveError));
      return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
    }

    return NextResponse.json({
      submission: {
        id: submission.id,
        submittedAt: submission.submitted_at,
        score: result.score,
        total: result.total,
        percentage: result.percentage,
        passed: result.passed,
        skillBreakdown: result.skillBreakdown,
        perQuestion: result.perQuestion.map((pq) => ({
          questionId: pq.questionId,
          correct: pq.correct,
          selectedOptionId: pq.selectedOptionId,
          correctOptionId: pq.correctOptionId,
        })),
      },
    });
  } catch (error) {
    console.error("Unexpected assignment submission error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
