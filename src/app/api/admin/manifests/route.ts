/**
 * Admin Micro-App Manifests API
 *
 * GET    /api/admin/manifests  — List all app manifests
 * POST   /api/admin/manifests  — Upsert a manifest
 * DELETE /api/admin/manifests  — Deactivate a manifest (set is_active=false)
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminActionStrict } from "@/lib/admin/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const PRICING_TIERS = ["free", "freemium", "premium_9.99", "premium_19.99", "custom"] as const;
const APP_ID_REGEX = /^[a-z0-9_]+$/;
const CSS_VARIABLE_REGEX = /^--[a-z0-9-]+$/;
const LOCALE_REGEX = /^[a-z]{2}(?:-[A-Z]{2})?$/;
const REGION_REGEX = /^[a-z0-9_-]{2,32}$/i;
const CURRENCY_REGEX = /^[A-Z]{3}$/;
const SUPPORTED_LOCALE_SCHEMA = z.union([z.literal("*"), z.string().regex(LOCALE_REGEX)]);

const upsertSchema = z.object({
  app_id: z.string().min(1).max(64).regex(APP_ID_REGEX, "app_id must be lowercase snake_case"),
  display_name: z.string().min(1).max(128),
  theme_config: z.record(z.string().regex(CSS_VARIABLE_REGEX), z.string().max(200)).default({}),
  enabled_subjects: z.array(z.string().min(1).max(80)).min(1).max(50).default(["*"]),
  min_age: z.number().int().min(0).max(99).default(0),
  max_age: z.number().int().min(0).max(99).default(99),
  is_active: z.boolean().default(true),
  // i18n + pricing fields
  supported_locales: z.array(SUPPORTED_LOCALE_SCHEMA).min(1).max(20).default(["*"]),
  default_locale: z.string().regex(LOCALE_REGEX).default("en"),
  region: z.string().regex(REGION_REGEX).default("global"),
  default_currency: z.string().regex(CURRENCY_REGEX).default("USD"),
  pricing_tier: z.enum(PRICING_TIERS).default("freemium"),
  store_listing: z.record(
    z.string().regex(LOCALE_REGEX),
    z.object({
      title: z.string().min(1).max(120),
      subtitle: z.string().min(1).max(160),
      keywords: z.array(z.string().min(1).max(40)).max(30),
      description: z.string().min(1).max(5000),
    }),
  ).default({}),
}).refine((value) => value.min_age <= value.max_age, {
  message: "min_age must be less than or equal to max_age",
  path: ["min_age"],
});

const deleteSchema = z.object({
  app_id: z.string().min(1),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const admin = createSupabaseAdminClient();
    const { data, error } = await admin
      .from("app_manifests")
      .select("*")
      .order("app_id");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ manifests: data ?? [] });
  } catch (err) {
    return NextResponse.json({ error: "Internal error", details: toSafeErrorRecord(err) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const body = await request.json();
    const parsed = upsertSchema.parse(body);
    const admin = createSupabaseAdminClient();

    const { error } = await admin
      .from("app_manifests")
      .upsert({
        app_id: parsed.app_id,
        display_name: parsed.display_name,
        theme_config: parsed.theme_config,
        enabled_subjects: parsed.enabled_subjects,
        min_age: parsed.min_age,
        max_age: parsed.max_age,
        is_active: parsed.is_active,
        supported_locales: parsed.supported_locales,
        default_locale: parsed.default_locale,
        region: parsed.region,
        default_currency: parsed.default_currency,
        pricing_tier: parsed.pricing_tier,
        store_listing: parsed.store_listing,
      }, { onConflict: "app_id" });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await logAdminActionStrict({
      adminUserId: auth.userId,
      actionType: "manifest_upsert",
      metadata: { target: parsed.app_id, display_name: parsed.display_name },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation error", issues: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal error", details: toSafeErrorRecord(err) }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const body = await request.json();
    const { app_id } = deleteSchema.parse(body);

    if (app_id === "koydo_main") {
      return NextResponse.json({ error: "Cannot deactivate the main app" }, { status: 400 });
    }

    const admin = createSupabaseAdminClient();
    const { error } = await admin
      .from("app_manifests")
      .update({ is_active: false })
      .eq("app_id", app_id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await logAdminActionStrict({
      adminUserId: auth.userId,
      actionType: "manifest_deactivate",
      metadata: { target: app_id },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation error", issues: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal error", details: toSafeErrorRecord(err) }, { status: 500 });
  }
}
