import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import ReportsClient from "./reports-client";

export const dynamic = "force-dynamic";

export default async function AdminReportsPage() {
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
        <p className="text-sm text-red-600">You must be an administrator to access reports.</p>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: exportHistory } = await admin
    .from("admin_report_exports")
    .select("id, report_type, row_count, checksum_sha256, created_at, completed_at")
    .order("created_at", { ascending: false })
    .limit(50);

  const { data: jobs } = await admin
    .from("admin_report_jobs")
    .select("id, report_type, status, run_after, created_at, started_at, completed_at, error")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Admin Reports</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Export operational records as CSV for audits, legal workflows, and finance reconciliation.
        </p>
      </header>

      <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <ul className="space-y-3">
          <li>
            <a href="/api/admin/reports/dsar" className="text-sm font-medium underline">
              Download DSAR Report (CSV)
            </a>
          </li>
          <li>
            <a href="/api/admin/reports/support" className="text-sm font-medium underline">
              Download Support Tickets Report (CSV)
            </a>
          </li>
          <li>
            <a href="/api/admin/reports/audit" className="text-sm font-medium underline">
              Download Admin Audit Report (CSV)
            </a>
          </li>
        </ul>
      </section>

      <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Recent Export History</h2>
        <div className="mt-3 space-y-2">
          {(exportHistory ?? []).map((entry) => (
            <article key={entry.id} className="rounded-md border border-black/10 p-3 text-sm dark:border-white/10">
              <p className="font-medium">
                {entry.report_type} ({entry.row_count} rows)
              </p>
              <p className="text-xs text-zinc-500">
                Created {new Date(entry.created_at).toLocaleString()}
              </p>
              {entry.completed_at ? (
                <p className="text-xs text-zinc-500">
                  Completed {new Date(entry.completed_at).toLocaleString()}
                </p>
              ) : null}
              <p className="mt-1 break-all text-xs text-zinc-500">
                SHA256: {entry.checksum_sha256 ?? "n/a"}
              </p>
            </article>
          ))}
          {(exportHistory ?? []).length === 0 ? (
            <p className="text-sm text-zinc-500">No export history yet.</p>
          ) : null}
        </div>
      </section>

      <ReportsClient initialJobs={jobs ?? []} />
    </main>
  );
}
