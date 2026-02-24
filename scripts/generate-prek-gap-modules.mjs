import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const catalogDir = path.join(projectRoot, "src", "lib", "modules", "catalog");

const prekBlueprints = [
  {
    slug: "language-arts",
    subject: "Language Arts",
    title: "Language Arts Explorers",
    focus: "letters, sounds, and storytelling",
    strandA: "phonics",
    strandB: "story sequencing",
  },
  {
    slug: "basic-math",
    subject: "Basic Math",
    title: "Math Explorers",
    focus: "counting, shapes, and number play",
    strandA: "counting",
    strandB: "shape patterns",
  },
  {
    slug: "advanced-math",
    subject: "Advanced Math",
    title: "Math Thinking Adventures",
    focus: "patterns, comparisons, and early logic",
    strandA: "pattern rules",
    strandB: "logic puzzles",
  },
  {
    slug: "general-science",
    subject: "General Science",
    title: "Science Discovery Lab",
    focus: "observation, questions, and simple experiments",
    strandA: "observation",
    strandB: "prediction",
  },
  {
    slug: "biology",
    subject: "Biology",
    title: "Living Things Club",
    focus: "plants, animals, and life cycles",
    strandA: "animal needs",
    strandB: "plant growth",
  },
  {
    slug: "chemistry",
    subject: "Chemistry",
    title: "Matter and Mixtures Playlab",
    focus: "mixing, materials, and simple changes",
    strandA: "materials",
    strandB: "mixing and separating",
  },
  {
    slug: "physics",
    subject: "Physics",
    title: "Motion and Force Playground",
    focus: "pushes, pulls, and movement",
    strandA: "motion",
    strandB: "force and direction",
  },
  {
    slug: "social-studies-us",
    subject: "Social Studies US",
    title: "My Community in the US",
    focus: "helpers, places, and classroom citizenship",
    strandA: "community helpers",
    strandB: "responsibility",
  },
  {
    slug: "social-studies-world",
    subject: "Social Studies World",
    title: "World Friends and Cultures",
    focus: "families, traditions, and respect",
    strandA: "cultural traditions",
    strandB: "kind communication",
  },
  {
    slug: "world-history",
    subject: "World History",
    title: "Long Ago Stories",
    focus: "past and present through stories",
    strandA: "timeline basics",
    strandB: "historical storytelling",
  },
  {
    slug: "arts",
    subject: "Arts",
    title: "Creative Arts Studio",
    focus: "color, rhythm, and imagination",
    strandA: "color mixing",
    strandB: "rhythm patterns",
  },
  {
    slug: "coding",
    subject: "Coding",
    title: "Coding Play Patterns",
    focus: "sequencing and beginner logic",
    strandA: "step order",
    strandB: "if-then choices",
  },
  {
    slug: "financial-literacy",
    subject: "Financial Literacy",
    title: "Money Choices for Kids",
    focus: "sharing, saving, and simple choices",
    strandA: "needs and wants",
    strandB: "saving jars",
  },
  {
    slug: "household-management",
    subject: "Household Management",
    title: "Home Routines and Helpers",
    focus: "daily habits and safe routines",
    strandA: "cleanup steps",
    strandB: "home safety",
  },
  {
    slug: "farming",
    subject: "Farming",
    title: "Garden and Food Explorers",
    focus: "seeds, soil, and growing food",
    strandA: "seed to plant",
    strandB: "farm tools",
  },
  {
    slug: "astronomy",
    subject: "Astronomy",
    title: "Sky and Space Explorers",
    focus: "day, night, and nearby space objects",
    strandA: "sun and moon",
    strandB: "planet spotting",
  },
  {
    slug: "geography",
    subject: "Geography",
    title: "Maps and Places Around Us",
    focus: "places, directions, and maps",
    strandA: "near and far",
    strandB: "map symbols",
  },
  {
    slug: "general-relativity",
    subject: "General Relativity",
    title: "Space and Time Wonder Lab",
    focus: "big ideas about space, time, and gravity",
    strandA: "space and time",
    strandB: "gravity effects",
  },
];

function toConstName(value) {
  return `${value
    .split("-")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("")}Module`;
}

function escapeValue(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function videoLesson(moduleId, number, title, topic) {
  const n = String(number).padStart(2, "0");
  const lessonId = `${moduleId}-l${n}`;
  return `{
      id: "${lessonId}",
      title: "${title}",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "${lessonId}-a1", type: "image", title: "Picture Story Card", content: "Color visual showing ${topic}." },
        { id: "${lessonId}-a2", type: "animation", title: "Animated Walkthrough", content: "Short animation introducing ${topic} with simple narration." }
      ]
    }`;
}

function interactiveLesson(moduleId, number, title, topic) {
  const n = String(number).padStart(2, "0");
  const lessonId = `${moduleId}-l${n}`;
  return `{
      id: "${lessonId}",
      title: "${title}",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Name one thing you noticed about ${topic}.",
          "Show how you would practice ${topic} at home.",
          "Teach one new word from this lesson to a grown-up."
        ]
      },
      interactiveActivities: [
        {
          id: "${lessonId}-ia1",
          type: "drag_and_drop",
          title: "Learning Steps Game",
          description: "Drag each idea to the right step.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "plan", label: "Plan" },
              { id: "play", label: "Play" },
              { id: "share", label: "Share" }
            ],
            draggables: [
              { id: "d1", label: "Say what we will learn about ${topic}", correctTargetId: "plan" },
              { id: "d2", label: "Try the activity with a helper", correctTargetId: "play" },
              { id: "d3", label: "Tell someone one thing you learned", correctTargetId: "share" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "${lessonId}-a1", type: "practice", title: "Play Activity", content: "Guided hands-on practice for ${topic} with caregiver support." }
      ]
    }`;
}

function quizLesson(moduleId, number, title, topic, strandA, strandB) {
  const n = String(number).padStart(2, "0");
  const lessonId = `${moduleId}-l${n}`;
  return `{
      id: "${lessonId}",
      title: "${title}",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "${lessonId}-q1",
          text: "Which choice best matches ${strandA}?",
          skillId: "${moduleId}-skill-core",
          options: [
            { id: "a", text: "The example that shows ${strandA} clearly" },
            { id: "b", text: "A choice that does not match the lesson idea" },
            { id: "c", text: "A random answer with no evidence" },
            { id: "d", text: "A choice from another topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "${lessonId}-q2",
          text: "What helps you learn ${topic} best?",
          skillId: "${moduleId}-skill-practice",
          options: [
            { id: "a", text: "Practice, explain, and try again" },
            { id: "b", text: "Skip the activity and guess" },
            { id: "c", text: "Ignore the example" },
            { id: "d", text: "Change to an unrelated topic" }
          ],
          correctOptionId: "a"
        },
        {
          id: "${lessonId}-q3",
          text: "Which option uses ${strandB} correctly?",
          skillId: "${moduleId}-skill-apply",
          options: [
            { id: "a", text: "A step-by-step answer with a clear reason" },
            { id: "b", text: "A choice with no reason or example" },
            { id: "c", text: "A response that ignores the question" },
            { id: "d", text: "A statement not connected to ${strandB}" }
          ],
          correctOptionId: "a"
        },
        {
          id: "${lessonId}-q4",
          text: "Why do we review this topic more than once?",
          skillId: "${moduleId}-skill-review",
          options: [
            { id: "a", text: "Review helps memory grow stronger over time" },
            { id: "b", text: "Review makes learning harder every time" },
            { id: "c", text: "Review removes key ideas" },
            { id: "d", text: "Review has no value for learners" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "${lessonId}-ia1",
          type: "matching_pairs",
          title: "Match and Learn",
          description: "Match each learning clue to the best action.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "I forgot ${strandA}" },
              { id: "l2", label: "I am unsure about ${strandB}" },
              { id: "l3", label: "I need to remember ${topic}" }
            ],
            right: [
              { id: "r1", label: "Look at one example and say it out loud" },
              { id: "r2", label: "Use step-by-step practice with help" },
              { id: "r3", label: "Do a quick review game before trying again" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2] }],
        difficultyDistribution: { easy: 2, medium: 2, hard: 0 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.7
      },
      learningAids: [
        { id: "${lessonId}-a1", type: "mnemonic", title: "Remembering Phrase", content: "Think, Try, Explain for every ${topic} challenge." }
      ]
    }`;
}

function buildModuleSource(blueprint) {
  const moduleId = `pre-k-${blueprint.slug}-101`;
  const constName = toConstName(moduleId);
  const subject = escapeValue(blueprint.subject);
  const title = escapeValue(`Pre-K ${blueprint.title}`);
  const lessonTopic = escapeValue(blueprint.title);
  const focus = escapeValue(blueprint.focus);
  const strandA = escapeValue(blueprint.strandA);
  const strandB = escapeValue(blueprint.strandB);

  const lessons = [
    videoLesson(moduleId, 1, `Welcome to ${lessonTopic}`, focus),
    interactiveLesson(moduleId, 2, `Guided Play: ${lessonTopic}`, strandA),
    quizLesson(moduleId, 3, `Checkpoint: Core Idea (${lessonTopic})`, focus, strandA, strandB),
    videoLesson(moduleId, 4, `Story and Example Time: ${lessonTopic}`, strandA),
    interactiveLesson(moduleId, 5, `Hands-On Practice: ${lessonTopic}`, strandB),
    quizLesson(moduleId, 6, `Checkpoint: Practice Skills (${lessonTopic})`, focus, strandA, strandB),
    videoLesson(moduleId, 7, `Build and Create: ${lessonTopic}`, focus),
    interactiveLesson(moduleId, 8, `Reflection Circle: ${lessonTopic}`, strandA),
    quizLesson(moduleId, 9, `Review Game: ${lessonTopic}`, focus, strandA, strandB),
    quizLesson(moduleId, 10, `Celebration Quiz: ${lessonTopic}`, focus, strandA, strandB),
  ].join(",\n    ");

  return `import type { LearningModule } from "@/lib/modules/types";

export const ${constName}: LearningModule = {
  id: "${moduleId}",
  title: "${title}",
  description: "Play-based Pre-K module for ${subject.toLowerCase()} with family-friendly practice and simple checks for understanding.",
  subject: "${subject}",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Recognize key ${subject.toLowerCase()} ideas through stories and visuals",
    "Practice ${subject.toLowerCase()} in guided play and short activities",
    "Build confidence through frequent low-stakes checkpoints"
  ],
  lessons: [
    ${lessons}
  ],
};
`;
}

async function main() {
  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;
  const shouldOverwrite = process.argv.includes("--overwrite");

  await fs.mkdir(catalogDir, { recursive: true });

  for (const blueprint of prekBlueprints) {
    const moduleId = `pre-k-${blueprint.slug}-101`;
    const outPath = path.join(catalogDir, `${moduleId}.ts`);
    try {
      await fs.access(outPath);
      if (!shouldOverwrite) {
        skippedCount += 1;
        continue;
      }
      await fs.writeFile(outPath, buildModuleSource(blueprint), "utf8");
      updatedCount += 1;
      continue;
    } catch {
      // file does not exist
    }
    await fs.writeFile(outPath, buildModuleSource(blueprint), "utf8");
    createdCount += 1;
  }

  console.log(
    `Created ${createdCount} Pre-K module file(s), updated ${updatedCount}, skipped ${skippedCount} existing file(s).`,
  );
  console.log("Next steps:");
  console.log("1) npm run modules:sync");
  console.log("2) npm run curriculum:validate");
  console.log("3) npm run reports:refresh");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
