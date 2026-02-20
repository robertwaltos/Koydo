import type { LearningModule } from "@/lib/modules/types";

export const math101Module: LearningModule = {
  id: "math-101",
  title: "Introduction to Counting",
  description: "Build counting confidence from 1 to 10 and transition into first-step addition strategies.",
  subject: "Math",
  tags: ["foundations", "numbers", "interactive"],
  minAge: 4,
  maxAge: 8,
  version: "1.1.0",
  learningObjectives: [
    "Count objects accurately from 1 to 10.",
    "Match numerals to object groups and number-line positions.",
    "Solve simple joining stories using numbers up to 10.",
  ],
  lessons: [
    {
      id: "m101-l1",
      title: "Counting Sets 1-5",
      type: "video",
      duration: 6,
      learningAids: [
        { id: "m101-l1-a1", type: "image", title: "Dot Cards 1-5", content: "Use quick-look dot cards to count objects without recounting." },
        { id: "m101-l1-a2", type: "mnemonic", title: "Touch and Count", content: "Point once, say once, and move to the next object." },
      ],
    },
    {
      id: "m101-l2",
      title: "Interactive: Build Groups 1-5",
      type: "interactive",
      duration: 8,
      metadata: {
        prompts: [
          "Build a group of exactly 4 objects and explain how you checked.",
          "Make two groups that both show 5 in different ways.",
          "Describe what happens if you add one object to a group of 3.",
        ],
      },
      learningAids: [
        { id: "m101-l2-a1", type: "practice", title: "Counting Mat", content: "Drag objects into a five-frame and count aloud." },
      ],
    },
    {
      id: "m101-l3",
      title: "Checkpoint Quiz: Numbers 1-5",
      type: "quiz",
      duration: 9,
      questions: [
        {
          id: "m101-l3-q1",
          text: "Which numeral matches a group of four stars?",
          skillId: "counting-1-5",
          options: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctOptionId: "b",
        },
        {
          id: "m101-l3-q2",
          text: "What number comes right after 2?",
          skillId: "number-sequence",
          options: [
            { id: "a", text: "1" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctOptionId: "b",
        },
        {
          id: "m101-l3-q3",
          text: "Which set has exactly five objects?",
          skillId: "counting-1-5",
          options: [
            { id: "a", text: "2 objects" },
            { id: "b", text: "4 objects" },
            { id: "c", text: "5 objects" },
            { id: "d", text: "6 objects" },
          ],
          correctOptionId: "c",
        },
        {
          id: "m101-l3-q4",
          text: "How many more objects do you need to turn 3 into 5?",
          skillId: "part-part-whole",
          options: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ],
          correctOptionId: "b",
        },
      ],
      learningAids: [
        { id: "m101-l3-a1", type: "practice", title: "Quick Count Cards", content: "Answer 8 rapid card prompts for numbers 1-5." },
      ],
    },
    {
      id: "m101-l4",
      title: "Counting Sets 6-10",
      type: "video",
      duration: 7,
      learningAids: [
        { id: "m101-l4-a1", type: "image", title: "Ten-Frame Poster", content: "Use a ten-frame to visualize numbers 6 through 10." },
        { id: "m101-l4-a2", type: "animation", title: "Count Up to Ten", content: "Animated objects appear one-by-one up to 10." },
      ],
    },
    {
      id: "m101-l5",
      title: "Interactive: Number Line Jumps",
      type: "interactive",
      duration: 9,
      metadata: {
        prompts: [
          "Start at 6 and jump forward 3 spaces. Where do you land?",
          "Show two different jumps that land on 10.",
          "Explain how the number line helps you count without recounting objects.",
        ],
      },
      learningAids: [
        { id: "m101-l5-a1", type: "practice", title: "Number Line Board", content: "Tap jumps on a 0-10 line to solve movement prompts." },
      ],
    },
    {
      id: "m101-l6",
      title: "Checkpoint Quiz: Numbers 6-10",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "m101-l6-q1",
          text: "Which number is one more than 7?",
          skillId: "number-sequence",
          options: [
            { id: "a", text: "6" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
            { id: "d", text: "10" },
          ],
          correctOptionId: "b",
        },
        {
          id: "m101-l6-q2",
          text: "What number comes just before 10?",
          skillId: "number-sequence",
          options: [
            { id: "a", text: "7" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
            { id: "d", text: "11" },
          ],
          correctOptionId: "c",
        },
        {
          id: "m101-l6-q3",
          text: "Which set shows exactly 8 objects?",
          skillId: "counting-6-10",
          options: [
            { id: "a", text: "6 objects" },
            { id: "b", text: "7 objects" },
            { id: "c", text: "8 objects" },
            { id: "d", text: "10 objects" },
          ],
          correctOptionId: "c",
        },
        {
          id: "m101-l6-q4",
          text: "How many do you add to 6 to make 10?",
          skillId: "part-part-whole",
          options: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctOptionId: "c",
        },
      ],
      learningAids: [
        { id: "m101-l6-a1", type: "mnemonic", title: "Make Ten Trick", content: "Think: 6 needs 4 friends to make 10." },
      ],
    },
    {
      id: "m101-l7",
      title: "Video: Joining Stories",
      type: "video",
      duration: 7,
      learningAids: [
        { id: "m101-l7-a1", type: "image", title: "Story Math Cards", content: "Picture cards show joining scenarios for numbers up to 10." },
      ],
    },
    {
      id: "m101-l8",
      title: "Mastery Quiz: Counting and Early Addition",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "m101-l8-q1",
          text: "What is 5 + 3?",
          skillId: "addition-single-digit",
          options: [
            { id: "a", text: "7" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
            { id: "d", text: "10" },
          ],
          correctOptionId: "b",
        },
        {
          id: "m101-l8-q2",
          text: "If you have 9 apples and eat 1, how many are left?",
          skillId: "subtraction-single-digit",
          options: [
            { id: "a", text: "7" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
            { id: "d", text: "10" },
          ],
          correctOptionId: "b",
        },
        {
          id: "m101-l8-q3",
          text: "Which number sentence matches a group of 4 and a group of 2?",
          skillId: "addition-single-digit",
          options: [
            { id: "a", text: "4 + 2 = 6" },
            { id: "b", text: "4 + 2 = 5" },
            { id: "c", text: "4 + 2 = 7" },
            { id: "d", text: "4 + 2 = 8" },
          ],
          correctOptionId: "a",
        },
        {
          id: "m101-l8-q4",
          text: "What number is between 6 and 8?",
          skillId: "number-sequence",
          options: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctOptionId: "c",
        },
        {
          id: "m101-l8-q5",
          text: "How many more do you need to make 10 if you have 8?",
          skillId: "part-part-whole",
          options: [
            { id: "a", text: "1" },
            { id: "b", text: "2" },
            { id: "c", text: "3" },
            { id: "d", text: "4" },
          ],
          correctOptionId: "b",
        },
      ],
    },
  ],
};
