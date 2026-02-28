import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { markStaleStripeWebhookEventsFailed } from "@/lib/admin/stripe-webhook-health";

const requestSchema = z.object({
  staleMinutes: z.coerce.number().int().min(1).max(24 * 60).optional(),
  limit: z.coerce.number().int().min(1).max(1000).optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!payload.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: payload.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const result = await markStaleStripeWebhookEventsFailed(admin, {
    staleMinutes: payload.data.staleMinutes,
    limit: payload.data.limit,
  });

  return NextResponse.json(result);
}
