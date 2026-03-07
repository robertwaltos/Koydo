import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Experience Hub — Interactive Learning Experiences | Koydo",
  description: "Discover interactive learning experiences including games, simulations, challenges, and creative tools. Gamified education for every age and subject.",
};

export default function ExperienceHubLayout({ children }: { children: ReactNode }) {
  return children;
}
