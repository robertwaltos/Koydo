"use client";

/**
 * DashShell — Stripe-inspired dashboard layout shell.
 * Used by /admin and /parent route layouts.
 *
 * Structure:
 *   ┌──────────────────────────────────────────────────────┐
 *   │ Sidebar (220px, dark #0a2540)  │  Top bar (#fff)     │
 *   │  Logo                          │  Page title / user  │
 *   │  Nav groups                    ├─────────── ─────────│
 *   │   ● Section label              │  Page content       │
 *   │     › Nav item                 │  bg: #f6f9fc        │
 *   │  Footer: ← Student View        │  overflow-y scroll  │
 *   └──────────────────────────────────────────────────────┘
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, type ReactNode } from "react";
import LanguageSwitcher from "@/app/components/language-switcher";

// ── Types ─────────────────────────────────────────────────────────────────────

export type DashNavItem = {
  href: string;
  label: string;
  /** Single emoji or 1–2 char text icon shown left of the label. */
  icon: string;
};

export type DashNavGroup = {
  /** Section header shown above the group in the sidebar. */
  label: string;
  items: DashNavItem[];
};

type DashShellProps = {
  children: ReactNode;
  navGroups: DashNavGroup[];
  /** e.g. "Admin Console" — shown in the top bar */
  productName: string;
  /** e.g. "Developer Tools" — shown under the logo in the sidebar */
  productSubtitle: string;
  /** User email or display name for the avatar / top-bar label */
  userLabel?: string;
};

// ── Sidebar nav link ──────────────────────────────────────────────────────────

function SidebarNavLink({ item }: { item: DashNavItem }) {
  const pathname = usePathname();
  // Match exact or child paths, but not sibling paths that share a prefix.
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <Link
      href={item.href}
      className={[
        "group flex items-center gap-2.5 rounded-md px-3 py-1.75 text-[13px] font-medium leading-snug transition-colors",
        isActive
          ? "bg-white/12 text-white"
          : "text-[#8792a2] hover:bg-white/6 hover:text-white",
      ].join(" ")}
    >
      <span
        className="w-4 shrink-0 text-center text-[15px] leading-none"
        aria-hidden="true"
      >
        {item.icon}
      </span>
      <span className="truncate">{item.label}</span>
    </Link>
  );
}

// ── Sidebar content (static inner) ───────────────────────────────────────────

function SidebarContent({
  navGroups,
  productSubtitle,
}: {
  navGroups: DashNavGroup[];
  productSubtitle: string;
}) {
  return (
    <div className="flex h-full flex-col bg-[#0a2540] safe-area-top safe-area-left safe-area-bottom">
      {/* ── Logo / branding ── */}
      <div className="flex h-14 shrink-0 items-center gap-3 border-b border-white/8 px-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#635bff] text-[12px] font-bold text-white shadow-inner">
          K
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold leading-tight text-white">
            Koydo
          </p>
          <p className="truncate text-[11px] leading-tight text-[#8792a2]">
            {productSubtitle}
          </p>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav
        className="flex-1 overflow-y-auto py-3 px-2 space-y-4"
        aria-label="Dashboard navigation"
      >
        {navGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-1.5 px-3 text-[10px] font-semibold uppercase tracking-widest text-[#4f566b]">
              {group.label}
            </p>
            <div className="space-y-px">
              {group.items.map((item) => (
                <SidebarNavLink key={item.href} item={item} />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* ── Footer ── */}
      <div className="shrink-0 border-t border-white/8 px-4 py-3">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-[12px] text-[#4f566b] transition-colors hover:text-[#8792a2]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7.5 2L3.5 6l4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Student View
        </Link>
      </div>
    </div>
  );
}

// ── Shell ─────────────────────────────────────────────────────────────────────

export default function DashShell({
  children,
  navGroups,
  productName,
  productSubtitle,
  userLabel,
}: DashShellProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const avatarLetter = (userLabel ?? "A").charAt(0).toUpperCase();
  const activeNavItemLabel = useMemo(() => {
    const allItems = navGroups.flatMap((group) => group.items);
    const active = allItems.find(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    );
    return active?.label ?? productName;
  }, [navGroups, pathname, productName]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f6f9fc]">
      {/* ── Mobile backdrop ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar — fixed 220px on md+, off-canvas on mobile/small-tablet ── */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-30 w-55 transition-transform duration-200 ease-out md:w-60",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
        aria-label="Sidebar"
      >
        <SidebarContent
          navGroups={navGroups}
          productSubtitle={productSubtitle}
        />
      </aside>

      {/* ── Main column ── */}
      <div className="flex min-w-0 flex-1 flex-col md:pl-60">
        {/* ── Top bar ── */}
        <header className="safe-area-top sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b border-[#e3e8ee] bg-white px-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#697386] hover:bg-[#f6f9fc] md:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.25 4.5h13.5M2.25 9h13.5M2.25 13.5h13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="min-w-0">
              <span className="hidden text-[14px] font-semibold text-[#1a1f36] md:block">
                {productName}
              </span>
              <p className="truncate text-[12px] font-medium text-[#425a7e] md:text-[11px] md:text-[#697386]">
                {activeNavItemLabel}
              </p>
            </div>
          </div>

          {/* Right: avatar */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher compact />
            {userLabel && (
              <span className="hidden text-[12px] text-[#697386] md:block truncate max-w-55">
                {userLabel}
              </span>
            )}
            <div
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e3e8ee] text-[11px] font-bold text-[#425a7e]"
              title={userLabel}
              aria-hidden="true"
            >
              {avatarLetter}
            </div>
          </div>
        </header>

        {/* ── Page content (scrollable) ── */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
