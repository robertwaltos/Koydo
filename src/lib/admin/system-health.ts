import type { SupabaseClient } from "@supabase/supabase-js";
import { runEnvReadinessChecks, type EnvReadinessReport } from "@/lib/admin/env-readiness";
import { runDbReadinessChecks, type DbReadinessRow } from "@/lib/admin/db-readiness";
import {
  runStripeWebhookHealthCheck,
  type StripeWebhookHealthReport,
} from "@/lib/admin/stripe-webhook-health";

type DbReadinessReport = {
  generatedAt: string;
  tables: DbReadinessRow[];
  totals: { present: number; missing: number; error: number; total: number };
  healthy: boolean;
};

export type SystemHealthReport = {
  generatedAt: string;
  healthy: boolean;
  degraded: boolean;
  summary: {
    blockingIssues: number;
    warningIssues: number;
  };
  envReadiness: EnvReadinessReport;
  dbReadiness: DbReadinessReport;
  webhookHealth: StripeWebhookHealthReport;
};

export async function runSystemHealthChecks(admin: SupabaseClient): Promise<SystemHealthReport> {
  const [dbReadiness, webhookHealth] = await Promise.all([
    runDbReadinessChecks(admin),
    runStripeWebhookHealthCheck(admin, { windowHours: 24, staleMinutes: 10 }),
  ]);
  const envReadiness = runEnvReadinessChecks();

  const blockingIssues =
    envReadiness.totals.fail
    + dbReadiness.totals.missing
    + dbReadiness.totals.error
    + (webhookHealth.healthy ? 0 : 1);
  const warningIssues = envReadiness.totals.warn;

  return {
    generatedAt: new Date().toISOString(),
    healthy: blockingIssues === 0,
    degraded: blockingIssues > 0 || warningIssues > 0,
    summary: {
      blockingIssues,
      warningIssues,
    },
    envReadiness,
    dbReadiness,
    webhookHealth,
  };
}
