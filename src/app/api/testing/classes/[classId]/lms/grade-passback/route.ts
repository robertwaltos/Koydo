import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { resolveVerifiedTeacherClassAccess } from "@/lib/compliance/teacher-access";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { logIntegrationAuditEvents } from "@/lib/organizations/integration-audit";
import {
  evaluateGradePassbackPayload,
  gradePassbackPayloadSchema,
} from "@/lib/platform/codex-b/s3-live-adapters";

export async function POST(
  request: Request,
  context: { params: Promise<{ classId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:classes:lms:grade-passback:post", {
    max: 30,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many grade passback requests. Please retry shortly." },
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
    purpose: "testing_class_grade_passback",
  });
  if (!teacherAccess.ok) {
    if (teacherAccess.status === 403 || teacherAccess.status === 404 || teacherAccess.status === 503) {
      return NextResponse.json({ error: teacherAccess.error }, { status: teacherAccess.status });
    }
    return NextResponse.json({ error: "Internal server error." }, { status: teacherAccess.status });
  }

  const parsed = gradePassbackPayloadSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const evaluation = evaluateGradePassbackPayload(parsed.data);

    await logIntegrationAuditEvents([
      {
        actorUserId: user.id,
        actionType: "lms_grade_passback_ingest",
        targetType: "google_classroom_sync",
        targetId: classId,
        classId,
        status:
          evaluation.acceptedCount > 0
            ? evaluation.deniedCount > 0
              ? "queued"
              : "success"
            : "failure",
        metadata: {
          acceptedCount: evaluation.acceptedCount,
          deniedCount: evaluation.deniedCount,
          averagePercent: evaluation.averagePercent,
          dryRun: evaluation.dryRun,
        },
      },
    ]);

    if (evaluation.acceptedCount === 0) {
      return NextResponse.json(
        {
          error: "All outcomes were blocked by FERPA/COPPA gate checks.",
          denied: evaluation.denied,
          acceptedCount: 0,
        },
        { status: 403 },
      );
    }

    return NextResponse.json({
      classId,
      className: teacherAccess.className,
      dryRun: evaluation.dryRun,
      acceptedCount: evaluation.acceptedCount,
      deniedCount: evaluation.deniedCount,
      averagePercent: evaluation.averagePercent,
      acceptedOutcomes: evaluation.accepted,
      denied: evaluation.denied,
      message:
        evaluation.deniedCount > 0
          ? "Grade passback outcomes accepted with partial policy denials."
          : "Grade passback outcomes accepted.",
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
