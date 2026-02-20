import type { LearningModule } from "@/lib/modules/types";

export const PreKArts101Module: LearningModule = {
  id: "pre-k-arts-101",
  title: "Pre-K Creative Arts Studio",
  description: "Play-based Pre-K module for arts with family-friendly practice and simple checks for understanding.",
  subject: "Arts",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Recognize key arts ideas through stories and visuals",
    "Practice arts in guided play and short activities",
    "Build confidence through frequent low-stakes checkpoints"
  ],
  lessons: [
    {
      id: "pre-k-arts-101-l01",
      title: "Welcome to Creative Arts Studio",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "pre-k-arts-101-l01-a1", type: "image", title: "Picture Story Card", content: "Color visual showing color, rhythm, and imagination." },
        { id: "pre-k-arts-101-l01-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing color, rhythm, and imagination with simple narration." }
      ]
    },
    {
      id: "pre-k-arts-101-l02",
      title: "Guided Play: Creative Arts Studio",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about color mixing.",
          "Show how you would practice color mixing at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      learningAids: [
        { id: "pre-k-arts-101-l02-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for color mixing with caregiver support." }
      ]
    },
    {
      id: "pre-k-arts-101-l03",
      title: "Checkpoint: Core Idea (Creative Arts Studio)",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-arts-101-l03-q1",
          text: "Which choice best matches color mixing?",
          skillId: "pre-k-arts-101-skill-core",
          options: [
            { id: "a", text: "The example that shows color mixing clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l03-q2",
          text: "What helps you learn color, rhythm, and imagination best?",
          skillId: "pre-k-arts-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l03-q3",
          text: "Which option uses rhythm patterns correctly?",
          skillId: "pre-k-arts-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to rhythm patterns" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l03-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-arts-101-skill-review",
          options: [
            { id: "a", text: "Review helps memory grow stronger over time" },
            { id: "b", text: "Review makes learning harder every time" },
            { id: "c", text: "Review removes key ideas" },
            { id: "d", text: "Review has no value for learners" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "pre-k-arts-101-l03-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every color, rhythm, and imagination challenge." }
      ]
    },
    {
      id: "pre-k-arts-101-l04",
      title: "Story and Example Time: Creative Arts Studio",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "pre-k-arts-101-l04-a1", type: "image", title: "Picture Story Card", content: "Color visual showing color mixing." },
        { id: "pre-k-arts-101-l04-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing color mixing with simple narration." }
      ]
    },
    {
      id: "pre-k-arts-101-l05",
      title: "Hands-On Practice: Creative Arts Studio",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about rhythm patterns.",
          "Show how you would practice rhythm patterns at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      learningAids: [
        { id: "pre-k-arts-101-l05-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for rhythm patterns with caregiver support." }
      ]
    },
    {
      id: "pre-k-arts-101-l06",
      title: "Checkpoint: Practice Skills (Creative Arts Studio)",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-arts-101-l06-q1",
          text: "Which choice best matches color mixing?",
          skillId: "pre-k-arts-101-skill-core",
          options: [
            { id: "a", text: "The example that shows color mixing clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l06-q2",
          text: "What helps you learn color, rhythm, and imagination best?",
          skillId: "pre-k-arts-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l06-q3",
          text: "Which option uses rhythm patterns correctly?",
          skillId: "pre-k-arts-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to rhythm patterns" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l06-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-arts-101-skill-review",
          options: [
            { id: "a", text: "Review helps memory grow stronger over time" },
            { id: "b", text: "Review makes learning harder every time" },
            { id: "c", text: "Review removes key ideas" },
            { id: "d", text: "Review has no value for learners" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "pre-k-arts-101-l06-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every color, rhythm, and imagination challenge." }
      ]
    },
    {
      id: "pre-k-arts-101-l07",
      title: "Build and Create: Creative Arts Studio",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "pre-k-arts-101-l07-a1", type: "image", title: "Picture Story Card", content: "Color visual showing color, rhythm, and imagination." },
        { id: "pre-k-arts-101-l07-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing color, rhythm, and imagination with simple narration." }
      ]
    },
    {
      id: "pre-k-arts-101-l08",
      title: "Reflection Circle: Creative Arts Studio",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about color mixing.",
          "Show how you would practice color mixing at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      learningAids: [
        { id: "pre-k-arts-101-l08-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for color mixing with caregiver support." }
      ]
    },
    {
      id: "pre-k-arts-101-l09",
      title: "Review Game: Creative Arts Studio",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-arts-101-l09-q1",
          text: "Which choice best matches color mixing?",
          skillId: "pre-k-arts-101-skill-core",
          options: [
            { id: "a", text: "The example that shows color mixing clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l09-q2",
          text: "What helps you learn color, rhythm, and imagination best?",
          skillId: "pre-k-arts-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l09-q3",
          text: "Which option uses rhythm patterns correctly?",
          skillId: "pre-k-arts-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to rhythm patterns" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l09-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-arts-101-skill-review",
          options: [
            { id: "a", text: "Review helps memory grow stronger over time" },
            { id: "b", text: "Review makes learning harder every time" },
            { id: "c", text: "Review removes key ideas" },
            { id: "d", text: "Review has no value for learners" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "pre-k-arts-101-l09-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every color, rhythm, and imagination challenge." }
      ]
    },
    {
      id: "pre-k-arts-101-l10",
      title: "Celebration Quiz: Creative Arts Studio",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-arts-101-l10-q1",
          text: "Which choice best matches color mixing?",
          skillId: "pre-k-arts-101-skill-core",
          options: [
            { id: "a", text: "The example that shows color mixing clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l10-q2",
          text: "What helps you learn color, rhythm, and imagination best?",
          skillId: "pre-k-arts-101-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l10-q3",
          text: "Which option uses rhythm patterns correctly?",
          skillId: "pre-k-arts-101-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to rhythm patterns" }
          ],
          correctOptionId: "a"
        },
        {
          id: "pre-k-arts-101-l10-q4",
          text: "Why do we review this topic more than once?",
          skillId: "pre-k-arts-101-skill-review",
          options: [
            { id: "a", text: "Review helps memory grow stronger over time" },
            { id: "b", text: "Review makes learning harder every time" },
            { id: "c", text: "Review removes key ideas" },
            { id: "d", text: "Review has no value for learners" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "pre-k-arts-101-l10-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every color, rhythm, and imagination challenge." }
      ]
    }
  ],
};
