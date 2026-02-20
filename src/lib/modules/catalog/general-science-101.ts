import type { LearningModule } from "@/lib/modules/types";

export const GeneralScience101Module: LearningModule = {
  id: "general-science-101",
  title: "General Science Explorer",
  description: "Understand scientific thinking, observation, experimentation, and real-world science.",
  subject: "Science",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  moduleVersion: "1.1.0",
  version: "1.1.0",
  learningObjectives: [
    "Understand core concepts in Science",
    "Apply Experimental Design strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  lessons: [
    {
      id: "general-science-101-l01",
      title: "Observation and Questions",
      type: "video",
      duration: 10,
      learningAids: [
        { id: "general-science-101-l01-a1", type: "image", title: "Concept Poster", content: "A colorful infographic about observation and hypothesis." },
        { id: "general-science-101-l01-a2", type: "animation", title: "Warm-up Animation", content: "Short animation introducing Science vocabulary." }
      ]
    },
    {
      id: "general-science-101-l02",
      title: "Hypothesis and Testing",
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
        { id: "general-science-101-l02-a1", type: "practice", title: "Try It Board", content: "Complete a guided activity on hypothesis and write one reflection." }
      ]
    },
    {
      id: "general-science-101-l03",
      title: "Checkpoint: Scientific Method",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "general-science-101-l03-q1",
          text: "Which statement best explains observation in Science?",
          skillId: "general-science-101-skill-core",
          options: [
            { id: "a", text: "A principle supported by lesson evidence" },
            { id: "b", text: "A claim with no support" },
            { id: "c", text: "A topic from a different unit" },
            { id: "d", text: "None of the above" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l03-q2",
          text: "What is the best first step when analyzing hypothesis?",
          skillId: "general-science-101-skill-process",
          options: [
            { id: "a", text: "Identify key evidence and define the goal" },
            { id: "b", text: "Guess quickly" },
            { id: "c", text: "Skip the question" },
            { id: "d", text: "Use no evidence" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l03-q3",
          text: "Which option shows strong reasoning about scientific inquiry?",
          skillId: "general-science-101-skill-reasoning",
          options: [
            { id: "a", text: "Citing examples and checking assumptions" },
            { id: "b", text: "Ignoring key details" },
            { id: "c", text: "Using unrelated assumptions" },
            { id: "d", text: "Changing the topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l03-q4",
          text: "Why is spaced review useful for Science mastery?",
          skillId: "general-science-101-skill-review",
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
        { id: "general-science-101-l03-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "general-science-101-l04",
      title: "Variables and Controls",
      type: "video",
      duration: 11,
      learningAids: [
        { id: "general-science-101-l04-a1", type: "image", title: "Worked Example Sheet", content: "Step-by-step visuals for variables scenarios." }
      ]
    },
    {
      id: "general-science-101-l05",
      title: "Interpreting Evidence",
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
        { id: "general-science-101-l05-a1", type: "animation", title: "Challenge Walkthrough", content: "Animated sequence for solving a variables challenge." }
      ]
    },
    {
      id: "general-science-101-l06",
      title: "Checkpoint: Experimental Design",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "general-science-101-l06-q1",
          text: "Which statement best explains variables in Science?",
          skillId: "general-science-101-skill-core",
          options: [
            { id: "a", text: "A principle supported by lesson evidence" },
            { id: "b", text: "A claim with no support" },
            { id: "c", text: "A topic from a different unit" },
            { id: "d", text: "None of the above" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l06-q2",
          text: "What is the best first step when analyzing evidence?",
          skillId: "general-science-101-skill-process",
          options: [
            { id: "a", text: "Identify key evidence and define the goal" },
            { id: "b", text: "Guess quickly" },
            { id: "c", text: "Skip the question" },
            { id: "d", text: "Use no evidence" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l06-q3",
          text: "Which option shows strong reasoning about scientific inquiry?",
          skillId: "general-science-101-skill-reasoning",
          options: [
            { id: "a", text: "Citing examples and checking assumptions" },
            { id: "b", text: "Ignoring key details" },
            { id: "c", text: "Using unrelated assumptions" },
            { id: "d", text: "Changing the topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l06-q4",
          text: "Why is spaced review useful for Science mastery?",
          skillId: "general-science-101-skill-review",
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
        { id: "general-science-101-l06-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "general-science-101-l07",
      title: "Science in Daily Life",
      type: "video",
      duration: 12,
      learningAids: [
        { id: "general-science-101-l07-a1", type: "practice", title: "Project Planner", content: "Template for planning a mini project focused on evidence." }
      ]
    },
    {
      id: "general-science-101-l08",
      title: "Investigation Reflection",
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
        { id: "general-science-101-l08-a1", type: "mnemonic", title: "Reflection Cycle", content: "Remember Observe, Adjust, Repeat while practicing." }
      ]
    },
    {
      id: "general-science-101-l09",
      title: "Review: Inquiry Skills",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "general-science-101-l09-q1",
          text: "Which statement best explains hypothesis in Science?",
          skillId: "general-science-101-skill-core",
          options: [
            { id: "a", text: "A principle supported by lesson evidence" },
            { id: "b", text: "A claim with no support" },
            { id: "c", text: "A topic from a different unit" },
            { id: "d", text: "None of the above" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l09-q2",
          text: "What is the best first step when analyzing evidence?",
          skillId: "general-science-101-skill-process",
          options: [
            { id: "a", text: "Identify key evidence and define the goal" },
            { id: "b", text: "Guess quickly" },
            { id: "c", text: "Skip the question" },
            { id: "d", text: "Use no evidence" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l09-q3",
          text: "Which option shows strong reasoning about scientific inquiry?",
          skillId: "general-science-101-skill-reasoning",
          options: [
            { id: "a", text: "Citing examples and checking assumptions" },
            { id: "b", text: "Ignoring key details" },
            { id: "c", text: "Using unrelated assumptions" },
            { id: "d", text: "Changing the topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l09-q4",
          text: "Why is spaced review useful for Science mastery?",
          skillId: "general-science-101-skill-review",
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
        { id: "general-science-101-l09-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    },
    {
      id: "general-science-101-l10",
      title: "Mastery: General Science",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "general-science-101-l10-q1",
          text: "Which statement best explains observation in Science?",
          skillId: "general-science-101-skill-core",
          options: [
            { id: "a", text: "A principle supported by lesson evidence" },
            { id: "b", text: "A claim with no support" },
            { id: "c", text: "A topic from a different unit" },
            { id: "d", text: "None of the above" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l10-q2",
          text: "What is the best first step when analyzing variables?",
          skillId: "general-science-101-skill-process",
          options: [
            { id: "a", text: "Identify key evidence and define the goal" },
            { id: "b", text: "Guess quickly" },
            { id: "c", text: "Skip the question" },
            { id: "d", text: "Use no evidence" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l10-q3",
          text: "Which option shows strong reasoning about scientific inquiry?",
          skillId: "general-science-101-skill-reasoning",
          options: [
            { id: "a", text: "Citing examples and checking assumptions" },
            { id: "b", text: "Ignoring key details" },
            { id: "c", text: "Using unrelated assumptions" },
            { id: "d", text: "Changing the topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "general-science-101-l10-q4",
          text: "Why is spaced review useful for Science mastery?",
          skillId: "general-science-101-skill-review",
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
        { id: "general-science-101-l10-a1", type: "mnemonic", title: "Memory Tip", content: "Use the phrase Plan, Check, Explain for each question." }
      ]
    }
  ],
};
