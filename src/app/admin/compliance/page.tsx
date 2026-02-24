import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { appStoreComplianceChecklist } from "@/lib/compliance/app-store-checklist";
import ComplianceAdminClient from "./compliance-admin-client";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

const statusStyle = {
  implemented: "text-emerald-700",
  partial: "text-amber-700",
  pending: "text-rose-700",
} as const;

const statusTone = {
  implemented: "success",
  partial: "warning",
  pending: "warning",
} as const;

export default async function AdminCompliancePage() {
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
            You must be an administrator to view compliance controls.
          </p>
        </SoftCard>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: dsarRequests } = await admin
    .from("dsar_requests")
    .select("id, user_id, request_type, status, requested_at, resolved_at")
    .order("requested_at", { ascending: false })
    .limit(100);

  const statusCounts = appStoreComplianceChecklist.reduce(
    (acc, item) => {
      acc[item.status] += 1;
      return acc;
    },
    { implemented: 0, partial: 0, pending: 0 },
  );

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-(--gradient-hero) p-6">
        <h1 className="text-3xl font-semibold tracking-tight">App Store Compliance</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Operational checklist for App Store and Google Play policy readiness.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Implemented" value={statusCounts.implemented} tone="success" />
          <ProgressChip label="Partial" value={statusCounts.partial} tone="warning" />
          <ProgressChip label="Pending" value={statusCounts.pending} tone="warning" />
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <div className="mb-4 flex flex-wrap gap-3 text-xs">
          <a
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-3 py-1 text-xs font-semibold text-foreground"
            href="/APPSTORE-COMPLIANCE-AUDIT.md"
            target="_blank"
            rel="noreferrer"
          >
            Open Compliance Audit Report
          </a>
          <a
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center border border-border bg-surface-muted px-3 py-1 text-xs font-semibold text-foreground"
            href="/DB-READINESS-REPORT.md"
            target="_blank"
            rel="noreferrer"
          >
            Open DB Readiness Report
          </a>
        </div>
        <ul className="space-y-4">
          {appStoreComplianceChecklist.map((item) => (
            <li key={item.id}>
              <SoftCard className="border-border/70 p-4">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-semibold">{item.title}</h2>
                  <div className="flex items-center gap-2">
                    <ProgressChip
                      label="Status"
                      value={item.status}
                      tone={statusTone[item.status]}
                    />
                    <span className={`text-sm font-semibold capitalize ${statusStyle[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-zinc-700">{item.rationale}</p>
              </SoftCard>
            </li>
          ))}
        </ul>
      </SoftCard>

      <ComplianceAdminClient initialDsarRequests={dsarRequests ?? []} />
    </main>
  );
}
