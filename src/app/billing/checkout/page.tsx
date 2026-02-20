"use client";

import Link from "next/link";
import { useState } from "react";

export default function BillingCheckoutPage() {
  const billingProviderMode = process.env.NEXT_PUBLIC_BILLING_PROVIDER_MODE ?? "stripe_external";
  const externalCheckoutAllowed = billingProviderMode !== "app_store_iap";
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onStartCheckout = async () => {
    setStatus("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

      const payload = (await response.json()) as { checkoutUrl?: string; error?: string };

      if (!response.ok || !payload.checkoutUrl) {
        setStatus(payload.error ?? "Unable to create checkout session.");
        return;
      }

      window.location.href = payload.checkoutUrl;
    } catch {
      setStatus("Unable to start checkout. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Subscription Checkout</h1>
      <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
        Start the EduForge monthly subscription checkout flow.
      </p>
      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
        Subscription renews automatically unless canceled before renewal.
        <span> </span>
        <Link href="/legal/terms" className="underline">
          Terms
        </Link>
        <span> | </span>
        <Link href="/legal/refunds" className="underline">
          Refund Policy
        </Link>
      </p>

      {externalCheckoutAllowed ? (
        <button
          type="button"
          onClick={onStartCheckout}
          disabled={isLoading}
          className="mt-6 rounded-md bg-foreground px-4 py-2 text-sm text-background disabled:opacity-70"
        >
          {isLoading ? "Starting checkout..." : "Start Checkout"}
        </button>
      ) : (
        <div className="mt-6 rounded-md border border-indigo-300 bg-indigo-50 p-3 text-sm text-indigo-900 dark:border-indigo-500/30 dark:bg-indigo-950/30 dark:text-indigo-200">
          This build uses in-app purchase mode. External Stripe checkout is disabled.
        </div>
      )}

      {status ? <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">{status}</p> : null}
      <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">Billing behavior follows app-store policy mode.</p>
    </main>
  );
}
