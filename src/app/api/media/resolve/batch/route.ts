import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const batchResolveSchema = z.object({
  assetType: z.enum(["video", "animation", "image"]).default("image"),
  moduleIds: z.array(z.string().trim().min(1)).min(1).max(100),
});

function parseModuleIds(value: string | null) {
  if (!value) return [];
  return Array.from(
    new Set(
      value
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean),
    ),
  );
}

export async function GET(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const parsed = batchResolveSchema.safeParse({
    assetType: searchParams.get("assetType") ?? "image",
    moduleIds: parseModuleIds(searchParams.get("moduleIds")),
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid query", details: parsed.error.flatten() }, { status: 400 });
  }

  const { assetType, moduleIds } = parsed.data;
  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("media_generation_jobs")
    .select("module_id, output_url, completed_at")
    .eq("asset_type", assetType)
    .eq("status", "completed")
    .not("output_url", "is", null)
    .in("module_id", moduleIds)
    .order("completed_at", { ascending: false })
    .limit(5000);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const resolved: Record<string, string | null> = {};
  const completedAt: Record<string, string | null> = {};

  for (const moduleId of moduleIds) {
    resolved[moduleId] = null;
    completedAt[moduleId] = null;
  }

  for (const row of data ?? []) {
    if (!row.module_id || !row.output_url) continue;
    if (!(row.module_id in resolved)) continue;
    if (resolved[row.module_id]) continue;
    resolved[row.module_id] = row.output_url;
    completedAt[row.module_id] = row.completed_at ?? null;
  }

  return NextResponse.json({
    assetType,
    resolved,
    completedAt,
  });
}
