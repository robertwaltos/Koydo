import type { LearningModule } from "@/lib/modules/types";

export const biology_201_Module: LearningModule = {
  "id": "biology-201",
  "title": "Biology: Systems and Change",
  "description": "Explore the connections between DNA, genetics, ecosystems, and evolution through systems-level thinking.",
  "subject": "Biology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "systems-thinking"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Explain how positive and negative feedback loops maintain homeostasis.",
    "Describe the process of protein synthesis from a DNA template.",
    "Use Punnett squares to predict patterns of inheritance for one and two traits.",
    "Trace energy flow through trophic levels and explain the 10% rule.",
    "Describe how natural selection drives population change over time.",
    "Evaluate the impact of human activity on biodiversity and propose conservation strategies."
  ],
  "lessons": [
    {
      "id": "biology-201-l01",
      "title": "Keeping Steady: Homeostasis and Feedback",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Define homeostasis and provide examples.",
        "Distinguish between negative and positive feedback loops."
      ],
      "chunks": [
        {
          "id": "biology-201-l01-c1",
          "title": "What is Homeostasis?",
          "kind": "intro",
          "content": "Imagine it's a freezing cold day, but inside your body, you're staying warm! Homeostasis is the amazing ability of living things, like you, to keep their internal environment stable and balanced, no matter what's happening outside. Your body works hard to keep your temperature at about 37°C (98.6°F). It also balances other important things like the amount of sugar in your blood and how much water you have. This internal balance is super important for staying healthy and active."
        },
        {
          "id": "biology-201-l01-c2",
          "title": "Negative Feedback: The Balancer",
          "kind": "concept",
          "content": "Most of the time, your body uses negative feedback to stay balanced. Think of it like a thermostat in your house. If it gets too hot, the air conditioner turns on to cool it down. If it gets too cold, the heater turns on. Negative feedback works to reverse a change. For example, after you eat, your blood sugar rises. A special organ called the pancreas releases a hormone called insulin, which tells your cells to take in sugar. This brings your blood sugar back down to normal. Once it's normal, the pancreas stops releasing so much insulin. This system has three parts: a sensor to detect the change, a control center (often your brain) to decide what to do, and an effector (like a muscle or gland) to make the change happen."
        },
        {
          "id": "biology-201-l01-c3",
          "title": "Positive Feedback: The Amplifier",
          "kind": "concept",
          "content": "Sometimes, the body needs to amplify a change instead of reversing it. This is called positive feedback. It pushes a process forward until a specific goal is reached. A great example is childbirth. When the baby pushes on the cervix, it sends a signal that causes the body to release a hormone called oxytocin. Oxytocin makes the uterus contract more strongly, which pushes the baby even more. This creates a loop of stronger and stronger contractions until the baby is born. Another example is blood clotting. When you get a cut, tiny cells called platelets rush to the wound and release chemicals that attract even more platelets, quickly forming a plug to stop the bleeding."
        },
        {
          "id": "biology-201-l01-c4",
          "title": "Practice: Draw a Feedback Loop",
          "kind": "practice",
          "content": "Let's draw a diagram to show how your body controls its temperature. At the top, write 'Body temperature rises.' Draw an arrow to a box labeled 'Sensor: Brain detects heat.' From there, draw arrows to two 'Effectors': 'Sweat glands produce sweat' and 'Blood vessels in skin widen.' Finally, draw an arrow to the result: 'Body cools down.' Now, try drawing the opposite loop for when your body gets too cold!"
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l01-f1",
          "front": "What is homeostasis?",
          "back": "The process by which an organism maintains a stable internal environment, like constant body temperature or blood sugar levels."
        },
        {
          "id": "biology-201-l01-f2",
          "front": "What is negative feedback?",
          "back": "A response that reverses a change to bring the body back to a stable set point. Example: Sweating to cool down."
        },
        {
          "id": "biology-201-l01-f3",
          "front": "What is positive feedback?",
          "back": "A response that amplifies or increases a change until a specific endpoint is reached. Example: Contractions during childbirth."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l01-a1",
          "type": "image",
          "title": "Feedback Loop Comparison",
          "content": "A clear, side-by-side diagram comparing a negative feedback loop (thermostat) and a positive feedback loop (dominoes falling), with labels for sensor, control center, and effector."
        },
        {
          "id": "biology-201-l01-a2",
          "type": "animation",
          "title": "Thermoregulation in Action",
          "content": "A short animation showing a cartoon character moving from a cold, snowy environment to a hot, sunny one. Visual cues like shivering and sweating appear as the body's internal 'thermostat' adjusts."
        }
      ]
    },
    {
      "id": "biology-201-l02",
      "title": "The Blueprint of Life: DNA and Proteins",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the double helix structure of DNA and its base-pairing rules.",
        "Outline the central dogma: from DNA to RNA to protein."
      ],
      "chunks": [
        {
          "id": "biology-201-l02-c1",
          "title": "The Structure of DNA",
          "kind": "intro",
          "content": "Inside almost every cell in your body is a special instruction manual called DNA. DNA, or deoxyribonucleic acid, holds all the information needed to build and operate you! Its structure is a famous shape called a double helix, which looks like a twisted ladder. The sides of the ladder are made of sugar and phosphate, and the rungs are made of pairs of chemicals called bases. There are four bases: Adenine (A), Thymine (T), Cytosine (C), and Guanine (G). They have a special rule: A always pairs with T, and C always pairs with G. This rule is key to how DNA copies itself perfectly."
        },
        {
          "id": "biology-201-l02-c2",
          "title": "From Gene to Protein: The Central Dogma",
          "kind": "concept",
          "content": "How does the DNA instruction manual get read? Through a two-step process. First is transcription. Inside the cell's nucleus, a section of DNA (a gene) is copied into a temporary message molecule called messenger RNA (mRNA). Think of it like copying a recipe from a giant cookbook onto a small note card. Second is translation. The mRNA message travels out of the nucleus to a tiny factory called a ribosome. The ribosome reads the message three letters at a time (a 'codon') and builds a protein by linking together building blocks called amino acids. This flow of information—from DNA to RNA to Protein—is called the central dogma of biology."
        },
        {
          "id": "biology-201-l02-c3",
          "title": "What are Mutations?",
          "kind": "concept",
          "content": "A mutation is simply a change in the DNA sequence—like a typo in the instruction manual. Sometimes these typos are harmless and don't change anything (a silent mutation). Other times, they can change an amino acid, which might change how the protein works. While some mutations can cause problems, they are also the source of all genetic variation. These differences are what allow populations to change and adapt over time, a process we'll explore later!"
        },
        {
          "id": "biology-201-l02-c4",
          "title": "Practice: Transcribe and Translate",
          "kind": "practice",
          "content": "Let's try it! If a DNA template strand reads: TAC GGT CAT, what would the mRNA message be? Remember, A pairs with U (uracil) in RNA, and C pairs with G. Once you have the mRNA sequence, use a codon chart to find the amino acids it codes for. This is how your cells build everything they need!"
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l02-f1",
          "front": "What are the DNA base-pairing rules?",
          "back": "Adenine (A) pairs with Thymine (T). Cytosine (C) pairs with Guanine (G)."
        },
        {
          "id": "biology-201-l02-f2",
          "front": "What is transcription?",
          "back": "The process where a gene's DNA sequence is copied into a messenger RNA (mRNA) molecule inside the nucleus."
        },
        {
          "id": "biology-201-l02-f3",
          "front": "What is translation?",
          "back": "The process where a ribosome reads the mRNA message and builds a protein from amino acids."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l02-a1",
          "type": "image",
          "title": "The Central Dogma",
          "content": "A simple, clear flow diagram: DNA (in nucleus) → arrow labeled 'Transcription' → mRNA → arrow labeled 'Translation' (at ribosome) → Protein Chain. Each part is illustrated."
        },
        {
          "id": "biology-201-l02-a2",
          "type": "animation",
          "title": "Protein Factory",
          "content": "An animation showing a ribosome moving along an mRNA strand, with tRNA molecules bringing the correct amino acids to build a colorful, folding protein chain."
        }
      ]
    },
    {
      "id": "biology-201-l03",
      "title": "Passing on Traits: Introduction to Genetics",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Distinguish between genotype and phenotype, and dominant and recessive alleles.",
        "Complete a Punnett square for a monohybrid cross to predict offspring ratios."
      ],
      "chunks": [
        {
          "id": "biology-201-l03-c1",
          "title": "Alleles, Genotype, and Phenotype",
          "kind": "concept",
          "content": "For each gene, you get one copy from each parent. These different versions of a gene are called alleles. Some alleles are dominant (written with a capital letter, like 'B') and will always show their trait if they are present. Other alleles are recessive (written with a lowercase letter, 'b') and will only show their trait if both copies are recessive. The combination of alleles you have is your genotype (e.g., BB, Bb, or bb). The physical trait you see, like brown eyes or blue eyes, is your phenotype."
        },
        {
          "id": "biology-201-l03-c2",
          "title": "Predicting Traits with Punnett Squares",
          "kind": "example",
          "content": "A Punnett square is a simple chart that helps us predict the possible genotypes of offspring. Let's imagine two parents who are both heterozygous for brown eyes (Bb). This means they both have brown eyes but carry the recessive allele for blue eyes. If we draw a Punnett square, we can see the chances for their child: there's a 1 in 4 chance of being BB (homozygous dominant), a 2 in 4 chance of being Bb (heterozygous), and a 1 in 4 chance of being bb (homozygous recessive). This means there is a 3 in 4 chance of having a brown-eyed child and a 1 in 4 chance of having a blue-eyed child!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l03-ia1",
          "type": "drag_and_drop",
          "title": "Build a Punnett Square",
          "description": "Drag the parent alleles and offspring genotypes into the correct places on the Punnett square for a cross between two heterozygous parents (Bb × Bb).",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "tl",
                "label": "Top-left cell"
              },
              {
                "id": "tr",
                "label": "Top-right cell"
              },
              {
                "id": "bl",
                "label": "Bottom-left cell"
              },
              {
                "id": "br",
                "label": "Bottom-right cell"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "BB",
                "correctTargetId": "tl"
              },
              {
                "id": "d2",
                "label": "Bb",
                "correctTargetId": "tr"
              },
              {
                "id": "d3",
                "label": "Bb",
                "correctTargetId": "bl"
              },
              {
                "id": "d4",
                "label": "bb",
                "correctTargetId": "br"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l03-a1",
          "type": "image",
          "title": "Gene, Allele, Chromosome",
          "content": "A diagram showing a pair of chromosomes. A specific location on each is labeled 'Gene for eye color.' One chromosome has a 'B' allele (for brown) and the other has a 'b' allele (for blue)."
        },
        {
          "id": "biology-201-l03-a2",
          "type": "practice",
          "title": "Punnett Square Problems",
          "content": "Solve three simple Punnett square problems: 1) A homozygous dominant parent (BB) crosses with a heterozygous parent (Bb). 2) A heterozygous parent (Bb) crosses with a homozygous recessive parent (bb). What are the predicted genotype and phenotype ratios for each?"
        }
      ]
    },
    {
      "id": "biology-201-l04",
      "title": "Mixing Traits: Dihybrid Crosses",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Explain the law of independent assortment.",
        "Solve a dihybrid cross and predict the 9:3:3:1 phenotypic ratio."
      ],
      "chunks": [
        {
          "id": "biology-201-l04-c1",
          "title": "Tracking Two Traits at Once",
          "kind": "concept",
          "content": "What if we want to track two different traits at the same time, like seed shape and seed color in pea plants? This is called a dihybrid cross. According to Mendel's law of independent assortment, genes for different traits (if they are on different chromosomes) are inherited separately. This means that having round seeds doesn't make a plant more or less likely to have yellow seeds. When we cross two parents that are heterozygous for both traits (e.g., RrYy × RrYy), we get a predictable and famous ratio of phenotypes in the offspring: 9 (dominant, dominant), 3 (dominant, recessive), 3 (recessive, dominant), and 1 (recessive, recessive)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l04-ia1",
          "type": "drag_and_drop",
          "title": "Dihybrid Cross Ratios",
          "description": "A plant has round (R) dominant over wrinkled (r) seeds, and yellow (Y) dominant over green (y). For a RrYy × RrYy cross, drag the correct fraction to each phenotype.",
          "estimatedMinutes": 7,
          "difficultyLevel": "hard",
          "data": {
            "targets": [
              {
                "id": "ry",
                "label": "Round, Yellow"
              },
              {
                "id": "rg",
                "label": "Round, Green"
              },
              {
                "id": "wy",
                "label": "Wrinkled, Yellow"
              },
              {
                "id": "wg",
                "label": "Wrinkled, Green"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "9/16",
                "correctTargetId": "ry"
              },
              {
                "id": "d2",
                "label": "3/16",
                "correctTargetId": "rg"
              },
              {
                "id": "d3",
                "label": "3/16",
                "correctTargetId": "wy"
              },
              {
                "id": "d4",
                "label": "1/16",
                "correctTargetId": "wg"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l04-a1",
          "type": "image",
          "title": "Dihybrid Punnett Square",
          "content": "A large, 4x4 Punnett square for a RrYy x RrYy cross, clearly showing the parental gametes (RY, Ry, rY, ry) and the resulting 16 offspring genotypes, color-coded by phenotype to illustrate the 9:3:3:1 ratio."
        }
      ]
    },
    {
      "id": "biology-201-l05",
      "title": "Checkpoint: Molecules and Heredity",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Assess understanding of homeostasis, DNA, protein synthesis, and genetics."
      ],
      "questions": [
        {
          "id": "biology-201-l05-q1",
          "text": "When your body gets too cold, you shiver to generate heat. This is an example of:",
          "skillId": "biology-201-skill-homeostasis",
          "options": [
            {
              "id": "a",
              "text": "Positive feedback, because it makes you even colder."
            },
            {
              "id": "b",
              "text": "Negative feedback, because it works to reverse the change (being cold)."
            },
            {
              "id": "c",
              "text": "A genetic mutation."
            },
            {
              "id": "d",
              "text": "No feedback."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l05-q2",
          "text": "During transcription, the DNA sequence 'TGC' is copied into what mRNA codon?",
          "skillId": "biology-201-skill-dna",
          "options": [
            {
              "id": "a",
              "text": "TGC"
            },
            {
              "id": "b",
              "text": "UGC"
            },
            {
              "id": "c",
              "text": "ACG"
            },
            {
              "id": "d",
              "text": "AGC"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l05-q3",
          "text": "In pea plants, purple flowers (P) are dominant to white flowers (p). If you cross a Pp plant with a pp plant, what percentage of offspring will have white flowers?",
          "skillId": "biology-201-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "25%"
            },
            {
              "id": "b",
              "text": "50%"
            },
            {
              "id": "c",
              "text": "75%"
            },
            {
              "id": "d",
              "text": "100%"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l05-q4",
          "text": "The physical expression of a trait, such as having brown eyes, is called the:",
          "skillId": "biology-201-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "Genotype"
            },
            {
              "id": "b",
              "text": "Phenotype"
            },
            {
              "id": "c",
              "text": "Allele"
            },
            {
              "id": "d",
              "text": "Codon"
            }
          ],
          "correctOptionId": "b"
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "biology-201-l05-a1",
          "type": "mnemonic",
          "title": "Genetics Vocabulary",
          "content": "Geno-type is the gene combination. Pheno-type is the physical observation."
        }
      ]
    },
    {
      "id": "biology-201-l06",
      "title": "Change Over Time: Natural Selection",
      "type": "video",
      "duration": 12,
      "objectives": [
        "List the four conditions required for natural selection to occur.",
        "Explain how adaptations arise in a population over many generations."
      ],
      "chunks": [
        {
          "id": "biology-201-l06-c1",
          "title": "Darwin's Big Idea",
          "kind": "intro",
          "content": "Natural selection is the main process that drives evolution, or how living things change over time. For it to happen, four things must be true. First, there must be variation in a population (not everyone is identical). Second, that variation must be heritable (traits are passed from parents to kids). Third, more offspring are born than can survive, which leads to competition. And fourth, some individuals have traits that give them an advantage in surviving and reproducing. Over many, many generations, these helpful traits become more common in the population."
        },
        {
          "id": "biology-201-l06-c2",
          "title": "Example: The Peppered Moths",
          "kind": "example",
          "content": "A classic example is the peppered moth in England. Before the Industrial Revolution, most moths were light-colored, which camouflaged them on light-colored trees. But when factories covered the trees in black soot, the rare dark-colored moths were suddenly better hidden from birds. They survived more often, had more babies, and passed on their dark color. Over time, almost all the moths in industrial areas became dark. This shows how the environment 'selects' which traits are best for survival."
        },
        {
          "id": "biology-201-l06-c3",
          "title": "Adaptations are Not Choices",
          "kind": "concept",
          "content": "It's important to remember that individual organisms don't choose to adapt. The variations, like the dark color in moths, happen because of random mutations in DNA. Natural selection is the process that favors certain random variations over others in a specific environment. It's not about what an animal 'wants' or 'needs'; it's about which traits happen to work best, leading to more offspring over generations."
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l06-f1",
          "front": "What are the 4 conditions for natural selection?",
          "back": "1. Variation, 2. Heritability, 3. Overproduction of offspring (competition), 4. Differential survival and reproduction."
        },
        {
          "id": "biology-201-l06-f2",
          "front": "How is antibiotic resistance an example of natural selection?",
          "back": "Random mutations make some bacteria resistant. Antibiotics kill the non-resistant ones, so the resistant bacteria survive, reproduce, and become common."
        },
        {
          "id": "biology-201-l06-f3",
          "front": "Does an individual organism evolve?",
          "back": "No. Individuals have fixed traits. Populations evolve over many generations as the frequency of heritable traits changes."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l06-a1",
          "type": "image",
          "title": "Peppered Moth Camouflage",
          "content": "A powerful side-by-side image. On the left, a light-colored tree with a well-camouflaged light moth and an easy-to-see dark moth. On the right, a soot-covered tree with a well-camouflaged dark moth and an easy-to-see light moth."
        }
      ]
    },
    {
      "id": "biology-201-l07",
      "title": "The Flow of Energy: Food Chains and Webs",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Trace the flow of energy from producers to consumers.",
        "Explain the 10% rule of energy transfer between trophic levels."
      ],
      "chunks": [
        {
          "id": "biology-201-l07-c1",
          "title": "Producers and Consumers",
          "kind": "intro",
          "content": "In any ecosystem, energy starts with the sun! Producers, like plants, capture sunlight and turn it into food through photosynthesis. They are the foundation of the food chain. Primary consumers (herbivores) get energy by eating producers. Secondary consumers (carnivores or omnivores) get energy by eating primary consumers. And tertiary consumers are often the top predators. This path of energy from one organism to another is a food chain."
        },
        {
          "id": "biology-201-l07-c2",
          "title": "The 10% Rule",
          "kind": "concept",
          "content": "When a grasshopper eats grass, it doesn't get all the energy the grass had. A lot of energy is lost as heat as the organism lives its life. The 10% rule is a simple way to remember this: only about 10% of the energy from one level is stored and passed on to the next level. If grass has 10,000 units of energy, the grasshopper that eats it gets about 1,000 units. The frog that eats the grasshopper gets 100 units, and the hawk that eats the frog gets only 10 units. This is why food chains are usually short!"
        },
        {
          "id": "biology-201-l07-c3",
          "title": "Food Webs: A Better Picture",
          "kind": "concept",
          "content": "In reality, ecosystems are more complex than a single line. Most animals eat more than one thing. A food web shows how many different food chains are interconnected. It gives us a more realistic picture of how energy flows and how species depend on each other. Removing one species from a food web can have surprising effects on many others."
        },
        {
          "id": "biology-201-l07-c4",
          "title": "Practice: Sketch an Energy Pyramid",
          "kind": "practice",
          "content": "Draw a pyramid with four levels. Label the bottom level 'Producers (10,000 kJ)'. Label the next level up 'Primary Consumers (1,000 kJ)'. Continue up with 'Secondary Consumers (100 kJ)' and 'Tertiary Consumers (10 kJ)'. This shape helps you visualize how both energy and the number of organisms decrease as you go up the food chain."
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l07-f1",
          "front": "What is the 10% rule?",
          "back": "Only about 10% of the energy from one trophic level is transferred to the next level. The rest is lost, mostly as heat."
        },
        {
          "id": "biology-201-l07-f2",
          "front": "What is the difference between a food chain and a food web?",
          "back": "A food chain is a single pathway of energy. A food web is a more realistic model showing many interconnected food chains in an ecosystem."
        },
        {
          "id": "biology-201-l07-f3",
          "front": "Where does almost all energy in an ecosystem originally come from?",
          "back": "The sun."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l07-a1",
          "type": "image",
          "title": "Energy Pyramid",
          "content": "A colorful, labeled energy pyramid showing the four trophic levels with example organisms (grass, grasshopper, mouse, owl) and the corresponding energy units (10,000 kJ, 1,000 kJ, 100 kJ, 10 kJ) at each level."
        }
      ]
    },
    {
      "id": "biology-201-l08",
      "title": "Populations in Balance: Growth and Limits",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Compare exponential and logistic population growth.",
        "Classify limiting factors as density-dependent or density-independent."
      ],
      "chunks": [
        {
          "id": "biology-201-l08-c1",
          "title": "How Populations Grow",
          "kind": "concept",
          "content": "When a population has unlimited resources and no predators, it can grow exponentially, creating a J-shaped curve. But in the real world, resources are limited. As a population grows, it eventually reaches its carrying capacity—the maximum number of individuals the environment can support. Growth slows down and levels off, creating an S-shaped (logistic) growth curve. This is because of limiting factors."
        },
        {
          "id": "biology-201-l08-c2",
          "title": "What Limits Population Size?",
          "kind": "concept",
          "content": "Limiting factors are things that prevent a population from growing forever. Density-dependent factors have a bigger effect as the population gets more crowded. Examples include competition for food, spread of disease, and predation. Density-independent factors affect a population no matter its size. These are often natural disasters like wildfires, floods, or droughts."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l08-ia1",
          "type": "sorting_buckets",
          "title": "Limiting Factor Sort",
          "description": "Sort each environmental factor into the correct category: density-dependent or density-independent.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "dd",
                "label": "Density-Dependent"
              },
              {
                "id": "di",
                "label": "Density-Independent"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Competition for food in a crowded forest",
                "correctBucketId": "dd"
              },
              {
                "id": "i2",
                "label": "A volcanic eruption",
                "correctBucketId": "di"
              },
              {
                "id": "i3",
                "label": "A disease spreading quickly through a dense herd",
                "correctBucketId": "dd"
              },
              {
                "id": "i4",
                "label": "An early, unexpected frost",
                "correctBucketId": "di"
              },
              {
                "id": "i5",
                "label": "Increased predation as a rabbit population booms",
                "correctBucketId": "dd"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l08-a1",
          "type": "animation",
          "title": "J-Curve vs. S-Curve",
          "content": "An animation showing two graphs side-by-side. On the left, a population of bacteria grows in a J-curve. On the right, a population of rabbits grows in an S-curve, leveling off at a dotted line labeled 'Carrying Capacity'."
        }
      ]
    },
    {
      "id": "biology-201-l09",
      "title": "Ecosystem Connections: Keystone Species",
      "type": "video",
      "duration": 9,
      "objectives": [
        "Define a keystone species.",
        "Predict the effects of removing a keystone species from its ecosystem."
      ],
      "chunks": [
        {
          "id": "biology-201-l09-c1",
          "title": "What is a Keystone Species?",
          "kind": "concept",
          "content": "Imagine an arch made of stones. If you remove the central keystone, the whole arch collapses. A keystone species is an organism that has an unusually large effect on its ecosystem relative to its abundance. They are not always the biggest or most numerous, but they play a critical role in holding the ecosystem together."
        },
        {
          "id": "biology-201-l09-c2",
          "title": "Example: Sea Otters and Kelp Forests",
          "kind": "example",
          "content": "Sea otters are a classic keystone species. They love to eat sea urchins. Sea urchins, in turn, love to eat kelp. Without sea otters, the sea urchin population would explode and devour entire kelp forests. These underwater forests are vital habitats for countless other fish and invertebrates. By keeping the urchins in check, the small population of sea otters maintains the health of the entire kelp forest ecosystem."
        },
        {
          "id": "biology-201-l09-c3",
          "title": "Trophic Cascades",
          "kind": "concept",
          "content": "When you remove a keystone species (often a top predator), it can cause a chain reaction called a trophic cascade. For example, when wolves were reintroduced to Yellowstone National Park, they preyed on elk. This changed the elks' behavior—they avoided open areas near rivers. As a result, trees like aspen and willow started to grow back along the riverbanks. This stabilized the banks, provided habitat for birds, and even changed the rivers themselves. This shows how one species can indirectly affect the entire landscape."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l09-a1",
          "type": "image",
          "title": "The Sea Otter's Role",
          "content": "A simple infographic showing three panels. Panel 1: Healthy ecosystem with otters, few urchins, and lush kelp. Panel 2: 'No Otters' sign, showing an explosion of urchins. Panel 3: The result, a barren seafloor with no kelp, labeled 'Urchin Barren'."
        },
        {
          "id": "biology-201-l09-a2",
          "type": "practice",
          "title": "What if...?",
          "content": "Bees are a keystone species because they are critical pollinators. Predict what would happen to a meadow ecosystem, including the flowers, the mice that eat seeds, and the hawks that eat mice, if all the bees disappeared."
        }
      ]
    },
    {
      "id": "biology-201-l10",
      "title": "Checkpoint: Evolution and Ecology",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Assess understanding of natural selection, energy flow, population dynamics, and community interactions."
      ],
      "questions": [
        {
          "id": "biology-201-l10-q1",
          "text": "In a food chain, grass stores 50,000 kJ of energy. According to the 10% rule, how much energy is available to a secondary consumer, like a snake that eats a grass-eating mouse?",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "5,000 kJ"
            },
            {
              "id": "b",
              "text": "500 kJ"
            },
            {
              "id": "c",
              "text": "50 kJ"
            },
            {
              "id": "d",
              "text": "5 kJ"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l10-q2",
          "text": "A wildfire sweeps through a forest. This is an example of a:",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "Density-dependent limiting factor"
            },
            {
              "id": "b",
              "text": "Density-independent limiting factor"
            },
            {
              "id": "c",
              "text": "Keystone species"
            },
            {
              "id": "d",
              "text": "Trophic cascade"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l10-q3",
          "text": "Which of these is the best example of natural selection?",
          "skillId": "biology-201-skill-evolution",
          "options": [
            {
              "id": "a",
              "text": "A bodybuilder develops large muscles through exercise."
            },
            {
              "id": "b",
              "text": "A giraffe stretches its neck to reach higher leaves."
            },
            {
              "id": "c",
              "text": "In a cold climate, thicker-furred foxes are more likely to survive and have offspring."
            },
            {
              "id": "d",
              "text": "A student learns to speak a new language."
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l10-q4",
          "text": "Removing a keystone species from an ecosystem is likely to:",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "Increase the ecosystem's stability."
            },
            {
              "id": "b",
              "text": "Have little to no effect on other species."
            },
            {
              "id": "c",
              "text": "Cause a significant decrease in biodiversity."
            },
            {
              "id": "d",
              "text": "Increase the amount of energy available to producers."
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "biology-201-l10-a1",
          "type": "mnemonic",
          "title": "Energy Pyramid Shortcut",
          "content": "To find the energy, just move the decimal point one place to the left for each step you go up the food chain!"
        }
      ]
    },
    {
      "id": "biology-201-l11",
      "title": "Our Planet, Our Impact: Human Effects on Biodiversity",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Identify the major human-caused threats to biodiversity.",
        "Propose conservation strategies to mitigate these threats."
      ],
      "chunks": [
        {
          "id": "biology-201-l11-c1",
          "title": "What is Biodiversity and Why Does it Matter?",
          "kind": "intro",
          "content": "Biodiversity is the amazing variety of life on Earth, from the smallest bacteria to the largest whale. This variety is essential for healthy ecosystems. It provides us with clean air and water, pollinates our crops, and is a source for medicines. A healthy, diverse ecosystem is more resilient and can better withstand challenges like disease or climate change."
        },
        {
          "id": "biology-201-l11-c2",
          "title": "Major Threats to Biodiversity",
          "kind": "concept",
          "content": "Unfortunately, human activities are causing species to go extinct at an alarming rate. The biggest threats can be remembered with the acronym HIPPO: Habitat loss (clearing forests for farms or cities), Invasive species (new species that outcompete native ones), Pollution (chemicals in air, water, and soil), human Population growth (leading to more resource use), and Overharvesting (taking too many fish, trees, or animals)."
        },
        {
          "id": "biology-201-l11-c3",
          "title": "Conservation: How We Can Help",
          "kind": "concept",
          "content": "Conservation biology is the science of protecting biodiversity. Strategies include creating protected areas like national parks and marine reserves, passing laws to protect endangered species, restoring damaged habitats, and promoting sustainable practices in farming, fishing, and energy use. Every small action, like reducing waste or planting native flowers, can contribute to a healthier planet."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l11-ia1",
          "type": "matching_pairs",
          "title": "Threat and Solution",
          "description": "Match each threat to biodiversity with a corresponding conservation strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Habitat Loss (Deforestation)"
              },
              {
                "id": "l2",
                "label": "Overharvesting (Overfishing)"
              },
              {
                "id": "l3",
                "label": "Invasive Species"
              },
              {
                "id": "l4",
                "label": "Pollution (Climate Change)"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create protected forest reserves and promote sustainable logging."
              },
              {
                "id": "r2",
                "label": "Establish fishing quotas and create no-fish marine protected areas."
              },
              {
                "id": "r3",
                "label": "Implement strict controls at borders and ports to prevent their introduction."
              },
              {
                "id": "r4",
                "label": "Reduce greenhouse gas emissions by shifting to renewable energy sources."
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l11-a1",
          "type": "image",
          "title": "HIPPO Threats",
          "content": "An infographic with five icons, each representing a letter of HIPPO: a bulldozer (Habitat Loss), a foreign beetle (Invasive Species), a smokestack (Pollution), a crowd of people (Population), and a fishing net (Overharvesting)."
        }
      ]
    },
    {
      "id": "biology-201-l12",
      "title": "Scenario Lab: Saving the Coral Reefs",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Apply concepts of homeostasis, ecology, and human impact to a real-world problem.",
        "Evaluate the trade-offs involved in conservation decisions."
      ],
      "chunks": [
        {
          "id": "biology-201-l12-c1",
          "title": "The Crisis",
          "kind": "intro",
          "content": "Welcome to the Coral Reef Rescue Mission! Our patient is a beautiful tropical coral reef that is in trouble. The corals are turning white—a process called bleaching. Fish populations are declining, and slimy algae is starting to take over. Local communities depend on this reef for food and tourism. Your job is to use your biology knowledge to figure out what's wrong and propose a plan to save it."
        },
        {
          "id": "biology-201-l12-c2",
          "title": "Connecting the Concepts",
          "kind": "concept",
          "content": "Let's connect the dots. Coral bleaching is a failure of homeostasis. Rising ocean temperatures (due to climate change) stress the coral, causing it to expel the helpful algae that live inside it and give it food and color. From an ecology perspective, overfishing has removed too many parrotfish. Parrotfish are a keystone species because they eat algae, keeping it from smothering the coral. Without them, the food web is out of balance. This is a classic case of human impact disrupting a delicate ecosystem."
        },
        {
          "id": "biology-201-l12-c3",
          "title": "Your Conservation Plan",
          "kind": "practice",
          "content": "Now, it's your turn. Design a two-part conservation plan. Part 1: What is an immediate, local action you could take? (Hint: Think about the parrotfish). Part 2: What is a long-term, global action that's needed to address the root cause? (Hint: Think about the water temperature). Explain the biological reasoning behind each part of your plan."
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l12-f1",
          "front": "What is coral bleaching?",
          "back": "When stressed by warm water, coral expels its symbiotic algae, losing its color and main food source. This can lead to the coral's death."
        },
        {
          "id": "biology-201-l12-f2",
          "front": "Why are parrotfish important for coral reefs?",
          "back": "They are a keystone species that grazes on algae. Without them, algae can overgrow and kill the coral."
        },
        {
          "id": "biology-201-l12-f3",
          "front": "What is a marine protected area (MPA)?",
          "back": "A part of the ocean where human activities like fishing are restricted to protect the ecosystem and allow it to recover."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l12-a1",
          "type": "image",
          "title": "Healthy vs. Bleached Reef",
          "content": "A striking before-and-after photo. The 'before' shot shows a vibrant, colorful coral reef teeming with fish. The 'after' shot shows the same reef, now ghostly white and barren."
        },
        {
          "id": "biology-201-l12-a2",
          "type": "animation",
          "title": "Reef Food Web",
          "content": "An animated food web of a coral reef, showing arrows from algae to parrotfish and urchins, and from them to larger predators. When the parrotfish are clicked and removed, the algae arrow grows and starts to cover the coral icon."
        }
      ]
    },
    {
      "id": "biology-201-l13",
      "title": "Final Mastery Quiz",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize and apply knowledge from across the entire module."
      ],
      "questions": [
        {
          "id": "biology-201-l13-q1",
          "text": "The process of blood clotting, where platelets attract more platelets to seal a wound, is an example of:",
          "skillId": "biology-201-skill-homeostasis",
          "options": [
            {
              "id": "a",
              "text": "Negative feedback, because it stops the bleeding."
            },
            {
              "id": "b",
              "text": "Positive feedback, because it amplifies the clotting response."
            },
            {
              "id": "c",
              "text": "Natural selection."
            },
            {
              "id": "d",
              "text": "A trophic cascade."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l13-q2",
          "text": "The central dogma of molecular biology describes which flow of information?",
          "skillId": "biology-201-skill-dna",
          "options": [
            {
              "id": "a",
              "text": "Protein → RNA → DNA"
            },
            {
              "id": "b",
              "text": "RNA → Protein → DNA"
            },
            {
              "id": "c",
              "text": "DNA → RNA → Protein"
            },
            {
              "id": "d",
              "text": "DNA → Protein → RNA"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l13-q3",
          "text": "In a dihybrid cross of two parents with genotype RrYy, what fraction of offspring are expected to show both recessive traits (rryy)?",
          "skillId": "biology-201-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "9/16"
            },
            {
              "id": "b",
              "text": "3/16"
            },
            {
              "id": "c",
              "text": "1/4"
            },
            {
              "id": "d",
              "text": "1/16"
            }
          ],
          "correctOptionId": "d"
        },
        {
          "id": "biology-201-l13-q4",
          "text": "A species of desert beetle evolves a thicker, waxy coating that prevents water loss. This trait spreads through the population over time. This is a clear example of:",
          "skillId": "biology-201-skill-evolution",
          "options": [
            {
              "id": "a",
              "text": "A density-dependent limiting factor."
            },
            {
              "id": "b",
              "text": "Adaptation through natural selection."
            },
            {
              "id": "c",
              "text": "A learned behavior."
            },
            {
              "id": "d",
              "text": "A positive feedback loop."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l13-q5",
          "text": "If wolves (a keystone predator) are reintroduced to an ecosystem where the deer population is too high, what is the most likely long-term result?",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "The deer population will decrease, allowing vegetation to recover and increasing overall biodiversity."
            },
            {
              "id": "b",
              "text": "The deer population will increase because the ecosystem is now more balanced."
            },
            {
              "id": "c",
              "text": "The wolf population will go extinct because there is not enough food."
            },
            {
              "id": "d",
              "text": "There will be no change in the ecosystem."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.8
      },
      "learningAids": [
        {
          "id": "biology-201-l13-a1",
          "type": "mnemonic",
          "title": "Module Review Chain",
          "content": "Homeostasis (balance inside) → DNA (the code) → Genetics (passing the code) → Evolution (changing the code over time) → Ecology (how code-bearers interact) → Human Impact (how we change the system)."
        }
      ]
    }
  ]
};
