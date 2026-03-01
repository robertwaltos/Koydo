"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { toModuleCatalogPath } from "@/lib/routing/paths";

type CommandItem = {
  id: string;
  label: string;
  href: string;
  icon: string;
  description: string;
  keywords: string[];
  requiresAuth?: boolean;
  requiresParent?: boolean;
  requiresAdmin?: boolean;
};

type AuthContext = {
  isAuthenticated: boolean;
  isAdmin: boolean;
  isParent: boolean;
};

const RECENT_COMMAND_IDS_STORAGE_KEY = "koydo.command_palette.recent_ids";
const MAX_RECENT_COMMANDS = 8;

type ModuleSearchResult = {
  id: string;
  title: string;
  subject: string;
  href: string;
  score: number;
};

type ModuleSearchResponse = {
  query: string;
  count: number;
  results: ModuleSearchResult[];
};

const commandCatalog: readonly CommandItem[] = [
  {
    id: "explore",
    label: "Explore Worlds",
    href: "/explore",
    icon: "🌍",
    description: "Browse learning stages and discovery topics.",
    keywords: ["learn", "topics", "stage", "worlds", "explore"],
  },
  {
    id: "modules",
    label: "All Modules",
    href: "/modules",
    icon: "📚",
    description: "Search the full module catalog.",
    keywords: ["catalog", "curriculum", "modules"],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: "📈",
    description: "Open learner dashboard and progress.",
    keywords: ["home", "progress", "overview"],
    requiresAuth: true,
  },
  {
    id: "who-learning",
    label: "Switch Learner",
    href: "/who-is-learning",
    icon: "👤",
    description: "Choose active learner profile.",
    keywords: ["profile", "learner", "child"],
    requiresAuth: true,
  },
  {
    id: "speaking-lab",
    label: "Speaking Lab",
    href: "/language/speaking-lab",
    icon: "🎙️",
    description: "Practice speaking and pronunciation.",
    keywords: ["language", "pronunciation", "voice"],
    requiresAuth: true,
  },
  {
    id: "testing",
    label: "Testing Center",
    href: "/testing",
    icon: "🧪",
    description: "Take practice exams and assignments.",
    keywords: ["exam", "quiz", "testing", "practice"],
    requiresAuth: true,
  },
  {
    id: "exam-prep",
    label: "Exam Prep",
    href: "/exam-prep",
    icon: "🎯",
    description: "Prepare for certification tracks.",
    keywords: ["certification", "prep", "exam"],
    requiresAuth: true,
  },
  {
    id: "billing",
    label: "Plans & Billing",
    href: "/billing/language",
    icon: "💳",
    description: "Compare plans and manage access.",
    keywords: ["subscription", "billing", "pricing", "plan"],
    requiresAuth: true,
  },
  {
    id: "account",
    label: "Account Settings",
    href: "/account/settings",
    icon: "⚙️",
    description: "Manage account preferences.",
    keywords: ["settings", "account", "profile"],
    requiresAuth: true,
  },
  {
    id: "support",
    label: "Support",
    href: "/support",
    icon: "🛟",
    description: "Get help and contact support.",
    keywords: ["help", "support", "contact"],
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    href: "/legal/privacy",
    icon: "🛡️",
    description: "View privacy details and rights.",
    keywords: ["privacy", "policy", "legal"],
  },
  {
    id: "terms",
    label: "Terms of Service",
    href: "/legal/terms",
    icon: "📄",
    description: "Read terms and usage rules.",
    keywords: ["terms", "legal", "rules"],
  },
  {
    id: "parent-dashboard",
    label: "Parent Dashboard",
    href: "/parent/dashboard",
    icon: "👨‍👩‍👧",
    description: "Open parent insights and controls.",
    keywords: ["parent", "family", "guardian", "reports"],
    requiresParent: true,
  },
  {
    id: "admin-overview",
    label: "Admin Overview",
    href: "/admin/overview",
    icon: "🧭",
    description: "Open admin console overview.",
    keywords: ["admin", "operations", "console"],
    requiresAdmin: true,
  },
];
const staticCommandIds = new Set(commandCatalog.map((command) => command.id));

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function commandMatchesQuery(command: CommandItem, query: string) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return true;

  const haystacks = [
    command.label,
    command.description,
    command.href,
    ...command.keywords,
  ].map(normalizeText);

  return haystacks.some((value) => value.includes(normalizedQuery));
}

function parseRecentCommandIds(rawValue: string | null) {
  if (!rawValue) return [];
  try {
    const parsed = JSON.parse(rawValue) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((value): value is string => typeof value === "string" && staticCommandIds.has(value))
      .slice(0, MAX_RECENT_COMMANDS);
  } catch {
    return [];
  }
}

export default function GlobalCommandPalette() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const moduleSearchAbortRef = useRef<AbortController | null>(null);
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [recentCommandIds, setRecentCommandIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return parseRecentCommandIds(window.localStorage.getItem(RECENT_COMMAND_IDS_STORAGE_KEY));
    } catch {
      return [];
    }
  });
  const [authContext, setAuthContext] = useState<AuthContext>({
    isAuthenticated: false,
    isAdmin: false,
    isParent: false,
  });
  const [moduleSearchResults, setModuleSearchResults] = useState<ModuleSearchResult[]>([]);

  useEffect(() => {
    const loadAuthContext = async () => {
      try {
        const response = await fetch("/api/auth/context");
        if (!response.ok) return;
        const payload = (await response.json()) as Partial<AuthContext>;
        setAuthContext({
          isAuthenticated: Boolean(payload.isAuthenticated),
          isAdmin: Boolean(payload.isAdmin),
          isParent: Boolean(payload.isParent),
        });
      } catch {
        // Keep default public-safe context.
      }
    };

    void loadAuthContext();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      moduleSearchAbortRef.current?.abort();
      moduleSearchAbortRef.current = null;
      return;
    }

    const trimmedQuery = query.trim();
    if (trimmedQuery.length < 2) {
      moduleSearchAbortRef.current?.abort();
      moduleSearchAbortRef.current = null;
      return;
    }

    const abortController = new AbortController();
    moduleSearchAbortRef.current?.abort();
    moduleSearchAbortRef.current = abortController;

    const timeoutId = window.setTimeout(async () => {
      try {
        const response = await fetch(`/api/modules/search?q=${encodeURIComponent(trimmedQuery)}`, {
          signal: abortController.signal,
        });
        if (!response.ok) return;
        const payload = (await response.json()) as Partial<ModuleSearchResponse>;
        if (abortController.signal.aborted) return;
        const nextResults = Array.isArray(payload.results)
          ? payload.results
              .filter(
                (entry): entry is ModuleSearchResult =>
                  Boolean(entry) &&
                  typeof entry.id === "string" &&
                  typeof entry.title === "string" &&
                  typeof entry.href === "string" &&
                  typeof entry.subject === "string" &&
                  typeof entry.score === "number",
              )
              .slice(0, 5)
          : [];
        setModuleSearchResults(nextResults);
      } catch {
        if (!abortController.signal.aborted) {
          setModuleSearchResults([]);
        }
      }
    }, 160);

    return () => {
      window.clearTimeout(timeoutId);
      abortController.abort();
    };
  }, [isOpen, query]);

  useEffect(() => {
    const openPalette = () => setOpen(true);

    const onHotkey = (event: KeyboardEvent) => {
      const isShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (!isShortcut) return;
      event.preventDefault();
      setOpen(true);
    };

    window.addEventListener("koydo:command-palette-open", openPalette as EventListener);
    window.addEventListener("keydown", onHotkey);
    return () => {
      window.removeEventListener("koydo:command-palette-open", openPalette as EventListener);
      window.removeEventListener("keydown", onHotkey);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const visibleCommands = useMemo(() => {
    const rankById = new Map(recentCommandIds.map((commandId, index) => [commandId, index]));
    const filtered = commandCatalog.filter((command) => {
      if (command.requiresAdmin && !authContext.isAdmin) return false;
      if (command.requiresParent && !authContext.isParent) return false;
      if (command.requiresAuth && !authContext.isAuthenticated) return false;
      return true;
    });
    return filtered.slice().sort((left, right) => {
      const leftRank = rankById.get(left.id);
      const rightRank = rankById.get(right.id);
      if (leftRank != null && rightRank != null) {
        return leftRank - rightRank;
      }
      if (leftRank != null) return -1;
      if (rightRank != null) return 1;
      return left.label.localeCompare(right.label);
    });
  }, [authContext.isAdmin, authContext.isAuthenticated, authContext.isParent, recentCommandIds]);

  const dynamicModuleSearchCommand = useMemo<CommandItem | null>(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return null;
    return {
      id: `search-modules:${trimmedQuery.toLowerCase()}`,
      label: `Search Modules for "${trimmedQuery}"`,
      href: toModuleCatalogPath({ query: trimmedQuery }),
      icon: "🔎",
      description: "Open module catalog with this search query.",
      keywords: ["modules", "search", "catalog", trimmedQuery],
    };
  }, [query]);

  const dynamicOpenBestModuleCommand = useMemo<CommandItem | null>(() => {
    const bestMatch = moduleSearchResults[0];
    if (!bestMatch) return null;
    return {
      id: `open-module:${bestMatch.id}`,
      label: `Open Module: ${bestMatch.title}`,
      href: bestMatch.href,
      icon: "📘",
      description: `${bestMatch.subject} module`,
      keywords: ["module", "open", bestMatch.id, bestMatch.title, bestMatch.subject],
    };
  }, [moduleSearchResults]);

  const filteredCommands = useMemo(() => {
    const matched = visibleCommands.filter((command) => commandMatchesQuery(command, query));
    const dynamicCommands: CommandItem[] = [];

    if (dynamicOpenBestModuleCommand) {
      const hasEquivalentOpenCommand = matched.some(
        (command) => command.href === dynamicOpenBestModuleCommand.href,
      );
      if (!hasEquivalentOpenCommand) {
        dynamicCommands.push(dynamicOpenBestModuleCommand);
      }
    }

    if (dynamicModuleSearchCommand) {
      const hasEquivalentSearchCommand = matched.some(
        (command) => command.href === dynamicModuleSearchCommand.href,
      );
      if (!hasEquivalentSearchCommand) {
        dynamicCommands.push(dynamicModuleSearchCommand);
      }
    }

    return dynamicCommands.length > 0 ? [...dynamicCommands, ...matched] : matched;
  }, [dynamicModuleSearchCommand, dynamicOpenBestModuleCommand, query, visibleCommands]);
  const clampedHighlightedIndex =
    filteredCommands.length === 0
      ? 0
      : Math.min(highlightedIndex, filteredCommands.length - 1);

  const closePalette = () => {
    setOpen(false);
    setQuery("");
    setHighlightedIndex(0);
    setModuleSearchResults([]);
  };

  const executeCommand = (command: CommandItem) => {
    if (staticCommandIds.has(command.id)) {
      setRecentCommandIds((previousIds) => {
        const nextIds = [command.id, ...previousIds.filter((id) => id !== command.id)].slice(
          0,
          MAX_RECENT_COMMANDS,
        );
        try {
          window.localStorage.setItem(RECENT_COMMAND_IDS_STORAGE_KEY, JSON.stringify(nextIds));
        } catch {
          // Ignore storage failures and continue navigation.
        }
        return nextIds;
      });
    }
    closePalette();
    router.push(command.href);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-start justify-center bg-slate-950/55 px-4 pt-[12vh] backdrop-blur-sm"
      onClick={closePalette}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 shadow-2xl border-border/60 dark:bg-slate-950/92"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-zinc-200/80 p-3 border-border/60">
          <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-surface-muted px-3 py-2 border-border/55 dark:bg-slate-900/75">
            <span aria-hidden="true" className="text-sm">🔎</span>
            <input
              ref={inputRef}
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setHighlightedIndex(0);
                setModuleSearchResults([]);
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  event.preventDefault();
                  closePalette();
                  return;
                }
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setHighlightedIndex((value) =>
                    filteredCommands.length === 0
                      ? 0
                      : Math.min(Math.max(value, clampedHighlightedIndex) + 1, filteredCommands.length - 1),
                  );
                  return;
                }
                if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setHighlightedIndex((value) => Math.max(Math.min(value, clampedHighlightedIndex) - 1, 0));
                  return;
                }
                if (event.key === "Enter") {
                  event.preventDefault();
                  const selected = filteredCommands[clampedHighlightedIndex] ?? filteredCommands[0];
                  if (selected) {
                    executeCommand(selected);
                  }
                }
              }}
              placeholder="Search pages, tools, and routes..."
              className="w-full bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-500 dark:text-foreground"
            />
            <kbd className="rounded border border-zinc-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500 dark:bg-slate-900 dark:text-zinc-300">
              Esc
            </kbd>
          </div>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <p className="px-2 py-6 text-center text-sm text-zinc-500">
              No matching destinations. Try another keyword.
            </p>
          ) : (
            <ul className="space-y-1">
              {filteredCommands.map((command, index) => {
                const isActive = index === clampedHighlightedIndex;
                return (
                  <li key={command.id}>
                    <button
                      type="button"
                      onClick={() => executeCommand(command)}
                      onMouseEnter={() => setHighlightedIndex(index)}
                      className={`ui-focus-ring flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                        isActive
                          ? "border border-cyan-200 bg-cyan-50/85 text-zinc-900"
                          : "border border-transparent text-zinc-700 hover:bg-surface-muted dark:text-foreground/90"
                      }`}
                    >
                      <span aria-hidden="true" className="mt-0.5 text-base leading-none">
                        {command.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold">{command.label}</span>
                        <span className="block truncate text-xs text-zinc-500">{command.description}</span>
                      </span>
                      <span className="ml-auto hidden rounded-full border border-zinc-200 px-2 py-0.5 text-[10px] font-semibold text-zinc-500 sm:inline-flex">
                        {command.href}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-zinc-200/80 px-3 py-2 text-[11px] text-zinc-500 border-border/60">
          <span>Use ↑ ↓ to move • Enter to open</span>
          <kbd className="rounded border border-zinc-300 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-zinc-500 dark:bg-slate-900 dark:text-zinc-300">
            Ctrl/Cmd + K
          </kbd>
        </div>
      </div>
    </div>
  );
}
