"use client";

import { FormEvent, useState } from "react";

type ConsentMethod = "email_verification" | "micro_charge" | "id_check";

export default function ParentConsentForm() {
  const [parentEmail, setParentEmail] = useState("");
  const [consentMethod, setConsentMethod] = useState<ConsentMethod>("email_verification");
  const [region, setRegion] = useState("US");
  const [verificationUrl, setVerificationUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/compliance/parent-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          parentEmail,
          consentMethod,
          consentVersion: "v1",
          region,
        }),
      });

      const payload = (await response.json()) as {
        message?: string;
        error?: string;
        verificationUrl?: string;
        deliveryMode?: "email" | "simulation" | "provider-error";
      };

      if (response.status === 401) {
        setStatus("Please sign in as the child account first, then resubmit consent.");
        return;
      }

      if (!response.ok) {
        setStatus(payload.error ?? "Failed to submit consent request.");
        return;
      }

      setVerificationUrl(payload.verificationUrl ?? null);
      setStatus(
        payload.deliveryMode === "email"
          ? "Consent request submitted. A verification email was sent to the parent address."
          : payload.message ?? "Consent request submitted.",
      );
    } catch {
      setStatus("Unable to submit request. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="parentEmail">
          Parent email
        </label>
        <input
          id="parentEmail"
          type="email"
          value={parentEmail}
          onChange={(event) => setParentEmail(event.target.value)}
          className="w-full rounded-md border border-black/15 px-3 py-2 text-sm"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="consentMethod">
          Verification method
        </label>
        <select
          id="consentMethod"
          value={consentMethod}
          onChange={(event) => setConsentMethod(event.target.value as ConsentMethod)}
          className="w-full rounded-md border border-black/15 px-3 py-2 text-sm"
        >
          <option value="email_verification">Email verification</option>
          <option value="micro_charge">Credit card micro-charge</option>
          <option value="id_check">ID check</option>
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="region">
          Region
        </label>
        <input
          id="region"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
          className="w-full rounded-md border border-black/15 px-3 py-2 text-sm"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-foreground px-4 py-2 text-sm text-background disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Submit consent request"}
      </button>

      {verificationUrl ? (
        <a
          href={verificationUrl}
          className="ml-3 inline-block rounded-md border border-black/15 px-4 py-2 text-sm dark:border-white/20"
        >
          Open parent verification link (simulation)
        </a>
      ) : null}

      {status ? <p className="text-sm text-zinc-600 dark:text-zinc-300">{status}</p> : null}
    </form>
  );
}
