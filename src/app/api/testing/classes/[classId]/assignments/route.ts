import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const createAssignmentSchema = z
  .object({
    examId: z.string().uuid().nullable().optional(),
    moduleId: z.string().trim().min(2).max(200).nullable().optional(),
    dueAt: z.string().datetime().nullable().optional(),
  })
  .refine(
    (value) => Boolean(value.examId || value.moduleId),
    "Either examId or moduleId is required.",
  );

async function verifyTeacherOwnership(classId: string, teacherUserId: string) {
  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("classroom_entities")
    .select("id, teacher_user_id")
    .eq("id", classId)
    .maybeSingle();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return {
      ok: false as const,
      status: 500,
      error: "Failed to verify classroom ownership.",
    };
  }
  if (!data) return { ok: false as const, status: 404, error: "Classroom not found." };
  if (data.teacher_user_id !== teacherUserId) {
    return { ok: false as const, status: 403, error: "Forbidden" };
  }
  return { ok: true as const };
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const { classId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ownership = await verifyTeacherOwnership(classId, user.id);
  if (!ownership.ok) {
    return NextResponse.json({ error: ownership.error }, { status: ownership.status });
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("class_assignments")
    .select("id, class_id, exam_id, module_id, assigned_by, assigned_at, due_at, created_at, updated_at")
    .eq("class_id", classId)
    .order("assigned_at", { ascending: false });

  if (error) {
    if (isMissingTestingTableError(error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    assignments: (data ?? []).map((entry) => ({
      id: entry.id,
      classId: entry.class_id,
      examId: entry.exam_id,
      moduleId: entry.module_id,
      assignedBy: entry.assigned_by,
      assignedAt: entry.assigned_at,
      dueAt: entry.due_at,
      createdAt: entry.created_at,
      updatedAt: entry.updated_at,
    })),
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const { classId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ownership = await verifyTeacherOwnership(classId, user.id);
  if (!ownership.ok) {
    return NextResponse.json({ error: ownership.error }, { status: ownership.status });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = createAssignmentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("class_assignments")
    .insert({
      class_id: classId,
      exam_id: parsed.data.examId ?? null,
      module_id: parsed.data.moduleId ?? null,
      assigned_by: user.id,
      due_at: parsed.data.dueAt ?? null,
    })
    .select("id, class_id, exam_id, module_id, assigned_by, assigned_at, due_at, created_at, updated_at")
    .single();

  if (error) {
    if (isMissingTestingTableError(error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    assignment: {
      id: data.id,
      classId: data.class_id,
      examId: data.exam_id,
      moduleId: data.module_id,
      assignedBy: data.assigned_by,
      assignedAt: data.assigned_at,
      dueAt: data.due_at,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    },
  });
}

