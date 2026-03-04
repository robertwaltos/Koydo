import type { Metadata } from "next";
import { cookies } from "next/headers";
import { policyRegistry } from "@/lib/compliance/policies";
import PolicyAcceptance from "../policy-acceptance";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import { isSupportedLocale, translate, type Locale } from "@/lib/i18n/translations";
import { resolveTermsDocumentForState } from "@/lib/legal/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Koydo terms of service - usage rules, subscription terms, legal rights, and user responsibilities.",
};

type TermsPageProps = {
  searchParams?: Promise<{
    state?: string | string[];
  }>;
};

export default async function TermsPage({ searchParams }: TermsPageProps) {
  const policy = policyRegistry.terms;
  const resolvedSearchParams = (await searchParams) ?? {};
  const stateParam =
    typeof resolvedSearchParams?.state === "string" ? resolvedSearchParams.state : null;
  const termsDocument = resolveTermsDocumentForState(stateParam);

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
          <ProgressChip label="Billing state" value={termsDocument.stateCode} tone="success" />
        </div>
      </SoftCard>

      <PolicyAcceptance policyType="terms" billingState={termsDocument.stateCode} />

      {termsDocument.sections.map((section) => (
        <SoftCard key={section.id} as="section" className="space-y-3 p-5">
          <h2 className="text-lg font-semibold">{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={`${section.id}-${paragraph.slice(0, 24)}`} className="text-sm text-foreground">
              {paragraph}
            </p>
          ))}
        </SoftCard>
      ))}

      <SoftCard as="section" className="space-y-3 border-emerald-300/70 bg-emerald-50/60 p-5">
        <h2 className="text-lg font-semibold">{termsDocument.stateAddendum.title}</h2>
        {termsDocument.stateAddendum.paragraphs.map((paragraph) => (
          <p key={`state-${paragraph.slice(0, 24)}`} className="text-sm text-foreground">
            {paragraph}
          </p>
        ))}
      </SoftCard>
    </main>
  );
}

