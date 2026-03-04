import type { SupabaseClient } from "@supabase/supabase-js";

export type OwnershipTransferMode = "co_owner" | "replace_owner";

type CreatePlaybookInput = {
  initiatedBy: string;
  currentOwnerUserId: string;
  candidateOwnerUserId: string;
  notes?: string | null;
};

type ExecutePlaybookInput = {
  executedBy: string;
  playbookId: string;
  mode: OwnershipTransferMode;
};

function buildDefaultTransferChecklist() {
  return [
    {
      id: "rotate-prod-secrets",
      title: "Rotate production secrets and API keys",
      required: true,
      status: "pending",
    },
    {
      id: "transfer-cloud-billing",
      title: "Transfer cloud billing and payment ownership",
      required: true,
      status: "pending",
    },
    {
      id: "handoff-legal-docs",
      title: "Handoff legal/compliance and tax records",
      required: true,
      status: "pending",
    },
    {
      id: "verify-owner-mfa",
      title: "Verify new owner MFA factors (TOTP/email/YubiKey)",
      required: true,
      status: "pending",
    },
    {
      id: "revoke-old-owner-stepup",
      title: "Revoke old owner step-up sessions and backup credentials",
      required: true,
      status: "pending",
    },
  ];
}

async function ensureUserIsAdmin(admin: SupabaseClient, userId: string) {
  const { data, error } = await admin
    .from("user_profiles")
    .select("user_id,is_admin,is_owner")
    .eq("user_id", userId)
    .maybeSingle<{ user_id: string; is_admin: boolean; is_owner: boolean }>();
  if (error || !data) {
    throw new Error("User profile was not found.");
  }
  if (!data.is_admin) {
    throw new Error("Candidate owner must have admin access first.");
  }
  return data;
}

export async function createOwnerTransferPlaybook(admin: SupabaseClient, input: CreatePlaybookInput) {
  const currentOwner = await ensureUserIsAdmin(admin, input.currentOwnerUserId);
  await ensureUserIsAdmin(admin, input.candidateOwnerUserId);

  if (!currentOwner.is_owner) {
    throw new Error("Current owner is not flagged as owner.");
  }
  if (input.currentOwnerUserId === input.candidateOwnerUserId) {
    throw new Error("Candidate owner must be a different user.");
  }

  const { data, error } = await admin
    .from("owner_transfer_playbooks")
    .insert({
      initiated_by: input.initiatedBy,
      current_owner_user_id: input.currentOwnerUserId,
      candidate_owner_user_id: input.candidateOwnerUserId,
      status: "planned",
      notes: input.notes?.trim() || null,
      checklist: buildDefaultTransferChecklist(),
      metadata: {
        createdBy: input.initiatedBy,
      },
    })
    .select("id,status,current_owner_user_id,candidate_owner_user_id,created_at")
    .single();
  if (error || !data) {
    throw new Error(error?.message ?? "Failed to create ownership transfer playbook.");
  }
  return data;
}

export async function executeOwnerTransferPlaybook(admin: SupabaseClient, input: ExecutePlaybookInput) {
  const { data: playbook, error: playbookError } = await admin
    .from("owner_transfer_playbooks")
    .select("id,status,current_owner_user_id,candidate_owner_user_id")
    .eq("id", input.playbookId)
    .maybeSingle<{
      id: string;
      status: string;
      current_owner_user_id: string;
      candidate_owner_user_id: string;
    }>();

  if (playbookError || !playbook) {
    throw new Error("Ownership transfer playbook was not found.");
  }
  if (playbook.status === "executed") {
    throw new Error("Ownership transfer playbook has already been executed.");
  }

  // Promote target owner first so "replace_owner" never leaves zero owners.
  const promoteResult = await admin
    .from("user_profiles")
    .update({ is_owner: true, is_admin: true })
    .eq("user_id", playbook.candidate_owner_user_id);
  if (promoteResult.error) {
    throw new Error(promoteResult.error.message);
  }

  if (input.mode === "replace_owner") {
    const demoteResult = await admin
      .from("user_profiles")
      .update({ is_owner: false })
      .eq("user_id", playbook.current_owner_user_id);
    if (demoteResult.error) {
      throw new Error(demoteResult.error.message);
    }
  }

  const updatePlaybookResult = await admin
    .from("owner_transfer_playbooks")
    .update({
      status: "executed",
      executed_by: input.executedBy,
      executed_at: new Date().toISOString(),
      metadata: {
        executionMode: input.mode,
        executedBy: input.executedBy,
      },
    })
    .eq("id", playbook.id);
  if (updatePlaybookResult.error) {
    throw new Error(updatePlaybookResult.error.message);
  }

  return {
    playbookId: playbook.id,
    status: "executed" as const,
    executionMode: input.mode,
    currentOwnerUserId: playbook.current_owner_user_id,
    candidateOwnerUserId: playbook.candidate_owner_user_id,
  };
}

export async function listOwnerTransferPlaybooks(admin: SupabaseClient, limit = 10) {
  const safeLimit = Math.max(1, Math.min(50, Math.trunc(limit)));
  const { data, error } = await admin
    .from("owner_transfer_playbooks")
    .select(
      "id,status,current_owner_user_id,candidate_owner_user_id,notes,checklist,metadata,created_at,updated_at,executed_at",
    )
    .order("created_at", { ascending: false })
    .limit(safeLimit);
  if (error) {
    throw new Error(error.message);
  }
  return data ?? [];
}
