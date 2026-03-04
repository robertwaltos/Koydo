import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { resolveVerifiedTeacherClassAccess } from "@/lib/compliance/teacher-access";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { logIntegrationAuditEvents } from "@/lib/organizations/integration-audit";
import {
  classroomTelemetryPayloadSchema,
  normalizeClassroomTelemetryPayload,
} from "@/lib/platform/codex-b/s3-live-adapters";

export async function POST(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:telemetry:post", {
    max: 60,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many classroom telemetry requests. Please retry shortly." },
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
    purpose: "testing_class_telemetry",
  });
  if (!teacherAccess.ok) {
    if (teacherAccess.status === 403 || teacherAccess.status === 404 || teacherAccess.status === 503) {
      return NextResponse.json({ error: teacherAccess.error }, { status: teacherAccess.status });
    }
    return NextResponse.json({ error: "Internal server error." }, { status: teacherAccess.status });
  }

  const parsed = classroomTelemetryPayloadSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const batch = normalizeClassroomTelemetryPayload({
      classId,
      payload: parsed.data,
    });

    await logIntegrationAuditEvents(
      batch.events.map((event) => ({
        actorUserId: user.id,
        actionType: `classroom_telemetry_${event.eventType}`,
        targetType: "integration_runtime",
        targetId: event.eventId,
        classId,
        status: "queued",
        metadata: {
          sessionId: event.sessionId,
          actorType: event.actorType,
          occurredAt: event.occurredAt,
          payload: event.payload,
        },
      })),
    );

    return NextResponse.json({
      classId,
      className: teacherAccess.className,
      eventCount: batch.count,
      firstEventAt: batch.firstEventAt,
      lastEventAt: batch.lastEventAt,
      message: "Classroom telemetry batch accepted.",
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
