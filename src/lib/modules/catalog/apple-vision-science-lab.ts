import type { LearningModule } from "@/lib/modules/types";

export const appleVisionScienceLabModule: LearningModule = {
  id: "science-vision-lab",
  title: "Apple Vision Science Lab",
  description:
    "Immersive science activities that start with capability checks and expand to AR modules.",
  subject: "Science",
  tags: ["immersive", "ar", "apple-vision"],
  minAge: 9,
  maxAge: 18,
  version: "0.1.0",
  lessons: [
    {
      id: "svl-l1",
      title: "Device Capability Check",
      type: "interactive",
      duration: 6,
      metadata: {
        route: "/science-lab",
      },
    },
  ],
};
