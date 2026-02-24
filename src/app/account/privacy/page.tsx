import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import PrivacyClient from "./privacy-client";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

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
      <SoftCard as="header" organicCorners className="bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Center</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Manage your data rights requests and policy acknowledgment history.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <ProgressChip label="Requests" value={requests?.length ?? 0} tone="warning" />
          <ProgressChip label="Policies" value={acceptances?.length ?? 0} tone="info" />
        </div>
      </SoftCard>

      <PrivacyClient initialRequests={requests ?? []} acceptances={acceptances ?? []} />
    </main>
  );
}
