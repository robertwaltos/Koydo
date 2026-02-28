"use client";

import { useEffect } from "react";
import { trackLanguageBillingView } from "@/lib/analytics/language-billing-events";

export default function SuccessViewTracker() {
  useEffect(() => {
    trackLanguageBillingView({ surface: "success" });
  }, []);

  return null;
}
