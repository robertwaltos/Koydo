import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "StoryForge Cinema — AI-Powered Story Films | Koydo",
  description: "Watch AI-generated cinematic adaptations of classic public-domain stories. Literature brought to life with immersive visuals and narration.",
  openGraph: {
    title: "StoryForge Cinema — AI Story Films | Koydo",
    description: "AI-generated cinematic adaptations of classic stories brought to life.",
  },
};

export default function StoryForgeLayout({ children }: { children: ReactNode }) {
  return children;
}
