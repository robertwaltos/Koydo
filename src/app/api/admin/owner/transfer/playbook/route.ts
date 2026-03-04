import { NextResponse } from "next/server";
import { z } from "zod";
import { requireOwnerForApi } from "@/lib/admin/auth";
import { createOwnerTransferPlaybook, listOwnerTransferPlaybooks } from "@/lib/admin/owner-transfer";
import { logAdminAction } from "@/lib/admin/audit";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const requestSchema = z.object({
  candidateOwnerUserId: z.string().uuid(),
  notes: z.string().trim().max(1000).optional(),
  confirmText: z.literal("PREPARE_OWNERSHIP_TRANSFER"),
});

export async function GET() {
  const auth = await requireOwnerForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  try {
    const admin = createSupabaseAdminClient();
    const playbooks = await listOwnerTransferPlaybooks(admin, 12);
    return NextResponse.json({ playbooks });
  } catch (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Failed to load ownership transfer playbooks." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const auth = await requireOwnerForApi({ stepUpScope: "ownership_transfer" });
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const parsed = requestSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const admin = createSupabaseAdminClient();
    const playbook = await createOwnerTransferPlaybook(admin, {
      initiatedBy: auth.userId,
      currentOwnerUserId: auth.userId,
      candidateOwnerUserId: parsed.data.candidateOwnerUserId,
      notes: parsed.data.notes,
    });

    await logAdminAction({
      adminUserId: auth.userId,
      actionType: "owner_transfer_playbook_created",
      metadata: {
        playbookId: playbook.id,
        candidateOwnerUserId: playbook.candidate_owner_user_id,
      },
    });

    return NextResponse.json({ success: true, playbook });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create ownership transfer playbook.";
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
