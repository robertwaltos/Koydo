import crypto from "crypto";

type ParentConsentTokenPayload = {
  consentRequestId: string;
  childUserId: string;
  parentEmail: string;
  exp: number;
};

function base64UrlEncode(value: string) {
  return Buffer.from(value).toString("base64url");
}

function base64UrlDecode(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function signPayload(encodedPayload: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(encodedPayload).digest("base64url");
}

export function createParentConsentVerificationToken(
  payload: Omit<ParentConsentTokenPayload, "exp">,
  secret: string,
  ttlSeconds = 60 * 60 * 24,
) {
  const tokenPayload: ParentConsentTokenPayload = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  };

  const encodedPayload = base64UrlEncode(JSON.stringify(tokenPayload));
  const signature = signPayload(encodedPayload, secret);
  return `${encodedPayload}.${signature}`;
}

export function verifyParentConsentVerificationToken(token: string, secret: string) {
  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return { valid: false as const, reason: "Malformed token" };
  }

  const expectedSignature = signPayload(encodedPayload, secret);
  const expectedBuffer = Buffer.from(expectedSignature);
  const providedBuffer = Buffer.from(signature);

  if (
    expectedBuffer.length !== providedBuffer.length ||
    !crypto.timingSafeEqual(expectedBuffer, providedBuffer)
  ) {
    return { valid: false as const, reason: "Invalid signature" };
  }

  let payload: ParentConsentTokenPayload;

  try {
    payload = JSON.parse(base64UrlDecode(encodedPayload)) as ParentConsentTokenPayload;
  } catch {
    return { valid: false as const, reason: "Invalid payload" };
  }

  if (
    !payload.consentRequestId ||
    !payload.childUserId ||
    !payload.parentEmail ||
    typeof payload.exp !== "number"
  ) {
    return { valid: false as const, reason: "Incomplete payload" };
  }

  const now = Math.floor(Date.now() / 1000);
  if (payload.exp <= now) {
    return { valid: false as const, reason: "Expired token" };
  }

  return { valid: true as const, payload };
}
