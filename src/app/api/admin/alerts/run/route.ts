import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { logAdminAction } from "@/lib/admin/audit";
import { createAdminAlert } from "@/lib/admin/alerts";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function monthKeyFromDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function coerceNumber(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }
  return null;
}

function readNumericSetting(value: unknown, fallback: number) {
  const direct = coerceNumber(value);
  if (direct !== null) {
    return direct;
  }

  if (typeof value === "object" && value !== null && "value" in value) {
    const nested = coerceNumber((value as { value?: unknown }).value);
    if (nested !== null) {
      return nested;
    }
  }

  return fallback;
}

async function shouldCreateAlert(category: string) {
  const admin = createSupabaseAdminClient();
  const recentWindowIso = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { data } = await admin
    .from("admin_alerts")
    .select("id")
    .eq("category", category)
    .eq("acknowledged", false)
    .gte("created_at", recentWindowIso)
    .limit(1);
  return !data || data.length === 0;
}

async function shouldCreateAlertWithinWindow(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  category: string,
  dedupeWindowHours: number,
) {
  const recentWindowIso = new Date(Date.now() - dedupeWindowHours * 60 * 60 * 1000).toISOString();
  const { data } = await admin
    .from("admin_alerts")
    .select("id")
    .eq("category", category)
    .eq("acknowledged", false)
    .gte("created_at", recentWindowIso)
    .limit(1);
  return !data || data.length === 0;
}

async function autoResolveAlerts(
  admin: ReturnType<typeof createSupabaseAdminClient>,
  category: string,
  autoResolveHours: number,
  reason: string,
) {
  const cutoffIso = new Date(Date.now() - autoResolveHours * 60 * 60 * 1000).toISOString();
  const nowIso = new Date().toISOString();
  const { data, error } = await admin
    .from("admin_alerts")
    .select("id, metadata")
    .eq("category", category)
    .eq("acknowledged", false)
    .lt("created_at", cutoffIso)
    .limit(100);

  if (error || !data || data.length === 0) {
    return 0;
  }

  let resolvedCount = 0;
  for (const row of data) {
    const metadata =
      row.metadata && typeof row.metadata === "object"
        ? (row.metadata as Record<string, unknown>)
        : {};

    const { error: updateError } = await admin
      .from("admin_alerts")
      .update({
        acknowledged: true,
        acknowledged_by: null,
        acknowledged_at: nowIso,
        metadata: {
          ...metadata,
          auto_resolved: true,
          auto_resolved_at: nowIso,
          auto_resolved_reason: reason,
        },
      })
      .eq("id", row.id)
      .eq("acknowledged", false);

    if (!updateError) {
      resolvedCount += 1;
    }
  }

  return resolvedCount;
}

export async function POST() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const triggered: string[] = [];
  const autoResolved: Record<string, number> = {};

  const currentMonthKey = monthKeyFromDate(new Date());
  const { data: monthTokens } = await admin
    .from("user_tokens")
    .select("user_id, spent_usd")
    .eq("month_key", currentMonthKey);

  const { data: budgetSetting } = await admin
    .from("app_settings")
    .select("value")
    .eq("key", "cost_budget_cap_usd")
    .maybeSingle();

  const budgetCap =
    readNumericSetting(budgetSetting?.value, 1.05);

  const totalCost = (monthTokens ?? []).reduce((acc, row) => acc + Number(row.spent_usd ?? 0), 0);
  const activeUsers = new Set((monthTokens ?? []).map((row) => row.user_id)).size;
  const avgCostPerUser = activeUsers > 0 ? totalCost / activeUsers : 0;

  if (avgCostPerUser > budgetCap && (await shouldCreateAlert("cost_budget_overrun"))) {
    await createAdminAlert({
      severity: avgCostPerUser > budgetCap * 1.5 ? "critical" : "warning",
      category: "cost_budget_overrun",
      message: `Average cost per active user (${avgCostPerUser.toFixed(4)}) is above budget cap (${budgetCap.toFixed(2)}).`,
      metadata: {
        currentMonthKey,
        totalCost,
        activeUsers,
        avgCostPerUser,
        budgetCap,
      },
    });
    triggered.push("cost_budget_overrun");
  }

  const { data: mediaSlaSettings } = await admin
    .from("app_settings")
    .select("key, value")
    .in("key", [
      "media_queue_sla_stale_hours",
      "media_queue_sla_backlog_limit",
      "media_queue_sla_failure_24h_limit",
      "media_queue_alert_dedupe_hours",
      "media_queue_alert_auto_resolve_hours",
    ]);

  const mediaSlaSettingMap = new Map((mediaSlaSettings ?? []).map((row) => [row.key, row.value]));
  const staleHoursThreshold = Math.max(
    1,
    readNumericSetting(mediaSlaSettingMap.get("media_queue_sla_stale_hours"), 6),
  );
  const backlogThreshold = Math.max(
    1,
    readNumericSetting(mediaSlaSettingMap.get("media_queue_sla_backlog_limit"), 30),
  );
  const failure24hThreshold = Math.max(
    1,
    readNumericSetting(mediaSlaSettingMap.get("media_queue_sla_failure_24h_limit"), 20),
  );
  const dedupeWindowHours = Math.max(
    1,
    readNumericSetting(mediaSlaSettingMap.get("media_queue_alert_dedupe_hours"), 24),
  );
  const autoResolveHours = Math.max(
    1,
    readNumericSetting(mediaSlaSettingMap.get("media_queue_alert_auto_resolve_hours"), 12),
  );

  const staleMediaCutoff = new Date(Date.now() - staleHoursThreshold * 60 * 60 * 1000).toISOString();
  const { count: queuedOrRunningCount } = await admin
    .from("media_generation_jobs")
    .select("id", { count: "exact", head: true })
    .in("status", ["queued", "running"]);

  const { data: oldestQueueJob } = await admin
    .from("media_generation_jobs")
    .select("id, status, created_at")
    .in("status", ["queued", "running"])
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  const oldestAgeHours = oldestQueueJob?.created_at
    ? (Date.now() - new Date(oldestQueueJob.created_at).getTime()) / (60 * 60 * 1000)
    : 0;

  const { count: staleMediaCount } = await admin
    .from("media_generation_jobs")
    .select("id", { count: "exact", head: true })
    .in("status", ["queued", "running"])
    .lt("created_at", staleMediaCutoff);

  if ((staleMediaCount ?? 0) > 0) {
    if (await shouldCreateAlertWithinWindow(admin, "media_queue_stale", dedupeWindowHours)) {
      await createAdminAlert({
        severity:
          oldestAgeHours >= staleHoursThreshold * 2 || (staleMediaCount ?? 0) >= backlogThreshold
            ? "critical"
            : "warning",
        category: "media_queue_stale",
        message: `Detected ${staleMediaCount} media jobs pending/running beyond ${staleHoursThreshold}h SLA.`,
        metadata: {
          staleMediaCount,
          staleMediaCutoff,
          staleHoursThreshold,
          oldestAgeHours: Number(oldestAgeHours.toFixed(2)),
          dedupeWindowHours,
        },
      });
      triggered.push("media_queue_stale");
    }
  } else {
    const resolvedCount = await autoResolveAlerts(
      admin,
      "media_queue_stale",
      autoResolveHours,
      "stale queue condition cleared",
    );
    if (resolvedCount > 0) {
      autoResolved.media_queue_stale = resolvedCount;
    }
  }

  if ((queuedOrRunningCount ?? 0) >= backlogThreshold) {
    if (await shouldCreateAlertWithinWindow(admin, "media_queue_backlog", dedupeWindowHours)) {
      await createAdminAlert({
        severity: (queuedOrRunningCount ?? 0) >= backlogThreshold * 2 ? "critical" : "warning",
        category: "media_queue_backlog",
        message: `Media queue backlog is ${queuedOrRunningCount}, above threshold ${backlogThreshold}.`,
        metadata: {
          queuedOrRunningCount,
          backlogThreshold,
          dedupeWindowHours,
        },
      });
      triggered.push("media_queue_backlog");
    }
  } else {
    const resolvedCount = await autoResolveAlerts(
      admin,
      "media_queue_backlog",
      autoResolveHours,
      "media backlog condition cleared",
    );
    if (resolvedCount > 0) {
      autoResolved.media_queue_backlog = resolvedCount;
    }
  }

  const failure24hCutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { count: failedMediaCount24h } = await admin
    .from("media_generation_jobs")
    .select("id", { count: "exact", head: true })
    .eq("status", "failed")
    .gte("updated_at", failure24hCutoff);

  if ((failedMediaCount24h ?? 0) >= failure24hThreshold) {
    if (await shouldCreateAlertWithinWindow(admin, "media_queue_failure_spike", dedupeWindowHours)) {
      await createAdminAlert({
        severity: (failedMediaCount24h ?? 0) >= failure24hThreshold * 2 ? "critical" : "warning",
        category: "media_queue_failure_spike",
        message: `Media queue had ${failedMediaCount24h} failures in the last 24h (threshold: ${failure24hThreshold}).`,
        metadata: {
          failedMediaCount24h,
          failure24hCutoff,
          failure24hThreshold,
          dedupeWindowHours,
        },
      });
      triggered.push("media_queue_failure_spike");
    }
  } else {
    const resolvedCount = await autoResolveAlerts(
      admin,
      "media_queue_failure_spike",
      autoResolveHours,
      "media failure spike condition cleared",
    );
    if (resolvedCount > 0) {
      autoResolved.media_queue_failure_spike = resolvedCount;
    }
  }

  const dsarCutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const { count: dsarBacklogCount } = await admin
    .from("dsar_requests")
    .select("id", { count: "exact", head: true })
    .in("status", ["pending", "in_progress"])
    .lt("requested_at", dsarCutoff);

  if ((dsarBacklogCount ?? 0) > 0 && (await shouldCreateAlert("dsar_backlog"))) {
    await createAdminAlert({
      severity: "critical",
      category: "dsar_backlog",
      message: `Detected ${dsarBacklogCount} DSAR requests older than 7 days still unresolved.`,
      metadata: { dsarBacklogCount, dsarCutoff },
    });
    triggered.push("dsar_backlog");
  }

  const urgentCutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const { count: urgentTicketCount } = await admin
    .from("support_tickets")
    .select("id", { count: "exact", head: true })
    .eq("priority", "urgent")
    .in("status", ["open", "in_progress"])
    .lt("created_at", urgentCutoff);

  if ((urgentTicketCount ?? 0) > 0 && (await shouldCreateAlert("support_urgent_backlog"))) {
    await createAdminAlert({
      severity: "critical",
      category: "support_urgent_backlog",
      message: `Detected ${urgentTicketCount} urgent support tickets open for more than 24 hours.`,
      metadata: { urgentTicketCount, urgentCutoff },
    });
    triggered.push("support_urgent_backlog");
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "admin_alert_run_checks",
    metadata: {
      triggeredCount: triggered.length,
      triggeredCategories: triggered,
      autoResolvedCount: Object.values(autoResolved).reduce((acc, value) => acc + value, 0),
      autoResolvedCategories: autoResolved,
      dedupeWindowHours,
      autoResolveHours,
    },
  });

  return NextResponse.json({
    success: true,
    triggeredCount: triggered.length,
    triggeredCategories: triggered,
    autoResolvedCount: Object.values(autoResolved).reduce((acc, value) => acc + value, 0),
    autoResolvedCategories: autoResolved,
  });
}
