/* -------------------------------------------------------------------------- */
/*  Educational Content Banks for Game Engines                               */
/*  Reusable subject‐area content used by content generators                 */
/* -------------------------------------------------------------------------- */

/* ── Math ─────────────────────────────────────────────────────────────────── */
export const MATH_ITEMS = [
  { emoji: "1️⃣", label: "1" }, { emoji: "2️⃣", label: "2" }, { emoji: "3️⃣", label: "3" },
  { emoji: "4️⃣", label: "4" }, { emoji: "5️⃣", label: "5" }, { emoji: "6️⃣", label: "6" },
  { emoji: "7️⃣", label: "7" }, { emoji: "8️⃣", label: "8" }, { emoji: "9️⃣", label: "9" },
  { emoji: "🔟", label: "10" }, { emoji: "➕", label: "+" }, { emoji: "➖", label: "-" },
  { emoji: "✖️", label: "×" }, { emoji: "➗", label: "÷" }, { emoji: "🟰", label: "=" },
];

export const MATH_QUESTIONS = [
  { q: "2 + 3", correct: "5", wrong: ["4", "6", "7"], emoji: "➕" },
  { q: "7 × 8", correct: "56", wrong: ["48", "63", "54"], emoji: "✖️" },
  { q: "100 ÷ 5", correct: "20", wrong: ["15", "25", "50"], emoji: "➗" },
  { q: "15 - 9", correct: "6", wrong: ["5", "7", "8"], emoji: "➖" },
  { q: "12 × 12", correct: "144", wrong: ["124", "132", "156"], emoji: "✖️" },
  { q: "√64", correct: "8", wrong: ["6", "7", "9"], emoji: "🔢" },
  { q: "3² + 4²", correct: "25", wrong: ["20", "24", "30"], emoji: "📐" },
  { q: "⅓ of 27", correct: "9", wrong: ["3", "6", "12"], emoji: "🥧" },
  { q: "50% of 80", correct: "40", wrong: ["30", "45", "50"], emoji: "💯" },
  { q: "11 × 11", correct: "121", wrong: ["111", "131", "122"], emoji: "✖️" },
  { q: "18 ÷ 3", correct: "6", wrong: ["5", "7", "9"], emoji: "➗" },
  { q: "25 + 37", correct: "62", wrong: ["52", "72", "63"], emoji: "➕" },
  { q: "99 - 56", correct: "43", wrong: ["53", "33", "45"], emoji: "➖" },
  { q: "6 × 7", correct: "42", wrong: ["36", "48", "49"], emoji: "✖️" },
  { q: "1000 ÷ 8", correct: "125", wrong: ["120", "130", "150"], emoji: "➗" },
  { q: "2³", correct: "8", wrong: ["6", "9", "12"], emoji: "🔢" },
  { q: "¼ of 100", correct: "25", wrong: ["20", "30", "50"], emoji: "🥧" },
  { q: "13 × 7", correct: "91", wrong: ["87", "84", "93"], emoji: "✖️" },
  { q: "144 ÷ 12", correct: "12", wrong: ["11", "13", "14"], emoji: "➗" },
  { q: "75 + 48", correct: "123", wrong: ["113", "133", "125"], emoji: "➕" },
];

export const MATH_PROBLEMS_BUBBLE = [
  { question: "3 + 4", answer: 7, decoys: [5, 6, 8, 9] },
  { question: "9 × 3", answer: 27, decoys: [24, 26, 28, 30] },
  { question: "16 ÷ 4", answer: 4, decoys: [2, 3, 5, 6] },
  { question: "20 - 7", answer: 13, decoys: [11, 12, 14, 15] },
  { question: "5²", answer: 25, decoys: [10, 15, 20, 30] },
  { question: "8 + 9", answer: 17, decoys: [15, 16, 18, 19] },
  { question: "6 × 6", answer: 36, decoys: [30, 32, 34, 42] },
  { question: "45 ÷ 9", answer: 5, decoys: [3, 4, 6, 7] },
  { question: "14 - 8", answer: 6, decoys: [4, 5, 7, 8] },
  { question: "11 + 15", answer: 26, decoys: [24, 25, 27, 28] },
];

export const BALANCE_PROBLEMS = [
  { left: [3, 5], available: [1, 2, 3, 4, 5, 6], target: 8 },
  { left: [7, 2], available: [1, 3, 4, 5, 6], target: 9 },
  { left: [4, 4, 2], available: [1, 2, 3, 5, 7], target: 10 },
  { left: [6, 3], available: [1, 2, 4, 5, 9], target: 9 },
  { left: [10], available: [2, 3, 4, 5, 6], target: 10 },
  { left: [1, 2, 3], available: [1, 2, 3, 4, 5, 6], target: 6 },
  { left: [8, 4], available: [1, 2, 3, 5, 7, 12], target: 12 },
  { left: [5, 5, 5], available: [1, 3, 5, 7, 15], target: 15 },
];

/* ── Literacy ─────────────────────────────────────────────────────────────── */
export const VOCAB_WORDS = [
  "APPLE", "BRAVE", "CLOUD", "DREAM", "EARTH", "FLAME", "GRAPE", "HEART",
  "IMAGE", "JUICE", "KNIFE", "LEMON", "MARCH", "NIGHT", "OCEAN", "PIANO",
  "QUEEN", "RIVER", "STONE", "TIGER", "UNDER", "VIDEO", "WATER", "XENON",
  "YOUTH", "ZEBRA", "BLOOM", "CHARM", "DANCE", "EAGLE", "FROST", "GIANT",
  "MAGIC", "NOBLE", "PIXEL", "QUEST", "SOLAR", "TRAIN", "UNITY", "VOICE",
  "WORLD", "ATLAS", "BRAIN", "CRANE", "DIGIT", "ELBOW", "FLASH", "GREEN",
];

export const TYPING_WORDS = [
  { word: "algorithm", emoji: "💻", fact: "A step-by-step procedure for solving a problem" },
  { word: "butterfly", emoji: "🦋", fact: "Butterflies taste with their feet" },
  { word: "chocolate", emoji: "🍫", fact: "Chocolate comes from cacao beans" },
  { word: "dinosaur", emoji: "🦕", fact: "Dinosaurs lived 230 million years ago" },
  { word: "elephant", emoji: "🐘", fact: "Elephants never forget faces" },
  { word: "fountain", emoji: "⛲", fact: "The Trevi Fountain collects €3000 daily" },
  { word: "giraffe", emoji: "🦒", fact: "Giraffes are the tallest living animals" },
  { word: "homework", emoji: "📝", fact: "The word comes from Old English 'hamweorc'" },
  { word: "internet", emoji: "🌐", fact: "The internet was invented in 1969" },
  { word: "jellyfish", emoji: "🪼", fact: "Jellyfish have no brain or heart" },
  { word: "keyboard", emoji: "⌨️", fact: "QWERTY layout was designed in 1873" },
  { word: "language", emoji: "🗣️", fact: "There are over 7,000 languages worldwide" },
  { word: "mountain", emoji: "🏔️", fact: "Mt Everest is 8,849 meters tall" },
  { word: "nitrogen", emoji: "🧪", fact: "78% of Earth's air is nitrogen" },
  { word: "olympiad", emoji: "🏅", fact: "The Olympics began in 776 BC" },
  { word: "parallel", emoji: "📏", fact: "Parallel lines never meet" },
  { word: "question", emoji: "❓", fact: "Kids ask about 300 questions per day" },
  { word: "robotics", emoji: "🤖", fact: "The word robot comes from Czech" },
  { word: "skeleton", emoji: "💀", fact: "Adults have 206 bones" },
  { word: "treasure", emoji: "💎", fact: "Pirate treasure maps are mostly fictional" },
  { word: "umbrella", emoji: "☂️", fact: "Umbrellas were invented 4,000 years ago" },
  { word: "volcano", emoji: "🌋", fact: "There are about 1,500 active volcanoes" },
  { word: "whisper", emoji: "🤫", fact: "Whispers can travel surprisingly far" },
  { word: "xylophone", emoji: "🎵", fact: "Xylophones originated in Southeast Asia" },
];

export const WORD_SEARCH_SETS = {
  animals: ["CAT", "DOG", "OWL", "FOX", "BAT", "RAT", "HEN", "PIG", "YAK", "EEL", "APE", "ANT"],
  space: ["STAR", "MOON", "MARS", "COMET", "ORBIT", "SOLAR", "VENUS", "PLUTO", "EARTH", "NEBULA"],
  food: ["CAKE", "RICE", "SOUP", "TACO", "CORN", "BEAN", "FISH", "PLUM", "PEAR", "LIME"],
  body: ["BONE", "LUNG", "SKIN", "HAND", "KNEE", "NOSE", "FACE", "HAIR", "BACK", "FOOT"],
  colors: ["RED", "BLUE", "GOLD", "PINK", "GREY", "JADE", "CYAN", "RUBY", "TEAL", "ROSE"],
};

/* ── Science ──────────────────────────────────────────────────────────────── */
export const SCIENCE_QUESTIONS = [
  { q: "What planet is closest to the Sun?", correct: "Mercury", wrong: ["Venus", "Mars", "Earth"], emoji: "☀️" },
  { q: "What gas do plants absorb?", correct: "CO₂", wrong: ["O₂", "N₂", "H₂"], emoji: "🌱" },
  { q: "How many planets in our solar system?", correct: "8", wrong: ["7", "9", "10"], emoji: "🪐" },
  { q: "What is the hardest natural material?", correct: "Diamond", wrong: ["Gold", "Iron", "Quartz"], emoji: "💎" },
  { q: "What organ pumps blood?", correct: "Heart", wrong: ["Lung", "Brain", "Liver"], emoji: "❤️" },
  { q: "What force keeps us on Earth?", correct: "Gravity", wrong: ["Magnetism", "Friction", "Wind"], emoji: "🌍" },
  { q: "Water boils at what °C?", correct: "100", wrong: ["90", "110", "80"], emoji: "💧" },
  { q: "What is the largest organ?", correct: "Skin", wrong: ["Liver", "Brain", "Heart"], emoji: "🧬" },
  { q: "Speed of light (km/s)?", correct: "300,000", wrong: ["150,000", "500,000", "1,000,000"], emoji: "💡" },
  { q: "How many bones in adult body?", correct: "206", wrong: ["195", "215", "300"], emoji: "🦴" },
  { q: "What planet is the Red Planet?", correct: "Mars", wrong: ["Jupiter", "Venus", "Saturn"], emoji: "🔴" },
  { q: "What element has symbol 'O'?", correct: "Oxygen", wrong: ["Osmium", "Gold", "Oganesson"], emoji: "🫧" },
  { q: "What is the powerhouse of the cell?", correct: "Mitochondria", wrong: ["Nucleus", "Ribosome", "Cytoplasm"], emoji: "🔬" },
  { q: "Light year measures what?", correct: "Distance", wrong: ["Time", "Speed", "Mass"], emoji: "⭐" },
  { q: "How many moons does Mars have?", correct: "2", wrong: ["0", "1", "4"], emoji: "🌙" },
];

export const SCIENCE_SORT = {
  categories: ["Living", "Non-Living", "Once Living"],
  items: [
    { name: "Tree", emoji: "🌳", category: "Living" },
    { name: "Dog", emoji: "🐕", category: "Living" },
    { name: "Rock", emoji: "🪨", category: "Non-Living" },
    { name: "Water", emoji: "💧", category: "Non-Living" },
    { name: "Fossil", emoji: "🦴", category: "Once Living" },
    { name: "Coal", emoji: "⚫", category: "Once Living" },
    { name: "Flower", emoji: "🌸", category: "Living" },
    { name: "Metal", emoji: "🔩", category: "Non-Living" },
    { name: "Shell", emoji: "🐚", category: "Once Living" },
    { name: "Bacteria", emoji: "🦠", category: "Living" },
    { name: "Glass", emoji: "🪟", category: "Non-Living" },
    { name: "Paper", emoji: "📄", category: "Once Living" },
  ],
};

/* ── Geography ────────────────────────────────────────────────────────────── */
export const GEO_QUESTIONS = [
  { q: "What is the longest river?", correct: "Nile", wrong: ["Amazon", "Yangtze", "Mississippi"], emoji: "🏞️" },
  { q: "Largest continent?", correct: "Asia", wrong: ["Africa", "Europe", "America"], emoji: "🌏" },
  { q: "Capital of France?", correct: "Paris", wrong: ["London", "Berlin", "Rome"], emoji: "🇫🇷" },
  { q: "Biggest ocean?", correct: "Pacific", wrong: ["Atlantic", "Indian", "Arctic"], emoji: "🌊" },
  { q: "Capital of Japan?", correct: "Tokyo", wrong: ["Osaka", "Kyoto", "Seoul"], emoji: "🗼" },
  { q: "Which country has the most people?", correct: "India", wrong: ["China", "USA", "Brazil"], emoji: "👨‍👩‍👧‍👦" },
  { q: "Tallest mountain?", correct: "Everest", wrong: ["K2", "Kilimanjaro", "Denali"], emoji: "🏔️" },
  { q: "What continent is Egypt in?", correct: "Africa", wrong: ["Asia", "Europe", "Australia"], emoji: "🏛️" },
  { q: "Capital of Australia?", correct: "Canberra", wrong: ["Sydney", "Melbourne", "Perth"], emoji: "🦘" },
  { q: "Largest desert?", correct: "Sahara", wrong: ["Gobi", "Kalahari", "Mojave"], emoji: "🏜️" },
  { q: "Amazon rainforest is in which continent?", correct: "South America", wrong: ["Africa", "Asia", "Australia"], emoji: "🌴" },
  { q: "What ocean is between USA and Europe?", correct: "Atlantic", wrong: ["Pacific", "Indian", "Arctic"], emoji: "🚢" },
];

export const GEO_LOCATIONS = [
  { id: "paris", emoji: "🗼", name: "Paris", description: "City of Light with the Eiffel Tower", fact: "Paris has 20 arrondissements" },
  { id: "tokyo", emoji: "🗻", name: "Tokyo", description: "Capital of Japan with bustling Shibuya", fact: "Tokyo's metro carries 8M people daily" },
  { id: "cairo", emoji: "🏛️", name: "Cairo", description: "Home to the Great Pyramids", fact: "The pyramids are 4,500 years old" },
  { id: "rio", emoji: "🗿", name: "Rio de Janeiro", description: "Christ the Redeemer overlooks the city", fact: "The statue is 30 meters tall" },
  { id: "london", emoji: "🎡", name: "London", description: "Big Ben and Buckingham Palace", fact: "Big Ben is actually the bell's name" },
  { id: "rome", emoji: "🏟️", name: "Rome", description: "The Eternal City with the Colosseum", fact: "Rome was founded in 753 BC" },
  { id: "new-york", emoji: "🗽", name: "New York", description: "The Big Apple with the Statue of Liberty", fact: "NYC has 8.3 million people" },
  { id: "sydney", emoji: "🦘", name: "Sydney", description: "Famous Opera House on the harbor", fact: "Sydney's Opera House opened in 1973" },
  { id: "beijing", emoji: "🏯", name: "Beijing", description: "Forbidden City and the Great Wall nearby", fact: "The Great Wall is over 13,000 miles" },
  { id: "machu-picchu", emoji: "⛰️", name: "Machu Picchu", description: "Ancient Incan city in the Andes", fact: "Built around 1450 AD" },
];

export const GEO_MISSIONS = [
  { target: "paris", clues: ["The suspect was seen near a famous iron tower", "They ordered a croissant", "The city is known as the City of Light"] },
  { target: "tokyo", clues: ["They were spotted crossing a very busy intersection", "Cherry blossoms were everywhere", "They ate sushi at Tsukiji"] },
  { target: "cairo", clues: ["They were photographed near ancient triangular structures", "The Nile River was visible", "Hieroglyphics were on the wall"] },
  { target: "rio", clues: ["A giant statue overlooked the city", "They went to Copacabana beach", "Carnival music was playing"] },
  { target: "london", clues: ["A famous clock tower was chiming", "They took a red double-decker bus", "They visited the Palace"] },
  { target: "rome", clues: ["An ancient arena was nearby", "They threw a coin in a fountain", "They ate authentic pasta"] },
  { target: "sydney", clues: ["An opera house shaped like sails was visible", "Kangaroos were nearby", "They surfed at Bondi Beach"] },
  { target: "beijing", clues: ["A forbidden palace was behind them", "They walked on a very long wall", "They ate dim sum"] },
];

/* ── History ───────────────────────────────────────────────────────────────── */
export const HISTORY_EVENTS = [
  { emoji: "🏛️", title: "Ancient Greece (democracy)", year: -500, description: "Democracy was born in Athens" },
  { emoji: "🏗️", title: "Great Wall of China begun", year: -700, description: "Construction started in 7th century BC" },
  { emoji: "📜", title: "Magna Carta signed", year: 1215, description: "Limited the power of the English king" },
  { emoji: "🧭", title: "Columbus reaches Americas", year: 1492, description: "Voyage across the Atlantic Ocean" },
  { emoji: "🎨", title: "Mona Lisa painted", year: 1503, description: "Leonardo da Vinci's masterpiece" },
  { emoji: "🔭", title: "Galileo's telescope", year: 1609, description: "First astronomical telescope" },
  { emoji: "🗽", title: "American Independence", year: 1776, description: "Declaration of Independence signed" },
  { emoji: "🚂", title: "First steam locomotive", year: 1804, description: "Richard Trevithick's invention" },
  { emoji: "💡", title: "Light bulb invented", year: 1879, description: "Thomas Edison's practical bulb" },
  { emoji: "✈️", title: "First airplane flight", year: 1903, description: "Wright Brothers at Kitty Hawk" },
  { emoji: "🌙", title: "Moon landing", year: 1969, description: "Apollo 11 - first humans on the Moon" },
  { emoji: "🌐", title: "World Wide Web", year: 1989, description: "Tim Berners-Lee invented the Web" },
  { emoji: "📱", title: "First iPhone", year: 2007, description: "Steve Jobs introduced the iPhone" },
  { emoji: "🦠", title: "COVID-19 pandemic", year: 2020, description: "Global coronavirus pandemic" },
];

export const HISTORY_QUESTIONS = [
  { q: "Who painted the Mona Lisa?", correct: "Da Vinci", wrong: ["Picasso", "Monet", "Van Gogh"], emoji: "🎨" },
  { q: "In what year did WW2 end?", correct: "1945", wrong: ["1944", "1946", "1939"], emoji: "🕊️" },
  { q: "Who was the first president of the US?", correct: "Washington", wrong: ["Lincoln", "Jefferson", "Adams"], emoji: "🇺🇸" },
  { q: "The Titanic sank in what year?", correct: "1912", wrong: ["1905", "1920", "1898"], emoji: "🚢" },
  { q: "Ancient Egyptians built what?", correct: "Pyramids", wrong: ["Colosseum", "Parthenon", "Aqueducts"], emoji: "🏛️" },
  { q: "Who discovered gravity (legend)?", correct: "Newton", wrong: ["Einstein", "Galileo", "Darwin"], emoji: "🍎" },
  { q: "The Renaissance began in?", correct: "Italy", wrong: ["France", "England", "Spain"], emoji: "🎭" },
  { q: "Who wrote Romeo and Juliet?", correct: "Shakespeare", wrong: ["Dickens", "Austen", "Twain"], emoji: "📖" },
  { q: "First human in space?", correct: "Gagarin", wrong: ["Glenn", "Armstrong", "Aldrin"], emoji: "🚀" },
  { q: "The Great Fire of London was in?", correct: "1666", wrong: ["1555", "1700", "1606"], emoji: "🔥" },
];

/* ── Chemistry ────────────────────────────────────────────────────────────── */
export const ELEMENTS = [
  { id: "H", emoji: "💧", name: "Hydrogen" }, { id: "O", emoji: "🫧", name: "Oxygen" },
  { id: "C", emoji: "⚫", name: "Carbon" },   { id: "N", emoji: "💨", name: "Nitrogen" },
  { id: "Fe", emoji: "🔩", name: "Iron" },     { id: "Au", emoji: "🥇", name: "Gold" },
  { id: "Na", emoji: "🧂", name: "Sodium" },   { id: "Cl", emoji: "🟢", name: "Chlorine" },
  { id: "He", emoji: "🎈", name: "Helium" },   { id: "Cu", emoji: "🟤", name: "Copper" },
  { id: "Ag", emoji: "⬜", name: "Silver" },    { id: "S", emoji: "🟡", name: "Sulfur" },
];

export const CHEMISTRY_RECIPES = [
  { inputs: ["H", "O"], output: "💧 Water (H₂O)", emoji: "💧" },
  { inputs: ["Na", "Cl"], output: "🧂 Salt (NaCl)", emoji: "🧂" },
  { inputs: ["C", "O"], output: "💨 CO₂ (Carbon Dioxide)", emoji: "💨" },
  { inputs: ["Fe", "O"], output: "🟫 Rust (Fe₂O₃)", emoji: "🟫" },
  { inputs: ["H", "N"], output: "🧪 Ammonia (NH₃)", emoji: "🧪" },
  { inputs: ["C", "H"], output: "🔥 Methane (CH₄)", emoji: "🔥" },
  { inputs: ["Cu", "S"], output: "🔵 Copper Sulfide", emoji: "🔵" },
  { inputs: ["Na", "O"], output: "⬜ Sodium Oxide", emoji: "⬜" },
];

export const CHEMISTRY_QUESTIONS = [
  { q: "Symbol for Gold?", correct: "Au", wrong: ["Go", "Gd", "Ag"], emoji: "🥇" },
  { q: "What is H₂O?", correct: "Water", wrong: ["Hydrogen", "Oxygen", "Helium"], emoji: "💧" },
  { q: "How many elements in periodic table?", correct: "118", wrong: ["100", "92", "130"], emoji: "⚛️" },
  { q: "What gas fills balloons that float?", correct: "Helium", wrong: ["Oxygen", "Nitrogen", "Neon"], emoji: "🎈" },
  { q: "Symbol for Iron?", correct: "Fe", wrong: ["Ir", "In", "I"], emoji: "🔩" },
  { q: "What is NaCl?", correct: "Salt", wrong: ["Sugar", "Soda", "Sand"], emoji: "🧂" },
  { q: "Atomic number of Carbon?", correct: "6", wrong: ["4", "8", "12"], emoji: "⚫" },
  { q: "What pH is pure water?", correct: "7", wrong: ["0", "5", "14"], emoji: "💧" },
];

/* ── Physics ──────────────────────────────────────────────────────────────── */
export const PHYSICS_QUESTIONS = [
  { q: "What unit measures force?", correct: "Newton", wrong: ["Joule", "Watt", "Ohm"], emoji: "💪" },
  { q: "Speed = distance ÷ ?", correct: "Time", wrong: ["Force", "Mass", "Energy"], emoji: "🏎️" },
  { q: "What does a lever amplify?", correct: "Force", wrong: ["Speed", "Light", "Heat"], emoji: "⚖️" },
  { q: "What has mass and takes up space?", correct: "Matter", wrong: ["Energy", "Light", "Sound"], emoji: "🧊" },
  { q: "Current is measured in?", correct: "Amps", wrong: ["Volts", "Watts", "Ohms"], emoji: "⚡" },
  { q: "How fast does sound travel (m/s) in air?", correct: "343", wrong: ["300", "400", "500"], emoji: "🔊" },
  { q: "A compass points to which pole?", correct: "North", wrong: ["South", "East", "West"], emoji: "🧭" },
  { q: "What type of energy is in food?", correct: "Chemical", wrong: ["Kinetic", "Nuclear", "Light"], emoji: "🍕" },
  { q: "What has no mass and travels fastest?", correct: "Light", wrong: ["Sound", "Electron", "Wind"], emoji: "💡" },
  { q: "Gravity on Moon vs Earth?", correct: "⅙ of Earth", wrong: ["½", "⅓", "Same"], emoji: "🌑" },
];

export const BRIDGE_PIECES = [
  { id: "beam", emoji: "🟫", name: "Beam", weight: 2, strength: 5 },
  { id: "cable", emoji: "🪢", name: "Cable", weight: 1, strength: 8 },
  { id: "pillar", emoji: "🏗️", name: "Pillar", weight: 3, strength: 10 },
  { id: "plank", emoji: "🪵", name: "Plank", weight: 1, strength: 3 },
  { id: "arch", emoji: "🌉", name: "Arch", weight: 4, strength: 12 },
  { id: "truss", emoji: "📐", name: "Truss", weight: 2, strength: 7 },
];

/* ── Coding ────────────────────────────────────────────────────────────────── */
export const CODE_BLOCKS = [
  { id: "move_right", emoji: "➡️", label: "Move Right", action: "move_right" },
  { id: "move_left", emoji: "⬅️", label: "Move Left", action: "move_left" },
  { id: "move_up", emoji: "⬆️", label: "Move Up", action: "move_up" },
  { id: "move_down", emoji: "⬇️", label: "Move Down", action: "move_down" },
  { id: "jump", emoji: "🦘", label: "Jump", action: "jump" },
  { id: "collect", emoji: "🎁", label: "Collect", action: "collect" },
  { id: "turn_left", emoji: "↩️", label: "Turn Left", action: "turn_left" },
  { id: "turn_right", emoji: "↪️", label: "Turn Right", action: "turn_right" },
  { id: "if_wall", emoji: "🧱", label: "If Wall", action: "if_wall" },
  { id: "repeat", emoji: "🔁", label: "Repeat", action: "repeat" },
  { id: "print", emoji: "📢", label: "Print", action: "print" },
];

export const CODE_PUZZLES = [
  { desc: "Move right twice to reach the star ⭐", solution: ["move_right", "move_right"], maxBlocks: 3 },
  { desc: "Go right, jump over the gap, go right again", solution: ["move_right", "jump", "move_right"], maxBlocks: 4 },
  { desc: "Go up, then right, then collect the gem", solution: ["move_up", "move_right", "collect"], maxBlocks: 4 },
  { desc: "Move right 3 times and collect", solution: ["move_right", "move_right", "move_right", "collect"], maxBlocks: 5 },
  { desc: "Jump, move right, jump, collect", solution: ["jump", "move_right", "jump", "collect"], maxBlocks: 5 },
  { desc: "Navigate: right, up, right, down, collect", solution: ["move_right", "move_up", "move_right", "move_down", "collect"], maxBlocks: 6 },
];

/* ── Music ─────────────────────────────────────────────────────────────────── */
export const MUSIC_NOTES = [
  { id: "C", emoji: "🎵", label: "Do", color: "bg-red-400" },
  { id: "D", emoji: "🎵", label: "Re", color: "bg-orange-400" },
  { id: "E", emoji: "🎵", label: "Mi", color: "bg-yellow-400" },
  { id: "F", emoji: "🎵", label: "Fa", color: "bg-green-400" },
  { id: "G", emoji: "🎵", label: "Sol", color: "bg-sky-400" },
  { id: "A", emoji: "🎵", label: "La", color: "bg-indigo-400" },
  { id: "B", emoji: "🎵", label: "Si", color: "bg-violet-400" },
];

export const MUSIC_QUESTIONS = [
  { q: "How many notes in an octave?", correct: "8", wrong: ["6", "7", "12"], emoji: "🎹" },
  { q: "What clef is also called treble?", correct: "G Clef", wrong: ["F Clef", "C Clef", "D Clef"], emoji: "🎼" },
  { q: "A whole note equals how many beats?", correct: "4", wrong: ["1", "2", "3"], emoji: "🎵" },
  { q: "What instrument family is a drum?", correct: "Percussion", wrong: ["String", "Wind", "Brass"], emoji: "🥁" },
  { q: "Piano has how many keys?", correct: "88", wrong: ["76", "92", "100"], emoji: "🎹" },
  { q: "What is tempo?", correct: "Speed of music", wrong: ["Volume", "Pitch", "Key"], emoji: "⏱️" },
  { q: "What instrument has 6 strings?", correct: "Guitar", wrong: ["Violin", "Harp", "Piano"], emoji: "🎸" },
  { q: "What does 'forte' mean?", correct: "Loud", wrong: ["Soft", "Fast", "Slow"], emoji: "🔊" },
];

/* ── Logic ─────────────────────────────────────────────────────────────────── */
export const LOGIC_PATTERNS = [
  { items: ["🔴", "🔵", "🔴", "🔵", "🔴"], answer: "🔵", options: ["🔴", "🔵", "🟢", "🟡"] },
  { items: ["1", "2", "4", "8", "16"], answer: "32", options: ["24", "28", "32", "36"] },
  { items: ["🌑", "🌒", "🌓", "🌔"], answer: "🌕", options: ["🌕", "🌖", "🌑", "🌘"] },
  { items: ["A", "C", "E", "G"], answer: "I", options: ["H", "I", "J", "K"] },
  { items: ["🟥", "🟧", "🟨", "🟩"], answer: "🟦", options: ["🟦", "🟥", "⬜", "🟪"] },
  { items: ["2", "6", "12", "20", "30"], answer: "42", options: ["36", "38", "40", "42"] },
  { items: ["🐱", "🐶", "🐱", "🐶", "🐱"], answer: "🐶", options: ["🐱", "🐶", "🐰", "🐻"] },
  { items: ["3", "5", "7", "11", "13"], answer: "17", options: ["15", "16", "17", "19"] },
];

/* ── Language ──────────────────────────────────────────────────────────────── */
export const LANGUAGE_WORDS = {
  spanish: [
    { word: "Gato", emoji: "🐱", translation: "Cat" },
    { word: "Perro", emoji: "🐕", translation: "Dog" },
    { word: "Casa", emoji: "🏠", translation: "House" },
    { word: "Agua", emoji: "💧", translation: "Water" },
    { word: "Sol", emoji: "☀️", translation: "Sun" },
    { word: "Luna", emoji: "🌙", translation: "Moon" },
    { word: "Libro", emoji: "📖", translation: "Book" },
    { word: "Mesa", emoji: "🪑", translation: "Table" },
    { word: "Flor", emoji: "🌸", translation: "Flower" },
    { word: "Árbol", emoji: "🌳", translation: "Tree" },
    { word: "Manzana", emoji: "🍎", translation: "Apple" },
    { word: "Estrella", emoji: "⭐", translation: "Star" },
  ],
  french: [
    { word: "Chat", emoji: "🐱", translation: "Cat" },
    { word: "Chien", emoji: "🐕", translation: "Dog" },
    { word: "Maison", emoji: "🏠", translation: "House" },
    { word: "Eau", emoji: "💧", translation: "Water" },
    { word: "Soleil", emoji: "☀️", translation: "Sun" },
    { word: "Lune", emoji: "🌙", translation: "Moon" },
    { word: "Livre", emoji: "📖", translation: "Book" },
    { word: "Table", emoji: "🪑", translation: "Table" },
    { word: "Fleur", emoji: "🌸", translation: "Flower" },
    { word: "Arbre", emoji: "🌳", translation: "Tree" },
    { word: "Pomme", emoji: "🍎", translation: "Apple" },
    { word: "Étoile", emoji: "⭐", translation: "Star" },
  ],
};

/* ── Creative ─────────────────────────────────────────────────────────────── */
export const ART_ITEMS = [
  { emoji: "🎨", label: "Palette" }, { emoji: "🖌️", label: "Brush" },
  { emoji: "✏️", label: "Pencil" }, { emoji: "🖍️", label: "Crayon" },
  { emoji: "📐", label: "Ruler" }, { emoji: "✂️", label: "Scissors" },
  { emoji: "📎", label: "Clip" }, { emoji: "🧵", label: "Thread" },
  { emoji: "🎭", label: "Drama" }, { emoji: "🎪", label: "Circus" },
  { emoji: "🎬", label: "Cinema" }, { emoji: "📷", label: "Camera" },
];

export const COLOR_PALETTE = [
  { id: "red", name: "Red", hex: "#ef4444", emoji: "🔴" },
  { id: "blue", name: "Blue", hex: "#3b82f6", emoji: "🔵" },
  { id: "green", name: "Green", hex: "#22c55e", emoji: "🟢" },
  { id: "yellow", name: "Yellow", hex: "#eab308", emoji: "🟡" },
  { id: "purple", name: "Purple", hex: "#a855f7", emoji: "🟣" },
  { id: "orange", name: "Orange", hex: "#f97316", emoji: "🟠" },
];

/* ── Gradients ────────────────────────────────────────────────────────────── */
export const GRADIENTS = [
  "from-rose-400 to-pink-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-sky-400 to-blue-500",
  "from-violet-400 to-purple-500",
  "from-fuchsia-400 to-pink-500",
  "from-lime-400 to-green-500",
  "from-cyan-400 to-sky-500",
  "from-indigo-400 to-blue-500",
  "from-red-400 to-rose-500",
  "from-yellow-400 to-amber-500",
  "from-teal-400 to-emerald-500",
] as const;

/* ── Mascots ──────────────────────────────────────────────────────────────── */
export const MASCOTS = [
  "kody", "sparkle", "nova", "ziggy", "pixel",
  "blaze", "luna", "hero", "dash", "echo",
] as const;
