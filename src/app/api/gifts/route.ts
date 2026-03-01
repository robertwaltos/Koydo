import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(200).default(50),
});

type GiftRow = {
  id: string;
  purchaser_user_id: string;
  recipient_email: string;
  recipient_user_id: string | null;
  plan_id: string;
  months_granted: number;
  status: string;
  gift_code_preview: string;
  stripe_checkout_session_id: string | null;
  stripe_payment_intent_id: string | null;
  purchased_at: string | null;
  redeemed_at: string | null;
  expires_at: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
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

function mapGift(row: GiftRow) {
  return {
    id: row.id,
    purchaserUserId: row.purchaser_user_id,
    recipientEmail: row.recipient_email,
    recipientUserId: row.recipient_user_id,
    planId: row.plan_id,
    monthsGranted: row.months_granted,
    status: row.status,
    giftCodePreview: row.gift_code_preview,
    stripeCheckoutSessionId: row.stripe_checkout_session_id,
    stripePaymentIntentId: row.stripe_payment_intent_id,
    purchasedAt: row.purchased_at,
    redeemedAt: row.redeemed_at,
    expiresAt: row.expires_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:gifts:get", {
    max: 120,
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

  const parsedQuery = querySchema.safeParse({
    limit: new URL(request.url).searchParams.get("limit") ?? undefined,
  });
  if (!parsedQuery.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: parsedQuery.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const limit = parsedQuery.data.limit;
  const [outgoingResult, incomingByUserResult, incomingByEmailResult] = await Promise.all([
    admin
      .from("gifted_memberships")
      .select("id, purchaser_user_id, recipient_email, recipient_user_id, plan_id, months_granted, status, gift_code_preview, stripe_checkout_session_id, stripe_payment_intent_id, purchased_at, redeemed_at, expires_at, metadata, created_at, updated_at")
      .eq("purchaser_user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(limit),
    admin
      .from("gifted_memberships")
      .select("id, purchaser_user_id, recipient_email, recipient_user_id, plan_id, months_granted, status, gift_code_preview, stripe_checkout_session_id, stripe_payment_intent_id, purchased_at, redeemed_at, expires_at, metadata, created_at, updated_at")
      .eq("recipient_user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(limit),
    user.email
      ? admin
          .from("gifted_memberships")
          .select("id, purchaser_user_id, recipient_email, recipient_user_id, plan_id, months_granted, status, gift_code_preview, stripe_checkout_session_id, stripe_payment_intent_id, purchased_at, redeemed_at, expires_at, metadata, created_at, updated_at")
          .eq("recipient_email", user.email.toLowerCase())
          .is("recipient_user_id", null)
          .order("created_at", { ascending: false })
          .limit(limit)
      : Promise.resolve({ data: [] as GiftRow[], error: null }),
  ]);

  const firstError = outgoingResult.error ?? incomingByUserResult.error ?? incomingByEmailResult.error;
  if (firstError) {
    if (isMissingOrganizationTableError(firstError)) {
      return NextResponse.json(
        { error: "Gifting tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Unexpected API error.", toSafeErrorRecord(firstError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const outgoing = (outgoingResult.data ?? []) as GiftRow[];
  const incomingByUser = (incomingByUserResult.data ?? []) as GiftRow[];
  const incomingByEmail = (incomingByEmailResult.data ?? []) as GiftRow[];

  const incomingById = new Map<string, GiftRow>();
  for (const gift of [...incomingByUser, ...incomingByEmail]) {
    incomingById.set(gift.id, gift);
  }
  const incoming = Array.from(incomingById.values()).sort((left, right) =>
    left.created_at < right.created_at ? 1 : -1);

  return NextResponse.json({
    outgoing: outgoing.map(mapGift),
    incoming: incoming.map(mapGift),
    summary: {
      outgoingCount: outgoing.length,
      incomingCount: incoming.length,
      redeemableIncomingCount: incoming.filter((gift) => gift.status === "paid").length,
    },
  });
}
