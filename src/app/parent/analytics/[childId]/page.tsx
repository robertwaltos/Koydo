import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ChildAnalyticsClient from "./child-analytics-client";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ childId: string }>;
};

export default async function ChildAnalyticsPage({ params }: Props) {
  const { childId } = await params;

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) redirect("/auth/sign-in");

  // Verify parent owns this child profile
  const { data: child } = await supabase
    .from("student_profiles")
    .select("id, display_name, account_id")
    .eq("id", childId)
    .maybeSingle();

  if (!child || child.account_id !== user.id) {
    redirect("/parent/dashboard");
  }

  return (
    <ChildAnalyticsClient
      childId={child.id}
      childName={child.display_name}
    />
  );
}
