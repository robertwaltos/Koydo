import Link from "next/link";
import SuccessViewTracker from "./success-view-tracker";
import { cookies } from "next/headers";
import { isSupportedLocale, type Locale, translate } from "@/lib/i18n/translations";

type BillingSuccessSearchParams = {
  product?: string | string[];
  level?: string | string[];
};

type BillingSuccessPageProps = {
  searchParams: Promise<BillingSuccessSearchParams>;
};

function firstString(value: string | string[] | undefined) {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && value.length > 0) return value[0];
  return "";
}

export default async function BillingSuccessPage({ searchParams }: BillingSuccessPageProps) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(locale, key, vars);

  const formatUnlockLevel = (levelRaw: string) => {
    if (levelRaw === "beginner") return t("billing_success_level_beginner");
    if (levelRaw === "intermediate") return t("billing_success_level_intermediate");
    if (levelRaw === "advanced") return t("billing_success_level_advanced");
    return t("billing_success_level_selected");
  }

  const resolvedSearchParams = await searchParams;
  const product = firstString(resolvedSearchParams.product);
  const level = firstString(resolvedSearchParams.level);
  const isExamUnlock = product === "language_exam_unlock";

  const title = isExamUnlock ? t("billing_success_exam_unlock_title") : t("billing_success_subscription_title");
  const description = isExamUnlock
    ? t("billing_success_exam_unlock_description", { level: formatUnlockLevel(level) })
    : t("billing_success_subscription_description");

  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-4 px-6 py-12">
      <SuccessViewTracker />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm text-zinc-600">{description}</p>
      <div className="flex gap-3">
        <Link href="/who-is-learning" className="ui-soft-button ui-focus-ring rounded-md bg-accent px-4 py-2 text-sm text-white">
          {t("billing_success_pick_learner_button")}
        </Link>
        {isExamUnlock ? null : (
          <Link href="/account/settings" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">
            {t("billing_success_manage_subscription_button")}
          </Link>
        )}
        <Link href="/billing/language" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">
          {t("billing_success_language_plans_button")}
        </Link>
      </div>
    </main>
  );
}
