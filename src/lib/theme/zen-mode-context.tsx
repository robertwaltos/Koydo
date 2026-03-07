"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const ZEN_STORAGE_KEY = "koydo.zen.mode";

type ZenModeContextValue = {
  isZenMode: boolean;
  setZenMode: (next: boolean) => void;
  toggleZenMode: () => void;
};

const ZenModeContext = createContext<ZenModeContextValue | null>(null);

export function ZenModeProvider({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isZenMode, setIsZenMode] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(ZEN_STORAGE_KEY);
      if (stored === "true") setIsZenMode(true);
    } catch {
      // Keep default when storage is unavailable.
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(ZEN_STORAGE_KEY, isZenMode ? "true" : "false");
    } catch {
      // Non-blocking persistence.
    }
  }, [isHydrated, isZenMode]);

  const value = useMemo<ZenModeContextValue>(
    () => ({
      isZenMode,
      setZenMode: setIsZenMode,
      toggleZenMode: () => setIsZenMode((prev) => !prev),
    }),
    [isZenMode],
  );

  return (
    <ZenModeContext.Provider value={value}>
      <div data-zen-mode={isZenMode ? "on" : "off"}>
        {children}
      </div>
    </ZenModeContext.Provider>
  );
}

export function useZenMode() {
  const context = useContext(ZenModeContext);
  if (!context) {
    throw new Error("useZenMode must be used inside ZenModeProvider");
  }
  return context;
}
