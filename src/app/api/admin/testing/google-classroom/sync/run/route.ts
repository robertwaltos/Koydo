import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { runGoogleClassroomSyncWorkerCycle } from "@/lib/testing/google-classroom-sync-worker";

const runSyncSchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).optional(),
  maxCycles: z.coerce.number().int().min(1).max(30).optional(),
  classId: z.string().uuid().optional(),
  dryRun: z.coerce.boolean().optional().default(false),
  includeQueuedStub: z.coerce.boolean().optional().default(true),
});

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:admin:testing:google-classroom:sync:run", {
    max: 15,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many Google Classroom sync retry requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const parsed = runSyncSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const summary = await runGoogleClassroomSyncWorkerCycle({
      batchSize: parsed.data.limit ?? 10,
      maxCycles: parsed.data.maxCycles ?? 3,
      classId: parsed.data.classId,
      dryRun: parsed.data.dryRun,
      includeQueuedStub: parsed.data.includeQueuedStub,
      updatedByUserId: auth.userId,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "testing_google_classroom_sync_worker_run",
      metadata: {
        classId: parsed.data.classId ?? null,
        includeQueuedStub: parsed.data.includeQueuedStub,
        limit: parsed.data.limit ?? 10,
        maxCycles: parsed.data.maxCycles ?? 3,
        dryRun: parsed.data.dryRun,
        cyclesRun: summary.cyclesRun,
        haltedReason: summary.haltedReason,
        totalSelected: summary.totalSelected,
        totalAttempted: summary.totalAttempted,
        totalSucceeded: summary.totalSucceeded,
        totalFailed: summary.totalFailed,
        totalPersistFailed: summary.totalPersistFailed,
      },
    });

    if (
      !parsed.data.dryRun
      && summary.totalSelected > 0
      && summary.haltedReason === "sync_not_configured"
    ) {
      return NextResponse.json(
        {
          error: "Google Classroom sync is not configured.",
          code: "google_classroom_sync_not_configured",
          ...summary,
        },
        { status: 409 },
      );
    }

    return NextResponse.json(summary);
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
}
