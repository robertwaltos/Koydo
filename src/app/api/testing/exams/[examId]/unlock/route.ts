import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { isMissingTestingTableError } from "@/lib/testing/api-utils";

const unlockSchema = z.object({
  amount: z.number().positive().max(999).optional(),
  currency: z.string().min(3).max(3).optional(),
  provider: z.string().min(2).max(64).optional(),
  providerTransactionId: z.string().min(4).max(255).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

function isMissingColumnError(error: unknown, columnName: string) {
  if (!error || typeof error !== "object") return false;
  const code = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const message = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  return code === "42703" || message.toLowerCase().includes(columnName.toLowerCase());
}

export async function POST(
  request: Request,
  context: { params: Promise<{ examId: string }> },
) {
  const { examId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = unlockSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const { data: exam, error: examError } = await admin
    .from("testing_exams")
    .select("id, exam_code, is_active")
    .eq("id", examId)
    .eq("is_active", true)
    .maybeSingle();

  if (examError || !exam) {
    if (isMissingTestingTableError(examError)) {
      return NextResponse.json(
        { error: "Testing database tables are not ready. Run Supabase migrations first." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "Exam not found." }, { status: 404 });
  }

  const { data: entitlementRow, error: entitlementError } = await admin
    .from("user_exam_entitlements")
    .select("id, entitlement_type")
    .eq("user_id", user.id)
    .eq("exam_id", exam.id)
    .maybeSingle();

  if (entitlementError) {
    return NextResponse.json({ error: entitlementError.message }, { status: 500 });
  }

  if (entitlementRow?.entitlement_type === "full") {
    return NextResponse.json({
      success: true,
      alreadyUnlocked: true,
      examId: exam.id,
      examCode: exam.exam_code,
      entitlementType: "full",
    });
  }

  const amount = Number(parsed.data.amount ?? 1.95);
  const currency = (parsed.data.currency ?? "USD").toUpperCase();
  const provider = parsed.data.provider ?? "stripe_placeholder";
  const providerTransactionId =
    parsed.data.providerTransactionId
    ?? `manual_${Date.now()}_${randomUUID()}`;
  const metadata = {
    ...(parsed.data.metadata ?? {}),
    flow: "testing_unlock_placeholder",
  };
  const idempotencyKey = `unlock_${user.id}_${exam.id}_${Date.now()}`;

  const purchaseInsertWithIdempotency = await admin
    .from("testing_purchases")
    .insert({
      user_id: user.id,
      exam_id: exam.id,
      amount,
      currency,
      status: "completed",
      provider,
      provider_transaction_id: providerTransactionId,
      idempotency_key: idempotencyKey,
      metadata,
    })
    .select("id, status, amount, currency")
    .single();

  const purchaseInsertFallback = async () =>
    admin
      .from("testing_purchases")
      .insert({
        user_id: user.id,
        exam_id: exam.id,
        amount,
        currency,
        status: "completed",
        provider,
        provider_transaction_id: providerTransactionId,
        metadata,
      })
      .select("id, status, amount, currency")
      .single();

  const { data: purchase, error: purchaseError } = purchaseInsertWithIdempotency.error
    && isMissingColumnError(purchaseInsertWithIdempotency.error, "idempotency_key")
      ? await purchaseInsertFallback()
      : purchaseInsertWithIdempotency;

  if (purchaseError) {
    return NextResponse.json({ error: purchaseError.message }, { status: 500 });
  }

  const entitlementUpsertWithState = await admin
    .from("user_exam_entitlements")
    .upsert(
      {
        user_id: user.id,
        exam_id: exam.id,
        entitlement_type: "full",
        state: "completed",
        unlocked_at: new Date().toISOString(),
      },
      { onConflict: "user_id,exam_id" },
    );

  const upsertFallback = async () =>
    admin
      .from("user_exam_entitlements")
      .upsert(
        {
          user_id: user.id,
          exam_id: exam.id,
          entitlement_type: "full",
          unlocked_at: new Date().toISOString(),
        },
        { onConflict: "user_id,exam_id" },
      );

  const { error: upsertError } = entitlementUpsertWithState.error
    && isMissingColumnError(entitlementUpsertWithState.error, "state")
      ? await upsertFallback()
      : entitlementUpsertWithState;

  if (upsertError) {
    return NextResponse.json({ error: upsertError.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    alreadyUnlocked: false,
    examId: exam.id,
    examCode: exam.exam_code,
    entitlementType: "full",
    purchase,
  });
}
