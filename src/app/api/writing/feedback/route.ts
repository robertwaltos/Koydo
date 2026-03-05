import { NextResponse } from "next/server";
import { z } from "zod";
import { requireFeature } from "@/lib/platform/require-feature";
import { requirePaidTier } from "@/lib/forge/tier-gate";

const schema = z.object({
  text: z.string().min(20).max(5000),
});

/**
 * POST /api/writing/feedback — AI-powered writing analysis (premium)
 */
export async function POST(request: Request) {
  const gate = await requireFeature("writing_feedback", request);
  if (gate) return gate;

  const tierGate = await requirePaidTier(request);
  if (tierGate) return tierGate;

  const body = await request.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Text must be 20-5000 characters" }, { status: 400 });
  }

  try {
    const { OpenAI } = await import("openai");
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a writing tutor for students. Analyze the provided text for grammar, clarity, and structure.
Return ONLY valid JSON in this format:
{
  "overallScore": <1-100>,
  "grammar": { "score": <1-100>, "issues": ["issue 1", "issue 2"] },
  "clarity": { "score": <1-100>, "suggestions": ["suggestion 1"] },
  "structure": { "score": <1-100>, "feedback": "brief paragraph" },
  "improvements": ["improvement 1", "improvement 2"]
}
Be encouraging but honest. Limit to 5 issues/suggestions max per category.`,
        },
        { role: "user", content: parsed.data.text },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    const content = completion.choices[0]?.message?.content ?? "";
    const result = JSON.parse(content);
    return NextResponse.json(result);
  } catch (err) {
    console.error("[writing-feedback] Error:", err);
    return NextResponse.json({ error: "Failed to analyze writing" }, { status: 500 });
  }
}
