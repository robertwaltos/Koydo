import type { LearningModule } from "@/lib/modules/types";

export const Biology201Module: LearningModule = {
  "id": "biology-201",
  "title": "Biology Systems and Change",
  "description": "Connect cells, genetics, ecosystems, and adaptation through systems-level reasoning.",
  "subject": "Biology",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "2.0.0",
  "learningObjectives": [
    "Explain how positive and negative feedback loops maintain homeostasis",
    "Use Punnett squares to predict patterns of inheritance",
    "Trace energy flow through food chains and food webs",
    "Describe how natural selection drives population change over time",
    "Evaluate the impact of human activity on biodiversity"
  ],
  "lessons": [
    {
      "id": "biology-201-l01",
      "title": "Homeostasis and Feedback Loops",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Define homeostasis",
        "Distinguish negative feedback from positive feedback"
      ],
      "chunks": [
        {
          "id": "biology-201-l01-c1",
          "title": "What Is Homeostasis?",
          "kind": "intro",
          "content": "Homeostasis is a really interesting process that helps living things, like you and me, keep our insides stable, even when the outside world is changing a lot. Imagine being in a snowstorm, all bundled up, or in a hot desert; your body works hard to keep its temperature around 37 degrees Celsius, no matter what! This ability to stay stable is super important for keeping us healthy. Besides temperature, your body also controls other important things like the amount of sugar in your blood, how acidic your body fluids are (which we call pH), and how much water is in your body. All these processes work together like a team to help you feel good and function properly every day!"
        },
        {
          "id": "biology-201-l01-c2",
          "title": "Negative Feedback Loops",
          "kind": "concept",
          "content": "Our bodies are amazing at keeping everything balanced, and one way they do this is through a process called negative feedback. This means that when something changes in our body, there is a response that works to reverse that change and bring everything back to normal. For example, think about what happens when you eat a meal. After you eat, the sugar levels in your blood can go up. To help with this, your pancreas, which is an important organ, releases a special hormone called insulin. Insulin acts like a helper that tells your body’s cells to absorb the extra sugar, which lowers your blood sugar levels back to where they should be. Once your blood sugar is back to normal, the pancreas knows to slow down the release of insulin. This whole process has three important parts: the sensor, which notices the change in blood sugar; the control center, which figures out what to do; and the effector, which is the part that takes action to restore balance. Understanding how these parts work together helps us appreciate how our bodies maintain health and stability every day."
        },
        {
          "id": "biology-201-l01-c3",
          "title": "Positive Feedback Loops",
          "kind": "concept",
          "content": "Positive feedback is a fascinating process that makes changes even stronger instead of trying to reverse them. One of the best examples of positive feedback happens during childbirth. When a baby pushes against the cervix, it sends a signal that tells the body to release a special hormone called oxytocin. This hormone makes the muscles in the uterus contract more forcefully, which pushes the baby even harder against the cervix. As the baby continues to push, even more oxytocin is released, creating a cycle that leads to stronger and stronger contractions. This process continues until the baby is finally born. Another example of positive feedback is when you get a cut. If a blood vessel is hurt, tiny cells called platelets rush to the area and stick together. These platelets then attract even more platelets to help seal the wound. Positive feedback always has a specific endpoint, meaning it stops once the goal is achieved, unlike negative feedback, which works to maintain balance."
        },
        {
          "id": "biology-201-l01-c4",
          "title": "Practice: Thermoregulation Diagram",
          "kind": "practice",
          "content": "Let's practice what we've learned about negative feedback by drawing a diagram that illustrates how our bodies regulate temperature. Start by writing 'body temperature rises' at the top. Next, show the sensor, which is the hypothalamus in your brain. Then, include the effectors, which are the sweat glands and the blood vessels that dilate to help cool you down. Finally, show the result of this process, which is cooling down. Don’t forget to add the reverse path for when your body temperature drops, including actions like shivering and blood vessel constriction to help warm you up again. This diagram will help you visualize how your body maintains a stable temperature!"
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l01-f1",
          "front": "What is homeostasis?",
          "back": "The maintenance of a stable internal environment in an organism, such as constant body temperature, blood pH, and glucose levels."
        },
        {
          "id": "biology-201-l01-f2",
          "front": "How does a negative feedback loop work?",
          "back": "A change is detected by a sensor → control center activates an effector → the effector reverses the change → the system returns to its set point."
        },
        {
          "id": "biology-201-l01-f3",
          "front": "Give two examples of positive feedback.",
          "back": "1) Childbirth — oxytocin increases contractions until delivery. 2) Blood clotting — platelets recruit more platelets until the wound is sealed."
        },
        {
          "id": "biology-201-l01-f4",
          "front": "What are the three parts of a feedback loop?",
          "back": "Sensor (receptor), control center (integrator, often the brain), and effector (muscle or gland that carries out the response)."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l01-a1",
          "type": "image",
          "title": "Feedback Loop Diagram",
          "content": "Side-by-side diagrams comparing negative feedback (thermoregulation) and positive feedback (blood clotting), with labeled sensor, control center, and effector."
        },
        {
          "id": "biology-201-l01-a2",
          "type": "animation",
          "title": "Thermoregulation in Action",
          "content": "Animation showing a person moving from cold to hot environments, with the hypothalamus triggering shivering then sweating."
        }
      ]
    },
    {
      "id": "biology-201-l02",
      "title": "Genetic Patterns and Traits",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Complete a Punnett square for a monohybrid cross",
        "Distinguish dominant from recessive alleles"
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l02-ia1",
          "type": "drag_and_drop",
          "title": "Build a Punnett Square",
          "description": "Drag the correct genotypes into the Punnett square for a cross between two heterozygous parents (Bb × Bb).",
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
                "label": "Bb (from father's B)",
                "correctTargetId": "tr"
              },
              {
                "id": "d3",
                "label": "Bb (from mother's B)",
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
      "chunks": [
        {
          "id": "biology-201-l02-c1",
          "title": "Alleles and Genotypes",
          "kind": "concept",
          "content": "In every living thing, genes play a crucial role, and each gene has two copies. One copy comes from your mother, and the other comes from your father. These different versions of a gene are known as alleles. There are two main types of alleles: dominant and recessive. Dominant alleles are represented by capital letters, like 'B', while recessive alleles are shown with lowercase letters, like 'b'. If you have at least one dominant allele, whether it's in the form of 'BB' (two dominant alleles) or 'Bb' (one dominant and one recessive), you will display the dominant trait. On the other hand, you will only show the recessive trait if you have two recessive alleles, which is represented as 'bb'. The specific combination of alleles you have is called your genotype, and the way you look or the traits you express because of this genotype is known as your phenotype. Understanding these concepts helps us learn how traits are passed down from parents to their children, which is a fundamental part of biology."
        },
        {
          "id": "biology-201-l02-c2",
          "title": "Monohybrid Cross Example",
          "kind": "example",
          "content": "Let's look at a fun example of how traits can be passed down from parents to children using a monohybrid cross. Imagine two brown-eyed parents, both of whom carry a gene for blue eyes (Bb). They can have a child with blue eyes! If we create a Punnett square to visualize this, we find the following possibilities: there is a 25% chance of getting BB (brown eyes), a 50% chance of getting Bb (also brown eyes), and a 25% chance of getting bb (blue eyes). This means that the ratio of brown-eyed to blue-eyed children would be 3 brown-eyed to 1 blue-eyed. This classic 3:1 ratio was first discovered by Gregor Mendel when he studied pea plants!"
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l02-a1",
          "type": "practice",
          "title": "Punnett Square Practice",
          "content": "Complete three Punnett squares: 1) Bb × bb, 2) BB × Bb, 3) Bb × Bb. Predict phenotype ratios for each."
        }
      ]
    },
    {
      "id": "biology-201-l03",
      "title": "Checkpoint: Genetics and Homeostasis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-201-l03-q1",
          "text": "A person's body temperature rises. The hypothalamus triggers sweating, which cools the body. What type of feedback is this?",
          "skillId": "biology-201-skill-homeostasis",
          "options": [
            {
              "id": "a",
              "text": "Positive feedback, because it amplifies the original change"
            },
            {
              "id": "b",
              "text": "Negative feedback, because it reverses the original change"
            },
            {
              "id": "c",
              "text": "No feedback — the body cannot regulate temperature"
            },
            {
              "id": "d",
              "text": "Positive feedback, because sweating always increases body temperature"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l03-q2",
          "text": "In a cross between two heterozygous parents (Bb × Bb), what fraction of offspring are expected to show the recessive phenotype?",
          "skillId": "biology-201-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "1/2 (50%)"
            },
            {
              "id": "b",
              "text": "3/4 (75%)"
            },
            {
              "id": "c",
              "text": "1/4 (25%)"
            },
            {
              "id": "d",
              "text": "0% — recessive traits cannot appear"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l03-q3",
          "text": "Which of the following is an example of positive feedback?",
          "skillId": "biology-201-skill-homeostasis",
          "options": [
            {
              "id": "a",
              "text": "Insulin lowering blood sugar after a meal"
            },
            {
              "id": "b",
              "text": "Shivering when body temperature drops"
            },
            {
              "id": "c",
              "text": "Oxytocin increasing contractions during childbirth"
            },
            {
              "id": "d",
              "text": "The kidneys retaining water when you are dehydrated"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l03-q4",
          "text": "A plant with genotype Rr is crossed with an rr plant. What percentage of offspring will be heterozygous (Rr)?",
          "skillId": "biology-201-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "50%"
            },
            {
              "id": "b",
              "text": "25%"
            },
            {
              "id": "c",
              "text": "100%"
            },
            {
              "id": "d",
              "text": "75%"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Genetics Vocabulary Match",
          "description": "Match each genetics term to its correct definition.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Genotype"
              },
              {
                "id": "l2",
                "label": "Phenotype"
              },
              {
                "id": "l3",
                "label": "Heterozygous"
              },
              {
                "id": "l4",
                "label": "Homozygous"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "The combination of alleles an organism carries (e.g., Bb)"
              },
              {
                "id": "r2",
                "label": "The observable trait (e.g., brown eyes)"
              },
              {
                "id": "r3",
                "label": "Having two different alleles for a gene (e.g., Bb)"
              },
              {
                "id": "r4",
                "label": "Having two identical alleles for a gene (e.g., BB or bb)"
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
          "id": "biology-201-l03-a1",
          "type": "mnemonic",
          "title": "Punnett Square Trick",
          "content": "Remember: capital letter = dominant, lowercase = recessive. Only two lowercase letters (bb) show the recessive phenotype."
        }
      ]
    },
    {
      "id": "biology-201-l04",
      "title": "Energy Flow in Ecosystems",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Trace energy flow from producers through consumers",
        "Explain the 10% rule of energy transfer"
      ],
      "chunks": [
        {
          "id": "biology-201-l04-c1",
          "title": "Producers and Consumers",
          "kind": "intro",
          "content": "In every ecosystem, all energy begins with the sun! Producers, such as plants and algae, play a crucial role by capturing sunlight through a fascinating process called photosynthesis. During photosynthesis, these producers convert sunlight into energy, which they store in the form of glucose, a type of sugar that serves as food. This makes producers the foundation of the food chain, as they provide energy for other living things. Next in line are the primary consumers, which are herbivores that eat the producers to gain energy. After that, we have the secondary consumers, which are animals that eat the herbivores. Finally, at the top of the food chain, we find the tertiary consumers, which are often predators that eat other animals. This entire sequence of energy transfer is known as a food chain, and it beautifully illustrates how energy flows through different levels of living organisms in an ecosystem. Understanding this flow of energy helps us appreciate the interconnectedness of life on Earth!"
        },
        {
          "id": "biology-201-l04-c2",
          "title": "The 10% Rule",
          "kind": "concept",
          "content": "One of the key ideas we need to understand when we talk about how energy moves through ecosystems is called the 10% rule. This rule helps us see how energy is transferred from one level of the food chain to the next. According to this rule, only about 10% of the energy from one trophic level, or group of organisms, is passed on to the next level. The rest of the energy is lost, mostly as heat, during important processes like cellular respiration, which is how living things convert food into energy.\nLet’s look at an example to make this clearer. Imagine that grass, which is a producer, captures 10,000 kilojoules (kJ) of energy from sunlight. When a grasshopper eats the grass, it only gets about 1,000 kJ of that energy. Then, if a frog eats the grasshopper, it will receive around 100 kJ. Finally, if a hawk catches and eats the frog, it will only get about 10 kJ of energy. This pattern shows us why food chains usually have only 4 to 5 levels; there simply isn’t enough energy available to support more levels! Understanding this helps us appreciate the balance of nature and the importance of each organism in an ecosystem."
        },
        {
          "id": "biology-201-l04-c3",
          "title": "Food Webs",
          "kind": "concept",
          "content": "Ecosystems are fascinating and much more intricate than just a simple food chain. Instead of a straight line, we can think of them as food webs. A food web shows us all the different feeding relationships between various species living in a community. Imagine a big spider web where each strand connects different animals and plants! If one species is taken away, it can cause changes that affect many others in the web. For instance, if frogs were to vanish from the ecosystem, there would be fewer predators to keep insect populations in check. As a result, the number of insects might grow larger. This increase in insects could lead to a decline in the plants that those insects like to eat. These kinds of indirect effects are called trophic cascades, and they remind us how all living things are connected and depend on each other in nature."
        },
        {
          "id": "biology-201-l04-c4",
          "title": "Energy Pyramid Sketch",
          "kind": "practice",
          "content": "Now it's your turn to create an energy pyramid! Draw a pyramid with four levels to represent the different trophic levels in an ecosystem. At the base, label the first level as 'producers,' which are the plants that capture energy from the sun. The next level should be labeled 'primary consumers,' which are the herbivores that eat the producers. The third level is for 'secondary consumers,' which eat the primary consumers, and the top level is for 'tertiary consumers,' which are the top predators. Make sure to write the approximate energy available at each level, starting with 10,000 kJ at the base and decreasing as you move up the pyramid."
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l04-f1",
          "front": "What is the 10% rule?",
          "back": "Only about 10% of energy at one trophic level is transferred to the next. The rest is lost as heat through cellular respiration."
        },
        {
          "id": "biology-201-l04-f2",
          "front": "Why are food chains limited to 4–5 levels?",
          "back": "Energy is lost at each transfer (90% as heat). By the 4th or 5th level, there isn't enough energy left to support another population."
        },
        {
          "id": "biology-201-l04-f3",
          "front": "What is a trophic cascade?",
          "back": "An indirect ecological effect caused by adding or removing a species, which ripples through multiple levels of the food web."
        },
        {
          "id": "biology-201-l04-f4",
          "front": "Producer vs. consumer",
          "back": "Producers make their own food from sunlight (photosynthesis). Consumers must eat other organisms for energy."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l04-a1",
          "type": "image",
          "title": "Energy Pyramid",
          "content": "A labeled energy pyramid showing 10,000 → 1,000 → 100 → 10 kJ across four trophic levels with percentage losses marked."
        }
      ]
    },
    {
      "id": "biology-201-l05",
      "title": "Population Change Drivers",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify factors that cause populations to grow or shrink",
        "Classify limiting factors as density-dependent or density-independent"
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Limiting Factor Sort",
          "description": "Sort each factor into the correct category: density-dependent or density-independent.",
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
                "label": "Competition for food in a crowded habitat",
                "correctBucketId": "dd"
              },
              {
                "id": "i2",
                "label": "A wildfire destroying a forest",
                "correctBucketId": "di"
              },
              {
                "id": "i3",
                "label": "Disease spreading faster in dense populations",
                "correctBucketId": "dd"
              },
              {
                "id": "i4",
                "label": "A drought reducing water for all organisms",
                "correctBucketId": "di"
              },
              {
                "id": "i5",
                "label": "Predation increasing as prey become abundant",
                "correctBucketId": "dd"
              },
              {
                "id": "i6",
                "label": "A volcanic eruption wiping out nearby life",
                "correctBucketId": "di"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "biology-201-l05-c1",
          "title": "What Controls Population Size?",
          "kind": "concept",
          "content": "Populations of living organisms, like animals and plants, change over time, and understanding what controls their size is very important. One of the main reasons a population grows is when more babies are born than adults die. This means that if a lot of new individuals are added to a group, the population will get bigger. However, there are limits to how much a population can grow. These limits are called limiting factors, and they can slow down the growth of a population. There are two main types of limiting factors. The first type is called density-dependent factors. These include things like diseases that spread more easily when there are many individuals close together, competition for food and space, and predators that hunt more effectively when there are more prey. The second type is density-independent factors, which can affect populations no matter how big or small they are. Examples of these factors include changes in weather, like storms or droughts, and natural disasters such as earthquakes or floods. Density-dependent factors tend to have a stronger effect as the population grows larger, while density-independent factors can impact any population size. Understanding these factors helps us learn how populations change and adapt in their environments."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l05-a1",
          "type": "animation",
          "title": "Population Growth Curves",
          "content": "Animation comparing exponential growth (J-curve) and logistic growth (S-curve) with carrying capacity labeled."
        }
      ]
    },
    {
      "id": "biology-201-l06",
      "title": "Checkpoint: Ecology",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-201-l06-q1",
          "text": "Grass captures 20,000 kJ of energy. Approximately how much energy is available to secondary consumers?",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "20,000 kJ"
            },
            {
              "id": "b",
              "text": "2,000 kJ"
            },
            {
              "id": "c",
              "text": "200 kJ"
            },
            {
              "id": "d",
              "text": "20 kJ"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l06-q2",
          "text": "Which of the following is a density-dependent limiting factor?",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "Earthquake"
            },
            {
              "id": "b",
              "text": "Wildfire"
            },
            {
              "id": "c",
              "text": "Competition for nesting sites"
            },
            {
              "id": "d",
              "text": "Flood"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l06-q3",
          "text": "In a food web, removing all the frogs would most likely cause:",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "No change — other species are unaffected"
            },
            {
              "id": "b",
              "text": "An increase in the insect population that frogs used to eat"
            },
            {
              "id": "c",
              "text": "An increase in the hawk population"
            },
            {
              "id": "d",
              "text": "A decrease in the grass population"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l06-q4",
          "text": "Why does a population's growth slow as it approaches carrying capacity?",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "Resources become limited and competition increases"
            },
            {
              "id": "b",
              "text": "The population starts reproducing faster"
            },
            {
              "id": "c",
              "text": "Predators disappear from the ecosystem"
            },
            {
              "id": "d",
              "text": "Temperature always decreases at high population sizes"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Ecosystem Roles Match",
          "description": "Match each organism to its role in the food web.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Oak tree"
              },
              {
                "id": "l2",
                "label": "Rabbit"
              },
              {
                "id": "l3",
                "label": "Fox"
              },
              {
                "id": "l4",
                "label": "Mushroom"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Producer — makes food via photosynthesis"
              },
              {
                "id": "r2",
                "label": "Primary consumer — eats plants"
              },
              {
                "id": "r3",
                "label": "Secondary consumer — eats herbivores"
              },
              {
                "id": "r4",
                "label": "Decomposer — breaks down dead organisms"
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
          "id": "biology-201-l06-a1",
          "type": "mnemonic",
          "title": "Energy Pyramid Shortcut",
          "content": "Divide by 10 at each step: producers → 1/10 → primary consumers → 1/10 → secondary consumers."
        }
      ]
    },
    {
      "id": "biology-201-l07",
      "title": "Natural Selection and Adaptation",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the four conditions for natural selection",
        "Explain how adaptations arise over generations"
      ],
      "chunks": [
        {
          "id": "biology-201-l07-c1",
          "title": "Darwin's Big Idea",
          "kind": "intro",
          "content": "Natural selection is a key idea that helps us understand how living things change over time, a process known as evolution. For natural selection to happen, there are four important conditions that need to be met. First, there must be variation within a population. This means that not all individuals are the same; they have different traits, like color, size, or abilities. Second, some of these traits can be passed down from parents to their young, which is what we call heritable traits. This is important because it allows certain characteristics to continue in future generations. Third, more young are born than can survive to grow up. This creates competition for food, shelter, and other resources. Finally, individuals that have traits that help them survive better in their environment are more likely to live longer and have babies. Over many generations, these helpful traits become more common in the population, leading to changes in the species. This process is how evolution occurs, shaping the diversity of life we see today."
        },
        {
          "id": "biology-201-l07-c2",
          "title": "Adaptation Through Selection",
          "kind": "concept",
          "content": "The peppered moth is a fascinating example of how animals can adapt to their environment over time. Before the Industrial Revolution, most peppered moths had light-colored wings. This light color helped them blend in with the pale tree bark where they liked to rest, making it hard for birds to spot them. However, as factories began to produce more pollution, soot covered the trees and turned them dark. This change made it easier for birds to see the lighter moths against the dark bark. Because of this, the darker moths, which were harder for the birds to see, had a better chance of surviving and reproducing. Over many generations, the number of dark moths increased because they were better suited to their new environment. Later, when pollution was reduced and the trees became lighter again, the lighter moths started to thrive once more. This story of the peppered moth illustrates how natural selection works, showing us that the environment can play a big role in which traits are helpful for survival and reproduction. It teaches us about the importance of adaptation in nature and how living things can change over time to better fit their surroundings."
        },
        {
          "id": "biology-201-l07-c3",
          "title": "Antibiotic Resistance",
          "kind": "example",
          "content": "Bacteria are tiny living organisms that can reproduce very quickly, which means that natural selection can happen rapidly among them. When a doctor prescribes antibiotics to treat an infection, these medications work to kill most of the bacteria causing the illness. However, some bacteria might have a special mutation that makes them resistant to the antibiotic. This means that these resistant bacteria can survive even when the antibiotic is present. Once they survive, they can continue to reproduce, leading to a new generation of bacteria that are all resistant to that antibiotic. This is why it is so important for patients to finish their entire course of antibiotics, even if they start to feel better. If they stop taking the medication too soon, the strongest bacteria may survive and multiply, making the infection harder to treat in the future. By completing the full course, we help ensure that all the harmful bacteria are eliminated, reducing the chance of creating superbugs that are difficult to treat."
        },
        {
          "id": "biology-201-l07-c4",
          "title": "Selection vs. Intelligent Design of Traits",
          "kind": "concept",
          "content": "It's really interesting to learn how living things change over time! First, we need to know that organisms, like plants and animals, don't make a choice to adapt to their surroundings. Instead, changes happen in their DNA, which are called mutations, and these changes occur by chance. This means that sometimes, a random change can give an organism a special trait that helps it survive better in its environment. This process is called natural selection. When an organism has a trait that helps it live longer and have more babies, that trait is more likely to be passed on to the next generation. Over many generations, these helpful traits become more common among the group. This slow change in traits over time is what we call evolution by natural selection. So, while it might look like organisms are 'choosing' to adapt, it's really the environment that helps decide which traits are the most useful!"
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l07-f1",
          "front": "What are the four conditions for natural selection?",
          "back": "1) Variation exists, 2) Variation is heritable, 3) Overproduction of offspring, 4) Differential survival and reproduction (fitness)."
        },
        {
          "id": "biology-201-l07-f2",
          "front": "How did peppered moths demonstrate natural selection?",
          "back": "Soot darkened trees during industrialization. Dark moths were camouflaged and survived better. When pollution dropped, light moths rebounded. The environment selected the favored color."
        },
        {
          "id": "biology-201-l07-f3",
          "front": "Why is antibiotic resistance an example of evolution?",
          "back": "Random mutations give some bacteria resistance. Antibiotics kill non-resistant bacteria, so resistant ones survive and reproduce, passing the trait to the next generation."
        },
        {
          "id": "biology-201-l07-f4",
          "front": "Do organisms choose to evolve?",
          "back": "No. Mutations are random. Natural selection favors traits that improve survival in the current environment. Evolution is a population-level process over many generations."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l07-a1",
          "type": "image",
          "title": "Peppered Moth Timeline",
          "content": "Before/during/after Industrial Revolution images showing moth color frequency changes on light and dark trees."
        },
        {
          "id": "biology-201-l07-a2",
          "type": "practice",
          "title": "Selection Scenario",
          "content": "A population of lizards lives on an island. A drought kills most of the plants. Lizards with longer legs can run faster to find remaining food. Predict what happens to the leg-length distribution over 10 generations."
        }
      ]
    },
    {
      "id": "biology-201-l08",
      "title": "Human Impact on Biodiversity",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Identify major human threats to biodiversity",
        "Propose conservation strategies for a given scenario"
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l08-ia1",
          "type": "matching_pairs",
          "title": "Threat and Conservation Strategy",
          "description": "Match each human threat to the most effective conservation response.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Deforestation for farmland"
              },
              {
                "id": "l2",
                "label": "Overfishing in the ocean"
              },
              {
                "id": "l3",
                "label": "Invasive species introduced by shipping"
              },
              {
                "id": "l4",
                "label": "Climate change from fossil fuels"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Establish protected forest reserves and sustainable agriculture"
              },
              {
                "id": "r2",
                "label": "Set fishing quotas and create marine protected areas"
              },
              {
                "id": "r3",
                "label": "Inspect cargo and remove non-native species early"
              },
              {
                "id": "r4",
                "label": "Reduce greenhouse gas emissions and shift to renewable energy"
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
      "chunks": [
        {
          "id": "biology-201-l08-c1",
          "title": "Why Biodiversity Matters",
          "kind": "concept",
          "content": "Biodiversity is a term that describes the incredible variety of life forms found within an ecosystem. This diversity is not just interesting; it is vital for the health of our planet and all its inhabitants. A rich variety of species contributes to essential services that we all rely on. For example, biodiversity helps provide us with clean air to breathe, filters our water naturally, and even assists in the pollination of crops that we eat. Additionally, many medicines we use come from plants and animals, and biodiversity plays a key role in regulating our climate. When species go extinct, these important services can become weaker, which can lead to serious problems for both the environment and human life. Scientists are very concerned because they estimate that we are losing species at a rate that is 100 to 1,000 times faster than what would happen naturally. This rapid decline is mainly caused by human activities such as destroying habitats, polluting the environment, overfishing, introducing harmful invasive species, and the impacts of climate change. Therefore, protecting biodiversity is crucial for ensuring a healthy and sustainable planet for future generations."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l08-a1",
          "type": "practice",
          "title": "Conservation Plan",
          "content": "Choose a local ecosystem (a park, river, or forest near you). Identify one human threat it faces and design a two-step conservation plan."
        }
      ]
    },
    {
      "id": "biology-201-l09",
      "title": "Review: Systems in Biology",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-201-l09-q1",
          "text": "Which sequence correctly describes a negative feedback loop for blood sugar regulation?",
          "skillId": "biology-201-skill-homeostasis",
          "options": [
            {
              "id": "a",
              "text": "Blood sugar rises → glucagon released → cells absorb glucose → blood sugar drops"
            },
            {
              "id": "b",
              "text": "Blood sugar rises → insulin released → cells absorb glucose → blood sugar drops"
            },
            {
              "id": "c",
              "text": "Blood sugar drops → insulin released → liver releases glucose → blood sugar rises"
            },
            {
              "id": "d",
              "text": "Blood sugar drops → adrenaline released → cells absorb glucose → blood sugar drops further"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l09-q2",
          "text": "A Bb × bb cross produces offspring. What is the expected ratio of dominant to recessive phenotypes?",
          "skillId": "biology-201-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "3:1"
            },
            {
              "id": "b",
              "text": "1:1"
            },
            {
              "id": "c",
              "text": "All dominant"
            },
            {
              "id": "d",
              "text": "All recessive"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l09-q3",
          "text": "Bacteria exposed to an antibiotic develop resistance over generations. Which condition of natural selection does this BEST illustrate?",
          "skillId": "biology-201-skill-evolution",
          "options": [
            {
              "id": "a",
              "text": "Organisms choose to mutate when threatened"
            },
            {
              "id": "b",
              "text": "Overproduction leads to competition among identical organisms"
            },
            {
              "id": "c",
              "text": "Individuals with heritable advantageous traits survive and reproduce more"
            },
            {
              "id": "d",
              "text": "Mutations always make organisms stronger"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l09-q4",
          "text": "A food chain has four trophic levels. If producers capture 50,000 kJ, approximately how much energy reaches the tertiary consumers?",
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
          "correctOptionId": "c"
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l09-ia1",
          "type": "sorting_buckets",
          "title": "Feedback Loop Sort",
          "description": "Sort each example into negative feedback or positive feedback.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "neg",
                "label": "Negative Feedback"
              },
              {
                "id": "pos",
                "label": "Positive Feedback"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Insulin lowers blood sugar after eating",
                "correctBucketId": "neg"
              },
              {
                "id": "i2",
                "label": "Oxytocin strengthens contractions during labor",
                "correctBucketId": "pos"
              },
              {
                "id": "i3",
                "label": "Sweating cools the body when overheated",
                "correctBucketId": "neg"
              },
              {
                "id": "i4",
                "label": "Platelets recruit more platelets to a wound",
                "correctBucketId": "pos"
              },
              {
                "id": "i5",
                "label": "Shivering warms the body when cold",
                "correctBucketId": "neg"
              }
            ]
          }
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
          "id": "biology-201-l09-a1",
          "type": "mnemonic",
          "title": "Negative vs. Positive",
          "content": "Negative = 'no, go back' (reverses change). Positive = 'yes, keep going' (amplifies change until a stopping event)."
        }
      ]
    },
    {
      "id": "biology-201-l10",
      "title": "DNA and Protein Synthesis",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the structure of DNA",
        "Outline the steps from DNA to protein"
      ],
      "chunks": [
        {
          "id": "biology-201-l10-c1",
          "title": "The Structure of DNA",
          "kind": "intro",
          "content": "DNA, which stands for deoxyribonucleic acid, is a fascinating molecule that holds the genetic instructions for every living thing on our planet. Imagine it as a special recipe book that tells our bodies how to grow and function. The structure of DNA is quite unique; it resembles a double helix, which you can think of as a twisted ladder or a spiral staircase. If you look closely at this ladder, you'll see that the sides are made up of sugar and phosphate molecules, which act like the sturdy rails of the staircase. The rungs of the ladder are formed by pairs of nitrogen bases, which are the building blocks of DNA. There are four different nitrogen bases: adenine (A), thymine (T), cytosine (C), and guanine (G). In the world of DNA, adenine always pairs with thymine, and cytosine always pairs with guanine. This special pairing is crucial because it allows one strand of DNA to serve as a template for creating the other strand. This process ensures that genetic information is accurately copied and passed on during cell division, which is essential for growth and reproduction in all living organisms."
        },
        {
          "id": "biology-201-l10-c2",
          "title": "From Gene to Protein",
          "kind": "concept",
          "content": "A gene is a special part of DNA that holds the instructions for creating a specific protein. This process of turning DNA into a protein starts in the nucleus, which is the control center of the cell. Inside the nucleus, the DNA is transcribed, or copied, into a molecule called messenger RNA, or mRNA for short. You can think of this step like copying a recipe from a cookbook, where the DNA is the original recipe and the mRNA is the copied version that you can take to the kitchen. After the mRNA is created, it leaves the nucleus and travels to a ribosome. The ribosome acts like a tiny factory inside the cell, where the real magic happens! Here, the mRNA is translated into a chain of amino acids, which are the building blocks of proteins. Each group of three bases on the mRNA is called a codon, and each codon tells the ribosome which specific amino acid to add next. As these amino acids are linked together, they start to fold into a unique shape. This folding is very important because it determines how the protein will function. Once the protein is fully formed, it can perform various important jobs within the cell, helping to keep the cell healthy and working properly. Understanding this process is crucial because proteins play vital roles in everything from building our muscles to fighting off illnesses, making them essential for life!"
        },
        {
          "id": "biology-201-l10-c3",
          "title": "Mutations",
          "kind": "concept",
          "content": "A mutation is a change that happens in the sequence of bases in DNA, which is like a special code that tells our bodies how to grow and function. Some mutations are harmless and do not change anything about the organism; these are called silent mutations. Other mutations can change the sequence of amino acids, which are the building blocks of proteins, and this can affect how the protein works. These types of mutations are known as missense mutations. Interestingly, some mutations can actually be helpful! For instance, the sickle-cell trait is caused by a mutation and can help protect a person from malaria if they have one copy of the mutated gene. Mutations are really important because they create genetic diversity, which means there are different versions of genes in a population. This diversity is the raw material for natural selection, which is the process that helps organisms adapt to their environments over time. So, mutations can lead to new traits that might help living things survive better in their surroundings."
        },
        {
          "id": "biology-201-l10-c4",
          "title": "DNA → RNA → Protein Summary",
          "kind": "practice",
          "content": "Let's practice what we've learned about DNA and protein synthesis! Given the DNA template strand: TAC GGA CTC ATT, your task is to write the corresponding mRNA sequence. Remember, in RNA, the base thymine (T) is replaced by uracil (U). Once you have the mRNA sequence, use a codon chart to find out which amino acids correspond to each codon. For example, the first codon TAC translates to AUG, which is the start codon and codes for the amino acid Methionine. This exercise will help you understand how genetic information is translated into proteins."
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l10-f1",
          "front": "What are the base-pairing rules in DNA?",
          "back": "Adenine (A) pairs with Thymine (T). Cytosine (C) pairs with Guanine (G). In RNA, uracil (U) replaces thymine."
        },
        {
          "id": "biology-201-l10-f2",
          "front": "What is transcription?",
          "back": "The process of copying a gene's DNA sequence into messenger RNA (mRNA) in the nucleus."
        },
        {
          "id": "biology-201-l10-f3",
          "front": "What is translation?",
          "back": "The process of reading mRNA codons at a ribosome to build a chain of amino acids (a protein)."
        },
        {
          "id": "biology-201-l10-f4",
          "front": "What is a codon?",
          "back": "A sequence of three mRNA bases that codes for one specific amino acid. For example, AUG codes for methionine (the start signal)."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l10-a1",
          "type": "image",
          "title": "Central Dogma Diagram",
          "content": "A flow diagram showing DNA → (transcription) → mRNA → (translation) → Protein, with labeled steps in nucleus and ribosome."
        },
        {
          "id": "biology-201-l10-a2",
          "type": "animation",
          "title": "Protein Synthesis Animation",
          "content": "Step-by-step animation of mRNA being read by a ribosome, with tRNA molecules bringing amino acids one at a time."
        }
      ]
    },
    {
      "id": "biology-201-l11",
      "title": "Ecosystem Disruption Lab",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Predict the effects of removing a species from a food web",
        "Evaluate strategies for ecological restoration"
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l11-ia1",
          "type": "sorting_buckets",
          "title": "Trophic Level Sort",
          "description": "Sort each organism into the correct trophic level of a grassland food web.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "producer",
                "label": "Producer"
              },
              {
                "id": "primary",
                "label": "Primary Consumer"
              },
              {
                "id": "secondary",
                "label": "Secondary Consumer"
              },
              {
                "id": "decomposer",
                "label": "Decomposer"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Prairie grass",
                "correctBucketId": "producer"
              },
              {
                "id": "i2",
                "label": "Grasshopper",
                "correctBucketId": "primary"
              },
              {
                "id": "i3",
                "label": "Field mouse",
                "correctBucketId": "primary"
              },
              {
                "id": "i4",
                "label": "Snake",
                "correctBucketId": "secondary"
              },
              {
                "id": "i5",
                "label": "Hawk",
                "correctBucketId": "secondary"
              },
              {
                "id": "i6",
                "label": "Soil bacteria",
                "correctBucketId": "decomposer"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "biology-201-l11-c1",
          "title": "Keystone Species",
          "kind": "concept",
          "content": "A keystone species is a special type of organism that has a much bigger effect on its ecosystem than you might think just by looking at how many of them there are. For example, sea otters are a keystone species because they help keep their environment healthy. They eat sea urchins, which are small creatures that can eat a lot of kelp if there are too many of them. If sea otters weren't around, the number of sea urchins would grow out of control, and they would destroy the kelp forests. These forests are very important because they provide homes for many other animals and plants. Another example is the wolves in Yellowstone National Park. Wolves are also a keystone species because they help manage the number of elk. When wolves keep elk populations in check, it allows plants along riverbanks to grow back. This helps to stabilize the banks and creates a better environment for many different kinds of living things. Losing a keystone species can lead to big problems for the whole ecosystem, showing just how important they are!"
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l11-a1",
          "type": "practice",
          "title": "Keystone Removal Prediction",
          "content": "In a coral reef, parrotfish eat algae off the coral. If parrotfish are overfished, predict what happens to algae growth, coral health, and fish that depend on coral shelter."
        }
      ]
    },
    {
      "id": "biology-201-l12",
      "title": "Checkpoint: Evolution and DNA",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-201-l12-q1",
          "text": "During transcription, the DNA template strand TAC is copied into which mRNA codon?",
          "skillId": "biology-201-skill-dna",
          "options": [
            {
              "id": "a",
              "text": "TAC"
            },
            {
              "id": "b",
              "text": "AUG"
            },
            {
              "id": "c",
              "text": "ATG"
            },
            {
              "id": "d",
              "text": "UAC"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l12-q2",
          "text": "Which organism is a primary consumer in a grassland food web?",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "Hawk"
            },
            {
              "id": "b",
              "text": "Snake"
            },
            {
              "id": "c",
              "text": "Grasshopper"
            },
            {
              "id": "d",
              "text": "Soil fungus"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l12-q3",
          "text": "What happens when a keystone predator like wolves is removed from an ecosystem?",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "Nothing changes because other predators fill the role"
            },
            {
              "id": "b",
              "text": "Herbivore populations increase, leading to overgrazing and habitat loss"
            },
            {
              "id": "c",
              "text": "Plant populations immediately increase"
            },
            {
              "id": "d",
              "text": "All prey species go extinct"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l12-q4",
          "text": "A mutation changes one DNA base pair but does not change the amino acid produced. This is called a:",
          "skillId": "biology-201-skill-dna",
          "options": [
            {
              "id": "a",
              "text": "Missense mutation"
            },
            {
              "id": "b",
              "text": "Nonsense mutation"
            },
            {
              "id": "c",
              "text": "Silent mutation"
            },
            {
              "id": "d",
              "text": "Frameshift mutation"
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Mutation Types Match",
          "description": "Match each mutation type to its effect on the protein.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Silent mutation"
              },
              {
                "id": "l2",
                "label": "Missense mutation"
              },
              {
                "id": "l3",
                "label": "Nonsense mutation"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "No change in the amino acid — protein works normally"
              },
              {
                "id": "r2",
                "label": "One amino acid changes — protein may function differently"
              },
              {
                "id": "r3",
                "label": "A premature stop codon — protein is truncated and usually nonfunctional"
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
              }
            ]
          }
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
          "id": "biology-201-l12-a1",
          "type": "mnemonic",
          "title": "DNA Base Pairs",
          "content": "Remember 'Apple Tree, Car Garage' — A pairs with T, C pairs with G. In RNA, replace T with U (Uracil)."
        }
      ]
    },
    {
      "id": "biology-201-l13",
      "title": "Biology Scenario Lab: Coral Reef Crisis",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Apply multiple biology concepts to a real-world scenario",
        "Evaluate trade-offs in conservation decisions"
      ],
      "chunks": [
        {
          "id": "biology-201-l13-c1",
          "title": "The Scenario",
          "kind": "intro",
          "content": "In this scenario, we are focusing on a tropical coral reef that is facing some serious challenges. You might notice that the coral is becoming bleached, which means it is losing its vibrant colors and health. This is a sign that the reef is not doing well. Additionally, the number of fish living in the reef is decreasing, which can affect the entire ecosystem. At the same time, there is an overgrowth of algae, which can smother the coral and disrupt the balance of life in the reef. Local fishing communities depend on the reef for their livelihoods, as it provides them with food and supports their way of life. Your task is to carefully analyze this situation by using what you have learned about ecosystems, food webs, and how human activities can impact the environment. By understanding how these elements are connected, you will be better equipped to think of possible solutions to help protect the coral reef and support the communities that rely on it."
        },
        {
          "id": "biology-201-l13-c2",
          "title": "Analyzing the Food Web",
          "kind": "example",
          "content": "Let's take a closer look at the food web of the coral reef ecosystem. At the base of this web are the producers, which include algae and coral. These organisms provide energy for the primary consumers, such as parrotfish and sea urchins. The next level includes secondary consumers like grouper and moray eels, which eat the primary consumers. Finally, at the top of the food web are the tertiary consumers, such as reef sharks. Unfortunately, overfishing has led to a significant decline in parrotfish populations, with numbers dropping by 60%. Without enough parrotfish to graze on the algae, the algae can grow uncontrollably and smother the coral. Additionally, coral bleaching, which is caused by rising water temperatures, weakens the coral further, making it more vulnerable to damage."
        },
        {
          "id": "biology-201-l13-c3",
          "title": "Homeostasis at the Ecosystem Level",
          "kind": "concept",
          "content": "Healthy coral reefs are like a well-tuned orchestra, where every part plays its role to create harmony. This balance is similar to homeostasis, which is a term we use to describe how living things maintain stability. In coral reefs, parrotfish are very important; they are known as a keystone species. This means they help keep algae populations under control, which allows coral to grow strong and healthy. However, our planet is facing challenges due to climate change, which is causing ocean temperatures to rise. When the water gets too warm, coral can become stressed and will expel the tiny algae that live inside it. These algae are crucial because they provide food for the coral through photosynthesis. When the coral loses its algae, it turns white in a process called coral bleaching. This makes the coral more vulnerable to diseases and can lead to its death. By learning about these interactions, we can better protect coral reefs and support the health of our oceans, which are vital for many marine creatures and for us too."
        },
        {
          "id": "biology-201-l13-c4",
          "title": "Your Conservation Plan",
          "kind": "practice",
          "content": "Let's create a two-part plan to help protect our precious coral reefs! First, think about an immediate action we can take to safeguard the reef. This could include ideas like setting fishing limits to prevent overfishing, establishing marine protected areas where no fishing is allowed, or focusing on protecting parrotfish, which are important for maintaining the health of the reef. Next, we need a long-term strategy to tackle the root causes of the problems facing the reefs. This might involve reducing harmful emissions that contribute to climate change, improving water quality to ensure a healthy environment for marine life, or working on reef restoration projects to help damaged areas recover. As you develop your plan, be sure to explain the biological reasons behind each of your choices, so we can understand how they will help the coral reefs thrive again."
        }
      ],
      "flashcards": [
        {
          "id": "biology-201-l13-f1",
          "front": "What is coral bleaching?",
          "back": "When stressed by warm water, coral expels its symbiotic algae (zooxanthellae), losing color and its main energy source. Prolonged bleaching kills the coral."
        },
        {
          "id": "biology-201-l13-f2",
          "front": "Why are parrotfish a keystone species on coral reefs?",
          "back": "They eat algae that would otherwise smother coral. Without parrotfish, algae overgrows and coral cannot compete for space and light."
        },
        {
          "id": "biology-201-l13-f3",
          "front": "What is a marine protected area (MPA)?",
          "back": "A section of ocean where human activities like fishing are limited or banned to protect biodiversity and allow ecosystems to recover."
        },
        {
          "id": "biology-201-l13-f4",
          "front": "How do food webs connect to conservation?",
          "back": "Removing one species can cascade through the web. Effective conservation considers the entire web, not just individual species."
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l13-a1",
          "type": "image",
          "title": "Coral Reef Food Web",
          "content": "Illustrated food web showing algae, coral, parrotfish, urchins, grouper, eels, and reef sharks with feeding arrows."
        },
        {
          "id": "biology-201-l13-a2",
          "type": "animation",
          "title": "Coral Bleaching Process",
          "content": "Animation showing healthy coral with zooxanthellae, then warming water causing expulsion, bleaching, and eventual recovery or death."
        }
      ]
    },
    {
      "id": "biology-201-l14",
      "title": "Genetics Problem-Solving Workshop",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Solve two-trait Punnett square problems",
        "Predict inheritance patterns in real-world scenarios"
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l14-ia1",
          "type": "drag_and_drop",
          "title": "Dihybrid Cross Organizer",
          "description": "A plant has round (R) dominant over wrinkled (r) seeds, and yellow (Y) dominant over green (y). Cross RrYy × RrYy. Drag the correct phenotype ratio into each category.",
          "estimatedMinutes": 10,
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
                "label": "9 out of 16",
                "correctTargetId": "ry"
              },
              {
                "id": "d2",
                "label": "3 out of 16",
                "correctTargetId": "rg"
              },
              {
                "id": "d3",
                "label": "3 out of 16",
                "correctTargetId": "wy"
              },
              {
                "id": "d4",
                "label": "1 out of 16",
                "correctTargetId": "wg"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "biology-201-l14-c1",
          "title": "Dihybrid Crosses",
          "kind": "concept",
          "content": "In our exploration of genetics, we will learn about something called a dihybrid cross, which helps us track two different traits at the same time! According to Mendel's law of independent assortment, genes that are located on different chromosomes are inherited independently from one another. This means that the traits can mix and match in various ways. For example, if both parents have two different traits and are heterozygous (which means they have one dominant and one recessive allele, like RrYy), we can predict the possible combinations of traits in their offspring. When we look at the results of this cross, we find that the expected ratio of different phenotypes is 9:3:3:1. However, this only applies when the genes we are studying are located on different chromosomes, which we call unlinked genes. Understanding these concepts helps us see how traits are passed down through generations!"
        }
      ],
      "learningAids": [
        {
          "id": "biology-201-l14-a1",
          "type": "practice",
          "title": "Genetics Case",
          "content": "In guinea pigs, black fur (B) is dominant over white (b), and rough coat (R) is dominant over smooth (r). Cross BbRr × BbRr. What fraction of offspring will have white, smooth fur?"
        }
      ]
    },
    {
      "id": "biology-201-l15",
      "title": "Mastery: Biology Systems and Change",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "biology-201-l15-q1",
          "text": "Blood clotting is an example of positive feedback because:",
          "skillId": "biology-201-skill-homeostasis",
          "options": [
            {
              "id": "a",
              "text": "It reverses the bleeding by reducing blood flow"
            },
            {
              "id": "b",
              "text": "It amplifies the clotting response — each platelet recruits more platelets"
            },
            {
              "id": "c",
              "text": "The body tries to stop the clotting process"
            },
            {
              "id": "d",
              "text": "Clotting has no feedback mechanism"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l15-q2",
          "text": "In a dihybrid cross of RrYy × RrYy, what is the expected phenotype ratio?",
          "skillId": "biology-201-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "3:1"
            },
            {
              "id": "b",
              "text": "1:2:1"
            },
            {
              "id": "c",
              "text": "9:3:3:1"
            },
            {
              "id": "d",
              "text": "1:1:1:1"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "biology-201-l15-q3",
          "text": "The DNA codon TAC is transcribed into the mRNA codon AUG, which codes for methionine. This entire process illustrates:",
          "skillId": "biology-201-skill-dna",
          "options": [
            {
              "id": "a",
              "text": "Natural selection"
            },
            {
              "id": "b",
              "text": "The central dogma of molecular biology (DNA → RNA → Protein)"
            },
            {
              "id": "c",
              "text": "A negative feedback loop"
            },
            {
              "id": "d",
              "text": "Homeostasis in the cell"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "biology-201-l15-q4",
          "text": "If wolves are reintroduced to an area with too many deer, what is the most likely long-term outcome?",
          "skillId": "biology-201-skill-ecology",
          "options": [
            {
              "id": "a",
              "text": "Deer population decreases, vegetation recovers, overall biodiversity increases"
            },
            {
              "id": "b",
              "text": "Deer population increases because wolves attract more deer"
            },
            {
              "id": "c",
              "text": "Vegetation decreases because wolves eat plants too"
            },
            {
              "id": "d",
              "text": "No change — wolves have no effect on deer behavior"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "biology-201-l15-q5",
          "text": "A species of desert beetle develops a waxy coating that prevents water loss. This trait spread through the population because individuals with the coating survived droughts better. This is an example of:",
          "skillId": "biology-201-skill-evolution",
          "options": [
            {
              "id": "a",
              "text": "Positive feedback"
            },
            {
              "id": "b",
              "text": "Genetic drift"
            },
            {
              "id": "c",
              "text": "Adaptation through natural selection"
            },
            {
              "id": "d",
              "text": "An organism choosing to evolve"
            }
          ],
          "correctOptionId": "c"
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Biology Concepts Integration",
          "description": "Match each biology concept to the correct real-world example.",
          "estimatedMinutes": 8,
          "difficultyLevel": "hard",
          "instructions": [
            "Read each concept carefully.",
            "Find the real-world example that best illustrates it.",
            "Think about which lesson each example connects to."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Negative feedback loop"
              },
              {
                "id": "l2",
                "label": "Keystone species"
              },
              {
                "id": "l3",
                "label": "Natural selection"
              },
              {
                "id": "l4",
                "label": "10% energy rule"
              },
              {
                "id": "l5",
                "label": "Dihybrid cross"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Insulin lowering blood sugar after a meal"
              },
              {
                "id": "r2",
                "label": "Sea otters preventing urchin overpopulation"
              },
              {
                "id": "r3",
                "label": "Antibiotic-resistant bacteria surviving treatment"
              },
              {
                "id": "r4",
                "label": "Hawks receiving only 10 kJ from 10,000 kJ of grass energy"
              },
              {
                "id": "r5",
                "label": "RrYy × RrYy producing a 9:3:3:1 phenotype ratio"
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
              },
              {
                "leftId": "l5",
                "rightId": "r5"
              }
            ]
          }
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
          "id": "biology-201-l15-a1",
          "type": "mnemonic",
          "title": "Module Review Chain",
          "content": "Homeostasis → Genetics → Ecosystems → Evolution → DNA → Human Impact. Each topic builds on the last — feedback loops regulate organisms, genetics drives variation, variation fuels natural selection, and human activity shapes it all."
        }
      ]
    }
  ]
};
