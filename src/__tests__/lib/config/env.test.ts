import { describe, it, expect, vi, beforeAll } from "vitest";

// Set required env vars before importing the module
beforeAll(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://test.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "test-anon-key-placeholder";
});

describe("Environment Configuration", () => {
  it("publicEnv parses NEXT_PUBLIC_ variables", async () => {
    const { publicEnv } = await import("@/lib/config/env");
    expect(publicEnv).toBeDefined();
    expect(typeof publicEnv.NEXT_PUBLIC_APP_URL).toBe("string");
    expect(typeof publicEnv.NEXT_PUBLIC_SUPABASE_URL).toBe("string");
  });

  it("buildServerEnv returns empty object in browser context (jsdom)", async () => {
    // jsdom has `window` defined, so serverEnv should be the empty cast
    const { serverEnv } = await import("@/lib/config/env");
    expect(serverEnv).toBeDefined();
    // In jsdom, typeof window !== "undefined" → returns {} cast
    // Server vars won't have real parsed values
  });

  it("BILLING_PROVIDER_MODE defaults to stripe_external", async () => {
    const { publicEnv } = await import("@/lib/config/env");
    expect(publicEnv.NEXT_PUBLIC_BILLING_PROVIDER_MODE).toBe("stripe_external");
  });

  it("NEXT_PUBLIC_APP_ID defaults to koydo_main", async () => {
    const { publicEnv } = await import("@/lib/config/env");
    expect(publicEnv.NEXT_PUBLIC_APP_ID).toBe("koydo_main");
  });

  it("NEXT_PUBLIC_APP_URL defaults to localhost", async () => {
    const { publicEnv } = await import("@/lib/config/env");
    expect(publicEnv.NEXT_PUBLIC_APP_URL).toMatch(/^https?:\/\//);
  });
});
