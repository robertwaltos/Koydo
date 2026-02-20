import type { LearningModule } from "@/lib/modules/types";

export const science101Module: LearningModule = {
  id: "science-101",
  title: "Our Solar System",
  description: "Explore planets, orbits, and solar-system patterns through guided media and interactive practice.",
  subject: "Science",
  tags: ["space", "astronomy", "interactive"],
  minAge: 6,
  maxAge: 12,
  version: "1.1.0",
  learningObjectives: [
    "Identify key features of inner and outer planets.",
    "Explain why planets orbit the Sun in predictable paths.",
    "Use evidence to compare planetary environments.",
  ],
  lessons: [
    {
      id: "s101-l1",
      title: "The Sun and Inner Planets",
      type: "video",
      duration: 10,
      learningAids: [
        { id: "s101-l1-a1", type: "image", title: "Inner Planet Scale Card", content: "Compare Mercury, Venus, Earth, and Mars by size and distance." },
      ],
    },
    {
      id: "s101-l2",
      title: "Interactive: Planet Size Sort",
      type: "interactive",
      duration: 9,
      metadata: {
        prompts: [
          "Sort planets from smallest to largest and explain your evidence.",
          "Group planets by rocky vs gas/ice giant and explain the pattern.",
          "Choose one planet and describe one surprising fact.",
        ],
      },
      learningAids: [
        { id: "s101-l2-a1", type: "practice", title: "Planet Card Sort", content: "Drag and drop planets into category bins." },
      ],
    },
    {
      id: "s101-l3",
      title: "Checkpoint Quiz: Inner Planets",
      type: "quiz",
      duration: 9,
      questions: [
        {
          id: "s101-l3-q1",
          text: "Which planet is known as the Red Planet?",
          skillId: "planet-identification",
          options: [
            { id: "a", text: "Mars" },
            { id: "b", text: "Venus" },
            { id: "c", text: "Jupiter" },
            { id: "d", text: "Saturn" },
          ],
          correctOptionId: "a",
        },
        {
          id: "s101-l3-q2",
          text: "Which inner planet has the thickest cloud cover and is hottest?",
          skillId: "planet-comparison",
          options: [
            { id: "a", text: "Mercury" },
            { id: "b", text: "Venus" },
            { id: "c", text: "Earth" },
            { id: "d", text: "Mars" },
          ],
          correctOptionId: "b",
        },
        {
          id: "s101-l3-q3",
          text: "What do all inner planets have in common?",
          skillId: "planet-classification",
          options: [
            { id: "a", text: "They are rocky planets." },
            { id: "b", text: "They all have rings." },
            { id: "c", text: "They are gas giants." },
            { id: "d", text: "They orbit beyond Saturn." },
          ],
          correctOptionId: "a",
        },
        {
          id: "s101-l3-q4",
          text: "Which planet is our home planet?",
          skillId: "planet-identification",
          options: [
            { id: "a", text: "Mars" },
            { id: "b", text: "Earth" },
            { id: "c", text: "Neptune" },
            { id: "d", text: "Mercury" },
          ],
          correctOptionId: "b",
        },
      ],
    },
    {
      id: "s101-l4",
      title: "The Outer Planets",
      type: "video",
      duration: 12,
      learningAids: [
        { id: "s101-l4-a1", type: "image", title: "Outer Planet Snapshot", content: "Visual chart of Jupiter, Saturn, Uranus, and Neptune." },
        { id: "s101-l4-a2", type: "animation", title: "Gas Giant Layers", content: "Layered animation showing gas-giant structure." },
      ],
    },
    {
      id: "s101-l5",
      title: "Interactive: Orbit Simulator",
      type: "interactive",
      duration: 15,
      metadata: {
        prompts: [
          "Move a planet closer to the Sun and observe orbit speed changes.",
          "Compare one inner and one outer planet orbit and explain differences.",
          "Describe why all planets stay in orbit instead of flying away.",
        ],
      },
      learningAids: [
        { id: "s101-l5-a1", type: "practice", title: "Orbit Control Panel", content: "Adjust distance and watch orbital period updates." },
      ],
    },
    {
      id: "s101-l6",
      title: "Checkpoint Quiz: Outer Planets and Orbits",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "s101-l6-q1",
          text: "Which planet is the largest in our solar system?",
          skillId: "planet-comparison",
          options: [
            { id: "a", text: "Jupiter" },
            { id: "b", text: "Saturn" },
            { id: "c", text: "Earth" },
            { id: "d", text: "Mars" },
          ],
          correctOptionId: "a",
        },
        {
          id: "s101-l6-q2",
          text: "Which planet is famous for its bright ring system?",
          skillId: "planet-identification",
          options: [
            { id: "a", text: "Neptune" },
            { id: "b", text: "Saturn" },
            { id: "c", text: "Venus" },
            { id: "d", text: "Mercury" },
          ],
          correctOptionId: "b",
        },
        {
          id: "s101-l6-q3",
          text: "What mainly keeps planets in orbit around the Sun?",
          skillId: "orbit-concepts",
          options: [
            { id: "a", text: "Magnetism from Earth" },
            { id: "b", text: "The Sun's gravity" },
            { id: "c", text: "Wind in space" },
            { id: "d", text: "Planet engines" },
          ],
          correctOptionId: "b",
        },
        {
          id: "s101-l6-q4",
          text: "A planet farther from the Sun usually has what kind of orbit period?",
          skillId: "orbit-concepts",
          options: [
            { id: "a", text: "Shorter orbit period" },
            { id: "b", text: "Same orbit period as Earth" },
            { id: "c", text: "Longer orbit period" },
            { id: "d", text: "No orbit period" },
          ],
          correctOptionId: "c",
        },
      ],
    },
    {
      id: "s101-l7",
      title: "Video: Dwarf Planets and Small Bodies",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "s101-l7-a1", type: "image", title: "Asteroid Belt Map", content: "Visual map of asteroids, comets, and dwarf planets." },
      ],
    },
    {
      id: "s101-l8",
      title: "Mastery Quiz: Solar System Tour",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "s101-l8-q1",
          text: "Which statement best compares inner and outer planets?",
          skillId: "planet-classification",
          options: [
            { id: "a", text: "Inner planets are mostly rocky; outer planets are mostly gas/ice giants." },
            { id: "b", text: "All planets are rocky." },
            { id: "c", text: "All planets have rings." },
            { id: "d", text: "Outer planets are all smaller than inner planets." },
          ],
          correctOptionId: "a",
        },
        {
          id: "s101-l8-q2",
          text: "Which planet is closest to the Sun?",
          skillId: "planet-identification",
          options: [
            { id: "a", text: "Venus" },
            { id: "b", text: "Earth" },
            { id: "c", text: "Mercury" },
            { id: "d", text: "Mars" },
          ],
          correctOptionId: "c",
        },
        {
          id: "s101-l8-q3",
          text: "Why do outer planets often take longer to orbit the Sun?",
          skillId: "orbit-concepts",
          options: [
            { id: "a", text: "Their paths are larger, so each orbit is longer." },
            { id: "b", text: "They stop moving in winter." },
            { id: "c", text: "They have no gravity." },
            { id: "d", text: "They spin backward every day." },
          ],
          correctOptionId: "a",
        },
        {
          id: "s101-l8-q4",
          text: "Which body is classified as a dwarf planet?",
          skillId: "planet-classification",
          options: [
            { id: "a", text: "Pluto" },
            { id: "b", text: "Earth" },
            { id: "c", text: "Jupiter" },
            { id: "d", text: "Mars" },
          ],
          correctOptionId: "a",
        },
        {
          id: "s101-l8-q5",
          text: "What is one key role of the Sun in the solar system?",
          skillId: "sun-concepts",
          options: [
            { id: "a", text: "It provides gravity and energy for the system." },
            { id: "b", text: "It orbits Earth once each day." },
            { id: "c", text: "It is a cold rocky planet." },
            { id: "d", text: "It has no influence on planets." },
          ],
          correctOptionId: "a",
        },
      ],
    },
  ],
};
