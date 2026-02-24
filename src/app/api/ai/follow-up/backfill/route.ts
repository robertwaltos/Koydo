import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { generateAndStoreFollowupMaterial } from "@/lib/ai/follow-up";

const backfillRequestSchema = z.object({
  limit: z.number().int().min(1).max(20).default(4),
});

function isSchemaMissingError(message: string | undefined) {
  if (!message) return false;
  const normalized = message.toLowerCase();
  return (
    (normalized.includes("ai_followup_materials") || normalized.includes("learning_events")) &&
    (normalized.includes("does not exist") ||
      normalized.includes("could not find the table") ||
      normalized.includes("relation"))
  );
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
    const parsed = backfillRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: parsed.error.issues },
        { status: 400 },
      );
    }

    const fetchLimit = Math.min(120, parsed.data.limit * 8);
    const { data: completionEvents, error: completionError } = await supabase
      .from("learning_events")
      .select("lesson_id, module_id, event_at")
      .eq("user_id", user.id)
      .eq("event_type", "lesson_completed")
      .order("event_at", { ascending: false })
      .limit(fetchLimit);

    if (completionError) {
      if (isSchemaMissingError(completionError.message)) {
        return NextResponse.json(
          {
            setupRequired: true,
            generated: 0,
            message: "Telemetry/follow-up schema is not ready. Apply latest Supabase schema.",
          },
          { status: 200 },
        );
      }
      return NextResponse.json({ error: completionError.message }, { status: 500 });
    }

    const uniqueCompleted = Array.from(
      new Map(
        (completionEvents ?? []).map((event) => [
          `${event.lesson_id}::${event.module_id ?? ""}`,
          {
            lessonId: String(event.lesson_id),
            moduleId: event.module_id ? String(event.module_id) : null,
          },
        ]),
      ).values(),
    ).slice(0, parsed.data.limit);

    if (uniqueCompleted.length === 0) {
      return NextResponse.json({
        generated: 0,
        inspected: 0,
        message: "No completed lessons found for backfill.",
      });
    }

    const results = await Promise.all(
      uniqueCompleted.map((entry) =>
        generateAndStoreFollowupMaterial({
          supabase,
          userId: user.id,
          lessonId: entry.lessonId,
          moduleId: entry.moduleId,
          force: false,
          allowOpenAi: true,
        }),
      ),
    );

    const generated = results.filter((result) => result.status === "generated").length;
    const cached = results.filter((result) => result.status === "cached").length;
    const failed = results.filter((result) => result.status === "failed").length;
    const schemaMissing = results.some(
      (result) => result.status === "failed" && isSchemaMissingError(result.error),
    );

    if (schemaMissing) {
      return NextResponse.json(
        {
          setupRequired: true,
          generated,
          cached,
          failed,
          inspected: uniqueCompleted.length,
          message: "AI follow-up schema is not ready. Apply latest Supabase schema.",
        },
        { status: 200 },
      );
    }

    return NextResponse.json({
      generated,
      cached,
      failed,
      inspected: uniqueCompleted.length,
    });
  } catch (error) {
    console.error("Unexpected AI follow-up backfill error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
