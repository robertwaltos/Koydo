import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const imageGenerateSchema = z.object({
  prompt: z.string().min(10, "Prompt must be at least 10 characters long."),
});

// A basic in-memory cache to avoid re-generating the same image
const imageCache = new Map<string, string>();

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validation = imageGenerateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 }
      );
    }

    const { prompt } = validation.data;

    // Check cache first
    if (imageCache.has(prompt)) {
      return NextResponse.json({ url: imageCache.get(prompt) });
    }

    // --- MOCK API CALL ---
    console.log("--- Mock Image Generation ---");
    console.log("User:", user.id);
    console.log("Prompt:", prompt);
    console.log("-----------------------------");

    // Simulate network delay for image generation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In a real app, you would call an external API like Replicate or Hugging Face.
    // Here, we just return a static placeholder.
    const imageUrl = "/placeholders/lesson-robot.svg";

    // Cache the result
    imageCache.set(prompt, imageUrl);
    // --- END MOCK API CALL ---

    return NextResponse.json({ url: imageUrl });
  } catch (err) {
    console.error("Unexpected error in image generation route:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
