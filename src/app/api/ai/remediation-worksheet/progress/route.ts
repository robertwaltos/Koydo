import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const progressRequestSchema = z.object({
  lessonId: z.string().min(1),
  action: z.enum(["viewed", "downloaded", "completed"]),
});

function isWorksheetSchemaMissingError(message: string | undefined) {
  if (!message) return false;
  const normalized = message.toLowerCase();
  return (
    normalized.includes("ai_remediation_worksheets") &&
    (normalized.includes("does not exist") ||
      normalized.includes("could not find the table") ||
      normalized.includes("relation"))
  );
}

export async function POST(request: Request) {
  try {
    const rateLimit = await enforceIpRateLimit(request, "api:ai:remediation-worksheet:progress:post", {
      max: 60,
      windowMs: 60_000,
    });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many worksheet progress requests. Please retry shortly." },
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

    const body = await request.json().catch(() => ({}));
    const validation = progressRequestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const nowIso = new Date().toISOString();
    const updatePayload: Record<string, string> = {};
    if (validation.data.action === "viewed") {
      updatePayload.viewed_at = nowIso;
    } else if (validation.data.action === "downloaded") {
      updatePayload.downloaded_at = nowIso;
    } else {
      updatePayload.completed_at = nowIso;
    }

    const { data, error } = await supabase
      .from("ai_remediation_worksheets")
      .update(updatePayload)
      .eq("user_id", user.id)
      .eq("lesson_id", validation.data.lessonId)
      .select("lesson_id, viewed_at, downloaded_at, completed_at, updated_at")
      .maybeSingle();

    if (error) {
      if (isWorksheetSchemaMissingError(error.message)) {
        return NextResponse.json(
          {
            setupRequired: true,
            message: "AI remediation worksheet storage is not ready. Apply latest Supabase schema.",
          },
          { status: 503 },
        );
      }
      console.error("Unexpected API error.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json(
        { error: "No remediation worksheet found for this lesson yet." },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      lessonId: data.lesson_id,
      viewedAt: data.viewed_at,
      downloadedAt: data.downloaded_at,
      completedAt: data.completed_at,
      updatedAt: data.updated_at,
    });
  } catch (error) {
    console.error("Unexpected remediation worksheet progress POST error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

