import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { resolveVoyagerAccessForServerRequest } from "@/lib/experience/voyager-access";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const feedbackSchema = z.object({
  simulationId: z.string().min(1).max(120).optional(),
  message: z.string().min(10).max(4000),
  device: z.string().min(1).max(120).optional(),
});

export async function POST(request: Request) {
  const access = await resolveVoyagerAccessForServerRequest();
  if (!access.fullAccess) {
    return NextResponse.json(
      {
        error: "Voyager beta feedback is limited to approved beta classes.",
      },
      { status: 403 },
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

  const payload = feedbackSchema.safeParse(await request.json().catch(() => null));
  if (!payload.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: payload.error.flatten() },
      { status: 400 },
    );
  }

  const { simulationId, message, device } = payload.data;
  const subjectParts = ["Voyager Beta Feedback"];
  if (simulationId) subjectParts.push(simulationId);
  const subject = subjectParts.join(" - ");
  const description =
    [
      `Access classes: ${access.matchedClasses.join(", ") || "unknown"}`,
      device ? `Device: ${device}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n")
      .slice(0, 3900);

  const { data, error } = await supabase
    .from("support_tickets")
    .insert({
      user_id: user.id,
      subject,
      description,
      priority: "normal",
      ticket_type: "general",
      parent_confirmation_required: false,
      parent_confirmation_status: "not_required",
      ai_response_status: "pending",
      account_scope_user_id: user.id,
    })
    .select("id, created_at")
    .single();

  if (error) {
    console.error("Failed to submit Voyager beta feedback.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to submit beta feedback." }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    ticketId: data.id,
    createdAt: data.created_at,
  });
}
