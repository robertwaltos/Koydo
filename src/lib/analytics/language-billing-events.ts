"use client";

import { trackLearningEvent } from "@/lib/analytics/xapi-lite";

type LanguageBillingSurface = "language_pricing" | "checkout" | "success";

type LanguageBillingAction =
  | "plan_checkout_selected"
  | "checkout_started"
  | "checkout_manage_subscription_clicked"
  | "checkout_plan_selected"
  | "exam_unlock_checkout_selected";

type PrimitivePayloadValue =
  | string
  | number
  | boolean
  | null
  | Array<string | number | boolean | null>;

const BILLING_MODULE_ID = "billing";

function getLessonId(surface: LanguageBillingSurface) {
  if (surface === "checkout") return "billing:checkout";
  if (surface === "success") return "billing:success";
  return "billing:language";
}

export function trackLanguageBillingView(input: {
  surface: LanguageBillingSurface;
  planId?: string | null;
  pricingProfile?: string | null;
  payload?: Record<string, PrimitivePayloadValue>;
}) {
  void trackLearningEvent({
    eventType: "lesson_viewed",
    lessonId: getLessonId(input.surface),
    moduleId: BILLING_MODULE_ID,
    payload: {
      surface: input.surface,
      planId: input.planId ?? null,
      pricingProfile: input.pricingProfile ?? null,
      ...(input.payload ?? {}),
    },
  });
}

export function trackLanguageBillingInteraction(input: {
  surface: LanguageBillingSurface;
  action: LanguageBillingAction;
  planId?: string | null;
  payload?: Record<string, PrimitivePayloadValue>;
}) {
  void trackLearningEvent({
    eventType: "activity_interacted",
    lessonId: getLessonId(input.surface),
    moduleId: BILLING_MODULE_ID,
    payload: {
      surface: input.surface,
      action: input.action,
      planId: input.planId ?? null,
      ...(input.payload ?? {}),
    },
  });
}
