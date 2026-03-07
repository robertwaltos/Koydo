import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Voyager Zero — Immersive VR/AR Learning Simulations | Koydo",
  description: "Step inside the lesson with high-fidelity immersive VR and AR simulations designed for spatial computing and next-gen discovery.",
  openGraph: {
    title: "Voyager Zero — VR/AR Learning Simulations | Koydo",
    description: "High-fidelity immersive VR and AR learning simulations for spatial computing.",
  },
};

export default function VRLayout({ children }: { children: ReactNode }) {
  return children;
}
