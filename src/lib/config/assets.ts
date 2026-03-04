/**
 * Centralised asset path constants — semantic names only.
 * Files: /public/hero-home.png, bg-lower-page.jpg, bg-auth-page.jpg, hero-auth-card.jpg, logo-koydo.jpg
 */
export const ASSETS = {
  /** Full-viewport hero on the home / landing page (children learning under a tree, 677 KB) */
  heroHome: "/hero-home.png",

  /** Persistent background behind all lower-page sections (daytime landscape, 2.4 MB) */
  bgBottom: "/bg-lower-page.jpg",

  /** Brand logo — top-nav and branded surfaces */
  logo: "/logo-koydo.jpg",

  /** Full-page background on sign-in / sign-up (dreamy landscape, 2.4 MB) */
  bgAuth: "/bg-auth-page.jpg",

  /** Inset hero card on sign-in page (bridge-of-books, 261 KB) */
  heroSignIn: "/hero-auth-card.jpg",

  /** Inset hero card on sign-up page (bridge-of-books, 261 KB) */
  heroSignUp: "/hero-auth-card.jpg",
} as const;

export type AssetKey = keyof typeof ASSETS;
