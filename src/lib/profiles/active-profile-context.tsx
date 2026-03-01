"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { getActiveProfileIdFromBrowser, setActiveProfile as persistActiveProfile, clearActiveProfile as clearPersistedActiveProfile } from "./active-profile";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { type StudentProfile } from "@/lib/profiles/types";

interface ActiveProfileContextType {
  profile: StudentProfile | null;
  profileId: string | null;
  setProfile: (profile: StudentProfile) => void;
  clearProfile: () => void;
  isLoading: boolean;
}

const ActiveProfileContext = createContext<ActiveProfileContextType | undefined>(undefined);

export const ActiveProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [profileId, setProfileId] = useState<string | null>(() => getActiveProfileIdFromBrowser());
  const [isLoading, setIsLoading] = useState(() => profileId !== null);
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);

  const fetchProfile = useCallback(async (id: string) => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("student_profiles")
      .select("id, display_name, grade_level, avatar_url, ai_skill_level_map")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching active profile:", error);
      setProfile(null);
      clearPersistedActiveProfile();
    } else {
      setProfile(data as StudentProfile);
    }
    setIsLoading(false);
  }, [supabase]);

  useEffect(() => {
    if (!profileId) {
      return;
    }
    const timer = window.setTimeout(() => {
      void fetchProfile(profileId);
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchProfile, profileId]);

  const handleSetProfile = (newProfile: StudentProfile) => {
    setProfile(newProfile);
    setProfileId(newProfile.id);
    persistActiveProfile(newProfile.id);
  };

  const handleClearProfile = () => {
    setProfile(null);
    setProfileId(null);
    clearPersistedActiveProfile();
  };

  return (
    <ActiveProfileContext.Provider value={{ profile, profileId, setProfile: handleSetProfile, clearProfile: handleClearProfile, isLoading }}>
      {children}
    </ActiveProfileContext.Provider>
  );
};

export function useActiveProfile() {
  const context = useContext(ActiveProfileContext);
  if (context === undefined) {
    throw new Error("useActiveProfile must be used within an ActiveProfileProvider");
  }
  return context;
}
