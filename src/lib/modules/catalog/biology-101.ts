import type { LearningModule } from "@/lib/modules/types";

export const biology_101_Module: LearningModule = {
  "id": "biology-101",
  "title": "Biology Essentials",
  "description": "Explore the fundamental principles of life, from the microscopic world of cells and DNA to the vast interconnectedness of ecosystems.",
  "subject": "Biology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "science"
  ],
  "minAge": 12,
  "maxAge": 16,
  "version": "1.1.0",
  "learningObjectives": [
    "Describe the structure of cells and explain their essential life processes.",
    "Explain how organ systems work together to maintain a stable internal environment (homeostasis).",
    "Analyze the flow of energy and cycling of nutrients within an ecosystem.",
    "Describe the structure of DNA and the basic principles of genetic inheritance.",
    "Explain the theory of natural selection as the mechanism for evolution and adaptation."
  ],
  "lessons": [
    {
      "id": "biology-101-l01",
      "title": "The Cell: Building Block of Life",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the main organelles in plant and animal cells and their functions.",
        "Compare and contrast plant and animal cells.",
        "Describe the hierarchy from cells to organisms."
      ],
      "chunks": [
        {
          "id": "biology-101-l01-c1",
          "title": "What is a Cell?",
          "kind": "intro",
          "content": "Every living thing, from the smallest bacterium to the largest blue whale, is made of cells. They are the basic building blocks of all organisms. Some life forms are just a single cell, while you are made of about 37 trillion cells working together! Cells carry out all the processes necessary for life: they convert food to energy, help us grow, and allow us to respond to our environment. Understanding cells is the first step to understanding all of biology.",
          "visualPrompt": "Animation showing a zoom from a person, to their hand, to a skin cell, revealing the bustling activity inside."
        },
        {
          "id": "biology-101-l01-c2",
          "title": "Inside an Animal Cell",
          "kind": "concept",
          "content": "An animal cell is like a busy city with many different parts, called organelles, each with a specific job. The nucleus is the 'city hall,' containing the DNA—the master instructions for the cell. The mitochondria are the 'power plants,' generating energy. The cell membrane is the 'city border,' controlling what comes in and out. Ribosomes are tiny 'factories' that build proteins, the essential molecules that do most of the work in the cell.",
          "visualPrompt": "A labeled 3D model of an animal cell, with each organelle lighting up as it is described."
        },
        {
          "id": "biology-101-l01-c3",
          "title": "The Unique Plant Cell",
          "kind": "concept",
          "content": "Plant cells have everything animal cells do, plus three special structures. A rigid cell wall outside the membrane provides structural support, like a scaffold. Chloroplasts are like tiny 'solar panels' that capture sunlight to make food through photosynthesis. And a large central vacuole acts as a 'water tower,' storing water to keep the plant firm. These features allow plants to make their own food and stand upright.",
          "visualPrompt": "Side-by-side comparison diagram of a plant and animal cell, with arrows pointing to the cell wall, chloroplasts, and large central vacuole on the plant cell."
        },
        {
          "id": "biology-101-l01-c4",
          "title": "From Cells to Organisms",
          "kind": "concept",
          "content": "Cells don't just float around randomly; they organize themselves to build complex organisms. Similar cells group together to form tissues, like muscle tissue or nerve tissue. Different tissues work together to form an organ, like the heart or the brain. Organs then team up to create organ systems, such as the circulatory system or the nervous system. Finally, all these systems work in harmony to make a complete organism—like you!",
          "visualPrompt": "An animated infographic showing the hierarchy: Cell -> Tissue (muscle cells forming muscle tissue) -> Organ (heart) -> Organ System (circulatory system) -> Organism (human)."
        }
      ],
      "flashcards": [
        {
          "id": "biology-101-l01-f1",
          "front": "What is the function of the nucleus?",
          "back": "It acts as the cell's control center, storing the genetic material (DNA) and directing all cell activities."
        },
        {
          "id": "biology-101-l01-f2",
          "front": "What is the role of mitochondria?",
          "back": "They are the 'powerhouses' of the cell, converting food (glucose) into usable energy (ATP) through cellular respiration."
        },
        {
          "id": "biology-101-l01-f3",
          "front": "Name three structures found in plant cells but not animal cells.",
          "back": "1. Cell wall (for rigid support) 2. Chloroplasts (for photosynthesis) 3. Large central vacuole (for water storage and turgor pressure)."
        }
      ],
      "learningAids": [
        {
          "id": "biology-101-l01-a1",
          "type": "animation",
          "title": "A Tour of the Cell",
          "content": "A 3D animated tour that flies through both a plant and animal cell, highlighting the function of each major organelle."
        }
      ]
    },
    {
      "id": "biology-101-l02",
      "title": "Energy for Life: Photosynthesis & Respiration",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Explain the purpose of photosynthesis and identify its inputs and outputs.",
        "Explain the purpose of cellular respiration and identify its inputs and outputs.",
        "Describe how these two processes are interconnected."
      ],
      "chunks": [
        {
          "id": "biology-101-l02-c1",
          "title": "Photosynthesis: Capturing Sunlight",
          "kind": "concept",
          "content": "Photosynthesis is the amazing process plants use to make their own food. Inside the chloroplasts, plants take in carbon dioxide from the air and water from the soil. Using energy from sunlight, they convert these simple ingredients into glucose, a sugar that provides energy for the plant. As a byproduct, they release oxygen into the atmosphere, which most living things need to breathe. Essentially, plants turn light energy into chemical energy.",
          "visualPrompt": "Animation showing a leaf taking in sunlight, CO₂, and water, with glucose molecules being formed in a chloroplast and oxygen being released."
        },
        {
          "id": "biology-101-l02-c2",
          "title": "Cellular Respiration: Releasing Energy",
          "kind": "concept",
          "content": "All living cells, including both plant and animal cells, need a constant supply of energy to function. Cellular respiration is the process that unlocks the energy stored in glucose. In the mitochondria, cells use oxygen to break down glucose, releasing a large amount of usable energy in the form of a molecule called ATP. The waste products of this process are carbon dioxide and water. This is why we breathe in oxygen and breathe out carbon dioxide.",
          "visualPrompt": "Animation showing a mitochondrion taking in glucose and oxygen, with ATP molecules being produced and CO₂ and water being released."
        },
        {
          "id": "biology-101-l02-c3",
          "title": "A Perfect Cycle",
          "kind": "recap",
          "content": "Photosynthesis and cellular respiration are like two sides of the same coin. They are opposite processes that form a beautiful cycle. The products of photosynthesis (glucose and oxygen) are the exact inputs needed for cellular respiration. And the products of cellular respiration (carbon dioxide and water) are the inputs for photosynthesis. This cycle connects nearly all life on Earth, with energy flowing from the sun to plants and then to other organisms.",
          "visualPrompt": "A circular diagram with the sun at the top. Arrows show photosynthesis (CO₂ + H₂O -> O₂ + Glucose) in a plant and respiration (O₂ + Glucose -> CO₂ + H₂O) in an animal, with the outputs of one feeding into the other."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Photosynthesis or Respiration?",
          "description": "Drag each item into the correct category.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "photo",
                "label": "Photosynthesis"
              },
              {
                "id": "resp",
                "label": "Cellular Respiration"
              },
              {
                "id": "both",
                "label": "Both"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Occurs in chloroplasts",
                "correctBucketId": "photo"
              },
              {
                "id": "i2",
                "label": "Occurs in mitochondria",
                "correctBucketId": "resp"
              },
              {
                "id": "i3",
                "label": "Produces glucose",
                "correctBucketId": "photo"
              },
              {
                "id": "i4",
                "label": "Breaks down glucose",
                "correctBucketId": "resp"
              },
              {
                "id": "i5",
                "label": "Releases oxygen",
                "correctBucketId": "photo"
              },
              {
                "id": "i6",
                "label": "Uses oxygen",
                "correctBucketId": "resp"
              },
              {
                "id": "i7",
                "label": "Performed by plants",
                "correctBucketId": "both"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "biology-101-l03",
      "title": "Body Systems and Homeostasis",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Identify major human body systems and their primary functions.",
        "Define homeostasis and explain its importance.",
        "Describe how different body systems interact to maintain homeostasis."
      ],
      "chunks": [
        {
          "id": "biology-101-l03-c1",
          "title": "A Team of Systems",
          "kind": "intro",
          "content": "Your body is an incredible machine made of many organ systems, each with a specialized job. The respiratory system brings in oxygen, the digestive system absorbs nutrients, the circulatory system transports them to your cells, and the nervous system coordinates everything. None of these systems work alone. They are all part of a highly coordinated team dedicated to one main goal: keeping you alive and healthy.",
          "visualPrompt": "An animated human figure with different systems (circulatory, respiratory, digestive, nervous) lighting up in sequence, showing their interconnectedness."
        },
        {
          "id": "biology-101-l03-c2",
          "title": "Keeping the Balance: Homeostasis",
          "kind": "concept",
          "content": "Homeostasis is the body's ability to maintain a stable, constant internal environment, no matter what's happening outside. Think of it like the thermostat in your house. If it gets too cold, the heat kicks on. If it gets too hot, the air conditioning starts. Your body does the same thing to regulate temperature, blood sugar, water levels, and more. This balance is crucial for your cells to function properly.",
          "visualPrompt": "A split-screen animation: on one side, a thermostat maintaining room temperature; on the other, a person shivering in the cold and sweating in the heat to maintain a body temperature of 37°C."
        },
        {
          "id": "biology-101-l03-c3",
          "title": "Homeostasis in Action: Exercise",
          "kind": "example",
          "content": "When you exercise, your body systems leap into action together. Your muscular system needs more energy, so your cells increase respiration. This requires more oxygen, so your respiratory system makes you breathe faster. Your circulatory system's heart pumps faster to deliver that oxygen and remove carbon dioxide. Your nervous system coordinates all these changes, and your endocrine system releases hormones like adrenaline. It's a perfect example of systems cooperating to maintain homeostasis under stress.",
          "visualPrompt": "An animation of a person running on a treadmill. Icons appear showing the heart beating faster, lungs breathing deeper, and signals firing from the brain to the muscles."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Match the System to its Function",
          "description": "Match each body system to its primary role.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Circulatory System"
              },
              {
                "id": "l2",
                "label": "Nervous System"
              },
              {
                "id": "l3",
                "label": "Digestive System"
              },
              {
                "id": "l4",
                "label": "Respiratory System"
              },
              {
                "id": "l5",
                "label": "Skeletal System"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Transports oxygen, nutrients, and waste via the blood"
              },
              {
                "id": "r2",
                "label": "Control center; sends and receives electrical signals"
              },
              {
                "id": "r3",
                "label": "Breaks down food into absorbable nutrients"
              },
              {
                "id": "r4",
                "label": "Exchanges gases (oxygen and carbon dioxide) with the air"
              },
              {
                "id": "r5",
                "label": "Provides structure, support, and protection"
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
      ]
    },
    {
      "id": "biology-101-l04",
      "title": "Checkpoint 1: Cells and Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-101-l04-q1",
          "text": "Which organelle is the site of photosynthesis?",
          "skillId": "biology-101-skill-cells",
          "options": [
            {
              "id": "a",
              "text": "Mitochondrion"
            },
            {
              "id": "b",
              "text": "Nucleus"
            },
            {
              "id": "c",
              "text": "Chloroplast"
            },
            {
              "id": "d",
              "text": "Ribosome"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Chloroplasts, found in plant cells, contain chlorophyll and are where photosynthesis occurs."
        },
        {
          "id": "biology-101-l04-q2",
          "text": "What are the main products of cellular respiration?",
          "skillId": "biology-101-skill-cells",
          "options": [
            {
              "id": "a",
              "text": "Glucose and Oxygen"
            },
            {
              "id": "b",
              "text": "Carbon Dioxide, Water, and ATP"
            },
            {
              "id": "c",
              "text": "Sunlight and Water"
            },
            {
              "id": "d",
              "text": "Oxygen and ATP"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cellular respiration breaks down glucose using oxygen to produce usable energy (ATP), with carbon dioxide and water as waste products."
        },
        {
          "id": "biology-101-l04-q3",
          "text": "Shivering when you are cold is an example of your body trying to maintain...",
          "skillId": "biology-101-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "Photosynthesis"
            },
            {
              "id": "b",
              "text": "Homeostasis"
            },
            {
              "id": "c",
              "text": "Respiration"
            },
            {
              "id": "d",
              "text": "Organization"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Shivering is a mechanism to generate heat and raise body temperature, which is an example of maintaining homeostasis (a stable internal state)."
        },
        {
          "id": "biology-101-l04-q4",
          "text": "Which level of organization is correctly ordered from simplest to most complex?",
          "skillId": "biology-101-skill-systems",
          "options": [
            {
              "id": "a",
              "text": "Organ -> Tissue -> Cell -> Organ System"
            },
            {
              "id": "b",
              "text": "Cell -> Organ -> Tissue -> Organ System"
            },
            {
              "id": "c",
              "text": "Cell -> Tissue -> Organ -> Organ System"
            },
            {
              "id": "d",
              "text": "Tissue -> Cell -> Organ System -> Organ"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The correct biological hierarchy is: Cells form Tissues, Tissues form Organs, and Organs form Organ Systems."
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
      }
    },
    {
      "id": "biology-101-l05",
      "title": "Ecosystems and Energy Flow",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Distinguish between biotic and abiotic factors in an ecosystem.",
        "Describe how energy flows through a food chain.",
        "Explain the difference between a food chain and a food web."
      ],
      "chunks": [
        {
          "id": "biology-101-l05-c1",
          "title": "What is an Ecosystem?",
          "kind": "intro",
          "content": "An ecosystem is a community of living organisms (biotic factors) interacting with their non-living environment (abiotic factors). Think of a forest: the trees, animals, and bacteria are biotic. The sunlight, water, soil, and temperature are abiotic. Ecology is the study of how all these parts work together in a delicate balance.",
          "visualPrompt": "A vibrant illustration of a pond ecosystem, with labels pointing to biotic factors (fish, frogs, plants) and abiotic factors (sunlight, water, rocks)."
        },
        {
          "id": "biology-101-l05-c2",
          "title": "The Flow of Energy",
          "kind": "concept",
          "content": "Energy in most ecosystems starts with the sun. Producers, like plants, capture this energy through photosynthesis. When a primary consumer (an herbivore like a rabbit) eats the plant, it gets some of that energy. When a secondary consumer (a carnivore like a fox) eats the rabbit, the energy is transferred again. This one-way path is called a food chain.",
          "visualPrompt": "A simple animated food chain: Sun -> Grass -> Grasshopper -> Frog -> Snake."
        },
        {
          "id": "biology-101-l05-c3",
          "title": "The 10% Rule",
          "kind": "concept",
          "content": "As energy moves up the food chain, a lot of it is lost. Organisms use most of the energy they consume for their own life processes, like moving and keeping warm. Only about 10% of the energy from one level is stored and passed on to the next. This is why there are far more producers than top predators in an ecosystem. This concept is often shown as an energy pyramid.",
          "visualPrompt": "An energy pyramid diagram. The bottom layer (Producers) is large (100% energy), the next layer (Primary Consumers) is smaller (10% energy), and so on to the top."
        },
        {
          "id": "biology-101-l05-c4",
          "title": "Food Webs: The Real Picture",
          "kind": "concept",
          "content": "In reality, nature is more complex than a simple chain. Most animals eat more than one type of food. A food web shows all the interconnected food chains in an ecosystem. It gives a much more realistic picture of how energy and matter move through the community and how the organisms depend on one another.",
          "visualPrompt": "An animated diagram showing several simple food chains (e.g., grass-rabbit-fox, seeds-mouse-owl) gradually connecting with arrows to form a complex forest food web."
        }
      ],
      "flashcards": [
        {
          "id": "biology-101-l05-f1",
          "front": "What is the difference between biotic and abiotic factors?",
          "back": "Biotic factors are the living or once-living parts of an ecosystem (e.g., plants, animals). Abiotic factors are the non-living parts (e.g., sunlight, water, temperature)."
        },
        {
          "id": "biology-101-l05-f2",
          "front": "What is a producer?",
          "back": "An organism, usually a plant, that produces its own food using an external energy source, typically sunlight through photosynthesis."
        },
        {
          "id": "biology-101-l05-f3",
          "front": "What is the role of decomposers?",
          "back": "Organisms like bacteria and fungi that break down dead organic matter, returning essential nutrients to the soil for producers to use."
        }
      ]
    },
    {
      "id": "biology-101-l06",
      "title": "Adaptation and Natural Selection",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Define adaptation and provide examples of different types.",
        "Explain Charles Darwin's theory of natural selection.",
        "Describe how environmental pressures lead to adaptation."
      ],
      "chunks": [
        {
          "id": "biology-101-l06-c1",
          "title": "What is an Adaptation?",
          "kind": "concept",
          "content": "An adaptation is any inherited trait that helps an organism survive and reproduce in its environment. These can be structural (a physical feature, like a bird's beak), behavioral (an action, like migration), or physiological (an internal process, like making venom). Adaptations are the result of a long, slow process of change over many generations.",
          "visualPrompt": "A triptych of images showing a structural adaptation (camel's hump), a behavioral adaptation (geese migrating), and a physiological adaptation (chameleon changing color)."
        },
        {
          "id": "biology-101-l06-c2",
          "title": "Darwin and Natural Selection",
          "kind": "concept",
          "content": "Charles Darwin proposed the theory of evolution by natural selection. He observed that there is variation within any population—individuals are not identical. He also knew that organisms produce more offspring than can survive, leading to a 'struggle for existence.' His key insight was that individuals with traits better suited to their environment are more likely to survive, reproduce, and pass those helpful traits to their offspring.",
          "visualPrompt": "An animated portrait of Charles Darwin, with icons representing his key observations: variation (different colored beetles), overproduction (many eggs), and survival (a bird eating one color of beetle)."
        },
        {
          "id": "biology-101-l06-c3",
          "title": "Survival of the Fittest",
          "kind": "example",
          "content": "This famous phrase doesn't mean the strongest or fastest. 'Fittest' means how well an organism is adapted to its specific environment. A classic example is the peppered moth. Before the Industrial Revolution, light-colored moths blended in with tree bark. When pollution darkened the trees, dark-colored moths had better camouflage and survived to reproduce more often. Over time, the population became mostly dark. The environment 'selected' for the trait that provided a survival advantage.",
          "visualPrompt": "A side-by-side animation. Left: Light moths on a light tree are hard to see, a bird eats a dark moth. Right: Dark moths on a soot-covered tree are hard to see, the bird eats a light moth."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-101-l06-ia1",
          "type": "sorting_buckets",
          "title": "Types of Adaptation",
          "description": "Classify each example as a structural, behavioral, or physiological adaptation.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "structural",
                "label": "Structural (Body Part)"
              },
              {
                "id": "behavioral",
                "label": "Behavioral (Action)"
              },
              {
                "id": "physiological",
                "label": "Physiological (Internal Process)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "A polar bear's thick fur",
                "correctBucketId": "structural"
              },
              {
                "id": "i2",
                "label": "Bears hibernating in winter",
                "correctBucketId": "behavioral"
              },
              {
                "id": "i3",
                "label": "A snake producing venom",
                "correctBucketId": "physiological"
              },
              {
                "id": "i4",
                "label": "The long neck of a giraffe",
                "correctBucketId": "structural"
              },
              {
                "id": "i5",
                "label": "Birds flying south for the winter",
                "correctBucketId": "behavioral"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "biology-101-l07",
      "title": "Checkpoint 2: Ecology and Evolution",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-101-l07-q1",
          "text": "In a forest food web, which of the following is an abiotic factor?",
          "skillId": "biology-101-skill-ecosystems",
          "options": [
            {
              "id": "a",
              "text": "An oak tree"
            },
            {
              "id": "b",
              "text": "A deer"
            },
            {
              "id": "c",
              "text": "A mushroom"
            },
            {
              "id": "d",
              "text": "The amount of rainfall"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Rainfall is a non-living component of the environment, making it an abiotic factor. The tree, deer, and mushroom are all living (biotic) factors."
        },
        {
          "id": "biology-101-l07-q2",
          "text": "If a plant stores 1,000 units of energy, approximately how much energy would a herbivore that eats the plant receive?",
          "skillId": "biology-101-skill-ecosystems",
          "options": [
            {
              "id": "a",
              "text": "1,000 units"
            },
            {
              "id": "b",
              "text": "500 units"
            },
            {
              "id": "c",
              "text": "100 units"
            },
            {
              "id": "d",
              "text": "10 units"
            }
          ],
          "correctOptionId": "c",
          "explanation": "According to the 10% rule, only about 10% of the energy from one trophic level is transferred to the next. 10% of 1,000 is 100."
        },
        {
          "id": "biology-101-l07-q3",
          "text": "A cactus having sharp spines to protect it from being eaten is an example of a...",
          "skillId": "biology-101-skill-adaptation",
          "options": [
            {
              "id": "a",
              "text": "Structural adaptation"
            },
            {
              "id": "b",
              "text": "Behavioral adaptation"
            },
            {
              "id": "c",
              "text": "Physiological adaptation"
            },
            {
              "id": "d",
              "text": "Food web"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The spines are a physical feature of the cactus's body, making it a structural adaptation."
        },
        {
          "id": "biology-101-l07-q4",
          "text": "What is the central idea of natural selection?",
          "skillId": "biology-101-skill-adaptation",
          "options": [
            {
              "id": "a",
              "text": "Organisms try to change to fit their environment."
            },
            {
              "id": "b",
              "text": "Organisms with the most favorable traits are more likely to survive and reproduce."
            },
            {
              "id": "c",
              "text": "All individuals in a population are identical."
            },
            {
              "id": "d",
              "text": "Evolution happens within a single generation."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Natural selection is the process where the environment 'selects' for individuals with inherited traits that provide a survival and reproductive advantage."
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
      }
    },
    {
      "id": "biology-101-l08",
      "title": "Genetics: The Code of Life",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the basic structure of DNA.",
        "Explain the relationship between DNA, genes, and chromosomes.",
        "Distinguish between dominant and recessive alleles."
      ],
      "chunks": [
        {
          "id": "biology-101-l08-c1",
          "title": "DNA: The Blueprint of Life",
          "kind": "intro",
          "content": "Inside the nucleus of almost every cell in your body is a remarkable molecule called DNA (Deoxyribonucleic acid). DNA contains the instructions for building and operating an entire organism. Its structure is a double helix, which looks like a twisted ladder. The 'rungs' of the ladder are made of four chemical bases: Adenine (A), Thymine (T), Cytosine (C), and Guanine (G). The specific sequence of these bases forms the genetic code.",
          "visualPrompt": "An animation of a DNA double helix rotating, with close-ups on the base pairs (A-T and C-G) lighting up."
        },
        {
          "id": "biology-101-l08-c2",
          "title": "Genes and Chromosomes",
          "kind": "concept",
          "content": "Your DNA is incredibly long, so it's tightly coiled and packaged into structures called chromosomes. You can think of a chromosome as a volume in an encyclopedia set. A gene is a specific section of DNA on a chromosome that codes for a particular trait, like eye color or hair type. So, a gene is like a single recipe within one of the encyclopedia volumes. Humans have 23 pairs of chromosomes in each cell.",
          "visualPrompt": "An animation that zooms in on a cell, then its nucleus, then a chromosome. The chromosome unwinds to show the DNA strand, and a specific segment is highlighted and labeled 'Gene'."
        },
        {
          "id": "biology-101-l08-c3",
          "title": "Dominant and Recessive Alleles",
          "kind": "concept",
          "content": "For many genes, you inherit two copies, one from each parent. These different versions of a gene are called alleles. Some alleles are dominant, meaning you only need one copy for the trait to be expressed. Other alleles are recessive, meaning the trait will only show up if you inherit two copies. For example, the allele for brown eyes (B) is dominant over the allele for blue eyes (b). So, a person with the combination Bb will have brown eyes.",
          "visualPrompt": "A simple chart showing three people. Person 1 (BB) has brown eyes. Person 2 (Bb) has brown eyes. Person 3 (bb) has blue eyes. The dominant 'B' allele is shown as larger and more prominent in the Bb combination."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "Punnett Square Practice",
          "description": "Predict the offspring of two parents who are both heterozygous for brown eyes (Bb). Drag the parent alleles to the correct places and then fill in the offspring genotypes.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "parent1-a1",
                "label": "Parent 1 Allele 1"
              },
              {
                "id": "parent1-a2",
                "label": "Parent 1 Allele 2"
              },
              {
                "id": "parent2-a1",
                "label": "Parent 2 Allele 1"
              },
              {
                "id": "parent2-a2",
                "label": "Parent 2 Allele 2"
              },
              {
                "id": "child1",
                "label": "Offspring 1"
              },
              {
                "id": "child2",
                "label": "Offspring 2"
              },
              {
                "id": "child3",
                "label": "Offspring 3"
              },
              {
                "id": "child4",
                "label": "Offspring 4"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "B",
                "correctTargetId": "parent1-a1"
              },
              {
                "id": "d2",
                "label": "b",
                "correctTargetId": "parent1-a2"
              },
              {
                "id": "d3",
                "label": "B",
                "correctTargetId": "parent2-a1"
              },
              {
                "id": "d4",
                "label": "b",
                "correctTargetId": "parent2-a2"
              },
              {
                "id": "d5",
                "label": "BB",
                "correctTargetId": "child1"
              },
              {
                "id": "d6",
                "label": "Bb",
                "correctTargetId": "child2"
              },
              {
                "id": "d7",
                "label": "Bb",
                "correctTargetId": "child3"
              },
              {
                "id": "d8",
                "label": "bb",
                "correctTargetId": "child4"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "biology-101-l09",
      "title": "Checkpoint 3: Genetics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "biology-101-l09-q1",
          "text": "In the DNA double helix, Adenine (A) always pairs with...",
          "skillId": "biology-101-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "Guanine (G)"
            },
            {
              "id": "b",
              "text": "Cytosine (C)"
            },
            {
              "id": "c",
              "text": "Another Adenine (A)"
            },
            {
              "id": "d",
              "text": "Thymine (T)"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The base pairing rule in DNA is that Adenine (A) pairs with Thymine (T), and Cytosine (C) pairs with Guanine (G)."
        },
        {
          "id": "biology-101-l09-q2",
          "text": "What is a gene?",
          "skillId": "biology-101-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "A structure that contains all of an organism's DNA"
            },
            {
              "id": "b",
              "text": "A specific version of a trait, like blue eyes"
            },
            {
              "id": "c",
              "text": "A segment of DNA that provides instructions for a specific trait"
            },
            {
              "id": "d",
              "text": "A type of protein"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A gene is a functional unit of heredity; a specific section of DNA that codes for a protein or functional RNA molecule."
        },
        {
          "id": "biology-101-l09-q3",
          "text": "An organism has the genotype Tt, where T (tall) is dominant to t (short). What is its phenotype?",
          "skillId": "biology-101-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "Tall"
            },
            {
              "id": "b",
              "text": "Short"
            },
            {
              "id": "c",
              "text": "Medium height"
            },
            {
              "id": "d",
              "text": "Tt"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Because the 'T' allele is dominant, its trait (tall) will be expressed even when paired with a recessive 't' allele. The phenotype is the observable trait."
        },
        {
          "id": "biology-101-l09-q4",
          "text": "If two parents with genotype Bb have a child, what is the probability that the child will have the genotype bb?",
          "skillId": "biology-101-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "0%"
            },
            {
              "id": "b",
              "text": "25%"
            },
            {
              "id": "c",
              "text": "50%"
            },
            {
              "id": "d",
              "text": "75%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A Punnett square for Bb x Bb shows four possible offspring genotypes: BB, Bb, Bb, and bb. Only one of the four is bb, so the probability is 1/4 or 25%."
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
      }
    },
    {
      "id": "biology-101-l10",
      "title": "Applied Biology: The Coral Reef Crisis",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Apply concepts of ecology, adaptation, and genetics to a real-world scenario.",
        "Explain the causes and consequences of coral bleaching.",
        "Evaluate potential conservation strategies."
      ],
      "chunks": [
        {
          "id": "biology-101-l10-c1",
          "title": "Rainforests of the Sea",
          "kind": "intro",
          "content": "Coral reefs are one of the most diverse ecosystems on Earth, supporting about 25% of all marine life. But they are in danger. Rising ocean temperatures are causing a phenomenon called coral bleaching. Corals have a symbiotic relationship with tiny algae that live inside them, providing food and color. When the water gets too warm, the corals expel these algae, turn white, and begin to starve.",
          "visualPrompt": "A dramatic split-screen image: on the left, a vibrant, colorful coral reef teeming with fish; on the right, the same reef, now stark white and barren (bleached)."
        },
        {
          "id": "biology-101-l10-c2",
          "title": "An Ecosystem Collapse",
          "kind": "concept",
          "content": "When corals die, the entire reef food web is affected. Corals are keystone species, meaning many other organisms depend on them for food and shelter. Without the coral, fish populations decline, which in turn affects larger predators. This has a huge impact on the millions of people who rely on reefs for food, income from tourism, and protection from coastal storms. It's a perfect example of how the health of one group of organisms can affect an entire ecosystem.",
          "visualPrompt": "An animated food web diagram for a coral reef. The coral at the bottom fades away, causing the organisms connected to it (small fish, crabs) to also fade, followed by the larger fish that eat them."
        },
        {
          "id": "biology-101-l10-c3",
          "title": "Hope Through Science",
          "kind": "example",
          "content": "Scientists are racing to find solutions. Some corals have shown a natural adaptation to warmer waters. By studying their genetics, researchers hope to identify the genes responsible for this heat tolerance. This could lead to strategies like breeding more resilient corals in nurseries and transplanting them to damaged reefs, using our understanding of natural selection and heredity to help nature recover.",
          "visualPrompt": "A short video clip of marine biologists working in an underwater coral nursery, carefully tending to small coral fragments."
        }
      ],
      "flashcards": [
        {
          "id": "biology-101-l10-f1",
          "front": "What is coral bleaching?",
          "back": "The process where corals, stressed by factors like warm water, expel the symbiotic algae living in their tissues, causing them to turn white and lose their main food source."
        },
        {
          "id": "biology-101-l10-f2",
          "front": "What is a keystone species?",
          "back": "A species on which other species in an ecosystem largely depend, such that if it were removed the ecosystem would change drastically. Coral is a keystone species."
        }
      ],
      "learningAids": [
        {
          "id": "biology-101-l10-a1",
          "type": "practice",
          "title": "Propose a Solution",
          "content": "Based on what you've learned, write a short paragraph proposing one strategy to help save coral reefs. Explain how your strategy connects to concepts like ecosystems, adaptation, or genetics."
        }
      ]
    },
    {
      "id": "biology-101-l11",
      "title": "Final Review and Mastery",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "biology-101-l11-q1",
          "text": "Which two organelles are involved in the energy cycle of a plant cell?",
          "skillId": "biology-101-skill-cells",
          "options": [
            {
              "id": "a",
              "text": "Nucleus and Ribosome"
            },
            {
              "id": "b",
              "text": "Chloroplast and Mitochondrion"
            },
            {
              "id": "c",
              "text": "Cell Wall and Cell Membrane"
            },
            {
              "id": "d",
              "text": "Vacuole and Nucleus"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Chloroplasts capture solar energy (photosynthesis), and mitochondria release that stored chemical energy for the cell to use (respiration)."
        },
        {
          "id": "biology-101-l11-q2",
          "text": "An invasive insect is introduced to a forest and eats the leaves of a specific tree. What is the most likely immediate effect on the food web?",
          "skillId": "biology-101-skill-ecosystems",
          "options": [
            {
              "id": "a",
              "text": "The population of top predators will increase."
            },
            {
              "id": "b",
              "text": "The population of decomposers will decrease."
            },
            {
              "id": "c",
              "text": "The population of herbivores that also eat that tree will decrease due to competition."
            },
            {
              "id": "d",
              "text": "The amount of sunlight will increase."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The new insect competes for the same food source (the tree), reducing the available food for native herbivores and likely causing their population to decline."
        },
        {
          "id": "biology-101-l11-q3",
          "text": "In pea plants, purple flowers (P) are dominant to white flowers (p). If you cross a PP plant with a pp plant, what will the offspring's phenotype be?",
          "skillId": "biology-101-skill-genetics",
          "options": [
            {
              "id": "a",
              "text": "All white flowers"
            },
            {
              "id": "b",
              "text": "All purple flowers"
            },
            {
              "id": "c",
              "text": "A mix of purple and white flowers"
            },
            {
              "id": "d",
              "text": "Pink flowers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "All offspring will have the genotype Pp. Since P (purple) is dominant, all of them will have the purple flower phenotype."
        },
        {
          "id": "biology-101-l11-q4",
          "text": "A population of giraffes has individuals with varying neck lengths. In an environment where the only food is on tall trees, giraffes with longer necks are more likely to survive and reproduce. This is an example of:",
          "skillId": "biology-101-skill-adaptation",
          "options": [
            {
              "id": "a",
              "text": "Homeostasis"
            },
            {
              "id": "b",
              "text": "The cell cycle"
            },
            {
              "id": "c",
              "text": "Natural selection"
            },
            {
              "id": "d",
              "text": "A food chain"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The environment is 'selecting' for the trait of longer necks, as it provides a survival advantage, which is the core principle of natural selection."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 15,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      }
    }
  ]
};
