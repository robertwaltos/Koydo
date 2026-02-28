import type { LearningModule } from "@/lib/modules/types";

export const PreKHouseholdManagement101Module: LearningModule = {
  id: "pre-k-household-management-101",
  title: "Pre-K Home Routines and Helpers",
  description:
    "Learn about daily routines, tidying up, kitchen safety, healthy habits, and being a great helper at home through stories, sorting games, and pretend play for ages 3-5.",
  subject: "Household Management",
  tags: ["pre-k", "curriculum", "interactive", "routines", "chores", "safety", "health"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "4.0.0",
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe a simple morning and bedtime routine",
    "Identify age-appropriate chores like picking up toys and setting the table",
    "Explain basic kitchen safety rules (hot stove, sharp knives, wash hands)",
    "Demonstrate healthy hygiene habits: hand washing, tooth brushing, bathing",
    "Show how helping at home makes the whole family happier",
  ],
  lessons: [
    // ── L01  Morning Routines ─────────────────────────────────
    {
      id: "pre-k-household-management-101-l01",
      title: "Good Morning Routine",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-household-management-101-l01-c1",
          title: "Wake Up and Stretch",
          content:
            "Every good day starts the same way! When you wake up, stretch your arms up high like a giraffe. Take a deep breath in and blow it out slowly. Now you are ready to start your morning routine!",
        },
        {
          id: "pre-k-household-management-101-l01-c2",
          title: "The Morning Steps",
          content:
            "A routine is a list of steps you do the same way every day. A morning routine might be: wake up → use the bathroom → wash hands and face → brush teeth → get dressed → eat breakfast. Doing the same steps each day helps you remember everything!",
        },
        {
          id: "pre-k-household-management-101-l01-c3",
          title: "Why Routines Help",
          content:
            "Routines make mornings less stressful. When you know what comes next, you feel calm and in control. You will not forget to brush your teeth or put on socks! Routines are like a superpower for being organized.",
        },
      ],
      flashcards: [
        { id: "pre-k-household-management-101-l01-fc1", front: "What is a routine?", back: "A list of steps you do the same way every day." },
        { id: "pre-k-household-management-101-l01-fc2", front: "Name three things in a morning routine.", back: "Brush teeth, get dressed, and eat breakfast." },
        { id: "pre-k-household-management-101-l01-fc3", front: "Why are routines helpful?", back: "They help you remember everything and feel calm." },
      ],
      learningAids: [
        { id: "pre-k-household-management-101-l01-a1", type: "image", title: "Morning Chart", content: "Colorful picture chart: wake up → bathroom → brush teeth → get dressed → breakfast, each with a checkbox." },
      ],
    },

    // ── L02  Bedtime Routines ─────────────────────────────────
    {
      id: "pre-k-household-management-101-l02",
      title: "Bedtime Wind-Down",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-household-management-101-l02-c1",
          title: "Getting Ready for Sleep",
          content:
            "A bedtime routine helps your body and brain get ready for sleep. First, put your toys away. Then take a warm bath or wash up. Put on your pajamas and brush your teeth. Your body starts to feel sleepy when you do the same calm things each night.",
        },
        {
          id: "pre-k-household-management-101-l02-c2",
          title: "Story Time and Quiet Time",
          content:
            "After getting clean and cozy, it is time to wind down. Read a book with a grown-up, or listen to a calm story. Quiet activities tell your brain: 'It is almost time to sleep!' Screens and loud games do the opposite — they wake your brain up.",
        },
        {
          id: "pre-k-household-management-101-l02-c3",
          title: "Sleep Is Important",
          content:
            "Kids ages 3-5 need about 10-13 hours of sleep! While you sleep, your brain sorts all the things you learned today and your body grows stronger. Good sleep means you wake up happy, healthy, and ready for a new day.",
        },
      ],
      flashcards: [
        { id: "pre-k-household-management-101-l02-fc1", front: "Why should you avoid screens before bed?", back: "Screens wake your brain up and make it harder to fall asleep." },
        { id: "pre-k-household-management-101-l02-fc2", front: "How many hours of sleep do young kids need?", back: "About 10-13 hours." },
        { id: "pre-k-household-management-101-l02-fc3", front: "What does your brain do while you sleep?", back: "It sorts everything you learned and helps your body grow stronger." },
      ],
      learningAids: [
        { id: "pre-k-household-management-101-l02-a1", type: "image", title: "Bedtime Chart", content: "Picture chart: pick up toys → bath → pajamas → brush teeth → story → lights out." },
      ],
    },

    // ── L03  Routine Sorting (Interactive) ────────────────────
    {
      id: "pre-k-household-management-101-l03",
      title: "Morning or Bedtime?",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "When do you brush your teeth — morning, bedtime, or both?",
          "What is the first thing you do when you wake up?",
          "Tell a grown-up your bedtime routine from memory.",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-household-management-101-l03-ia1",
          type: "sorting_buckets",
          title: "Morning or Bedtime?",
          description: "Drag each activity into the Morning bucket or the Bedtime bucket.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "morning", label: "Morning ☀️" },
              { id: "bedtime", label: "Bedtime 🌙" },
            ],
            items: [
              { id: "i1", label: "Eat breakfast 🥣", correctBucketId: "morning" },
              { id: "i2", label: "Put on pajamas 👕", correctBucketId: "bedtime" },
              { id: "i3", label: "Get dressed for the day 👗", correctBucketId: "morning" },
              { id: "i4", label: "Read a bedtime story 📖", correctBucketId: "bedtime" },
              { id: "i5", label: "Stretch and say good morning 🌅", correctBucketId: "morning" },
              { id: "i6", label: "Turn off the lights 🔦", correctBucketId: "bedtime" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-household-management-101-l03-a1", type: "practice", title: "Make Your Own Chart", content: "Draw pictures of your morning routine on paper. Hang it on your wall and check off each step every day!" },
      ],
    },

    // ── L04  Tidying Up ───────────────────────────────────────
    {
      id: "pre-k-household-management-101-l04",
      title: "Tidying Up: Everything Has a Home",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-household-management-101-l04-c1",
          title: "Everything Has a Place",
          content:
            "Just like you have a bed to sleep in, your toys and books have places to live too! Blocks go in the block bin. Books go on the shelf. Crayons go in the art box. When everything is in its home, you can find things easily.",
        },
        {
          id: "pre-k-household-management-101-l04-c2",
          title: "The Clean-Up Song",
          content:
            "Cleaning up is more fun with a song! Sing 'Clean up, clean up, everybody everywhere. Clean up, clean up, everybody do your share!' Put things away one group at a time: first blocks, then books, then stuffed animals.",
        },
        {
          id: "pre-k-household-management-101-l04-c3",
          title: "Setting the Table",
          content:
            "One great chore for kids is setting the table! Put a plate in front of each chair, a fork on the left side, a spoon and knife on the right. Add a cup and a napkin. When you set the table, you are a real helper!",
        },
      ],
      flashcards: [
        { id: "pre-k-household-management-101-l04-fc1", front: "Why should toys have a special place?", back: "So you can find them easily and keep your room tidy." },
        { id: "pre-k-household-management-101-l04-fc2", front: "Which side does the fork go on when setting a table?", back: "The left side." },
        { id: "pre-k-household-management-101-l04-fc3", front: "What is one trick to make clean-up fun?", back: "Sing a clean-up song while you tidy!" },
      ],
      learningAids: [
        { id: "pre-k-household-management-101-l04-a1", type: "image", title: "Place Setting", content: "Picture of a proper place setting: plate in center, fork on left, knife and spoon on right, cup above." },
      ],
    },

    // ── L05  Checkpoint Quiz 1 ────────────────────────────────
    {
      id: "pre-k-household-management-101-l05",
      title: "Checkpoint: Routines and Tidying",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-household-management-101-l05-q1",
          text: "What is a routine?",
          skillId: "pre-k-household-management-101-skill-routines",
          options: [
            { id: "a", text: "Steps you do the same way every day" },
            { id: "b", text: "A type of dance move" },
            { id: "c", text: "A kind of breakfast food" },
            { id: "d", text: "A special toy" },
          ],
          correctOptionId: "a",
          explanation: "A routine is a set of steps you do in the same order every day — like your morning routine!",
        },
        {
          id: "pre-k-household-management-101-l05-q2",
          text: "How many hours of sleep do kids ages 3-5 need?",
          skillId: "pre-k-household-management-101-skill-sleep",
          options: [
            { id: "a", text: "10-13 hours" },
            { id: "b", text: "3-4 hours" },
            { id: "c", text: "24 hours" },
            { id: "d", text: "1 hour" },
          ],
          correctOptionId: "a",
          explanation: "Young kids need lots of sleep — about 10 to 13 hours — so their brains and bodies can grow!",
        },
        {
          id: "pre-k-household-management-101-l05-q3",
          text: "Which side of the plate does the fork go on?",
          skillId: "pre-k-household-management-101-skill-chores",
          options: [
            { id: "a", text: "The left side" },
            { id: "b", text: "The right side" },
            { id: "c", text: "On top of the plate" },
            { id: "d", text: "Under the plate" },
          ],
          correctOptionId: "a",
          explanation: "Fork goes on the left! A trick: 'fork' and 'left' both have four letters.",
        },
        {
          id: "pre-k-household-management-101-l05-q4",
          text: "Why should you avoid screens before bedtime?",
          skillId: "pre-k-household-management-101-skill-sleep",
          options: [
            { id: "a", text: "They wake your brain up and make it harder to sleep" },
            { id: "b", text: "They use up all the electricity" },
            { id: "c", text: "They make you hungry" },
            { id: "d", text: "They turn your room blue" },
          ],
          correctOptionId: "a",
          explanation: "Bright screens tell your brain it is daytime. Quiet activities help your brain relax for sleep.",
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

    // ── L06  Kitchen Safety ───────────────────────────────────
    {
      id: "pre-k-household-management-101-l06",
      title: "Kitchen Safety",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-household-management-101-l06-c1",
          title: "Hot Things: Stay Away!",
          content:
            "The stove, oven, and toaster get very HOT. Never touch them without a grown-up's help. Hot pans, boiling water, and steam can burn your skin. Always ask before going near anything hot in the kitchen.",
        },
        {
          id: "pre-k-household-management-101-l06-c2",
          title: "Sharp Things: Grown-Up Only",
          content:
            "Knives, scissors, and peelers are sharp and can cut you. Only grown-ups should use sharp tools. If you need something cut, ask for help. You can use kid-safe plastic knives for soft foods like bananas!",
        },
        {
          id: "pre-k-household-management-101-l06-c3",
          title: "Wash Your Hands First!",
          content:
            "Always wash your hands with soap and water before touching food. Scrub for 20 seconds — sing 'Happy Birthday' twice! Germs on your hands can get into food and make people sick. Clean hands = safe cooking.",
        },
      ],
      flashcards: [
        { id: "pre-k-household-management-101-l06-fc1", front: "What should you do before touching any food?", back: "Wash your hands with soap and water for 20 seconds." },
        { id: "pre-k-household-management-101-l06-fc2", front: "Who should use sharp knives in the kitchen?", back: "Only grown-ups!" },
        { id: "pre-k-household-management-101-l06-fc3", front: "Why should you never touch the stove without asking?", back: "It gets very hot and can burn your skin." },
      ],
      learningAids: [
        { id: "pre-k-household-management-101-l06-a1", type: "image", title: "Kitchen Safety Rules", content: "Three rule cards: 🔥 Don't touch hot things, 🔪 Ask before sharp things, 🧼 Wash hands first." },
      ],
    },

    // ── L07  Safe or Not Safe? (Interactive) ──────────────────
    {
      id: "pre-k-household-management-101-l07",
      title: "Safe or Not Safe?",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Is it safe to touch the stove by yourself?",
          "What should you always do before cooking?",
          "Name one kitchen tool that only grown-ups should use.",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-household-management-101-l07-ia1",
          type: "sorting_buckets",
          title: "Safe or Not Safe in the Kitchen?",
          description: "Drag each action into the Safe or Not Safe bucket.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "safe", label: "Safe ✅" },
              { id: "not-safe", label: "Not Safe ❌" },
            ],
            items: [
              { id: "i1", label: "Wash hands before cooking 🧼", correctBucketId: "safe" },
              { id: "i2", label: "Touch the hot stove 🔥", correctBucketId: "not-safe" },
              { id: "i3", label: "Help stir with a wooden spoon 🥄", correctBucketId: "safe" },
              { id: "i4", label: "Use a sharp knife alone 🔪", correctBucketId: "not-safe" },
              { id: "i5", label: "Wipe the table after eating 🧹", correctBucketId: "safe" },
              { id: "i6", label: "Reach into the oven by yourself", correctBucketId: "not-safe" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-household-management-101-l07-a1", type: "practice", title: "Kitchen Helper", content: "Ask a grown-up if you can help make a snack. Practice washing hands first, then help stir, pour, or arrange food on a plate." },
      ],
    },

    // ── L08  Healthy Hygiene ──────────────────────────────────
    {
      id: "pre-k-household-management-101-l08",
      title: "Healthy Hygiene Habits",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-household-management-101-l08-c1",
          title: "Hand Washing Superhero",
          content:
            "Washing hands is the #1 way to stop germs! Wet your hands, add soap, and scrub everywhere — between fingers, under nails, backs of hands. Sing 'Happy Birthday' twice (about 20 seconds). Rinse and dry with a clean towel. You are a germ-fighting superhero!",
        },
        {
          id: "pre-k-household-management-101-l08-c2",
          title: "Brush Those Teeth",
          content:
            "Brush your teeth two times a day — morning and night. Use a pea-sized blob of toothpaste. Brush in small circles on every tooth: front, back, and top. Do not forget your tongue! Brushing keeps your teeth strong and your smile bright.",
        },
        {
          id: "pre-k-household-management-101-l08-c3",
          title: "Bath Time and Clean Clothes",
          content:
            "A bath or shower washes away dirt, sweat, and germs. Use soap on your body and shampoo on your hair. After drying off, put on clean clothes. Clean bodies feel fresh and help you stay healthy!",
        },
      ],
      flashcards: [
        { id: "pre-k-household-management-101-l08-fc1", front: "How long should you wash your hands?", back: "20 seconds — sing 'Happy Birthday' twice." },
        { id: "pre-k-household-management-101-l08-fc2", front: "How many times a day should you brush your teeth?", back: "Two times — morning and night." },
        { id: "pre-k-household-management-101-l08-fc3", front: "Why is bathing important?", back: "It washes away dirt, sweat, and germs to keep you healthy." },
      ],
      learningAids: [
        { id: "pre-k-household-management-101-l08-a1", type: "image", title: "Hand Washing Steps", content: "Five-step picture guide: wet → soap → scrub 20 seconds → rinse → dry." },
      ],
    },

    // ── L09  Hygiene Match (Interactive) ──────────────────────
    {
      id: "pre-k-household-management-101-l09",
      title: "Hygiene Match Game",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Show me how you wash your hands.",
          "When should you brush your teeth?",
          "Why do we use soap?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-household-management-101-l09-ia1",
          type: "matching_pairs",
          title: "Match the Hygiene Tool",
          description: "Match each hygiene task to the tool you need.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Brush teeth 🦷" },
              { id: "l2", label: "Wash hands 🤲" },
              { id: "l3", label: "Wash hair 💇" },
              { id: "l4", label: "Dry off after bath 🛁" },
            ],
            right: [
              { id: "r1", label: "Toothbrush + toothpaste" },
              { id: "r2", label: "Soap + water" },
              { id: "r3", label: "Shampoo" },
              { id: "r4", label: "Towel" },
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
        { id: "pre-k-household-management-101-l09-a1", type: "practice", title: "Germ Experiment", content: "Put glitter on your hands (pretend germs!). Try washing with just water — glitter stays! Now use soap and scrub — the glitter washes away. That is what soap does to real germs!" },
      ],
    },

    // ── L10  Celebration Quiz ─────────────────────────────────
    {
      id: "pre-k-household-management-101-l10",
      title: "Celebration Quiz: Home Helpers!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-household-management-101-l10-q1",
          text: "How long should you scrub your hands with soap?",
          skillId: "pre-k-household-management-101-skill-hygiene",
          options: [
            { id: "a", text: "20 seconds (sing Happy Birthday twice)" },
            { id: "b", text: "1 second" },
            { id: "c", text: "5 minutes" },
            { id: "d", text: "You do not need soap" },
          ],
          correctOptionId: "a",
          explanation: "Scrubbing with soap for 20 seconds kills most germs. Singing helps you time it!",
        },
        {
          id: "pre-k-household-management-101-l10-q2",
          text: "Who should use sharp knives in the kitchen?",
          skillId: "pre-k-household-management-101-skill-safety",
          options: [
            { id: "a", text: "Only grown-ups" },
            { id: "b", text: "Anyone who is hungry" },
            { id: "c", text: "Pets" },
            { id: "d", text: "Babies" },
          ],
          correctOptionId: "a",
          explanation: "Sharp knives can cut you. Always ask a grown-up to help with sharp tools.",
        },
        {
          id: "pre-k-household-management-101-l10-q3",
          text: "Why are routines helpful?",
          skillId: "pre-k-household-management-101-skill-routines",
          options: [
            { id: "a", text: "They help you remember everything and feel calm" },
            { id: "b", text: "They make you forget things" },
            { id: "c", text: "They make mornings longer" },
            { id: "d", text: "They are only for grown-ups" },
          ],
          correctOptionId: "a",
          explanation: "When you follow the same steps every day, you will not forget anything and you will feel less stressed.",
        },
        {
          id: "pre-k-household-management-101-l10-q4",
          text: "How many times a day should you brush your teeth?",
          skillId: "pre-k-household-management-101-skill-hygiene",
          options: [
            { id: "a", text: "Two — morning and night" },
            { id: "b", text: "Once a week" },
            { id: "c", text: "Never" },
            { id: "d", text: "Ten times a day" },
          ],
          correctOptionId: "a",
          explanation: "Brushing morning and night keeps your teeth strong and your smile healthy!",
        },
        {
          id: "pre-k-household-management-101-l10-q5",
          text: "What is one chore a kid can do to help at home?",
          skillId: "pre-k-household-management-101-skill-chores",
          options: [
            { id: "a", text: "Set the table for dinner" },
            { id: "b", text: "Drive the car to the store" },
            { id: "c", text: "Fix the roof" },
            { id: "d", text: "Cook a turkey by yourself" },
          ],
          correctOptionId: "a",
          explanation: "Setting the table is a great kid chore! Put a plate, fork, spoon, cup, and napkin at each spot.",
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
        { id: "pre-k-household-management-101-l10-a1", type: "mnemonic", title: "Helper Rhyme", content: "Wash your hands, brush your teeth, tidy up and get some sleep. Be a helper every day — that's the happy, healthy way!" },
      ],
    },
  ],
};
