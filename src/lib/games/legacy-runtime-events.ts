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

export function emitLegacyGameComplete(detail: LegacyGameCompleteDetail) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<LegacyGameCompleteDetail>(LEGACY_GAME_COMPLETE_EVENT, {
      detail,
    }),
  );
}

