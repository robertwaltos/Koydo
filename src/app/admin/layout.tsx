import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import DashShell, { type DashNavGroup } from "@/app/components/ui/dash-shell";

const ADMIN_NAV: DashNavGroup[] = [
  {
    label: "Dashboard",
    items: [
      { href: "/admin/overview",    label: "Overview",          icon: "◉" },
      { href: "/admin/alerts",      label: "Alerts",            icon: "⚡" },
    ],
  },
  {
    label: "Operations",
    items: [
      { href: "/admin/operations",                label: "Console",             icon: "⚙" },
      { href: "/admin/operations?s=system-health", label: "System Health",       icon: "♥" },
      { href: "/admin/operations?s=support-queue", label: "Support Queue",       icon: "✉" },
      { href: "/admin/operations?s=exam-maintenance", label: "Exam Maintenance", icon: "✎" },
    ],
  },
  {
    label: "User Management",
    items: [
      { href: "/admin/operations?s=create-account",  label: "Create Account",    icon: "➕" },
      { href: "/admin/operations?s=role-management",  label: "Role Management",   icon: "🔑" },
      { href: "/admin/provisioning",                  label: "Admin Provisioning",icon: "📧" },
      { href: "/admin/operations?s=approvals",        label: "Approvals",         icon: "✓" },
      { href: "/admin/operations?s=account-recovery", label: "Account Recovery",  icon: "🔓" },
      { href: "/admin/operations?s=account-reset",    label: "Reset / Deletion",  icon: "⌫" },
    ],
  },
  {
    label: "Content & Media",
    items: [
      { href: "/admin/media",       label: "Media Pipeline",    icon: "▶" },
      { href: "/admin/curriculum",  label: "Curriculum",        icon: "≡" },
    ],
  },
  {
    label: "Finance & Billing",
    items: [
      { href: "/admin/costs",                          label: "Costs & Budget",    icon: "$" },
      { href: "/admin/operations?s=pricing",           label: "Pricing Config",    icon: "💰" },
      { href: "/admin/operations?s=refunds",           label: "Refunds",           icon: "↩" },
      { href: "/admin/operations?s=promotions",        label: "Promotions",        icon: "🏷" },
      { href: "/admin/operations?s=lang-price-map",    label: "Language Prices",   icon: "🌐" },
      { href: "/admin/operations?s=lang-runtime",      label: "Language Config",   icon: "⚡" },
      { href: "/admin/operations?s=lang-pricing-ladders", label: "Unlock Pricing", icon: "🪜" },
      { href: "/admin/operations?s=lang-reconciliation", label: "Reconciliation",  icon: "⚖" },
    ],
  },
  {
    label: "Compliance & Legal",
    items: [
      { href: "/admin/compliance",  label: "Compliance Center", icon: "◎" },
      { href: "/admin/audit",       label: "Audit Log",         icon: "☰" },
    ],
  },
  {
    label: "System Config",
    items: [
      { href: "/admin/settings",                            label: "Settings",       icon: "⛭" },
      { href: "/admin/operations?s=env-checks",             label: "Environment",    icon: "🖥" },
      { href: "/admin/operations?s=db-status",              label: "Database",       icon: "🗄" },
      { href: "/admin/operations?s=stripe-webhooks",        label: "Webhooks",       icon: "🔌" },
    ],
  },
  {
    label: "Intelligence",
    items: [
      { href: "/admin/reports",     label: "Reports & Analytics", icon: "↗" },
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
    .select("is_admin, admin_access_level")
    .eq("user_id", user.id)
    .maybeSingle();

  // Non-admins land on the student dashboard, not a broken shell.
  if (!profile?.is_admin) {
    redirect("/dashboard");
  }

  const accessLevel = (profile.admin_access_level as string | null) ?? "full_access";
  const productSubtitle = accessLevel === "read_only"
    ? "View Only Access"
    : "Developer Tools";

  return (
    <DashShell
      navGroups={ADMIN_NAV}
      productName="Admin Console"
      productSubtitle={productSubtitle}
      userLabel={user.email ?? "Admin"}
    >
      {children}
    </DashShell>
  );
}
