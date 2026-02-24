import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
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
  const [ticketsResult, examAlertsResult, examRunSummaryAlertsResult, examRunsResult] = await Promise.all([
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
  ]);

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
        </div>
      </SoftCard>

      <OperationsConsole
        initialTickets={ticketsResult.data ?? []}
        initialExamMaintenanceAlerts={examAlertsResult.data ?? []}
        initialExamMaintenanceRuns={examRunsResult.data ?? []}
        initialExamMaintenanceRunSummaries={examRunSummaryAlertsResult.data ?? []}
      />
    </main>
  );
}
