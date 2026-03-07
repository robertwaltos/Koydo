import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { normalizeJurisdictionCode } from "@/lib/legal/jurisdictions";
import { resolveTermsDocumentForState } from "@/lib/legal/terms-of-service";
import { sendSignupThankYouEmail } from "@/lib/email/signup-thank-you-email";

const requestSchema = z.object({
  billingState: z.string().trim().min(2).max(2),
});

function resolveRecipientName(email: string | null | undefined, metadata: unknown) {
  const source = (metadata ?? {}) as Record<string, unknown>;
  const candidates = [source.full_name, source.name, source.display_name]
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim())
    .filter((value) => value.length > 0);

  if (candidates.length > 0) {
    return candidates[0];
  }

  if (email && email.includes("@")) {
    return email.split("@")[0] || "there";
  }

  return "there";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const billingState = normalizeJurisdictionCode(parsed.data.billingState);
  if (!billingState) {
    return NextResponse.json({ error: "Invalid billing state." }, { status: 400 });
  }

  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!user.email) {
      return NextResponse.json({ error: "Account email is required." }, { status: 400 });
    }

    const admin = createSupabaseAdminClient();
    
    // Auto-Bootstrap: If this is the designated initial owner and no owners exist yet, grant admin/owner.
    let isInitialOwner = false;
    const envOwner = process.env.INITIAL_OWNER_EMAIL ? process.env.INITIAL_OWNER_EMAIL.toLowerCase() : null;
    const fallbackOwners = [
      "robert@waltos.net",
      "robertwaltos@outlook.com",
      "robert@koydo.com"
    ];
    const designatedOwnerEmails = envOwner ? [envOwner, ...fallbackOwners] : fallbackOwners;
    
    if (designatedOwnerEmails.includes(user.email.toLowerCase())) {
      const { count } = await admin
        .from("user_profiles")
        .select("*", { count: "exact", head: true })
        .eq("is_owner", true);
      
      if (count === 0) {
        isInitialOwner = true;
        console.log(`[Auto-Bootstrap] Crowned ${user.email} as the initial system owner.`);
      }
    }

    const { error: profileError } = await admin.from("user_profiles").upsert(
      {
        user_id: user.id,
        billing_state: billingState,
        ...(isInitialOwner ? { is_admin: true, is_owner: true } : {}),
      },
      { onConflict: "user_id" },
    );

    if (profileError) {
      console.error("Failed to persist signup billing state.", toSafeErrorRecord(profileError));
      return NextResponse.json(
        { error: "Failed to persist signup billing state." },
        { status: 500 },
      );
    }

    const termsDocument = resolveTermsDocumentForState(billingState);
    const emailResult = await sendSignupThankYouEmail({
      toEmail: user.email,
      recipientName: resolveRecipientName(user.email, user.user_metadata),
      termsDocument,
    });

    if (!emailResult.delivered && emailResult.mode === "provider-error") {
      return NextResponse.json(
        {
          error: "Failed to send signup welcome email.",
          details: emailResult.reason,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      deliveryMode: emailResult.mode,
      deliveryReason: emailResult.reason,
      billingState,
      termsVersion: termsDocument.version,
      termsHash: termsDocument.documentHash,
      attachmentFilename: emailResult.attachmentFilename,
    });
  } catch (error) {
    console.error("Signup completion workflow failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: "Server configuration error." },
      { status: 500 },
    );
  }
}

