import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SettingsClient from "./settings-client";
import SoftCard from "@/app/components/ui/soft-card";
import type { SubscriptionSnapshot } from "@/lib/billing/subscription";
import { isSupportedLocale, translate, type Locale } from "@/lib/i18n/translations";

export const dynamic = "force-dynamic";

type LearnerPathSettings = {
  id: string;
  display_name: string;
  grade_level: string | null;
  age_years: number | null;
  path_allowlist: string[] | null;
};

function normalizePathAllowlist(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const normalized = value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
  return normalized.length > 0 ? normalized : null;
}

function isMissingAllowlistColumn(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const maybeCode = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const maybeMessage = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  return maybeCode === "42703" || maybeMessage.toLowerCase().includes("path_allowlist");
}

export default async function AccountSettingsPage() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) => translate(locale, key, vars);

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/sign-in");
  }

  const { data: subscription, error: subscriptionError } = await supabase
    .from("subscriptions")
    .select("status, cancel_at_period_end, current_period_end")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (subscriptionError) {
    console.error("Error loading subscription for account settings:", subscriptionError);
  }

  let learnerProfiles: LearnerPathSettings[] = [];
  const { data: learnerData, error: learnerError } = await supabase
    .from("student_profiles")
    .select("id, display_name, grade_level, age_years, path_allowlist")
    .eq("account_id", user.id)
    .order("display_name", { ascending: true });

  if (learnerError) {
    if (isMissingAllowlistColumn(learnerError)) {
      const { data: fallbackLearners, error: fallbackError } = await supabase
        .from("student_profiles")
        .select("id, display_name, grade_level, age_years")
        .eq("account_id", user.id)
        .order("display_name", { ascending: true });
      if (fallbackError) {
        console.error("Error loading learner profiles for account settings:", fallbackError);
      } else {
        learnerProfiles = (fallbackLearners ?? []).map((profile) => ({
          ...profile,
          path_allowlist: null,
        }));
      }
    } else {
      console.error("Error loading learner profiles for account settings:", learnerError);
    }
  } else {
    learnerProfiles = (learnerData ?? []).map((profile) => ({
      ...profile,
      path_allowlist: normalizePathAllowlist(profile.path_allowlist),
    }));
  }

  const subscriptionSnapshot: SubscriptionSnapshot = {
    status: subscription?.status ?? null,
    cancelAtPeriodEnd: Boolean(subscription?.cancel_at_period_end),
    currentPeriodEnd: subscription?.current_period_end ?? null,
  };

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" organicCorners className="bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">{t("account_settings_title")}</h1>
        <p className="mt-2 text-sm text-zinc-600">
          {t("account_settings_subtitle")}
        </p>
      </SoftCard>

      <SettingsClient subscription={subscriptionSnapshot} learnerProfiles={learnerProfiles} />
    </main>
  );
}
