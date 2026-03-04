import type { SupabaseClient } from "@supabase/supabase-js";
import { isMissingTableError } from "@/lib/admin/db-readiness";
import { captureModuleBaselines } from "@/lib/admin/module-baseline";

export type FactoryResetScope = "beta_only" | "all_non_owner";
export type FactoryResetMode = "dry_run" | "apply";

type UserResetTablePlan = {
  table: string;
  userColumn: string;
};

type RunFactoryResetInput = {
  requestedBy: string;
  executedBy?: string | null;
  mode: FactoryResetMode;
  scope: FactoryResetScope;
  reason: string;
  includeModuleBaselineRefresh?: boolean;
  promoteBetaUsersToLive?: boolean;
  userChunkSize?: number;
};

type TableResetStat = {
  table: string;
  userColumn: string;
  scannedRows: number;
  deletedRows: number;
  skipped: boolean;
  detail: string;
};

type UserProfileRow = {
  user_id: string;
  data_mode: "live" | "beta";
  is_owner: boolean;
};

const USER_RESET_TABLES: UserResetTablePlan[] = [
  { table: "user_learning_progress", userColumn: "user_id" },
  { table: "user_skill_mastery", userColumn: "user_id" },
  { table: "user_tokens", userColumn: "user_id" },
  { table: "learning_events", userColumn: "user_id" },
  { table: "user_exam_error_logs", userColumn: "user_id" },
  { table: "ai_followup_materials", userColumn: "user_id" },
  { table: "ai_tutor_conversations", userColumn: "user_id" },
  { table: "ai_remediation_worksheets", userColumn: "user_id" },
  { table: "policy_acceptances", userColumn: "user_id" },
  { table: "dsar_requests", userColumn: "user_id" },
  { table: "subscriptions", userColumn: "user_id" },
  { table: "support_tickets", userColumn: "user_id" },
  { table: "parent_consents", userColumn: "child_user_id" },
  { table: "student_profiles", userColumn: "account_id" },
  { table: "pronunciation_attempts", userColumn: "user_id" },
  { table: "gamification_states", userColumn: "user_id" },
  { table: "gamification_events", userColumn: "user_id" },
  { table: "language_usage_tracking", userColumn: "user_id" },
  { table: "exam_unlock_purchases", userColumn: "user_id" },
  { table: "user_exam_entitlements", userColumn: "user_id" },
  { table: "testing_purchases", userColumn: "user_id" },
  { table: "testing_exam_attempts", userColumn: "user_id" },
];

function chunkArray<T>(rows: T[], chunkSize: number) {
  const chunks: T[][] = [];
  for (let offset = 0; offset < rows.length; offset += chunkSize) {
    chunks.push(rows.slice(offset, offset + chunkSize));
  }
  return chunks;
}

function isSkippableResetError(message: string) {
  const lower = message.toLowerCase();
  return (
    isMissingTableError(message)
    || (lower.includes("column") && lower.includes("does not exist"))
    || lower.includes("permission denied")
  );
}

async function loadTargetUsers(admin: SupabaseClient, scope: FactoryResetScope) {
  let query = admin
    .from("user_profiles")
    .select("user_id,data_mode,is_owner")
    .eq("is_owner", false);
  if (scope === "beta_only") {
    query = query.eq("data_mode", "beta");
  }
  const { data, error } = await query;
  if (error) {
    throw new Error(error.message);
  }
  return (data ?? []) as UserProfileRow[];
}

async function resetUserScopedTable({
  admin,
  table,
  userColumn,
  targetUserIds,
  mode,
  userChunkSize,
}: {
  admin: SupabaseClient;
  table: string;
  userColumn: string;
  targetUserIds: string[];
  mode: FactoryResetMode;
  userChunkSize: number;
}): Promise<TableResetStat> {
  if (targetUserIds.length === 0) {
    return {
      table,
      userColumn,
      scannedRows: 0,
      deletedRows: 0,
      skipped: false,
      detail: "No target users for this scope.",
    };
  }

  let scannedRows = 0;
  let deletedRows = 0;
  const userChunks = chunkArray(targetUserIds, userChunkSize);

  for (const userIds of userChunks) {
    const countResult = await admin
      .from(table)
      .select(userColumn, { count: "exact", head: true })
      .in(userColumn, userIds);
    if (countResult.error) {
      if (isSkippableResetError(countResult.error.message)) {
        return {
          table,
          userColumn,
          scannedRows,
          deletedRows,
          skipped: true,
          detail: countResult.error.message,
        };
      }
      throw new Error(countResult.error.message);
    }

    const chunkCount = countResult.count ?? 0;
    scannedRows += chunkCount;

    if (mode === "apply" && chunkCount > 0) {
      const deleteResult = await admin
        .from(table)
        .delete()
        .in(userColumn, userIds);
      if (deleteResult.error) {
        if (isSkippableResetError(deleteResult.error.message)) {
          return {
            table,
            userColumn,
            scannedRows,
            deletedRows,
            skipped: true,
            detail: deleteResult.error.message,
          };
        }
        throw new Error(deleteResult.error.message);
      }
      deletedRows += chunkCount;
    }
  }

  return {
    table,
    userColumn,
    scannedRows,
    deletedRows,
    skipped: false,
    detail: mode === "apply" ? "Rows removed." : "Dry run only.",
  };
}

async function createRunningResetRun(
  admin: SupabaseClient,
  input: RunFactoryResetInput,
  targetUserCount: number,
) {
  const { data, error } = await admin
    .from("owner_factory_reset_runs")
    .insert({
      requested_by: input.requestedBy,
      executed_by: input.executedBy ?? input.requestedBy,
      mode: input.mode,
      scope: input.scope,
      status: "running",
      reason: input.reason,
      target_user_count: targetUserCount,
      promote_beta_users_to_live: input.promoteBetaUsersToLive ?? true,
      include_module_baseline_refresh: input.includeModuleBaselineRefresh ?? true,
      started_at: new Date().toISOString(),
    })
    .select("id")
    .single<{ id: string }>();
  if (error || !data?.id) {
    throw new Error(error?.message ?? "Failed to create factory reset run record.");
  }
  return data.id;
}

async function finalizeResetRun({
  admin,
  runId,
  status,
  rowsScanned,
  rowsDeleted,
  tableStats,
  baselineVersion,
  error,
}: {
  admin: SupabaseClient;
  runId: string;
  status: "completed" | "failed";
  rowsScanned: number;
  rowsDeleted: number;
  tableStats: TableResetStat[];
  baselineVersion?: string | null;
  error?: string | null;
}) {
  await admin
    .from("owner_factory_reset_runs")
    .update({
      status,
      rows_scanned: rowsScanned,
      rows_deleted: rowsDeleted,
      table_stats: tableStats,
      baseline_version: baselineVersion ?? null,
      error: error ?? null,
      completed_at: new Date().toISOString(),
    })
    .eq("id", runId);
}

export async function runFactoryReset(admin: SupabaseClient, input: RunFactoryResetInput) {
  const userChunkSize = Math.max(25, Math.min(500, Math.trunc(input.userChunkSize ?? 100)));
  const targetUsers = await loadTargetUsers(admin, input.scope);
  const targetUserIds = targetUsers.map((row) => row.user_id);
  const runId = await createRunningResetRun(admin, input, targetUserIds.length);

  const tableStats: TableResetStat[] = [];
  let rowsScanned = 0;
  let rowsDeleted = 0;
  let baselineVersion: string | null = null;

  try {
    for (const plan of USER_RESET_TABLES) {
      const stat = await resetUserScopedTable({
        admin,
        table: plan.table,
        userColumn: plan.userColumn,
        targetUserIds,
        mode: input.mode,
        userChunkSize,
      });
      tableStats.push(stat);
      rowsScanned += stat.scannedRows;
      rowsDeleted += stat.deletedRows;
    }

    if (input.mode === "apply" && input.scope === "beta_only" && (input.promoteBetaUsersToLive ?? true)) {
      if (targetUserIds.length > 0) {
        for (const userIds of chunkArray(targetUserIds, userChunkSize)) {
          const { error } = await admin
            .from("user_profiles")
            .update({ data_mode: "live" })
            .in("user_id", userIds);
          if (error) {
            throw new Error(error.message);
          }
        }
      }
    }

    if (input.mode === "apply" && (input.includeModuleBaselineRefresh ?? true)) {
      const capture = await captureModuleBaselines(admin, {
        capturedBy: input.executedBy ?? input.requestedBy,
      });
      baselineVersion = capture.baselineVersion;
    }

    await finalizeResetRun({
      admin,
      runId,
      status: "completed",
      rowsScanned,
      rowsDeleted,
      tableStats,
      baselineVersion,
    });

    return {
      runId,
      status: "completed" as const,
      mode: input.mode,
      scope: input.scope,
      targetUserCount: targetUserIds.length,
      rowsScanned,
      rowsDeleted,
      baselineVersion,
      tableStats,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown reset failure.";
    await finalizeResetRun({
      admin,
      runId,
      status: "failed",
      rowsScanned,
      rowsDeleted,
      tableStats,
      baselineVersion,
      error: message,
    });
    throw new Error(message);
  }
}

export async function loadLatestFactoryResetRuns(admin: SupabaseClient, limit = 10) {
  const safeLimit = Math.max(1, Math.min(50, Math.trunc(limit)));
  const { data, error } = await admin
    .from("owner_factory_reset_runs")
    .select(
      "id,mode,scope,status,reason,target_user_count,rows_scanned,rows_deleted,baseline_version,error,started_at,completed_at,created_at",
    )
    .order("created_at", { ascending: false })
    .limit(safeLimit);
  if (error) {
    throw new Error(error.message);
  }
  return data ?? [];
}
