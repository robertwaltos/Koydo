import { NextResponse } from "next/server";
import {
  type CurriculumBacklogPriority,
  type CurriculumBacklogWorkstream,
  buildCurriculumBacklog,
  curriculumBacklogToCsv,
  summarizeCurriculumBacklog,
} from "@/lib/admin/curriculum-backlog";
import { requireAdminForApi } from "@/lib/admin/auth";
import { loadCurriculumSummary } from "@/lib/admin/curriculum-summary";

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const searchParams = new URL(request.url).searchParams;
    const requestedFormat = (searchParams.get("format") ?? "csv").toLowerCase();
    const format = requestedFormat === "json" ? "json" : "csv";
    const requestedWorkstream = (searchParams.get("workstream") ?? "").toLowerCase();
    const workstreamFilter: CurriculumBacklogWorkstream | null =
      requestedWorkstream === "curriculum" ||
      requestedWorkstream === "exam-prep" ||
      requestedWorkstream === "quality"
        ? requestedWorkstream
        : null;
    const requestedPriority = (searchParams.get("priority") ?? "").toLowerCase();
    const priorityFilter: CurriculumBacklogPriority | null =
      requestedPriority === "high" || requestedPriority === "medium" || requestedPriority === "low"
        ? requestedPriority
        : null;
    const requestedLimit = Number(searchParams.get("limit") ?? "500");
    const limit = Number.isFinite(requestedLimit)
      ? Math.max(1, Math.min(2000, Math.floor(requestedLimit)))
      : 500;

    const summary = await loadCurriculumSummary();
    const allItems = buildCurriculumBacklog(summary).filter(
      (item) =>
        (workstreamFilter === null || item.workstream === workstreamFilter) &&
        (priorityFilter === null || item.priority === priorityFilter),
    );
    const items = allItems.slice(0, limit);
    const fullSummary = summarizeCurriculumBacklog(allItems);
    const returnedSummary = summarizeCurriculumBacklog(items);

    if (format === "json") {
      return NextResponse.json({
        generatedAt: new Date().toISOString(),
        sourceGeneratedAt: summary.generatedAt,
        filters: {
          workstream: workstreamFilter,
          priority: priorityFilter,
        },
        limit,
        totalItems: allItems.length,
        returnedItems: items.length,
        summary: returnedSummary,
        fullSummary,
        items,
      });
    }

    const csv = curriculumBacklogToCsv(items);
    const timestamp = new Date().toISOString().slice(0, 10);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="curriculum-backlog-${timestamp}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to export curriculum backlog.",
      },
      { status: 500 },
    );
  }
}
