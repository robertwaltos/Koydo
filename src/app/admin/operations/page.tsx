import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { runStripeWebhookHealthCheck } from "@/lib/admin/stripe-webhook-health";
import { runDbReadinessChecks } from "@/lib/admin/db-readiness";
import { runEnvReadinessChecks } from "@/lib/admin/env-readiness";
import OperationsConsole from "./operations-console";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

export default async function AdminOperationsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const { data: profile, error: profileError } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  if (profileError || !profile?.is_admin) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24">
        <SoftCard className="w-full max-w-2xl border-rose-200 bg-rose-50 p-8 text-center">
          <h1 className="text-2xl font-semibold">Access Denied</h1>
          <p className="mt-3 text-sm text-rose-700">
            You must be an administrator to access owner operations.
          </p>
        </SoftCard>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const [
    ticketsResult,
    examAlertsResult,
    examRunSummaryAlertsResult,
    examRunsResult,
    envReadiness,
    dbReadiness,
    stripeWebhookHealth,
  ] = await Promise.all([
    admin
      .from("support_tickets")
      .select("id, user_id, subject, status, priority, created_at")
      .order("created_at", { ascending: false })
      .limit(50),
    admin
      .from("admin_alerts")
      .select("id, severity, category, message, acknowledged, created_at, metadata")
      .eq("category", "exam_maintenance_failure")
      .order("created_at", { ascending: false })
      .limit(20),
    admin
      .from("admin_alerts")
      .select("id, severity, category, message, acknowledged, created_at, metadata")
      .eq("category", "exam_maintenance_run_summary")
      .order("created_at", { ascending: false })
      .limit(40),
    admin
      .from("admin_action_logs")
      .select("id, admin_user_id, action_type, metadata, created_at")
      .eq("action_type", "exam_error_auto_resolve_run")
      .order("created_at", { ascending: false })
      .limit(20),
    runEnvReadinessChecks(),
    runDbReadinessChecks(admin),
    runStripeWebhookHealthCheck(admin, { windowHours: 24, staleMinutes: 10 }),
  ]);
  const systemBlockingIssues =
    envReadiness.totals.fail
    + dbReadiness.totals.missing
    + dbReadiness.totals.error
    + (stripeWebhookHealth.healthy ? 0 : 1);
  const systemWarningIssues = envReadiness.totals.warn;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Owner Operations Console</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Manage support, users, billing operations, pricing, and commercial campaigns.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Tickets" value={ticketsResult.data?.length ?? 0} tone="info" />
          <ProgressChip
            label="Exam Alerts"
            value={examAlertsResult.data?.length ?? 0}
            tone={
              (examAlertsResult.data ?? []).some((alert) => !alert.acknowledged)
                ? "warning"
                : "success"
            }
          />
          <ProgressChip
            label="Runs"
            value={(examRunsResult.data?.length ?? 0) + (examRunSummaryAlertsResult.data?.length ?? 0)}
            tone="neutral"
          />
          <ProgressChip
            label="System"
            value={
              systemBlockingIssues > 0
                ? `${systemBlockingIssues} fail`
                : systemWarningIssues > 0
                  ? `${systemWarningIssues} warn`
                  : "Healthy"
            }
            tone={systemBlockingIssues > 0 || systemWarningIssues > 0 ? "warning" : "success"}
          />
          <ProgressChip
            label="Env"
            value={
              envReadiness.totals.fail > 0
                ? `${envReadiness.totals.fail} fail`
                : envReadiness.totals.warn > 0
                  ? `${envReadiness.totals.warn} warn`
                  : "Healthy"
            }
            tone={envReadiness.totals.fail > 0 || envReadiness.totals.warn > 0 ? "warning" : "success"}
          />
          <ProgressChip
            label="Webhooks (24h)"
            value={
              stripeWebhookHealth.trackingEnabled
                ? `${stripeWebhookHealth.totals.failed} fail / ${stripeWebhookHealth.totals.staleProcessing} stale`
                : "Tracking Off"
            }
            tone={
              !stripeWebhookHealth.trackingEnabled
                ? "warning"
                : stripeWebhookHealth.totals.failed > 0 || stripeWebhookHealth.totals.staleProcessing > 0
                  ? "warning"
                  : "success"
            }
          />
          <ProgressChip
            label="DB Readiness"
            value={
              dbReadiness.healthy
                ? "Healthy"
                : `${dbReadiness.totals.missing} missing / ${dbReadiness.totals.error} errors`
            }
            tone={dbReadiness.healthy ? "success" : "warning"}
          />
        </div>
      </SoftCard>

      <OperationsConsole
        initialTickets={ticketsResult.data ?? []}
        initialExamMaintenanceAlerts={examAlertsResult.data ?? []}
        initialExamMaintenanceRuns={examRunsResult.data ?? []}
        initialExamMaintenanceRunSummaries={examRunSummaryAlertsResult.data ?? []}
        initialEnvReadiness={envReadiness}
        initialDbReadiness={dbReadiness}
        initialStripeWebhookHealth={stripeWebhookHealth}
      />
    </main>
  );
}
