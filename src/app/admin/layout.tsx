import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import DashShell, { type DashNavGroup } from "@/app/components/ui/dash-shell";

const ADMIN_NAV: DashNavGroup[] = [
  {
    label: "Operations",
    items: [
      { href: "/admin/overview",    label: "Overview",       icon: "◉" },
      { href: "/admin/alerts",      label: "Alerts",         icon: "⚡" },
      { href: "/admin/operations",  label: "Console",        icon: "⚙" },
    ],
  },
  {
    label: "Content",
    items: [
      { href: "/admin/media",       label: "Media Pipeline", icon: "▶" },
      { href: "/admin/curriculum",  label: "Curriculum",     icon: "≡" },
    ],
  },
  {
    label: "Compliance & Finance",
    items: [
      { href: "/admin/compliance",  label: "Compliance",     icon: "◎" },
      { href: "/admin/costs",       label: "Costs",          icon: "$" },
      { href: "/admin/audit",       label: "Audit Log",      icon: "☰" },
    ],
  },
  {
    label: "Insights",
    items: [
      { href: "/admin/reports",     label: "Reports",        icon: "↗" },
    ],
  },
];

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  // Non-admins land on the student dashboard, not a broken shell.
  if (!profile?.is_admin) {
    redirect("/dashboard");
  }

  return (
    <DashShell
      navGroups={ADMIN_NAV}
      productName="Admin Console"
      productSubtitle="Developer Tools"
      userLabel={user.email ?? "Admin"}
    >
      {children}
    </DashShell>
  );
}
