import type { LearningModule } from "@/lib/modules/types";

export const AiWorkflows101Module: LearningModule = {
  id: "ai-workflows-101",
  title: "AI Workflows Foundations",
  description:
    "Design practical AI workflows for planning, writing, coding, evaluation, and automation with human oversight.",
  subject: "AI Workflows",
  tags: ["curriculum", "interactive", "technology"],
  minAge: 14,
  maxAge: 99,
  moduleVersion: "1.1.0",
  version: "1.1.0",
  difficultyBand: "beginner",
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Define the stages of a reliable AI workflow.",
    "Create prompts that improve output quality and consistency.",
    "Evaluate outputs with clear criteria and iterate safely.",
  ],
  lessons: [
    {
      id: "ai-workflows-101-l01",
      title: "Workflow Anatomy",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "ai-workflows-101-l01-c1",
          title: "From Task to Workflow",
          content:
            "A strong workflow breaks one big task into repeatable stages: define, generate, review, revise, and deliver.",
        },
        {
          id: "ai-workflows-101-l01-c2",
          title: "Roles and Inputs",
          content:
            "Identify who provides context, who reviews outputs, and what source material is trusted before generation starts.",
        },
        {
          id: "ai-workflows-101-l01-c3",
          title: "Quality Loop",
          content:
            "Treat first output as draft quality. Add checks, compare against criteria, then iterate.",
        },
      ],
      flashcards: [
        { id: "ai-workflows-101-l01-f1", front: "Workflow", back: "A repeatable sequence of steps for consistent results." },
        { id: "ai-workflows-101-l01-f2", front: "Evaluation", back: "A scoring step that checks quality before delivery." },
      ],
    },
    {
      id: "ai-workflows-101-l02",
      title: "Prompt Design for Reliability",
      type: "interactive",
      duration: 12,
      interactiveActivities: [
        {
          id: "ai-workflows-101-l02-ia1",
          type: "sorting_buckets",
          title: "Prompt Components",
          description: "Sort prompt parts into Role, Context, Constraints, and Output Format.",
          estimatedMinutes: 8,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "role", label: "Role" },
              { id: "context", label: "Context" },
              { id: "constraints", label: "Constraints" },
              { id: "format", label: "Output Format" },
            ],
            items: [
              { id: "i1", label: "You are a lesson planner.", correctTargetId: "role" },
              { id: "i2", label: "Target learner: grade 8.", correctTargetId: "context" },
              { id: "i3", label: "Use clear language under 120 words.", correctTargetId: "constraints" },
              { id: "i4", label: "Return JSON with title, summary, and steps.", correctTargetId: "format" },
            ],
          },
        },
      ],
      learningAids: [
        {
          id: "ai-workflows-101-l02-a1",
          type: "practice",
          title: "Prompt Template",
          content: "Role + Context + Constraints + Output Format + Review Criteria",
        },
      ],
    },
    {
      id: "ai-workflows-101-l03",
      title: "Checkpoint: Prompt and Workflow Basics",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "ai-workflows-101-l03-q1",
          text: "Which step should happen immediately after AI generation?",
          skillId: "ai-workflows-101-skill-loop",
          options: [
            { id: "a", text: "Run an evaluation against clear criteria." },
            { id: "b", text: "Publish without review." },
            { id: "c", text: "Delete the context and start over." },
            { id: "d", text: "Change the topic randomly." },
          ],
          correctOptionId: "a",
        },
        {
          id: "ai-workflows-101-l03-q2",
          text: "What usually improves response consistency the most?",
          skillId: "ai-workflows-101-skill-prompt",
          options: [
            { id: "a", text: "Explicit output format and constraints." },
            { id: "b", text: "Short vague instructions only." },
            { id: "c", text: "No context provided." },
            { id: "d", text: "Frequent topic switching." },
          ],
          correctOptionId: "a",
        },
        {
          id: "ai-workflows-101-l03-q3",
          text: "Why keep a human in the loop for high-stakes tasks?",
          skillId: "ai-workflows-101-skill-safety",
          options: [
            { id: "a", text: "To catch errors, bias, and unsafe outputs." },
            { id: "b", text: "To reduce all documentation." },
            { id: "c", text: "To avoid evaluation criteria." },
            { id: "d", text: "To remove accountability." },
          ],
          correctOptionId: "a",
        },
      ],
    },
    {
      id: "ai-workflows-101-l04",
      title: "Evaluation and Iteration",
      type: "video",
      duration: 11,
      chunks: [
        {
          id: "ai-workflows-101-l04-c1",
          title: "Evaluation Rubric",
          content:
            "Use a rubric that scores factuality, relevance, clarity, and actionability on every run.",
        },
        {
          id: "ai-workflows-101-l04-c2",
          title: "Failure Patterns",
          content:
            "Common failures include missing constraints, weak context, and unverified claims.",
        },
        {
          id: "ai-workflows-101-l04-c3",
          title: "Iterative Improvement",
          content:
            "Keep one variable change per iteration so you can measure what actually improved.",
        },
      ],
    },
    {
      id: "ai-workflows-101-l05",
      title: "Capstone: Build a Workflow",
      type: "interactive",
      duration: 14,
      interactiveActivities: [
        {
          id: "ai-workflows-101-l05-ia1",
          type: "project_builder",
          title: "Workflow Canvas",
          description: "Design a workflow for a real task and include validation checks.",
          estimatedMinutes: 12,
          difficultyLevel: "medium",
          instructions: [
            "Define goal, audience, and source inputs.",
            "Draft prompt and expected output format.",
            "Add evaluation rubric and revision loop.",
            "Add one safety checkpoint before final output.",
          ],
        },
      ],
      learningAids: [
        {
          id: "ai-workflows-101-l05-a1",
          type: "mnemonic",
          title: "G-P-R-E",
          content: "Goal, Prompt, Review, Execute.",
        },
      ],
    },
  ],
};

