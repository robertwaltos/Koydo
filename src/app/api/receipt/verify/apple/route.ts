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
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  receiptData: z.string().min(32).max(100_000),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  studentProfileId: z.string().uuid().optional(),
});

const ENABLE_RECEIPT_PLACEHOLDER =
  process.env.ENABLE_IAP_RECEIPT_PLACEHOLDER === "1"
  && process.env.NODE_ENV !== "production";

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

  if (!ENABLE_RECEIPT_PLACEHOLDER) {
    return NextResponse.json(
      {
        error:
          "Apple receipt verification endpoint is not enabled in this environment.",
      },
      { status: 501 },
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

  // Placeholder verification flow: normalize into same purchase path.
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
        receiptVerification: "placeholder",
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
      verificationMode: "placeholder_not_live",
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
    console.error("Apple receipt verification failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      {
        error: "Apple receipt verification failed.",
      },
      { status: 500 },
    );
  }
}
