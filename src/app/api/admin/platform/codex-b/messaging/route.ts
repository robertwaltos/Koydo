import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  applyMessagingSafetyFilters,
  buildTranslationJob,
  markMessageRead,
  messageEntrySchema,
  planNotificationFanout,
} from "@/lib/platform/codex-b/s5-messaging-translation-notifications";

const requestSchema = z.object({
  message: messageEntrySchema,
  markReadUserId: z.string().trim().min(1).max(80).optional(),
  translation: z
    .object({
      sourceLanguage: z.string().trim().min(2).max(16),
      targetLanguage: z.string().trim().min(2).max(16),
      text: z.string().trim().min(1).max(4000),
    })
    .optional(),
  fanoutTargets: z
    .array(
      z.object({
        userId: z.string().trim().min(1).max(80),
        channels: z.array(z.enum(["in_app", "email", "sms", "push"]))
          .min(1)
          .max(4),
      }),
    )
    .max(200)
    .default([]),
});

export async function POST(request: Request) {
  const rate = await enforceIpRateLimit(request, "api:admin:platform:codex-b:messaging:post", {
    max: 30,
    windowMs: 60_000,
  });
  if (!rate.allowed) {
    return NextResponse.json(
      { error: "Too many messaging requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rate.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const parsed = requestSchema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const safety = applyMessagingSafetyFilters(parsed.data.message.body);
    const nextMessage = parsed.data.markReadUserId
      ? markMessageRead(parsed.data.message, parsed.data.markReadUserId)
      : parsed.data.message;
    const translation = parsed.data.translation ? buildTranslationJob(parsed.data.translation) : null;
    const fanout = planNotificationFanout({
      eventType: "message_created",
      targets: parsed.data.fanoutTargets,
    });

    return NextResponse.json({
      message: nextMessage,
      safety,
      translation,
      fanout,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
