"use client";

import Link from "next/link";
import { trackLanguageBillingInteraction } from "@/lib/analytics/language-billing-events";

export default function LanguagePlanCheckoutLink({
  planId,
  planName,
}: {
  planId: string;
  planName: string;
}) {
  return (
    <Link
      href={`/billing/checkout?languagePlanId=${encodeURIComponent(planId)}`}
      onClick={() =>
        trackLanguageBillingInteraction({
          surface: "language_pricing",
          action: "plan_checkout_selected",
          planId,
          payload: { planName },
        })
      }
      className="ui-focus-ring inline-flex min-h-10 items-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:brightness-110"
    >
      Choose {planName}
    </Link>
  );
}
