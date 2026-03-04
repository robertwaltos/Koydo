import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toCsv } from "@/lib/admin/csv";
import { logReportExport } from "@/lib/admin/report-export";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data: run, error: runError } = await admin
    .from("compliance_audit_runs")
    .select(
      "id, status, score, target_score, checks_total, checks_pass, checks_warn, checks_fail, evidence_artifact_id, completed_at, created_at",
    )
    .eq("scope", "app_store")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (runError) {
    console.error("Failed to query compliance audit run.", toSafeErrorRecord(runError));
    return new Response(JSON.stringify({ error: "Failed to query compliance audit run." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const rows: Array<Record<string, string | number | null>> = [];
  if (run) {
    rows.push(
      { section: "run", key: "status", source: "", region: "", value_numeric: null, value_text: String(run.status) },
      { section: "run", key: "score", source: "", region: "", value_numeric: Number(run.score ?? 0), value_text: null },
      { section: "run", key: "target_score", source: "", region: "", value_numeric: Number(run.target_score ?? 10), value_text: null },
      { section: "run", key: "checks_total", source: "", region: "", value_numeric: Number(run.checks_total ?? 0), value_text: null },
      { section: "run", key: "checks_pass", source: "", region: "", value_numeric: Number(run.checks_pass ?? 0), value_text: null },
      { section: "run", key: "checks_warn", source: "", region: "", value_numeric: Number(run.checks_warn ?? 0), value_text: null },
      { section: "run", key: "checks_fail", source: "", region: "", value_numeric: Number(run.checks_fail ?? 0), value_text: null },
      {
        section: "run",
        key: "evidence_artifact_id",
        source: "",
        region: "",
        value_numeric: null,
        value_text: String(run.evidence_artifact_id ?? ""),
      },
    );

    const { data: findings, error: findingsError } = await admin
      .from("compliance_audit_findings")
      .select("pass_name, finding_key, severity, title, detail, remediation")
      .eq("run_id", run.id)
      .order("created_at", { ascending: true });
    if (findingsError) {
      console.error("Failed to query compliance audit findings.", toSafeErrorRecord(findingsError));
      return new Response(JSON.stringify({ error: "Failed to query compliance audit findings." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    for (const finding of findings ?? []) {
      rows.push({
        section: `finding_${finding.severity}`,
        key: `${finding.pass_name}:${finding.finding_key}`,
        source: String(finding.pass_name ?? ""),
        region: "",
        value_numeric: null,
        value_text: `${finding.title ?? ""} | ${finding.detail ?? ""}${finding.remediation ? ` | remediation=${finding.remediation}` : ""}`,
      });
    }
  } else {
    rows.push({
      section: "warning",
      key: "no_run",
      source: "",
      region: "",
      value_numeric: null,
      value_text: "No triple-pass compliance audit run found.",
    });
  }

  const columns = ["section", "key", "source", "region", "value_numeric", "value_text"];
  const csv = toCsv(rows, columns);
  const { exportId, checksum } = await logReportExport({
    adminUserId: auth.userId,
    reportType: "compliance_audit",
    csvContent: csv,
    rowCount: rows.length,
  });

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="compliance-audit-report-${new Date().toISOString().slice(0, 10)}.csv"`,
      "X-Export-Id": exportId,
      "X-Checksum-SHA256": checksum,
    },
  });
}
