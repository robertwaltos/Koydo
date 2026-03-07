"use client";

/**
 * DashShell — Light-mode dashboard layout shell.
 * Used by /admin and /parent route layouts.
 *
 * Structure:
 *   ┌──────────────────────────────────────────────────────┐
 *   │ Sidebar (240px, soft light-blue)  │ Top bar (#fff)   │
 *   │  Logo                             │ Page title/user  │
 *   │  Nav groups (collapsible)         ├──────────────────│
 *   │   ▾ Section label                 │  Page content    │
 *   │     › Nav item                    │  bg: #f6f9fc     │
 *   │  Footer: ← Student View           │  overflow-y scroll│
 *   └──────────────────────────────────────────────────────┘
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, type ReactNode } from "react";
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
  /** Optional right sidebar content, visible on large screens */
  rightSidebar?: ReactNode;
};

// ── Sidebar nav link ──────────────────────────────────────────────────────────

function SidebarNavLink({ item }: { item: DashNavItem }) {
  const pathname = usePathname();

  // Support query-param deep links (e.g. /admin/operations?s=pricing)
  const [basePath, queryStr] = item.href.split("?");
  const isActive = queryStr
    ? typeof window !== "undefined" &&
      pathname === basePath &&
      window.location.search === `?${queryStr}`
    : pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <Link
      href={item.href}
      className={[
        "group flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-[13px] font-medium leading-snug transition-colors",
        isActive
          ? "bg-accent/15 text-accent shadow-sm dark:bg-accent/20"
          : "text-foreground/60 hover:bg-accent/8 hover:text-foreground dark:hover:bg-white/8",
      ].join(" ")}
    >
      <span
        className="w-4 shrink-0 text-center text-[14px] leading-none"
        aria-hidden="true"
      >
        {item.icon}
      </span>
      <span className="truncate">{item.label}</span>
    </Link>
  );
}

// ── Sidebar group (collapsible) ────────────────────────────────────────────────

function SidebarNavGroup({ group, defaultOpen = false }: { group: DashNavGroup; defaultOpen?: boolean }) {
  const pathname = usePathname();
  // Auto-open the group that contains the active page, or default open on wide screens
  const hasActive = group.items.some(
    (item) => pathname === item.href || pathname.startsWith(item.href + "/"),
  );
  const [open, setOpen] = useState(hasActive || defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-widest text-foreground/50 hover:text-foreground/70 hover:bg-accent/6 transition-colors dark:hover:bg-white/6"
        aria-expanded={open}
      >
        <span>{group.label}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-150 ${open ? "rotate-180" : "rotate-0"}`}
        >
          <path
            d="M1.5 3.5 5 7l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="mt-0.5 space-y-px pl-1 pb-0.5">
          {group.items.map((item) => (
            <SidebarNavLink key={item.href} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Sidebar content ────────────────────────────────────────────────────────────

function SidebarContent({
  navGroups,
  productSubtitle,
}: {
  navGroups: DashNavGroup[];
  productSubtitle: string;
}) {
  // On ultra-wide screens (2xl+), expand all groups by default
  const [isWideScreen, setIsWideScreen] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1536px)");
    setIsWideScreen(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsWideScreen(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className="flex h-full flex-col safe-area-top safe-area-left safe-area-bottom ui-glass-sidebar"
    >
      {/* ── Logo / branding ── */}
      <div
        className="flex h-14 shrink-0 items-center gap-3 px-4 border-b border-border/20"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#635bff] text-[12px] font-bold text-white shadow-sm">
          K
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold leading-tight text-foreground">
            Koydo
          </p>
          <p className="truncate text-[11px] leading-tight text-foreground/50">
            {productSubtitle}
          </p>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav
        className="flex-1 overflow-y-auto py-2 px-2 space-y-1"
        aria-label="Dashboard navigation"
      >
        {navGroups.map((group) => (
          <SidebarNavGroup key={group.label} group={group} defaultOpen={isWideScreen} />
        ))}
      </nav>

      {/* ── Footer ── */}
      <div
        className="shrink-0 px-4 py-3 border-t border-border/20"
      >
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-[12px] text-foreground/50 transition-colors hover:text-foreground/70"
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
  rightSidebar,
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
    // Force light color scheme for the entire dashboard shell
    <div
      className="flex h-screen overflow-hidden bg-surface-muted dark:bg-background"
    >
      {/* ── Mobile backdrop ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── Sidebar — fixed width, responsive: 256px md, 288px lg, 320px 2xl ── */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-30 w-64 transition-transform duration-200 ease-out md:w-72 2xl:w-80",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
        aria-label="Sidebar"
      >
        <SidebarContent
          navGroups={navGroups}
          productSubtitle={productSubtitle}
        />
      </aside>

      {/* ── Right Sidebar (Financial Center & Bridge) ── */}
      {rightSidebar && (
        <aside
          className="fixed inset-y-0 right-0 z-30 hidden w-80 border-l border-border/20 bg-surface/50 backdrop-blur-xl 2xl:block"
          aria-label="Financial Center"
        >
          {rightSidebar}
        </aside>
      )}

      {/* ── Main column ── */}
      <div className={`flex min-w-0 flex-1 flex-col md:pl-72 2xl:pl-80 ${rightSidebar ? "2xl:pr-80" : ""}`}>
        {/* ── Top bar ── */}
        <header
          className="safe-area-top sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b border-border/20 bg-surface/90 backdrop-blur-sm px-4 md:px-6 dark:bg-background/90"
        >
          <div className="flex min-w-0 items-center gap-3">
            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground/50 hover:bg-accent/8 md:hidden transition-colors dark:hover:bg-white/8"
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
              <span className="hidden text-[14px] font-semibold text-foreground md:block">
                {productName}
              </span>
              <p className="truncate text-[12px] font-medium text-foreground/60 md:text-[11px]">
                {activeNavItemLabel}
              </p>
            </div>
          </div>

          {/* Right: language switcher + user avatar */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher compact />
            {userLabel && (
              <span className="hidden text-[12px] text-foreground/50 md:block truncate max-w-48">
                {userLabel}
              </span>
            )}
            <div
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-[11px] font-bold text-accent dark:bg-accent/25"
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