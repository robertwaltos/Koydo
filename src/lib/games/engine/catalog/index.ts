/* -------------------------------------------------------------------------- */
/*  Koydo 300-Game Catalog — Master Index                                    */
/*  Combines all 4 catalog parts and provides lookup helpers                  */
/* -------------------------------------------------------------------------- */
import type { GameDefinition, EduCategory, MechanicFamily } from "../types";
import { CATALOG_PART1 } from "./catalog-part1";
import { CATALOG_PART2 } from "./catalog-part2";
import { CATALOG_PART3 } from "./catalog-part3";
import { CATALOG_PART4 } from "./catalog-part4";

/** All 300 game definitions in a single array */
export const FULL_CATALOG: GameDefinition[] = [
  ...CATALOG_PART1,
  ...CATALOG_PART2,
  ...CATALOG_PART3,
  ...CATALOG_PART4,
];

/* ── Pre-built indexes for O(1) lookups ─────────────────────────────── */

const _byId = new Map<string, GameDefinition>();
const _byCategory = new Map<EduCategory, GameDefinition[]>();
const _byMechanic = new Map<MechanicFamily, GameDefinition[]>();

for (const g of FULL_CATALOG) {
  _byId.set(g.id, g);

  if (!_byCategory.has(g.category)) _byCategory.set(g.category, []);
  _byCategory.get(g.category)!.push(g);

  if (!_byMechanic.has(g.mechanic)) _byMechanic.set(g.mechanic, []);
  _byMechanic.get(g.mechanic)!.push(g);
}

/* ── Public helpers ─────────────────────────────────────────────────── */

/** Get a single game by its unique id (e.g. "math-quiz-001") */
export function getGameById(id: string): GameDefinition | undefined {
  return _byId.get(id);
}

/** Get all games in a subject category */
export function getGamesByCategory(cat: EduCategory): GameDefinition[] {
  return _byCategory.get(cat) ?? [];
}

/** Get all games that use a specific engine mechanic */
export function getGamesByMechanic(mech: MechanicFamily): GameDefinition[] {
  return _byMechanic.get(mech) ?? [];
}

/** Get games suitable for a specific age */
export function getGamesForAge(age: number): GameDefinition[] {
  return FULL_CATALOG.filter((g) => age >= g.ages.min && age <= g.ages.max);
}

/** Search games by title/description (case-insensitive) */
export function searchGames(query: string): GameDefinition[] {
  const q = query.toLowerCase();
  return FULL_CATALOG.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q),
  );
}

/** Get all unique categories present in the catalog */
export function getAllCategories(): EduCategory[] {
  return [..._byCategory.keys()];
}

/** Get all unique mechanics present in the catalog */
export function getAllMechanics(): MechanicFamily[] {
  return [..._byMechanic.keys()];
}

/** Total number of games */
export const TOTAL_GAMES = FULL_CATALOG.length;
