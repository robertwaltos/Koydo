/* -------------------------------------------------------------------------- */
/*  Koydo 300-Game Catalog — JSON-backed runtime loader                      */
/*  Loads game definitions from /data/games/catalog.json at runtime           */
/*  instead of bundling 4 large TypeScript files at build time.               */
/* -------------------------------------------------------------------------- */
import { useState, useEffect } from "react";
import type { GameDefinition, EduCategory, MechanicFamily } from "../types";

/* ── Singleton cache ────────────────────────────────────────────────── */
let _catalog: GameDefinition[] | null = null;
let _promise: Promise<GameDefinition[]> | null = null;
let _byId: Map<string, GameDefinition> | null = null;
let _byCategory: Map<EduCategory, GameDefinition[]> | null = null;
let _byMechanic: Map<MechanicFamily, GameDefinition[]> | null = null;

function buildIndexes(games: GameDefinition[]) {
  _byId = new Map();
  _byCategory = new Map();
  _byMechanic = new Map();
  for (const g of games) {
    _byId.set(g.id, g);
    if (!_byCategory.has(g.category)) _byCategory.set(g.category, []);
    _byCategory.get(g.category)!.push(g);
    if (!_byMechanic.has(g.mechanic)) _byMechanic.set(g.mechanic, []);
    _byMechanic.get(g.mechanic)!.push(g);
  }
}

/** Fetch and cache the full catalog (singleton) */
export async function loadCatalog(): Promise<GameDefinition[]> {
  if (_catalog) return _catalog;
  if (!_promise) {
    _promise = fetch("/data/games/catalog.json")
      .then((r) => r.json())
      .then((games: GameDefinition[]) => {
        _catalog = games;
        buildIndexes(games);
        return games;
      });
  }
  return _promise;
}

/* ── Sync helpers (valid after catalog is loaded) ───────────────────── */

/** Get a single game by its unique id (e.g. "math-quiz-001") */
export function getGameById(id: string): GameDefinition | undefined {
  return _byId?.get(id);
}

/** Get all games in a subject category */
export function getGamesByCategory(cat: EduCategory): GameDefinition[] {
  return _byCategory?.get(cat) ?? [];
}

/** Get all games that use a specific engine mechanic */
export function getGamesByMechanic(mech: MechanicFamily): GameDefinition[] {
  return _byMechanic?.get(mech) ?? [];
}

/** Get games suitable for a specific age */
export function getGamesForAge(age: number): GameDefinition[] {
  return (_catalog ?? []).filter(
    (g) => age >= g.ages.min && age <= g.ages.max,
  );
}

/** Search games by title/description (case-insensitive) */
export function searchGames(query: string): GameDefinition[] {
  const q = query.toLowerCase();
  return (_catalog ?? []).filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q),
  );
}

/** Get all unique categories present in the catalog */
export function getAllCategories(): EduCategory[] {
  return _byCategory ? [..._byCategory.keys()] : [];
}

/** Get all unique mechanics present in the catalog */
export function getAllMechanics(): MechanicFamily[] {
  return _byMechanic ? [..._byMechanic.keys()] : [];
}

/** Total number of games (0 until loaded) */
export function getTotalGames(): number {
  return _catalog?.length ?? 0;
}

/* ── React Hook — async catalog loader ──────────────────────────────── */

export interface CatalogState {
  catalog: GameDefinition[];
  loading: boolean;
}

/** Hook that loads the full catalog on mount and caches it. */
export function useCatalog(): CatalogState {
  const [state, setState] = useState<CatalogState>(() =>
    _catalog
      ? { catalog: _catalog, loading: false }
      : { catalog: [], loading: true },
  );

  useEffect(() => {
    if (_catalog) {
      setState({ catalog: _catalog, loading: false });
      return;
    }
    let cancelled = false;
    loadCatalog().then((games) => {
      if (!cancelled) setState({ catalog: games, loading: false });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
