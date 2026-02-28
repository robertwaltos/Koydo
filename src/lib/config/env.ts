import { z } from "zod";

const booleanFlagSchema = z
  .enum(["true", "false"])
  .optional()
  .transform((value) => value === "true");

const serverEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().min(1, "NEXT_PUBLIC_SUPABASE_URL is required"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required"),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, "SUPABASE_SERVICE_ROLE_KEY is required"),
  STRIPE_SECRET_KEY: z.string().min(1, "STRIPE_SECRET_KEY is required for billing"),
  STRIPE_WEBHOOK_SECRET: z.string().min(1, "STRIPE_WEBHOOK_SECRET is required for billing"),
  STRIPE_PRICE_ID: z.string().optional(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  DEEPL_API_KEY: z.string().optional(),
  GOOGLE_TRANSLATE_API_KEY: z.string().optional(),
  LANGUAGE_TRANSLATION_PROVIDER: z
    .enum(["auto", "deepl", "google", "mock"])
    .default("auto"),
  LANGUAGE_PRONUNCIATION_PROVIDER: z
    .enum(["auto", "licensed", "mock"])
    .default("auto"),
  LANGUAGE_LICENSED_PRONUNCIATION_ENDPOINT: z.string().url().optional(),
  LANGUAGE_LICENSED_PRONUNCIATION_API_KEY: z.string().optional(),
  LANGUAGE_PRICING_PROFILE: z
    .enum(["conservative", "growth"])
    .default("conservative"),
  GROK_API_KEY: z.string().optional(),
  GROK_MODEL: z.string().default("grok-4-fast"),
  OPENAI_API_KEY: z.string().optional(),
  OPENAI_FOLLOWUP_MODEL: z.string().default("gpt-4.1-mini"),
  COMFYUI_BASE_URL: z.string().url().default("http://127.0.0.1:8188"),
  COMFYUI_LAN_URL: z.string().url().optional(),
  AI_TUTOR_DAILY_LIMIT: z.coerce.number().int().min(0).default(40),
  AI_MONTHLY_BUDGET_USD: z.coerce.number().positive().default(1),
  PARENT_CONSENT_TOKEN_SECRET: z.string().min(16).optional(),
  RESEND_API_KEY: z.string().optional(),
  PARENT_CONSENT_FROM_EMAIL: z.string().email().optional(),
  ADMIN_ALERT_FROM_EMAIL: z.string().email().optional(),
  NEXT_PUBLIC_MIXPANEL_TOKEN: z.string().optional(),
  NEXT_PUBLIC_OAUTH_GOOGLE_ENABLED: booleanFlagSchema,
  NEXT_PUBLIC_OAUTH_FACEBOOK_ENABLED: booleanFlagSchema,
  NEXT_PUBLIC_OAUTH_APPLE_ENABLED: booleanFlagSchema,
  NEXT_PUBLIC_OAUTH_X_ENABLED: booleanFlagSchema,
  BILLING_PROVIDER_MODE: z
    .enum(["stripe_external", "app_store_iap"])
    .catch("stripe_external"),
  ADMIN_ALERT_EMAILS: z.string().optional(),
  TESTING_ITEM_HASH_SECRET: z.string().min(16).optional(),
  REQUIRE_ADMIN_APPROVALS: z
    .enum(["true", "false"])
    .default("true")
    .transform((value) => value === "true"),
});

const publicEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().min(1, "NEXT_PUBLIC_SUPABASE_URL is required"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1, "NEXT_PUBLIC_SUPABASE_ANON_KEY is required"),
  NEXT_PUBLIC_MIXPANEL_TOKEN: z.string().optional(),
  NEXT_PUBLIC_BILLING_PROVIDER_MODE: z.enum(["stripe_external", "app_store_iap"]).catch("stripe_external"),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  NEXT_PUBLIC_OAUTH_GOOGLE_ENABLED: booleanFlagSchema,
  NEXT_PUBLIC_OAUTH_FACEBOOK_ENABLED: booleanFlagSchema,
  NEXT_PUBLIC_OAUTH_APPLE_ENABLED: booleanFlagSchema,
  NEXT_PUBLIC_OAUTH_X_ENABLED: booleanFlagSchema,
});

const normalizedEnv = {
  ...process.env,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.EXPO_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.EXPO_PUBLIC_SUPABASE_KEY,
};

export const serverEnv = serverEnvSchema.parse(normalizedEnv);
export const publicEnv = publicEnvSchema.parse(normalizedEnv);
