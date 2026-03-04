import type { SupabaseClient } from "@supabase/supabase-js";
import { createAdminAlert } from "@/lib/admin/alerts";

type RequirementRow = {
  id: string;
  requirement_code: string;
  requirement_name: string;
  authority_name: string;
  jurisdiction: string;
  applies_to: string;
  cadence: "monthly" | "quarterly" | "annual" | "custom";
  due_month: number | null;
  due_day: number;
  due_offset_days: number;
  filing_method: "electronic" | "paper" | "either";
  report_type: string | null;
  default_alert_lead_days: number;
  metadata: Record<string, unknown> | null;
  is_active: boolean;
};

type CalendarRow = {
  id: string;
  requirement_id: string;
  period_start: string;
  period_end: string;
  due_date: string;
  filing_method: "electronic" | "paper" | "either";
  status: "upcoming" | "prepared" | "submitted" | "waived" | "overdue";
};

type AlertRow = {
  id: string;
  calendar_id: string;
  severity: "info" | "warning" | "critical";
  alert_status: "open" | "acknowledged" | "resolved" | "dismissed";
  escalation_count: number;
};

function toDateIsoUtc(value: Date) {
  return value.toISOString().slice(0, 10);
}

function addDays(dateIso: string, days: number) {
  const date = new Date(`${dateIso}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return toDateIsoUtc(date);
}

function makeDate(year: number, month: number, day: number) {
  const safeDay = Math.max(1, Math.min(31, day));
  const date = new Date(Date.UTC(year, month - 1, 1));
  const maxDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  date.setUTCDate(Math.min(maxDay, safeDay));
  return toDateIsoUtc(date);
}

function endOfMonth(year: number, month: number) {
  return toDateIsoUtc(new Date(Date.UTC(year, month, 0)));
}

function metadataNumber(metadata: Record<string, unknown> | null | undefined, key: string, fallback = 0) {
  const raw = metadata?.[key];
  if (typeof raw === "number" && Number.isFinite(raw)) {
    return Math.trunc(raw);
  }
  if (typeof raw === "string") {
    const parsed = Number(raw);
    if (Number.isFinite(parsed)) return Math.trunc(parsed);
  }
  return fallback;
}

function buildPeriodsForRequirement(requirement: RequirementRow, year: number) {
  const periods: Array<{ periodStart: string; periodEnd: string; dueDate: string }> = [];
  if (!requirement.is_active) return periods;

  if (requirement.cadence === "monthly") {
    for (let month = 1; month <= 12; month += 1) {
      const periodStart = makeDate(year, month, 1);
      const periodEnd = endOfMonth(year, month);
      const dueDate = addDays(periodEnd, requirement.due_offset_days);
      periods.push({ periodStart, periodEnd, dueDate });
    }
    return periods;
  }

  if (requirement.cadence === "quarterly") {
    const quarterMonths = [
      [1, 3],
      [4, 6],
      [7, 9],
      [10, 12],
    ] as const;
    for (const [startMonth, endMonth] of quarterMonths) {
      const periodStart = makeDate(year, startMonth, 1);
      const periodEnd = endOfMonth(year, endMonth);
      const dueDate = addDays(periodEnd, requirement.due_offset_days);
      periods.push({ periodStart, periodEnd, dueDate });
    }
    return periods;
  }

  if (requirement.cadence === "annual") {
    const dueYearOffset = metadataNumber(requirement.metadata, "due_year_offset", 0);
    const dueMonth = requirement.due_month ?? 12;
    const dueYear = year + dueYearOffset;
    periods.push({
      periodStart: makeDate(year, 1, 1),
      periodEnd: makeDate(year, 12, 31),
      dueDate: makeDate(dueYear, dueMonth, requirement.due_day),
    });
    return periods;
  }

  periods.push({
    periodStart: makeDate(year, 1, 1),
    periodEnd: makeDate(year, 12, 31),
    dueDate: addDays(
      makeDate(year, requirement.due_month ?? 12, requirement.due_day),
      requirement.due_offset_days,
    ),
  });
  return periods;
}

export async function runComplianceMonitor(input: {
  admin: SupabaseClient;
  actorUserId: string;
  years?: number[];
  asOfDate?: string;
}) {
  const years = input.years && input.years.length > 0 ? input.years : [new Date().getUTCFullYear()];
  const asOfDate = input.asOfDate ?? new Date().toISOString().slice(0, 10);
  const nowIso = new Date().toISOString();
  const admin = input.admin;

  const { data: requirementsData, error: requirementsError } = await admin
    .from("finance_compliance_requirements")
    .select(
      "id, requirement_code, requirement_name, authority_name, jurisdiction, applies_to, cadence, due_month, due_day, due_offset_days, filing_method, report_type, default_alert_lead_days, metadata, is_active",
    )
    .eq("is_active", true)
    .order("requirement_code", { ascending: true });
  if (requirementsError) {
    throw new Error(requirementsError.message);
  }
  const requirements = (requirementsData ?? []) as RequirementRow[];

  const calendarUpserts: Array<{
    requirement_id: string;
    period_start: string;
    period_end: string;
    due_date: string;
    filing_method: string;
    status: "upcoming";
    metadata: Record<string, unknown>;
  }> = [];

  for (const requirement of requirements) {
    for (const year of years) {
      const periods = buildPeriodsForRequirement(requirement, year);
      for (const period of periods) {
        calendarUpserts.push({
          requirement_id: requirement.id,
          period_start: period.periodStart,
          period_end: period.periodEnd,
          due_date: period.dueDate,
          filing_method: requirement.filing_method,
          status: "upcoming",
          metadata: {
            requirement_code: requirement.requirement_code,
            requirement_name: requirement.requirement_name,
            authority_name: requirement.authority_name,
            jurisdiction: requirement.jurisdiction,
          },
        });
      }
    }
  }

  if (calendarUpserts.length > 0) {
    const { error: upsertError } = await admin
      .from("finance_compliance_calendar")
      .upsert(calendarUpserts, { onConflict: "requirement_id,period_start,period_end", ignoreDuplicates: false });
    if (upsertError) {
      throw new Error(upsertError.message);
    }
  }

  const { data: calendarData, error: calendarError } = await admin
    .from("finance_compliance_calendar")
    .select("id, requirement_id, period_start, period_end, due_date, filing_method, status")
    .order("due_date", { ascending: true })
    .limit(20000);
  if (calendarError) {
    throw new Error(calendarError.message);
  }
  const calendar = (calendarData ?? []) as CalendarRow[];

  const { data: alertsData, error: alertsError } = await admin
    .from("finance_compliance_alerts")
    .select("id, calendar_id, severity, alert_status, escalation_count");
  if (alertsError) {
    throw new Error(alertsError.message);
  }
  const alertByCalendarId = new Map((alertsData ?? []).map((row) => [row.calendar_id, row as AlertRow]));
  const requirementById = new Map(requirements.map((row) => [row.id, row]));

  const statusUpdates: Array<{ id: string; status: CalendarRow["status"] }> = [];
  const alertUpserts: Array<{
    calendar_id: string;
    severity: "info" | "warning" | "critical";
    alert_status: "open";
    title: string;
    message: string;
    first_raised_at?: string;
    last_raised_at: string;
    escalation_count: number;
    metadata: Record<string, unknown>;
  }> = [];
  const alertResolutions: string[] = [];

  let newAlertCount = 0;
  let resolvedAlertCount = 0;
  let overdueCount = 0;

  for (const entry of calendar) {
    const requirement = requirementById.get(entry.requirement_id);
    if (!requirement) continue;

    const daysUntilDue = Math.round(
      (new Date(`${entry.due_date}T00:00:00Z`).getTime() - new Date(`${asOfDate}T00:00:00Z`).getTime()) /
        (24 * 60 * 60 * 1000),
    );

    const isFinalized = entry.status === "submitted" || entry.status === "waived";
    const isOverdue = !isFinalized && daysUntilDue < 0;
    const shouldAlert = !isFinalized && daysUntilDue <= requirement.default_alert_lead_days;

    if (isOverdue && entry.status !== "overdue") {
      statusUpdates.push({ id: entry.id, status: "overdue" });
      overdueCount += 1;
    }
    if (!isOverdue && entry.status === "overdue" && !isFinalized) {
      statusUpdates.push({ id: entry.id, status: "upcoming" });
    }

    const existingAlert = alertByCalendarId.get(entry.id);
    if (isFinalized) {
      if (existingAlert && existingAlert.alert_status !== "resolved") {
        alertResolutions.push(existingAlert.id);
      }
      continue;
    }

    if (!shouldAlert) {
      continue;
    }

    const severity: "info" | "warning" | "critical" =
      daysUntilDue < 0 ? "critical" : daysUntilDue <= 7 ? "warning" : "info";
    const title = `${requirement.requirement_code} due ${entry.due_date}`;
    const message =
      daysUntilDue < 0
        ? `${requirement.requirement_name} is overdue by ${Math.abs(daysUntilDue)} day(s).`
        : `${requirement.requirement_name} is due in ${daysUntilDue} day(s).`;
    const escalationCount =
      existingAlert && severity === "critical"
        ? Number(existingAlert.escalation_count ?? 0) + 1
        : Number(existingAlert?.escalation_count ?? 0);

    if (!existingAlert) {
      newAlertCount += 1;
    }

    alertUpserts.push({
      calendar_id: entry.id,
      severity,
      alert_status: "open",
      title,
      message,
      first_raised_at: existingAlert ? undefined : nowIso,
      last_raised_at: nowIso,
      escalation_count: escalationCount,
      metadata: {
        requirementCode: requirement.requirement_code,
        requirementName: requirement.requirement_name,
        dueDate: entry.due_date,
        filingMethod: entry.filing_method,
        recommendedSubmission:
          entry.filing_method === "electronic"
            ? "Submit electronically where available."
            : entry.filing_method === "paper"
              ? "Prepare paper filing packet and submit by due date."
              : "Submit electronically when available, otherwise submit by paper.",
      },
    });
  }

  if (statusUpdates.length > 0) {
    for (const status of statusUpdates) {
      const { error } = await admin
        .from("finance_compliance_calendar")
        .update({ status: status.status })
        .eq("id", status.id);
      if (error) throw new Error(error.message);
    }
  }

  if (alertUpserts.length > 0) {
    const { error: alertUpsertError } = await admin
      .from("finance_compliance_alerts")
      .upsert(alertUpserts, { onConflict: "calendar_id", ignoreDuplicates: false });
    if (alertUpsertError) {
      throw new Error(alertUpsertError.message);
    }
  }

  if (alertResolutions.length > 0) {
    const { error: resolveError } = await admin
      .from("finance_compliance_alerts")
      .update({ alert_status: "resolved", resolved_at: nowIso })
      .in("id", alertResolutions);
    if (resolveError) {
      throw new Error(resolveError.message);
    }
    resolvedAlertCount = alertResolutions.length;
  }

  if (newAlertCount > 0 || overdueCount > 0) {
    await createAdminAlert({
      severity: overdueCount > 0 ? "critical" : "warning",
      category: "finance_compliance_deadlines",
      message: `Compliance monitor updated: new alerts=${newAlertCount}, overdue items=${overdueCount}.`,
      metadata: {
        years,
        asOfDate,
        actorUserId: input.actorUserId,
        newAlertCount,
        overdueCount,
      },
    });
  }

  return {
    years,
    asOfDate,
    requirementCount: requirements.length,
    calendarCount: calendar.length,
    newAlertCount,
    resolvedAlertCount,
    overdueCount,
  };
}
