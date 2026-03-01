"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Purchases } from "@revenuecat/purchases-capacitor";
import { Capacitor } from "@capacitor/core";
import { initializeRevenueCat } from "@/lib/billing/revenuecat-client";
import { canUseIAP } from "@/lib/platform/features";
import {
  getLanguagePricingSnapshot,
  type LanguagePlanId,
} from "@/lib/language-learning/pricing";
import { hasRevenueCatProEntitlement } from "@/lib/billing/revenuecat-config";
import {
  findTypedPackageForLanguagePlanId,
  formatRevenueCatPackageCadenceLabel,
} from "@/lib/billing/revenuecat-offerings";

type PlanOption = {
  id: LanguagePlanId;
  title: string;
  monthlyEquivalent: string;
  badge?: string;
  description: string;
};

const PAYWALL_PLAN_IDS: LanguagePlanId[] = [
  "language_plus_conservative",
  "language_family_conservative",
];

const pricingSnapshot = getLanguagePricingSnapshot();

const PLAN_DISPLAY: PlanOption[] = PAYWALL_PLAN_IDS.map((planId) => {
  const plan = pricingSnapshot.plans.find((candidate) => candidate.id === planId);
  return {
    id: planId,
    title: plan?.name ?? planId,
    monthlyEquivalent: "Loading...",
    badge: planId.includes("family") ? "Family" : undefined,
    description: plan?.billingCadence === "annual" ? "Billed annually" : "Billed monthly",
  };
});

const DEFAULT_PLAN_ID: LanguagePlanId =
  PLAN_DISPLAY[0]?.id ?? "language_plus_conservative";

export default function PaywallPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<LanguagePlanId>(DEFAULT_PLAN_ID);
  const [plans, setPlans] = useState<PlanOption[]>(PLAN_DISPLAY);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rcReady, setRcReady] = useState(false);

  useEffect(() => {
    if (!canUseIAP() || !Capacitor.isNativePlatform()) return;

    const init = async () => {
      try {
        const initialized = await initializeRevenueCat();
        if (!initialized) {
          setStatus("Billing is not configured on this build.");
          return;
        }

        const offerings = await Purchases.getOfferings();
        if (!offerings.current) {
          setStatus("No plans available. Please check back later.");
          return;
        }

        const updatedPlans = PLAN_DISPLAY.map((plan) => {
          const pkg = findTypedPackageForLanguagePlanId(offerings, plan.id);
          if (!pkg) {
            return {
              ...plan,
              monthlyEquivalent: "Unavailable",
              description: "Not available in current offering",
            };
          }
          return {
            ...plan,
            monthlyEquivalent: pkg.product.priceString,
            description: formatRevenueCatPackageCadenceLabel(pkg),
          };
        });

        setPlans(updatedPlans);
        const firstAvailablePlan = updatedPlans.find((plan) => plan.monthlyEquivalent !== "Unavailable");
        if (firstAvailablePlan) {
          setSelectedId((currentId) =>
            currentId === firstAvailablePlan.id ? currentId : firstAvailablePlan.id,
          );
        }
        setRcReady(Boolean(firstAvailablePlan));
      } catch (err) {
        console.error("[Paywall] init error", err);
        setStatus("Unable to load pricing. Please try again.");
      }
    };

    void init();
  }, []);

  const handleSubscribe = async () => {
    if (!rcReady) return;
    setIsLoading(true);
    setStatus("");
    try {
      const offerings = await Purchases.getOfferings();
      const pkg = findTypedPackageForLanguagePlanId(offerings, selectedId);
      if (!pkg) {
        setStatus("Selected plan not available. Please try again.");
        return;
      }
      const { customerInfo } = await Purchases.purchasePackage({ aPackage: pkg });
      if (hasRevenueCatProEntitlement(customerInfo)) {
        router.push("/explore");
      } else {
        setStatus("Purchase completed but entitlement not active yet. Please try restoring.");
      }
    } catch (err: unknown) {
      const cancelled =
        err && typeof err === "object" && (err as { userCancelled?: boolean }).userCancelled;
      if (!cancelled) {
        setStatus("Purchase failed. Please try again.");
        console.error("[Paywall] purchase error", err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestore = async () => {
    setIsLoading(true);
    setStatus("Restoring purchases...");
    try {
      const { customerInfo } = await Purchases.restorePurchases();
      if (hasRevenueCatProEntitlement(customerInfo)) {
        router.push("/explore");
      } else {
        setStatus("No active purchases found to restore.");
      }
    } catch {
      setStatus("Restore failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-indigo-950 to-slate-900 px-4 py-12 text-white">
      {/* Hero */}
      <div className="mt-4 max-w-sm text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20">
          <span className="text-3xl">🎓</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Unlock Koydo Premium</h1>
        <p className="mt-3 text-base text-indigo-200">
          Everything you need to accelerate learning — from Pre-K through College.
        </p>
      </div>

      {/* Benefits */}
      <ul className="mt-8 w-full max-w-sm space-y-3">
        {[
          { icon: "📚", text: "Unlimited access to all modules & stages" },
          { icon: "🤖", text: "AI Tutor — personalized lessons, instant feedback" },
          { icon: "📝", text: "Advanced assessments & exam prep" },
          { icon: "🌍", text: "Full EN + ES curriculum coverage" },
          { icon: "🔥", text: "Streak tracking, achievements & rewards" },
        ].map(({ icon, text }) => (
          <li key={text} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm">
            <span className="text-xl">{icon}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>

      {/* Plan selector */}
      <div className="mt-8 w-full max-w-sm space-y-3">
        {plans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            disabled={plan.monthlyEquivalent === "Unavailable"}
            onClick={() => setSelectedId(plan.id)}
            className={`relative w-full rounded-2xl border-2 px-5 py-4 text-left transition-all disabled:cursor-not-allowed disabled:opacity-55 ${
              selectedId === plan.id
                ? "border-indigo-400 bg-indigo-500/20"
                : "border-white/20 bg-white/5 hover:border-white/40"
            }`}
          >
            {plan.badge ? (
              <span className="absolute -top-3 right-4 rounded-full bg-amber-400 px-2.5 py-0.5 text-xs font-bold text-amber-900">
                {plan.badge}
              </span>
            ) : null}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{plan.title}</p>
                <p className="text-xs text-indigo-200">{plan.description}</p>
              </div>
              <p className="text-lg font-bold">{plan.monthlyEquivalent}</p>
            </div>
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 w-full max-w-sm space-y-3">
        <button
          type="button"
          onClick={() => void handleSubscribe()}
          disabled={isLoading || !rcReady}
          className="w-full rounded-2xl bg-indigo-500 px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-indigo-400 active:scale-95 disabled:opacity-50"
        >
          {isLoading ? "Processing..." : "Start Free Trial"}
        </button>

        {status ? (
          <p role="status" className="text-center text-sm text-indigo-200">
            {status}
          </p>
        ) : null}

        <div className="flex items-center justify-center gap-4 text-sm text-indigo-300">
          <button
            type="button"
            onClick={() => void handleRestore()}
            disabled={isLoading}
            className="underline-offset-2 hover:underline disabled:opacity-50"
          >
            Restore Purchases
          </button>
          <span>·</span>
          <Link href="/explore" className="underline-offset-2 hover:underline">
            Continue with Free
          </Link>
        </div>
      </div>

      {/* Legal */}
      <div className="mt-8 max-w-sm space-y-1 text-center text-xs text-indigo-400">
        <p>
          Subscription auto-renews unless cancelled at least 24 hours before the end of the period.
          Manage or cancel in your device&apos;s subscription settings.
        </p>
        <p className="mt-1">
          <Link href="/legal/terms" className="underline">Terms of Service</Link>
          {" · "}
          <Link href="/legal/privacy" className="underline">Privacy Policy</Link>
        </p>
      </div>
    </main>
  );
}
