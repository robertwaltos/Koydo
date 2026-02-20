import type { LearningModule } from "@/lib/modules/types";

export const Arts101Module: LearningModule = {
  id: "arts-101",
  title: "Creative Arts Studio",
  description: "Practice visual arts, music, design, and creative expression across mediums.",
  subject: "Arts",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  moduleVersion: "1.1.0",
  version: "1.1.0",
  learningObjectives: [
    "Understand core concepts in Arts",
    "Apply Creative Process strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  lessons: [
    {
      id: "arts-101-l01",
      title: "Elements of Art",
      type: "video",
      duration: 10,
      learningAids: [
        { id: "arts-101-l01-a1", type: "image", title: "Concept Poster", content: "A colorful infographic about color theory and composition." },
        { id: "arts-101-l01-a2", type: "animation", title: "Warm-up Animation", content: "Short animation introducing Arts vocabulary." }
      ]
    },
    {
      id: "arts-101-l02",
      title: "Color and Composition",
      type: "interactive",
      duration: 12,
      metadata: {
        prompts: [
          "Identify one core idea from this lesson.",
          "Explain how that idea appears in real life.",
          "Describe one question you still have."
        ]
      },
      learningAids: [
        { id: "arts-101-l02-a1", type: "practice", title: "Try It Board", content: "Complete a guided activity on composition and write one reflection." }
      ]
    },
    {
      id: "arts-101-l03",
      title: "Checkpoint: Visual Language",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "arts-101-l03-q1",
          text: "Which statement best explains color theory in Arts?",
          skillId: "arts-101-skill-core",
          options: [
            { id: "a", text: "A principle supported by lesson evidence" },
            { id: "b", text: "A claim with no support" },
            { id: "c", text: "A topic from a different unit" },
            { id: "d", text: "None of the above" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l03-q2",
          text: "What is the best first step when analyzing composition?",
          skillId: "arts-101-skill-process",
          options: [
            { id: "a", text: "Identify key evidence and define the goal" },
            { id: "b", text: "Guess quickly" },
            { id: "c", text: "Skip the question" },
            { id: "d", text: "Use no evidence" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l03-q3",
          text: "Which option shows strong reasoning about creative expression?",
          skillId: "arts-101-skill-reasoning",
          options: [
            { id: "a", text: "Citing examples and checking assumptions" },
            { id: "b", text: "Ignoring key details" },
            { id: "c", text: "Using unrelated assumptions" },
            { id: "d", text: "Changing the topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l03-q4",
          text: "Why is spaced review useful for Arts mastery?",
          skillId: "arts-101-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "arts-101-l03-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "arts-101-l04",
      title: "Music and Rhythm",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "arts-101-l04-a1", type: "image", title: "Worked Example Sheet", content: "Step-by-step visuals for rhythm scenarios." }
      ]
    },
    {
      id: "arts-101-l05",
      title: "Design Thinking Basics",
      type: "interactive",
      duration: 13,
      metadata: {
        prompts: [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      learningAids: [
        { id: "arts-101-l05-a1", type: "animation", title: "Challenge Walkthrough", content: "Animated sequence for solving a rhythm challenge." }
      ]
    },
    {
      id: "arts-101-l06",
      title: "Checkpoint: Creative Process",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "arts-101-l06-q1",
          text: "Which statement best explains rhythm in Arts?",
          skillId: "arts-101-skill-core",
          options: [
            { id: "a", text: "A principle supported by lesson evidence" },
            { id: "b", text: "A claim with no support" },
            { id: "c", text: "A topic from a different unit" },
            { id: "d", text: "None of the above" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l06-q2",
          text: "What is the best first step when analyzing critique?",
          skillId: "arts-101-skill-process",
          options: [
            { id: "a", text: "Identify key evidence and define the goal" },
            { id: "b", text: "Guess quickly" },
            { id: "c", text: "Skip the question" },
            { id: "d", text: "Use no evidence" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l06-q3",
          text: "Which option shows strong reasoning about creative expression?",
          skillId: "arts-101-skill-reasoning",
          options: [
            { id: "a", text: "Citing examples and checking assumptions" },
            { id: "b", text: "Ignoring key details" },
            { id: "c", text: "Using unrelated assumptions" },
            { id: "d", text: "Changing the topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l06-q4",
          text: "Why is spaced review useful for Arts mastery?",
          skillId: "arts-101-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "arts-101-l06-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "arts-101-l07",
      title: "Art History Snapshot",
      type: "video",
      duration: 12,
      learningAids: [
        { id: "arts-101-l07-a1", type: "practice", title: "Project Planner", content: "Template for planning a mini project focused on critique." }
      ]
    },
    {
      id: "arts-101-l08",
      title: "Portfolio Reflection",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      learningAids: [
        { id: "arts-101-l08-a1", type: "mnemonic", title: "Reflection Cycle", content: "Remember Observe, Adjust, Repeat while practicing." }
      ]
    },
    {
      id: "arts-101-l09",
      title: "Review: Artistic Skills",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "arts-101-l09-q1",
          text: "Which statement best explains composition in Arts?",
          skillId: "arts-101-skill-core",
          options: [
            { id: "a", text: "A principle supported by lesson evidence" },
            { id: "b", text: "A claim with no support" },
            { id: "c", text: "A topic from a different unit" },
            { id: "d", text: "None of the above" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l09-q2",
          text: "What is the best first step when analyzing critique?",
          skillId: "arts-101-skill-process",
          options: [
            { id: "a", text: "Identify key evidence and define the goal" },
            { id: "b", text: "Guess quickly" },
            { id: "c", text: "Skip the question" },
            { id: "d", text: "Use no evidence" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l09-q3",
          text: "Which option shows strong reasoning about creative expression?",
          skillId: "arts-101-skill-reasoning",
          options: [
            { id: "a", text: "Citing examples and checking assumptions" },
            { id: "b", text: "Ignoring key details" },
            { id: "c", text: "Using unrelated assumptions" },
            { id: "d", text: "Changing the topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l09-q4",
          text: "Why is spaced review useful for Arts mastery?",
          skillId: "arts-101-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "arts-101-l09-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "arts-101-l10",
      title: "Mastery: Creative Arts",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "arts-101-l10-q1",
          text: "Which statement best explains color theory in Arts?",
          skillId: "arts-101-skill-core",
          options: [
            { id: "a", text: "A principle supported by lesson evidence" },
            { id: "b", text: "A claim with no support" },
            { id: "c", text: "A topic from a different unit" },
            { id: "d", text: "None of the above" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l10-q2",
          text: "What is the best first step when analyzing rhythm?",
          skillId: "arts-101-skill-process",
          options: [
            { id: "a", text: "Identify key evidence and define the goal" },
            { id: "b", text: "Guess quickly" },
            { id: "c", text: "Skip the question" },
            { id: "d", text: "Use no evidence" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l10-q3",
          text: "Which option shows strong reasoning about creative expression?",
          skillId: "arts-101-skill-reasoning",
          options: [
            { id: "a", text: "Citing examples and checking assumptions" },
            { id: "b", text: "Ignoring key details" },
            { id: "c", text: "Using unrelated assumptions" },
            { id: "d", text: "Changing the topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "arts-101-l10-q4",
          text: "Why is spaced review useful for Arts mastery?",
          skillId: "arts-101-skill-review",
          options: [
            { id: "a", text: "It strengthens memory and transfer over time" },
            { id: "b", text: "It creates confusion" },
            { id: "c", text: "It removes key facts" },
            { id: "d", text: "It has no value" }
          ],
          correctOptionId: "a"
        }
      ],
      learningAids: [
        { id: "arts-101-l10-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    }
  ],
};
