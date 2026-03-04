import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { resolveVerifiedTeacherClassAccess } from "@/lib/compliance/teacher-access";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { estimateAssignmentMinutes } from "@/lib/testing/assignment-builder";
import {
  applySessionStatusTransition,
  CLASSROOM_DELIVERY_MODES,
  CLASSROOM_DELIVERY_MODE_LABELS,
  CLASSROOM_SESSION_ACTIONS,
  CLASSROOM_SESSION_STATUSES,
  CLASSROOM_SESSION_STATUS_LABELS,
  type ClassroomDeliveryMode,
  type ClassroomSessionStatus,
} from "@/lib/testing/classroom-session";

const updateSessionSchema = z.object({
  action: z.enum(CLASSROOM_SESSION_ACTIONS).optional().default("save"),
  deliveryMode: z.enum(CLASSROOM_DELIVERY_MODES).optional(),
  activeAssignmentId: z.string().uuid().nullable().optional(),
  lessonFocus: z.string().trim().min(1).max(160).nullable().optional(),
  announcement: z.string().trim().max(500).nullable().optional(),
  sessionSettings: z.record(z.string(), z.unknown()).optional(),
});

type SessionRow = {
  class_id: string;
  teacher_user_id: string;
  delivery_mode: ClassroomDeliveryMode;
  session_status: ClassroomSessionStatus;
  active_assignment_id: string | null;
  lesson_focus: string | null;
  announcement: string | null;
  session_settings: Record<string, unknown> | null;
  started_at: string | null;
  ended_at: string | null;
  created_at: string;
  updated_at: string;
  updated_by: string | null;
};

type AssignmentRow = {
  id: string;
  exam_id: string | null;
  module_id: string | null;
  assigned_at: string;
  due_at: string | null;
};

type ActiveExamRow = {
  id: string;
  timing_minutes: number | null;
};

function toDefaultSession() {
  return {
    deliveryMode: "student_paced" as ClassroomDeliveryMode,
    sessionStatus: "draft" as ClassroomSessionStatus,
    activeAssignmentId: null as string | null,
    lessonFocus: null as string | null,
    announcement: null as string | null,
    sessionSettings: {} as Record<string, unknown>,
    startedAt: null as string | null,
    endedAt: null as string | null,
    createdAt: null as string | null,
    updatedAt: null as string | null,
    updatedBy: null as string | null,
  };
}

function mapSessionPayload(row: SessionRow | null) {
  if (!row) {
    return toDefaultSession();
  }
  return {
    deliveryMode: row.delivery_mode,
    sessionStatus: row.session_status,
    activeAssignmentId: row.active_assignment_id,
    lessonFocus: row.lesson_focus,
    announcement: row.announcement,
    sessionSettings:
      row.session_settings && typeof row.session_settings === "object"
        ? row.session_settings
        : {},
    startedAt: row.started_at,
    endedAt: row.ended_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    updatedBy: row.updated_by,
  };
}

function mapDeliveryModes() {
  return CLASSROOM_DELIVERY_MODES.map((mode) => ({
    id: mode,
    label: CLASSROOM_DELIVERY_MODE_LABELS[mode],
  }));
}

function mapSessionStatuses() {
  return CLASSROOM_SESSION_STATUSES.map((status) => ({
    id: status,
    label: CLASSROOM_SESSION_STATUS_LABELS[status],
  }));
}

async function loadExamTimingMinutesById(admin: ReturnType<typeof createSupabaseAdminClient>) {
  const { data, error } = await admin
    .from("testing_exams")
    .select("id, timing_minutes")
    .eq("is_active", true)
    .eq("language", "en");

  if (error) {
    throw error;
  }

  const map = new Map<string, number>();
  for (const exam of (data ?? []) as ActiveExamRow[]) {
    const numeric = Number(exam.timing_minutes ?? 0);
    if (Number.isFinite(numeric) && numeric > 0) {
      map.set(exam.id, numeric);
    }
  }
  return map;
}

function mapAssignmentLabel(assignment: AssignmentRow) {
  if (assignment.exam_id) {
    return `Exam ${assignment.exam_id}`;
  }
  if (assignment.module_id) {
    return `Module ${assignment.module_id}`;
  }
  return "Assignment";
}

function resolveNextNullableField<T>(
  payload: Record<string, unknown>,
  key: string,
  currentValue: T,
): T {
  if (Object.prototype.hasOwnProperty.call(payload, key)) {
    return (payload[key] as T) ?? (null as T);
  }
  return currentValue;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:session:get", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many classroom session requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const { classId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const teacherAccess = await resolveVerifiedTeacherClassAccess({
    userId: user.id,
    classId,
    purpose: "testing_class_session",
  });
  if (!teacherAccess.ok) {
    if (teacherAccess.status === 403 || teacherAccess.status === 404 || teacherAccess.status === 503) {
      return NextResponse.json({ error: teacherAccess.error }, { status: teacherAccess.status });
    }
    return NextResponse.json({ error: "Internal server error." }, { status: teacherAccess.status });
  }

  const admin = createSupabaseAdminClient();
  const [sessionResult, assignmentResult] = await Promise.all([
    admin
      .from("classroom_sessions")
      .select("class_id, teacher_user_id, delivery_mode, session_status, active_assignment_id, lesson_focus, announcement, session_settings, started_at, ended_at, created_at, updated_at, updated_by")
      .eq("class_id", classId)
      .maybeSingle(),
    admin
      .from("class_assignments")
      .select("id, exam_id, module_id, assigned_at, due_at")
      .eq("class_id", classId)
      .order("assigned_at", { ascending: false })
      .limit(40),
  ]);

  if (sessionResult.error) {
    if (isMissingTestingTableError(sessionResult.error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(sessionResult.error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  if (assignmentResult.error) {
    if (isMissingTestingTableError(assignmentResult.error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(assignmentResult.error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  let examTimingMinutesById: Map<string, number>;
  try {
    examTimingMinutesById = await loadExamTimingMinutesById(admin);
  } catch (error) {
    if (isMissingTestingTableError(error)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const assignments = ((assignmentResult.data ?? []) as AssignmentRow[]).map((assignment) => ({
    id: assignment.id,
    label: mapAssignmentLabel(assignment),
    examId: assignment.exam_id,
    moduleId: assignment.module_id,
    assignedAt: assignment.assigned_at,
    dueAt: assignment.due_at,
    estimatedMinutes: estimateAssignmentMinutes({
      examId: assignment.exam_id,
      moduleId: assignment.module_id,
      examTimingMinutesById,
    }),
  }));

  return NextResponse.json({
    classId: teacherAccess.classId,
    className: teacherAccess.className,
    session: mapSessionPayload((sessionResult.data ?? null) as SessionRow | null),
    controls: {
      deliveryModes: mapDeliveryModes(),
      sessionStatuses: mapSessionStatuses(),
      actions: [...CLASSROOM_SESSION_ACTIONS],
    },
    assignments,
  });
}

export async function PATCH(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:session:patch", {
    max: 40,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many classroom session updates. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const { classId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const teacherAccess = await resolveVerifiedTeacherClassAccess({
    userId: user.id,
    classId,
    purpose: "testing_class_session",
  });
  if (!teacherAccess.ok) {
    if (teacherAccess.status === 403 || teacherAccess.status === 404 || teacherAccess.status === 503) {
      return NextResponse.json({ error: teacherAccess.error }, { status: teacherAccess.status });
    }
    return NextResponse.json({ error: "Internal server error." }, { status: teacherAccess.status });
  }

  const rawBody = await request.json().catch(() => ({}));
  const parsed = updateSessionSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: currentRow, error: currentError } = await admin
    .from("classroom_sessions")
    .select("class_id, teacher_user_id, delivery_mode, session_status, active_assignment_id, lesson_focus, announcement, session_settings, started_at, ended_at, created_at, updated_at, updated_by")
    .eq("class_id", classId)
    .maybeSingle();

  if (currentError) {
    if (isMissingTestingTableError(currentError)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(currentError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const current = (currentRow ?? null) as SessionRow | null;
  const currentStatus = current?.session_status ?? "draft";
  const nowIso = new Date().toISOString();

  if (Object.prototype.hasOwnProperty.call(parsed.data, "activeAssignmentId")) {
    const candidateAssignmentId = parsed.data.activeAssignmentId;
    if (candidateAssignmentId) {
      const { data: assignmentRow, error: assignmentError } = await admin
        .from("class_assignments")
        .select("id")
        .eq("id", candidateAssignmentId)
        .eq("class_id", classId)
        .maybeSingle();
      if (assignmentError) {
        console.error("Unexpected API error.", toSafeErrorRecord(assignmentError));
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
      }
      if (!assignmentRow) {
        return NextResponse.json(
          { error: "activeAssignmentId does not belong to this class." },
          { status: 400 },
        );
      }
    }
  }

  const transition = applySessionStatusTransition({
    currentStatus,
    action: parsed.data.action,
    nowIso,
    currentStartedAt: current?.started_at ?? null,
    currentEndedAt: current?.ended_at ?? null,
  });

  const payloadRecord = parsed.data as Record<string, unknown>;
  const mergedSettings = parsed.data.sessionSettings
    ? {
      ...(current?.session_settings ?? {}),
      ...parsed.data.sessionSettings,
    }
    : (current?.session_settings ?? {});

  const nextRow = {
    class_id: classId,
    teacher_user_id: user.id,
    delivery_mode: parsed.data.deliveryMode ?? current?.delivery_mode ?? "student_paced",
    session_status: transition.nextStatus,
    active_assignment_id: resolveNextNullableField(
      payloadRecord,
      "activeAssignmentId",
      current?.active_assignment_id ?? null,
    ),
    lesson_focus: resolveNextNullableField(
      payloadRecord,
      "lessonFocus",
      current?.lesson_focus ?? null,
    ),
    announcement: resolveNextNullableField(
      payloadRecord,
      "announcement",
      current?.announcement ?? null,
    ),
    session_settings: mergedSettings,
    started_at: transition.startedAt,
    ended_at: transition.endedAt,
    updated_by: user.id,
  };

  const { data: savedRow, error: saveError } = await admin
    .from("classroom_sessions")
    .upsert(nextRow, { onConflict: "class_id" })
    .select("class_id, teacher_user_id, delivery_mode, session_status, active_assignment_id, lesson_focus, announcement, session_settings, started_at, ended_at, created_at, updated_at, updated_by")
    .single();

  if (saveError) {
    if (isMissingTestingTableError(saveError)) {
      return NextResponse.json(
        { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(saveError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    classId: teacherAccess.classId,
    className: teacherAccess.className,
    session: mapSessionPayload(savedRow as SessionRow),
  });
}
