import type { LearningModule } from "@/lib/modules/types";

export const GcsePrep101Module: LearningModule = {
  id: "gcse-prep-101",
  title: "GCSE Prep Foundations",
  description: "Prepare for GCSE core papers with structured revision and exam technique.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 14,
  maxAge: 18,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured GCSE readiness workflows",
    "Improve speed and accuracy under timed constraints",
    "Use analytics-based revision loops to close weak areas"
  ],
  lessons: [
    {
      id: "gcse-prep-101-l01",
      title: "GCSE Pathway Planning",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "gcse-prep-101-l01-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for GCSE Pathway Planning." },
        { id: "gcse-prep-101-l01-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of GCSE Pathway Planning." }
      ]
    },
    {
      id: "gcse-prep-101-l02",
      title: "English Language Techniques",
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
        { id: "gcse-prep-101-l02-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for English Language Techniques." },
        { id: "gcse-prep-101-l02-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of English Language Techniques." }
      ]
    },
    {
      id: "gcse-prep-101-l03",
      title: "Math Non-Calculator Skills",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "gcse-prep-101-l03-q1",
          text: "Which strategy best improves math non-calculator skills performance?",
          skillId: "gcse-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l03-q2",
          text: "What should you do after a timed drill?",
          skillId: "gcse-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l03-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "gcse-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l03-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "gcse-prep-101-skill-time",
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
        { id: "gcse-prep-101-l03-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Math Non-Calculator Skills." },
        { id: "gcse-prep-101-l03-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Math Non-Calculator Skills." }
      ]
    },
    {
      id: "gcse-prep-101-l04",
      title: "Math Calculator Skills",
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
        { id: "gcse-prep-101-l04-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Math Calculator Skills." },
        { id: "gcse-prep-101-l04-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Math Calculator Skills." }
      ]
    },
    {
      id: "gcse-prep-101-l05",
      title: "Science Command Words",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "gcse-prep-101-l05-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Science Command Words." },
        { id: "gcse-prep-101-l05-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Science Command Words." }
      ]
    },
    {
      id: "gcse-prep-101-l06",
      title: "Structured Long Answers",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "gcse-prep-101-l06-q1",
          text: "Which strategy best improves structured long answers performance?",
          skillId: "gcse-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l06-q2",
          text: "What should you do after a timed drill?",
          skillId: "gcse-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l06-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "gcse-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l06-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "gcse-prep-101-skill-time",
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
        { id: "gcse-prep-101-l06-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Structured Long Answers." },
        { id: "gcse-prep-101-l06-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Structured Long Answers." }
      ]
    },
    {
      id: "gcse-prep-101-l07",
      title: "Revision Timetable Execution",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "gcse-prep-101-l07-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Revision Timetable Execution." },
        { id: "gcse-prep-101-l07-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Revision Timetable Execution." }
      ]
    },
    {
      id: "gcse-prep-101-l08",
      title: "Past Paper Strategy",
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
        { id: "gcse-prep-101-l08-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Past Paper Strategy." },
        { id: "gcse-prep-101-l08-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Past Paper Strategy." }
      ]
    },
    {
      id: "gcse-prep-101-l09",
      title: "Exam-Day Readiness",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "gcse-prep-101-l09-q1",
          text: "Which strategy best improves exam-day readiness performance?",
          skillId: "gcse-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l09-q2",
          text: "What should you do after a timed drill?",
          skillId: "gcse-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l09-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "gcse-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l09-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "gcse-prep-101-skill-time",
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
        { id: "gcse-prep-101-l09-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Exam-Day Readiness." },
        { id: "gcse-prep-101-l09-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Exam-Day Readiness." }
      ]
    },
    {
      id: "gcse-prep-101-l10",
      title: "Full Mock Cycle and Review",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "gcse-prep-101-l10-q1",
          text: "Which strategy best improves full mock cycle and review performance?",
          skillId: "gcse-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l10-q2",
          text: "What should you do after a timed drill?",
          skillId: "gcse-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l10-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "gcse-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "gcse-prep-101-l10-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "gcse-prep-101-skill-time",
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
        { id: "gcse-prep-101-l10-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Full Mock Cycle and Review." },
        { id: "gcse-prep-101-l10-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Full Mock Cycle and Review." }
      ]
    }
  ],
};
