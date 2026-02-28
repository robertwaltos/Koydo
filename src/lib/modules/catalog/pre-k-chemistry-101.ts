import type { LearningModule } from "@/lib/modules/types";

export const PreKChemistry101Module: LearningModule = {
  id: "pre-k-chemistry-101",
  title: "Pre-K Kitchen Science Lab!",
  description:
    "Explore the amazing world of matter and mixtures right in your kitchen! Children ages 3-5 discover solids, liquids, and gases, learn how mixing creates new things, watch ice melt and water boil, and find out why oil and water refuse to be friends.",
  subject: "Chemistry",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "4.0.0",
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Identify three states of matter: solid, liquid, and gas",
    "Give examples of everyday solids, liquids, and gases",
    "Describe what happens when ice melts and water boils",
    "Explain that mixing two things can create something new",
    "Predict whether two liquids will mix or stay separate",
    "Describe a simple chemical reaction like baking soda and vinegar",
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Solids: Hard, Soft, and Squishy  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l01",
      title: "Solids: Things You Can Hold!",
      type: "video",
      duration: 8,
      objectives: [
        "Define a solid as something that keeps its shape",
        "Name five everyday solids",
        "Explain that solids can be hard, soft, or squishy",
      ],
      chunks: [
        {
          id: "prek-chem-l01-c1",
          title: "What Is a Solid?",
          content:
            "A solid is anything that keeps its shape when you put it down! 🧱 Pick up a block — it stays a block. Put a teddy bear on the table — it stays a teddy bear. Solids do not flow or spread out. You can hold them, stack them, and even build with them!",
        },
        {
          id: "prek-chem-l01-c2",
          title: "Hard Solids vs. Soft Solids",
          content:
            "Not all solids are hard like rocks! 🪨 A pillow is solid but super soft and squishy. A rubber ball is solid but bouncy. A cookie is solid but crumbly — snap! Solids come in every feel: hard, soft, smooth, rough, squishy, and crunchy.",
        },
        {
          id: "prek-chem-l01-c3",
          title: "Solid Scavenger Hunt",
          content:
            "Look around you right now! Your chair — solid! Your shoe — solid! A crayon — solid! Your tooth — solid (and very strong)! 🦷 Even an ice cube is a solid — a cold, slippery solid that melts into water if you hold it too long. But we will learn about melting later!",
        },
      ],
      flashcards: [
        { id: "prek-chem-l01-f1", front: "What is a solid?", back: "Something that keeps its shape! You can hold it and it does not flow away. 🧱" },
        { id: "prek-chem-l01-f2", front: "Are all solids hard?", back: "No! Solids can be hard (rock), soft (pillow), squishy (rubber ball), or crumbly (cookie)." },
        { id: "prek-chem-l01-f3", front: "Name 3 solids", back: "Block, shoe, crayon, ice cube, teddy bear — anything that keeps its shape!" },
      ],
      questions: [
        {
          id: "prek-chem-l01-q1",
          text: "Which one is a solid?",
          options: [
            { id: "a", text: "A wooden block" },
            { id: "b", text: "Orange juice" },
            { id: "c", text: "Steam" },
            { id: "d", text: "Wind" },
          ],
          correctOptionId: "a",
          explanation: "A block keeps its shape — it is a solid!",
        },
        {
          id: "prek-chem-l01-q2",
          text: "A pillow is...",
          options: [
            { id: "a", text: "A liquid because it is soft" },
            { id: "b", text: "A solid because it keeps its shape" },
            { id: "c", text: "A gas because it is fluffy" },
            { id: "d", text: "Not matter" },
          ],
          correctOptionId: "b",
          explanation: "Even soft, squishy things are solids if they keep their shape!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L02  Liquids: Splish, Splash, Flow!  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l02",
      title: "Liquids: Things That Flow and Splash!",
      type: "video",
      duration: 8,
      objectives: [
        "Define a liquid as something that flows and takes the shape of its container",
        "Name five everyday liquids",
        "Explain why you cannot stack liquids like blocks",
      ],
      chunks: [
        {
          id: "prek-chem-l02-c1",
          title: "What Is a Liquid?",
          content:
            "A liquid is anything that FLOWS! 💧 Pour water into a cup — it takes the cup shape. Pour it into a bowl — it takes the bowl shape. Liquids cannot keep their own shape like solids can. They always spread out to fill whatever holds them.",
        },
        {
          id: "prek-chem-l02-c2",
          title: "Thick and Thin Liquids",
          content:
            "Not all liquids flow the same! Water is thin and flows super fast — splash! 🌊 Honey is thick and flows sloooowly — glug, glug, glug. 🍯 Ketchup? Even thicker! You have to shake the bottle to make it come out. But they are ALL liquids because they all flow and take the shape of their container.",
        },
        {
          id: "prek-chem-l02-c3",
          title: "Liquid Lab",
          content:
            "Liquids are everywhere in your kitchen! Milk in the fridge, soap in the dispenser, juice in a bottle, oil in a pan. 🥛 Try pouring water from one cup to a different-shaped cup — watch it change shape instantly! That is what makes liquids special.",
        },
      ],
      flashcards: [
        { id: "prek-chem-l02-f1", front: "What is a liquid?", back: "Something that flows and takes the shape of its container! Like water, milk, or juice. 💧" },
        { id: "prek-chem-l02-f2", front: "Why can't you stack liquids?", back: "Liquids flow! They have no shape of their own — they spread out and take the container's shape." },
        { id: "prek-chem-l02-f3", front: "What is a thick liquid?", back: "Honey, ketchup, or syrup — liquids that flow very slowly! 🍯" },
      ],
      questions: [
        {
          id: "prek-chem-l02-q1",
          text: "Which one is a liquid?",
          options: [
            { id: "a", text: "A rock" },
            { id: "b", text: "Milk" },
            { id: "c", text: "A spoon" },
            { id: "d", text: "A chair" },
          ],
          correctOptionId: "b",
          explanation: "Milk flows and takes the shape of its glass — it is a liquid!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L03  Gases: Invisible but Real!  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l03",
      title: "Gases: The Invisible Stuff All Around You!",
      type: "video",
      duration: 8,
      objectives: [
        "Define a gas as something that spreads out to fill all the space it can",
        "Explain that air is a gas you cannot see but can feel",
        "Name three examples of gases",
      ],
      chunks: [
        {
          id: "prek-chem-l03-c1",
          title: "What Is a Gas?",
          content:
            "A gas is matter you usually cannot see! 💨 Gases spread out to fill ALL the space around them. Open a jar of cookies — you can smell them from across the room! That is because tiny gas particles carrying the cookie smell zoomed through the air and into your nose.",
        },
        {
          id: "prek-chem-l03-c2",
          title: "Air Is a Gas!",
          content:
            "The most important gas is the air you breathe right now! 🌬️ You cannot see air, but you can FEEL it when the wind blows. You can HEAR it when you blow up a balloon. And you can SEE what it does — it makes kites fly, flags wave, and bubbles float! Air is invisible but very, very real.",
        },
        {
          id: "prek-chem-l03-c3",
          title: "Other Gases",
          content:
            "Steam rising from hot soup? That is water turning into a gas! ♨️ The bubbles in your soda? That is a gas called carbon dioxide, tickling your tongue! Helium makes balloons float up because it is lighter than air. 🎈 Gases are all around us, even though we usually cannot see them.",
        },
      ],
      flashcards: [
        { id: "prek-chem-l03-f1", front: "What is a gas?", back: "Matter that spreads out to fill all the space it can. Usually invisible! 💨" },
        { id: "prek-chem-l03-f2", front: "Can you see air?", back: "No, but you can feel it (wind), hear it (blow), and see what it does (flags wave)! 🌬️" },
        { id: "prek-chem-l03-f3", front: "What gas makes balloons float?", back: "Helium! It is lighter than air, so helium balloons rise up. 🎈" },
      ],
      questions: [
        {
          id: "prek-chem-l03-q1",
          text: "Air is a...",
          options: [
            { id: "a", text: "Solid" },
            { id: "b", text: "Liquid" },
            { id: "c", text: "Gas" },
            { id: "d", text: "Snack" },
          ],
          correctOptionId: "c",
          explanation: "Air is a gas — invisible but you can feel the wind blow!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L04  Matter Sorting  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l04",
      title: "Sort It Out: Solid, Liquid, or Gas?",
      type: "interactive",
      duration: 10,
      objectives: [
        "Classify everyday items as solid, liquid, or gas",
        "Explain your reasoning for each classification",
      ],
      interactiveActivities: [
        {
          id: "prek-chem-l04-ia1",
          type: "sorting_buckets",
          title: "Solid, Liquid, or Gas?",
          description: "Sort each item into the right group!",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "solid", label: "Solid (keeps its shape)" },
              { id: "liquid", label: "Liquid (flows)" },
              { id: "gas", label: "Gas (invisible, spreads out)" },
            ],
            items: [
              { id: "i1", label: "Ice cube", correctBucketId: "solid" },
              { id: "i2", label: "Orange juice", correctBucketId: "liquid" },
              { id: "i3", label: "Air", correctBucketId: "gas" },
              { id: "i4", label: "Wooden spoon", correctBucketId: "solid" },
              { id: "i5", label: "Honey", correctBucketId: "liquid" },
              { id: "i6", label: "Steam from soup", correctBucketId: "gas" },
            ],
          },
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L05  Checkpoint Quiz 1  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l05",
      title: "Checkpoint: States of Matter",
      type: "quiz",
      duration: 8,
      questions: [
        {
          id: "prek-chem-l05-q1",
          text: "A solid is something that...",
          options: [
            { id: "a", text: "Flows like water" },
            { id: "b", text: "Keeps its shape" },
            { id: "c", text: "Is always invisible" },
            { id: "d", text: "Only exists in space" },
          ],
          correctOptionId: "b",
          explanation: "Solids keep their shape — you can hold them and they stay the same!",
        },
        {
          id: "prek-chem-l05-q2",
          text: "Which is a liquid?",
          options: [
            { id: "a", text: "A brick" },
            { id: "b", text: "Maple syrup" },
            { id: "c", text: "A balloon full of air" },
            { id: "d", text: "A pencil" },
          ],
          correctOptionId: "b",
          explanation: "Maple syrup flows and takes the shape of its container — it is a liquid!",
        },
        {
          id: "prek-chem-l05-q3",
          text: "You cannot see air, but you can...",
          options: [
            { id: "a", text: "Eat it with a fork" },
            { id: "b", text: "Feel it when the wind blows" },
            { id: "c", text: "Stack it like blocks" },
            { id: "d", text: "Paint it green" },
          ],
          correctOptionId: "b",
          explanation: "Air is an invisible gas, but you can feel the wind!",
        },
        {
          id: "prek-chem-l05-q4",
          text: "Helium makes balloons...",
          options: [
            { id: "a", text: "Sink to the ground" },
            { id: "b", text: "Turn into water" },
            { id: "c", text: "Float up into the air" },
            { id: "d", text: "Disappear" },
          ],
          correctOptionId: "c",
          explanation: "Helium is lighter than air, so it makes balloons float up! 🎈",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L06  Melting and Freezing  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l06",
      title: "Melting and Freezing: Ice to Water to Ice!",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that heat makes solids melt into liquids",
        "Explain that cold makes liquids freeze into solids",
        "Describe what happens when water boils",
      ],
      chunks: [
        {
          id: "prek-chem-l06-c1",
          title: "Ice Melts!",
          content:
            "Hold an ice cube in your warm hand — drip, drip, drip! 🧊 The heat from your hand makes the ice change from a solid into a liquid. That is called MELTING! Ice cream melts in the sun, snow melts in spring, and butter melts in a hot pan. Heat makes solids turn into liquids.",
        },
        {
          id: "prek-chem-l06-c2",
          title: "Water Freezes!",
          content:
            "Put water in the freezer overnight — by morning, it is solid ice! ❄️ That is called FREEZING. Cold takes away heat, and the liquid water becomes a solid. Ponds freeze in winter, popsicles freeze in the freezer, and puddles freeze on cold mornings. Cold makes liquids turn into solids!",
        },
        {
          id: "prek-chem-l06-c3",
          title: "Boiling: Liquid to Gas!",
          content:
            "Heat water on the stove and bubbles start to appear — that is BOILING! 🫧 The water is getting so hot it turns into steam, which is a gas. The steam rises up and disappears into the air. Water can be all three: ice (solid), water (liquid), and steam (gas). Same stuff, three different forms!",
        },
      ],
      flashcards: [
        { id: "prek-chem-l06-f1", front: "What is melting?", back: "When heat turns a solid into a liquid! Like ice melting into water. 🧊→💧" },
        { id: "prek-chem-l06-f2", front: "What is freezing?", back: "When cold turns a liquid into a solid! Like water freezing into ice. 💧→🧊" },
        { id: "prek-chem-l06-f3", front: "What is boiling?", back: "When heat turns a liquid into a gas! Like water boiling into steam. 💧→♨️" },
        { id: "prek-chem-l06-f4", front: "Can water be all three states?", back: "Yes! Ice (solid), water (liquid), and steam (gas) — same stuff, three forms!" },
      ],
      questions: [
        {
          id: "prek-chem-l06-q1",
          text: "What happens when ice gets warm?",
          options: [
            { id: "a", text: "It gets harder" },
            { id: "b", text: "It melts into water" },
            { id: "c", text: "It turns into a rock" },
            { id: "d", text: "Nothing happens" },
          ],
          correctOptionId: "b",
          explanation: "Heat makes ice melt — solid turns into liquid!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L07  Mixing Magic  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l07",
      title: "Mixing Magic: What Happens When You Combine Things?",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that mixing two things can create something new",
        "Predict whether two colors will mix",
        "Describe what happens when oil and water are combined",
      ],
      chunks: [
        {
          id: "prek-chem-l07-c1",
          title: "Color Mixing Magic",
          content:
            "Take red paint and yellow paint — mix them together and you get ORANGE! 🎨 That is brand new! Red and blue make purple. Yellow and blue make green. When you mix things, you can create something that was not there before. That is chemistry in action!",
        },
        {
          id: "prek-chem-l07-c2",
          title: "Not Everything Mixes!",
          content:
            "Pour oil into water and shake it up. Does it mix? Nope! 🫗 The oil floats right back to the top. Oil and water are NOT friends — they refuse to mix! That is because oil molecules and water molecules are different shapes and do not want to hold hands. Scientists call this being 'immiscible.'",
        },
        {
          id: "prek-chem-l07-c3",
          title: "Kitchen Mixing Experiments",
          content:
            "You mix things every day! Chocolate syrup + milk = chocolate milk 🥛🍫. Flour + water = gooey dough. Sugar + water = sweet lemonade 🍋. Some mixes can be un-mixed (pick out the raisins from trail mix!) but some cannot (you cannot un-mix chocolate milk!). That is the magic of mixing!",
        },
      ],
      flashcards: [
        { id: "prek-chem-l07-f1", front: "What happens when you mix red and yellow paint?", back: "You get ORANGE! Mixing creates something new. 🎨" },
        { id: "prek-chem-l07-f2", front: "Do oil and water mix?", back: "No! Oil floats on top of water — they refuse to mix. 🫗" },
        { id: "prek-chem-l07-f3", front: "Can you un-mix chocolate milk?", back: "No! Once mixed, the chocolate and milk blend together and cannot be separated easily." },
      ],
      questions: [
        {
          id: "prek-chem-l07-q1",
          text: "Red paint + blue paint = ...",
          options: [
            { id: "a", text: "Green" },
            { id: "b", text: "Purple" },
            { id: "c", text: "Yellow" },
            { id: "d", text: "White" },
          ],
          correctOptionId: "b",
          explanation: "Red and blue make purple! Try it with paints or crayons.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L08  Mixing Lab  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l08",
      title: "Mix It Up Lab!",
      type: "interactive",
      duration: 10,
      objectives: [
        "Match color combinations to their results",
        "Predict whether things will mix or stay separate",
      ],
      interactiveActivities: [
        {
          id: "prek-chem-l08-ia1",
          type: "matching_pairs",
          title: "Color Mixing Match!",
          description: "Connect each color pair to what they make.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Red + Yellow" },
              { id: "l2", label: "Red + Blue" },
              { id: "l3", label: "Yellow + Blue" },
              { id: "l4", label: "Red + White" },
            ],
            right: [
              { id: "r1", label: "Orange" },
              { id: "r2", label: "Purple" },
              { id: "r3", label: "Green" },
              { id: "r4", label: "Pink" },
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
       L09  Fizzy Reactions  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l09",
      title: "Fizz, Pop, Boom! Simple Reactions",
      type: "video",
      duration: 8,
      objectives: [
        "Describe what happens when baking soda meets vinegar",
        "Explain that a chemical reaction creates something new",
        "State that some reactions cannot be reversed",
      ],
      chunks: [
        {
          id: "prek-chem-l09-c1",
          title: "The Volcano Experiment!",
          content:
            "Put baking soda in a cup. Pour vinegar on top. FIZZZZ! 🌋 A bubbly foam explodes upward like a mini volcano! Those bubbles are carbon dioxide gas being born right before your eyes. The baking soda and vinegar did not just mix — they REACTED and created something totally new!",
        },
        {
          id: "prek-chem-l09-c2",
          title: "What Is a Reaction?",
          content:
            "A chemical reaction is when two or more things combine and create something BRAND NEW that was not there before! 🧪 Mixing is like putting Legos in a bag — you can take them out again. A reaction is like gluing Legos together into a spaceship — you made something new that is hard to take apart!",
        },
        {
          id: "prek-chem-l09-c3",
          title: "Reactions in Your Kitchen",
          content:
            "Baking a cake is a chemical reaction! Mix flour, eggs, sugar, and baking powder — then heat it up. Out comes a fluffy cake that looks and tastes nothing like the ingredients! 🎂 You cannot un-bake a cake back into eggs and flour. That is how you know a reaction happened — the change is permanent!",
        },
      ],
      flashcards: [
        { id: "prek-chem-l09-f1", front: "What happens with baking soda + vinegar?", back: "FIZZ! They react and create carbon dioxide gas bubbles — like a mini volcano! 🌋" },
        { id: "prek-chem-l09-f2", front: "What is a chemical reaction?", back: "When things combine and create something totally new! Like baking a cake from raw ingredients. 🧪" },
        { id: "prek-chem-l09-f3", front: "Can you un-bake a cake?", back: "No! A reaction creates permanent change — the new thing is different from what you started with." },
      ],
      questions: [
        {
          id: "prek-chem-l09-q1",
          text: "Baking soda + vinegar makes...",
          options: [
            { id: "a", text: "Nothing happens" },
            { id: "b", text: "Fizzy bubbles of gas!" },
            { id: "c", text: "A solid brick" },
            { id: "d", text: "A rainbow" },
          ],
          correctOptionId: "b",
          explanation: "They react and create carbon dioxide gas — fizzy bubbles everywhere!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L10  Celebration Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "prek-chem-l10",
      title: "Celebration Quiz: Kitchen Scientist!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "prek-chem-l10-q1",
          text: "A wooden block is a...",
          options: [
            { id: "a", text: "Liquid" },
            { id: "b", text: "Gas" },
            { id: "c", text: "Solid" },
            { id: "d", text: "Rainbow" },
          ],
          correctOptionId: "c",
          explanation: "A block keeps its shape — it is a solid!",
        },
        {
          id: "prek-chem-l10-q2",
          text: "Orange juice is a...",
          options: [
            { id: "a", text: "Solid" },
            { id: "b", text: "Liquid" },
            { id: "c", text: "Gas" },
            { id: "d", text: "Solid AND gas" },
          ],
          correctOptionId: "b",
          explanation: "OJ flows and takes the shape of its glass — it is a liquid!",
        },
        {
          id: "prek-chem-l10-q3",
          text: "When ice gets warm, it...",
          options: [
            { id: "a", text: "Gets bigger" },
            { id: "b", text: "Melts into water" },
            { id: "c", text: "Turns into a rock" },
            { id: "d", text: "Disappears forever" },
          ],
          correctOptionId: "b",
          explanation: "Heat makes ice melt — it changes from solid to liquid!",
        },
        {
          id: "prek-chem-l10-q4",
          text: "Yellow + blue paint makes...",
          options: [
            { id: "a", text: "Red" },
            { id: "b", text: "Green" },
            { id: "c", text: "Orange" },
            { id: "d", text: "Black" },
          ],
          correctOptionId: "b",
          explanation: "Yellow and blue make green!",
        },
        {
          id: "prek-chem-l10-q5",
          text: "Oil and water...",
          options: [
            { id: "a", text: "Mix perfectly" },
            { id: "b", text: "Do NOT mix — oil floats on top" },
            { id: "c", text: "Both disappear" },
            { id: "d", text: "Turn into ice" },
          ],
          correctOptionId: "b",
          explanation: "Oil and water refuse to mix — the oil always floats to the top!",
        },
        {
          id: "prek-chem-l10-q6",
          text: "Baking soda + vinegar is an example of a...",
          options: [
            { id: "a", text: "Nap" },
            { id: "b", text: "Chemical reaction" },
            { id: "c", text: "Solid" },
            { id: "d", text: "Freezing" },
          ],
          correctOptionId: "b",
          explanation: "They react and create something new — fizzy carbon dioxide gas!",
        },
      ],
    },
  ],
};
