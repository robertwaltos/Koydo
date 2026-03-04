import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { runModerationConsensusReview } from "@/lib/moderation/consensus";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  content: z.string().min(1).max(12000),
  requestedAction: z.string().max(40).optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const payload = requestSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload.", details: payload.error.flatten() }, { status: 400 });
  }

  try {
    const review = await runModerationConsensusReview({
      content: payload.data.content,
      requestedAction: payload.data.requestedAction ?? null,
    });
    return NextResponse.json({
      success: true,
      review,
    });
  } catch (error) {
    console.error("Moderation consensus review failed.", toSafeErrorRecord(error));
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to run moderation consensus review." },
      { status: 500 },
    );
  }
}
