import type { Metadata } from "next";
import { cookies } from "next/headers";
import { policyRegistry } from "@/lib/compliance/policies";
import PolicyAcceptance from "../policy-acceptance";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import { isSupportedLocale, translate, type Locale } from "@/lib/i18n/translations";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Koydo terms of service — usage rules, subscription terms, and user responsibilities.",
};

export default function TermsPage() {
  const policy = policyRegistry.terms;
  return <TermsPageContent policy={policy} />;
}

async function TermsPageContent({
  policy,
}: {
  policy: typeof policyRegistry.terms;
}) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) => translate(locale, key, vars);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">{t("legal_terms_title")}</h1>
        <p className="mt-2 text-sm text-foreground">
          {t("legal_terms_subtitle")}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label={t("legal_common_version")} value={policy.version} tone="info" />
          <ProgressChip label={t("legal_common_effective")} value={policy.effectiveDate} tone="neutral" />
        </div>
      </SoftCard>
      <PolicyAcceptance policyType="terms" />

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">{t("legal_terms_section_subscriptions_title")}</h2>
        <p className="text-sm text-foreground">{t("legal_terms_section_subscriptions_body")}</p>
      </SoftCard>

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">{t("legal_terms_section_account_title")}</h2>
        <p className="text-sm text-foreground">{t("legal_terms_section_account_body")}</p>
      </SoftCard>

      <SoftCard as="section" className="space-y-3 p-5">
        <h2 className="text-lg font-semibold">{t("legal_terms_section_content_title")}</h2>
        <p className="text-sm text-foreground">{t("legal_terms_section_content_body")}</p>
      </SoftCard>
    </main>
  );
}
