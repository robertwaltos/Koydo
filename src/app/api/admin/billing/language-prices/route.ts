import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";
import type { LanguagePlanId } from "@/lib/language-learning/pricing";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const LANGUAGE_PRICE_PLAN_IDS: LanguagePlanId[] = [
  "language_plus_conservative",
  "language_family_conservative",
  "language_plus_growth",
  "language_family_growth",
  "language_school_annual",
];

const requestSchema = z.object({
  language_plus_conservative: z.string().min(1).optional(),
  language_family_conservative: z.string().min(1).optional(),
  language_plus_growth: z.string().min(1).optional(),
  language_family_growth: z.string().min(1).optional(),
  language_school_annual: z.string().min(1).optional(),
  confirmText: z.literal("SET_LANGUAGE_PRICES"),
});

function sanitizeMap(input: Record<string, unknown>): Partial<Record<LanguagePlanId, string>> {
  const output: Partial<Record<LanguagePlanId, string>> = {};
  for (const planId of LANGUAGE_PRICE_PLAN_IDS) {
    const value = input[planId];
    if (typeof value === "string" && value.trim().length > 0) {
      output[planId] = value.trim();
    }
  }
  return output;
}

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const adminDb = createSupabaseAdminClient();
  const { data, error } = await adminDb
    .from("app_settings")
    .select("value")
    .eq("key", "stripe_language_price_ids")
    .maybeSingle();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const values = sanitizeMap(
    data?.value && typeof data.value === "object" ? (data.value as Record<string, unknown>) : {},
  );

  return NextResponse.json({
    key: "stripe_language_price_ids",
    values,
    plans: LANGUAGE_PRICE_PLAN_IDS,
  });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: payload.error.flatten() },
      { status: 400 },
    );
  }

  const rate = await enforceAdminActionRateLimit({
    adminUserId: auth.userId,
    actionType: "billing_set_language_prices",
    windowSeconds: 3600,
    maxActions: 20,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded for language pricing changes." },
      { status: 429 },
    );
  }

  const values = sanitizeMap(payload.data as Record<string, unknown>);
  if (Object.keys(values).length === 0) {
    return NextResponse.json(
      { error: "Provide at least one plan price ID before saving." },
      { status: 400 },
    );
  }

  const adminDb = createSupabaseAdminClient();
  const nowIso = new Date().toISOString();
  const { error: upsertError } = await adminDb.from("app_settings").upsert(
    {
      key: "stripe_language_price_ids",
      value: values,
      updated_by: auth.userId,
      updated_at: nowIso,
    },
    { onConflict: "key" },
  );

  if (upsertError) {
    console.error("Unexpected API error.", toSafeErrorRecord(upsertError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "billing_set_language_prices",
    metadata: {
      plansConfigured: Object.keys(values),
    },
  });

  return NextResponse.json({ success: true, values });
}

