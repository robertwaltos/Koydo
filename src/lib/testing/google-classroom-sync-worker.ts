import { logIntegrationAuditEvent } from "@/lib/organizations/integration-audit";
import { runGoogleClassroomSyncRetries, type GoogleClassroomSyncRunResult } from "@/lib/testing/google-classroom-sync-runner";

export type GoogleClassroomSyncWorkerCycleInput = {
  maxCycles?: number;
  batchSize?: number;
  classId?: string;
  dryRun?: boolean;
  includeQueuedStub?: boolean;
  updatedByUserId: string;
};

export type GoogleClassroomSyncWorkerCycleSummary = {
  cyclesRun: number;
  totalSelected: number;
  totalAttempted: number;
  totalSucceeded: number;
  totalFailed: number;
  totalPersistFailed: number;
  haltedReason:
    | "completed"
    | "dry_run_single_cycle"
    | "sync_not_configured"
    | "max_cycles_reached";
  cycleResults: GoogleClassroomSyncRunResult[];
};

/**
 * B-A05 assignment-sync worker skeleton:
 * run bounded retry cycles and stop safely when queue drains.
 */
export async function runGoogleClassroomSyncWorkerCycle(
  input: GoogleClassroomSyncWorkerCycleInput,
): Promise<GoogleClassroomSyncWorkerCycleSummary> {
  const maxCycles = Math.max(1, Math.min(30, input.maxCycles ?? 5));
  const batchSize = Math.max(1, Math.min(50, input.batchSize ?? 10));
  const dryRun = Boolean(input.dryRun);

  const cycleResults: GoogleClassroomSyncRunResult[] = [];
  let totalSelected = 0;
  let totalAttempted = 0;
  let totalSucceeded = 0;
  let totalFailed = 0;
  let totalPersistFailed = 0;

  let haltedReason: GoogleClassroomSyncWorkerCycleSummary["haltedReason"] = "max_cycles_reached";

  for (let cycle = 1; cycle <= maxCycles; cycle += 1) {
    const result = await runGoogleClassroomSyncRetries({
      limit: batchSize,
      classId: input.classId,
      dryRun,
      includeQueuedStub: input.includeQueuedStub ?? false,
      syncRequestId: undefined,
      updatedByUserId: input.updatedByUserId,
    });

    cycleResults.push(result);
    totalSelected += result.selected;
    totalAttempted += result.attempted;
    totalSucceeded += result.succeeded;
    totalFailed += result.failed;
    totalPersistFailed += result.persistFailed;

    await logIntegrationAuditEvent({
      actorUserId: input.updatedByUserId,
      actionType: "google_classroom_sync_worker_cycle",
      targetType: "google_classroom_sync",
      targetId: `cycle:${cycle}`,
      classId: input.classId ?? null,
      status: result.failed > 0 ? "failure" : result.selected > 0 ? "success" : "skipped",
      metadata: {
        selected: result.selected,
        attempted: result.attempted,
        succeeded: result.succeeded,
        failed: result.failed,
        persistFailed: result.persistFailed,
        dryRun,
      },
    });

    if (!result.syncConfigured && result.selected > 0 && !dryRun) {
      haltedReason = "sync_not_configured";
      break;
    }

    if (result.selected === 0) {
      haltedReason = "completed";
      break;
    }

    if (dryRun) {
      haltedReason = "dry_run_single_cycle";
      break;
    }

    if (cycle === maxCycles) {
      haltedReason = "max_cycles_reached";
    }
  }

  return {
    cyclesRun: cycleResults.length,
    totalSelected,
    totalAttempted,
    totalSucceeded,
    totalFailed,
    totalPersistFailed,
    haltedReason,
    cycleResults,
  };
}
