import { NextResponse } from "next/server";
import { z } from "zod";
import { requireFeature } from "@/lib/platform/require-feature";
import { requirePaidTier } from "@/lib/forge/tier-gate";

const schema = z.object({
  problem: z.string().min(1).max(500),
});

/**
 * POST /api/math-solver — AI-powered step-by-step math solver (premium)
 */
export async function POST(request: Request) {
  const featureGate = await requireFeature("math_solver", request);
  if (featureGate) return featureGate;

  const tierGate = await requirePaidTier(request);
  if (tierGate) return tierGate;

  const body = await request.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid problem" }, { status: 400 });
  }

  try {
    const { OpenAI } = await import("openai");
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a math tutor. Solve the given math problem step by step.
Return ONLY valid JSON in this format:
{"answer": "<final answer>", "steps": [{"step": 1, "description": "<what you're doing>", "expression": "<the math expression>"}]}
Keep explanations clear and concise. Use at most 6 steps.`,
        },
        { role: "user", content: parsed.data.problem },
      ],
      temperature: 0,
      max_tokens: 1000,
    });

    const content = completion.choices[0]?.message?.content ?? "";
    const result = JSON.parse(content);
    return NextResponse.json(result);
  } catch (err) {
    console.error("[math-solver] Error:", err);
    return NextResponse.json({ error: "Failed to solve problem" }, { status: 500 });
  }
}
