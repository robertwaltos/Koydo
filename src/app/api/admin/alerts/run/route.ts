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

export async function POST() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const triggered: string[] = [];

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
    typeof budgetSetting?.value === "number"
      ? budgetSetting.value
      : typeof budgetSetting?.value === "object" &&
        budgetSetting?.value !== null &&
        "value" in budgetSetting.value &&
        typeof (budgetSetting.value as { value?: unknown }).value === "number"
        ? Number((budgetSetting.value as { value?: unknown }).value)
        : 1.05;

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

  const staleMediaCutoff = new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString();
  const { count: staleMediaCount } = await admin
    .from("media_generation_jobs")
    .select("id", { count: "exact", head: true })
    .in("status", ["queued", "running"])
    .lt("created_at", staleMediaCutoff);

  if ((staleMediaCount ?? 0) > 0 && (await shouldCreateAlert("media_queue_stale"))) {
    await createAdminAlert({
      severity: "warning",
      category: "media_queue_stale",
      message: `Detected ${staleMediaCount} media jobs pending/running for more than 6 hours.`,
      metadata: { staleMediaCount, staleMediaCutoff },
    });
    triggered.push("media_queue_stale");
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
    metadata: { triggeredCount: triggered.length, triggeredCategories: triggered },
  });

  return NextResponse.json({
    success: true,
    triggeredCount: triggered.length,
    triggeredCategories: triggered,
  });
}
