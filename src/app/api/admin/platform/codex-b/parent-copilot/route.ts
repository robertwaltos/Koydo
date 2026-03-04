import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  applyParentCopilotPromptPolicy,
  buildPrintableQueueBatch,
  parentCopilotRequestSchema,
  printableJobSchema,
  summarizeCopilotEvalSuite,
} from "@/lib/platform/codex-b/s7-parent-copilot-printables-eval";

const requestSchema = z.object({
  copilotRequest: parentCopilotRequestSchema,
  printableJobs: z.array(printableJobSchema).max(500).default([]),
  evalResults: z
    .array(
      z.object({
        caseId: z.string().trim().min(1).max(120),
        safetyScore: z.number().min(0).max(1),
        groundingScore: z.number().min(0).max(1),
        actionabilityScore: z.number().min(0).max(1),
      }),
    )
    .max(500)
    .default([]),
});

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:admin:platform:codex-b:parent-copilot:post", {
    max: 20,
    windowMs: 60_000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many parent-copilot requests. Please retry shortly." },
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
    const policy = applyParentCopilotPromptPolicy(parsed.data.copilotRequest);
    const printableQueue = buildPrintableQueueBatch(parsed.data.printableJobs);
    const evalSummary = summarizeCopilotEvalSuite(parsed.data.evalResults);

    return NextResponse.json({
      policy,
      printableQueue,
      evalSummary,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
