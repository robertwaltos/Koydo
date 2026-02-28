import type { SupabaseClient } from "@supabase/supabase-js";

type OrganizationLicensePurchaseRow = {
  seats_purchased: number;
  status: string;
};

type OrganizationProvisioningTokenRow = {
  seats_remaining: number;
  expires_at: string | null;
  revoked_at: string | null;
};

type OrganizationLearnerRow = {
  id: string;
};

export type OrganizationSeatSummary = {
  purchasedSeats: number;
  assignedSeats: number;
  reservedSeats: number;
  availableSeats: number;
};

function isProvisioningTokenActive(row: OrganizationProvisioningTokenRow, nowIso: string) {
  if (row.revoked_at) return false;
  if (!row.expires_at) return true;
  return row.expires_at > nowIso;
}

export async function getOrganizationSeatSummary(
  admin: SupabaseClient,
  organizationId: string,
): Promise<OrganizationSeatSummary> {
  const nowIso = new Date().toISOString();

  const [purchasesResult, learnersResult, tokensResult] = await Promise.all([
    admin
      .from("organization_license_purchases")
      .select("seats_purchased, status")
      .eq("organization_id", organizationId),
    admin
      .from("organization_learners")
      .select("id")
      .eq("organization_id", organizationId)
      .eq("status", "active"),
    admin
      .from("organization_provisioning_tokens")
      .select("seats_remaining, expires_at, revoked_at")
      .eq("organization_id", organizationId),
  ]);

  if (purchasesResult.error) throw purchasesResult.error;
  if (learnersResult.error) throw learnersResult.error;
  if (tokensResult.error) throw tokensResult.error;

  const purchases = (purchasesResult.data ?? []) as OrganizationLicensePurchaseRow[];
  const learners = (learnersResult.data ?? []) as OrganizationLearnerRow[];
  const tokens = (tokensResult.data ?? []) as OrganizationProvisioningTokenRow[];

  const purchasedSeats = purchases
    .filter((row) => row.status === "paid" || row.status === "partially_allocated" || row.status === "fully_allocated")
    .reduce((sum, row) => sum + Math.max(0, Number(row.seats_purchased ?? 0)), 0);
  const assignedSeats = learners.length;
  const reservedSeats = tokens
    .filter((row) => isProvisioningTokenActive(row, nowIso))
    .reduce((sum, row) => sum + Math.max(0, Number(row.seats_remaining ?? 0)), 0);

  const availableSeats = Math.max(0, purchasedSeats - assignedSeats - reservedSeats);

  return {
    purchasedSeats,
    assignedSeats,
    reservedSeats,
    availableSeats,
  };
}

