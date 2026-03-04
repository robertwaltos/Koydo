import type { SupabaseClient } from "@supabase/supabase-js";
import { appStoreComplianceChecklist } from "@/lib/compliance/app-store-checklist";
import { runDbReadinessChecks, type DbReadinessRow } from "@/lib/admin/db-readiness";
import { runEnvReadinessChecks } from "@/lib/admin/env-readiness";
import { serverEnv } from "@/lib/config/env";
import { loadSupportRuntimeConfig } from "@/lib/support/config";
import { storeComplianceEvidenceArtifact } from "@/lib/compliance/evidence-vault";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

type Severity = "pass" | "warn" | "fail";

type TriplePassName =
  | "policy_store_readiness"
  | "security_data_controls"
  | "automation_monitoring";

type Finding = {
  passName: TriplePassName;
  findingKey: string;
  severity: Severity;
  title: string;
  detail: string;
  remediation: string | null;
  metadata?: Record<string, unknown>;
};

type TriplePassSummary = {
  passName: TriplePassName;
  checksTotal: number;
  passCount: number;
  warnCount: number;
  failCount: number;
};

function round2(value: number) {
  return Math.round(value * 100) / 100;
}

function bySeverity(findings: Finding[], severity: Severity) {
  return findings.filter((finding) => finding.severity === severity).length;
}

function normalizeTargetScore(targetScore?: number) {
  const fallback = serverEnv.COMPLIANCE_TRIPLE_PASS_TARGET_SCORE;
  const value = Number.isFinite(targetScore) ? Number(targetScore) : fallback;
  return Math.max(1, Math.min(10, value));
}

async function countStaleReportJobs(admin: SupabaseClient) {
  const staleCutoff = new Date(Date.now() - 90 * 60 * 1000).toISOString();
  const { count, error } = await admin
    .from("admin_report_jobs")
    .select("id", { count: "exact", head: true })
    .eq("status", "running")
    .lt("started_at", staleCutoff);
  if (error) throw new Error(error.message);
  return count ?? 0;
}

async function countRecentReportExports(admin: SupabaseClient) {
  const sinceIso = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString();
  const { count, error } = await admin
    .from("admin_report_exports")
    .select("id", { count: "exact", head: true })
    .gte("created_at", sinceIso);
  if (error) throw new Error(error.message);
  return count ?? 0;
}

async function loadOwnerFactorCoverage(admin: SupabaseClient) {
  const [ownersResult, factorsResult] = await Promise.all([
    admin
      .from("user_profiles")
      .select("user_id", { count: "exact", head: false })
      .eq("is_owner", true),
    admin
      .from("owner_security_factors")
      .select("user_id,verified_at")
      .is("disabled_at", null),
  ]);

  if (ownersResult.error) throw new Error(ownersResult.error.message);
  if (factorsResult.error) throw new Error(factorsResult.error.message);

  const ownerIds = new Set(
    (ownersResult.data ?? [])
      .map((row) => (typeof row.user_id === "string" ? row.user_id : null))
      .filter((value): value is string => Boolean(value)),
  );
  const coveredOwnerIds = new Set(
    (factorsResult.data ?? [])
      .map((row) => {
        if (!row.verified_at || typeof row.user_id !== "string") return null;
        return row.user_id;
      })
      .filter((value): value is string => Boolean(value)),
  );

  let covered = 0;
  for (const ownerId of ownerIds) {
    if (coveredOwnerIds.has(ownerId)) covered += 1;
  }

  return {
    totalOwners: ownerIds.size,
    ownersWithVerifiedFactor: covered,
  };
}

function requiredTableStatus(dbRows: DbReadinessRow[], table: string) {
  return dbRows.find((row) => row.table === table)?.status ?? "missing";
}

function summarizeByPass(findings: Finding[]): TriplePassSummary[] {
  const passNames: TriplePassName[] = [
    "policy_store_readiness",
    "security_data_controls",
    "automation_monitoring",
  ];
  return passNames.map((passName) => {
    const scoped = findings.filter((finding) => finding.passName === passName);
    return {
      passName,
      checksTotal: scoped.length,
      passCount: bySeverity(scoped, "pass"),
      warnCount: bySeverity(scoped, "warn"),
      failCount: bySeverity(scoped, "fail"),
    };
  });
}

export async function runTriplePassComplianceAudit({
  admin,
  initiatedBy,
  targetScore,
}: {
  admin: SupabaseClient;
  initiatedBy: string | null;
  targetScore?: number;
}) {
  const normalizedTarget = normalizeTargetScore(targetScore);
  const startedAt = new Date().toISOString();
  const { data: runRow, error: runCreateError } = await admin
    .from("compliance_audit_runs")
    .insert({
      initiated_by: initiatedBy,
      scope: "app_store",
      status: "running",
      target_score: normalizedTarget,
      started_at: startedAt,
    })
    .select("id")
    .single<{ id: string }>();
  if (runCreateError || !runRow?.id) {
    throw new Error(runCreateError?.message ?? "Failed to create compliance audit run.");
  }

  const runId = runRow.id;

  try {
    const [
      envReadiness,
      dbReadiness,
      supportConfig,
      staleReportJobs,
      recentReportExports,
      ownerCoverage,
      staleModerationJobsResult,
      pendingModerationJobsResult,
      slaBreachCountResult,
    ] = await Promise.all([
      Promise.resolve(runEnvReadinessChecks()),
      runDbReadinessChecks(admin),
      loadSupportRuntimeConfig(admin),
      countStaleReportJobs(admin),
      countRecentReportExports(admin),
      loadOwnerFactorCoverage(admin),
      admin
        .from("content_moderation_jobs")
        .select("id", { count: "exact", head: true })
        .eq("status", "running")
        .lt("run_started_at", new Date(Date.now() - 60 * 60 * 1000).toISOString()),
      admin
        .from("content_moderation_jobs")
        .select("id", { count: "exact", head: true })
        .eq("status", "queued"),
      admin
        .from("support_tickets")
        .select("id", { count: "exact", head: true })
        .is("first_response_at", null)
        .in("status", ["open", "in_progress"])
        .lt("first_response_due_at", new Date().toISOString()),
    ]);

    if (staleModerationJobsResult.error) throw new Error(staleModerationJobsResult.error.message);
    if (pendingModerationJobsResult.error) throw new Error(pendingModerationJobsResult.error.message);
    if (slaBreachCountResult.error) throw new Error(slaBreachCountResult.error.message);

    const findings: Finding[] = [];
    const addFinding = (finding: Finding) => findings.push(finding);

    const checklistPending = appStoreComplianceChecklist.filter((item) => item.status !== "implemented");
    addFinding({
      passName: "policy_store_readiness",
      findingKey: "checklist_implemented",
      severity: checklistPending.length === 0 ? "pass" : "fail",
      title: "App store readiness checklist",
      detail:
        checklistPending.length === 0
          ? "All checklist controls are marked implemented."
          : `${checklistPending.length} checklist item(s) remain non-implemented.`,
      remediation:
        checklistPending.length === 0
          ? null
          : "Complete non-implemented checklist controls before submission.",
      metadata: {
        pendingIds: checklistPending.map((item) => item.id),
      },
    });
    addFinding({
      passName: "policy_store_readiness",
      findingKey: "support_contact_config",
      severity:
        supportConfig.supportEmail
        && supportConfig.emergencyPhone.replace(/[^0-9]/g, "").length >= 7
          ? "pass"
          : "fail",
      title: "Support contact disclosure",
      detail: `Email=${supportConfig.supportEmail}; EmergencyPhone=${supportConfig.emergencyPhone}`,
      remediation:
        supportConfig.emergencyPhone.replace(/[^0-9]/g, "").length >= 7
          ? null
          : "Configure SUPPORT_EMERGENCY_PHONE/app_settings support_emergency_phone with a valid number.",
    });
    addFinding({
      passName: "policy_store_readiness",
      findingKey: "paid_parent_sla_config",
      severity:
        supportConfig.parentPortalPaidSlaHours >= 1 && supportConfig.parentPortalPaidSlaHours <= 168
          ? "pass"
          : "warn",
      title: "Paid parent portal response-target configuration",
      detail: `Configured parent first-response target: ${supportConfig.parentPortalPaidSlaHours} hour(s).`,
      remediation:
        supportConfig.parentPortalPaidSlaHours >= 1 && supportConfig.parentPortalPaidSlaHours <= 168
          ? null
          : "Set PARENT_PORTAL_PAID_RESPONSE_SLA_HOURS between 1 and 168.",
    });
    addFinding({
      passName: "policy_store_readiness",
      findingKey: "sla_breach_backlog",
      severity: (slaBreachCountResult.count ?? 0) > 0 ? "warn" : "pass",
      title: "Support response-target overdue backlog",
      detail:
        (slaBreachCountResult.count ?? 0) > 0
          ? `${slaBreachCountResult.count ?? 0} ticket(s) have passed first_response_due_at without first_response_at.`
          : "No current first-response target overdues.",
      remediation:
        (slaBreachCountResult.count ?? 0) > 0
          ? "Address overdue tickets and tune alerting/escalation coverage."
          : null,
    });

    addFinding({
      passName: "security_data_controls",
      findingKey: "environment_critical",
      severity: envReadiness.totals.fail > 0 ? "fail" : "pass",
      title: "Environment readiness",
      detail: `Env checks: pass=${envReadiness.totals.pass}, warn=${envReadiness.totals.warn}, fail=${envReadiness.totals.fail}.`,
      remediation:
        envReadiness.totals.fail > 0
          ? "Resolve failed readiness checks before launch."
          : null,
    });
    addFinding({
      passName: "security_data_controls",
      findingKey: "db_readiness",
      severity: dbReadiness.healthy ? "pass" : "fail",
      title: "Database readiness",
      detail: `DB checks: present=${dbReadiness.totals.present}, missing=${dbReadiness.totals.missing}, error=${dbReadiness.totals.error}.`,
      remediation:
        dbReadiness.healthy
          ? null
          : "Apply missing migrations and fix DB table access errors.",
    });
    addFinding({
      passName: "security_data_controls",
      findingKey: "owner_mfa_coverage",
      severity:
        ownerCoverage.totalOwners === 0
          ? "warn"
          : ownerCoverage.ownersWithVerifiedFactor >= ownerCoverage.totalOwners
            ? "pass"
            : "fail",
      title: "Owner MFA factor coverage",
      detail: `Owners with verified factors: ${ownerCoverage.ownersWithVerifiedFactor}/${ownerCoverage.totalOwners}.`,
      remediation:
        ownerCoverage.totalOwners === 0
          ? "Designate at least one owner account."
          : ownerCoverage.ownersWithVerifiedFactor >= ownerCoverage.totalOwners
            ? null
            : "Provision and verify MFA factors for all owner accounts.",
    });
    addFinding({
      passName: "security_data_controls",
      findingKey: "parent_challenge_tables",
      severity:
        requiredTableStatus(dbReadiness.tables, "parent_account_change_challenges") === "present"
        && requiredTableStatus(dbReadiness.tables, "parent_security_factors") === "present"
          ? "pass"
          : "fail",
      title: "Parent account-change confirmation tables",
      detail:
        `parent_account_change_challenges=${requiredTableStatus(dbReadiness.tables, "parent_account_change_challenges")}; `
        + `parent_security_factors=${requiredTableStatus(dbReadiness.tables, "parent_security_factors")}.`,
      remediation:
        requiredTableStatus(dbReadiness.tables, "parent_account_change_challenges") === "present"
        && requiredTableStatus(dbReadiness.tables, "parent_security_factors") === "present"
          ? null
          : "Apply migrations for parent security confirmation controls.",
    });

    const staleModerationJobs = staleModerationJobsResult.count ?? 0;
    const pendingModerationJobs = pendingModerationJobsResult.count ?? 0;
    addFinding({
      passName: "automation_monitoring",
      findingKey: "report_job_stalls",
      severity: staleReportJobs > 0 ? "warn" : "pass",
      title: "Report pipeline stall detection",
      detail:
        staleReportJobs > 0
          ? `${staleReportJobs} stale running report job(s) detected.`
          : "No stale report jobs detected.",
      remediation:
        staleReportJobs > 0
          ? "Run stale requeue automation and review report job worker health."
          : null,
    });
    addFinding({
      passName: "automation_monitoring",
      findingKey: "moderation_job_stalls",
      severity: staleModerationJobs > 0 ? "warn" : "pass",
      title: "Moderation pipeline stall detection",
      detail:
        staleModerationJobs > 0
          ? `${staleModerationJobs} stale running moderation job(s); queued backlog=${pendingModerationJobs}.`
          : `Moderation queue healthy; queued backlog=${pendingModerationJobs}.`,
      remediation:
        staleModerationJobs > 0
          ? "Requeue stale moderation jobs and validate provider timeouts."
          : null,
    });
    addFinding({
      passName: "automation_monitoring",
      findingKey: "report_export_activity",
      severity: recentReportExports > 0 ? "pass" : "warn",
      title: "Automated reporting evidence activity",
      detail:
        recentReportExports > 0
          ? `${recentReportExports} admin report export(s) generated in last 14 days.`
          : "No recent report export evidence in the last 14 days.",
      remediation:
        recentReportExports > 0
          ? null
          : "Schedule report jobs and ensure processors are active.",
    });
    addFinding({
      passName: "automation_monitoring",
      findingKey: "evidence_provider",
      severity:
        serverEnv.COMPLIANCE_EVIDENCE_STORAGE_PROVIDER === "supabase_storage"
        || serverEnv.COMPLIANCE_EVIDENCE_STORAGE_PROVIDER === "google_vault_export"
        || serverEnv.COMPLIANCE_EVIDENCE_STORAGE_PROVIDER === "external_archive"
        || serverEnv.COMPLIANCE_EVIDENCE_STORAGE_PROVIDER === "inline"
          ? "pass"
          : "warn",
      title: "Compliance evidence provider",
      detail: `Configured evidence provider: ${serverEnv.COMPLIANCE_EVIDENCE_STORAGE_PROVIDER}.`,
      remediation: null,
    });

    const checksTotal = findings.length;
    const checksPass = bySeverity(findings, "pass");
    const checksWarn = bySeverity(findings, "warn");
    const checksFail = bySeverity(findings, "fail");
    const score = round2((((checksPass + checksWarn * 0.5) / Math.max(1, checksTotal)) * 10));
    const passSummary = summarizeByPass(findings);

    const evidencePayload = JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        runId,
        checksTotal,
        checksPass,
        checksWarn,
        checksFail,
        score,
        targetScore: normalizedTarget,
        passSummary,
        findings,
      },
      null,
      2,
    );
    const evidence = await storeComplianceEvidenceArtifact(
      {
        artifactType: "compliance_audit_report",
        createdBy: initiatedBy,
        storageProvider: serverEnv.COMPLIANCE_EVIDENCE_STORAGE_PROVIDER,
        storagePath: `compliance/audits/${runId}.json`,
        content: evidencePayload,
        retentionDays: serverEnv.COMPLIANCE_EVIDENCE_RETENTION_DAYS,
        metadata: {
          runId,
          score,
          targetScore: normalizedTarget,
        },
      },
      admin,
    );

    if (findings.length > 0) {
      const { error: findingsInsertError } = await admin.from("compliance_audit_findings").insert(
        findings.map((finding) => ({
          run_id: runId,
          pass_name: finding.passName,
          finding_key: finding.findingKey,
          severity: finding.severity,
          title: finding.title,
          detail: finding.detail,
          remediation: finding.remediation,
          metadata: finding.metadata ?? {},
        })),
      );
      if (findingsInsertError) {
        throw new Error(findingsInsertError.message);
      }
    }

    const report = {
      generatedAt: new Date().toISOString(),
      score,
      targetScore: normalizedTarget,
      checks: {
        total: checksTotal,
        pass: checksPass,
        warn: checksWarn,
        fail: checksFail,
      },
      passSummary,
      findings,
      environment: {
        runtime: envReadiness.runtime,
      },
      support: {
        paidParentSlaHours: supportConfig.parentPortalPaidSlaHours,
      },
    };

    const { error: updateError } = await admin
      .from("compliance_audit_runs")
      .update({
        status: "completed",
        score,
        target_score: normalizedTarget,
        checks_total: checksTotal,
        checks_pass: checksPass,
        checks_warn: checksWarn,
        checks_fail: checksFail,
        pass_summary: passSummary,
        report,
        evidence_artifact_id: evidence.id,
        completed_at: new Date().toISOString(),
        error: null,
      })
      .eq("id", runId);
    if (updateError) throw new Error(updateError.message);

    return {
      runId,
      score,
      targetScore: normalizedTarget,
      checksTotal,
      checksPass,
      checksWarn,
      checksFail,
      passSummary,
      findings,
      evidenceArtifactId: evidence.id,
      achievedTarget: score >= normalizedTarget,
      report,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown compliance audit failure.";
    console.error("Triple-pass compliance audit failed.", toSafeErrorRecord(error));
    await admin
      .from("compliance_audit_runs")
      .update({
        status: "failed",
        completed_at: new Date().toISOString(),
        error: message,
      })
      .eq("id", runId);
    throw new Error(message);
  }
}

export async function loadLatestTriplePassComplianceAudit(admin: SupabaseClient) {
  const { data: run, error: runError } = await admin
    .from("compliance_audit_runs")
    .select(
      "id,scope,status,score,target_score,checks_total,checks_pass,checks_warn,checks_fail,pass_summary,report,evidence_artifact_id,started_at,completed_at,error,created_at",
    )
    .eq("scope", "app_store")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle<{
      id: string;
      scope: string;
      status: string;
      score: number;
      target_score: number;
      checks_total: number;
      checks_pass: number;
      checks_warn: number;
      checks_fail: number;
      pass_summary: unknown;
      report: Record<string, unknown> | null;
      evidence_artifact_id: string | null;
      started_at: string | null;
      completed_at: string | null;
      error: string | null;
      created_at: string;
    }>();
  if (runError) throw new Error(runError.message);
  if (!run) return null;

  const { data: findings, error: findingsError } = await admin
    .from("compliance_audit_findings")
    .select("id,pass_name,finding_key,severity,title,detail,remediation,metadata,created_at")
    .eq("run_id", run.id)
    .order("created_at", { ascending: true });
  if (findingsError) throw new Error(findingsError.message);

  return {
    ...run,
    findings: findings ?? [],
  };
}
