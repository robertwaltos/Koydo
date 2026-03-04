"use client";

import { useEffect, useMemo, useState } from "react";
import { type PolicyType } from "@/lib/compliance/policies";

type Props = {
  policyType: PolicyType;
  billingState?: string | null;
};

export default function PolicyAcceptance({ policyType, billingState }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [requiresAuth, setRequiresAuth] = useState(false);
  const [status, setStatus] = useState("");
  const [version, setVersion] = useState<string | null>(null);

  const normalizedBillingState = useMemo(() => {
    if (!billingState) return null;
    const value = billingState.trim().toUpperCase();
    return /^[A-Z]{2}$/.test(value) ? value : null;
  }, [billingState]);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const search = new URLSearchParams({ policyType });
        if (policyType === "terms" && normalizedBillingState) {
          search.set("billingState", normalizedBillingState);
        }

        const response = await fetch(`/api/compliance/policy-acceptance?${search.toString()}`);
        const data = (await response.json()) as {
          accepted?: boolean;
          requiresAuth?: boolean;
          version?: string;
        };
        if (response.ok) {
          setAccepted(Boolean(data.accepted));
          setRequiresAuth(Boolean(data.requiresAuth));
          setVersion(data.version ?? null);
        }
      } finally {
        setIsLoading(false);
      }
    };
    void loadStatus();
  }, [normalizedBillingState, policyType]);

  const acceptPolicy = async () => {
    setStatus("");
    try {
      const response = await fetch("/api/compliance/policy-acceptance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          policyType,
          billingState: policyType === "terms" ? normalizedBillingState : undefined,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        version?: string;
      };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to record acceptance.");
        return;
      }
      setAccepted(true);
      setVersion(data.version ?? version);
      setStatus("Acceptance recorded.");
    } catch {
      setStatus("Unable to record acceptance.");
    }
  };

  if (isLoading) {
    return <p className="text-xs text-foreground">Checking acceptance status...</p>;
  }

  if (requiresAuth) {
    return <p className="text-xs text-foreground">Sign in to acknowledge this policy version.</p>;
  }

  return (
    <div className="ui-soft-card rounded-md p-3">
      <p className="text-xs text-foreground">
        Current version: {version ?? "unknown"}
      </p>
      {accepted ? (
        <p className="mt-1 text-sm text-success">You acknowledged this policy.</p>
      ) : (
        <button
          type="button"
          onClick={acceptPolicy}
          className="ui-soft-button ui-focus-ring mt-2 min-h-11 rounded-md border border-border bg-surface-muted px-4 py-2 text-sm"
        >
          Acknowledge Policy
        </button>
      )}
      {status ? <p className="mt-1 text-xs text-foreground">{status}</p> : null}
    </div>
  );
}
