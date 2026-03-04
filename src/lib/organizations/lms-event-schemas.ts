import { z } from "zod";
import type { OrganizationAuditEventInput } from "@/lib/organizations/audit";
import { lmsProviderSchema, type LmsProvider } from "@/lib/organizations/lms-auth";

export const LMS_EVENT_SCHEMA_VERSION = "lms.events.v1" as const;

export const LMS_EVENT_TYPES = [
  "lms_connection_authorized",
  "lms_connection_revoked",
  "lms_sync_started",
  "lms_sync_completed",
  "lms_sync_failed",
  "lms_assignment_published",
  "lms_grade_passback_completed",
  "lms_grade_passback_failed",
  "classroom_session_started",
  "classroom_session_ended",
] as const;

export type LmsEventType = (typeof LMS_EVENT_TYPES)[number];

export const LMS_EVENT_SOURCES = ["teacher_ui", "system_worker", "api", "webhook"] as const;
export type LmsEventSource = (typeof LMS_EVENT_SOURCES)[number];

const eventSourceSchema = z.enum(LMS_EVENT_SOURCES);
const nullableUuidSchema = z.string().uuid().nullable().optional();

const eventEnvelopeBaseSchema = z.object({
  schemaVersion: z.literal(LMS_EVENT_SCHEMA_VERSION),
  eventId: z.string().uuid(),
  organizationId: z.string().trim().min(3).max(80),
  provider: lmsProviderSchema,
  source: eventSourceSchema.default("api"),
  actorUserId: nullableUuidSchema,
  requestId: z.string().trim().min(1).max(120).nullable().optional(),
  occurredAt: z.string().datetime(),
});

const syncTargetSchema = z.enum(["roster", "assignments", "grades"]);
const classroomModeSchema = z.enum(["live", "student_paced", "front_of_class"]);

const connectionAuthorizedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("lms_connection_authorized"),
  payload: z.object({
    externalTenantId: z.string().trim().min(1).max(200).nullable().optional(),
    externalUserId: z.string().trim().min(1).max(200).nullable().optional(),
    scopeCount: z.number().int().min(0).max(200),
    hasRefreshToken: z.boolean(),
    expiresAt: z.string().datetime().nullable().optional(),
  }),
});

const connectionRevokedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("lms_connection_revoked"),
  payload: z.object({
    reason: z.enum(["user_disconnect", "token_revoked", "admin_action", "provider_policy", "unknown"]),
    revokedAt: z.string().datetime(),
  }),
});

const syncStartedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("lms_sync_started"),
  payload: z.object({
    syncId: z.string().trim().min(8).max(120),
    syncTarget: syncTargetSchema,
    trigger: z.enum(["manual", "scheduled", "webhook", "retry"]),
    expectedRecordCount: z.number().int().min(0).max(1_000_000).nullable().optional(),
  }),
});

const syncCompletedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("lms_sync_completed"),
  payload: z.object({
    syncId: z.string().trim().min(8).max(120),
    syncTarget: syncTargetSchema,
    insertedCount: z.number().int().min(0).max(1_000_000),
    updatedCount: z.number().int().min(0).max(1_000_000),
    deactivatedCount: z.number().int().min(0).max(1_000_000),
    durationMs: z.number().int().min(0).max(86_400_000),
  }),
});

const syncFailedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("lms_sync_failed"),
  payload: z.object({
    syncId: z.string().trim().min(8).max(120),
    syncTarget: syncTargetSchema,
    errorCode: z.string().trim().min(1).max(120),
    message: z.string().trim().min(1).max(240),
    retryable: z.boolean(),
  }),
});

const assignmentPublishedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("lms_assignment_published"),
  payload: z.object({
    assignmentId: z.string().trim().min(3).max(120),
    classroomId: z.string().trim().min(3).max(120),
    dueAt: z.string().datetime().nullable().optional(),
    learnerCount: z.number().int().min(0).max(1_000_000),
  }),
});

const gradePassbackCompletedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("lms_grade_passback_completed"),
  payload: z.object({
    assignmentId: z.string().trim().min(3).max(120),
    classroomId: z.string().trim().min(3).max(120),
    submittedCount: z.number().int().min(0).max(1_000_000),
    failedCount: z.number().int().min(0).max(1_000_000),
    durationMs: z.number().int().min(0).max(86_400_000),
  }),
});

const gradePassbackFailedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("lms_grade_passback_failed"),
  payload: z.object({
    assignmentId: z.string().trim().min(3).max(120),
    classroomId: z.string().trim().min(3).max(120),
    errorCode: z.string().trim().min(1).max(120),
    message: z.string().trim().min(1).max(240),
    retryable: z.boolean(),
  }),
});

const classroomSessionStartedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("classroom_session_started"),
  payload: z.object({
    sessionId: z.string().trim().min(3).max(120),
    classroomId: z.string().trim().min(3).max(120),
    mode: classroomModeSchema,
    participantCount: z.number().int().min(0).max(1_000_000),
  }),
});

const classroomSessionEndedEventSchema = eventEnvelopeBaseSchema.extend({
  eventType: z.literal("classroom_session_ended"),
  payload: z.object({
    sessionId: z.string().trim().min(3).max(120),
    classroomId: z.string().trim().min(3).max(120),
    mode: classroomModeSchema,
    durationMs: z.number().int().min(0).max(86_400_000),
    completedCount: z.number().int().min(0).max(1_000_000),
    abandonedCount: z.number().int().min(0).max(1_000_000),
  }),
});

export const lmsEventSchema = z.discriminatedUnion("eventType", [
  connectionAuthorizedEventSchema,
  connectionRevokedEventSchema,
  syncStartedEventSchema,
  syncCompletedEventSchema,
  syncFailedEventSchema,
  assignmentPublishedEventSchema,
  gradePassbackCompletedEventSchema,
  gradePassbackFailedEventSchema,
  classroomSessionStartedEventSchema,
  classroomSessionEndedEventSchema,
]);

export type LmsEvent = z.infer<typeof lmsEventSchema>;

function createFallbackEventId() {
  return `00000000-0000-4000-8000-${Math.random().toString(16).slice(2, 14).padEnd(12, "0")}`;
}

function generateEventId() {
  const maybeCrypto = globalThis.crypto;
  if (maybeCrypto && typeof maybeCrypto.randomUUID === "function") {
    return maybeCrypto.randomUUID();
  }
  return createFallbackEventId();
}

export function createLmsEvent(input: {
  organizationId: string;
  provider: LmsProvider;
  eventType: LmsEventType;
  payload: Record<string, unknown>;
  source?: LmsEventSource;
  actorUserId?: string | null;
  requestId?: string | null;
  occurredAt?: string;
  eventId?: string;
}) {
  const rawEvent = {
    schemaVersion: LMS_EVENT_SCHEMA_VERSION,
    eventId: input.eventId ?? generateEventId(),
    organizationId: input.organizationId,
    provider: input.provider,
    source: input.source ?? "api",
    actorUserId: input.actorUserId ?? null,
    requestId: input.requestId ?? null,
    occurredAt: input.occurredAt ?? new Date().toISOString(),
    eventType: input.eventType,
    payload: input.payload,
  };

  return lmsEventSchema.parse(rawEvent);
}

export function parseLmsEvent(input: unknown) {
  return lmsEventSchema.safeParse(input);
}

export function parseLmsEventBatch(inputs: readonly unknown[]) {
  const valid: LmsEvent[] = [];
  const errors: Array<{ index: number; code: string }> = [];

  for (let index = 0; index < inputs.length; index += 1) {
    const parsed = lmsEventSchema.safeParse(inputs[index]);
    if (parsed.success) {
      valid.push(parsed.data);
      continue;
    }

    const code = parsed.error.issues[0]?.code ?? "invalid_type";
    errors.push({ index, code });
  }

  return {
    valid,
    invalidCount: errors.length,
    errors,
  };
}

function resolveSubjectId(event: LmsEvent) {
  const payload = event.payload as Record<string, unknown>;
  for (const key of ["syncId", "assignmentId", "sessionId", "classroomId"]) {
    const value = payload[key];
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }
  return null;
}

export function toOrganizationAuditEventInput(event: LmsEvent): OrganizationAuditEventInput {
  return {
    organizationId: event.organizationId,
    actorUserId: event.actorUserId ?? null,
    eventType: event.eventType,
    subjectType: "lms_event",
    subjectId: resolveSubjectId(event),
    metadata: {
      schemaVersion: event.schemaVersion,
      provider: event.provider,
      source: event.source,
      requestId: event.requestId ?? null,
      payload: event.payload,
    },
    createdAt: event.occurredAt,
  };
}
