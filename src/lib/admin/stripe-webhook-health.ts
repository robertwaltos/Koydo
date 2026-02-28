import type { SupabaseClient } from "@supabase/supabase-js";

const STRIPE_WEBHOOK_TABLE = "stripe_webhook_events";

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return lower.includes("could not find the table") || (lower.includes("relation") && lower.includes("does not exist"));
}

export type StripeWebhookFailedEvent = {
  eventId: string;
  eventType: string;
  attemptCount: number;
  updatedAt: string;
  lastError: string | null;
};

export type StripeWebhookFailedTypeCount = {
  eventType: string;
  count: number;
};

export type StripeWebhookHealthReport = {
  generatedAt: string;
  windowHours: number;
  staleMinutes: number;
  trackingEnabled: boolean;
  healthy: boolean;
  detail: string;
  totals: {
    received: number;
    processed: number;
    failed: number;
    processing: number;
    retries: number;
    staleProcessing: number;
  };
  latestProcessedAt: string | null;
  recentFailed: StripeWebhookFailedEvent[];
  failedByEventType: StripeWebhookFailedTypeCount[];
};

export type StripeWebhookStaleReconcileResult = {
  generatedAt: string;
  staleMinutes: number;
  trackingEnabled: boolean;
  updatedCount: number;
  detail: string;
  updatedEventIds: string[];
};

function buildMissingTableHealthReport(
  generatedAt: string,
  windowHours: number,
  staleMinutes: number,
): StripeWebhookHealthReport {
  return {
    generatedAt,
    windowHours,
    staleMinutes,
    trackingEnabled: false,
    healthy: false,
    detail:
      "stripe_webhook_events is unavailable via Supabase API (missing table, schema cache stale, or table not exposed).",
    totals: {
      received: 0,
      processed: 0,
      failed: 0,
      processing: 0,
      retries: 0,
      staleProcessing: 0,
    },
    latestProcessedAt: null,
    recentFailed: [],
    failedByEventType: [],
  };
}

function buildFailedTypeCounts(rows: Array<{ event_type: string | null }>) {
  const counts = new Map<string, number>();
  for (const row of rows) {
    const eventType = typeof row.event_type === "string" && row.event_type.length > 0
      ? row.event_type
      : "unknown";
    counts.set(eventType, (counts.get(eventType) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([eventType, count]) => ({ eventType, count }))
    .sort((a, b) => b.count - a.count);
}

export async function runStripeWebhookHealthCheck(
  admin: SupabaseClient,
  options?: { windowHours?: number; staleMinutes?: number },
): Promise<StripeWebhookHealthReport> {
  const generatedAt = new Date().toISOString();
  const windowHours = Math.max(1, Number(options?.windowHours ?? 24));
  const staleMinutes = Math.max(1, Number(options?.staleMinutes ?? 10));
  const windowStart = new Date(Date.now() - windowHours * 60 * 60 * 1000).toISOString();
  const staleCutoff = new Date(Date.now() - staleMinutes * 60 * 1000).toISOString();

  const [
    receivedResult,
    processedResult,
    failedResult,
    processingResult,
    retriesResult,
    staleProcessingResult,
    recentFailedResult,
    failedTypeRowsResult,
    latestProcessedResult,
  ] = await Promise.all([
    admin
      .from(STRIPE_WEBHOOK_TABLE)
      .select("event_id", { count: "exact", head: true })
      .gte("created_at", windowStart),
    admin
      .from(STRIPE_WEBHOOK_TABLE)
      .select("event_id", { count: "exact", head: true })
      .eq("status", "processed")
      .gte("created_at", windowStart),
    admin
      .from(STRIPE_WEBHOOK_TABLE)
      .select("event_id", { count: "exact", head: true })
      .eq("status", "failed")
      .gte("created_at", windowStart),
    admin
      .from(STRIPE_WEBHOOK_TABLE)
      .select("event_id", { count: "exact", head: true })
      .eq("status", "processing")
      .gte("created_at", windowStart),
    admin
      .from(STRIPE_WEBHOOK_TABLE)
      .select("event_id", { count: "exact", head: true })
      .gt("attempt_count", 1)
      .gte("created_at", windowStart),
    admin
      .from(STRIPE_WEBHOOK_TABLE)
      .select("event_id", { count: "exact", head: true })
      .eq("status", "processing")
      .lt("updated_at", staleCutoff),
    admin
      .from(STRIPE_WEBHOOK_TABLE)
      .select("event_id, event_type, attempt_count, updated_at, last_error")
      .eq("status", "failed")
      .order("updated_at", { ascending: false })
      .limit(10),
    admin
      .from(STRIPE_WEBHOOK_TABLE)
      .select("event_type")
      .eq("status", "failed")
      .gte("created_at", windowStart)
      .limit(2000),
    admin
      .from(STRIPE_WEBHOOK_TABLE)
      .select("processed_at")
      .eq("status", "processed")
      .not("processed_at", "is", null)
      .order("processed_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  const queryErrors = [
    receivedResult.error ? new Error(receivedResult.error.message) : null,
    processedResult.error ? new Error(processedResult.error.message) : null,
    failedResult.error ? new Error(failedResult.error.message) : null,
    processingResult.error ? new Error(processingResult.error.message) : null,
    retriesResult.error ? new Error(retriesResult.error.message) : null,
    staleProcessingResult.error ? new Error(staleProcessingResult.error.message) : null,
    recentFailedResult.error ? new Error(recentFailedResult.error.message) : null,
    failedTypeRowsResult.error ? new Error(failedTypeRowsResult.error.message) : null,
    latestProcessedResult.error ? new Error(latestProcessedResult.error.message) : null,
  ].filter((value): value is Error => Boolean(value));

  if (queryErrors.length > 0) {
    const firstError = queryErrors[0];
    if (isMissingTableError(firstError.message)) {
      return buildMissingTableHealthReport(generatedAt, windowHours, staleMinutes);
    }
    throw firstError;
  }

  const failedCount = Number(failedResult.count ?? 0);
  const staleProcessingCount = Number(staleProcessingResult.count ?? 0);
  const healthy = failedCount === 0 && staleProcessingCount === 0;

  const recentFailed = (recentFailedResult.data ?? []).map((row) => ({
    eventId: row.event_id,
    eventType: typeof row.event_type === "string" && row.event_type.length > 0 ? row.event_type : "unknown",
    attemptCount: Number(row.attempt_count ?? 0),
    updatedAt: row.updated_at,
    lastError: row.last_error,
  }));
  const failedByEventType = buildFailedTypeCounts(failedTypeRowsResult.data ?? []);

  const latestProcessedAt =
    latestProcessedResult.data && typeof latestProcessedResult.data.processed_at === "string"
      ? latestProcessedResult.data.processed_at
      : null;

  return {
    generatedAt,
    windowHours,
    staleMinutes,
    trackingEnabled: true,
    healthy,
    detail: healthy
      ? "Webhook processing healthy."
      : "Webhook processing requires attention.",
    totals: {
      received: Number(receivedResult.count ?? 0),
      processed: Number(processedResult.count ?? 0),
      failed: failedCount,
      processing: Number(processingResult.count ?? 0),
      retries: Number(retriesResult.count ?? 0),
      staleProcessing: staleProcessingCount,
    },
    latestProcessedAt,
    recentFailed,
    failedByEventType,
  };
}

export async function markStaleStripeWebhookEventsFailed(
  admin: SupabaseClient,
  options?: { staleMinutes?: number; limit?: number },
): Promise<StripeWebhookStaleReconcileResult> {
  const generatedAt = new Date().toISOString();
  const staleMinutes = Math.max(1, Number(options?.staleMinutes ?? 10));
  const limit = Math.max(1, Number(options?.limit ?? 200));
  const staleCutoff = new Date(Date.now() - staleMinutes * 60 * 1000).toISOString();

  const { data: staleRows, error: selectError } = await admin
    .from(STRIPE_WEBHOOK_TABLE)
    .select("event_id")
    .eq("status", "processing")
    .lt("updated_at", staleCutoff)
    .order("updated_at", { ascending: true })
    .limit(limit);

  if (selectError) {
    if (isMissingTableError(selectError.message)) {
      return {
        generatedAt,
        staleMinutes,
        trackingEnabled: false,
        updatedCount: 0,
        detail:
          "stripe_webhook_events is unavailable via Supabase API (missing table, schema cache stale, or table not exposed).",
        updatedEventIds: [],
      };
    }
    throw new Error(selectError.message);
  }

  const eventIds = (staleRows ?? [])
    .map((row) => row.event_id)
    .filter((value): value is string => typeof value === "string" && value.length > 0);

  if (eventIds.length === 0) {
    return {
      generatedAt,
      staleMinutes,
      trackingEnabled: true,
      updatedCount: 0,
      detail: "No stale processing webhook events found.",
      updatedEventIds: [],
    };
  }

  const now = new Date().toISOString();
  const { error: updateError } = await admin
    .from(STRIPE_WEBHOOK_TABLE)
    .update({
      status: "failed",
      last_error: `Marked stale by admin reconcile at ${now} after ${staleMinutes} minutes.`,
    })
    .in("event_id", eventIds);

  if (updateError) {
    if (isMissingTableError(updateError.message)) {
      return {
        generatedAt,
        staleMinutes,
        trackingEnabled: false,
        updatedCount: 0,
        detail:
          "stripe_webhook_events is unavailable via Supabase API (missing table, schema cache stale, or table not exposed).",
        updatedEventIds: [],
      };
    }
    throw new Error(updateError.message);
  }

  return {
    generatedAt,
    staleMinutes,
    trackingEnabled: true,
    updatedCount: eventIds.length,
    detail: `Marked ${eventIds.length} stale webhook event(s) as failed.`,
    updatedEventIds: eventIds,
  };
}
