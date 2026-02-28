import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import DashShell, { type DashNavGroup } from "@/app/components/ui/dash-shell";

const PARENT_NAV: DashNavGroup[] = [
  {
    label: "Family",
    items: [
      { href: "/parent/dashboard",   label: "Dashboard",       icon: "⌂" },
      { href: "/parent/reports",     label: "Progress Reports", icon: "↗" },
    ],
  },
  {
    label: "Account",
    items: [
      { href: "/parent/compliance",  label: "Privacy & Data",  icon: "◎" },
      { href: "/account/settings",   label: "Account Settings", icon: "⚙" },
      { href: "/billing/language",   label: "Billing",          icon: "$" },
    ],
  },
];

export default async function ParentLayout({ children }: { children: ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  return (
    <DashShell
      navGroups={PARENT_NAV}
      productName="Family Portal"
      productSubtitle="Parent Dashboard"
      userLabel={user.email ?? "Parent"}
    >
      {children}
    </DashShell>
  );
}
