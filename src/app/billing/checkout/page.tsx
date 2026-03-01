"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  getLanguagePlanById,
  getLanguagePricingSnapshot,
  type LanguagePlanId,
} from "@/lib/language-learning/pricing";
import {
  trackLanguageBillingInteraction,
  trackLanguageBillingView,
} from "@/lib/analytics/language-billing-events";
import { useI18n } from "@/lib/i18n/provider";
import { Capacitor } from "@capacitor/core";
import { Purchases } from "@revenuecat/purchases-capacitor";
import { canUseStripe } from "@/lib/platform/features";
import { initializeRevenueCat } from "@/lib/billing/revenuecat-client";
import { hasRevenueCatProEntitlement } from "@/lib/billing/revenuecat-config";
import { findTypedPackageForLanguagePlanId } from "@/lib/billing/revenuecat-offerings";
import AuthGuard from "@/app/components/auth-guard";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/app/components/error-fallback";

const CHECKOUT_LANGUAGE_PLAN_IDS: LanguagePlanId[] = [
  "language_plus_conservative",
  "language_family_conservative",
  "language_plus_growth",
  "language_family_growth",
];
const DEFAULT_LANGUAGE_PLAN_ID: LanguagePlanId = "language_plus_conservative";

function parseLanguagePlanId(value: string | null): LanguagePlanId | null {
  if (!value) return null;
  return CHECKOUT_LANGUAGE_PLAN_IDS.includes(value as LanguagePlanId)
    ? (value as LanguagePlanId)
    : null;
}

function isUserCancelledError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  return Boolean((error as { userCancelled?: unknown }).userCancelled);
}

function getErrorMessage(error: unknown): string | null {
  if (!error || typeof error !== "object") return null;
  const value = (error as { message?: unknown }).message;
  return typeof value === "string" ? value : null;
}

export default function BillingCheckoutPage() {
  const { t } = useI18n();
  const externalCheckoutAllowed = canUseStripe();
  const billingProviderMode = externalCheckoutAllowed ? "stripe_external" : "app_store_iap";
  const router = useRouter();
  const searchParams = useSearchParams();
  const languagePricing = useMemo(() => getLanguagePricingSnapshot(), []);
  const selectablePlans = useMemo(
    () =>
      languagePricing.plans.filter((plan) =>
        CHECKOUT_LANGUAGE_PLAN_IDS.includes(plan.id as LanguagePlanId),
      ),
    [languagePricing.plans],
  );
  const planFromQuery = parseLanguagePlanId(searchParams.get("languagePlanId"));
  const [selectedPlanId, setSelectedPlanId] = useState<LanguagePlanId>(
    planFromQuery ?? DEFAULT_LANGUAGE_PLAN_ID,
  );
  const [status, setStatus] = useState("");
  const [managePath, setManagePath] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [rcInitialized, setRcInitialized] = useState(false);
  const selectedPlan = getLanguagePlanById(selectedPlanId);

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      const initRC = async () => {
        try {
          const initialized = await initializeRevenueCat();
          if (!initialized) {
            setStatus(t("billing_checkout_not_configured"));
            return;
          }
          setRcInitialized(true);
        } catch (error) {
          console.error("RC Init Error", error);
        }
      };
      initRC();
    }
  }, [t]);

  useEffect(() => {
    if (planFromQuery && planFromQuery !== selectedPlanId) {
      setSelectedPlanId(planFromQuery);
    }
  }, [planFromQuery, selectedPlanId]);

  useEffect(() => {
    trackLanguageBillingView({
      surface: "checkout",
      planId: selectedPlanId,
      payload: {
        billingMode: billingProviderMode,
      },
    });
  }, [billingProviderMode, selectedPlanId]);

  const onStartWebCheckout = async () => {
    setStatus("");
    setManagePath(null);
    setIsLoading(true);

    trackLanguageBillingInteraction({
      surface: "checkout",
      action: "checkout_started",
      planId: selectedPlanId,
    });

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ languagePlanId: selectedPlanId }),
      });

      const payload = (await response.json()) as {
        checkoutUrl?: string;
        error?: string;
        managePath?: string;
      };

      if (response.status === 401) {
        const nextPath = `/billing/checkout?languagePlanId=${encodeURIComponent(selectedPlanId)}`;
        router.push(`/auth/sign-in?next=${encodeURIComponent(nextPath)}`);
        return;
      }

      if (!response.ok || !payload.checkoutUrl) {
        if (response.status === 409 && payload.managePath) {
          setManagePath(payload.managePath);
        }
        setStatus(payload.error ?? t("billing_checkout_error_create_session"));
        return;
      }

      window.location.href = payload.checkoutUrl;
    } catch {
      setStatus(t("billing_checkout_error_start"));
    } finally {
      setIsLoading(false);
    }
  };

  const onStartNativeCheckout = async () => {
    setStatus("");
    setIsLoading(true);

    trackLanguageBillingInteraction({
      surface: "checkout",
      action: "checkout_started",
      planId: selectedPlanId,
    });

    try {
      if (!rcInitialized) {
        setStatus(t("billing_checkout_iap_initializing"));
        return;
      }

      const offeringsResult = await Purchases.getOfferings();
      const currentOffering = offeringsResult.current;
      
      if (!currentOffering) {
        setStatus(t("billing_checkout_iap_no_packages"));
        return;
      }

      // Matrix source of truth: package/product identifiers should match internal LanguagePlanId values.
      const targetPackage = findTypedPackageForLanguagePlanId(
        { current: currentOffering },
        selectedPlanId,
      );
      
      if (!targetPackage) {
        setStatus(t("billing_checkout_iap_plan_not_available", { plan: selectedPlan?.name ?? "" }));
        return;
      }

      const { customerInfo } = await Purchases.purchasePackage({ aPackage: targetPackage });
      
      if (hasRevenueCatProEntitlement(customerInfo)) {
        setStatus(t("billing_checkout_iap_success"));
        // We'd push to the success URL or wait for a webhook internally
        router.push("/billing/success");
      } else {
        setStatus(t("billing_checkout_iap_entitlement_missing"));
      }
    } catch (error: unknown) {
      if (!isUserCancelledError(error)) {
        setStatus(getErrorMessage(error) ?? t("billing_checkout_iap_failed"));
      } else {
        setStatus(t("billing_checkout_iap_cancelled"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthGuard>
        <main className="mx-auto max-w-xl px-6 py-12">
          <h1 className="text-2xl font-semibold">{t("billing_checkout_title")}</h1>
          <p className="mt-3 text-sm text-zinc-600">
            {t("billing_checkout_subtitle")}
          </p>
          <p className="mt-2 text-xs text-zinc-500">
            {t("billing_checkout_disclaimer")}
            <span> </span>
            <Link href="/legal/terms" className="underline">
              {t("billing_checkout_terms")}
            </Link>
            <span> | </span>
            <Link href="/legal/refunds" className="underline">
              {t("billing_checkout_refund_policy")}
            </Link>
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3">
            {selectablePlans.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => {
                    setSelectedPlanId(plan.id);
                    trackLanguageBillingInteraction({
                      surface: "checkout",
                      action: "checkout_plan_selected",
                      planId: plan.id,
                      payload: { planName: plan.name },
                    });
                  }}
                  className={`ui-focus-ring rounded-xl border px-4 py-3 text-left transition ${
                    isSelected
                      ? "border-cyan-300 bg-cyan-50"
                      : "border-zinc-200 bg-white hover:border-zinc-300 hover:bg-surface-muted"
                  }`}
                >
                  <p className="text-sm font-semibold text-zinc-900">{plan.name}</p>
                  <p className="mt-1 text-xs text-zinc-600">
                    {t("billing_checkout_plan_monthly_summary", {
                      price: plan.priceUsdMonthly.toFixed(2),
                      attempts: plan.scoredAttemptsPerLearnerMonthly ?? 0,
                    })}
                  </p>
                </button>
              );
            })}
          </div>

          {selectedPlan ? (
            <div className="ui-soft-card mt-4 rounded-xl border border-zinc-200 bg-surface-muted p-4 text-sm text-zinc-700">
              <p className="font-semibold text-zinc-900">{selectedPlan.name}</p>
              <p className="mt-1">{selectedPlan.notes}</p>
            </div>
          ) : null}

          {externalCheckoutAllowed ? (
            <button
              type="button"
              onClick={onStartWebCheckout}
              disabled={isLoading}
              className="ui-soft-button ui-focus-ring mt-6 rounded-md bg-accent px-4 py-2 text-sm text-white disabled:opacity-70"
            >
              {isLoading
                ? t("billing_checkout_starting")
                : `${t("billing_checkout_start")}${selectedPlan ? ` (${selectedPlan.name})` : ""}`}
            </button>
          ) : (
            <button
              type="button"
              onClick={onStartNativeCheckout}
              disabled={isLoading || !rcInitialized}
              className="ui-soft-button ui-focus-ring mt-6 rounded-md bg-emerald-600 px-4 py-2 text-sm text-white disabled:opacity-70"
            >
              {isLoading
                ? t("billing_checkout_processing")
                : `${t("billing_checkout_subscribe_app_store")}${selectedPlan ? ` (${selectedPlan.name})` : ""}`}
            </button>
          )}

          {status ? <p className="mt-4 text-sm text-zinc-600">{status}</p> : null}
          {managePath ? (
            <Link
              href={managePath}
              onClick={() =>
                trackLanguageBillingInteraction({
                  surface: "checkout",
                  action: "checkout_manage_subscription_clicked",
                  planId: selectedPlanId,
                })
              }
              className="ui-soft-button ui-focus-ring mt-3 inline-flex rounded-md border border-border bg-surface-muted px-4 py-2 text-sm"
            >
              {t("billing_checkout_manage_subscription")}
            </Link>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-zinc-500">
            <p>{t("billing_checkout_mode_disclaimer")}</p>
            <Link href="/billing/language" className="font-semibold text-cyan-700 hover:underline">
              {t("billing_checkout_compare_plans")}
            </Link>
          </div>
        </main>
      </AuthGuard>
    </ErrorBoundary>
  );
}
