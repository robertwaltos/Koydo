import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { loadCurriculumSummary } from "@/lib/admin/curriculum-summary";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const summary = await loadCurriculumSummary();
    return NextResponse.json(summary);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to load curriculum summary.",
      },
      { status: 500 },
    );
  }
}
