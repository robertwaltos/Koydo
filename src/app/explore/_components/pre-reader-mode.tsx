"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const PRE_READER_STORAGE_KEY = "koydo.explore.pre_reader_mode";

type PreReaderModeContextValue = {
  isPreReaderMode: boolean;
  setPreReaderMode: (next: boolean) => void;
  togglePreReaderMode: () => void;
};

const PreReaderModeContext = createContext<PreReaderModeContextValue | null>(
  null,
);

export function PreReaderModeProvider({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isPreReaderMode, setIsPreReaderMode] = useState(true);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(PRE_READER_STORAGE_KEY);
      if (stored === "true") setIsPreReaderMode(true);
      if (stored === "false") setIsPreReaderMode(false);
    } catch {
      // Keep safe default when storage is unavailable.
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(
        PRE_READER_STORAGE_KEY,
        isPreReaderMode ? "true" : "false",
      );
    } catch {
      // Non-blocking persistence.
    }
  }, [isHydrated, isPreReaderMode]);

  const value = useMemo<PreReaderModeContextValue>(
    () => ({
      isPreReaderMode,
      setPreReaderMode: setIsPreReaderMode,
      togglePreReaderMode: () => setIsPreReaderMode((prev) => !prev),
    }),
    [isPreReaderMode],
  );

  return (
    <PreReaderModeContext.Provider value={value}>
      <div data-pre-reader-mode={isPreReaderMode ? "on" : "off"}>
        {children}
      </div>
    </PreReaderModeContext.Provider>
  );
}

export function usePreReaderMode() {
  const context = useContext(PreReaderModeContext);
  if (!context) {
    throw new Error("usePreReaderMode must be used inside PreReaderModeProvider");
  }
  return context;
}
