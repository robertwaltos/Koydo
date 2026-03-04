import { randomBytes } from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";
import { sendOwnerSecurityChallengeEmail } from "@/lib/email/owner-security-email";
import { serverEnv } from "@/lib/config/env";
import { decryptSecret, encryptSecret, hashSha256Hex, timingSafeHashCompare } from "@/lib/security/secret-crypto";
import { buildTotpUri, generateTotpSecret, verifyTotpCode } from "@/lib/security/totp";
import { verifyYubikeyOtp } from "@/lib/security/yubikey";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export const OWNER_STEP_UP_COOKIE_NAME = "koydo_owner_step_up";

const EMAIL_CHALLENGE_EXPIRY_MINUTES = 10;
const EMAIL_CHALLENGE_LENGTH = 6;
const OWNER_STEP_UP_SCOPE_FALLBACK = "owner_console";
const OWNER_STEP_UP_SCOPES = new Set([
  "owner_console",
  "factory_reset",
  "ownership_transfer",
  "security_admin",
]);

type OwnerFactorType = "totp" | "secondary_email" | "yubikey_otp";

type OwnerFactorRow = {
  id: string;
  factor_type: OwnerFactorType;
  label: string | null;
  secret_encrypted: string | null;
  email_address: string | null;
  yubikey_public_id: string | null;
  verified_at: string | null;
  disabled_at: string | null;
  last_used_at: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

type ChallengeRow = {
  id: string;
  factor_id: string | null;
  challenge_type: "secondary_email";
  code_hash: string;
  attempt_count: number;
  max_attempts: number;
  expires_at: string;
  consumed_at: string | null;
  metadata: Record<string, unknown> | null;
};

type StepUpRow = {
  id: string;
  scope: string;
  factor_type: OwnerFactorType;
  expires_at: string;
  revoked_at: string | null;
};

type IssueStepUpResult = {
  token: string;
  expiresAt: string;
  scope: string;
  factorType: OwnerFactorType;
};

export type OwnerSecurityStatus = {
  ownerConfigured: boolean;
  factors: Array<{
    id: string;
    factorType: OwnerFactorType;
    label: string | null;
    emailAddress: string | null;
    yubikeyPublicId: string | null;
    verifiedAt: string | null;
    lastUsedAt: string | null;
    createdAt: string;
  }>;
  activeStepUpSessions: Array<{
    id: string;
    scope: string;
    factorType: OwnerFactorType;
    expiresAt: string;
  }>;
  recentEvents: Array<{
    id: string;
    eventType: string;
    factorType: OwnerFactorType | null;
    severity: "info" | "warning" | "critical";
    createdAt: string;
  }>;
};

function normalizeScope(scope: string) {
  return OWNER_STEP_UP_SCOPES.has(scope) ? scope : OWNER_STEP_UP_SCOPE_FALLBACK;
}

function normalizeCode(code: string) {
  return code.replace(/[^0-9]/g, "");
}

function ownerStepUpTtlMinutes() {
  const configured = serverEnv.OWNER_STEP_UP_SESSION_TTL_MINUTES;
  if (typeof configured === "number" && Number.isFinite(configured)) {
    return Math.max(5, Math.min(120, Math.trunc(configured)));
  }
  return 20;
}

function ownerChallengePepper() {
  return serverEnv.OWNER_SECURITY_CODE_PEPPER || serverEnv.OWNER_SECURITY_ENCRYPTION_KEY || "";
}

function ownerEncryptionKey() {
  const key = serverEnv.OWNER_SECURITY_ENCRYPTION_KEY;
  if (!key || key.length < 16) {
    throw new Error(
      "OWNER_SECURITY_ENCRYPTION_KEY must be configured with at least 16 characters for owner MFA.",
    );
  }
  return key;
}

function ownerSecurityIssuer() {
  return serverEnv.OWNER_SECURITY_ISSUER?.trim() || "Koydo Owner Console";
}

function buildChallengeHash(code: string, salt: string) {
  const pepper = ownerChallengePepper();
  return hashSha256Hex(`${code}:${salt}:${pepper}`);
}

function randomNumericCode(length: number) {
  const digits = "0123456789";
  let code = "";
  const bytes = randomBytes(length);
  for (const byte of bytes) {
    code += digits[byte % 10] ?? "0";
  }
  return code.slice(0, length);
}

function nowIso() {
  return new Date().toISOString();
}

function asRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return value as Record<string, unknown>;
}

function cookieSecure() {
  const runtime = (process.env.APP_ENV || process.env.VERCEL_ENV || process.env.NODE_ENV || "").toLowerCase();
  return runtime === "production";
}

export function applyOwnerStepUpCookie(response: NextResponse, session: IssueStepUpResult) {
  const expires = new Date(session.expiresAt);
  response.cookies.set(OWNER_STEP_UP_COOKIE_NAME, session.token, {
    httpOnly: true,
    sameSite: "strict",
    secure: cookieSecure(),
    path: "/",
    expires,
  });
}

export function clearOwnerStepUpCookie(response: NextResponse) {
  response.cookies.set(OWNER_STEP_UP_COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "strict",
    secure: cookieSecure(),
    path: "/",
    maxAge: 0,
  });
}

async function logOwnerSecurityEvent({
  admin,
  userId,
  eventType,
  factorType,
  severity = "info",
  metadata = {},
}: {
  admin: SupabaseClient;
  userId: string;
  eventType: string;
  factorType?: OwnerFactorType | null;
  severity?: "info" | "warning" | "critical";
  metadata?: Record<string, unknown>;
}) {
  try {
    await admin.from("owner_security_events").insert({
      user_id: userId,
      event_type: eventType,
      factor_type: factorType ?? null,
      severity,
      metadata,
    });
  } catch (error) {
    console.error("Failed to log owner security event.", toSafeErrorRecord(error));
  }
}

async function getActiveFactor(
  admin: SupabaseClient,
  userId: string,
  factorType: OwnerFactorType,
): Promise<OwnerFactorRow | null> {
  const { data, error } = await admin
    .from("owner_security_factors")
    .select(
      "id,factor_type,label,secret_encrypted,email_address,yubikey_public_id,verified_at,disabled_at,last_used_at,metadata,created_at",
    )
    .eq("user_id", userId)
    .eq("factor_type", factorType)
    .is("disabled_at", null)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle<OwnerFactorRow>();

  if (error) {
    throw new Error(error.message);
  }
  return data ?? null;
}

async function issueStepUpSession({
  admin,
  userId,
  scope,
  factorType,
  metadata = {},
}: {
  admin: SupabaseClient;
  userId: string;
  scope: string;
  factorType: OwnerFactorType;
  metadata?: Record<string, unknown>;
}): Promise<IssueStepUpResult> {
  const normalizedScope = normalizeScope(scope);
  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashSha256Hex(token);
  const expiresAtDate = new Date(Date.now() + ownerStepUpTtlMinutes() * 60 * 1000);
  const expiresAt = expiresAtDate.toISOString();

  const { error } = await admin.from("owner_step_up_sessions").insert({
    user_id: userId,
    scope: normalizedScope,
    factor_type: factorType,
    token_hash: tokenHash,
    expires_at: expiresAt,
    metadata,
  });
  if (error) {
    throw new Error(error.message);
  }

  await logOwnerSecurityEvent({
    admin,
    userId,
    eventType: "owner_step_up_issued",
    factorType,
    metadata: { scope: normalizedScope, expiresAt },
  });

  return { token, expiresAt, scope: normalizedScope, factorType };
}

export async function validateOwnerStepUpSession(userId: string, requiredScope: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get(OWNER_STEP_UP_COOKIE_NAME)?.value?.trim();
  if (!token) {
    return { valid: false as const, reason: "missing_cookie" };
  }

  const tokenHash = hashSha256Hex(token);
  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("owner_step_up_sessions")
    .select("id, scope, factor_type, expires_at, revoked_at")
    .eq("user_id", userId)
    .eq("token_hash", tokenHash)
    .limit(1)
    .maybeSingle<StepUpRow>();

  if (error || !data) {
    return { valid: false as const, reason: "session_not_found" };
  }
  if (data.revoked_at) {
    return { valid: false as const, reason: "session_revoked" };
  }
  if (new Date(data.expires_at).getTime() <= Date.now()) {
    return { valid: false as const, reason: "session_expired" };
  }

  const normalizedRequiredScope = normalizeScope(requiredScope);
  if (!(data.scope === normalizedRequiredScope || data.scope === OWNER_STEP_UP_SCOPE_FALLBACK)) {
    return { valid: false as const, reason: "scope_mismatch" };
  }

  void admin
    .from("owner_step_up_sessions")
    .update({ last_used_at: nowIso() })
    .eq("id", data.id);

  return {
    valid: true as const,
    sessionId: data.id,
    factorType: data.factor_type,
    scope: data.scope,
    expiresAt: data.expires_at,
  };
}

export async function revokeOwnerStepUpSessions(admin: SupabaseClient, userId: string, scope?: string) {
  const query = admin
    .from("owner_step_up_sessions")
    .update({ revoked_at: nowIso() })
    .eq("user_id", userId)
    .is("revoked_at", null);
  if (scope) {
    const normalized = normalizeScope(scope);
    await query.eq("scope", normalized);
    return;
  }
  await query;
}

export async function getOwnerSecurityStatus(admin: SupabaseClient, userId: string): Promise<OwnerSecurityStatus> {
  const [factorsResult, stepUpResult, eventsResult] = await Promise.all([
    admin
      .from("owner_security_factors")
      .select(
        "id,factor_type,label,email_address,yubikey_public_id,verified_at,last_used_at,created_at,disabled_at",
      )
      .eq("user_id", userId)
      .is("disabled_at", null)
      .order("created_at", { ascending: false }),
    admin
      .from("owner_step_up_sessions")
      .select("id,scope,factor_type,expires_at,revoked_at")
      .eq("user_id", userId)
      .is("revoked_at", null)
      .order("expires_at", { ascending: false })
      .limit(10),
    admin
      .from("owner_security_events")
      .select("id,event_type,factor_type,severity,created_at")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(15),
  ]);

  if (factorsResult.error) throw new Error(factorsResult.error.message);
  if (stepUpResult.error) throw new Error(stepUpResult.error.message);
  if (eventsResult.error) throw new Error(eventsResult.error.message);

  const now = Date.now();
  const activeSessions = (stepUpResult.data ?? []).filter((row) => {
    if (row.revoked_at) return false;
    return new Date(row.expires_at).getTime() > now;
  });

  return {
    ownerConfigured: (factorsResult.data ?? []).some((factor) => factor.verified_at),
    factors: (factorsResult.data ?? []).map((factor) => ({
      id: factor.id,
      factorType: factor.factor_type as OwnerFactorType,
      label: factor.label ?? null,
      emailAddress: factor.email_address ?? null,
      yubikeyPublicId: factor.yubikey_public_id ?? null,
      verifiedAt: factor.verified_at ?? null,
      lastUsedAt: factor.last_used_at ?? null,
      createdAt: factor.created_at,
    })),
    activeStepUpSessions: activeSessions.map((session) => ({
      id: session.id,
      scope: session.scope,
      factorType: session.factor_type as OwnerFactorType,
      expiresAt: session.expires_at,
    })),
    recentEvents: (eventsResult.data ?? []).map((event) => ({
      id: event.id,
      eventType: event.event_type,
      factorType: (event.factor_type as OwnerFactorType | null) ?? null,
      severity: event.severity as "info" | "warning" | "critical",
      createdAt: event.created_at,
    })),
  };
}

export async function provisionOwnerTotpFactor({
  admin,
  userId,
  ownerEmail,
  label,
}: {
  admin: SupabaseClient;
  userId: string;
  ownerEmail: string | null;
  label?: string | null;
}) {
  const totpSecret = generateTotpSecret();
  const encryptedSecret = encryptSecret(totpSecret, ownerEncryptionKey());
  const factorLabel = label?.trim() ? label.trim().slice(0, 80) : "Authenticator App";

  const existing = await getActiveFactor(admin, userId, "totp");
  let factorId: string;
  if (existing) {
    const { error } = await admin
      .from("owner_security_factors")
      .update({
        label: factorLabel,
        secret_encrypted: encryptedSecret,
        verified_at: null,
        last_used_at: null,
        metadata: {},
      })
      .eq("id", existing.id);
    if (error) throw new Error(error.message);
    factorId = existing.id;
  } else {
    const { data, error } = await admin
      .from("owner_security_factors")
      .insert({
        user_id: userId,
        factor_type: "totp",
        label: factorLabel,
        secret_encrypted: encryptedSecret,
      })
      .select("id")
      .single();
    if (error || !data?.id) {
      throw new Error(error?.message ?? "Failed to create TOTP factor.");
    }
    factorId = data.id;
  }

  const uri = buildTotpUri({
    issuer: ownerSecurityIssuer(),
    accountName: ownerEmail ?? `owner-${userId.slice(0, 8)}`,
    secret: totpSecret,
  });

  await logOwnerSecurityEvent({
    admin,
    userId,
    eventType: "owner_totp_provisioned",
    factorType: "totp",
    metadata: { factorId },
  });

  return {
    factorId,
    secret: totpSecret,
    otpauthUri: uri,
  };
}

export async function verifyOwnerTotpAndIssueStepUp({
  admin,
  userId,
  code,
  scope,
}: {
  admin: SupabaseClient;
  userId: string;
  code: string;
  scope: string;
}) {
  const factor = await getActiveFactor(admin, userId, "totp");
  if (!factor || !factor.secret_encrypted) {
    throw new Error("No active TOTP factor is configured.");
  }
  const secret = decryptSecret(factor.secret_encrypted, ownerEncryptionKey());
  const valid = verifyTotpCode(secret, code);
  if (!valid) {
    await logOwnerSecurityEvent({
      admin,
      userId,
      eventType: "owner_totp_verification_failed",
      factorType: "totp",
      severity: "warning",
    });
    throw new Error("Authenticator code is invalid.");
  }

  const now = nowIso();
  await admin
    .from("owner_security_factors")
    .update({ verified_at: factor.verified_at ?? now, last_used_at: now })
    .eq("id", factor.id);

  const session = await issueStepUpSession({
    admin,
    userId,
    scope,
    factorType: "totp",
    metadata: { factorId: factor.id },
  });

  await logOwnerSecurityEvent({
    admin,
    userId,
    eventType: "owner_totp_verification_success",
    factorType: "totp",
    metadata: { scope: session.scope },
  });

  return session;
}

export async function configureSecondaryOwnerEmailFactor({
  admin,
  userId,
  email,
}: {
  admin: SupabaseClient;
  userId: string;
  email: string;
}) {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !normalizedEmail.includes("@")) {
    throw new Error("A valid secondary email is required.");
  }

  const existing = await getActiveFactor(admin, userId, "secondary_email");
  if (existing) {
    const { error } = await admin
      .from("owner_security_factors")
      .update({
        email_address: normalizedEmail,
        label: "Secondary Security Email",
      })
      .eq("id", existing.id);
    if (error) throw new Error(error.message);
    return { factorId: existing.id, email: normalizedEmail };
  }

  const { data, error } = await admin
    .from("owner_security_factors")
    .insert({
      user_id: userId,
      factor_type: "secondary_email",
      label: "Secondary Security Email",
      email_address: normalizedEmail,
      verified_at: nowIso(),
    })
    .select("id")
    .single();
  if (error || !data?.id) {
    throw new Error(error?.message ?? "Failed to configure secondary email factor.");
  }
  return { factorId: data.id, email: normalizedEmail };
}

export async function createOwnerEmailChallenge({
  admin,
  userId,
  scope,
  ownerEmail,
}: {
  admin: SupabaseClient;
  userId: string;
  scope: string;
  ownerEmail: string | null;
}) {
  const factor = await getActiveFactor(admin, userId, "secondary_email");
  if (!factor || !factor.email_address) {
    throw new Error("No secondary owner email factor is configured.");
  }

  const code = randomNumericCode(EMAIL_CHALLENGE_LENGTH);
  const salt = randomBytes(8).toString("hex");
  const codeHash = buildChallengeHash(code, salt);
  const expiresAt = new Date(Date.now() + EMAIL_CHALLENGE_EXPIRY_MINUTES * 60 * 1000).toISOString();
  const normalizedScope = normalizeScope(scope);

  const { data, error } = await admin
    .from("owner_security_challenges")
    .insert({
      user_id: userId,
      factor_id: factor.id,
      challenge_type: "secondary_email",
      code_hash: codeHash,
      expires_at: expiresAt,
      metadata: {
        scope: normalizedScope,
        salt,
      },
    })
    .select("id")
    .single();
  if (error || !data?.id) {
    throw new Error(error?.message ?? "Failed to create email challenge.");
  }

  const delivery = await sendOwnerSecurityChallengeEmail({
    toEmail: factor.email_address,
    code,
    expiresInMinutes: EMAIL_CHALLENGE_EXPIRY_MINUTES,
    ownerEmail,
  });

  await logOwnerSecurityEvent({
    admin,
    userId,
    eventType: "owner_email_challenge_created",
    factorType: "secondary_email",
    metadata: {
      challengeId: data.id,
      scope: normalizedScope,
      deliveryMode: delivery.mode,
      delivered: delivery.delivered,
    },
  });

  const debugCode =
    delivery.mode === "simulation" && process.env.NODE_ENV !== "production" ? code : undefined;

  return {
    challengeId: data.id,
    scope: normalizedScope,
    expiresAt,
    delivered: delivery.delivered,
    deliveryMode: delivery.mode,
    deliveryReason: delivery.reason,
    debugCode,
  };
}

export async function verifyOwnerEmailChallengeAndIssueStepUp({
  admin,
  userId,
  challengeId,
  code,
  scope,
}: {
  admin: SupabaseClient;
  userId: string;
  challengeId: string;
  code: string;
  scope: string;
}) {
  const { data, error } = await admin
    .from("owner_security_challenges")
    .select("id,factor_id,challenge_type,code_hash,attempt_count,max_attempts,expires_at,consumed_at,metadata")
    .eq("id", challengeId)
    .eq("user_id", userId)
    .maybeSingle<ChallengeRow>();
  if (error || !data) {
    throw new Error("Challenge was not found.");
  }
  if (data.consumed_at) {
    throw new Error("Challenge has already been used.");
  }
  if (new Date(data.expires_at).getTime() <= Date.now()) {
    throw new Error("Challenge has expired.");
  }
  if (data.attempt_count >= data.max_attempts) {
    throw new Error("Challenge has reached the maximum attempts.");
  }

  const metadata = asRecord(data.metadata);
  const challengeScopeRaw = metadata.scope;
  const challengeScope =
    typeof challengeScopeRaw === "string" ? normalizeScope(challengeScopeRaw) : OWNER_STEP_UP_SCOPE_FALLBACK;
  const requiredScope = normalizeScope(scope);
  if (!(challengeScope === requiredScope || challengeScope === OWNER_STEP_UP_SCOPE_FALLBACK)) {
    throw new Error("Challenge scope mismatch.");
  }

  const salt = typeof metadata.salt === "string" ? metadata.salt : "";
  const codeHash = buildChallengeHash(normalizeCode(code), salt);
  const codeMatched = timingSafeHashCompare(codeHash, data.code_hash);

  if (!codeMatched) {
    await admin
      .from("owner_security_challenges")
      .update({ attempt_count: data.attempt_count + 1 })
      .eq("id", data.id);
    await logOwnerSecurityEvent({
      admin,
      userId,
      eventType: "owner_email_challenge_failed",
      factorType: "secondary_email",
      severity: "warning",
      metadata: { challengeId: data.id },
    });
    throw new Error("Verification code is invalid.");
  }

  const consumedAt = nowIso();
  await admin
    .from("owner_security_challenges")
    .update({ consumed_at: consumedAt, attempt_count: data.attempt_count + 1 })
    .eq("id", data.id);

  if (data.factor_id) {
    await admin
      .from("owner_security_factors")
      .update({ last_used_at: consumedAt, verified_at: consumedAt })
      .eq("id", data.factor_id);
  }

  const session = await issueStepUpSession({
    admin,
    userId,
    scope: requiredScope,
    factorType: "secondary_email",
    metadata: { challengeId: data.id },
  });

  await logOwnerSecurityEvent({
    admin,
    userId,
    eventType: "owner_email_challenge_success",
    factorType: "secondary_email",
    metadata: { challengeId: data.id, scope: session.scope },
  });

  return session;
}

export async function registerOwnerYubikeyFactor({
  admin,
  userId,
  otp,
  label,
}: {
  admin: SupabaseClient;
  userId: string;
  otp: string;
  label?: string | null;
}) {
  const clientId = serverEnv.YUBICO_CLIENT_ID?.trim();
  if (!clientId) {
    throw new Error("YUBICO_CLIENT_ID is not configured.");
  }
  const verification = await verifyYubikeyOtp({
    otp,
    clientId,
    secretKey: serverEnv.YUBICO_SECRET_KEY ?? null,
  });
  if (!verification.valid || !verification.publicId) {
    throw new Error(verification.reason ?? "YubiKey OTP verification failed.");
  }

  const existingFactors = await admin
    .from("owner_security_factors")
    .select("id")
    .eq("user_id", userId)
    .eq("factor_type", "yubikey_otp")
    .eq("yubikey_public_id", verification.publicId)
    .is("disabled_at", null)
    .limit(1)
    .maybeSingle<{ id: string }>();

  const now = nowIso();
  const factorLabel = label?.trim() ? label.trim().slice(0, 80) : "YubiKey OTP";
  let factorId: string;

  if (existingFactors.error) {
    throw new Error(existingFactors.error.message);
  }
  if (existingFactors.data) {
    factorId = existingFactors.data.id;
    await admin
      .from("owner_security_factors")
      .update({
        label: factorLabel,
        verified_at: now,
        last_used_at: now,
      })
      .eq("id", factorId);
  } else {
    const insertResult = await admin
      .from("owner_security_factors")
      .insert({
        user_id: userId,
        factor_type: "yubikey_otp",
        label: factorLabel,
        yubikey_public_id: verification.publicId,
        verified_at: now,
        last_used_at: now,
      })
      .select("id")
      .single();

    if (insertResult.error || !insertResult.data?.id) {
      throw new Error(insertResult.error?.message ?? "Failed to register YubiKey factor.");
    }
    factorId = insertResult.data.id;
  }

  await logOwnerSecurityEvent({
    admin,
    userId,
    eventType: "owner_yubikey_registered",
    factorType: "yubikey_otp",
    metadata: { factorId, publicId: verification.publicId },
  });

  return { factorId, publicId: verification.publicId };
}

export async function verifyOwnerYubikeyAndIssueStepUp({
  admin,
  userId,
  otp,
  scope,
}: {
  admin: SupabaseClient;
  userId: string;
  otp: string;
  scope: string;
}) {
  const clientId = serverEnv.YUBICO_CLIENT_ID?.trim();
  if (!clientId) {
    throw new Error("YUBICO_CLIENT_ID is not configured.");
  }

  const verification = await verifyYubikeyOtp({
    otp,
    clientId,
    secretKey: serverEnv.YUBICO_SECRET_KEY ?? null,
  });
  if (!verification.valid || !verification.publicId) {
    await logOwnerSecurityEvent({
      admin,
      userId,
      eventType: "owner_yubikey_verification_failed",
      factorType: "yubikey_otp",
      severity: "warning",
      metadata: { status: verification.status },
    });
    throw new Error(verification.reason ?? "YubiKey OTP verification failed.");
  }

  const factorLookup = await admin
    .from("owner_security_factors")
    .select("id, verified_at")
    .eq("user_id", userId)
    .eq("factor_type", "yubikey_otp")
    .eq("yubikey_public_id", verification.publicId)
    .is("disabled_at", null)
    .limit(1)
    .maybeSingle<{ id: string; verified_at: string | null }>();
  if (factorLookup.error || !factorLookup.data) {
    throw new Error("YubiKey is not registered for this owner.");
  }

  const now = nowIso();
  await admin
    .from("owner_security_factors")
    .update({ last_used_at: now, verified_at: factorLookup.data.verified_at ?? now })
    .eq("id", factorLookup.data.id);

  const session = await issueStepUpSession({
    admin,
    userId,
    scope,
    factorType: "yubikey_otp",
    metadata: { publicId: verification.publicId, factorId: factorLookup.data.id },
  });

  await logOwnerSecurityEvent({
    admin,
    userId,
    eventType: "owner_yubikey_verification_success",
    factorType: "yubikey_otp",
    metadata: { scope: session.scope, publicId: verification.publicId },
  });

  return session;
}

export function verifyOwnerActionPassword(inputPassword: string, expectedHash: string | undefined) {
  const normalizedExpected = (expectedHash ?? "").trim();
  if (!normalizedExpected) return false;
  const expectedHex = normalizedExpected.startsWith("sha256:")
    ? normalizedExpected.slice("sha256:".length)
    : normalizedExpected;
  if (!/^[0-9a-f]{64}$/i.test(expectedHex)) {
    return false;
  }
  const candidateHex = hashSha256Hex(inputPassword);
  return timingSafeHashCompare(candidateHex, expectedHex);
}

export function ensureFactoryResetPasswordConfigured() {
  if (!(serverEnv.OWNER_FACTORY_RESET_PASSWORD_HASH ?? "").trim()) {
    throw new Error(
      "OWNER_FACTORY_RESET_PASSWORD_HASH is not configured. Set this to a sha256 hash before running factory reset.",
    );
  }
}

export function ensureOwnerTransferPasswordConfigured() {
  if ((serverEnv.OWNER_TRANSFER_PASSWORD_HASH ?? "").trim()) {
    return;
  }
  if (!(serverEnv.OWNER_FACTORY_RESET_PASSWORD_HASH ?? "").trim()) {
    throw new Error(
      "OWNER_TRANSFER_PASSWORD_HASH (or OWNER_FACTORY_RESET_PASSWORD_HASH fallback) must be configured.",
    );
  }
}

export function ensureOwnerPayoutApprovalPasswordConfigured() {
  if ((serverEnv.OWNER_PAYOUT_APPROVAL_PASSWORD_HASH ?? "").trim()) {
    return;
  }
  if ((serverEnv.OWNER_TRANSFER_PASSWORD_HASH ?? "").trim()) {
    return;
  }
  if (!(serverEnv.OWNER_FACTORY_RESET_PASSWORD_HASH ?? "").trim()) {
    throw new Error(
      "OWNER_PAYOUT_APPROVAL_PASSWORD_HASH (or OWNER_TRANSFER_PASSWORD_HASH / OWNER_FACTORY_RESET_PASSWORD_HASH fallback) must be configured.",
    );
  }
}

export function getExpectedPayoutApprovalPasswordHash() {
  return (serverEnv.OWNER_PAYOUT_APPROVAL_PASSWORD_HASH ?? "").trim()
    || (serverEnv.OWNER_TRANSFER_PASSWORD_HASH ?? "").trim()
    || (serverEnv.OWNER_FACTORY_RESET_PASSWORD_HASH ?? "").trim();
}

export function getExpectedTransferPasswordHash() {
  return (serverEnv.OWNER_TRANSFER_PASSWORD_HASH ?? "").trim()
    || (serverEnv.OWNER_FACTORY_RESET_PASSWORD_HASH ?? "").trim();
}
