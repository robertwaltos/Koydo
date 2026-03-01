import { NextResponse } from "next/server";
import { z } from "zod";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import { requireOrganizationMembership } from "@/lib/organizations/membership";
import {
  ORGANIZATION_REPORT_CADENCES,
  ORGANIZATION_REPORT_FORMATS,
} from "@/lib/organizations/report-exports";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const listQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(200).default(100),
  status: z.enum(["queued", "running", "completed", "failed"]).optional(),
  cadence: z.enum(ORGANIZATION_REPORT_CADENCES).optional(),
});

const postSchema = z.object({
  format: z.enum(ORGANIZATION_REPORT_FORMATS).default("csv"),
  reportWindowDays: z.coerce.number().int().min(1).max(365).default(30),
  cadence: z.enum(ORGANIZATION_REPORT_CADENCES).default("once"),
  runAfter: z.string().datetime().optional(),
  deliveryEmails: z.array(z.string().email()).max(20).optional(),
  schoolName: z.string().trim().max(160).optional(),
});

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

function mapJobRow(
  row: {
    id: string;
    format: string;
    report_window_days: number;
    cadence: string;
    run_after: string;
    status: string;
    delivery_emails: string[];
    metadata: Record<string, unknown> | null;
    started_at: string | null;
    completed_at: string | null;
    error: string | null;
    requested_by: string;
    created_at: string;
    updated_at: string;
  },
) {
  return {
    id: row.id,
    format: row.format,
    reportWindowDays: row.report_window_days,
    cadence: row.cadence,
    runAfter: row.run_after,
    status: row.status,
    deliveryEmails: row.delivery_emails,
    schoolFilter:
      typeof row.metadata?.schoolFilter === "string" ? row.metadata.schoolFilter : null,
    startedAt: row.started_at,
    completedAt: row.completed_at,
    error: row.error,
    requestedBy: row.requested_by,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function GET(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:reports:jobs:get", {
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
    cadence: url.searchParams.get("cadence") ?? undefined,
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

  let jobsQuery = admin
    .from("organization_report_jobs")
    .select("id, format, report_window_days, cadence, run_after, status, delivery_emails, metadata, started_at, completed_at, error, requested_by, created_at, updated_at")
    .eq("organization_id", organizationId)
    .order("created_at", { ascending: false })
    .limit(query.data.limit);

  if (query.data.status) {
    jobsQuery = jobsQuery.eq("status", query.data.status);
  }
  if (query.data.cadence) {
    jobsQuery = jobsQuery.eq("cadence", query.data.cadence);
  }

  const { data, error } = await jobsQuery;
  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to load organization report jobs.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load organization report jobs." }, { status: 500 });
  }

  return NextResponse.json({
    jobs: (data ?? []).map((row) =>
      mapJobRow(
        row as {
          id: string;
          format: string;
          report_window_days: number;
          cadence: string;
          run_after: string;
          status: string;
          delivery_emails: string[];
          metadata: Record<string, unknown> | null;
          started_at: string | null;
          completed_at: string | null;
          error: string | null;
          requested_by: string;
          created_at: string;
          updated_at: string;
        },
      )),
  });
}

export async function POST(
  request: Request,
  context: { params: Promise<{ organizationId: string }> },
) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:reports:jobs:post", {
    max: 45,
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

  const runAfter = parsed.data.runAfter ?? new Date().toISOString();
  const deliveryEmails = Array.from(
    new Set((parsed.data.deliveryEmails ?? []).map((email) => email.toLowerCase())),
  );

  const { data, error } = await admin
    .from("organization_report_jobs")
    .insert({
      organization_id: organizationId,
      requested_by: user.id,
      format: parsed.data.format,
      report_window_days: parsed.data.reportWindowDays,
      cadence: parsed.data.cadence,
      run_after: runAfter,
      status: "queued",
      delivery_emails: deliveryEmails,
      metadata: {
        source: "api:organizations:reports:jobs:create",
        schoolFilter: parsed.data.schoolName ?? null,
      },
    })
    .select("id, format, report_window_days, cadence, run_after, status, delivery_emails, metadata, started_at, completed_at, error, requested_by, created_at, updated_at")
    .single();

  if (error) {
    if (isMissingOrganizationTableError(error)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    console.error("Failed to create organization report job.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to create organization report job." }, { status: 500 });
  }

  return NextResponse.json({
    job: mapJobRow(
      data as {
        id: string;
        format: string;
        report_window_days: number;
        cadence: string;
        run_after: string;
        status: string;
        delivery_emails: string[];
        metadata: Record<string, unknown> | null;
        started_at: string | null;
        completed_at: string | null;
        error: string | null;
        requested_by: string;
        created_at: string;
        updated_at: string;
      },
    ),
  });
}
