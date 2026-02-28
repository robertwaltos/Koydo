import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const MAX_EVENT_QUERY_LIMIT = 5000;

type PricingEventRow = {
  event_type: string;
  lesson_id: string | null;
  event_at: string | null;
  payload: Record<string, unknown> | null;
};

function toFiniteNumber(value: string | null, fallback: number) {
  if (!value) return fallback;
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return parsed;
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function isMissingTableError(message: string) {
  const lowered = message.toLowerCase();
  return (
    lowered.includes("could not find the table") ||
    (lowered.includes("relation") && lowered.includes("does not exist"))
  );
}

function extractString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const url = new URL(request.url);
  const days = clamp(toFiniteNumber(url.searchParams.get("days"), 30), 1, 365);
  const limit = clamp(
    toFiniteNumber(url.searchParams.get("limit"), 2000),
    50,
    MAX_EVENT_QUERY_LIMIT,
  );
  const sinceIso = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
  const adminDb = createSupabaseAdminClient();

  const { data, error } = await adminDb
    .from("learning_events")
    .select("event_type, lesson_id, event_at, payload")
    .eq("module_id", "billing")
    .gte("event_at", sinceIso)
    .order("event_at", { ascending: false })
    .limit(limit);

  if (error) {
    if (isMissingTableError(error.message)) {
      return NextResponse.json(
        { error: "Learning events table is not available in this environment." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const rows = (data ?? []) as PricingEventRow[];
  const byEventType = new Map<string, number>();
  const byLesson = new Map<string, number>();
  const byAction = new Map<string, number>();
  const planActionCounts = new Map<string, number>();

  let pricingViews = 0;
  let checkoutViews = 0;
  let successViews = 0;
  let checkoutStarts = 0;
  let manageSubscriptionClicks = 0;
  let planSelectClicks = 0;

  for (const row of rows) {
    byEventType.set(row.event_type, (byEventType.get(row.event_type) ?? 0) + 1);

    const lessonId = row.lesson_id ?? "unknown";
    byLesson.set(lessonId, (byLesson.get(lessonId) ?? 0) + 1);

    if (row.event_type === "lesson_viewed") {
      if (row.lesson_id === "billing:language") pricingViews += 1;
      if (row.lesson_id === "billing:checkout") checkoutViews += 1;
      if (row.lesson_id === "billing:success") successViews += 1;
    }

    if (row.event_type !== "activity_interacted") {
      continue;
    }

    const action = extractString(row.payload?.action);
    if (!action) continue;

    byAction.set(action, (byAction.get(action) ?? 0) + 1);
    if (action === "checkout_started") checkoutStarts += 1;
    if (action === "checkout_manage_subscription_clicked") manageSubscriptionClicks += 1;
    if (action === "checkout_plan_selected" || action === "plan_checkout_selected") {
      planSelectClicks += 1;
    }

    const planId = extractString(row.payload?.planId);
    if (planId) {
      const planKey = `${action}:${planId}`;
      planActionCounts.set(planKey, (planActionCounts.get(planKey) ?? 0) + 1);
    }
  }

  const funnel = {
    pricingViews,
    checkoutViews,
    checkoutStarts,
    successViews,
    pricingToCheckoutViewRate: pricingViews > 0 ? checkoutViews / pricingViews : null,
    checkoutStartRateFromCheckoutViews:
      checkoutViews > 0 ? checkoutStarts / checkoutViews : null,
    checkoutToSuccessViewRate: checkoutViews > 0 ? successViews / checkoutViews : null,
  };

  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    windowDays: days,
    since: sinceIso,
    eventCount: rows.length,
    byEventType: Array.from(byEventType.entries()).map(([key, count]) => ({
      eventType: key,
      count,
    })),
    byLesson: Array.from(byLesson.entries()).map(([key, count]) => ({
      lessonId: key,
      count,
    })),
    byAction: Array.from(byAction.entries()).map(([key, count]) => ({
      action: key,
      count,
    })),
    planActions: Array.from(planActionCounts.entries()).map(([key, count]) => ({
      key,
      count,
    })),
    interactionSummary: {
      planSelectClicks,
      checkoutStarts,
      manageSubscriptionClicks,
    },
    funnel,
    sample: rows.slice(0, 20),
  });
}
