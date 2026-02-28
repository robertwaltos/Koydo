"use client";

import { useEffect } from "react";
import { trackLanguageBillingView } from "@/lib/analytics/language-billing-events";

export default function LanguageBillingViewTracker({
  activePlanId,
  pricingProfile,
}: {
  activePlanId: string;
  pricingProfile: string;
}) {
  useEffect(() => {
    trackLanguageBillingView({
      surface: "language_pricing",
      planId: activePlanId,
      pricingProfile,
    });
  }, [activePlanId, pricingProfile]);

  return null;
}
