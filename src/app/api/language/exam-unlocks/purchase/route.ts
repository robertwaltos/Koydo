import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import {
  checkLanguageExamUnlockEntitlement,
  getLanguageExamUnlockPrice,
  getLanguageRuntimeConfig,
  isMissingLanguageUnlockTableError,
  recordLanguageExamUnlockPurchase,
} from "@/lib/language-learning";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const purchaseSchema = z.object({
  level: z.enum(["beginner", "intermediate", "advanced"]),
  stripePaymentIntentId: z.string().trim().min(4).max(255),
  studentProfileId: z.string().uuid().optional(),
  pricePaidCents: z.number().int().positive().max(100_000).optional(),
  currency: z.string().trim().length(3).optional(),
  provider: z.string().trim().min(2).max(64).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export async function POST(request: Request) {
  const rateLimit = enforceIpRateLimit(request, "api:billing:language-unlock-purchase", {
    max: 30,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many unlock purchase attempts. Please retry shortly." },
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

  const body = await request.json().catch(() => null);
  const parsed = purchaseSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  if (parsed.data.studentProfileId) {
    const { data: profile } = await supabase
      .from("student_profiles")
      .select("id")
      .eq("id", parsed.data.studentProfileId)
      .eq("account_id", user.id)
      .maybeSingle();
    if (!profile) {
      return NextResponse.json(
        { error: "Student profile not found for current account." },
        { status: 403 },
      );
    }
  }

  const admin = createSupabaseAdminClient();
  try {
    const [runtimeConfig, quote, purchase] = await Promise.all([
      getLanguageRuntimeConfig(),
      getLanguageExamUnlockPrice(admin, {
        userId: user.id,
        studentProfileId: parsed.data.studentProfileId,
        level: parsed.data.level,
      }),
      recordLanguageExamUnlockPurchase(admin, {
        userId: user.id,
        studentProfileId: parsed.data.studentProfileId,
        level: parsed.data.level,
        stripePaymentIntentId: parsed.data.stripePaymentIntentId,
        pricePaidCents: parsed.data.pricePaidCents,
        currency: parsed.data.currency,
        provider: parsed.data.provider,
        metadata: parsed.data.metadata,
      }),
    ]);

    const entitlement = await checkLanguageExamUnlockEntitlement(admin, {
      userId: user.id,
      studentProfileId: parsed.data.studentProfileId,
      level: parsed.data.level,
    });

    return NextResponse.json({
      success: true,
      purchase,
      quote,
      entitlement,
      runtimeConfig,
    });
  } catch (error) {
    if (isMissingLanguageUnlockTableError(error)) {
      return NextResponse.json(
        {
          error: "Language exam unlock tables are not migrated yet.",
          runtimeConfig: await getLanguageRuntimeConfig(),
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        error: "Failed to record language exam unlock purchase.",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
