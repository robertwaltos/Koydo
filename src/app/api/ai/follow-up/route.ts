import { NextResponse } from "next/server";
import { z } from "zod";
import type { LearningEventPayload } from "@/lib/analytics/learning-events";
import {
  generateAndStoreFollowupMaterial,
  getFollowupLessonLink,
} from "@/lib/ai/follow-up";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const payloadValueSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
  z.array(z.union([z.string(), z.number(), z.boolean(), z.null()])),
]);

const followupRequestSchema = z.object({
  lessonId: z.string().min(1),
  moduleId: z.string().min(1).optional(),
  force: z.boolean().optional(),
  completionPayload: z.record(z.string(), payloadValueSchema).optional(),
});

function isFollowupSchemaMissingError(message: string | undefined) {
  if (!message) return false;
  const normalized = message.toLowerCase();
  return (
    normalized.includes("ai_followup_materials") &&
    (normalized.includes("does not exist") ||
      normalized.includes("could not find the table") ||
      normalized.includes("relation"))
  );
}

function mapRecord(record: {
  lesson_id: string;
  module_id: string | null;
  status: string;
  generation_mode: string;
  model: string | null;
  pack: unknown;
  context: Record<string, unknown>;
  error: string | null;
  updated_at: string;
  created_at: string;
}) {
  const lessonLink = getFollowupLessonLink(record.lesson_id);

  return {
    lessonId: record.lesson_id,
    moduleId: record.module_id,
    lessonTitle: lessonLink.lessonTitle,
    moduleTitle: lessonLink.moduleTitle,
    status: record.status,
    generationMode: record.generation_mode,
    model: record.model,
    pack: record.pack,
    context: record.context,
    error: record.error,
    updatedAt: record.updated_at,
    createdAt: record.created_at,
  };
}

export async function GET(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(request.url);
    const lessonId = url.searchParams.get("lessonId")?.trim() ?? "";

    let query = supabase
      .from("ai_followup_materials")
      .select("lesson_id, module_id, status, generation_mode, model, pack, context, error, updated_at, created_at")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false })
      .limit(1);

    if (lessonId) {
      query = query.eq("lesson_id", lessonId);
    }

    const { data, error } = await query;
    if (error) {
      if (isFollowupSchemaMissingError(error.message)) {
        return NextResponse.json(
          {
            material: null,
            setupRequired: true,
            message: "AI follow-up storage is not ready. Apply latest Supabase schema.",
          },
          { status: 200 },
        );
      }
      console.error("Unexpected API error.", toSafeErrorRecord(error));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    const row = data?.[0] ?? null;
    if (!row) {
      return NextResponse.json({ material: null }, { status: 200 });
    }

    return NextResponse.json({ material: mapRecord(row) }, { status: 200 });
  } catch (error) {
    console.error("Unexpected AI follow-up GET error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

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

    const body = await request.json().catch(() => ({}));
    const validation = followupRequestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const result = await generateAndStoreFollowupMaterial({
      supabase,
      userId: user.id,
      lessonId: validation.data.lessonId,
      moduleId: validation.data.moduleId ?? null,
      completionPayload: (validation.data.completionPayload ?? null) as LearningEventPayload | null,
      force: Boolean(validation.data.force),
      allowOpenAi: true,
    });

    if (result.status === "failed") {
      if (isFollowupSchemaMissingError(result.error)) {
        return NextResponse.json(
          {
            setupRequired: true,
            message: "AI follow-up storage is not ready. Apply latest Supabase schema.",
          },
          { status: 503 },
        );
      }
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json(
      {
        status: result.status,
        material: mapRecord(result.record),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Unexpected AI follow-up POST error:", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

