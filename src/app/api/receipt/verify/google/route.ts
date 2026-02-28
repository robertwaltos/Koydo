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

const requestSchema = z.object({
  packageName: z.string().min(3).max(255),
  productId: z.string().min(3).max(255),
  purchaseToken: z.string().min(12).max(2_048),
  level: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  studentProfileId: z.string().uuid().optional(),
});

function inferLevelFromProductId(
  productId: string,
): "beginner" | "intermediate" | "advanced" {
  const lowered = productId.toLowerCase();
  if (lowered.includes("advanced")) return "advanced";
  if (lowered.includes("intermediate")) return "intermediate";
  return "beginner";
}

export async function POST(request: Request) {
  const rateLimit = enforceIpRateLimit(request, "api:billing:receipt-verify-google", {
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

  const level = payload.data.level ?? inferLevelFromProductId(payload.data.productId);
  // Placeholder verification flow: normalize into same purchase path.
  const receiptHash = createHash("sha256")
    .update(
      `google:${payload.data.packageName}:${payload.data.productId}:${payload.data.purchaseToken}:${user.id}:${level}`,
    )
    .digest("hex");
  const providerTxId = `google_${receiptHash}`;

  try {
    const admin = createSupabaseAdminClient();
    const quote = await getLanguageExamUnlockPrice(admin, {
      userId: user.id,
      studentProfileId: payload.data.studentProfileId,
      level,
    });
    const purchase = await recordLanguageExamUnlockPurchase(admin, {
      userId: user.id,
      studentProfileId: payload.data.studentProfileId,
      level,
      stripePaymentIntentId: providerTxId,
      pricePaidCents: quote.priceCents,
      currency: quote.currency,
      provider: "google",
      metadata: {
        receiptVerification: "placeholder",
        packageName: payload.data.packageName,
        productId: payload.data.productId,
        receiptHashPrefix: receiptHash.slice(0, 16),
      },
    });
    const entitlement = await checkLanguageExamUnlockEntitlement(admin, {
      userId: user.id,
      studentProfileId: payload.data.studentProfileId,
      level,
    });

    return NextResponse.json({
      success: true,
      verificationMode: "placeholder_not_live",
      provider: "google",
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
    return NextResponse.json(
      {
        error: "Google receipt verification failed.",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
