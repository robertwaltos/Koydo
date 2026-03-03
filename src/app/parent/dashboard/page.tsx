import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ParentDashboardClient from "./parent-dashboard-client";

export const dynamic = "force-dynamic";

export default async function ParentDashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  // Verify this is actually a parent
  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_parent")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile?.is_parent) {
    redirect("/dashboard");
  }

  return <ParentDashboardClient />;
}
