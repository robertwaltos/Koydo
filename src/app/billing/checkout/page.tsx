"use client";

import { useState } from "react";

export default function BillingCheckoutPage() {
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

      <button
        type="button"
        onClick={onStartCheckout}
        disabled={isLoading}
        className="mt-6 rounded-md bg-foreground px-4 py-2 text-sm text-background disabled:opacity-70"
      >
        {isLoading ? "Starting checkout..." : "Start Checkout"}
      </button>

      {status ? <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">{status}</p> : null}
    </main>
  );
}
