import type { LearningModule } from "@/lib/modules/types";

/**
 * Pre-K Arts 101 — v4.0.0 (full rewrite)
 *
 * Primary/secondary colors, color mixing, shapes in art,
 * lines & patterns, texture, music & rhythm, famous art,
 * and creative expression — age 3-5.
 *
 * 10 lessons: 6 video · 2 interactive · 2 quiz
 */
export const PreKArts101Module: LearningModule = {
  id: "pre-k-arts-101",
  title: "Pre-K Creative Arts Studio",
  description:
    "A colorful introduction to primary and secondary colors, color mixing, shapes in art, lines & patterns, texture, music & rhythm, famous art, and creative expression for children ages 3-5.",
  subject: "Arts",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Name the primary colors: red, blue, and yellow",
    "Mix two primary colors to make a secondary color",
    "Identify basic shapes and lines in artwork and nature",
    "Explore texture through touch and collage",
    "Clap and tap along to simple rhythms",
    "Recognize famous artworks and the idea of self-expression",
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Primary Colors  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l01",
      title: "Meet the Primary Colors",
      type: "video",
      duration: 8,
      objectives: [
        "Name the three primary colors: red, blue, yellow",
        "Recognize primary colors in everyday objects",
        "Understand that primary colors cannot be made by mixing",
      ],
      chunks: [
        {
          id: "pre-k-arts-101-l01-c1",
          title: "Colors Are Everywhere!",
          content:
            "Look around — the world is full of colors! The sky is blue, grass is green, bananas are yellow, and fire trucks are red. Colors make everything beautiful and interesting. Artists use colors to paint pictures, and you can too!",
        },
        {
          id: "pre-k-arts-101-l01-c2",
          title: "The Three Primary Colors",
          content:
            "There are three special colors called PRIMARY COLORS: RED, BLUE, and YELLOW. They are special because you cannot make them by mixing other colors together. They are the building blocks of ALL other colors! Every color in the rainbow starts with these three.",
        },
        {
          id: "pre-k-arts-101-l01-c3",
          title: "Find Primary Colors Around You",
          content:
            "Let's find primary colors around us! RED: apples, roses, firetrucks. BLUE: sky, ocean, blueberries. YELLOW: sun, bananas, sunflowers. Point to something red, blue, or yellow near you right now!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-arts-101-l01-fc1",
          front: "What are the three primary colors?",
          back: "Red, Blue, and Yellow",
        },
        {
          id: "pre-k-arts-101-l01-fc2",
          front: "Why are primary colors special?",
          back: "You cannot make them by mixing other colors — they are the building blocks of all colors",
        },
        {
          id: "pre-k-arts-101-l01-fc3",
          front: "Name something red in the world",
          back: "Apples, roses, firetrucks, strawberries",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L02  Color Mixing  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l02",
      title: "Color Mixing Magic",
      type: "video",
      duration: 8,
      objectives: [
        "Mix two primary colors to make a secondary color",
        "Name the three secondary colors: orange, green, purple",
        "Predict what color two primaries will make",
      ],
      chunks: [
        {
          id: "pre-k-arts-101-l02-c1",
          title: "What Are Secondary Colors?",
          content:
            "When you mix two primary colors together, you get a brand-new color called a SECONDARY COLOR! There are three secondary colors: ORANGE, GREEN, and PURPLE. They are made from the primary colors we already know.",
        },
        {
          id: "pre-k-arts-101-l02-c2",
          title: "The Three Mixing Recipes",
          content:
            "Here are the three color recipes: RED + YELLOW = ORANGE (like an orange fruit!). BLUE + YELLOW = GREEN (like grass!). RED + BLUE = PURPLE (like grapes!). If you have paint at home, try mixing them yourself!",
        },
        {
          id: "pre-k-arts-101-l02-c3",
          title: "Colors All Around",
          content:
            "Now you know SIX colors! The three primaries — red, blue, yellow — and the three secondaries — orange, green, purple. That is almost all the colors of the rainbow! Artists mix colors every day to make beautiful paintings.",
        },
      ],
      flashcards: [
        {
          id: "pre-k-arts-101-l02-fc1",
          front: "Red + Yellow = ?",
          back: "Orange",
        },
        {
          id: "pre-k-arts-101-l02-fc2",
          front: "Blue + Yellow = ?",
          back: "Green",
        },
        {
          id: "pre-k-arts-101-l02-fc3",
          front: "Red + Blue = ?",
          back: "Purple",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L03  Color Mixing Activity  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l03",
      title: "Color Mixing Lab",
      type: "interactive",
      duration: 10,
      objectives: [
        "Practice matching primary color pairs to the secondary color they create",
        "Sort objects by primary vs. secondary color",
      ],
      interactiveActivities: [
        {
          id: "pre-k-arts-101-l03-ia1",
          type: "matching_pairs",
          title: "Color Mixing Match",
          description:
            "Match each pair of primary colors to the secondary color they make when mixed together.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            pairs: [
              { id: "p1", left: "Red + Yellow", right: "Orange" },
              { id: "p2", left: "Blue + Yellow", right: "Green" },
              { id: "p3", left: "Red + Blue", right: "Purple" },
            ],
          },
        },
        {
          id: "pre-k-arts-101-l03-ia2",
          type: "sorting_buckets",
          title: "Primary or Secondary?",
          description:
            "Sort each color into the Primary Colors bucket or the Secondary Colors bucket.",
          estimatedMinutes: 4,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "b1", label: "Primary Colors" },
              { id: "b2", label: "Secondary Colors" },
            ],
            items: [
              { id: "i1", label: "Red", correctBucketId: "b1" },
              { id: "i2", label: "Orange", correctBucketId: "b2" },
              { id: "i3", label: "Blue", correctBucketId: "b1" },
              { id: "i4", label: "Green", correctBucketId: "b2" },
              { id: "i5", label: "Yellow", correctBucketId: "b1" },
              { id: "i6", label: "Purple", correctBucketId: "b2" },
            ],
          },
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L04  Shapes in Art  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l04",
      title: "Shapes in Art",
      type: "video",
      duration: 8,
      objectives: [
        "Identify circles, squares, triangles, and rectangles in art",
        "Find shapes in everyday objects and nature",
        "Use shapes to draw simple pictures",
      ],
      chunks: [
        {
          id: "pre-k-arts-101-l04-c1",
          title: "Basic Art Shapes",
          content:
            "Shapes are everywhere in art! A CIRCLE is round — like the sun, a ball, or a cookie. A SQUARE has four equal sides — like a window or a cracker. A TRIANGLE has three sides — like a slice of pizza or a mountain peak. A RECTANGLE is like a stretched-out square — like a door or a book.",
        },
        {
          id: "pre-k-arts-101-l04-c2",
          title: "Shapes in Nature and Buildings",
          content:
            "Look around and find shapes! Windows are rectangles. Wheels are circles. Rooftops can be triangles. The moon is a circle. Flowers have round petals. Artists use shapes to build everything they draw and paint!",
        },
        {
          id: "pre-k-arts-101-l04-c3",
          title: "Drawing with Shapes",
          content:
            "You can draw anything using shapes! A house = a square body with a triangle roof. A car = a rectangle body with circle wheels. A face = a big circle with smaller circle eyes and a curved smile. Try drawing a house or a car using only shapes!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-arts-101-l04-fc1",
          front: "How many sides does a triangle have?",
          back: "Three sides",
        },
        {
          id: "pre-k-arts-101-l04-fc2",
          front: "What shape is perfectly round?",
          back: "A circle",
        },
        {
          id: "pre-k-arts-101-l04-fc3",
          front: "How can you draw a house with shapes?",
          back: "A square for the body and a triangle for the roof",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L05  Colors & Shapes Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l05",
      title: "Colors & Shapes Checkpoint",
      type: "quiz",
      duration: 8,
      questions: [
        {
          id: "pre-k-arts-101-l05-q1",
          text: "Which color do you get when you mix red and yellow?",
          options: [
            { id: "a", text: "Orange" },
            { id: "b", text: "Green" },
            { id: "c", text: "Purple" },
            { id: "d", text: "Brown" },
          ],
          correctOptionId: "a",
          explanation:
            "Red + Yellow = Orange! Think of a sunset — it has lots of orange because the red and yellow light mix together.",
        },
        {
          id: "pre-k-arts-101-l05-q2",
          text: "Which of these is a primary color?",
          options: [
            { id: "a", text: "Green" },
            { id: "b", text: "Orange" },
            { id: "c", text: "Blue" },
            { id: "d", text: "Purple" },
          ],
          correctOptionId: "c",
          explanation:
            "Blue is one of the three primary colors, along with red and yellow. Primary colors cannot be made by mixing.",
        },
        {
          id: "pre-k-arts-101-l05-q3",
          text: "How many sides does a square have?",
          options: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctOptionId: "b",
          explanation:
            "A square has 4 equal sides. All four sides are the same length!",
        },
        {
          id: "pre-k-arts-101-l05-q4",
          text: "What color do blue and yellow make?",
          options: [
            { id: "a", text: "Orange" },
            { id: "b", text: "Green" },
            { id: "c", text: "Purple" },
            { id: "d", text: "Pink" },
          ],
          correctOptionId: "b",
          explanation:
            "Blue + Yellow = Green! Think of grass and leaves — nature mixes blue sky and yellow sunlight to make green.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L06  Lines & Patterns  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l06",
      title: "Lines & Patterns",
      type: "video",
      duration: 8,
      objectives: [
        "Identify different types of lines: straight, curved, zigzag, wavy",
        "Recognize and continue simple patterns in art",
        "Draw different line types",
      ],
      chunks: [
        {
          id: "pre-k-arts-101-l06-c1",
          title: "Types of Lines",
          content:
            "Artists use many different lines! A STRAIGHT line goes in one direction without turning — like a ruler edge. A CURVED line bends gently — like a rainbow. A ZIGZAG line goes sharply up and down — like a lightning bolt. A WAVY line wiggles gently — like ocean waves.",
        },
        {
          id: "pre-k-arts-101-l06-c2",
          title: "Lines in Art and Nature",
          content:
            "Lines are hiding everywhere! Tree trunks have straight lines. Hills make curved lines. Mountain peaks are zigzags. Rivers are wavy lines. Artists look at nature and use these lines in their drawings and paintings.",
        },
        {
          id: "pre-k-arts-101-l06-c3",
          title: "Patterns with Lines and Colors",
          content:
            "A PATTERN is something that repeats over and over. Red-blue-red-blue is a color pattern. Straight-wavy-straight-wavy is a line pattern. Patterns are in art everywhere — on wallpaper, fabric, and jewelry. Can you make your own pattern?",
        },
      ],
      flashcards: [
        {
          id: "pre-k-arts-101-l06-fc1",
          front: "What line looks like a lightning bolt?",
          back: "A zigzag line — it goes sharply up and down",
        },
        {
          id: "pre-k-arts-101-l06-fc2",
          front: "What is a pattern?",
          back: "Something that repeats over and over, like red-blue-red-blue",
        },
        {
          id: "pre-k-arts-101-l06-fc3",
          front: "What line looks like ocean waves?",
          back: "A wavy line — it wiggles gently side to side",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L07  Texture Exploration  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l07",
      title: "Texture Exploration",
      type: "video",
      duration: 8,
      objectives: [
        "Understand what texture is and how artists use it",
        "Describe textures: smooth, rough, soft, bumpy, fuzzy",
        "Learn about collage as a texture art form",
      ],
      chunks: [
        {
          id: "pre-k-arts-101-l07-c1",
          title: "What Is Texture?",
          content:
            "Texture is how something FEELS when you touch it. Smooth like glass. Rough like sandpaper. Soft like a kitten. Bumpy like a rock. Fuzzy like a peach. Artists think about texture when they make art — some art you can even touch!",
        },
        {
          id: "pre-k-arts-101-l07-c2",
          title: "Textures Around You",
          content:
            "Let's feel textures! Touch your shirt — is it smooth or rough? Feel a table — smooth! Touch tree bark — rough! A stuffed animal — soft and fuzzy! A cracker — bumpy! Artists can draw rough textures with lots of tiny lines, or smooth textures with gentle curves.",
        },
        {
          id: "pre-k-arts-101-l07-c3",
          title: "Collage and Texture Art",
          content:
            "A COLLAGE is art made by gluing different materials together. You can use smooth paper, rough sandpaper, soft cotton balls, and bumpy fabric. Each material adds a different texture to your artwork. Try making a texture collage at home with things you find around the house!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-arts-101-l07-fc1",
          front: "What is texture?",
          back: "How something feels when you touch it — smooth, rough, soft, or bumpy",
        },
        {
          id: "pre-k-arts-101-l07-fc2",
          front: "What is a collage?",
          back: "Art made by gluing different materials like paper, fabric, and cotton together",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L08  Music & Rhythm  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l08",
      title: "Music & Rhythm",
      type: "video",
      duration: 8,
      objectives: [
        "Understand what rhythm is in music",
        "Clap along to a steady beat",
        "Identify loud vs. soft and fast vs. slow",
      ],
      chunks: [
        {
          id: "pre-k-arts-101-l08-c1",
          title: "What Is Rhythm?",
          content:
            "Rhythm is a PATTERN of sounds! Clap-clap-pause, clap-clap-pause — that is a rhythm. Your heartbeat has a rhythm — thump, thump, thump. Music has rhythm too — it is what makes you want to dance and move!",
        },
        {
          id: "pre-k-arts-101-l08-c2",
          title: "Loud and Soft, Fast and Slow",
          content:
            "Music can be LOUD like a marching band or SOFT like a lullaby. It can be FAST like running music or SLOW like a gentle song. Try clapping fast, then slow. Try stomping loud, then tapping soft. You are making music!",
        },
        {
          id: "pre-k-arts-101-l08-c3",
          title: "Make Your Own Music",
          content:
            "You do not need fancy instruments! Tap a table like a drum. Shake a container of rice like a maraca. Clap your hands, stomp your feet, snap your fingers! Everything around you can make music. Try playing along to your favorite song!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-arts-101-l08-fc1",
          front: "What is rhythm?",
          back: "A pattern of sounds — like clap-clap-pause",
        },
        {
          id: "pre-k-arts-101-l08-fc2",
          front: "Can you make music without instruments?",
          back: "Yes! Clap, stomp, tap, and snap to make music with your body",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L09  Texture & Music Activity  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l09",
      title: "Texture & Music Activity",
      type: "interactive",
      duration: 10,
      objectives: [
        "Sort textures by feel",
        "Match music vocabulary to meanings",
      ],
      interactiveActivities: [
        {
          id: "pre-k-arts-101-l09-ia1",
          type: "sorting_buckets",
          title: "Sort by Texture",
          description:
            "Sort objects into the Smooth bucket or the Rough bucket based on how they feel.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "b1", label: "Smooth" },
              { id: "b2", label: "Rough" },
            ],
            items: [
              { id: "i1", label: "Glass window", correctBucketId: "b1" },
              { id: "i2", label: "Sandpaper", correctBucketId: "b2" },
              { id: "i3", label: "Silk ribbon", correctBucketId: "b1" },
              { id: "i4", label: "Tree bark", correctBucketId: "b2" },
              { id: "i5", label: "Marble floor", correctBucketId: "b1" },
              { id: "i6", label: "Gravel road", correctBucketId: "b2" },
            ],
          },
        },
        {
          id: "pre-k-arts-101-l09-ia2",
          type: "matching_pairs",
          title: "Music Word Match",
          description:
            "Match each music word to its meaning.",
          estimatedMinutes: 4,
          difficultyLevel: "easy",
          data: {
            pairs: [
              { id: "p1", left: "Rhythm", right: "A pattern of sounds" },
              { id: "p2", left: "Loud", right: "A big, strong sound" },
              { id: "p3", left: "Soft", right: "A quiet, gentle sound" },
              { id: "p4", left: "Fast", right: "A quick, speedy tempo" },
            ],
          },
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L10  Creative Arts Celebration Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-arts-101-l10",
      title: "Creative Arts Celebration Quiz",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-arts-101-l10-q1",
          text: "What color do red and blue make?",
          options: [
            { id: "a", text: "Orange" },
            { id: "b", text: "Green" },
            { id: "c", text: "Purple" },
            { id: "d", text: "Yellow" },
          ],
          correctOptionId: "c",
          explanation:
            "Red + Blue = Purple! Think of grapes — they get their purple color from red and blue mixed together.",
        },
        {
          id: "pre-k-arts-101-l10-q2",
          text: "What is texture?",
          options: [
            { id: "a", text: "A color" },
            { id: "b", text: "How something feels" },
            { id: "c", text: "A shape" },
            { id: "d", text: "A sound" },
          ],
          correctOptionId: "b",
          explanation:
            "Texture is how something feels when you touch it — smooth, rough, soft, or bumpy!",
        },
        {
          id: "pre-k-arts-101-l10-q3",
          text: "What is a rhythm?",
          options: [
            { id: "a", text: "A color" },
            { id: "b", text: "A shape" },
            { id: "c", text: "A pattern of sounds" },
            { id: "d", text: "A type of paint" },
          ],
          correctOptionId: "c",
          explanation:
            "Rhythm is a pattern of sounds like clap-clap-pause! It is what makes you want to dance.",
        },
        {
          id: "pre-k-arts-101-l10-q4",
          text: "Which line looks like a lightning bolt?",
          options: [
            { id: "a", text: "Straight" },
            { id: "b", text: "Curved" },
            { id: "c", text: "Zigzag" },
            { id: "d", text: "Wavy" },
          ],
          correctOptionId: "c",
          explanation:
            "A zigzag line goes sharply up and down, just like a lightning bolt!",
        },
        {
          id: "pre-k-arts-101-l10-q5",
          text: "What kind of art is made by gluing materials together?",
          options: [
            { id: "a", text: "Painting" },
            { id: "b", text: "Drawing" },
            { id: "c", text: "Collage" },
            { id: "d", text: "Sculpture" },
          ],
          correctOptionId: "c",
          explanation:
            "A collage is art made by gluing different materials together — paper, fabric, cotton, and more!",
        },
        {
          id: "pre-k-arts-101-l10-q6",
          text: "Which of these is NOT a primary color?",
          options: [
            { id: "a", text: "Red" },
            { id: "b", text: "Green" },
            { id: "c", text: "Blue" },
            { id: "d", text: "Yellow" },
          ],
          correctOptionId: "b",
          explanation:
            "Green is a SECONDARY color — you make it by mixing blue and yellow. The three primary colors are red, blue, and yellow.",
        },
      ],
    },
  ],
};
