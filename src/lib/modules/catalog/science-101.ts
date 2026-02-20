import type { LearningModule } from "@/lib/modules/types";

export const science101Module: LearningModule = {
  id: "science-101",
  title: "Our Solar System",
  description: "Take a tour of our solar system and learn about the planets.",
  subject: "Science",
  tags: ["space", "astronomy"],
  minAge: 6,
  maxAge: 12,
  version: "1.0.0",
  lessons: [
    {
      id: "s101-l1",
      title: "The Sun and Inner Planets",
      type: "video",
      duration: 10,
    },
    {
      id: "s101-l2",
      title: "The Outer Planets",
      type: "video",
      duration: 12,
    },
    {
      id: "s101-l3",
      title: "Interactive: Orbit Simulator",
      type: "interactive",
      duration: 15,
    },
    {
      id: "s101-l4",
      title: "Quiz: Name the Planets",
      type: "quiz",
      duration: 8,
      questions: [
        {
          id: "s101-l4-q1",
          text: 'Which is the "Red Planet"?',
          skillId: "planet-identification",
          options: [
            { id: "a", text: "Jupiter" },
            { id: "b", text: "Mars" },
            { id: "c", text: "Venus" },
          ],
          correctOptionId: "b",
        },
      ],
    },
  ],
};
