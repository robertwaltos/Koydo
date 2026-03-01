import type { LearningModule } from "@/lib/modules/types";

export const PreKAdvancedMath101Module: LearningModule = {
  id: "pre-k-advanced-math-101",
  title: "Pre-K Math Thinking Adventures",
  description:
    "Build on counting basics with shapes, patterns, simple addition and subtraction, measurement, and sorting for ages 3-5.",
  subject: "Advanced Math",
  tags: ["pre-k", "curriculum", "interactive", "math", "patterns", "shapes", "counting"],
  minAge: 3,
  maxAge: 5,
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Count objects up to 20 and recognize written numerals",
    "Identify and name basic 2D shapes: circle, square, triangle, rectangle, oval",
    "Recognize and extend simple repeating patterns (AB, ABB, ABC)",
    "Solve addition and subtraction problems within 5 using objects",
    "Compare sizes using words like bigger, smaller, taller, shorter, longer",
  ],
  lessons: [
    // ── L01  Counting Beyond 10 ───────────────────────────────
    {
      id: "pre-k-advanced-math-101-l01",
      title: "Counting to 20",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-advanced-math-101-l01-c1",
          title: "Numbers 1-10 Review",
          content:
            "You already know 1, 2, 3 all the way to 10 — great job! Let's review with our fingers. Hold up all ten fingers. That is 10! Now what comes next?",
        },
        {
          id: "pre-k-advanced-math-101-l01-c2",
          title: "The Teens: 11-19",
          content:
            "After 10 come the 'teen' numbers: 11, 12, 13, 14, 15, 16, 17, 18, 19. They all mean '10 plus something.' Thirteen means 10 + 3. Seventeen means 10 + 7. You can use 10 blocks in one stack plus extras to show each teen number!",
        },
        {
          id: "pre-k-advanced-math-101-l01-c3",
          title: "Twenty!",
          content:
            "After 19 comes 20 — that is two groups of 10! If you line up 20 crayons, that is a LOT of crayons. Practice counting things around you — how many steps to the kitchen? How many books on the shelf?",
        },
      ],
      flashcards: [
        { id: "pre-k-advanced-math-101-l01-fc1", front: "What does 'thirteen' mean?", back: "10 + 3 = 13" },
        { id: "pre-k-advanced-math-101-l01-fc2", front: "What comes after 19?", back: "20 (two groups of 10)." },
        { id: "pre-k-advanced-math-101-l01-fc3", front: "How many fingers do you have total?", back: "10 fingers." },
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l01-a1", type: "image", title: "Number Line", content: "Colorful number line from 1 to 20 with groups of 10 highlighted." },
      ],
    },

    // ── L02  Shapes All Around ────────────────────────────────
    {
      id: "pre-k-advanced-math-101-l02",
      title: "Shapes All Around",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-advanced-math-101-l02-c1",
          title: "Circles and Ovals",
          content:
            "A circle is perfectly round — like a wheel, a cookie, or the sun. An oval is like a stretched circle — think of an egg or a football. Circles have zero straight sides and zero corners!",
        },
        {
          id: "pre-k-advanced-math-101-l02-c2",
          title: "Squares and Rectangles",
          content:
            "A square has 4 sides that are ALL the same length and 4 corners. A rectangle also has 4 sides and 4 corners, but two sides are longer. A door is a rectangle. A window might be a square!",
        },
        {
          id: "pre-k-advanced-math-101-l02-c3",
          title: "Triangles",
          content:
            "A triangle has 3 sides and 3 corners — 'tri' means three! Some triangles have sides all the same length (equilateral). Others are tall and thin or short and wide. Look at a pizza slice — that is a triangle!",
        },
      ],
      flashcards: [
        { id: "pre-k-advanced-math-101-l02-fc1", front: "How many sides does a triangle have?", back: "3 sides and 3 corners." },
        { id: "pre-k-advanced-math-101-l02-fc2", front: "What is the difference between a square and a rectangle?", back: "A square has 4 equal sides; a rectangle has 2 long sides and 2 short sides." },
        { id: "pre-k-advanced-math-101-l02-fc3", front: "How many corners does a circle have?", back: "Zero corners — it is perfectly round!" },
        { id: "pre-k-advanced-math-101-l02-fc4", front: "What shape is an egg?", back: "An oval (a stretched circle)." },
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l02-a1", type: "image", title: "Shape Chart", content: "Five shapes in a row: circle, oval, square, rectangle, triangle — each labeled with side count." },
      ],
    },

    // ── L03  Shape Hunt (Interactive) ─────────────────────────
    {
      id: "pre-k-advanced-math-101-l03",
      title: "Shape Hunt",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Can you find a circle in the room?",
          "What shape is a book?",
          "Draw your favorite shape and tell me how many sides it has.",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-advanced-math-101-l03-ia1",
          type: "sorting_buckets",
          title: "Sort by Number of Sides",
          description: "Drag each shape into the right bucket by counting its sides.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "zero", label: "0 Sides (Round)" },
              { id: "three", label: "3 Sides" },
              { id: "four", label: "4 Sides" },
            ],
            items: [
              { id: "i1", label: "Circle ⭕", correctBucketId: "zero" },
              { id: "i2", label: "Triangle 🔺", correctBucketId: "three" },
              { id: "i3", label: "Square ⬜", correctBucketId: "four" },
              { id: "i4", label: "Oval 🥚", correctBucketId: "zero" },
              { id: "i5", label: "Rectangle 📋", correctBucketId: "four" },
              { id: "i6", label: "Pizza slice 🍕", correctBucketId: "three" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l03-a1", type: "practice", title: "Shape Scavenger Hunt", content: "Walk around your home. Find one circle, one rectangle, and one triangle. Draw them in a notebook!" },
      ],
    },

    // ── L04  Patterns ─────────────────────────────────────────
    {
      id: "pre-k-advanced-math-101-l04",
      title: "Pattern Power",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-advanced-math-101-l04-c1",
          title: "What Is a Pattern?",
          content:
            "A pattern is something that repeats over and over. Red, blue, red, blue — that is a pattern! Clap, stomp, clap, stomp — that is a pattern too! Once you know the rule, you can predict what comes next.",
        },
        {
          id: "pre-k-advanced-math-101-l04-c2",
          title: "AB and ABB Patterns",
          content:
            "The simplest pattern is AB: circle, square, circle, square. An ABB pattern has one A and two B's: star, heart, heart, star, heart, heart. Can you figure out what comes next? Another star!",
        },
        {
          id: "pre-k-advanced-math-101-l04-c3",
          title: "Patterns in Nature",
          content:
            "Nature is full of patterns! Zebra stripes — black, white, black, white. Sunflower seeds spiral in patterns. Day and night repeat every single day. When you spot patterns, your math brain is working!",
        },
      ],
      flashcards: [
        { id: "pre-k-advanced-math-101-l04-fc1", front: "What is a pattern?", back: "Something that repeats over and over following a rule." },
        { id: "pre-k-advanced-math-101-l04-fc2", front: "In an AB pattern: circle, square, circle, square — what comes next?", back: "Circle!" },
        { id: "pre-k-advanced-math-101-l04-fc3", front: "In an ABB pattern: star, heart, heart, star, heart, heart — what comes next?", back: "Star!" },
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l04-a1", type: "image", title: "Pattern Strips", content: "Three pattern strips: AB (red-blue), ABB (star-heart-heart), ABC (circle-square-triangle)." },
      ],
    },

    // ── L05  Checkpoint Quiz 1 ────────────────────────────────
    {
      id: "pre-k-advanced-math-101-l05",
      title: "Checkpoint: Shapes and Patterns",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-advanced-math-101-l05-q1",
          text: "How many sides does a rectangle have?",
          skillId: "pre-k-advanced-math-101-skill-shapes",
          options: [
            { id: "a", text: "4" },
            { id: "b", text: "3" },
            { id: "c", text: "0" },
            { id: "d", text: "5" },
          ],
          correctOptionId: "a",
          explanation: "A rectangle has 4 sides — two long ones and two short ones — plus 4 corners.",
        },
        {
          id: "pre-k-advanced-math-101-l05-q2",
          text: "Red, blue, red, blue, red, ___? What comes next?",
          skillId: "pre-k-advanced-math-101-skill-patterns",
          options: [
            { id: "a", text: "Blue" },
            { id: "b", text: "Red" },
            { id: "c", text: "Green" },
            { id: "d", text: "Yellow" },
          ],
          correctOptionId: "a",
          explanation: "This is an AB pattern: red, blue repeats. After red comes blue!",
        },
        {
          id: "pre-k-advanced-math-101-l05-q3",
          text: "What number comes after 19?",
          skillId: "pre-k-advanced-math-101-skill-counting",
          options: [
            { id: "a", text: "20" },
            { id: "b", text: "18" },
            { id: "c", text: "21" },
            { id: "d", text: "100" },
          ],
          correctOptionId: "a",
          explanation: "After 19 comes 20 — that is two groups of ten!",
        },
        {
          id: "pre-k-advanced-math-101-l05-q4",
          text: "Which shape has zero sides and zero corners?",
          skillId: "pre-k-advanced-math-101-skill-shapes",
          options: [
            { id: "a", text: "Circle" },
            { id: "b", text: "Square" },
            { id: "c", text: "Triangle" },
            { id: "d", text: "Rectangle" },
          ],
          correctOptionId: "a",
          explanation: "A circle is perfectly round with no straight sides and no corners.",
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

    // ── L06  Adding with Objects ──────────────────────────────
    {
      id: "pre-k-advanced-math-101-l06",
      title: "Adding with Objects",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-advanced-math-101-l06-c1",
          title: "What Is Adding?",
          content:
            "Adding means putting groups together to see how many you have in all. If you have 2 apples and get 1 more, now you have 3 apples! We write it: 2 + 1 = 3. The plus sign (+) means 'put together.'",
        },
        {
          id: "pre-k-advanced-math-101-l06-c2",
          title: "Fingers and Objects",
          content:
            "You can add using your fingers! Hold up 3 fingers on one hand and 2 on the other. Count them all: 1, 2, 3, 4, 5. So 3 + 2 = 5! You can also use blocks, buttons, or even cheerios.",
        },
        {
          id: "pre-k-advanced-math-101-l06-c3",
          title: "Adding Stories",
          content:
            "Math is everywhere in stories! 'You have 1 cookie. Mom gives you 2 more. How many now?' Count: 1 + 2 = 3 cookies! When you hear 'more,' 'in all,' or 'altogether,' that is a clue to add.",
        },
      ],
      flashcards: [
        { id: "pre-k-advanced-math-101-l06-fc1", front: "What does the + sign mean?", back: "Put together (add)." },
        { id: "pre-k-advanced-math-101-l06-fc2", front: "2 + 3 = ?", back: "5 — hold up 2 fingers and 3 fingers, then count them all!" },
        { id: "pre-k-advanced-math-101-l06-fc3", front: "What words are clues that you need to add?", back: "'More,' 'in all,' 'altogether,' and 'how many total.'" },
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l06-a1", type: "animation", title: "Adding Blocks", content: "Animation of two groups of blocks sliding together and being counted as a total." },
      ],
    },

    // ── L07  Subtracting with Objects ─────────────────────────
    {
      id: "pre-k-advanced-math-101-l07",
      title: "Taking Away",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-advanced-math-101-l07-c1",
          title: "What Is Subtracting?",
          content:
            "Subtracting means taking some away. If you have 5 grapes and eat 2, how many are left? Count the ones still there: 3! We write it: 5 − 2 = 3. The minus sign (−) means 'take away.'",
        },
        {
          id: "pre-k-advanced-math-101-l07-c2",
          title: "Counting What Is Left",
          content:
            "Start with your total. Cross off or remove the ones being taken away. Then count what remains. 4 birds on a fence, 1 flies away: 4 − 1 = 3 birds left.",
        },
        {
          id: "pre-k-advanced-math-101-l07-c3",
          title: "Subtraction Clues",
          content:
            "Words like 'left,' 'gone,' 'flew away,' 'ate,' and 'gave away' are clues to subtract. 'You had 3 balloons and 1 popped. How many left?' 3 − 1 = 2 balloons!",
        },
      ],
      flashcards: [
        { id: "pre-k-advanced-math-101-l07-fc1", front: "What does the − sign mean?", back: "Take away (subtract)." },
        { id: "pre-k-advanced-math-101-l07-fc2", front: "5 − 3 = ?", back: "2 — start with 5 and take away 3, leaving 2." },
        { id: "pre-k-advanced-math-101-l07-fc3", front: "What words are clues that you need to subtract?", back: "'Left,' 'gone,' 'flew away,' 'ate,' 'gave away.'" },
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l07-a1", type: "animation", title: "Birds Flying Away", content: "Animation of 5 birds on a fence. Two fly away. Count the remaining: 3!" },
      ],
    },

    // ── L08  Add or Subtract? (Interactive) ───────────────────
    {
      id: "pre-k-advanced-math-101-l08",
      title: "Add or Take Away?",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "If you get MORE, do you add or subtract?",
          "If some go AWAY, do you add or subtract?",
          "Make up your own math story for a grown-up!",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-advanced-math-101-l08-ia1",
          type: "sorting_buckets",
          title: "Add or Subtract?",
          description: "Read each story and decide: does it use addition or subtraction?",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "add", label: "Addition (+)" },
              { id: "sub", label: "Subtraction (−)" },
            ],
            items: [
              { id: "i1", label: "You have 2 apples and get 3 more", correctBucketId: "add" },
              { id: "i2", label: "5 fish and 2 swim away", correctBucketId: "sub" },
              { id: "i3", label: "1 cookie plus 4 cookies", correctBucketId: "add" },
              { id: "i4", label: "4 balloons and 1 pops", correctBucketId: "sub" },
              { id: "i5", label: "3 blocks and 2 more blocks", correctBucketId: "add" },
              { id: "i6", label: "5 crayons and you give 3 away", correctBucketId: "sub" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l08-a1", type: "practice", title: "Snack Math", content: "At snack time, count your crackers. Eat one — how many left? Get one more — how many now? You are doing math!" },
      ],
    },

    // ── L09  Measurement: Big and Small ───────────────────────
    {
      id: "pre-k-advanced-math-101-l09",
      title: "Big, Small, and In Between",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-advanced-math-101-l09-c1",
          title: "Comparing Sizes",
          content:
            "Math is not just about numbers — it is also about comparing! Which is bigger, an elephant or a mouse? Which is taller, a tree or a flower? When you compare, you are using measurement words.",
        },
        {
          id: "pre-k-advanced-math-101-l09-c2",
          title: "Measurement Words",
          content:
            "Bigger and smaller talk about overall size. Taller and shorter talk about height. Longer and shorter can talk about length — like which pencil is longer. Heavier and lighter talk about weight — a watermelon is heavier than a grape!",
        },
        {
          id: "pre-k-advanced-math-101-l09-c3",
          title: "Measuring Without a Ruler",
          content:
            "You can measure things with your body! How many hand-widths long is your pillow? How many footsteps across the room? This is called non-standard measurement, and kids have been doing it forever!",
        },
      ],
      flashcards: [
        { id: "pre-k-advanced-math-101-l09-fc1", front: "What words compare height?", back: "Taller and shorter." },
        { id: "pre-k-advanced-math-101-l09-fc2", front: "What words compare weight?", back: "Heavier and lighter." },
        { id: "pre-k-advanced-math-101-l09-fc3", front: "How can you measure without a ruler?", back: "Use your hands, feet, or blocks to measure length!" },
      ],
      learningAids: [
        { id: "pre-k-advanced-math-101-l09-a1", type: "practice", title: "Body Measurement", content: "How many of YOUR feet does it take to walk across the kitchen? Count and write the number!" },
      ],
    },

    // ── L10  Celebration Quiz ─────────────────────────────────
    {
      id: "pre-k-advanced-math-101-l10",
      title: "Celebration Quiz: Math Adventures!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-advanced-math-101-l10-q1",
          text: "3 + 2 = ?",
          skillId: "pre-k-advanced-math-101-skill-addition",
          options: [
            { id: "a", text: "5" },
            { id: "b", text: "4" },
            { id: "c", text: "6" },
            { id: "d", text: "1" },
          ],
          correctOptionId: "a",
          explanation: "Hold up 3 fingers and then 2 more. Count them all: 1, 2, 3, 4, 5!",
        },
        {
          id: "pre-k-advanced-math-101-l10-q2",
          text: "4 − 1 = ?",
          skillId: "pre-k-advanced-math-101-skill-subtraction",
          options: [
            { id: "a", text: "3" },
            { id: "b", text: "5" },
            { id: "c", text: "4" },
            { id: "d", text: "2" },
          ],
          correctOptionId: "a",
          explanation: "Start with 4, take away 1, and you have 3 left!",
        },
        {
          id: "pre-k-advanced-math-101-l10-q3",
          text: "Star, heart, heart, star, heart, heart, ___? What comes next?",
          skillId: "pre-k-advanced-math-101-skill-patterns",
          options: [
            { id: "a", text: "Star" },
            { id: "b", text: "Heart" },
            { id: "c", text: "Circle" },
            { id: "d", text: "Square" },
          ],
          correctOptionId: "a",
          explanation: "This is an ABB pattern. After heart-heart, the pattern starts over with star!",
        },
        {
          id: "pre-k-advanced-math-101-l10-q4",
          text: "How many sides does a triangle have?",
          skillId: "pre-k-advanced-math-101-skill-shapes",
          options: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "0" },
            { id: "d", text: "5" },
          ],
          correctOptionId: "a",
          explanation: "Tri means three! A triangle has 3 sides and 3 corners.",
        },
        {
          id: "pre-k-advanced-math-101-l10-q5",
          text: "Which word describes how HEAVY something is?",
          skillId: "pre-k-advanced-math-101-skill-measurement",
          options: [
            { id: "a", text: "Heavier or lighter" },
            { id: "b", text: "Taller or shorter" },
            { id: "c", text: "Longer or shorter" },
            { id: "d", text: "Faster or slower" },
          ],
          correctOptionId: "a",
          explanation: "Heavier and lighter compare weight — like a watermelon (heavy) vs. a grape (light).",
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
        { id: "pre-k-advanced-math-101-l10-a1", type: "mnemonic", title: "Math Rhyme", content: "Shapes have sides, patterns repeat, adding puts together, subtracting is neat!" },
      ],
    },
  ],
};
