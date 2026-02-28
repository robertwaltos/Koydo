import Link from "next/link";
import { cookies } from "next/headers";
import { isSupportedLocale, type Locale, translate } from "@/lib/i18n/translations";

export default async function BillingCancelPage() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(locale, key, vars);

  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-4 px-6 py-12">
      <h1 className="text-2xl font-semibold">{t("billing_cancel_title")}</h1>
      <p className="text-sm text-zinc-600">
        {t("billing_cancel_description")}
      </p>
      <div className="flex gap-3">
        <Link href="/billing/checkout" className="ui-soft-button ui-focus-ring rounded-md bg-accent px-4 py-2 text-sm text-white">
          {t("billing_cancel_retry_button")}
        </Link>
        <Link href="/legal/terms" className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm">
          {t("billing_cancel_terms_button")}
        </Link>
      </div>
    </main>
  );
}
