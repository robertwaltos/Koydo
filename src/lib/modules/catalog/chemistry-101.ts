import type { LearningModule } from "@/lib/modules/types";

export const Chemistry101Module: LearningModule = {
  id: "chemistry-101",
  title: "Chemistry Essentials",
  description: "Learn matter, reactions, mixtures, and lab safety through guided lessons.",
  subject: "Chemistry",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Describe the three states of matter and how particles behave in each",
    "Identify the parts of an atom and read basic information from the periodic table",
    "Distinguish between elements, compounds, and mixtures",
    "Recognize signs of a chemical reaction and balance simple equations",
    "Apply lab safety rules and measurement skills"
  ],
  lessons: [
    {
      id: "chemistry-101-l01",
      title: "States of Matter",
      type: "video",
      duration: 10,
      objectives: ["Describe solids, liquids, and gases at the particle level", "Explain how temperature affects the state of matter"],
      chunks: [
        {
          id: "chemistry-101-l01-c1",
          title: "Three States of Matter",
          kind: "intro",
          content: "Matter is anything that has mass and takes up space. It exists in three common states: solid, liquid, and gas. The state depends on how much energy the particles have and how strongly they attract each other."
        },
        {
          id: "chemistry-101-l01-c2",
          title: "Particle Behavior",
          kind: "concept",
          content: "In a solid, particles are tightly packed in a fixed arrangement and vibrate in place — solids have a definite shape and volume. In a liquid, particles are close but can slide past each other — liquids have a definite volume but take the shape of their container. In a gas, particles move freely and spread out — gases have no definite shape or volume."
        },
        {
          id: "chemistry-101-l01-c3",
          title: "Changing States",
          kind: "concept",
          content: "Adding heat energy makes particles move faster. Melting: solid → liquid (e.g., ice at 0°C becomes water). Evaporation/boiling: liquid → gas (water at 100°C becomes steam). Removing heat reverses it: condensation (gas → liquid) and freezing (liquid → solid). These are physical changes — the substance stays the same."
        },
        {
          id: "chemistry-101-l01-c4",
          title: "Try It Yourself",
          kind: "practice",
          content: "Draw three boxes showing particle arrangement in a solid, liquid, and gas. Label each with the key properties (shape, volume, particle movement). Then explain what happens to water particles as an ice cube melts in your hand."
        }
      ],
      flashcards: [
        { id: "chemistry-101-l01-f1", front: "How do particles behave in a solid?", back: "Tightly packed in a fixed pattern, vibrating in place. Definite shape and definite volume." },
        { id: "chemistry-101-l01-f2", front: "What is the difference between evaporation and boiling?", back: "Both are liquid → gas. Evaporation happens at the surface at any temperature. Boiling happens throughout the liquid at the boiling point." },
        { id: "chemistry-101-l01-f3", front: "What is condensation?", back: "Gas → liquid. Happens when gas particles lose energy and slow down enough for attractions to pull them together (e.g., water droplets on a cold glass)." },
        { id: "chemistry-101-l01-f4", front: "Are state changes physical or chemical?", back: "Physical changes. The substance does not change identity — water is still H₂O whether it is ice, liquid water, or steam." }
      ],
      learningAids: [
        { id: "chemistry-101-l01-a1", type: "image", title: "Particle Model Diagram", content: "Three panels showing particle arrangement in solid (ordered grid), liquid (close but disordered), and gas (spread apart, fast-moving)." },
        { id: "chemistry-101-l01-a2", type: "animation", title: "Heating Ice to Steam", content: "Animation showing ice particles vibrating, then melting into flowing liquid particles, then boiling into fast-moving gas particles." }
      ]
    },
    {
      id: "chemistry-101-l02",
      title: "Atoms and Molecules",
      type: "interactive",
      duration: 12,
      objectives: ["Identify protons, neutrons, and electrons in an atom", "Explain how atoms combine to form molecules"],
      interactiveActivities: [
        {
          id: "chemistry-101-l02-ia1",
          type: "sorting_buckets",
          title: "Parts of an Atom",
          description: "Sort each description to the correct subatomic particle.",
          estimatedMinutes: 8,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "proton", label: "Proton" },
              { id: "neutron", label: "Neutron" },
              { id: "electron", label: "Electron" }
            ],
            items: [
              { id: "i1", label: "Positive charge (+)", correctBucketId: "proton" },
              { id: "i2", label: "No charge (neutral)", correctBucketId: "neutron" },
              { id: "i3", label: "Negative charge (−)", correctBucketId: "electron" },
              { id: "i4", label: "Found in the nucleus", correctBucketId: "proton" },
              { id: "i5", label: "Orbits the nucleus in energy levels", correctBucketId: "electron" },
              { id: "i6", label: "Adds mass but no charge to the nucleus", correctBucketId: "neutron" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "chemistry-101-l02-c1",
          title: "Inside the Atom",
          kind: "concept",
          content: "An atom is the smallest unit of an element that keeps its chemical identity. The nucleus at the center contains protons (positive charge) and neutrons (no charge). Electrons (negative charge) orbit the nucleus in energy levels called shells. The number of protons defines the element — hydrogen has 1, carbon has 6, oxygen has 8."
        },
        {
          id: "chemistry-101-l02-c2",
          title: "Atoms to Molecules",
          kind: "concept",
          content: "Atoms bond together to form molecules. A water molecule (H₂O) is two hydrogen atoms bonded to one oxygen atom. The subscript number tells you how many of each atom. Molecules can be elements (O₂ — two oxygen atoms) or compounds (CO₂ — one carbon + two oxygens)."
        }
      ],
      learningAids: [
        { id: "chemistry-101-l02-a1", type: "practice", title: "Atom Builder", content: "Build a carbon atom: place 6 protons and 6 neutrons in the nucleus, and arrange 6 electrons in shells (2 in the first shell, 4 in the second)." }
      ]
    },
    {
      id: "chemistry-101-l03",
      title: "Checkpoint: Matter Basics",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "chemistry-101-l03-q1",
          text: "Which state of matter has a definite volume but no definite shape?",
          skillId: "chemistry-101-skill-states",
          options: [
            { id: "a", text: "Solid" },
            { id: "b", text: "Liquid" },
            { id: "c", text: "Gas" },
            { id: "d", text: "Plasma" }
          ],
          correctOptionId: "b",
          explanation: "Liquids have a definite volume (fixed amount of space) but take the shape of their container because particles can slide past each other."
        },
        {
          id: "chemistry-101-l03-q2",
          text: "What determines which element an atom is?",
          skillId: "chemistry-101-skill-atoms",
          options: [
            { id: "a", text: "The number of neutrons" },
            { id: "b", text: "The number of electrons" },
            { id: "c", text: "The number of protons" },
            { id: "d", text: "The total mass" }
          ],
          correctOptionId: "c",
          explanation: "The atomic number (number of protons) defines the element. Carbon always has 6 protons; change that number and it becomes a different element."
        },
        {
          id: "chemistry-101-l03-q3",
          text: "What happens to particles when a solid melts into a liquid?",
          skillId: "chemistry-101-skill-states",
          options: [
            { id: "a", text: "Particles stop moving entirely" },
            { id: "b", text: "Particles gain energy and begin to slide past each other" },
            { id: "c", text: "Particles spread far apart and fly freely" },
            { id: "d", text: "Particles shrink in size" }
          ],
          correctOptionId: "b",
          explanation: "When a solid melts, particles gain enough energy to overcome their fixed positions and begin sliding past each other, becoming a liquid."
        },
        {
          id: "chemistry-101-l03-q4",
          text: "How many atoms are in one molecule of CO₂?",
          skillId: "chemistry-101-skill-atoms",
          options: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "1" }
          ],
          correctOptionId: "b",
          explanation: "CO₂ = 1 carbon atom + 2 oxygen atoms = 3 atoms total. The subscript 2 applies only to oxygen."
        }
      ],
      interactiveActivities: [
        {
          id: "chemistry-101-l03-ia1",
          type: "matching_pairs",
          title: "State Change Names",
          description: "Match each state change to its correct name.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Solid → Liquid" },
              { id: "l2", label: "Liquid → Gas" },
              { id: "l3", label: "Gas → Liquid" },
              { id: "l4", label: "Liquid → Solid" }
            ],
            right: [
              { id: "r1", label: "Melting" },
              { id: "r2", label: "Evaporation / Boiling" },
              { id: "r3", label: "Condensation" },
              { id: "r4", label: "Freezing" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "chemistry-101-l03-a1", type: "mnemonic", title: "State Change Memory", content: "Heat adds energy: Melt → Evaporate (solid→liquid→gas). Cold removes energy: Condense → Freeze (gas→liquid→solid)." }
      ]
    },
    {
      id: "chemistry-101-l04",
      title: "The Periodic Table",
      type: "video",
      duration: 11,
      objectives: ["Read an element's atomic number, symbol, and atomic mass from the periodic table", "Explain how elements are organized into groups and periods"],
      chunks: [
        {
          id: "chemistry-101-l04-c1",
          title: "Organizing the Elements",
          kind: "intro",
          content: "The periodic table arranges all known elements by atomic number (number of protons). Rows are called periods and columns are called groups. Elements in the same group share similar chemical properties because they have the same number of outer electrons."
        },
        {
          id: "chemistry-101-l04-c2",
          title: "Reading an Element Tile",
          kind: "concept",
          content: "Each tile shows: atomic number (top, e.g., 6), chemical symbol (center, e.g., C for carbon), element name, and atomic mass (bottom, e.g., 12.01). The atomic number equals the number of protons. The atomic mass is roughly protons + neutrons."
        },
        {
          id: "chemistry-101-l04-c3",
          title: "Metals, Nonmetals, and Metalloids",
          kind: "concept",
          content: "Most elements are metals (left and center) — shiny, conduct heat and electricity, malleable. Nonmetals (upper right) — dull, poor conductors, brittle as solids. Metalloids (along the staircase line) — have properties of both. This classification helps predict how elements behave."
        },
        {
          id: "chemistry-101-l04-c4",
          title: "Famous Groups",
          kind: "example",
          content: "Group 1 (Alkali Metals): Li, Na, K — very reactive, soft metals. Group 17 (Halogens): F, Cl, Br — reactive nonmetals. Group 18 (Noble Gases): He, Ne, Ar — unreactive because their outer shell is full. Knowing the group tells you a lot about an element's behavior."
        }
      ],
      flashcards: [
        { id: "chemistry-101-l04-f1", front: "What does the atomic number tell you?", back: "The number of protons in an atom's nucleus. It also equals the number of electrons in a neutral atom." },
        { id: "chemistry-101-l04-f2", front: "Why are elements in the same group similar?", back: "They have the same number of valence (outer) electrons, which determines chemical properties and reactivity." },
        { id: "chemistry-101-l04-f3", front: "What are the three categories of elements?", back: "Metals (conduct, malleable, shiny), Nonmetals (poor conductors, brittle), and Metalloids (properties of both)." },
        { id: "chemistry-101-l04-f4", front: "Why are noble gases unreactive?", back: "Their outer electron shell is full, so they don't need to gain, lose, or share electrons. They are very stable." }
      ],
      learningAids: [
        { id: "chemistry-101-l04-a1", type: "image", title: "Periodic Table Map", content: "Color-coded periodic table highlighting metals (blue), nonmetals (orange), metalloids (green), with element tile anatomy callout." }
      ]
    },
    {
      id: "chemistry-101-l05",
      title: "Elements, Compounds, and Mixtures",
      type: "interactive",
      duration: 13,
      objectives: ["Distinguish between elements, compounds, and mixtures", "Classify common substances"],
      interactiveActivities: [
        {
          id: "chemistry-101-l05-ia1",
          type: "sorting_buckets",
          title: "Classify the Substance",
          description: "Sort each substance as an element, compound, or mixture.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "element", label: "Element (one type of atom)" },
              { id: "compound", label: "Compound (atoms chemically bonded)" },
              { id: "mixture", label: "Mixture (physically combined)" }
            ],
            items: [
              { id: "i1", label: "Pure gold (Au)", correctBucketId: "element" },
              { id: "i2", label: "Water (H₂O)", correctBucketId: "compound" },
              { id: "i3", label: "Salt water", correctBucketId: "mixture" },
              { id: "i4", label: "Carbon dioxide (CO₂)", correctBucketId: "compound" },
              { id: "i5", label: "Trail mix (nuts, raisins, chocolate)", correctBucketId: "mixture" },
              { id: "i6", label: "Oxygen gas (O₂)", correctBucketId: "element" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "chemistry-101-l05-c1",
          title: "Three Types of Substances",
          kind: "concept",
          content: "An element is made of only one type of atom (gold, oxygen). A compound is two or more different elements chemically bonded in a fixed ratio (water is always H₂O). A mixture is two or more substances physically combined — not chemically bonded — so they can be separated by physical means (filtering, evaporating)."
        },
        {
          id: "chemistry-101-l05-c2",
          title: "Separating Mixtures",
          kind: "example",
          content: "Filtration separates solids from liquids (sand from water). Evaporation separates dissolved solids from liquids (salt from salt water). Distillation separates liquids with different boiling points. Magnetism separates magnetic materials (iron filings from sand). The method depends on the physical properties of the components."
        }
      ],
      learningAids: [
        { id: "chemistry-101-l05-a1", type: "animation", title: "Separating Salt Water", content: "Animation showing evaporation: salt water heated, water evaporates as steam, salt crystals remain in the dish." }
      ]
    },
    {
      id: "chemistry-101-l06",
      title: "Checkpoint: Reaction Evidence",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "chemistry-101-l06-q1",
          text: "Which is a compound?",
          skillId: "chemistry-101-skill-classification",
          options: [
            { id: "a", text: "Pure iron (Fe)" },
            { id: "b", text: "Table salt (NaCl)" },
            { id: "c", text: "Air" },
            { id: "d", text: "Trail mix" }
          ],
          correctOptionId: "b",
          explanation: "NaCl (sodium chloride) is a compound — two different elements (Na and Cl) chemically bonded in a fixed ratio. Iron is an element. Air and trail mix are mixtures."
        },
        {
          id: "chemistry-101-l06-q2",
          text: "What separation method would you use to get sand out of water?",
          skillId: "chemistry-101-skill-mixtures",
          options: [
            { id: "a", text: "Evaporation" },
            { id: "b", text: "Magnetism" },
            { id: "c", text: "Filtration" },
            { id: "d", text: "Distillation" }
          ],
          correctOptionId: "c",
          explanation: "Filtration: pour the mixture through a filter. Sand particles are too large to pass through, while water flows through."
        },
        {
          id: "chemistry-101-l06-q3",
          text: "Element X has 11 protons. It is in Group 1 of the periodic table. Which describes it best?",
          skillId: "chemistry-101-skill-periodic-table",
          options: [
            { id: "a", text: "A noble gas — unreactive" },
            { id: "b", text: "A halogen — reactive nonmetal" },
            { id: "c", text: "An alkali metal — very reactive" },
            { id: "d", text: "A metalloid — mixed properties" }
          ],
          correctOptionId: "c",
          explanation: "Group 1 elements are alkali metals. Element 11 is sodium (Na) — a soft, very reactive metal."
        },
        {
          id: "chemistry-101-l06-q4",
          text: "Why can a mixture be separated by physical means but a compound cannot?",
          skillId: "chemistry-101-skill-classification",
          options: [
            { id: "a", text: "Mixtures are always liquid" },
            { id: "b", text: "Mixture components are only physically combined, not chemically bonded" },
            { id: "c", text: "Compounds are always gases" },
            { id: "d", text: "There is no difference between them" }
          ],
          correctOptionId: "b",
          explanation: "In a mixture, substances keep their own properties and are not chemically bonded, so physical methods (filtering, evaporating) can separate them. Compounds require chemical reactions to break apart."
        }
      ],
      interactiveActivities: [
        {
          id: "chemistry-101-l06-ia1",
          type: "matching_pairs",
          title: "Separation Method Match",
          description: "Match each mixture to the best separation technique.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Iron filings mixed with sand" },
              { id: "l2", label: "Salt dissolved in water" },
              { id: "l3", label: "Oil floating on water" }
            ],
            right: [
              { id: "r1", label: "Use a magnet (magnetism)" },
              { id: "r2", label: "Heat to evaporate the water (evaporation)" },
              { id: "r3", label: "Pour off the top layer (decanting)" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "chemistry-101-l06-a1", type: "mnemonic", title: "Element vs Compound vs Mixture", content: "Element = one type of atom. Compound = different atoms bonded (fixed formula). Mixture = combined but not bonded (variable proportions)." }
      ]
    },
    {
      id: "chemistry-101-l07",
      title: "Chemical Reactions",
      type: "video",
      duration: 12,
      objectives: ["Identify signs of a chemical reaction", "Understand reactants, products, and conservation of mass"],
      chunks: [
        {
          id: "chemistry-101-l07-c1",
          title: "What Is a Chemical Reaction?",
          kind: "intro",
          content: "A chemical reaction occurs when substances (reactants) interact to form new substances (products) with different properties. Unlike physical changes (melting, dissolving), chemical changes create entirely new substances. The atoms rearrange but are never created or destroyed."
        },
        {
          id: "chemistry-101-l07-c2",
          title: "Signs of a Chemical Reaction",
          kind: "concept",
          content: "Five clues a reaction has occurred: 1) Color change (iron rusting turns orange). 2) Gas production (bubbles/fizzing). 3) Temperature change (exothermic = releases heat, endothermic = absorbs heat). 4) Precipitate forms (a solid appears in a liquid). 5) Light or sound produced."
        },
        {
          id: "chemistry-101-l07-c3",
          title: "Conservation of Mass",
          kind: "concept",
          content: "In a chemical reaction, the total mass of reactants equals the total mass of products. Atoms are rearranged, not created or destroyed. If 10g of reactants go in, 10g of products come out. This is the Law of Conservation of Mass, and it is why we balance chemical equations."
        },
        {
          id: "chemistry-101-l07-c4",
          title: "Reading a Chemical Equation",
          kind: "example",
          content: "2H₂ + O₂ → 2H₂O means: 2 molecules of hydrogen gas react with 1 molecule of oxygen gas to produce 2 molecules of water. The arrow means 'yields' or 'produces.' Coefficients (the big numbers) tell you how many molecules. The equation is balanced: 4 H atoms and 2 O atoms on each side."
        }
      ],
      flashcards: [
        { id: "chemistry-101-l07-f1", front: "What are the five signs of a chemical reaction?", back: "Color change, gas production (bubbles), temperature change, precipitate (solid) forms, light or sound produced." },
        { id: "chemistry-101-l07-f2", front: "What is the Law of Conservation of Mass?", back: "In a chemical reaction, mass is neither created nor destroyed. Total mass of reactants = total mass of products." },
        { id: "chemistry-101-l07-f3", front: "What is the difference between reactants and products?", back: "Reactants are the starting substances (left side of the arrow). Products are the new substances formed (right side of the arrow)." },
        { id: "chemistry-101-l07-f4", front: "What does a balanced equation mean?", back: "The same number of each type of atom appears on both sides of the equation. Atoms are rearranged but not lost." }
      ],
      learningAids: [
        { id: "chemistry-101-l07-a1", type: "practice", title: "Reaction Spotting", content: "For each scenario, identify if a chemical reaction occurred and which sign(s) you observed: 1) Baking soda + vinegar → fizzing. 2) Ice melting in the sun. 3) A nail left outside turns reddish-brown." }
      ]
    },
    {
      id: "chemistry-101-l08",
      title: "Lab Safety and Measurement",
      type: "interactive",
      duration: 10,
      objectives: ["Identify key lab safety rules and equipment", "Make accurate measurements using appropriate tools"],
      interactiveActivities: [
        {
          id: "chemistry-101-l08-ia1",
          type: "matching_pairs",
          title: "Safety Equipment Match",
          description: "Match each piece of lab equipment to what it protects.",
          estimatedMinutes: 7,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Safety goggles" },
              { id: "l2", label: "Lab coat or apron" },
              { id: "l3", label: "Fume hood" }
            ],
            right: [
              { id: "r1", label: "Protects eyes from splashes and fumes" },
              { id: "r2", label: "Protects skin and clothing from spills" },
              { id: "r3", label: "Ventilates harmful gases away from the user" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "chemistry-101-l08-c1",
          title: "Essential Lab Safety Rules",
          kind: "concept",
          content: "Always wear safety goggles when working with chemicals. Never eat or drink in the lab. Read all instructions before starting. Know the location of the fire extinguisher, eyewash station, and emergency exit. Report spills and broken glass immediately. These rules exist because chemicals can be hazardous — safety first."
        }
      ],
      learningAids: [
        { id: "chemistry-101-l08-a1", type: "mnemonic", title: "SAFE in the Lab", content: "Safety goggles on, Ask before you touch, Follow all instructions, Exit plan known." }
      ]
    },
    {
      id: "chemistry-101-l09",
      title: "Review: Chemistry Concepts",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "chemistry-101-l09-q1",
          text: "Baking soda and vinegar react to produce bubbles. Which sign of a chemical reaction is this?",
          skillId: "chemistry-101-skill-reactions",
          options: [
            { id: "a", text: "Color change" },
            { id: "b", text: "Gas production" },
            { id: "c", text: "Precipitate formation" },
            { id: "d", text: "Light production" }
          ],
          correctOptionId: "b",
          explanation: "Bubbles indicate gas production — one of the five signs of a chemical reaction. The gas produced is carbon dioxide (CO₂)."
        },
        {
          id: "chemistry-101-l09-q2",
          text: "In the equation 2H₂ + O₂ → 2H₂O, how many oxygen atoms are on each side?",
          skillId: "chemistry-101-skill-reactions",
          options: [
            { id: "a", text: "1 on each side" },
            { id: "b", text: "2 on each side" },
            { id: "c", text: "2 on the left, 1 on the right" },
            { id: "d", text: "4 on each side" }
          ],
          correctOptionId: "b",
          explanation: "Left: O₂ = 2 oxygen atoms. Right: 2H₂O = 2 × 1 = 2 oxygen atoms. Balanced: 2 on each side."
        },
        {
          id: "chemistry-101-l09-q3",
          text: "Which piece of lab equipment should you always wear when handling chemicals?",
          skillId: "chemistry-101-skill-safety",
          options: [
            { id: "a", text: "Headphones" },
            { id: "b", text: "Safety goggles" },
            { id: "c", text: "Gloves only" },
            { id: "d", text: "A hat" }
          ],
          correctOptionId: "b",
          explanation: "Safety goggles protect your eyes from chemical splashes and fumes. They are required whenever working with chemicals."
        },
        {
          id: "chemistry-101-l09-q4",
          text: "An atom has 8 protons, 8 neutrons, and 8 electrons. Which element is it?",
          skillId: "chemistry-101-skill-atoms",
          options: [
            { id: "a", text: "Carbon (C)" },
            { id: "b", text: "Nitrogen (N)" },
            { id: "c", text: "Oxygen (O)" },
            { id: "d", text: "Neon (Ne)" }
          ],
          correctOptionId: "c",
          explanation: "The element is determined by the number of protons (atomic number). 8 protons = oxygen (O)."
        }
      ],
      interactiveActivities: [
        {
          id: "chemistry-101-l09-ia1",
          type: "drag_and_drop",
          title: "Chemical vs Physical Change",
          description: "Place each example under the correct category.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            targets: [
              { id: "chemical", label: "Chemical Change" },
              { id: "physical", label: "Physical Change" }
            ],
            draggables: [
              { id: "d1", label: "Burning wood", correctTargetId: "chemical" },
              { id: "d2", label: "Melting ice", correctTargetId: "physical" },
              { id: "d3", label: "Rusting iron", correctTargetId: "chemical" },
              { id: "d4", label: "Dissolving sugar in water", correctTargetId: "physical" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "chemistry-101-l09-a1", type: "mnemonic", title: "Chemical vs Physical", content: "Chemical = new substance formed (can't easily undo). Physical = same substance, different form (can usually undo)." }
      ]
    },
    {
      id: "chemistry-101-l10",
      title: "Mastery: Chemistry",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "chemistry-101-l10-q1",
          text: "If 50g of reactants enter a sealed container and a reaction occurs, how much product is formed?",
          skillId: "chemistry-101-skill-reactions",
          options: [
            { id: "a", text: "Less than 50g" },
            { id: "b", text: "Exactly 50g" },
            { id: "c", text: "More than 50g" },
            { id: "d", text: "It depends on the reaction" }
          ],
          correctOptionId: "b",
          explanation: "Law of Conservation of Mass: mass is neither created nor destroyed. 50g of reactants → 50g of products."
        },
        {
          id: "chemistry-101-l10-q2",
          text: "Why are alkali metals (Group 1) so reactive?",
          skillId: "chemistry-101-skill-periodic-table",
          options: [
            { id: "a", text: "They have a full outer shell" },
            { id: "b", text: "They have one electron in their outer shell that is easily lost" },
            { id: "c", text: "They are very heavy" },
            { id: "d", text: "They are nonmetals" }
          ],
          correctOptionId: "b",
          explanation: "Alkali metals have one valence electron that is easily lost, making them very reactive as they readily form bonds with other elements."
        },
        {
          id: "chemistry-101-l10-q3",
          text: "You heat a liquid until it boils, then cool the steam. What process does the steam undergo?",
          skillId: "chemistry-101-skill-states",
          options: [
            { id: "a", text: "Melting" },
            { id: "b", text: "Freezing" },
            { id: "c", text: "Condensation" },
            { id: "d", text: "Evaporation" }
          ],
          correctOptionId: "c",
          explanation: "Steam (gas) cooling down → liquid. Gas → liquid is condensation."
        },
        {
          id: "chemistry-101-l10-q4",
          text: "Which is NOT a mixture?",
          skillId: "chemistry-101-skill-classification",
          options: [
            { id: "a", text: "Salad" },
            { id: "b", text: "Salt water" },
            { id: "c", text: "Pure water (H₂O)" },
            { id: "d", text: "Air" }
          ],
          correctOptionId: "c",
          explanation: "Pure water (H₂O) is a compound — hydrogen and oxygen are chemically bonded. Salad, salt water, and air are all mixtures."
        }
      ],
      interactiveActivities: [
        {
          id: "chemistry-101-l10-ia1",
          type: "sorting_buckets",
          title: "Metal, Nonmetal, or Metalloid?",
          description: "Classify each element.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "metal", label: "Metal" },
              { id: "nonmetal", label: "Nonmetal" },
              { id: "metalloid", label: "Metalloid" }
            ],
            items: [
              { id: "i1", label: "Iron (Fe)", correctBucketId: "metal" },
              { id: "i2", label: "Oxygen (O)", correctBucketId: "nonmetal" },
              { id: "i3", label: "Silicon (Si)", correctBucketId: "metalloid" },
              { id: "i4", label: "Gold (Au)", correctBucketId: "metal" },
              { id: "i5", label: "Carbon (C)", correctBucketId: "nonmetal" },
              { id: "i6", label: "Boron (B)", correctBucketId: "metalloid" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 0, medium: 2, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "chemistry-101-l10-a1", type: "mnemonic", title: "Conservation Law", content: "Atoms in = Atoms out. Nothing appears or vanishes — they just rearrange." }
      ]
    },
    {
      id: "chemistry-101-l11",
      title: "Applied Chemistry Challenge Studio",
      type: "interactive",
      duration: 14,
      objectives: ["Apply classification and reaction concepts to real-world scenarios", "Predict products and identify reaction types"],
      interactiveActivities: [
        {
          id: "chemistry-101-l11-ia1",
          type: "sorting_buckets",
          title: "Reaction Sign Spotter",
          description: "Sort each observation into the correct sign of a chemical reaction.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "color", label: "Color Change" },
              { id: "gas", label: "Gas Production" },
              { id: "temp", label: "Temperature Change" },
              { id: "precipitate", label: "Precipitate Formed" }
            ],
            items: [
              { id: "i1", label: "A shiny nail turns reddish-brown over weeks", correctBucketId: "color" },
              { id: "i2", label: "Fizzing when antacid tablet is dropped in water", correctBucketId: "gas" },
              { id: "i3", label: "The beaker feels warm after mixing two solutions", correctBucketId: "temp" },
              { id: "i4", label: "A white solid appears when two clear liquids are mixed", correctBucketId: "precipitate" },
              { id: "i5", label: "Bread dough rises as yeast produces bubbles", correctBucketId: "gas" },
              { id: "i6", label: "A banana peel turns brown over time", correctBucketId: "color" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "chemistry-101-l11-c1",
          title: "Chemistry in the Kitchen",
          kind: "concept",
          content: "Cooking is full of chemistry. Baking uses chemical reactions (baking soda + acid → CO₂ gas makes the cake rise). Caramelizing sugar is a chemical change (brown color, new flavor). Dissolving salt in water is a physical change (salt can be recovered by evaporation). Recognizing these helps you understand chemistry everywhere."
        }
      ],
      learningAids: [
        { id: "chemistry-101-l11-a1", type: "practice", title: "Kitchen Chemistry", content: "List three things that happen in your kitchen. For each, decide if it is a physical or chemical change and explain your reasoning using the five signs." }
      ]
    },
    {
      id: "chemistry-101-l12",
      title: "Chemistry Mastery Applied Retest",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "chemistry-101-l12-q1",
          text: "Cooking an egg is a chemical change because:",
          skillId: "chemistry-101-skill-reactions",
          options: [
            { id: "a", text: "The egg changes shape" },
            { id: "b", text: "The proteins form new bonds and the change cannot be reversed" },
            { id: "c", text: "The egg gets bigger" },
            { id: "d", text: "Heat is applied" }
          ],
          correctOptionId: "b",
          explanation: "Cooking permanently changes the egg's proteins — new chemical bonds form. You cannot un-cook an egg, confirming it is a chemical change."
        },
        {
          id: "chemistry-101-l12-q2",
          text: "Element Y is in Period 2, Group 18. What can you predict about it?",
          skillId: "chemistry-101-skill-periodic-table",
          options: [
            { id: "a", text: "It is a very reactive metal" },
            { id: "b", text: "It is a noble gas — stable and unreactive" },
            { id: "c", text: "It is a halogen" },
            { id: "d", text: "It is a metalloid" }
          ],
          correctOptionId: "b",
          explanation: "Group 18 = noble gases (full outer shell, very stable). Period 2, Group 18 = Neon (Ne)."
        },
        {
          id: "chemistry-101-l12-q3",
          text: "You mix two clear solutions and a yellow solid appears at the bottom. This yellow solid is called a:",
          skillId: "chemistry-101-skill-reactions",
          options: [
            { id: "a", text: "Solute" },
            { id: "b", text: "Precipitate" },
            { id: "c", text: "Catalyst" },
            { id: "d", text: "Solvent" }
          ],
          correctOptionId: "b",
          explanation: "A precipitate is a solid that forms from a reaction between two solutions. Its appearance is one of the five signs of a chemical reaction."
        },
        {
          id: "chemistry-101-l12-q4",
          text: "Which correctly shows a balanced chemical equation?",
          skillId: "chemistry-101-skill-reactions",
          options: [
            { id: "a", text: "H₂ + O₂ → H₂O" },
            { id: "b", text: "2H₂ + O₂ → 2H₂O" },
            { id: "c", text: "H₂ + O₂ → 2H₂O" },
            { id: "d", text: "2H₂ + 2O₂ → 2H₂O" }
          ],
          correctOptionId: "b",
          explanation: "Balanced: Left has 4 H and 2 O. Right has 4 H and 2 O. Option A has 2 H and 2 O left but 2 H and 1 O right — unbalanced."
        }
      ],
      interactiveActivities: [
        {
          id: "chemistry-101-l12-ia1",
          type: "matching_pairs",
          title: "Vocabulary Precision",
          description: "Match each chemistry term to its correct definition.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Reactant" },
              { id: "l2", label: "Product" },
              { id: "l3", label: "Coefficient" }
            ],
            right: [
              { id: "r1", label: "A starting substance in a chemical reaction" },
              { id: "r2", label: "A new substance formed by a chemical reaction" },
              { id: "r3", label: "The number before a formula showing how many molecules" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 0, medium: 2, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "chemistry-101-l12-a1", type: "mnemonic", title: "Equation Balancing", content: "Count atoms on each side. Adjust coefficients (never subscripts!) until both sides match. Check your work." }
      ]
    },
    {
      id: "chemistry-101-l13",
      title: "Chemistry Scenario Lab",
      type: "video",
      duration: 12,
      objectives: ["Apply chemistry knowledge to a real-world water purification scenario", "Connect multiple chemistry concepts to solve a practical problem"],
      chunks: [
        {
          id: "chemistry-101-l13-c1",
          title: "Clean Water Challenge",
          kind: "intro",
          content: "Imagine you need to make muddy river water safe to drink. This problem uses chemistry at every step: separating mixtures, understanding dissolved vs suspended particles, and using chemical treatment. Let's walk through a water treatment process."
        },
        {
          id: "chemistry-101-l13-c2",
          title: "Step 1: Filtration",
          kind: "example",
          content: "First, pass the water through layers of sand and gravel. This physical separation removes large particles (dirt, debris) but does not remove dissolved substances or bacteria. The water looks clearer but is not yet safe."
        },
        {
          id: "chemistry-101-l13-c3",
          title: "Step 2: Chemical Treatment",
          kind: "example",
          content: "Add a small amount of chlorine (a chemical treatment). Chlorine reacts with harmful bacteria and viruses, destroying them. This is a chemical reaction — new substances form and the pathogens are neutralized. Too much chlorine is harmful, so precise measurement matters."
        },
        {
          id: "chemistry-101-l13-c4",
          title: "Chemistry Connections",
          kind: "practice",
          content: "Which concepts from this module did we use? Mixtures and separation (filtration). Chemical reactions (chlorine killing bacteria). States of matter (water as a liquid solvent). The periodic table (chlorine is a Group 17 halogen). Real problems bring all the chemistry together."
        }
      ],
      flashcards: [
        { id: "chemistry-101-l13-f1", front: "Why can't filtration alone make water safe?", back: "Filtration removes large particles but not dissolved chemicals, bacteria, or viruses. Chemical treatment is needed for those." },
        { id: "chemistry-101-l13-f2", front: "How does chlorine purify water?", back: "Chlorine reacts with and destroys bacteria and viruses — a chemical reaction that makes the water safe to drink." },
        { id: "chemistry-101-l13-f3", front: "Why is measurement important in chemical treatment?", back: "Too little may not kill all pathogens; too much can be toxic. Precise measurement ensures safety and effectiveness." },
        { id: "chemistry-101-l13-f4", front: "Is adding chlorine to water a physical or chemical change?", back: "Chemical change — chlorine reacts with organisms in the water, forming new substances and destroying the pathogens." }
      ],
      learningAids: [
        { id: "chemistry-101-l13-a1", type: "image", title: "Water Treatment Steps", content: "Diagram showing four stages: source water → filtration (sand/gravel) → chemical treatment (chlorine) → clean water, with chemistry concepts labeled at each step." },
        { id: "chemistry-101-l13-a2", type: "practice", title: "Design Your Own Filter", content: "If you had muddy water, gravel, sand, cotton cloth, and a plastic bottle, how would you build a filter? Draw your design and explain which particles each layer removes." }
      ]
    },
    {
      id: "chemistry-101-l14",
      title: "Chemistry Coaching Clinic",
      type: "interactive",
      duration: 13,
      objectives: ["Identify and correct common chemistry misconceptions", "Apply targeted review strategies"],
      interactiveActivities: [
        {
          id: "chemistry-101-l14-ia1",
          type: "matching_pairs",
          title: "Misconception Buster",
          description: "Match each misconception to the correct scientific understanding.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Misconception: Dissolving sugar is a chemical reaction" },
              { id: "l2", label: "Misconception: Atoms are destroyed when wood burns" },
              { id: "l3", label: "Misconception: Gas has no mass because you can't feel it" },
              { id: "l4", label: "Misconception: All metals are solid at room temperature" }
            ],
            right: [
              { id: "r1", label: "Dissolving is a physical change — the sugar can be recovered by evaporation" },
              { id: "r2", label: "Atoms rearrange into new molecules (CO₂, H₂O) but are never destroyed" },
              { id: "r3", label: "Gas has mass — a balloon filled with air weighs more than an empty one" },
              { id: "r4", label: "Mercury (Hg) is a metal that is liquid at room temperature" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "chemistry-101-l14-c1",
          title: "Common Chemistry Mistakes",
          kind: "recap",
          content: "Frequent errors: 1) Confusing physical and chemical changes (dissolving vs reacting). 2) Thinking atoms are destroyed in reactions. 3) Forgetting that gases have mass. 4) Mixing up atoms, molecules, elements, and compounds. 5) Thinking the periodic table rows and columns are the same. Review by asking: 'Can I explain this in my own words?'"
        }
      ],
      learningAids: [
        { id: "chemistry-101-l14-a1", type: "mnemonic", title: "Physical vs Chemical Test", content: "Ask: 'Is a new substance formed?' Yes = chemical. No = physical. Can I undo it easily? If yes, probably physical." }
      ]
    },
    {
      id: "chemistry-101-l15",
      title: "Chemistry Mastery Sprint",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "chemistry-101-l15-q1",
          text: "A student heats a white powder and it turns black, releases a gas, and cannot be turned back into the white powder. This is:",
          skillId: "chemistry-101-skill-reactions",
          options: [
            { id: "a", text: "A physical change" },
            { id: "b", text: "A state change" },
            { id: "c", text: "A chemical change" },
            { id: "d", text: "Evaporation" }
          ],
          correctOptionId: "c",
          explanation: "Three signs of chemical change: color change (white→black), gas produced, and irreversible. This is a chemical reaction."
        },
        {
          id: "chemistry-101-l15-q2",
          text: "Helium is in Group 18, Period 1. It is used in balloons because it is:",
          skillId: "chemistry-101-skill-periodic-table",
          options: [
            { id: "a", text: "Very reactive and explosive" },
            { id: "b", text: "Lighter than air and unreactive (safe)" },
            { id: "c", text: "A liquid at room temperature" },
            { id: "d", text: "Magnetic" }
          ],
          correctOptionId: "b",
          explanation: "Helium is a noble gas (Group 18) — unreactive and safe. It is lighter than air, so balloons float."
        },
        {
          id: "chemistry-101-l15-q3",
          text: "How would you separate a mixture of salt and sand?",
          skillId: "chemistry-101-skill-mixtures",
          options: [
            { id: "a", text: "Use a magnet" },
            { id: "b", text: "Dissolve in water, filter out sand, evaporate water to get salt" },
            { id: "c", text: "Heat until both melt" },
            { id: "d", text: "They cannot be separated" }
          ],
          correctOptionId: "b",
          explanation: "Salt dissolves in water but sand does not. Filter to remove sand, then evaporate the water to recover the salt crystals."
        },
        {
          id: "chemistry-101-l15-q4",
          text: "Carbon has an atomic number of 6. A neutral carbon atom has how many electrons?",
          skillId: "chemistry-101-skill-atoms",
          options: [
            { id: "a", text: "12" },
            { id: "b", text: "3" },
            { id: "c", text: "6" },
            { id: "d", text: "8" }
          ],
          correctOptionId: "c",
          explanation: "In a neutral atom, the number of electrons equals the number of protons. Atomic number 6 = 6 protons = 6 electrons."
        }
      ],
      interactiveActivities: [
        {
          id: "chemistry-101-l15-ia1",
          type: "drag_and_drop",
          title: "Build a Water Molecule",
          description: "Place atoms into the correct positions to form H₂O.",
          estimatedMinutes: 4,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "center", label: "Central Atom" },
              { id: "left", label: "Bonded Atom 1" },
              { id: "right", label: "Bonded Atom 2" }
            ],
            draggables: [
              { id: "d1", label: "Oxygen (O)", correctTargetId: "center" },
              { id: "d2", label: "Hydrogen (H)", correctTargetId: "left" },
              { id: "d3", label: "Hydrogen (H)", correctTargetId: "right" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 0, medium: 2, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "chemistry-101-l15-a1", type: "mnemonic", title: "Atom Number Rule", content: "Atomic number = protons = electrons (in a neutral atom). Mass number ≈ protons + neutrons." }
      ]
    }
  ],
};
