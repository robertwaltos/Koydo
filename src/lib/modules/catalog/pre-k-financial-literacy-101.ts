import type { LearningModule } from "@/lib/modules/types";

export const PreKFinancialLiteracy101Module: LearningModule = {
  id: "pre-k-financial-literacy-101",
  title: "Pre-K Money Choices for Kids",
  description:
    "Introduce 3-5 year-olds to coins, needs vs. wants, saving, sharing, and simple spending choices through stories, sorting games, and pretend play.",
  subject: "Financial Literacy",
  tags: ["pre-k", "curriculum", "interactive", "money", "saving", "coins"],
  minAge: 3,
  maxAge: 5,
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Identify pennies, nickels, dimes, and quarters by sight",
    "Explain the difference between needs and wants",
    "Demonstrate saving by placing coins into a piggy bank or jar",
    "Practice making simple spending choices with pretend money",
    "Show generosity through sharing and giving examples",
  ],
  lessons: [
    // ── L01  Coins All Around ──────────────────────────────────
    {
      id: "pre-k-financial-literacy-101-l01",
      title: "Coins All Around",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-financial-literacy-101-l01-c1",
          title: "What Is Money?",
          content:
            "Money is what people use to buy things they need and want. Long ago people traded things — like eggs for bread — but coins and bills make it easier! Today we will look at four special coins.",
        },
        {
          id: "pre-k-financial-literacy-101-l01-c2",
          title: "Meet the Coins",
          content:
            "A penny is small and copper-colored — it is worth 1 cent. A nickel is bigger and silver — 5 cents. A dime is the tiniest silver coin — but worth 10 cents! A quarter is the biggest — 25 cents. Remember: bigger does not always mean more!",
        },
        {
          id: "pre-k-financial-literacy-101-l01-c3",
          title: "Coins in Real Life",
          content:
            "You might find coins in a piggy bank, on the sidewalk, or in a grown-up's pocket. Some vending machines take quarters. Coin-operated laundry machines use quarters too. When you see coins, try to name them!",
        },
      ],
      flashcards: [
        { id: "pre-k-financial-literacy-101-l01-fc1", front: "Which coin is copper-colored?", back: "Penny (1 cent)" },
        { id: "pre-k-financial-literacy-101-l01-fc2", front: "Which coin is the smallest but worth more than a nickel?", back: "Dime (10 cents)" },
        { id: "pre-k-financial-literacy-101-l01-fc3", front: "How much is a quarter worth?", back: "25 cents" },
        { id: "pre-k-financial-literacy-101-l01-fc4", front: "Which is worth more — a big nickel or a tiny dime?", back: "The dime! 10 cents beats 5 cents." },
      ],
      learningAids: [
        { id: "pre-k-financial-literacy-101-l01-a1", type: "image", title: "Coin Lineup", content: "Color picture showing penny, nickel, dime, and quarter side-by-side with their values." },
      ],
    },

    // ── L02  Needs vs. Wants ───────────────────────────────────
    {
      id: "pre-k-financial-literacy-101-l02",
      title: "Needs vs. Wants",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-financial-literacy-101-l02-c1",
          title: "What Are Needs?",
          content:
            "Needs are things you must have to be safe and healthy. Food, water, a home, clothes, and medicine are all needs. Without them, people get sick or cold.",
        },
        {
          id: "pre-k-financial-literacy-101-l02-c2",
          title: "What Are Wants?",
          content:
            "Wants are things that are fun or nice to have but you can live without them. Toys, candy, stickers, and video games are wants. Wants make life fun, but needs come first!",
        },
        {
          id: "pre-k-financial-literacy-101-l02-c3",
          title: "The Tricky Ones",
          content:
            "Some things seem tricky! Is a bicycle a need or a want? Usually a want — you can walk instead. What about shoes? Those are a need because your feet need protection. If you are not sure, ask: 'Would I be safe and healthy without it?'",
        },
      ],
      flashcards: [
        { id: "pre-k-financial-literacy-101-l02-fc1", front: "Is food a need or a want?", back: "A need — you must eat to be healthy." },
        { id: "pre-k-financial-literacy-101-l02-fc2", front: "Is a toy car a need or a want?", back: "A want — it is fun but you can live without it." },
        { id: "pre-k-financial-literacy-101-l02-fc3", front: "How can you tell if something is a need?", back: "Ask: 'Would I be safe and healthy without it?'" },
      ],
      learningAids: [
        { id: "pre-k-financial-literacy-101-l02-a1", type: "image", title: "Needs vs. Wants Chart", content: "Two-column picture chart with needs (food, house, coat) on one side and wants (toys, candy, stickers) on the other." },
      ],
    },

    // ── L03  Needs & Wants Sorting (Interactive) ──────────────
    {
      id: "pre-k-financial-literacy-101-l03",
      title: "Sort It Out: Needs & Wants",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Is a warm coat a need or a want?",
          "What about a stuffed animal?",
          "Tell a grown-up one need and one want you have.",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-financial-literacy-101-l03-ia1",
          type: "sorting_buckets",
          title: "Needs & Wants Sort",
          description: "Drag each picture into the Needs bucket or the Wants bucket.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "needs", label: "Needs" },
              { id: "wants", label: "Wants" },
            ],
            items: [
              { id: "i1", label: "Apple 🍎", correctBucketId: "needs" },
              { id: "i2", label: "Toy truck 🚗", correctBucketId: "wants" },
              { id: "i3", label: "Warm coat 🧥", correctBucketId: "needs" },
              { id: "i4", label: "Candy 🍬", correctBucketId: "wants" },
              { id: "i5", label: "Water 💧", correctBucketId: "needs" },
              { id: "i6", label: "Video game 🎮", correctBucketId: "wants" },
              { id: "i7", label: "House 🏠", correctBucketId: "needs" },
              { id: "i8", label: "Stickers ⭐", correctBucketId: "wants" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-financial-literacy-101-l03-a1", type: "practice", title: "Home Scavenger Hunt", content: "Walk around your home with a grown-up. Point to things and say 'Need!' or 'Want!' for each one." },
      ],
    },

    // ── L04  Saving for Later ─────────────────────────────────
    {
      id: "pre-k-financial-literacy-101-l04",
      title: "Saving for Later",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-financial-literacy-101-l04-c1",
          title: "What Is Saving?",
          content:
            "Saving means keeping some money instead of spending it all right away. When you save, your money pile grows! A piggy bank, a jar, or an envelope are all good places to save coins.",
        },
        {
          id: "pre-k-financial-literacy-101-l04-c2",
          title: "Why Save?",
          content:
            "Sometimes you want something that costs more than the coins you have right now. If you save a little bit each day, soon you will have enough! Saving teaches patience — waiting can be hard, but the reward feels great.",
        },
        {
          id: "pre-k-financial-literacy-101-l04-c3",
          title: "The Three-Jar System",
          content:
            "Many families use three jars: one for SAVING (keep for later), one for SPENDING (use soon), and one for SHARING (give to others). When you get coins, put some in each jar. That way you save, enjoy, and help — all at once!",
        },
      ],
      flashcards: [
        { id: "pre-k-financial-literacy-101-l04-fc1", front: "What does saving mean?", back: "Keeping money to use later instead of spending it all now." },
        { id: "pre-k-financial-literacy-101-l04-fc2", front: "Name one place you can save coins.", back: "A piggy bank, a jar, or an envelope." },
        { id: "pre-k-financial-literacy-101-l04-fc3", front: "What are the three jars?", back: "Save, Spend, and Share." },
      ],
      learningAids: [
        { id: "pre-k-financial-literacy-101-l04-a1", type: "image", title: "Three Jars", content: "Colorful picture of three labeled jars: Save (green), Spend (blue), Share (pink) with coins inside." },
      ],
    },

    // ── L05  Checkpoint Quiz 1 ────────────────────────────────
    {
      id: "pre-k-financial-literacy-101-l05",
      title: "Checkpoint: Coins, Needs & Saving",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-financial-literacy-101-l05-q1",
          text: "Which coin is worth 25 cents?",
          skillId: "pre-k-financial-literacy-101-skill-coins",
          options: [
            { id: "a", text: "Quarter" },
            { id: "b", text: "Penny" },
            { id: "c", text: "Nickel" },
            { id: "d", text: "Dime" },
          ],
          correctOptionId: "a",
          explanation: "A quarter is the biggest common coin and is worth 25 cents.",
        },
        {
          id: "pre-k-financial-literacy-101-l05-q2",
          text: "Which of these is a NEED?",
          skillId: "pre-k-financial-literacy-101-skill-needs-wants",
          options: [
            { id: "a", text: "A warm coat in winter" },
            { id: "b", text: "A toy dinosaur" },
            { id: "c", text: "A bag of candy" },
            { id: "d", text: "A box of stickers" },
          ],
          correctOptionId: "a",
          explanation: "A warm coat keeps you safe and healthy in cold weather — that is a need.",
        },
        {
          id: "pre-k-financial-literacy-101-l05-q3",
          text: "What does saving money mean?",
          skillId: "pre-k-financial-literacy-101-skill-saving",
          options: [
            { id: "a", text: "Keeping some money to use later" },
            { id: "b", text: "Throwing coins in the trash" },
            { id: "c", text: "Buying everything at once" },
            { id: "d", text: "Giving all your money away" },
          ],
          correctOptionId: "a",
          explanation: "Saving means keeping some money instead of spending it all right away.",
        },
        {
          id: "pre-k-financial-literacy-101-l05-q4",
          text: "Which coin is the smallest but worth MORE than a nickel?",
          skillId: "pre-k-financial-literacy-101-skill-coins",
          options: [
            { id: "a", text: "Dime" },
            { id: "b", text: "Penny" },
            { id: "c", text: "Quarter" },
            { id: "d", text: "A button" },
          ],
          correctOptionId: "a",
          explanation: "A dime is tiny but worth 10 cents — more than a nickel's 5 cents!",
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

    // ── L06  Spending Wisely ──────────────────────────────────
    {
      id: "pre-k-financial-literacy-101-l06",
      title: "Spending Wisely",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-financial-literacy-101-l06-c1",
          title: "What Is Spending?",
          content:
            "Spending means giving money to get something in return. When you buy an apple at a store, you spend money and get a yummy snack. When money is spent, it is gone — you cannot use it again!",
        },
        {
          id: "pre-k-financial-literacy-101-l06-c2",
          title: "Making Choices",
          content:
            "You usually cannot buy everything you see. That means you have to choose! Ask yourself: 'Do I really need this, or do I just want it right now?' Thinking before spending is called being a smart shopper.",
        },
        {
          id: "pre-k-financial-literacy-101-l06-c3",
          title: "Pretend Store",
          content:
            "Let's imagine a pretend store. You have 5 coins. A banana costs 2 coins. A toy car costs 4 coins. Can you buy both? No — 2 + 4 = 6, and you only have 5! You have to pick the one you want most.",
        },
      ],
      flashcards: [
        { id: "pre-k-financial-literacy-101-l06-fc1", front: "What happens when you spend money?", back: "You give money and get something, but the money is gone." },
        { id: "pre-k-financial-literacy-101-l06-fc2", front: "What should you ask before buying?", back: "'Do I really need this, or do I just want it right now?'" },
        { id: "pre-k-financial-literacy-101-l06-fc3", front: "If you have 5 coins and a toy costs 4, how many coins are left?", back: "1 coin left (5 − 4 = 1)." },
      ],
      learningAids: [
        { id: "pre-k-financial-literacy-101-l06-a1", type: "animation", title: "Pretend Store", content: "Animation showing a child choosing between two items at a store counter with a coin counter." },
      ],
    },

    // ── L07  Store Choices (Interactive) ──────────────────────
    {
      id: "pre-k-financial-literacy-101-l07",
      title: "Pretend Store Choices",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "You have 5 coins. What would you buy?",
          "Is there something you would save for instead?",
          "Tell a grown-up why you picked that item.",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-financial-literacy-101-l07-ia1",
          type: "matching_pairs",
          title: "Price Tag Match",
          description: "Match each item to its coin price.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Apple 🍎" },
              { id: "l2", label: "Teddy bear 🧸" },
              { id: "l3", label: "Pencil ✏️" },
              { id: "l4", label: "Book 📖" },
            ],
            right: [
              { id: "r1", label: "1 coin" },
              { id: "r2", label: "4 coins" },
              { id: "r3", label: "1 coin" },
              { id: "r4", label: "3 coins" },
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
        { id: "pre-k-financial-literacy-101-l07-a1", type: "practice", title: "Kitchen Store", content: "Set up a pretend store at home with real items and play coins. Practice buying, counting change, and making choices." },
      ],
    },

    // ── L08  Sharing and Giving ───────────────────────────────
    {
      id: "pre-k-financial-literacy-101-l08",
      title: "Sharing and Giving",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-financial-literacy-101-l08-c1",
          title: "Why Share?",
          content:
            "Sharing means giving some of what you have to help others. When you share toys with a friend, everyone has fun! When you share food, nobody is hungry. Sharing makes communities stronger.",
        },
        {
          id: "pre-k-financial-literacy-101-l08-c2",
          title: "Sharing Money",
          content:
            "Remember the three jars? The SHARE jar is for money you give to help others. Some families put coins in a donation box, give to neighbors, or help buy food for a food bank. Even one coin can help!",
        },
        {
          id: "pre-k-financial-literacy-101-l08-c3",
          title: "Giving Time and Kindness",
          content:
            "You do not always need money to share. You can share your time — help clean up, draw a picture for someone, or hold the door. Kindness is free and it always counts!",
        },
      ],
      flashcards: [
        { id: "pre-k-financial-literacy-101-l08-fc1", front: "What is the SHARE jar for?", back: "Money you give to help other people." },
        { id: "pre-k-financial-literacy-101-l08-fc2", front: "Name one way to share without money.", back: "Help clean up, draw a picture, or hold the door for someone." },
        { id: "pre-k-financial-literacy-101-l08-fc3", front: "Why does sharing make communities stronger?", back: "When everyone helps, nobody is left out and everyone has what they need." },
      ],
      learningAids: [
        { id: "pre-k-financial-literacy-101-l08-a1", type: "image", title: "Sharing Circle", content: "Children passing items around a circle, each one smiling as they give and receive." },
      ],
    },

    // ── L09  Earning and Jobs ─────────────────────────────────
    {
      id: "pre-k-financial-literacy-101-l09",
      title: "Earning and Jobs",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-financial-literacy-101-l09-c1",
          title: "Where Does Money Come From?",
          content:
            "Grown-ups earn money by working at jobs. A teacher teaches, a doctor helps sick people, a farmer grows food. They work hard and get paid with money so they can buy needs and wants.",
        },
        {
          id: "pre-k-financial-literacy-101-l09-c2",
          title: "Kid Jobs",
          content:
            "Even kids can earn! You can help set the table, pick up toys, water plants, or feed a pet. Some families give a small allowance for helping out. Earning teaches you that money comes from effort.",
        },
        {
          id: "pre-k-financial-literacy-101-l09-c3",
          title: "Effort and Reward",
          content:
            "When you do a job well, the reward feels extra special. If you save up coins you earned yourself, buying something with YOUR money feels amazing! That is the power of earning.",
        },
      ],
      flashcards: [
        { id: "pre-k-financial-literacy-101-l09-fc1", front: "How do grown-ups get money?", back: "They earn it by working at jobs." },
        { id: "pre-k-financial-literacy-101-l09-fc2", front: "Name one way a kid can earn.", back: "Help with chores like setting the table or watering plants." },
        { id: "pre-k-financial-literacy-101-l09-fc3", front: "Why does spending money you earned yourself feel special?", back: "Because you worked hard to get it!" },
      ],
      learningAids: [
        { id: "pre-k-financial-literacy-101-l09-a1", type: "image", title: "Community Helpers", content: "Pictures of a teacher, doctor, farmer, firefighter with 'They earn money by helping!' caption." },
      ],
    },

    // ── L10  Celebration Quiz ─────────────────────────────────
    {
      id: "pre-k-financial-literacy-101-l10",
      title: "Celebration Quiz: Money Choices!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-financial-literacy-101-l10-q1",
          text: "What are the three jars for?",
          skillId: "pre-k-financial-literacy-101-skill-saving",
          options: [
            { id: "a", text: "Save, Spend, and Share" },
            { id: "b", text: "Eat, Sleep, and Play" },
            { id: "c", text: "Red, Blue, and Green" },
            { id: "d", text: "Big, Medium, and Small" },
          ],
          correctOptionId: "a",
          explanation: "The three jars help you save for later, spend on things you need, and share with others.",
        },
        {
          id: "pre-k-financial-literacy-101-l10-q2",
          text: "You have 3 coins. A ball costs 2 coins. How many do you have left?",
          skillId: "pre-k-financial-literacy-101-skill-spending",
          options: [
            { id: "a", text: "1 coin" },
            { id: "b", text: "3 coins" },
            { id: "c", text: "0 coins" },
            { id: "d", text: "5 coins" },
          ],
          correctOptionId: "a",
          explanation: "3 − 2 = 1. You have 1 coin left after buying the ball!",
        },
        {
          id: "pre-k-financial-literacy-101-l10-q3",
          text: "Which is a WANT, not a need?",
          skillId: "pre-k-financial-literacy-101-skill-needs-wants",
          options: [
            { id: "a", text: "A toy robot" },
            { id: "b", text: "Drinking water" },
            { id: "c", text: "A warm home" },
            { id: "d", text: "Healthy food" },
          ],
          correctOptionId: "a",
          explanation: "A toy robot is fun but not needed to stay safe and healthy — it is a want.",
        },
        {
          id: "pre-k-financial-literacy-101-l10-q4",
          text: "How can you share without money?",
          skillId: "pre-k-financial-literacy-101-skill-sharing",
          options: [
            { id: "a", text: "Help clean up or draw a picture for someone" },
            { id: "b", text: "Take toys from a friend" },
            { id: "c", text: "Hide all your snacks" },
            { id: "d", text: "Spend all your coins" },
          ],
          correctOptionId: "a",
          explanation: "Sharing your time and kindness is free and always counts!",
        },
        {
          id: "pre-k-financial-literacy-101-l10-q5",
          text: "Where do grown-ups get money?",
          skillId: "pre-k-financial-literacy-101-skill-earning",
          options: [
            { id: "a", text: "They earn it by working at jobs" },
            { id: "b", text: "Money falls from the sky" },
            { id: "c", text: "They find it under their pillow every day" },
            { id: "d", text: "A magic tree grows money" },
          ],
          correctOptionId: "a",
          explanation: "Grown-ups work at jobs — teaching, building, helping people — and get paid for their effort.",
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
        { id: "pre-k-financial-literacy-101-l10-a1", type: "mnemonic", title: "Money Rhyme", content: "Save a little, spend a bit, share with friends — that's how it fits!" },
      ],
    },
  ],
};
