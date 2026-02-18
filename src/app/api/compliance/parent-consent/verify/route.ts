import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { serverEnv } from "@/lib/config/env";
import { verifyParentConsentVerificationToken } from "@/lib/compliance/parent-consent-token";

const requestSchema = z.object({
  token: z.string().min(8),
});

export async function POST(request: NextRequest) {
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
        { error: `Invalid verification token: ${tokenVerification.reason}` },
        { status: 400 },
      );
    }

    const supabase = createSupabaseAdminClient();

    const { data: consentRequest, error: consentFetchError } = await supabase
      .from("parent_consents")
      .select("id, status")
      .eq("id", tokenVerification.payload.consentRequestId)
      .eq("child_user_id", tokenVerification.payload.childUserId)
      .maybeSingle();

    if (consentFetchError) {
      return NextResponse.json(
        { error: "Unable to load consent request", details: consentFetchError.message },
        { status: 500 },
      );
    }

    if (!consentRequest) {
      return NextResponse.json(
        { error: "No consent request found for this user." },
        { status: 404 },
      );
    }

    if (consentRequest.status !== "verified") {
      const { error: verifyError } = await supabase
        .from("parent_consents")
        .update({ status: "verified", verified_at: new Date().toISOString() })
        .eq("id", consentRequest.id);

      if (verifyError) {
        return NextResponse.json(
          { error: "Unable to verify consent request", details: verifyError.message },
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
        { error: "Unable to update user profile consent status", details: profileError.message },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Parental consent verified.",
      consentRequestId: consentRequest.id,
      nextRoute: "/dashboard",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Server configuration error",
        details: error instanceof Error ? error.message : "Unknown error",
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
