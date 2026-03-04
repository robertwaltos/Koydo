import { NextResponse } from "next/server";
import {
  generateParentGateChallenge,
  isParentGateConfigured,
  verifyParentGateAnswer,
} from "@/lib/parent-gate";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

/**
 * GET /api/parent-gate — Get a new arithmetic challenge
 */
export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:parent-gate:get", {
    max: 24,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many parent gate requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  if (!isParentGateConfigured()) {
    return NextResponse.json({ error: "Parent gate is temporarily unavailable." }, { status: 503 });
  }

  try {
    const challenge = generateParentGateChallenge();
    return NextResponse.json(challenge);
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

/**
 * POST /api/parent-gate — Verify an arithmetic challenge answer
 *
 * Body: { token: string, answer: number }
 */
export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:parent-gate:post", {
    max: 12,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many parent gate verification attempts. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  if (!isParentGateConfigured()) {
    return NextResponse.json({ error: "Parent gate is temporarily unavailable." }, { status: 503 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const { token, answer } = body as { token?: string; answer?: number };

    if (!token || typeof answer !== "number") {
      return NextResponse.json(
        { error: "token (string) and answer (number) are required" },
        { status: 400 },
      );
    }

    const result = verifyParentGateAnswer(token, answer);

    if (result.valid) {
      return NextResponse.json({ verified: true });
    }

    return NextResponse.json(
      { verified: false, reason: result.reason },
      { status: 403 },
    );
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
