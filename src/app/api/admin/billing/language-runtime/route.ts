import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  clearLanguageRuntimeConfigCache,
  getLanguageRuntimeConfig,
  LANGUAGE_RUNTIME_CONFIG_APP_SETTINGS_KEY,
} from "@/lib/language-learning";

const runtimeConfigPayloadSchema = z.object({
  phase: z.enum(["1", "2", "3"]).optional(),
  pricingProfile: z.enum(["conservative", "growth"]).optional(),
  attemptCap: z.union([z.literal(250), z.literal(300), z.literal(350)]).optional(),
  freeSamplerAttempts: z.union([z.literal(5), z.literal(10)]).optional(),
  geoTierDefault: z
    .enum(["tier_1", "tier_2", "tier_3", "tier_4", "tier_5"])
    .optional(),
  activeExperimentVariantId: z.string().trim().min(1).nullable().optional(),
  confirmText: z.literal("SET_LANGUAGE_RUNTIME_CONFIG"),
});

function sanitizeRuntimeConfig(input: Record<string, unknown>) {
  const config: Record<string, unknown> = {};
  const keys: Array<keyof Omit<z.infer<typeof runtimeConfigPayloadSchema>, "confirmText">> = [
    "phase",
    "pricingProfile",
    "attemptCap",
    "freeSamplerAttempts",
    "geoTierDefault",
    "activeExperimentVariantId",
  ];

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      config[key] = input[key];
    }
  }

  return config;
}

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const runtimeConfig = await getLanguageRuntimeConfig({ forceRefresh: true });
  return NextResponse.json({
    key: LANGUAGE_RUNTIME_CONFIG_APP_SETTINGS_KEY,
    runtimeConfig,
  });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = runtimeConfigPayloadSchema.safeParse(
    await request.json().catch(() => null),
  );
  if (!payload.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: payload.error.flatten() },
      { status: 400 },
    );
  }

  const rate = await enforceAdminActionRateLimit({
    adminUserId: auth.userId,
    actionType: "billing_set_language_runtime_config",
    windowSeconds: 3600,
    maxActions: 20,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded for runtime pricing config changes." },
      { status: 429 },
    );
  }

  const config = sanitizeRuntimeConfig(payload.data as Record<string, unknown>);
  if (Object.keys(config).length === 0) {
    return NextResponse.json(
      { error: "Provide at least one runtime config field before saving." },
      { status: 400 },
    );
  }

  const adminDb = createSupabaseAdminClient();
  const nowIso = new Date().toISOString();
  const { error: upsertError } = await adminDb.from("app_settings").upsert(
    {
      key: LANGUAGE_RUNTIME_CONFIG_APP_SETTINGS_KEY,
      value: config,
      updated_by: auth.userId,
      updated_at: nowIso,
    },
    { onConflict: "key" },
  );

  if (upsertError) {
    return NextResponse.json({ error: upsertError.message }, { status: 500 });
  }

  clearLanguageRuntimeConfigCache();

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "billing_set_language_runtime_config",
    metadata: {
      fieldsUpdated: Object.keys(config),
    },
  });

  const runtimeConfig = await getLanguageRuntimeConfig({ forceRefresh: true });
  return NextResponse.json({ success: true, runtimeConfig });
}
