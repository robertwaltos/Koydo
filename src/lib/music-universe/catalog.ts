import fs from "node:fs/promises";
import path from "node:path";

export interface MusicGenre {
  rank: number;
  id: string;
  name: string;
  family: string;
  microappId: string;
  bpmRange: [number, number];
  energyRange: [number, number];
  primaryMarkets: string[];
  signals: string[];
}

export interface MusicGenreCatalog {
  generatedAt: string;
  methodology: {
    summary: string;
    notes: string[];
  };
  sources: Array<{
    id: string;
    title: string;
    url: string;
    checkedOn: string;
  }>;
  genres: MusicGenre[];
}

let cache: MusicGenreCatalog | null = null;

function catalogPath() {
  return path.join(process.cwd(), "data", "music-universe", "genres.global.top20.json");
}

export async function loadMusicGenreCatalog(): Promise<MusicGenreCatalog> {
  if (cache) {
    return cache;
  }
  const raw = await fs.readFile(catalogPath(), "utf8");
  cache = JSON.parse(raw) as MusicGenreCatalog;
  return cache;
}

export async function findMusicGenre(genreId: string): Promise<MusicGenre | null> {
  const catalog = await loadMusicGenreCatalog();
  const normalized = genreId.trim().toLowerCase();
  return catalog.genres.find((genre) => genre.id.toLowerCase() === normalized) ?? null;
}
