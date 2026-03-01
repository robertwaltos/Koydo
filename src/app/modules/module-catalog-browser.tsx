"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import ModuleCoverImage from "@/app/components/module-cover-image";

/* ── Types ── */
export type CatalogModule = {
  id: string;
  title: string;
  description: string;
  subject: string;
  lessonCount: number;
  minAge?: number;
  maxAge?: number;
  difficultyBand?: string;
  version?: string;
  thumbnail?: string;
  visualHref: string;
  moduleHref: string;
};

type SubjectMeta = {
  icon: string;
  gradient: string;
  chipClass: string;
  btnClass: string;
  borderClass: string;
  halo: string;
};

/* ── Subject visuals ── */
function getSubjectMeta(subject: string): SubjectMeta {
  const key = subject.toLowerCase();
  if (key.includes("math"))
    return {
      icon: "➗",
      gradient: "from-sky-400 to-blue-500",
      chipClass: "border-sky-200 bg-sky-50 text-sky-800",
      btnClass: "border-sky-300 bg-sky-50 text-sky-900 hover:bg-sky-100",
      borderClass: "border-sky-200",
      halo: "rgba(56,189,248,0.25)",
    };
  if (key.includes("science"))
    return {
      icon: "🔬",
      gradient: "from-emerald-400 to-teal-500",
      chipClass: "border-emerald-200 bg-emerald-50 text-emerald-800",
      btnClass: "border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100",
      borderClass: "border-emerald-200",
      halo: "rgba(16,185,129,0.25)",
    };
  if (key.includes("read") || key.includes("language"))
    return {
      icon: "📖",
      gradient: "from-amber-400 to-orange-500",
      chipClass: "border-amber-200 bg-amber-50 text-amber-800",
      btnClass: "border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100",
      borderClass: "border-amber-200",
      halo: "rgba(251,191,36,0.25)",
    };
  if (key.includes("coding"))
    return {
      icon: "💻",
      gradient: "from-indigo-400 to-violet-500",
      chipClass: "border-indigo-200 bg-indigo-50 text-indigo-800",
      btnClass: "border-indigo-300 bg-indigo-50 text-indigo-900 hover:bg-indigo-100",
      borderClass: "border-indigo-200",
      halo: "rgba(129,140,248,0.25)",
    };
  return {
    icon: "🧭",
    gradient: "from-zinc-400 to-zinc-500",
    chipClass: "border-zinc-200 bg-surface-muted text-zinc-800",
    btnClass: "border-zinc-300 bg-surface-muted text-zinc-900 hover:bg-zinc-100",
    borderClass: "border-zinc-200",
    halo: "rgba(161,161,170,0.20)",
  };
}

/* ── Difficulty label ── */
function difficultyLabel(band?: string) {
  if (!band) return null;
  const labels: Record<string, string> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };
  return labels[band] ?? band;
}

/* ── Age display ── */
function formatAge(min?: number, max?: number) {
  if (min != null && max != null) return `Ages ${min}–${max}`;
  if (min != null) return `Ages ${min}+`;
  if (max != null) return `Up to age ${max}`;
  return null;
}

/* ── Sort options ── */
type SortKey = "title" | "lessons" | "age" | "difficulty";
const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "title", label: "Name" },
  { key: "lessons", label: "Lessons" },
  { key: "age", label: "Age" },
  { key: "difficulty", label: "Difficulty" },
];
const DIFFICULTY_ORDER: Record<string, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
};

type ModuleCatalogBrowserProps = {
  modules: CatalogModule[];
  initialSearch?: string;
  initialSubject?: string;
  initialDifficulty?: string;
  initialSortBy?: string;
  initialSortDirection?: string;
};

function resolveInitialSortKey(value: string | undefined): SortKey {
  if (value === "lessons" || value === "age" || value === "difficulty") {
    return value;
  }
  return "title";
}

function resolveInitialSortAsc(value: string | undefined) {
  return value !== "desc";
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tagName = target.tagName.toLowerCase();
  return tagName === "input" || tagName === "textarea" || tagName === "select";
}

/* ── Component ── */
export default function ModuleCatalogBrowser({
  modules,
  initialSearch,
  initialSubject,
  initialDifficulty,
  initialSortBy,
  initialSortDirection,
}: ModuleCatalogBrowserProps) {
  const resolvedInitialSearch = initialSearch?.trim().slice(0, 120) ?? "";
  const normalizedInitialSubject = initialSubject?.trim() ?? "";
  const normalizedInitialDifficulty = initialDifficulty?.trim().toLowerCase() ?? "";
  const hasInitialSubject = modules.some((module) => module.subject === normalizedInitialSubject);
  const hasInitialDifficulty = modules.some(
    (module) => (module.difficultyBand ?? "").toLowerCase() === normalizedInitialDifficulty,
  );

  const [search, setSearch] = useState(() => resolvedInitialSearch);
  const [activeSubject, setActiveSubject] = useState<string>(() =>
    hasInitialSubject ? normalizedInitialSubject : "All",
  );
  const [activeDifficulty, setActiveDifficulty] = useState<string>(() =>
    hasInitialDifficulty ? normalizedInitialDifficulty : "All",
  );
  const [sortBy, setSortBy] = useState<SortKey>(() => resolveInitialSortKey(initialSortBy));
  const [sortAsc, setSortAsc] = useState(() => resolveInitialSortAsc(initialSortDirection));
  const [showFilters, setShowFilters] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  /* derive subject list */
  const subjects = useMemo(() => {
    const set = new Set(modules.map((m) => m.subject));
    return Array.from(set).sort();
  }, [modules]);

  /* derive difficulty list */
  const difficulties = useMemo(() => {
    const set = new Set(modules.map((m) => m.difficultyBand).filter(Boolean) as string[]);
    return Array.from(set).sort(
      (a, b) => (DIFFICULTY_ORDER[a] ?? 99) - (DIFFICULTY_ORDER[b] ?? 99),
    );
  }, [modules]);

  /* filter + sort */
  const filtered = useMemo(() => {
    let list = modules;

    /* search */
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.subject.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q),
      );
    }

    /* subject tab */
    if (activeSubject !== "All") {
      list = list.filter((m) => m.subject === activeSubject);
    }

    /* difficulty */
    if (activeDifficulty !== "All") {
      list = list.filter((m) => m.difficultyBand === activeDifficulty);
    }

    /* sort */
    const sorted = list.slice().sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "lessons":
          return a.lessonCount - b.lessonCount;
        case "age":
          return (a.minAge ?? 0) - (b.minAge ?? 0);
        case "difficulty":
          return (
            (DIFFICULTY_ORDER[a.difficultyBand ?? ""] ?? 99) -
            (DIFFICULTY_ORDER[b.difficultyBand ?? ""] ?? 99)
          );
        default:
          return 0;
      }
    });

    return sortAsc ? sorted : sorted.reverse();
  }, [modules, search, activeSubject, activeDifficulty, sortBy, sortAsc]);

  /* counts per subject */
  const subjectCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const m of modules) {
      counts[m.subject] = (counts[m.subject] ?? 0) + 1;
    }
    return counts;
  }, [modules]);

  useEffect(() => {
    const onHotkey = (event: KeyboardEvent) => {
      if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey) {
        if (isEditableTarget(event.target)) return;
        event.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
        return;
      }

      if (event.key === "Escape" && document.activeElement === searchInputRef.current && search) {
        event.preventDefault();
        setSearch("");
      }
    };

    window.addEventListener("keydown", onHotkey);
    return () => {
      window.removeEventListener("keydown", onHotkey);
    };
  }, [search]);

  return (
    <div className="space-y-5">
      {/* ── Search + Filter Toggle bar ── */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            🔍
          </span>
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Search modules…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-describedby="modules-search-hint"
            className="ui-focus-ring w-full rounded-xl border border-zinc-200 bg-white/90 py-2.5 pl-9 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 backdrop-blur-sm"
          />
        </div>
        <button
          type="button"
          onClick={() => setShowFilters((v) => !v)}
          className={`ui-focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
            showFilters
              ? "border-amber-300 bg-amber-50 text-amber-800"
              : "border-zinc-200 bg-white text-zinc-700 hover:bg-surface-muted"
          }`}
        >
          <span aria-hidden="true">⚙️</span>
          Filters
          {activeDifficulty !== "All" ? (
            <span className="ml-1 rounded-full bg-amber-200 px-1.5 text-[10px] font-bold text-amber-900">
              1
            </span>
          ) : null}
        </button>
        {/* Sort dropdown */}
        <div className="flex items-center gap-1">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortKey)}
            className="ui-focus-ring rounded-xl border border-zinc-200 bg-white py-2.5 pl-3 pr-8 text-sm font-semibold text-zinc-700"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.key} value={opt.key}>
                Sort: {opt.label}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setSortAsc((v) => !v)}
            className="ui-focus-ring inline-flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-sm text-zinc-600 hover:bg-surface-muted"
            title={sortAsc ? "Ascending" : "Descending"}
          >
            {sortAsc ? "↑" : "↓"}
          </button>
        </div>
      </div>
      <p id="modules-search-hint" className="text-xs text-zinc-500">
        Tip: press <kbd className="rounded border border-zinc-300 bg-white px-1.5 py-0.5 font-semibold text-zinc-500">/</kbd> to focus search.
      </p>

      {/* ── Collapsible Filters ── */}
      {showFilters ? (
        <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-4 backdrop-blur-sm">
          <div className="space-y-3">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Difficulty
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveDifficulty("All")}
                  className={`ui-focus-ring rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    activeDifficulty === "All"
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white text-zinc-600 hover:bg-surface-muted"
                  }`}
                >
                  All
                </button>
                {difficulties.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setActiveDifficulty(d)}
                    className={`ui-focus-ring rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
                      activeDifficulty === d
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-200 bg-white text-zinc-600 hover:bg-surface-muted"
                    }`}
                  >
                    {difficultyLabel(d)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* ── Subject Tabs ── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
        <button
          type="button"
          onClick={() => setActiveSubject("All")}
          className={`ui-focus-ring flex-shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            activeSubject === "All"
              ? "border-zinc-900 bg-zinc-900 text-white shadow-sm"
              : "border-zinc-200 bg-white text-zinc-600 hover:bg-surface-muted"
          }`}
        >
          All <span className="ml-1 text-xs opacity-70">{modules.length}</span>
        </button>
        {subjects.map((subject) => {
          const meta = getSubjectMeta(subject);
          const isActive = activeSubject === subject;
          return (
            <button
              key={subject}
              type="button"
              onClick={() => setActiveSubject(subject)}
              className={`ui-focus-ring flex-shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-zinc-900 bg-zinc-900 text-white shadow-sm"
                  : `${meta.chipClass} hover:brightness-95`
              }`}
            >
              <span aria-hidden="true" className="mr-1">{meta.icon}</span>
              {subject}
              <span className="ml-1.5 text-xs opacity-70">{subjectCounts[subject]}</span>
            </button>
          );
        })}
      </div>

      {/* ── Results count ── */}
      <p className="text-sm text-zinc-500">
        {filtered.length === modules.length
          ? `${modules.length} modules`
          : `${filtered.length} of ${modules.length} modules`}
      </p>

      {/* ── Module Grid ── */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-300 bg-surface-muted p-12 text-center">
          <p className="text-lg font-semibold text-zinc-600">No modules found</p>
          <p className="mt-1 text-sm text-zinc-500">
            Try adjusting your search or filters
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveSubject("All");
              setActiveDifficulty("All");
            }}
            className="ui-focus-ring mt-4 inline-flex items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-surface-muted"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((mod) => {
            const meta = getSubjectMeta(mod.subject);
            const age = formatAge(mod.minAge, mod.maxAge);
            return (
              <article
                key={mod.id}
                className={`group relative overflow-hidden rounded-2xl border bg-white/90 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${meta.borderClass}`}
              >
                {/* Halo */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-60"
                  style={{ background: `radial-gradient(ellipse at top, ${meta.halo}, transparent 70%)` }}
                  aria-hidden="true"
                />

                {/* Cover */}
                <div className="relative h-36 overflow-hidden">
                  <ModuleCoverImage
                    moduleId={mod.id}
                    moduleTitle={mod.title}
                    fallbackSrc={mod.thumbnail}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subject chip overlay */}
                  <span
                    className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-bold backdrop-blur-sm ${meta.chipClass}`}
                  >
                    <span aria-hidden="true">{meta.icon}</span>
                    {mod.subject}
                  </span>
                  {/* Lesson count overlay */}
                  <span className="absolute right-3 top-3 rounded-full border border-white/60 bg-white/80 px-2 py-0.5 text-[11px] font-semibold text-zinc-700 backdrop-blur-sm">
                    {mod.lessonCount} {mod.lessonCount === 1 ? "lesson" : "lessons"}
                  </span>
                </div>

                {/* Content */}
                <div className="relative p-4">
                  <h3 className="text-base font-bold leading-snug text-zinc-900 line-clamp-2">
                    {mod.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 line-clamp-2">
                    {mod.description}
                  </p>

                  {/* Metadata row */}
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {age ? (
                      <span className="rounded-full border border-zinc-200 bg-surface-muted px-2 py-0.5 text-[10px] font-semibold text-zinc-600">
                        {age}
                      </span>
                    ) : null}
                    {mod.difficultyBand ? (
                      <span className="rounded-full border border-zinc-200 bg-surface-muted px-2 py-0.5 text-[10px] font-semibold capitalize text-zinc-600">
                        {difficultyLabel(mod.difficultyBand)}
                      </span>
                    ) : null}
                    {mod.version ? (
                      <span className="rounded-full border border-zinc-200 bg-surface-muted px-2 py-0.5 text-[10px] font-semibold text-zinc-500">
                        v{mod.version}
                      </span>
                    ) : null}
                  </div>

                  {/* Single CTA */}
                  <div className="mt-4">
                    <Link
                      href={mod.moduleHref}
                      className={`ui-focus-ring inline-flex w-full min-h-10 items-center justify-center rounded-xl border px-4 py-2 text-sm font-bold transition-colors ${meta.btnClass}`}
                    >
                      Open Module →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
