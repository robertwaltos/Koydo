import type { LearningModule } from "@/lib/modules/types";

export const ApPrep101Module: LearningModule = {
  id: "ap-prep-101",
  title: "AP Exam Prep Toolkit",
  description: "Master AP-style multiple-choice and free-response performance strategies.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 14,
  maxAge: 19,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured AP exam success workflows",
    "Improve speed and accuracy under timed constraints",
    "Use analytics-based revision loops to close weak areas"
  ],
  lessons: [
    {
      id: "ap-prep-101-l01",
      title: "AP Exam Formats by Subject",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "ap-prep-101-l01-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for AP Exam Formats by Subject." },
        { id: "ap-prep-101-l01-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of AP Exam Formats by Subject." }
      ]
    },
    {
      id: "ap-prep-101-l02",
      title: "AP Multiple-Choice Strategy",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Summarize the key strategy in your own words.",
          "Apply it to one sample question.",
          "Write one improvement target for your next session."
        ]
      },
      learningAids: [
        { id: "ap-prep-101-l02-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for AP Multiple-Choice Strategy." },
        { id: "ap-prep-101-l02-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of AP Multiple-Choice Strategy." }
      ]
    },
    {
      id: "ap-prep-101-l03",
      title: "Free-Response Planning",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "ap-prep-101-l03-q1",
          text: "Which strategy best improves free-response planning performance?",
          skillId: "ap-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l03-q2",
          text: "What should you do after a timed drill?",
          skillId: "ap-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l03-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "ap-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l03-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "ap-prep-101-skill-time",
          options: [
            { id: "a", text: "Budget time per section and checkpoint progress" },
            { id: "b", text: "Spend most time on first question" },
            { id: "c", text: "Ignore section timing" },
            { id: "d", text: "Answer without reading carefully" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "ap-prep-101-l03-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Free-Response Planning." },
        { id: "ap-prep-101-l03-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Free-Response Planning." }
      ]
    },
    {
      id: "ap-prep-101-l04",
      title: "Evidence and Explanation Quality",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Summarize the key strategy in your own words.",
          "Apply it to one sample question.",
          "Write one improvement target for your next session."
        ]
      },
      learningAids: [
        { id: "ap-prep-101-l04-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Evidence and Explanation Quality." },
        { id: "ap-prep-101-l04-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Evidence and Explanation Quality." }
      ]
    },
    {
      id: "ap-prep-101-l05",
      title: "Scoring Rubric Deep Dive",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "ap-prep-101-l05-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Scoring Rubric Deep Dive." },
        { id: "ap-prep-101-l05-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Scoring Rubric Deep Dive." }
      ]
    },
    {
      id: "ap-prep-101-l06",
      title: "Time Management in FRQ",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "ap-prep-101-l06-q1",
          text: "Which strategy best improves time management in frq performance?",
          skillId: "ap-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l06-q2",
          text: "What should you do after a timed drill?",
          skillId: "ap-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l06-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "ap-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l06-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "ap-prep-101-skill-time",
          options: [
            { id: "a", text: "Budget time per section and checkpoint progress" },
            { id: "b", text: "Spend most time on first question" },
            { id: "c", text: "Ignore section timing" },
            { id: "d", text: "Answer without reading carefully" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "ap-prep-101-l06-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Time Management in FRQ." },
        { id: "ap-prep-101-l06-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Time Management in FRQ." }
      ]
    },
    {
      id: "ap-prep-101-l07",
      title: "Common Pitfalls and Fixes",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "ap-prep-101-l07-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Common Pitfalls and Fixes." },
        { id: "ap-prep-101-l07-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Common Pitfalls and Fixes." }
      ]
    },
    {
      id: "ap-prep-101-l08",
      title: "Practice Set: MCQ",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Summarize the key strategy in your own words.",
          "Apply it to one sample question.",
          "Write one improvement target for your next session."
        ]
      },
      learningAids: [
        { id: "ap-prep-101-l08-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Practice Set: MCQ." },
        { id: "ap-prep-101-l08-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Practice Set: MCQ." }
      ]
    },
    {
      id: "ap-prep-101-l09",
      title: "Practice Set: FRQ",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "ap-prep-101-l09-q1",
          text: "Which strategy best improves practice set: frq performance?",
          skillId: "ap-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l09-q2",
          text: "What should you do after a timed drill?",
          skillId: "ap-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l09-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "ap-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l09-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "ap-prep-101-skill-time",
          options: [
            { id: "a", text: "Budget time per section and checkpoint progress" },
            { id: "b", text: "Spend most time on first question" },
            { id: "c", text: "Ignore section timing" },
            { id: "d", text: "Answer without reading carefully" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "ap-prep-101-l09-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Practice Set: FRQ." },
        { id: "ap-prep-101-l09-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Practice Set: FRQ." }
      ]
    },
    {
      id: "ap-prep-101-l10",
      title: "Mock AP Session and Reflection",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "ap-prep-101-l10-q1",
          text: "Which strategy best improves mock ap session and reflection performance?",
          skillId: "ap-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l10-q2",
          text: "What should you do after a timed drill?",
          skillId: "ap-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l10-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "ap-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "ap-prep-101-l10-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "ap-prep-101-skill-time",
          options: [
            { id: "a", text: "Budget time per section and checkpoint progress" },
            { id: "b", text: "Spend most time on first question" },
            { id: "c", text: "Ignore section timing" },
            { id: "d", text: "Answer without reading carefully" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "ap-prep-101-l10-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Mock AP Session and Reflection." },
        { id: "ap-prep-101-l10-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Mock AP Session and Reflection." }
      ]
    }
  ],
};
