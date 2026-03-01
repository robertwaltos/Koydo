import type { LearningModule } from "@/lib/modules/types";

export const PreKWorldHistory101Module: LearningModule = {
  id: "pre-k-world-history-101",
  title: "Pre-K Long Ago Stories",
  description:
    "Travel back in time to learn about dinosaurs, cave people, ancient Egypt, castles, and famous inventions through stories, sorting games, and pretend play for ages 3-5.",
  subject: "World History",
  tags: ["pre-k", "curriculum", "interactive", "history", "dinosaurs", "ancient", "inventions"],
  minAge: 3,
  maxAge: 5,
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Explain that dinosaurs lived millions of years before people",
    "Describe how early humans lived: caves, fire, hunting, and cave paintings",
    "Identify ancient Egypt by pyramids, pharaohs, and the Nile River",
    "Describe life in a medieval castle: kings, queens, and knights",
    "Name inventions that changed the world: the wheel, printing press, and light bulb",
  ],
  lessons: [
    // ── L01  Dinosaurs: Before People ─────────────────────────
    {
      id: "pre-k-world-history-101-l01",
      title: "Dinosaurs: Way Before People",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-world-history-101-l01-c1",
          title: "When Dinosaurs Ruled",
          content:
            "Millions and millions of years ago — before there were people, cars, or houses — dinosaurs walked the Earth! Some were HUGE, like Brachiosaurus who was as tall as a 4-story building. Some were tiny, like Compsognathus who was the size of a chicken.",
        },
        {
          id: "pre-k-world-history-101-l01-c2",
          title: "Meat Eaters and Plant Eaters",
          content:
            "Some dinosaurs ate plants — they are called herbivores. Triceratops munched on ferns and bushes. Some ate meat — they are called carnivores. Tyrannosaurus Rex was the most famous meat eater with huge sharp teeth! Some ate both — those are omnivores.",
        },
        {
          id: "pre-k-world-history-101-l01-c3",
          title: "Where Did They Go?",
          content:
            "About 66 million years ago, a giant asteroid hit Earth. It caused so much dust and cold that dinosaurs could not survive. But not ALL dinosaurs disappeared — birds are actually descendants of dinosaurs! So when you see a bird, you are seeing a tiny living dinosaur.",
        },
      ],
      flashcards: [
        { id: "pre-k-world-history-101-l01-fc1", front: "What is a herbivore?", back: "An animal that eats only plants, like Triceratops." },
        { id: "pre-k-world-history-101-l01-fc2", front: "What is a carnivore?", back: "An animal that eats meat, like T. Rex." },
        { id: "pre-k-world-history-101-l01-fc3", front: "What made the dinosaurs disappear?", back: "A giant asteroid hit Earth about 66 million years ago." },
        { id: "pre-k-world-history-101-l01-fc4", front: "Are dinosaurs truly gone?", back: "Not completely — birds are descendants of dinosaurs!" },
      ],
      learningAids: [
        { id: "pre-k-world-history-101-l01-a1", type: "image", title: "Dinosaur Size Chart", content: "Height comparison: a person, a chicken-sized Compsognathus, a car-sized Triceratops, and a building-sized Brachiosaurus." },
      ],
    },

    // ── L02  Cave People ──────────────────────────────────────
    {
      id: "pre-k-world-history-101-l02",
      title: "Cave People: The First Humans",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-world-history-101-l02-c1",
          title: "Living in Caves",
          content:
            "Long, long ago, the first humans did not have houses. They lived in caves! Caves kept them safe from rain, wind, and wild animals. Families huddled together near a fire to stay warm. There were no stores — they had to find all their food in nature.",
        },
        {
          id: "pre-k-world-history-101-l02-c2",
          title: "Fire: The Greatest Discovery",
          content:
            "Learning to make fire changed everything! Fire kept people warm at night. It scared away dangerous animals. Most importantly, fire let people cook food — cooked food is safer and easier to eat. Fire was like ancient people's first big invention.",
        },
        {
          id: "pre-k-world-history-101-l02-c3",
          title: "Cave Paintings",
          content:
            "Cave people painted pictures on cave walls! They drew animals like bison, horses, and deer using ground-up rocks for paint. These paintings are like the first art galleries — and some are over 30,000 years old! We can still see them today in caves in France and Spain.",
        },
      ],
      flashcards: [
        { id: "pre-k-world-history-101-l02-fc1", front: "Where did the first humans live?", back: "In caves, which protected them from weather and animals." },
        { id: "pre-k-world-history-101-l02-fc2", front: "Why was fire so important?", back: "It kept people warm, scared away animals, and let them cook food." },
        { id: "pre-k-world-history-101-l02-fc3", front: "What did cave people paint on walls?", back: "Animals like bison, horses, and deer — using ground-up rocks as paint." },
      ],
      learningAids: [
        { id: "pre-k-world-history-101-l02-a1", type: "practice", title: "Cave Art Project", content: "Tape brown paper to a wall. Use crayons or chalk to draw animals like cave people did. You are making history art!" },
      ],
    },

    // ── L03  Dinosaur Sort (Interactive) ──────────────────────
    {
      id: "pre-k-world-history-101-l03",
      title: "Dinosaur Sort Game",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "What would you do if you met a T. Rex?",
          "Can you roar like a dinosaur?",
          "Name one thing cave people and you have in common.",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-world-history-101-l03-ia1",
          type: "sorting_buckets",
          title: "Plant Eater or Meat Eater?",
          description: "Drag each dinosaur into the right bucket.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "herb", label: "Plant Eater 🌿" },
              { id: "carn", label: "Meat Eater 🍖" },
            ],
            items: [
              { id: "i1", label: "Triceratops 🦕", correctBucketId: "herb" },
              { id: "i2", label: "T. Rex 🦖", correctBucketId: "carn" },
              { id: "i3", label: "Brachiosaurus 🦕", correctBucketId: "herb" },
              { id: "i4", label: "Velociraptor 🦖", correctBucketId: "carn" },
              { id: "i5", label: "Stegosaurus 🦕", correctBucketId: "herb" },
              { id: "i6", label: "Spinosaurus 🦖", correctBucketId: "carn" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-world-history-101-l03-a1", type: "practice", title: "Dino Dig", content: "Bury small toys in a sandbox or bowl of rice. Dig them out like a paleontologist finding fossils! What did you discover?" },
      ],
    },

    // ── L04  Ancient Egypt ────────────────────────────────────
    {
      id: "pre-k-world-history-101-l04",
      title: "Ancient Egypt: Pyramids and Pharaohs",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-world-history-101-l04-c1",
          title: "The Land of Pyramids",
          content:
            "About 5,000 years ago, ancient Egypt was one of the greatest civilizations in the world. The Egyptians built giant pyramids out of stone blocks — the Great Pyramid is as tall as a 45-story building! They built these by hand, with no machines. Amazing!",
        },
        {
          id: "pre-k-world-history-101-l04-c2",
          title: "Pharaohs and the Nile",
          content:
            "Egypt was ruled by kings called pharaohs. They wore golden crowns and were treated like gods! The Nile River was Egypt's lifeline — it flooded every year and left rich soil for growing food. Without the Nile, there would be no ancient Egypt.",
        },
        {
          id: "pre-k-world-history-101-l04-c3",
          title: "Hieroglyphics: Picture Writing",
          content:
            "Ancient Egyptians wrote using pictures called hieroglyphics. A picture of an owl meant a certain sound. A picture of water meant another. They wrote on scrolls made from a plant called papyrus — that is where the word 'paper' comes from!",
        },
      ],
      flashcards: [
        { id: "pre-k-world-history-101-l04-fc1", front: "What are pyramids?", back: "Giant stone buildings in Egypt, built about 5,000 years ago as tombs for pharaohs." },
        { id: "pre-k-world-history-101-l04-fc2", front: "What is a pharaoh?", back: "A king of ancient Egypt." },
        { id: "pre-k-world-history-101-l04-fc3", front: "What are hieroglyphics?", back: "Picture writing used by ancient Egyptians." },
        { id: "pre-k-world-history-101-l04-fc4", front: "Where does the word 'paper' come from?", back: "Papyrus — a plant the Egyptians used to make scrolls." },
      ],
      learningAids: [
        { id: "pre-k-world-history-101-l04-a1", type: "image", title: "Egypt Poster", content: "Picture of pyramids, a pharaoh's golden mask, the Nile River, and hieroglyphics on a scroll." },
      ],
    },

    // ── L05  Checkpoint Quiz 1 ────────────────────────────────
    {
      id: "pre-k-world-history-101-l05",
      title: "Checkpoint: Dinosaurs to Egypt",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-world-history-101-l05-q1",
          text: "What made the dinosaurs disappear?",
          skillId: "pre-k-world-history-101-skill-dinosaurs",
          options: [
            { id: "a", text: "A giant asteroid hit Earth" },
            { id: "b", text: "They flew to the moon" },
            { id: "c", text: "People chased them away" },
            { id: "d", text: "They turned into fish" },
          ],
          correctOptionId: "a",
          explanation: "About 66 million years ago, a giant asteroid caused so much dust and cold that most dinosaurs could not survive.",
        },
        {
          id: "pre-k-world-history-101-l05-q2",
          text: "Why was fire important for cave people?",
          skillId: "pre-k-world-history-101-skill-cave-people",
          options: [
            { id: "a", text: "It kept them warm, scared animals, and cooked food" },
            { id: "b", text: "It helped them play video games" },
            { id: "c", text: "It made their caves bigger" },
            { id: "d", text: "It painted their walls" },
          ],
          correctOptionId: "a",
          explanation: "Fire was the first great invention — it warmed, protected, and fed early humans!",
        },
        {
          id: "pre-k-world-history-101-l05-q3",
          text: "What is a pharaoh?",
          skillId: "pre-k-world-history-101-skill-egypt",
          options: [
            { id: "a", text: "A king of ancient Egypt" },
            { id: "b", text: "A type of dinosaur" },
            { id: "c", text: "A cave painting" },
            { id: "d", text: "A kind of food" },
          ],
          correctOptionId: "a",
          explanation: "Pharaohs were the powerful kings of ancient Egypt who wore golden crowns.",
        },
        {
          id: "pre-k-world-history-101-l05-q4",
          text: "What are hieroglyphics?",
          skillId: "pre-k-world-history-101-skill-egypt",
          options: [
            { id: "a", text: "Picture writing used in ancient Egypt" },
            { id: "b", text: "A type of dance" },
            { id: "c", text: "A building material" },
            { id: "d", text: "A breed of cat" },
          ],
          correctOptionId: "a",
          explanation: "Hieroglyphics are pictures that stand for sounds and words — the Egyptian alphabet!",
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

    // ── L06  Castles and Knights ──────────────────────────────
    {
      id: "pre-k-world-history-101-l06",
      title: "Castles, Kings, and Knights",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-world-history-101-l06-c1",
          title: "Life in a Castle",
          content:
            "About 1,000 years ago, kings and queens lived in big stone castles. Castles had tall towers, thick walls, and a moat (a water ditch) around them for protection. Inside were great halls for feasts, bedrooms, and even dungeons!",
        },
        {
          id: "pre-k-world-history-101-l06-c2",
          title: "Knights in Shining Armor",
          content:
            "Knights were brave soldiers who protected the kingdom. They wore heavy metal armor and carried swords and shields. Before becoming a knight, a boy had to train for years — first as a page (helper), then as a squire (assistant), and finally as a knight!",
        },
        {
          id: "pre-k-world-history-101-l06-c3",
          title: "Everyday Life Long Ago",
          content:
            "Most people back then were not kings or knights. They were farmers who grew food, bakers who made bread, and blacksmiths who made tools from metal. There was no electricity, no running water, and no cars. People walked everywhere or rode horses!",
        },
      ],
      flashcards: [
        { id: "pre-k-world-history-101-l06-fc1", front: "What is a moat?", back: "A water ditch around a castle for protection." },
        { id: "pre-k-world-history-101-l06-fc2", front: "What did knights wear?", back: "Heavy metal armor, and they carried swords and shields." },
        { id: "pre-k-world-history-101-l06-fc3", front: "Name two things people did NOT have long ago.", back: "Electricity and running water (also no cars, phones, or internet!)." },
      ],
      learningAids: [
        { id: "pre-k-world-history-101-l06-a1", type: "image", title: "Castle Diagram", content: "Cross-section of a castle showing towers, moat, drawbridge, great hall, and dungeon." },
      ],
    },

    // ── L07  Timeline Match (Interactive) ─────────────────────
    {
      id: "pre-k-world-history-101-l07",
      title: "Long Ago Timeline",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "What came first — dinosaurs or castles?",
          "Would you rather be a knight or a pharaoh?",
          "What would life be like without electricity?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-world-history-101-l07-ia1",
          type: "matching_pairs",
          title: "Match the Era",
          description: "Match each person or thing to when they lived.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "T. Rex 🦖" },
              { id: "l2", label: "Cave painter 🎨" },
              { id: "l3", label: "Pharaoh 👑" },
              { id: "l4", label: "Knight ⚔️" },
            ],
            right: [
              { id: "r1", label: "Millions of years ago" },
              { id: "r2", label: "Tens of thousands of years ago" },
              { id: "r3", label: "About 5,000 years ago" },
              { id: "r4", label: "About 1,000 years ago" },
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
        { id: "pre-k-world-history-101-l07-a1", type: "practice", title: "Build a Castle", content: "Use blocks, boxes, or blankets to build a castle. Add a moat (a blue towel!) and pretend to be a knight defending it!" },
      ],
    },

    // ── L08  Inventions That Changed Everything ───────────────
    {
      id: "pre-k-world-history-101-l08",
      title: "Inventions That Changed the World",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-world-history-101-l08-c1",
          title: "The Wheel",
          content:
            "About 5,500 years ago, someone invented the wheel. Before wheels, people had to carry everything on their backs or drag it. With wheels, they could build carts to move heavy things. Today wheels are on cars, bicycles, skateboards, and even suitcases!",
        },
        {
          id: "pre-k-world-history-101-l08-c2",
          title: "The Printing Press",
          content:
            "About 600 years ago, a man named Johannes Gutenberg invented the printing press. Before this, books had to be written by hand — one at a time! The printing press could make hundreds of copies quickly. Now everyone could have books, and more people learned to read.",
        },
        {
          id: "pre-k-world-history-101-l08-c3",
          title: "The Light Bulb",
          content:
            "About 150 years ago, Thomas Edison made the first practical light bulb. Before this, people used candles and oil lamps. Imagine doing homework by candlelight! The light bulb changed nighttime forever — now we can read, play, and work after the sun goes down.",
        },
      ],
      flashcards: [
        { id: "pre-k-world-history-101-l08-fc1", front: "How did people move heavy things before the wheel?", back: "They carried things on their backs or dragged them." },
        { id: "pre-k-world-history-101-l08-fc2", front: "What did the printing press do?", back: "It let people make hundreds of book copies quickly instead of writing them by hand." },
        { id: "pre-k-world-history-101-l08-fc3", front: "Who made the first practical light bulb?", back: "Thomas Edison, about 150 years ago." },
      ],
      learningAids: [
        { id: "pre-k-world-history-101-l08-a1", type: "image", title: "Invention Timeline", content: "Timeline showing: wheel (5,500 years ago) → printing press (600 years ago) → light bulb (150 years ago)." },
      ],
    },

    // ── L09  Then and Now (Interactive) ───────────────────────
    {
      id: "pre-k-world-history-101-l09",
      title: "Then and Now",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "What would your day be like without electricity?",
          "How did people travel before cars were invented?",
          "What invention do you think is the most important?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-world-history-101-l09-ia1",
          type: "sorting_buckets",
          title: "Long Ago or Today?",
          description: "Drag each item — did people use this long ago or today?",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "ago", label: "Long Ago 🏰" },
              { id: "today", label: "Today 🏙️" },
            ],
            items: [
              { id: "i1", label: "Candles for light 🕯️", correctBucketId: "ago" },
              { id: "i2", label: "Electric lights 💡", correctBucketId: "today" },
              { id: "i3", label: "Horse and cart 🐴", correctBucketId: "ago" },
              { id: "i4", label: "Airplane ✈️", correctBucketId: "today" },
              { id: "i5", label: "Hand-written books 📜", correctBucketId: "ago" },
              { id: "i6", label: "Tablet computer 📱", correctBucketId: "today" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-world-history-101-l09-a1", type: "practice", title: "Candlelight Night", content: "With a grown-up, try spending 10 minutes with just a flashlight (no other lights). Imagine that was your only light! How would life be different?" },
      ],
    },

    // ── L10  Celebration Quiz ─────────────────────────────────
    {
      id: "pre-k-world-history-101-l10",
      title: "Celebration Quiz: Long Ago Stories!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-world-history-101-l10-q1",
          text: "What is a moat around a castle?",
          skillId: "pre-k-world-history-101-skill-castles",
          options: [
            { id: "a", text: "A water ditch for protection" },
            { id: "b", text: "A garden with flowers" },
            { id: "c", text: "A big pile of rocks" },
            { id: "d", text: "A road to the village" },
          ],
          correctOptionId: "a",
          explanation: "A moat is a ditch filled with water that surrounds a castle to keep enemies from getting close.",
        },
        {
          id: "pre-k-world-history-101-l10-q2",
          text: "What did the printing press let people do?",
          skillId: "pre-k-world-history-101-skill-inventions",
          options: [
            { id: "a", text: "Make many copies of books quickly" },
            { id: "b", text: "Fly to the moon" },
            { id: "c", text: "Cook food faster" },
            { id: "d", text: "Build pyramids" },
          ],
          correctOptionId: "a",
          explanation: "Before the printing press, every book was written by hand. The press made hundreds of copies quickly!",
        },
        {
          id: "pre-k-world-history-101-l10-q3",
          text: "Which came FIRST in history?",
          skillId: "pre-k-world-history-101-skill-timeline",
          options: [
            { id: "a", text: "Dinosaurs" },
            { id: "b", text: "Knights and castles" },
            { id: "c", text: "Light bulbs" },
            { id: "d", text: "Airplanes" },
          ],
          correctOptionId: "a",
          explanation: "Dinosaurs lived millions of years ago — long before people, castles, or any inventions!",
        },
        {
          id: "pre-k-world-history-101-l10-q4",
          text: "What did cave people paint on cave walls?",
          skillId: "pre-k-world-history-101-skill-cave-people",
          options: [
            { id: "a", text: "Animals like bison, horses, and deer" },
            { id: "b", text: "Cars and trucks" },
            { id: "c", text: "Robots and spaceships" },
            { id: "d", text: "Numbers and letters" },
          ],
          correctOptionId: "a",
          explanation: "Cave people painted the animals they saw around them using ground-up rocks as paint.",
        },
        {
          id: "pre-k-world-history-101-l10-q5",
          text: "Who invented the first practical light bulb?",
          skillId: "pre-k-world-history-101-skill-inventions",
          options: [
            { id: "a", text: "Thomas Edison" },
            { id: "b", text: "A pharaoh" },
            { id: "c", text: "A dinosaur" },
            { id: "d", text: "A knight" },
          ],
          correctOptionId: "a",
          explanation: "Thomas Edison invented the practical light bulb about 150 years ago, changing nighttime forever!",
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
        { id: "pre-k-world-history-101-l10-a1", type: "mnemonic", title: "History Rhyme", content: "Dinos first, then caves and fire, pyramids built ever higher, castles tall with moats around, inventions changed the world we found!" },
      ],
    },
  ],
};
