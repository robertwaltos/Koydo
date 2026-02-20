import type { LearningModule } from "@/lib/modules/types";

export const math101Module: LearningModule = {
  id: "math-101",
  title: "Introduction to Counting",
  description:
    "Learn the basics of counting from 1 to 10 with fun interactive exercises.",
  subject: "Math",
  tags: ["foundations", "numbers"],
  minAge: 4,
  maxAge: 8,
  version: "1.0.0",
  lessons: [
    { id: "m101-l1", title: "Counting 1-5", type: "video", duration: 5 },
    {
      id: "m101-l2",
      title: "Quiz: Numbers 1-5",
      type: "quiz",
      duration: 7,
      questions: [
        {
          id: "m101-l2-q1",
          text: "How many apples do you see?",
          skillId: "counting-1-5",
          options: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
          ],
          correctOptionId: "b",
        },
        {
          id: "m101-l2-q2",
          text: "Which number comes after 2?",
          skillId: "number-sequence",
          options: [
            { id: "a", text: "1" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
          ],
          correctOptionId: "b",
        },
      ],
    },
    {
      id: "m101-l3",
      title: "Counting 6-10",
      type: "interactive",
      duration: 10,
    },
    {
      id: "m101-l4",
      title: "Final Quiz: Numbers 1-10",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "m101-l4-q1",
          text: "What is 5 + 3?",
          skillId: "addition-single-digit",
          options: [
            { id: "a", text: "7" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
          ],
          correctOptionId: "b",
        },
      ],
    },
  ],
};
