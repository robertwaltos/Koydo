/**
 * Ambient Background System — 225+ age-appropriate CSS gradient backgrounds.
 *
 * Organized into 5 age bands:
 *   K-2  (ages 4–7):  Warm, soft pastels — peach, lavender, mint, baby blue
 *   3-5  (ages 8–10): Bright, calming pastels — sky, coral, mint, sunshine
 *   6-8  (ages 11–13): Sophisticated pastels — sage, dusty rose, slate, amber
 *   9-12 (ages 14–17): Mature, minimal tones — teal, slate, stone
 *   13-20 (ages 18+):  Professional, barely-there neutrals
 *
 * Each gradient uses near-white (light mode) or near-dark (dark mode) hues
 * applied as a full-viewport background.  The effect is a subtle color wash
 * that adds warmth and personality without distraction.
 *
 * Generation: 45 gradients per band (15 linear-2, 10 radial, 10 linear-3,
 * 10 mesh) × 5 bands = 225 light-mode + 225 dark-mode = 450 total variants.
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type AgeBand = "k-2" | "3-5" | "6-8" | "9-12" | "13-20";

type HueSat = { h: number; s: number };

type PaletteConfig = {
  hues: HueSat[];
  /** Lightness for light-mode colours (94-98) */
  lightL: number;
  /** Lightness for dark-mode colours (6-12) */
  darkL: number;
  /** Saturation scale factor in dark mode (0.3-0.5 keeps tints visible) */
  darkSatScale: number;
};

// ── Colour Palettes ───────────────────────────────────────────────────────────

const PALETTES: Record<AgeBand, PaletteConfig> = {
  "k-2": {
    hues: [
      { h: 25, s: 65 },  // peach
      { h: 330, s: 50 }, // pink
      { h: 275, s: 40 }, // lavender
      { h: 45, s: 60 },  // buttercream
      { h: 150, s: 35 }, // mint
      { h: 200, s: 45 }, // baby blue
      { h: 10, s: 55 },  // coral
      { h: 55, s: 50 },  // sunshine
      { h: 300, s: 35 }, // orchid
      { h: 170, s: 40 }, // aqua
    ],
    lightL: 96,
    darkL: 8,
    darkSatScale: 0.4,
  },

  "3-5": {
    hues: [
      { h: 210, s: 55 }, // sky blue
      { h: 5, s: 50 },   // soft coral
      { h: 155, s: 40 }, // spring green
      { h: 50, s: 55 },  // golden
      { h: 265, s: 40 }, // violet
      { h: 180, s: 45 }, // teal
      { h: 30, s: 50 },  // tangerine
      { h: 340, s: 40 }, // rose
      { h: 120, s: 35 }, // sage
      { h: 190, s: 45 }, // cyan
    ],
    lightL: 95,
    darkL: 8,
    darkSatScale: 0.35,
  },

  "6-8": {
    hues: [
      { h: 140, s: 25 }, // sage
      { h: 345, s: 30 }, // dusty rose
      { h: 220, s: 30 }, // slate blue
      { h: 35, s: 30 },  // warm amber
      { h: 185, s: 25 }, // teal mist
      { h: 290, s: 22 }, // orchid grey
      { h: 165, s: 20 }, // seafoam
      { h: 15, s: 28 },  // terracotta
      { h: 250, s: 22 }, // periwinkle
      { h: 75, s: 20 },  // olive
    ],
    lightL: 95,
    darkL: 9,
    darkSatScale: 0.4,
  },

  "9-12": {
    hues: [
      { h: 200, s: 20 }, // cool grey-blue
      { h: 220, s: 18 }, // slate
      { h: 30, s: 15 },  // warm stone
      { h: 180, s: 15 }, // fog
      { h: 160, s: 12 }, // ash green
      { h: 270, s: 12 }, // subtle violet
      { h: 45, s: 15 },  // parchment
      { h: 0, s: 10 },   // blush
      { h: 240, s: 14 }, // indigo mist
      { h: 120, s: 10 }, // muted sage
    ],
    lightL: 96,
    darkL: 9,
    darkSatScale: 0.45,
  },

  "13-20": {
    hues: [
      { h: 220, s: 12 }, // cool silver
      { h: 260, s: 10 }, // lavender grey
      { h: 0, s: 8 },    // rose grey
      { h: 140, s: 8 },  // sage grey
      { h: 300, s: 8 },  // mauve
      { h: 200, s: 10 }, // steel
      { h: 40, s: 10 },  // warm grey
      { h: 180, s: 8 },  // ice
      { h: 330, s: 8 },  // blush grey
      { h: 90, s: 7 },   // olive grey
    ],
    lightL: 97,
    darkL: 9,
    darkSatScale: 0.5,
  },
};

// ── Gradient primitives ───────────────────────────────────────────────────────

const ANGLES = [120, 135, 150, 165, 45, 30, 60, 100, 170, 15];

const POSITIONS = [
  "30% 20%",
  "70% 80%",
  "20% 70%",
  "80% 20%",
  "50% 50%",
  "10% 50%",
  "90% 50%",
  "50% 10%",
  "50% 90%",
  "40% 60%",
];

function hsl(hue: HueSat, lightness: number, satScale = 1): string {
  return `hsl(${hue.h} ${Math.round(hue.s * satScale)}% ${lightness}%)`;
}

// ── Generator ─────────────────────────────────────────────────────────────────

function generateForBand(band: AgeBand, isDark: boolean): string[] {
  const config = PALETTES[band];
  const { hues } = config;
  const L = isDark ? config.darkL : config.lightL;
  const ss = isDark ? config.darkSatScale : 1;
  const gradients: string[] = [];

  // ── Type 1: linear 2-colour (15 gradients) ──
  for (let i = 0; i < 15; i++) {
    const c1 = hues[i % hues.length];
    const c2 = hues[(i + 3) % hues.length];
    const angle = ANGLES[i % ANGLES.length];
    gradients.push(
      `linear-gradient(${angle}deg, ${hsl(c1, L, ss)}, ${hsl(c2, L, ss)})`,
    );
  }

  // ── Type 2: radial 2-colour (10 gradients) ──
  for (let i = 0; i < 10; i++) {
    const c1 = hues[(i + 1) % hues.length];
    const c2 = hues[(i + 5) % hues.length];
    const pos = POSITIONS[i];
    gradients.push(
      `radial-gradient(ellipse at ${pos}, ${hsl(c1, L, ss)}, ${hsl(c2, L, ss)})`,
    );
  }

  // ── Type 3: linear 3-colour (10 gradients) ──
  for (let i = 0; i < 10; i++) {
    const c1 = hues[(i * 2) % hues.length];
    const c2 = hues[(i * 2 + 3) % hues.length];
    const c3 = hues[(i * 2 + 7) % hues.length];
    const angle = ANGLES[(i + 2) % ANGLES.length];
    gradients.push(
      `linear-gradient(${angle}deg, ${hsl(c1, L, ss)}, ${hsl(c2, L, ss)} 50%, ${hsl(c3, L, ss)})`,
    );
  }

  // ── Type 4: mesh / multi-radial (10 gradients) ──
  for (let i = 0; i < 10; i++) {
    const c1 = hues[(i + 2) % hues.length];
    const c2 = hues[(i + 6) % hues.length];
    const c3 = hues[(i + 4) % hues.length];
    const p1 = POSITIONS[i];
    const p2 = POSITIONS[(i + 5) % POSITIONS.length];
    const L2 = isDark ? L + 1 : L - 1;
    gradients.push(
      `radial-gradient(ellipse at ${p1}, ${hsl(c1, L, ss)} 0%, transparent 55%), ` +
        `radial-gradient(ellipse at ${p2}, ${hsl(c2, L, ss)} 0%, transparent 55%), ` +
        `linear-gradient(${ANGLES[(i + 4) % ANGLES.length]}deg, ${hsl(c3, L2, ss)}, ${hsl(c1, L2, ss)})`,
    );
  }

  return gradients; // 45 per band
}

// ── Cache ─────────────────────────────────────────────────────────────────────

const cache = new Map<string, string[]>();

function getGradients(band: AgeBand, isDark: boolean): string[] {
  const key = `${band}-${isDark ? "d" : "l"}`;
  let arr = cache.get(key);
  if (!arr) {
    arr = generateForBand(band, isDark);
    cache.set(key, arr);
  }
  return arr;
}

// ── Public helpers ────────────────────────────────────────────────────────────

/** Convert a grade-level label (e.g. "K", "3", "Pre-K") to an approximate age. */
export function gradeToAge(grade: string | null | undefined): number | null {
  if (!grade) return null;
  const g = grade.toLowerCase().trim();
  if (g === "pre-k" || g === "prek" || g === "preschool") return 4;
  if (g === "k" || g === "kindergarten") return 5;
  const num = parseInt(g, 10);
  if (!isNaN(num) && num >= 1 && num <= 12) return num + 5;
  if (g.includes("college") || g.includes("university") || g.includes("adult"))
    return 20;
  if (g.includes("freshman")) return 18;
  if (g.includes("sophomore")) return 19;
  if (g.includes("junior")) return 20;
  if (g.includes("senior")) return 21;
  return null;
}

/** Map an age in years to the matching age band. */
export function ageToBand(age: number): AgeBand {
  if (age <= 7) return "k-2";
  if (age <= 10) return "3-5";
  if (age <= 13) return "6-8";
  if (age <= 17) return "9-12";
  return "13-20";
}

/** Get a CSS background string for the given band, seeded index, and mode. */
export function getBackground(
  band: AgeBand,
  seed: number,
  isDark: boolean,
): string {
  const gradients = getGradients(band, isDark);
  const index = ((seed % gradients.length) + gradients.length) % gradients.length;
  return gradients[index];
}

/** Deterministic string → number hash (for user-specific seeds). */
export function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/** Total number of unique background gradients (light-mode only). */
export function getTotalBackgroundCount(): number {
  const bands: AgeBand[] = ["k-2", "3-5", "6-8", "9-12", "13-20"];
  return bands.reduce((n, b) => n + getGradients(b, false).length, 0);
}
