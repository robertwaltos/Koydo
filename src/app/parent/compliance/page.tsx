import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

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
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 px-6 py-24">
        <h1 className="text-2xl font-semibold">Parent Compliance</h1>
        <p className="text-sm text-red-600">Parent role is required to access consent history.</p>
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

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Parent Compliance</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          View parental consent verification history tied to your parent email.
        </p>
      </header>

      <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Consent Requests</h2>
        <div className="mt-3 space-y-3">
          {consentRows.map((row) => (
            <article key={row.id} className="rounded-md border border-black/10 p-3 text-sm dark:border-white/10">
              <p className="font-medium">Request {row.id}</p>
              <p className="text-xs text-zinc-500">Child user: {row.child_user_id}</p>
              <p className="text-xs text-zinc-500">
                Status: {row.status} | Method: {row.consent_method} | Version: {row.consent_version}
              </p>
              <p className="text-xs text-zinc-500">
                Requested: {new Date(row.requested_at).toLocaleString()}
              </p>
              {row.verified_at ? (
                <p className="text-xs text-zinc-500">
                  Verified: {new Date(row.verified_at).toLocaleString()}
                </p>
              ) : null}
            </article>
          ))}
          {consentRows.length === 0 ? (
            <p className="text-sm text-zinc-500">No consent requests found for your account.</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
