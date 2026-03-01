"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  VOICES,
  useVoicePreference,
  type VoiceId,
} from "./voice-preference";

/**
 * Compact voice picker that:
 *  - Shows a small button to open the picker
 *  - Lets the user preview each voice with a short sample
 *  - Persists selection via VoicePreferenceContext → localStorage
 */
export default function VoicePicker() {
  const { voice, setVoice } = useVoicePreference();
  const [isOpen, setIsOpen] = useState(false);
  const [previewingId, setPreviewingId] = useState<VoiceId | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const stopPreview = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setPreviewingId(null);
  }, []);

  // Stop preview audio on unmount to prevent leaks
  useEffect(() => {
    return () => {
      stopPreview();
    };
  }, [stopPreview]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isOpen) return;
    function handleMouseDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        stopPreview();
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [isOpen, stopPreview]);

  const previewVoice = useCallback(
    async (id: VoiceId) => {
      stopPreview();
      setPreviewingId(id);

      try {
        const res = await fetch("/api/tts/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `Hi! I'm ${VOICES.find((v) => v.id === id)?.label ?? id}. I'll be reading your lessons.`,
            voice: id,
          }),
        });

        if (!res.ok) {
          setPreviewingId(null);
          return;
        }

        const data = await res.json();
        if (data.audioUrl && data.fallback !== "browser") {
          const audio = new Audio(data.audioUrl);
          audioRef.current = audio;
          audio.onended = () => setPreviewingId(null);
          audio.onerror = () => setPreviewingId(null);
          await audio.play();
        } else {
          setPreviewingId(null);
        }
      } catch {
        setPreviewingId(null);
      }
    },
    [stopPreview],
  );

  const selectedLabel =
    VOICES.find((v) => v.id === voice)?.label ?? "Nova";

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => {
          setIsOpen((p) => !p);
          if (isOpen) stopPreview();
        }}
        className="ui-focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-full border border-accent/60 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-800 transition hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-200 dark:hover:bg-indigo-800/40"
        aria-label="Choose narrator voice"
        title="Choose narrator voice"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3.5 w-3.5"
          aria-hidden="true"
        >
          <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" />
          <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z" />
        </svg>
        {selectedLabel}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-border/55 bg-white p-2 shadow-xl dark:bg-slate-800">
          <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Narrator Voice
          </p>
          <div className="space-y-1">
            {VOICES.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => {
                  setVoice(v.id);
                  setIsOpen(false);
                  stopPreview();
                }}
                className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition ${
                  v.id === voice
                    ? "bg-indigo-100 text-indigo-900 dark:bg-indigo-900/40 dark:text-indigo-100"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50"
                }`}
              >
                <span className="text-base">{v.emoji}</span>
                <div className="min-w-0 flex-1">
                  <span className="font-medium">{v.label}</span>
                  <span className="ml-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {v.desc}
                  </span>
                </div>

                {/* Preview button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (previewingId === v.id) {
                      stopPreview();
                    } else {
                      previewVoice(v.id);
                    }
                  }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/50 bg-white text-slate-500 transition hover:bg-slate-50 dark:bg-slate-700 dark:text-slate-400"
                  title={previewingId === v.id ? "Stop preview" : `Preview ${v.label}`}
                  aria-label={previewingId === v.id ? "Stop preview" : `Preview ${v.label}`}
                >
                  {previewingId === v.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  )}
                </button>

                {/* Selected checkmark */}
                {v.id === voice && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-300">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          <p className="mt-2 border-t border-border/55 px-2 pt-2 text-[10px] leading-tight text-slate-400 dark:text-slate-500">
            Audio generated by cloud AI. Only lesson text is sent — no personal data.
          </p>
        </div>
      )}
    </div>
  );
}
