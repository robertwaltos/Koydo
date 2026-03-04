import { z } from "zod";
import {
  buildClassroomTelemetryBatch,
  classroomTelemetryEventSchema,
  evaluateFerpaCoppaGate,
  gradePassbackProviderSchema,
  normalizeGradePassbackScore,
} from "@/lib/platform/codex-b/s3-grade-compliance-telemetry";

const gradePassbackOutcomeInputSchema = z.object({
  provider: gradePassbackProviderSchema,
  assignmentId: z.string().trim().min(1).max(120),
  learnerExternalId: z.string().trim().min(1).max(200),
  rawScore: z.number().min(0).max(1000),
  maxScore: z.number().positive().max(1000),
  learnerAgeYears: z.number().int().min(3).max(21),
  hasParentConsent: z.boolean().default(false),
  hasDistrictDpa: z.boolean().default(true),
  passedAt: z.string().datetime().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const gradePassbackPayloadSchema = z.object({
  dryRun: z.boolean().optional().default(false),
  outcomes: z.array(gradePassbackOutcomeInputSchema).min(1).max(500),
});

export type GradePassbackPayload = z.infer<typeof gradePassbackPayloadSchema>;

export function evaluateGradePassbackPayload(input: GradePassbackPayload) {
  const parsed = gradePassbackPayloadSchema.parse(input);

  const accepted: Array<ReturnType<typeof normalizeGradePassbackScore>> = [];
  const denied: Array<{ index: number; reason: string }> = [];

  parsed.outcomes.forEach((outcome, index) => {
    const gate = evaluateFerpaCoppaGate({
      learnerAgeYears: outcome.learnerAgeYears,
      hasParentConsent: outcome.hasParentConsent,
      actorRole: "teacher",
      purpose: "grade_passback",
      hasDistrictDpa: outcome.hasDistrictDpa,
    });

    if (!gate.allowed) {
      denied.push({ index, reason: gate.reason });
      return;
    }

    accepted.push(
      normalizeGradePassbackScore({
        provider: outcome.provider,
        assignmentId: outcome.assignmentId,
        learnerExternalId: outcome.learnerExternalId,
        rawScore: outcome.rawScore,
        maxScore: outcome.maxScore,
        passedAt: outcome.passedAt ?? new Date().toISOString(),
        metadata: {
          ...(outcome.metadata ?? {}),
          learnerAgeYears: outcome.learnerAgeYears,
        },
      }),
    );
  });

  const averagePercent =
    accepted.length === 0
      ? 0
      : Math.round((accepted.reduce((sum, row) => sum + row.normalizedPercent, 0) / accepted.length) * 100) / 100;

  return {
    dryRun: parsed.dryRun,
    accepted,
    denied,
    acceptedCount: accepted.length,
    deniedCount: denied.length,
    averagePercent,
  };
}

const classroomTelemetryInputSchema = classroomTelemetryEventSchema.extend({
  classId: z.string().uuid().optional(),
  eventId: z.string().uuid().optional(),
  occurredAt: z.string().datetime().optional(),
});

export const classroomTelemetryPayloadSchema = z.object({
  events: z.array(classroomTelemetryInputSchema).min(1).max(500),
});

export type ClassroomTelemetryPayload = z.infer<typeof classroomTelemetryPayloadSchema>;

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

export function normalizeClassroomTelemetryPayload(input: {
  classId: string;
  payload: ClassroomTelemetryPayload;
}) {
  const parsed = classroomTelemetryPayloadSchema.parse(input.payload);

  const events = parsed.events.map((event) =>
    classroomTelemetryEventSchema.parse({
      ...event,
      classId: input.classId,
      eventId: event.eventId ?? generateEventId(),
      occurredAt: event.occurredAt ?? new Date().toISOString(),
    }),
  );

  return buildClassroomTelemetryBatch(events);
}
