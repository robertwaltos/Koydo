import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { requireFeature } from "@/lib/platform/require-feature";

/**
 * GET /api/resources?moduleId=xxx — downloadable resources for a module
 */
export async function GET(request: Request) {
  const gate = await requireFeature("downloadable_resources", request);
  if (gate) return gate;

  const supabase = await createSupabaseServerClient();
  const { searchParams } = new URL(request.url);
  const moduleId = searchParams.get("moduleId");

  if (!moduleId) {
    return NextResponse.json({ error: "Missing moduleId" }, { status: 400 });
  }

  const { data: resources, error } = await supabase
    .from("module_resources")
    .select("id, title, file_type, size_kb, storage_path")
    .eq("module_id", moduleId)
    .order("title");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Generate signed download URLs for storage paths
  const withUrls = await Promise.all(
    (resources ?? []).map(async (r) => {
      const { data } = await supabase.storage
        .from("resources")
        .createSignedUrl(r.storage_path, 3600); // 1 hour expiry
      return {
        id: r.id,
        title: r.title,
        file_type: r.file_type,
        size_kb: r.size_kb,
        download_url: data?.signedUrl ?? null,
      };
    }),
  );

  return NextResponse.json({ resources: withUrls });
}
