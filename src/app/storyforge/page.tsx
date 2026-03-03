"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Film, Clock, Sparkles, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { STORYFORGE_PRIORITY_QUEUE } from "@/lib/storyforge/types";
import { fetchGutenbergText } from "@/lib/storyforge/gutenberg-service";
import { decomposeTextToScenes } from "@/lib/storyforge/scene-decomposer";
import type { CinematicScene, StoryMetadata } from "@/lib/storyforge/types";
import StoryForgeCinemaViewer from "@/components/storyforge/StoryForgeCinemaViewer";

const TIER_LABELS = { A: "Short Film", B: "Chapter Film", C: "Feature", D: "Epic Series" };

export default function StoryForgePage() {
  const [selectedStory, setSelectedStory] = useState<StoryMetadata | null>(null);
  const [scenes, setScenes] = useState<CinematicScene[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLaunchFilm = async (story: StoryMetadata) => {
    if (!story.gutenbergId) return;

    setIsLoading(true);
    setError(null);

    try {
      const textResult = await fetchGutenbergText(story.gutenbergId);
      const decomposedScenes = decomposeTextToScenes(textResult.chapters);
      setScenes(decomposedScenes);
      setSelectedStory(story);
    } catch (err) {
      setError(`Failed to load "${story.title}". Please check your connection.`);
      console.error("[StoryForge] Ingestion error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // If a story is playing, show the Cinema Viewer
  if (selectedStory && scenes.length > 0) {
    return (
      <div className="relative">
        <button
          onClick={() => { setSelectedStory(null); setScenes([]); }}
          className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Library
        </button>
        <StoryForgeCinemaViewer metadata={selectedStory} scenes={scenes} />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950 text-white">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-8 pt-16 pb-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-white/10">
            <Film className="w-7 h-7 text-violet-300" />
          </div>
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter">
              StoryForge{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                Cinema
              </span>
            </h1>
            <p className="text-sm text-white/40 mt-1">
              Public domain literature transformed into immersive interactive films
            </p>
          </div>
        </motion.div>
      </header>

      {/* Error Banner */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative z-10 mx-8 mb-6 max-w-6xl mx-auto bg-red-500/10 border border-red-500/20 rounded-2xl px-6 py-3 text-red-300 text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center gap-4"
          >
            <Loader2 className="w-10 h-10 text-violet-400 animate-spin" />
            <p className="text-white/60 text-sm">Ingesting text from Project Gutenberg...</p>
            <p className="text-white/30 text-xs">Decomposing scenes & generating hotspots</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Film Library Grid */}
      <section className="relative z-10 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORYFORGE_PRIORITY_QUEUE.map((story: StoryMetadata, index: number) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-3xl p-6 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
              onClick={() => handleLaunchFilm(story)}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 rounded-3xl" />

              <div className="relative z-10">
                {/* Tier Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50`}>
                    {TIER_LABELS[story.contentTier]}
                  </span>
                  <span className="text-xs text-white/30 font-mono">
                    {story.year > 0 ? story.year : "Ancient"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-white/90 mb-1 group-hover:text-white transition">
                  {story.title}
                </h3>
                <p className="text-sm text-white/40 mb-4">{story.author}</p>

                {/* Meta Row */}
                <div className="flex items-center gap-4 text-xs text-white/30">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {story.estimatedDuration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Gutenberg #{story.gutenbergId}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Interactive
                  </div>
                </div>

                {/* Launch Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm text-violet-400/60 group-hover:text-violet-300 transition">
                  <span>Launch Film</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-white/20 text-xs mt-12 pb-16"
        >
          More titles coming soon. The StoryForge pipeline can ingest any public-domain work from Project Gutenberg.
        </motion.p>
      </section>
    </main>
  );
}
