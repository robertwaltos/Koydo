import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  buildSpeechOrchestrationPlan,
  compactTutorMemory,
  evaluateTutorGuardrails,
} from "@/lib/platform/codex-b/s10-tutor-memory-speech-eval";

const requestSchema = z.object({
  memoryEntries: z
    .array(
      z.object({
        key: z.string().trim().min(1).max(120),
        value: z.string().trim().min(1).max(4000),
        weight: z.number().min(0).max(1).default(0.5),
        createdAt: z.string().datetime(),
      }),
    )
    .max(500)
    .default([]),
  speechJobs: z
    .array(
      z.object({
        jobId: z.string().trim().min(1).max(120),
        sessionId: z.string().trim().min(1).max(120),
        text: z.string().trim().min(1).max(4000),
        locale: z.string().trim().min(2).max(16),
        voiceId: z.string().trim().min(1).max(120),
        priority: z.enum(["normal", "high"]),
      }),
    )
    .max(500)
    .default([]),
  evalSamples: z
    .array(
      z.object({
        sampleId: z.string().trim().min(1).max(120),
        groundingScore: z.number().min(0).max(1),
        hallucinationRisk: z.number().min(0).max(1),
        safetyScore: z.number().min(0).max(1),
      }),
    )
    .max(500)
    .default([]),
});

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:admin:platform:codex-b:tutor-runtime:post", {
    max: 25,
    windowMs: 60_000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many tutor runtime requests. Please retry shortly." },
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
    const memory = compactTutorMemory(parsed.data.memoryEntries, 20);
    const speechPlan = buildSpeechOrchestrationPlan(parsed.data.speechJobs);
    const guardrails = evaluateTutorGuardrails(parsed.data.evalSamples);

    return NextResponse.json({
      memory,
      speechPlan,
      guardrails,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
