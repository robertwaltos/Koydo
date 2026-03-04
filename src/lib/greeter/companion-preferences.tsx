"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type CompanionAvatarStyle = "human" | "animated";

interface CompanionPreferencesContextValue {
  avatarStyle: CompanionAvatarStyle;
  setAvatarStyle: (style: CompanionAvatarStyle) => void;
}

const CompanionPreferencesContext = createContext<CompanionPreferencesContextValue>({
  avatarStyle: "human",
  setAvatarStyle: () => {},
});

const LOCAL_KEY = "koydo.companion.avatar-style";

export function CompanionPreferencesProvider({ children }: { children: ReactNode }) {
  const [avatarStyle, setAvatarStyleState] = useState<CompanionAvatarStyle>("human");

  // Load from localStorage on mount, then try server preferences
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored === "human" || stored === "animated") {
      setAvatarStyleState(stored);
    }

    // Try to load from server preferences
    fetch("/api/user/preferences")
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { preferences?: { companion_avatar_style?: string } } | null) => {
        const serverStyle = data?.preferences?.companion_avatar_style;
        if (serverStyle === "human" || serverStyle === "animated") {
          setAvatarStyleState(serverStyle);
          localStorage.setItem(LOCAL_KEY, serverStyle);
        }
      })
      .catch(() => {
        // Not authenticated or network error — use localStorage value
      });
  }, []);

  const setAvatarStyle = useCallback((style: CompanionAvatarStyle) => {
    setAvatarStyleState(style);
    localStorage.setItem(LOCAL_KEY, style);

    // Persist to server (fire-and-forget)
    fetch("/api/user/preferences", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companion_avatar_style: style }),
    }).catch(() => {
      // Silent fail — localStorage is the source of truth for offline
    });
  }, []);

  return (
    <CompanionPreferencesContext.Provider value={{ avatarStyle, setAvatarStyle }}>
      {children}
    </CompanionPreferencesContext.Provider>
  );
}

export function useCompanionPreferences() {
  return useContext(CompanionPreferencesContext);
}
