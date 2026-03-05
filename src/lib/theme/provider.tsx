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
export type AgeGroupTheme = "standard" | "tiny-explorer" | "young-adventurer" | "teen-mode" | "adult-pro";
export type MotionPreference = "standard";
export type ContrastPreference = "standard" | "high";
export type TypographyDensity = "comfortable" | "compact" | "spacious";

const MODE_STORAGE_KEY = "koydo.theme.mode";
const PACK_STORAGE_KEY = "koydo.theme.pack";
const AGE_GROUP_STORAGE_KEY = "koydo.theme.ageGroup";
const TYPOGRAPHY_DENSITY_STORAGE_KEY = "koydo.typography.density";

type ThemeContextValue = {
  themeMode: ThemeMode;
  resolvedTheme: ThemeResolved;
  themePack: ThemePack;
  ageGroup: AgeGroupTheme;
  motionPreference: MotionPreference;
  contrastPreference: ContrastPreference;
  typographyDensity: TypographyDensity;
  setThemeMode: (value: ThemeMode) => void;
  setThemePack: (value: ThemePack) => void;
  setAgeGroup: (value: AgeGroupTheme) => void;
  setTypographyDensity: (value: TypographyDensity) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getStoredMode(): ThemeMode {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(MODE_STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
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

function getStoredAgeGroup(): AgeGroupTheme {
  if (typeof window === "undefined") {
    return "standard";
  }
  const stored = window.localStorage.getItem(AGE_GROUP_STORAGE_KEY);
  if (
    stored === "standard"
    || stored === "tiny-explorer"
    || stored === "young-adventurer"
    || stored === "teen-mode"
    || stored === "adult-pro"
  ) {
    return stored as AgeGroupTheme;
  }
  return "standard";
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

function normalizeThemeMode(mode: ThemeMode): ThemeMode {
  return mode;
}

function resolveTheme(mode: ThemeMode): ThemeResolved {
  if (mode === "dark") return "dark";
  if (mode === "light") return "light";
  // system: detect OS preference
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
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
  ageGroup: AgeGroupTheme,
  typographyDensity: TypographyDensity
) {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themeMode = mode;
  document.documentElement.dataset.themePack = pack;
  if (ageGroup !== "standard") {
    document.documentElement.dataset.ageGroup = ageGroup;
  } else {
    delete document.documentElement.dataset.ageGroup;
  }
  document.documentElement.dataset.typographyDensity = typographyDensity;
  document.documentElement.dataset.motion = resolveMotionDatasetValue();
  document.documentElement.dataset.contrast = "standard";
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => getStoredMode());
  const [themePack, setThemePack] = useState<ThemePack>(() => getStoredPack());
  const [ageGroup, setAgeGroupState] = useState<AgeGroupTheme>(() => getStoredAgeGroup());
  const [typographyDensity, setTypographyDensity] = useState<TypographyDensity>(() =>
    getStoredTypographyDensity(),
  );
  const [systemDark, setSystemDark] = useState<boolean>(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  // Track OS dark mode preference reactively
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const setThemeMode = useCallback((value: ThemeMode) => {
    setThemeModeState(value);
  }, []);

  const setAgeGroup = useCallback((value: AgeGroupTheme) => {
    setAgeGroupState(value);
  }, []);

  const motionPreference: MotionPreference = "standard";
  const contrastPreference: ContrastPreference = "standard";
  const resolvedTheme = useMemo((): ThemeResolved => {
    if (themeMode === "dark") return "dark";
    if (themeMode === "light") return "light";
    return systemDark ? "dark" : "light";
  }, [themeMode, systemDark]);

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
            age_group?: AgeGroupTheme;
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
          setThemeModeState(normalizeThemeMode(payload.preferences.theme_mode));
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

        if (
          payload.preferences.age_group === "standard"
          || payload.preferences.age_group === "tiny-explorer"
          || payload.preferences.age_group === "young-adventurer"
          || payload.preferences.age_group === "teen-mode"
          || payload.preferences.age_group === "adult-pro"
        ) {
          setAgeGroupState(payload.preferences.age_group);
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
    window.localStorage.setItem(AGE_GROUP_STORAGE_KEY, ageGroup);
    window.localStorage.setItem(TYPOGRAPHY_DENSITY_STORAGE_KEY, typographyDensity);
    applyTheme(resolvedTheme, themeMode, themePack, ageGroup, typographyDensity);
  }, [themeMode, themePack, ageGroup, typographyDensity, resolvedTheme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      applyTheme(resolvedTheme, themeMode, themePack, ageGroup, typographyDensity);
    };

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, [themeMode, themePack, ageGroup, typographyDensity, resolvedTheme]);

  const value = useMemo(
    () => ({
      themeMode,
      resolvedTheme,
      themePack,
      ageGroup,
      motionPreference,
      contrastPreference,
      typographyDensity,
      setThemeMode,
      setThemePack,
      setAgeGroup,
      setTypographyDensity,
    }),
    [
      themeMode,
      resolvedTheme,
      themePack,
      ageGroup,
      motionPreference,
      contrastPreference,
      typographyDensity,
      setThemeMode,
      setAgeGroup,
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
