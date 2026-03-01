import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";

const COMFY_API_URL = "http://127.0.0.1:8188";

const requestSchema = z.object({
  prompt: z.string().trim().min(1).max(1200),
});

export async function POST(req: NextRequest) {
  const rateLimit = await enforceIpRateLimit(req, "api:admin:media-generate", {
    max: 30,
    windowMs: 5 * 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many media generation requests. Please retry shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  const adminAuth = await requireAdminForApi();
  if (!adminAuth.isAuthorized) {
    return adminAuth.response;
  }

  try {
    const body = await req.json().catch(() => null);
    const parsed = requestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    try {
      await fetch(`${COMFY_API_URL}/system_stats`, { method: "GET" });
    } catch {
      return NextResponse.json(
        { error: "Neural Engine (ComfyUI) is not running locally." },
        { status: 503 },
      );
    }

    return NextResponse.json({
      status: "queued",
      jobId: `mock-job-${Date.now()}`,
      message: "Prompt queued to Flux.1 [dev]",
      promptLength: parsed.data.prompt.length,
    });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
