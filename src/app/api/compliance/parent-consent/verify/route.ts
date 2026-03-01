import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { sanitizeNextPath } from "@/lib/routing/next-path";
import {
  hashParentConsentToken,
  verifyParentConsentVerificationToken,
} from "@/lib/compliance/parent-consent-token";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { timingSafeEqualHexStrings } from "@/lib/security/safe-compare";

const requestSchema = z.object({
  token: z.string().min(8),
});

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:compliance:parent-consent-verify", {
    max: 30,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many verification attempts. Please retry shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  const body = await request.json().catch(() => ({}));
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    if (!serverEnv.PARENT_CONSENT_TOKEN_SECRET) {
      return NextResponse.json(
        { error: "Missing PARENT_CONSENT_TOKEN_SECRET configuration." },
        { status: 500 },
      );
    }

    const tokenVerification = verifyParentConsentVerificationToken(
      parsed.data.token,
      serverEnv.PARENT_CONSENT_TOKEN_SECRET,
    );

    if (!tokenVerification.valid) {
      return NextResponse.json(
        { error: "Invalid or expired verification token." },
        { status: 400 },
      );
    }

    const supabase = createSupabaseAdminClient();

    const { data: consentRequest, error: consentFetchError } = await supabase
      .from("parent_consents")
      .select("id, status, parent_email, evidence")
      .eq("id", tokenVerification.payload.consentRequestId)
      .eq("child_user_id", tokenVerification.payload.childUserId)
      .maybeSingle();

    if (consentFetchError) {
      return NextResponse.json(
        { error: "Unable to load consent request." },
        { status: 500 },
      );
    }

    if (!consentRequest) {
      return NextResponse.json(
        { error: "No consent request found for this user." },
        { status: 404 },
      );
    }

    if (consentRequest.status === "verified") {
      return NextResponse.json(
        { error: "Verification link has already been used." },
        { status: 409 },
      );
    }

    if (consentRequest.status !== "pending_verification") {
      return NextResponse.json(
        { error: `Consent request is not verifiable in current state: ${consentRequest.status}` },
        { status: 409 },
      );
    }

    if (
      (consentRequest.parent_email ?? "").toLowerCase() !==
      tokenVerification.payload.parentEmail.toLowerCase()
    ) {
      return NextResponse.json(
        { error: "Verification token does not match request owner." },
        { status: 400 },
      );
    }

    const evidence = (consentRequest.evidence ?? {}) as Record<string, unknown>;
    const expectedTokenHash = typeof evidence.verification_token_hash === "string"
      ? evidence.verification_token_hash
      : null;

    if (!expectedTokenHash) {
      return NextResponse.json(
        { error: "Consent request is missing verification token metadata." },
        { status: 400 },
      );
    }

    const presentedTokenHash = hashParentConsentToken(parsed.data.token);
    if (!timingSafeEqualHexStrings(presentedTokenHash, expectedTokenHash)) {
      return NextResponse.json(
        { error: "Verification token mismatch." },
        { status: 400 },
      );
    }

    if (typeof evidence.verification_used_at === "string") {
      return NextResponse.json(
        { error: "Verification link has already been consumed." },
        { status: 409 },
      );
    }

    if (consentRequest.status !== "verified") {
      const { error: verifyError } = await supabase
        .from("parent_consents")
        .update({
          status: "verified",
          verified_at: new Date().toISOString(),
          evidence: {
            ...evidence,
            verification_used_at: new Date().toISOString(),
          },
        })
        .eq("id", consentRequest.id);

      if (verifyError) {
        return NextResponse.json(
          { error: "Unable to verify consent request." },
          { status: 500 },
        );
      }
    }

    const { error: profileError } = await supabase.from("user_profiles").upsert(
      {
        user_id: tokenVerification.payload.childUserId,
        parent_email: tokenVerification.payload.parentEmail,
        parental_consent_required: true,
        parental_consent_status: "verified",
      },
      { onConflict: "user_id" },
    );

    if (profileError) {
      return NextResponse.json(
        { error: "Unable to update user profile consent status." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Parental consent verified.",
      consentRequestId: consentRequest.id,
      nextRoute: sanitizeNextPath(tokenVerification.payload.nextPath) ?? "/dashboard",
    });
  } catch (error) {
    console.error("Parent consent verification failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      {
        error: "Server configuration error",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    route: "/api/compliance/parent-consent/verify",
    method: "POST",
    bodyExample: {
      token: "signed-token-from-parent-verification-link",
    },
  });
}
