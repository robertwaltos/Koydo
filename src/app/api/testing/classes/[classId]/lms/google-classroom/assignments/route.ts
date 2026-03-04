import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { resolveVerifiedTeacherClassAccess } from "@/lib/compliance/teacher-access";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  createGoogleClassroomCourseWork,
  isGoogleClassroomSyncConfigured,
} from "@/lib/integrations/google-classroom";

const requestSchema = z.object({
  mode: z.enum(["preview", "create"]).optional().default("preview"),
  executionMode: z.enum(["auto", "queue_only"]).optional().default("auto"),
  existingAssignmentId: z.string().uuid().optional(),
  examId: z.string().uuid().nullable().optional(),
  moduleId: z.string().trim().min(2).max(200).nullable().optional(),
  dueAt: z.string().datetime().nullable().optional(),
  title: z.string().trim().min(3).max(140),
  instructions: z.string().trim().max(1200).nullable().optional(),
  courseId: z.string().trim().min(3).max(120),
  topicId: z.string().trim().max(120).nullable().optional(),
  points: z.coerce.number().int().min(1).max(200).optional().default(100),
});

type AssignmentRow = {
  id: string;
  exam_id: string | null;
  module_id: string | null;
  due_at: string | null;
};

type SessionRow = {
  class_id: string;
  teacher_user_id: string;
  delivery_mode: string;
  session_status: string;
  active_assignment_id: string | null;
  lesson_focus: string | null;
  announcement: string | null;
  session_settings: Record<string, unknown> | null;
  started_at: string | null;
  ended_at: string | null;
};

type GoogleClassroomStubStatus =
  | "preview_only"
  | "queued_stub"
  | "queued_retry_required"
  | "synced";

type GoogleClassroomAssignmentStub = {
  id: string;
  status: GoogleClassroomStubStatus;
  assignmentId: string | null;
  classId: string;
  className: string | null;
  title: string;
  instructions: string | null;
  courseId: string;
  topicId: string | null;
  points: number;
  dueAt: string | null;
  target: {
    examId: string | null;
    moduleId: string | null;
  };
  generatedAt: string;
  generatedBy: string;
  attemptCount: number;
  lastAttemptAt: string | null;
  syncedAt: string | null;
  provider: string | null;
  externalCourseWorkId: string | null;
  externalAlternateLink: string | null;
  responseStatus: number | null;
  lastError: string | null;
};

function toSessionSettings(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {} as Record<string, unknown>;
  }
  return value as Record<string, unknown>;
}

function readStubHistory(value: unknown) {
  if (!Array.isArray(value)) return [] as GoogleClassroomAssignmentStub[];
  return value
    .filter((entry) => entry && typeof entry === "object" && !Array.isArray(entry))
    .map((entry) => {
      const row = entry as Record<string, unknown>;
      const status = String(row.status ?? "queued_stub");
      return {
        id: typeof row.id === "string" ? row.id : crypto.randomUUID(),
        status:
          status === "preview_only"
          || status === "queued_retry_required"
          || status === "synced"
            ? status
            : "queued_stub",
        assignmentId: typeof row.assignmentId === "string" ? row.assignmentId : null,
        classId: typeof row.classId === "string" ? row.classId : "",
        className: typeof row.className === "string" ? row.className : null,
        title: typeof row.title === "string" ? row.title : "",
        instructions: typeof row.instructions === "string" ? row.instructions : null,
        courseId: typeof row.courseId === "string" ? row.courseId : "",
        topicId: typeof row.topicId === "string" ? row.topicId : null,
        points: Math.max(1, Math.min(200, Number(row.points ?? 100) || 100)),
        dueAt: typeof row.dueAt === "string" ? row.dueAt : null,
        target: {
          examId:
            row.target && typeof row.target === "object" && !Array.isArray(row.target)
              ? typeof (row.target as Record<string, unknown>).examId === "string"
                ? (row.target as Record<string, unknown>).examId as string
                : null
              : null,
          moduleId:
            row.target && typeof row.target === "object" && !Array.isArray(row.target)
              ? typeof (row.target as Record<string, unknown>).moduleId === "string"
                ? (row.target as Record<string, unknown>).moduleId as string
                : null
              : null,
        },
        generatedAt: typeof row.generatedAt === "string" ? row.generatedAt : new Date().toISOString(),
        generatedBy: typeof row.generatedBy === "string" ? row.generatedBy : "",
        attemptCount: Math.max(0, Number(row.attemptCount ?? 0) || 0),
        lastAttemptAt: typeof row.lastAttemptAt === "string" ? row.lastAttemptAt : null,
        syncedAt: typeof row.syncedAt === "string" ? row.syncedAt : null,
        provider: typeof row.provider === "string" ? row.provider : null,
        externalCourseWorkId: typeof row.externalCourseWorkId === "string" ? row.externalCourseWorkId : null,
        externalAlternateLink:
          typeof row.externalAlternateLink === "string" ? row.externalAlternateLink : null,
        responseStatus: Number.isFinite(Number(row.responseStatus))
          ? Number(row.responseStatus)
          : null,
        lastError: typeof row.lastError === "string" ? row.lastError : null,
      } satisfies GoogleClassroomAssignmentStub;
    })
    .filter((entry) => Boolean(entry.id));
}

function updateStubById(
  stubs: GoogleClassroomAssignmentStub[],
  id: string,
  update: Partial<GoogleClassroomAssignmentStub>,
) {
  return stubs.map((stub) => {
    if (stub.id !== id) return stub;
    return {
      ...stub,
      ...update,
    };
  });
}

async function persistSessionSettings(params: {
  admin: ReturnType<typeof createSupabaseAdminClient>;
  classId: string;
  teacherUserId: string;
  current: SessionRow | null;
  assignmentId: string | null;
  settings: Record<string, unknown>;
}) {
  const { admin, classId, teacherUserId, current, assignmentId, settings } = params;

  if (current) {
    const { error } = await admin
      .from("classroom_sessions")
      .update({
        session_settings: settings,
        active_assignment_id: current.active_assignment_id ?? assignmentId,
        updated_by: teacherUserId,
      })
      .eq("class_id", classId)
      .eq("teacher_user_id", teacherUserId);

    if (error) throw error;
    return;
  }

  const { error } = await admin.from("classroom_sessions").insert({
    class_id: classId,
    teacher_user_id: teacherUserId,
    delivery_mode: "student_paced",
    session_status: "draft",
    active_assignment_id: assignmentId,
    lesson_focus: null,
    announcement: null,
    session_settings: settings,
    started_at: null,
    ended_at: null,
    updated_by: teacherUserId,
  });

  if (error) throw error;
}

export async function POST(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(
    request,
    "api:testing:classes:lms:google-classroom:assignments:post",
    {
      max: 20,
      windowMs: 60_000,
    },
  );
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many Google Classroom assignment requests. Please retry shortly." },
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
    purpose: "testing_class_google_classroom",
  });
  if (!teacherAccess.ok) {
    if (teacherAccess.status === 403 || teacherAccess.status === 404 || teacherAccess.status === 503) {
      return NextResponse.json({ error: teacherAccess.error }, { status: teacherAccess.status });
    }
    return NextResponse.json({ error: "Internal server error." }, { status: teacherAccess.status });
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (!parsed.data.existingAssignmentId && !parsed.data.examId && !parsed.data.moduleId) {
    return NextResponse.json(
      { error: "Provide existingAssignmentId or at least one of examId/moduleId." },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const nowIso = new Date().toISOString();
  const dueAt = parsed.data.dueAt ?? null;

  let assignmentId = parsed.data.existingAssignmentId ?? null;
  let examId = parsed.data.examId ?? null;
  let moduleId = parsed.data.moduleId ?? null;
  let assignmentDueAt = dueAt;

  if (parsed.data.existingAssignmentId) {
    const { data: existingAssignment, error: existingAssignmentError } = await admin
      .from("class_assignments")
      .select("id, exam_id, module_id, due_at")
      .eq("id", parsed.data.existingAssignmentId)
      .eq("class_id", classId)
      .maybeSingle();

    if (existingAssignmentError) {
      if (isMissingTestingTableError(existingAssignmentError)) {
        return NextResponse.json(
          { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
          { status: 503 },
        );
      }
      console.error("Unexpected API error.", toSafeErrorRecord(existingAssignmentError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    if (!existingAssignment) {
      return NextResponse.json(
        { error: "existingAssignmentId does not belong to this class." },
        { status: 400 },
      );
    }

    const assignment = existingAssignment as AssignmentRow;
    assignmentId = assignment.id;
    examId = assignment.exam_id;
    moduleId = assignment.module_id;
    assignmentDueAt = dueAt ?? assignment.due_at;
  } else if (parsed.data.mode === "create") {
    const { data: createdAssignment, error: createAssignmentError } = await admin
      .from("class_assignments")
      .insert({
        class_id: classId,
        exam_id: examId,
        module_id: moduleId,
        assigned_by: user.id,
        due_at: dueAt,
      })
      .select("id, exam_id, module_id, due_at")
      .single();

    if (createAssignmentError) {
      if (isMissingTestingTableError(createAssignmentError)) {
        return NextResponse.json(
          { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
          { status: 503 },
        );
      }
      console.error("Unexpected API error.", toSafeErrorRecord(createAssignmentError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    assignmentId = (createdAssignment as AssignmentRow).id;
    assignmentDueAt = (createdAssignment as AssignmentRow).due_at;
  }

  const syncRequestId = `gcls_${Date.now().toString(36)}_${crypto.randomBytes(3).toString("hex")}`;

  const syncPacket: GoogleClassroomAssignmentStub = {
    id: syncRequestId,
    status: parsed.data.mode === "create" ? "queued_stub" : "preview_only",
    assignmentId,
    classId,
    className: teacherAccess.className,
    title: parsed.data.title,
    instructions: parsed.data.instructions ?? null,
    courseId: parsed.data.courseId,
    topicId: parsed.data.topicId ?? null,
    points: parsed.data.points,
    dueAt: assignmentDueAt,
    target: {
      examId,
      moduleId,
    },
    generatedAt: nowIso,
    generatedBy: user.id,
    attemptCount: 0,
    lastAttemptAt: null,
    syncedAt: null,
    provider: null,
    externalCourseWorkId: null,
    externalAlternateLink: null,
    responseStatus: null,
    lastError: null,
  };

  let syncState: GoogleClassroomStubStatus = parsed.data.mode === "create" ? "queued_stub" : "preview_only";
  const syncConfigured = await isGoogleClassroomSyncConfigured();
  let syncExecution = {
    attempted: false,
    configured: syncConfigured,
    success: false,
  };

  if (parsed.data.mode === "create") {
    const { data: sessionRow, error: sessionError } = await admin
      .from("classroom_sessions")
      .select("class_id, teacher_user_id, delivery_mode, session_status, active_assignment_id, lesson_focus, announcement, session_settings, started_at, ended_at")
      .eq("class_id", classId)
      .maybeSingle();

    if (sessionError) {
      if (isMissingTestingTableError(sessionError)) {
        return NextResponse.json(
          { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
          { status: 503 },
        );
      }
      console.error("Unexpected API error.", toSafeErrorRecord(sessionError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    const current = (sessionRow ?? null) as SessionRow | null;
    const currentSettings = toSessionSettings(current?.session_settings);
    let stubs = [syncPacket, ...readStubHistory(currentSettings.googleClassroomAssignmentStubs)]
      .slice(0, 20);

    let nextSettings: Record<string, unknown> = {
      ...currentSettings,
      googleClassroomAssignmentStubs: stubs,
      googleClassroomLastSyncAt: nowIso,
    };

    try {
      await persistSessionSettings({
        admin,
        classId,
        teacherUserId: user.id,
        current,
        assignmentId,
        settings: nextSettings,
      });
    } catch (persistError) {
      if (isMissingTestingTableError(persistError)) {
        return NextResponse.json(
          { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
          { status: 503 },
        );
      }
      console.error("Unexpected API error.", toSafeErrorRecord(persistError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    if (parsed.data.executionMode === "auto" && syncConfigured) {
      syncExecution = {
        attempted: true,
        configured: true,
        success: false,
      };
      const attemptAt = new Date().toISOString();
      try {
        const createResult = await createGoogleClassroomCourseWork({
          courseId: parsed.data.courseId,
          title: parsed.data.title,
          description: parsed.data.instructions ?? null,
          topicId: parsed.data.topicId ?? null,
          maxPoints: parsed.data.points,
          dueAtIso: assignmentDueAt,
        });

        syncExecution.success = true;
        syncState = "synced";
        stubs = updateStubById(stubs, syncRequestId, {
          status: "synced",
          attemptCount: 1,
          lastAttemptAt: attemptAt,
          syncedAt: attemptAt,
          provider: "google_classroom",
          externalCourseWorkId: createResult.courseWorkId,
          externalAlternateLink: createResult.alternateLink,
          responseStatus: createResult.responseStatus,
          lastError: null,
        });
        nextSettings = {
          ...nextSettings,
          googleClassroomAssignmentStubs: stubs,
          googleClassroomLastSyncedAt: attemptAt,
        };
      } catch (syncError) {
        syncState = "queued_retry_required";
        const errorMessage = syncError instanceof Error ? syncError.message : "google_sync_failed";
        stubs = updateStubById(stubs, syncRequestId, {
          status: "queued_retry_required",
          attemptCount: 1,
          lastAttemptAt: attemptAt,
          lastError: errorMessage,
        });
        nextSettings = {
          ...nextSettings,
          googleClassroomAssignmentStubs: stubs,
          googleClassroomLastSyncErrorAt: attemptAt,
          googleClassroomLastSyncError: errorMessage,
        };
      }

      try {
        await persistSessionSettings({
          admin,
          classId,
          teacherUserId: user.id,
          current,
          assignmentId,
          settings: nextSettings,
        });
      } catch (persistError) {
        if (isMissingTestingTableError(persistError)) {
          return NextResponse.json(
            { error: "Testing/classroom tables are not ready. Run Supabase migrations first." },
            { status: 503 },
          );
        }
        console.error("Unexpected API error.", toSafeErrorRecord(persistError));
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
      }
    }
  }

  return NextResponse.json({
    stub: true,
    mode: parsed.data.mode,
    executionMode: parsed.data.executionMode,
    classId,
    className: teacherAccess.className,
    syncRequestId,
    syncState,
    syncExecution,
    assignment: {
      id: assignmentId,
      examId,
      moduleId,
      dueAt: assignmentDueAt,
      title: parsed.data.title,
      instructions: parsed.data.instructions ?? null,
      points: parsed.data.points,
    },
    googleClassroom: {
      courseId: parsed.data.courseId,
      topicId: parsed.data.topicId ?? null,
    },
    message:
      parsed.data.mode === "preview"
        ? "Google Classroom assignment create preview generated."
        : syncState === "synced"
          ? "Google Classroom assignment synced successfully."
          : syncState === "queued_retry_required"
            ? "Google Classroom sync attempt failed and was queued for retry."
            : "Google Classroom assignment create request queued.",
    nextActions:
      parsed.data.mode === "preview"
        ? [
          "Review course/topic mapping and assignment points.",
          "Switch mode to create when teacher is ready to sync.",
          "Keep route behind feature flag during phased rollout.",
        ]
        : syncState === "synced"
          ? [
            "Confirm coursework visibility in Google Classroom.",
            "Track learner submissions against class assignment progress.",
            "Audit sync metadata in classroom session settings.",
          ]
          : [
            "Verify Google Classroom service-account configuration.",
            "Run admin sync retry endpoint for queued items.",
            "Review sync error metadata in classroom session settings.",
          ],
  });
}


