import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

export default async function AdminAuditPage() {
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
            You must be an administrator to view audit logs.
          </p>
        </SoftCard>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: logs } = await admin
    .from("admin_action_logs")
    .select("id, admin_user_id, action_type, target_user_id, metadata, created_at")
    .order("created_at", { ascending: false })
    .limit(200);
  const logCount = logs?.length ?? 0;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Admin Audit Logs</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Immutable trace of operational actions taken by administrators.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Entries" value={logCount} tone="info" />
        </div>
      </SoftCard>

      <SoftCard as="section" className="space-y-3 p-5">
        {(logs ?? []).map((entry) => (
          <SoftCard key={entry.id} as="article" className="border-border/70 p-3 text-sm">
            <p className="font-medium">{entry.action_type}</p>
            <p className="text-xs text-zinc-500">
              admin: {entry.admin_user_id} | target: {entry.target_user_id ?? "n/a"}
            </p>
            <p className="text-xs text-zinc-500">{new Date(entry.created_at).toLocaleString()}</p>
            <pre className="mt-2 overflow-x-auto rounded-2xl border border-border bg-surface-muted p-2 text-xs">
              {JSON.stringify(entry.metadata ?? {}, null, 2)}
            </pre>
          </SoftCard>
        ))}
        {(logs ?? []).length === 0 ? (
          <p className="text-sm text-zinc-500">No admin actions logged yet.</p>
        ) : null}
      </SoftCard>
    </main>
  );
}
