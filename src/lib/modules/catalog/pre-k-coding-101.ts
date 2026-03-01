import type { LearningModule } from "@/lib/modules/types";

export const PreKCoding101Module: LearningModule = {
  id: "pre-k-coding-101",
  title: "Pre-K Coding Adventures",
  description:
    "A playful introduction to coding concepts for children ages 3-5. Learn about step-by-step instructions, patterns, loops, and simple if-then choices — all through stories about friendly robots, silly animals, and everyday adventures.",
  subject: "Coding",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Follow step-by-step instructions in the correct order",
    "Recognize and continue simple repeating patterns",
    "Understand that a loop means doing something again and again",
    "Use if-then thinking to make simple choices",
    "Break a big task into smaller steps (decomposition)",
    "Find and fix a mistake in a set of instructions (debugging)",
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Step-By-Step Instructions  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l01",
      title: "Step-By-Step: Tell a Robot What to Do",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that computers follow instructions one step at a time",
        "Put three instructions in the correct order",
        "Describe what happens when steps are out of order",
      ],
      chunks: [
        {
          id: "prek-coding-l01-c1",
          title: "Meet Robo the Friendly Robot",
          content:
            "Robo is a little blue robot who loves to help, but Robo can only do exactly what you tell it — one step at a time! 🤖 If you say 'pick up the cup' before 'walk to the table,' Robo will try to grab thin air and get very confused! Computers work the same way: they follow instructions in order, from first to last.",
        },
        {
          id: "prek-coding-l01-c2",
          title: "Making a Peanut Butter Sandwich",
          content:
            "Let's give Robo instructions to make a sandwich! Step 1: Get two slices of bread 🍞. Step 2: Spread peanut butter on one slice 🥜. Step 3: Put the slices together. If we skip Step 1 and go straight to spreading, Robo will put peanut butter all over the table — what a mess! The order of steps matters.",
        },
        {
          id: "prek-coding-l01-c3",
          title: "You Are Already a Coder!",
          content:
            "Every time you get dressed in the morning, you follow steps: underwear first, then pants, then shoes. You would never put shoes on before pants! 👟 That means you already know how to think like a coder — you put instructions in the right order every single day.",
        },
      ],
      flashcards: [
        { id: "prek-coding-l01-f1", front: "What is an instruction?", back: "A step that tells the computer (or robot) exactly what to do! 🤖" },
        { id: "prek-coding-l01-f2", front: "Why does order matter?", back: "If steps are out of order, the result will be wrong — like shoes before pants!" },
        { id: "prek-coding-l01-f3", front: "What is a sequence?", back: "A set of steps in the correct order, from first to last." },
      ],
      questions: [
        {
          id: "prek-coding-l01-q1",
          text: "Which should come FIRST when making a sandwich?",
          options: [
            { id: "a", text: "Get the bread" },
            { id: "b", text: "Eat the sandwich" },
            { id: "c", text: "Put the slices together" },
            { id: "d", text: "Spread peanut butter" },
          ],
          correctOptionId: "a",
          explanation: "You need the bread first before you can spread or eat anything!",
        },
        {
          id: "prek-coding-l01-q2",
          text: "What happens if Robo does steps out of order?",
          options: [
            { id: "a", text: "Everything works perfectly" },
            { id: "b", text: "Robo gets confused and makes a mess" },
            { id: "c", text: "Robo skips all the steps" },
            { id: "d", text: "The steps disappear" },
          ],
          correctOptionId: "b",
          explanation: "Steps out of order lead to silly mistakes — like putting peanut butter on the table!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L02  Patterns Everywhere  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l02",
      title: "Patterns Everywhere!",
      type: "video",
      duration: 8,
      objectives: [
        "Spot a repeating pattern in colors, shapes, or sounds",
        "Continue a simple AB pattern",
        "Explain that coders use patterns to save time",
      ],
      chunks: [
        {
          id: "prek-coding-l02-c1",
          title: "What Is a Pattern?",
          content:
            "A pattern is something that repeats over and over in the same way! 🔴🔵🔴🔵 — red, blue, red, blue. Your striped shirt has a pattern. The days of the week repeat in a pattern. Clapping hands then stomping feet, clap-stomp-clap-stomp — that is a pattern too! 👏🦶",
        },
        {
          id: "prek-coding-l02-c2",
          title: "Patterns Help Coders",
          content:
            "Coders love patterns because once you know the rule, you can predict what comes next! If the pattern is circle-star-circle-star, what comes after the second star? Circle! ⭐⚪⭐⚪ Computers are super good at repeating patterns — they never get tired or bored.",
        },
        {
          id: "prek-coding-l02-c3",
          title: "Pattern Detective Game",
          content:
            "Let's be pattern detectives! Look at these beads: 🟡🟢🟡🟢🟡... What bead comes next? Green! 🟢 Now a tricky one: 🔺🔺🔵🔺🔺🔵... What comes next? Triangle triangle! 🔺🔺 You are getting so good at this!",
        },
      ],
      flashcards: [
        { id: "prek-coding-l02-f1", front: "What is a pattern?", back: "Something that repeats over and over in the same way! 🔴🔵🔴🔵" },
        { id: "prek-coding-l02-f2", front: "Why do coders like patterns?", back: "Patterns let you predict what comes next — computers repeat patterns perfectly!" },
        { id: "prek-coding-l02-f3", front: "AB pattern", back: "A pattern with two things that take turns: red-blue-red-blue or clap-stomp-clap-stomp." },
      ],
      questions: [
        {
          id: "prek-coding-l02-q1",
          text: "🔴🔵🔴🔵🔴 — what comes next?",
          options: [
            { id: "a", text: "🔴 Red" },
            { id: "b", text: "🔵 Blue" },
            { id: "c", text: "🟢 Green" },
            { id: "d", text: "🟡 Yellow" },
          ],
          correctOptionId: "b",
          explanation: "The pattern is red-blue-red-blue, so blue comes after red!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L03  Pattern Practice  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l03",
      title: "Pattern Play: Build Your Own Patterns",
      type: "interactive",
      duration: 10,
      objectives: [
        "Create an AB pattern using colored blocks",
        "Identify the missing piece in a pattern sequence",
      ],
      interactiveActivities: [
        {
          id: "prek-coding-l03-ia1",
          type: "sorting_buckets",
          title: "Finish the Pattern!",
          description: "Drag the right shape to complete each pattern.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "pattern1", label: "🔴🔵🔴🔵🔴 ?" },
              { id: "pattern2", label: "⭐🌙⭐🌙⭐ ?" },
              { id: "pattern3", label: "🐱🐶🐱🐶🐱 ?" },
            ],
            items: [
              { id: "i1", label: "🔵", correctBucketId: "pattern1" },
              { id: "i2", label: "🌙", correctBucketId: "pattern2" },
              { id: "i3", label: "🐶", correctBucketId: "pattern3" },
            ],
          },
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L04  Loops: Do It Again!  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l04",
      title: "Loops: Do It Again and Again!",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that a loop means repeating the same steps",
        "Give an example of a loop in everyday life",
        "Count how many times a loop repeats",
      ],
      chunks: [
        {
          id: "prek-coding-l04-c1",
          title: "What Is a Loop?",
          content:
            "A loop is when you do the same thing over and over! 🔄 Think about brushing your teeth: you move the brush up-down, up-down, up-down — that is a loop! You do not write 'move brush up, move brush down' a hundred times. You just say 'repeat up-down until teeth are clean.'",
        },
        {
          id: "prek-coding-l04-c2",
          title: "Robo's Loop Dance",
          content:
            "Robo wants to do a silly dance! 🕺 The dance steps are: spin, clap, jump. Instead of saying spin-clap-jump-spin-clap-jump-spin-clap-jump, we can tell Robo: 'repeat spin-clap-jump 3 times.' That is a loop! It saves us from writing the same thing again and again.",
        },
        {
          id: "prek-coding-l04-c3",
          title: "Loops in Your Day",
          content:
            "You use loops all the time! Bouncing a ball: bounce-catch, bounce-catch, bounce-catch 🏀. Singing a song chorus: la-la-la, la-la-la 🎵. Even walking is a loop: left foot, right foot, left foot, right foot. Loops make life (and coding!) much simpler.",
        },
      ],
      flashcards: [
        { id: "prek-coding-l04-f1", front: "What is a loop?", back: "Doing the same steps over and over again! Like bouncing a ball: bounce-catch, bounce-catch. 🔄" },
        { id: "prek-coding-l04-f2", front: "Why are loops helpful?", back: "Loops save time! Instead of writing the same thing 100 times, you say 'repeat' once." },
        { id: "prek-coding-l04-f3", front: "Name a loop in real life", back: "Brushing teeth (up-down-up-down), walking (left-right-left-right), or bouncing a ball!" },
      ],
      questions: [
        {
          id: "prek-coding-l04-q1",
          text: "Which is a loop?",
          options: [
            { id: "a", text: "Clap once and stop" },
            { id: "b", text: "Clap-stomp, clap-stomp, clap-stomp" },
            { id: "c", text: "Sit quietly" },
            { id: "d", text: "Draw one circle" },
          ],
          correctOptionId: "b",
          explanation: "Clap-stomp repeated three times is a loop — the same steps over and over!",
        },
        {
          id: "prek-coding-l04-q2",
          text: "How many times does Robo repeat 'spin-clap-jump' if we say 'repeat 3 times'?",
          options: [
            { id: "a", text: "1 time" },
            { id: "b", text: "2 times" },
            { id: "c", text: "3 times" },
            { id: "d", text: "10 times" },
          ],
          correctOptionId: "c",
          explanation: "Repeat 3 times means Robo does spin-clap-jump exactly 3 times!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L05  Checkpoint Quiz 1  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l05",
      title: "Checkpoint: Sequences, Patterns & Loops",
      type: "quiz",
      duration: 8,
      questions: [
        {
          id: "prek-coding-l05-q1",
          text: "You want to brush your teeth. What do you do FIRST?",
          options: [
            { id: "a", text: "Put toothpaste on the brush" },
            { id: "b", text: "Rinse your mouth" },
            { id: "c", text: "Smile at the mirror" },
            { id: "d", text: "Put the brush away" },
          ],
          correctOptionId: "a",
          explanation: "First put toothpaste on the brush, then you can start brushing!",
        },
        {
          id: "prek-coding-l05-q2",
          text: "⭐🌙⭐🌙⭐ — what comes next?",
          options: [
            { id: "a", text: "⭐ Star" },
            { id: "b", text: "🌙 Moon" },
            { id: "c", text: "☀️ Sun" },
            { id: "d", text: "🌈 Rainbow" },
          ],
          correctOptionId: "b",
          explanation: "The pattern alternates star-moon, so moon comes after the third star!",
        },
        {
          id: "prek-coding-l05-q3",
          text: "Walking is left-right-left-right. That is a...",
          options: [
            { id: "a", text: "Bug" },
            { id: "b", text: "Loop" },
            { id: "c", text: "Sandwich" },
            { id: "d", text: "Nap" },
          ],
          correctOptionId: "b",
          explanation: "Repeating the same steps (left-right) over and over is called a loop!",
        },
        {
          id: "prek-coding-l05-q4",
          text: "Why does the order of steps matter?",
          options: [
            { id: "a", text: "It doesn't matter at all" },
            { id: "b", text: "Wrong order makes a mess or doesn't work" },
            { id: "c", text: "Robots like random order" },
            { id: "d", text: "Steps always fix themselves" },
          ],
          correctOptionId: "b",
          explanation: "If steps are out of order, things go wrong — like shoes before pants!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L06  If-Then Choices  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l06",
      title: "If-Then: Making Smart Choices",
      type: "video",
      duration: 8,
      objectives: [
        "Use an if-then statement to describe a choice",
        "Give two everyday examples of if-then thinking",
        "Explain that computers make choices using if-then rules",
      ],
      chunks: [
        {
          id: "prek-coding-l06-c1",
          title: "What Is If-Then?",
          content:
            "If-then is how we make choices! 🤔 IF it is raining, THEN take an umbrella. IF you are hungry, THEN eat a snack. IF the light is red, THEN stop. You already use if-then thinking every day — you just did not know it had a coding name!",
        },
        {
          id: "prek-coding-l06-c2",
          title: "Robo's If-Then Rules",
          content:
            "We can give Robo if-then rules too! IF Robo sees a wall, THEN turn around. IF Robo hears clapping, THEN dance. 🤖💃 Without if-then rules, Robo would just keep walking into the wall forever — bonk, bonk, bonk!",
        },
        {
          id: "prek-coding-l06-c3",
          title: "If-Then-Else: Two Choices!",
          content:
            "Sometimes there are two paths! IF it is sunny, THEN wear a t-shirt, ELSE wear a jacket. ☀️🧥 The 'else' part is what happens when the 'if' is NOT true. IF you have homework, THEN do homework, ELSE go play! Computers use if-then-else all the time to pick the right thing to do.",
        },
      ],
      flashcards: [
        { id: "prek-coding-l06-f1", front: "What is an if-then rule?", back: "A rule that says: IF something is true, THEN do this action! Like: IF raining, THEN take umbrella. ☔" },
        { id: "prek-coding-l06-f2", front: "What does ELSE mean?", back: "ELSE is what happens when the IF is NOT true. IF sunny → t-shirt, ELSE → jacket!" },
        { id: "prek-coding-l06-f3", front: "Why do robots need if-then rules?", back: "Without if-then, robots can't make choices — they'd walk into walls forever! 🤖💥" },
      ],
      questions: [
        {
          id: "prek-coding-l06-q1",
          text: "IF it is raining, THEN you should...",
          options: [
            { id: "a", text: "Wear sunglasses" },
            { id: "b", text: "Take an umbrella" },
            { id: "c", text: "Eat ice cream" },
            { id: "d", text: "Go swimming" },
          ],
          correctOptionId: "b",
          explanation: "IF raining, THEN umbrella! That keeps you dry.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L07  If-Then Practice  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l07",
      title: "If-Then Game: Help Robo Choose!",
      type: "interactive",
      duration: 10,
      objectives: [
        "Match an if-then condition to the correct action",
        "Predict what Robo will do given a rule",
      ],
      interactiveActivities: [
        {
          id: "prek-coding-l07-ia1",
          type: "matching_pairs",
          title: "Match the If to the Then!",
          description: "Connect each IF to the right THEN action.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "IF it is cold" },
              { id: "l2", label: "IF you are sleepy" },
              { id: "l3", label: "IF the light is green" },
              { id: "l4", label: "IF Robo sees a cat" },
            ],
            right: [
              { id: "r1", label: "THEN wear a coat" },
              { id: "r2", label: "THEN go to bed" },
              { id: "r3", label: "THEN walk across" },
              { id: "r4", label: "THEN wave hello" },
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
       L08  Decomposition: Break It Down  (video)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l08",
      title: "Break It Down: Big Tasks into Tiny Steps",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that decomposition means breaking a big task into small steps",
        "Break a simple task into 3-4 steps",
        "Describe why small steps are easier than one giant step",
      ],
      chunks: [
        {
          id: "prek-coding-l08-c1",
          title: "The Big Scary Task",
          content:
            "Imagine someone says 'clean your whole room!' That sounds huge and scary! 😱 But what if we break it into tiny pieces? Step 1: Pick up toys. Step 2: Put books on the shelf. Step 3: Make the bed. Step 4: Done! Each little step is easy. That is called decomposition — a fancy word for breaking things into pieces!",
        },
        {
          id: "prek-coding-l08-c2",
          title: "How Coders Decompose",
          content:
            "Real coders do this too! Building a game sounds impossible — but broken into steps, it becomes: draw a character, make it move left-right, add a score counter, add sound effects. 🎮 Each tiny step is something you CAN do. Put them all together and — wow — you made a game!",
        },
        {
          id: "prek-coding-l08-c3",
          title: "Let's Decompose Getting Ready",
          content:
            "Let's practice! The big task is: 'get ready for school.' Break it down: 1) Wake up and stretch 🌅, 2) Brush teeth 🪥, 3) Get dressed 👕, 4) Eat breakfast 🥞, 5) Pack your bag 🎒. Five small steps instead of one confusing big one!",
        },
      ],
      flashcards: [
        { id: "prek-coding-l08-f1", front: "What is decomposition?", back: "Breaking a big task into smaller, easier steps! Like cleaning your room one toy at a time. 🧩" },
        { id: "prek-coding-l08-f2", front: "Why decompose?", back: "Small steps are easier to do and less scary than one giant task!" },
      ],
      questions: [
        {
          id: "prek-coding-l08-q1",
          text: "Decomposition means...",
          options: [
            { id: "a", text: "Making a task bigger" },
            { id: "b", text: "Breaking a big task into small steps" },
            { id: "c", text: "Skipping all the steps" },
            { id: "d", text: "Doing everything at once" },
          ],
          correctOptionId: "b",
          explanation: "Decomposition = breaking big things into small, easy steps!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L09  Debugging: Find the Mistake!  (video + interactive)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l09",
      title: "Bug Hunt: Find and Fix Mistakes!",
      type: "video",
      duration: 8,
      objectives: [
        "Explain that a bug is a mistake in instructions",
        "Find a bug in a simple sequence of steps",
        "Fix the bug by correcting or reordering the step",
      ],
      chunks: [
        {
          id: "prek-coding-l09-c1",
          title: "What Is a Bug?",
          content:
            "In coding, a 'bug' is a mistake! 🐛 The name comes from a real moth that got stuck inside an old computer and made it break. Now whenever code does not work right, coders say 'there is a bug!' and they go on a bug hunt to find and fix it.",
        },
        {
          id: "prek-coding-l09-c2",
          title: "Robo's Buggy Morning",
          content:
            "Robo tried to get dressed but something is wrong! Look at Robo's steps: 1) Put on shoes 👟, 2) Put on socks 🧦, 3) Put on pants 👖. That is buggy! You cannot put shoes on before socks! The fix: swap steps 1 and 2 — socks first, then shoes! 🐛→✅",
        },
        {
          id: "prek-coding-l09-c3",
          title: "Everyone Makes Bugs!",
          content:
            "Here is a secret: even the best coders in the whole world make bugs! 🌍 The important thing is not to be perfect — it is to be a good bug hunter. Check your steps, find what is wrong, and fix it. That is debugging, and it is one of the most important coding skills ever!",
        },
      ],
      flashcards: [
        { id: "prek-coding-l09-f1", front: "What is a bug?", back: "A mistake in your instructions that makes things go wrong! Named after a real moth in a computer. 🐛" },
        { id: "prek-coding-l09-f2", front: "What is debugging?", back: "Finding a bug and fixing it! Check your steps, spot the mistake, and correct it. 🔍✅" },
        { id: "prek-coding-l09-f3", front: "Do good coders make bugs?", back: "Yes! Everyone makes bugs. Good coders are just good at FINDING and FIXING them!" },
      ],
      questions: [
        {
          id: "prek-coding-l09-q1",
          text: "Robo's steps: 1) Pour cereal 2) Eat cereal 3) Get a bowl. What is the bug?",
          options: [
            { id: "a", text: "Step 3 should be first — you need a bowl before you pour!" },
            { id: "b", text: "There is no bug" },
            { id: "c", text: "Step 1 should be last" },
            { id: "d", text: "Remove all the steps" },
          ],
          correctOptionId: "a",
          explanation: "You need to get the bowl FIRST, then pour, then eat. Step 3 should be Step 1!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L10  Celebration Quiz: All Coding Ideas  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "prek-coding-l10",
      title: "Celebration Quiz: Coding Superstar!",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "prek-coding-l10-q1",
          text: "What does a SEQUENCE mean?",
          options: [
            { id: "a", text: "Steps in the correct order" },
            { id: "b", text: "A type of food" },
            { id: "c", text: "A loud noise" },
            { id: "d", text: "A color" },
          ],
          correctOptionId: "a",
          explanation: "A sequence is steps in the right order — first things first!",
        },
        {
          id: "prek-coding-l10-q2",
          text: "🔵🔴🔵🔴🔵 — what comes next?",
          options: [
            { id: "a", text: "🔵 Blue" },
            { id: "b", text: "🔴 Red" },
            { id: "c", text: "🟢 Green" },
            { id: "d", text: "🟡 Yellow" },
          ],
          correctOptionId: "b",
          explanation: "The pattern is blue-red-blue-red, so red comes after blue!",
        },
        {
          id: "prek-coding-l10-q3",
          text: "Bounce-catch-bounce-catch is a...",
          options: [
            { id: "a", text: "Bug" },
            { id: "b", text: "Snack" },
            { id: "c", text: "Loop" },
            { id: "d", text: "If-then" },
          ],
          correctOptionId: "c",
          explanation: "Repeating the same steps over and over is called a loop!",
        },
        {
          id: "prek-coding-l10-q4",
          text: "IF it is cold, THEN you should...",
          options: [
            { id: "a", text: "Wear a coat" },
            { id: "b", text: "Eat ice cream" },
            { id: "c", text: "Go swimming" },
            { id: "d", text: "Take off your shoes" },
          ],
          correctOptionId: "a",
          explanation: "IF cold, THEN coat! That is an if-then rule.",
        },
        {
          id: "prek-coding-l10-q5",
          text: "Breaking a big task into small steps is called...",
          options: [
            { id: "a", text: "Looping" },
            { id: "b", text: "Decomposition" },
            { id: "c", text: "Debugging" },
            { id: "d", text: "Pattering" },
          ],
          correctOptionId: "b",
          explanation: "Decomposition = breaking big things into smaller, easier steps!",
        },
        {
          id: "prek-coding-l10-q6",
          text: "A 'bug' in coding is a...",
          options: [
            { id: "a", text: "Cute ladybug" },
            { id: "b", text: "Mistake in the instructions" },
            { id: "c", text: "New type of computer" },
            { id: "d", text: "Really fast loop" },
          ],
          correctOptionId: "b",
          explanation: "A bug is a mistake — and debugging is finding and fixing it!",
        },
      ],
    },
  ],
};
