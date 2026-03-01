import { NextResponse } from "next/server";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { sendOrganizationReportReadyEmail } from "@/lib/email/organization-report-email";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import {
  buildOrganizationReportExport,
  ORGANIZATION_REPORT_FORMATS,
} from "@/lib/organizations/report-exports";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const listQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(200).default(50),
  status: z.enum(["running", "completed", "failed"]).optional(),
});

const postSchema = z.object({
  format: z.enum(ORGANIZATION_REPORT_FORMATS).default("csv"),
  reportWindowDays: z.coerce.number().int().min(1).max(365).default(30),
  schoolName: z.string().trim().max(160).optional(),
  deliverEmails: z.array(z.string().email()).max(20).optional(),
});

type OrganizationRow = {
  id: string;
  name: string;
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

function mapExportRow(
  row: {
    id: string;
    format: string;
    status: string;
    row_count: number;
    byte_size: number;
    checksum_sha256: string | null;
    report_window_days: number;
    metadata: Record<string, unknown> | null;
    requested_by: string;
    created_at: string;
    completed_at: string | null;
  },
  organizationId: string,
) {
  const origin = serverEnv.NEXT_PUBLIC_APP_URL.replace(/\/+$/, "");
  return {
    id: row.id,
    format: row.format,
    status: row.status,
    rowCount: row.row_count,
    byteSize: row.byte_size,
    checksumSha256: row.checksum_sha256,
    reportWindowDays: row.report_window_days,
    requestedBy: row.requested_by,
    schoolFilter:
      typeof row.metadata?.schoolFilter === "string" ? row.metadata.schoolFilter : null,
    createdAt: row.created_at,
    completedAt: row.completed_at,
    downloadUrl:
      row.status === "completed"
        ? `${origin}/api/organizations/${organizationId}/reports/exports/${row.id}/download`
        : null,
  };
}

async function loadOrganization(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  organizationId: string,
) {
  const { data, error } = await admin
    .from("organizations")
    .select("id, name")
    .eq("id", organizationId)
    .maybeSingle();

  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return {
        ok: false as const,
        response: NextResponse.json(
          { error: "Organization tables not migrated yet." },
          { status: 503 },
        ),
      };
    }
    console.error("Failed to load organization for report export.", toSafeErrorRecord(error));
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Failed to load organization details." }, { status: 500 }),
    };
  }

  const organization = data as OrganizationRow | null;
  if (!organization) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Organization not found." }, { status: 404 }),
    };
  }

  return {
    ok: true as const,
    organization,
  };
}

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:reports:exports:get", {
    max: 120,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const url = new URL(request.url);
  const query = listQuerySchema.safeParse({
    limit: url.searchParams.get("limit") ?? undefined,
    status: url.searchParams.get("status") ?? undefined,
  });
  if (!query.success) {
    return NextResponse.json(
      { error: "Invalid query parameters", details: query.error.flatten() },
      { status: 400 },
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

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "teacher", "it_manager", "viewer"],
  );
  if (!membership.ok) return membership.response;

  let exportsQuery = admin
    .from("organization_report_exports")
    .select("id, format, status, row_count, byte_size, checksum_sha256, report_window_days, metadata, requested_by, created_at, completed_at")
    .eq("organization_id", organizationId)
    .order("created_at", { ascending: false })
    .limit(query.data.limit);

  if (query.data.status) {
    exportsQuery = exportsQuery.eq("status", query.data.status);
  }

  const { data, error } = await exportsQuery;
  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization report exports.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load organization report exports." }, { status: 500 });
  }

  return NextResponse.json({
    exports: (data ?? []).map((row) =>
      mapExportRow(
        row as {
          id: string;
          format: string;
          status: string;
          row_count: number;
          byte_size: number;
          checksum_sha256: string | null;
          report_window_days: number;
          metadata: Record<string, unknown> | null;
          requested_by: string;
          created_at: string;
          completed_at: string | null;
        },
        organizationId,
      )),
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:reports:exports:post", {
    max: 30,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const { organizationId } = await context.params;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const membership = await requireOrganizationMembership(
    admin,
    user.id,
    organizationId,
    ["owner", "admin", "teacher", "it_manager"],
  );
  if (!membership.ok) return membership.response;

  const organizationResult = await loadOrganization(admin, organizationId);
  if (!organizationResult.ok) return organizationResult.response;
  const organization = organizationResult.organization;

  const { data: insertedExport, error: insertError } = await admin
    .from("organization_report_exports")
    .insert({
      organization_id: organizationId,
      requested_by: user.id,
      format: parsed.data.format,
      status: "running",
      report_window_days: parsed.data.reportWindowDays,
      metadata: {
        source: "api:organizations:reports:exports:create",
        schoolFilter: parsed.data.schoolName ?? null,
      },
    })
    .select("id")
    .single();

  if (insertError) {
    if (isMissingOrganizationTableError(insertError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to create organization report export record.", toSafeErrorRecord(insertError));
    return NextResponse.json({ error: "Failed to create organization report export." }, { status: 500 });
  }

  try {
    const exportPayload = await buildOrganizationReportExport(admin, {
      organizationId,
      format: parsed.data.format,
      reportWindowDays: parsed.data.reportWindowDays,
      schoolFilter: parsed.data.schoolName ?? null,
    });

    const completedAt = new Date().toISOString();
    const { data: updatedExport, error: updateError } = await admin
      .from("organization_report_exports")
      .update({
        status: "completed",
        row_count: exportPayload.rowCount,
        byte_size: exportPayload.byteSize,
        content_base64: exportPayload.contentBase64,
        checksum_sha256: exportPayload.checksumSha256,
        completed_at: completedAt,
        metadata: {
          source: "api:organizations:reports:exports:create",
          generatedAt: completedAt,
          schoolFilter: parsed.data.schoolName ?? null,
          fileName: exportPayload.fileName,
          contentType: exportPayload.contentType,
        },
      })
      .eq("id", insertedExport.id)
      .select("id, format, status, row_count, byte_size, checksum_sha256, report_window_days, metadata, requested_by, created_at, completed_at")
      .single();

    if (updateError) {
      console.error("Failed to finalize organization report export.", toSafeErrorRecord(updateError));
      return NextResponse.json({ error: "Failed to finalize organization report export." }, { status: 500 });
    }

    const origin = serverEnv.NEXT_PUBLIC_APP_URL.replace(/\/+$/, "");
    const downloadUrl = `${origin}/api/organizations/${organizationId}/reports/exports/${updatedExport.id}/download`;

    const deliveryEmails = Array.from(
      new Set((parsed.data.deliverEmails ?? []).map((email) => email.toLowerCase())),
    );
    const deliveryResults: Array<{ email: string; delivered: boolean; mode: string; reason: string | null }> = [];

    for (const email of deliveryEmails) {
      const delivery = await sendOrganizationReportReadyEmail({
        toEmail: email,
        organizationName: organization.name,
        format: parsed.data.format,
        downloadUrl,
        reportWindowDays: parsed.data.reportWindowDays,
      });
      deliveryResults.push({
        email,
        delivered: delivery.delivered,
        mode: delivery.mode,
        reason: delivery.reason,
      });
    }

    return NextResponse.json({
      export: mapExportRow(
        updatedExport as {
          id: string;
          format: string;
          status: string;
          row_count: number;
          byte_size: number;
          checksum_sha256: string | null;
          report_window_days: number;
          metadata: Record<string, unknown> | null;
          requested_by: string;
          created_at: string;
          completed_at: string | null;
        },
        organizationId,
      ),
      delivery: deliveryResults,
    });
  } catch (error) {
    console.error("Organization report export generation failed.", toSafeErrorRecord(error));
    await admin
      .from("organization_report_exports")
      .update({
        status: "failed",
        completed_at: new Date().toISOString(),
        metadata: {
          source: "api:organizations:reports:exports:create",
          error: "Report generation failed.",
          schoolFilter: parsed.data.schoolName ?? null,
        },
      })
      .eq("id", insertedExport.id);

    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    return NextResponse.json(
      {
        error: "Failed to generate organization report export.",
      },
      { status: 500 },
    );
  }
}
