import { requireAdminForApi } from "@/lib/admin/auth";
import { toCsv } from "@/lib/admin/csv";
import {
  loadAiRemediationTopLessons,
  loadAiRemediationUsageTimeseries,
} from "@/lib/admin/ai-remediation-usage";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getLessonById } from "@/lib/modules";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

function parseDays(input: string | null) {
  const parsed = Number(input ?? "");
  if (!Number.isFinite(parsed)) return 14;
  return Math.max(1, Math.min(30, Math.round(parsed)));
}

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:admin:ai:remediation-usage:export:get", {
    max: 30,
    windowMs: 60_000,
  });

  if (!rateLimit.allowed) {
    return new Response(
      JSON.stringify({ error: "Too many export requests. Please retry shortly." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const { searchParams } = new URL(request.url);
    const days = parseDays(searchParams.get("days"));
    const admin = createSupabaseAdminClient();

    const [timeseries, topLessons] = await Promise.all([
      loadAiRemediationUsageTimeseries(admin, { days }),
      loadAiRemediationTopLessons(admin, { days }),
    ]);

    if (timeseries.setupRequired || topLessons.setupRequired) {
      return new Response(
        JSON.stringify({
          error:
            timeseries.message ??
            topLessons.message ??
            "Remediation worksheet analytics storage is not ready.",
        }),
        {
          status: 503,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const rows: Array<Record<string, unknown>> = [];
    for (const point of timeseries.points) {
      rows.push({
        row_type: "daily",
        day: point.day,
        generated: point.generated,
        downloaded: point.downloaded,
        completed: point.completed,
        failed: point.failed,
        lesson_id: "",
        lesson_title: "",
        module_title: "",
        metric: "",
        count: "",
        rank: "",
      });
    }

    topLessons.topDownloaded.forEach((entry, index) => {
      const lessonLookup = getLessonById(entry.lessonId);
      rows.push({
        row_type: "top_lesson",
        day: "",
        generated: "",
        downloaded: "",
        completed: "",
        failed: "",
        lesson_id: entry.lessonId,
        lesson_title: lessonLookup?.lesson.title ?? "",
        module_title: lessonLookup?.learningModule.title ?? "",
        metric: "downloaded",
        count: entry.count,
        rank: index + 1,
      });
    });

    topLessons.topCompleted.forEach((entry, index) => {
      const lessonLookup = getLessonById(entry.lessonId);
      rows.push({
        row_type: "top_lesson",
        day: "",
        generated: "",
        downloaded: "",
        completed: "",
        failed: "",
        lesson_id: entry.lessonId,
        lesson_title: lessonLookup?.lesson.title ?? "",
        module_title: lessonLookup?.learningModule.title ?? "",
        metric: "completed",
        count: entry.count,
        rank: index + 1,
      });
    });

    const columns = [
      "row_type",
      "day",
      "generated",
      "downloaded",
      "completed",
      "failed",
      "lesson_id",
      "lesson_title",
      "module_title",
      "metric",
      "count",
      "rank",
    ];
    const csv = toCsv(rows, columns);

    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="ai-remediation-usage-${days}d-${new Date()
          .toISOString()
          .slice(0, 10)}.csv"`,
        "X-Remediation-Timeseries-Truncated": String(timeseries.rowsTruncated),
        "X-Remediation-TopLessons-Truncated": String(topLessons.rowsTruncated),
      },
    });
  } catch (error) {
    console.error("Failed to export remediation worksheet analytics.", toSafeErrorRecord(error));
    return new Response(JSON.stringify({ error: "Failed to export remediation worksheet analytics." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
