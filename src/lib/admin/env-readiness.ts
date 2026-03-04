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
  const ownerSecurityEncryption = readEnvValue("OWNER_SECURITY_ENCRYPTION_KEY");
  const ownerFactoryResetHash = readEnvValue("OWNER_FACTORY_RESET_PASSWORD_HASH");
  const ownerTransferHash = readEnvValue("OWNER_TRANSFER_PASSWORD_HASH");
  const yubicoClientId = readEnvValue("YUBICO_CLIENT_ID");
  const yubicoSecret = readEnvValue("YUBICO_SECRET_KEY");
  const supportEmail = readEnvValue("SUPPORT_EMAIL");
  const supportEmergencyPhone = readEnvValue("SUPPORT_EMERGENCY_PHONE");
  const parentSlaHoursRaw = readEnvValue("PARENT_PORTAL_PAID_RESPONSE_SLA_HOURS");
  const complianceEvidenceProvider = readEnvValue("COMPLIANCE_EVIDENCE_STORAGE_PROVIDER");
  const openaiApiKey = readEnvValue("OPENAI_API_KEY");
  const grokApiKey = readEnvValue("GROK_API_KEY");
  const anthropicApiKey = readEnvValue("ANTHROPIC_API_KEY");
  const geminiApiKey = readEnvValue("GEMINI_API_KEY");
  const moderationMinModelsRaw = readEnvValue("MODERATION_CONSENSUS_MIN_MODELS");
  const twilioAccountSid = readEnvValue("TWILIO_ACCOUNT_SID");
  const twilioAuthToken = readEnvValue("TWILIO_AUTH_TOKEN");
  const twilioFromNumber = readEnvValue("TWILIO_FROM_NUMBER");
  const parentSecurityEncryption = readEnvValue("PARENT_SECURITY_ENCRYPTION_KEY");
  const runtime = resolveRuntimeEnvironment();
  const parentSlaHours = Number(parentSlaHoursRaw);
  const moderationMinModels = Number(moderationMinModelsRaw);
  const configuredModerationModels = [
    openaiApiKey,
    grokApiKey,
    anthropicApiKey,
    geminiApiKey,
  ].filter((value) => Boolean(value)).length;

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
    {
      id: "owner_security_encryption_key",
      label: "Owner Security Encryption Key",
      status: ownerSecurityEncryption.length >= 16 ? "pass" : "warn",
      detail:
        ownerSecurityEncryption.length >= 16
          ? "Configured"
          : "Missing/short (owner TOTP provisioning and secret encryption disabled)",
    },
    {
      id: "parent_security_encryption_key",
      label: "Parent Security Encryption Key",
      status:
        parentSecurityEncryption.length >= 16 || ownerSecurityEncryption.length >= 16
          ? "pass"
          : "warn",
      detail:
        parentSecurityEncryption.length >= 16
          ? "Configured"
          : ownerSecurityEncryption.length >= 16
            ? "Using OWNER_SECURITY_ENCRYPTION_KEY fallback"
            : "Missing/short (parent authenticator factor encryption disabled)",
    },
    {
      id: "owner_factory_reset_password_hash",
      label: "Owner Factory Reset Password Hash",
      status: ownerFactoryResetHash ? "pass" : "warn",
      detail:
        ownerFactoryResetHash
          ? "Configured"
          : "Missing (factory reset endpoint remains locked)",
    },
    {
      id: "owner_transfer_password_hash",
      label: "Owner Transfer Password Hash",
      status: ownerTransferHash || ownerFactoryResetHash ? "pass" : "warn",
      detail:
        ownerTransferHash || ownerFactoryResetHash
          ? "Configured (explicit or factory-reset fallback)"
          : "Missing (ownership transfer execution endpoint remains locked)",
    },
    {
      id: "owner_yubikey_config",
      label: "Owner YubiKey Config",
      status: yubicoClientId ? (yubicoSecret ? "pass" : "warn") : "warn",
      detail:
        yubicoClientId
          ? yubicoSecret
            ? "YubiKey OTP verification + response signature validation configured"
            : "Client ID configured without YUBICO_SECRET_KEY (verification works without signed-response validation)"
          : "Missing YUBICO_CLIENT_ID (YubiKey OTP factor unavailable)",
    },
    {
      id: "support_email",
      label: "Support Contact Email",
      status: supportEmail ? "pass" : "warn",
      detail: supportEmail || "Missing SUPPORT_EMAIL (falls back to app defaults).",
    },
    {
      id: "support_emergency_phone",
      label: "Emergency Support Phone",
      status: supportEmergencyPhone.replace(/[^0-9]/g, "").length >= 7 ? "pass" : "warn",
      detail:
        supportEmergencyPhone.replace(/[^0-9]/g, "").length >= 7
          ? supportEmergencyPhone
          : "Missing/invalid SUPPORT_EMERGENCY_PHONE.",
    },
    {
      id: "parent_portal_paid_response_sla_hours",
      label: "Parent Paid SLA Hours",
      status: Number.isFinite(parentSlaHours) && parentSlaHours >= 1 && parentSlaHours <= 168 ? "pass" : "warn",
      detail:
        Number.isFinite(parentSlaHours) && parentSlaHours >= 1 && parentSlaHours <= 168
          ? `${Math.trunc(parentSlaHours)} hour(s)`
          : "Missing/invalid PARENT_PORTAL_PAID_RESPONSE_SLA_HOURS (expected 1-168).",
    },
    {
      id: "compliance_evidence_storage_provider",
      label: "Compliance Evidence Storage Provider",
      status: ["supabase_storage", "google_vault_export", "external_archive", "inline"].includes(complianceEvidenceProvider)
        ? "pass"
        : "warn",
      detail: complianceEvidenceProvider || "Missing COMPLIANCE_EVIDENCE_STORAGE_PROVIDER.",
    },
    {
      id: "moderation_model_quorum",
      label: "Moderation Model Quorum",
      status:
        configuredModerationModels >= (Number.isFinite(moderationMinModels) ? Math.max(2, Math.min(4, Math.trunc(moderationMinModels))) : 2)
          ? "pass"
          : runtime.isProduction
            ? "fail"
            : "warn",
      detail:
        `Configured ${configuredModerationModels} model key(s): OpenAI, Grok, Claude, Gemini.`
        + " Consensus requires at least MODERATION_CONSENSUS_MIN_MODELS.",
    },
    {
      id: "sms_delivery_provider",
      label: "SMS Delivery Provider",
      status: twilioAccountSid && twilioAuthToken && twilioFromNumber ? "pass" : "warn",
      detail:
        twilioAccountSid && twilioAuthToken && twilioFromNumber
          ? "Twilio SMS delivery is configured."
          : "Missing TWILIO_ACCOUNT_SID/TWILIO_AUTH_TOKEN/TWILIO_FROM_NUMBER (SMS challenge falls back to simulation).",
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
