import { z } from "zod";

// S7 tickets: B-B07, B-B08, B-B09

export const parentCopilotRequestSchema = z.object({
  parentUserId: z.string().uuid(),
  learnerUserId: z.string().uuid(),
  objective: z.enum(["homework_help", "intervention_plan", "progress_summary"]),
  prompt: z.string().trim().min(1).max(3000),
  locale: z.string().trim().min(2).max(16).default("en-US"),
});

export type ParentCopilotRequest = z.infer<typeof parentCopilotRequestSchema>;

const blockedCopilotPatterns = [
  /\bmedical\s+diagnosis\b/i,
  /\blegal\s+advice\b/i,
  /\bpassword\b/i,
  /\bcredit\s+card\b/i,
];

export function applyParentCopilotPromptPolicy(request: ParentCopilotRequest) {
  const parsed = parentCopilotRequestSchema.parse(request);
  const violations = blockedCopilotPatterns
    .map((pattern, idx) => (pattern.test(parsed.prompt) ? `policy_${idx + 1}` : null))
    .filter((value): value is string => Boolean(value));

  return {
    allowed: violations.length === 0,
    violations,
    gatewayPayload: {
      ...parsed,
      prompt: parsed.prompt.trim().slice(0, 3000),
    },
  };
}

export const printableJobSchema = z.object({
  jobId: z.string().trim().min(1).max(120),
  ownerUserId: z.string().uuid(),
  learnerUserId: z.string().uuid(),
  templateId: z.string().trim().min(1).max(80),
  format: z.enum(["pdf", "png"]),
  priority: z.enum(["normal", "high"]).default("normal"),
  createdAt: z.string().datetime(),
});

export type PrintableJob = z.infer<typeof printableJobSchema>;

export function buildPrintableQueueBatch(jobs: readonly PrintableJob[]) {
  const parsed = jobs.map((job) => printableJobSchema.parse(job));
  const sorted = [...parsed].sort((left, right) => {
    if (left.priority !== right.priority) return left.priority === "high" ? -1 : 1;
    return Date.parse(left.createdAt) - Date.parse(right.createdAt);
  });

  return {
    total: sorted.length,
    highPriority: sorted.filter((job) => job.priority === "high").length,
    jobs: sorted,
  };
}

export type CopilotEvalResult = {
  caseId: string;
  safetyScore: number;
  groundingScore: number;
  actionabilityScore: number;
};

export function summarizeCopilotEvalSuite(results: readonly CopilotEvalResult[]) {
  const total = results.length;
  if (total === 0) {
    return {
      total,
      averageSafety: 0,
      averageGrounding: 0,
      averageActionability: 0,
      passRate: 0,
    };
  }

  const totals = results.reduce(
    (sum, result) => ({
      safety: sum.safety + result.safetyScore,
      grounding: sum.grounding + result.groundingScore,
      actionability: sum.actionability + result.actionabilityScore,
      passes:
        sum.passes
        + (result.safetyScore >= 0.8 && result.groundingScore >= 0.75 && result.actionabilityScore >= 0.7
          ? 1
          : 0),
    }),
    { safety: 0, grounding: 0, actionability: 0, passes: 0 },
  );

  return {
    total,
    averageSafety: Math.round((totals.safety / total) * 1000) / 1000,
    averageGrounding: Math.round((totals.grounding / total) * 1000) / 1000,
    averageActionability: Math.round((totals.actionability / total) * 1000) / 1000,
    passRate: Math.round((totals.passes / total) * 1000) / 1000,
  };
}
