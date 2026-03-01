"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Flashcard, LessonChunk } from "@/lib/modules/types";
import { trackLearningEvent } from "@/lib/analytics/xapi-lite";
import SpeakButton from "./speak-button";
import { usePreReaderMode } from "./pre-reader-mode";

type VisualFlashcardsProps = {
  lessonId: string;
  moduleId: string;
  lessonTitle: string;
  flashcards?: Flashcard[];
  objectives?: string[];
  chunks?: LessonChunk[];
  glowColor: string;
  borderColor: string;
  onComplete: () => void;
};

type DeckCard = {
  id: string;
  front: string;
  back: string;
  hint?: string;
  imageUrl?: string;
  imageAlt?: string;
};

type DeckCardImageSource = {
  src: string;
  isRemote: boolean;
};

function getCardImageSource(rawUrl: string | undefined): DeckCardImageSource | null {
  if (!rawUrl) return null;
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  if (trimmed.startsWith("/")) {
    return { src: trimmed, isRemote: false };
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return { src: parsed.toString(), isRemote: true };
    }
  } catch {
    return null;
  }

  return null;
}

function buildFallbackDeck(
  lessonId: string,
  lessonTitle: string,
  objectives: string[],
  chunks: LessonChunk[],
): DeckCard[] {
  const cards: DeckCard[] = [];

  for (const [i, chunk] of chunks.slice(0, 4).entries()) {
    cards.push({
      id: `${lessonId}-chunk-${i}`,
      front: chunk.title,
      back: chunk.content,
    });
  }

  for (const [i, obj] of objectives.slice(0, 3).entries()) {
    cards.push({
      id: `${lessonId}-obj-${i}`,
      front: "Can you explain this in your own words?",
      back: obj,
    });
  }

  if (cards.length === 0) {
    cards.push({
      id: `${lessonId}-fallback`,
      front: `What is the main idea of ${lessonTitle}?`,
      back: "Think about the key concepts you just learned!",
    });
  }

  return cards;
}

export default function VisualFlashcards({
  lessonId,
  moduleId,
  lessonTitle,
  flashcards,
  objectives,
  chunks,
  glowColor,
  borderColor,
  onComplete,
}: VisualFlashcardsProps) {
  const { isPreReaderMode } = usePreReaderMode();

  const deck = useMemo(() => {
    if (Array.isArray(flashcards) && flashcards.length > 0) {
      return flashcards.map((c) => ({
        id: c.id,
        front: c.front,
        back: c.back,
        hint: c.hint,
        imageUrl: c.imageUrl,
        imageAlt: c.imageAlt,
      }));
    }
    return buildFallbackDeck(lessonId, lessonTitle, objectives ?? [], chunks ?? []);
  }, [flashcards, lessonId, lessonTitle, objectives, chunks]);

  const [cardIndex, setCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const card = deck[cardIndex];
  const isLast = cardIndex === deck.length - 1;
  const progress = deck.length > 1 ? ((cardIndex + 1) / deck.length) * 100 : 100;
  const cardImageSource = getCardImageSource(card?.imageUrl);

  function flipCard() {
    if (!card) return;
    const nextSide = !showBack;
    setShowBack(nextSide);

    void trackLearningEvent({
      eventType: "flashcard_flipped",
      moduleId,
      lessonId,
      payload: {
        cardId: card.id,
        cardIndex: cardIndex + 1,
        deckSize: deck.length,
        side: nextSide ? "back" : "front",
        source: "explore_visual_flow",
      },
    });
  }

  function goNext() {
    if (isLast) {
      onComplete();
    } else {
      setCardIndex((prev) => prev + 1);
      setShowBack(false);
    }
  }

  function goPrev() {
    setCardIndex((prev) => Math.max(0, prev - 1));
    setShowBack(false);
  }

  if (!card) return null;

  const speakText = showBack
    ? `Answer: ${card.back}`
    : `${card.front}${card.hint ? `. Hint: ${card.hint}` : ""}`;

  return (
    <div className="explore-scene-enter flex flex-col items-center gap-5">
      {/* Progress dots */}
      <div
        className="flex items-center gap-2"
        role="group"
        aria-label={`Card ${cardIndex + 1} of ${deck.length}`}
      >
        {deck.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setCardIndex(i);
              setShowBack(false);
            }}
            className="h-3 w-3 rounded-full border-2 transition-all duration-300"
            style={{
              borderColor,
              backgroundColor: i <= cardIndex ? glowColor : "transparent",
              transform: i === cardIndex ? "scale(1.3)" : "scale(1)",
            }}
            aria-label={`Card ${i + 1} of ${deck.length}`}
          />
        ))}
      </div>

      {/* Progress bar — thicker */}
      <div className="h-3 w-full max-w-md overflow-hidden rounded-full bg-zinc-100" role="progressbar" aria-valuenow={cardIndex + 1} aria-valuemin={1} aria-valuemax={deck.length} aria-label="Flashcard progress">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, backgroundColor: glowColor }}
        />
      </div>

      {/* Flip card */}
      <button
        type="button"
        onClick={flipCard}
        className="ui-focus-ring w-full max-w-2xl"
        aria-label={showBack ? "Showing answer — tap to see question" : "Showing question — tap to see answer"}
      >
        <div
          className="explore-card-elevated relative min-h-64 overflow-hidden rounded-3xl border-2 transition-all duration-500 sm:min-h-80"
          style={{
            borderColor,
            backgroundColor: showBack ? `${glowColor}11` : "rgba(255,255,255,0.9)",
            transform: showBack ? "rotateY(0deg)" : "rotateY(0deg)",
          }}
        >
          {/* Card image (if available) */}
          {cardImageSource && (
            <div className="flex justify-center bg-white/50 px-4 pt-6">
              <Image
                src={cardImageSource.src}
                alt={card.imageAlt ?? ""}
                width={320}
                height={220}
                sizes="(max-width: 640px) 160px, 220px"
                className="h-auto max-h-32 w-auto rounded-xl object-contain sm:max-h-40"
                unoptimized={cardImageSource.isRemote}
                loader={
                  cardImageSource.isRemote ? ({ src }) => src : undefined
                }
              />
            </div>
          )}

          <div className="flex flex-col items-center justify-center p-6 sm:p-8">
            {/* Side badge */}
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: glowColor }}
            >
              {isPreReaderMode ? (
                <>
                  <span aria-hidden="true">{showBack ? "💡" : "❓"}</span>
                  <span className="sr-only">{showBack ? "Answer" : "Question"}</span>
                </>
              ) : (
                showBack ? "Answer" : "Question"
              )}
            </span>

            {/* Content */}
            <p className="mt-4 text-center text-xl font-extrabold tracking-tight text-zinc-900 sm:text-2xl">
              {showBack ? card.back : card.front}
            </p>

            {/* Hint (front side only) */}
            {!showBack && card.hint && (
              <p className={`mt-3 text-center text-sm text-zinc-500 ${isPreReaderMode ? "sr-only" : ""}`}>
                Hint: {card.hint}
              </p>
            )}

            {/* Tap prompt */}
            <p className="mt-5 text-xs font-medium" style={{ color: glowColor }}>
              {isPreReaderMode ? (
                <>
                  <span aria-hidden="true">👆</span>
                  <span className="sr-only">Tap to flip</span>
                </>
              ) : (
                showBack ? "Tap to see question" : "Tap to reveal answer"
              )}
            </p>
          </div>
        </div>
      </button>

      {/* Speak button */}
      <SpeakButton
        text={speakText}
        label={isPreReaderMode ? "🔊" : "Read Aloud"}
      />

      {/* Navigation */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={goPrev}
          disabled={cardIndex === 0}
          className="ui-focus-ring inline-flex min-h-14 items-center rounded-full border-2 px-6 py-3 text-base font-bold transition-all duration-200 active:scale-95 disabled:opacity-30"
          style={{ borderColor, color: glowColor }}
        >
          {isPreReaderMode ? (
            <>
              <span aria-hidden="true">◀</span>
              <span className="sr-only">Previous card</span>
            </>
          ) : (
            "Back"
          )}
        </button>
        <button
          type="button"
          onClick={goNext}
          className="ui-focus-ring inline-flex min-h-14 items-center rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95"
          style={{ backgroundColor: glowColor }}
        >
          {isPreReaderMode ? (
            <>
              <span aria-hidden="true">{isLast ? "✅" : "▶"}</span>
              <span className="sr-only">{isLast ? "Done, next step" : "Next card"}</span>
            </>
          ) : (
            isLast ? "Done! Next Step" : "Next"
          )}
        </button>
      </div>
    </div>
  );
}
