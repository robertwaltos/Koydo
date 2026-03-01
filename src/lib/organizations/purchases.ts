import type { SupabaseClient } from "@supabase/supabase-js";

type PurchaseRow = {
  id: string;
  seats_purchased: number;
  status: string;
};

export async function syncOrganizationPurchaseAllocationStatuses(
  admin: SupabaseClient,
  organizationId: string,
) {
  const [assignedResult, purchasesResult] = await Promise.all([
    admin
      .from("organization_learners")
      .select("id")
      .eq("organization_id", organizationId)
      .eq("status", "active"),
    admin
      .from("organization_license_purchases")
      .select("id, seats_purchased, status")
      .eq("organization_id", organizationId)
      .in("status", ["paid", "partially_allocated", "fully_allocated"])
      .order("created_at", { ascending: true }),
  ]);

  if (assignedResult.error) throw assignedResult.error;
  if (purchasesResult.error) throw purchasesResult.error;

  let assignedRemaining = (assignedResult.data ?? []).length;
  const purchases = (purchasesResult.data ?? []) as PurchaseRow[];

  for (const purchase of purchases) {
    const seats = Math.max(0, purchase.seats_purchased);
    let nextStatus = "paid";
    let seatsAssigned = 0;

    if (assignedRemaining >= seats) {
      nextStatus = "fully_allocated";
      seatsAssigned = seats;
      assignedRemaining -= seats;
    } else if (assignedRemaining > 0) {
      nextStatus = "partially_allocated";
      seatsAssigned = assignedRemaining;
      assignedRemaining = 0;
    }

    if (purchase.status !== nextStatus || seatsAssigned !== seats) {
      const { error } = await admin
        .from("organization_license_purchases")
        .update({
          status: nextStatus,
          seats_assigned: seatsAssigned,
        })
        .eq("id", purchase.id);
      if (error) throw error;
    }
  }
}
