import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import PrivacyClient from "./privacy-client";

export const dynamic = "force-dynamic";

export default async function AccountPrivacyPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const [{ data: requests }, { data: acceptances }] = await Promise.all([
    supabase
      .from("dsar_requests")
      .select("id, request_type, status, requested_at, resolved_at")
      .eq("user_id", user.id)
      .order("requested_at", { ascending: false }),
    supabase
      .from("policy_acceptances")
      .select("id, policy_type, policy_version, accepted_at")
      .eq("user_id", user.id)
      .order("accepted_at", { ascending: false }),
  ]);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Center</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Manage your data rights requests and policy acknowledgment history.
        </p>
      </header>

      <PrivacyClient initialRequests={requests ?? []} acceptances={acceptances ?? []} />
    </main>
  );
}
