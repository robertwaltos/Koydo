"use client";

import { useMemo, useState } from "react";
import type { Flashcard, LessonChunk } from "@/lib/modules/types";
import { trackLearningEvent } from "@/lib/analytics/xapi-lite";

type LessonFlashcardsProps = {
  moduleId: string;
  lessonId: string;
  lessonTitle: string;
  flashcards?: Flashcard[];
  objectives?: string[];
  chunks?: LessonChunk[];
};

type DeckCard = {
  id: string;
  front: string;
  back: string;
  hint?: string;
};

function buildFallbackDeck(lessonId: string, lessonTitle: string, objectives: string[], chunks: LessonChunk[]): DeckCard[] {
  const cards: DeckCard[] = [];

  for (const [index, objective] of objectives.slice(0, 4).entries()) {
    cards.push({
      id: `${lessonId}-objective-card-${index + 1}`,
      front: `How would you explain this goal in your own words?`,
      back: objective,
    });
  }

  for (const [index, chunk] of chunks.slice(0, 3).entries()) {
    cards.push({
      id: `${lessonId}-chunk-card-${index + 1}`,
      front: chunk.title,
      back: chunk.content,
    });
  }

  if (cards.length === 0) {
    cards.push(
      {
        id: `${lessonId}-fallback-1`,
        front: `What is the main idea in ${lessonTitle}?`,
        back: `Summarize the central concept in one clear sentence.`,
      },
      {
        id: `${lessonId}-fallback-2`,
        front: `How can you apply ${lessonTitle}?`,
        back: `Give one concrete example and explain why it works.`,
      },
    );
  }

  return cards;
}

export default function LessonFlashcards({
  moduleId,
  lessonId,
  lessonTitle,
  flashcards,
  objectives,
  chunks,
}: LessonFlashcardsProps) {
  const deck = useMemo(() => {
    if (Array.isArray(flashcards) && flashcards.length > 0) {
      return flashcards.map((card) => ({
        id: card.id,
        front: card.front,
        back: card.back,
        hint: card.hint,
      }));
    }
    return buildFallbackDeck(lessonId, lessonTitle, objectives ?? [], chunks ?? []);
  }, [chunks, flashcards, lessonId, lessonTitle, objectives]);

  const [cardIndex, setCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [flipCount, setFlipCount] = useState(0);

  const card = deck[Math.min(cardIndex, Math.max(deck.length - 1, 0))];
  const progressPercent = Math.round(((cardIndex + 1) / Math.max(deck.length, 1)) * 100);

  const flipCard = () => {
    if (!card) return;

    const nextShowBack = !showBack;
    setShowBack(nextShowBack);
    setFlipCount((previous) => previous + 1);

    void trackLearningEvent({
      eventType: "flashcard_flipped",
      moduleId,
      lessonId,
      payload: {
        cardId: card.id,
        cardIndex: cardIndex + 1,
        deckSize: deck.length,
        side: nextShowBack ? "back" : "front",
      },
    });
  };

  const goToPrevious = () => {
    setCardIndex((previous) => Math.max(0, previous - 1));
    setShowBack(false);
  };

  const goToNext = () => {
    setCardIndex((previous) => Math.min(deck.length - 1, previous + 1));
    setShowBack(false);
  };

  if (!card) {
    return (
      <section className="rounded-2xl border border-violet-200 bg-violet-50 p-4 text-sm text-violet-900">
        Flashcards will appear after lesson content is generated.
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-violet-200 bg-violet-50 p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Flashcards</p>
        <p className="text-xs text-zinc-600">
          Card {cardIndex + 1} / {deck.length}
        </p>
      </div>

      <progress
        className="ui-progress ui-progress--violet mt-3 h-2 w-full"
        value={progressPercent}
        max={100}
        aria-label="Flashcard progress"
      />

      <button
        type="button"
        onClick={flipCard}
        className="ui-focus-ring mt-4 w-full text-left"
      >
        <div className="lesson-flip-scene">
          <div className={`lesson-flip-inner ${showBack ? "is-back" : ""}`}>
            <div className="lesson-flip-face lesson-flip-front border border-violet-200 bg-surface p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Front</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{card.front}</p>
              {card.hint ? <p className="mt-3 text-xs text-zinc-600">Hint: {card.hint}</p> : null}
              <p className="mt-4 text-xs font-medium text-violet-700">Tap to flip</p>
            </div>
            <div className="lesson-flip-face lesson-flip-back border border-violet-200 bg-violet-100 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Back</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{card.back}</p>
              <p className="mt-4 text-xs font-medium text-violet-700">Tap to flip back</p>
            </div>
          </div>
        </div>
      </button>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={goToPrevious}
          disabled={cardIndex === 0}
          className="ui-soft-button ui-focus-ring rounded-full border border-violet-300 bg-surface px-4 py-2 text-sm font-semibold text-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={goToNext}
          disabled={cardIndex >= deck.length - 1}
          className="ui-soft-button ui-focus-ring rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          Next
        </button>
        <p className="text-xs text-zinc-600">Flips: {flipCount}</p>
      </div>
    </section>
  );
}
