import type { LearningModule } from "@/lib/modules/types";

export const PreKAstronomy101Module: LearningModule = {
  id: "pre-k-astronomy-101",
  title: "Pre-K Sky & Space Explorers",
  description:
    "Blast off on a space adventure for ages 3-5! Discover why the Sun lights up our day, why the Moon changes shape, what makes stars twinkle, and which planets are our neighbors — all through stories, songs, and hands-on play.",
  subject: "Astronomy",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "4.0.0",
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe the Sun as a star that gives us light and warmth",
    "Explain why we have daytime and nighttime",
    "Name the phases of the Moon: new, crescent, half, full",
    "Identify stars as faraway suns that twinkle in the night sky",
    "Name the eight planets in our solar system in order",
    "Describe one fun fact about Earth, Mars, Jupiter, and Saturn",
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  The Sun: Our Very Own Star  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l01",
      title: "The Sun: Our Very Own Star!",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that the Sun is a giant ball of hot, glowing gas",
        "Describe two things the Sun gives us: light and warmth",
        "State that we should never look directly at the Sun",
      ],
      chunks: [
        {
          id: "prek-astro-l01-c1",
          title: "Meet the Sun",
          content:
            "The Sun is a HUGE ball of super-hot glowing gas — so big that a million Earths could fit inside it! ☀️ It sits in the middle of our solar system, and everything else — planets, moons, comets — all goes around and around it, like dancers around a campfire.",
        },
        {
          id: "prek-astro-l01-c2",
          title: "Light and Warmth",
          content:
            "The Sun gives us two amazing gifts every single day: LIGHT so we can see, and WARMTH so we stay cozy! 🌞 Plants need sunlight to grow, animals need warmth to live, and you need both to play outside. Without the Sun, Earth would be a dark, frozen ice ball floating in space — brrr!",
        },
        {
          id: "prek-astro-l01-c3",
          title: "Sun Safety",
          content:
            "The Sun is wonderful, but so bright that you must NEVER look straight at it — it can hurt your eyes! 😎 Wear sunglasses on sunny days, put on sunscreen, and drink water to stay cool. The Sun is our friend, but we need to be careful around such a powerful star.",
        },
      ],
      flashcards: [
        { id: "prek-astro-l01-f1", front: "What is the Sun?", back: "A giant ball of super-hot glowing gas — it is actually a star! ☀️" },
        { id: "prek-astro-l01-f2", front: "What two things does the Sun give us?", back: "Light and warmth! Plants, animals, and people all need both." },
        { id: "prek-astro-l01-f3", front: "Should you look directly at the Sun?", back: "NEVER! It is so bright it can hurt your eyes. Wear sunglasses instead! 😎" },
      ],
      questions: [
        {
          id: "prek-astro-l01-q1",
          text: "The Sun is a giant ball of...",
          options: [
            { id: "a", text: "Ice cream" },
            { id: "b", text: "Hot glowing gas" },
            { id: "c", text: "Cheese" },
            { id: "d", text: "Water" },
          ],
          correctOptionId: "b",
          explanation: "The Sun is made of super-hot glowing gas — it is a star!",
        },
        {
          id: "prek-astro-l01-q2",
          text: "What does the Sun give us?",
          options: [
            { id: "a", text: "Darkness and cold" },
            { id: "b", text: "Light and warmth" },
            { id: "c", text: "Candy and toys" },
            { id: "d", text: "Rain and snow" },
          ],
          correctOptionId: "b",
          explanation: "The Sun gives us light so we can see, and warmth so we stay cozy!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L02  Day and Night  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l02",
      title: "Day and Night: Why Does It Get Dark?",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that Earth spins like a top, causing day and night",
        "Describe that the side facing the Sun has daytime",
        "State that one full spin takes about 24 hours",
      ],
      chunks: [
        {
          id: "prek-astro-l02-c1",
          title: "Earth Is Spinning!",
          content:
            "Right now, you are on a SPINNING planet! 🌍 Earth turns around and around like a very slow top. You cannot feel it because everything — you, your house, the air — is all spinning together. It takes 24 hours (one whole day and night) for Earth to make one full spin.",
        },
        {
          id: "prek-astro-l02-c2",
          title: "Sunshine Side, Shadow Side",
          content:
            "Imagine shining a flashlight on a ball in a dark room 🔦. One side is bright — that is daytime! The other side is dark — that is nighttime! As the ball turns, different parts get the light. Earth works the same way: when our side faces the Sun, it is day. When our side turns away, it gets dark.",
        },
        {
          id: "prek-astro-l02-c3",
          title: "While You Sleep...",
          content:
            "Here is a cool thought: while you are sleeping at night, kids on the OTHER side of Earth are waking up and having breakfast! 🌅 When you eat dinner, they see the stars. Day and night happen at different times around the world because Earth keeps spinning, spinning, spinning.",
        },
      ],
      flashcards: [
        { id: "prek-astro-l02-f1", front: "Why do we have day and night?", back: "Earth spins! The side facing the Sun has day, the other side has night. 🌍" },
        { id: "prek-astro-l02-f2", front: "How long is one full spin of Earth?", back: "About 24 hours — one day and one night!" },
        { id: "prek-astro-l02-f3", front: "When it is night here, what is it on the other side?", back: "Daytime! Kids on the other side are awake while you sleep." },
      ],
      questions: [
        {
          id: "prek-astro-l02-q1",
          text: "We have day and night because Earth...",
          options: [
            { id: "a", text: "Spins around like a top" },
            { id: "b", text: "Jumps up and down" },
            { id: "c", text: "Stays perfectly still" },
            { id: "d", text: "Is flat like a pancake" },
          ],
          correctOptionId: "a",
          explanation: "Earth spins! The side facing the Sun gets light (day), the other side is dark (night).",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L03  The Moon and Its Shapes  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l03",
      title: "The Moon: Why Does It Change Shape?",
      type: "video",
      duration: 8,
      objectives: [
        "Name four Moon phases: new moon, crescent, half, full",
        "Explain that the Moon does not make its own light",
        "Describe that the Moon goes around Earth once a month",
      ],
      chunks: [
        {
          id: "prek-astro-l03-c1",
          title: "The Moon's Trick",
          content:
            "Look up at night and you might see the Moon looking big and round, or thin like a banana, or even invisible! 🌙 Is the Moon changing shape? Not really! The Moon is always a round ball, but we only see the part that the Sun lights up. As the Moon moves around Earth, we see different amounts of the bright side.",
        },
        {
          id: "prek-astro-l03-c2",
          title: "Moon Phases",
          content:
            "The Moon goes through phases: 🌑 New Moon (we cannot see it — the dark side faces us). 🌙 Crescent (a thin sliver like a fingernail). 🌓 Half Moon (half lit, half dark). 🌕 Full Moon (the whole face is glowing bright!). Then it shrinks back: half, crescent, new — and starts all over again, about every 29 days!",
        },
        {
          id: "prek-astro-l03-c3",
          title: "The Moon Has No Light of Its Own",
          content:
            "Here is a surprise: the Moon does NOT glow by itself! It is actually a big gray rock. 🪨 The Moon shines because it reflects the Sun's light, like a mirror. When you see a bright full Moon, you are seeing sunlight bouncing off the Moon's surface right into your eyes!",
        },
      ],
      flashcards: [
        { id: "prek-astro-l03-f1", front: "Name the four main Moon phases", back: "New Moon 🌑, Crescent 🌙, Half Moon 🌓, Full Moon 🌕" },
        { id: "prek-astro-l03-f2", front: "Does the Moon make its own light?", back: "No! The Moon reflects the Sun's light like a mirror. It is actually a big gray rock." },
        { id: "prek-astro-l03-f3", front: "How long does a full cycle of Moon phases take?", back: "About 29 days — almost one month!" },
      ],
      questions: [
        {
          id: "prek-astro-l03-q1",
          text: "A full, round, glowing Moon is called a...",
          options: [
            { id: "a", text: "New Moon" },
            { id: "b", text: "Half Moon" },
            { id: "c", text: "Full Moon" },
            { id: "d", text: "Crescent Moon" },
          ],
          correctOptionId: "c",
          explanation: "When we see the Moon's whole bright face, it is a Full Moon! 🌕",
        },
        {
          id: "prek-astro-l03-q2",
          text: "The Moon shines because...",
          options: [
            { id: "a", text: "It is on fire" },
            { id: "b", text: "It reflects the Sun's light" },
            { id: "c", text: "It has a lightbulb inside" },
            { id: "d", text: "It is made of glitter" },
          ],
          correctOptionId: "b",
          explanation: "The Moon is a rock that reflects sunlight — like a big mirror in the sky!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L04  Moon Phase Sorting  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l04",
      title: "Moon Phase Match-Up!",
      type: "interactive",
      duration: 10,
      objectives: [
        "Match each Moon phase name to its appearance",
        "Order the Moon phases from new to full",
      ],
      interactiveActivities: [
        {
          id: "prek-astro-l04-ia1",
          type: "matching_pairs",
          title: "Match the Moon Shape!",
          description: "Connect each name to the right Moon shape.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "New Moon" },
              { id: "l2", label: "Crescent" },
              { id: "l3", label: "Half Moon" },
              { id: "l4", label: "Full Moon" },
            ],
            right: [
              { id: "r1", label: "🌑 All dark" },
              { id: "r2", label: "🌙 Thin sliver" },
              { id: "r3", label: "🌓 Half lit" },
              { id: "r4", label: "🌕 All bright" },
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
    },

    /* ──────────────────────────────────────────────
       L05  Checkpoint Quiz 1  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l05",
      title: "Checkpoint: Sun, Day & Night, Moon",
      type: "quiz",
      duration: 8,
      questions: [
        {
          id: "prek-astro-l05-q1",
          text: "The Sun is actually a...",
          options: [
            { id: "a", text: "Planet" },
            { id: "b", text: "Star" },
            { id: "c", text: "Moon" },
            { id: "d", text: "Cloud" },
          ],
          correctOptionId: "b",
          explanation: "The Sun is a star — a giant ball of hot glowing gas!",
        },
        {
          id: "prek-astro-l05-q2",
          text: "Day happens when our side of Earth faces the...",
          options: [
            { id: "a", text: "Moon" },
            { id: "b", text: "Stars" },
            { id: "c", text: "Sun" },
            { id: "d", text: "Ground" },
          ],
          correctOptionId: "c",
          explanation: "The side of Earth facing the Sun gets sunlight — that is daytime!",
        },
        {
          id: "prek-astro-l05-q3",
          text: "Which Moon phase looks like a thin banana?",
          options: [
            { id: "a", text: "Full Moon" },
            { id: "b", text: "Crescent Moon" },
            { id: "c", text: "New Moon" },
            { id: "d", text: "Half Moon" },
          ],
          correctOptionId: "b",
          explanation: "A crescent Moon is a thin sliver — it looks like a banana! 🌙",
        },
        {
          id: "prek-astro-l05-q4",
          text: "The Moon shines by...",
          options: [
            { id: "a", text: "Making its own fire" },
            { id: "b", text: "Reflecting the Sun's light" },
            { id: "c", text: "Using batteries" },
            { id: "d", text: "Being made of diamonds" },
          ],
          correctOptionId: "b",
          explanation: "The Moon reflects sunlight like a mirror!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L06  Stars: Faraway Suns  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l06",
      title: "Stars: Tiny Lights, Giant Suns!",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that stars are faraway suns",
        "Describe why stars twinkle",
        "State that we can only see stars at night because the Sun is too bright during the day",
      ],
      chunks: [
        {
          id: "prek-astro-l06-c1",
          title: "Stars Are Suns!",
          content:
            "Every tiny sparkle you see in the night sky is actually a giant ball of hot gas — just like our Sun! ⭐ Stars look tiny because they are incredibly far away. Imagine your friend standing at the end of a very, very, VERY long field — they look super small, right? Stars are like that, but a million times farther!",
        },
        {
          id: "prek-astro-l06-c2",
          title: "Why Stars Twinkle",
          content:
            "Stars do not actually twinkle — they shine with a steady light! But Earth's air wiggles and wobbles their light as it travels to your eyes, making them look like they are blinking on and off. ✨ It is like looking at a coin at the bottom of a swimming pool — the water makes it shimmer!",
        },
        {
          id: "prek-astro-l06-c3",
          title: "Where Do Stars Go During the Day?",
          content:
            "Stars are ALWAYS there — even right now! 🌞 But during the day, the Sun is so bright that it washes out the starlight. It is like trying to see a flashlight beam when you are standing in front of a spotlight. At night, when the Sun is shining on the other side of Earth, the sky gets dark enough to see the stars again.",
        },
      ],
      flashcards: [
        { id: "prek-astro-l06-f1", front: "What are stars?", back: "Giant balls of hot gas far, far away — they are suns just like ours! ⭐" },
        { id: "prek-astro-l06-f2", front: "Why do stars twinkle?", back: "Earth's air wiggles their light! Stars actually shine steadily." },
        { id: "prek-astro-l06-f3", front: "Where do stars go during the day?", back: "Nowhere! They are still there, but the Sun is too bright to see them." },
      ],
      questions: [
        {
          id: "prek-astro-l06-q1",
          text: "Stars are really...",
          options: [
            { id: "a", text: "Stickers on the sky" },
            { id: "b", text: "Faraway suns made of hot gas" },
            { id: "c", text: "Fireflies" },
            { id: "d", text: "Tiny diamonds" },
          ],
          correctOptionId: "b",
          explanation: "Every star is a giant sun — they just look tiny because they are so far away!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L07  The Planets: Our Neighbors  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l07",
      title: "Meet the Planets!",
      type: "video",
      duration: 10,
      objectives: [
        "Name all eight planets in order from the Sun",
        "Describe one fun fact about Earth, Mars, Jupiter, and Saturn",
        "Explain that all planets orbit (go around) the Sun",
      ],
      chunks: [
        {
          id: "prek-astro-l07-c1",
          title: "The Planet Parade",
          content:
            "Eight planets go around our Sun! Let's learn them in order using a silly sentence: My Very Excited Mother Just Served Us Nachos! 🌮 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Say it with me! Mercury is closest to the Sun, and Neptune is the farthest.",
        },
        {
          id: "prek-astro-l07-c2",
          title: "Rocky Planets: The Inner Four",
          content:
            "The first four planets are small and rocky! Mercury is tiny and covered in craters. Venus is super hot — hotter than an oven! 🔥 Earth is our beautiful blue home with water, air, and life. Mars is the red planet with giant volcanoes and rusty red dust. Maybe astronauts will visit Mars someday! 🚀",
        },
        {
          id: "prek-astro-l07-c3",
          title: "Giant Planets: The Outer Four",
          content:
            "The outer four planets are ENORMOUS gas giants! Jupiter is the biggest planet — over 1,000 Earths could fit inside, and it has a Great Red Spot that is actually a storm bigger than Earth! 🌪️ Saturn has gorgeous rings made of ice and rock. Uranus spins on its side like a rolling ball. Neptune is deep blue and has the fastest winds in the solar system — over 1,200 mph!",
        },
      ],
      flashcards: [
        { id: "prek-astro-l07-f1", front: "Name the 8 planets in order", back: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune! (My Very Excited Mother Just Served Us Nachos) 🌮" },
        { id: "prek-astro-l07-f2", front: "Which planet is biggest?", back: "Jupiter! Over 1,000 Earths could fit inside it. It has a Great Red Spot storm." },
        { id: "prek-astro-l07-f3", front: "Which planet has rings?", back: "Saturn! Its rings are made of ice and rock chunks spinning around it. 💍" },
        { id: "prek-astro-l07-f4", front: "Why is Mars called the Red Planet?", back: "Its surface is covered in rusty red dust that makes the whole planet look red! 🔴" },
      ],
      questions: [
        {
          id: "prek-astro-l07-q1",
          text: "Which planet is closest to the Sun?",
          options: [
            { id: "a", text: "Earth" },
            { id: "b", text: "Mercury" },
            { id: "c", text: "Jupiter" },
            { id: "d", text: "Neptune" },
          ],
          correctOptionId: "b",
          explanation: "Mercury is the first planet — closest to the Sun!",
        },
        {
          id: "prek-astro-l07-q2",
          text: "Which planet has beautiful rings?",
          options: [
            { id: "a", text: "Mars" },
            { id: "b", text: "Venus" },
            { id: "c", text: "Saturn" },
            { id: "d", text: "Earth" },
          ],
          correctOptionId: "c",
          explanation: "Saturn is famous for its gorgeous rings made of ice and rock!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L08  Planet Sorting  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l08",
      title: "Planet Sort: Rocky or Gassy?",
      type: "interactive",
      duration: 10,
      objectives: [
        "Sort the eight planets into rocky and gas giant groups",
        "Recall which planets are inner vs. outer",
      ],
      interactiveActivities: [
        {
          id: "prek-astro-l08-ia1",
          type: "sorting_buckets",
          title: "Rocky Planet or Gas Giant?",
          description: "Sort each planet into the right group!",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "rocky", label: "Rocky Planets (small & hard)" },
              { id: "gas", label: "Gas Giants (huge & fluffy)" },
            ],
            items: [
              { id: "i1", label: "Mercury", correctBucketId: "rocky" },
              { id: "i2", label: "Venus", correctBucketId: "rocky" },
              { id: "i3", label: "Earth", correctBucketId: "rocky" },
              { id: "i4", label: "Mars", correctBucketId: "rocky" },
              { id: "i5", label: "Jupiter", correctBucketId: "gas" },
              { id: "i6", label: "Saturn", correctBucketId: "gas" },
              { id: "i7", label: "Uranus", correctBucketId: "gas" },
              { id: "i8", label: "Neptune", correctBucketId: "gas" },
            ],
          },
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L09  Astronauts and Space Travel  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l09",
      title: "Astronauts: Heroes in Space!",
      type: "video",
      duration: 8,
      objectives: [
        "Describe what an astronaut does",
        "Explain that astronauts float in space because of microgravity",
        "Name one thing astronauts must bring to survive in space",
      ],
      chunks: [
        {
          id: "prek-astro-l09-c1",
          title: "What Do Astronauts Do?",
          content:
            "Astronauts are brave explorers who travel to space! 🧑‍🚀 They ride rockets to get there, live on the International Space Station (ISS), and do science experiments. Some astronauts have walked on the Moon! They study how things work in space so that one day, people might live on Mars or even farther away.",
        },
        {
          id: "prek-astro-l09-c2",
          title: "Floating in Space!",
          content:
            "In space, astronauts FLOAT! Their food floats, their drinks float, even their tears float into little bubbles. 🫧 This happens because of microgravity — the space station is falling around Earth so fast that everything inside feels weightless. Astronauts have to strap themselves into bed so they don't drift away while sleeping!",
        },
        {
          id: "prek-astro-l09-c3",
          title: "Packing for Space",
          content:
            "Space has no air, no water, and no grocery stores! 🛒 Astronauts must bring everything: oxygen to breathe, water to drink, food in special pouches, and a spacesuit to wear outside. A spacesuit is like a mini-spaceship you can wear — it gives you air, keeps you warm, and protects you from the Sun's rays.",
        },
      ],
      flashcards: [
        { id: "prek-astro-l09-f1", front: "Why do astronauts float in space?", back: "Microgravity! The space station is falling around Earth so fast that everything feels weightless. 🫧" },
        { id: "prek-astro-l09-f2", front: "What is a spacesuit?", back: "A mini-spaceship you wear! It gives air, warmth, and protection outside the station. 🧑‍🚀" },
        { id: "prek-astro-l09-f3", front: "What do astronauts study?", back: "How things work in space! They do science experiments on the International Space Station." },
      ],
      questions: [
        {
          id: "prek-astro-l09-q1",
          text: "In space, astronauts...",
          options: [
            { id: "a", text: "Sink to the floor" },
            { id: "b", text: "Float because of microgravity" },
            { id: "c", text: "Walk normally" },
            { id: "d", text: "Fly with wings" },
          ],
          correctOptionId: "b",
          explanation: "Microgravity makes astronauts float — even their food floats!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L10  Celebration Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "prek-astro-l10",
      title: "Celebration Quiz: Space Superstar!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "prek-astro-l10-q1",
          text: "The Sun is made of...",
          options: [
            { id: "a", text: "Hot glowing gas" },
            { id: "b", text: "Ice" },
            { id: "c", text: "Chocolate" },
            { id: "d", text: "Wood" },
          ],
          correctOptionId: "a",
          explanation: "The Sun is a giant ball of super-hot glowing gas!",
        },
        {
          id: "prek-astro-l10-q2",
          text: "Earth spins once every...",
          options: [
            { id: "a", text: "1 hour" },
            { id: "b", text: "24 hours" },
            { id: "c", text: "1 year" },
            { id: "d", text: "10 seconds" },
          ],
          correctOptionId: "b",
          explanation: "One full spin of Earth takes 24 hours — one day and one night!",
        },
        {
          id: "prek-astro-l10-q3",
          text: "A full, round Moon is called a...",
          options: [
            { id: "a", text: "New Moon" },
            { id: "b", text: "Crescent Moon" },
            { id: "c", text: "Full Moon" },
            { id: "d", text: "Half Moon" },
          ],
          correctOptionId: "c",
          explanation: "When we see the Moon's whole bright face, it is a Full Moon! 🌕",
        },
        {
          id: "prek-astro-l10-q4",
          text: "Stars look tiny because they are...",
          options: [
            { id: "a", text: "Actually very small" },
            { id: "b", text: "Very, very far away" },
            { id: "c", text: "Hiding behind clouds" },
            { id: "d", text: "Scared of us" },
          ],
          correctOptionId: "b",
          explanation: "Stars are giant suns — they just look tiny because they are incredibly far away!",
        },
        {
          id: "prek-astro-l10-q5",
          text: "Which planet has rings?",
          options: [
            { id: "a", text: "Mercury" },
            { id: "b", text: "Earth" },
            { id: "c", text: "Saturn" },
            { id: "d", text: "Mars" },
          ],
          correctOptionId: "c",
          explanation: "Saturn is famous for its beautiful rings made of ice and rock!",
        },
        {
          id: "prek-astro-l10-q6",
          text: "Why do astronauts float on the space station?",
          options: [
            { id: "a", text: "They have jetpacks" },
            { id: "b", text: "Microgravity" },
            { id: "c", text: "The floor is bouncy" },
            { id: "d", text: "They eat special food" },
          ],
          correctOptionId: "b",
          explanation: "Microgravity makes everything on the space station feel weightless!",
        },
      ],
    },
  ],
};
