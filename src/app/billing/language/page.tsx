import Link from "next/link";
import { redirect } from "next/navigation";
import SoftCard from "@/app/components/ui/soft-card";
import {
  getLanguagePlanById,
  getLanguagePlanIdForProfile,
  getLanguagePricingSnapshot,
  resolveLanguageUsageEntitlement,
} from "@/lib/language-learning";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requiresPortalManagement } from "@/lib/billing/subscription";
import type { LanguagePlanId } from "@/lib/language-learning/pricing";
import LanguageBillingViewTracker from "./language-billing-view-tracker";
import LanguageExamUnlockOptions from "@/app/components/language-exam-unlock-options";
import LanguagePlanCheckoutLink from "./language-plan-checkout-link";

export const dynamic = "force-dynamic";

const PAID_LANGUAGE_PLAN_IDS: LanguagePlanId[] = [
  "language_plus_conservative",
  "language_family_conservative",
  "language_plus_growth",
  "language_family_growth",
];

function formatMonthlyPrice(value: number) {
  if (value <= 0) return "Free";
  return `$${value.toFixed(2)}/mo`;
}

function describePlanHighlights(planId: LanguagePlanId) {
  const plan = getLanguagePlanById(planId);
  if (!plan) return [];

  const scoredCap = plan.scoredAttemptsPerLearnerMonthly ?? 0;
  return [
    scoredCap > 0
      ? `Up to ${scoredCap} scored attempts/learner/month, then seamless practice-only mode`
      : "Practice-only mode (no official scored grading)",
    plan.translationEnabled ? "On-the-fly translation included" : "Translation disabled",
    plan.pronunciationGradingEnabled
      ? "Pronunciation grading + explainable feedback"
      : "Practice-only pronunciation mode",
    plan.maxLearnersIncluded
      ? `Up to ${plan.maxLearnersIncluded} learner${plan.maxLearnersIncluded === 1 ? "" : "s"}`
      : "Multi-seat setup handled by contract",
  ];
}

export default async function LanguageBillingPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect(`/auth/sign-in?next=${encodeURIComponent("/billing/language")}`);
  }

  const [{ data: subscription }, pricingSnapshot] = await Promise.all([
    supabase
      .from("subscriptions")
      .select("status")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    Promise.resolve(getLanguagePricingSnapshot()),
  ]);

  let activePlanId: LanguagePlanId = "core_practice";
  try {
    const entitlement = await resolveLanguageUsageEntitlement(supabase, { userId: user.id });
    activePlanId = entitlement.planTier;
  } catch (error) {
    console.error("Language billing page entitlement lookup failed:", error);
  }

  const activePlan = getLanguagePlanById(activePlanId) ?? getLanguagePlanById("core_practice");
  const profileRecommendedPlus = getLanguagePlanIdForProfile(
    serverEnv.LANGUAGE_PRICING_PROFILE,
    "plus",
  );
  const profileRecommendedFamily = getLanguagePlanIdForProfile(
    serverEnv.LANGUAGE_PRICING_PROFILE,
    "family",
  );
  const recommendedPlanSet = new Set<LanguagePlanId>([
    profileRecommendedPlus,
    profileRecommendedFamily,
  ]);
  const hasPortalManagedSubscription = requiresPortalManagement(subscription?.status ?? null);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <LanguageBillingViewTracker
        activePlanId={activePlanId}
        pricingProfile={serverEnv.LANGUAGE_PRICING_PROFILE}
      />
      <SoftCard as="header" organicCorners className="bg-[var(--gradient-hero)] p-6">
        <p className="ui-type-eyebrow text-emerald-700">Language Plans</p>
        <h1 className="ui-type-display-lg mt-2 text-zinc-900">AI Language Pricing</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Scored pronunciation feedback is packaged separately from core practice to keep usage
          predictable while the language experience expands.
        </p>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">Current plan</p>
            <p className="mt-1 text-xl font-semibold text-zinc-900">{activePlan?.name ?? "Core Practice"}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/dashboard"
              className="ui-focus-ring inline-flex min-h-10 items-center rounded-full border border-zinc-200 bg-surface-muted px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Back to Dashboard
            </Link>
            {hasPortalManagedSubscription ? (
              <Link
                href="/account/settings"
                className="ui-focus-ring inline-flex min-h-10 items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
              >
                Manage Subscription
              </Link>
            ) : null}
          </div>
        </div>
      </SoftCard>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {pricingSnapshot.plans
          .filter((plan) => PAID_LANGUAGE_PLAN_IDS.includes(plan.id))
          .map((plan) => {
            const isRecommended = recommendedPlanSet.has(plan.id);
            const isCurrent = activePlanId === plan.id;
            const highlights = describePlanHighlights(plan.id);
            return (
              <SoftCard key={plan.id} as="article" className="border-zinc-200 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-zinc-900">{plan.name}</h2>
                    <p className="mt-1 text-sm text-zinc-600">{plan.notes}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {isRecommended ? (
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                        Recommended
                      </span>
                    ) : null}
                    {isCurrent ? (
                      <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-xs font-semibold text-cyan-700">
                        Current
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="mt-4 text-3xl font-bold text-zinc-900">{formatMonthlyPrice(plan.priceUsdMonthly)}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {highlights.map((item) => (
                    <li key={`${plan.id}-${item}`} className="flex gap-2">
                      <span aria-hidden="true" className="text-emerald-600">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  {isCurrent ? (
                    <Link
                      href="/account/settings"
                      className="ui-focus-ring inline-flex min-h-10 items-center rounded-full border border-zinc-200 bg-surface-muted px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
                    >
                      Manage in Settings
                    </Link>
                  ) : (
                    <LanguagePlanCheckoutLink planId={plan.id} planName={plan.name} />
                  )}
                </div>
              </SoftCard>
            );
          })}
      </section>

      <LanguageExamUnlockOptions
        analyticsSurface="language_pricing"
        title="Exam Unlocks (One-Time)"
        description="For focused test-prep blocks, add scored attempts with a one-time unlock. Purchases stack with your monthly scored quota and expire after 90 days."
      />

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold text-zinc-900">Need district or school rollout?</h2>
        <p className="mt-2 text-sm text-zinc-600">
          The school annual seat model (`$4.99/seat/month billed annually`) is supported through
          contract terms, provisioning, and volume discounts.
        </p>
        <p className="mt-2 text-sm text-zinc-600">
          Contact: <a href="mailto:sales@koydo.app" className="font-semibold text-cyan-700 hover:underline">sales@koydo.app</a>
        </p>
      </SoftCard>
    </main>
  );
}
