/**
 * Centralised asset path constants — semantic names only.
 * Files: /public/hero-home.png, bg-lower-page.png, bg-auth-page.png, hero-auth-card.jpg, logo-koydo.jpg
 */
export const ASSETS = {
  /** Full-viewport hero on the home / landing page (watercolor sunrise treehouse, 3 MB, high-quality) */
  heroHome: "/hero-home.png",

  /** Persistent background behind all lower-page sections (soft watercolor pattern, 2.2 MB, high-quality) */
  bgBottom: "/bg-lower-page.png",

  /** Brand logo — top-nav and branded surfaces */
  logo: "/logo-koydo.jpg",

  /** Full-page background on sign-in / sign-up (dreamy tree-of-knowledge, 2.3 MB, high-quality) */
  bgAuth: "/bg-auth-page.png",

  /** Inset hero card on sign-in page (bridge-of-books, 261 KB) */
  heroSignIn: "/hero-auth-card.jpg",

  /** Inset hero card on sign-up page (bridge-of-books, 261 KB) */
  heroSignUp: "/hero-auth-card.jpg",
} as const;

export type AssetKey = keyof typeof ASSETS;
