import { NextResponse } from "next/server";
import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { sendOrganizationReportReadyEmail } from "@/lib/email/organization-report-email";
import { isMissingOrganizationTableError } from "@/lib/organizations/errors";
import {
  buildOrganizationReportExport,
  computeNextReportRunAfter,
  type OrganizationReportCadence,
  type OrganizationReportFormat,
} from "@/lib/organizations/report-exports";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { timingSafeEqualStrings } from "@/lib/security/safe-compare";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const processSchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(15),
});

type JobRow = {
  id: string;
  organization_id: string;
  requested_by: string;
  format: OrganizationReportFormat;
  report_window_days: number;
  cadence: OrganizationReportCadence;
  run_after: string;
  status: "queued" | "running" | "completed" | "failed";
  delivery_emails: string[] | null;
  metadata: Record<string, unknown> | null;
};

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

async function isAdminUser(userId: string) {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) return false;
  return Boolean(data?.is_admin);
}

async function authorizeRunner(request: Request) {
  const secret = request.headers.get("x-org-report-runner-secret");
  if (
    serverEnv.ORGANIZATION_REPORT_RUNNER_SECRET
    && secret
    && timingSafeEqualStrings(secret, serverEnv.ORGANIZATION_REPORT_RUNNER_SECRET)
  ) {
    return true;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return false;
  }

  return isAdminUser(user.id);
}

export async function POST(request: Request) {
  const rateLimit = await enforceIpRateLimit(request, "api:organizations:reports:jobs:process", {
    max: 20,
    windowMs: 60_000,
  });
  if (!rateLimit.allowed) {
    return rateLimitExceededResponse(rateLimit.retryAfterSeconds);
  }

  const authorized = await authorizeRunner(request);
  if (!authorized) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = processSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const admin = createSupabaseAdminClient();
  const nowIso = new Date().toISOString();
  const { data: queuedJobs, error: jobsError } = await admin
    .from("organization_report_jobs")
    .select("id, organization_id, requested_by, format, report_window_days, cadence, run_after, status, delivery_emails, metadata")
    .eq("status", "queued")
    .lte("run_after", nowIso)
    .order("run_after", { ascending: true })
    .limit(parsed.data.limit);

  if (jobsError) {
    if (isMissingOrganizationTableError(jobsError)) {
      return NextResponse.json(
        { error: "Organization tables not migrated yet." },
        { status: 503 },
      );
    }
    return NextResponse.json({ error: "Failed to load queued report jobs." }, { status: 500 });
  }

  const jobs = (queuedJobs ?? []) as JobRow[];
  if (jobs.length === 0) {
    return NextResponse.json({
      processed: 0,
      message: "No queued organization report jobs are ready.",
    });
  }

  let completed = 0;
  let failed = 0;
  let skipped = 0;
  const results: Array<{
    jobId: string;
    status: "completed" | "failed" | "skipped";
    exportId?: string;
    message?: string;
    nextRunAfter?: string | null;
  }> = [];

  for (const job of jobs) {
    const startedAt = new Date().toISOString();
    const { data: claimed, error: claimError } = await admin
      .from("organization_report_jobs")
      .update({
        status: "running",
        started_at: startedAt,
        completed_at: null,
        error: null,
      })
      .eq("id", job.id)
      .eq("status", "queued")
      .select("id")
      .maybeSingle();

    if (claimError) {
      failed += 1;
      results.push({
        jobId: job.id,
        status: "failed",
        message: "Failed to claim report job.",
      });
      continue;
    }
    if (!claimed?.id) {
      skipped += 1;
      results.push({
        jobId: job.id,
        status: "skipped",
        message: "Job was already claimed by another worker.",
      });
      continue;
    }

    try {
      const schoolFilter =
        typeof job.metadata?.schoolFilter === "string"
          ? job.metadata.schoolFilter
          : null;
      const exportPayload = await buildOrganizationReportExport(admin, {
        organizationId: job.organization_id,
        format: job.format,
        reportWindowDays: job.report_window_days,
        schoolFilter,
      });

      const completedAt = new Date().toISOString();
      const { data: insertedExport, error: exportError } = await admin
        .from("organization_report_exports")
        .insert({
          organization_id: job.organization_id,
          requested_by: job.requested_by,
          format: job.format,
          status: "completed",
          row_count: exportPayload.rowCount,
          byte_size: exportPayload.byteSize,
          content_base64: exportPayload.contentBase64,
          checksum_sha256: exportPayload.checksumSha256,
          report_window_days: job.report_window_days,
          metadata: {
            source: "api:organizations:reports:jobs:process",
            generatedAt: completedAt,
            schoolFilter,
            fileName: exportPayload.fileName,
            contentType: exportPayload.contentType,
            jobId: job.id,
          },
          completed_at: completedAt,
        })
        .select("id")
        .single();

      if (exportError) {
        throw exportError;
      }

      const { data: organizationData } = await admin
        .from("organizations")
        .select("id, name")
        .eq("id", job.organization_id)
        .maybeSingle();
      const organization = organizationData as OrganizationRow | null;

      const deliveryEmails = Array.from(new Set((job.delivery_emails ?? []).map((email) => email.toLowerCase())));
      if (organization && deliveryEmails.length > 0) {
        const origin = serverEnv.NEXT_PUBLIC_APP_URL.replace(/\/+$/, "");
        const downloadUrl = `${origin}/api/organizations/${job.organization_id}/reports/exports/${insertedExport.id}/download`;
        for (const email of deliveryEmails) {
          await sendOrganizationReportReadyEmail({
            toEmail: email,
            organizationName: organization.name,
            format: job.format,
            downloadUrl,
            reportWindowDays: job.report_window_days,
          });
        }
      }

      let nextRunAfter: string | null = null;
      if (job.cadence !== "once") {
        nextRunAfter = computeNextReportRunAfter(job.cadence, completedAt);
        const { error: nextJobError } = await admin
          .from("organization_report_jobs")
          .insert({
            organization_id: job.organization_id,
            requested_by: job.requested_by,
            format: job.format,
            report_window_days: job.report_window_days,
            cadence: job.cadence,
            run_after: nextRunAfter,
            status: "queued",
            delivery_emails: job.delivery_emails ?? [],
            metadata: {
              ...(job.metadata ?? {}),
              source: "api:organizations:reports:jobs:process",
              previousJobId: job.id,
            },
          });

        if (nextJobError) {
          throw nextJobError;
        }
      }

      const { error: completeJobError } = await admin
        .from("organization_report_jobs")
        .update({
          status: "completed",
          completed_at: completedAt,
          error: null,
        })
        .eq("id", job.id)
        .eq("status", "running");

      if (completeJobError) {
        throw completeJobError;
      }

      completed += 1;
      results.push({
        jobId: job.id,
        status: "completed",
        exportId: insertedExport.id,
        nextRunAfter,
      });
    } catch (error) {
      const message = "Report job processing failed.";
      console.error("Organization report job failed.", toSafeErrorRecord(error));
      await admin
        .from("organization_report_jobs")
        .update({
          status: "failed",
          completed_at: new Date().toISOString(),
          error: message,
        })
        .eq("id", job.id)
        .eq("status", "running");

      failed += 1;
      results.push({
        jobId: job.id,
        status: "failed",
        message,
      });
    }
  }

  return NextResponse.json({
    processed: jobs.length,
    completed,
    failed,
    skipped,
    results,
  });
}
