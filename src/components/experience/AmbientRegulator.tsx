"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { JUICY_SPRINGS } from "@/lib/experience/interaction-primitives";

interface AmbientRegulatorProps {
  open: boolean;
  onClose: () => void;
}

const PHASE_DURATION = 4; // seconds per phase
const CYCLE_DURATION = PHASE_DURATION * 4; // 16s full cycle
const AUTO_DISMISS = 60; // seconds

type Phase = "inhale" | "hold-in" | "exhale" | "hold-out";

const PHASE_LABELS: Record<Phase, string> = {
  inhale: "Breathe In\u2026",
  "hold-in": "Hold\u2026",
  exhale: "Breathe Out\u2026",
  "hold-out": "Hold\u2026",
};

const PHASE_SCALES: Record<Phase, number> = {
  inhale: 1.4,
  "hold-in": 1.4,
  exhale: 1,
  "hold-out": 1,
};

function getCurrentPhase(elapsed: number): Phase {
  const pos = elapsed % CYCLE_DURATION;
  if (pos < PHASE_DURATION) return "inhale";
  if (pos < PHASE_DURATION * 2) return "hold-in";
  if (pos < PHASE_DURATION * 3) return "exhale";
  return "hold-out";
}

const prefersReducedMotion =
  typeof window !== "undefined"
    ? window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    : false;

export default function AmbientRegulator({
  open,
  onClose,
}: AmbientRegulatorProps) {
  const [elapsed, setElapsed] = useState(0);
  const phase = useMemo(() => getCurrentPhase(elapsed), [elapsed]);
  const showSkip = elapsed >= CYCLE_DURATION;

  // Timer
  useEffect(() => {
    if (!open) {
      setElapsed(0);
      return;
    }
    const interval = setInterval(() => {
      setElapsed((e) => {
        if (e + 1 >= AUTO_DISMISS) {
          onClose();
          return 0;
        }
        return e + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [open, onClose]);

  // Escape key dismisses
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const handleSkip = useCallback(() => onClose(), [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="ambient-regulator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/60 backdrop-blur-md"
          role="dialog"
          aria-label="Breathing exercise"
        >
          {/* Breathing circle */}
          {prefersReducedMotion ? (
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500">
              <span className="text-center text-sm font-medium text-white">
                {PHASE_LABELS[phase]}
              </span>
            </div>
          ) : (
            <motion.div
              className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-2xl shadow-indigo-500/30"
              animate={{
                scale: PHASE_SCALES[phase],
              }}
              transition={JUICY_SPRINGS.gentle}
            />
          )}

          {/* Phase label */}
          <motion.p
            key={phase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 font-[family-name:var(--font-display-round)] text-2xl font-medium text-white"
          >
            {PHASE_LABELS[phase]}
          </motion.p>

          {/* Skip button */}
          <AnimatePresence>
            {showSkip && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                onClick={handleSkip}
                className="mt-10 rounded-full border border-white/20 px-6 py-2 text-sm text-white/80 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
              >
                Skip
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
