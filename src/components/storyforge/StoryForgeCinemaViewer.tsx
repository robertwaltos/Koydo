"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Maximize,
  BookOpen,
  Sparkles,
  Eye,
  Volume2,
} from "lucide-react";
import type { CinematicScene, StoryMetadata, InteractiveHotspot } from "@/lib/storyforge/types";

interface StoryForgeCinemaViewerProps {
  metadata: StoryMetadata;
  scenes: CinematicScene[];
}

const MOOD_COLORS: Record<CinematicScene["mood"], string> = {
  calm: "from-blue-950 via-indigo-950 to-slate-950",
  tense: "from-red-950 via-slate-950 to-zinc-950",
  joyful: "from-amber-950 via-yellow-950 to-orange-950",
  melancholy: "from-slate-950 via-blue-950 to-gray-950",
  adventurous: "from-emerald-950 via-teal-950 to-cyan-950",
  mysterious: "from-purple-950 via-violet-950 to-indigo-950",
};

const MOOD_ACCENTS: Record<CinematicScene["mood"], string> = {
  calm: "cyan",
  tense: "red",
  joyful: "amber",
  melancholy: "blue",
  adventurous: "emerald",
  mysterious: "violet",
};

function seededUnit(seed: number): number {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

export default function StoryForgeCinemaViewer({
  metadata,
  scenes,
}: StoryForgeCinemaViewerProps) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<InteractiveHotspot | null>(null);
  const [showNarration, setShowNarration] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentScene = scenes[currentSceneIndex];
  const totalScenes = scenes.length;
  const moodGradient = MOOD_COLORS[currentScene?.mood ?? "calm"];
  const accent = MOOD_ACCENTS[currentScene?.mood ?? "calm"];
  const ambientParticles = Array.from({ length: 30 }, (_, i) => {
    const width = typeof window !== "undefined" ? window.innerWidth : 1920;
    const height = typeof window !== "undefined" ? window.innerHeight : 1080;

    return {
      key: i,
      initialX: seededUnit(i + 1) * width,
      initialY: seededUnit(i + 101) * height,
      driftY: -40 - seededUnit(i + 201) * 160,
      duration: 4 + seededUnit(i + 301) * 6,
      delay: seededUnit(i + 401) * 5,
    };
  });

  // Playback engine
  useEffect(() => {
    if (isPlaying && currentScene) {
      timerRef.current = setInterval(() => {
        setSceneProgress((prev) => {
          const next = prev + (100 / currentScene.durationSeconds);
          if (next >= 100) {
            // Auto-advance to next scene
            if (currentSceneIndex < totalScenes - 1) {
              setActiveHotspot(null);
              setCurrentSceneIndex((i) => i + 1);
              return 0;
            } else {
              setIsPlaying(false);
              return 100;
            }
          }
          return next;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentScene, currentSceneIndex, totalScenes]);

  const goToScene = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalScenes) {
        setSceneProgress(0);
        setActiveHotspot(null);
        setCurrentSceneIndex(index);
      }
    },
    [totalScenes]
  );

  if (!currentScene) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden select-none">
      {/* Dynamic Mood Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene.mood + currentSceneIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${moodGradient}`}
        >
          {/* Ambient particles */}
          <div className="absolute inset-0 overflow-hidden">
            {ambientParticles.map((particle) => (
              <motion.div
                key={particle.key}
                className={`absolute w-1 h-1 rounded-full bg-${accent}-400/30`}
                initial={{
                  x: particle.initialX,
                  y: particle.initialY,
                }}
                animate={{
                  y: [null, particle.driftY],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Scene Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Bar: Title & Scene Info */}
        <header className="flex items-center justify-between px-8 pt-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/40">
              StoryForge Cinema
            </p>
            <h1 className="text-2xl font-black italic tracking-tight text-white/90">
              {metadata.title}
            </h1>
            <p className="text-xs text-white/30 mt-1">
              {metadata.author} · {metadata.year > 0 ? metadata.year : "Ancient"} · {metadata.contentTier === "A" ? "Short Film" : metadata.contentTier === "B" ? "Chapter Film" : "Feature Film"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className={`px-3 py-1 rounded-full bg-${accent}-500/20 border border-${accent}-500/30 text-${accent}-300 text-xs font-bold uppercase`}>
              {currentScene.mood}
            </div>
            <div className="text-white/40 text-sm font-mono">
              {currentSceneIndex + 1}/{totalScenes}
            </div>
          </div>
        </header>

        {/* Central Stage */}
        <div className="flex-1 flex items-center justify-center px-8 relative">
          {/* Main Narration / Visual Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSceneIndex}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl w-full"
            >
              {/* Setting Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/50 text-sm italic mb-4 tracking-wide"
              >
                🎬 {currentScene.cameraDirection}
              </motion.p>

              {/* Main Scene Text */}
              {showNarration && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 mb-6"
                >
                  <p className="text-white/80 text-lg leading-relaxed font-light">
                    {currentScene.narration.slice(0, 400)}
                    {currentScene.narration.length > 400 && "..."}
                  </p>
                </motion.div>
              )}

              {/* Dialogue Bubbles */}
              {currentScene.dialogue.length > 0 && (
                <div className="space-y-3 mb-6">
                  {currentScene.dialogue.slice(0, 3).map((line: string, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.3 }}
                      className={`max-w-md ${i % 2 === 0 ? "" : "ml-auto"}`}
                    >
                      <div className={`bg-white/10 backdrop-blur-xl rounded-2xl px-5 py-3 border border-white/5 ${i % 2 === 0 ? "rounded-bl-sm" : "rounded-br-sm"}`}>
                        <p className="text-white/70 text-sm italic">&ldquo;{line}&rdquo;</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Characters Present */}
              {currentScene.characters.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  {currentScene.characters.map((name: string) => (
                    <span
                      key={name}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Interactive Hotspots */}
          {currentScene.interactiveHotspots.map((hotspot) => (
            <motion.button
              key={hotspot.id}
              className="absolute z-20"
              style={{
                left: `${hotspot.positionPercent.x}%`,
                top: `${hotspot.positionPercent.y}%`,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              onClick={() => setActiveHotspot(activeHotspot?.id === hotspot.id ? null : hotspot)}
            >
              <div className={`w-10 h-10 rounded-full bg-${accent}-500/20 border-2 border-${accent}-400/50 flex items-center justify-center backdrop-blur-xl cursor-pointer hover:scale-110 transition-transform`}>
                {hotspot.type === "vocabulary" && <BookOpen className="w-4 h-4 text-white/70" />}
                {hotspot.type === "explore" && <Eye className="w-4 h-4 text-white/70" />}
                {hotspot.type === "quiz" && <Sparkles className="w-4 h-4 text-white/70" />}
              </div>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] text-white/40 whitespace-nowrap">
                {hotspot.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Hotspot Detail Panel */}
        <AnimatePresence>
          {activeHotspot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-32 left-1/2 -translate-x-1/2 z-30 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 max-w-sm"
            >
              <button
                onClick={() => setActiveHotspot(null)}
                className="absolute top-2 right-3 text-white/30 hover:text-white text-sm"
              >
                ✕
              </button>
              {activeHotspot.content.kind === "vocabulary" && (
                <div>
                  <p className="text-xs text-cyan-300 uppercase tracking-widest mb-1">Vocabulary</p>
                  <p className="text-white font-bold text-lg">{activeHotspot.content.word}</p>
                  <p className="text-white/60 text-sm mt-2">{activeHotspot.content.definition}</p>
                </div>
              )}
              {activeHotspot.content.kind === "explore" && (
                <div>
                  <p className="text-xs text-emerald-300 uppercase tracking-widest mb-1">Explore</p>
                  <p className="text-white/70 text-sm">{activeHotspot.content.description}</p>
                </div>
              )}
              {activeHotspot.content.kind === "quiz" && (
                <div>
                  <p className="text-xs text-amber-300 uppercase tracking-widest mb-1">Quiz</p>
                  <p className="text-white font-bold">{activeHotspot.content.question}</p>
                  <div className="mt-3 space-y-2">
                    {(activeHotspot.content as { kind: "quiz"; question: string; options: string[]; correctIndex: number }).options.map((opt: string, i: number) => (
                      <button
                        key={i}
                        className="w-full text-left px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm hover:bg-white/10 transition"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Controls */}
        <footer className="px-8 pb-8">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r from-${accent}-400 to-${accent}-600 rounded-full`}
              animate={{ width: `${sceneProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Controls Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => goToScene(currentSceneIndex - 1)}
                disabled={currentSceneIndex === 0}
                className="text-white/40 hover:text-white disabled:opacity-20 transition"
              >
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" />
                )}
              </button>

              <button
                onClick={() => goToScene(currentSceneIndex + 1)}
                disabled={currentSceneIndex === totalScenes - 1}
                className="text-white/40 hover:text-white disabled:opacity-20 transition"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowNarration(!showNarration)}
                className={`p-2 rounded-lg transition ${showNarration ? "bg-white/10 text-white" : "text-white/30 hover:text-white"}`}
              >
                <BookOpen className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg text-white/30 hover:text-white transition">
                <Volume2 className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-lg text-white/30 hover:text-white transition">
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
