import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkAiBudget } from "@/lib/ai/token-budget";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const requestSchema = z.object({
  estimatedInputTokens: z.number().int().min(0).default(1200),
  estimatedOutputTokens: z.number().int().min(0).default(700),
  weakPoints: z.array(z.string()).default([]),
});

function monthKeyFromDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export async function POST(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:ai:analyze:post", {
    max: 30,
    windowMs: 60_000,
  });

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many AI analysis requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  const monthKey = monthKeyFromDate(new Date());
  const { data: usageRow } = await supabase
    .from("user_tokens")
    .select("spent_usd")
    .eq("user_id", user.id)
    .eq("month_key", monthKey)
    .maybeSingle();

  const monthlySpentUsd = Number(usageRow?.spent_usd ?? 0);

  const budget = checkAiBudget({
    spentUsd: monthlySpentUsd,
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
        context: {
          userId: user.id,
          monthKey,
          monthlySpentUsd,
        },
      },
      { status: 200 },
    );
  }

  return NextResponse.json({
    mode: "ai-enabled",
    warning: budget.isWarning,
    budget,
    context: {
      userId: user.id,
      monthKey,
      monthlySpentUsd,
    },
    recommendation: parsed.data.weakPoints.length
      ? parsed.data.weakPoints.map((topic) => `Assign remedial module for ${topic}.`)
      : ["Continue with next scheduled lesson and 1 retrieval quiz."],
  });
}

export async function GET() {
  return NextResponse.json({
    route: "/api/ai/analyze",
    method: "POST",
    auth: "required",
    bodyExample: {
      estimatedInputTokens: 1200,
      estimatedOutputTokens: 700,
      weakPoints: ["reading comprehension"],
    },
  });
}
