import { NextResponse } from "next/server";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type ExportRow = {
  id: string;
  format: "csv" | "pdf";
  status: "running" | "completed" | "failed";
  content_base64: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

function rateLimitExceededResponse(retryAfterSeconds: number) {
  return NextResponse.json(
    { error: "Too many requests. Please retry shortly." },
    {
      status: 429,
      headers: {
        "Retry-After": String(retryAfterSeconds),
      },
    },
  );
}

function fallbackFileName(format: "csv" | "pdf", organizationId: string, exportId: string) {
  const orgPrefix = organizationId.replace(/-/g, "").slice(0, 8).toLowerCase();
  const exportPrefix = exportId.replace(/-/g, "").slice(0, 8).toLowerCase();
  return `organization-${orgPrefix}-report-${exportPrefix}.${format}`;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string; exportId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:reports:exports:download", {
    max: 180,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId, exportId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "teacher", "it_manager", "viewer"],
  );
  if (!membership.ok) return membership.response;

  const { data, error } = await admin
    .from("organization_report_exports")
    .select("id, format, status, content_base64, metadata, created_at")
    .eq("organization_id", organizationId)
    .eq("id", exportId)
    .maybeSingle();

  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization report export for download.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load organization report export." }, { status: 500 });
  }

  const row = data as ExportRow | null;
  if (!row) {
    return NextResponse.json({ error: "Export not found." }, { status: 404 });
  }

  if (row.status !== "completed") {
    return NextResponse.json(
      { error: `Export status is ${row.status}. File is not ready for download.` },
      { status: 409 },
    );
  }

  if (!row.content_base64) {
    return NextResponse.json(
      { error: "Export is completed but no file content is stored." },
      { status: 500 },
    );
  }

  const buffer = Buffer.from(row.content_base64, "base64");
  const contentType = row.format === "csv" ? "text/csv; charset=utf-8" : "application/pdf";
  const fileName =
    (typeof row.metadata?.fileName === "string" && row.metadata.fileName.trim()) ||
    fallbackFileName(row.format, organizationId, exportId);

  return new Response(buffer, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "no-store",
    },
  });
}
