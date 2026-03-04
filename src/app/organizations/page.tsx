import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import OrganizationsClient from "./organizations-client";

export const dynamic = "force-dynamic";

export default async function OrganizationsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/auth/sign-in?next=/organizations");
  }

  return <OrganizationsClient />;
}
