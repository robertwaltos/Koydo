import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import DashShell, { type DashNavGroup } from "@/app/components/ui/dash-shell";

const PARENT_NAV: DashNavGroup[] = [
  {
    label: "Family",
    items: [
      { href: "/parent/dashboard",       label: "Dashboard",        icon: "⌂" },
      { href: "/parent/reports",         label: "Progress Reports", icon: "↗" },
      { href: "/parent/devices",         label: "Devices",          icon: "📱" },
      { href: "/parent/airplane-mode",   label: "Airplane Mode",    icon: "✈️" },
      { href: "/parent/features",        label: "Feature Controls", icon: "⚡" },
    ],
  },
  {
    label: "Account",
    items: [
      { href: "/parent/notifications",   label: "Notifications",    icon: "🔔" },
      { href: "/parent/compliance",      label: "Privacy & Data",   icon: "◎" },
      { href: "/account/settings",       label: "Account Settings", icon: "⚙" },
      { href: "/billing/language",       label: "Billing",          icon: "$" },
      { href: "/parent/support",         label: "Support",          icon: "✉" },
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

  // Verify user actually has the parent role
  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_parent, is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  // Allow parents and admins (admins may need to inspect parent portal)
  if (!profile?.is_parent && !profile?.is_admin) {
    redirect("/dashboard");
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
