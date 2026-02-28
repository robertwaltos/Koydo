import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { runStripeWebhookHealthCheck } from "@/lib/admin/stripe-webhook-health";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const report = await runStripeWebhookHealthCheck(admin, {
    windowHours: 24,
    staleMinutes: 10,
  });

  return NextResponse.json(report, {
    status: report.healthy ? 200 : 503,
  });
}
