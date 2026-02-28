import type { LearningModule } from "@/lib/modules/types";

export const PreKPhysics101Module: LearningModule = {
  id: "pre-k-physics-101",
  title: "Pre-K Push, Pull & Play! Physics Fun",
  description:
    "Discover the amazing world of pushes, pulls, gravity, and motion! Children ages 3-5 explore how things move, why balls roll downhill, what makes magnets stick, and how to build the tallest tower — all through playful experiments and silly stories.",
  subject: "Physics",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "4.0.0",
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Identify pushes and pulls as forces that make things move",
    "Describe what gravity does and why things fall down",
    "Predict which way a ball will roll on a ramp",
    "Explain what happens when you push harder versus softer",
    "Explore how magnets attract and repel",
    "Build a stable tower and explain why some shapes are stronger",
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Pushes and Pulls  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l01",
      title: "Pushes and Pulls Make Things Move!",
      type: "video",
      duration: 8,
      objectives: [
        "Define a push as a force that moves something away from you",
        "Define a pull as a force that moves something toward you",
        "Name three examples of pushes and three examples of pulls",
      ],
      chunks: [
        {
          id: "prek-physics-l01-c1",
          title: "What Is a Push?",
          content:
            "A push moves something AWAY from you! When you push a swing, it flies forward. When you push a toy car, it zooms across the floor. When you push open a door, it swings away from your hands. 🚪 Even blowing air on a pinwheel is a tiny push — the air pushes the blades around and around!",
        },
        {
          id: "prek-physics-l01-c2",
          title: "What Is a Pull?",
          content:
            "A pull moves something TOWARD you! When you pull a wagon, it rolls closer. When you pull open a drawer, it slides out. When you tug on a rope in tug-of-war, you are pulling with all your might! 💪 Even a magnet on the fridge is pulling — it holds your drawing without any hands!",
        },
        {
          id: "prek-physics-l01-c3",
          title: "Push or Pull? The Guessing Game",
          content:
            "Let's play! Opening a jar lid — push or pull? PULL! ✅ Kicking a soccer ball — push or pull? PUSH with your foot! ⚽ Zipping up your jacket — hmm, that is a PULL going up! Every time something moves, there is either a push or a pull making it happen.",
        },
      ],
      flashcards: [
        { id: "prek-physics-l01-f1", front: "What is a push?", back: "A force that moves something AWAY from you — like pushing a swing! 🏋️" },
        { id: "prek-physics-l01-f2", front: "What is a pull?", back: "A force that moves something TOWARD you — like pulling a wagon! 🚂" },
        { id: "prek-physics-l01-f3", front: "What is a force?", back: "A push or a pull that makes something move, stop, or change direction!" },
      ],
      questions: [
        {
          id: "prek-physics-l01-q1",
          text: "Kicking a ball is a...",
          options: [
            { id: "a", text: "Push" },
            { id: "b", text: "Pull" },
            { id: "c", text: "Nap" },
            { id: "d", text: "Song" },
          ],
          correctOptionId: "a",
          explanation: "Your foot pushes the ball away from you — that is a push!",
        },
        {
          id: "prek-physics-l01-q2",
          text: "Pulling a wagon moves it...",
          options: [
            { id: "a", text: "Away from you" },
            { id: "b", text: "Toward you" },
            { id: "c", text: "Up into the sky" },
            { id: "d", text: "Underground" },
          ],
          correctOptionId: "b",
          explanation: "A pull moves things toward you — the wagon follows behind!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L02  Gravity: Why Things Fall Down  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l02",
      title: "Gravity: Why Things Fall Down!",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that gravity is a force that pulls everything toward the ground",
        "Predict that a dropped object will fall down, not up",
        "Describe why jumping always brings you back to Earth",
      ],
      chunks: [
        {
          id: "prek-physics-l02-c1",
          title: "The Invisible Pull",
          content:
            "There is a special force you cannot see called GRAVITY! 🌍 Gravity is the Earth pulling everything toward its center. When you drop a ball, gravity pulls it down — bonk! When you jump up, gravity pulls you back down. Without gravity, you would float away like an astronaut in space! 🧑‍🚀",
        },
        {
          id: "prek-physics-l02-c2",
          title: "The Feather and the Rock",
          content:
            "Drop a rock and a feather at the same time. The rock hits the ground first! That is because air slows the feather down — it is light and flat, so it floats and zigzags. 🪶 But gravity pulls both of them down. On the Moon, where there is no air, they would land at exactly the same time!",
        },
        {
          id: "prek-physics-l02-c3",
          title: "Gravity Is Your Friend",
          content:
            "Gravity keeps your food on your plate, water in your cup, and your feet on the ground! 🥤 It keeps the Moon going around the Earth and the Earth going around the Sun. Without gravity, everything would just float away into space — even your lunch!",
        },
      ],
      flashcards: [
        { id: "prek-physics-l02-f1", front: "What is gravity?", back: "An invisible force that pulls everything toward the ground! It is why things fall down. 🌍" },
        { id: "prek-physics-l02-f2", front: "Why don't we float away?", back: "Gravity keeps our feet on the ground! It pulls us toward the Earth." },
        { id: "prek-physics-l02-f3", front: "Why does a feather fall slower than a rock?", back: "Air slows the feather down because it is light and flat. Gravity pulls both down!" },
      ],
      questions: [
        {
          id: "prek-physics-l02-q1",
          text: "If you drop a toy, what does gravity do?",
          options: [
            { id: "a", text: "Pushes it up" },
            { id: "b", text: "Pulls it down to the ground" },
            { id: "c", text: "Makes it disappear" },
            { id: "d", text: "Turns it into a cat" },
          ],
          correctOptionId: "b",
          explanation: "Gravity pulls everything down toward the ground!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L03  Ramps and Rolling  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l03",
      title: "Ramps: Watch Things Roll and Slide!",
      type: "video",
      duration: 8,
      objectives: [
        "Predict that objects roll faster down steep ramps",
        "Explain that round things roll and flat things slide",
        "Describe how a ramp makes it easier to move heavy things",
      ],
      chunks: [
        {
          id: "prek-physics-l03-c1",
          title: "Steep vs. Gentle Ramps",
          content:
            "A ramp is a flat surface that goes up or down at an angle. Place a toy car at the top of a steep ramp — ZOOM, it flies down fast! 🏎️ Now try a gentle, low ramp — the car rolls slowly. The steeper the ramp, the faster things go because gravity pulls harder along the slope!",
        },
        {
          id: "prek-physics-l03-c2",
          title: "Rollers vs. Sliders",
          content:
            "Round things like balls and wheels ROLL down a ramp. Flat things like books and blocks SLIDE! 📦 Why? Because round shapes turn over and over with very little rubbing. Flat shapes drag along the surface — that rubbing is called friction, and it slows things down.",
        },
        {
          id: "prek-physics-l03-c3",
          title: "Ramps Are Helpers",
          content:
            "Have you seen a wheelchair ramp outside a building? 🏗️ Ramps help people go up without climbing stairs. Moving vans use ramps to roll heavy boxes inside. Even ancient Egyptians may have used ramps to build the pyramids! A ramp makes a hard job easier.",
        },
      ],
      flashcards: [
        { id: "prek-physics-l03-f1", front: "What makes a toy car go faster on a ramp?", back: "A steeper ramp! Gravity pulls harder along steep slopes. 🏎️" },
        { id: "prek-physics-l03-f2", front: "What is friction?", back: "The rubbing between two surfaces that slows things down. Flat things have more friction than round things!" },
        { id: "prek-physics-l03-f3", front: "Why are ramps helpful?", back: "They make it easier to move heavy things up without lifting. Wheelchair ramps help people too!" },
      ],
      questions: [
        {
          id: "prek-physics-l03-q1",
          text: "A ball on a steep ramp will roll...",
          options: [
            { id: "a", text: "Slowly" },
            { id: "b", text: "Not at all" },
            { id: "c", text: "Fast!" },
            { id: "d", text: "Upward" },
          ],
          correctOptionId: "c",
          explanation: "Steep ramps make things roll fast because gravity pulls harder!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L04  Ramp Experiments  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l04",
      title: "Ramp Lab: Predict and Test!",
      type: "interactive",
      duration: 10,
      objectives: [
        "Predict which ramp will make a ball go farthest",
        "Sort objects into rollers and sliders",
      ],
      interactiveActivities: [
        {
          id: "prek-physics-l04-ia1",
          type: "sorting_buckets",
          title: "Roller or Slider?",
          description: "Sort each object into the correct group!",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "rollers", label: "Rollers (round things)" },
              { id: "sliders", label: "Sliders (flat things)" },
            ],
            items: [
              { id: "i1", label: "Soccer ball ⚽", correctBucketId: "rollers" },
              { id: "i2", label: "Book 📕", correctBucketId: "sliders" },
              { id: "i3", label: "Orange 🍊", correctBucketId: "rollers" },
              { id: "i4", label: "Block 🧱", correctBucketId: "sliders" },
              { id: "i5", label: "Marble 🔮", correctBucketId: "rollers" },
              { id: "i6", label: "Phone 📱", correctBucketId: "sliders" },
            ],
          },
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L05  Checkpoint Quiz 1  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l05",
      title: "Checkpoint: Forces, Gravity & Ramps",
      type: "quiz",
      duration: 8,
      questions: [
        {
          id: "prek-physics-l05-q1",
          text: "Opening a drawer is a...",
          options: [
            { id: "a", text: "Push" },
            { id: "b", text: "Pull" },
            { id: "c", text: "Jump" },
            { id: "d", text: "Song" },
          ],
          correctOptionId: "b",
          explanation: "You pull a drawer toward you to open it!",
        },
        {
          id: "prek-physics-l05-q2",
          text: "Gravity pulls things...",
          options: [
            { id: "a", text: "Up into the sky" },
            { id: "b", text: "Sideways" },
            { id: "c", text: "Down toward the ground" },
            { id: "d", text: "In circles" },
          ],
          correctOptionId: "c",
          explanation: "Gravity always pulls things down toward the Earth!",
        },
        {
          id: "prek-physics-l05-q3",
          text: "Which ramp makes a ball go FASTEST?",
          options: [
            { id: "a", text: "A flat table" },
            { id: "b", text: "A very steep ramp" },
            { id: "c", text: "A tiny bump" },
            { id: "d", text: "A bowl of soup" },
          ],
          correctOptionId: "b",
          explanation: "Steep ramps make things go fast — gravity pulls harder along the slope!",
        },
        {
          id: "prek-physics-l05-q4",
          text: "Which object would ROLL down a ramp?",
          options: [
            { id: "a", text: "A book" },
            { id: "b", text: "A flat block" },
            { id: "c", text: "A round ball" },
            { id: "d", text: "A sandwich" },
          ],
          correctOptionId: "c",
          explanation: "Round things roll! Flat things slide.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L06  Magnets: Stick or Not?  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l06",
      title: "Magnets: The Mystery of Stick and Push!",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that magnets pull some metal objects toward them",
        "Describe that magnets have two ends called poles",
        "Predict whether a magnet will stick to an object or not",
      ],
      chunks: [
        {
          id: "prek-physics-l06-c1",
          title: "What Can Magnets Do?",
          content:
            "Magnets are like magic, but they are real science! 🧲 A magnet can pull a paperclip toward it without even touching. It can stick to the fridge door and hold up your artwork. But magnets do NOT stick to everything — they love metal things like iron and steel, but they ignore wood, plastic, and paper.",
        },
        {
          id: "prek-physics-l06-c2",
          title: "Attract and Repel",
          content:
            "Every magnet has two ends called poles: North and South. If you put a North and a South together — SNAP! They stick! 🧲❤️🧲 But put two Norths together, or two Souths together, and they PUSH each other away! It feels like the magnets are fighting. That pushing is called repelling.",
        },
        {
          id: "prek-physics-l06-c3",
          title: "Magnet Treasure Hunt",
          content:
            "Let's go on a magnet treasure hunt around your house! 🏠 Will a magnet stick to a spoon? Maybe — if it is metal! A plastic cup? Nope! A fridge door? Yes! A wooden table? No! You can test lots of things and sort them into 'magnetic' and 'not magnetic' piles.",
        },
      ],
      flashcards: [
        { id: "prek-physics-l06-f1", front: "What do magnets attract?", back: "Metal things made of iron or steel! They do NOT attract wood, plastic, or paper. 🧲" },
        { id: "prek-physics-l06-f2", front: "What are the two poles of a magnet?", back: "North and South! Opposite poles attract (stick), same poles repel (push away)." },
        { id: "prek-physics-l06-f3", front: "What does 'repel' mean?", back: "To push away! Two North poles or two South poles repel each other. 🧲💨🧲" },
      ],
      questions: [
        {
          id: "prek-physics-l06-q1",
          text: "Will a magnet stick to a wooden block?",
          options: [
            { id: "a", text: "Yes, always" },
            { id: "b", text: "No, magnets only stick to metal" },
            { id: "c", text: "Only on Tuesdays" },
            { id: "d", text: "Only if you ask nicely" },
          ],
          correctOptionId: "b",
          explanation: "Magnets only attract metal like iron and steel — not wood!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L07  Magnet Sorting  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l07",
      title: "Magnet Lab: Stick or Skip?",
      type: "interactive",
      duration: 10,
      objectives: [
        "Sort objects into magnetic and non-magnetic groups",
        "Predict whether a magnet will attract an unfamiliar object",
      ],
      interactiveActivities: [
        {
          id: "prek-physics-l07-ia1",
          type: "sorting_buckets",
          title: "Magnetic or Not?",
          description: "Sort each item: will a magnet stick to it or not?",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "magnetic", label: "Magnet sticks! 🧲" },
              { id: "not-magnetic", label: "Magnet does NOT stick" },
            ],
            items: [
              { id: "i1", label: "Metal paperclip", correctBucketId: "magnetic" },
              { id: "i2", label: "Plastic cup", correctBucketId: "not-magnetic" },
              { id: "i3", label: "Iron nail", correctBucketId: "magnetic" },
              { id: "i4", label: "Wooden spoon", correctBucketId: "not-magnetic" },
              { id: "i5", label: "Steel key", correctBucketId: "magnetic" },
              { id: "i6", label: "Rubber duck", correctBucketId: "not-magnetic" },
            ],
          },
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L08  Building Strong: Shapes and Towers  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l08",
      title: "Build It Strong: Why Triangles Are Tough!",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that wide bases make towers more stable",
        "Describe why triangles are the strongest shape for building",
        "Predict which tower design will stand the longest",
      ],
      chunks: [
        {
          id: "prek-physics-l08-c1",
          title: "The Wobbly Tower Problem",
          content:
            "Stack blocks straight up — wobble, wobble, CRASH! 💥 Why do tall skinny towers fall? Because gravity pulls them down and even a tiny nudge tips them over. The secret to a strong tower is a WIDE BASE — like a pyramid! The wider the bottom, the harder it is to knock over.",
        },
        {
          id: "prek-physics-l08-c2",
          title: "Triangle Power!",
          content:
            "Engineers have a secret weapon: the triangle! 🔺 Triangles are the strongest shape because they cannot be squished flat. Push on a square and it can lean into a diamond shape — floppy! But push on a triangle and it holds firm. Bridges, towers, and even playground structures use triangles to stay strong.",
        },
        {
          id: "prek-physics-l08-c3",
          title: "Your Turn to Build!",
          content:
            "Try building two towers with blocks at home: one skinny tower (blocks stacked in a single column) and one pyramid tower (wide at the bottom, narrow at the top). Gently blow on each one. Which one stands? The pyramid! 🏗️ Real buildings use the same idea — that is engineering!",
        },
      ],
      flashcards: [
        { id: "prek-physics-l08-f1", front: "Why do wide towers stand better?", back: "A wide base spreads out the weight, making it harder to tip over!" },
        { id: "prek-physics-l08-f2", front: "What is the strongest shape?", back: "The triangle! It cannot be squished flat like a square can. 🔺" },
      ],
      questions: [
        {
          id: "prek-physics-l08-q1",
          text: "Which tower is hardest to knock over?",
          options: [
            { id: "a", text: "A tall skinny tower" },
            { id: "b", text: "A pyramid shape — wide on the bottom" },
            { id: "c", text: "A single block standing on its edge" },
            { id: "d", text: "A tower made of feathers" },
          ],
          correctOptionId: "b",
          explanation: "Pyramid shapes have a wide base — they are super stable!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L09  Push Harder, Push Softer  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l09",
      title: "Hard Push vs. Soft Push: What Changes?",
      type: "video",
      duration: 8,
      objectives: [
        "Predict that a harder push makes something move faster or farther",
        "Explain that a softer push makes something move slowly or a short distance",
        "Describe how push strength changes the result",
      ],
      chunks: [
        {
          id: "prek-physics-l09-c1",
          title: "Gentle Tap vs. Big Shove",
          content:
            "Give a toy car a gentle tap — it barely moves. Now give it a BIG push — it zooms across the room! 🚗💨 The harder you push, the farther and faster things go. The softer you push, the less they move. You are controlling the force!",
        },
        {
          id: "prek-physics-l09-c2",
          title: "The Bowling Ball Test",
          content:
            "Imagine rolling a bowling ball. A tiny roll just nudges it forward. A strong roll sends it crashing into all the pins — STRIKE! 🎳 That is because more force means more speed and more power. Athletes use big forces to throw balls far, and gentle forces to place them carefully.",
        },
        {
          id: "prek-physics-l09-c3",
          title: "Force Control in Real Life",
          content:
            "You already control force every day! Petting a cat — gentle force so you don't hurt it 🐱. Hammering a nail — strong force to push it in 🔨. Pressing a button on a remote — just a tiny push. Knowing how hard to push is a superpower!",
        },
      ],
      flashcards: [
        { id: "prek-physics-l09-f1", front: "What happens with a harder push?", back: "Things move FASTER and FARTHER! More force = more movement. 💨" },
        { id: "prek-physics-l09-f2", front: "What happens with a softer push?", back: "Things move SLOWLY and a SHORT distance. Less force = less movement." },
      ],
      questions: [
        {
          id: "prek-physics-l09-q1",
          text: "You give a ball a BIG push. What happens?",
          options: [
            { id: "a", text: "It barely moves" },
            { id: "b", text: "It zooms far and fast!" },
            { id: "c", text: "It floats up" },
            { id: "d", text: "It gets smaller" },
          ],
          correctOptionId: "b",
          explanation: "A big push = lots of force = the ball goes far and fast!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L10  Celebration Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "prek-physics-l10",
      title: "Celebration Quiz: Physics Superstar!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "prek-physics-l10-q1",
          text: "Pushing a door open is a...",
          options: [
            { id: "a", text: "Pull" },
            { id: "b", text: "Push" },
            { id: "c", text: "Magnet" },
            { id: "d", text: "Gravity" },
          ],
          correctOptionId: "b",
          explanation: "Pushing a door moves it away from you — that is a push!",
        },
        {
          id: "prek-physics-l10-q2",
          text: "Why does a ball fall when you drop it?",
          options: [
            { id: "a", text: "The wind blows it down" },
            { id: "b", text: "It is scared" },
            { id: "c", text: "Gravity pulls it toward the ground" },
            { id: "d", text: "Magic" },
          ],
          correctOptionId: "c",
          explanation: "Gravity is the force that pulls everything down toward Earth!",
        },
        {
          id: "prek-physics-l10-q3",
          text: "Which will a magnet stick to?",
          options: [
            { id: "a", text: "A plastic toy" },
            { id: "b", text: "A metal paperclip" },
            { id: "c", text: "A wooden block" },
            { id: "d", text: "A rubber ball" },
          ],
          correctOptionId: "b",
          explanation: "Magnets attract metal! Paperclips are made of steel.",
        },
        {
          id: "prek-physics-l10-q4",
          text: "What is the strongest shape for building?",
          options: [
            { id: "a", text: "Circle" },
            { id: "b", text: "Square" },
            { id: "c", text: "Triangle" },
            { id: "d", text: "Squiggly line" },
          ],
          correctOptionId: "c",
          explanation: "Triangles cannot be squished flat — they are the strongest!",
        },
        {
          id: "prek-physics-l10-q5",
          text: "A gentle push makes a toy car go...",
          options: [
            { id: "a", text: "Super fast" },
            { id: "b", text: "Slowly, just a little" },
            { id: "c", text: "Backward" },
            { id: "d", text: "Up into the air" },
          ],
          correctOptionId: "b",
          explanation: "Less force means less movement — a gentle push = a short, slow roll!",
        },
        {
          id: "prek-physics-l10-q6",
          text: "Two North magnet poles together will...",
          options: [
            { id: "a", text: "Stick together" },
            { id: "b", text: "Push each other away" },
            { id: "c", text: "Disappear" },
            { id: "d", text: "Turn into a bird" },
          ],
          correctOptionId: "b",
          explanation: "Same poles repel — they push each other away!",
        },
      ],
    },
  ],
};
