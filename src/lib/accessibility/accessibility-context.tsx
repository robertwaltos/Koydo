"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type AccessibilitySettings = {
  fontSize: "normal" | "large" | "x-large";
  highContrast: boolean;
  reducedMotion: boolean;
  dyslexiaFont: boolean;
};

const DEFAULTS: AccessibilitySettings = {
  fontSize: "normal",
  highContrast: false,
  reducedMotion: false,
  dyslexiaFont: false,
};

const STORAGE_KEY = "koydo.a11y";

type AccessibilityContextType = {
  settings: AccessibilitySettings;
  update: (patch: Partial<AccessibilitySettings>) => void;
  reset: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULTS);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setSettings({ ...DEFAULTS, ...JSON.parse(stored) });
    } catch { /* ignore */ }
  }, []);

  // Apply CSS classes to <html>
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("a11y-large", settings.fontSize === "large");
    html.classList.toggle("a11y-xlarge", settings.fontSize === "x-large");
    html.classList.toggle("a11y-high-contrast", settings.highContrast);
    html.classList.toggle("a11y-reduced-motion", settings.reducedMotion);
    html.classList.toggle("a11y-dyslexia-font", settings.dyslexiaFont);
  }, [settings]);

  const update = useCallback((patch: Partial<AccessibilitySettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setSettings(DEFAULTS);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  }, []);

  const value = useMemo(() => ({ settings, update, reset }), [settings, update, reset]);

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) throw new Error("useAccessibility must be inside AccessibilityProvider");
  return ctx;
}
