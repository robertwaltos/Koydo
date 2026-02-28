import type { LearningModule } from "@/lib/modules/types";

export const PreKFarming101Module: LearningModule = {
  id: "pre-k-farming-101",
  title: "Pre-K Garden and Food Explorers",
  description:
    "Discover seeds, soil, sun, water, farm animals, and healthy food through stories, sorting games, and pretend gardening for ages 3-5.",
  subject: "Farming",
  tags: ["pre-k", "curriculum", "interactive", "garden", "plants", "animals", "food"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "4.0.0",
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe what seeds need to grow: soil, water, and sunlight",
    "Name common farm animals and what they give us",
    "Identify fruits and vegetables and where they come from",
    "Explain the basic life cycle of a plant: seed → sprout → plant → flower/fruit",
    "Demonstrate caring for a garden through pretend-play activities",
  ],
  lessons: [
    // ── L01  Seeds and Soil ───────────────────────────────────
    {
      id: "pre-k-farming-101-l01",
      title: "Seeds and Soil",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-farming-101-l01-c1",
          title: "Tiny but Mighty Seeds",
          content:
            "Every big plant starts as a tiny seed! An apple seed is smaller than your fingernail, but it can grow into a tree taller than a house. Seeds carry a baby plant inside, just waiting for the right conditions to wake up.",
        },
        {
          id: "pre-k-farming-101-l01-c2",
          title: "What Is Soil?",
          content:
            "Soil is the brown, crumbly stuff on the ground — some people call it dirt. It is full of tiny nutrients, like vitamins for plants. Roots grow down into soil to drink water and eat nutrients. Without good soil, plants get hungry!",
        },
        {
          id: "pre-k-farming-101-l01-c3",
          title: "Planting a Seed",
          content:
            "To plant a seed: dig a small hole, drop the seed in, cover it with soil, and give it a drink of water. Then wait! In a few days a tiny green sprout will poke up. Gardeners call this germination.",
        },
      ],
      flashcards: [
        { id: "pre-k-farming-101-l01-fc1", front: "What is inside every seed?", back: "A baby plant waiting to grow." },
        { id: "pre-k-farming-101-l01-fc2", front: "What does soil give to plant roots?", back: "Water and nutrients (plant vitamins)." },
        { id: "pre-k-farming-101-l01-fc3", front: "What is it called when a seed starts to sprout?", back: "Germination." },
      ],
      learningAids: [
        { id: "pre-k-farming-101-l01-a1", type: "image", title: "Seed Cross-Section", content: "Cut-away picture of a seed showing the tiny baby plant inside its protective coat." },
      ],
    },

    // ── L02  Sun and Water ────────────────────────────────────
    {
      id: "pre-k-farming-101-l02",
      title: "Sun and Water",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-farming-101-l02-c1",
          title: "Plants Love Sunshine",
          content:
            "Plants use sunlight to make their own food — it is like cooking with light! Green leaves catch sun rays and turn them into energy. This amazing trick is called photosynthesis. Without sun, plants turn pale and floppy.",
        },
        {
          id: "pre-k-farming-101-l02-c2",
          title: "Water, Please!",
          content:
            "Roots suck up water like a straw. Water travels up the stem to every leaf and flower. Too little water and the plant wilts. Too much water and the roots get soggy and sick. Just the right amount is perfect!",
        },
        {
          id: "pre-k-farming-101-l02-c3",
          title: "The Recipe for Growth",
          content:
            "A plant needs three main things: soil, sunlight, and water. Think of it like a recipe — leave out one ingredient and the plant will not grow well. Farmers check the weather every day to make sure their crops get enough of each.",
        },
      ],
      flashcards: [
        { id: "pre-k-farming-101-l02-fc1", front: "What do leaves use sunlight for?", back: "To make food for the plant (photosynthesis)." },
        { id: "pre-k-farming-101-l02-fc2", front: "What happens if a plant gets too much water?", back: "The roots get soggy and sick." },
        { id: "pre-k-farming-101-l02-fc3", front: "Name the three things a plant needs to grow.", back: "Soil, sunlight, and water." },
      ],
      learningAids: [
        { id: "pre-k-farming-101-l02-a1", type: "image", title: "Growth Recipe", content: "Picture equation: soil + sun + water = happy plant with a smiley face." },
      ],
    },

    // ── L03  Plant Needs Sorting (Interactive) ────────────────
    {
      id: "pre-k-farming-101-l03",
      title: "What Does a Plant Need?",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Do plants need sunlight? Why?",
          "What would happen without water?",
          "Can a plant grow without soil? (Hint: some can in water!)",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-farming-101-l03-ia1",
          type: "sorting_buckets",
          title: "Helps Plants Grow vs. Does Not Help",
          description: "Drag each item into the right bucket.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "helps", label: "Helps Plants Grow" },
              { id: "not", label: "Does NOT Help" },
            ],
            items: [
              { id: "i1", label: "Sunlight ☀️", correctBucketId: "helps" },
              { id: "i2", label: "Water 💧", correctBucketId: "helps" },
              { id: "i3", label: "Soil 🟤", correctBucketId: "helps" },
              { id: "i4", label: "Candy 🍬", correctBucketId: "not" },
              { id: "i5", label: "Ice cream 🍦", correctBucketId: "not" },
              { id: "i6", label: "Rocks 🪨", correctBucketId: "not" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-farming-101-l03-a1", type: "practice", title: "Window Sill Experiment", content: "Put a damp paper towel in a plastic bag with a bean seed. Tape it to a sunny window and watch it sprout in 3-5 days!" },
      ],
    },

    // ── L04  Plant Life Cycle ─────────────────────────────────
    {
      id: "pre-k-farming-101-l04",
      title: "From Seed to Fruit",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-farming-101-l04-c1",
          title: "Stage 1: Seed",
          content:
            "Everything begins with a seed resting in the soil. When it gets water and warmth, the seed coat cracks open and a tiny root pokes out downward while a sprout reaches up toward the light.",
        },
        {
          id: "pre-k-farming-101-l04-c2",
          title: "Stage 2: Sprout and Grow",
          content:
            "The sprout pushes through the soil and unfolds its first leaves. These leaves catch sunlight and start making food. The stem grows taller, more leaves appear, and roots spread deeper underground.",
        },
        {
          id: "pre-k-farming-101-l04-c3",
          title: "Stage 3: Flower and Fruit",
          content:
            "When the plant is big enough, flowers bloom! Bees visit flowers and help them make fruit. Inside each fruit are new seeds — and the cycle starts all over again! An apple has seeds inside that can grow new apple trees.",
        },
      ],
      flashcards: [
        { id: "pre-k-farming-101-l04-fc1", front: "What cracks open first when a seed starts growing?", back: "The seed coat — a root comes out the bottom and a sprout goes up." },
        { id: "pre-k-farming-101-l04-fc2", front: "What do bees help flowers do?", back: "Make fruit (pollination)." },
        { id: "pre-k-farming-101-l04-fc3", front: "What is inside fruit?", back: "New seeds that can grow more plants!" },
      ],
      learningAids: [
        { id: "pre-k-farming-101-l04-a1", type: "image", title: "Life Cycle Circle", content: "Circular diagram: seed → sprout → plant → flower → fruit → seed again." },
      ],
    },

    // ── L05  Checkpoint Quiz 1 ────────────────────────────────
    {
      id: "pre-k-farming-101-l05",
      title: "Checkpoint: Seeds and Growing",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-farming-101-l05-q1",
          text: "What three things does a plant need to grow?",
          skillId: "pre-k-farming-101-skill-needs",
          options: [
            { id: "a", text: "Soil, sunlight, and water" },
            { id: "b", text: "Candy, toys, and paint" },
            { id: "c", text: "Ice, snow, and darkness" },
            { id: "d", text: "Paper, glue, and scissors" },
          ],
          correctOptionId: "a",
          explanation: "Plants need soil for nutrients, sunlight for energy, and water to stay healthy.",
        },
        {
          id: "pre-k-farming-101-l05-q2",
          text: "What is inside every seed?",
          skillId: "pre-k-farming-101-skill-seeds",
          options: [
            { id: "a", text: "A tiny baby plant" },
            { id: "b", text: "A small rock" },
            { id: "c", text: "A drop of paint" },
            { id: "d", text: "A piece of candy" },
          ],
          correctOptionId: "a",
          explanation: "Every seed carries a baby plant inside its protective coat, ready to grow!",
        },
        {
          id: "pre-k-farming-101-l05-q3",
          text: "What do bees help flowers do?",
          skillId: "pre-k-farming-101-skill-lifecycle",
          options: [
            { id: "a", text: "Make fruit and new seeds" },
            { id: "b", text: "Turn into butterflies" },
            { id: "c", text: "Change color to red" },
            { id: "d", text: "Fly away to the moon" },
          ],
          correctOptionId: "a",
          explanation: "Bees carry pollen between flowers, which helps the plant make fruit with new seeds inside.",
        },
        {
          id: "pre-k-farming-101-l05-q4",
          text: "What is it called when a seed starts to sprout?",
          skillId: "pre-k-farming-101-skill-seeds",
          options: [
            { id: "a", text: "Germination" },
            { id: "b", text: "Hibernation" },
            { id: "c", text: "Celebration" },
            { id: "d", text: "Evaporation" },
          ],
          correctOptionId: "a",
          explanation: "Germination is the special word for when a seed cracks open and a tiny sprout begins to grow.",
        },
      ],
      quizBlueprint: {
        frequency: "checkpoint",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2] }],
        difficultyDistribution: { easy: 3, medium: 1, hard: 0 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.7,
      },
    },

    // ── L06  Farm Animals ─────────────────────────────────────
    {
      id: "pre-k-farming-101-l06",
      title: "Farm Animals",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-farming-101-l06-c1",
          title: "Chickens",
          content:
            "Chickens live in a coop on the farm. Hens lay eggs every day — that is where your breakfast eggs come from! Baby chickens are called chicks, and they are covered in soft yellow fluff. Roosters say cock-a-doodle-doo in the morning!",
        },
        {
          id: "pre-k-farming-101-l06-c2",
          title: "Cows",
          content:
            "Cows are big, gentle animals that eat lots of grass. Farmers milk cows every morning and evening. That milk becomes the cheese on your pizza, the yogurt in your bowl, and the ice cream on a hot day!",
        },
        {
          id: "pre-k-farming-101-l06-c3",
          title: "More Farm Friends",
          content:
            "Sheep give us wool for warm sweaters. Pigs roll in mud to keep cool — mud is their sunscreen! Horses help farmers carry heavy loads. Every animal on a farm has an important job.",
        },
      ],
      flashcards: [
        { id: "pre-k-farming-101-l06-fc1", front: "What do hens give us?", back: "Eggs!" },
        { id: "pre-k-farming-101-l06-fc2", front: "What do we make from cow's milk?", back: "Cheese, yogurt, ice cream, and butter." },
        { id: "pre-k-farming-101-l06-fc3", front: "Why do pigs roll in mud?", back: "To stay cool — mud works like sunscreen for pigs!" },
        { id: "pre-k-farming-101-l06-fc4", front: "What do sheep give us?", back: "Wool for warm clothes." },
      ],
      learningAids: [
        { id: "pre-k-farming-101-l06-a1", type: "image", title: "Farm Animals Poster", content: "Colorful poster with chicken, cow, sheep, pig, and horse, each labeled with what they give us." },
      ],
    },

    // ── L07  Animal Match (Interactive) ───────────────────────
    {
      id: "pre-k-farming-101-l07",
      title: "Animal Match Game",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "What sound does a chicken make?",
          "Which animal gives us milk?",
          "Can you act like a pig rolling in mud?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-farming-101-l07-ia1",
          type: "matching_pairs",
          title: "Animal to Product Match",
          description: "Match each farm animal to what it gives us.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Chicken 🐔" },
              { id: "l2", label: "Cow 🐄" },
              { id: "l3", label: "Sheep 🐑" },
              { id: "l4", label: "Bee 🐝" },
            ],
            right: [
              { id: "r1", label: "Eggs 🥚" },
              { id: "r2", label: "Milk 🥛" },
              { id: "r3", label: "Wool 🧶" },
              { id: "r4", label: "Honey 🍯" },
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-farming-101-l07-a1", type: "practice", title: "Animal Sounds Walk", content: "Take a walk and pretend to be each farm animal. Moo like a cow, cluck like a chicken, and baa like a sheep!" },
      ],
    },

    // ── L08  Fruits and Vegetables ────────────────────────────
    {
      id: "pre-k-farming-101-l08",
      title: "Fruits and Vegetables",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-farming-101-l08-c1",
          title: "What Are Fruits?",
          content:
            "Fruits are the sweet parts of a plant that hold seeds. Apples, strawberries, oranges, and bananas are all fruits. Here is a fun trick: if it has seeds inside, it is probably a fruit! Even tomatoes are technically fruits.",
        },
        {
          id: "pre-k-farming-101-l08-c2",
          title: "What Are Vegetables?",
          content:
            "Vegetables are other parts of the plant we eat — roots, stems, and leaves. Carrots are roots. Celery is a stem. Lettuce is a leaf. Broccoli is actually a flower that has not bloomed yet!",
        },
        {
          id: "pre-k-farming-101-l08-c3",
          title: "From Farm to Table",
          content:
            "Farmers grow fruits and vegetables in fields, orchards, and greenhouses. Trucks carry them to stores. Your family picks them out and brings them home. Next time you eat a carrot, remember — a farmer grew that for you!",
        },
      ],
      flashcards: [
        { id: "pre-k-farming-101-l08-fc1", front: "How can you tell if something is a fruit?", back: "It usually has seeds inside!" },
        { id: "pre-k-farming-101-l08-fc2", front: "Is a carrot a root, stem, or leaf?", back: "A root — it grows underground." },
        { id: "pre-k-farming-101-l08-fc3", front: "What part of the plant is broccoli?", back: "A flower that has not bloomed yet!" },
      ],
      learningAids: [
        { id: "pre-k-farming-101-l08-a1", type: "image", title: "Plant Parts We Eat", content: "Diagram of a plant with arrows: root=carrot, stem=celery, leaf=lettuce, fruit=tomato, flower=broccoli." },
      ],
    },

    // ── L09  Fruit vs. Vegetable Sort (Interactive) ──────────
    {
      id: "pre-k-farming-101-l09",
      title: "Fruit or Veggie Sort",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Does a strawberry have seeds?",
          "Is lettuce a fruit or a vegetable?",
          "Name your favorite fruit and your favorite vegetable.",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-farming-101-l09-ia1",
          type: "sorting_buckets",
          title: "Fruit vs. Vegetable",
          description: "Drag each food into the Fruit or Vegetable bucket.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "fruit", label: "Fruit 🍎" },
              { id: "veggie", label: "Vegetable 🥕" },
            ],
            items: [
              { id: "i1", label: "Apple 🍎", correctBucketId: "fruit" },
              { id: "i2", label: "Carrot 🥕", correctBucketId: "veggie" },
              { id: "i3", label: "Banana 🍌", correctBucketId: "fruit" },
              { id: "i4", label: "Lettuce 🥬", correctBucketId: "veggie" },
              { id: "i5", label: "Strawberry 🍓", correctBucketId: "fruit" },
              { id: "i6", label: "Broccoli 🥦", correctBucketId: "veggie" },
              { id: "i7", label: "Orange 🍊", correctBucketId: "fruit" },
              { id: "i8", label: "Celery 🥬", correctBucketId: "veggie" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-farming-101-l09-a1", type: "practice", title: "Grocery Store Adventure", content: "At the store, point to fruits and vegetables and say their names. Can you find one you have never tried?" },
      ],
    },

    // ── L10  Celebration Quiz ─────────────────────────────────
    {
      id: "pre-k-farming-101-l10",
      title: "Celebration Quiz: Garden Explorers!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-farming-101-l10-q1",
          text: "What is the correct order of a plant's life?",
          skillId: "pre-k-farming-101-skill-lifecycle",
          options: [
            { id: "a", text: "Seed → sprout → plant → flower → fruit" },
            { id: "b", text: "Fruit → flower → seed → sprout → plant" },
            { id: "c", text: "Sprout → fruit → seed → flower → plant" },
            { id: "d", text: "Flower → seed → plant → sprout → fruit" },
          ],
          correctOptionId: "a",
          explanation: "Plants start as seeds, sprout, grow into full plants, bloom flowers, and then make fruit with new seeds inside!",
        },
        {
          id: "pre-k-farming-101-l10-q2",
          text: "Which farm animal gives us milk?",
          skillId: "pre-k-farming-101-skill-animals",
          options: [
            { id: "a", text: "Cow" },
            { id: "b", text: "Chicken" },
            { id: "c", text: "Pig" },
            { id: "d", text: "Horse" },
          ],
          correctOptionId: "a",
          explanation: "Cows are milked every morning and evening. Their milk becomes cheese, yogurt, and ice cream!",
        },
        {
          id: "pre-k-farming-101-l10-q3",
          text: "Which of these is a VEGETABLE?",
          skillId: "pre-k-farming-101-skill-food",
          options: [
            { id: "a", text: "Carrot" },
            { id: "b", text: "Apple" },
            { id: "c", text: "Banana" },
            { id: "d", text: "Strawberry" },
          ],
          correctOptionId: "a",
          explanation: "A carrot is a root vegetable — it grows underground!",
        },
        {
          id: "pre-k-farming-101-l10-q4",
          text: "Why do pigs roll in mud?",
          skillId: "pre-k-farming-101-skill-animals",
          options: [
            { id: "a", text: "To stay cool — mud is like sunscreen for them" },
            { id: "b", text: "Because they are dirty animals" },
            { id: "c", text: "To hide from chickens" },
            { id: "d", text: "To find seeds" },
          ],
          correctOptionId: "a",
          explanation: "Pigs do not sweat like people, so they roll in mud to cool down and protect their skin from the sun.",
        },
        {
          id: "pre-k-farming-101-l10-q5",
          text: "How can you tell if something is probably a fruit?",
          skillId: "pre-k-farming-101-skill-food",
          options: [
            { id: "a", text: "It has seeds inside" },
            { id: "b", text: "It is always red" },
            { id: "c", text: "It grows on the ground" },
            { id: "d", text: "It is always sweet" },
          ],
          correctOptionId: "a",
          explanation: "Fruits hold the seeds of a plant. If it has seeds inside, it is most likely a fruit!",
        },
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 5,
        totalQuestions: 5,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 5, pointsEach: 1, bloomsLevels: [1, 2] }],
        difficultyDistribution: { easy: 3, medium: 2, hard: 0 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.7,
      },
      learningAids: [
        { id: "pre-k-farming-101-l10-a1", type: "mnemonic", title: "Garden Rhyme", content: "Seed in the ground, sun shining down, water it well and watch green come around!" },
      ],
    },
  ],
};
