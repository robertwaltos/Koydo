/**
 * Admin Feature Manager API
 *
 * GET  /api/admin/features        — List all features with DB overrides
 * POST /api/admin/features        — Upsert feature toggle/config
 * DELETE /api/admin/features      — Flush feature cache
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminActionStrict } from "@/lib/admin/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { clearFeatureRegistryCache } from "@/lib/platform/feature-gate";
import { FEATURE_CATALOG, getFeaturesByCategory, type AppFeatureId } from "@/lib/platform/feature-registry";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const upsertSchema = z.object({
  id: z.string().min(1),
  enabled: z.boolean().optional(),
  tier: z.enum(["free", "premium", "parent_opt_in"]).optional(),
  min_age_tier: z.enum(["little", "explorer", "teen", "senior", "adult"]).optional(),
  max_age_tier: z.enum(["little", "explorer", "teen", "senior", "adult"]).optional(),
  app_variants: z.array(z.string()).optional(),
  description: z.string().optional(),
});

/**
 * GET — List all features grouped by category, merged with DB overrides.
 */
export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const admin = createSupabaseAdminClient();
    const { data: dbRows } = await admin
      .from("feature_registry")
      .select("*")
      .order("id");

    const dbMap = new Map<string, Record<string, unknown>>();
    for (const row of dbRows ?? []) {
      dbMap.set(row.id, row);
    }

    // Merge static catalog with DB overrides
    const features = Object.values(FEATURE_CATALOG).map((def) => {
      const dbRow = dbMap.get(def.id);
      return {
        id: def.id,
        description: dbRow?.description ?? def.description,
        enabled: dbRow?.enabled ?? def.enabled,
        tier: dbRow?.tier ?? def.tier,
        min_age_tier: dbRow?.min_age_tier ?? def.minAgeTier,
        max_age_tier: dbRow?.max_age_tier ?? def.maxAgeTier,
        app_variants: dbRow?.app_variants ?? def.appVariants,
        category: def.category,
        source: dbRow ? "db" : "default",
        updated_by: dbRow?.updated_by ?? null,
        updated_at: dbRow?.updated_at ?? null,
      };
    });

    return NextResponse.json({ features, categories: getFeaturesByCategory() });
  } catch (error) {
    console.error("[admin/features] GET error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * POST — Upsert a feature toggle in the DB.
 */
export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  try {
    const body = await request.json().catch(() => ({}));
    const parsed = upsertSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.issues },
        { status: 400 },
      );
    }

    const { id, ...fields } = parsed.data;

    // Verify it's a known feature
    if (!FEATURE_CATALOG[id as AppFeatureId]) {
      return NextResponse.json({ error: `Unknown feature: ${id}` }, { status: 400 });
    }

    const admin = createSupabaseAdminClient();
    const staticDef = FEATURE_CATALOG[id as AppFeatureId];

    const row = {
      id,
      enabled: fields.enabled ?? staticDef.enabled,
      tier: fields.tier ?? staticDef.tier,
      min_age_tier: fields.min_age_tier ?? staticDef.minAgeTier,
      max_age_tier: fields.max_age_tier ?? staticDef.maxAgeTier,
      app_variants: fields.app_variants ?? staticDef.appVariants,
      description: fields.description ?? staticDef.description,
      updated_by: auth.userId,
      updated_at: new Date().toISOString(),
    };

    const { error } = await admin
      .from("feature_registry")
      .upsert(row, { onConflict: "id" });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Invalidate cache
    clearFeatureRegistryCache();

    await logAdminActionStrict({
      adminUserId: auth.userId,
      actionType: "feature_registry.upsert",
      metadata: { featureId: id, ...fields },
    });

    return NextResponse.json({ success: true, feature: row });
  } catch (error) {
    console.error("[admin/features] POST error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * DELETE — Flush feature registry cache.
 */
export async function DELETE() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  clearFeatureRegistryCache();
  return NextResponse.json({ success: true, message: "Feature registry cache flushed." });
}
