import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { serverEnv } from "@/lib/config/env";
import {
  createParentConsentVerificationToken,
  hashParentConsentToken,
} from "@/lib/compliance/parent-consent-token";
import { sendParentConsentVerificationEmail } from "@/lib/email/parent-consent-email";

const requestSchema = z.object({
  parentEmail: z.string().email(),
  consentMethod: z.enum(["email_verification", "micro_charge", "id_check"]),
  consentVersion: z.string().default("v1"),
  region: z.string().min(2).max(16).optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    if (!serverEnv.PARENT_CONSENT_TOKEN_SECRET) {
      return NextResponse.json(
        { error: "Missing PARENT_CONSENT_TOKEN_SECRET configuration." },
        { status: 500 },
      );
    }

    const supabaseServer = await createSupabaseServerClient();
    const { data: userData, error: userError } = await supabaseServer.auth.getUser();

    if (userError || !userData.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase
      .from("parent_consents")
      .insert({
        child_user_id: userData.user.id,
        parent_email: parsed.data.parentEmail,
        consent_method: parsed.data.consentMethod,
        consent_version: parsed.data.consentVersion,
        region: parsed.data.region ?? null,
        status: "pending_verification",
      })
      .select("id, status, requested_at")
      .single();

    if (error) {
      return NextResponse.json({ error: "Failed to create parent consent request", details: error.message }, { status: 500 });
    }

    const verificationToken = createParentConsentVerificationToken(
      {
        consentRequestId: data.id,
        childUserId: userData.user.id,
        parentEmail: parsed.data.parentEmail,
      },
      serverEnv.PARENT_CONSENT_TOKEN_SECRET,
    );

    const verificationUrl = `${serverEnv.NEXT_PUBLIC_APP_URL}/auth/parent-consent/verify?token=${encodeURIComponent(
      verificationToken,
    )}`;

    const tokenHash = hashParentConsentToken(verificationToken);

    const { error: evidenceError } = await supabase
      .from("parent_consents")
      .update({
        evidence: {
          verification_token_hash: tokenHash,
          verification_sent_at: new Date().toISOString(),
        },
      })
      .eq("id", data.id)
      .eq("child_user_id", userData.user.id);

    if (evidenceError) {
      return NextResponse.json(
        { error: "Failed to persist consent verification metadata", details: evidenceError.message },
        { status: 500 },
      );
    }

    const emailResult = await sendParentConsentVerificationEmail({
      toEmail: parsed.data.parentEmail,
      verificationUrl,
      childUserId: userData.user.id,
    });

    if (!emailResult.delivered && emailResult.mode === "provider-error") {
      return NextResponse.json(
        { error: "Failed to send parent verification email", details: emailResult.reason },
        { status: 502 },
      );
    }

    await supabase
      .from("user_profiles")
      .upsert(
        {
          user_id: userData.user.id,
          parent_email: parsed.data.parentEmail,
          parental_consent_required: true,
          parental_consent_status: "pending",
        },
        { onConflict: "user_id" },
      );

    return NextResponse.json({
      message: "Consent request submitted.",
      consentRequest: data,
      verificationUrl: emailResult.mode === "simulation" ? verificationUrl : null,
      deliveryMode: emailResult.mode,
      nextStep: "Send verification workflow to parent and verify before unlocking features.",
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
    route: "/api/compliance/parent-consent",
    method: "POST",
    bodyExample: {
      parentEmail: "parent@example.com",
      consentMethod: "email_verification",
      consentVersion: "v1",
      region: "US",
    },
  });
}
