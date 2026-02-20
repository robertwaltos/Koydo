import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getActiveStripePriceId } from "@/lib/billing/pricing";

const checkoutSchema = {
  mode: "subscription" as const,
  successUrlPath: "/billing/success",
  cancelUrlPath: "/billing/cancel",
};

const requestSchema = z.object({
  customerEmail: z.string().email().optional(),
});

export async function POST(request: Request) {
  if (serverEnv.BILLING_PROVIDER_MODE === "app_store_iap") {
    return NextResponse.json(
      {
        error:
          "External checkout is disabled in app-store mode. Use in-app purchase flow for this build.",
      },
      { status: 403 },
    );
  }

  if (!serverEnv.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Missing Stripe configuration in environment variables." },
      { status: 500 },
    );
  }
  const activePriceId = await getActiveStripePriceId();
  if (!activePriceId) {
    return NextResponse.json({ error: "No active Stripe price configured." }, { status: 500 });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const supabase = await createSupabaseServerClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = userData.user.id;
  const email = parsed.data.customerEmail ?? userData.user.email;

  const stripe = new Stripe(serverEnv.STRIPE_SECRET_KEY);

  const session = await stripe.checkout.sessions.create({
    mode: checkoutSchema.mode,
    line_items: [{ price: activePriceId, quantity: 1 }],
    success_url: `${serverEnv.NEXT_PUBLIC_APP_URL}${checkoutSchema.successUrlPath}`,
    cancel_url: `${serverEnv.NEXT_PUBLIC_APP_URL}${checkoutSchema.cancelUrlPath}`,
    allow_promotion_codes: true,
    customer_email: email,
    client_reference_id: userId,
    metadata: {
      userId,
    },
  });

  return NextResponse.json({ checkoutUrl: session.url });
}
