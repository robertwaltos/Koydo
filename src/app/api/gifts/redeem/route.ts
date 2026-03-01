import crypto from "crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const redeemGiftSchema = z.object({
  giftCode: z.string().trim().min(12).max(120),
});

type GiftMembershipRow = {
  id: string;
  purchaser_user_id: string;
  recipient_email: string;
  recipient_user_id: string | null;
  plan_id: string;
  months_granted: number;
  status: string;
  expires_at: string | null;
  metadata: Record<string, unknown> | null;
};

type SubscriptionRow = {
  id: string;
  status: string;
  current_period_end: string | null;
  plan_id: string | null;
  metadata: Record<string, unknown> | null;
};

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

function addMonths(fromDate: Date, months: number) {
  const copy = new Date(fromDate);
  copy.setMonth(copy.getMonth() + months);
  return copy;
}

function hashGiftCode(code: string) {
  return crypto.createHash("sha256").update(code).digest("hex");
}

function isRedeemableGift(row: GiftMembershipRow) {
  if (row.status !== "paid") return false;
  if (!row.expires_at) return true;
  return row.expires_at > new Date().toISOString();
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:gifts:redeem:post", {
    max: 40,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
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
  const parsed = redeemGiftSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const giftCodeHash = hashGiftCode(parsed.data.giftCode);
  const { data: giftData, error: giftError } = await admin
    .from("gifted_memberships")
    .select("id, purchaser_user_id, recipient_email, recipient_user_id, plan_id, months_granted, status, expires_at, metadata")
    .eq("gift_code_hash", giftCodeHash)
    .maybeSingle();

  if (giftError) {
    if (isMissingOrganizationTableError(giftError)) {
      return NextResponse.json(
        { error: "Gifting tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(giftError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const gift = giftData as GiftMembershipRow | null;
  if (!gift) {
    return NextResponse.json({ error: "Gift code not found." }, { status: 404 });
  }

  if (gift.recipient_user_id && gift.recipient_user_id !== user.id) {
    return NextResponse.json({ error: "Gift code already redeemed." }, { status: 409 });
  }

  if (!isRedeemableGift(gift)) {
    return NextResponse.json(
      { error: "Gift code is not redeemable. It may be unpaid, expired, or canceled." },
      { status: 409 },
    );
  }

  if (user.email && gift.recipient_email !== user.email.toLowerCase()) {
    return NextResponse.json(
      { error: "This gift was issued to a different recipient email." },
      { status: 403 },
    );
  }

  const now = new Date();
  const { data: existingSubscriptionData, error: existingSubscriptionError } = await admin
    .from("subscriptions")
    .select("id, status, current_period_end, plan_id, metadata")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (existingSubscriptionError && existingSubscriptionError.code !== "PGRST116") {
    console.error("Unexpected API error.", toSafeErrorRecord(existingSubscriptionError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const existingSubscription = existingSubscriptionData as SubscriptionRow | null;
  const currentEndDate = existingSubscription?.current_period_end
    ? new Date(existingSubscription.current_period_end)
    : null;
  const baseline = currentEndDate && currentEndDate > now ? currentEndDate : now;
  const newPeriodEnd = addMonths(baseline, gift.months_granted).toISOString();

  let entitlementSubscriptionId: string | null = null;

  if (existingSubscription) {
    const nextMetadata = {
      ...(existingSubscription.metadata ?? {}),
      giftsRedeemed: [
        ...((Array.isArray(existingSubscription.metadata?.giftsRedeemed)
          ? existingSubscription.metadata?.giftsRedeemed
          : []) as unknown[]),
        {
          giftId: gift.id,
          redeemedAt: now.toISOString(),
          monthsGranted: gift.months_granted,
          planId: gift.plan_id,
        },
      ],
    };

    const { error: subscriptionUpdateError } = await admin
      .from("subscriptions")
      .update({
        status: "active",
        current_period_end: newPeriodEnd,
        cancel_at_period_end: true,
        will_renew: false,
        is_in_trial: false,
        metadata: nextMetadata,
      })
      .eq("id", existingSubscription.id);

    if (subscriptionUpdateError) {
      console.error("Unexpected API error.", toSafeErrorRecord(subscriptionUpdateError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    entitlementSubscriptionId = existingSubscription.id;
  } else {
    const { data: insertedSubscription, error: subscriptionInsertError } = await admin
      .from("subscriptions")
      .insert({
        user_id: user.id,
        provider: "stripe",
        status: "active",
        plan_id: gift.plan_id,
        product_id: `gift:${gift.plan_id}`,
        stripe_subscription_id: `gift-${gift.id}`,
        stripe_price_id: null,
        current_period_start: now.toISOString(),
        current_period_end: newPeriodEnd,
        is_in_trial: false,
        will_renew: false,
        cancel_at_period_end: true,
        metadata: {
          source: "gift_membership_redeem",
          giftId: gift.id,
        },
      })
      .select("id")
      .single();

    if (subscriptionInsertError) {
      console.error("Unexpected API error.", toSafeErrorRecord(subscriptionInsertError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    entitlementSubscriptionId = insertedSubscription.id;
  }

  const { error: giftUpdateError } = await admin
    .from("gifted_memberships")
    .update({
      recipient_user_id: user.id,
      status: "redeemed",
      redeemed_at: now.toISOString(),
      metadata: {
        ...(gift.metadata ?? {}),
        redeemedSubscriptionId: entitlementSubscriptionId,
      },
    })
    .eq("id", gift.id);

  if (giftUpdateError) {
    console.error("Unexpected API error.", toSafeErrorRecord(giftUpdateError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    redeemedGift: {
      giftId: gift.id,
      planId: gift.plan_id,
      monthsGranted: gift.months_granted,
      expiresAt: newPeriodEnd,
      subscriptionId: entitlementSubscriptionId,
    },
  });
}

