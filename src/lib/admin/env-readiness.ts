export type EnvReadinessStatus = "pass" | "warn" | "fail";

export type EnvReadinessCheck = {
  id: string;
  label: string;
  status: EnvReadinessStatus;
  detail: string;
};

export type EnvReadinessReport = {
  generatedAt: string;
  healthy: boolean;
  degraded: boolean;
  runtime: {
    value: string;
    isProduction: boolean;
  };
  totals: {
    pass: number;
    warn: number;
    fail: number;
    total: number;
  };
  checks: EnvReadinessCheck[];
};

function readEnvValue(key: string, fallbackKey?: string) {
  const value = process.env[key];
  if (typeof value === "string" && value.length > 0) return value;
  if (fallbackKey) {
    const fallbackValue = process.env[fallbackKey];
    if (typeof fallbackValue === "string" && fallbackValue.length > 0) return fallbackValue;
  }
  return "";
}

function checkUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function resolveRuntimeEnvironment() {
  const runtime =
    readEnvValue("APP_ENV")
    || readEnvValue("VERCEL_ENV")
    || readEnvValue("NODE_ENV")
    || "development";

  return {
    value: runtime,
    isProduction: runtime.toLowerCase() === "production",
  };
}

function buildStripeCheck({
  billingModeRaw,
  stripeSecret,
  stripeWebhook,
  isProduction,
}: {
  billingModeRaw: string;
  stripeSecret: string;
  stripeWebhook: string;
  isProduction: boolean;
}): EnvReadinessCheck {
  const billingMode = ["stripe_external", "app_store_iap"].includes(billingModeRaw)
    ? billingModeRaw
    : "stripe_external";

  if (billingMode !== "stripe_external") {
    return {
      id: "stripe_secret_webhook",
      label: "Stripe Secret + Webhook",
      status: "pass",
      detail:
        stripeSecret && stripeWebhook
          ? "Both present (not required in app_store_iap mode)"
          : "Not required (BILLING_PROVIDER_MODE=app_store_iap)",
    };
  }

  if (stripeSecret && stripeWebhook) {
    return {
      id: "stripe_secret_webhook",
      label: "Stripe Secret + Webhook",
      status: "pass",
      detail: "Both present",
    };
  }

  if (isProduction) {
    return {
      id: "stripe_secret_webhook",
      label: "Stripe Secret + Webhook",
      status: "fail",
      detail:
        "Billing blocked in production: missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET while BILLING_PROVIDER_MODE=stripe_external.",
    };
  }

  return {
    id: "stripe_secret_webhook",
    label: "Stripe Secret + Webhook",
    status: "warn",
    detail: "Missing one or both keys (billing routes limited until configured)",
  };
}

export function runEnvReadinessChecks(): EnvReadinessReport {
  const supabaseUrl = readEnvValue("NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const supabaseAnon = readEnvValue("NEXT_PUBLIC_SUPABASE_ANON_KEY", "EXPO_PUBLIC_SUPABASE_KEY");
  const supabaseService = readEnvValue("SUPABASE_SERVICE_ROLE_KEY");
  const billingMode = readEnvValue("BILLING_PROVIDER_MODE");
  const stripeSecret = readEnvValue("STRIPE_SECRET_KEY");
  const stripeWebhook = readEnvValue("STRIPE_WEBHOOK_SECRET");
  const resendApiKey = readEnvValue("RESEND_API_KEY");
  const consentFromEmail = readEnvValue("PARENT_CONSENT_FROM_EMAIL");
  const consentTokenSecret = readEnvValue("PARENT_CONSENT_TOKEN_SECRET");
  const mixpanel = readEnvValue("NEXT_PUBLIC_MIXPANEL_TOKEN");
  const runtime = resolveRuntimeEnvironment();

  const checks: EnvReadinessCheck[] = [
    {
      id: "supabase_url",
      label: "Supabase URL",
      status: supabaseUrl && checkUrl(supabaseUrl) ? "pass" : "fail",
      detail: supabaseUrl ? supabaseUrl : "Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL",
    },
    {
      id: "supabase_anon_key",
      label: "Supabase Anon Key",
      status: supabaseAnon ? "pass" : "fail",
      detail: supabaseAnon ? "Present" : "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY/EXPO_PUBLIC_SUPABASE_KEY",
    },
    {
      id: "supabase_service_role_key",
      label: "Supabase Service Role Key",
      status: supabaseService ? "pass" : "warn",
      detail: supabaseService ? "Present" : "Missing (admin APIs requiring service role will fail)",
    },
    {
      id: "billing_provider_mode",
      label: "Billing Provider Mode",
      status: ["stripe_external", "app_store_iap"].includes(billingMode) ? "pass" : "warn",
      detail: billingMode || "Missing (defaults to stripe_external in code)",
    },
    buildStripeCheck({
      billingModeRaw: billingMode,
      stripeSecret,
      stripeWebhook,
      isProduction: runtime.isProduction,
    }),
    {
      id: "parent_consent_email",
      label: "Parent Consent Email",
      status: resendApiKey && consentFromEmail ? "pass" : "warn",
      detail:
        resendApiKey && consentFromEmail
          ? "Resend + sender configured"
          : "Missing RESEND_API_KEY or PARENT_CONSENT_FROM_EMAIL (falls back to local simulation link)",
    },
    {
      id: "parent_consent_token_secret",
      label: "Parent Consent Token Secret",
      status: consentTokenSecret.length >= 16 ? "pass" : "warn",
      detail:
        consentTokenSecret.length >= 16
          ? "Configured"
          : "Missing/short (verification link signing may be weaker or disabled)",
    },
    {
      id: "mixpanel_token",
      label: "Mixpanel Token",
      status: mixpanel ? "pass" : "warn",
      detail: mixpanel ? "Present" : "Missing (analytics disabled)",
    },
  ];

  const totals = {
    pass: checks.filter((check) => check.status === "pass").length,
    warn: checks.filter((check) => check.status === "warn").length,
    fail: checks.filter((check) => check.status === "fail").length,
    total: checks.length,
  };

  return {
    generatedAt: new Date().toISOString(),
    healthy: totals.fail === 0,
    degraded: totals.warn > 0,
    runtime,
    totals,
    checks,
  };
}
