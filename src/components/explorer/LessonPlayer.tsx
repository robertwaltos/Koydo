"use client";

import React, { useState, useEffect } from "react";
import { getPrompt } from "@/lib/media/generated-prompts";

interface LessonPlayerProps {
  module: {
    title: string;
    desc: string;
    icon: string;
    media?: {
      introVideoId?: string;
      animationStyle?: string;
    };
  };
  onComplete: () => void;
}

export function LessonPlayer({ module, onComplete }: LessonPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const hasVideoPrompt = module.media?.introVideoId
    ? Boolean(getPrompt(module.media.introVideoId))
    : false;

  useEffect(() => {
    if (!isPlaying || !isGenerating) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsGenerating(false);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, isGenerating]);

  const handlePlay = () => {
    setIsPlaying(true);
    setIsGenerating(true);
    setProgress(0);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl">
      {/* Header */}
      <div className="border-b border-stone-100 bg-stone-50 p-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{module.icon}</span>
          <div>
            <h3 className="text-lg font-bold text-stone-800">{module.title}</h3>
            <p className="text-sm text-stone-500">{module.desc}</p>
          </div>
        </div>
      </div>

      {/* Media Stage */}
      <div className="relative aspect-video bg-stone-900">
        {isPlaying && !isGenerating ? (
          <div className="absolute inset-0 flex items-center justify-center bg-emerald-900">
            <div className="text-center">
              <div className="mb-4 text-6xl animate-bounce">{module.icon}</div>
              <div className="font-mono text-white/80">Lesson Preview Ready</div>
            </div>
          </div>
        ) : hasVideoPrompt ? (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-900">
            <div className="text-center">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-300/90">
                Lesson Preview
              </div>
              <p className="mt-3 text-sm text-white/70">Press play to start.</p>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-stone-500">No Video Asset Connected</span>
          </div>
        )}

        {/* Generation Progress */}
        {isGenerating && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 font-mono text-emerald-400 backdrop-blur-sm">
            <div className="mb-4 h-1 w-64 overflow-hidden rounded-full bg-stone-800">
              <div
                className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981] transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="animate-pulse text-xs uppercase tracking-[0.2em]">
              Loading Lesson Preview... {progress}%
            </div>
          </div>
        )}

        {/* Play Button */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 group flex items-center justify-center transition-colors hover:bg-white/5"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
              <div className="ml-2 h-0 w-0 border-y-[16px] border-l-[24px] border-y-transparent border-l-white drop-shadow-lg" />
            </div>
            <div className="absolute bottom-8 text-xs font-bold uppercase tracking-widest text-white/60">
              Start Interactive Module
            </div>
          </button>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-end bg-stone-50 p-6">
        <button
          onClick={onComplete}
          className="rounded-full bg-emerald-500 px-6 py-2 font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-600"
        >
          Complete Lesson
        </button>
      </div>
    </div>
  );
}
