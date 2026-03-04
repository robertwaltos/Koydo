"use client";

import { useEffect, useMemo, useReducer, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Type } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticError,
  hapticSelection,
  hapticSuccess,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── constants ─── */
const TIME_LIMIT = 45;
const WORDS = [
  "ANGLE", "BRAIN", "CRANE", "DREAM", "EARTH", "FLAME", "GRAPE", "HOUSE",
  "IMAGE", "JEWEL", "KNIFE", "LEMON", "MOUNT", "NIGHT", "OCEAN", "PLANT",
  "QUEST", "RIVER", "STONE", "TOWER", "ULTRA", "VOICE", "WHALE", "YIELD",
  "ZEBRA", "AMBER", "BLOOM", "CHARM", "DEPTH", "ELITE",
];

type Phase = "ready" | "playing" | "won" | "lost";

interface State {
  phase: Phase;
  sessionId: string;
  letters: string;
  found: string[];
  input: string;
  timeLeft: number;
  startTime: number;
  interactions: number;
}

function getAnagrams(word: string): string[] {
  const sorted = word.split("").sort().join("");
  return WORDS.filter((w) => w !== word && w.split("").sort().join("") === sorted);
}

function pickWordWithAnagrams(): { letters: string; targets: string[] } {
  /* Just use the word as letters to find hidden words (subsets) */
  const word = WORDS[Math.floor(Math.random() * WORDS.length)]!;
  const letters = word.split("").sort(() => Math.random() - 0.5).join("");
  /* find all 3+ letter words from the letters */
  const targets = findSubwords(letters);
  return { letters, targets };
}

function findSubwords(letters: string): string[] {
  const DICT = ["ACE", "AGE", "ALE", "APE", "ARC", "ARE", "ARM", "ART", "ATE", "AWE",
    "BAN", "BAR", "BAT", "BED", "BIG", "BIT", "BOW", "BOX", "BUS", "BUT",
    "CAN", "CAR", "COP", "CUP", "CUT", "DAM", "DEN", "DIG", "DOG", "DOT",
    "EAR", "EAT", "EEL", "EGG", "ELM", "EMU", "ERA", "EVE", "EWE", "EYE",
    "FAN", "FAR", "FAT", "FIG", "FIN", "FIT", "FLY", "FOG", "FOX", "FUN",
    "GAS", "GEL", "GEM", "GIN", "GNU", "GUM", "GUN", "GUT", "GYM",
    "HAM", "HEN", "HIP", "HIT", "HOG", "HOP", "HOT", "HUG", "HUM", "HUT",
    "ICE", "ILL", "IMP", "INK", "INN", "ION", "IRE", "IRK", "IVY",
    "JAB", "JAM", "JAR", "JAW", "JET", "JOB", "JOG", "JOT", "JOY", "JUG",
    "KEG", "KEN", "KEY", "KID", "KIN", "KIT",
    "LAB", "LAP", "LAW", "LEA", "LEG", "LET", "LID", "LIP", "LOG", "LOT",
    "MAD", "MAN", "MAP", "MAT", "MEN", "MET", "MIX", "MOB", "MOP", "MUD",
    "NAP", "NET", "NEW", "NIT", "NOD", "NOR", "NOT", "NUN", "NUT",
    "OAK", "OAR", "OAT", "ODD", "OIL", "OLD", "ONE", "OPT", "ORB", "ORE", "OUR", "OUT", "OWE", "OWL", "OWN",
    "PAN", "PAW", "PEA", "PEG", "PEN", "PET", "PIE", "PIG", "PIN", "PIT", "PLY", "POD", "POP", "POT", "PUB", "PUN", "PUP", "PUT",
    "RAM", "RAN", "RAP", "RAT", "RAW", "RAY", "RED", "RIB", "RIG", "RIM", "ROB", "ROD", "ROT", "ROW", "RUG", "RUN", "RUT",
    "SAP", "SAT", "SAW", "SET", "SIT", "SIX", "SKI", "SKY", "SLY", "SOB", "SOD", "SON", "SOP", "SOT", "SOW", "SOY", "SPA", "SPY", "STY", "SUB", "SUM", "SUN", "SUP",
    "TAB", "TAG", "TAN", "TAP", "TAR", "TAX", "TEN", "THE", "TIE", "TIN", "TIP", "TOE", "TON", "TOP", "TOW", "TOY", "TUB", "TUG",
    "URN", "USE",
    "VAN", "VAT", "VET", "VIA", "VIE", "VOW",
    "WAR", "WAX", "WAY", "WEB", "WED", "WET", "WHO", "WIG", "WIN", "WIT", "WOE", "WOK", "WON", "WOO", "WOW",
    "YAK", "YAM", "YAP", "YAW", "YEW",
    "ZAP", "ZEN", "ZIP", "ZIT", "ZOO",
  ];
  const available = letters.toUpperCase().split("");
  return DICT.filter((w) => {
    const pool = [...available];
    for (const ch of w) {
      const idx = pool.indexOf(ch);
      if (idx < 0) return false;
      pool.splice(idx, 1);
    }
    return true;
  });
}

const init2 = (): State => {
  const { letters } = pickWordWithAnagrams();
  return { phase: "ready", sessionId: createLegacySessionId(), letters, found: [], input: "", timeLeft: TIME_LIMIT, startTime: 0, interactions: 0 };
};

type Action =
  | { type: "START" }
  | { type: "INPUT"; value: string }
  | { type: "SUBMIT" }
  | { type: "TICK" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START": {
      const { letters } = pickWordWithAnagrams();
      return { ...init2(), phase: "playing", sessionId: createLegacySessionId(), letters, startTime: Date.now(), timeLeft: TIME_LIMIT };
    }
    case "INPUT":
      return s.phase === "playing" ? { ...s, input: a.value.toUpperCase() } : s;
    case "SUBMIT": {
      if (s.phase !== "playing") return s;
      const w = s.input.trim();
      if (w.length < 3 || s.found.includes(w)) return { ...s, input: "" };
      /* check letters available */
      const pool = s.letters.toUpperCase().split("");
      let valid = true;
      for (const ch of w) {
        const idx = pool.indexOf(ch);
        if (idx < 0) { valid = false; break; }
        pool.splice(idx, 1);
      }
      if (!valid) return { ...s, input: "" };
      return { ...s, found: [...s.found, w], input: "", interactions: s.interactions + 1 };
    }
    case "TICK": {
      if (s.phase !== "playing") return s;
      const tl = s.timeLeft - 1;
      if (tl <= 0) return { ...s, timeLeft: 0, phase: s.found.length > 0 ? "won" : "lost" };
      return { ...s, timeLeft: tl };
    }
    default:
      return s;
  }
}

export default function GameAnagram({ width = 400, height = 500 }: { width?: number; height?: number }) {
  const [s, dispatch] = useReducer(reducer, undefined, init2);
  const { setMood } = useMascot();
  const inputRef = useRef<HTMLInputElement>(null);
  const isOver = s.phase === "won" || s.phase === "lost";

  const stars = useMemo(() => {
    if (!isOver) return 0;
    if (s.found.length >= 8) return 3;
    if (s.found.length >= 4) return 2;
    if (s.found.length >= 1) return 1;
    return 0;
  }, [isOver, s.found.length]);

  useEffect(() => {
    if (s.phase !== "playing") return;
    const id = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(id);
  }, [s.phase]);

  useEffect(() => {
    if (!isOver) return;
    if (s.found.length > 0) { setMood("cheering"); hapticCelebration(); }
    else { setMood("sad"); hapticError(); }
    emitLegacyGameComplete({
      sessionId: s.sessionId, gameId: "game-anagram", elapsedMs: Date.now() - s.startTime,
      interactions: s.interactions, score: s.found.length * 10, maxScore: 100,
      source: "component", occurredAt: new Date().toISOString(),
    });
  }, [isOver]);

  useEffect(() => {
    if (s.phase === "playing") inputRef.current?.focus();
  }, [s.phase]);

  return (
    <div className="flex flex-col items-center gap-3 py-4" style={{ maxWidth: width }}>
      <div className="flex w-full items-center justify-between px-2">
        <MascotFriend id="echo" mood={isOver ? (s.found.length > 0 ? "happy" : "sad") : "idle"} size="sm" />
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-bold text-cyan-800">Found: {s.found.length}</div>
          <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">{s.timeLeft}s</div>
        </div>
      </div>

      {s.phase === "ready" && (
        <div className="flex flex-col items-center gap-4 py-8">
          <Type className="h-12 w-12 text-cyan-500" />
          <p className="text-3xl font-bold text-slate-800">Anagram Hunt</p>
          <p className="text-sm text-slate-600">Find 3-letter words from the given letters!</p>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}>Start Hunt</PhysicalButton>
        </div>
      )}

      {s.phase === "playing" && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {s.letters.split("").map((c, i) => (
              <div key={i} className="flex h-12 w-10 items-center justify-center rounded-lg bg-cyan-500 text-xl font-bold text-white shadow-md">{c}</div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              value={s.input}
              onChange={(e) => dispatch({ type: "INPUT", value: e.target.value })}
              onKeyDown={(e) => { if (e.key === "Enter") dispatch({ type: "SUBMIT" }); }}
              className="w-36 rounded-lg border-2 border-cyan-300 px-3 py-2 text-center text-lg font-bold uppercase tracking-widest text-slate-800 outline-none focus:border-cyan-500"
              maxLength={s.letters.length}
            />
            <PhysicalButton variant="primary" onClick={() => dispatch({ type: "SUBMIT" })}>Go</PhysicalButton>
          </div>
          {s.found.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {s.found.map((w) => (
                <span key={w} className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">{w}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {isOver && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-2 py-4">
          <Trophy className="h-10 w-10 text-amber-400" />
          <p className="text-2xl font-bold text-slate-800">{s.found.length} Word{s.found.length !== 1 ? "s" : ""} Found!</p>
          <div className="text-4xl">{"★".repeat(stars)}{"☆".repeat(3 - stars)}</div>
          <PhysicalButton variant="primary" onClick={() => dispatch({ type: "START" })}><RotateCcw className="mr-2 h-4 w-4" /> Play Again</PhysicalButton>
        </motion.div>
      )}
    </div>
  );
}
