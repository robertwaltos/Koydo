import type { LearningModule } from "@/lib/modules/types";

export const appleVisionScienceLabModule: LearningModule = {
  id: "science-vision-lab",
  title: "Apple Vision Science Lab",
  description: "Immersive science lab pathway with spatial safety, AR experiments, and concept mastery checks.",
  subject: "Science",
  tags: ["immersive", "ar", "apple-vision"],
  minAge: 9,
  maxAge: 18,
  version: "1.0.0",
  learningObjectives: [
    "Safely launch and navigate immersive science experiences.",
    "Use spatial interactions to observe measurement and model-based science concepts.",
    "Explain evidence gathered in AR-based investigations.",
  ],
  lessons: [
    {
      id: "svl-l1",
      title: "Device Capability Check",
      type: "interactive",
      duration: 6,
      metadata: {
        route: "/science-lab",
        prompts: [
          "Run a headset and browser capability check before starting experiments.",
          "Confirm play-space boundaries and hand-tracking readiness.",
        ],
      },
      learningAids: [
        { id: "svl-l1-a1", type: "practice", title: "Preflight Checklist", content: "Verify sensor permissions, room lighting, and safe movement area." },
      ],
    },
    {
      id: "svl-l2",
      title: "Video: Immersive Lab Safety and Controls",
      type: "video",
      duration: 7,
      learningAids: [
        { id: "svl-l2-a1", type: "image", title: "Safety Zones Map", content: "Map front, side, and boundary zones for safe movement." },
        { id: "svl-l2-a2", type: "mnemonic", title: "Scan-Stand-Start", content: "Scan your area, stand centered, then start interaction." },
      ],
    },
    {
      id: "svl-l3",
      title: "Interactive: AR Measurement Lab",
      type: "interactive",
      duration: 12,
      metadata: {
        route: "/science-lab",
        prompts: [
          "Measure three objects and compare the estimates with actual values.",
          "Record which measurement was hardest and explain why.",
          "Describe one strategy that improved your measurement accuracy.",
        ],
      },
      learningAids: [
        { id: "svl-l3-a1", type: "practice", title: "Measurement Log", content: "Capture estimate, observed value, and error margin for each object." },
      ],
    },
    {
      id: "svl-l4",
      title: "Interactive: Solar Scale Placement",
      type: "interactive",
      duration: 10,
      metadata: {
        route: "/science-lab",
        prompts: [
          "Place planets in order of distance from the Sun.",
          "Adjust spacing to model why outer orbits are longer.",
          "Explain one misconception corrected during this activity.",
        ],
      },
      learningAids: [
        { id: "svl-l4-a1", type: "animation", title: "Orbit Spacing Guide", content: "Animated overlay showing relative spacing and orbital paths." },
      ],
    },
    {
      id: "svl-l5",
      title: "Checkpoint Quiz: Immersive Lab Readiness",
      type: "quiz",
      duration: 9,
      questions: [
        {
          id: "svl-l5-q1",
          text: "What should you do first before starting an immersive lab?",
          skillId: "immersive-safety",
          options: [
            { id: "a", text: "Run device and safety checks." },
            { id: "b", text: "Jump directly into the experiment." },
            { id: "c", text: "Disable hand tracking." },
            { id: "d", text: "Ignore room boundaries." },
          ],
          correctOptionId: "a",
        },
        {
          id: "svl-l5-q2",
          text: "Why are clear play-space boundaries important?",
          skillId: "immersive-safety",
          options: [
            { id: "a", text: "They prevent collisions and support safe movement." },
            { id: "b", text: "They make rendering slower." },
            { id: "c", text: "They reduce all interaction features." },
            { id: "d", text: "They are only needed for non-science apps." },
          ],
          correctOptionId: "a",
        },
        {
          id: "svl-l5-q3",
          text: "Which behavior improves data quality in AR measurement tasks?",
          skillId: "measurement-practice",
          options: [
            { id: "a", text: "Take repeated readings and compare results." },
            { id: "b", text: "Use one rushed estimate only." },
            { id: "c", text: "Change units randomly between readings." },
            { id: "d", text: "Avoid recording results." },
          ],
          correctOptionId: "a",
        },
        {
          id: "svl-l5-q4",
          text: "What should you do if hand tracking becomes unstable?",
          skillId: "immersive-controls",
          options: [
            { id: "a", text: "Pause, recalibrate, and re-check environment conditions." },
            { id: "b", text: "Ignore it and continue rapidly." },
            { id: "c", text: "Disable all safety prompts." },
            { id: "d", text: "Increase speed of interactions." },
          ],
          correctOptionId: "a",
        },
      ],
    },
    {
      id: "svl-l6",
      title: "Mastery Quiz: AR Science Investigation",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "svl-l6-q1",
          text: "Which sequence best represents a high-quality immersive investigation?",
          skillId: "investigation-flow",
          options: [
            { id: "a", text: "Check setup -> collect evidence -> review and explain findings." },
            { id: "b", text: "Collect guesses -> skip recording -> submit result." },
            { id: "c", text: "Disable controls -> move quickly -> stop early." },
            { id: "d", text: "Start quiz first -> run setup later." },
          ],
          correctOptionId: "a",
        },
        {
          id: "svl-l6-q2",
          text: "Why is it useful to compare estimate and measured values in AR labs?",
          skillId: "measurement-practice",
          options: [
            { id: "a", text: "It helps refine accuracy and reasoning." },
            { id: "b", text: "It removes the need for evidence." },
            { id: "c", text: "It only matters in history class." },
            { id: "d", text: "It slows learning with no benefit." },
          ],
          correctOptionId: "a",
        },
        {
          id: "svl-l6-q3",
          text: "What is one advantage of immersive models for science learning?",
          skillId: "immersive-learning",
          options: [
            { id: "a", text: "They make abstract systems easier to visualize and test." },
            { id: "b", text: "They remove the need for explanations." },
            { id: "c", text: "They replace all forms of assessment." },
            { id: "d", text: "They only work without safety checks." },
          ],
          correctOptionId: "a",
        },
        {
          id: "svl-l6-q4",
          text: "Which reflection supports strong scientific reasoning after an AR activity?",
          skillId: "evidence-reflection",
          options: [
            { id: "a", text: "Describe evidence observed and explain how it supports your claim." },
            { id: "b", text: "State an answer without evidence." },
            { id: "c", text: "Copy a result from a different activity." },
            { id: "d", text: "Skip explanation to save time." },
          ],
          correctOptionId: "a",
        },
      ],
    },
  ],
};
