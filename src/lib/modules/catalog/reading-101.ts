import type { LearningModule } from "@/lib/modules/types";

export const reading101Module: LearningModule = {
  id: "reading-101",
  title: "The Alphabet",
  description: "Master the letters of the alphabet from A to Z.",
  subject: "Reading",
  tags: ["phonics", "literacy"],
  minAge: 4,
  maxAge: 9,
  version: "1.0.0",
  lessons: [
    { id: "r101-l1", title: "Letters A-M", type: "video", duration: 8 },
    { id: "r101-l2", title: "Letters N-Z", type: "video", duration: 9 },
    {
      id: "r101-l3",
      title: "Alphabet Song",
      type: "interactive",
      duration: 3,
    },
    {
      id: "r101-l4",
      title: "Quiz: Letter Sounds",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "r101-l4-q1",
          text: 'What sound does the letter "C" make?',
          skillId: "phonics",
          options: [
            { id: "a", text: "/s/" },
            { id: "b", text: "/k/" },
            { id: "c", text: "Both A and B" },
          ],
          correctOptionId: "c",
        },
      ],
    },
  ],
};
