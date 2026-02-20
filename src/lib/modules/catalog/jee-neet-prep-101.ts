import type { LearningModule } from "@/lib/modules/types";

export const JeeNeetPrep101Module: LearningModule = {
  id: "jee-neet-prep-101",
  title: "JEE / NEET Prep Foundations",
  description: "Develop high-intensity PCM/PCB practice workflows for JEE and NEET.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 15,
  maxAge: 20,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured JEE and NEET readiness workflows",
    "Improve speed and accuracy under timed constraints",
    "Use analytics-based revision loops to close weak areas"
  ],
  lessons: [
    {
      id: "jee-neet-prep-101-l01",
      title: "JEE/NEET Pattern and Cutoff Basics",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "jee-neet-prep-101-l01-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for JEE/NEET Pattern and Cutoff Basics." },
        { id: "jee-neet-prep-101-l01-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of JEE/NEET Pattern and Cutoff Basics." }
      ]
    },
    {
      id: "jee-neet-prep-101-l02",
      title: "Physics Problem Frameworks",
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
        { id: "jee-neet-prep-101-l02-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Physics Problem Frameworks." },
        { id: "jee-neet-prep-101-l02-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Physics Problem Frameworks." }
      ]
    },
    {
      id: "jee-neet-prep-101-l03",
      title: "Chemistry Memory + Application",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "jee-neet-prep-101-l03-q1",
          text: "Which strategy best improves chemistry memory + application performance?",
          skillId: "jee-neet-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l03-q2",
          text: "What should you do after a timed drill?",
          skillId: "jee-neet-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l03-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "jee-neet-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l03-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "jee-neet-prep-101-skill-time",
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
        { id: "jee-neet-prep-101-l03-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Chemistry Memory + Application." },
        { id: "jee-neet-prep-101-l03-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Chemistry Memory + Application." }
      ]
    },
    {
      id: "jee-neet-prep-101-l04",
      title: "Math Track: Speed and Precision",
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
        { id: "jee-neet-prep-101-l04-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Math Track: Speed and Precision." },
        { id: "jee-neet-prep-101-l04-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Math Track: Speed and Precision." }
      ]
    },
    {
      id: "jee-neet-prep-101-l05",
      title: "Biology Track: NCERT Mastery",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "jee-neet-prep-101-l05-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Biology Track: NCERT Mastery." },
        { id: "jee-neet-prep-101-l05-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Biology Track: NCERT Mastery." }
      ]
    },
    {
      id: "jee-neet-prep-101-l06",
      title: "Question Selection Strategy",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "jee-neet-prep-101-l06-q1",
          text: "Which strategy best improves question selection strategy performance?",
          skillId: "jee-neet-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l06-q2",
          text: "What should you do after a timed drill?",
          skillId: "jee-neet-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l06-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "jee-neet-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l06-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "jee-neet-prep-101-skill-time",
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
        { id: "jee-neet-prep-101-l06-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Question Selection Strategy." },
        { id: "jee-neet-prep-101-l06-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Question Selection Strategy." }
      ]
    },
    {
      id: "jee-neet-prep-101-l07",
      title: "Negative Marking Risk Control",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "jee-neet-prep-101-l07-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Negative Marking Risk Control." },
        { id: "jee-neet-prep-101-l07-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Negative Marking Risk Control." }
      ]
    },
    {
      id: "jee-neet-prep-101-l08",
      title: "Timed Mixed Subject Drill",
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
        { id: "jee-neet-prep-101-l08-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Timed Mixed Subject Drill." },
        { id: "jee-neet-prep-101-l08-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Timed Mixed Subject Drill." }
      ]
    },
    {
      id: "jee-neet-prep-101-l09",
      title: "Mock Test Analysis Loop",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "jee-neet-prep-101-l09-q1",
          text: "Which strategy best improves mock test analysis loop performance?",
          skillId: "jee-neet-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l09-q2",
          text: "What should you do after a timed drill?",
          skillId: "jee-neet-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l09-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "jee-neet-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l09-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "jee-neet-prep-101-skill-time",
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
        { id: "jee-neet-prep-101-l09-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Mock Test Analysis Loop." },
        { id: "jee-neet-prep-101-l09-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Mock Test Analysis Loop." }
      ]
    },
    {
      id: "jee-neet-prep-101-l10",
      title: "Final 60-Day Exam Plan",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "jee-neet-prep-101-l10-q1",
          text: "Which strategy best improves final 60-day exam plan performance?",
          skillId: "jee-neet-prep-101-skill-strategy",
          options: [
            { id: "a", text: "Set a plan, practice, and review errors" },
            { id: "b", text: "Skip difficult items with no review" },
            { id: "c", text: "Memorize without application" },
            { id: "d", text: "Ignore timing constraints" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l10-q2",
          text: "What should you do after a timed drill?",
          skillId: "jee-neet-prep-101-skill-review",
          options: [
            { id: "a", text: "Analyze errors and classify root causes" },
            { id: "b", text: "Only record your score" },
            { id: "c", text: "Move on without reflection" },
            { id: "d", text: "Repeat mistakes unchanged" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l10-q3",
          text: "Which habit most improves exam consistency?",
          skillId: "jee-neet-prep-101-skill-consistency",
          options: [
            { id: "a", text: "Structured weekly cycles with targeted revision" },
            { id: "b", text: "Random topics daily without tracking" },
            { id: "c", text: "Last-minute cramming only" },
            { id: "d", text: "Avoiding full-length practice" }
          ],
          correctOptionId: "a"
        },
        {
          id: "jee-neet-prep-101-l10-q4",
          text: "What is the best time-management approach during tests?",
          skillId: "jee-neet-prep-101-skill-time",
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
        { id: "jee-neet-prep-101-l10-a1", type: "image", title: "Concept Snapshot", content: "Visual summary for Final 60-Day Exam Plan." },
        { id: "jee-neet-prep-101-l10-a2", type: "animation", title: "Animated Walkthrough", content: "Step-by-step explanation of Final 60-Day Exam Plan." }
      ]
    }
  ],
};
