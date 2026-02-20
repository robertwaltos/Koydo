import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

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
      <main className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-4 px-6 py-24">
        <h1 className="text-2xl font-semibold">Access Denied</h1>
        <p className="text-sm text-red-600">You must be an administrator to view audit logs.</p>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: logs } = await admin
    .from("admin_action_logs")
    .select("id, admin_user_id, action_type, target_user_id, metadata, created_at")
    .order("created_at", { ascending: false })
    .limit(200);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Admin Audit Logs</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Immutable trace of operational actions taken by administrators.
        </p>
      </header>

      <section className="space-y-3 rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        {(logs ?? []).map((entry) => (
          <article key={entry.id} className="rounded-md border border-black/10 p-3 text-sm dark:border-white/10">
            <p className="font-medium">{entry.action_type}</p>
            <p className="text-xs text-zinc-500">
              admin: {entry.admin_user_id} | target: {entry.target_user_id ?? "n/a"}
            </p>
            <p className="text-xs text-zinc-500">{new Date(entry.created_at).toLocaleString()}</p>
            <pre className="mt-2 overflow-x-auto rounded bg-zinc-100 p-2 text-xs dark:bg-zinc-800">
              {JSON.stringify(entry.metadata ?? {}, null, 2)}
            </pre>
          </article>
        ))}
        {(logs ?? []).length === 0 ? (
          <p className="text-sm text-zinc-500">No admin actions logged yet.</p>
        ) : null}
      </section>
    </main>
  );
}
