"use client";

import {
  useCallback,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ThemeMode = "light" | "dark" | "system";
export type ThemeResolved = "light" | "dark";
export type ThemePack = "simple" | "sunrise" | "ocean" | "forest" | "candy" | "space";
export type MotionPreference = "standard";
export type ContrastPreference = "standard" | "high";
export type TypographyDensity = "comfortable" | "compact" | "spacious";

const MODE_STORAGE_KEY = "koydo.theme.mode";
const PACK_STORAGE_KEY = "koydo.theme.pack";
const TYPOGRAPHY_DENSITY_STORAGE_KEY = "koydo.typography.density";
const LOCKED_THEME_MODE: ThemeMode = "light";
const LOCKED_THEME_RESOLVED: ThemeResolved = "light";

type ThemeContextValue = {
  themeMode: ThemeMode;
  resolvedTheme: ThemeResolved;
  themePack: ThemePack;
  motionPreference: MotionPreference;
  contrastPreference: ContrastPreference;
  typographyDensity: TypographyDensity;
  setThemeMode: (value: ThemeMode) => void;
  setThemePack: (value: ThemePack) => void;
  setTypographyDensity: (value: TypographyDensity) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getStoredMode(): ThemeMode {
  return LOCKED_THEME_MODE;
}

function getStoredPack(): ThemePack {
  if (typeof window === "undefined") {
    return "simple";
  }
  const stored = window.localStorage.getItem(PACK_STORAGE_KEY);
  if (
    stored === "simple"
    || stored === "sunrise"
    || stored === "ocean"
    || stored === "forest"
    || stored === "candy"
    || stored === "space"
  ) {
    return stored;
  }
  return "simple";
}

function getStoredTypographyDensity(): TypographyDensity {
  if (typeof window === "undefined") {
    return "comfortable";
  }
  const stored = window.localStorage.getItem(TYPOGRAPHY_DENSITY_STORAGE_KEY);
  if (stored === "comfortable" || stored === "compact" || stored === "spacious") {
    return stored;
  }
  return "comfortable";
}

function normalizeThemeMode(): ThemeMode {
  return LOCKED_THEME_MODE;
}

function resolveTheme(): ThemeResolved {
  return LOCKED_THEME_RESOLVED;
}

function resolveMotionDatasetValue() {
  if (typeof window === "undefined") {
    return "standard";
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "reduced" : "standard";
}

function applyTheme(
  theme: ThemeResolved,
  mode: ThemeMode,
  pack: ThemePack,
  typographyDensity: TypographyDensity
) {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themeMode = mode;
  document.documentElement.dataset.themePack = pack;
  document.documentElement.dataset.typographyDensity = typographyDensity;
  document.documentElement.dataset.motion = resolveMotionDatasetValue();
  document.documentElement.dataset.contrast = "standard";
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => getStoredMode());
  const [themePack, setThemePack] = useState<ThemePack>(() => getStoredPack());
  const [typographyDensity, setTypographyDensity] = useState<TypographyDensity>(() =>
    getStoredTypographyDensity(),
  );
  const setThemeMode = useCallback(() => {
    setThemeModeState(LOCKED_THEME_MODE);
  }, []);
  const motionPreference: MotionPreference = "standard";
  const contrastPreference: ContrastPreference = "standard";
  const resolvedTheme = useMemo(() => resolveTheme(), []);

  useEffect(() => {
    let active = true;

    const hydrateFromProfile = async () => {
      try {
        const response = await fetch("/api/user/preferences", { method: "GET" });
        if (!response.ok) {
          return;
        }

        const payload = (await response.json()) as {
          preferences?: {
            theme_mode?: ThemeMode;
            theme_pack?: ThemePack;
          };
        };

        if (!active || !payload.preferences) {
          return;
        }

        if (
          payload.preferences.theme_mode === "light"
          || payload.preferences.theme_mode === "dark"
          || payload.preferences.theme_mode === "system"
        ) {
          setThemeModeState(normalizeThemeMode());
        }

        if (
          payload.preferences.theme_pack === "simple"
          || payload.preferences.theme_pack === "sunrise"
          || payload.preferences.theme_pack === "ocean"
          || payload.preferences.theme_pack === "forest"
          || payload.preferences.theme_pack === "candy"
          || payload.preferences.theme_pack === "space"
        ) {
          setThemePack(payload.preferences.theme_pack);
        }

      } catch {
        // Keep local preferences when profile endpoint is unavailable.
      }
    };

    void hydrateFromProfile();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(MODE_STORAGE_KEY, LOCKED_THEME_MODE);
    window.localStorage.setItem(PACK_STORAGE_KEY, themePack);
    window.localStorage.setItem(TYPOGRAPHY_DENSITY_STORAGE_KEY, typographyDensity);
    applyTheme(LOCKED_THEME_RESOLVED, LOCKED_THEME_MODE, themePack, typographyDensity);
  }, [themeMode, themePack, typographyDensity, resolvedTheme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      applyTheme(resolvedTheme, themeMode, themePack, typographyDensity);
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, [themeMode, themePack, typographyDensity, resolvedTheme]);

  const value = useMemo(
    () => ({
      themeMode,
      resolvedTheme,
      themePack,
      motionPreference,
      contrastPreference,
      typographyDensity,
      setThemeMode,
      setThemePack,
      setTypographyDensity,
    }),
    [
      themeMode,
      resolvedTheme,
      themePack,
      motionPreference,
      contrastPreference,
      typographyDensity,
      setThemeMode,
    ],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.");
  }
  return context;
}
