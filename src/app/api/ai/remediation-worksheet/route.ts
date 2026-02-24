import { NextResponse } from "next/server";
import { z } from "zod";
import {
  generateAndStoreRemediationWorksheet,
  renderWorksheetAsText,
  type AiRemediationWorksheet,
} from "@/lib/ai/remediation-worksheet";
import { getLessonById } from "@/lib/modules";
import { createSimpleTextPdf } from "@/lib/pdf/simple-text-pdf";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const worksheetRequestSchema = z.object({
  lessonId: z.string().min(1).optional(),
  moduleId: z.string().min(1).optional(),
  force: z.boolean().optional(),
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

function mapRecord(record: {
  lesson_id: string;
  module_id: string | null;
  status: string;
  generation_mode: string;
  model: string | null;
  worksheet: unknown;
  context: Record<string, unknown>;
  error: string | null;
  viewed_at: string | null;
  downloaded_at: string | null;
  completed_at: string | null;
  updated_at: string;
  created_at: string;
}) {
  const lessonLookup = getLessonById(record.lesson_id);
  return {
    lessonId: record.lesson_id,
    moduleId: record.module_id,
    lessonTitle: lessonLookup?.lesson.title ?? record.lesson_id,
    moduleTitle: lessonLookup?.learningModule.title ?? "",
    status: record.status,
    generationMode: record.generation_mode,
    model: record.model,
    worksheet: record.worksheet,
    context: record.context,
    error: record.error,
    viewedAt: record.viewed_at,
    downloadedAt: record.downloaded_at,
    completedAt: record.completed_at,
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
    const format = url.searchParams.get("format")?.trim().toLowerCase() ?? "json";

    let query = supabase
      .from("ai_remediation_worksheets")
      .select("lesson_id, module_id, status, generation_mode, model, worksheet, context, error, viewed_at, downloaded_at, completed_at, updated_at, created_at")
      .eq("user_id", user.id)
      .order("updated_at", { ascending: false })
      .limit(1);

    if (lessonId) {
      query = query.eq("lesson_id", lessonId);
    }

    const { data, error } = await query;
    if (error) {
      if (isWorksheetSchemaMissingError(error.message)) {
        return NextResponse.json(
          {
            worksheet: null,
            setupRequired: true,
            message: "AI remediation worksheet storage is not ready. Apply latest Supabase schema.",
          },
          { status: 200 },
        );
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const row = data?.[0] ?? null;
    if (!row) {
      return NextResponse.json({ worksheet: null }, { status: 200 });
    }

    const mapped = mapRecord(row);
    if (format === "txt" || format === "pdf") {
      const text = renderWorksheetAsText({
        lessonTitle: mapped.lessonTitle,
        moduleTitle: mapped.moduleTitle || null,
        worksheet: mapped.worksheet as AiRemediationWorksheet,
      });

      // Best-effort download timestamp tracking for direct-link downloads.
      await supabase
        .from("ai_remediation_worksheets")
        .update({ downloaded_at: new Date().toISOString() })
        .eq("user_id", user.id)
        .eq("lesson_id", mapped.lessonId);

      if (format === "pdf") {
        const pdfBuffer = createSimpleTextPdf({
          title: mapped.worksheet && typeof (mapped.worksheet as { title?: unknown }).title === "string"
            ? ((mapped.worksheet as { title: string }).title || "Remediation Worksheet")
            : "Remediation Worksheet",
          text,
        });

        const filename = `${mapped.lessonId}-remediation-worksheet.pdf`
          .replace(/[^\w.-]+/g, "-")
          .toLowerCase();
        return new Response(pdfBuffer, {
          status: 200,
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${filename}"`,
          },
        });
      }

      const filename = `${mapped.lessonId}-remediation-worksheet.txt`
        .replace(/[^\w.-]+/g, "-")
        .toLowerCase();
      return new Response(text, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Disposition": `attachment; filename="${filename}"`,
        },
      });
    }

    return NextResponse.json({ worksheet: mapped }, { status: 200 });
  } catch (error) {
    console.error("Unexpected remediation worksheet GET error:", error);
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
    const validation = worksheetRequestSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 },
      );
    }

    const result = await generateAndStoreRemediationWorksheet({
      supabase,
      userId: user.id,
      lessonId: validation.data.lessonId ?? null,
      moduleId: validation.data.moduleId ?? null,
      force: Boolean(validation.data.force),
      allowOpenAi: true,
    });

    if (result.status === "failed") {
      if (isWorksheetSchemaMissingError(result.error)) {
        return NextResponse.json(
          {
            setupRequired: true,
            message: "AI remediation worksheet storage is not ready. Apply latest Supabase schema.",
          },
          { status: 503 },
        );
      }
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json(
      {
        status: result.status,
        worksheet: mapRecord(result.record),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Unexpected remediation worksheet POST error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
