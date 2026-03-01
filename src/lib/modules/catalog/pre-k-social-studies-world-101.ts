import type { LearningModule } from "@/lib/modules/types";

export const PreKSocialStudiesWorld101Module: LearningModule = {
  id: "pre-k-social-studies-world-101",
  title: "Pre-K World Friends and Cultures",
  description:
    "Travel the globe to learn about continents, languages, foods, celebrations, and homes from different cultures through stories, matching games, and pretend play for ages 3-5.",
  subject: "Social Studies World",
  tags: ["pre-k", "curriculum", "interactive", "cultures", "continents", "languages", "celebrations"],
  minAge: 3,
  maxAge: 5,
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Name the seven continents and find them on a globe",
    "Recognize that people around the world speak different languages",
    "Describe foods, clothing, and homes from different cultures",
    "Identify celebrations from around the world",
    "Explain why learning about other cultures makes us better friends",
  ],
  lessons: [
    // ── L01  Our Big Beautiful World ──────────────────────────
    {
      id: "pre-k-social-studies-world-101-l01",
      title: "Our Big Beautiful World",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-world-101-l01-c1",
          title: "Planet Earth",
          content:
            "We all live on planet Earth — a big round ball floating in space! From far away, Earth looks blue and green. The blue parts are oceans and the green and brown parts are land. People live on every piece of land!",
        },
        {
          id: "pre-k-social-studies-world-101-l01-c2",
          title: "Seven Continents",
          content:
            "Earth's land is divided into seven big pieces called continents. They are: Africa, Antarctica, Asia, Australia, Europe, North America, and South America. Every country in the world is on one of these continents!",
        },
        {
          id: "pre-k-social-studies-world-101-l01-c3",
          title: "A Globe and a Map",
          content:
            "A globe is a round model of Earth. You can spin it and find continents! A flat map shows the same thing but spread out on paper. Both help us see where places are. Can you find the continent where YOU live?",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-world-101-l01-fc1", front: "How many continents are there?", back: "Seven: Africa, Antarctica, Asia, Australia, Europe, North America, South America." },
        { id: "pre-k-social-studies-world-101-l01-fc2", front: "Why does Earth look blue from space?", back: "Because most of Earth is covered by oceans!" },
        { id: "pre-k-social-studies-world-101-l01-fc3", front: "What is a globe?", back: "A round model of Earth that you can spin." },
      ],
      learningAids: [
        { id: "pre-k-social-studies-world-101-l01-a1", type: "image", title: "Continent Map", content: "Colorful world map with each continent a different color and labeled with its name." },
      ],
    },

    // ── L02  Languages Around the World ───────────────────────
    {
      id: "pre-k-social-studies-world-101-l02",
      title: "Hello in Every Language",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-world-101-l02-c1",
          title: "So Many Languages!",
          content:
            "People around the world speak different languages. In English we say 'Hello!' In Spanish it is 'Hola!' In French, 'Bonjour!' In Mandarin Chinese, 'Nǐ hǎo!' In Hindi, 'Namaste!' There are over 7,000 languages on Earth!",
        },
        {
          id: "pre-k-social-studies-world-101-l02-c2",
          title: "Why Different Languages?",
          content:
            "Long ago, people lived in groups far apart from each other. Each group created their own way of talking. Over thousands of years, these became different languages. Some sound similar because they came from the same ancestor language!",
        },
        {
          id: "pre-k-social-studies-world-101-l02-c3",
          title: "Learning New Words",
          content:
            "Learning words in other languages is fun and helps you make friends with people from different places. Let's learn to say 'Thank you': Gracias (Spanish), Merci (French), Xièxiè (Chinese), Dhanyavaad (Hindi). Try saying them!",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-world-101-l02-fc1", front: "How do you say 'Hello' in Spanish?", back: "Hola!" },
        { id: "pre-k-social-studies-world-101-l02-fc2", front: "How do you say 'Thank you' in French?", back: "Merci!" },
        { id: "pre-k-social-studies-world-101-l02-fc3", front: "About how many languages are spoken on Earth?", back: "Over 7,000!" },
      ],
      learningAids: [
        { id: "pre-k-social-studies-world-101-l02-a1", type: "image", title: "Hello Wall", content: "'Hello' written in 10 languages with flags: English, Spanish, French, Chinese, Hindi, Arabic, Japanese, Swahili, Portuguese, German." },
      ],
    },

    // ── L03  Language Match (Interactive) ─────────────────────
    {
      id: "pre-k-social-studies-world-101-l03",
      title: "Say Hello Game",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Can you say 'Hola' (hello in Spanish)?",
          "Can you say 'Merci' (thank you in French)?",
          "Does anyone in your family speak another language?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-social-studies-world-101-l03-ia1",
          type: "matching_pairs",
          title: "Match the Greeting",
          description: "Match each 'Hello' to the language it comes from.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Hola! 🇪🇸" },
              { id: "l2", label: "Bonjour! 🇫🇷" },
              { id: "l3", label: "Nǐ hǎo! 🇨🇳" },
              { id: "l4", label: "Namaste! 🇮🇳" },
            ],
            right: [
              { id: "r1", label: "Spanish" },
              { id: "r2", label: "French" },
              { id: "r3", label: "Chinese" },
              { id: "r4", label: "Hindi" },
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
        { id: "pre-k-social-studies-world-101-l03-a1", type: "practice", title: "Greetings Practice", content: "Learn to say 'Hello' in three new languages. Greet your family in a different language each morning this week!" },
      ],
    },

    // ── L04  Foods from Around the World ──────────────────────
    {
      id: "pre-k-social-studies-world-101-l04",
      title: "Foods from Around the World",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-world-101-l04-c1",
          title: "Every Culture Has Special Food",
          content:
            "People around the world eat different foods! In Italy, families love pasta and pizza. In Japan, people eat sushi and rice. In Mexico, tacos and tamales are popular. In India, curries with rice and naan bread are favorites. Food tells a story about where people live!",
        },
        {
          id: "pre-k-social-studies-world-101-l04-c2",
          title: "Why Food Is Different",
          content:
            "What people eat depends on what grows near them. In tropical places, mangoes and coconuts grow easily. In cold places, people eat more potatoes and bread. Near the ocean, people eat lots of fish. The land and weather shape what's on the plate!",
        },
        {
          id: "pre-k-social-studies-world-101-l04-c3",
          title: "Trying New Foods",
          content:
            "Trying food from other cultures is like taking a mini vacation! Next time you eat pizza, you are eating Italian food. Eating a taco? That is Mexican! Stir fry? Chinese! Being brave and trying new foods helps you learn about the world.",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-world-101-l04-fc1", front: "What country does pizza come from?", back: "Italy!" },
        { id: "pre-k-social-studies-world-101-l04-fc2", front: "What is a popular food in Japan?", back: "Sushi and rice." },
        { id: "pre-k-social-studies-world-101-l04-fc3", front: "Why do people in different places eat different foods?", back: "Because different foods grow in different climates and places." },
      ],
      learningAids: [
        { id: "pre-k-social-studies-world-101-l04-a1", type: "image", title: "World Food Map", content: "Map with food pictures on each continent: pasta on Europe, sushi on Asia, tacos on North America, etc." },
      ],
    },

    // ── L05  Checkpoint Quiz 1 ────────────────────────────────
    {
      id: "pre-k-social-studies-world-101-l05",
      title: "Checkpoint: World and Languages",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-social-studies-world-101-l05-q1",
          text: "How many continents are there?",
          skillId: "pre-k-social-studies-world-101-skill-continents",
          options: [
            { id: "a", text: "7" },
            { id: "b", text: "3" },
            { id: "c", text: "100" },
            { id: "d", text: "1" },
          ],
          correctOptionId: "a",
          explanation: "There are 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.",
        },
        {
          id: "pre-k-social-studies-world-101-l05-q2",
          text: "How do you say 'Hello' in Spanish?",
          skillId: "pre-k-social-studies-world-101-skill-languages",
          options: [
            { id: "a", text: "Hola" },
            { id: "b", text: "Bonjour" },
            { id: "c", text: "Namaste" },
            { id: "d", text: "Goodbye" },
          ],
          correctOptionId: "a",
          explanation: "Hola means 'Hello' in Spanish — one of the most widely spoken languages in the world!",
        },
        {
          id: "pre-k-social-studies-world-101-l05-q3",
          text: "What country does sushi come from?",
          skillId: "pre-k-social-studies-world-101-skill-food",
          options: [
            { id: "a", text: "Japan" },
            { id: "b", text: "Italy" },
            { id: "c", text: "Mexico" },
            { id: "d", text: "France" },
          ],
          correctOptionId: "a",
          explanation: "Sushi is a traditional Japanese food made with rice, fish, and seaweed.",
        },
        {
          id: "pre-k-social-studies-world-101-l05-q4",
          text: "What is a globe?",
          skillId: "pre-k-social-studies-world-101-skill-continents",
          options: [
            { id: "a", text: "A round model of Earth" },
            { id: "b", text: "A type of lamp" },
            { id: "c", text: "A ball you throw" },
            { id: "d", text: "A kind of fruit" },
          ],
          correctOptionId: "a",
          explanation: "A globe is a round model of Earth that you can spin to find countries and continents!",
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

    // ── L06  Homes Around the World ───────────────────────────
    {
      id: "pre-k-social-studies-world-101-l06",
      title: "Homes Around the World",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-world-101-l06-c1",
          title: "Different Homes for Different Places",
          content:
            "Not everyone lives in the same kind of house! In cold places like Alaska, some traditional homes are igloos made of ice blocks. In Africa, some homes are round huts with grass roofs. In cities, people live in tall apartment buildings. Every home keeps families safe and warm.",
        },
        {
          id: "pre-k-social-studies-world-101-l06-c2",
          title: "Building with What You Have",
          content:
            "People build homes from materials they find nearby. Near forests? Use wood. In deserts? Use clay and mud bricks (called adobe). Near rivers? Some homes are built on stilts above the water! The land helps decide what homes look like.",
        },
        {
          id: "pre-k-social-studies-world-101-l06-c3",
          title: "Home Sweet Home",
          content:
            "No matter what a home looks like on the outside, the inside is full of the same things: love, family, food, and sleep. A home is not just a building — it is where your family takes care of each other.",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-world-101-l06-fc1", front: "What are igloos made of?", back: "Blocks of ice and snow." },
        { id: "pre-k-social-studies-world-101-l06-fc2", front: "What are adobe homes made of?", back: "Clay and mud bricks — found in desert areas." },
        { id: "pre-k-social-studies-world-101-l06-fc3", front: "Why do some homes sit on stilts?", back: "To stay above water in areas that flood." },
      ],
      learningAids: [
        { id: "pre-k-social-studies-world-101-l06-a1", type: "image", title: "Homes Collage", content: "Pictures of different homes: igloo, grass hut, apartment building, adobe house, stilt house, log cabin." },
      ],
    },

    // ── L07  Home Match (Interactive) ─────────────────────────
    {
      id: "pre-k-social-studies-world-101-l07",
      title: "Home Match Game",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "What is YOUR home made of?",
          "Would an igloo work in a hot desert? Why not?",
          "Draw your dream home from another culture.",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-social-studies-world-101-l07-ia1",
          type: "matching_pairs",
          title: "Home to Climate Match",
          description: "Match each type of home to the place it fits best.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Igloo 🧊" },
              { id: "l2", label: "Adobe house 🏜️" },
              { id: "l3", label: "Stilt house 🌊" },
              { id: "l4", label: "Log cabin 🌲" },
            ],
            right: [
              { id: "r1", label: "Very cold, snowy place" },
              { id: "r2", label: "Hot, dry desert" },
              { id: "r3", label: "Near a river that floods" },
              { id: "r4", label: "Near a forest with many trees" },
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
        { id: "pre-k-social-studies-world-101-l07-a1", type: "practice", title: "Build a Home", content: "Use blocks, blankets, or pillows to build a mini home. What material did you use? Would it work in a cold place or a hot place?" },
      ],
    },

    // ── L08  Celebrations Around the World ────────────────────
    {
      id: "pre-k-social-studies-world-101-l08",
      title: "Celebrations Around the World",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-world-101-l08-c1",
          title: "What Are Celebrations?",
          content:
            "Celebrations are special times when people get together to be happy! Every culture has celebrations. Some celebrate the new year, some celebrate harvest time, and some celebrate important people or events. Celebrations often include food, music, and dancing!",
        },
        {
          id: "pre-k-social-studies-world-101-l08-c2",
          title: "Celebrations from Different Places",
          content:
            "Chinese New Year has dragon dances and red envelopes. Diwali in India is the festival of lights with beautiful lamps. Carnival in Brazil has colorful costumes and parades. Day of the Dead in Mexico honors family members with flowers and art.",
        },
        {
          id: "pre-k-social-studies-world-101-l08-c3",
          title: "What We All Share",
          content:
            "Even though celebrations look different around the world, they all share something: bringing people together with joy! Music, food, family, and fun — these are things every culture loves. Learning about other celebrations helps us understand and respect each other.",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-world-101-l08-fc1", front: "What is Diwali?", back: "The festival of lights celebrated in India with beautiful lamps." },
        { id: "pre-k-social-studies-world-101-l08-fc2", front: "What happens during Chinese New Year?", back: "Dragon dances, red envelopes with money, and special meals." },
        { id: "pre-k-social-studies-world-101-l08-fc3", front: "What do all celebrations around the world have in common?", back: "They bring people together with joy, food, music, and family." },
      ],
      learningAids: [
        { id: "pre-k-social-studies-world-101-l08-a1", type: "image", title: "Celebrations Collage", content: "Four celebrations side by side: Chinese New Year dragon, Diwali lamps, Carnival costumes, Day of the Dead flowers." },
      ],
    },

    // ── L09  Clothing Around the World ────────────────────────
    {
      id: "pre-k-social-studies-world-101-l09",
      title: "What People Wear",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-social-studies-world-101-l09-c1",
          title: "Clothes Tell Stories",
          content:
            "What people wear often tells you about their culture and climate. In Japan, a beautiful robe called a kimono is worn for special occasions. In Scotland, some people wear kilts (a type of skirt) with special plaid patterns. In India, women may wear colorful saris.",
        },
        {
          id: "pre-k-social-studies-world-101-l09-c2",
          title: "Clothes for the Weather",
          content:
            "People in very cold places wear thick fur coats and boots. People in hot places wear light, flowing clothes to stay cool. Near the equator, where it is very sunny, wide hats protect heads from the sun. Clothes help us stay comfortable!",
        },
        {
          id: "pre-k-social-studies-world-101-l09-c3",
          title: "We Are All Different and All Beautiful",
          content:
            "Some people cover their heads for religious reasons. Some wear bright colors for celebrations. Some wear uniforms for work. No matter what people wear, every style is part of their story. Respecting how others dress is part of being a good world friend!",
        },
      ],
      flashcards: [
        { id: "pre-k-social-studies-world-101-l09-fc1", front: "What is a kimono?", back: "A beautiful robe worn in Japan for special occasions." },
        { id: "pre-k-social-studies-world-101-l09-fc2", front: "Why do people in cold places wear thick coats?", back: "To stay warm!" },
        { id: "pre-k-social-studies-world-101-l09-fc3", front: "What is a sari?", back: "A long, colorful piece of cloth wrapped as clothing, popular in India." },
      ],
      learningAids: [
        { id: "pre-k-social-studies-world-101-l09-a1", type: "image", title: "World Clothing", content: "Children from around the world wearing traditional clothing: kimono, kilt, sari, fur parka, poncho." },
      ],
    },

    // ── L10  Celebration Quiz ─────────────────────────────────
    {
      id: "pre-k-social-studies-world-101-l10",
      title: "Celebration Quiz: World Friends!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-social-studies-world-101-l10-q1",
          text: "What are igloos made of?",
          skillId: "pre-k-social-studies-world-101-skill-homes",
          options: [
            { id: "a", text: "Blocks of ice and snow" },
            { id: "b", text: "Wood and nails" },
            { id: "c", text: "Bricks and cement" },
            { id: "d", text: "Paper and glue" },
          ],
          correctOptionId: "a",
          explanation: "Igloos are built from packed snow blocks in very cold places like the Arctic.",
        },
        {
          id: "pre-k-social-studies-world-101-l10-q2",
          text: "What is Diwali?",
          skillId: "pre-k-social-studies-world-101-skill-celebrations",
          options: [
            { id: "a", text: "The festival of lights in India" },
            { id: "b", text: "A type of food in France" },
            { id: "c", text: "A sport in Brazil" },
            { id: "d", text: "A mountain in China" },
          ],
          correctOptionId: "a",
          explanation: "Diwali is celebrated in India with beautiful lamps, candles, fireworks, and special sweets.",
        },
        {
          id: "pre-k-social-studies-world-101-l10-q3",
          text: "How do you say 'Thank you' in French?",
          skillId: "pre-k-social-studies-world-101-skill-languages",
          options: [
            { id: "a", text: "Merci" },
            { id: "b", text: "Gracias" },
            { id: "c", text: "Hola" },
            { id: "d", text: "Bonjour" },
          ],
          correctOptionId: "a",
          explanation: "Merci means 'Thank you' in French. Bonjour means 'Hello'!",
        },
        {
          id: "pre-k-social-studies-world-101-l10-q4",
          text: "What is a kimono?",
          skillId: "pre-k-social-studies-world-101-skill-clothing",
          options: [
            { id: "a", text: "A beautiful robe from Japan" },
            { id: "b", text: "A type of hat from Mexico" },
            { id: "c", text: "A shoe from France" },
            { id: "d", text: "A blanket from Canada" },
          ],
          correctOptionId: "a",
          explanation: "A kimono is a traditional Japanese robe worn for special occasions, often with beautiful patterns.",
        },
        {
          id: "pre-k-social-studies-world-101-l10-q5",
          text: "What do all celebrations around the world share?",
          skillId: "pre-k-social-studies-world-101-skill-celebrations",
          options: [
            { id: "a", text: "They bring people together with joy, food, and family" },
            { id: "b", text: "They all happen on the same day" },
            { id: "c", text: "They all use the same language" },
            { id: "d", text: "They all have snow" },
          ],
          correctOptionId: "a",
          explanation: "No matter where in the world, celebrations are about bringing people together with happiness and love!",
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
        { id: "pre-k-social-studies-world-101-l10-a1", type: "mnemonic", title: "World Friends Rhyme", content: "Seven continents, thousands of tongues, festivals of light, and celebration songs — different foods, different homes, different dress, but kindness and love are shared by the rest!" },
      ],
    },
  ],
};
