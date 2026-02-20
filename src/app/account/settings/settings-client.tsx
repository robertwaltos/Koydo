"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsClient() {
  const externalBillingAllowed = (process.env.NEXT_PUBLIC_BILLING_PROVIDER_MODE ?? "stripe_external") !== "app_store_iap";
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpeningPortal, setIsOpeningPortal] = useState(false);
  const router = useRouter();

  const openBillingPortal = async () => {
    setStatus("");
    setIsOpeningPortal(true);
    try {
      const response = await fetch("/api/stripe/portal", { method: "POST" });
      const data = (await response.json().catch(() => ({}))) as {
        portalUrl?: string;
        error?: string;
      };
      if (!response.ok || !data.portalUrl) {
        setStatus(data.error ?? "Unable to open billing portal.");
        return;
      }
      window.location.href = data.portalUrl;
    } catch {
      setStatus("Unable to open billing portal.");
    } finally {
      setIsOpeningPortal(false);
    }
  };

  const handleDeleteAccount = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const confirmation = String(form.get("confirmation") ?? "");

    try {
      const response = await fetch("/api/account/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation }),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to delete account.");
        return;
      }

      setStatus("Account deleted. Redirecting...");
      router.push("/");
      router.refresh();
    } catch {
      setStatus("Unable to delete account.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
        <h2 className="text-lg font-semibold">Subscription Management</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {externalBillingAllowed
            ? "Manage billing method, invoices, and cancellation via Stripe's secure portal."
            : "This build uses in-app purchase mode. Subscription management is handled in-app."}
        </p>
        {externalBillingAllowed ? (
          <button
            type="button"
            onClick={openBillingPortal}
            disabled={isOpeningPortal}
            className="mt-4 rounded-md border border-black/15 px-4 py-2 text-sm disabled:opacity-70"
          >
            {isOpeningPortal ? "Opening portal..." : "Manage Subscription"}
          </button>
        ) : null}
      </section>

      <section className="rounded-lg border border-red-300 bg-red-50 p-5 dark:bg-red-900/20">
      <h2 className="text-lg font-semibold text-red-800 dark:text-red-300">Delete Account</h2>
      <p className="mt-2 text-sm text-red-700 dark:text-red-300">
        This permanently removes your account and associated profile data. Type <code>DELETE</code> to confirm.
      </p>

      <form onSubmit={handleDeleteAccount} className="mt-4 flex flex-wrap items-center gap-3">
        <input
          name="confirmation"
          className="rounded-md border border-red-300 px-3 py-2 text-sm"
          placeholder="Type DELETE"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-red-600 px-4 py-2 text-sm text-white disabled:opacity-70"
        >
          {isSubmitting ? "Deleting..." : "Delete My Account"}
        </button>
      </form>

      {status ? <p className="mt-3 text-sm text-red-800 dark:text-red-300">{status}</p> : null}
      </section>
    </div>
  );
}
