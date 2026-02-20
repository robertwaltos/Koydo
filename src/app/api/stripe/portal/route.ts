import { NextResponse } from "next/server";
import Stripe from "stripe";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export async function POST() {
  if (serverEnv.BILLING_PROVIDER_MODE === "app_store_iap") {
    return NextResponse.json(
      {
        error: "External billing portal is disabled in app-store mode. Use in-app subscription management.",
      },
      { status: 403 }
    );
  }

  if (!serverEnv.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Missing Stripe configuration." }, { status: 500 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const { data: subscription, error } = await admin
    .from("subscriptions")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!subscription?.stripe_customer_id) {
    return NextResponse.json({ error: "No active customer record found." }, { status: 400 });
  }

  const stripe = new Stripe(serverEnv.STRIPE_SECRET_KEY);
  const session = await stripe.billingPortal.sessions.create({
    customer: subscription.stripe_customer_id,
    return_url: `${serverEnv.NEXT_PUBLIC_APP_URL}/account/settings`,
  });

  return NextResponse.json({ portalUrl: session.url });
}
