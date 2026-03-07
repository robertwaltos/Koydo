import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface GeneratedSong {
  id: string;
  title: string;
  bpm: number;
  mood: string;
  languageCode?: string;
  language?: string;
  durationSec?: number;
  promptSuno: string;
  lyrics?: string;
  karaokeTimeline?: Array<{
    line: string;
    startSec: number;
    endSec: number;
  }>;
}

interface GenreSongPayload {
  songs?: GeneratedSong[];
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function getGenreFilePath(genreId: string) {
  const safe = genreId.replace(/[^a-z0-9-]/gi, "").toLowerCase();
  return path.join(process.cwd(), "data", "music-universe", "generated", safe, "songs.json");
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genreId = String(searchParams.get("genre") || "").trim().toLowerCase();
  const limit = clamp(Number.parseInt(String(searchParams.get("limit") || "12"), 10) || 12, 1, 200);
  const offset = clamp(Number.parseInt(String(searchParams.get("offset") || "0"), 10) || 0, 0, 100000);

  if (!genreId) {
    return NextResponse.json({ error: "Missing genre query param." }, { status: 400 });
  }

  try {
    const filePath = getGenreFilePath(genreId);
    const raw = await fs.readFile(filePath, "utf8");
    const payload = JSON.parse(raw) as GenreSongPayload;
    const allSongs = Array.isArray(payload.songs) ? payload.songs : [];
    const songs = allSongs.slice(offset, offset + limit).map((song) => ({
      id: song.id,
      title: song.title,
      bpm: song.bpm,
      mood: song.mood,
      languageCode: song.languageCode,
      language: song.language,
      durationSec: song.durationSec,
      promptSuno: song.promptSuno,
      lyrics: song.lyrics,
      karaokeTimeline: song.karaokeTimeline,
    }));

    return NextResponse.json({
      genre: genreId,
      total: allSongs.length,
      offset,
      limit,
      songs,
    });
  } catch {
    return NextResponse.json(
      { error: `Generated songs not found for genre '${genreId}'. Run music:universe:generate first.` },
      { status: 404 },
    );
  }
}
