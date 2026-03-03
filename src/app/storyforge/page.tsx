/**
 * StoryForge Cinema — Library page
 *
 * Shows the Phase 1 priority queue of public-domain titles with launch buttons,
 * render-tier badges, and public-domain verification status.
 */

"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { STORYFORGE_PRIORITY_QUEUE, type StoryMetadata, type StoryFilm } from "@/lib/storyforge/types";
import { verifyPublicDomain } from "@/lib/storyforge/gutenberg-service";
import StoryForgeCinemaViewer from "@/components/storyforge/StoryForgeCinemaViewer";
import type { CinematicScene } from "@/lib/storyforge/types";
import type { QuizBreakpoint } from "@/lib/storyforge/comprehension-quiz";

// ── Genre icon map ──────────────────────────────────────────────────

const GENRE_ICONS: Record<string, string> = {
  fantasy: "🧙",
  adventure: "🗺️",
  classic: "📖",
  fable: "🦊",
  "children's literature": "🧸",
  philosophical: "🤔",
};

// ── Tier badge ──────────────────────────────────────────────────────

function TierBadge({ tier }: { tier: 1 | 2 | 3 }) {
  const labels = {
    1: { text: "Audio + Stills", color: "bg-sky-100 text-sky-700" },
    2: { text: "Animated Panels", color: "bg-violet-100 text-violet-700" },
    3: { text: "Full Cinema", color: "bg-amber-100 text-amber-700" },
  };
  const { text, color } = labels[tier];
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${color}`}>
      Tier {tier} — {text}
    </span>
  );
}

// ── Public domain badge ─────────────────────────────────────────────

function PDBadge({ meta }: { meta: StoryMetadata }) {
  const { verified: ok } = verifyPublicDomain(meta);
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
        ok ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
      }`}
    >
      {ok ? "✓ Public Domain" : "⚠ Verify Rights"}
    </span>
  );
}

// ── Story card ──────────────────────────────────────────────────────

function StoryCard({
  meta,
  tier,
  onLaunch,
}: {
  meta: StoryMetadata;
  tier: 1 | 2 | 3;
  onLaunch: (meta: StoryMetadata) => void;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Gradient header */}
      <div className="relative flex h-36 items-end bg-gradient-to-br from-emerald-200 via-teal-100 to-sky-100 p-4">
        <div className="absolute right-3 top-3 flex gap-1.5">
          <PDBadge meta={meta} />
          <TierBadge tier={tier} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900 drop-shadow-sm">{meta.title}</h3>
          <p className="text-xs text-zinc-600">by {meta.author} ({meta.yearPublished})</p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1">
          {meta.genre.map((g) => (
            <span
              key={g}
              className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600"
            >
              {GENRE_ICONS[g] ?? "📚"} {g}
            </span>
          ))}
        </div>

        <p className="text-xs text-zinc-500">
          Source: Project Gutenberg #{meta.publicDomainSource.replace("gutenberg:", "")} • Ages {meta.targetAge.min}–{meta.targetAge.max}
        </p>

        <div className="mt-auto">
          <button
            onClick={() => onLaunch(meta)}
            className="w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 active:bg-emerald-800"
          >
            ▶ Launch StoryForge Cinema
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page component ──────────────────────────────────────────────────

export default function StoryForgePage() {
  const [activeFilm, setActiveFilm] = useState<{
    meta: StoryMetadata;
    scenes: CinematicScene[];
    quizBreakpoints: QuizBreakpoint[];
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Client-side tier detection — defaults to Tier 1 (most compatible)
  const tier: 1 | 2 | 3 = typeof navigator !== "undefined" && "gpu" in navigator ? 2 : 1;

  const handleLaunch = useCallback(async (meta: StoryMetadata) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/storyforge/${encodeURIComponent(meta.id)}`, {
        method: "POST",
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? `Failed to load story (${res.status})`);
      }
      const data = await res.json();
      setActiveFilm({
        meta,
        scenes: data.scenes ?? [],
        quizBreakpoints: data.quizBreakpoints ?? [],
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  // ── Viewer mode ───────────────────────────────────────────────────

  if (activeFilm) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <button
          onClick={() => setActiveFilm(null)}
          className="mb-4 text-sm font-medium text-emerald-600 hover:text-emerald-700"
        >
          ← Back to Library
        </button>
        <StoryForgeCinemaViewer
          scenes={activeFilm.scenes}
          storyTitle={activeFilm.meta.title}
          quizBreakpoints={activeFilm.quizBreakpoints}
          onQuizAnswer={(qId, sceneId, idx, correct) => {
            // Fire-and-forget learning event
            fetch("/api/mastery/events", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                event_type: "quiz_answered",
                module_id: `storyforge-${activeFilm.meta.id}`,
                score: correct ? 1 : 0,
                metadata: {
                  source: "storyforge_comprehension",
                  question_id: qId,
                  scene_id: sceneId,
                  selected_index: idx,
                },
              }),
            }).catch(() => {});
          }}
          onComplete={() => {
            // Could mark story as completed in the future
          }}
        />
      </div>
    );
  }

  // ── Library mode ──────────────────────────────────────────────────

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900">StoryForge Cinema</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          Classic public-domain stories reimagined as interactive cinematic experiences.
          Vocabulary hotspots, comprehension quizzes, and mood-based scene rendering —
          all powered by Project Gutenberg.
        </p>
        <div className="mt-3">
          <TierBadge tier={tier} />
          <span className="ml-2 text-xs text-zinc-400">
            (detected from your device capabilities)
          </span>
        </div>
      </div>

      {/* Error banner */}
      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
          <button onClick={() => setError(null)} className="ml-2 font-medium underline">
            Dismiss
          </button>
        </div>
      )}

      {/* Loading spinner */}
      {loading && (
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-700">
          <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" strokeLinecap="round" />
          </svg>
          Fetching and decomposing story…
        </div>
      )}

      {/* Story grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STORYFORGE_PRIORITY_QUEUE.map((meta) => (
          <StoryCard key={meta.id} meta={meta} tier={tier} onLaunch={handleLaunch} />
        ))}
      </div>

      {/* Phase info */}
      <div className="mt-12 rounded-2xl bg-zinc-50 p-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Phase 1 Collection</h2>
        <p className="mt-2 text-sm text-zinc-500">
          These {STORYFORGE_PRIORITY_QUEUE.length} titles were selected for their rich narrative
          structures, diverse reading levels, and global cultural significance. All texts are
          sourced from Project Gutenberg and are verified public domain works. Phase 2 will
          expand the library with community-nominated titles.
        </p>
      </div>
    </div>
  );
}
