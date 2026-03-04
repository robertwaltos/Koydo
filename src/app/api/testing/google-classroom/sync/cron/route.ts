import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { timingSafeEqualStrings } from "@/lib/security/safe-compare";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";
import { runGoogleClassroomSyncWorkerCycle } from "@/lib/testing/google-classroom-sync-worker";

const runSyncSchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).optional(),
  maxCycles: z.coerce.number().int().min(1).max(30).optional(),
  classId: z.string().uuid().optional(),
  dryRun: z.coerce.boolean().optional().default(false),
  includeQueuedStub: z.coerce.boolean().optional().default(false),
});

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:testing:google-classroom:sync:cron", {
    max: 20,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many sync cron requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const headerStore = await headers();
  const authHeader = headerStore.get("authorization")?.trim() ?? "";
  const cronSecret = process.env.CRON_SECRET;
  const bearerToken = authHeader.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length).trim()
    : "";

  if (!cronSecret || !timingSafeEqualStrings(bearerToken, cronSecret.trim())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
      updatedByUserId: "system_cron_google_classroom_sync",
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
