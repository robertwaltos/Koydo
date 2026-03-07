"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import { sanitizeNextPath } from "@/lib/routing/next-path";

type ConsentMethod = "email_verification" | "micro_charge" | "id_check";

const CONSENT_METHODS: {
  id: ConsentMethod;
  label: string;
  description: string;
}[] = [
  {
    id: "email_verification",
    label: "Email verification",
    description:
      "We send a verification link to the parent's email. The parent clicks the link to confirm consent.",
  },
  {
    id: "micro_charge",
    label: "Credit/debit card micro-charge ($0.50, refunded)",
    description:
      "A $0.50 charge is placed on the parent's card and immediately refunded. This proves the parent holds a valid payment method, meeting FTC verifiable parental consent requirements.",
  },
  {
    id: "id_check",
    label: "Government ID verification",
    description:
      "The parent uploads a government-issued photo ID. The ID is verified, then immediately deleted. This is the highest assurance method for COPPA compliance.",
  },
];

export default function ParentConsentForm() {
  const searchParams = useSearchParams();
  const nextPath = sanitizeNextPath(searchParams.get("next"));
  const [parentEmail, setParentEmail] = useState("");
  const [consentMethod, setConsentMethod] =
    useState<ConsentMethod>("email_verification");
  const [region, setRegion] = useState("US");
  const [verificationUrl, setVerificationUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedMethod = CONSENT_METHODS.find((m) => m.id === consentMethod);

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
          nextPath,
        }),
      });

      const payload = (await response.json()) as {
        message?: string;
        error?: string;
        verificationUrl?: string;
        deliveryMode?: "email" | "simulation" | "provider-error";
      };

      if (response.status === 401) {
        setStatus(
          "Please sign in as the child account first, then resubmit consent.",
        );
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
    <form onSubmit={onSubmit} className="mt-6 space-y-5">
      <div>
        <label
          className="mb-1 block text-sm font-medium"
          htmlFor="parentEmail"
        >
          Parent / guardian email
        </label>
        <input
          id="parentEmail"
          type="email"
          value={parentEmail}
          onChange={(event) => setParentEmail(event.target.value)}
          className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
          required
        />
      </div>

      <fieldset>
        <legend className="mb-2 block text-sm font-medium">
          Choose a verification method
        </legend>
        <div className="space-y-2">
          {CONSENT_METHODS.map((method) => (
            <label
              key={method.id}
              className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 transition-colors ${
                consentMethod === method.id
                  ? "border-accent bg-accent/5"
                  : "border-border bg-surface hover:border-zinc-400"
              }`}
            >
              <input
                type="radio"
                name="consentMethod"
                value={method.id}
                checked={consentMethod === method.id}
                onChange={() => setConsentMethod(method.id)}
                className="mt-0.5 h-4 w-4 text-accent"
              />
              <div>
                <span className="text-sm font-semibold">{method.label}</span>
                <p className="mt-0.5 text-xs text-zinc-500">
                  {method.description}
                </p>
              </div>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="region">
          Region
        </label>
        <input
          id="region"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
          className="ui-focus-ring w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
          required
        />
      </div>

      {selectedMethod && consentMethod !== "email_verification" && (
        <p className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
          {consentMethod === "micro_charge"
            ? "After submitting, you will be redirected to a secure payment page to complete the $0.50 verification charge. The charge is refunded immediately."
            : "After submitting, you will be guided through a secure ID upload process. Your ID is verified and then permanently deleted."}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="ui-soft-button ui-focus-ring min-h-11 w-full rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Submit consent request"}
      </button>

      {verificationUrl ? (
        <a
          href={verificationUrl}
          className="ui-soft-button ui-focus-ring ml-3 inline-block rounded-md border border-border bg-surface-muted px-4 py-2 text-sm"
        >
          Open parent verification link (simulation)
        </a>
      ) : null}

      {status ? <p className="text-sm text-zinc-600">{status}</p> : null}

      <p className="text-xs text-zinc-400">
        Koydo complies with the Children&apos;s Online Privacy Protection Act
        (COPPA). We collect the minimum data necessary and never sell personal
        information. See our{" "}
        <a
          href="/legal/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Privacy Policy
        </a>{" "}
        for details.
      </p>
    </form>
  );
}
