type SubscriptionRow = {
  status: string | null;
  current_period_end: string | null;
};

const ACTIVE_STATUSES = new Set(["active", "trialing"]);

export function isPremiumSubscriptionActive(row: SubscriptionRow | null | undefined): boolean {
  if (!row?.status || !ACTIVE_STATUSES.has(row.status)) return false;
  if (!row.current_period_end) return true;
  const expiresAt = Date.parse(row.current_period_end);
  if (!Number.isFinite(expiresAt)) return true;
  return expiresAt > Date.now();
}

export async function isPremiumUserWithClient(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any,
  userId: string,
): Promise<boolean> {
  const { data, error } = await supabase
    .from("subscriptions")
    .select("status, current_period_end")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) return false;
  return isPremiumSubscriptionActive(data as SubscriptionRow | null);
}
