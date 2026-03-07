#!/usr/bin/env node

/**
 * enrich-music-universe-cc.mjs
 *
 * Pulls CC BY / CC0 audio metadata from Openverse for each configured genre.
 *
 * Outputs:
 * - data/music-universe/cc-enrichment/_summary.json
 * - data/music-universe/cc-enrichment/<genre>.json
 * - data/music-universe/tracks.cc.json (legacy flattened view)
 *
 * Usage:
 *   node scripts/enrich-music-universe-cc.mjs
 *   node scripts/enrich-music-universe-cc.mjs --per-genre 20 --pages-per-query 2
 *   node scripts/enrich-music-universe-cc.mjs --genres flamenco,latin,musica-mexicana
 *   node scripts/enrich-music-universe-cc.mjs --licenses by,cc0,pdm
 */

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const GENRE_MANIFEST_PATH = path.join(ROOT, "data", "music-universe", "genres.global.top20.json");
const DEFAULT_OUT_DIR = path.join(ROOT, "data", "music-universe", "cc-enrichment");
const LEGACY_TRACKS_PATH = path.join(ROOT, "data", "music-universe", "tracks.cc.json");

const OPENVERSE_AUDIO_API = "https://api.openverse.engineering/v1/audio/";
const OPENVERSE_MAX_PAGE_SIZE_ANON = 20;
const DEFAULT_FALLBACK_SOURCES = ["freesound", "jamendo", "wikimedia_audio"];

const DEFAULT_QUERY_TERMS = {
  pop: ["pop music", "dance pop"],
  rock: ["rock music", "indie rock"],
  "hip-hop-rap": ["hip hop", "rap instrumental", "trap beat"],
  "dance-electronic": ["electronic dance", "house music", "edm"],
  latin: ["latin music", "musica latina"],
  rnb: ["rnb soul", "rhythm and blues"],
  "classical-opera": ["classical music", "orchestral score", "opera"],
  country: ["country music", "acoustic country"],
  soundtracks: ["cinematic soundtrack", "film score"],
  reggae: ["reggae", "dub reggae"],
  afrobeats: ["afrobeats", "afrobeat dance", "afro house"],
  amapiano: ["amapiano", "south african house", "afro house", "african house"],
  "k-pop": ["k-pop", "korean pop"],
  "j-pop": ["j-pop", "japanese pop"],
  "musica-mexicana": ["musica mexicana", "regional mexicano", "mexican music", "mariachi", "ranchera", "norteno"],
  corridos: ["corridos", "corrido tumbado", "mexican corrido", "norteno"],
  opm: ["opm filipino", "original pilipino music", "filipino pop"],
  sertanejo: ["sertanejo", "sertanejo universitario", "brazilian country", "forro"],
  "varietes-francaises": ["variete francaise", "chanson francaise", "french chanson", "french pop"],
  khaliji: ["khaliji", "arabic gulf music", "arabic music", "oud", "darbuka", "middle eastern music"],
  flamenco: ["flamenco", "flamenco guitar"],
};

const FALLBACK_QUERY_TERMS = {
  afrobeats: ["african house", "afro dance", "afro groove"],
  amapiano: ["afro house", "african house", "african dance"],
  "k-pop": ["korean music", "korean dance", "korean beat"],
  "j-pop": ["japanese music", "anime pop", "japanese dance"],
  "musica-mexicana": ["mexican guitar", "mexican folk", "mariachi music"],
  corridos: ["mexican folk", "mexican guitar", "norteno"],
  opm: ["filipino music", "pinoy music", "philippines music"],
  sertanejo: ["brazilian music", "forro", "brazilian folk"],
  "varietes-francaises": ["french music", "chanson", "french acoustic"],
  khaliji: ["arabic percussion", "middle eastern music", "oud music", "darbuka rhythm"],
};

function parseArgs(argv) {
  const opts = {
    genres: [],
    perGenre: 40,
    pagesPerQuery: 3,
    pageSize: 20,
    licenses: ["by", "cc0"],
    allowMature: false,
    minDurationMs: 10_000,
    maxDurationMs: 15 * 60 * 1000,
    outDir: DEFAULT_OUT_DIR,
    timeoutMs: 20_000,
    pauseMs: 120,
    fallbackMinTracks: 16,
    fallbackPagesPerQuery: 2,
    fallbackSources: [...DEFAULT_FALLBACK_SOURCES],
    disableSourceFallback: false,
    verbose: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--genres" && argv[i + 1]) {
      opts.genres = splitCsv(argv[i + 1]);
      i += 1;
      continue;
    }
    if (arg.startsWith("--genres=")) {
      opts.genres = splitCsv(arg.split("=")[1] || "");
      continue;
    }
    if (arg === "--per-genre" && argv[i + 1]) {
      opts.perGenre = toPositiveInt(argv[i + 1], opts.perGenre);
      i += 1;
      continue;
    }
    if (arg.startsWith("--per-genre=")) {
      opts.perGenre = toPositiveInt(arg.split("=")[1], opts.perGenre);
      continue;
    }
    if (arg === "--pages-per-query" && argv[i + 1]) {
      opts.pagesPerQuery = toPositiveInt(argv[i + 1], opts.pagesPerQuery);
      i += 1;
      continue;
    }
    if (arg.startsWith("--pages-per-query=")) {
      opts.pagesPerQuery = toPositiveInt(arg.split("=")[1], opts.pagesPerQuery);
      continue;
    }
    if (arg === "--page-size" && argv[i + 1]) {
      opts.pageSize = toPositiveInt(argv[i + 1], opts.pageSize);
      i += 1;
      continue;
    }
    if (arg.startsWith("--page-size=")) {
      opts.pageSize = toPositiveInt(arg.split("=")[1], opts.pageSize);
      continue;
    }
    if (arg === "--licenses" && argv[i + 1]) {
      opts.licenses = splitCsv(argv[i + 1]).map((value) => value.toLowerCase());
      i += 1;
      continue;
    }
    if (arg.startsWith("--licenses=")) {
      opts.licenses = splitCsv(arg.split("=")[1] || "").map((value) => value.toLowerCase());
      continue;
    }
    if (arg === "--allow-mature") {
      opts.allowMature = true;
      continue;
    }
    if (arg === "--min-duration-ms" && argv[i + 1]) {
      opts.minDurationMs = toPositiveInt(argv[i + 1], opts.minDurationMs);
      i += 1;
      continue;
    }
    if (arg.startsWith("--min-duration-ms=")) {
      opts.minDurationMs = toPositiveInt(arg.split("=")[1], opts.minDurationMs);
      continue;
    }
    if (arg === "--max-duration-ms" && argv[i + 1]) {
      opts.maxDurationMs = toPositiveInt(argv[i + 1], opts.maxDurationMs);
      i += 1;
      continue;
    }
    if (arg.startsWith("--max-duration-ms=")) {
      opts.maxDurationMs = toPositiveInt(arg.split("=")[1], opts.maxDurationMs);
      continue;
    }
    if (arg === "--timeout-ms" && argv[i + 1]) {
      opts.timeoutMs = toPositiveInt(argv[i + 1], opts.timeoutMs);
      i += 1;
      continue;
    }
    if (arg.startsWith("--timeout-ms=")) {
      opts.timeoutMs = toPositiveInt(arg.split("=")[1], opts.timeoutMs);
      continue;
    }
    if (arg === "--pause-ms" && argv[i + 1]) {
      opts.pauseMs = toPositiveInt(argv[i + 1], opts.pauseMs);
      i += 1;
      continue;
    }
    if (arg.startsWith("--pause-ms=")) {
      opts.pauseMs = toPositiveInt(arg.split("=")[1], opts.pauseMs);
      continue;
    }
    if (arg === "--fallback-min-tracks" && argv[i + 1]) {
      opts.fallbackMinTracks = toPositiveInt(argv[i + 1], opts.fallbackMinTracks);
      i += 1;
      continue;
    }
    if (arg.startsWith("--fallback-min-tracks=")) {
      opts.fallbackMinTracks = toPositiveInt(arg.split("=")[1], opts.fallbackMinTracks);
      continue;
    }
    if (arg === "--fallback-pages-per-query" && argv[i + 1]) {
      opts.fallbackPagesPerQuery = toPositiveInt(argv[i + 1], opts.fallbackPagesPerQuery);
      i += 1;
      continue;
    }
    if (arg.startsWith("--fallback-pages-per-query=")) {
      opts.fallbackPagesPerQuery = toPositiveInt(arg.split("=")[1], opts.fallbackPagesPerQuery);
      continue;
    }
    if (arg === "--fallback-sources" && argv[i + 1]) {
      opts.fallbackSources = splitCsv(argv[i + 1]).map((value) => value.toLowerCase());
      i += 1;
      continue;
    }
    if (arg.startsWith("--fallback-sources=")) {
      opts.fallbackSources = splitCsv(arg.split("=")[1] || "").map((value) => value.toLowerCase());
      continue;
    }
    if (arg === "--no-source-fallback") {
      opts.disableSourceFallback = true;
      continue;
    }
    if (arg === "--out-dir" && argv[i + 1]) {
      opts.outDir = path.resolve(ROOT, String(argv[i + 1]).trim());
      i += 1;
      continue;
    }
    if (arg.startsWith("--out-dir=")) {
      opts.outDir = path.resolve(ROOT, String(arg.split("=")[1] || "").trim());
      continue;
    }
    if (arg === "--verbose") {
      opts.verbose = true;
      continue;
    }
  }

  if (opts.pageSize > OPENVERSE_MAX_PAGE_SIZE_ANON) {
    opts.pageSize = OPENVERSE_MAX_PAGE_SIZE_ANON;
  }
  if (opts.pageSize < 1) {
    opts.pageSize = 1;
  }
  if (opts.pagesPerQuery < 1) {
    opts.pagesPerQuery = 1;
  }
  if (opts.perGenre < 1) {
    opts.perGenre = 1;
  }
  if (!Array.isArray(opts.licenses) || opts.licenses.length === 0) {
    opts.licenses = ["by", "cc0"];
  }
  if (!Array.isArray(opts.fallbackSources) || opts.fallbackSources.length === 0) {
    opts.fallbackSources = [...DEFAULT_FALLBACK_SOURCES];
  }
  if (opts.fallbackPagesPerQuery < 1) {
    opts.fallbackPagesPerQuery = 1;
  }

  return opts;
}

function splitCsv(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function toPositiveInt(value, fallback) {
  const parsed = Number.parseInt(String(value), 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }
  return parsed;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sanitizeToken(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function dedupe(values) {
  return [...new Set(values.filter(Boolean))];
}

function buildGenreQueries(genre) {
  const specific = DEFAULT_QUERY_TERMS[genre.id] || [];
  const generated = [
    genre.name,
    genre.name.replaceAll("/", " "),
    genre.name.replace(/[()]/g, ""),
    genre.id.replaceAll("-", " "),
  ];
  return dedupe([...specific, ...generated].map((term) => term.trim()).filter(Boolean));
}

function buildFallbackQueries(genre) {
  const specific = FALLBACK_QUERY_TERMS[genre.id] || [];
  return dedupe(specific.map((term) => term.trim()).filter(Boolean));
}

function licenseDisplay(code, version) {
  if (code === "by") {
    return version ? `CC BY ${version}` : "CC BY";
  }
  if (code === "cc0") {
    return version ? `CC0 ${version}` : "CC0";
  }
  if (code === "pdm") {
    return "Public Domain Mark";
  }
  return String(code || "").toUpperCase();
}

function normalizeTags(tags) {
  if (!Array.isArray(tags)) {
    return [];
  }
  return tags
    .map((tag) => {
      if (typeof tag === "string") {
        return tag;
      }
      if (tag && typeof tag.name === "string") {
        return tag.name;
      }
      return "";
    })
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function toDurationMs(value) {
  const numeric = Number(value || 0);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    return 0;
  }
  return Math.floor(numeric);
}

function buildTrack(raw, context) {
  const durationMs = toDurationMs(raw.duration);
  const tags = normalizeTags(raw.tags);
  const sourceTrackId = String(raw.id || "");
  const source = String(raw.source || raw.provider || "");
  const id = `${source}:${sourceTrackId}`.toLowerCase();

  const mapped = {
    id,
    sourceTrackId,
    source,
    provider: String(raw.provider || ""),
    title: String(raw.title || "Untitled"),
    creator: String(raw.creator || "Unknown"),
    creatorUrl: String(raw.creator_url || ""),
    foreignLandingUrl: String(raw.foreign_landing_url || ""),
    detailUrl: String(raw.detail_url || ""),
    audioUrl: String(raw.url || ""),
    filetype: String(raw.filetype || ""),
    filesize: Number(raw.filesize || 0),
    durationMs,
    durationSec: durationMs > 0 ? Number((durationMs / 1000).toFixed(2)) : 0,
    thumbnail: String(raw.thumbnail || ""),
    license: String(raw.license || "").toLowerCase(),
    licenseVersion: String(raw.license_version || ""),
    licenseUrl: String(raw.license_url || ""),
    licenseDisplay: licenseDisplay(String(raw.license || "").toLowerCase(), String(raw.license_version || "")),
    attribution: String(raw.attribution || ""),
    mature: Boolean(raw.mature),
    tags,
    genreId: context.genreId,
    genreName: context.genreName,
    query: context.query,
    queryPage: context.queryPage,
    indexedOn: String(raw.indexed_on || ""),
  };

  mapped.relevanceScore = computeRelevance(mapped, context.genreTokens);
  return mapped;
}

function computeRelevance(track, genreTokens) {
  const title = sanitizeToken(track.title);
  const tags = sanitizeToken(track.tags.join(" "));
  let score = 0;

  for (const token of genreTokens) {
    if (!token) {
      continue;
    }
    if (title.includes(token)) {
      score += 2;
    }
    if (tags.includes(token)) {
      score += 1.5;
    }
  }

  if (track.durationMs >= 20_000 && track.durationMs <= 360_000) {
    score += 0.4;
  }
  if (track.license === "cc0") {
    score += 0.2;
  }
  if (track.source === "jamendo" || track.source === "freesound") {
    score += 0.1;
  }
  return Number(score.toFixed(3));
}

async function fetchJson(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    const data = await response.json();
    if (!response.ok) {
      const detail = typeof data?.detail === "string" ? data.detail : `HTTP ${response.status}`;
      throw new Error(detail);
    }
    return data;
  } finally {
    clearTimeout(timeout);
  }
}

function buildSearchUrl({ query, licenses, pageSize, page, mature, source }) {
  const params = new URLSearchParams();
  params.set("q", query);
  params.set("license", licenses.join(","));
  params.set("mature", mature ? "true" : "false");
  params.set("page_size", String(pageSize));
  params.set("page", String(page));
  if (source) {
    params.set("source", source);
  }
  return `${OPENVERSE_AUDIO_API}?${params.toString()}`;
}

function pickTopTracks(rows, limit) {
  return rows
    .sort((a, b) => {
      if (b.relevanceScore !== a.relevanceScore) {
        return b.relevanceScore - a.relevanceScore;
      }
      if (b.durationMs !== a.durationMs) {
        return b.durationMs - a.durationMs;
      }
      return a.title.localeCompare(b.title);
    })
    .slice(0, limit);
}

function dedupeTracks(rows) {
  const seen = new Set();
  const unique = [];
  for (const row of rows) {
    const key = [row.source, row.sourceTrackId, row.audioUrl || row.foreignLandingUrl].join("|").toLowerCase();
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    unique.push(row);
  }
  return unique;
}

function matchesDuration(track, minDurationMs, maxDurationMs) {
  if (!track.durationMs) {
    return true;
  }
  if (track.durationMs < minDurationMs) {
    return false;
  }
  if (track.durationMs > maxDurationMs) {
    return false;
  }
  return true;
}

function toLegacyRow(track) {
  return {
    id: track.id,
    title: track.title,
    artist: track.creator,
    genre: track.genreName,
    license: track.licenseDisplay,
    source: track.source,
    sourceUrl: track.foreignLandingUrl || track.detailUrl,
    audioUrl: track.audioUrl,
    attribution: track.attribution,
    features: ["CC Enrichment", "Karaoke Candidate"],
    popularity: `Relevance ${track.relevanceScore}`,
  };
}

async function loadManifest() {
  const raw = await fs.readFile(GENRE_MANIFEST_PATH, "utf8");
  return JSON.parse(raw);
}

function selectGenres(manifest, requestedGenreIds) {
  const genres = Array.isArray(manifest.genres) ? manifest.genres : [];
  if (!requestedGenreIds || requestedGenreIds.length === 0) {
    return genres;
  }
  return genres.filter((genre) => requestedGenreIds.includes(genre.id));
}

function buildGenreTokens(genre, queries) {
  const raw = [genre.id, genre.name, ...queries]
    .flatMap((value) => sanitizeToken(value).split(" "))
    .map((value) => value.trim())
    .filter((value) => value.length >= 3);
  return dedupe(raw);
}

function summarizeLicenses(tracks) {
  const counts = {};
  for (const track of tracks) {
    counts[track.license] = (counts[track.license] || 0) + 1;
  }
  return counts;
}

function summarizeSources(tracks) {
  const counts = {};
  for (const track of tracks) {
    counts[track.source] = (counts[track.source] || 0) + 1;
  }
  return counts;
}

function filterAndMapRows({ results, genre, query, queryPage, genreTokens, opts, sourceFilter, phase }) {
  const rows = [];
  for (const raw of results) {
    const row = buildTrack(raw, {
      genreId: genre.id,
      genreName: genre.name,
      query,
      queryPage,
      genreTokens,
    });

    if (!row.audioUrl) {
      continue;
    }
    if (!opts.licenses.includes(row.license)) {
      continue;
    }
    if (!opts.allowMature && row.mature) {
      continue;
    }
    if (!matchesDuration(row, opts.minDurationMs, opts.maxDurationMs)) {
      continue;
    }

    row.queryPhase = phase;
    row.sourceFilter = sourceFilter || "";
    rows.push(row);
  }
  return rows;
}

async function runOpenversePass({
  genre,
  queries,
  genreTokens,
  opts,
  pageCount,
  sources,
  phase,
  fetchedRows,
}) {
  let requestCount = 0;
  let candidateCount = 0;
  const sourceScopes = Array.isArray(sources) && sources.length > 0 ? sources : [""];

  for (const sourceFilter of sourceScopes) {
    for (const query of queries) {
      for (let page = 1; page <= pageCount; page += 1) {
        const url = buildSearchUrl({
          query,
          licenses: opts.licenses,
          pageSize: opts.pageSize,
          page,
          mature: opts.allowMature,
          source: sourceFilter,
        });
        requestCount += 1;
        if (opts.verbose) {
          const sourceLabel = sourceFilter || "all";
          console.log(`[music-cc] ${genre.id} phase=${phase} source=${sourceLabel} q="${query}" page=${page}`);
        }

        try {
          const payload = await fetchJson(url, opts.timeoutMs);
          const results = Array.isArray(payload.results) ? payload.results : [];
          candidateCount += results.length;
          fetchedRows.push(
            ...filterAndMapRows({
              results,
              genre,
              query,
              queryPage: page,
              genreTokens,
              opts,
              sourceFilter,
              phase,
            }),
          );
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          console.warn(`[music-cc] warn ${genre.id} phase=${phase} q="${query}" page=${page}: ${message}`);
        }

        if (opts.pauseMs > 0) {
          await sleep(opts.pauseMs);
        }
      }
    }
  }

  return {
    requestCount,
    candidateCount,
  };
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const manifest = await loadManifest();
  const genres = selectGenres(manifest, opts.genres);

  if (genres.length === 0) {
    throw new Error(`No genres matched. Requested: ${opts.genres.join(", ")}`);
  }

  await fs.mkdir(opts.outDir, { recursive: true });

  const startedAt = new Date().toISOString();
  const summary = {
    generatedAt: startedAt,
    provider: "openverse",
    options: {
      perGenre: opts.perGenre,
      pagesPerQuery: opts.pagesPerQuery,
      pageSize: opts.pageSize,
      licenses: opts.licenses,
      allowMature: opts.allowMature,
      minDurationMs: opts.minDurationMs,
      maxDurationMs: opts.maxDurationMs,
      fallbackMinTracks: opts.fallbackMinTracks,
      fallbackPagesPerQuery: opts.fallbackPagesPerQuery,
      fallbackSources: opts.fallbackSources,
      disableSourceFallback: opts.disableSourceFallback,
    },
    genres: [],
  };

  const legacyRows = [];
  console.log(`[music-cc] Enriching ${genres.length} genres (licenses: ${opts.licenses.join(",")})`);

  for (const genre of genres) {
    const primaryQueries = buildGenreQueries(genre);
    const fallbackQueries = buildFallbackQueries(genre);
    const combinedQueryTokens = dedupe([...primaryQueries, ...fallbackQueries]);
    const genreTokens = buildGenreTokens(genre, combinedQueryTokens);
    const fetchedRows = [];
    let requestCount = 0;
    let totalCandidates = 0;
    let fallbackApplied = false;
    let fallbackAttempted = false;

    const primaryStats = await runOpenversePass({
      genre,
      queries: primaryQueries,
      genreTokens,
      opts,
      pageCount: opts.pagesPerQuery,
      sources: [],
      phase: "primary",
      fetchedRows,
    });
    requestCount += primaryStats.requestCount;
    totalCandidates += primaryStats.candidateCount;

    let deduped = dedupeTracks(fetchedRows);
    let selected = pickTopTracks(deduped, opts.perGenre);

    if (!opts.disableSourceFallback && selected.length < Math.min(opts.perGenre, opts.fallbackMinTracks)) {
      fallbackAttempted = true;
      const fallbackQuerySet = dedupe([
        ...fallbackQueries,
        ...primaryQueries.slice(0, Math.min(primaryQueries.length, 3)),
      ]);

      if (fallbackQuerySet.length > 0) {
        const fallbackStats = await runOpenversePass({
          genre,
          queries: fallbackQuerySet,
          genreTokens,
          opts,
          pageCount: opts.fallbackPagesPerQuery,
          sources: opts.fallbackSources,
          phase: "source_fallback",
          fetchedRows,
        });
        requestCount += fallbackStats.requestCount;
        totalCandidates += fallbackStats.candidateCount;
        deduped = dedupeTracks(fetchedRows);
        selected = pickTopTracks(deduped, opts.perGenre);
        fallbackApplied = selected.length > 0;
      }
    }

    const licenses = summarizeLicenses(selected);
    const sources = summarizeSources(selected);

    const genrePayload = {
      generatedAt: new Date().toISOString(),
      provider: "openverse",
      genre: {
        id: genre.id,
        name: genre.name,
        rank: genre.rank,
      },
      queryPlan: {
        primary: {
          queries: primaryQueries,
          pagesPerQuery: opts.pagesPerQuery,
          pageSize: opts.pageSize,
        },
        fallback: {
          attempted: fallbackAttempted,
          applied: fallbackApplied,
          queries: fallbackQueries,
          pagesPerQuery: opts.fallbackPagesPerQuery,
          sources: opts.fallbackSources,
        },
      },
      filters: {
        licenses: opts.licenses,
        allowMature: opts.allowMature,
        minDurationMs: opts.minDurationMs,
        maxDurationMs: opts.maxDurationMs,
      },
      totals: {
        requestCount,
        candidatesFetched: totalCandidates,
        dedupedCandidates: deduped.length,
        tracksKept: selected.length,
        licenses,
        sources,
      },
      tracks: selected,
    };

    const genrePath = path.join(opts.outDir, `${slugify(genre.id)}.json`);
    await fs.writeFile(genrePath, JSON.stringify(genrePayload, null, 2));

    summary.genres.push({
      genreId: genre.id,
      genreName: genre.name,
      rank: genre.rank,
      trackCount: selected.length,
      licenses,
      sources,
      file: path.relative(ROOT, genrePath).replaceAll("\\", "/"),
    });

    legacyRows.push(...selected.slice(0, Math.min(6, selected.length)).map(toLegacyRow));
    console.log(`[music-cc] ${genre.id}: ${selected.length} tracks from ${Object.keys(sources).length} sources`);
  }

  summary.completedAt = new Date().toISOString();
  summary.totalTracks = summary.genres.reduce((acc, genre) => acc + genre.trackCount, 0);

  const summaryPath = path.join(opts.outDir, "_summary.json");
  await fs.writeFile(summaryPath, JSON.stringify(summary, null, 2));

  await fs.writeFile(
    LEGACY_TRACKS_PATH,
    JSON.stringify(
      {
        generatedAt: summary.completedAt,
        provider: "openverse",
        licenses: opts.licenses,
        tracks: legacyRows,
      },
      null,
      2,
    ),
  );

  console.log(`[music-cc] done: ${path.relative(ROOT, summaryPath).replaceAll("\\", "/")}`);
}

main().catch((error) => {
  console.error("[music-cc] FATAL:", error.message);
  process.exit(1);
});
