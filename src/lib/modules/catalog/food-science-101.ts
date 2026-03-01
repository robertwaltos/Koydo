import type { LearningModule } from "@/lib/modules/types";

export const FoodScience101Module: LearningModule = {
  id: "food-science-101",
  title: "Food Science Foundations",
  description:
    "Learn how ingredients behave through heat, water, acids, fats, proteins, and fermentation.",
  subject: "Food Science",
  tags: ["curriculum", "interactive", "science"],
  minAge: 12,
  maxAge: 99,
  version: "1.1.0",
  difficultyBand: "beginner",
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Explain core ingredient behavior in common cooking processes.",
    "Predict how heat, moisture, and acidity change texture and flavor.",
    "Apply food-science reasoning to troubleshoot recipe outcomes.",
  ],
  lessons: [
    {
      id: "food-science-101-l01",
      title: "Ingredient Behavior Map",
      type: "video",
      duration: 10,
      chunks: [
        {
          id: "food-science-101-l01-c1",
          title: "Water, Fat, Protein, Starch",
          content:
            "Most cooking behavior can be explained by four actors: water, fat, protein, and starch.",
        },
        {
          id: "food-science-101-l01-c2",
          title: "Why Texture Changes",
          content:
            "Heating, cooling, and mixing change molecular structure, which changes texture and mouthfeel.",
        },
        {
          id: "food-science-101-l01-c3",
          title: "Flavor and Aroma Development",
          content:
            "Aroma compounds form through browning, fermentation, and thermal breakdown of ingredients.",
        },
      ],
      flashcards: [
        { id: "food-science-101-l01-f1", front: "Emulsion", back: "A stable mixture of fat and water phases." },
        { id: "food-science-101-l01-f2", front: "Denaturation", back: "Protein structure unfolding from heat, acid, or mixing." },
        { id: "food-science-101-l01-f3", front: "Gelatinization", back: "Starch granules absorb water and thicken when heated." },
      ],
    },
    {
      id: "food-science-101-l02",
      title: "Heat and Transformation",
      type: "interactive",
      duration: 12,
      interactiveActivities: [
        {
          id: "food-science-101-l02-ia1",
          type: "sorting_buckets",
          title: "Process Sort",
          description: "Sort each kitchen change by dominant mechanism.",
          estimatedMinutes: 8,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "maillard", label: "Maillard Browning" },
              { id: "denaturation", label: "Protein Denaturation" },
              { id: "gelatinization", label: "Starch Gelatinization" },
            ],
            items: [
              { id: "i1", label: "Bread crust developing color", correctTargetId: "maillard" },
              { id: "i2", label: "Egg white turning opaque", correctTargetId: "denaturation" },
              { id: "i3", label: "Sauce thickening with flour", correctTargetId: "gelatinization" },
            ],
          },
        },
      ],
    },
    {
      id: "food-science-101-l03",
      title: "Checkpoint: Kitchen Chemistry I",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "food-science-101-l03-q1",
          text: "What best explains why mayonnaise can separate?",
          skillId: "food-science-101-skill-emulsion",
          options: [
            { id: "a", text: "The emulsion broke due to unstable fat-water balance." },
            { id: "b", text: "Starch gelatinized too early." },
            { id: "c", text: "Sugar crystallized from evaporation." },
            { id: "d", text: "Fermentation fully completed." },
          ],
          correctOptionId: "a",
        },
        {
          id: "food-science-101-l03-q2",
          text: "Which process drives seared meat browning?",
          skillId: "food-science-101-skill-maillard",
          options: [
            { id: "a", text: "Maillard reaction between amino acids and sugars." },
            { id: "b", text: "Only water evaporation." },
            { id: "c", text: "Pure starch gelatinization." },
            { id: "d", text: "Protein hydration only." },
          ],
          correctOptionId: "a",
        },
        {
          id: "food-science-101-l03-q3",
          text: "Why can acidic marinades change meat texture?",
          skillId: "food-science-101-skill-acid",
          options: [
            { id: "a", text: "Acid alters protein structure and bonding." },
            { id: "b", text: "Acid instantly caramelizes starch." },
            { id: "c", text: "Acid removes all moisture permanently." },
            { id: "d", text: "Acid prevents any flavor reaction." },
          ],
          correctOptionId: "a",
        },
      ],
    },
    {
      id: "food-science-101-l04",
      title: "Fermentation and Preservation",
      type: "video",
      duration: 11,
      chunks: [
        {
          id: "food-science-101-l04-c1",
          title: "Microbial Work",
          content:
            "Fermentation uses microbes to transform sugars into acids, gases, or alcohols with flavor and safety impacts.",
        },
        {
          id: "food-science-101-l04-c2",
          title: "Control Variables",
          content:
            "Temperature, salt concentration, oxygen exposure, and time determine fermentation outcomes.",
        },
        {
          id: "food-science-101-l04-c3",
          title: "Safety First",
          content:
            "Good sanitation and correct pH/salt levels reduce contamination risk.",
        },
      ],
    },
    {
      id: "food-science-101-l05",
      title: "Capstone: Fix the Failed Dish",
      type: "interactive",
      duration: 14,
      interactiveActivities: [
        {
          id: "food-science-101-l05-ia1",
          type: "project_builder",
          title: "Kitchen Debugger",
          description: "Diagnose one failed dish and propose a science-based correction.",
          estimatedMinutes: 12,
          difficultyLevel: "medium",
          instructions: [
            "Choose a failure: split sauce, dry protein, under-risen dough, or bland flavor.",
            "Identify likely mechanism causing the problem.",
            "Propose two controlled fixes and expected outcomes.",
          ],
        },
      ],
      learningAids: [
        {
          id: "food-science-101-l05-a1",
          type: "mnemonic",
          title: "H-A-T",
          content: "Heat, Acidity, Time: check these first when troubleshooting.",
        },
      ],
    },
  ],
};

