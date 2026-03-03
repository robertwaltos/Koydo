/**
 * Parent Gate — Arithmetic Challenge
 *
 * Apple/Google compliant parent verification gate.
 * Generates randomized arithmetic problems that only adults can solve.
 * Uses HMAC-SHA256 signing (reuses PARENT_CONSENT_TOKEN_SECRET) to prevent tampering.
 */

import crypto from "crypto";

export type ParentGateChallenge = {
  /** The math problem to display, e.g. "23 × 7 + 12" */
  question: string;
  /** HMAC-signed token containing the answer and expiry */
  token: string;
  /** Expiry timestamp (ISO 8601) */
  expiresAt: string;
};

type TokenPayload = {
  answer: number;
  exp: number;
};

const GATE_TTL_SECONDS = 120; // 2 minutes to solve

function getSecret(): string {
  return process.env.PARENT_CONSENT_TOKEN_SECRET ?? "dev-parent-gate-secret-min16chars";
}

function signPayload(payload: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

/**
 * Generate a randomized arithmetic challenge.
 * Difficulty is calibrated for adult-level math (multiplication + addition).
 */
export function generateParentGateChallenge(): ParentGateChallenge {
  // Generate a problem like: A × B + C
  const a = Math.floor(Math.random() * 20) + 10; // 10–29
  const b = Math.floor(Math.random() * 8) + 3;   // 3–10
  const c = Math.floor(Math.random() * 50) + 1;   // 1–50

  const answer = a * b + c;
  const question = `${a} × ${b} + ${c}`;

  const exp = Math.floor(Date.now() / 1000) + GATE_TTL_SECONDS;
  const payload: TokenPayload = { answer, exp };

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = signPayload(encodedPayload, getSecret());
  const token = `${encodedPayload}.${signature}`;

  return {
    question,
    token,
    expiresAt: new Date(exp * 1000).toISOString(),
  };
}

/**
 * Verify a parent gate challenge answer.
 *
 * @returns `{ valid: true }` or `{ valid: false, reason: string }`
 */
export function verifyParentGateAnswer(
  token: string,
  userAnswer: number,
): { valid: true } | { valid: false; reason: string } {
  const [encodedPayload, signature] = token.split(".");

  if (!encodedPayload || !signature) {
    return { valid: false, reason: "Malformed token" };
  }

  // Verify signature
  const expectedSignature = signPayload(encodedPayload, getSecret());
  const expectedBuffer = Buffer.from(expectedSignature);
  const providedBuffer = Buffer.from(signature);

  if (
    expectedBuffer.length !== providedBuffer.length ||
    !crypto.timingSafeEqual(expectedBuffer, providedBuffer)
  ) {
    return { valid: false, reason: "Invalid token" };
  }

  // Decode payload
  let payload: TokenPayload;
  try {
    payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as TokenPayload;
  } catch {
    return { valid: false, reason: "Invalid payload" };
  }

  // Check expiry
  if (payload.exp <= Math.floor(Date.now() / 1000)) {
    return { valid: false, reason: "Challenge expired" };
  }

  // Check answer
  if (payload.answer !== userAnswer) {
    return { valid: false, reason: "Incorrect answer" };
  }

  return { valid: true };
}
