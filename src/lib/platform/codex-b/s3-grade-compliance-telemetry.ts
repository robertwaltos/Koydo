import { z } from "zod";

// S3 tickets: B-A07, B-A08, B-A09

export const gradePassbackProviderSchema = z.enum([
  "google_classroom",
  "canvas",
  "schoology",
  "moodle",
  "lti_1p3",
]);

export const gradePassbackOutcomeSchema = z.object({
  provider: gradePassbackProviderSchema,
  assignmentId: z.string().trim().min(1).max(120),
  learnerExternalId: z.string().trim().min(1).max(200),
  rawScore: z.number().min(0).max(1000),
  maxScore: z.number().positive().max(1000),
  passedAt: z.string().datetime(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export type GradePassbackOutcome = z.infer<typeof gradePassbackOutcomeSchema>;

export function normalizeGradePassbackScore(input: GradePassbackOutcome) {
  const parsed = gradePassbackOutcomeSchema.parse(input);
  const ratio = parsed.maxScore <= 0 ? 0 : parsed.rawScore / parsed.maxScore;
  return {
    ...parsed,
    normalizedPercent: Math.max(0, Math.min(100, Math.round(ratio * 10000) / 100)),
  };
}

export type StudentDataAccessRequest = {
  learnerAgeYears: number;
  hasParentConsent: boolean;
  actorRole: "owner" | "admin" | "teacher" | "it_manager" | "viewer";
  purpose:
    | "classroom_learning"
    | "standards_reporting"
    | "grade_passback"
    | "platform_diagnostics";
  hasDistrictDpa: boolean;
};

export function evaluateFerpaCoppaGate(input: StudentDataAccessRequest) {
  const age = Math.max(0, Math.floor(input.learnerAgeYears));
  const roleAllowed = ["owner", "admin", "teacher", "it_manager"].includes(input.actorRole);
  if (!roleAllowed) return { allowed: false, reason: "role_not_allowed" as const };

  if (!input.hasDistrictDpa && input.purpose !== "platform_diagnostics") {
    return { allowed: false, reason: "missing_dpa" as const };
  }

  if (age < 13 && !input.hasParentConsent) {
    return { allowed: false, reason: "coppa_parent_consent_required" as const };
  }

  return { allowed: true, reason: "allowed" as const };
}

export const classroomTelemetryEventSchema = z.object({
  eventId: z.string().uuid(),
  classId: z.string().uuid(),
  sessionId: z.string().trim().min(1).max(120),
  eventType: z.enum([
    "session_started",
    "prompt_presented",
    "prompt_answered",
    "hint_requested",
    "session_ended",
  ]),
  actorType: z.enum(["teacher", "learner", "system"]),
  occurredAt: z.string().datetime(),
  payload: z.record(z.string(), z.unknown()).default({}),
});

export type ClassroomTelemetryEvent = z.infer<typeof classroomTelemetryEventSchema>;

export function buildClassroomTelemetryBatch(events: readonly ClassroomTelemetryEvent[]) {
  const safe = events
    .map((event) => classroomTelemetryEventSchema.safeParse(event))
    .filter((result): result is { success: true; data: ClassroomTelemetryEvent } => result.success)
    .map((result) => result.data)
    .sort((a, b) => Date.parse(a.occurredAt) - Date.parse(b.occurredAt));

  return {
    count: safe.length,
    firstEventAt: safe[0]?.occurredAt ?? null,
    lastEventAt: safe[safe.length - 1]?.occurredAt ?? null,
    events: safe,
  };
}
