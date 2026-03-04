import type { SupabaseClient } from "@supabase/supabase-js";
import { isMissingTableError } from "@/lib/admin/db-readiness";
import { serverEnv } from "@/lib/config/env";
import { buildFinanceSnapshot, loadFinanceDataset } from "@/lib/finance/reporting";
import type {
  FinanceAnalyticsOverview,
  FinanceMarketingPerformance,
  FinancePricingFunnel,
  FinanceServicePerformance,
  FinanceTierPerformance,
  ServiceIntegrationCategory,
} from "@/lib/finance/types";

const ACTIVE_SUBSCRIPTION_STATUSES = new Set(["active", "trialing"]);
const CHURNED_SUBSCRIPTION_STATUSES = new Set([
  "canceled",
  "cancelled",
  "expired",
  "billing_issue",
  "paused",
  "inactive",
]);

const SOURCE_KEYS = [
  "utm_source",
  "acquisition_source",
  "marketing_source",
  "source",
  "channel",
] as const;
const REGION_KEYS = ["region", "country", "geo_tier", "market"] as const;
const REGULATED_CHILD_MAX_AGE_YEARS = 13;

type ServiceSeed = {
  key: string;
  name: string;
  category: ServiceIntegrationCategory;
  billingModel: "usage" | "subscription" | "transaction" | "hybrid" | "unknown";
  sourceSystem: string;
};

type RegistryRow = {
  id: string;
  service_key: string;
  service_name: string;
  category: ServiceIntegrationCategory;
  last_seen_at: string | null;
};

type PipelineOptions = {
  windowDays?: number;
  reconciliationDays?: number;
  maxRowsPerSource?: number;
  triggeredBy?: string | null;
  persistSnapshot?: boolean;
  runReconciliation?: boolean;
  includeRegulatedChildDataInAggregates?: boolean;
};

type PipelineRuntime = {
  windowDays: number;
  reconciliationDays: number;
  maxRowsPerSource: number;
  triggeredBy: string | null;
  persistSnapshot: boolean;
  runReconciliation: boolean;
  includeRegulatedChildDataInAggregates: boolean;
  now: Date;
  warnings: string[];
};

type SubscriptionRow = {
  user_id: string | null;
  provider: string | null;
  plan_id: string | null;
  status: string;
  is_in_trial: boolean | null;
  metadata: Record<string, unknown> | null;
  created_at: string | null;
  updated_at: string | null;
};

type ReconciliationRunRow = {
  id: string;
  status: string;
  completed_at: string | null;
};

type StudentProfileAgeRow = {
  account_id: string | null;
  age_years: number | null;
};

type ParentConsentRow = {
  child_user_id: string | null;
};

const SERVICE_SEEDS: ServiceSeed[] = [
  {
    key: "unknown_external",
    name: "Unknown External Service",
    category: "other",
    billingModel: "unknown",
    sourceSystem: "manual",
  },
  {
    key: "stripe",
    name: "Stripe",
    category: "payments",
    billingModel: "transaction",
    sourceSystem: "stripe",
  },
  {
    key: "revenuecat",
    name: "RevenueCat",
    category: "subscription",
    billingModel: "usage",
    sourceSystem: "revenuecat",
  },
  {
    key: "plaid",
    name: "Plaid",
    category: "banking",
    billingModel: "usage",
    sourceSystem: "bank",
  },
  {
    key: "openai",
    name: "OpenAI",
    category: "ai",
    billingModel: "usage",
    sourceSystem: "openai",
  },
  {
    key: "google_ai",
    name: "Google AI",
    category: "ai",
    billingModel: "usage",
    sourceSystem: "google",
  },
  {
    key: "mixpanel",
    name: "Mixpanel",
    category: "analytics",
    billingModel: "usage",
    sourceSystem: "mixpanel",
  },
  {
    key: "vercel",
    name: "Vercel",
    category: "infrastructure",
    billingModel: "subscription",
    sourceSystem: "vercel",
  },
  {
    key: "supabase",
    name: "Supabase",
    category: "infrastructure",
    billingModel: "usage",
    sourceSystem: "supabase",
  },
  {
    key: "resend",
    name: "Resend",
    category: "communications",
    billingModel: "usage",
    sourceSystem: "resend",
  },
  {
    key: "google_ads",
    name: "Google Ads",
    category: "marketing",
    billingModel: "usage",
    sourceSystem: "manual",
  },
  {
    key: "meta_ads",
    name: "Meta Ads",
    category: "marketing",
    billingModel: "usage",
    sourceSystem: "manual",
  },
];

function toSafeNumber(value: unknown, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return parsed;
}

function toSafeInteger(value: unknown, fallback = 0) {
  return Math.trunc(toSafeNumber(value, fallback));
}

function clampInteger(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, Math.trunc(value)));
}

function dateToIsoDay(date: Date) {
  return date.toISOString().slice(0, 10);
}

function daysAgoIsoDay(now: Date, days: number) {
  return dateToIsoDay(new Date(now.getTime() - days * 24 * 60 * 60 * 1000));
}

function startOfMonth(isoMonth: string) {
  return `${isoMonth}-01`;
}

function endOfMonth(isoMonth: string) {
  const [yearRaw, monthRaw] = isoMonth.split("-");
  const year = Number(yearRaw);
  const month = Number(monthRaw);
  if (!Number.isFinite(year) || !Number.isFinite(month)) return `${isoMonth}-28`;
  const lastDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return `${isoMonth}-${String(lastDay).padStart(2, "0")}`;
}

function monthKeyFromDateLike(input: string | null | undefined) {
  if (!input) return null;
  if (/^\d{4}-\d{2}$/.test(input)) return input;
  const parsed = new Date(input);
  if (Number.isNaN(parsed.getTime())) {
    return /^\d{4}-\d{2}-\d{2}/.test(input) ? input.slice(0, 7) : null;
  }
  const year = parsed.getUTCFullYear();
  const month = String(parsed.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function metadataRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return value as Record<string, unknown>;
}

function pickMetadataString(
  metadata: Record<string, unknown>,
  keys: readonly string[],
  fallback = "unknown",
) {
  for (const key of keys) {
    const raw = metadata[key];
    if (typeof raw !== "string") continue;
    const normalized = normalizeDimension(raw);
    if (normalized !== "unknown") return normalized;
  }
  return fallback;
}

function normalizeDimension(value: string) {
  const normalized = value.trim().toLowerCase().replace(/[^a-z0-9_\-]+/g, "_");
  if (!normalized) return "unknown";
  return normalized.slice(0, 64);
}

function inferServiceKey(parts: Array<string | null | undefined>) {
  const normalized = normalizeDimension(parts.filter(Boolean).join(" "));
  if (normalized === "unknown") return "unknown_external";

  if (normalized.includes("stripe")) return "stripe";
  if (normalized.includes("revenuecat")) return "revenuecat";
  if (normalized.includes("plaid")) return "plaid";
  if (normalized.includes("openai") || normalized.includes("chatgpt") || normalized.includes("gpt")) {
    return "openai";
  }
  if (
    normalized.includes("gemini") ||
    normalized.includes("vertex") ||
    normalized.includes("google_ai")
  ) {
    return "google_ai";
  }
  if (normalized.includes("mixpanel")) return "mixpanel";
  if (normalized.includes("vercel")) return "vercel";
  if (normalized.includes("supabase")) return "supabase";
  if (normalized.includes("resend")) return "resend";
  if (normalized.includes("google_ads") || normalized.includes("adwords")) return "google_ads";
  if (
    normalized.includes("meta_ads") ||
    normalized.includes("facebook_ads") ||
    normalized.includes("instagram_ads")
  ) {
    return "meta_ads";
  }
  return normalized.slice(0, 64);
}

function serviceSeedByKey(key: string): ServiceSeed {
  const found = SERVICE_SEEDS.find((entry) => entry.key === key);
  if (found) return found;
  return {
    key,
    name: key
      .split("_")
      .filter(Boolean)
      .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
      .join(" "),
    category: "other",
    billingModel: "unknown",
    sourceSystem: "manual",
  };
}

async function ensureSeedServices(admin: SupabaseClient, runtime: PipelineRuntime) {
  const rows = SERVICE_SEEDS.map((service) => ({
    service_key: service.key,
    service_name: service.name,
    category: service.category,
    billing_model: service.billingModel,
    default_source_system: service.sourceSystem,
    discovery_source: "seed",
    discovery_confidence: 1,
    is_active: true,
    metadata: { seed: true },
    last_seen_at: runtime.now.toISOString(),
  }));

  const { error } = await admin.from("service_integrations_registry").upsert(rows, {
    onConflict: "service_key",
  });
  if (error) {
    throw new Error(error.message);
  }
}

async function loadRegistry(admin: SupabaseClient) {
  const { data, error } = await admin
    .from("service_integrations_registry")
    .select("id, service_key, service_name, category, last_seen_at")
    .eq("is_active", true);
  if (error) throw new Error(error.message);

  const rows = (data ?? []) as RegistryRow[];
  const byKey = new Map<string, RegistryRow>();
  for (const row of rows) byKey.set(row.service_key, row);
  return byKey;
}

async function upsertDiscoveredServices(
  admin: SupabaseClient,
  runtime: PipelineRuntime,
  serviceKeys: Set<string>,
) {
  if (serviceKeys.size === 0) return;
  const nowIso = runtime.now.toISOString();
  const rows = Array.from(serviceKeys).map((key) => {
    const seed = serviceSeedByKey(key);
    return {
      service_key: seed.key,
      service_name: seed.name,
      category: seed.category,
      billing_model: seed.billingModel,
      default_source_system: seed.sourceSystem,
      discovery_source: "auto",
      discovery_confidence: 0.65,
      is_active: true,
      last_seen_at: nowIso,
      metadata: { discoveredBy: "finance_service_intelligence_pipeline" },
    };
  });

  const { error } = await admin.from("service_integrations_registry").upsert(rows, {
    onConflict: "service_key",
  });
  if (error) throw new Error(error.message);
}

async function upsertUsageRows(admin: SupabaseClient, rows: Array<Record<string, unknown>>) {
  if (rows.length === 0) return;
  const chunkSize = 500;
  for (let start = 0; start < rows.length; start += chunkSize) {
    const chunk = rows.slice(start, start + chunkSize);
    const { error } = await admin.from("service_integration_usage_daily").upsert(chunk, {
      onConflict: "service_id,usage_date,usage_unit,source_system,source_ref",
    });
    if (error) throw new Error(error.message);
  }
}

function toRuntime(options: PipelineOptions | undefined): PipelineRuntime {
  const now = new Date();
  const defaultIncludeRegulatedChildData =
    serverEnv.FINANCE_ANALYTICS_INCLUDE_REGULATED_CHILD_AGGREGATES;
  return {
    windowDays: clampInteger(options?.windowDays ?? 30, 7, 365),
    reconciliationDays: clampInteger(options?.reconciliationDays ?? 120, 7, 730),
    maxRowsPerSource: clampInteger(options?.maxRowsPerSource ?? 12000, 500, 100000),
    triggeredBy: options?.triggeredBy ?? null,
    persistSnapshot: options?.persistSnapshot ?? true,
    runReconciliation: options?.runReconciliation ?? true,
    includeRegulatedChildDataInAggregates:
      options?.includeRegulatedChildDataInAggregates ?? defaultIncludeRegulatedChildData,
    now,
    warnings: [],
  };
}

async function discoverServices(
  admin: SupabaseClient,
  runtime: PipelineRuntime,
  financeSnapshot: ReturnType<typeof buildFinanceSnapshot>,
) {
  const discoveredKeys = new Set<string>();
  for (const line of financeSnapshot.line_items) {
    const key = inferServiceKey([
      line.source_system,
      line.counterparty_name,
      line.description,
      line.source_ref,
    ]);
    discoveredKeys.add(key);
  }

  const [stripeResult, revenuecatResult, connectionsResult] = await Promise.all([
    admin
      .from("stripe_webhook_events")
      .select("event_id", { count: "exact", head: true })
      .limit(1),
    admin
      .from("revenuecat_webhook_events")
      .select("event_id", { count: "exact", head: true })
      .limit(1),
    admin.from("bank_connections").select("provider").limit(runtime.maxRowsPerSource),
  ]);

  if (stripeResult.error && !isMissingTableError(stripeResult.error.message)) {
    throw new Error(stripeResult.error.message);
  }
  if (stripeResult.count && stripeResult.count > 0) discoveredKeys.add("stripe");

  if (revenuecatResult.error && !isMissingTableError(revenuecatResult.error.message)) {
    throw new Error(revenuecatResult.error.message);
  }
  if (revenuecatResult.count && revenuecatResult.count > 0) discoveredKeys.add("revenuecat");

  if (connectionsResult.error) {
    if (!isMissingTableError(connectionsResult.error.message)) {
      throw new Error(connectionsResult.error.message);
    }
  } else {
    for (const row of connectionsResult.data ?? []) {
      const provider =
        typeof row.provider === "string" ? row.provider : String(row.provider ?? "manual");
      discoveredKeys.add(inferServiceKey([provider]));
    }
  }

  await upsertDiscoveredServices(admin, runtime, discoveredKeys);
}

async function collectUsageAndPersist(
  admin: SupabaseClient,
  runtime: PipelineRuntime,
  registryByKey: Map<string, RegistryRow>,
) {
  const openAiServiceId = registryByKey.get("openai")?.id;
  const stripeServiceId = registryByKey.get("stripe")?.id;
  const revenuecatServiceId = registryByKey.get("revenuecat")?.id;
  const mixpanelServiceId = registryByKey.get("mixpanel")?.id;
  if (!openAiServiceId) {
    runtime.warnings.push("openai service missing from registry; AI usage ingestion skipped.");
  }

  const usageRows: Array<Record<string, unknown>> = [];
  const nowIso = runtime.now.toISOString();
  const usageSinceIso = daysAgoIsoDay(runtime.now, runtime.windowDays);

  if (openAiServiceId) {
    const [languageResult, tokenResult] = await Promise.all([
      admin
        .from("language_usage_tracking")
        .select("month_key, plan_tier, geo_tier, scored_attempts, practice_attempts, ai_cost_usd")
        .order("updated_at", { ascending: false })
        .limit(runtime.maxRowsPerSource),
      admin
        .from("user_tokens")
        .select("month_key, input_tokens, output_tokens, spent_usd")
        .order("updated_at", { ascending: false })
        .limit(runtime.maxRowsPerSource),
    ]);

    if (languageResult.error && !isMissingTableError(languageResult.error.message)) {
      throw new Error(languageResult.error.message);
    }
    if (tokenResult.error && !isMissingTableError(tokenResult.error.message)) {
      throw new Error(tokenResult.error.message);
    }
    if (languageResult.error && isMissingTableError(languageResult.error.message)) {
      runtime.warnings.push("language_usage_tracking table unavailable; AI usage signals reduced.");
    }
    if (tokenResult.error && isMissingTableError(tokenResult.error.message)) {
      runtime.warnings.push("user_tokens table unavailable; token-cost usage signals reduced.");
    }

    const languageBuckets = new Map<string, { usage: number; costCents: number }>();
    for (const row of languageResult.data ?? []) {
      const monthKey = monthKeyFromDateLike(String(row.month_key ?? "")) ?? monthKeyFromDateLike(nowIso);
      if (!monthKey) continue;
      const planTier = normalizeDimension(String(row.plan_tier ?? "unknown"));
      const geoTier = normalizeDimension(String(row.geo_tier ?? "unknown"));
      const bucketKey = `${monthKey}:${planTier}:${geoTier}`;
      const usage = toSafeInteger(row.scored_attempts) + toSafeInteger(row.practice_attempts);
      const costCents = Math.max(0, Math.round(toSafeNumber(row.ai_cost_usd) * 100));
      const bucket = languageBuckets.get(bucketKey) ?? { usage: 0, costCents: 0 };
      bucket.usage += usage;
      bucket.costCents += costCents;
      languageBuckets.set(bucketKey, bucket);
    }

    for (const [bucketKey, bucket] of languageBuckets.entries()) {
      const [monthKey, planTier, geoTier] = bucketKey.split(":");
      usageRows.push({
        service_id: openAiServiceId,
        usage_date: startOfMonth(monthKey),
        usage_unit: "attempt",
        usage_quantity: bucket.usage,
        estimated_cost_cents: bucket.costCents,
        attributed_revenue_cents: 0,
        source_system: "language_usage_tracking",
        source_ref: `language_usage:${bucketKey}`,
        dimensions: {
          planTier,
          geoTier,
          granularity: "monthly",
        },
        updated_at: nowIso,
      });
    }

    const tokenBuckets = new Map<string, { tokens: number; costCents: number }>();
    for (const row of tokenResult.data ?? []) {
      const monthKey = monthKeyFromDateLike(String(row.month_key ?? "")) ?? monthKeyFromDateLike(nowIso);
      if (!monthKey) continue;
      const tokens = toSafeInteger(row.input_tokens) + toSafeInteger(row.output_tokens);
      const costCents = Math.max(0, Math.round(toSafeNumber(row.spent_usd) * 100));
      const bucket = tokenBuckets.get(monthKey) ?? { tokens: 0, costCents: 0 };
      bucket.tokens += tokens;
      bucket.costCents += costCents;
      tokenBuckets.set(monthKey, bucket);
    }

    for (const [monthKey, bucket] of tokenBuckets.entries()) {
      usageRows.push({
        service_id: openAiServiceId,
        usage_date: startOfMonth(monthKey),
        usage_unit: "token",
        usage_quantity: bucket.tokens,
        estimated_cost_cents: bucket.costCents,
        attributed_revenue_cents: 0,
        source_system: "user_tokens",
        source_ref: `user_tokens:${monthKey}`,
        dimensions: {
          granularity: "monthly",
        },
        updated_at: nowIso,
      });
    }
  }

  const [stripeEvents, revenuecatEvents, billingEvents] = await Promise.all([
    admin
      .from("stripe_webhook_events")
      .select("created_at")
      .gte("created_at", usageSinceIso)
      .order("created_at", { ascending: false })
      .limit(runtime.maxRowsPerSource),
    admin
      .from("revenuecat_webhook_events")
      .select("created_at")
      .gte("created_at", usageSinceIso)
      .order("created_at", { ascending: false })
      .limit(runtime.maxRowsPerSource),
    admin
      .from("learning_events")
      .select("event_at, module_id")
      .eq("module_id", "billing")
      .gte("event_at", usageSinceIso)
      .order("event_at", { ascending: false })
      .limit(runtime.maxRowsPerSource),
  ]);

  if (stripeEvents.error && !isMissingTableError(stripeEvents.error.message)) {
    throw new Error(stripeEvents.error.message);
  }
  if (revenuecatEvents.error && !isMissingTableError(revenuecatEvents.error.message)) {
    throw new Error(revenuecatEvents.error.message);
  }
  if (billingEvents.error && !isMissingTableError(billingEvents.error.message)) {
    throw new Error(billingEvents.error.message);
  }

  if (stripeEvents.error && isMissingTableError(stripeEvents.error.message)) {
    runtime.warnings.push("stripe_webhook_events table unavailable; Stripe usage counters skipped.");
  }
  if (revenuecatEvents.error && isMissingTableError(revenuecatEvents.error.message)) {
    runtime.warnings.push(
      "revenuecat_webhook_events table unavailable; RevenueCat usage counters skipped.",
    );
  }
  if (billingEvents.error && isMissingTableError(billingEvents.error.message)) {
    runtime.warnings.push("learning_events table unavailable; billing-event funnel counters skipped.");
  }

  if (stripeServiceId) {
    const daily = new Map<string, number>();
    for (const row of stripeEvents.data ?? []) {
      const day = monthKeyFromDateLike(String(row.created_at ?? "")) ? String(row.created_at).slice(0, 10) : "";
      if (!day) continue;
      daily.set(day, (daily.get(day) ?? 0) + 1);
    }
    for (const [day, count] of daily.entries()) {
      usageRows.push({
        service_id: stripeServiceId,
        usage_date: day,
        usage_unit: "webhook_event",
        usage_quantity: count,
        estimated_cost_cents: 0,
        attributed_revenue_cents: 0,
        source_system: "stripe_webhook_events",
        source_ref: `stripe_events:${day}`,
        dimensions: { granularity: "daily" },
        updated_at: nowIso,
      });
    }
  }

  if (revenuecatServiceId) {
    const daily = new Map<string, number>();
    for (const row of revenuecatEvents.data ?? []) {
      const day = monthKeyFromDateLike(String(row.created_at ?? "")) ? String(row.created_at).slice(0, 10) : "";
      if (!day) continue;
      daily.set(day, (daily.get(day) ?? 0) + 1);
    }
    for (const [day, count] of daily.entries()) {
      usageRows.push({
        service_id: revenuecatServiceId,
        usage_date: day,
        usage_unit: "webhook_event",
        usage_quantity: count,
        estimated_cost_cents: 0,
        attributed_revenue_cents: 0,
        source_system: "revenuecat_webhook_events",
        source_ref: `revenuecat_events:${day}`,
        dimensions: { granularity: "daily" },
        updated_at: nowIso,
      });
    }
  }

  if (mixpanelServiceId) {
    const daily = new Map<string, number>();
    for (const row of billingEvents.data ?? []) {
      const day = monthKeyFromDateLike(String(row.event_at ?? "")) ? String(row.event_at).slice(0, 10) : "";
      if (!day) continue;
      daily.set(day, (daily.get(day) ?? 0) + 1);
    }
    for (const [day, count] of daily.entries()) {
      usageRows.push({
        service_id: mixpanelServiceId,
        usage_date: day,
        usage_unit: "tracking_event",
        usage_quantity: count,
        estimated_cost_cents: 0,
        attributed_revenue_cents: 0,
        source_system: "learning_events",
        source_ref: `billing_events:${day}`,
        dimensions: { module: "billing", granularity: "daily" },
        updated_at: nowIso,
      });
    }
  }

  await upsertUsageRows(admin, usageRows);
}

async function ingestBillingRecordsFromLedger(
  admin: SupabaseClient,
  runtime: PipelineRuntime,
  registryByKey: Map<string, RegistryRow>,
  financeSnapshot: ReturnType<typeof buildFinanceSnapshot>,
) {
  const fallbackServiceId = registryByKey.get("unknown_external")?.id ?? null;
  const buckets = new Map<
    string,
    {
      serviceKey: string;
      monthKey: string;
      amountCents: number;
      sourceSystem: string;
      category: string;
      counterparty: string | null;
    }
  >();

  let expenseLineCount = 0;
  let attributedExpenseLineCount = 0;
  for (const line of financeSnapshot.line_items) {
    if (line.account_type !== "expense" || line.side !== "debit") continue;
    if (line.signed_amount_cents <= 0) continue;
    expenseLineCount += 1;
    const serviceKey = inferServiceKey([
      line.source_system,
      line.counterparty_name,
      line.description,
      line.source_ref,
    ]);
    if (serviceKey !== "unknown_external") attributedExpenseLineCount += 1;

    const monthKey = line.month_key;
    const bucketKey = `${serviceKey}:${monthKey}:${line.account_category}`;
    const bucket = buckets.get(bucketKey) ?? {
      serviceKey,
      monthKey,
      amountCents: 0,
      sourceSystem: line.source_system,
      category: line.account_category,
      counterparty: line.counterparty_name,
    };
    bucket.amountCents += line.signed_amount_cents;
    buckets.set(bucketKey, bucket);
  }

  const records: Array<Record<string, unknown>> = [];
  for (const bucket of buckets.values()) {
    const serviceId = registryByKey.get(bucket.serviceKey)?.id ?? fallbackServiceId;
    if (!serviceId) continue;
    records.push({
      service_id: serviceId,
      billing_period_start: startOfMonth(bucket.monthKey),
      billing_period_end: endOfMonth(bucket.monthKey),
      statement_date: endOfMonth(bucket.monthKey),
      amount_cents: bucket.amountCents,
      currency: "USD",
      record_type: "charge",
      source_type: "ledger_inferred",
      source_system: "business_gl_transactions",
      external_statement_id: `gl:${bucket.monthKey}`,
      external_line_id: `gl:${bucket.serviceKey}:${bucket.monthKey}:${bucket.category}`,
      counterparty_name: bucket.counterparty,
      metadata: {
        inferredServiceKey: bucket.serviceKey,
        accountCategory: bucket.category,
        sourceSystem: bucket.sourceSystem,
      },
      ingested_by: runtime.triggeredBy,
      updated_at: runtime.now.toISOString(),
    });
  }

  const chunkSize = 250;
  for (let start = 0; start < records.length; start += chunkSize) {
    const chunk = records.slice(start, start + chunkSize);
    const { error } = await admin.from("service_billing_records").upsert(chunk, {
      onConflict: "source_type,source_system,external_line_id",
    });
    if (error) throw new Error(error.message);
  }

  const coverage =
    expenseLineCount > 0
      ? Number((attributedExpenseLineCount / expenseLineCount).toFixed(4))
      : 0;
  return {
    serviceAttributionCoverage: coverage,
  };
}

async function runBillingReconciliation(
  admin: SupabaseClient,
  runtime: PipelineRuntime,
  registryByKey: Map<string, RegistryRow>,
): Promise<ReconciliationRunRow | null> {
  if (!runtime.runReconciliation) {
    return null;
  }

  const periodStart = daysAgoIsoDay(runtime.now, runtime.reconciliationDays);
  const periodEnd = dateToIsoDay(runtime.now);

  const { data: run, error: runError } = await admin
    .from("service_billing_reconciliation_runs")
    .insert({
      period_start: periodStart,
      period_end: periodEnd,
      status: "running",
      created_by: runtime.triggeredBy,
      metadata: {
        source: "finance_service_intelligence_pipeline",
        reconciliationDays: runtime.reconciliationDays,
      },
    })
    .select("id, status, completed_at")
    .single();
  if (runError) throw new Error(runError.message);

  try {
    const [recordsResult, financeDataset] = await Promise.all([
      admin
        .from("service_billing_records")
        .select("id, service_id, billing_period_start, billing_period_end, amount_cents, metadata")
        .gte("billing_period_end", periodStart)
        .lte("billing_period_end", periodEnd)
        .limit(runtime.maxRowsPerSource),
      loadFinanceDataset(admin, {
        sinceDate: periodStart,
        limit: runtime.maxRowsPerSource * 3,
      }),
    ]);
    if (recordsResult.error) throw new Error(recordsResult.error.message);

    const financeSnapshot = buildFinanceSnapshot(financeDataset);
    const serviceKeyById = new Map<string, string>();
    for (const row of registryByKey.values()) {
      serviceKeyById.set(row.id, row.service_key);
    }

    const glByServiceMonth = new Map<string, number>();
    for (const line of financeSnapshot.line_items) {
      if (line.account_type !== "expense" || line.side !== "debit" || line.signed_amount_cents <= 0) {
        continue;
      }
      const key = inferServiceKey([
        line.source_system,
        line.counterparty_name,
        line.description,
        line.source_ref,
      ]);
      const monthKey = line.month_key;
      const mapKey = `${key}:${monthKey}`;
      glByServiceMonth.set(mapKey, (glByServiceMonth.get(mapKey) ?? 0) + line.signed_amount_cents);
    }

    const rows: Array<Record<string, unknown>> = [];
    let matched = 0;
    let review = 0;
    let unmatched = 0;
    let totalVariance = 0;

    for (const record of recordsResult.data ?? []) {
      const serviceKey = record.service_id ? serviceKeyById.get(record.service_id) ?? "unknown_external" : "unknown_external";
      const monthKey =
        monthKeyFromDateLike(String(record.billing_period_start ?? "")) ??
        monthKeyFromDateLike(String(record.billing_period_end ?? "")) ??
        dateToIsoDay(runtime.now).slice(0, 7);
      const mapKey = `${serviceKey}:${monthKey}`;
      const expected = glByServiceMonth.get(mapKey) ?? 0;
      const amount = toSafeInteger(record.amount_cents);
      const variance = expected - amount;
      totalVariance += Math.abs(variance);

      let status: "matched" | "needs_review" | "unmatched" = "unmatched";
      let matchType: "exact" | "amount_period" | "unmatched" = "unmatched";
      let confidence: number | null = null;
      let note = "No corresponding GL aggregate found.";

      if (expected > 0 && variance === 0) {
        status = "matched";
        matchType = "exact";
        confidence = 1;
        note = "Exact service/month aggregate match.";
        matched += 1;
      } else if (expected > 0 && Math.abs(variance) <= 5_000) {
        status = "needs_review";
        matchType = "amount_period";
        confidence = Number((1 - Math.min(1, Math.abs(variance) / 5_000)).toFixed(3));
        note = "Within variance tolerance; review recommended.";
        review += 1;
      } else {
        unmatched += 1;
      }

      rows.push({
        reconciliation_run_id: run.id,
        service_id: record.service_id ?? null,
        billing_record_id: record.id,
        gl_transaction_id: null,
        match_type: matchType,
        status,
        confidence_score: confidence,
        variance_cents: variance,
        note,
        metadata: {
          serviceKey,
          monthKey,
          expectedAmountCents: expected,
          billedAmountCents: amount,
        },
      });
    }

    if (rows.length > 0) {
      const { error: insertError } = await admin
        .from("service_billing_reconciliation_items")
        .insert(rows);
      if (insertError) throw new Error(insertError.message);
    }

    const { error: finalizeError } = await admin
      .from("service_billing_reconciliation_runs")
      .update({
        status: "completed",
        matched_count: matched,
        review_count: review,
        unmatched_count: unmatched,
        total_variance_cents: totalVariance,
        completed_at: runtime.now.toISOString(),
        notes: `Auto reconciliation complete for ${rows.length} billing records.`,
      })
      .eq("id", run.id);
    if (finalizeError) throw new Error(finalizeError.message);

    return {
      id: run.id,
      status: "completed",
      completed_at: runtime.now.toISOString(),
    };
  } catch (error) {
    await admin
      .from("service_billing_reconciliation_runs")
      .update({
        status: "failed",
        completed_at: runtime.now.toISOString(),
        notes: error instanceof Error ? error.message : "Unknown reconciliation error",
      })
      .eq("id", run.id);
    throw error;
  }
}

function computePricingFunnel(rows: {
  pricingViews: number;
  checkoutViews: number;
  checkoutStarts: number;
  successViews: number;
  windowDays: number;
}): FinancePricingFunnel {
  return {
    window_days: rows.windowDays,
    pricing_views: rows.pricingViews,
    checkout_views: rows.checkoutViews,
    checkout_starts: rows.checkoutStarts,
    success_views: rows.successViews,
    pricing_to_checkout_rate:
      rows.pricingViews > 0 ? Number((rows.checkoutViews / rows.pricingViews).toFixed(4)) : 0,
    checkout_start_rate:
      rows.checkoutViews > 0 ? Number((rows.checkoutStarts / rows.checkoutViews).toFixed(4)) : 0,
    checkout_success_rate:
      rows.checkoutViews > 0 ? Number((rows.successViews / rows.checkoutViews).toFixed(4)) : 0,
  };
}

async function countPricingFunnel(admin: SupabaseClient, runtime: PipelineRuntime) {
  const sinceIso = daysAgoIsoDay(runtime.now, runtime.windowDays);
  const [pricingViews, checkoutViews, successViews, checkoutStarts] = await Promise.all([
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "lesson_viewed")
      .eq("lesson_id", "billing:language")
      .gte("event_at", sinceIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "lesson_viewed")
      .eq("lesson_id", "billing:checkout")
      .gte("event_at", sinceIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "lesson_viewed")
      .eq("lesson_id", "billing:success")
      .gte("event_at", sinceIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "activity_interacted")
      .contains("payload", { action: "checkout_started" })
      .gte("event_at", sinceIso),
  ]);

  const firstError =
    pricingViews.error ?? checkoutViews.error ?? successViews.error ?? checkoutStarts.error;
  if (firstError) {
    if (isMissingTableError(firstError.message)) {
      runtime.warnings.push("learning_events table unavailable; pricing funnel metrics defaulted.");
      return computePricingFunnel({
        pricingViews: 0,
        checkoutViews: 0,
        checkoutStarts: 0,
        successViews: 0,
        windowDays: runtime.windowDays,
      });
    }
    throw new Error(firstError.message);
  }

  return computePricingFunnel({
    pricingViews: pricingViews.count ?? 0,
    checkoutViews: checkoutViews.count ?? 0,
    checkoutStarts: checkoutStarts.count ?? 0,
    successViews: successViews.count ?? 0,
    windowDays: runtime.windowDays,
  });
}

function buildOptimizationInsights(input: {
  marketingPerformance: FinanceMarketingPerformance[];
  servicePerformance: FinanceServicePerformance[];
  coverage: FinanceAnalyticsOverview["coverage"];
  pricingFunnel: FinancePricingFunnel;
}) {
  const insights: string[] = [];
  const roiCandidates = input.marketingPerformance
    .filter((row) => row.roi_ratio !== null)
    .sort((left, right) => Number(right.roi_ratio) - Number(left.roi_ratio));
  if (roiCandidates.length > 0) {
    const top = roiCandidates[0];
    insights.push(
      `Top ROI channel is ${top.source}/${top.region} at ${(Number(top.roi_ratio) * 100).toFixed(1)}% ROI proxy.`,
    );
  }

  const topCostService = input.servicePerformance
    .slice()
    .sort((left, right) => right.billed_cost_cents - left.billed_cost_cents)[0];
  if (topCostService && topCostService.billed_cost_cents > 0) {
    insights.push(
      `Highest external cost service is ${topCostService.service_name} (${(topCostService.billed_cost_cents / 100).toFixed(2)} USD).`,
    );
  }

  if (input.pricingFunnel.checkout_success_rate < 0.5 && input.pricingFunnel.checkout_views > 100) {
    insights.push("Checkout-success rate is below 50%; prioritize checkout friction and payment-failure fixes.");
  }
  if (input.coverage.acquisition_source_coverage < 0.7) {
    insights.push("Acquisition-source coverage is below 70%; enrich source attribution metadata in checkout flows.");
  }
  if (input.coverage.region_coverage < 0.7) {
    insights.push("Region coverage is below 70%; normalize region/country capture for subscription metadata.");
  }
  return insights.slice(0, 8);
}

function collectDistinctUserIds(
  rows: Array<{ user_id: string | null }>,
  regulatedUserIds: Set<string>,
) {
  const users = new Set<string>();
  let excludedRows = 0;

  for (const row of rows) {
    const userId = typeof row.user_id === "string" ? row.user_id : null;
    if (!userId) continue;
    if (regulatedUserIds.has(userId)) {
      excludedRows += 1;
      continue;
    }
    users.add(userId);
  }

  return { users, excludedRows };
}

async function loadRegulatedChildUserIds(
  admin: SupabaseClient,
  runtime: PipelineRuntime,
): Promise<Set<string>> {
  const ids = new Set<string>();
  const [profilesResult, parentConsentsResult] = await Promise.all([
    admin
      .from("student_profiles")
      .select("account_id,age_years")
      .not("account_id", "is", null)
      .not("age_years", "is", null)
      .lte("age_years", REGULATED_CHILD_MAX_AGE_YEARS)
      .limit(runtime.maxRowsPerSource),
    admin
      .from("parent_consents")
      .select("child_user_id")
      .not("child_user_id", "is", null)
      .limit(runtime.maxRowsPerSource),
  ]);

  if (profilesResult.error) {
    if (!isMissingTableError(profilesResult.error.message)) {
      throw new Error(profilesResult.error.message);
    }
    runtime.warnings.push("student_profiles table unavailable; age-based child-data exclusion disabled.");
  } else {
    const profileRows = (profilesResult.data ?? []) as StudentProfileAgeRow[];
    for (const row of profileRows) {
      if (typeof row.account_id === "string") {
        ids.add(row.account_id);
      }
    }
    if (profileRows.length >= runtime.maxRowsPerSource) {
      runtime.warnings.push(
        "Child-data exclusion sampled student_profiles due to row cap; increase maxRowsPerSource for full precision.",
      );
    }
  }

  if (parentConsentsResult.error) {
    if (!isMissingTableError(parentConsentsResult.error.message)) {
      throw new Error(parentConsentsResult.error.message);
    }
    runtime.warnings.push(
      "parent_consents table unavailable; consent-based child-data exclusion disabled.",
    );
  } else {
    const consentRows = (parentConsentsResult.data ?? []) as ParentConsentRow[];
    for (const row of consentRows) {
      if (typeof row.child_user_id === "string") {
        ids.add(row.child_user_id);
      }
    }
    if (consentRows.length >= runtime.maxRowsPerSource) {
      runtime.warnings.push(
        "Child-data exclusion sampled parent_consents due to row cap; increase maxRowsPerSource for full precision.",
      );
    }
  }

  return ids;
}

async function buildOverviewAndMaybePersist(
  admin: SupabaseClient,
  runtime: PipelineRuntime,
  financeSnapshot: ReturnType<typeof buildFinanceSnapshot>,
  serviceAttributionCoverage: number,
): Promise<FinanceAnalyticsOverview> {
  const nowIso = runtime.now.toISOString();
  const asOfDate = dateToIsoDay(runtime.now);
  const sinceIso = daysAgoIsoDay(runtime.now, runtime.windowDays);

  const [dauEvents, mauEvents, subscriptionsResult, usageResult, billingResult, latestRunResult, pricingFunnel, regulatedChildUserIds] =
    await Promise.all([
      admin
        .from("learning_events")
        .select("user_id")
        .gte("event_at", daysAgoIsoDay(runtime.now, 1))
        .limit(runtime.maxRowsPerSource),
      admin
        .from("learning_events")
        .select("user_id")
        .gte("event_at", sinceIso)
        .limit(runtime.maxRowsPerSource),
      admin
        .from("subscriptions")
        .select("user_id, provider, plan_id, status, is_in_trial, metadata, created_at, updated_at")
        .order("updated_at", { ascending: false })
        .limit(runtime.maxRowsPerSource),
      admin
        .from("service_integration_usage_daily")
        .select("service_id, usage_unit, usage_quantity, estimated_cost_cents")
        .gte("usage_date", sinceIso)
        .limit(runtime.maxRowsPerSource),
      admin
        .from("service_billing_records")
        .select("service_id, amount_cents")
        .gte("billing_period_end", sinceIso)
        .limit(runtime.maxRowsPerSource),
      admin
        .from("service_billing_reconciliation_runs")
        .select("id, status, completed_at, unmatched_count")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
      countPricingFunnel(admin, runtime),
      runtime.includeRegulatedChildDataInAggregates
        ? Promise.resolve(new Set<string>())
        : loadRegulatedChildUserIds(admin, runtime),
    ]);

  if (dauEvents.error) {
    if (!isMissingTableError(dauEvents.error.message)) throw new Error(dauEvents.error.message);
    runtime.warnings.push("learning_events table unavailable; DAU defaults to 0.");
  }
  if (mauEvents.error) {
    if (!isMissingTableError(mauEvents.error.message)) throw new Error(mauEvents.error.message);
    runtime.warnings.push("learning_events table unavailable; MAU defaults to 0.");
  }
  if (subscriptionsResult.error) {
    if (!isMissingTableError(subscriptionsResult.error.message)) {
      throw new Error(subscriptionsResult.error.message);
    }
    runtime.warnings.push("subscriptions table unavailable; tier and marketing performance defaulted.");
  }
  if (usageResult.error) {
    if (!isMissingTableError(usageResult.error.message)) throw new Error(usageResult.error.message);
    runtime.warnings.push("service_integration_usage_daily table unavailable; usage costs defaulted.");
  }
  if (billingResult.error) {
    if (!isMissingTableError(billingResult.error.message)) throw new Error(billingResult.error.message);
    runtime.warnings.push("service_billing_records table unavailable; billed costs defaulted.");
  }
  if (latestRunResult.error) {
    if (!isMissingTableError(latestRunResult.error.message)) throw new Error(latestRunResult.error.message);
  }

  const dauAggregation = collectDistinctUserIds(dauEvents.data ?? [], regulatedChildUserIds);
  const mauAggregation = collectDistinctUserIds(mauEvents.data ?? [], regulatedChildUserIds);
  const dauUsers = runtime.includeRegulatedChildDataInAggregates
    ? new Set(
      (dauEvents.data ?? [])
        .map((row) => (typeof row.user_id === "string" ? row.user_id : null))
        .filter((value): value is string => Boolean(value)),
    )
    : dauAggregation.users;
  const mauUsers = runtime.includeRegulatedChildDataInAggregates
    ? new Set(
      (mauEvents.data ?? [])
        .map((row) => (typeof row.user_id === "string" ? row.user_id : null))
        .filter((value): value is string => Boolean(value)),
    )
    : mauAggregation.users;

  if (runtime.includeRegulatedChildDataInAggregates) {
    runtime.warnings.push(
      "Regulated child data is included only in de-identified internal aggregates (compliance mode: included_deidentified).",
    );
  } else {
    if (regulatedChildUserIds.size > 0) {
      runtime.warnings.push(
        `Excluded ${regulatedChildUserIds.size} regulated-child account(s) from user-based revenue optimization aggregates.`,
      );
    }
    if (dauAggregation.excludedRows > 0 || mauAggregation.excludedRows > 0) {
      runtime.warnings.push(
        `Filtered ${dauAggregation.excludedRows + mauAggregation.excludedRows} learning-event rows tied to regulated-child accounts.`,
      );
    }
  }

  if (dauUsers.size >= runtime.maxRowsPerSource || mauUsers.size >= runtime.maxRowsPerSource) {
    runtime.warnings.push("DAU/MAU sampled due to row cap; increase maxRowsPerSource for full precision.");
  }

  const rawSubscriptionRows = (subscriptionsResult.data ?? []) as SubscriptionRow[];
  let excludedSubscriptionRows = 0;
  const subscriptionRows = runtime.includeRegulatedChildDataInAggregates
    ? rawSubscriptionRows
    : rawSubscriptionRows.filter((row) => {
      if (!row.user_id) return true;
      if (!regulatedChildUserIds.has(row.user_id)) return true;
      excludedSubscriptionRows += 1;
      return false;
    });
  if (!runtime.includeRegulatedChildDataInAggregates && excludedSubscriptionRows > 0) {
    runtime.warnings.push(
      `Excluded ${excludedSubscriptionRows} subscription row(s) linked to regulated-child accounts.`,
    );
  }
  const tierMap = new Map<string, FinanceTierPerformance>();
  const marketingRawMap = new Map<
    string,
    {
      source: string;
      region: string;
      conversions: number;
      active: number;
      churned: number;
    }
  >();
  const sourceTotals = new Map<string, number>();
  const sourceCoverageCounter = { known: 0, total: 0 };
  const regionCoverageCounter = { known: 0, total: 0 };
  const payingUsers = new Set<string>();

  for (const row of subscriptionRows) {
    const provider = normalizeDimension(String(row.provider ?? "unknown"));
    const planId = normalizeDimension(String(row.plan_id ?? "unknown"));
    const status = normalizeDimension(String(row.status ?? "unknown"));
    const tierKey = `${provider}:${planId}`;
    const tier = tierMap.get(tierKey) ?? {
      tier_key: tierKey,
      provider,
      plan_id: planId,
      active_subscriptions: 0,
      trial_subscriptions: 0,
      canceled_subscriptions: 0,
      conversion_count: 0,
      churn_count: 0,
      revenue_cents: 0,
    };
    tier.conversion_count += 1;
    if (ACTIVE_SUBSCRIPTION_STATUSES.has(status)) {
      tier.active_subscriptions += 1;
      if (row.user_id) payingUsers.add(row.user_id);
    }
    if (status === "trialing" || Boolean(row.is_in_trial)) {
      tier.trial_subscriptions += 1;
    }
    if (CHURNED_SUBSCRIPTION_STATUSES.has(status)) {
      tier.canceled_subscriptions += 1;
      tier.churn_count += 1;
    }
    tierMap.set(tierKey, tier);

    const metadata = metadataRecord(row.metadata);
    const source = pickMetadataString(metadata, SOURCE_KEYS);
    const region = pickMetadataString(metadata, REGION_KEYS);
    sourceCoverageCounter.total += 1;
    regionCoverageCounter.total += 1;
    if (source !== "unknown") sourceCoverageCounter.known += 1;
    if (region !== "unknown") regionCoverageCounter.known += 1;

    const marketingKey = `${source}:${region}`;
    const marketingEntry = marketingRawMap.get(marketingKey) ?? {
      source,
      region,
      conversions: 0,
      active: 0,
      churned: 0,
    };
    marketingEntry.conversions += 1;
    if (ACTIVE_SUBSCRIPTION_STATUSES.has(status)) marketingEntry.active += 1;
    if (CHURNED_SUBSCRIPTION_STATUSES.has(status)) marketingEntry.churned += 1;
    marketingRawMap.set(marketingKey, marketingEntry);
    sourceTotals.set(source, (sourceTotals.get(source) ?? 0) + 1);
  }

  const revenueCents = financeSnapshot.totals.revenue_cents;
  const operatingExpenseCents = financeSnapshot.totals.operating_expense_cents;
  const marketingSpendCents =
    financeSnapshot.expense_categories.find((entry) => entry.category === "marketing")?.expense_cents ?? 0;
  const infrastructureCostCents =
    financeSnapshot.expense_categories.find((entry) => entry.category === "cloud")?.expense_cents ?? 0;
  const mrrCents = runtime.windowDays > 0 ? Math.round((revenueCents * 30) / runtime.windowDays) : 0;
  const arrCents = mrrCents * 12;
  const grossMarginCents = revenueCents - operatingExpenseCents;

  const activeSubscriptions = Array.from(tierMap.values()).reduce(
    (sum, tier) => sum + tier.active_subscriptions,
    0,
  );
  const revenuePerActive = activeSubscriptions > 0 ? revenueCents / activeSubscriptions : 0;
  for (const tier of tierMap.values()) {
    tier.revenue_cents = Math.round(tier.active_subscriptions * revenuePerActive);
  }

  const marketingSpendBySource = new Map<string, number>();
  for (const line of financeSnapshot.line_items) {
    if (line.account_type !== "expense" || line.side !== "debit" || line.signed_amount_cents <= 0) continue;
    if (line.account_category !== "marketing") continue;
    const source = inferServiceKey([line.counterparty_name, line.description, line.source_ref, line.source_system]);
    marketingSpendBySource.set(source, (marketingSpendBySource.get(source) ?? 0) + line.signed_amount_cents);
  }

  const marketingPerformance: FinanceMarketingPerformance[] = [];
  for (const entry of marketingRawMap.values()) {
    const sourceTotal = sourceTotals.get(entry.source) ?? 0;
    const sourceSpend = marketingSpendBySource.get(entry.source) ?? 0;
    const proportionalSpend =
      sourceTotal > 0 ? Math.round((sourceSpend * entry.conversions) / sourceTotal) : 0;
    const attributedRevenue = Math.round(entry.active * revenuePerActive);
    marketingPerformance.push({
      source: entry.source,
      region: entry.region,
      conversions: entry.conversions,
      active_subscriptions: entry.active,
      churned_subscriptions: entry.churned,
      spend_cents: proportionalSpend,
      attributed_revenue_cents: attributedRevenue,
      roi_ratio:
        proportionalSpend > 0
          ? Number(((attributedRevenue - proportionalSpend) / proportionalSpend).toFixed(4))
          : null,
    });
  }

  const usageByService = new Map<
    string,
    {
      usageQuantity: number;
      usageUnit: string;
      estimatedCostCents: number;
    }
  >();
  for (const row of usageResult.data ?? []) {
    const serviceId = String(row.service_id ?? "");
    if (!serviceId) continue;
    const bucket = usageByService.get(serviceId) ?? {
      usageQuantity: 0,
      usageUnit: String(row.usage_unit ?? "event"),
      estimatedCostCents: 0,
    };
    bucket.usageQuantity += toSafeNumber(row.usage_quantity);
    bucket.estimatedCostCents += toSafeInteger(row.estimated_cost_cents);
    usageByService.set(serviceId, bucket);
  }

  const billedByService = new Map<string, number>();
  for (const row of billingResult.data ?? []) {
    const serviceId = String(row.service_id ?? "");
    if (!serviceId) continue;
    billedByService.set(serviceId, (billedByService.get(serviceId) ?? 0) + toSafeInteger(row.amount_cents));
  }

  const registry = await loadRegistry(admin);
  const servicePerformance: FinanceServicePerformance[] = [];
  for (const [key, row] of registry.entries()) {
    const usage = usageByService.get(row.id);
    const billedCost = billedByService.get(row.id) ?? 0;
    servicePerformance.push({
      service_key: key,
      service_name: row.service_name,
      category: row.category,
      usage_quantity: Number((usage?.usageQuantity ?? 0).toFixed(3)),
      usage_unit: usage?.usageUnit ?? "event",
      estimated_cost_cents: usage?.estimatedCostCents ?? 0,
      billed_cost_cents: billedCost,
      variance_cents: (usage?.estimatedCostCents ?? 0) - billedCost,
      last_seen_at: row.last_seen_at ?? null,
    });
  }
  servicePerformance.sort((left, right) => right.billed_cost_cents - left.billed_cost_cents);

  const aiCostCents =
    servicePerformance
      .filter((entry) => entry.category === "ai")
      .reduce((sum, entry) => sum + Math.max(entry.estimated_cost_cents, entry.billed_cost_cents), 0) || 0;

  const coverage = {
    acquisition_source_coverage:
      sourceCoverageCounter.total > 0
        ? Number((sourceCoverageCounter.known / sourceCoverageCounter.total).toFixed(4))
        : 0,
    region_coverage:
      regionCoverageCounter.total > 0
        ? Number((regionCoverageCounter.known / regionCoverageCounter.total).toFixed(4))
        : 0,
    service_attribution_coverage: serviceAttributionCoverage,
  };

  const latestRunData = (latestRunResult.data ?? null) as
    | (ReconciliationRunRow & { unmatched_count?: number | null })
    | null;
  const pipelineHealth: FinanceAnalyticsOverview["pipeline_health"] = {
    last_reconciliation_run_id: latestRunData?.id ?? null,
    last_reconciliation_status: latestRunData?.status ?? null,
    last_reconciliation_completed_at: latestRunData?.completed_at ?? null,
    stale_unreconciled_records: toSafeInteger(latestRunData?.unmatched_count ?? 0),
  };

  const tierPerformance = Array.from(tierMap.values()).sort(
    (left, right) => right.active_subscriptions - left.active_subscriptions,
  );
  const pricing = pricingFunnel;
  const insights = buildOptimizationInsights({
    marketingPerformance,
    servicePerformance,
    coverage,
    pricingFunnel: pricing,
  });

  if (coverage.service_attribution_coverage < 0.6) {
    runtime.warnings.push(
      "Service attribution on expense lines is below 60%; map vendor/service identifiers in GL metadata for better precision.",
    );
  }
  if (marketingPerformance.length === 0) {
    runtime.warnings.push(
      "No marketing attribution rows were derived from subscription metadata; source/region defaults may be 'unknown'.",
    );
  }

  const overview: FinanceAnalyticsOverview = {
    generated_at: nowIso,
    as_of_date: asOfDate,
    window_days: runtime.windowDays,
    kpis: {
      dau: dauUsers.size,
      mau: mauUsers.size,
      paying_users: payingUsers.size,
      active_subscriptions: activeSubscriptions,
      mrr_cents: mrrCents,
      arr_cents: arrCents,
      revenue_cents: revenueCents,
      operating_expense_cents: operatingExpenseCents,
      marketing_spend_cents: marketingSpendCents,
      ai_cost_cents: aiCostCents,
      infrastructure_cost_cents: infrastructureCostCents,
      gross_margin_cents: grossMarginCents,
    },
    tier_performance: tierPerformance,
    marketing_performance: marketingPerformance.sort((left, right) => right.conversions - left.conversions),
    service_performance: servicePerformance,
    pricing_funnel: pricing,
    coverage,
    pipeline_health: pipelineHealth,
    optimization_insights: insights,
    warnings: Array.from(new Set(runtime.warnings)),
  };

  if (runtime.persistSnapshot) {
    const { error } = await admin.from("finance_analytics_snapshots").upsert(
      {
        as_of_date: overview.as_of_date,
        window_days: overview.window_days,
        dau: overview.kpis.dau,
        mau: overview.kpis.mau,
        paying_users: overview.kpis.paying_users,
        active_subscriptions: overview.kpis.active_subscriptions,
        mrr_cents: overview.kpis.mrr_cents,
        arr_cents: overview.kpis.arr_cents,
        revenue_cents: overview.kpis.revenue_cents,
        operating_expense_cents: overview.kpis.operating_expense_cents,
        marketing_spend_cents: overview.kpis.marketing_spend_cents,
        ai_cost_cents: overview.kpis.ai_cost_cents,
        infrastructure_cost_cents: overview.kpis.infrastructure_cost_cents,
        gross_margin_cents: overview.kpis.gross_margin_cents,
        tier_performance: overview.tier_performance,
        marketing_performance: overview.marketing_performance,
        service_performance: overview.service_performance,
        pricing_funnel: overview.pricing_funnel,
        coverage: overview.coverage,
        pipeline_health: overview.pipeline_health,
        optimization_insights: overview.optimization_insights,
        warnings: overview.warnings,
        metadata: {
          source: "finance_service_intelligence_pipeline",
          generatedAt: overview.generated_at,
        },
        generated_by: runtime.triggeredBy,
      },
      {
        onConflict: "as_of_date,window_days",
      },
    );
    if (error) throw new Error(error.message);
  }

  return overview;
}

export async function runFinanceServiceIntelligencePipeline(
  admin: SupabaseClient,
  options: PipelineOptions = {},
) {
  const runtime = toRuntime(options);
  const sinceDate = daysAgoIsoDay(runtime.now, runtime.windowDays);

  await ensureSeedServices(admin, runtime);
  const dataset = await loadFinanceDataset(admin, {
    sinceDate,
    limit: runtime.maxRowsPerSource * 3,
  });
  const financeSnapshot = buildFinanceSnapshot(dataset);
  await discoverServices(admin, runtime, financeSnapshot);

  const registryByKey = await loadRegistry(admin);
  await collectUsageAndPersist(admin, runtime, registryByKey);
  const billingCoverage = await ingestBillingRecordsFromLedger(
    admin,
    runtime,
    registryByKey,
    financeSnapshot,
  );
  await runBillingReconciliation(admin, runtime, registryByKey);

  return buildOverviewAndMaybePersist(
    admin,
    runtime,
    financeSnapshot,
    billingCoverage.serviceAttributionCoverage,
  );
}

export async function loadLatestFinanceAnalyticsSnapshot(
  admin: SupabaseClient,
  windowDays = 30,
): Promise<FinanceAnalyticsOverview | null> {
  const safeWindowDays = clampInteger(windowDays, 7, 365);
  const { data, error } = await admin
    .from("finance_analytics_snapshots")
    .select(
      "as_of_date, window_days, dau, mau, paying_users, active_subscriptions, mrr_cents, arr_cents, revenue_cents, operating_expense_cents, marketing_spend_cents, ai_cost_cents, infrastructure_cost_cents, gross_margin_cents, tier_performance, marketing_performance, service_performance, pricing_funnel, coverage, pipeline_health, optimization_insights, warnings, created_at",
    )
    .eq("window_days", safeWindowDays)
    .order("as_of_date", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    if (isMissingTableError(error.message)) {
      return null;
    }
    throw new Error(error.message);
  }
  if (!data) return null;

  return {
    generated_at: String(data.created_at ?? new Date().toISOString()),
    as_of_date: String(data.as_of_date),
    window_days: toSafeInteger(data.window_days, safeWindowDays),
    kpis: {
      dau: toSafeInteger(data.dau),
      mau: toSafeInteger(data.mau),
      paying_users: toSafeInteger(data.paying_users),
      active_subscriptions: toSafeInteger(data.active_subscriptions),
      mrr_cents: toSafeInteger(data.mrr_cents),
      arr_cents: toSafeInteger(data.arr_cents),
      revenue_cents: toSafeInteger(data.revenue_cents),
      operating_expense_cents: toSafeInteger(data.operating_expense_cents),
      marketing_spend_cents: toSafeInteger(data.marketing_spend_cents),
      ai_cost_cents: toSafeInteger(data.ai_cost_cents),
      infrastructure_cost_cents: toSafeInteger(data.infrastructure_cost_cents),
      gross_margin_cents: toSafeInteger(data.gross_margin_cents),
    },
    tier_performance: Array.isArray(data.tier_performance)
      ? (data.tier_performance as FinanceTierPerformance[])
      : [],
    marketing_performance: Array.isArray(data.marketing_performance)
      ? (data.marketing_performance as FinanceMarketingPerformance[])
      : [],
    service_performance: Array.isArray(data.service_performance)
      ? (data.service_performance as FinanceServicePerformance[])
      : [],
    pricing_funnel: metadataRecord(data.pricing_funnel) as FinancePricingFunnel,
    coverage: metadataRecord(data.coverage) as FinanceAnalyticsOverview["coverage"],
    pipeline_health: metadataRecord(data.pipeline_health) as FinanceAnalyticsOverview["pipeline_health"],
    optimization_insights: Array.isArray(data.optimization_insights)
      ? (data.optimization_insights as string[])
      : [],
    warnings: Array.isArray(data.warnings) ? (data.warnings as string[]) : [],
  };
}

export function buildFinanceAnalyticsCsvRows(snapshot: FinanceAnalyticsOverview) {
  const rows: Array<Record<string, string | number | null>> = [];
  rows.push({
    section: "kpi",
    key: "dau",
    source: null,
    region: null,
    value_numeric: snapshot.kpis.dau,
    value_text: null,
  });
  rows.push({
    section: "kpi",
    key: "mau",
    source: null,
    region: null,
    value_numeric: snapshot.kpis.mau,
    value_text: null,
  });
  rows.push({
    section: "kpi",
    key: "active_subscriptions",
    source: null,
    region: null,
    value_numeric: snapshot.kpis.active_subscriptions,
    value_text: null,
  });
  rows.push({
    section: "kpi",
    key: "mrr_cents",
    source: null,
    region: null,
    value_numeric: snapshot.kpis.mrr_cents,
    value_text: null,
  });
  rows.push({
    section: "kpi",
    key: "arr_cents",
    source: null,
    region: null,
    value_numeric: snapshot.kpis.arr_cents,
    value_text: null,
  });
  rows.push({
    section: "kpi",
    key: "gross_margin_cents",
    source: null,
    region: null,
    value_numeric: snapshot.kpis.gross_margin_cents,
    value_text: null,
  });

  for (const entry of snapshot.tier_performance) {
    rows.push({
      section: "tier",
      key: entry.tier_key,
      source: entry.provider,
      region: null,
      value_numeric: entry.active_subscriptions,
      value_text: `revenue_cents=${entry.revenue_cents};churn=${entry.churn_count}`,
    });
  }
  for (const entry of snapshot.marketing_performance) {
    rows.push({
      section: "marketing",
      key: `${entry.source}:${entry.region}`,
      source: entry.source,
      region: entry.region,
      value_numeric: entry.conversions,
      value_text: `spend_cents=${entry.spend_cents};attributed_revenue_cents=${entry.attributed_revenue_cents};roi=${entry.roi_ratio ?? "n/a"}`,
    });
  }
  for (const entry of snapshot.service_performance) {
    rows.push({
      section: "service",
      key: entry.service_key,
      source: entry.category,
      region: null,
      value_numeric: entry.billed_cost_cents,
      value_text: `usage=${entry.usage_quantity} ${entry.usage_unit};estimated_cost_cents=${entry.estimated_cost_cents};variance_cents=${entry.variance_cents}`,
    });
  }
  for (const insight of snapshot.optimization_insights) {
    rows.push({
      section: "insight",
      key: "insight",
      source: null,
      region: null,
      value_numeric: null,
      value_text: insight,
    });
  }
  for (const warning of snapshot.warnings) {
    rows.push({
      section: "warning",
      key: "warning",
      source: null,
      region: null,
      value_numeric: null,
      value_text: warning,
    });
  }
  return rows;
}
