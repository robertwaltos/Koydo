import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** POST /api/ai/content-authoring — generate lesson content using AI */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Check if user has educator/admin role
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  const allowedRoles = ["educator", "admin", "teacher", "parent"];
  if (!profile || !allowedRoles.includes(profile.role ?? "")) {
    return NextResponse.json({ error: "Educator access required" }, { status: 403 });
  }

  const { contentType, subject, topic, gradeLevel, instructions } = await req.json();

  if (!subject?.trim() || !topic?.trim()) {
    return NextResponse.json({ error: "subject and topic required" }, { status: 400 });
  }

  const typePrompts: Record<string, string> = {
    lesson: `Create a complete lesson plan about "${topic}" for ${gradeLevel ?? "grade 5-8"} students in ${subject}. Include:
1. Learning objectives (3-4 bullet points)
2. Introduction/hook (2-3 sentences)
3. Main content (3-4 key concepts with explanations)
4. Activities (2 activities students can do)
5. Assessment questions (3 multiple choice questions with answers)
6. Summary/takeaways`,

    quiz: `Create a quiz about "${topic}" for ${gradeLevel ?? "grade 5-8"} students in ${subject}. Include:
1. 5 multiple choice questions (4 options each, mark correct answer)
2. 3 short answer questions
3. 1 extended response question
Include an answer key at the end.`,

    worksheet: `Create a practice worksheet about "${topic}" for ${gradeLevel ?? "grade 5-8"} students in ${subject}. Include:
1. 5 warm-up problems (easy)
2. 5 practice problems (medium)
3. 3 challenge problems (hard)
4. 1 real-world application problem
Include an answer key.`,

    flashcards: `Create 15 flashcards about "${topic}" for ${gradeLevel ?? "grade 5-8"} students in ${subject}. Format each as:
FRONT: [term or question]
BACK: [definition or answer]
Order them from basic to advanced concepts.`,
  };

  const systemPrompt = `You are an expert educator creating high-quality learning content. ${instructions ? `Additional instructions: ${instructions}` : ""}
Keep content accurate, age-appropriate, and engaging. Use clear language.`;

  const userPrompt = typePrompts[contentType] ?? typePrompts.lesson;

  try {
    const { serverEnv } = await import("@/lib/config/env");
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serverEnv.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content ?? "Failed to generate content.";

    return NextResponse.json({ content, contentType: contentType ?? "lesson" });
  } catch {
    return NextResponse.json({ error: "AI generation failed" }, { status: 500 });
  }
}
