import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SupportClient from "./support-client";

export const metadata = { title: "Support | Family Portal" };

export default async function ParentSupportPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const { data: tickets } = await supabase
    .from("support_tickets")
    .select("id, subject, description, status, priority, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(30);

  return <SupportClient initialTickets={tickets ?? []} />;
}
