"use client";

/**
 * StoryForge Cinema Viewer — cinematic playback engine.
 *
 * Renders scenes with mood gradients, hotspot overlays, narration controls,
 * progress tracking, and comprehension quiz integration.
 */

import React, { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import type { CinematicScene, SceneMood, InteractiveHotspot, HotspotContent } from "@/lib/storyforge/types";
import type { ComprehensionQuestion, QuizBreakpoint } from "@/lib/storyforge/comprehension-quiz";

// ── Mood gradients ──────────────────────────────────────────────────

const MOOD_GRADIENTS: Record<SceneMood, string> = {
  joyful: "from-amber-100 via-yellow-50 to-orange-50",
  mysterious: "from-indigo-200 via-purple-100 to-slate-100",
  tense: "from-red-100 via-orange-50 to-slate-100",
  melancholic: "from-blue-200 via-slate-100 to-gray-100",
  adventurous: "from-emerald-100 via-teal-50 to-sky-50",
  peaceful: "from-green-100 via-lime-50 to-sky-50",
  whimsical: "from-pink-200 via-violet-100 to-sky-100",
  dramatic: "from-slate-200 via-zinc-100 to-amber-50",
};

// ── Types ───────────────────────────────────────────────────────────

interface StoryForgeCinemaViewerProps {
  scenes: CinematicScene[];
  storyTitle: string;
  quizBreakpoints: QuizBreakpoint[];
  onQuizAnswer?: (questionId: string, sceneId: string, selectedIndex: number, correct: boolean) => void;
  onComplete?: () => void;
}

// ── Hotspot popup ───────────────────────────────────────────────────

function HotspotPopup({ content, onClose }: { content: HotspotContent; onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="mx-4 max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {content.kind === "vocabulary" && (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">Vocabulary</p>
            <h3 className="mt-1 text-xl font-bold text-zinc-900">{content.word}</h3>
            <p className="mt-2 text-sm text-zinc-600">{content.definition}</p>
            <p className="mt-2 text-xs italic text-zinc-400">{content.example}</p>
          </>
        )}
        {content.kind === "explore" && (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Explore</p>
            <h3 className="mt-1 text-xl font-bold text-zinc-900">{content.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{content.text}</p>
          </>
        )}
        {content.kind === "character_info" && (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-600">Character</p>
            <h3 className="mt-1 text-xl font-bold text-zinc-900">{content.name}</h3>
            <p className="mt-2 text-sm text-zinc-600">{content.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {content.traits.map((t) => (
                <span key={t} className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700">
                  {t}
                </span>
              ))}
            </div>
          </>
        )}
        {content.kind === "quiz" && (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Quick Quiz</p>
            <h3 className="mt-1 text-lg font-bold text-zinc-900">{content.question}</h3>
            <div className="mt-3 space-y-2">
              {content.options.map((opt, i) => (
                <button
                  key={i}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-left text-sm hover:bg-emerald-50 hover:border-emerald-300 transition-colors"
                  onClick={onClose}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg bg-zinc-100 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// ── Quiz overlay ────────────────────────────────────────────────────

function QuizOverlay({
  questions,
  onAnswer,
  onDismiss,
}: {
  questions: ComprehensionQuestion[];
  onAnswer: (questionId: string, selectedIndex: number, correct: boolean) => void;
  onDismiss: () => void;
}) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answered, setAnswered] = useState<Record<number, number>>({});
  const q = questions[currentQ];

  const handleSelect = (idx: number) => {
    if (answered[currentQ] !== undefined) return;
    setAnswered((prev) => ({ ...prev, [currentQ]: idx }));
    onAnswer(q.id, idx, idx === q.correctIndex);
  };

  const isLast = currentQ === questions.length - 1;
  const allAnswered = Object.keys(answered).length === questions.length;

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="mx-4 max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Comprehension Check ({currentQ + 1}/{questions.length})
          </p>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
            {q.type}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold text-zinc-900">{q.question}</h3>

        <div className="mt-4 space-y-2">
          {q.options.map((opt, i) => {
            const isSelected = answered[currentQ] === i;
            const isCorrect = i === q.correctIndex;
            const isRevealed = answered[currentQ] !== undefined;

            let btnClass = "border-zinc-200 hover:border-emerald-300 hover:bg-emerald-50";
            if (isRevealed && isCorrect) btnClass = "border-emerald-400 bg-emerald-50 text-emerald-800";
            else if (isRevealed && isSelected && !isCorrect) btnClass = "border-red-400 bg-red-50 text-red-800";

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={isRevealed}
                className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm font-medium transition-colors ${btnClass}`}
              >
                {opt}
                {isRevealed && isCorrect && " ✓"}
                {isRevealed && isSelected && !isCorrect && " ✗"}
              </button>
            );
          })}
        </div>

        {answered[currentQ] !== undefined && (
          <p className="mt-3 rounded-lg bg-sky-50 p-3 text-xs text-sky-800">{q.explanation}</p>
        )}

        <div className="mt-4 flex justify-end gap-2">
          {!isLast && answered[currentQ] !== undefined && (
            <button
              onClick={() => setCurrentQ((p) => p + 1)}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Next Question →
            </button>
          )}
          {allAnswered && (
            <button
              onClick={onDismiss}
              className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900"
            >
              Continue Reading →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main viewer ─────────────────────────────────────────────────────

export default function StoryForgeCinemaViewer({
  scenes,
  storyTitle,
  quizBreakpoints,
  onQuizAnswer,
  onComplete,
}: StoryForgeCinemaViewerProps) {
  const [currentScene, setCurrentScene] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<InteractiveHotspot | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [completedQuizzes, setCompletedQuizzes] = useState<Set<number>>(new Set());

  const scene = scenes[currentScene];
  const progress = scenes.length > 0 ? ((currentScene + 1) / scenes.length) * 100 : 0;
  const gradient = scene ? MOOD_GRADIENTS[scene.mood] : MOOD_GRADIENTS.peaceful;

  // Check if a quiz should trigger after this scene
  const quizForScene = useMemo(
    () => quizBreakpoints.find((q) => q.afterSceneIndex === currentScene),
    [quizBreakpoints, currentScene],
  );

  const goToScene = useCallback(
    (idx: number) => {
      if (idx < 0 || idx >= scenes.length) return;

      // Check if the CURRENT scene has an unanswered quiz
      if (idx > currentScene && quizForScene && !completedQuizzes.has(currentScene)) {
        setShowQuiz(true);
        return;
      }

      setCurrentScene(idx);
      setActiveHotspot(null);
      setShowQuiz(false);

      if (idx === scenes.length - 1) {
        onComplete?.();
      }
    },
    [scenes.length, currentScene, quizForScene, completedQuizzes, onComplete],
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goToScene(currentScene + 1);
      if (e.key === "ArrowLeft") goToScene(currentScene - 1);
      if (e.key === "Escape") setActiveHotspot(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentScene, goToScene]);

  if (!scene) {
    return (
      <div className="flex h-64 items-center justify-center text-zinc-400">
        No scenes available.
      </div>
    );
  }

  return (
    <div className={`relative min-h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}>
      {/* ── Progress bar ── */}
      <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-zinc-200/50">
        <div
          className="h-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 px-6 pt-5 pb-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500/80">
          {storyTitle}
        </p>
        <h2 className="mt-1 text-xl font-bold text-zinc-900">{scene.title}</h2>
        <div className="mt-1 flex items-center gap-2 text-xs text-zinc-500">
          <span className="rounded-full bg-white/60 px-2 py-0.5 font-medium capitalize">
            {scene.mood}
          </span>
          <span>•</span>
          <span>Scene {currentScene + 1} of {scenes.length}</span>
          {scene.characters.length > 0 && (
            <>
              <span>•</span>
              <span>{scene.characters.map((c) => c.name).join(", ")}</span>
            </>
          )}
        </div>
      </div>

      {/* ── Scene content area ── */}
      <div className="relative z-10 px-6 pb-4">
        {/* Keyframe image (if available) */}
        {scene.keyframeImageUrl && (
          <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
            <Image
              src={scene.keyframeImageUrl}
              alt={scene.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Hotspot overlays on image */}
            {scene.hotspots.map((hs) => (
              <button
                key={hs.id}
                onClick={() => setActiveHotspot(hs)}
                className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-emerald-500/70 shadow-lg backdrop-blur-sm transition-transform hover:scale-125"
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                aria-label={hs.label}
                title={hs.label}
              >
                <span className="sr-only">{hs.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Tier 1 fallback: caption if no keyframe */}
        {!scene.keyframeImageUrl && scene.tier1Fallback && (
          <div className="mb-4 rounded-xl bg-white/40 p-4 backdrop-blur-sm">
            <p className="text-sm italic text-zinc-500">{scene.tier1Fallback.captionText}</p>
          </div>
        )}

        {/* Narrative text */}
        <div className="rounded-xl bg-white/50 p-5 backdrop-blur-sm">
          <p className="whitespace-pre-line text-[15px] leading-relaxed text-zinc-800">
            {scene.narrativeText}
          </p>
        </div>

        {/* Dialogue section */}
        {scene.dialogue.length > 0 && (
          <div className="mt-3 space-y-1.5">
            {scene.dialogue.slice(0, 5).map((d, i) => (
              <div key={i} className="flex gap-2 text-sm">
                <span className="font-semibold text-violet-700 shrink-0">{d.character}:</span>
                <span className="italic text-zinc-600">&ldquo;{d.text}&rdquo;</span>
              </div>
            ))}
          </div>
        )}

        {/* Hotspot buttons (text mode, for when no keyframe) */}
        {!scene.keyframeImageUrl && scene.hotspots.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {scene.hotspots.map((hs) => (
              <button
                key={hs.id}
                onClick={() => setActiveHotspot(hs)}
                className="rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 hover:bg-emerald-100 transition-colors"
              >
                🔍 {hs.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Navigation ── */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/30 px-6 py-4">
        <button
          onClick={() => goToScene(currentScene - 1)}
          disabled={currentScene === 0}
          className="rounded-lg bg-white/60 px-4 py-2 text-sm font-medium text-zinc-700 backdrop-blur-sm transition-colors hover:bg-white/80 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>

        {/* Scene dots (compact for many scenes) */}
        <div className="flex gap-1 overflow-hidden max-w-[200px]">
          {scenes.length <= 20 ? (
            scenes.map((_, i) => (
              <button
                key={i}
                onClick={() => goToScene(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === currentScene
                    ? "bg-emerald-600 scale-125"
                    : i < currentScene
                      ? "bg-emerald-300"
                      : "bg-zinc-300"
                }`}
                aria-label={`Go to scene ${i + 1}`}
              />
            ))
          ) : (
            <span className="text-xs text-zinc-500">
              {currentScene + 1} / {scenes.length}
            </span>
          )}
        </div>

        <button
          onClick={() => goToScene(currentScene + 1)}
          disabled={currentScene === scenes.length - 1}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>

      {/* ── Hotspot popup overlay ── */}
      {activeHotspot && (
        <HotspotPopup content={activeHotspot.content} onClose={() => setActiveHotspot(null)} />
      )}

      {/* ── Quiz overlay ── */}
      {showQuiz && quizForScene && (
        <QuizOverlay
          questions={quizForScene.questions}
          onAnswer={(qId, idx, correct) => {
            onQuizAnswer?.(qId, scene.id, idx, correct);
          }}
          onDismiss={() => {
            setCompletedQuizzes((prev) => new Set([...prev, currentScene]));
            setShowQuiz(false);
            goToScene(currentScene + 1);
          }}
        />
      )}
    </div>
  );
}
