"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { MusicGenre } from "@/lib/music-universe/catalog";

type KaraokeLine = {
  line: string;
  startSec: number;
  endSec: number;
};

type SongSample = {
  id: string;
  title: string;
  bpm: number;
  mood: string;
  languageCode?: string;
  language?: string;
  durationSec?: number;
  promptSuno: string;
  lyrics?: string;
  karaokeTimeline?: KaraokeLine[];
};

type CcTrack = {
  id: string;
  title: string;
  creator?: string;
  source?: string;
  license?: string;
  licenseDisplay?: string;
  audioUrl?: string;
  foreignLandingUrl?: string;
};

const MOOD_OPTIONS = [
  "uplifting",
  "anthemic",
  "dreamy",
  "romantic",
  "melancholic",
  "dark",
  "cinematic",
  "playful",
];

const VOICE_OPTIONS = [
  "female lead",
  "male lead",
  "duet",
  "group vocal",
  "rap lead",
  "airy vocal",
];

const LANG_OPTIONS = ["English", "Spanish", "Portuguese", "Japanese", "Korean", "Arabic", "French"];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function formatTime(sec: number) {
  const clamped = Math.max(0, Math.floor(sec));
  const minutes = Math.floor(clamped / 60).toString().padStart(2, "0");
  const seconds = (clamped % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function fallbackTimeline(song: SongSample): KaraokeLine[] {
  const lyricsLines = String(song.lyrics || "")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("["));

  if (lyricsLines.length === 0) {
    return [];
  }

  const totalDuration = Math.max(30, Number(song.durationSec || 180));
  const step = totalDuration / lyricsLines.length;
  return lyricsLines.map((line, index) => ({
    line,
    startSec: Number((index * step).toFixed(2)),
    endSec: Number(((index + 1) * step).toFixed(2)),
  }));
}

function useKaraokeClock(playing: boolean, durationSec: number, setTime: (update: (prev: number) => number) => void) {
  useEffect(() => {
    if (!playing) {
      return undefined;
    }
    const timer = window.setInterval(() => {
      setTime((prev) => {
        const next = prev + 0.25;
        if (next >= durationSec) {
          return durationSec;
        }
        return next;
      });
    }, 250);

    return () => window.clearInterval(timer);
  }, [playing, durationSec, setTime]);
}

export default function GenreMusicLab({ genre }: { genre: MusicGenre }) {
  const [playing, setPlaying] = useState(false);
  const [tempo, setTempo] = useState(Math.round((genre.bpmRange[0] + genre.bpmRange[1]) / 2));
  const [energy, setEnergy] = useState(Math.round((genre.energyRange[0] + genre.energyRange[1]) / 2));
  const [mood, setMood] = useState("uplifting");
  const [voice, setVoice] = useState("female lead");
  const [language, setLanguage] = useState("English");
  const [cleanLyrics, setCleanLyrics] = useState(true);
  const [songSamples, setSongSamples] = useState<SongSample[] | null>(null);
  const [ccTracks, setCcTracks] = useState<CcTrack[] | null>(null);
  const [samplesError, setSamplesError] = useState<string | null>(null);
  const [loadingSamples, setLoadingSamples] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedSongId, setSelectedSongId] = useState<string | null>(null);

  const [karaokeMode, setKaraokeMode] = useState(false);
  const [karaokePlaying, setKaraokePlaying] = useState(false);
  const [karaokeSec, setKaraokeSec] = useState(0);

  const selectedSong = useMemo(() => {
    if (!songSamples || songSamples.length === 0) {
      return null;
    }
    if (!selectedSongId) {
      return songSamples[0];
    }
    return songSamples.find((song) => song.id === selectedSongId) || songSamples[0];
  }, [selectedSongId, songSamples]);

  const selectedTimeline = useMemo(() => {
    if (!selectedSong) {
      return [] as KaraokeLine[];
    }
    const fromSong = Array.isArray(selectedSong.karaokeTimeline) ? selectedSong.karaokeTimeline : [];
    if (fromSong.length > 0) {
      return fromSong;
    }
    return fallbackTimeline(selectedSong);
  }, [selectedSong]);

  const karaokeDurationSec = Number(selectedSong?.durationSec || 180);

  const activeLineIndex = useMemo(() => {
    if (selectedTimeline.length === 0) {
      return -1;
    }
    const index = selectedTimeline.findIndex((line) => karaokeSec >= line.startSec && karaokeSec < line.endSec);
    if (index >= 0) {
      return index;
    }
    return karaokeSec >= karaokeDurationSec ? selectedTimeline.length - 1 : 0;
  }, [karaokeDurationSec, karaokeSec, selectedTimeline]);

  useKaraokeClock(karaokePlaying, karaokeDurationSec, setKaraokeSec);

  useEffect(() => {
    if (karaokeSec >= karaokeDurationSec) {
      setKaraokePlaying(false);
    }
  }, [karaokeDurationSec, karaokeSec]);

  useEffect(() => {
    if (!karaokeMode) {
      return undefined;
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setKaraokeMode(false);
        setKaraokePlaying(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [karaokeMode]);

  const sunoPrompt = useMemo(() => {
    const cleanFlag = cleanLyrics ? "clean radio-safe lyrics" : "mature lyrical themes allowed";
    return [
      `Original ${genre.name} song.`,
      `${tempo} BPM, energy ${energy}/100, ${mood} mood, ${language} lyrics.`,
      `Lead vocal: ${voice}.`,
      "Use modern production and a strong hook.",
      "Structure: intro, verse, pre-chorus, chorus, verse 2, bridge, final chorus, outro.",
      `${cleanFlag}.`,
      "Do not reference any existing artist, song title, or copyrighted lyrics.",
    ].join(" ");
  }, [cleanLyrics, energy, genre.name, language, mood, tempo, voice]);

  const fetchSamples = async () => {
    setLoadingSamples(true);
    setSamplesError(null);
    try {
      const response = await fetch(`/api/microapps/music-universe/songs?genre=${encodeURIComponent(genre.id)}&limit=12`);
      if (!response.ok) {
        throw new Error("No generated songs found for this genre yet.");
      }
      const payload = await response.json() as { songs?: SongSample[]; ccTracks?: CcTrack[] };
      const songs = Array.isArray(payload.songs) ? payload.songs : [];
      const licensed = Array.isArray(payload.ccTracks) ? payload.ccTracks : [];
      setSongSamples(songs);
      setCcTracks(licensed);
      setSelectedSongId(songs[0]?.id ?? null);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to load samples.";
      setSamplesError(message);
      setSongSamples([]);
      setCcTracks([]);
      setSelectedSongId(null);
    } finally {
      setLoadingSamples(false);
    }
  };

  const onCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(sunoPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const openKaraoke = () => {
    if (!selectedSong) {
      return;
    }
    setKaraokeMode(true);
    setKaraokeSec(0);
    setKaraokePlaying(true);
  };

  const jumpKaraoke = (delta: number) => {
    setKaraokeSec((prev) => clamp(prev + delta, 0, karaokeDurationSec));
  };

  return (
    <main className="min-h-screen bg-[#050914] text-zinc-100">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-sky-500/10 via-fuchsia-500/10 to-transparent p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Genre Lab</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{genre.name}</h1>
              <p className="mt-2 text-sm text-zinc-300">
                Markets: {genre.primaryMarkets.join(", ")} | Language-aware 200-song pack
              </p>
            </div>
            <Link
              href="/microapps/music-universe"
              className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-zinc-200 hover:border-sky-300/80 hover:text-sky-100"
            >
              All Genres
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-100">Animated Beat Screen</p>
              <button
                onClick={() => setPlaying((value) => !value)}
                className="rounded-full border border-sky-300/50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-sky-200 hover:border-sky-200 hover:text-sky-100"
              >
                {playing ? "Pause" : "Play"}
              </button>
            </div>
            <div className="flex h-44 items-end gap-1 rounded-xl bg-[#02040a] p-3">
              {Array.from({ length: 28 }).map((_, index) => (
                <motion.div
                  key={`${genre.id}-bar-${index}`}
                  className="w-2 flex-1 rounded-t bg-gradient-to-t from-fuchsia-500 to-sky-300"
                  style={{ transformOrigin: "bottom" }}
                  animate={
                    playing
                      ? {
                          scaleY: [
                            0.2 + ((index % 5) * 0.08),
                            0.95 - ((index % 3) * 0.1),
                            0.3 + ((index % 7) * 0.05),
                          ],
                          opacity: [0.45, 1, 0.55],
                        }
                      : { scaleY: 0.18, opacity: 0.45 }
                  }
                  transition={{
                    duration: clamp(60 / Math.max(tempo, 1), 0.35, 1.5) * (0.8 + (index % 5) * 0.08),
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.03,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <span className="mb-2 block uppercase tracking-widest text-zinc-300">Tempo {tempo} BPM</span>
              <input
                type="range"
                min={genre.bpmRange[0]}
                max={genre.bpmRange[1]}
                value={tempo}
                onChange={(event) => setTempo(Number.parseInt(event.target.value, 10))}
                className="w-full accent-sky-300"
              />
            </label>
            <label className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <span className="mb-2 block uppercase tracking-widest text-zinc-300">Energy {energy}</span>
              <input
                type="range"
                min={genre.energyRange[0]}
                max={genre.energyRange[1]}
                value={energy}
                onChange={(event) => setEnergy(Number.parseInt(event.target.value, 10))}
                className="w-full accent-fuchsia-300"
              />
            </label>
            <label className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <span className="mb-2 block uppercase tracking-widest text-zinc-300">Mood</span>
              <select
                value={mood}
                onChange={(event) => setMood(event.target.value)}
                className="w-full rounded-md border border-white/20 bg-black/40 px-2 py-2 text-sm text-zinc-100"
              >
                {MOOD_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <span className="mb-2 block uppercase tracking-widest text-zinc-300">Voice</span>
              <select
                value={voice}
                onChange={(event) => setVoice(event.target.value)}
                className="w-full rounded-md border border-white/20 bg-black/40 px-2 py-2 text-sm text-zinc-100"
              >
                {VOICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <span className="mb-2 block uppercase tracking-widest text-zinc-300">Language</span>
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="w-full rounded-md border border-white/20 bg-black/40 px-2 py-2 text-sm text-zinc-100"
              >
                {LANG_OPTIONS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs">
              <input
                type="checkbox"
                checked={cleanLyrics}
                onChange={(event) => setCleanLyrics(event.target.checked)}
                className="h-4 w-4 accent-sky-300"
              />
              <span className="uppercase tracking-widest text-zinc-200">Clean lyric mode</span>
            </label>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300">Suno Prompt</p>
            <p className="mt-3 whitespace-pre-wrap rounded-xl bg-black/35 p-4 text-sm text-zinc-200">{sunoPrompt}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={onCopyPrompt}
                className="rounded-full border border-sky-300/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky-200 hover:border-sky-200"
              >
                {copied ? "Copied" : "Copy Prompt"}
              </button>
              <button
                onClick={fetchSamples}
                className="rounded-full border border-fuchsia-300/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-200 hover:border-fuchsia-200"
              >
                {loadingSamples ? "Loading..." : "Load Song Samples"}
              </button>
              <button
                onClick={openKaraoke}
                disabled={!selectedSong}
                className="rounded-full border border-emerald-300/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Karaoke Mode
              </button>
              <a
                href={`/music-universe/credits/${encodeURIComponent(genre.id)}.credits.md`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-amber-300/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-200 hover:border-amber-200"
              >
                Credits File
              </a>
            </div>
            <p className="mt-3 text-xs text-zinc-400">
              Batch command: <code className="text-zinc-200">node scripts/generate-music-universe-content.mjs --genres {genre.id} --songs-per-genre 200</code>
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Trend Signals</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {genre.signals.map((signal) => (
                <li key={signal}>- {signal}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Generated Songs</p>
            {samplesError && <p className="mt-3 text-sm text-rose-300">{samplesError}</p>}
            {!samplesError && songSamples && songSamples.length === 0 && (
              <p className="mt-3 text-sm text-zinc-400">No songs returned.</p>
            )}
            {!samplesError && !songSamples && (
              <p className="mt-3 text-sm text-zinc-400">Load samples to preview generated lyrics and prompts.</p>
            )}
            <div className="mt-3 space-y-3">
              {songSamples?.map((song) => (
                <button
                  key={song.id}
                  type="button"
                  onClick={() => setSelectedSongId(song.id)}
                  className={`w-full rounded-xl border bg-black/25 p-3 text-left transition ${selectedSong?.id === song.id ? "border-emerald-300/70" : "border-white/10 hover:border-white/30"}`}
                >
                  <p className="text-sm font-semibold text-zinc-100">{song.title}</p>
                  <p className="mt-1 text-xs text-zinc-400">
                    {song.id} | {song.bpm} BPM | {song.mood} | {song.language || "Unknown"}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs text-zinc-300">{song.promptSuno}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">CC BY / CC0 Enrichment</p>
            {!ccTracks && <p className="mt-3 text-sm text-zinc-400">Load samples to fetch licensed reference tracks.</p>}
            {ccTracks && ccTracks.length === 0 && (
              <p className="mt-3 text-sm text-zinc-400">No licensed tracks loaded yet for this genre.</p>
            )}
            <div className="mt-3 space-y-3">
              {ccTracks?.map((track) => (
                <div key={track.id} className="rounded-xl border border-white/10 bg-black/25 p-3">
                  <p className="text-sm font-semibold text-zinc-100">{track.title}</p>
                  <p className="mt-1 text-xs text-zinc-400">
                    {track.creator || "Unknown"} | {(track.licenseDisplay || track.license || "").toUpperCase()} | {(track.source || "").toUpperCase()}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {track.foreignLandingUrl && (
                      <a
                        href={track.foreignLandingUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-amber-300/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber-200 hover:border-amber-200"
                      >
                        Source
                      </a>
                    )}
                    {track.audioUrl && (
                      <a
                        href={track.audioUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-cyan-300/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-cyan-200 hover:border-cyan-200"
                      >
                        Audio
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {karaokeMode && selectedSong && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[radial-gradient(circle_at_top,#2c0d3d_0%,#140d27_40%,#04060f_100%)] text-white" style={{ fontFamily: "'Space Grotesk', 'Sora', sans-serif" }}>
          <div className="flex items-center justify-between px-8 pt-6 text-sm text-white/80">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-200/80">Karaoke</p>
              <p className="mt-1 text-lg font-semibold text-white">{selectedSong.title}</p>
            </div>
            <button
              onClick={() => {
                setKaraokeMode(false);
                setKaraokePlaying(false);
              }}
              className="rounded-full border border-white/25 px-4 py-2 text-xs uppercase tracking-widest hover:border-white/60"
            >
              Exit
            </button>
          </div>

          <div className="relative flex-1 overflow-hidden px-8 pb-28 pt-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#170f2a] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b14] to-transparent" />

            <motion.div
              animate={{ y: `${Math.max(0, activeLineIndex * 44 - 220) * -1}px` }}
              transition={{ type: "spring", stiffness: 80, damping: 24, mass: 0.7 }}
              className="space-y-3"
            >
              {selectedTimeline.map((line, index) => {
                const isActive = index === activeLineIndex;
                const isPast = index < activeLineIndex;
                return (
                  <p
                    key={`${line.startSec}-${index}`}
                    className={`text-center text-2xl leading-tight transition md:text-4xl ${isActive ? "scale-[1.01] font-semibold text-white" : isPast ? "text-white/45" : "text-white/70"}`}
                  >
                    {line.line}
                  </p>
                );
              })}
            </motion.div>
          </div>

          <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-black/35 px-5 py-4 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-4">
              <button
                onClick={() => jumpKaraoke(-10)}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:border-white/60"
              >
                -10s
              </button>
              <button
                onClick={() => setKaraokePlaying((value) => !value)}
                className="rounded-full border border-fuchsia-300/70 bg-fuchsia-500/20 px-6 py-2 text-sm font-semibold hover:border-fuchsia-200"
              >
                {karaokePlaying ? "Pause" : "Play"}
              </button>
              <button
                onClick={() => jumpKaraoke(10)}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:border-white/60"
              >
                +10s
              </button>
            </div>
            <p className="mt-2 text-center text-xs tracking-widest text-white/70">
              {formatTime(karaokeSec)} / {formatTime(karaokeDurationSec)}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
