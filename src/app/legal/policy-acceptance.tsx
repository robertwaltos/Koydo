"use client";

import { useEffect, useState } from "react";
import { type PolicyType } from "@/lib/compliance/policies";

type Props = {
  policyType: PolicyType;
};

export default function PolicyAcceptance({ policyType }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [accepted, setAccepted] = useState(false);
  const [requiresAuth, setRequiresAuth] = useState(false);
  const [status, setStatus] = useState("");
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const response = await fetch(`/api/compliance/policy-acceptance?policyType=${policyType}`);
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
  }, [policyType]);

  const acceptPolicy = async () => {
    setStatus("");
    try {
      const response = await fetch("/api/compliance/policy-acceptance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ policyType }),
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
    return <p className="text-xs text-zinc-500">Checking acceptance status...</p>;
  }

  if (requiresAuth) {
    return <p className="text-xs text-zinc-500">Sign in to acknowledge this policy version.</p>;
  }

  return (
    <div className="rounded-md border border-black/10 bg-zinc-50 p-3 dark:border-white/10 dark:bg-zinc-800">
      <p className="text-xs text-zinc-600 dark:text-zinc-300">
        Current version: {version ?? "unknown"}
      </p>
      {accepted ? (
        <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">You acknowledged this policy.</p>
      ) : (
        <button
          type="button"
          onClick={acceptPolicy}
          className="mt-2 rounded-md border border-black/15 px-3 py-1 text-sm"
        >
          Acknowledge Policy
        </button>
      )}
      {status ? <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">{status}</p> : null}
    </div>
  );
}
