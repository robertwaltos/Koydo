import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import {
  queryVectorDocuments,
  upsertVectorDocument,
  vectorDocumentSchema,
} from "@/lib/platform/codex-b/s4-vector-rollout-harness";

const querySchema = z.object({
  q: z.string().trim().min(1).max(400).optional(),
  limit: z.coerce.number().int().min(1).max(20).default(5),
});

export async function GET(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:admin:platform:codex-b:vector-index:get", {
    max: 40,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many vector index requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const url = new URL(request.url);
  const parsed = querySchema.safeParse({
    q: url.searchParams.get("q") ?? undefined,
    limit: url.searchParams.get("limit") ?? undefined,
  });

  if (!parsed.success || !parsed.data.q) {
    return NextResponse.json(
      { error: "Missing query string parameter q." },
      { status: 400 },
    );
  }

  try {
    const results = queryVectorDocuments(parsed.data.q, parsed.data.limit);
    return NextResponse.json({
      query: parsed.data.q,
      limit: parsed.data.limit,
      results,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:admin:platform:codex-b:vector-index:post", {
    max: 20,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many vector upsert requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const body = await request.json().catch(() => ({}));
  const parsed = vectorDocumentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  try {
    const upserted = upsertVectorDocument(parsed.data);

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "codex_b_vector_document_upsert",
      metadata: {
        documentId: parsed.data.documentId,
        dimensions: upserted.dimensions,
      },
    });

    return NextResponse.json({
      success: true,
      upserted,
    });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
