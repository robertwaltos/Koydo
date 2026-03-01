"use client";

import { useCallback, useState } from "react";
import type { Question } from "@/lib/modules/types";
import TappableText from "./tappable-text";
import { usePreReaderMode } from "./pre-reader-mode";
import { useTouchDevice } from "./use-touch-device";

type VisualQuizProps = {
  questions: Question[];
  glowColor: string;
  borderColor: string;
  onComplete: (score: number, total: number) => void;
};

const OPTION_LETTERS = ["A", "B", "C", "D", "E", "F"];

export default function VisualQuiz({
  questions,
  glowColor,
  borderColor,
  onComplete,
}: VisualQuizProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const isTouch = useTouchDevice();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;
  const progress =
    questions.length > 1
      ? ((currentIndex + 1) / questions.length) * 100
      : 100;

  const isCorrect = selectedId === question?.correctOptionId;

  const handleSelect = useCallback(
    (optionId: string) => {
      if (isAnswered) return;
      setSelectedId(optionId);
    },
    [isAnswered],
  );

  function handleSubmit() {
    if (!selectedId || isAnswered) return;
    setIsAnswered(true);
    if (selectedId === question.correctOptionId) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (isLast) {
      onComplete(score, questions.length);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedId(null);
      setIsAnswered(false);
    }
  }

  if (!question) return null;

  return (
    <div className="explore-scene-enter flex flex-col items-center gap-5">
      {/* Progress bar — thicker with question counter badge */}
      <div className="flex w-full max-w-lg items-center gap-3">
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-zinc-100">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: glowColor }}
          />
        </div>
        <span
          className="inline-flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-extrabold text-white"
          style={{ backgroundColor: glowColor }}
        >
          {currentIndex + 1}/{questions.length}
        </span>
      </div>

      {/* Question card */}
      <article
        className="explore-card-elevated w-full max-w-2xl rounded-3xl border-2 bg-white/90 p-6 backdrop-blur-sm sm:p-8"
        style={{ borderColor }}
      >
        <TappableText
          text={question.text}
          className="block"
          buttonLabel={isPreReaderMode ? "🔊" : "Hear It"}
        >
          <p className="text-xl font-extrabold leading-snug text-zinc-900 sm:text-2xl">
            {question.text}
          </p>
        </TappableText>

        {/* Options — large tappable buttons with letter badges */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {question.options.map((option, optIdx) => {
            const isSelected = selectedId === option.id;
            const isOptionCorrect = option.id === question.correctOptionId;

            let cardBorder = isSelected ? glowColor : borderColor;
            let cardBg = "white";
            let badgeBg = `${glowColor}15`;
            let badgeColor = glowColor;
            let extraClass = "";

            if (isAnswered) {
              if (isOptionCorrect) {
                cardBorder = "#22c55e";
                cardBg = "#f0fdf4";
                badgeBg = "#22c55e";
                badgeColor = "white";
                extraClass = "explore-correct-bounce";
              } else if (isSelected && !isOptionCorrect) {
                cardBorder = "#ef4444";
                cardBg = "#fef2f2";
                badgeBg = "#ef4444";
                badgeColor = "white";
                extraClass = "explore-wrong-shake";
              }
            } else if (isSelected) {
              cardBg = `${glowColor}10`;
              badgeBg = glowColor;
              badgeColor = "white";
            }

            return (
              <div
                key={option.id}
                className={`relative flex min-h-16 items-center gap-3 rounded-2xl border-2 px-4 py-3 transition-all duration-200 sm:min-h-18 ${extraClass}`}
                style={{
                  borderColor: cardBorder,
                  backgroundColor: cardBg,
                }}
              >
                {/* Radio circle — this selects the answer */}
                <button
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  disabled={isAnswered}
                  className="ui-focus-ring inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition-colors duration-200 hover:scale-105 active:scale-95 disabled:cursor-default"
                  style={{ backgroundColor: badgeBg, color: badgeColor }}
                  aria-label={`Select ${OPTION_LETTERS[optIdx]}: ${option.text}`}
                >
                  {isPreReaderMode && isAnswered
                    ? isOptionCorrect
                      ? "✓"
                      : isSelected
                        ? "✗"
                        : OPTION_LETTERS[optIdx]
                    : OPTION_LETTERS[optIdx]}
                </button>
                {/* Text — tappable to read aloud on touch, does NOT select */}
                {isTouch ? (
                  <TappableText
                    text={option.text}
                    className="flex-1"
                    desktopButton={false}
                  >
                    <span className="text-base font-semibold text-zinc-900 sm:text-lg">
                      {option.text}
                    </span>
                  </TappableText>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleSelect(option.id)}
                    disabled={isAnswered}
                    className="flex-1 text-left disabled:cursor-default"
                  >
                    <span className="text-base font-semibold text-zinc-900 sm:text-lg">
                      {option.text}
                    </span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Feedback panel */}
        {isAnswered ? (
          <div
            className="explore-card-pop mt-5 flex items-start gap-3 rounded-2xl p-4"
            style={{
              backgroundColor: isCorrect ? "#f0fdf4" : "#fef2f2",
              animationDelay: "0ms",
            }}
          >
            <span className="text-2xl" aria-hidden="true">
              {isCorrect ? "🎉" : "💡"}
            </span>
            <div>
              <p
                className="text-base font-extrabold"
                style={{ color: isCorrect ? "#16a34a" : "#dc2626" }}
              >
                {isPreReaderMode
                  ? isCorrect ? "✅" : "↺"
                  : isCorrect ? "Great job!" : "Not quite!"}
              </p>
              {question.explanation ? (
                <p className={`mt-1 text-sm text-zinc-700 ${isPreReaderMode ? "sr-only" : ""}`}>
                  {question.explanation}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </article>

      {/* Action button — larger and more prominent */}
      <div>
        {!isAnswered ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!selectedId}
            className="ui-focus-ring inline-flex min-h-14 items-center rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95 disabled:opacity-40"
            style={{ backgroundColor: glowColor }}
          >
            {isPreReaderMode ? (
              <>
                <span aria-hidden="true">✅</span>
                <span className="sr-only">Check answer</span>
              </>
            ) : (
              "Check Answer"
            )}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="ui-focus-ring inline-flex min-h-14 items-center rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95"
            style={{ backgroundColor: glowColor }}
          >
            {isPreReaderMode ? (
              <>
                <span aria-hidden="true">{isLast ? "🎉" : "▶"}</span>
                <span className="sr-only">
                  {isLast ? "See results" : "Next question"}
                </span>
              </>
            ) : (
              isLast ? "See Results" : "Next Question"
            )}
          </button>
        )}
      </div>

      {/* Score tracker — visual pill */}
      <div
        className={`inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 ${isPreReaderMode ? "sr-only" : ""}`}
        style={{ borderColor }}
      >
        <span className="text-sm" aria-hidden="true">⭐</span>
        <span className="text-sm font-bold text-zinc-700">
          Score: {score}/{currentIndex + (isAnswered ? 1 : 0)}
        </span>
      </div>
    </div>
  );
}
