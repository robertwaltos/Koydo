import { createGoogleClassroomCourseWork, isGoogleClassroomSyncConfigured } from "@/lib/integrations/google-classroom";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type GoogleClassroomStubStatus =
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

type SessionRow = {
  class_id: string;
  teacher_user_id: string;
  session_settings: Record<string, unknown> | null;
};

type SessionRetryState = {
  classId: string;
  teacherUserId: string;
  settings: Record<string, unknown>;
  stubs: GoogleClassroomAssignmentStub[];
};

type RetryCandidate = {
  classId: string;
  syncRequestId: string;
  generatedAt: string;
  status: GoogleClassroomStubStatus;
};

export type GoogleClassroomSyncRunInput = {
  limit: number;
  classId?: string;
  syncRequestId?: string;
  dryRun: boolean;
  includeQueuedStub: boolean;
  updatedByUserId: string;
};

export type GoogleClassroomSyncRunItem = {
  classId: string;
  syncRequestId: string;
  success: boolean;
  persisted: boolean;
  previousStatus?: GoogleClassroomStubStatus;
  nextStatus?: GoogleClassroomStubStatus;
  attemptCount?: number;
  externalCourseWorkId?: string | null;
  error?: string | null;
};

export type GoogleClassroomSyncRunResult = {
  scannedSessions: number;
  queuedCandidates: number;
  selected: number;
  attempted: number;
  succeeded: number;
  failed: number;
  persistFailed: number;
  dryRun: boolean;
  syncConfigured: boolean;
  message?: string;
  items: GoogleClassroomSyncRunItem[];
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
        id: typeof row.id === "string" ? row.id : "",
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
    .filter((entry) => Boolean(entry.id) && Boolean(entry.title) && Boolean(entry.courseId));
}

function toGeneratedAtMs(value: string) {
  const parsed = new Date(value).getTime();
  return Number.isFinite(parsed) ? parsed : 0;
}

export async function runGoogleClassroomSyncRetries(
  input: GoogleClassroomSyncRunInput,
): Promise<GoogleClassroomSyncRunResult> {
  const candidateStatuses = input.includeQueuedStub
    ? new Set<GoogleClassroomStubStatus>(["queued_stub", "queued_retry_required"])
    : new Set<GoogleClassroomStubStatus>(["queued_retry_required"]);

  const admin = createSupabaseAdminClient();
  let sessionsQuery = admin
    .from("classroom_sessions")
    .select("class_id, teacher_user_id, session_settings")
    .order("updated_at", { ascending: false })
    .limit(500);

  if (input.classId) {
    sessionsQuery = sessionsQuery.eq("class_id", input.classId);
  }

  const { data: sessionRows, error: sessionError } = await sessionsQuery;
  if (sessionError) {
    throw sessionError;
  }

  const stateByClassId = new Map<string, SessionRetryState>();
  const candidates: RetryCandidate[] = [];

  for (const session of (sessionRows ?? []) as SessionRow[]) {
    const settings = toSessionSettings(session.session_settings);
    const stubs = readStubHistory(settings.googleClassroomAssignmentStubs);
    if (stubs.length === 0) {
      continue;
    }

    stateByClassId.set(session.class_id, {
      classId: session.class_id,
      teacherUserId: session.teacher_user_id,
      settings,
      stubs,
    });

    for (const stub of stubs) {
      if (!candidateStatuses.has(stub.status)) {
        continue;
      }
      if (input.syncRequestId && stub.id !== input.syncRequestId) {
        continue;
      }
      candidates.push({
        classId: session.class_id,
        syncRequestId: stub.id,
        generatedAt: stub.generatedAt,
        status: stub.status,
      });
    }
  }

  const selectedCandidates = candidates
    .sort((left, right) => toGeneratedAtMs(left.generatedAt) - toGeneratedAtMs(right.generatedAt))
    .slice(0, input.limit);

  const syncConfigured = await isGoogleClassroomSyncConfigured();
  const emptyResultBase = {
    scannedSessions: (sessionRows ?? []).length,
    queuedCandidates: candidates.length,
    selected: selectedCandidates.length,
    attempted: 0,
    succeeded: 0,
    failed: 0,
    persistFailed: 0,
    dryRun: input.dryRun,
    syncConfigured,
    items: [] as GoogleClassroomSyncRunItem[],
  };

  if (selectedCandidates.length === 0) {
    return {
      ...emptyResultBase,
      message: "No queued Google Classroom assignment stubs matched the provided filters.",
    };
  }

  if (input.dryRun) {
    return {
      ...emptyResultBase,
      items: selectedCandidates.map((candidate) => ({
        classId: candidate.classId,
        syncRequestId: candidate.syncRequestId,
        success: false,
        persisted: false,
        previousStatus: candidate.status,
      })),
    };
  }

  if (!emptyResultBase.syncConfigured) {
    return {
      ...emptyResultBase,
      message: "Google Classroom sync is not configured.",
    };
  }

  let attempted = 0;
  let succeeded = 0;
  let failed = 0;
  let persistFailed = 0;
  const items: GoogleClassroomSyncRunItem[] = [];

  for (const candidate of selectedCandidates) {
    const state = stateByClassId.get(candidate.classId);
    if (!state) {
      failed += 1;
      items.push({
        classId: candidate.classId,
        syncRequestId: candidate.syncRequestId,
        success: false,
        persisted: false,
        error: "session_state_missing",
      });
      continue;
    }

    const index = state.stubs.findIndex((stub) => stub.id === candidate.syncRequestId);
    if (index < 0) {
      failed += 1;
      items.push({
        classId: candidate.classId,
        syncRequestId: candidate.syncRequestId,
        success: false,
        persisted: false,
        error: "stub_not_found",
      });
      continue;
    }

    const stub = state.stubs[index];
    if (!candidateStatuses.has(stub.status)) {
      failed += 1;
      items.push({
        classId: candidate.classId,
        syncRequestId: candidate.syncRequestId,
        success: false,
        persisted: false,
        previousStatus: stub.status,
        error: "stub_not_retryable",
      });
      continue;
    }

    attempted += 1;
    const attemptAt = new Date().toISOString();
    const nextAttemptCount = Math.max(0, Number(stub.attemptCount ?? 0) || 0) + 1;

    let nextStub: GoogleClassroomAssignmentStub;
    let success = false;
    let syncErrorMessage: string | null = null;

    try {
      const createResult = await createGoogleClassroomCourseWork({
        courseId: stub.courseId,
        title: stub.title,
        description: stub.instructions,
        topicId: stub.topicId,
        maxPoints: stub.points,
        dueAtIso: stub.dueAt,
      });

      success = true;
      nextStub = {
        ...stub,
        status: "synced",
        attemptCount: nextAttemptCount,
        lastAttemptAt: attemptAt,
        syncedAt: attemptAt,
        provider: "google_classroom",
        externalCourseWorkId: createResult.courseWorkId,
        externalAlternateLink: createResult.alternateLink,
        responseStatus: createResult.responseStatus,
        lastError: null,
      };
    } catch (error) {
      syncErrorMessage = error instanceof Error ? error.message : "google_sync_failed";
      nextStub = {
        ...stub,
        status: "queued_retry_required",
        attemptCount: nextAttemptCount,
        lastAttemptAt: attemptAt,
        lastError: syncErrorMessage,
      };
    }

    state.stubs[index] = nextStub;
    state.settings = {
      ...state.settings,
      googleClassroomAssignmentStubs: state.stubs.slice(0, 20),
      googleClassroomLastSyncAt: attemptAt,
      ...(success
        ? {
          googleClassroomLastSyncedAt: attemptAt,
        }
        : {
          googleClassroomLastSyncErrorAt: attemptAt,
          googleClassroomLastSyncError: syncErrorMessage,
        }),
    };

    if (success) {
      succeeded += 1;
    } else {
      failed += 1;
    }

    const { error: persistError } = await admin
      .from("classroom_sessions")
      .update({
        session_settings: state.settings,
        updated_by: input.updatedByUserId,
      })
      .eq("class_id", state.classId);

    if (persistError) {
      persistFailed += 1;
      console.error("Unexpected API error.", toSafeErrorRecord(persistError));
      items.push({
        classId: state.classId,
        syncRequestId: candidate.syncRequestId,
        success,
        persisted: false,
        previousStatus: stub.status,
        nextStatus: nextStub.status,
        error: persistError.message,
      });
      continue;
    }

    items.push({
      classId: state.classId,
      syncRequestId: candidate.syncRequestId,
      success,
      persisted: true,
      previousStatus: stub.status,
      nextStatus: nextStub.status,
      attemptCount: nextStub.attemptCount,
      externalCourseWorkId: nextStub.externalCourseWorkId,
      error: nextStub.lastError,
    });
  }

  return {
    scannedSessions: (sessionRows ?? []).length,
    queuedCandidates: candidates.length,
    selected: selectedCandidates.length,
    attempted,
    succeeded,
    failed,
    persistFailed,
    dryRun: false,
    syncConfigured: true,
    items,
  };
}


