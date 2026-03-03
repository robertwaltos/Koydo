/**
 * POST /api/assignments — Create a new quiz assignment for a class.
 * GET  /api/assignments — List assignments for the teacher's classes.
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { requireTeacher } from "@/lib/assignments/teacher-auth";
import { generateQuiz } from "@/lib/assignments/quiz-generator";

const createAssignmentSchema = z.object({
  classId: z.string().uuid(),
  title: z.string().min(3).max(200),
  description: z.string().max(1000).optional(),
  /** Module IDs to source questions from */
  moduleIds: z.array(z.string()).max(20).optional(),
  /** Skill IDs to target */
  skillIds: z.array(z.string()).max(50).optional(),
  /** Subject filter */
  subject: z.string().max(100).optional(),
  /** Number of questions (default 10) */
  questionCount: z.number().int().min(3).max(50).optional(),
  /** Difficulty distribution (percentages) */
  difficulty: z
    .object({
      easy: z.number().min(0).max(100).optional(),
      medium: z.number().min(0).max(100).optional(),
      hard: z.number().min(0).max(100).optional(),
    })
    .optional(),
  /** Due date (ISO string) */
  dueAt: z.string().datetime().optional(),
  /** Time limit in minutes (0 = unlimited) */
  timeLimitMinutes: z.number().int().min(0).max(180).optional(),
});

export async function POST(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:assignments:post", {
      max: 20,
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

    // Teacher check
    try {
      await requireTeacher(user.id, supabase);
    } catch {
      return NextResponse.json({ error: "Teacher access required." }, { status: 403 });
    }

    const body = await request.json().catch(() => ({}));
    const validation = createAssignmentSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const input = validation.data;

    // Verify teacher owns the class
    const { data: classroom } = await supabase
      .from("classroom_entities")
      .select("id, name")
      .eq("id", input.classId)
      .eq("teacher_user_id", user.id)
      .single();

    if (!classroom) {
      return NextResponse.json({ error: "Class not found or access denied." }, { status: 404 });
    }

    // Generate quiz
    const quiz = generateQuiz({
      moduleIds: input.moduleIds,
      skillIds: input.skillIds,
      subject: input.subject,
      questionCount: input.questionCount,
    });

    if (quiz.questions.length === 0) {
      return NextResponse.json(
        { error: "No questions found matching the specified criteria." },
        { status: 422 },
      );
    }

    // Store assignment
    const { data: assignment, error: insertError } = await supabase
      .from("class_assignments")
      .insert({
        class_id: input.classId,
        assigned_by: user.id,
        module_id: input.moduleIds?.[0] ?? null,
        due_at: input.dueAt ?? null,
        metadata: {
          title: input.title,
          description: input.description ?? null,
          quiz_config: {
            moduleIds: input.moduleIds ?? [],
            skillIds: input.skillIds ?? [],
            subject: input.subject ?? null,
            questionCount: quiz.totalQuestions,
            difficulty: input.difficulty ?? { easy: 30, medium: 50, hard: 20 },
            timeLimitMinutes: input.timeLimitMinutes ?? quiz.estimatedMinutes,
          },
          generated_quiz: {
            questions: quiz.questions.map((q) => ({
              questionId: q.questionId,
              text: q.text,
              skillId: q.skillId,
              options: q.options,
              correctOptionId: q.correctOptionId,
              hint: q.hint,
              explanation: q.explanation,
              sourceModuleId: q.sourceModuleId,
              difficultyTier: q.difficultyTier,
            })),
            blueprint: quiz.blueprint,
            estimatedMinutes: quiz.estimatedMinutes,
            skillsCovered: quiz.skillsCovered,
            modulesUsed: quiz.modulesUsed,
          },
          status: "published",
        },
      })
      .select("id, class_id, assigned_by, assigned_at, due_at, module_id, metadata")
      .single();

    if (insertError) {
      console.error("Failed to create assignment:", toSafeErrorRecord(insertError));
      return NextResponse.json({ error: "Failed to create assignment." }, { status: 500 });
    }

    return NextResponse.json({
      assignment: {
        id: assignment.id,
        classId: assignment.class_id,
        className: classroom.name,
        title: input.title,
        questionCount: quiz.totalQuestions,
        estimatedMinutes: quiz.estimatedMinutes,
        skillsCovered: quiz.skillsCovered,
        modulesUsed: quiz.modulesUsed,
        dueAt: assignment.due_at,
        assignedAt: assignment.assigned_at,
        status: "published",
      },
    });
  } catch (error) {
    console.error("Unexpected assignment creation error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:assignments:get", {
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

    const url = new URL(request.url);
    const classId = url.searchParams.get("classId")?.trim();
    const role = url.searchParams.get("role")?.trim() ?? "teacher";

    if (role === "teacher") {
      // Get assignments for teacher's classes
      let query = supabase
        .from("class_assignments")
        .select("id, class_id, assigned_by, assigned_at, due_at, module_id, metadata")
        .eq("assigned_by", user.id)
        .order("assigned_at", { ascending: false })
        .limit(50);

      if (classId) {
        query = query.eq("class_id", classId);
      }

      const { data, error } = await query;
      if (error) {
        console.error("Failed to fetch assignments:", toSafeErrorRecord(error));
        return NextResponse.json({ error: "Failed to fetch assignments." }, { status: 500 });
      }

      const assignments = (data ?? []).map((row) => {
        const meta = (row.metadata ?? {}) as Record<string, unknown>;
        const quizConfig = (meta.quiz_config ?? {}) as Record<string, unknown>;
        return {
          id: row.id,
          classId: row.class_id,
          title: (meta.title as string) ?? "Untitled Assignment",
          description: (meta.description as string) ?? null,
          questionCount: (quizConfig.questionCount as number) ?? 0,
          dueAt: row.due_at,
          assignedAt: row.assigned_at,
          status: (meta.status as string) ?? "published",
        };
      });

      return NextResponse.json({ assignments, role: "teacher" });
    }

    // Student role — get assignments for enrolled classes
    const { data: enrollments } = await supabase
      .from("class_enrollments")
      .select("class_id")
      .eq("learner_user_id", user.id)
      .eq("parent_consent", true);

    if (!enrollments || enrollments.length === 0) {
      return NextResponse.json({ assignments: [], role: "student" });
    }

    const classIds = enrollments.map((e) => e.class_id);
    const { data, error } = await supabase
      .from("class_assignments")
      .select("id, class_id, assigned_at, due_at, module_id, metadata")
      .in("class_id", classIds)
      .order("assigned_at", { ascending: false })
      .limit(50);

    if (error) {
      console.error("Failed to fetch student assignments:", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Failed to fetch assignments." }, { status: 500 });
    }

    const assignments = (data ?? []).map((row) => {
      const meta = (row.metadata ?? {}) as Record<string, unknown>;
      const quizConfig = (meta.quiz_config ?? {}) as Record<string, unknown>;
      const generatedQuiz = (meta.generated_quiz ?? {}) as Record<string, unknown>;
      return {
        id: row.id,
        classId: row.class_id,
        title: (meta.title as string) ?? "Untitled Assignment",
        description: (meta.description as string) ?? null,
        questionCount: (quizConfig.questionCount as number) ?? 0,
        estimatedMinutes: (generatedQuiz.estimatedMinutes as number) ?? 0,
        dueAt: row.due_at,
        assignedAt: row.assigned_at,
        status: (meta.status as string) ?? "published",
      };
    });

    return NextResponse.json({ assignments, role: "student" });
  } catch (error) {
    console.error("Unexpected assignment list error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
