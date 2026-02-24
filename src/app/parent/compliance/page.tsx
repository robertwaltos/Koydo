import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

function statusTone(
  status: string,
): "neutral" | "info" | "success" | "warning" {
  if (status === "verified") return "success";
  if (status === "pending_verification") return "info";
  if (status === "denied" || status === "expired") return "warning";
  return "neutral";
}

export default async function ParentCompliancePage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_parent")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile?.is_parent) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24">
        <SoftCard className="w-full max-w-2xl border-rose-200 bg-rose-50 p-8 text-center">
          <h1 className="text-2xl font-semibold">Parent Compliance</h1>
          <p className="mt-3 text-sm text-rose-700">
            Parent role is required to access consent history.
          </p>
        </SoftCard>
      </main>
    );
  }

  const parentEmail = user.email ?? null;
  const consentRows = parentEmail
    ? (
        await supabase
          .from("parent_consents")
          .select("id, child_user_id, status, consent_method, consent_version, requested_at, verified_at")
          .eq("parent_email", parentEmail)
          .order("requested_at", { ascending: false })
      ).data ?? []
    : [];
  const verifiedCount = consentRows.filter((row) => row.status === "verified").length;
  const pendingCount = consentRows.filter(
    (row) => row.status === "pending_verification",
  ).length;
  const deniedOrExpiredCount = consentRows.filter(
    (row) => row.status === "denied" || row.status === "expired",
  ).length;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Parent Compliance</h1>
        <p className="mt-2 text-sm text-zinc-700">
          View parental consent verification history tied to your parent email.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Verified" value={verifiedCount} tone="success" />
          <ProgressChip label="Pending" value={pendingCount} tone="info" />
          <ProgressChip
            label="Needs Attention"
            value={deniedOrExpiredCount}
            tone={deniedOrExpiredCount > 0 ? "warning" : "neutral"}
          />
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">Consent Requests</h2>
        <div className="mt-3 space-y-3">
          {consentRows.map((row) => (
            <SoftCard key={row.id} as="article" className="border-border/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-medium text-zinc-900">Request {row.id}</p>
                <ProgressChip
                  label="Status"
                  value={row.status}
                  tone={statusTone(row.status)}
                />
              </div>
              <p className="mt-2 text-xs text-zinc-600">Child user: {row.child_user_id}</p>
              <p className="mt-1 text-xs text-zinc-600">
                Method: {row.consent_method} | Version: {row.consent_version}
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                Requested: {new Date(row.requested_at).toLocaleString()}
              </p>
              {row.verified_at ? (
                <p className="mt-1 text-xs text-zinc-600">
                  Verified: {new Date(row.verified_at).toLocaleString()}
                </p>
              ) : null}
            </SoftCard>
          ))}
          {consentRows.length === 0 ? (
            <p className="text-sm text-zinc-500">
              No consent requests found for your account.
            </p>
          ) : null}
        </div>
      </SoftCard>
    </main>
  );
}
