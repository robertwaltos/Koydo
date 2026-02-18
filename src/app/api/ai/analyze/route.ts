import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkAiBudget } from "@/lib/ai/token-budget";
import { serverEnv } from "@/lib/config/env";

const requestSchema = z.object({
  userId: z.string().min(1),
  monthlySpentUsd: z.number().min(0).default(0),
  estimatedInputTokens: z.number().int().min(0).default(1200),
  estimatedOutputTokens: z.number().int().min(0).default(700),
  weakPoints: z.array(z.string()).default([]),
});

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid request payload",
        details: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const budget = checkAiBudget({
    spentUsd: parsed.data.monthlySpentUsd,
    monthlyBudgetUsd: serverEnv.AI_MONTHLY_BUDGET_USD,
    inputTokens: parsed.data.estimatedInputTokens,
    outputTokens: parsed.data.estimatedOutputTokens,
  });

  if (budget.isBlocked) {
    return NextResponse.json(
      {
        mode: "rule-based-fallback",
        message: "Monthly AI budget reached. Switched to non-AI recommendation logic.",
        budget,
        recommendation: [
          "Repeat the last two modules with visual hints enabled.",
          "Schedule a 10-minute review tomorrow using SRS intervals.",
        ],
      },
      { status: 200 },
    );
  }

  return NextResponse.json({
    mode: "ai-enabled",
    warning: budget.isWarning,
    budget,
    recommendation: parsed.data.weakPoints.length
      ? parsed.data.weakPoints.map((topic) => `Assign remedial module for ${topic}.`)
      : ["Continue with next scheduled lesson and 1 retrieval quiz."],
  });
}

export async function GET() {
  return NextResponse.json({
    route: "/api/ai/analyze",
    method: "POST",
    bodyExample: {
      userId: "user_123",
      monthlySpentUsd: 0.25,
      estimatedInputTokens: 1200,
      estimatedOutputTokens: 700,
      weakPoints: ["reading comprehension"],
    },
  });
}
