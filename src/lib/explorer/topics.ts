import type { LearningModule } from "@/lib/modules/types";

export type ExplorerTopic = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  prompts: string[];
  pictureChoices: Array<{
    id: string;
    emoji: string;
    label: string;
    prompt: string;
    action: string;
    followUp: string;
  }>;
  vocabulary: Array<{
    term: string;
    meaning: string;
  }>;
  talkTogether: string[];
  creativeChallenges: Array<{
    title: string;
    challenge: string;
    stretch: string;
  }>;
  caregiverTips: string[];
  wonderClues: string[];
  miniMissions: Array<{
    title: string;
    instruction: string;
    materials: string[];
    helperLine: string;
    safetyTip: string;
    reflectionPrompt: string;
  }>;
  movementMoments: Array<{
    title: string;
    instruction: string;
  }>;
  chantMoments: Array<{
    title: string;
    chant: string;
    beatCue: string;
  }>;
  calmMoments: Array<{
    title: string;
    prompt: string;
    breatheCue: string;
  }>;
  moduleKeywords: string[];
};

const examPrepPattern =
  /\b(act|sat|ap|gcse|a-level|jee|neet|gaokao|ib|toefl|ielts|cuet|atar|prep)\b/i;

const explorerTopics: ExplorerTopic[] = [
  {
    id: "tree",
    title: "Tree World",
    subtitle: "Plants, animals, seasons, and nature stories",
    imageSrc: "/explorer/tree.svg",
    imageAlt: "A friendly tree in a green field",
    prompts: [
      "What does a tree need to grow?",
      "Who lives in a tree?",
      "Why do leaves change color?",
      "How does water travel from roots to leaves?",
      "Why are forests important for clean air?",
      "How do seeds turn into plants?",
    ],
    pictureChoices: [
      {
        id: "seed",
        emoji: "🌱",
        label: "Seed",
        prompt: "How can a tiny seed become a big tree?",
        action: "Start with a planting and growth adventure.",
        followUp: "Can you spot where roots would grow first?",
      },
      {
        id: "nest",
        emoji: "🐦",
        label: "Nest",
        prompt: "Why do birds choose certain trees for nests?",
        action: "Explore animal homes in tree habitats.",
        followUp: "Listen for bird sounds and imagine their tree home.",
      },
      {
        id: "leaves",
        emoji: "🍂",
        label: "Leaves",
        prompt: "What changes do leaves go through in each season?",
        action: "Compare colors and shapes in a leaf challenge.",
        followUp: "Sort leaves by color or shape to find patterns.",
      },
      {
        id: "rain",
        emoji: "🌧️",
        label: "Rain",
        prompt: "How does rain help trees and soil stay healthy?",
        action: "Follow the water journey from roots to leaves.",
        followUp: "Watch where water goes after it falls on soil.",
      },
    ],
    vocabulary: [
      {
        term: "Roots",
        meaning: "The part of a plant that holds it in the ground and drinks water.",
      },
      {
        term: "Habitat",
        meaning: "The natural home where a plant or animal lives.",
      },
      {
        term: "Trunk",
        meaning: "The strong middle stem of a tree that supports branches.",
      },
      {
        term: "Seed",
        meaning: "A tiny plant starter that can grow into a new plant.",
      },
    ],
    talkTogether: [
      "What is one tree you see often, and what details do you notice?",
      "How would animals in your area be affected if many trees disappeared?",
      "What can your family do this week to care for plants or green spaces?",
    ],
    creativeChallenges: [
      {
        title: "Build a Tiny Forest",
        challenge:
          "Use paper, blocks, or recycled items to create a mini forest scene.",
        stretch:
          "Add at least three animals and explain why each one belongs in your forest.",
      },
      {
        title: "Leaf Story Poster",
        challenge:
          "Collect or draw leaves and create a poster showing seasons changing.",
        stretch:
          "Add one sentence for each season describing what trees might look like.",
      },
      {
        title: "Tree Parts Model",
        challenge:
          "Create a simple model that labels roots, trunk, branches, and leaves.",
        stretch:
          "Explain how each part helps the tree survive.",
      },
    ],
    caregiverTips: [
      "Ask open questions: 'What do you notice?' and 'Why do you think that happened?'",
      "Encourage drawing before writing so early learners can explain ideas visually.",
      "Connect tree concepts to local parks or neighborhood walks for real-world memory.",
    ],
    wonderClues: [
      "Trees can live for hundreds of years.",
      "Roots help hold soil in place during heavy rain.",
      "Many birds and insects use trees as safe homes.",
      "Tree shade helps cool the ground on hot days.",
    ],
    miniMissions: [
      {
        title: "Leaf Shape Hunt",
        instruction:
          "Find three different leaves and compare their shape, size, and color.",
        materials: ["three leaves", "paper or tray", "crayon or pencil"],
        helperLine: "Help your child sort leaves, then ask what changed and what stayed the same.",
        safetyTip: "Use only leaves from safe, accessible ground areas and wash hands after handling outdoor items.",
        reflectionPrompt: "Which leaf was the most surprising, and why?",
      },
      {
        title: "Tree Friend Journal",
        instruction:
          "Draw one tree you saw today and write one living thing near it.",
        materials: ["paper", "crayons or pencil"],
        helperLine: "If writing is hard, let your child explain the drawing aloud while you note key words.",
        safetyTip: "Observe trees from a safe distance away from roads or steep ground.",
        reflectionPrompt: "What changed about the tree when you looked at it for longer?",
      },
      {
        title: "Water the Roots",
        instruction:
          "Pour a small cup of water near a plant and observe how the soil changes.",
        materials: ["small cup of water", "safe plant or garden spot"],
        helperLine: "Ask where the water goes next and what the plant might need tomorrow.",
        safetyTip: "Use only a small amount of water and avoid slippery walkways after pouring.",
        reflectionPrompt: "How did the soil and plant area look different after watering?",
      },
    ],
    movementMoments: [
      {
        title: "Seed to Tree Stretch",
        instruction:
          "Start in a tiny crouch, then slowly stand tall and spread your arms like branches.",
      },
      {
        title: "Root Stomp",
        instruction:
          "Stomp gently in place and pretend your feet are roots holding the tree steady.",
      },
      {
        title: "Windy Branch Sway",
        instruction:
          "Sway side to side like branches in the wind and count each sway to six.",
      },
    ],
    chantMoments: [
      {
        title: "Tree Grow Song",
        chant: "Tiny seed, drink and grow, roots down deep, branches show.",
        beatCue: "Tap knees slowly: tap, tap, stretch up.",
      },
      {
        title: "Leaf Color Chant",
        chant: "Green to gold, red to brown, leaves can dance and float right down.",
        beatCue: "Clap twice, then flutter fingers downward.",
      },
      {
        title: "Forest Friends Beat",
        chant: "Birds and bugs and trees all share, forest homes are everywhere.",
        beatCue: "Pat chest, clap, snap in a steady three-count.",
      },
    ],
    calmMoments: [
      {
        title: "Quiet Tree Breath",
        prompt: "Imagine you are a still tree in calm air.",
        breatheCue: "Breathe in for 3 counts, breathe out for 4 counts.",
      },
      {
        title: "Leaf Float Pause",
        prompt: "Picture one leaf slowly floating to the ground.",
        breatheCue: "Trace a slow downward line while breathing out.",
      },
      {
        title: "Forest Listening",
        prompt: "Close your eyes and listen for the softest sound nearby.",
        breatheCue: "Take two quiet breaths before sharing what you heard.",
      },
    ],
    moduleKeywords: [
      "biology",
      "general science",
      "farming",
      "geography",
      "social studies",
      "nature",
      "ecosystem",
      "plants",
    ],
  },
  {
    id: "ocean",
    title: "Ocean World",
    subtitle: "Water, waves, fish, and weather",
    imageSrc: "/explorer/ocean.svg",
    imageAlt: "Blue ocean waves with fish",
    prompts: [
      "Why do waves move?",
      "Why is ocean water salty?",
      "How do fish breathe underwater?",
      "What animals live in shallow water and deep water?",
      "How do tides change the beach during a day?",
      "Why is it important to keep plastic out of the ocean?",
    ],
    pictureChoices: [
      {
        id: "fish",
        emoji: "🐠",
        label: "Fish",
        prompt: "How do fish move and breathe in water?",
        action: "Dive into sea creature survival ideas.",
        followUp: "Use your hands to mimic fins and tail movement.",
      },
      {
        id: "wave",
        emoji: "🌊",
        label: "Wave",
        prompt: "What makes waves small, big, fast, or slow?",
        action: "Test water motion with a wave experiment.",
        followUp: "Notice fast and slow wave rhythms.",
      },
      {
        id: "shell",
        emoji: "🐚",
        label: "Shell",
        prompt: "Who might have lived inside this shell?",
        action: "Explore ocean habitats and coastal clues.",
        followUp: "Compare shell shapes and imagine the creature inside.",
      },
      {
        id: "octopus",
        emoji: "🐙",
        label: "Octopus",
        prompt: "How does an octopus protect itself in the ocean?",
        action: "Learn about camouflage and smart behaviors.",
        followUp: "Try hiding colors in art like an octopus.",
      },
    ],
    vocabulary: [
      {
        term: "Tide",
        meaning: "The regular rise and fall of ocean water near the shore.",
      },
      {
        term: "Current",
        meaning: "A flow of moving water that travels through the ocean.",
      },
      {
        term: "Reef",
        meaning: "A rocky or coral area in the ocean where many animals live.",
      },
      {
        term: "Salty",
        meaning: "Having dissolved salt in the water.",
      },
    ],
    talkTogether: [
      "Why do you think the ocean is important even for people living far away?",
      "What are two simple actions your family can take to protect water?",
      "If you could observe one sea creature for a day, which would you pick and why?",
    ],
    creativeChallenges: [
      {
        title: "Design a Sea Creature",
        challenge:
          "Draw or build an imaginary sea creature and name its special features.",
        stretch:
          "Describe how your creature survives in deep or shallow water.",
      },
      {
        title: "Ocean Sound Map",
        challenge:
          "Create a map of ocean sounds using words or symbols (splash, crash, bubble).",
        stretch:
          "Match each sound to a possible ocean place or event.",
      },
      {
        title: "Coast Cleanup Plan",
        challenge:
          "Make a small action poster showing how to reduce trash near water.",
        stretch:
          "Pick one action your family can try this week and track it for three days.",
      },
    ],
    caregiverTips: [
      "Let children test ideas with water play and then describe what they observed.",
      "Use simple cause-effect language: 'When this happens, what changes next?'",
      "Reinforce stewardship by choosing one small household habit to improve together.",
    ],
    wonderClues: [
      "Most of Earth is covered by ocean water.",
      "Some sea creatures glow in very dark deep water.",
      "Coral reefs are homes for many different fish.",
      "Ocean currents can carry warm and cold water far away.",
    ],
    miniMissions: [
      {
        title: "Sink or Float Test",
        instruction:
          "Use a bowl of water and test five safe items to see what sinks or floats.",
        materials: ["bowl of water", "five safe household items", "small towel"],
        helperLine: "Before each test, ask your child to predict sink or float and explain why.",
        safetyTip: "Keep water away from electronics and clean spills quickly to prevent slips.",
        reflectionPrompt: "Which object behaved differently than you predicted?",
      },
      {
        title: "Wave in a Bottle",
        instruction:
          "Shake a water bottle gently and watch how mini waves move and settle.",
        materials: ["clear bottle with lid", "water"],
        helperLine: "Invite your child to compare fast shakes and slow shakes using simple words.",
        safetyTip: "Make sure the bottle cap is tightly closed before shaking.",
        reflectionPrompt: "What was different between big waves and small waves in the bottle?",
      },
      {
        title: "Clean Coast Plan",
        instruction:
          "Create a short list of three ways your family can reduce plastic waste.",
        materials: ["paper", "markers or pencil"],
        helperLine: "Choose one action from the list and try it together for the next day.",
        safetyTip: "If you do a cleanup activity, wear gloves and avoid picking up sharp objects.",
        reflectionPrompt: "Which cleanup action feels easiest for your family to start first?",
      },
    ],
    movementMoments: [
      {
        title: "Wave Arms",
        instruction:
          "Move your arms in smooth wave motions, starting slow and then a little faster.",
      },
      {
        title: "Fish Swim",
        instruction:
          "Press your hands together and glide around the room like a fish through water.",
      },
      {
        title: "Crab Steps",
        instruction:
          "Take sideways steps like a crab and count four steps in each direction.",
      },
    ],
    chantMoments: [
      {
        title: "Wave Rhythm",
        chant: "Big wave, small wave, splash and sway, ocean keeps a beat all day.",
        beatCue: "Sway left-right and clap on 'splash'.",
      },
      {
        title: "Fish Swim Rhyme",
        chant: "Tail swish, fin flip, fish can glide and fish can dip.",
        beatCue: "Hands together, swish side to side.",
      },
      {
        title: "Sea Cleanup Song",
        chant: "Keep it clean, blue and bright, care for oceans day and night.",
        beatCue: "Tap shoulders and point to the floor on 'clean'.",
      },
    ],
    calmMoments: [
      {
        title: "Slow Tide Breath",
        prompt: "Pretend your breath is an ocean tide coming in and out.",
        breatheCue: "Inhale as the wave comes in, exhale as it goes out.",
      },
      {
        title: "Shell Focus",
        prompt: "Imagine holding a shell and listening to gentle water sounds.",
        breatheCue: "Hold hands together and take three steady breaths.",
      },
      {
        title: "Quiet Reef Pause",
        prompt: "Picture colorful fish moving slowly around a calm reef.",
        breatheCue: "Breathe softly and count to four with each exhale.",
      },
    ],
    moduleKeywords: [
      "general science",
      "biology",
      "chemistry",
      "physics",
      "geography",
      "water",
      "ocean",
      "ecosystem",
    ],
  },
  {
    id: "space",
    title: "Space World",
    subtitle: "Stars, planets, rockets, and light",
    imageSrc: "/explorer/rocket.svg",
    imageAlt: "A rocket flying in space",
    prompts: [
      "Why do we have day and night?",
      "What is a planet?",
      "How do rockets go up?",
      "Why do some stars look brighter than others?",
      "What tools do astronauts use in space?",
      "How do we learn about planets we cannot visit yet?",
    ],
    pictureChoices: [
      {
        id: "moon",
        emoji: "🌙",
        label: "Moon",
        prompt: "Why does the Moon look different across the month?",
        action: "Track moon shapes with a sky journal.",
        followUp: "Draw tonight's moon and compare tomorrow.",
      },
      {
        id: "star",
        emoji: "⭐",
        label: "Star",
        prompt: "Why do stars twinkle when we see them from Earth?",
        action: "Explore light, distance, and night sky patterns.",
        followUp: "Find the brightest star-like point and describe it.",
      },
      {
        id: "rocket",
        emoji: "🚀",
        label: "Rocket",
        prompt: "What helps rockets lift off and travel safely?",
        action: "Build and test a launch model challenge.",
        followUp: "Count down and launch a paper rocket test.",
      },
      {
        id: "astronaut",
        emoji: "🧑‍🚀",
        label: "Astronaut",
        prompt: "What jobs do astronauts do every day in space?",
        action: "Plan a teamwork mission for a space station.",
        followUp: "Name one teamwork job for a space crew.",
      },
    ],
    vocabulary: [
      {
        term: "Orbit",
        meaning: "The path an object takes as it moves around another object in space.",
      },
      {
        term: "Gravity",
        meaning: "The force that pulls objects toward each other.",
      },
      {
        term: "Planet",
        meaning: "A large object that travels around a star.",
      },
      {
        term: "Telescope",
        meaning: "A tool that helps us see very distant objects.",
      },
    ],
    talkTogether: [
      "If you designed a space mission, what question would you want to answer first?",
      "Why might astronauts need teamwork even for simple tasks?",
      "How does learning about space help life on Earth?",
    ],
    creativeChallenges: [
      {
        title: "Invent a Planet",
        challenge:
          "Create a new planet with a name, climate, and surface features.",
        stretch:
          "Describe what visitors need to survive there.",
      },
      {
        title: "Mission Patch Art",
        challenge:
          "Design a mission badge for a class or family space mission.",
        stretch:
          "Explain what each symbol on your badge represents.",
      },
      {
        title: "Moon Base Blueprint",
        challenge:
          "Draw a simple moon base with sleeping, food, and science zones.",
        stretch:
          "Add one safety rule and one teamwork rule for the base crew.",
      },
    ],
    caregiverTips: [
      "Invite prediction first: 'What do you think will happen?' before giving answers.",
      "Use household objects to model orbit and rotation through movement.",
      "Celebrate imaginative ideas, then ask for one scientific reason to support them.",
    ],
    wonderClues: [
      "The Moon does not make its own light; it reflects sunlight.",
      "A year is the time Earth takes to go around the Sun once.",
      "Some planets have many moons while others have none.",
      "Telescopes let us study very distant objects in space.",
    ],
    miniMissions: [
      {
        title: "Shadow Clock",
        instruction:
          "Place a stick in sunlight and trace its shadow at three times today.",
        materials: ["stick or pencil", "sunny spot", "chalk or paper"],
        helperLine: "Check in later and ask how the shadow changed and what that might mean.",
        safetyTip: "Choose a safe flat area away from traffic and avoid looking directly at the Sun.",
        reflectionPrompt: "How did the shadow direction change across the day?",
      },
      {
        title: "Constellation Dots",
        instruction:
          "Connect star-like dots on paper to make your own constellation pattern.",
        materials: ["paper", "pencil or marker", "dot stickers optional"],
        helperLine: "Ask your child to name the constellation and tell a one-line space story.",
        safetyTip: "Use child-safe drawing tools and clear the table before starting.",
        reflectionPrompt: "What story does your new constellation tell?",
      },
      {
        title: "Paper Rocket Trial",
        instruction:
          "Build a paper rocket and test two launch angles to compare distance.",
        materials: ["paper", "tape optional", "safe open floor space"],
        helperLine: "Count down together, then compare which launch angle traveled farther.",
        safetyTip: "Launch paper rockets only in open indoor space and avoid aiming at people or pets.",
        reflectionPrompt: "Which launch angle worked best, and what do you think caused that?",
      },
    ],
    movementMoments: [
      {
        title: "Rocket Countdown",
        instruction:
          "Crouch low and count down from five, then jump up like a rocket launch.",
      },
      {
        title: "Moon Walk",
        instruction:
          "Take slow, giant steps and imagine low gravity pulling you gently.",
      },
      {
        title: "Star Reach",
        instruction:
          "Reach to different corners of the sky and name a color for each star you touch.",
      },
    ],
    chantMoments: [
      {
        title: "Rocket Beat",
        chant: "Five, four, three, two, one, zoom. Flying fast beyond the moon.",
        beatCue: "Stomp each number, jump on 'zoom'.",
      },
      {
        title: "Planet Circle Song",
        chant: "Round and round the planets glide, circling stars side by side.",
        beatCue: "Trace big circles with your hands.",
      },
      {
        title: "Star Light Rhyme",
        chant: "Twinkle high, twinkle far, tell me where you are, bright star.",
        beatCue: "Snap slowly and point to the sky.",
      },
    ],
    calmMoments: [
      {
        title: "Moonlight Breath",
        prompt: "Imagine moonlight shining softly over everything.",
        breatheCue: "Breathe in slowly, breathe out even more slowly.",
      },
      {
        title: "Star Count Pause",
        prompt: "Pick one bright star and focus on it quietly.",
        breatheCue: "Count four breaths while keeping your body still.",
      },
      {
        title: "Zero-Gravity Rest",
        prompt: "Pretend you are floating gently in space without rushing.",
        breatheCue: "Relax shoulders on each exhale.",
      },
    ],
    moduleKeywords: [
      "astronomy",
      "physics",
      "general science",
      "space",
      "light",
      "motion",
    ],
  },
  {
    id: "numbers",
    title: "Number World",
    subtitle: "Counting, patterns, money, and math puzzles",
    imageSrc: "/explorer/numbers.svg",
    imageAlt: "Three colorful number blocks",
    prompts: [
      "Can we count these together?",
      "What pattern comes next?",
      "How can numbers help us shop?",
      "How can we split snacks into equal groups?",
      "Where do we use measurement in daily life?",
      "How do number lines help us compare values?",
    ],
    pictureChoices: [
      {
        id: "pattern",
        emoji: "🧩",
        label: "Pattern",
        prompt: "What part repeats, and what comes next?",
        action: "Start a pattern puzzle with colors or shapes.",
        followUp: "Say the repeat rule out loud.",
      },
      {
        id: "coins",
        emoji: "🪙",
        label: "Coins",
        prompt: "How can we use money to make simple choices?",
        action: "Play a mini shop game with totals and change.",
        followUp: "Pick coins that make the same total in two ways.",
      },
      {
        id: "ruler",
        emoji: "📏",
        label: "Ruler",
        prompt: "How can we measure and compare everyday objects?",
        action: "Try a quick length challenge at home.",
        followUp: "Measure two items and compare longer or shorter.",
      },
      {
        id: "count",
        emoji: "🍎",
        label: "Count",
        prompt: "How can we group items to count faster?",
        action: "Practice equal groups with snack-size objects.",
        followUp: "Group items by twos or threes for faster counting.",
      },
    ],
    vocabulary: [
      {
        term: "Pattern",
        meaning: "A repeating order that helps us predict what comes next.",
      },
      {
        term: "Estimate",
        meaning: "A quick, close guess made without exact counting.",
      },
      {
        term: "Equal Group",
        meaning: "Groups that each have the same number of items.",
      },
      {
        term: "Measure",
        meaning: "To find size, length, weight, or amount using units.",
      },
    ],
    talkTogether: [
      "Where do you use math at home that you might not notice right away?",
      "Why is estimation useful before you calculate exactly?",
      "How can patterns help in games, art, or music?",
    ],
    creativeChallenges: [
      {
        title: "Math Treasure Hunt",
        challenge:
          "Find numbers around your home (labels, clocks, packaging) and record them.",
        stretch:
          "Sort the numbers into groups such as big/small or odd/even.",
      },
      {
        title: "Pattern Bracelet",
        challenge:
          "Create a repeating color or shape pattern bracelet on paper or string.",
        stretch:
          "Write the pattern rule so someone else can continue it.",
      },
      {
        title: "Store Helper Game",
        challenge:
          "Pretend to buy three items and add prices using simple numbers.",
        stretch:
          "Estimate total first, then check with exact addition.",
      },
    ],
    caregiverTips: [
      "Use math talk during routines: cooking, shopping, setting timers, and sharing items.",
      "Praise strategy and explanation, not just speed or correct answers.",
      "If a child is stuck, ask them to draw the problem before solving.",
    ],
    wonderClues: [
      "Patterns help us predict what comes next.",
      "Estimation helps us make quick number decisions.",
      "Money uses numbers for prices, change, and budgeting.",
      "Math helps us measure time, distance, and quantity.",
    ],
    miniMissions: [
      {
        title: "Count and Group",
        instruction:
          "Collect 12 small objects and group them in different equal sets.",
        materials: ["12 small objects", "table or floor space", "three small bowls optional"],
        helperLine: "Ask your child to show two different grouping strategies and explain each one.",
        safetyTip: "Use larger objects to avoid choking hazards for younger learners.",
        reflectionPrompt: "How many different equal groups were you able to create?",
      },
      {
        title: "Kitchen Math",
        instruction:
          "Measure one cup and half cup of water to compare volume.",
        materials: ["measuring cup", "half cup", "water", "two clear cups"],
        helperLine: "Use words like more, less, and equal while your child pours and compares.",
        safetyTip: "Use cool water only and wipe spills right away.",
        reflectionPrompt: "What did you notice about one cup compared with two half cups?",
      },
      {
        title: "Pattern Builder",
        instruction:
          "Create a repeating pattern with colors or shapes and challenge someone to continue it.",
        materials: ["colored objects or paper shapes", "flat surface"],
        helperLine: "Pause after four items and ask what must come next in the rule.",
        safetyTip: "Keep tiny pieces in a tray and clean up before moving around.",
        reflectionPrompt: "What rule did your pattern follow, and how did you know the next item?",
      },
    ],
    movementMoments: [
      {
        title: "Count Jumps",
        instruction:
          "Do one jump for each number from one to ten, saying each number out loud.",
      },
      {
        title: "Pattern Claps",
        instruction:
          "Clap-knee-clap-knee in a repeating pattern and invite someone to copy you.",
      },
      {
        title: "Shape Steps",
        instruction:
          "Walk in a square, then a triangle, and describe how each path feels different.",
      },
    ],
    chantMoments: [
      {
        title: "Count and Clap",
        chant: "One, two, three, four, clap some more.",
        beatCue: "Clap on even numbers, tap on odd numbers.",
      },
      {
        title: "Pattern Pulse",
        chant: "Red blue red blue, what comes next? You choose.",
        beatCue: "Pat-clap-pat-clap in repeat.",
      },
      {
        title: "Shape Song",
        chant: "Square has four, triangle three, shapes are all around me.",
        beatCue: "Draw shapes in the air while chanting.",
      },
    ],
    calmMoments: [
      {
        title: "Number Breath",
        prompt: "Count each breath quietly from one to five.",
        breatheCue: "Restart at one if your mind wanders.",
      },
      {
        title: "Pattern Pause",
        prompt: "Repeat a calm pattern: in-out, in-out.",
        breatheCue: "Tap finger-thumb gently with each breath.",
      },
      {
        title: "Still Shape Moment",
        prompt: "Hold your body in one shape and stay steady.",
        breatheCue: "Take two long breaths while holding your pose.",
      },
    ],
    moduleKeywords: [
      "basic math",
      "advanced math",
      "math",
      "financial literacy",
      "coding",
      "patterns",
      "counting",
    ],
  },
  {
    id: "story",
    title: "Story World",
    subtitle: "Reading, words, ideas, and imagination",
    imageSrc: "/explorer/storybook.svg",
    imageAlt: "An open storybook with stars",
    prompts: [
      "What happened first in this story?",
      "How does this character feel?",
      "Can you make a new ending?",
      "What clue tells us the main idea?",
      "How does the setting change the story?",
      "Which words help us imagine the scene?",
    ],
    pictureChoices: [
      {
        id: "hero",
        emoji: "🦸",
        label: "Hero",
        prompt: "What goal does your hero care about most?",
        action: "Build a character profile and story mission.",
        followUp: "Give your hero one strength and one challenge.",
      },
      {
        id: "place",
        emoji: "🏰",
        label: "Place",
        prompt: "How does the setting change what happens?",
        action: "Create a new location for a familiar story.",
        followUp: "Add three details that make your place vivid.",
      },
      {
        id: "feeling",
        emoji: "😮",
        label: "Feeling",
        prompt: "What clues show how a character feels inside?",
        action: "Use emotion words to retell one scene.",
        followUp: "Match a face expression to the feeling word.",
      },
      {
        id: "ending",
        emoji: "📚",
        label: "Ending",
        prompt: "What ending would surprise the reader most?",
        action: "Rewrite the final moment with one big change.",
        followUp: "Tell two endings: one happy and one surprising.",
      },
    ],
    vocabulary: [
      {
        term: "Character",
        meaning: "A person, animal, or figure in a story.",
      },
      {
        term: "Setting",
        meaning: "Where and when a story happens.",
      },
      {
        term: "Problem",
        meaning: "A challenge the characters need to solve.",
      },
      {
        term: "Solution",
        meaning: "How the story problem gets fixed or resolved.",
      },
    ],
    talkTogether: [
      "Which character choice changed the story most, and why?",
      "How would the story feel different in another setting?",
      "What lesson can readers learn from this story?",
    ],
    creativeChallenges: [
      {
        title: "Character Diary",
        challenge:
          "Write or draw a diary entry from one character’s point of view.",
        stretch:
          "Include what the character wants and what problem they face.",
      },
      {
        title: "Story Flip",
        challenge:
          "Retell a familiar story with one major change (new setting or new hero).",
        stretch:
          "Explain how your change affects the ending.",
      },
      {
        title: "Picture Sequence",
        challenge:
          "Draw three frames showing beginning, middle, and end.",
        stretch:
          "Add transition words: first, next, then, finally.",
      },
    ],
    caregiverTips: [
      "Pause during reading and ask children to predict what might happen next.",
      "Use expressive voice and gestures to make story emotions easier to notice.",
      "Invite children to retell stories in their own words to build comprehension.",
    ],
    wonderClues: [
      "Strong stories usually have a beginning, middle, and ending.",
      "Characters make choices that change what happens next.",
      "Descriptive words help readers picture sounds, colors, and feelings.",
      "Asking questions while reading improves understanding.",
    ],
    miniMissions: [
      {
        title: "One Minute Story",
        instruction:
          "Tell a short story with a hero, a problem, and a solution in three sentences.",
        materials: ["optional timer", "picture card optional"],
        helperLine: "Prompt with who, where, and what happened if your child needs a starting point.",
        safetyTip: "Keep storytelling playful and pause if your child feels pressure about timing.",
        reflectionPrompt: "Which part of your story felt strongest: beginning, middle, or ending?",
      },
      {
        title: "Emotion Detective",
        instruction:
          "Read a paragraph and mark words that show how a character feels.",
        materials: ["short text or book", "pencil or highlighter"],
        helperLine: "Ask your child what clue word shows the feeling most clearly.",
        safetyTip: "Choose age-appropriate text and avoid distressing story themes.",
        reflectionPrompt: "Which word best showed the character feeling, and why?",
      },
      {
        title: "New Ending Challenge",
        instruction:
          "Pick a known story and write a different ending with one new event.",
        materials: ["book or familiar story", "paper", "pencil or crayons"],
        helperLine: "Let your child draw the ending first, then narrate it out loud.",
        safetyTip: "Offer choice and flexibility so your child can stop or switch modes if tired.",
        reflectionPrompt: "How did your new ending change the message of the story?",
      },
    ],
    movementMoments: [
      {
        title: "Character Pose",
        instruction:
          "Strike a pose for your main character and hold it while saying their name.",
      },
      {
        title: "Emotion Faces",
        instruction:
          "Act out happy, worried, and surprised faces to match story emotions.",
      },
      {
        title: "Story March",
        instruction:
          "Take three steps for beginning, middle, and end while retelling your story.",
      },
    ],
    chantMoments: [
      {
        title: "Story Start Beat",
        chant: "Once we start, who, where, what. Build the tale from this first spot.",
        beatCue: "Tap head, shoulders, knees for who-where-what.",
      },
      {
        title: "Emotion Echo",
        chant: "Happy, worried, brave, surprised. Stories hold all kinds of vibes.",
        beatCue: "Change face expression on each emotion word.",
      },
      {
        title: "Ending Rhyme",
        chant: "First, next, then, and done. How your ending changed the fun.",
        beatCue: "Clap on each transition word.",
      },
    ],
    calmMoments: [
      {
        title: "Quiet Reader Breath",
        prompt: "Hold your book hands still and take a gentle breath.",
        breatheCue: "Breathe in through nose, out through mouth slowly.",
      },
      {
        title: "Character Calm",
        prompt: "Imagine your character pausing before a big choice.",
        breatheCue: "Take one brave breath before speaking.",
      },
      {
        title: "Ending Reflection",
        prompt: "Think of the ending and one feeling it gave you.",
        breatheCue: "Take two calm breaths, then share one feeling word.",
      },
    ],
    moduleKeywords: [
      "language arts",
      "reading",
      "arts",
      "world history",
      "social studies",
      "writing",
      "story",
    ],
  },
  {
    id: "world",
    title: "People + Places",
    subtitle: "Communities, maps, and how people live",
    imageSrc: "/explorer/globe.svg",
    imageAlt: "A globe with people around it",
    prompts: [
      "Where do people live around the world?",
      "How is my town like another town?",
      "Why do maps help us?",
      "How do communities share resources?",
      "Why do people create rules and laws?",
      "How do weather and land affect where people live?",
    ],
    pictureChoices: [
      {
        id: "home",
        emoji: "🏠",
        label: "Home",
        prompt: "What makes a home helpful and safe for families?",
        action: "Compare homes from different places and climates.",
        followUp: "Compare homes built for hot and cold weather.",
      },
      {
        id: "map",
        emoji: "🗺️",
        label: "Map",
        prompt: "How can map symbols help us find places faster?",
        action: "Try a map-key scavenger challenge.",
        followUp: "Use symbols to mark three important places.",
      },
      {
        id: "helpers",
        emoji: "🤝",
        label: "Helpers",
        prompt: "Who are community helpers, and what do they do?",
        action: "Match local jobs to community needs.",
        followUp: "Choose one helper and explain why they matter.",
      },
      {
        id: "weather",
        emoji: "🌦️",
        label: "Weather",
        prompt: "How does weather affect daily life in each region?",
        action: "Explore clothing, food, and shelter choices by climate.",
        followUp: "Pick clothes for two climates and explain your choices.",
      },
    ],
    vocabulary: [
      {
        term: "Community",
        meaning: "A group of people who live, work, and help in the same place.",
      },
      {
        term: "Culture",
        meaning: "Shared traditions, food, language, art, and ways of life.",
      },
      {
        term: "Resource",
        meaning: "Something useful that people need, like water, food, or energy.",
      },
      {
        term: "Map Key",
        meaning: "A guide that explains the symbols used on a map.",
      },
    ],
    talkTogether: [
      "What community rules help people stay safe and work together?",
      "How can two places be different and still share similar needs?",
      "What local resource is most important in your neighborhood and why?",
    ],
    creativeChallenges: [
      {
        title: "Community Builder",
        challenge:
          "Design a small town map with homes, helpers, and shared spaces.",
        stretch:
          "Add one challenge the town has and one solution people can work on together.",
      },
      {
        title: "Travel Postcard",
        challenge:
          "Create a postcard from an imaginary place and describe life there.",
        stretch:
          "Compare one similarity and one difference with your own community.",
      },
      {
        title: "Resource Relay",
        challenge:
          "List five resources a community needs and where they come from.",
        stretch:
          "Choose one resource and explain how to protect it.",
      },
    ],
    caregiverTips: [
      "Connect geography concepts to family stories, travel, or neighborhood landmarks.",
      "Encourage respectful comparison: different cultures can have different strengths.",
      "Ask children how they would help improve one part of their community.",
    ],
    wonderClues: [
      "Communities can be villages, towns, or large cities.",
      "Maps use symbols and scale to show places clearly.",
      "People adapt homes and jobs to local climate and land.",
      "Trade helps communities exchange goods and ideas.",
    ],
    miniMissions: [
      {
        title: "Neighborhood Map",
        instruction:
          "Draw a simple map with home, school, and one important local place.",
        materials: ["paper", "pencil", "markers optional"],
        helperLine: "Ask your child to explain the route from home to each place.",
        safetyTip: "Keep map conversations focused on public landmarks, not private personal details.",
        reflectionPrompt: "Which place felt easiest to map, and which was hardest?",
      },
      {
        title: "Community Helper Interview",
        instruction:
          "Ask a family member about one job that helps the community each day.",
        materials: ["two or three interview questions", "paper or voice note optional"],
        helperLine: "Support your child to ask one follow-up question after each answer.",
        safetyTip: "Use respectful questions and avoid sharing private information in recordings.",
        reflectionPrompt: "What helper job surprised you most after the interview?",
      },
      {
        title: "Culture Compare",
        instruction:
          "List one food, one game, and one celebration from two different places.",
        materials: ["paper", "family conversation or books"],
        helperLine: "Encourage respectful language by noting one strength from each place.",
        safetyTip: "Frame differences with curiosity and respect; avoid stereotypes or value judgments.",
        reflectionPrompt: "What is one similarity you noticed between both places?",
      },
    ],
    movementMoments: [
      {
        title: "Map March",
        instruction:
          "March from one side of the room to another and call out each place you pass.",
      },
      {
        title: "Weather Moves",
        instruction:
          "Show sunny, rainy, and windy weather with your body and voice.",
      },
      {
        title: "Helper Actions",
        instruction:
          "Act out one motion for a community helper and let others guess the role.",
      },
    ],
    chantMoments: [
      {
        title: "Map Path Chant",
        chant: "Left then right, north then south, maps can guide us all about.",
        beatCue: "Step left-right and point up-down.",
      },
      {
        title: "Helper Cheer",
        chant: "Helpers share, helpers care, strong communities everywhere.",
        beatCue: "Clap, clap, hands in the air on 'everywhere'.",
      },
      {
        title: "Weather Rhythm",
        chant: "Sun or rain or windy day, people plan and find a way.",
        beatCue: "Tap light for sun, tap fast for rain, sway for wind.",
      },
    ],
    calmMoments: [
      {
        title: "Home Base Breath",
        prompt: "Imagine your safest place and what makes it calm.",
        breatheCue: "Breathe in for comfort, breathe out for calm.",
      },
      {
        title: "Map Dot Focus",
        prompt: "Place one finger on an imaginary map and stay still.",
        breatheCue: "Take three slow breaths while your finger stays in place.",
      },
      {
        title: "Community Kind Pause",
        prompt: "Think of one kind action you can do for your community.",
        breatheCue: "Breathe in, then say your action on the exhale.",
      },
    ],
    moduleKeywords: [
      "social studies",
      "world history",
      "geography",
      "household management",
      "culture",
      "community",
    ],
  },
];

function toModuleSearchText(moduleEntry: LearningModule) {
  return [
    moduleEntry.id,
    moduleEntry.title,
    moduleEntry.description,
    moduleEntry.subject,
    ...(Array.isArray(moduleEntry.tags) ? moduleEntry.tags : []),
  ]
    .filter((value) => typeof value === "string" && value.trim().length > 0)
    .join(" ")
    .toLowerCase();
}

function scoreModuleForTopic(moduleEntry: LearningModule, topic: ExplorerTopic) {
  const text = toModuleSearchText(moduleEntry);
  if (examPrepPattern.test(text)) return -1000;

  let score = 0;
  for (const keyword of topic.moduleKeywords) {
    if (text.includes(keyword.toLowerCase())) score += 4;
  }

  if (typeof moduleEntry.minAge === "number" && moduleEntry.minAge <= 6) score += 3;
  if (typeof moduleEntry.maxAge === "number" && moduleEntry.maxAge <= 8) score += 1;

  const versionToken = String(moduleEntry.moduleVersion ?? moduleEntry.version ?? "");
  if (versionToken.startsWith("2.")) score += 1;

  if (moduleEntry.id.startsWith("pre-k-")) score += 2;
  if (moduleEntry.id.includes("-external")) score -= 1;

  return score;
}

export function getExplorerTopics() {
  return explorerTopics;
}

export function getExplorerTopicById(topicId: string) {
  const normalized = String(topicId).trim().toLowerCase();
  return explorerTopics.find((topic) => topic.id === normalized) ?? null;
}

export function getRecommendedModulesForTopic(
  topic: ExplorerTopic,
  modules: LearningModule[],
  limit = 8,
) {
  return modules
    .map((moduleEntry) => ({
      moduleEntry,
      score: scoreModuleForTopic(moduleEntry, topic),
    }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      const leftAge = typeof left.moduleEntry.minAge === "number" ? left.moduleEntry.minAge : 99;
      const rightAge = typeof right.moduleEntry.minAge === "number" ? right.moduleEntry.minAge : 99;
      if (leftAge !== rightAge) return leftAge - rightAge;
      return left.moduleEntry.title.localeCompare(right.moduleEntry.title);
    })
    .slice(0, limit)
    .map((entry) => entry.moduleEntry);
}

export function getBestExplorerTopicForModule(moduleEntry: LearningModule) {
  const ranked = explorerTopics
    .map((topic) => ({
      topic,
      score: scoreModuleForTopic(moduleEntry, topic),
    }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return left.topic.title.localeCompare(right.topic.title);
    });

  return ranked[0]?.topic ?? null;
}
