import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SchoolPortalClient from "./school-portal-client";

type PartnerPortalPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function asString(value: string | string[] | undefined) {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && value.length > 0) return value[0] ?? null;
  return null;
}

export const dynamic = "force-dynamic";

export default async function PartnerPortalPage({ searchParams }: PartnerPortalPageProps) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/auth/sign-in?next=/partner/portal");
  }

  const resolvedSearchParams = searchParams ? await searchParams : {};
  const initialPartnerId = asString(resolvedSearchParams.partnerId);

  return <SchoolPortalClient initialPartnerId={initialPartnerId} />;
}
