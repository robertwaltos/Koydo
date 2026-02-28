import type { SupabaseClient } from "@supabase/supabase-js";

export const requiredDbTables = [
  "user_profiles",
  "student_profiles",
  "user_tokens",
  "parent_consents",
  "subscriptions",
  "stripe_webhook_events",
  "dsar_requests",
  "user_learning_progress",
  "user_skill_mastery",
  "app_settings",
  "admin_action_logs",
  "support_tickets",
  "sales_events",
  "policy_acceptances",
  "admin_alerts",
  "admin_rate_limit_events",
  "admin_report_exports",
  "admin_approval_requests",
  "admin_alert_notifications",
  "admin_report_jobs",
  "media_generation_jobs",
  "learning_events",
  "user_exam_error_logs",
  "ai_followup_materials",
  "ai_tutor_conversations",
  "ai_remediation_worksheets",
  "pronunciation_attempts",
  "gamification_states",
  "gamification_events",
  "language_usage_tracking",
  "language_pricing_config",
  "pricing_ladders",
  "exam_unlock_purchases",
  "transaction_ledger",
  "reconciliation_queue",
] as const;

export type DbReadinessStatus = "present" | "missing" | "error";

export type DbReadinessRow = {
  table: string;
  status: DbReadinessStatus;
  detail: string;
};

export function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

export async function runDbReadinessChecks(admin: SupabaseClient): Promise<{
  generatedAt: string;
  tables: DbReadinessRow[];
  totals: { present: number; missing: number; error: number; total: number };
  healthy: boolean;
}> {
  const rows: DbReadinessRow[] = [];

  for (const table of requiredDbTables) {
    const { error } = await admin.from(table).select("*").limit(1);
    if (!error) {
      rows.push({ table, status: "present", detail: "Present" });
      continue;
    }
    if (isMissingTableError(error.message)) {
      rows.push({ table, status: "missing", detail: error.message });
      continue;
    }
    rows.push({ table, status: "error", detail: error.message });
  }

  const totals = {
    present: rows.filter((row) => row.status === "present").length,
    missing: rows.filter((row) => row.status === "missing").length,
    error: rows.filter((row) => row.status === "error").length,
    total: rows.length,
  };

  return {
    generatedAt: new Date().toISOString(),
    tables: rows,
    totals,
    healthy: totals.missing === 0 && totals.error === 0,
  };
}
