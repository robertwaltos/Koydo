import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type PartnerPortalRole = "owner" | "finance_contact" | "manager" | "viewer";

export type PartnerPortalAccessRow = {
  id: string;
  partner_id: string;
  user_id: string;
  role: PartnerPortalRole;
  status: "active" | "invited" | "revoked";
};

export async function getPartnerPortalAccessForUser(params: {
  userId: string;
  partnerId?: string | null;
}) {
  const admin = createSupabaseAdminClient();
  let query = admin
    .from("partner_portal_access")
    .select("id, partner_id, user_id, role, status")
    .eq("user_id", params.userId)
    .eq("status", "active")
    .order("updated_at", { ascending: false })
    .limit(50);

  if (params.partnerId) {
    query = query.eq("partner_id", params.partnerId);
  }

  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return (data ?? []) as PartnerPortalAccessRow[];
}

export function canManagePartnerFinancials(role: PartnerPortalRole): boolean {
  return role === "owner" || role === "finance_contact";
}
