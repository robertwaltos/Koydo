"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n/provider";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { getActiveProfileIdFromBrowser } from "@/lib/profiles/active-profile";
import { useTheme } from "@/lib/theme/provider";
import { usePreReaderMode } from "@/app/explore/_components/pre-reader-mode";
import { VOICES, useVoicePreference } from "@/app/explore/_components/voice-preference";
import LanguageSwitcher from "./language-switcher";
import ThemeControls from "./theme-controls";
import { ASSETS } from "@/lib/config/assets";
import { isLaunchRouteLocked, resolveLaunchHref } from "@/lib/platform/launch-readiness";
import PinGate, { isPinVerified } from "@/components/pin-gate";

type AuthContext = {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isOwner: boolean;
  isParent: boolean;
  isTeacher: boolean;
  isSchool: boolean;
  isPartner: boolean;
  isInvestor: boolean;
  isSupport: boolean;
};

type ActiveLearner = {
  display_name: string;
  grade_level: string | null;
};

type PortalType = "parent" | "admin" | "investor" | "partner" | "teacher" | "school" | "support";

function openCommandPalette() {
  window.dispatchEvent(new Event("koydo:command-palette-open"));
}

export default function TopNav() {
  const { t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const { typographyDensity, setTypographyDensity } = useTheme();
  const { isPreReaderMode, togglePreReaderMode } = usePreReaderMode();
  const { voice, setVoice } = useVoicePreference();
  const [authContext, setAuthContext] = useState<AuthContext>({
    isAuthenticated: false,
    isAdmin: false,
    isOwner: false,
    isParent: false,
    isTeacher: false,
    isSchool: false,
    isPartner: false,
    isInvestor: false,
    isSupport: false,
  });
  const [activeLearner, setActiveLearner] = useState<ActiveLearner | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [pinGatePortal, setPinGatePortal] = useState<PortalType | null>(null);
  const [pinGateTarget, setPinGateTarget] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const nextTypographyDensity =
    typographyDensity === "comfortable"
      ? "compact"
      : typographyDensity === "compact"
        ? "spacious"
        : "comfortable";
  const typographyLabel =
    typographyDensity === "comfortable"
      ? t("top_nav_type_comfortable")
      : typographyDensity === "compact"
        ? t("top_nav_type_compact")
        : t("top_nav_type_spacious");
  const typographyIcon =
    typographyDensity === "comfortable"
      ? "🔤"
      : typographyDensity === "compact"
        ? "📏"
        : "🪶";

  useEffect(() => {
    const fetchContext = async () => {
      try {
        const response = await fetch("/api/auth/context");
        const data = (await response.json()) as {
          isAuthenticated?: boolean;
          isAdmin?: boolean;
          isOwner?: boolean;
          isParent?: boolean;
          isTeacher?: boolean;
          isSchool?: boolean;
          isPartner?: boolean;
          isInvestor?: boolean;
          isSupport?: boolean;
        };
        if (!response.ok) return;

        setAuthContext({
          isAuthenticated: Boolean(data.isAuthenticated),
          isAdmin: Boolean(data.isAdmin),
          isOwner: Boolean(data.isOwner),
          isParent: Boolean(data.isParent),
          isTeacher: Boolean(data.isTeacher),
          isSchool: Boolean(data.isSchool),
          isPartner: Boolean(data.isPartner),
          isInvestor: Boolean(data.isInvestor),
          isSupport: Boolean(data.isSupport),
        });
      } catch {
        // Keep public-safe defaults on request failure.
      }
    };

    void fetchContext();
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadActiveLearner = async () => {
      if (!authContext.isAuthenticated) {
        setActiveLearner(null);
        return;
      }

      const activeProfileId = getActiveProfileIdFromBrowser();
      if (!activeProfileId) {
        setActiveLearner(null);
        return;
      }

      try {
        const supabase = createSupabaseBrowserClient();
        const { data, error } = await supabase
          .from("student_profiles")
          .select("display_name, grade_level")
          .eq("id", activeProfileId)
          .maybeSingle();

        if (cancelled) return;
        if (error || !data) {
          setActiveLearner(null);
          return;
        }

        setActiveLearner({
          display_name: data.display_name,
          grade_level: data.grade_level,
        });
      } catch {
        if (!cancelled) {
          setActiveLearner(null);
        }
      }
    };

    void loadActiveLearner();
    return () => {
      cancelled = true;
    };
  }, [authContext.isAuthenticated, pathname]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSignOut = async () => {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    setAuthContext({
      isAuthenticated: false,
      isAdmin: false,
      isOwner: false,
      isParent: false,
      isTeacher: false,
      isSchool: false,
      isPartner: false,
      isInvestor: false,
      isSupport: false,
    });
    setActiveLearner(null);
    closeMenu();
    router.push("/");
    router.refresh();
  };

  const handlePortalClick = (portalType: PortalType, href: string) => {
    if (isPinVerified(portalType)) {
      closeMenu();
      router.push(href);
    } else {
      setPinGatePortal(portalType);
      setPinGateTarget(href);
    }
  };

  const isHomePage = pathname === "/";
  const brandHref = authContext.isAuthenticated ? "/dashboard" : "/";
  const resolveNavHref = (href: string) => resolveLaunchHref(href);

  // Admin and parent routes use DashShell for navigation — hide the student TopNav.
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/parent")) {
    return null;
  }

  const learnItems = [
    { href: "/explore", label: t("nav_explore"), icon: "🌍" },
    { href: "/modules", label: t("nav_modules"), icon: "📚" },
    { href: "/language/speaking-lab", label: t("top_nav_speaking_lab"), icon: "🎙️" },
    { href: "/science-lab", label: t("nav_science_lab"), icon: "🧬" },
    { href: "/exam-prep", label: t("nav_exam_prep"), icon: "🎯" },
    { href: "/games", label: t("top_nav_games") || "Games", icon: "🎮" },
    { href: "/testing", label: t("top_nav_testing"), icon: "🧪" },
    { href: "/experience-hub", label: "Experience Hub", icon: "🏆" },
  ];

  const portalItems = useMemo(() => {
    const items: { portalType: PortalType; href: string; icon: string; label: string; badge: string; badgeColor: string; visible: boolean }[] = [
      { portalType: "parent", href: "/parent/dashboard", icon: "👨‍👩‍👧", label: t("top_nav_parent_portal"), badge: "Family", badgeColor: "violet", visible: true },
      { portalType: "admin", href: "/admin/overview", icon: "👑", label: t("nav_owner_console") || "Owner Console", badge: "Admin", badgeColor: "amber", visible: authContext.isAdmin || authContext.isOwner },
      { portalType: "investor", href: "/investor", icon: "💰", label: t("nav_investor_portal") || "Investor Portal", badge: "Investor", badgeColor: "emerald", visible: authContext.isInvestor },
      { portalType: "partner", href: "/partner", icon: "🤝", label: t("top_nav_partner_portal") || "Partner Portal", badge: "Partner", badgeColor: "emerald", visible: authContext.isPartner },
      { portalType: "teacher", href: "/organizations", icon: "📐", label: t("top_nav_teacher_console") || "Teacher Console", badge: "Teacher", badgeColor: "sky", visible: authContext.isTeacher },
      { portalType: "school", href: "/organizations", icon: "🏫", label: t("top_nav_school_console") || "Institution Portal", badge: "School", badgeColor: "indigo", visible: authContext.isSchool },
      { portalType: "support", href: "/admin/overview", icon: "🛟", label: t("nav_support_portal") || "Support Portal", badge: "Support", badgeColor: "rose", visible: authContext.isSupport },
    ];
    return items.filter((item) => item.visible);
  }, [authContext, t]);

  const portalBadgeClasses: Record<string, string> = {
    violet: "bg-violet-200/80 text-violet-700 dark:bg-violet-800/50 dark:text-violet-200",
    amber: "bg-amber-200/80 text-amber-800 dark:bg-amber-800/50 dark:text-amber-200",
    emerald: "bg-emerald-200/80 text-emerald-800 dark:bg-emerald-800/50 dark:text-emerald-200",
    sky: "bg-sky-200/80 text-sky-800 dark:bg-sky-800/50 dark:text-sky-200",
    indigo: "bg-indigo-200/80 text-indigo-800 dark:bg-indigo-800/50 dark:text-indigo-200",
    rose: "bg-rose-200/80 text-rose-800 dark:bg-rose-800/50 dark:text-rose-200",
  };

  const portalBorderClasses: Record<string, string> = {
    violet: "border-violet-200/80 bg-violet-50 text-violet-800 hover:bg-violet-100 dark:border-violet-700/35 dark:bg-violet-900/18 dark:text-violet-200 dark:hover:bg-violet-900/28",
    amber: "border-amber-200/80 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:border-amber-700/35 dark:bg-amber-900/18 dark:text-amber-200 dark:hover:bg-amber-900/28",
    emerald: "border-emerald-200/80 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 dark:border-emerald-700/35 dark:bg-emerald-900/18 dark:text-emerald-200 dark:hover:bg-emerald-900/28",
    sky: "border-sky-200/80 bg-sky-50 text-sky-800 hover:bg-sky-100 dark:border-sky-700/35 dark:bg-sky-900/18 dark:text-sky-200 dark:hover:bg-sky-900/28",
    indigo: "border-indigo-200/80 bg-indigo-50 text-indigo-800 hover:bg-indigo-100 dark:border-indigo-700/35 dark:bg-indigo-900/18 dark:text-indigo-200 dark:hover:bg-indigo-900/28",
    rose: "border-rose-200/80 bg-rose-50 text-rose-800 hover:bg-rose-100 dark:border-rose-700/35 dark:bg-rose-900/18 dark:text-rose-200 dark:hover:bg-rose-900/28",
  };

  const menuItemClass = "ui-focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-zinc-200/70 bg-white px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 transition-colors dark:border-border/40 dark:bg-surface-muted/55 dark:text-foreground/90 dark:hover:bg-surface-muted/70";
  const sectionLabelClass = "mb-1.5 px-1 text-[10px] font-bold uppercase tracking-widest text-slate-400/80 dark:text-foreground/40";

  return (
    <>
      <header
        className={`safe-area-top sticky top-0 z-50 w-full border-b backdrop-blur-2xl transition-all duration-300 relative ${isHomePage
            ? "border-white/20 bg-white/10 shadow-sm"
            : "border-white/60 bg-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:bg-black/40 dark:border-white/10"
          }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-3">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* ── Logo ── */}
            <Link
              href={brandHref}
              title={authContext.isAuthenticated ? t("top_nav_go_to_dashboard") : t("top_nav_go_to_home")}
              className={`ui-focus-ring inline-flex min-h-12 items-center gap-2.5 rounded-2xl border px-3.5 py-2 shadow-sm backdrop-blur-sm transition-colors ${isHomePage
                  ? "border-white/60 bg-white/78 hover:bg-white/88"
                  : "border-white/80 bg-white/80 hover:bg-white border-border/55 dark:bg-surface/70 dark:hover:bg-surface/90"
                }`}
              onClick={closeMenu}
            >
              <div aria-hidden="true" className="inline-flex size-10 flex-shrink-0 overflow-hidden rounded-full">
                <Image src={ASSETS.logo} alt="Koydo logo" width={40} height={40} className="size-full object-cover" />
              </div>
              <span className={`ui-type-display text-lg font-extrabold tracking-tight ${isHomePage ? "text-zinc-900" : "text-zinc-900 dark:text-foreground"}`}>
                Koydo
              </span>
            </Link>

            <div className="flex-1" />

            {/* ── Search button ── */}
            {!isHomePage && (
              <button
                type="button"
                onClick={openCommandPalette}
                className={`ui-soft-button ui-focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-semibold shadow-sm transition hover:brightness-110 ${isHomePage
                    ? "border-white/12 bg-white/8 text-slate-200 hover:bg-white/15"
                    : "border-zinc-200/80 bg-white/80 text-zinc-700 hover:bg-white border-border/50 dark:bg-surface/68 dark:text-foreground dark:hover:bg-surface/88"
                  }`}
                title="Search navigation (Ctrl/Cmd+K)"
              >
                <span aria-hidden="true">🔎</span>
                <span className="hidden sm:inline">{t("top_nav_search")}</span>
                <kbd className="hidden rounded border border-zinc-400 bg-white/90 px-1.5 py-0.5 text-[10px] text-zinc-700 dark:border-border dark:text-foreground/70 md:inline-block">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* ── Hamburger (icon-only) ── */}
            <div ref={menuRef} className="relative">
              <button
                type="button"
                className={`ui-soft-button ui-focus-ring inline-flex min-h-10 items-center justify-center rounded-full border px-3 py-1.5 shadow-sm transition ${isHomePage
                    ? "border-white/12 bg-white/8 text-slate-200 hover:bg-white/15"
                    : "border-zinc-200/80 bg-white/80 text-zinc-700 hover:bg-white border-border/50 dark:bg-surface/68 dark:text-foreground dark:hover:bg-surface/88"
                  }`}
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
                aria-label="Menu"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>

              {isMenuOpen && (
                <div className="ui-glass-dropdown absolute right-0 mt-3 w-[min(92vw,26rem)] max-h-[85vh] overflow-y-auto p-2.5 rounded-[1.5rem] border border-white/60 bg-white/60 backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] dark:bg-black/60 dark:border-white/10">
                  {/* ── LEARN ── */}
                  <div className="px-1 pt-1.5 pb-1">
                    <p className={sectionLabelClass}>{t("top_nav_section_learn")}</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {learnItems.map((item) => {
                        const locked = isLaunchRouteLocked(item.href);
                        const href = resolveNavHref(item.href);
                        return (
                          <Link key={item.href} href={href} className={menuItemClass} onClick={closeMenu}>
                            <span aria-hidden="true">{item.icon}</span>
                            <span className="truncate">{item.label}</span>
                            {locked ? <span className="ml-auto shrink-0 rounded-full bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">Soon</span> : null}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* ── AUTH ACTIONS (unauthenticated) ── */}
                  {!authContext.isAuthenticated && (
                    <>
                      <div className="my-2 border-t border-zinc-100 dark:border-border/30" />
                      <div className="px-1 py-1">
                        <div className="grid grid-cols-2 gap-1.5">
                          <Link href="/auth/sign-in" className={menuItemClass} onClick={closeMenu}>
                            <span aria-hidden="true">🔐</span>
                            <span className="truncate">{t("nav_sign_in")}</span>
                          </Link>
                          <Link
                            href="/auth/sign-up"
                            className="ui-focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors dark:bg-foreground dark:text-background"
                            onClick={closeMenu}
                          >
                            <span aria-hidden="true">✨</span>
                            <span className="truncate">{t("nav_sign_up")}</span>
                          </Link>
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── PORTALS (authenticated) ── */}
                  {authContext.isAuthenticated && portalItems.length > 0 && (
                    <>
                      <div className="my-2 border-t border-zinc-100 dark:border-border/30" />
                      <div className="px-1 py-1">
                        <p className={sectionLabelClass}>{t("top_nav_section_portals")}</p>
                        <div className="grid gap-1.5">
                          {portalItems.map((item) => {
                            const locked = isLaunchRouteLocked(item.href);
                            return (
                              <button
                                key={item.portalType}
                                type="button"
                                className={`ui-focus-ring inline-flex min-h-10 w-full items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-colors ${portalBorderClasses[item.badgeColor] ?? ""}`}
                                onClick={() => handlePortalClick(item.portalType, resolveNavHref(item.href))}
                              >
                                <span aria-hidden="true">{item.icon}</span>
                                {item.label}
                                {locked
                                  ? <span className="ml-auto rounded-full bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">Soon</span>
                                  : <span className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-bold ${portalBadgeClasses[item.badgeColor] ?? ""}`}>{item.badge}</span>}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── ACCOUNT (authenticated) ── */}
                  {authContext.isAuthenticated && (
                    <>
                      <div className="my-2 border-t border-zinc-100 dark:border-border/30" />
                      <div className="px-1 py-1">
                        <p className={sectionLabelClass}>{t("top_nav_section_account")}</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          {[
                            { href: "/dashboard", label: t("nav_dashboard"), icon: "📈" },
                            { href: "/who-is-learning", label: activeLearner ? activeLearner.display_name : t("top_nav_switch_learner"), icon: activeLearner ? "👤" : "🧠" },
                            { href: "/account/settings", label: t("nav_account"), icon: "⚙️" },
                            { href: "/who-is-learning", label: t("top_nav_whos_learning") || "Who's Learning", icon: "👥" },
                          ].filter((item, index, arr) => arr.findIndex((i) => i.href === item.href) === index).map((item) => {
                            const locked = isLaunchRouteLocked(item.href);
                            const href = resolveNavHref(item.href);
                            return (
                              <Link key={`${item.href}-${item.icon}`} href={href} className={menuItemClass} onClick={closeMenu}>
                                <span aria-hidden="true">{item.icon}</span>
                                <span className="truncate">{item.label}</span>
                                {locked ? <span className="ml-auto shrink-0 rounded-full bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold text-amber-900">Soon</span> : null}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── DISPLAY (authenticated) ── */}
                  {authContext.isAuthenticated && (
                    <>
                      <div className="my-2 border-t border-zinc-100 dark:border-border/30" />
                      <div className="px-1 py-1">
                        <p className={sectionLabelClass}>{t("top_nav_section_display")}</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          <button type="button" onClick={togglePreReaderMode} className={menuItemClass}>
                            <span aria-hidden="true">{isPreReaderMode ? "👶" : "🔤"}</span>
                            <span className="truncate">{isPreReaderMode ? t("top_nav_reader_mode_off") : t("top_nav_reader_mode_on")}</span>
                          </button>
                          <button type="button" onClick={() => setTypographyDensity(nextTypographyDensity)} className={menuItemClass}>
                            <span aria-hidden="true">{typographyIcon}</span>
                            <span className="truncate">{typographyLabel}</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── NARRATOR VOICE (authenticated) ── */}
                  {authContext.isAuthenticated && (
                    <>
                      <div className="my-2 border-t border-zinc-100 dark:border-border/30" />
                      <div className="px-1 py-1 pb-1.5">
                        <p className={sectionLabelClass}>🎙️ {t("top_nav_section_narrator")}</p>
                        <div className="grid grid-cols-2 gap-1">
                          {VOICES.map((v) => (
                            <button
                              key={v.id}
                              type="button"
                              onClick={() => setVoice(v.id)}
                              className={`ui-focus-ring flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium transition ${
                                v.id === voice
                                  ? "border border-indigo-300 bg-indigo-100 text-indigo-900 dark:border-accent/60 dark:bg-indigo-900/40 dark:text-indigo-100"
                                  : "border border-transparent text-slate-600 hover:bg-slate-100 dark:text-foreground/70 dark:hover:bg-surface-muted/50"
                              }`}
                            >
                              <span className="text-sm">{v.emoji}</span>
                              <span className="truncate">{v.label}</span>
                              {v.id === voice && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-auto h-3.5 w-3.5 flex-shrink-0 text-indigo-600 dark:text-indigo-300">
                                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── PREFERENCES ── */}
                  <div className="my-2 border-t border-zinc-100 dark:border-border/30" />
                  <div className="px-1 pb-1.5">
                    <div className="overflow-hidden rounded-xl border border-zinc-200/70 bg-white dark:border-border/40 dark:bg-surface-muted/55">
                      <div className="flex items-stretch">
                        <div className="flex flex-1 items-center justify-center gap-1.5 px-3 py-2.5">
                          <ThemeControls compact />
                        </div>
                        <div className="w-px self-stretch bg-zinc-200/60 dark:bg-border/25" />
                        <div className="flex flex-1 items-center justify-center px-2 py-2.5">
                          <LanguageSwitcher compact />
                        </div>
                      </div>
                      {authContext.isAuthenticated && (
                        <>
                          <div className="h-px bg-zinc-200/60 dark:bg-border/25" />
                          <button
                            type="button"
                            onClick={handleSignOut}
                            className="ui-focus-ring flex min-h-10 w-full items-center justify-center gap-2 px-3 py-2.5 text-sm font-semibold text-rose-600 hover:bg-rose-50 transition-colors dark:text-rose-300 dark:hover:bg-rose-900/20"
                          >
                            <span aria-hidden="true">↩️</span>
                            {t("top_nav_log_out")}
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* PIN Gate Modal */}
      {pinGatePortal && pinGateTarget && (
        <PinGate
          portalType={pinGatePortal}
          onVerified={() => {
            const target = pinGateTarget;
            setPinGatePortal(null);
            setPinGateTarget(null);
            closeMenu();
            router.push(target);
          }}
          onCancel={() => {
            setPinGatePortal(null);
            setPinGateTarget(null);
          }}
        />
      )}
    </>
  );
}
