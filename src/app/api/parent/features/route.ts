/**
 * Parent Feature Overrides API
 *
 * GET    /api/parent/features?childProfileId=...  — Get overrides for a child
 * POST   /api/parent/features                     — Set/update override
 * DELETE /api/parent/features                     — Remove override
 */

import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { clearParentOverrideCache } from "@/lib/platform/feature-gate";
import { FEATURE_CATALOG, type AppFeatureId } from "@/lib/platform/feature-registry";

async function requireParentAuth() {
  const supabase = await createSupabaseServerClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) {
    return { ok: false as const, response: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  }

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_parent")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile?.is_parent) {
    return { ok: false as const, response: NextResponse.json({ error: "Parent account required" }, { status: 403 }) };
  }

  return { ok: true as const, userId: user.id };
}

async function verifyChildBelongsToParent(parentUserId: string, childProfileId: string): Promise<boolean> {
  const admin = createSupabaseAdminClient();
  const { data } = await admin
    .from("student_profiles")
    .select("id")
    .eq("id", childProfileId)
    .eq("account_id", parentUserId)
    .maybeSingle();

  return !!data;
}

const overrideSchema = z.object({
  childProfileId: z.string().uuid(),
  featureId: z.string().min(1),
  enabled: z.boolean(),
});

const deleteSchema = z.object({
  childProfileId: z.string().uuid(),
  featureId: z.string().min(1),
});

/**
 * GET — List parent overrides for a child profile.
 */
export async function GET(request: Request) {
  const auth = await requireParentAuth();
  if (!auth.ok) return auth.response;

  const url = new URL(request.url);
  const childProfileId = url.searchParams.get("childProfileId");
  if (!childProfileId) {
    return NextResponse.json({ error: "childProfileId required" }, { status: 400 });
  }

  const isChild = await verifyChildBelongsToParent(auth.userId, childProfileId);
  if (!isChild) {
    return NextResponse.json({ error: "Child not found" }, { status: 404 });
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("parent_feature_overrides")
    .select("feature_id, enabled, updated_at")
    .eq("parent_user_id", auth.userId)
    .eq("child_profile_id", childProfileId)
    .order("feature_id");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Also return the list of features that parents CAN override
  const overridableFeatures = Object.values(FEATURE_CATALOG)
    .filter((f) => f.tier === "parent_opt_in")
    .map((f) => ({ id: f.id, description: f.description, tier: f.tier, category: f.category }));

  return NextResponse.json({
    overrides: data ?? [],
    overridableFeatures,
  });
}

/**
 * POST — Set or update a parent override for a child.
 */
export async function POST(request: Request) {
  const auth = await requireParentAuth();
  if (!auth.ok) return auth.response;

  const body = await request.json().catch(() => ({}));
  const parsed = overrideSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request", details: parsed.error.issues }, { status: 400 });
  }

  const { childProfileId, featureId, enabled } = parsed.data;

  // Verify feature exists
  if (!FEATURE_CATALOG[featureId as AppFeatureId]) {
    return NextResponse.json({ error: `Unknown feature: ${featureId}` }, { status: 400 });
  }

  // Verify child belongs to parent
  const isChild = await verifyChildBelongsToParent(auth.userId, childProfileId);
  if (!isChild) {
    return NextResponse.json({ error: "Child not found" }, { status: 404 });
  }

  const admin = createSupabaseAdminClient();
  const { error } = await admin
    .from("parent_feature_overrides")
    .upsert(
      {
        parent_user_id: auth.userId,
        child_profile_id: childProfileId,
        feature_id: featureId,
        enabled,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "parent_user_id,child_profile_id,feature_id" },
    );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  clearParentOverrideCache(childProfileId);
  return NextResponse.json({ success: true });
}

/**
 * DELETE — Remove a parent override (revert to default).
 */
export async function DELETE(request: Request) {
  const auth = await requireParentAuth();
  if (!auth.ok) return auth.response;

  const body = await request.json().catch(() => ({}));
  const parsed = deleteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { childProfileId, featureId } = parsed.data;

  const isChild = await verifyChildBelongsToParent(auth.userId, childProfileId);
  if (!isChild) {
    return NextResponse.json({ error: "Child not found" }, { status: 404 });
  }

  const admin = createSupabaseAdminClient();
  await admin
    .from("parent_feature_overrides")
    .delete()
    .eq("parent_user_id", auth.userId)
    .eq("child_profile_id", childProfileId)
    .eq("feature_id", featureId);

  clearParentOverrideCache(childProfileId);
  return NextResponse.json({ success: true });
}
