import type { LearningModule } from "@/lib/modules/types";

export const Biology101Module: LearningModule = {
  id: "biology-101",
  title: "Biology Essentials",
  description: "Discover living systems, cells, ecosystems, and the diversity of life.",
  subject: "Biology",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  version: "2.0.0",
  learningObjectives: [
    "Describe the structure and function of plant and animal cells",
    "Explain how body systems work together to maintain homeostasis",
    "Analyze energy flow and nutrient cycling in ecosystems",
    "Describe the basic principles of heredity and DNA",
    "Explain natural selection and adaptation"
  ],
  lessons: [
    {
      id: "biology-101-l01",
      title: "Cells and Life Processes",
      type: "video",
      duration: 10,
      objectives: ["Identify the parts of a cell and their functions", "Compare plant and animal cells"],
      chunks: [
        {
          id: "biology-101-l01-c1",
          title: "The Cell: Building Block of Life",
          kind: "intro",
          content: "Every living organism is made of cells. Some organisms like bacteria are a single cell, while humans have roughly 37 trillion cells. The cell is the smallest unit that carries out all life processes: obtaining energy, growing, reproducing, and responding to the environment."
        },
        {
          id: "biology-101-l01-c2",
          title: "Inside an Animal Cell",
          kind: "concept",
          content: "Key organelles: the nucleus stores DNA and controls the cell. Mitochondria convert food into energy (ATP) through cellular respiration. The cell membrane controls what enters and leaves. Ribosomes build proteins. The endoplasmic reticulum and Golgi apparatus process and ship proteins."
        },
        {
          id: "biology-101-l01-c3",
          title: "Plant Cells Are Different",
          kind: "concept",
          content: "Plant cells have everything animal cells have, plus: a rigid cell wall for structural support, chloroplasts that capture sunlight for photosynthesis, and a large central vacuole that stores water and maintains turgor pressure. These extras let plants make their own food and stand upright."
        },
        {
          id: "biology-101-l01-c4",
          title: "Try It Yourself",
          kind: "practice",
          content: "Draw a simple diagram of an animal cell and label the nucleus, mitochondria, cell membrane, and ribosomes. Then add the three extra structures found in plant cells."
        }
      ],
      flashcards: [
        { id: "biology-101-l01-f1", front: "What does the nucleus do?", back: "It stores DNA (genetic instructions) and controls cell activities like growth, metabolism, and reproduction." },
        { id: "biology-101-l01-f2", front: "What are mitochondria?", back: "The 'powerhouses' of the cell. They convert glucose and oxygen into ATP (energy) through cellular respiration." },
        { id: "biology-101-l01-f3", front: "Name three structures found in plant cells but NOT animal cells.", back: "Cell wall (rigid support), chloroplasts (photosynthesis), and large central vacuole (water storage)." },
        { id: "biology-101-l01-f4", front: "What does the cell membrane do?", back: "It acts as a selective barrier, controlling which substances enter and leave the cell through selective permeability." }
      ],
      learningAids: [
        { id: "biology-101-l01-a1", type: "image", title: "Cell Comparison Diagram", content: "Side-by-side labeled diagrams of a typical animal cell and plant cell, highlighting shared and unique organelles." },
        { id: "biology-101-l01-a2", type: "animation", title: "Inside a Cell", content: "3D animation zooming into a cell, showing the nucleus, mitochondria producing ATP, ribosomes building proteins, and the cell membrane regulating transport." }
      ]
    },
    {
      id: "biology-101-l02",
      title: "Body Systems Overview",
      type: "interactive",
      duration: 12,
      objectives: ["Name the major body systems and their primary functions", "Explain how systems interact to maintain homeostasis"],
      interactiveActivities: [
        {
          id: "biology-101-l02-ia1",
          type: "matching_pairs",
          title: "Match the Body System",
          description: "Match each body system to its primary function.",
          estimatedMinutes: 8,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Circulatory system" },
              { id: "l2", label: "Respiratory system" },
              { id: "l3", label: "Digestive system" },
              { id: "l4", label: "Nervous system" }
            ],
            right: [
              { id: "r1", label: "Pumps blood to deliver oxygen and nutrients to cells" },
              { id: "r2", label: "Exchanges oxygen and carbon dioxide with the air" },
              { id: "r3", label: "Breaks food into nutrients the body can absorb" },
              { id: "r4", label: "Sends electrical signals to control body actions and thoughts" }
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
          id: "biology-101-l02-c1",
          title: "Systems Working Together",
          kind: "concept",
          content: "No body system works alone. When you exercise, the muscular system moves your body, the respiratory system brings in more oxygen, the circulatory system pumps blood faster to deliver that oxygen, and the nervous system coordinates it all. This teamwork keeps your internal environment stable — a state called homeostasis."
        },
        {
          id: "biology-101-l02-c2",
          title: "Homeostasis in Action",
          kind: "example",
          content: "When you are hot, your nervous system detects the temperature rise. It signals blood vessels near the skin to widen (more heat escapes) and sweat glands to produce sweat (evaporation cools you). When you cool down, these responses stop. This negative feedback loop maintains body temperature near 37°C."
        }
      ],
      learningAids: [
        { id: "biology-101-l02-a1", type: "practice", title: "System Interaction Map", content: "Draw arrows between body systems to show how the respiratory, circulatory, and muscular systems interact during exercise." }
      ]
    },
    {
      id: "biology-101-l03",
      title: "Checkpoint: Cell Biology",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-101-l03-q1",
          text: "Which organelle is responsible for producing energy (ATP) in the cell?",
          skillId: "biology-101-skill-cells",
          options: [
            { id: "a", text: "Nucleus" },
            { id: "b", text: "Ribosome" },
            { id: "c", text: "Mitochondrion" },
            { id: "d", text: "Cell membrane" }
          ],
          correctOptionId: "c",
          explanation: "Mitochondria carry out cellular respiration, converting glucose and oxygen into ATP (energy)."
        },
        {
          id: "biology-101-l03-q2",
          text: "Which structure is found in plant cells but NOT in animal cells?",
          skillId: "biology-101-skill-cells",
          options: [
            { id: "a", text: "Nucleus" },
            { id: "b", text: "Cell membrane" },
            { id: "c", text: "Chloroplast" },
            { id: "d", text: "Ribosome" }
          ],
          correctOptionId: "c",
          explanation: "Chloroplasts contain chlorophyll and carry out photosynthesis. They are found only in plant cells (and some protists)."
        },
        {
          id: "biology-101-l03-q3",
          text: "What is homeostasis?",
          skillId: "biology-101-skill-systems",
          options: [
            { id: "a", text: "The process of cell division" },
            { id: "b", text: "The ability to maintain a stable internal environment" },
            { id: "c", text: "The movement of molecules across a membrane" },
            { id: "d", text: "The conversion of light energy to chemical energy" }
          ],
          correctOptionId: "b",
          explanation: "Homeostasis is the body's ability to maintain stable internal conditions (temperature, pH, blood sugar) despite external changes."
        },
        {
          id: "biology-101-l03-q4",
          text: "Which body system is primarily responsible for breaking down food into nutrients?",
          skillId: "biology-101-skill-systems",
          options: [
            { id: "a", text: "Circulatory system" },
            { id: "b", text: "Respiratory system" },
            { id: "c", text: "Nervous system" },
            { id: "d", text: "Digestive system" }
          ],
          correctOptionId: "d",
          explanation: "The digestive system breaks food into small nutrient molecules that can be absorbed into the bloodstream."
        }
      ],
      interactiveActivities: [
        {
          id: "biology-101-l03-ia1",
          type: "sorting_buckets",
          title: "Plant or Animal Cell?",
          description: "Sort each organelle into the correct category.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "both", label: "Both plant and animal cells" },
              { id: "plant-only", label: "Plant cells only" }
            ],
            items: [
              { id: "i1", label: "Nucleus", correctBucketId: "both" },
              { id: "i2", label: "Cell wall", correctBucketId: "plant-only" },
              { id: "i3", label: "Mitochondria", correctBucketId: "both" },
              { id: "i4", label: "Chloroplasts", correctBucketId: "plant-only" },
              { id: "i5", label: "Cell membrane", correctBucketId: "both" },
              { id: "i6", label: "Large central vacuole", correctBucketId: "plant-only" }
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
        { id: "biology-101-l03-a1", type: "mnemonic", title: "Cell Memory Trick", content: "MR. NICE GUY: Membrane, Ribosomes, Nucleus, Includes all cells; Chloroplasts, Extra wall, Grandiose vacuole, Unique to plants, Yep!" }
      ]
    },
    {
      id: "biology-101-l04",
      title: "Ecosystems and Food Webs",
      type: "video",
      duration: 11,
      objectives: ["Describe the levels of ecological organization", "Trace energy flow through a food chain and food web"],
      chunks: [
        {
          id: "biology-101-l04-c1",
          title: "What Is an Ecosystem?",
          kind: "intro",
          content: "An ecosystem includes all living organisms (biotic factors) and nonliving components (abiotic factors like water, sunlight, soil, temperature) in an area, and how they interact. A pond ecosystem includes fish, algae, insects, water, sunlight, and dissolved oxygen all connected."
        },
        {
          id: "biology-101-l04-c2",
          title: "Energy Flow: Producers to Consumers",
          kind: "concept",
          content: "Energy enters ecosystems through producers (plants, algae) that capture sunlight via photosynthesis. Primary consumers (herbivores) eat producers. Secondary consumers (carnivores) eat herbivores. Tertiary consumers eat other carnivores. At each level, about 90% of energy is lost as heat, so there is less energy available at higher levels."
        },
        {
          id: "biology-101-l04-c3",
          title: "Food Chains vs Food Webs",
          kind: "concept",
          content: "A food chain is a single pathway: grass → rabbit → fox → eagle. A food web is a network of interconnected food chains showing that most organisms eat more than one thing. Food webs are more realistic because they show the complexity of real ecosystems."
        },
        {
          id: "biology-101-l04-c4",
          title: "Decomposers Complete the Cycle",
          kind: "concept",
          content: "Decomposers (bacteria, fungi) break down dead organisms and waste, returning nutrients to the soil. Without decomposers, nutrients would be locked in dead matter and producers could not grow. Decomposers connect the end of food chains back to the beginning."
        }
      ],
      flashcards: [
        { id: "biology-101-l04-f1", front: "What is the difference between biotic and abiotic factors?", back: "Biotic = living (plants, animals, bacteria). Abiotic = nonliving (water, sunlight, temperature, soil, air)." },
        { id: "biology-101-l04-f2", front: "Why is there less energy at higher trophic levels?", back: "About 90% of energy is lost as heat at each level. Only ~10% is passed on. This is the 10% rule." },
        { id: "biology-101-l04-f3", front: "What role do decomposers play?", back: "They break down dead organisms and waste, recycling nutrients back into the soil for producers to use." },
        { id: "biology-101-l04-f4", front: "What is a trophic level?", back: "A feeding level in a food chain. Level 1 = producers, Level 2 = primary consumers, Level 3 = secondary consumers, etc." }
      ],
      learningAids: [
        { id: "biology-101-l04-a1", type: "image", title: "Food Web Diagram", content: "An illustrated food web of a forest ecosystem showing producers (oak, grass), herbivores (rabbit, deer, caterpillar), carnivores (fox, owl, snake), and decomposers (fungi, bacteria)." }
      ]
    },
    {
      id: "biology-101-l05",
      title: "Adaptation and Survival",
      type: "interactive",
      duration: 13,
      objectives: ["Define adaptation and give examples", "Explain how adaptations help organisms survive in specific environments"],
      interactiveActivities: [
        {
          id: "biology-101-l05-ia1",
          type: "sorting_buckets",
          title: "Type of Adaptation",
          description: "Classify each example as a structural, behavioral, or physiological adaptation.",
          estimatedMinutes: 9,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "structural", label: "Structural (physical body feature)" },
              { id: "behavioral", label: "Behavioral (actions)" },
              { id: "physiological", label: "Physiological (internal process)" }
            ],
            items: [
              { id: "i1", label: "A cactus has thick stems to store water", correctBucketId: "structural" },
              { id: "i2", label: "Bears hibernate during winter to conserve energy", correctBucketId: "behavioral" },
              { id: "i3", label: "A camel's kidneys concentrate urine to save water", correctBucketId: "physiological" },
              { id: "i4", label: "A chameleon changes color to blend with its surroundings", correctBucketId: "physiological" },
              { id: "i5", label: "Birds migrate south to find warmer climates and food", correctBucketId: "behavioral" },
              { id: "i6", label: "A polar bear has thick fur and a layer of blubber for insulation", correctBucketId: "structural" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "biology-101-l05-c1",
          title: "What Is an Adaptation?",
          kind: "concept",
          content: "An adaptation is a trait that helps an organism survive and reproduce in its environment. Adaptations develop over many generations through natural selection. They can be structural (body parts), behavioral (actions), or physiological (internal body processes)."
        },
        {
          id: "biology-101-l05-c2",
          title: "Environment Shapes Adaptations",
          kind: "example",
          content: "Arctic fox: white fur in winter (camouflage), small ears (reduce heat loss), thick tail (warmth while sleeping). Desert fox (fennec): sandy fur (camouflage), huge ears (release excess heat), nocturnal behavior (avoids daytime heat). Same animal family, completely different adaptations driven by different environments."
        }
      ],
      learningAids: [
        { id: "biology-101-l05-a1", type: "animation", title: "Arctic vs Desert Adaptations", content: "Side-by-side animation comparing an arctic fox and a fennec fox, highlighting how each adaptation matches its environment." }
      ]
    },
    {
      id: "biology-101-l06",
      title: "Checkpoint: Ecosystem Thinking",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-101-l06-q1",
          text: "In a food chain, what happens to energy as it moves from producers to top predators?",
          skillId: "biology-101-skill-ecosystems",
          options: [
            { id: "a", text: "Energy increases at each level" },
            { id: "b", text: "Energy stays the same at each level" },
            { id: "c", text: "About 90% of energy is lost as heat at each level" },
            { id: "d", text: "Energy is created at each level" }
          ],
          correctOptionId: "c",
          explanation: "The 10% rule: only about 10% of energy passes from one trophic level to the next. The rest is lost as heat through metabolism."
        },
        {
          id: "biology-101-l06-q2",
          text: "A cactus stores water in its thick stem. What type of adaptation is this?",
          skillId: "biology-101-skill-adaptation",
          options: [
            { id: "a", text: "Behavioral" },
            { id: "b", text: "Structural" },
            { id: "c", text: "Physiological" },
            { id: "d", text: "Ecological" }
          ],
          correctOptionId: "b",
          explanation: "A thick stem is a physical body feature — a structural adaptation — that helps the cactus survive in dry environments."
        },
        {
          id: "biology-101-l06-q3",
          text: "Which organism is a decomposer?",
          skillId: "biology-101-skill-ecosystems",
          options: [
            { id: "a", text: "Eagle" },
            { id: "b", text: "Grass" },
            { id: "c", text: "Mushroom" },
            { id: "d", text: "Rabbit" }
          ],
          correctOptionId: "c",
          explanation: "Mushrooms (fungi) are decomposers. They break down dead organic matter and return nutrients to the soil."
        },
        {
          id: "biology-101-l06-q4",
          text: "Which is an abiotic factor in a forest ecosystem?",
          skillId: "biology-101-skill-ecosystems",
          options: [
            { id: "a", text: "Oak tree" },
            { id: "b", text: "Sunlight" },
            { id: "c", text: "Earthworm" },
            { id: "d", text: "Bacteria" }
          ],
          correctOptionId: "b",
          explanation: "Sunlight is nonliving (abiotic). Trees, earthworms, and bacteria are all living (biotic) factors."
        }
      ],
      interactiveActivities: [
        {
          id: "biology-101-l06-ia1",
          type: "drag_and_drop",
          title: "Build a Food Chain",
          description: "Place each organism at the correct trophic level.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            targets: [
              { id: "producer", label: "Producer (Level 1)" },
              { id: "primary", label: "Primary Consumer (Level 2)" },
              { id: "secondary", label: "Secondary Consumer (Level 3)" },
              { id: "tertiary", label: "Tertiary Consumer (Level 4)" }
            ],
            draggables: [
              { id: "d1", label: "Grass", correctTargetId: "producer" },
              { id: "d2", label: "Grasshopper", correctTargetId: "primary" },
              { id: "d3", label: "Frog", correctTargetId: "secondary" },
              { id: "d4", label: "Hawk", correctTargetId: "tertiary" }
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
        { id: "biology-101-l06-a1", type: "mnemonic", title: "Energy Pyramid", content: "Think of a pyramid: wide at the bottom (lots of producers), narrow at top (few top predators). Energy decreases going up." }
      ]
    },
    {
      id: "biology-101-l07",
      title: "Genetics Basics",
      type: "video",
      duration: 12,
      objectives: ["Describe the structure of DNA", "Explain how traits are inherited from parents to offspring"],
      chunks: [
        {
          id: "biology-101-l07-c1",
          title: "DNA: The Blueprint of Life",
          kind: "intro",
          content: "DNA (deoxyribonucleic acid) is a molecule inside the nucleus that carries genetic instructions. It is shaped like a twisted ladder — the double helix. The 'rungs' are pairs of chemical bases: adenine (A) pairs with thymine (T), and cytosine (C) pairs with guanine (G). The sequence of these bases encodes all your traits."
        },
        {
          id: "biology-101-l07-c2",
          title: "Genes and Chromosomes",
          kind: "concept",
          content: "A gene is a segment of DNA that codes for a specific protein (which determines a trait). Genes are organized on chromosomes. Humans have 46 chromosomes (23 pairs). You inherit one set of 23 from each parent, which is why you share traits with both parents but are not identical to either."
        },
        {
          id: "biology-101-l07-c3",
          title: "Dominant and Recessive Alleles",
          kind: "concept",
          content: "Each gene can have different versions called alleles. If you inherit a dominant allele (B) and a recessive allele (b), the dominant trait shows. The recessive trait only shows if you have two recessive alleles (bb). Example: brown eyes (B) is dominant over blue eyes (b). A Bb person has brown eyes."
        },
        {
          id: "biology-101-l07-c4",
          title: "Punnett Square Preview",
          kind: "example",
          content: "If both parents are Bb (brown eyes, carrying blue), their children could be: BB (brown), Bb (brown), Bb (brown), or bb (blue). That is a 3:1 ratio — 75% chance brown, 25% chance blue. A Punnett square is the grid tool that maps this out."
        }
      ],
      flashcards: [
        { id: "biology-101-l07-f1", front: "What does DNA stand for?", back: "Deoxyribonucleic acid. It is the molecule that carries genetic instructions in all living organisms." },
        { id: "biology-101-l07-f2", front: "What are the base pairing rules for DNA?", back: "Adenine (A) pairs with Thymine (T). Cytosine (C) pairs with Guanine (G). Remember: AT and CG." },
        { id: "biology-101-l07-f3", front: "What is the difference between a gene and an allele?", back: "A gene is a section of DNA coding for a trait. An allele is a specific version of that gene (e.g., brown eye allele vs blue eye allele)." },
        { id: "biology-101-l07-f4", front: "When does a recessive trait appear?", back: "Only when an organism has two copies of the recessive allele (homozygous recessive, e.g., bb)." }
      ],
      learningAids: [
        { id: "biology-101-l07-a1", type: "practice", title: "Punnett Square Practice", content: "Cross Bb × Bb. Draw a 2×2 grid, fill in the alleles, and determine the probability of each genotype and phenotype." }
      ]
    },
    {
      id: "biology-101-l08",
      title: "Biology Lab Reflection",
      type: "interactive",
      duration: 10,
      objectives: ["Connect cell biology, ecology, and genetics concepts", "Identify personal areas for deeper study"],
      interactiveActivities: [
        {
          id: "biology-101-l08-ia1",
          type: "matching_pairs",
          title: "Concept Connection",
          description: "Match each biology concept to the correct example.",
          estimatedMinutes: 7,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Photosynthesis" },
              { id: "l2", label: "Natural selection" },
              { id: "l3", label: "Homeostasis" }
            ],
            right: [
              { id: "r1", label: "Plants convert CO₂ and water into glucose using sunlight" },
              { id: "r2", label: "Darker moths survive better on soot-covered trees" },
              { id: "r3", label: "Shivering to raise body temperature when cold" }
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
          id: "biology-101-l08-c1",
          title: "Connecting the Big Ideas",
          kind: "recap",
          content: "Biology connects at every level: cells use energy from food (cellular respiration) or sunlight (photosynthesis). Organisms with beneficial adaptations survive better in ecosystems (natural selection). The instructions for those adaptations are encoded in DNA (genetics). Understanding these connections is what makes biology powerful."
        }
      ],
      learningAids: [
        { id: "biology-101-l08-a1", type: "mnemonic", title: "Biology Big Three", content: "Cells make life possible. Ecosystems organize life. DNA programs life. Everything in biology connects through energy, information, and evolution." }
      ]
    },
    {
      id: "biology-101-l09",
      title: "Review: Biology Concepts",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-101-l09-q1",
          text: "In DNA, adenine (A) always pairs with which base?",
          skillId: "biology-101-skill-genetics",
          options: [
            { id: "a", text: "Cytosine (C)" },
            { id: "b", text: "Guanine (G)" },
            { id: "c", text: "Thymine (T)" },
            { id: "d", text: "Uracil (U)" }
          ],
          correctOptionId: "c",
          explanation: "In DNA, Adenine always pairs with Thymine (A-T), and Cytosine always pairs with Guanine (C-G)."
        },
        {
          id: "biology-101-l09-q2",
          text: "What is the role of chloroplasts?",
          skillId: "biology-101-skill-cells",
          options: [
            { id: "a", text: "Break down food for energy" },
            { id: "b", text: "Store genetic information" },
            { id: "c", text: "Capture sunlight to make glucose through photosynthesis" },
            { id: "d", text: "Build proteins from amino acids" }
          ],
          correctOptionId: "c",
          explanation: "Chloroplasts contain chlorophyll, which captures light energy to convert CO₂ and water into glucose (photosynthesis)."
        },
        {
          id: "biology-101-l09-q3",
          text: "If both parents have genotype Bb, what fraction of offspring are expected to show the recessive phenotype?",
          skillId: "biology-101-skill-genetics",
          options: [
            { id: "a", text: "0 (none)" },
            { id: "b", text: "1/4 (25%)" },
            { id: "c", text: "1/2 (50%)" },
            { id: "d", text: "3/4 (75%)" }
          ],
          correctOptionId: "b",
          explanation: "Bb × Bb gives BB, Bb, Bb, bb. Only bb (1 out of 4) shows the recessive phenotype = 25%."
        },
        {
          id: "biology-101-l09-q4",
          text: "Which best describes the relationship between a food chain and a food web?",
          skillId: "biology-101-skill-ecosystems",
          options: [
            { id: "a", text: "A food web is a single feeding pathway" },
            { id: "b", text: "A food chain includes all organisms in an ecosystem" },
            { id: "c", text: "A food web is made of many interconnected food chains" },
            { id: "d", text: "Food chains and food webs are the same thing" }
          ],
          correctOptionId: "c",
          explanation: "A food web is a network of interconnected food chains showing the complex feeding relationships in an ecosystem."
        }
      ],
      interactiveActivities: [
        {
          id: "biology-101-l09-ia1",
          type: "sorting_buckets",
          title: "Levels of Organization",
          description: "Sort each example into the correct level of biological organization.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "cell", label: "Cell level" },
              { id: "organism", label: "Organism level" },
              { id: "ecosystem", label: "Ecosystem level" }
            ],
            items: [
              { id: "i1", label: "A white blood cell attacking bacteria", correctBucketId: "cell" },
              { id: "i2", label: "A fox hunting rabbits in a meadow", correctBucketId: "ecosystem" },
              { id: "i3", label: "A person maintaining body temperature at 37°C", correctBucketId: "organism" },
              { id: "i4", label: "Mitochondria producing ATP", correctBucketId: "cell" },
              { id: "i5", label: "Nutrients cycling through soil, plants, and animals", correctBucketId: "ecosystem" }
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
        { id: "biology-101-l09-a1", type: "mnemonic", title: "DNA Base Pairs", content: "AT the CG (At the City Gate): Adenine-Thymine, Cytosine-Guanine." }
      ]
    },
    {
      id: "biology-101-l10",
      title: "Mastery: Biology",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-101-l10-q1",
          text: "A population of beetles includes green and brown individuals. Birds eat green beetles more easily against brown bark. Over generations, what happens?",
          skillId: "biology-101-skill-adaptation",
          options: [
            { id: "a", text: "Green beetles become more common" },
            { id: "b", text: "Brown beetles become more common" },
            { id: "c", text: "Both colors remain equally common" },
            { id: "d", text: "All beetles turn brown" }
          ],
          correctOptionId: "b",
          explanation: "Natural selection: brown beetles survive and reproduce more (camouflage), so the brown allele increases in frequency over generations."
        },
        {
          id: "biology-101-l10-q2",
          text: "What would happen to an ecosystem if all decomposers were removed?",
          skillId: "biology-101-skill-ecosystems",
          options: [
            { id: "a", text: "Nothing would change" },
            { id: "b", text: "Dead matter would accumulate and nutrients would not be recycled" },
            { id: "c", text: "Producers would grow faster" },
            { id: "d", text: "Consumers would become decomposers" }
          ],
          correctOptionId: "b",
          explanation: "Without decomposers, dead organisms and waste would pile up. Essential nutrients would be locked away, and producers would eventually run out of soil nutrients."
        },
        {
          id: "biology-101-l10-q3",
          text: "Which organelle would you find in BOTH a leaf cell and a muscle cell?",
          skillId: "biology-101-skill-cells",
          options: [
            { id: "a", text: "Chloroplast" },
            { id: "b", text: "Cell wall" },
            { id: "c", text: "Mitochondrion" },
            { id: "d", text: "Central vacuole" }
          ],
          correctOptionId: "c",
          explanation: "Both plant and animal cells have mitochondria for cellular respiration. Chloroplasts, cell walls, and large central vacuoles are plant-only."
        },
        {
          id: "biology-101-l10-q4",
          text: "How many chromosomes does a human body cell contain?",
          skillId: "biology-101-skill-genetics",
          options: [
            { id: "a", text: "23" },
            { id: "b", text: "46" },
            { id: "c", text: "44" },
            { id: "d", text: "92" }
          ],
          correctOptionId: "b",
          explanation: "Human body cells have 46 chromosomes (23 pairs). Sex cells (sperm/egg) have 23 — half the full set."
        }
      ],
      interactiveActivities: [
        {
          id: "biology-101-l10-ia1",
          type: "matching_pairs",
          title: "Organelle Function Match",
          description: "Match each organelle to its function.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Ribosome" },
              { id: "l2", label: "Golgi apparatus" },
              { id: "l3", label: "Endoplasmic reticulum" },
              { id: "l4", label: "Cell membrane" }
            ],
            right: [
              { id: "r1", label: "Builds proteins from amino acids" },
              { id: "r2", label: "Packages and ships proteins out of the cell" },
              { id: "r3", label: "Network that transports materials within the cell" },
              { id: "r4", label: "Controls what enters and exits the cell" }
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
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 0, medium: 2, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "biology-101-l10-a1", type: "mnemonic", title: "Natural Selection Steps", content: "VISA: Variation exists → Individuals compete → Selection by environment → Adaptation spreads." }
      ]
    },
    {
      id: "biology-101-l11",
      title: "Applied Biology Challenge Studio",
      type: "interactive",
      duration: 14,
      objectives: ["Apply knowledge of cells, ecosystems, and genetics to novel scenarios", "Analyze cause-and-effect relationships in biological systems"],
      interactiveActivities: [
        {
          id: "biology-101-l11-ia1",
          type: "sorting_buckets",
          title: "Photosynthesis vs Cellular Respiration",
          description: "Sort each statement into the correct process.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "photo", label: "Photosynthesis" },
              { id: "respiration", label: "Cellular Respiration" },
              { id: "both", label: "Both processes" }
            ],
            items: [
              { id: "i1", label: "Uses sunlight as energy source", correctBucketId: "photo" },
              { id: "i2", label: "Produces ATP for the cell", correctBucketId: "respiration" },
              { id: "i3", label: "Takes in CO₂ and releases O₂", correctBucketId: "photo" },
              { id: "i4", label: "Takes in O₂ and releases CO₂", correctBucketId: "respiration" },
              { id: "i5", label: "Occurs in living cells", correctBucketId: "both" },
              { id: "i6", label: "Involves chemical energy transformations", correctBucketId: "both" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "biology-101-l11-c1",
          title: "Two Sides of the Energy Coin",
          kind: "concept",
          content: "Photosynthesis and cellular respiration are complementary. Photosynthesis uses CO₂ + H₂O + sunlight → glucose + O₂. Cellular respiration does the reverse: glucose + O₂ → CO₂ + H₂O + ATP. The oxygen plants release is what animals breathe; the CO₂ animals exhale is what plants absorb. This is a beautiful cycle."
        }
      ],
      learningAids: [
        { id: "biology-101-l11-a1", type: "practice", title: "Cycle Diagram", content: "Draw a diagram showing the inputs and outputs of photosynthesis and cellular respiration, with arrows showing how the products of one process become the reactants of the other." }
      ]
    },
    {
      id: "biology-101-l12",
      title: "Biology Mastery Applied Retest",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-101-l12-q1",
          text: "Which is the correct word equation for photosynthesis?",
          skillId: "biology-101-skill-cells",
          options: [
            { id: "a", text: "Glucose + Oxygen → Carbon dioxide + Water + Energy" },
            { id: "b", text: "Carbon dioxide + Water + Light → Glucose + Oxygen" },
            { id: "c", text: "Glucose + Water → Carbon dioxide + Oxygen + Energy" },
            { id: "d", text: "Oxygen + Glucose + Light → Carbon dioxide + Water" }
          ],
          correctOptionId: "b",
          explanation: "Photosynthesis: CO₂ + H₂O + light energy → C₆H₁₂O₆ (glucose) + O₂."
        },
        {
          id: "biology-101-l12-q2",
          text: "A Punnett square for Bb × bb gives which offspring ratios?",
          skillId: "biology-101-skill-genetics",
          options: [
            { id: "a", text: "All Bb" },
            { id: "b", text: "50% Bb, 50% bb" },
            { id: "c", text: "75% Bb, 25% bb" },
            { id: "d", text: "25% Bb, 75% bb" }
          ],
          correctOptionId: "b",
          explanation: "Bb × bb: Bb, Bb, bb, bb → 50% Bb (dominant phenotype), 50% bb (recessive phenotype)."
        },
        {
          id: "biology-101-l12-q3",
          text: "An invasive plant species blocks sunlight from reaching native plants. What is the most likely first effect on the ecosystem?",
          skillId: "biology-101-skill-ecosystems",
          options: [
            { id: "a", text: "Top predators immediately decline" },
            { id: "b", text: "Native plant populations decline, reducing food for herbivores" },
            { id: "c", text: "Decomposers stop functioning" },
            { id: "d", text: "Water temperature increases" }
          ],
          correctOptionId: "b",
          explanation: "Blocking sunlight reduces photosynthesis in native plants. As producer populations decline, herbivores that depend on them are affected next (bottom-up cascade)."
        },
        {
          id: "biology-101-l12-q4",
          text: "Which process converts glucose into usable energy (ATP) in both plant and animal cells?",
          skillId: "biology-101-skill-cells",
          options: [
            { id: "a", text: "Photosynthesis" },
            { id: "b", text: "Cellular respiration" },
            { id: "c", text: "Fermentation only" },
            { id: "d", text: "Protein synthesis" }
          ],
          correctOptionId: "b",
          explanation: "Cellular respiration occurs in both plant and animal cells, converting glucose + oxygen into ATP, CO₂, and water."
        }
      ],
      interactiveActivities: [
        {
          id: "biology-101-l12-ia1",
          type: "matching_pairs",
          title: "Vocabulary Precision",
          description: "Match each biology term to its precise definition.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Gene" },
              { id: "l2", label: "Allele" },
              { id: "l3", label: "Chromosome" }
            ],
            right: [
              { id: "r1", label: "A segment of DNA that codes for a specific trait" },
              { id: "r2", label: "A specific version of a gene (e.g., blue vs brown eye)" },
              { id: "r3", label: "A long strand of DNA coiled around proteins, carrying many genes" }
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
        { id: "biology-101-l12-a1", type: "mnemonic", title: "Photo vs Respiration", content: "Photo = building (stores energy in glucose). Respiration = burning (releases energy from glucose as ATP)." }
      ]
    },
    {
      id: "biology-101-l13",
      title: "Biology Scenario Lab",
      type: "video",
      duration: 12,
      objectives: ["Apply biology concepts to a real-world conservation scenario", "Evaluate evidence and propose solutions"],
      chunks: [
        {
          id: "biology-101-l13-c1",
          title: "The Coral Reef Crisis",
          kind: "intro",
          content: "Coral reefs support 25% of marine species but are declining worldwide. Rising ocean temperatures cause coral bleaching — corals expel the algae (zooxanthellae) living inside them that provide food and color. Without these algae, corals starve and turn white."
        },
        {
          id: "biology-101-l13-c2",
          title: "Ecosystem Connections",
          kind: "concept",
          content: "Coral reefs are like underwater rainforests. Corals are the producers' partners (they host photosynthetic algae). Small fish eat algae, larger fish eat smaller fish, sharks and rays are top predators. If corals die, the entire food web collapses — affecting fisheries, coastal protection, and tourism for millions of people."
        },
        {
          id: "biology-101-l13-c3",
          title: "Adaptation Under Pressure",
          kind: "example",
          content: "Some corals in warmer regions already tolerate higher temperatures — a form of adaptation. Scientists are studying whether heat-tolerant coral genes can be introduced to vulnerable populations. This is genetics meeting conservation."
        },
        {
          id: "biology-101-l13-c4",
          title: "What Can Be Done?",
          kind: "practice",
          content: "Consider: reducing CO₂ emissions slows ocean warming. Marine protected areas reduce other stressors. Coral gardening programs regrow damaged reefs. Which approach addresses the root cause? Which treats symptoms? How might they work together?"
        }
      ],
      flashcards: [
        { id: "biology-101-l13-f1", front: "What is coral bleaching?", back: "When stressed by warm water, corals expel symbiotic algae, losing their color and food source. Prolonged bleaching kills the coral." },
        { id: "biology-101-l13-f2", front: "Why are coral reefs called 'rainforests of the sea'?", back: "They support enormous biodiversity — about 25% of all marine species — despite covering less than 1% of the ocean floor." },
        { id: "biology-101-l13-f3", front: "How does genetics help coral conservation?", back: "Scientists study heat-tolerant coral varieties and explore assisted gene flow to help vulnerable reefs survive warming waters." },
        { id: "biology-101-l13-f4", front: "What is a keystone species?", back: "A species whose removal causes major changes to the ecosystem. Corals are keystone species in reef ecosystems." }
      ],
      learningAids: [
        { id: "biology-101-l13-a1", type: "image", title: "Healthy vs Bleached Reef", content: "Comparison photo showing a vibrant, colorful coral reef alongside a bleached, white reef of the same species." },
        { id: "biology-101-l13-a2", type: "practice", title: "Conservation Proposal", content: "Choose one reef conservation strategy. Explain how it connects to at least two biology concepts (ecosystems, cells, genetics, or adaptation)." }
      ]
    },
    {
      id: "biology-101-l14",
      title: "Biology Coaching Clinic",
      type: "interactive",
      duration: 13,
      objectives: ["Identify personal gaps in biology understanding", "Apply targeted review strategies"],
      interactiveActivities: [
        {
          id: "biology-101-l14-ia1",
          type: "matching_pairs",
          title: "Misconception Buster",
          description: "Match each common biology misconception to the correct scientific understanding.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Misconception: Plants get their food from the soil" },
              { id: "l2", label: "Misconception: Evolution means an individual organism changes" },
              { id: "l3", label: "Misconception: Dominant alleles are always more common" },
              { id: "l4", label: "Misconception: Humans are at the 'top' of evolution" }
            ],
            right: [
              { id: "r1", label: "Plants make glucose from CO₂ and water using sunlight (photosynthesis)" },
              { id: "r2", label: "Populations evolve over generations, not individual organisms" },
              { id: "r3", label: "Dominant/recessive describes expression, not frequency in a population" },
              { id: "r4", label: "Evolution has no goal or direction; all living species are equally evolved" }
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
          id: "biology-101-l14-c1",
          title: "Common Biology Mistakes",
          kind: "recap",
          content: "The most common misunderstandings: 1) Confusing photosynthesis with respiration. 2) Thinking individual organisms evolve. 3) Mixing up genes, alleles, and chromosomes. 4) Forgetting that plants do cellular respiration too (not just photosynthesis). Identifying which misconception you hold is the fastest path to fixing it."
        }
      ],
      learningAids: [
        { id: "biology-101-l14-a1", type: "mnemonic", title: "Fix Your Gap", content: "Draw two columns: 'What I thought' and 'What is actually true.' Fill in one row for each unit (cells, ecosystems, genetics). This simple exercise clears up the most persistent errors." }
      ]
    },
    {
      id: "biology-101-l15",
      title: "Biology Mastery Sprint",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-101-l15-q1",
          text: "Which statement about photosynthesis and cellular respiration is correct?",
          skillId: "biology-101-skill-cells",
          options: [
            { id: "a", text: "Only animals perform cellular respiration" },
            { id: "b", text: "Photosynthesis and respiration are opposite processes that cycle energy and matter" },
            { id: "c", text: "Photosynthesis releases ATP directly to the cell" },
            { id: "d", text: "Cellular respiration requires sunlight" }
          ],
          correctOptionId: "b",
          explanation: "Photosynthesis stores energy in glucose; respiration releases it. Their inputs/outputs are complementary, cycling CO₂, O₂, and glucose."
        },
        {
          id: "biology-101-l15-q2",
          text: "Peppered moths in England became darker during the Industrial Revolution because soot darkened tree bark. This is an example of:",
          skillId: "biology-101-skill-adaptation",
          options: [
            { id: "a", text: "Genetic engineering" },
            { id: "b", text: "Natural selection" },
            { id: "c", text: "Artificial selection" },
            { id: "d", text: "Mutation only" }
          ],
          correctOptionId: "b",
          explanation: "Dark moths were better camouflaged on sooty trees, so predators ate more light-colored moths. The dark allele increased in frequency — natural selection."
        },
        {
          id: "biology-101-l15-q3",
          text: "If removing one species causes the collapse of an entire community, that species is called a:",
          skillId: "biology-101-skill-ecosystems",
          options: [
            { id: "a", text: "Pioneer species" },
            { id: "b", text: "Invasive species" },
            { id: "c", text: "Keystone species" },
            { id: "d", text: "Indicator species" }
          ],
          correctOptionId: "c",
          explanation: "A keystone species has a disproportionately large effect on its ecosystem relative to its abundance. Removing it causes major changes."
        },
        {
          id: "biology-101-l15-q4",
          text: "A cell needs to produce a specific protein. The correct sequence of information flow is:",
          skillId: "biology-101-skill-genetics",
          options: [
            { id: "a", text: "Protein → RNA → DNA" },
            { id: "b", text: "DNA → Protein → RNA" },
            { id: "c", text: "DNA → RNA → Protein" },
            { id: "d", text: "RNA → DNA → Protein" }
          ],
          correctOptionId: "c",
          explanation: "The central dogma of biology: DNA is transcribed into RNA, which is translated into protein. DNA → RNA → Protein."
        }
      ],
      interactiveActivities: [
        {
          id: "biology-101-l15-ia1",
          type: "drag_and_drop",
          title: "Energy Flow Order",
          description: "Arrange the trophic levels in order of decreasing energy.",
          estimatedMinutes: 4,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "most", label: "Most Energy" },
              { id: "second", label: "Second Most" },
              { id: "third", label: "Third Most" },
              { id: "least", label: "Least Energy" }
            ],
            draggables: [
              { id: "d1", label: "Producers (plants)", correctTargetId: "most" },
              { id: "d2", label: "Primary consumers (herbivores)", correctTargetId: "second" },
              { id: "d3", label: "Secondary consumers (small carnivores)", correctTargetId: "third" },
              { id: "d4", label: "Tertiary consumers (top predators)", correctTargetId: "least" }
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
        { id: "biology-101-l15-a1", type: "mnemonic", title: "Central Dogma", content: "DNA makes RNA makes Protein. Think: D → R → P (Don't Ruin Proteins)." }
      ]
    }
  ],
};
