import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  evaluateHighRiskSafetySignals,
  validateOcrUploadSecurity,
  verifySolverStepsScaffold,
} from "@/lib/platform/codex-b/s9-ocr-solver-safety";

const requestSchema = z.object({
  upload: z.object({
    filename: z.string().trim().min(1).max(240),
    mimeType: z.string().trim().min(1).max(120),
    byteLength: z.number().int().min(0).max(100_000_000),
    sha256: z.string().trim().min(1).max(128),
  }),
  solverSteps: z
    .array(
      z.object({
        stepIndex: z.number().int().min(1).max(200),
        statement: z.string().trim().min(1).max(2000),
        derivedFromStepIndex: z.number().int().min(1).max(200).nullable(),
      }),
    )
    .max(200)
    .default([]),
  safetySignals: z
    .array(
      z.object({
        signalId: z.string().trim().min(1).max(120),
        category: z.enum(["self_harm", "violence", "sexual_minors", "hate", "jailbreak"]),
        score: z.number().min(0).max(1),
      }),
    )
    .max(500)
    .default([]),
});

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:admin:platform:codex-b:ocr-safety:post", {
    max: 30,
    windowMs: 60_000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many OCR/safety requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rate.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const parsed = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const uploadSecurity = validateOcrUploadSecurity(parsed.data.upload);
    const solverVerification = verifySolverStepsScaffold(parsed.data.solverSteps);
    const highRiskSafety = evaluateHighRiskSafetySignals(parsed.data.safetySignals);

    return NextResponse.json({
      uploadSecurity,
      solverVerification,
      highRiskSafety,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
