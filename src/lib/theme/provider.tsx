"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ThemeMode = "light" | "system";
export type ThemeResolved = "light";
export type ThemePack = "simple" | "sunrise" | "ocean" | "forest" | "candy" | "space";
export type MotionPreference = "standard";
export type ContrastPreference = "standard" | "high";

const MODE_STORAGE_KEY = "eduforge.theme.mode";
const PACK_STORAGE_KEY = "eduforge.theme.pack";

type ThemeContextValue = {
  themeMode: ThemeMode;
  resolvedTheme: ThemeResolved;
  themePack: ThemePack;
  motionPreference: MotionPreference;
  contrastPreference: ContrastPreference;
  setThemeMode: (value: ThemeMode) => void;
  setThemePack: (value: ThemePack) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getStoredMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "system";
  }
  const stored = window.localStorage.getItem(MODE_STORAGE_KEY);
  if (stored === "light" || stored === "system") {
    return stored;
  }
  return "system";
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

function resolveTheme(mode: ThemeMode): ThemeResolved {
  // Student-facing palette is intentionally light-only for a brighter, child-friendly baseline.
  if (mode === "light" || mode === "system") {
    return "light";
  }
  return "light";
}

function applyTheme(
  theme: ThemeResolved,
  mode: ThemeMode,
  pack: ThemePack
) {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themeMode = mode;
  document.documentElement.dataset.themePack = pack;
  document.documentElement.dataset.motion = "standard";
  document.documentElement.dataset.contrast = "standard";
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => getStoredMode());
  const [themePack, setThemePack] = useState<ThemePack>(() => getStoredPack());
  const motionPreference: MotionPreference = "standard";
  const contrastPreference: ContrastPreference = "standard";
  const resolvedTheme = useMemo(() => resolveTheme(themeMode), [themeMode]);

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
          || payload.preferences.theme_mode === "system"
        ) {
          setThemeMode(payload.preferences.theme_mode);
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
    window.localStorage.setItem(MODE_STORAGE_KEY, themeMode);
    window.localStorage.setItem(PACK_STORAGE_KEY, themePack);
    applyTheme(resolveTheme(themeMode), themeMode, themePack);
  }, [themeMode, themePack]);

  const value = useMemo(
    () => ({
      themeMode,
      resolvedTheme,
      themePack,
      motionPreference,
      contrastPreference,
      setThemeMode,
      setThemePack,
    }),
    [themeMode, resolvedTheme, themePack, motionPreference, contrastPreference]
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
