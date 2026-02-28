import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceAdminActionRateLimit } from "@/lib/admin/rate-limit";

const geoTierSchema = z.enum(["tier_1", "tier_2", "tier_3", "tier_4", "tier_5"]);

const ladderRowSchema = z.object({
  geoTier: geoTierSchema,
  beginnerPriceCents: z.number().int().positive().max(500_000),
  intermediatePriceCents: z.number().int().positive().max(500_000),
  advancedPriceCents: z.number().int().positive().max(500_000),
  currency: z
    .string()
    .trim()
    .length(3)
    .transform((value) => value.toUpperCase()),
});

const requestSchema = z.object({
  rows: z.array(ladderRowSchema).min(1).max(5),
  confirmText: z.literal("SET_LANGUAGE_UNLOCK_PRICING"),
});

type LadderRowRecord = {
  geo_tier: string;
  beginner_price_cents: number;
  intermediate_price_cents: number;
  advanced_price_cents: number;
  currency: string;
  updated_at?: string;
};

function isMissingTableError(message: string) {
  const lower = message.toLowerCase();
  return (
    lower.includes("could not find the table") ||
    (lower.includes("relation") && lower.includes("does not exist"))
  );
}

function serializeRows(rows: LadderRowRecord[]) {
  return rows.map((row) => ({
    geoTier: row.geo_tier,
    beginnerPriceCents: row.beginner_price_cents,
    intermediatePriceCents: row.intermediate_price_cents,
    advancedPriceCents: row.advanced_price_cents,
    currency: row.currency,
    updatedAt: row.updated_at ?? null,
  }));
}

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const adminDb = createSupabaseAdminClient();
  const { data, error } = await adminDb
    .from("pricing_ladders")
    .select(
      "geo_tier, beginner_price_cents, intermediate_price_cents, advanced_price_cents, currency, updated_at",
    )
    .order("geo_tier", { ascending: true });

  if (error) {
    if (isMissingTableError(error.message)) {
      return NextResponse.json(
        { error: "Pricing ladders table is not available in this environment." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    rows: serializeRows((data ?? []) as LadderRowRecord[]),
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

  const uniqueGeoTiers = new Set(payload.data.rows.map((row) => row.geoTier));
  if (uniqueGeoTiers.size !== payload.data.rows.length) {
    return NextResponse.json(
      { error: "Each geo tier can only appear once in a single request." },
      { status: 400 },
    );
  }

  const rate = await enforceAdminActionRateLimit({
    adminUserId: auth.userId,
    actionType: "billing_set_language_unlock_pricing",
    windowSeconds: 3600,
    maxActions: 30,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Rate limit exceeded for language unlock pricing changes." },
      { status: 429 },
    );
  }

  const nowIso = new Date().toISOString();
  const upsertRows = payload.data.rows.map((row) => ({
    geo_tier: row.geoTier,
    beginner_price_cents: row.beginnerPriceCents,
    intermediate_price_cents: row.intermediatePriceCents,
    advanced_price_cents: row.advancedPriceCents,
    currency: row.currency,
    updated_at: nowIso,
  }));

  const adminDb = createSupabaseAdminClient();
  const { error: upsertError } = await adminDb
    .from("pricing_ladders")
    .upsert(upsertRows, { onConflict: "geo_tier" });

  if (upsertError) {
    if (isMissingTableError(upsertError.message)) {
      return NextResponse.json(
        { error: "Pricing ladders table is not available in this environment." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: upsertError.message }, { status: 500 });
  }

  const { data: refreshedRows, error: readError } = await adminDb
    .from("pricing_ladders")
    .select(
      "geo_tier, beginner_price_cents, intermediate_price_cents, advanced_price_cents, currency, updated_at",
    )
    .order("geo_tier", { ascending: true });
  if (readError) {
    return NextResponse.json({ error: readError.message }, { status: 500 });
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "billing_set_language_unlock_pricing",
    metadata: {
      rowCount: upsertRows.length,
      geoTiers: upsertRows.map((row) => row.geo_tier),
    },
  });

  return NextResponse.json({
    success: true,
    rows: serializeRows((refreshedRows ?? []) as LadderRowRecord[]),
  });
}
