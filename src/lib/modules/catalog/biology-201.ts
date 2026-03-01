import type { LearningModule } from "@/lib/modules/types";

export const Biology201Module: LearningModule = {
  id: "biology-201",
  title: "Biology Systems and Change",
  description: "Connect cells, genetics, ecosystems, and adaptation through systems-level reasoning.",
  subject: "Biology",
  tags: ["core", "curriculum", "interactive"],
  minAge: 7,
  maxAge: 18,
  version: "2.0.0",
  learningObjectives: [
    "Explain how positive and negative feedback loops maintain homeostasis",
    "Use Punnett squares to predict patterns of inheritance",
    "Trace energy flow through food chains and food webs",
    "Describe how natural selection drives population change over time",
    "Evaluate the impact of human activity on biodiversity"
  ],
  lessons: [
    {
      id: "biology-201-l01",
      title: "Homeostasis and Feedback Loops",
      type: "video",
      duration: 10,
      objectives: ["Define homeostasis", "Distinguish negative feedback from positive feedback"],
      chunks: [
        {
          id: "biology-201-l01-c1",
          title: "What Is Homeostasis?",
          kind: "intro",
          content: "Homeostasis is the process by which living organisms maintain a stable internal environment despite changes outside. Your body temperature stays near 37 °C whether you are in a snowstorm or a desert. Blood glucose, pH, and water balance are all regulated this way."
        },
        {
          id: "biology-201-l01-c2",
          title: "Negative Feedback Loops",
          kind: "concept",
          content: "Most homeostatic regulation uses negative feedback: a change triggers a response that reverses the change. Example: when blood glucose rises after eating, the pancreas releases insulin, which tells cells to absorb glucose. Blood sugar drops back to normal and insulin release slows. The loop has three parts — sensor, control center, effector."
        },
        {
          id: "biology-201-l01-c3",
          title: "Positive Feedback Loops",
          kind: "concept",
          content: "Positive feedback amplifies a change instead of reversing it. During childbirth, contractions push the baby against the cervix, which triggers more oxytocin release, which causes stronger contractions — until delivery. Blood clotting is another example: platelets attract more platelets until the wound is sealed. Positive feedback always has an endpoint."
        },
        {
          id: "biology-201-l01-c4",
          title: "Practice: Thermoregulation Diagram",
          kind: "practice",
          content: "Draw a negative feedback diagram for body temperature regulation. Start with 'body temp rises,' then show the sensor (hypothalamus), the effectors (sweat glands, blood vessel dilation), and the result (cooling). Add the reverse path for when body temp drops (shivering, vasoconstriction)."
        }
      ],
      flashcards: [
        { id: "biology-201-l01-f1", front: "What is homeostasis?", back: "The maintenance of a stable internal environment in an organism, such as constant body temperature, blood pH, and glucose levels." },
        { id: "biology-201-l01-f2", front: "How does a negative feedback loop work?", back: "A change is detected by a sensor → control center activates an effector → the effector reverses the change → the system returns to its set point." },
        { id: "biology-201-l01-f3", front: "Give two examples of positive feedback.", back: "1) Childbirth — oxytocin increases contractions until delivery. 2) Blood clotting — platelets recruit more platelets until the wound is sealed." },
        { id: "biology-201-l01-f4", front: "What are the three parts of a feedback loop?", back: "Sensor (receptor), control center (integrator, often the brain), and effector (muscle or gland that carries out the response)." }
      ],
      learningAids: [
        { id: "biology-201-l01-a1", type: "image", title: "Feedback Loop Diagram", content: "Side-by-side diagrams comparing negative feedback (thermoregulation) and positive feedback (blood clotting), with labeled sensor, control center, and effector." },
        { id: "biology-201-l01-a2", type: "animation", title: "Thermoregulation in Action", content: "Animation showing a person moving from cold to hot environments, with the hypothalamus triggering shivering then sweating." }
      ]
    },
    {
      id: "biology-201-l02",
      title: "Genetic Patterns and Traits",
      type: "interactive",
      duration: 12,
      objectives: ["Complete a Punnett square for a monohybrid cross", "Distinguish dominant from recessive alleles"],
      interactiveActivities: [
        {
          id: "biology-201-l02-ia1",
          type: "drag_and_drop",
          title: "Build a Punnett Square",
          description: "Drag the correct genotypes into the Punnett square for a cross between two heterozygous parents (Bb × Bb).",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            targets: [
              { id: "tl", label: "Top-left cell" },
              { id: "tr", label: "Top-right cell" },
              { id: "bl", label: "Bottom-left cell" },
              { id: "br", label: "Bottom-right cell" }
            ],
            draggables: [
              { id: "d1", label: "BB", correctTargetId: "tl" },
              { id: "d2", label: "Bb (from father's B)", correctTargetId: "tr" },
              { id: "d3", label: "Bb (from mother's B)", correctTargetId: "bl" },
              { id: "d4", label: "bb", correctTargetId: "br" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "biology-201-l02-c1",
          title: "Alleles and Genotypes",
          kind: "concept",
          content: "Every gene has two copies — one from each parent. These versions are called alleles. A dominant allele (capital letter, e.g., B) masks the recessive allele (lowercase, b). Genotype BB or Bb shows the dominant trait; only bb shows the recessive trait. The outward appearance is the phenotype."
        },
        {
          id: "biology-201-l02-c2",
          title: "Monohybrid Cross Example",
          kind: "example",
          content: "Two brown-eyed parents who are both carriers (Bb) can have a blue-eyed child. The Punnett square shows: BB (25%), Bb (50%), bb (25%). Phenotype ratio: 3 brown : 1 blue. This 3:1 ratio is Mendel's classic result from pea plants."
        }
      ],
      learningAids: [
        { id: "biology-201-l02-a1", type: "practice", title: "Punnett Square Practice", content: "Complete three Punnett squares: 1) Bb × bb, 2) BB × Bb, 3) Bb × Bb. Predict phenotype ratios for each." }
      ]
    },
    {
      id: "biology-201-l03",
      title: "Checkpoint: Genetics and Homeostasis",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l03-q1",
          text: "A person's body temperature rises. The hypothalamus triggers sweating, which cools the body. What type of feedback is this?",
          skillId: "biology-201-skill-homeostasis",
          options: [
            { id: "a", text: "Positive feedback, because it amplifies the original change" },
            { id: "b", text: "Negative feedback, because it reverses the original change" },
            { id: "c", text: "No feedback — the body cannot regulate temperature" },
            { id: "d", text: "Positive feedback, because sweating always increases body temperature" }
          ],
          correctOptionId: "b"
        },
        {
          id: "biology-201-l03-q2",
          text: "In a cross between two heterozygous parents (Bb × Bb), what fraction of offspring are expected to show the recessive phenotype?",
          skillId: "biology-201-skill-genetics",
          options: [
            { id: "a", text: "1/2 (50%)" },
            { id: "b", text: "3/4 (75%)" },
            { id: "c", text: "1/4 (25%)" },
            { id: "d", text: "0% — recessive traits cannot appear" }
          ],
          correctOptionId: "c"
        },
        {
          id: "biology-201-l03-q3",
          text: "Which of the following is an example of positive feedback?",
          skillId: "biology-201-skill-homeostasis",
          options: [
            { id: "a", text: "Insulin lowering blood sugar after a meal" },
            { id: "b", text: "Shivering when body temperature drops" },
            { id: "c", text: "Oxytocin increasing contractions during childbirth" },
            { id: "d", text: "The kidneys retaining water when you are dehydrated" }
          ],
          correctOptionId: "c"
        },
        {
          id: "biology-201-l03-q4",
          text: "A plant with genotype Rr is crossed with an rr plant. What percentage of offspring will be heterozygous (Rr)?",
          skillId: "biology-201-skill-genetics",
          options: [
            { id: "a", text: "50%" },
            { id: "b", text: "25%" },
            { id: "c", text: "100%" },
            { id: "d", text: "75%" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l03-ia1",
          type: "matching_pairs",
          title: "Genetics Vocabulary Match",
          description: "Match each genetics term to its correct definition.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Genotype" },
              { id: "l2", label: "Phenotype" },
              { id: "l3", label: "Heterozygous" },
              { id: "l4", label: "Homozygous" }
            ],
            right: [
              { id: "r1", label: "The combination of alleles an organism carries (e.g., Bb)" },
              { id: "r2", label: "The observable trait (e.g., brown eyes)" },
              { id: "r3", label: "Having two different alleles for a gene (e.g., Bb)" },
              { id: "r4", label: "Having two identical alleles for a gene (e.g., BB or bb)" }
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
        { id: "biology-201-l03-a1", type: "mnemonic", title: "Punnett Square Trick", content: "Remember: capital letter = dominant, lowercase = recessive. Only two lowercase letters (bb) show the recessive phenotype." }
      ]
    },
    {
      id: "biology-201-l04",
      title: "Energy Flow in Ecosystems",
      type: "video",
      duration: 11,
      objectives: ["Trace energy flow from producers through consumers", "Explain the 10% rule of energy transfer"],
      chunks: [
        {
          id: "biology-201-l04-c1",
          title: "Producers and Consumers",
          kind: "intro",
          content: "All energy in an ecosystem begins with the sun. Producers (plants, algae) capture solar energy through photosynthesis and store it as glucose. Primary consumers (herbivores) eat producers. Secondary consumers eat herbivores. Tertiary consumers sit at the top. This chain is called a food chain."
        },
        {
          id: "biology-201-l04-c2",
          title: "The 10% Rule",
          kind: "concept",
          content: "Only about 10% of energy passes from one trophic level to the next. The rest is lost as heat during cellular respiration. If grass captures 10,000 kJ, a grasshopper gets about 1,000 kJ, a frog about 100 kJ, and a hawk about 10 kJ. This is why food chains rarely exceed 4–5 levels — there simply isn't enough energy."
        },
        {
          id: "biology-201-l04-c3",
          title: "Food Webs",
          kind: "concept",
          content: "Real ecosystems are more complex than a single chain. A food web shows all the feeding relationships in a community. Removing one species can ripple through the web — if frogs disappear, insects may increase and the plants they eat may decline. These indirect effects are called trophic cascades."
        },
        {
          id: "biology-201-l04-c4",
          title: "Energy Pyramid Sketch",
          kind: "practice",
          content: "Draw an energy pyramid with four trophic levels. Label each level (producers, primary consumers, secondary consumers, tertiary consumers) and write the approximate energy at each level starting with 10,000 kJ at the base."
        }
      ],
      flashcards: [
        { id: "biology-201-l04-f1", front: "What is the 10% rule?", back: "Only about 10% of energy at one trophic level is transferred to the next. The rest is lost as heat through cellular respiration." },
        { id: "biology-201-l04-f2", front: "Why are food chains limited to 4–5 levels?", back: "Energy is lost at each transfer (90% as heat). By the 4th or 5th level, there isn't enough energy left to support another population." },
        { id: "biology-201-l04-f3", front: "What is a trophic cascade?", back: "An indirect ecological effect caused by adding or removing a species, which ripples through multiple levels of the food web." },
        { id: "biology-201-l04-f4", front: "Producer vs. consumer", back: "Producers make their own food from sunlight (photosynthesis). Consumers must eat other organisms for energy." }
      ],
      learningAids: [
        { id: "biology-201-l04-a1", type: "image", title: "Energy Pyramid", content: "A labeled energy pyramid showing 10,000 → 1,000 → 100 → 10 kJ across four trophic levels with percentage losses marked." }
      ]
    },
    {
      id: "biology-201-l05",
      title: "Population Change Drivers",
      type: "interactive",
      duration: 13,
      objectives: ["Identify factors that cause populations to grow or shrink", "Classify limiting factors as density-dependent or density-independent"],
      interactiveActivities: [
        {
          id: "biology-201-l05-ia1",
          type: "sorting_buckets",
          title: "Limiting Factor Sort",
          description: "Sort each factor into the correct category: density-dependent or density-independent.",
          estimatedMinutes: 9,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "dd", label: "Density-Dependent" },
              { id: "di", label: "Density-Independent" }
            ],
            items: [
              { id: "i1", label: "Competition for food in a crowded habitat", correctBucketId: "dd" },
              { id: "i2", label: "A wildfire destroying a forest", correctBucketId: "di" },
              { id: "i3", label: "Disease spreading faster in dense populations", correctBucketId: "dd" },
              { id: "i4", label: "A drought reducing water for all organisms", correctBucketId: "di" },
              { id: "i5", label: "Predation increasing as prey become abundant", correctBucketId: "dd" },
              { id: "i6", label: "A volcanic eruption wiping out nearby life", correctBucketId: "di" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "biology-201-l05-c1",
          title: "What Controls Population Size?",
          kind: "concept",
          content: "Populations grow when birth rate exceeds death rate. But no population grows forever — limiting factors slow growth. Density-dependent factors (disease, competition, predation) have a stronger effect as the population grows. Density-independent factors (weather, natural disasters) affect populations regardless of size."
        }
      ],
      learningAids: [
        { id: "biology-201-l05-a1", type: "animation", title: "Population Growth Curves", content: "Animation comparing exponential growth (J-curve) and logistic growth (S-curve) with carrying capacity labeled." }
      ]
    },
    {
      id: "biology-201-l06",
      title: "Checkpoint: Ecology",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l06-q1",
          text: "Grass captures 20,000 kJ of energy. Approximately how much energy is available to secondary consumers?",
          skillId: "biology-201-skill-ecology",
          options: [
            { id: "a", text: "20,000 kJ" },
            { id: "b", text: "2,000 kJ" },
            { id: "c", text: "200 kJ" },
            { id: "d", text: "20 kJ" }
          ],
          correctOptionId: "c"
        },
        {
          id: "biology-201-l06-q2",
          text: "Which of the following is a density-dependent limiting factor?",
          skillId: "biology-201-skill-ecology",
          options: [
            { id: "a", text: "Earthquake" },
            { id: "b", text: "Wildfire" },
            { id: "c", text: "Competition for nesting sites" },
            { id: "d", text: "Flood" }
          ],
          correctOptionId: "c"
        },
        {
          id: "biology-201-l06-q3",
          text: "In a food web, removing all the frogs would most likely cause:",
          skillId: "biology-201-skill-ecology",
          options: [
            { id: "a", text: "No change — other species are unaffected" },
            { id: "b", text: "An increase in the insect population that frogs used to eat" },
            { id: "c", text: "An increase in the hawk population" },
            { id: "d", text: "A decrease in the grass population" }
          ],
          correctOptionId: "b"
        },
        {
          id: "biology-201-l06-q4",
          text: "Why does a population's growth slow as it approaches carrying capacity?",
          skillId: "biology-201-skill-ecology",
          options: [
            { id: "a", text: "Resources become limited and competition increases" },
            { id: "b", text: "The population starts reproducing faster" },
            { id: "c", text: "Predators disappear from the ecosystem" },
            { id: "d", text: "Temperature always decreases at high population sizes" }
          ],
          correctOptionId: "a"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l06-ia1",
          type: "matching_pairs",
          title: "Ecosystem Roles Match",
          description: "Match each organism to its role in the food web.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Oak tree" },
              { id: "l2", label: "Rabbit" },
              { id: "l3", label: "Fox" },
              { id: "l4", label: "Mushroom" }
            ],
            right: [
              { id: "r1", label: "Producer — makes food via photosynthesis" },
              { id: "r2", label: "Primary consumer — eats plants" },
              { id: "r3", label: "Secondary consumer — eats herbivores" },
              { id: "r4", label: "Decomposer — breaks down dead organisms" }
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
        { id: "biology-201-l06-a1", type: "mnemonic", title: "Energy Pyramid Shortcut", content: "Divide by 10 at each step: producers → 1/10 → primary consumers → 1/10 → secondary consumers." }
      ]
    },
    {
      id: "biology-201-l07",
      title: "Natural Selection and Adaptation",
      type: "video",
      duration: 12,
      objectives: ["Describe the four conditions for natural selection", "Explain how adaptations arise over generations"],
      chunks: [
        {
          id: "biology-201-l07-c1",
          title: "Darwin's Big Idea",
          kind: "intro",
          content: "Natural selection is the mechanism of evolution. It requires four conditions: 1) variation exists in a population, 2) some variations are heritable, 3) more offspring are produced than can survive, and 4) individuals with advantageous traits are more likely to survive and reproduce."
        },
        {
          id: "biology-201-l07-c2",
          title: "Adaptation Through Selection",
          kind: "concept",
          content: "The peppered moth is a classic example. Before the Industrial Revolution, most moths were light-colored, camouflaged against pale tree bark. Soot darkened the trees, and dark moths became harder for birds to spot. Over generations, the dark variant became more common. When pollution was reduced, light moths increased again. The environment selected which traits were favorable."
        },
        {
          id: "biology-201-l07-c3",
          title: "Antibiotic Resistance",
          kind: "example",
          content: "Bacteria reproduce quickly, so natural selection acts fast. When an antibiotic kills most bacteria, a few with a resistance mutation survive. They reproduce, and the entire new population is resistant. This is why doctors insist you finish the full course of antibiotics — stopping early leaves the most resistant bacteria alive."
        },
        {
          id: "biology-201-l07-c4",
          title: "Selection vs. Intelligent Design of Traits",
          kind: "concept",
          content: "Organisms don't 'choose' to adapt. Mutations happen randomly. Natural selection simply means that individuals with traits better suited to the current environment leave more offspring. Over many generations, advantageous traits become more common in the population — this is evolution by natural selection."
        }
      ],
      flashcards: [
        { id: "biology-201-l07-f1", front: "What are the four conditions for natural selection?", back: "1) Variation exists, 2) Variation is heritable, 3) Overproduction of offspring, 4) Differential survival and reproduction (fitness)." },
        { id: "biology-201-l07-f2", front: "How did peppered moths demonstrate natural selection?", back: "Soot darkened trees during industrialization. Dark moths were camouflaged and survived better. When pollution dropped, light moths rebounded. The environment selected the favored color." },
        { id: "biology-201-l07-f3", front: "Why is antibiotic resistance an example of evolution?", back: "Random mutations give some bacteria resistance. Antibiotics kill non-resistant bacteria, so resistant ones survive and reproduce, passing the trait to the next generation." },
        { id: "biology-201-l07-f4", front: "Do organisms choose to evolve?", back: "No. Mutations are random. Natural selection favors traits that improve survival in the current environment. Evolution is a population-level process over many generations." }
      ],
      learningAids: [
        { id: "biology-201-l07-a1", type: "image", title: "Peppered Moth Timeline", content: "Before/during/after Industrial Revolution images showing moth color frequency changes on light and dark trees." },
        { id: "biology-201-l07-a2", type: "practice", title: "Selection Scenario", content: "A population of lizards lives on an island. A drought kills most of the plants. Lizards with longer legs can run faster to find remaining food. Predict what happens to the leg-length distribution over 10 generations." }
      ]
    },
    {
      id: "biology-201-l08",
      title: "Human Impact on Biodiversity",
      type: "interactive",
      duration: 10,
      objectives: ["Identify major human threats to biodiversity", "Propose conservation strategies for a given scenario"],
      interactiveActivities: [
        {
          id: "biology-201-l08-ia1",
          type: "matching_pairs",
          title: "Threat and Conservation Strategy",
          description: "Match each human threat to the most effective conservation response.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Deforestation for farmland" },
              { id: "l2", label: "Overfishing in the ocean" },
              { id: "l3", label: "Invasive species introduced by shipping" },
              { id: "l4", label: "Climate change from fossil fuels" }
            ],
            right: [
              { id: "r1", label: "Establish protected forest reserves and sustainable agriculture" },
              { id: "r2", label: "Set fishing quotas and create marine protected areas" },
              { id: "r3", label: "Inspect cargo and remove non-native species early" },
              { id: "r4", label: "Reduce greenhouse gas emissions and shift to renewable energy" }
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
          id: "biology-201-l08-c1",
          title: "Why Biodiversity Matters",
          kind: "concept",
          content: "Biodiversity — the variety of life in an ecosystem — provides essential services: clean air, water filtration, crop pollination, medicine, and climate regulation. When species disappear, these services weaken. Scientists estimate we are losing species 100–1,000 times faster than the natural background rate, largely due to habitat destruction, pollution, overexploitation, invasive species, and climate change."
        }
      ],
      learningAids: [
        { id: "biology-201-l08-a1", type: "practice", title: "Conservation Plan", content: "Choose a local ecosystem (a park, river, or forest near you). Identify one human threat it faces and design a two-step conservation plan." }
      ]
    },
    {
      id: "biology-201-l09",
      title: "Review: Systems in Biology",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l09-q1",
          text: "Which sequence correctly describes a negative feedback loop for blood sugar regulation?",
          skillId: "biology-201-skill-homeostasis",
          options: [
            { id: "a", text: "Blood sugar rises → glucagon released → cells absorb glucose → blood sugar drops" },
            { id: "b", text: "Blood sugar rises → insulin released → cells absorb glucose → blood sugar drops" },
            { id: "c", text: "Blood sugar drops → insulin released → liver releases glucose → blood sugar rises" },
            { id: "d", text: "Blood sugar drops → adrenaline released → cells absorb glucose → blood sugar drops further" }
          ],
          correctOptionId: "b"
        },
        {
          id: "biology-201-l09-q2",
          text: "A Bb × bb cross produces offspring. What is the expected ratio of dominant to recessive phenotypes?",
          skillId: "biology-201-skill-genetics",
          options: [
            { id: "a", text: "3:1" },
            { id: "b", text: "1:1" },
            { id: "c", text: "All dominant" },
            { id: "d", text: "All recessive" }
          ],
          correctOptionId: "b"
        },
        {
          id: "biology-201-l09-q3",
          text: "Bacteria exposed to an antibiotic develop resistance over generations. Which condition of natural selection does this BEST illustrate?",
          skillId: "biology-201-skill-evolution",
          options: [
            { id: "a", text: "Organisms choose to mutate when threatened" },
            { id: "b", text: "Overproduction leads to competition among identical organisms" },
            { id: "c", text: "Individuals with heritable advantageous traits survive and reproduce more" },
            { id: "d", text: "Mutations always make organisms stronger" }
          ],
          correctOptionId: "c"
        },
        {
          id: "biology-201-l09-q4",
          text: "A food chain has four trophic levels. If producers capture 50,000 kJ, approximately how much energy reaches the tertiary consumers?",
          skillId: "biology-201-skill-ecology",
          options: [
            { id: "a", text: "5,000 kJ" },
            { id: "b", text: "500 kJ" },
            { id: "c", text: "50 kJ" },
            { id: "d", text: "5 kJ" }
          ],
          correctOptionId: "c"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l09-ia1",
          type: "sorting_buckets",
          title: "Feedback Loop Sort",
          description: "Sort each example into negative feedback or positive feedback.",
          estimatedMinutes: 6,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "neg", label: "Negative Feedback" },
              { id: "pos", label: "Positive Feedback" }
            ],
            items: [
              { id: "i1", label: "Insulin lowers blood sugar after eating", correctBucketId: "neg" },
              { id: "i2", label: "Oxytocin strengthens contractions during labor", correctBucketId: "pos" },
              { id: "i3", label: "Sweating cools the body when overheated", correctBucketId: "neg" },
              { id: "i4", label: "Platelets recruit more platelets to a wound", correctBucketId: "pos" },
              { id: "i5", label: "Shivering warms the body when cold", correctBucketId: "neg" }
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
        { id: "biology-201-l09-a1", type: "mnemonic", title: "Negative vs. Positive", content: "Negative = 'no, go back' (reverses change). Positive = 'yes, keep going' (amplifies change until a stopping event)." }
      ]
    },
    {
      id: "biology-201-l10",
      title: "DNA and Protein Synthesis",
      type: "video",
      duration: 12,
      objectives: ["Describe the structure of DNA", "Outline the steps from DNA to protein"],
      chunks: [
        {
          id: "biology-201-l10-c1",
          title: "The Structure of DNA",
          kind: "intro",
          content: "DNA (deoxyribonucleic acid) is a double helix — two strands twisted like a spiral staircase. The 'rails' are sugar-phosphate backbones. The 'steps' are pairs of nitrogen bases: adenine (A) pairs with thymine (T), and cytosine (C) pairs with guanine (G). This base-pairing rule means one strand is the template for the other."
        },
        {
          id: "biology-201-l10-c2",
          title: "From Gene to Protein",
          kind: "concept",
          content: "A gene is a section of DNA that codes for a protein. First, the DNA is transcribed into mRNA (messenger RNA) in the nucleus — this is like copying a recipe from a cookbook. Then mRNA travels to a ribosome, where it is translated: every three bases (a codon) specify one amino acid. The chain of amino acids folds into a protein that does work in the cell."
        },
        {
          id: "biology-201-l10-c3",
          title: "Mutations",
          kind: "concept",
          content: "A mutation is a change in the DNA base sequence. Some mutations are harmless (silent mutations). Others change the amino acid and may alter the protein's function (missense mutations). A few can be beneficial — sickle-cell trait in one copy protects against malaria. Mutations are the raw material for natural selection."
        },
        {
          id: "biology-201-l10-c4",
          title: "DNA → RNA → Protein Summary",
          kind: "practice",
          content: "Given the DNA template strand: TAC GGA CTC ATT. Write the mRNA sequence, then use a codon chart to find the amino acid sequence. (Hint: TAC → AUG → Methionine, which is always the start codon.)"
        }
      ],
      flashcards: [
        { id: "biology-201-l10-f1", front: "What are the base-pairing rules in DNA?", back: "Adenine (A) pairs with Thymine (T). Cytosine (C) pairs with Guanine (G). In RNA, uracil (U) replaces thymine." },
        { id: "biology-201-l10-f2", front: "What is transcription?", back: "The process of copying a gene's DNA sequence into messenger RNA (mRNA) in the nucleus." },
        { id: "biology-201-l10-f3", front: "What is translation?", back: "The process of reading mRNA codons at a ribosome to build a chain of amino acids (a protein)." },
        { id: "biology-201-l10-f4", front: "What is a codon?", back: "A sequence of three mRNA bases that codes for one specific amino acid. For example, AUG codes for methionine (the start signal)." }
      ],
      learningAids: [
        { id: "biology-201-l10-a1", type: "image", title: "Central Dogma Diagram", content: "A flow diagram showing DNA → (transcription) → mRNA → (translation) → Protein, with labeled steps in nucleus and ribosome." },
        { id: "biology-201-l10-a2", type: "animation", title: "Protein Synthesis Animation", content: "Step-by-step animation of mRNA being read by a ribosome, with tRNA molecules bringing amino acids one at a time." }
      ]
    },
    {
      id: "biology-201-l11",
      title: "Ecosystem Disruption Lab",
      type: "interactive",
      duration: 14,
      objectives: ["Predict the effects of removing a species from a food web", "Evaluate strategies for ecological restoration"],
      interactiveActivities: [
        {
          id: "biology-201-l11-ia1",
          type: "sorting_buckets",
          title: "Trophic Level Sort",
          description: "Sort each organism into the correct trophic level of a grassland food web.",
          estimatedMinutes: 9,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "producer", label: "Producer" },
              { id: "primary", label: "Primary Consumer" },
              { id: "secondary", label: "Secondary Consumer" },
              { id: "decomposer", label: "Decomposer" }
            ],
            items: [
              { id: "i1", label: "Prairie grass", correctBucketId: "producer" },
              { id: "i2", label: "Grasshopper", correctBucketId: "primary" },
              { id: "i3", label: "Field mouse", correctBucketId: "primary" },
              { id: "i4", label: "Snake", correctBucketId: "secondary" },
              { id: "i5", label: "Hawk", correctBucketId: "secondary" },
              { id: "i6", label: "Soil bacteria", correctBucketId: "decomposer" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "biology-201-l11-c1",
          title: "Keystone Species",
          kind: "concept",
          content: "A keystone species has a disproportionately large effect on its ecosystem relative to its abundance. Sea otters eat sea urchins. Without otters, urchins explode in number and devour kelp forests — which shelter hundreds of species. Wolves in Yellowstone control elk populations, allowing riverbank vegetation to recover, which stabilizes stream banks and increases biodiversity."
        }
      ],
      learningAids: [
        { id: "biology-201-l11-a1", type: "practice", title: "Keystone Removal Prediction", content: "In a coral reef, parrotfish eat algae off the coral. If parrotfish are overfished, predict what happens to algae growth, coral health, and fish that depend on coral shelter." }
      ]
    },
    {
      id: "biology-201-l12",
      title: "Checkpoint: Evolution and DNA",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "biology-201-l12-q1",
          text: "During transcription, the DNA template strand TAC is copied into which mRNA codon?",
          skillId: "biology-201-skill-dna",
          options: [
            { id: "a", text: "TAC" },
            { id: "b", text: "AUG" },
            { id: "c", text: "ATG" },
            { id: "d", text: "UAC" }
          ],
          correctOptionId: "b"
        },
        {
          id: "biology-201-l12-q2",
          text: "Which organism is a primary consumer in a grassland food web?",
          skillId: "biology-201-skill-ecology",
          options: [
            { id: "a", text: "Hawk" },
            { id: "b", text: "Snake" },
            { id: "c", text: "Grasshopper" },
            { id: "d", text: "Soil fungus" }
          ],
          correctOptionId: "c"
        },
        {
          id: "biology-201-l12-q3",
          text: "What happens when a keystone predator like wolves is removed from an ecosystem?",
          skillId: "biology-201-skill-ecology",
          options: [
            { id: "a", text: "Nothing changes because other predators fill the role" },
            { id: "b", text: "Herbivore populations increase, leading to overgrazing and habitat loss" },
            { id: "c", text: "Plant populations immediately increase" },
            { id: "d", text: "All prey species go extinct" }
          ],
          correctOptionId: "b"
        },
        {
          id: "biology-201-l12-q4",
          text: "A mutation changes one DNA base pair but does not change the amino acid produced. This is called a:",
          skillId: "biology-201-skill-dna",
          options: [
            { id: "a", text: "Missense mutation" },
            { id: "b", text: "Nonsense mutation" },
            { id: "c", text: "Silent mutation" },
            { id: "d", text: "Frameshift mutation" }
          ],
          correctOptionId: "c"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l12-ia1",
          type: "matching_pairs",
          title: "Mutation Types Match",
          description: "Match each mutation type to its effect on the protein.",
          estimatedMinutes: 6,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "Silent mutation" },
              { id: "l2", label: "Missense mutation" },
              { id: "l3", label: "Nonsense mutation" }
            ],
            right: [
              { id: "r1", label: "No change in the amino acid — protein works normally" },
              { id: "r2", label: "One amino acid changes — protein may function differently" },
              { id: "r3", label: "A premature stop codon — protein is truncated and usually nonfunctional" }
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
        { id: "biology-201-l12-a1", type: "mnemonic", title: "DNA Base Pairs", content: "Remember 'Apple Tree, Car Garage' — A pairs with T, C pairs with G. In RNA, replace T with U (Uracil)." }
      ]
    },
    {
      id: "biology-201-l13",
      title: "Biology Scenario Lab: Coral Reef Crisis",
      type: "video",
      duration: 12,
      objectives: ["Apply multiple biology concepts to a real-world scenario", "Evaluate trade-offs in conservation decisions"],
      chunks: [
        {
          id: "biology-201-l13-c1",
          title: "The Scenario",
          kind: "intro",
          content: "A tropical coral reef is showing signs of distress: coral bleaching is increasing, fish populations are declining, and algae is taking over. Local fishing communities depend on the reef for their livelihood. Your task is to analyze the situation using what you've learned about ecosystems, food webs, and human impact."
        },
        {
          id: "biology-201-l13-c2",
          title: "Analyzing the Food Web",
          kind: "example",
          content: "The reef food web: algae and coral (producers) → parrotfish and sea urchins (primary consumers) → grouper and moray eels (secondary consumers) → reef sharks (tertiary consumers). Overfishing has reduced parrotfish numbers by 60%. Without parrotfish grazing, algae smothers coral. Coral bleaching (caused by warming water) weakens coral further."
        },
        {
          id: "biology-201-l13-c3",
          title: "Homeostasis at the Ecosystem Level",
          kind: "concept",
          content: "Healthy reefs maintain a balance — like homeostasis but for the whole ecosystem. Parrotfish are a keystone species that keep algae in check, allowing coral to grow. Climate change disrupts this balance by warming water, causing coral to expel their symbiotic algae (zooxanthellae), turning white — coral bleaching."
        },
        {
          id: "biology-201-l13-c4",
          title: "Your Conservation Plan",
          kind: "practice",
          content: "Propose a two-part plan: 1) An immediate action to protect the reef (consider fishing quotas, marine protected areas, or parrotfish protection). 2) A long-term strategy to address the root cause (consider emissions, water quality, reef restoration). Explain the biology behind each choice."
        }
      ],
      flashcards: [
        { id: "biology-201-l13-f1", front: "What is coral bleaching?", back: "When stressed by warm water, coral expels its symbiotic algae (zooxanthellae), losing color and its main energy source. Prolonged bleaching kills the coral." },
        { id: "biology-201-l13-f2", front: "Why are parrotfish a keystone species on coral reefs?", back: "They eat algae that would otherwise smother coral. Without parrotfish, algae overgrows and coral cannot compete for space and light." },
        { id: "biology-201-l13-f3", front: "What is a marine protected area (MPA)?", back: "A section of ocean where human activities like fishing are limited or banned to protect biodiversity and allow ecosystems to recover." },
        { id: "biology-201-l13-f4", front: "How do food webs connect to conservation?", back: "Removing one species can cascade through the web. Effective conservation considers the entire web, not just individual species." }
      ],
      learningAids: [
        { id: "biology-201-l13-a1", type: "image", title: "Coral Reef Food Web", content: "Illustrated food web showing algae, coral, parrotfish, urchins, grouper, eels, and reef sharks with feeding arrows." },
        { id: "biology-201-l13-a2", type: "animation", title: "Coral Bleaching Process", content: "Animation showing healthy coral with zooxanthellae, then warming water causing expulsion, bleaching, and eventual recovery or death." }
      ]
    },
    {
      id: "biology-201-l14",
      title: "Genetics Problem-Solving Workshop",
      type: "interactive",
      duration: 13,
      objectives: ["Solve two-trait Punnett square problems", "Predict inheritance patterns in real-world scenarios"],
      interactiveActivities: [
        {
          id: "biology-201-l14-ia1",
          type: "drag_and_drop",
          title: "Dihybrid Cross Organizer",
          description: "A plant has round (R) dominant over wrinkled (r) seeds, and yellow (Y) dominant over green (y). Cross RrYy × RrYy. Drag the correct phenotype ratio into each category.",
          estimatedMinutes: 10,
          difficultyLevel: "hard",
          data: {
            targets: [
              { id: "ry", label: "Round, Yellow" },
              { id: "rg", label: "Round, Green" },
              { id: "wy", label: "Wrinkled, Yellow" },
              { id: "wg", label: "Wrinkled, Green" }
            ],
            draggables: [
              { id: "d1", label: "9 out of 16", correctTargetId: "ry" },
              { id: "d2", label: "3 out of 16", correctTargetId: "rg" },
              { id: "d3", label: "3 out of 16", correctTargetId: "wy" },
              { id: "d4", label: "1 out of 16", correctTargetId: "wg" }
            ]
          }
        }
      ],
      chunks: [
        {
          id: "biology-201-l14-c1",
          title: "Dihybrid Crosses",
          kind: "concept",
          content: "A dihybrid cross tracks two traits at once. Mendel's law of independent assortment says genes on different chromosomes are inherited independently. When both parents are heterozygous for two traits (RrYy × RrYy), the expected phenotype ratio is 9:3:3:1. This only works when genes are on different chromosomes (unlinked)."
        }
      ],
      learningAids: [
        { id: "biology-201-l14-a1", type: "practice", title: "Genetics Case", content: "In guinea pigs, black fur (B) is dominant over white (b), and rough coat (R) is dominant over smooth (r). Cross BbRr × BbRr. What fraction of offspring will have white, smooth fur?" }
      ]
    },
    {
      id: "biology-201-l15",
      title: "Mastery: Biology Systems and Change",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "biology-201-l15-q1",
          text: "Blood clotting is an example of positive feedback because:",
          skillId: "biology-201-skill-homeostasis",
          options: [
            { id: "a", text: "It reverses the bleeding by reducing blood flow" },
            { id: "b", text: "It amplifies the clotting response — each platelet recruits more platelets" },
            { id: "c", text: "The body tries to stop the clotting process" },
            { id: "d", text: "Clotting has no feedback mechanism" }
          ],
          correctOptionId: "b"
        },
        {
          id: "biology-201-l15-q2",
          text: "In a dihybrid cross of RrYy × RrYy, what is the expected phenotype ratio?",
          skillId: "biology-201-skill-genetics",
          options: [
            { id: "a", text: "3:1" },
            { id: "b", text: "1:2:1" },
            { id: "c", text: "9:3:3:1" },
            { id: "d", text: "1:1:1:1" }
          ],
          correctOptionId: "c"
        },
        {
          id: "biology-201-l15-q3",
          text: "The DNA codon TAC is transcribed into the mRNA codon AUG, which codes for methionine. This entire process illustrates:",
          skillId: "biology-201-skill-dna",
          options: [
            { id: "a", text: "Natural selection" },
            { id: "b", text: "The central dogma of molecular biology (DNA → RNA → Protein)" },
            { id: "c", text: "A negative feedback loop" },
            { id: "d", text: "Homeostasis in the cell" }
          ],
          correctOptionId: "b"
        },
        {
          id: "biology-201-l15-q4",
          text: "If wolves are reintroduced to an area with too many deer, what is the most likely long-term outcome?",
          skillId: "biology-201-skill-ecology",
          options: [
            { id: "a", text: "Deer population decreases, vegetation recovers, overall biodiversity increases" },
            { id: "b", text: "Deer population increases because wolves attract more deer" },
            { id: "c", text: "Vegetation decreases because wolves eat plants too" },
            { id: "d", text: "No change — wolves have no effect on deer behavior" }
          ],
          correctOptionId: "a"
        },
        {
          id: "biology-201-l15-q5",
          text: "A species of desert beetle develops a waxy coating that prevents water loss. This trait spread through the population because individuals with the coating survived droughts better. This is an example of:",
          skillId: "biology-201-skill-evolution",
          options: [
            { id: "a", text: "Positive feedback" },
            { id: "b", text: "Genetic drift" },
            { id: "c", text: "Adaptation through natural selection" },
            { id: "d", text: "An organism choosing to evolve" }
          ],
          correctOptionId: "c"
        }
      ],
      interactiveActivities: [
        {
          id: "biology-201-l15-ia1",
          type: "matching_pairs",
          title: "Biology Concepts Integration",
          description: "Match each biology concept to the correct real-world example.",
          estimatedMinutes: 8,
          difficultyLevel: "hard",
          instructions: [
            "Read each concept carefully.",
            "Find the real-world example that best illustrates it.",
            "Think about which lesson each example connects to."
          ],
          data: {
            left: [
              { id: "l1", label: "Negative feedback loop" },
              { id: "l2", label: "Keystone species" },
              { id: "l3", label: "Natural selection" },
              { id: "l4", label: "10% energy rule" },
              { id: "l5", label: "Dihybrid cross" }
            ],
            right: [
              { id: "r1", label: "Insulin lowering blood sugar after a meal" },
              { id: "r2", label: "Sea otters preventing urchin overpopulation" },
              { id: "r3", label: "Antibiotic-resistant bacteria surviving treatment" },
              { id: "r4", label: "Hawks receiving only 10 kJ from 10,000 kJ of grass energy" },
              { id: "r5", label: "RrYy × RrYy producing a 9:3:3:1 phenotype ratio" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" },
              { leftId: "l5", rightId: "r5" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 5,
        totalQuestions: 5,
        timeLimitMinutes: 12,
        questionTypes: [{ type: "mcq_single", count: 5, pointsEach: 1, bloomsLevels: [2, 3, 4] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.8
      },
      learningAids: [
        { id: "biology-201-l15-a1", type: "mnemonic", title: "Module Review Chain", content: "Homeostasis → Genetics → Ecosystems → Evolution → DNA → Human Impact. Each topic builds on the last — feedback loops regulate organisms, genetics drives variation, variation fuels natural selection, and human activity shapes it all." }
      ]
    }
  ],
};
