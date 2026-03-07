"use client";

import type { GameDifficulty } from "@/lib/games/types";

export const LEGACY_GAME_COMPLETE_EVENT = "koydo:legacy-game-complete";

export type LegacyGameCompleteDetail = {
  sessionId: string;
  gameId: string;
  difficulty?: GameDifficulty;
  elapsedMs: number;
  interactions: number;
  score?: number;
  maxScore?: number;
  source: "runtime-bridge" | "quiz-adventure-engine" | "component";
  occurredAt: string;
};

export function createLegacySessionId() {
  return `legacy-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function emitLegacyGameComplete(detail: LegacyGameCompleteDetail): void;
export function emitLegacyGameComplete(
  sessionId: string,
  score?: number,
  stars?: number,
): void;
export function emitLegacyGameComplete(
  detailOrSessionId: LegacyGameCompleteDetail | string,
  score?: number,
  stars?: number,
) {
  if (typeof window === "undefined") return;

  const detail: LegacyGameCompleteDetail =
    typeof detailOrSessionId === "string"
      ? {
        sessionId: detailOrSessionId,
        gameId: "legacy-game",
        elapsedMs: 0,
        interactions: 0,
        score,
        maxScore: typeof stars === "number" ? stars : undefined,
        source: "component",
        occurredAt: new Date().toISOString(),
      }
      : detailOrSessionId;

  window.dispatchEvent(
    new CustomEvent<LegacyGameCompleteDetail>(LEGACY_GAME_COMPLETE_EVENT, {
      detail,
    }),
  );
}

