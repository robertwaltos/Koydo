"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sanitizeNextPath } from "@/lib/routing/next-path";

type Props = {
  token: string;
};

export default function ParentConsentVerifyClient({ token }: Props) {
  const [status, setStatus] = useState(
    token ? "Checking verification link..." : "Missing verification token.",
  );
  const [nextRoute, setNextRoute] = useState("/dashboard");

  useEffect(() => {
    if (!token) {
      return;
    }

    let cancelled = false;

    const verify = async () => {
      try {
        const response = await fetch("/api/compliance/parent-consent/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const payload = (await response.json()) as {
          message?: string;
          error?: string;
          nextRoute?: string;
        };

        if (cancelled) {
          return;
        }

        if (!response.ok) {
          setStatus(payload.error ?? "Unable to verify consent.");
          return;
        }

        setStatus(payload.message ?? "Parental consent verified.");
        setNextRoute(sanitizeNextPath(payload.nextRoute) ?? "/dashboard");
      } catch {
        if (!cancelled) {
          setStatus("Unable to verify consent. Try again later.");
        }
      }
    };

    void verify();

    return () => {
      cancelled = true;
    };
  }, [token]);

  return (
    <div className="mt-6 space-y-4">
      <p className="text-sm text-zinc-700">{status}</p>
      <div className="flex gap-3">
        <Link
          href="/auth/sign-in"
          className="ui-soft-button ui-focus-ring rounded-md border border-border bg-surface-muted px-4 py-2 text-sm"
        >
          Return to Sign In
        </Link>
        <Link href={nextRoute} className="ui-soft-button ui-focus-ring rounded-md bg-accent px-4 py-2 text-sm text-white">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
