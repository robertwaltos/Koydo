import { NextResponse } from "next/server";
import {
  generateParentGateChallenge,
  verifyParentGateAnswer,
} from "@/lib/parent-gate";

/**
 * GET /api/parent-gate — Get a new arithmetic challenge
 */
export async function GET() {
  const challenge = generateParentGateChallenge();
  return NextResponse.json(challenge);
}

/**
 * POST /api/parent-gate — Verify an arithmetic challenge answer
 *
 * Body: { token: string, answer: number }
 */
export async function POST(request: Request) {
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
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
