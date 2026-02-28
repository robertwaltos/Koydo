import type { LearningModule } from "@/lib/modules/types";

export const PreKGeneralRelativity101Module: LearningModule = {
  id: "pre-k-general-relativity-101",
  title: "Pre-K Space, Time & Gravity Explorers",
  description:
    "Explore gravity, speed, light, and how heavy things bend space using play-based analogies, stories, and hands-on experiments for ages 3-5.",
  subject: "General Relativity",
  tags: ["pre-k", "curriculum", "interactive", "gravity", "space", "light", "physics"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "4.0.0",
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es", "fr", "de", "hi", "zh"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe gravity as a force that pulls everything toward the ground",
    "Demonstrate that heavy objects and light objects fall at the same speed",
    "Explain that light is the fastest thing in the universe",
    "Show how a heavy ball on a stretchy blanket makes a dip (curved space analogy)",
    "Recognize that time can feel different depending on what you are doing",
  ],
  lessons: [
    // ── L01  What Is Gravity? ─────────────────────────────────
    {
      id: "pre-k-general-relativity-101-l01",
      title: "What Is Gravity?",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-general-relativity-101-l01-c1",
          title: "The Invisible Pull",
          content:
            "Gravity is an invisible force that pulls everything DOWN toward the ground. When you jump, gravity pulls you back. When you drop a ball, gravity makes it fall. Without gravity, everything would float away — even you!",
        },
        {
          id: "pre-k-general-relativity-101-l01-c2",
          title: "Gravity on Earth",
          content:
            "Earth is very big and very heavy, and that heaviness creates gravity. It is like Earth is giving you a big hug that keeps your feet on the ground. Every planet, star, and moon has gravity too — the bigger they are, the stronger the pull!",
        },
        {
          id: "pre-k-general-relativity-101-l01-c3",
          title: "What If There Were No Gravity?",
          content:
            "Astronauts on the space station float because they are falling around Earth really fast! Their water floats in bubbles, their food floats off the plate, and they have to strap into their sleeping bags. Gravity on Earth keeps our life nice and tidy.",
        },
      ],
      flashcards: [
        { id: "pre-k-general-relativity-101-l01-fc1", front: "What does gravity do?", back: "It pulls everything toward the ground." },
        { id: "pre-k-general-relativity-101-l01-fc2", front: "Why do astronauts float in space?", back: "They are falling around Earth so fast that they feel weightless." },
        { id: "pre-k-general-relativity-101-l01-fc3", front: "What makes Earth's gravity strong?", back: "Earth is very big and heavy — big things have strong gravity." },
      ],
      learningAids: [
        { id: "pre-k-general-relativity-101-l01-a1", type: "image", title: "Gravity Pull", content: "Child jumping up with an arrow pointing down labeled 'Gravity pulls you back!'" },
      ],
    },

    // ── L02  Heavy and Light Fall Together ─────────────────────
    {
      id: "pre-k-general-relativity-101-l02",
      title: "Heavy and Light Fall Together",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-general-relativity-101-l02-c1",
          title: "A Surprising Experiment",
          content:
            "If you drop a heavy book and a light pencil at the same time from the same height — which hits the ground first? You might guess the heavy book, but they land at almost the same time! Gravity pulls everything equally.",
        },
        {
          id: "pre-k-general-relativity-101-l02-c2",
          title: "Why Does a Feather Float Slowly?",
          content:
            "A feather drifts slowly because AIR pushes against it — not because gravity is weaker. If you removed all the air (a vacuum), a feather and a bowling ball would hit the ground at the EXACT same time! Astronauts actually tested this on the Moon.",
        },
        {
          id: "pre-k-general-relativity-101-l02-c3",
          title: "Galileo's Big Idea",
          content:
            "Long ago, a scientist named Galileo figured this out. Legend says he dropped balls from a tall tower in Italy. People were shocked — the big ball and small ball hit the ground together! This idea helped another scientist named Einstein think about gravity in a brand new way.",
        },
      ],
      flashcards: [
        { id: "pre-k-general-relativity-101-l02-fc1", front: "Do heavy things fall faster than light things?", back: "No! Gravity pulls everything at the same speed. Air resistance makes feathers float slowly." },
        { id: "pre-k-general-relativity-101-l02-fc2", front: "Who first tested that objects fall at the same speed?", back: "Galileo — he dropped balls from a tall tower." },
        { id: "pre-k-general-relativity-101-l02-fc3", front: "What slows a feather down?", back: "Air pushing against it (air resistance), not weaker gravity." },
      ],
      learningAids: [
        { id: "pre-k-general-relativity-101-l02-a1", type: "practice", title: "Drop Test", content: "Hold a shoe and a sock at the same height. Drop them together. Do they land at the same time? Try other pairs!" },
      ],
    },

    // ── L03  Drop Experiment (Interactive) ────────────────────
    {
      id: "pre-k-general-relativity-101-l03",
      title: "Drop Experiment",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "Drop a ball and a stuffed animal from the same height. What happens?",
          "Why does a feather float slowly but a rock falls fast?",
          "What would happen if there were no air?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-general-relativity-101-l03-ia1",
          type: "sorting_buckets",
          title: "Falls Fast vs. Floats (in Air)",
          description: "Drag each item: does it fall fast or float slowly because of air?",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "fast", label: "Falls Fast" },
              { id: "slow", label: "Floats Slowly (air catches it)" },
            ],
            items: [
              { id: "i1", label: "Rock 🪨", correctBucketId: "fast" },
              { id: "i2", label: "Feather 🪶", correctBucketId: "slow" },
              { id: "i3", label: "Ball ⚽", correctBucketId: "fast" },
              { id: "i4", label: "Paper sheet 📄", correctBucketId: "slow" },
              { id: "i5", label: "Apple 🍎", correctBucketId: "fast" },
              { id: "i6", label: "Balloon 🎈", correctBucketId: "slow" },
            ],
          },
        },
      ],
      learningAids: [
        { id: "pre-k-general-relativity-101-l03-a1", type: "practice", title: "Crumple Test", content: "Lay a paper flat and drop it — it floats. Now crumple it into a ball and drop it — it falls fast! Same paper, same gravity. The shape changes how air catches it." },
      ],
    },

    // ── L04  Light: The Fastest Thing ─────────────────────────
    {
      id: "pre-k-general-relativity-101-l04",
      title: "Light: The Fastest Thing Ever",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-general-relativity-101-l04-c1",
          title: "Nothing Is Faster Than Light",
          content:
            "Light is the FASTEST thing in the whole universe. When you flip a light switch, the room lights up INSTANTLY — light moves so fast you cannot even see it travel. It goes 186,000 miles every single SECOND!",
        },
        {
          id: "pre-k-general-relativity-101-l04-c2",
          title: "Light from the Sun",
          content:
            "The Sun is very far away — about 93 million miles. But light from the Sun reaches Earth in just 8 minutes! If you could drive a car to the Sun, it would take over 100 YEARS. Light makes that trip in 8 minutes. That is seriously fast!",
        },
        {
          id: "pre-k-general-relativity-101-l04-c3",
          title: "Einstein's Speed Limit",
          content:
            "A scientist named Albert Einstein discovered that NOTHING can go faster than light — it is the universe's speed limit. No rocket, no spaceship, no superhero can beat the speed of light. Einstein thought about this when he was young — just by imagining!",
        },
      ],
      flashcards: [
        { id: "pre-k-general-relativity-101-l04-fc1", front: "What is the fastest thing in the universe?", back: "Light!" },
        { id: "pre-k-general-relativity-101-l04-fc2", front: "How long does sunlight take to reach Earth?", back: "About 8 minutes." },
        { id: "pre-k-general-relativity-101-l04-fc3", front: "Who discovered that nothing can go faster than light?", back: "Albert Einstein." },
      ],
      learningAids: [
        { id: "pre-k-general-relativity-101-l04-a1", type: "image", title: "Speed Comparison", content: "Lineup: walking person → bicycle → car → airplane → rocket → LIGHT (with a huge gap showing light is way faster)." },
      ],
    },

    // ── L05  Checkpoint Quiz 1 ────────────────────────────────
    {
      id: "pre-k-general-relativity-101-l05",
      title: "Checkpoint: Gravity and Light",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-general-relativity-101-l05-q1",
          text: "What does gravity do?",
          skillId: "pre-k-general-relativity-101-skill-gravity",
          options: [
            { id: "a", text: "Pulls things toward the ground" },
            { id: "b", text: "Pushes things into the sky" },
            { id: "c", text: "Makes things turn purple" },
            { id: "d", text: "Makes things invisible" },
          ],
          correctOptionId: "a",
          explanation: "Gravity is an invisible force that pulls everything down toward Earth.",
        },
        {
          id: "pre-k-general-relativity-101-l05-q2",
          text: "If you drop a heavy ball and a light ball at the same time, what happens?",
          skillId: "pre-k-general-relativity-101-skill-falling",
          options: [
            { id: "a", text: "They hit the ground at almost the same time" },
            { id: "b", text: "The heavy one lands first" },
            { id: "c", text: "The light one lands first" },
            { id: "d", text: "They both fly up" },
          ],
          correctOptionId: "a",
          explanation: "Gravity pulls everything at the same speed. The heavy and light ball land together!",
        },
        {
          id: "pre-k-general-relativity-101-l05-q3",
          text: "What is the fastest thing in the universe?",
          skillId: "pre-k-general-relativity-101-skill-light",
          options: [
            { id: "a", text: "Light" },
            { id: "b", text: "A rocket" },
            { id: "c", text: "A cheetah" },
            { id: "d", text: "Sound" },
          ],
          correctOptionId: "a",
          explanation: "Light is the universe's speed champion — nothing can go faster!",
        },
        {
          id: "pre-k-general-relativity-101-l05-q4",
          text: "Why does a feather fall slowly but a rock falls fast?",
          skillId: "pre-k-general-relativity-101-skill-falling",
          options: [
            { id: "a", text: "Air pushes against the feather more" },
            { id: "b", text: "Gravity does not like feathers" },
            { id: "c", text: "Rocks are magnetic" },
            { id: "d", text: "Feathers are scared of the ground" },
          ],
          correctOptionId: "a",
          explanation: "Air resistance catches the wide, flat feather. Without air, both would fall at the same speed!",
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

    // ── L06  The Blanket Model: Curved Space ──────────────────
    {
      id: "pre-k-general-relativity-101-l06",
      title: "The Blanket Model: Bending Space",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-general-relativity-101-l06-c1",
          title: "Space Is Like a Stretchy Blanket",
          content:
            "Imagine holding a blanket flat with your friends — nice and smooth. Now place a heavy bowling ball in the middle. What happens? The blanket dips down! That dip is like what heavy objects do to space. Einstein called this 'curved space.'",
        },
        {
          id: "pre-k-general-relativity-101-l06-c2",
          title: "Things Roll Toward the Dip",
          content:
            "If you roll a marble across the blanket, it curves toward the bowling ball's dip. It looks like the bowling ball is pulling the marble, but really the marble is following the curved blanket! That is how gravity works according to Einstein.",
        },
        {
          id: "pre-k-general-relativity-101-l06-c3",
          title: "The Sun and Earth",
          content:
            "The Sun is SO heavy that it makes a huge dip in space. Earth rolls around that dip in a circle — that is why we orbit the Sun! The Moon rolls around Earth's smaller dip. Gravity is really about curves in space.",
        },
      ],
      flashcards: [
        { id: "pre-k-general-relativity-101-l06-fc1", front: "What happens when you put a heavy ball on a stretchy blanket?", back: "The blanket dips down — just like heavy objects curve space!" },
        { id: "pre-k-general-relativity-101-l06-fc2", front: "Why does Earth go around the Sun?", back: "The Sun's gravity makes a dip in space, and Earth rolls around it." },
        { id: "pre-k-general-relativity-101-l06-fc3", front: "Who figured out that gravity bends space?", back: "Albert Einstein." },
      ],
      learningAids: [
        { id: "pre-k-general-relativity-101-l06-a1", type: "practice", title: "Blanket Experiment", content: "Hold a bedsheet flat with helpers. Put a heavy ball in the center. Roll marbles — watch them curve toward the dip!" },
      ],
    },

    // ── L07  Blanket Space (Interactive) ──────────────────────
    {
      id: "pre-k-general-relativity-101-l07",
      title: "Blanket Space Game",
      type: "interactive",
      duration: 10,
      metadata: {
        prompts: [
          "What happens to a marble when you put a big ball on the blanket?",
          "What if you used a heavier ball? Would the dip be bigger or smaller?",
          "Can you explain why Earth goes around the Sun?",
        ],
      },
      interactiveActivities: [
        {
          id: "pre-k-general-relativity-101-l07-ia1",
          type: "matching_pairs",
          title: "Space Object to Dip Size",
          description: "Match each space object to how big a dip it makes in space.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "The Sun ☀️" },
              { id: "l2", label: "Earth 🌍" },
              { id: "l3", label: "The Moon 🌙" },
              { id: "l4", label: "A basketball 🏀" },
            ],
            right: [
              { id: "r1", label: "Biggest dip (very heavy)" },
              { id: "r2", label: "Medium dip" },
              { id: "r3", label: "Small dip" },
              { id: "r4", label: "Tiny tiny dip (almost nothing)" },
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
        { id: "pre-k-general-relativity-101-l07-a1", type: "image", title: "Curved Space Diagram", content: "Side view of a stretchy grid with a heavy sphere pushing it down and a smaller sphere rolling along the curve toward it." },
      ],
    },

    // ── L08  Time Can Feel Different ──────────────────────────
    {
      id: "pre-k-general-relativity-101-l08",
      title: "Time Can Feel Different",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-general-relativity-101-l08-c1",
          title: "Slow Time and Fast Time",
          content:
            "Have you noticed that fun time feels FAST? When you play your favorite game, an hour flies by. But boring time feels SLOW — waiting at the doctor's office can feel like forever! Your feeling about time changes even though the clock ticks the same.",
        },
        {
          id: "pre-k-general-relativity-101-l08-c2",
          title: "Einstein's Time Discovery",
          content:
            "Einstein discovered something amazing: time REALLY does go at different speeds! If you travel super fast — close to the speed of light — time slows down for you compared to people standing still. This is not pretend — scientists have measured it!",
        },
        {
          id: "pre-k-general-relativity-101-l08-c3",
          title: "Gravity Slows Time Too",
          content:
            "Strong gravity also slows time down. A clock on a tall mountain runs a tiny bit faster than a clock at the bottom. The difference is so small you would never notice, but super-precise atomic clocks can measure it. Gravity bends time, not just space!",
        },
      ],
      flashcards: [
        { id: "pre-k-general-relativity-101-l08-fc1", front: "Does time always tick at the same speed?", back: "No! Moving very fast or being near strong gravity changes how fast time passes." },
        { id: "pre-k-general-relativity-101-l08-fc2", front: "What happens to time when you travel super fast?", back: "Time slows down for you compared to someone standing still." },
        { id: "pre-k-general-relativity-101-l08-fc3", front: "Does a clock on a mountain or at the bottom run faster?", back: "The mountain clock runs a tiny bit faster (less gravity up there)." },
      ],
      learningAids: [
        { id: "pre-k-general-relativity-101-l08-a1", type: "image", title: "Time Warp", content: "Two clocks: one on a fast rocket (ticking slowly) and one on the ground (ticking normally), showing time difference." },
      ],
    },

    // ── L09  Meet Albert Einstein ─────────────────────────────
    {
      id: "pre-k-general-relativity-101-l09",
      title: "Meet Albert Einstein",
      type: "video",
      duration: 8,
      chunks: [
        {
          id: "pre-k-general-relativity-101-l09-c1",
          title: "A Curious Kid",
          content:
            "Albert Einstein was born in Germany in 1879. As a kid, he was very curious and loved asking questions. His uncle gave him a compass, and young Albert was amazed that the needle always pointed north. 'What invisible force makes it move?' he wondered.",
        },
        {
          id: "pre-k-general-relativity-101-l09-c2",
          title: "Imagining at the Speed of Light",
          content:
            "As a teenager, Einstein imagined: 'What would it be like to ride on a beam of light?' This thought experiment led him to his greatest ideas about time, space, and gravity. He proved that being curious and using your imagination can change the world!",
        },
        {
          id: "pre-k-general-relativity-101-l09-c3",
          title: "Einstein's Message for You",
          content:
            "Einstein once said, 'Imagination is more important than knowledge.' He was not the best student in every subject, but he never stopped asking questions. If you are curious and keep wondering 'why,' you are thinking like Einstein!",
        },
      ],
      flashcards: [
        { id: "pre-k-general-relativity-101-l09-fc1", front: "What amazed young Einstein as a kid?", back: "A compass — he wondered what invisible force made the needle point north." },
        { id: "pre-k-general-relativity-101-l09-fc2", front: "What famous thought experiment did Einstein imagine?", back: "Riding on a beam of light." },
        { id: "pre-k-general-relativity-101-l09-fc3", front: "What did Einstein say is more important than knowledge?", back: "Imagination!" },
      ],
      learningAids: [
        { id: "pre-k-general-relativity-101-l09-a1", type: "image", title: "Young Einstein", content: "Cartoon of a child with wild hair holding a compass, looking amazed, with a thought bubble showing a beam of light." },
      ],
    },

    // ── L10  Celebration Quiz ─────────────────────────────────
    {
      id: "pre-k-general-relativity-101-l10",
      title: "Celebration Quiz: Space, Time & Gravity!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-general-relativity-101-l10-q1",
          text: "What happens when you put a heavy ball on a stretchy blanket?",
          skillId: "pre-k-general-relativity-101-skill-curved-space",
          options: [
            { id: "a", text: "The blanket dips down — like how heavy things curve space" },
            { id: "b", text: "The blanket flies into the air" },
            { id: "c", text: "The ball disappears" },
            { id: "d", text: "Nothing happens" },
          ],
          correctOptionId: "a",
          explanation: "Heavy objects make dips in space, just like a bowling ball makes a dip in a blanket!",
        },
        {
          id: "pre-k-general-relativity-101-l10-q2",
          text: "Why does Earth go around the Sun?",
          skillId: "pre-k-general-relativity-101-skill-curved-space",
          options: [
            { id: "a", text: "The Sun's gravity makes a dip in space and Earth rolls around it" },
            { id: "b", text: "Earth is tied to the Sun with a rope" },
            { id: "c", text: "The wind pushes Earth" },
            { id: "d", text: "Earth is bouncing off the Moon" },
          ],
          correctOptionId: "a",
          explanation: "The Sun is so heavy it curves space. Earth follows that curve — that is an orbit!",
        },
        {
          id: "pre-k-general-relativity-101-l10-q3",
          text: "What did Einstein say is more important than knowledge?",
          skillId: "pre-k-general-relativity-101-skill-einstein",
          options: [
            { id: "a", text: "Imagination" },
            { id: "b", text: "Speed" },
            { id: "c", text: "Money" },
            { id: "d", text: "Toys" },
          ],
          correctOptionId: "a",
          explanation: "Einstein believed that imagination lets you ask the questions that lead to discoveries.",
        },
        {
          id: "pre-k-general-relativity-101-l10-q4",
          text: "What is the fastest thing in the universe?",
          skillId: "pre-k-general-relativity-101-skill-light",
          options: [
            { id: "a", text: "Light" },
            { id: "b", text: "A jet airplane" },
            { id: "c", text: "A bullet train" },
            { id: "d", text: "Thunder" },
          ],
          correctOptionId: "a",
          explanation: "Light travels at 186,000 miles per second — nothing in the universe is faster!",
        },
        {
          id: "pre-k-general-relativity-101-l10-q5",
          text: "What happens to time when you move very, very fast?",
          skillId: "pre-k-general-relativity-101-skill-time",
          options: [
            { id: "a", text: "Time slows down for you" },
            { id: "b", text: "Time speeds up" },
            { id: "c", text: "Time stays exactly the same" },
            { id: "d", text: "Time stops forever" },
          ],
          correctOptionId: "a",
          explanation: "Einstein discovered that time slows down when you move close to the speed of light. Scientists have proven this!",
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
        { id: "pre-k-general-relativity-101-l10-a1", type: "mnemonic", title: "Einstein Rhyme", content: "Gravity bends space like a ball on a sheet, light is the fastest — nothing can beat, and time slows down when you move with great speed — imagination is all that you need!" },
      ],
    },
  ],
};
