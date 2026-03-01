import type { LearningModule } from "@/lib/modules/types";

export const PreKSocialStudiesUs101Module: LearningModule = {
  id: "pre-k-social-studies-us-101",
  title: "Pre-K My Community in the US",
  description:
    "Explore neighborhoods, community helpers, American symbols, maps, and being a good citizen through stories, sorting games, and pretend play for ages 3-5.",
  subject: "Social Studies US",
  tags: ["pre-k", "curriculum", "interactive", "community", "helpers", "maps", "citizenship"],
  minAge: 3,
  maxAge: 5,
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe what a community is and name places in a neighborhood",
    "Identify community helpers and explain what they do",
    "Recognize American symbols: the flag, bald eagle, and Statue of Liberty",
    "Use simple map skills to describe where things are (near, far, left, right)",
    "Practice being a good citizen by following rules and being kind",
  ],
  lessons: [
    // ── L01  What Is a Community? ─────────────────────────────
    {
      id: "pre-k-social-studies-us-101-l01",
      title: "What Is a Community?",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-us-101-l01-c1",
          title: "People Living Together",
          content:
            "A community is a group of people who live, work, and play near each other. Your neighborhood is a community! It has homes, stores, parks, and schools. Everyone in a community helps each other.",
        },
        {
          id: "pre-k-social-studies-us-101-l01-c2",
          title: "Places in a Community",
          content:
            "Communities have special places. A school is where you learn. A library has books for everyone. A fire station keeps firefighters ready. A grocery store sells food. A hospital helps people who are sick. A park is where you play!",
        },
        {
          id: "pre-k-social-studies-us-101-l01-c3",
          title: "Your Community",
          content:
            "Every community is a little different. Some are in big cities with tall buildings. Some are in small towns with farms nearby. Some are near the ocean, and some are in the mountains. No matter where, people work together to make it a good place to live.",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-us-101-l01-fc1", front: "What is a community?", back: "A group of people who live, work, and play near each other." },
        { id: "pre-k-social-studies-us-101-l01-fc2", front: "Name three places in a community.", back: "School, library, fire station, grocery store, hospital, or park." },
        { id: "pre-k-social-studies-us-101-l01-fc3", front: "Are all communities the same?", back: "No! Some are big cities, some are small towns, some are near oceans or mountains." },
      ],
      learningAids: [
        { id: "pre-k-social-studies-us-101-l01-a1", type: "image", title: "Community Map", content: "Colorful bird's-eye view of a neighborhood with labeled buildings: school, library, fire station, store, park, homes." },
      ],
    },

    // ── L02  Community Helpers ─────────────────────────────────
    {
      id: "pre-k-social-studies-us-101-l02",
      title: "Community Helpers",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-us-101-l02-c1",
          title: "Helpers Who Keep Us Safe",
          content:
            "Firefighters put out fires and rescue people. Police officers help keep neighborhoods safe and find lost pets. Paramedics ride in ambulances and help people who are hurt. These helpers are brave and train hard!",
        },
        {
          id: "pre-k-social-studies-us-101-l02-c2",
          title: "Helpers Who Teach and Heal",
          content:
            "Teachers help you learn to read, count, and make friends. Doctors and nurses check your health and give you medicine when you are sick. Dentists keep your teeth shiny and strong. Librarians help you find the perfect book!",
        },
        {
          id: "pre-k-social-studies-us-101-l02-c3",
          title: "Helpers Who Build and Deliver",
          content:
            "Construction workers build houses, roads, and bridges. Mail carriers bring letters and packages to your door. Farmers grow the food you eat. Bus drivers take you to school safely. Every helper has an important job!",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-us-101-l02-fc1", front: "What do firefighters do?", back: "Put out fires and rescue people." },
        { id: "pre-k-social-studies-us-101-l02-fc2", front: "What does a mail carrier do?", back: "Brings letters and packages to your door." },
        { id: "pre-k-social-studies-us-101-l02-fc3", front: "Who helps you learn at school?", back: "Teachers!" },
        { id: "pre-k-social-studies-us-101-l02-fc4", front: "Who grows the food you eat?", back: "Farmers." },
      ],
      learningAids: [
        { id: "pre-k-social-studies-us-101-l02-a1", type: "image", title: "Helpers Poster", content: "Grid of community helpers: firefighter, police officer, teacher, doctor, farmer, mail carrier — each with their tool." },
      ],
    },

    // ── L03  Helper Match (Interactive) ───────────────────────
    {
      id: "pre-k-social-studies-us-101-l03",
      title: "Match the Helper",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Who would you call if there was a fire?",
          "Who brings letters to your house?",
          "What community helper would you like to be? Why?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-social-studies-us-101-l03-ia1",
          type: "matching_pairs",
          title: "Helper to Tool Match",
          description: "Match each community helper to what they use.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Firefighter 🧑‍🚒" },
              { id: "l2", label: "Doctor 👩‍⚕️" },
              { id: "l3", label: "Teacher 👩‍🏫" },
              { id: "l4", label: "Mail carrier 📬" },
            ],
            right: [
              { id: "r1", label: "Fire hose 🚒" },
              { id: "r2", label: "Stethoscope 🩺" },
              { id: "r3", label: "Books and chalkboard 📚" },
              { id: "r4", label: "Mailbag and letters ✉️" },
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
        { id: "pre-k-social-studies-us-101-l03-a1", type: "practice", title: "Helper Interview", content: "Ask a grown-up about their job. What do they do? Who do they help? Draw a picture of them at work!" },
      ],
    },

    // ── L04  American Symbols ─────────────────────────────────
    {
      id: "pre-k-social-studies-us-101-l04",
      title: "American Symbols",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-us-101-l04-c1",
          title: "The American Flag",
          content:
            "The American flag has red and white stripes and a blue corner filled with white stars. There are 50 stars — one for each state! The 13 stripes stand for the first 13 states. We say the Pledge of Allegiance to show respect for our flag.",
        },
        {
          id: "pre-k-social-studies-us-101-l04-c2",
          title: "The Bald Eagle",
          content:
            "The bald eagle is America's national bird. It is big, strong, and free — and those are things Americans care about! The bald eagle is on coins, stamps, and the Great Seal. Its white head is not really bald — 'bald' used to mean white!",
        },
        {
          id: "pre-k-social-studies-us-101-l04-c3",
          title: "The Statue of Liberty",
          content:
            "The Statue of Liberty stands in New York City. She holds a torch up high to welcome people. France gave her to America as a gift of friendship! Her crown has seven points for the seven continents. She stands for freedom and hope.",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-us-101-l04-fc1", front: "How many stars are on the American flag?", back: "50 — one for each state." },
        { id: "pre-k-social-studies-us-101-l04-fc2", front: "What is America's national bird?", back: "The bald eagle." },
        { id: "pre-k-social-studies-us-101-l04-fc3", front: "Who gave the Statue of Liberty to America?", back: "France — as a gift of friendship!" },
        { id: "pre-k-social-studies-us-101-l04-fc4", front: "What do the 13 stripes on the flag represent?", back: "The first 13 states." },
      ],
      learningAids: [
        { id: "pre-k-social-studies-us-101-l04-a1", type: "image", title: "Symbols Poster", content: "Three American symbols side by side: the flag, the bald eagle, and the Statue of Liberty." },
      ],
    },

    // ── L05  Checkpoint Quiz 1 ────────────────────────────────
    {
      id: "pre-k-social-studies-us-101-l05",
      title: "Checkpoint: Community and Symbols",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-social-studies-us-101-l05-q1",
          text: "What is a community?",
          skillId: "pre-k-social-studies-us-101-skill-community",
          options: [
            { id: "a", text: "People who live, work, and play near each other" },
            { id: "b", text: "A type of sandwich" },
            { id: "c", text: "A big toy store" },
            { id: "d", text: "A color" },
          ],
          correctOptionId: "a",
          explanation: "A community is a group of people who live nearby and help each other!",
        },
        {
          id: "pre-k-social-studies-us-101-l05-q2",
          text: "Who puts out fires and rescues people?",
          skillId: "pre-k-social-studies-us-101-skill-helpers",
          options: [
            { id: "a", text: "Firefighters" },
            { id: "b", text: "Librarians" },
            { id: "c", text: "Farmers" },
            { id: "d", text: "Bus drivers" },
          ],
          correctOptionId: "a",
          explanation: "Firefighters are trained to put out fires and rescue people from danger.",
        },
        {
          id: "pre-k-social-studies-us-101-l05-q3",
          text: "How many stars are on the American flag?",
          skillId: "pre-k-social-studies-us-101-skill-symbols",
          options: [
            { id: "a", text: "50" },
            { id: "b", text: "13" },
            { id: "c", text: "100" },
            { id: "d", text: "7" },
          ],
          correctOptionId: "a",
          explanation: "There are 50 stars — one for each of the 50 states in America!",
        },
        {
          id: "pre-k-social-studies-us-101-l05-q4",
          text: "Which country gave the Statue of Liberty to America?",
          skillId: "pre-k-social-studies-us-101-skill-symbols",
          options: [
            { id: "a", text: "France" },
            { id: "b", text: "England" },
            { id: "c", text: "Canada" },
            { id: "d", text: "Mexico" },
          ],
          correctOptionId: "a",
          explanation: "France gave the Statue of Liberty to America as a gift of friendship!",
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

    // ── L06  Maps and Directions ──────────────────────────────
    {
      id: "pre-k-social-studies-us-101-l06",
      title: "Maps and Directions",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-us-101-l06-c1",
          title: "What Is a Map?",
          content:
            "A map is a picture of a place from above — like a bird looking down. Maps show where things are. A map of your classroom might show desks, the door, and the reading corner. A map of your town shows streets, parks, and buildings.",
        },
        {
          id: "pre-k-social-studies-us-101-l06-c2",
          title: "Direction Words",
          content:
            "We use special words to describe where things are. Left and right, up and down, near and far, next to and between. 'The park is NEXT TO the school.' 'The library is FAR from my house.' Direction words help people find places!",
        },
        {
          id: "pre-k-social-studies-us-101-l06-c3",
          title: "A Map of America",
          content:
            "The United States is a big country with 50 states. On a map, you can see states like Texas (big!), Alaska (even bigger but far away!), and Hawaii (islands in the ocean!). Can you find the state where YOU live on a map?",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-us-101-l06-fc1", front: "What is a map?", back: "A picture of a place as seen from above." },
        { id: "pre-k-social-studies-us-101-l06-fc2", front: "Name four direction words.", back: "Left, right, near, and far." },
        { id: "pre-k-social-studies-us-101-l06-fc3", front: "How many states does the United States have?", back: "50 states." },
      ],
      learningAids: [
        { id: "pre-k-social-studies-us-101-l06-a1", type: "practice", title: "Classroom Map", content: "Draw a map of your room from above. Where is the bed? The door? The window? Label each one!" },
      ],
    },

    // ── L07  Map Directions (Interactive) ────────────────────
    {
      id: "pre-k-social-studies-us-101-l07",
      title: "Direction Words Game",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Point to something on your LEFT.",
          "What is NEAR you right now?",
          "Can you give directions from your bed to the kitchen?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-social-studies-us-101-l07-ia1",
          type: "sorting_buckets",
          title: "Near or Far?",
          description: "Drag each place — is it near your home or far away?",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "near", label: "Near My Home 🏠" },
              { id: "far", label: "Far Away ✈️" },
            ],
            items: [
              { id: "i1", label: "My backyard 🌳", correctBucketId: "near" },
              { id: "i2", label: "The Moon 🌙", correctBucketId: "far" },
              { id: "i3", label: "My kitchen 🍳", correctBucketId: "near" },
              { id: "i4", label: "Another country 🌍", correctBucketId: "far" },
              { id: "i5", label: "My neighbor's house 🏡", correctBucketId: "near" },
              { id: "i6", label: "The bottom of the ocean 🐙", correctBucketId: "far" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-social-studies-us-101-l07-a1", type: "practice", title: "Direction Walk", content: "Take a walk with a grown-up. Practice saying: 'Turn LEFT at the tree. The park is NEAR. The store is FAR.'" },
      ],
    },

    // ── L08  Rules and Citizenship ────────────────────────────
    {
      id: "pre-k-social-studies-us-101-l08",
      title: "Being a Good Citizen",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-us-101-l08-c1",
          title: "What Are Rules?",
          content:
            "Rules tell us how to behave so everyone stays safe and happy. At school: walk, don't run. At home: pick up your toys. On the road: stop at red lights. Rules are not to make life boring — they keep everyone safe!",
        },
        {
          id: "pre-k-social-studies-us-101-l08-c2",
          title: "Being Kind",
          content:
            "A good citizen is kind to others. Say 'please' and 'thank you.' Share with friends. Help someone who is sad. Listen when others talk. Kindness makes your community a happier place for everyone.",
        },
        {
          id: "pre-k-social-studies-us-101-l08-c3",
          title: "Taking Care of Our Community",
          content:
            "Good citizens take care of their community. Pick up trash — even if you did not drop it. Be gentle with playground equipment. Water the garden. When everyone helps a little, the whole community shines!",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-us-101-l08-fc1", front: "Why do we have rules?", back: "To keep everyone safe and happy." },
        { id: "pre-k-social-studies-us-101-l08-fc2", front: "Name two ways to be a good citizen.", back: "Be kind to others and take care of your community." },
        { id: "pre-k-social-studies-us-101-l08-fc3", front: "What should you do if you see trash on the ground?", back: "Pick it up — good citizens help keep their community clean!" },
      ],
      learningAids: [
        { id: "pre-k-social-studies-us-101-l08-a1", type: "image", title: "Good Citizen Checklist", content: "Checklist: ✅ Be kind ✅ Follow rules ✅ Help others ✅ Share ✅ Take care of our community." },
      ],
    },

    // ── L09  Citizenship Sort (Interactive) ──────────────────
    {
      id: "pre-k-social-studies-us-101-l09",
      title: "Good Citizen Choices",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "What is one rule at your house?",
          "How can you be kind to a friend today?",
          "What would happen if nobody followed rules?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-social-studies-us-101-l09-ia1",
          type: "sorting_buckets",
          title: "Good Citizen or Not?",
          description: "Is this what a good citizen would do?",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "good", label: "Good Citizen ✅" },
              { id: "not", label: "Not a Good Choice ❌" },
            ],
            items: [
              { id: "i1", label: "Share toys with a friend", correctBucketId: "good" },
              { id: "i2", label: "Throw trash on the ground", correctBucketId: "not" },
              { id: "i3", label: "Say please and thank you", correctBucketId: "good" },
              { id: "i4", label: "Push someone in line", correctBucketId: "not" },
              { id: "i5", label: "Help pick up the playground", correctBucketId: "good" },
              { id: "i6", label: "Yell during library time", correctBucketId: "not" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-social-studies-us-101-l09-a1", type: "practice", title: "Kindness Challenge", content: "Try to do three kind things today: help a family member, say something nice, and share something. Tell a grown-up about it!" },
      ],
    },

    // ── L10  Celebration Quiz ─────────────────────────────────
    {
      id: "pre-k-social-studies-us-101-l10",
      title: "Celebration Quiz: My Community!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-social-studies-us-101-l10-q1",
          text: "What is America's national bird?",
          skillId: "pre-k-social-studies-us-101-skill-symbols",
          options: [
            { id: "a", text: "The bald eagle" },
            { id: "b", text: "A parrot" },
            { id: "c", text: "A penguin" },
            { id: "d", text: "A robin" },
          ],
          correctOptionId: "a",
          explanation: "The bald eagle is big, strong, and free — just like the values America stands for!",
        },
        {
          id: "pre-k-social-studies-us-101-l10-q2",
          text: "What is a map?",
          skillId: "pre-k-social-studies-us-101-skill-maps",
          options: [
            { id: "a", text: "A picture of a place as seen from above" },
            { id: "b", text: "A type of hat" },
            { id: "c", text: "A musical instrument" },
            { id: "d", text: "A kind of food" },
          ],
          correctOptionId: "a",
          explanation: "Maps show places from a bird's-eye view so you can see where things are!",
        },
        {
          id: "pre-k-social-studies-us-101-l10-q3",
          text: "Why do we have rules?",
          skillId: "pre-k-social-studies-us-101-skill-citizenship",
          options: [
            { id: "a", text: "To keep everyone safe and happy" },
            { id: "b", text: "To make life boring" },
            { id: "c", text: "Because grown-ups like saying no" },
            { id: "d", text: "To make things harder" },
          ],
          correctOptionId: "a",
          explanation: "Rules protect us. Stop at a red light keeps cars from crashing. Quiet in the library helps everyone read.",
        },
        {
          id: "pre-k-social-studies-us-101-l10-q4",
          text: "Who grows the food we eat?",
          skillId: "pre-k-social-studies-us-101-skill-helpers",
          options: [
            { id: "a", text: "Farmers" },
            { id: "b", text: "Firefighters" },
            { id: "c", text: "Librarians" },
            { id: "d", text: "Bus drivers" },
          ],
          correctOptionId: "a",
          explanation: "Farmers plant, grow, and harvest fruits, vegetables, and grains for everyone!",
        },
        {
          id: "pre-k-social-studies-us-101-l10-q5",
          text: "How can you be a good citizen?",
          skillId: "pre-k-social-studies-us-101-skill-citizenship",
          options: [
            { id: "a", text: "Be kind, follow rules, and help your community" },
            { id: "b", text: "Only think about yourself" },
            { id: "c", text: "Break things at the park" },
            { id: "d", text: "Never share with anyone" },
          ],
          correctOptionId: "a",
          explanation: "Good citizens are kind, follow rules, and take care of the people and places around them.",
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
        { id: "pre-k-social-studies-us-101-l10-a1", type: "mnemonic", title: "Community Rhyme", content: "Helpers help and rules keep us right, be kind to all from morning to night. Our flag has stars, our eagle flies free — what a great community we can be!" },
      ],
    },
  ],
};
