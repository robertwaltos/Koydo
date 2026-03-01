import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getLanguageProviderStatuses, translateText } from "@/lib/language-learning";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  text: z.string().min(1).max(5_000),
  targetLanguage: z.string().min(2).max(16),
  sourceLanguage: z.string().min(2).max(16).optional(),
  preserveFormatting: z.boolean().optional(),
  domain: z.string().min(1).max(64).optional(),
  preferredProviderId: z.enum(["auto", "mock", "deepl", "google"]).optional(),
});

export async function POST(request: NextRequest) {
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

  try {
    const translation = await translateText(parsed.data);
    return NextResponse.json({ translation });
  } catch (error) {
    console.error("Translation request failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      {
        error: "Translation request failed",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    route: "/api/language/translate",
    method: "POST",
    auth: "required",
    providers: getLanguageProviderStatuses().translation,
    bodyExample: {
      text: "Hello world",
      sourceLanguage: "en",
      targetLanguage: "es",
      preferredProviderId: "auto",
    },
  });
}
