import { createHash } from "crypto";
import { createSimpleTextPdf } from "@/lib/pdf/simple-text-pdf";
import {
  buildOrganizationReportSnapshot,
  organizationReportToCsv,
  organizationReportToPlainText,
  type OrganizationReportSnapshot,
} from "@/lib/organizations/reporting";
import type { SupabaseClient } from "@supabase/supabase-js";

export const ORGANIZATION_REPORT_FORMATS = ["csv", "pdf"] as const;
export type OrganizationReportFormat = (typeof ORGANIZATION_REPORT_FORMATS)[number];

export const ORGANIZATION_REPORT_CADENCES = ["once", "daily", "weekly", "monthly"] as const;
export type OrganizationReportCadence = (typeof ORGANIZATION_REPORT_CADENCES)[number];

export type BuiltOrganizationReportExport = {
  snapshot: OrganizationReportSnapshot;
  format: OrganizationReportFormat;
  contentBuffer: Buffer;
  contentBase64: string;
  contentType: string;
  fileName: string;
  rowCount: number;
  byteSize: number;
  checksumSha256: string;
};

function toSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
}

function buildOrganizationReportFileName(snapshot: OrganizationReportSnapshot, format: OrganizationReportFormat) {
  const datePart = snapshot.sinceIso.slice(0, 10).replace(/-/g, "");
  const org = toSlug(snapshot.organization.slug || snapshot.organization.name || "organization");
  return `${org}-report-${datePart}.${format}`;
}

export function computeNextReportRunAfter(cadence: OrganizationReportCadence, fromIso: string) {
  const current = new Date(fromIso);
  if (Number.isNaN(current.getTime())) {
    return new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
  }

  switch (cadence) {
    case "daily":
      current.setUTCDate(current.getUTCDate() + 1);
      break;
    case "weekly":
      current.setUTCDate(current.getUTCDate() + 7);
      break;
    case "monthly":
      current.setUTCMonth(current.getUTCMonth() + 1);
      break;
    default:
      current.setUTCDate(current.getUTCDate() + 1);
      break;
  }

  return current.toISOString();
}

export async function buildOrganizationReportExport(
  admin: SupabaseClient,
  params: {
    organizationId: string;
    format: OrganizationReportFormat;
    reportWindowDays: number;
    schoolFilter?: string | null;
  },
): Promise<BuiltOrganizationReportExport> {
  const snapshot = await buildOrganizationReportSnapshot(admin, {
    organizationId: params.organizationId,
    reportWindowDays: params.reportWindowDays,
    schoolFilter: params.schoolFilter ?? null,
  });

  let contentBuffer: Buffer;
  let contentType: string;
  let rowCount: number;

  if (params.format === "csv") {
    const csv = organizationReportToCsv(snapshot);
    contentBuffer = Buffer.from(csv, "utf8");
    contentType = "text/csv; charset=utf-8";
    rowCount = snapshot.bySchool.length + snapshot.byLearner.length + 1;
  } else {
    const text = organizationReportToPlainText(snapshot);
    contentBuffer = createSimpleTextPdf({
      title: `${snapshot.organization.name} Report`,
      text,
    });
    contentType = "application/pdf";
    rowCount = text.split(/\r?\n/).length;
  }

  const checksumSha256 = createHash("sha256").update(contentBuffer).digest("hex");

  return {
    snapshot,
    format: params.format,
    contentBuffer,
    contentBase64: contentBuffer.toString("base64"),
    contentType,
    fileName: buildOrganizationReportFileName(snapshot, params.format),
    rowCount,
    byteSize: contentBuffer.byteLength,
    checksumSha256,
  };
}
