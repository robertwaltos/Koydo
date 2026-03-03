/**
 * POST /api/compliance/parent-consent/revoke
 *
 * COPPA requirement: Parents must be able to revoke consent at any time.
 * When consent is revoked:
 * 1. The parent_consents row is marked "revoked"
 * 2. The child's parental_consent_status is set to "denied"
 * 3. The child is effectively blocked from using the app (middleware enforces)
 * 4. A DSAR erasure request is automatically created for the child's data
 *
 * Auth: Requires authenticated parent (is_parent=true) with an existing
 * verified consent for the target child.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/rate-limit";

const revokeSchema = z.object({
  childUserId: z.string().uuid(),
  reason: z.string().max(500).optional(),
});

export async function POST(request: NextRequest) {
  // Rate limit: 10 attempts per 15 minutes
  const rateCheck = enforceIpRateLimit(request, "api:compliance:parent-consent:revoke", {
    max: 10,
    windowMs: 15 * 60 * 1000,
  });
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { error: "Too many requests", retryAfterSeconds: rateCheck.retryAfterSeconds },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = revokeSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const supabaseServer = await createSupabaseServerClient();
    const {
      data: { user },
      error: userError,
    } = await supabaseServer.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createSupabaseAdminClient();

    // Verify the caller is the parent who gave consent
    const { data: parentProfile } = await admin
      .from("user_profiles")
      .select("is_parent")
      .eq("user_id", user.id)
      .single();

    if (!parentProfile?.is_parent) {
      return NextResponse.json(
        { error: "Only parents can revoke consent" },
        { status: 403 },
      );
    }

    // Find the active consent for this child from this parent
    const { data: consent } = await admin
      .from("parent_consents")
      .select("id, parent_email, status")
      .eq("child_user_id", parsed.data.childUserId)
      .eq("parent_email", user.email)
      .eq("status", "verified")
      .single();

    if (!consent) {
      return NextResponse.json(
        { error: "No active verified consent found for this child" },
        { status: 404 },
      );
    }

    // 1. Revoke the consent record
    const { error: revokeError } = await admin
      .from("parent_consents")
      .update({
        status: "revoked",
        revoked_at: new Date().toISOString(),
        revocation_reason: parsed.data.reason ?? "Parent-initiated revocation",
      })
      .eq("id", consent.id);

    if (revokeError) {
      console.error("Failed to revoke consent", toSafeErrorRecord(revokeError));
      return NextResponse.json(
        { error: "Failed to revoke consent" },
        { status: 500 },
      );
    }

    // 2. Update child's profile to denied
    await admin
      .from("user_profiles")
      .update({ parental_consent_status: "denied" })
      .eq("user_id", parsed.data.childUserId);

    // 3. Auto-create DSAR erasure request for child data (COPPA requires deletion)
    await admin.from("dsar_requests").insert({
      user_id: parsed.data.childUserId,
      request_type: "erasure",
      status: "pending",
      details: {
        source: "parent_consent_revocation",
        initiated_by: user.id,
        reason: parsed.data.reason ?? "Parent revoked consent under COPPA",
        auto_created: true,
      },
    });

    return NextResponse.json({
      success: true,
      message:
        "Consent revoked. The child's account has been restricted and a data deletion request has been created.",
    });
  } catch (err) {
    console.error("Consent revocation error", toSafeErrorRecord(err));
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
