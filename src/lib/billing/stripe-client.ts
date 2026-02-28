import Stripe from "stripe";

// Keep all server-side Stripe handlers pinned to a single API version.
export const STRIPE_API_VERSION = "2026-02-25.preview";

export function createStripeServerClient(secretKey: string) {
  return new Stripe(secretKey, {
    apiVersion: STRIPE_API_VERSION as unknown as Stripe.LatestApiVersion,
  });
}

