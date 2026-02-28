import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { queryGrokManifestAssets } from "@/lib/media/grok-manifest-catalog";

const catalogQuerySchema = z.object({
  group: z.string().trim().min(1).max(1).optional(),
  usagePath: z.string().trim().min(1).max(120).optional(),
  q: z.string().trim().min(1).max(120).optional(),
  limit: z
    .coerce.number()
    .int()
    .min(1)
    .max(200)
    .default(50),
  offset: z
    .coerce.number()
    .int()
    .min(0)
    .default(0),
});

export async function GET(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const { searchParams } = new URL(request.url);
  const parsed = catalogQuerySchema.safeParse({
    group: searchParams.get("group") ?? undefined,
    usagePath: searchParams.get("usagePath") ?? undefined,
    q: searchParams.get("q") ?? undefined,
    limit: searchParams.get("limit") ?? undefined,
    offset: searchParams.get("offset") ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid query", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const result = await queryGrokManifestAssets(parsed.data);
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to read manifest catalog.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

