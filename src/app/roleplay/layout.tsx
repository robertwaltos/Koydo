import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AI Roleplay — Practice Real-World Scenarios | Koydo",
  description: "Practice real-world scenarios with AI-powered roleplay simulations. Build communication, negotiation, and critical thinking skills.",
};

export default function RoleplayLayout({ children }: { children: ReactNode }) {
  return children;
}
