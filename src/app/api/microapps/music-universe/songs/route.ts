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

interface CcTrack {
  id: string;
  title: string;
  creator?: string;
  source?: string;
  license?: string;
  licenseDisplay?: string;
  licenseUrl?: string;
  audioUrl?: string;
  foreignLandingUrl?: string;
  attribution?: string;
}

interface GenreCcPayload {
  tracks?: CcTrack[];
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function getGenreFilePath(genreId: string) {
  const safe = genreId.replace(/[^a-z0-9-]/gi, "").toLowerCase();
  return path.join(process.cwd(), "data", "music-universe", "generated", safe, "songs.json");
}

function getGenreCcFilePath(genreId: string) {
  const safe = genreId.replace(/[^a-z0-9-]/gi, "").toLowerCase();
  return path.join(process.cwd(), "data", "music-universe", "cc-enrichment", `${safe}.json`);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genreId = String(searchParams.get("genre") || "").trim().toLowerCase();
  const limit = clamp(Number.parseInt(String(searchParams.get("limit") || "12"), 10) || 12, 1, 200);
  const offset = clamp(Number.parseInt(String(searchParams.get("offset") || "0"), 10) || 0, 0, 100000);
  const ccLimit = clamp(Number.parseInt(String(searchParams.get("ccLimit") || "12"), 10) || 12, 0, 100);

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

    let ccTracks: CcTrack[] = [];
    try {
      const ccRaw = await fs.readFile(getGenreCcFilePath(genreId), "utf8");
      const ccPayload = JSON.parse(ccRaw) as GenreCcPayload;
      ccTracks = (Array.isArray(ccPayload.tracks) ? ccPayload.tracks : []).slice(0, ccLimit).map((track) => ({
        id: track.id,
        title: track.title,
        creator: track.creator,
        source: track.source,
        license: track.license,
        licenseDisplay: track.licenseDisplay,
        licenseUrl: track.licenseUrl,
        audioUrl: track.audioUrl,
        foreignLandingUrl: track.foreignLandingUrl,
        attribution: track.attribution,
      }));
    } catch {
      ccTracks = [];
    }

    return NextResponse.json({
      genre: genreId,
      total: allSongs.length,
      offset,
      limit,
      songs,
      ccTracks,
    });
  } catch {
    return NextResponse.json(
      { error: `Generated songs not found for genre '${genreId}'. Run music:universe:generate first.` },
      { status: 404 },
    );
  }
}
