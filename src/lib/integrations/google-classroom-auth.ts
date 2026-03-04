import crypto from "node:crypto";
import type { SupabaseClient } from "@supabase/supabase-js";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const GOOGLE_CLASSROOM_RUNTIME_APP_SETTINGS_KEY = "google_classroom_service_account_runtime";

export type GoogleClassroomAuthRuntimeConfig = {
  source: "env" | "app_settings";
  syncEnabled: boolean;
  serviceAccountJson: string | null;
  serviceAccountEmail: string | null;
  serviceAccountPrivateKey: string | null;
  impersonationEmail: string | null;
  tokenUrl: string;
  apiBaseUrl: string;
};

export type GoogleServiceAccountCredentials = {
  clientEmail: string;
  privateKey: string;
  tokenUrl: string;
  apiBaseUrl: string;
  impersonationEmail: string | null;
};

const runtimeSettingsSchema = z
  .object({
    syncEnabled: z.union([z.boolean(), z.string(), z.number()]).optional(),
    serviceAccountJson: z.string().min(10).optional(),
    serviceAccountEmail: z.string().email().optional(),
    serviceAccountPrivateKey: z.string().min(20).optional(),
    impersonationEmail: z.string().email().optional(),
    tokenUrl: z.string().url().optional(),
    apiBaseUrl: z.string().url().optional(),
  })
  .partial();

let runtimeCache:
  | {
    expiresAtMs: number;
    value: GoogleClassroomAuthRuntimeConfig;
  }
  | null = null;

let accessTokenCache:
  | {
    keyFingerprint: string;
    accessToken: string;
    expiresAtMs: number;
  }
  | null = null;

function normalizePrivateKey(value: string | null | undefined) {
  if (!value) return null;
  const normalized = value.replace(/\\n/g, "\n").trim();
  return normalized.length > 0 ? normalized : null;
}

function parseBooleanLike(value: unknown) {
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value > 0;
  if (typeof value !== "string") return null;
  const normalized = value.trim().toLowerCase();
  if (["1", "true", "yes", "on", "enabled"].includes(normalized)) return true;
  if (["0", "false", "no", "off", "disabled"].includes(normalized)) return false;
  return null;
}

function parseInlineServiceAccountJson(raw: string | null | undefined) {
  if (!raw || !raw.trim()) return null;

  try {
    const parsed = JSON.parse(raw) as {
      client_email?: string;
      private_key?: string;
      token_uri?: string;
    };

    const clientEmail = typeof parsed.client_email === "string" ? parsed.client_email.trim() : "";
    const privateKey = normalizePrivateKey(parsed.private_key);
    const tokenUrl = typeof parsed.token_uri === "string" ? parsed.token_uri.trim() : "";

    if (!clientEmail || !privateKey) return null;

    return {
      clientEmail,
      privateKey,
      tokenUrl,
    };
  } catch {
    return null;
  }
}

function buildEnvRuntimeConfig(): GoogleClassroomAuthRuntimeConfig {
  return {
    source: "env",
    syncEnabled: serverEnv.GOOGLE_CLASSROOM_SYNC_ENABLED,
    serviceAccountJson: serverEnv.GOOGLE_CLASSROOM_SERVICE_ACCOUNT_JSON?.trim() || null,
    serviceAccountEmail: serverEnv.GOOGLE_CLASSROOM_SERVICE_ACCOUNT_EMAIL?.trim() || null,
    serviceAccountPrivateKey: normalizePrivateKey(serverEnv.GOOGLE_CLASSROOM_SERVICE_ACCOUNT_PRIVATE_KEY),
    impersonationEmail: serverEnv.GOOGLE_CLASSROOM_IMPERSONATION_EMAIL?.trim() || null,
    tokenUrl: serverEnv.GOOGLE_CLASSROOM_TOKEN_URL,
    apiBaseUrl: serverEnv.GOOGLE_CLASSROOM_API_BASE_URL.replace(/\/+$/, ""),
  };
}

function withSettingsOverrides(
  base: GoogleClassroomAuthRuntimeConfig,
  rawValue: unknown,
): GoogleClassroomAuthRuntimeConfig {
  const parsed = runtimeSettingsSchema.safeParse(rawValue);
  if (!parsed.success) {
    return base;
  }

  const next: GoogleClassroomAuthRuntimeConfig = {
    ...base,
    source: "app_settings",
  };

  const syncEnabled = parseBooleanLike(parsed.data.syncEnabled);
  if (syncEnabled !== null) {
    next.syncEnabled = syncEnabled;
  }

  if (parsed.data.serviceAccountJson?.trim()) {
    next.serviceAccountJson = parsed.data.serviceAccountJson.trim();
  }
  if (parsed.data.serviceAccountEmail?.trim()) {
    next.serviceAccountEmail = parsed.data.serviceAccountEmail.trim();
  }
  if (parsed.data.serviceAccountPrivateKey?.trim()) {
    next.serviceAccountPrivateKey = normalizePrivateKey(parsed.data.serviceAccountPrivateKey);
  }
  if (parsed.data.impersonationEmail?.trim()) {
    next.impersonationEmail = parsed.data.impersonationEmail.trim();
  }
  if (parsed.data.tokenUrl?.trim()) {
    next.tokenUrl = parsed.data.tokenUrl.trim();
  }
  if (parsed.data.apiBaseUrl?.trim()) {
    next.apiBaseUrl = parsed.data.apiBaseUrl.replace(/\/+$/, "");
  }

  return next;
}

function hasAdminDbAccess() {
  return Boolean(serverEnv.NEXT_PUBLIC_SUPABASE_URL && serverEnv.SUPABASE_SERVICE_ROLE_KEY);
}

export async function getGoogleClassroomAuthRuntimeConfig(options?: {
  forceRefresh?: boolean;
  cacheTtlMs?: number;
  adminClient?: SupabaseClient;
}): Promise<GoogleClassroomAuthRuntimeConfig> {
  const forceRefresh = Boolean(options?.forceRefresh);
  const cacheTtlMs = Math.max(1_000, options?.cacheTtlMs ?? 60_000);
  const nowMs = Date.now();

  if (!forceRefresh && runtimeCache && runtimeCache.expiresAtMs > nowMs) {
    return runtimeCache.value;
  }

  let runtimeConfig = buildEnvRuntimeConfig();

  if (hasAdminDbAccess()) {
    try {
      const admin = options?.adminClient ?? createSupabaseAdminClient();
      const { data, error } = await admin
        .from("app_settings")
        .select("value")
        .eq("key", GOOGLE_CLASSROOM_RUNTIME_APP_SETTINGS_KEY)
        .maybeSingle();

      if (error) {
        console.error("Failed to load Google Classroom runtime config from app_settings.", toSafeErrorRecord(error));
      } else if (data && typeof data.value !== "undefined") {
        runtimeConfig = withSettingsOverrides(runtimeConfig, data.value);
      }
    } catch (error) {
      console.error("Unexpected Google Classroom runtime config load failure.", toSafeErrorRecord(error));
    }
  }

  runtimeCache = {
    value: runtimeConfig,
    expiresAtMs: nowMs + cacheTtlMs,
  };

  return runtimeConfig;
}

export function clearGoogleClassroomAuthRuntimeCache() {
  runtimeCache = null;
}

export function resolveGoogleServiceAccountCredentials(
  runtimeConfig: GoogleClassroomAuthRuntimeConfig,
): GoogleServiceAccountCredentials | null {
  const inlineCredentials = parseInlineServiceAccountJson(runtimeConfig.serviceAccountJson);
  if (inlineCredentials) {
    return {
      clientEmail: inlineCredentials.clientEmail,
      privateKey: inlineCredentials.privateKey,
      tokenUrl: inlineCredentials.tokenUrl || runtimeConfig.tokenUrl,
      apiBaseUrl: runtimeConfig.apiBaseUrl,
      impersonationEmail: runtimeConfig.impersonationEmail,
    };
  }

  if (!runtimeConfig.serviceAccountEmail || !runtimeConfig.serviceAccountPrivateKey) {
    return null;
  }

  return {
    clientEmail: runtimeConfig.serviceAccountEmail,
    privateKey: runtimeConfig.serviceAccountPrivateKey,
    tokenUrl: runtimeConfig.tokenUrl,
    apiBaseUrl: runtimeConfig.apiBaseUrl,
    impersonationEmail: runtimeConfig.impersonationEmail,
  };
}

function buildCredentialFingerprint(credentials: GoogleServiceAccountCredentials) {
  return crypto
    .createHash("sha256")
    .update(`${credentials.clientEmail}|${credentials.tokenUrl}|${credentials.apiBaseUrl}`)
    .digest("hex");
}

function toBase64Url(input: Buffer | string) {
  const value = typeof input === "string" ? Buffer.from(input, "utf8") : input;
  return value
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

async function mintServiceAccountAccessToken(credentials: GoogleServiceAccountCredentials) {
  const nowSeconds = Math.floor(Date.now() / 1000);
  const keyFingerprint = buildCredentialFingerprint(credentials);

  if (
    accessTokenCache
    && accessTokenCache.keyFingerprint === keyFingerprint
    && accessTokenCache.expiresAtMs > Date.now() + 60_000
  ) {
    return accessTokenCache.accessToken;
  }

  const header = toBase64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = {
    iss: credentials.clientEmail,
    scope: "https://www.googleapis.com/auth/classroom.coursework.students",
    aud: credentials.tokenUrl,
    iat: nowSeconds,
    exp: nowSeconds + 3600,
    ...(credentials.impersonationEmail ? { sub: credentials.impersonationEmail } : {}),
  };

  const payloadBase64 = toBase64Url(JSON.stringify(payload));
  const unsigned = `${header}.${payloadBase64}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = signer.sign(credentials.privateKey);
  const assertion = `${unsigned}.${toBase64Url(signature)}`;

  const tokenResponse = await fetch(credentials.tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  const tokenBody = (await tokenResponse.json().catch(() => null)) as
    | { access_token?: string; expires_in?: number; error?: string; error_description?: string }
    | null;

  if (!tokenResponse.ok || !tokenBody?.access_token) {
    const reason = tokenBody?.error_description ?? tokenBody?.error ?? "token_exchange_failed";
    throw new Error(`Google token exchange failed (${tokenResponse.status}): ${reason}`);
  }

  const expiresInSeconds = Number(tokenBody.expires_in ?? 3600);
  accessTokenCache = {
    keyFingerprint,
    accessToken: tokenBody.access_token,
    expiresAtMs: Date.now() + Math.max(300, expiresInSeconds - 30) * 1000,
  };

  return accessTokenCache.accessToken;
}

export async function getGoogleClassroomServiceAccountAccessToken(options?: {
  forceRefresh?: boolean;
  runtimeConfig?: GoogleClassroomAuthRuntimeConfig;
}) {
  if (options?.forceRefresh) {
    accessTokenCache = null;
  }

  const runtimeConfig = options?.runtimeConfig ?? (await getGoogleClassroomAuthRuntimeConfig());
  const credentials = resolveGoogleServiceAccountCredentials(runtimeConfig);

  if (!runtimeConfig.syncEnabled || !credentials) {
    return {
      ok: false as const,
      error: "google_classroom_not_configured",
    };
  }

  const accessToken = await mintServiceAccountAccessToken(credentials);
  return {
    ok: true as const,
    accessToken,
    credentials,
  };
}

export async function isGoogleClassroomRuntimeConfigured() {
  const runtimeConfig = await getGoogleClassroomAuthRuntimeConfig();
  return runtimeConfig.syncEnabled && Boolean(resolveGoogleServiceAccountCredentials(runtimeConfig));
}
