import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { collectRegulatoryUpdates } from "@/lib/partners/regulatory-updates";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { logAdminAction } from "@/lib/admin/audit";

export async function POST() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) return auth.response;

  const admin = createSupabaseAdminClient();
  const updates = await collectRegulatoryUpdates().catch((error) => {
    console.error("Failed to collect regulatory updates.", toSafeErrorRecord(error));
    return [];
  });
  if (updates.length === 0) {
    return NextResponse.json({
      success: true,
      summary: {
        scannedCount: 0,
        insertedCount: 0,
        actionItemCount: 0,
      },
    });
  }

  let insertedCount = 0;
  let actionItemCount = 0;
  for (const update of updates) {
    const { data: upserted, error: upsertError } = await admin
      .from("partner_regulatory_updates")
      .upsert(
        {
          source_name: update.sourceName,
          source_url: update.sourceUrl,
          jurisdiction: update.jurisdiction,
          update_type: update.updateType,
          title: update.title,
          update_date: update.updateDate,
          effective_date: update.effectiveDate,
          update_hash: update.updateHash,
          summary: update.summary,
          action_required: update.actionRequired,
          action_severity: update.actionSeverity,
          action_notes: update.actionNotes,
          metadata: {},
        },
        { onConflict: "source_name,update_hash" },
      )
      .select("id, action_required")
      .single();
    if (upsertError) {
      console.error("Failed to upsert regulatory update.", toSafeErrorRecord(upsertError));
      continue;
    }
    insertedCount += 1;

    if (upserted.action_required) {
      const { error: actionItemError } = await admin
        .from("partner_regulatory_action_items")
        .upsert(
          {
            regulatory_update_id: upserted.id,
            action_status: "open",
            title: `Review action: ${update.title.slice(0, 140)}`,
            details: update.actionNotes ?? update.summary,
            metadata: {
              severity: update.actionSeverity,
            },
          },
          { onConflict: "regulatory_update_id" },
        );
      if (!actionItemError) actionItemCount += 1;
    }
  }

  await logAdminAction({
    adminUserId: auth.userId,
    actionType: "partner_regulatory_updates_run",
    metadata: {
      scannedCount: updates.length,
      insertedCount,
      actionItemCount,
    },
  });

  return NextResponse.json({
    success: true,
    summary: {
      scannedCount: updates.length,
      insertedCount,
      actionItemCount,
    },
    updates: updates.slice(0, 50),
  });
}
