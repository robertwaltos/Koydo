import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { toSafeErrorRecord } from '@/lib/logging/safe-error';

const shouldDebugWebhook = process.env.NODE_ENV !== 'production';
const timestampMsSchema = z.union([
  z.number().int().nonnegative(),
  z.string().regex(/^\d+$/).transform((value) => Number(value)),
]);

const revenueCatEventSchema = z.object({
  type: z.string().min(1),
  app_user_id: z.string().min(1),
  product_id: z.string().optional(),
  period_type: z.string().optional(),
  expiration_at_ms: timestampMsSchema.nullable().optional(),
  purchased_at_ms: timestampMsSchema.nullable().optional(),
  cancel_reason: z.string().nullable().optional(),
  store: z.string().optional(),
  environment: z.string().optional(),
});

const revenueCatWebhookSchema = z.object({
  event: revenueCatEventSchema,
});

/**
 * POST /api/revenuecat/webhook
 *
 * Handles RevenueCat server-side webhook events to keep the
 * Supabase `subscriptions` table in sync with purchase state.
 *
 * RevenueCat Webhook docs:
 * https://www.revenuecat.com/docs/integrations/webhooks
 *
 * Supported event types:
 *  - INITIAL_PURCHASE
 *  - RENEWAL
 *  - CANCELLATION
 *  - UNCANCELLATION
 *  - NON_RENEWING_PURCHASE
 *  - EXPIRATION
 *  - BILLING_ISSUE
 *  - PRODUCT_CHANGE
 *  - SUBSCRIBER_ALIAS
 *
 * Security: Verify the X-Revenuecat-Signature header using
 * the shared secret set in RevenueCat Dashboard -> Integrations -> Webhooks.
 */

// Lazy factory — avoid creating admin client at module scope (serverless cold start optimization)
function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Missing SUPABASE env vars for RevenueCat webhook");
  return createClient(url, key);
}

/**
 * Verify the webhook signature from RevenueCat.
 * RevenueCat signs requests with HMAC-SHA256 using the webhook secret.
 */
function verifyRevenueCatSignature(
  payload: string,
  signature: string | null,
  secret: string
): boolean {
  if (!signature) return false;

  const expectedHex = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  try {
    const expected = Buffer.from(expectedHex, 'hex');
    const provided = Buffer.from(signature, 'hex');

    if (
      expected.length === 0
      || provided.length === 0
      || expected.length !== provided.length
    ) {
      return false;
    }

    return crypto.timingSafeEqual(expected, provided);
  } catch {
    return false;
  }
}

function mapEventToStatus(
  event: string
): 'active' | 'trialing' | 'cancelled' | 'expired' | 'billing_issue' {
  switch (event) {
    case 'INITIAL_PURCHASE':
    case 'RENEWAL':
    case 'UNCANCELLATION':
    case 'NON_RENEWING_PURCHASE':
    case 'PRODUCT_CHANGE':
      return 'active';
    case 'CANCELLATION':
      return 'cancelled';
    case 'EXPIRATION':
      return 'expired';
    case 'BILLING_ISSUE':
      return 'billing_issue';
    default:
      return 'active';
  }
}

async function upsertRevenueCatSubscription(
  payload: Record<string, unknown>,
) {
  // Atomic upsert via unique stripe_subscription_id using a deterministic RevenueCat key.
  const upsertResult = await getSupabaseAdmin().from('subscriptions').upsert(payload, {
    onConflict: 'stripe_subscription_id',
  });

  if (upsertResult.error) {
    throw upsertResult.error;
  }
}

export async function POST(request: NextRequest) {
  let rawBody: string;

  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ error: 'Failed to read body' }, { status: 400 });
  }

  // Verify signature
  const webhookSecret = process.env.REVENUECAT_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('[revenuecat/webhook] REVENUECAT_WEBHOOK_SECRET not set');
    return NextResponse.json(
      { error: 'Server misconfiguration' },
      { status: 500 }
    );
  }

  const signature = request.headers.get('X-Revenuecat-Signature');
  if (!verifyRevenueCatSignature(rawBody, signature, webhookSecret)) {
    console.warn('[revenuecat/webhook] Invalid signature - rejecting request');
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  let parsedRawBody: unknown;
  try {
    parsedRawBody = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsedBody = revenueCatWebhookSchema.safeParse(parsedRawBody);
  if (!parsedBody.success) {
    return NextResponse.json(
      { error: 'Invalid webhook payload', details: parsedBody.error.flatten() },
      { status: 400 },
    );
  }

  const event = parsedBody.data.event;
  const eventType = event.type;
  const supportedEvents = new Set([
    'INITIAL_PURCHASE',
    'RENEWAL',
    'CANCELLATION',
    'UNCANCELLATION',
    'NON_RENEWING_PURCHASE',
    'EXPIRATION',
    'BILLING_ISSUE',
    'PRODUCT_CHANGE',
    'SUBSCRIBER_ALIAS',
  ]);
  if (!supportedEvents.has(eventType)) {
    if (shouldDebugWebhook) {
      console.debug(`[revenuecat/webhook] Skipping unsupported event type ${eventType}`);
    }
    return NextResponse.json({ received: true, skipped: true }, { status: 200 });
  }

  const appUserId = event.app_user_id; // This is the Supabase user ID
  const productId = event.product_id ?? null;
  const periodType = event.period_type ?? null; // 'TRIAL' | 'NORMAL'
  const expirationAtMs = event.expiration_at_ms ?? null;
  const purchasedAtMs = event.purchased_at_ms ?? null;
  const cancelReasonCode = event.cancel_reason ?? null;

  if (!appUserId) {
    console.error('[revenuecat/webhook] Missing app_user_id in event');
    return NextResponse.json({ error: 'Missing app_user_id' }, { status: 400 });
  }

  const newStatus = mapEventToStatus(eventType);
  const isInTrial = periodType === 'TRIAL';
  const willRenew = !['CANCELLATION', 'EXPIRATION'].includes(eventType);
  const cancelAtPeriodEnd = eventType === 'CANCELLATION';

  const expiresAt = expirationAtMs
    ? new Date(expirationAtMs).toISOString()
    : null;
  const purchasedAt = purchasedAtMs
    ? new Date(purchasedAtMs).toISOString()
    : new Date().toISOString();

  // Determine plan_id from productId
  const planId = productId?.includes('annual') ? 'annual' : 'monthly';
  const providerSubscriptionId = `revenuecat:${appUserId}`;
  const subscriptionPayload = {
    user_id: appUserId,
    provider: 'revenuecat',
    status: newStatus,
    plan_id: planId,
    product_id: productId,
    stripe_subscription_id: providerSubscriptionId,
    stripe_price_id: productId ?? null,
    current_period_start: purchasedAt,
    current_period_end: expiresAt,
    is_in_trial: isInTrial,
    will_renew: willRenew,
    cancel_at_period_end: cancelAtPeriodEnd,
    cancel_reason: cancelReasonCode,
    metadata: {
      revenuecat_event_type: eventType,
      revenuecat_store: (event.store as string | undefined) ?? null,
      revenuecat_environment: (event.environment as string | undefined) ?? null,
    },
    updated_at: new Date().toISOString(),
  };

  try {
    await upsertRevenueCatSubscription(subscriptionPayload);

    if (shouldDebugWebhook) {
      console.debug(
        `[revenuecat/webhook] Processed ${eventType} for user ${appUserId} -> status: ${newStatus}`
      );
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err) {
    console.error('[revenuecat/webhook] DB upsert error.', toSafeErrorRecord(err));
    // Return 200 to prevent RevenueCat from retrying on our DB errors
    // Log to an error tracking service here if available
    return NextResponse.json(
      { received: true, warning: 'DB update failed - logged for retry' },
      { status: 200 }
    );
  }
}



