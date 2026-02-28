import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import PrivacyClient from "./privacy-client";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import { isSupportedLocale, translate, type Locale } from "@/lib/i18n/translations";

export const dynamic = "force-dynamic";

export default async function AccountPrivacyPage() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) => translate(locale, key, vars);
  
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
        <h1 className="text-3xl font-semibold tracking-tight">{t("privacy_center_title")}</h1>
        <p className="mt-2 text-sm text-zinc-600">
          {t("privacy_center_subtitle")}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <ProgressChip label={t("privacy_center_requests_chip")} value={requests?.length ?? 0} tone="warning" />
          <ProgressChip label={t("privacy_center_policies_chip")} value={acceptances?.length ?? 0} tone="info" />
        </div>
      </SoftCard>

      <PrivacyClient initialRequests={requests ?? []} acceptances={acceptances ?? []} />
    </main>
  );
}
