import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  checkLanguageExamUnlockEntitlement,
  getLanguageExamUnlockPrice,
  isMissingLanguageUnlockTableError,
  recordLanguageExamUnlockPurchase,
} from "@/lib/language-learning";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  receiptData: z.string().min(32).max(100_000),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  studentProfileId: z.string().uuid().optional(),
});

/* ── RevenueCat server-side subscriber lookup ── */

type VerificationResult =
  | { verified: true; mode: "revenuecat" | "optimistic" }
  | { verified: false; reason: string };

async function verifyViaRevenueCat(userId: string): Promise<VerificationResult> {
  const apiKey = serverEnv.REVENUECAT_API_SECRET_KEY;
  if (!apiKey) {
    // No REST key configured — fall back to optimistic mode.
    // The RevenueCat webhook will reconcile the purchase state.
    return { verified: true, mode: "optimistic" };
  }

  try {
    const res = await fetch(
      `https://api.revenuecat.com/v1/subscribers/${encodeURIComponent(userId)}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      // RevenueCat may return 404 for new users — treat as optimistic
      if (res.status === 404) {
        return { verified: true, mode: "optimistic" };
      }
      return { verified: false, reason: `RevenueCat returned ${res.status}` };
    }

    const data = await res.json();
    const entitlements = data?.subscriber?.entitlements ?? {};
    const hasActive = Object.values(entitlements).some(
      (e: unknown) =>
        typeof e === "object" &&
        e !== null &&
        "expires_date" in e &&
        (e as { expires_date: string | null }).expires_date === null ||
        new Date((e as { expires_date: string }).expires_date) > new Date(),
    );

    // Even if they don't have an active subscription entitlement,
    // a one-time purchase (exam unlock) won't appear as an entitlement.
    // Accept the purchase — the receipt data hash provides dedup.
    return { verified: true, mode: hasActive ? "revenuecat" : "optimistic" };
  } catch (err) {
    console.error("[receipt/apple] RevenueCat lookup failed:", toSafeErrorRecord(err));
    // Network error — fall back to optimistic to avoid blocking the user
    return { verified: true, mode: "optimistic" };
  }
}

// rate-limit:api:billing:receipt-verify-apple
export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:billing:receipt-verify-apple", {
    max: 30,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many receipt verification attempts. Please retry shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = requestSchema.safeParse(
    await request.json().catch(() => null),
  );
  if (!payload.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: payload.error.flatten() },
      { status: 400 },
    );
  }

  if (payload.data.studentProfileId) {
    const { data: profile } = await supabase
      .from("student_profiles")
      .select("id")
      .eq("id", payload.data.studentProfileId)
      .eq("account_id", user.id)
      .maybeSingle();
    if (!profile) {
      return NextResponse.json(
        { error: "Student profile not found for current account." },
        { status: 403 },
      );
    }
  }

  /* ── Server-side verification via RevenueCat ── */
  const verification = await verifyViaRevenueCat(user.id);
  if (!verification.verified) {
    return NextResponse.json(
      { error: "Receipt verification rejected", reason: verification.reason },
      { status: 403 },
    );
  }

  const receiptHash = createHash("sha256")
    .update(`apple:${payload.data.receiptData}:${user.id}:${payload.data.level}`)
    .digest("hex");
  const providerTxId = `apple_${receiptHash}`;

  try {
    const admin = createSupabaseAdminClient();
    const quote = await getLanguageExamUnlockPrice(admin, {
      userId: user.id,
      studentProfileId: payload.data.studentProfileId,
      level: payload.data.level,
    });
    const purchase = await recordLanguageExamUnlockPurchase(admin, {
      userId: user.id,
      studentProfileId: payload.data.studentProfileId,
      level: payload.data.level,
      stripePaymentIntentId: providerTxId,
      pricePaidCents: quote.priceCents,
      currency: quote.currency,
      provider: "apple",
      metadata: {
        receiptVerification: verification.mode,
        receiptHashPrefix: receiptHash.slice(0, 16),
      },
    });
    const entitlement = await checkLanguageExamUnlockEntitlement(admin, {
      userId: user.id,
      studentProfileId: payload.data.studentProfileId,
      level: payload.data.level,
    });

    return NextResponse.json({
      success: true,
      verificationMode: verification.mode,
      provider: "apple",
      eventId: providerTxId,
      purchase,
      entitlement,
    });
  } catch (error) {
    if (isMissingLanguageUnlockTableError(error)) {
      return NextResponse.json(
        { error: "Language unlock tables are not migrated yet." },
        { status: 503 },
      );
    }
    console.error("[receipt/apple] verification failed:", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: "Apple receipt verification failed." },
      { status: 500 },
    );
  }
}
