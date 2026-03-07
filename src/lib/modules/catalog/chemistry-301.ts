import type { LearningModule } from "@/lib/modules/types";

export const chemistry_301_Module: LearningModule = {
  "id": "chemistry-301",
  "title": "Chemistry Quantitative Reasoning",
  "description": "Apply reaction, concentration, and equilibrium models to quantitative chemistry problems.",
  "subject": "Chemistry",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 12,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core quantitative concepts in Chemistry like stoichiometry and molarity.",
    "Apply Chemical System Analysis strategies to equilibrium and kinetics.",
    "Demonstrate mastery of reaction energetics and model validation through guided practice."
  ],
  "lessons": [
    {
      "id": "chemistry-301-l01",
      "title": "Stoichiometric Reasoning Foundations",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "A vibrant, photorealistic image of a chemistry lab bench with colorful liquids in glowing beakers, surrounded by floating, glowing 3D chemical equations and a balanced scale representing stoichiometry. Imagen 4.",
      "conceptVideoPrompt": "A high-quality educational 3D animation showing molecules of hydrogen and oxygen combining to form water. The animation visually counts the atoms to demonstrate the conservation of mass and mole ratios in a balanced chemical equation. Veo 3.1.",
      "chunks": [
        {
          "id": "chemistry-301-l01-c1",
          "title": "The Recipe of Chemistry",
          "content": "Welcome to the exciting world of stoichiometry! Think of stoichiometry as the ultimate recipe for chemistry. Just like baking a cake requires specific amounts of flour, sugar, and eggs, chemical reactions require exact amounts of reactants to create products. By understanding these relationships, we can predict exactly how much of a substance we need and how much we will produce. Our goal is to build strong reasoning skills to tackle any chemical recipe!"
        },
        {
          "id": "chemistry-301-l01-c2",
          "title": "Mole Ratios and Balanced Equations",
          "content": "To understand how quantities relate in a reaction, we first need a balanced chemical equation. The coefficients (the big numbers in front of the molecules) tell us the 'mole ratio.' For example, in the reaction 2H2 + O2 -> 2H2O, the ratio of Hydrogen to Oxygen is 2:1. This ratio is our golden ticket to converting between different substances in a quantitative chemistry problem."
        },
        {
          "id": "chemistry-301-l01-c3",
          "title": "Finding the Limiting Reactant",
          "content": "Imagine making sandwiches: if you have 10 slices of bread but only 2 slices of cheese, you can only make 2 cheese sandwiches. The cheese 'limits' how many you can make! In chemistry, the Limiting Reactant is the substance that runs out first, stopping the reaction. We use our mole ratios to calculate which reactant will produce the least amount of product. That smallest amount is our theoretical yield."
        },
        {
          "id": "chemistry-301-l01-c4",
          "title": "Percent Yield: Theory vs. Reality",
          "content": "In a perfect world, we would get 100% of the product we calculated. But in real labs, spills happen, or reactions don't finish perfectly. The 'Actual Yield' is what you physically measure in the lab, while the 'Theoretical Yield' is what your math predicted. Percent Yield is simply (Actual / Theoretical) x 100. It tells us how efficient our chemical reaction really was!"
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-301-l01-f1",
          "front": "Stoichiometry",
          "back": "The calculation of quantities of reactants and products in chemical reactions."
        },
        {
          "id": "chemistry-301-l01-f2",
          "front": "Mole Ratio",
          "back": "A conversion factor derived from the coefficients of a balanced chemical equation."
        },
        {
          "id": "chemistry-301-l01-f3",
          "front": "Limiting Reactant",
          "back": "The reactant that is completely consumed first, determining the maximum amount of product."
        },
        {
          "id": "chemistry-301-l01-f4",
          "front": "Percent Yield",
          "back": "The ratio of the actual yield to the theoretical yield, multiplied by 100."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-301-l01-a1",
          "type": "image",
          "title": "Stoichiometry Map",
          "content": "A colorful infographic showing the path from Grams of A -> Moles of A -> Moles of B -> Grams of B."
        },
        {
          "id": "chemistry-301-l01-a2",
          "type": "animation",
          "title": "Sandwich Analogy Animation",
          "content": "Short animation comparing limiting reactants to making sandwiches with leftover ingredients."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l01.png"
    },
    {
      "id": "chemistry-301-l02",
      "title": "Concentration and Dilution Models",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A bright, engaging 3D illustration of a volumetric flask being filled with a vibrant blue copper sulfate solution, with a glowing formula M1V1 = M2V2 floating nearby. Imagen 4.",
      "conceptVideoPrompt": "A smooth, cinematic 3D animation showing a concentrated dark red liquid being diluted with clear water in a beaker. The color lightens, and a dynamic graph shows the molarity decreasing while the total moles remain constant. Veo 3.1.",
      "metadata": {
        "prompts": [
          "Explain the difference between a solute and a solvent.",
          "How does adding more solvent change the molarity of a solution?",
          "Describe a real-life example of dilution you see at home."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-301-l02-ia1",
          "type": "drag_and_drop",
          "title": "Dilution Process Builder",
          "description": "Sort each action into the correct phase of preparing a diluted solution.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "calculate",
                "label": "Calculate"
              },
              {
                "id": "measure",
                "label": "Measure"
              },
              {
                "id": "mix",
                "label": "Mix"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Use M1V1 = M2V2 to find required volume",
                "correctTargetId": "calculate"
              },
              {
                "id": "d2",
                "label": "Extract the exact volume of stock solution using a pipette",
                "correctTargetId": "measure"
              },
              {
                "id": "d3",
                "label": "Add distilled water until the final volume is reached",
                "correctTargetId": "mix"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-301-l02-a1",
          "type": "practice",
          "title": "Molarity Try It Board",
          "content": "Complete a guided calculation to find the molarity of a 500mL solution containing 2 moles of NaCl."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l02.png"
    },
    {
      "id": "chemistry-301-l03",
      "title": "Checkpoint: Quantitative Reactions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A futuristic digital interface showing a chemistry quiz with holographic checkmarks, glowing test tubes, and a progress bar reaching 100%. Imagen 4.",
      "conceptVideoPrompt": "A fast-paced, engaging 3D motion graphic summarizing stoichiometry and molarity formulas, with puzzle pieces snapping together to represent problem-solving steps. Veo 3.1.",
      "questions": [
        {
          "id": "chemistry-301-l03-q1",
          "text": "What is the first essential step before using mole ratios in a stoichiometry problem?",
          "skillId": "chemistry-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Ensure the chemical equation is balanced."
            },
            {
              "id": "b",
              "text": "Calculate the percent yield."
            },
            {
              "id": "c",
              "text": "Find the molar mass of the products only."
            },
            {
              "id": "d",
              "text": "Convert all volumes to liters."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l03-q2",
          "text": "If you have 2.0 moles of solute dissolved in 4.0 Liters of solution, what is the molarity?",
          "skillId": "chemistry-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "0.5 M"
            },
            {
              "id": "b",
              "text": "2.0 M"
            },
            {
              "id": "c",
              "text": "8.0 M"
            },
            {
              "id": "d",
              "text": "6.0 M"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l03-q3",
          "text": "Which statement best describes a limiting reactant?",
          "skillId": "chemistry-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It is the reactant that is completely used up, stopping the reaction."
            },
            {
              "id": "b",
              "text": "It is the reactant left over after the reaction stops."
            },
            {
              "id": "c",
              "text": "It is the product that weighs the least."
            },
            {
              "id": "d",
              "text": "It is the catalyst that slows down the reaction."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l03-q4",
          "text": "When diluting a solution, which of the following remains constant?",
          "skillId": "chemistry-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "The total number of moles of solute."
            },
            {
              "id": "b",
              "text": "The total volume of the solution."
            },
            {
              "id": "c",
              "text": "The molarity of the solution."
            },
            {
              "id": "d",
              "text": "The color intensity of the solution."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Error Correction Match",
          "description": "Match each common chemistry mistake to the best correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the mistake on the left.",
            "Pick the correct fix on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Used wrong mole ratio"
              },
              {
                "id": "l2",
                "label": "Molarity calculation is off by a factor of 1000"
              },
              {
                "id": "l3",
                "label": "Calculated yield is higher than 100%"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Check the coefficients in the balanced equation"
              },
              {
                "id": "r2",
                "label": "Ensure volume is converted from mL to Liters"
              },
              {
                "id": "r3",
                "label": "Verify you didn't swap Actual and Theoretical yield"
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
          "id": "chemistry-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "For Dilutions, remember: M1V1 = M2V2. Moles before = Moles after!"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l03.png"
    },
    {
      "id": "chemistry-301-l04",
      "title": "Energetics and Reaction Progress",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A dramatic, high-contrast 3D illustration of a glowing energy profile graph. On one side, a bright orange flame represents exothermic reactions, and on the other, a glowing blue ice crystal represents endothermic reactions. Imagen 4.",
      "conceptVideoPrompt": "A visually stunning 3D animation of a roller coaster representing an energy reaction pathway. The cart climbs a steep hill (activation energy) and drops down to a lower level, releasing a burst of glowing energy (exothermic). Veo 3.1.",
      "chunks": [
        {
          "id": "chemistry-301-l04-c1",
          "title": "The Energy of Reactions",
          "content": "Every chemical reaction involves energy. Sometimes energy is absorbed, making things feel cold, and sometimes it's released, making things feel hot! In this lesson, we will explore reaction energetics. We will learn how to read energy diagrams and understand the 'cost' of starting a reaction, known as activation energy. By the end, you'll be able to predict whether a reaction will heat up your lab or cool it down."
        },
        {
          "id": "chemistry-301-l04-c2",
          "title": "Endothermic vs. Exothermic",
          "content": "Let's break down the two main types of energy changes. 'Exothermic' reactions release energy into their surroundings (like a campfire). Their products have less energy than their reactants. 'Endothermic' reactions absorb energy from their surroundings (like a chemical cold pack). Their products have more stored energy than their reactants. The difference in energy is called Enthalpy (ΔH)."
        },
        {
          "id": "chemistry-301-l04-c3",
          "title": "Activation Energy: The Spark",
          "content": "Even exothermic reactions that release a ton of energy usually need a little push to get started. Think of a match: it won't burst into flames until you strike it against the box. That initial friction provides the 'Activation Energy' (Ea). It's the minimum energy required to break the initial bonds and get the chemical party started!"
        },
        {
          "id": "chemistry-301-l04-c4",
          "title": "Reading Energy Diagrams",
          "content": "An energy diagram is like a map of a reaction's journey. The y-axis is Potential Energy, and the x-axis is Reaction Progress. You start at the reactants' energy level, climb up a hill (Activation Energy), and finish at the products' energy level. If the finish line is lower than the start, it's exothermic. If it's higher, it's endothermic. Try drawing one yourself!"
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-301-l04-f1",
          "front": "Exothermic Reaction",
          "back": "A reaction that releases heat to the surroundings; ΔH is negative."
        },
        {
          "id": "chemistry-301-l04-f2",
          "front": "Endothermic Reaction",
          "back": "A reaction that absorbs heat from the surroundings; ΔH is positive."
        },
        {
          "id": "chemistry-301-l04-f3",
          "front": "Activation Energy (Ea)",
          "back": "The minimum energy required to initiate a chemical reaction."
        },
        {
          "id": "chemistry-301-l04-f4",
          "front": "Enthalpy (ΔH)",
          "back": "The heat content of a system; the difference in energy between products and reactants."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-301-l04-a1",
          "type": "image",
          "title": "Energy Diagram Cheat Sheet",
          "content": "Visual comparison of Endothermic and Exothermic reaction coordinate diagrams."
        }
      ]
    },
    {
      "id": "chemistry-301-l05",
      "title": "Equilibrium and System Shifts",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A stylized 3D illustration of a glowing seesaw perfectly balanced with colorful molecules on both sides, representing chemical equilibrium. Arrows point left and right to show dynamic movement. Imagen 4.",
      "conceptVideoPrompt": "An engaging 3D animation showing a busy bridge with cars moving in both directions at the exact same rate. The scene transitions to molecules moving back and forth in a closed flask, illustrating dynamic equilibrium. Veo 3.1.",
      "metadata": {
        "prompts": [
          "What does it mean for a reaction to be in 'dynamic equilibrium'?",
          "How does adding more reactant affect the balance of the system?",
          "Explain Le Chatelier's Principle in your own words."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Le Chatelier's Shift Sorter",
          "description": "Sort each stress applied to a system into how the equilibrium will shift.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "shift_right",
                "label": "Shifts Right (Towards Products)"
              },
              {
                "id": "shift_left",
                "label": "Shifts Left (Towards Reactants)"
              },
              {
                "id": "no_shift",
                "label": "No Shift"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Adding more of a reactant",
                "correctBucketId": "shift_right"
              },
              {
                "id": "i2",
                "label": "Removing a product as it forms",
                "correctBucketId": "shift_right"
              },
              {
                "id": "i3",
                "label": "Adding more of a product",
                "correctBucketId": "shift_left"
              },
              {
                "id": "i4",
                "label": "Adding a catalyst",
                "correctBucketId": "no_shift"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-301-l05-a1",
          "type": "animation",
          "title": "The Seesaw of Chemistry",
          "content": "Animated sequence showing how adding weight (concentration) to one side of a seesaw forces a shift to restore balance."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l05.png"
    },
    {
      "id": "chemistry-301-l06",
      "title": "Checkpoint: Chemical System Analysis",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A sleek, modern digital tablet displaying a chemistry quiz with 3D models of molecules and energy graphs hovering above the screen. Imagen 4.",
      "conceptVideoPrompt": "A dynamic 3D motion graphic summarizing energy diagrams and equilibrium shifts, with glowing arrows and checkmarks indicating correct analytical steps. Veo 3.1.",
      "questions": [
        {
          "id": "chemistry-301-l06-q1",
          "text": "In an exothermic reaction, how does the energy of the products compare to the reactants?",
          "skillId": "chemistry-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The products have less energy than the reactants."
            },
            {
              "id": "b",
              "text": "The products have more energy than the reactants."
            },
            {
              "id": "c",
              "text": "The products and reactants have the exact same energy."
            },
            {
              "id": "d",
              "text": "Energy is completely destroyed in the process."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l06-q2",
          "text": "According to Le Chatelier's Principle, what happens if you increase the pressure on a gas-phase system at equilibrium?",
          "skillId": "chemistry-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The system shifts to the side with fewer moles of gas."
            },
            {
              "id": "b",
              "text": "The system shifts to the side with more moles of gas."
            },
            {
              "id": "c",
              "text": "The system stops reacting entirely."
            },
            {
              "id": "d",
              "text": "The equilibrium constant (K) becomes zero."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l06-q3",
          "text": "What is the primary role of activation energy in a chemical reaction?",
          "skillId": "chemistry-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It is the minimum energy required to break initial bonds and start the reaction."
            },
            {
              "id": "b",
              "text": "It is the total heat released by the reaction."
            },
            {
              "id": "c",
              "text": "It determines the final concentration of the products."
            },
            {
              "id": "d",
              "text": "It cools down the surroundings."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l06-q4",
          "text": "If a reaction is at dynamic equilibrium, which statement is true?",
          "skillId": "chemistry-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "The rate of the forward reaction equals the rate of the reverse reaction."
            },
            {
              "id": "b",
              "text": "The concentrations of reactants and products are exactly equal."
            },
            {
              "id": "c",
              "text": "All chemical reactions have completely stopped."
            },
            {
              "id": "d",
              "text": "The limiting reactant has been completely consumed."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-301-l06-ia1",
          "type": "matching_pairs",
          "title": "System Analysis Match",
          "description": "Match the system change to its resulting effect.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the action on the left.",
            "Pick the correct system response on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Add heat to an endothermic reaction"
              },
              {
                "id": "l2",
                "label": "Remove a product from the system"
              },
              {
                "id": "l3",
                "label": "Add a catalyst to the system"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Shifts right to consume the added heat"
              },
              {
                "id": "r2",
                "label": "Shifts right to replace what was lost"
              },
              {
                "id": "r3",
                "label": "Reaches equilibrium faster, but no shift"
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
          "id": "chemistry-301-l06-a1",
          "type": "mnemonic",
          "title": "Le Chatelier's Rule of Thumb",
          "content": "Add away, Take towards! (Add a chemical, shift away from it. Take a chemical, shift towards it)."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l06.png"
    },
    {
      "id": "chemistry-301-l07",
      "title": "Rates, Catalysts, and Evidence",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A dynamic 3D illustration of two molecules colliding with a bright spark, while a glowing stopwatch hovers in the background to represent reaction rates. Imagen 4.",
      "conceptVideoPrompt": "A high-speed 3D animation showing molecules bouncing around in a container. As temperature increases, they move faster and collide more often, resulting in more successful reactions. A catalyst is then introduced, providing a glowing 'shortcut' tunnel for the molecules. Veo 3.1.",
      "chunks": [
        {
          "id": "chemistry-301-l07-c1",
          "title": "The Need for Speed: Kinetics",
          "content": "Some chemical reactions, like explosions, happen in a fraction of a second. Others, like iron rusting, take years! The study of how fast reactions occur is called Chemical Kinetics. Understanding reaction rates allows us to control chemistry in the real world, from making medicines faster to preventing food from spoiling."
        },
        {
          "id": "chemistry-301-l07-c2",
          "title": "Collision Theory",
          "content": "For a reaction to happen, molecules must physically crash into each other! But not just any crash will do. According to Collision Theory, they must collide with enough energy (Activation Energy) and in the correct orientation. If they just bump gently or hit the wrong side, they bounce off unchanged. To speed up a reaction, we need more successful collisions!"
        },
        {
          "id": "chemistry-301-l07-c3",
          "title": "Factors Affecting Rate",
          "content": "How do we get more successful collisions? We have a few tricks! 1) Increase Temperature: Molecules move faster and hit harder. 2) Increase Concentration: More molecules in a space means more chances to crash. 3) Increase Surface Area: Crushing a solid into powder exposes more particles to react. These are your primary tools for controlling reaction speed."
        },
        {
          "id": "chemistry-301-l07-c4",
          "title": "Catalysts: The Ultimate Shortcut",
          "content": "What if you want to speed up a reaction without turning up the heat? Enter the Catalyst! A catalyst is a substance that speeds up a reaction by providing an alternative pathway with a lower activation energy. It's like building a tunnel through a mountain instead of climbing over it. Best of all, the catalyst isn't consumed in the reaction, so it can be used over and over!"
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-301-l07-f1",
          "front": "Chemical Kinetics",
          "back": "The area of chemistry concerned with the speeds, or rates, of reactions."
        },
        {
          "id": "chemistry-301-l07-f2",
          "front": "Collision Theory",
          "back": "Molecules must collide with sufficient energy and correct orientation to react."
        },
        {
          "id": "chemistry-301-l07-f3",
          "front": "Catalyst",
          "back": "A substance that increases reaction rate by lowering activation energy, without being consumed."
        },
        {
          "id": "chemistry-301-l07-f4",
          "front": "Surface Area",
          "back": "Increasing this (e.g., by crushing a solid) increases the rate of reaction by exposing more particles."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-301-l07-a1",
          "type": "practice",
          "title": "Rate Factor Checklist",
          "content": "A quick reference guide: Temp up = Rate up. Concentration up = Rate up. Catalyst added = Rate up."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l07.png"
    },
    {
      "id": "chemistry-301-l08",
      "title": "Chemistry Problem Lab",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "A 3D illustration of a futuristic chemistry workbench with holographic blueprints, a glowing calculator, and floating chemical symbols waiting to be assembled. Imagen 4.",
      "conceptVideoPrompt": "A first-person perspective 3D animation of a student's hands assembling a complex chemistry problem like a puzzle. Pieces labeled 'Stoichiometry', 'Molarity', and 'Kinetics' snap together to reveal a final solution. Veo 3.1.",
      "metadata": {
        "prompts": [
          "Which quantitative chemistry skill do you feel most confident in?",
          "Where do you usually get stuck in multi-step calculations?",
          "What is your strategy for checking your work?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-301-l08-ia1",
          "type": "matching_pairs",
          "title": "Problem-Solving Strategy Match",
          "description": "Match the chemistry problem type with the best first step to solve it.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Finding grams of product from grams of reactant"
              },
              {
                "id": "l2",
                "label": "Preparing a diluted solution from a stock solution"
              },
              {
                "id": "l3",
                "label": "Determining how a system will shift when heated"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Convert starting grams to moles using molar mass"
              },
              {
                "id": "r2",
                "label": "Identify M1, V1, and M2 to solve for V2"
              },
              {
                "id": "r3",
                "label": "Identify if the reaction is endothermic or exothermic"
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
      "learningAids": [
        {
          "id": "chemistry-301-l08-a1",
          "type": "mnemonic",
          "title": "The 3 C's of Chemistry Math",
          "content": "Convert (to moles), Compare (mole ratio), Calculate (final unit)!"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l08.png"
    },
    {
      "id": "chemistry-301-l09",
      "title": "Review: Chemical Quantitative Strategies",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing neon sign reading 'CHEM REVIEW' surrounded by 3D icons of a beaker, a thermometer, a stopwatch, and a balance scale. Imagen 4.",
      "conceptVideoPrompt": "A fast-paced, energetic 3D montage reviewing key chemistry concepts: a scale balancing, a thermometer rising, and molecules colliding, ending with a glowing 'Ready for Quiz' button. Veo 3.1.",
      "questions": [
        {
          "id": "chemistry-301-l09-q1",
          "text": "How does a catalyst increase the rate of a chemical reaction?",
          "skillId": "chemistry-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "By providing an alternative pathway with a lower activation energy."
            },
            {
              "id": "b",
              "text": "By increasing the temperature of the system."
            },
            {
              "id": "c",
              "text": "By increasing the concentration of the reactants."
            },
            {
              "id": "d",
              "text": "By changing the endothermic reaction into an exothermic one."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l09-q2",
          "text": "Which of the following will NOT increase the rate of a reaction between a solid and a liquid?",
          "skillId": "chemistry-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Increasing the volume of the container without changing concentration."
            },
            {
              "id": "b",
              "text": "Crushing the solid into a fine powder."
            },
            {
              "id": "c",
              "text": "Increasing the temperature of the liquid."
            },
            {
              "id": "d",
              "text": "Adding a suitable catalyst."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l09-q3",
          "text": "If you calculate that a reaction should produce 50g of product, but you only get 40g in the lab, what is your percent yield?",
          "skillId": "chemistry-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "80%"
            },
            {
              "id": "b",
              "text": "125%"
            },
            {
              "id": "c",
              "text": "10%"
            },
            {
              "id": "d",
              "text": "90%"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l09-q4",
          "text": "Why is it important to identify the limiting reactant in a stoichiometry problem?",
          "skillId": "chemistry-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Because it determines the maximum amount of product that can be formed."
            },
            {
              "id": "b",
              "text": "Because it is always the reactant with the highest molar mass."
            },
            {
              "id": "c",
              "text": "Because it speeds up the reaction rate."
            },
            {
              "id": "d",
              "text": "Because it acts as a catalyst for the system."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Concept to Definition Match",
          "description": "Match the quantitative chemistry term to its correct definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the term on the left.",
            "Pick the correct definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Molarity"
              },
              {
                "id": "l2",
                "label": "Enthalpy (ΔH)"
              },
              {
                "id": "l3",
                "label": "Dynamic Equilibrium"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Moles of solute per liter of solution"
              },
              {
                "id": "r2",
                "label": "The heat energy absorbed or released in a reaction"
              },
              {
                "id": "r3",
                "label": "When forward and reverse reaction rates are equal"
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
          "id": "chemistry-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each quantitative question."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l09.png"
    },
    {
      "id": "chemistry-301-l10",
      "title": "Mastery: Chemistry III",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A majestic 3D golden trophy shaped like an Erlenmeyer flask, glowing with a bright inner light, surrounded by floating chemistry symbols. Imagen 4.",
      "conceptVideoPrompt": "A celebratory 3D animation showing a student's digital chemistry notebook filling with gold stars and checkmarks as complex equations solve themselves perfectly. Veo 3.1.",
      "questions": [
        {
          "id": "chemistry-301-l10-q1",
          "text": "Which of the following represents a correct mole ratio for the reaction: N2 + 3H2 -> 2NH3?",
          "skillId": "chemistry-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1 mole N2 / 3 moles H2"
            },
            {
              "id": "b",
              "text": "2 moles N2 / 3 moles NH3"
            },
            {
              "id": "c",
              "text": "3 moles H2 / 1 mole NH3"
            },
            {
              "id": "d",
              "text": "1 mole N2 / 1 mole H2"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l10-q2",
          "text": "If an energy diagram shows the products at a higher energy level than the reactants, what type of reaction is it?",
          "skillId": "chemistry-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Endothermic"
            },
            {
              "id": "b",
              "text": "Exothermic"
            },
            {
              "id": "c",
              "text": "Catalyzed"
            },
            {
              "id": "d",
              "text": "Spontaneous"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l10-q3",
          "text": "How does decreasing the volume of a gas-phase equilibrium system affect the reaction?",
          "skillId": "chemistry-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It increases pressure, shifting the system to the side with fewer moles of gas."
            },
            {
              "id": "b",
              "text": "It decreases pressure, shifting the system to the side with more moles of gas."
            },
            {
              "id": "c",
              "text": "It has no effect on the equilibrium position."
            },
            {
              "id": "d",
              "text": "It changes the value of the equilibrium constant (K)."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l10-q4",
          "text": "Which action will NOT increase the number of successful collisions in a chemical reaction?",
          "skillId": "chemistry-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Decreasing the temperature of the reactants."
            },
            {
              "id": "b",
              "text": "Increasing the concentration of the reactants."
            },
            {
              "id": "c",
              "text": "Adding a catalyst."
            },
            {
              "id": "d",
              "text": "Increasing the surface area of a solid reactant."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Mastery Concept Match",
          "description": "Match the core chemistry concept to its practical application.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the concept on the left.",
            "Pick the correct application on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Stoichiometry"
              },
              {
                "id": "l2",
                "label": "Kinetics"
              },
              {
                "id": "l3",
                "label": "Equilibrium"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Calculating how much product a factory will make"
              },
              {
                "id": "r2",
                "label": "Designing a catalytic converter for a car exhaust"
              },
              {
                "id": "r3",
                "label": "Adjusting pressure to maximize ammonia yield (Haber process)"
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
          "id": "chemistry-301-l10-a1",
          "type": "mnemonic",
          "title": "Mastery Checklist",
          "content": "Balance equation -> Convert to moles -> Apply concept (Ratio/Shift/Rate) -> Check units!"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l10.png"
    },
    {
      "id": "chemistry-301-l11",
      "title": "Applied Chemistry Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A 3D illustration of a modern industrial chemical plant with glowing pipes, large reaction tanks, and digital screens showing molecular structures and graphs. Imagen 4.",
      "conceptVideoPrompt": "A 3D animation zooming into an industrial chemical reactor. We see raw materials entering, reacting under high pressure and a catalyst, and the final product flowing out, demonstrating real-world applied chemistry. Veo 3.1.",
      "metadata": {
        "prompts": [
          "How do industrial chemists use Le Chatelier's principle to make money?",
          "Why is finding the limiting reactant important in manufacturing?",
          "What role do catalysts play in green chemistry?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-301-l11-ia1",
          "type": "sorting_buckets",
          "title": "Industrial Process Optimizer",
          "description": "Sort actions into the correct phase of optimizing a chemical manufacturing process.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "yield",
                "label": "Maximize Yield (Equilibrium)"
              },
              {
                "id": "speed",
                "label": "Increase Speed (Kinetics)"
              },
              {
                "id": "cost",
                "label": "Manage Cost (Stoichiometry)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Continuously remove product to shift reaction right",
                "correctBucketId": "yield"
              },
              {
                "id": "i2",
                "label": "Add a transition metal catalyst to the reactor",
                "correctBucketId": "speed"
              },
              {
                "id": "i3",
                "label": "Calculate the exact amount of expensive limiting reactant needed",
                "correctBucketId": "cost"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-301-l11-a1",
          "type": "practice",
          "title": "Real-World Application Card",
          "content": "Think like an engineer: Balance speed, yield, and cost to create the perfect chemical process."
        }
      ]
    },
    {
      "id": "chemistry-301-l12",
      "title": "Chemistry III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A sleek, high-tech digital exam interface with a glowing 'RETEST' badge, surrounded by 3D models of atoms and a balanced scale. Imagen 4.",
      "conceptVideoPrompt": "A fast, encouraging 3D motion graphic showing a student overcoming a hurdle, with chemistry symbols transforming into a glowing checkmark. Veo 3.1.",
      "questions": [
        {
          "id": "chemistry-301-l12-q1",
          "text": "If you need to produce exactly 2.0 moles of H2O from the reaction 2H2 + O2 -> 2H2O, how many moles of O2 are required?",
          "skillId": "chemistry-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1.0 mole"
            },
            {
              "id": "b",
              "text": "2.0 moles"
            },
            {
              "id": "c",
              "text": "0.5 moles"
            },
            {
              "id": "d",
              "text": "4.0 moles"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l12-q2",
          "text": "Which of the following describes an exothermic reaction pathway?",
          "skillId": "chemistry-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Reactants start high, go over an activation energy hill, and end lower than they started."
            },
            {
              "id": "b",
              "text": "Reactants start low, go over an activation energy hill, and end higher than they started."
            },
            {
              "id": "c",
              "text": "Reactants and products are at the exact same energy level."
            },
            {
              "id": "d",
              "text": "There is no activation energy hill at all."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l12-q3",
          "text": "For the endothermic reaction A + B + Heat <-> C, what happens if you lower the temperature?",
          "skillId": "chemistry-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "The system shifts left to produce more heat."
            },
            {
              "id": "b",
              "text": "The system shifts right to consume the remaining heat."
            },
            {
              "id": "c",
              "text": "The reaction rate increases."
            },
            {
              "id": "d",
              "text": "The equilibrium constant remains unchanged."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l12-q4",
          "text": "Why does crushing a solid reactant increase the rate of a chemical reaction?",
          "skillId": "chemistry-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It increases the surface area, allowing for more frequent collisions."
            },
            {
              "id": "b",
              "text": "It lowers the activation energy of the reaction."
            },
            {
              "id": "c",
              "text": "It increases the temperature of the solid."
            },
            {
              "id": "d",
              "text": "It changes the mole ratio of the balanced equation."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Applied Retest Match",
          "description": "Match the chemistry scenario to the correct quantitative principle.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the scenario on the left.",
            "Pick the correct principle on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Calculating how much medicine a factory can make from raw materials"
              },
              {
                "id": "l2",
                "label": "Using a cold pack to treat a sports injury"
              },
              {
                "id": "l3",
                "label": "Storing food in a refrigerator to prevent spoiling"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Stoichiometry and Limiting Reactants"
              },
              {
                "id": "r2",
                "label": "Endothermic Reaction Energetics"
              },
              {
                "id": "r3",
                "label": "Kinetics and Temperature Effects"
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
          "id": "chemistry-301-l12-a1",
          "type": "mnemonic",
          "title": "Retest Focus",
          "content": "Read carefully: Is it asking for speed (kinetics), amount (stoichiometry), or direction (equilibrium)?"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l12.png"
    },
    {
      "id": "chemistry-301-l13",
      "title": "Chemistry Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A 3D illustration of a deployed car airbag with glowing chemical formulas (NaN3 -> Na + N2) floating around it, showing the real-world application of gas stoichiometry. Imagen 4.",
      "conceptVideoPrompt": "A dramatic 3D animation of a car crash test dummy. As the car hits the barrier, a chemical reaction inside the steering wheel rapidly produces nitrogen gas, inflating the airbag in milliseconds. Veo 3.1.",
      "chunks": [
        {
          "id": "chemistry-301-l13-c1",
          "title": "Scenario Brief: The Airbag Challenge",
          "content": "Welcome to the Scenario Lab! Today, you are an automotive safety engineer. Your mission: design a chemical airbag. When a car crashes, a sensor triggers a chemical reaction that rapidly produces nitrogen gas to inflate the bag. If you use too little reactant, the bag won't fill, and the passenger gets hurt. If you use too much, the bag explodes! We need perfect stoichiometry, rapid kinetics, and precise energetics."
        },
        {
          "id": "chemistry-301-l13-c2",
          "title": "Step 1: Stoichiometry (The Amount)",
          "content": "First, we need to know exactly how much gas is required to fill a 60-Liter airbag. Using the Ideal Gas Law and Stoichiometry, we calculate the exact mass of Sodium Azide (NaN3) needed. This is a classic limiting reactant problem. We must ensure NaN3 is the limiting reactant so the reaction stops exactly when the bag is full."
        },
        {
          "id": "chemistry-301-l13-c3",
          "title": "Step 2: Kinetics (The Speed)",
          "content": "An airbag must inflate in about 30 milliseconds. That's incredibly fast! To achieve this rate, the solid NaN3 is crushed into a fine powder to maximize surface area. We also use an electrical spark to provide the necessary Activation Energy instantly. This ensures the collision frequency is high enough to save a life."
        },
        {
          "id": "chemistry-301-l13-c4",
          "title": "Step 3: Energetics (The Safety Check)",
          "content": "Finally, we must evaluate the energetics. The decomposition of NaN3 is highly exothermic. It releases a lot of heat! As an engineer, you must validate this model to ensure the heat won't burn the passenger. We might need to add secondary chemicals to absorb some of that heat (an endothermic process) to keep the system safe."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex real-world task into clear chemical principles (Amount, Speed, Heat)."
        },
        {
          "id": "chemistry-301-l13-f2",
          "front": "Airbag Stoichiometry",
          "back": "Calculating the exact mass of solid needed to produce a specific volume of gas."
        },
        {
          "id": "chemistry-301-l13-f3",
          "front": "Airbag Kinetics",
          "back": "Using high surface area (powder) and a spark to achieve a 30-millisecond reaction rate."
        },
        {
          "id": "chemistry-301-l13-f4",
          "front": "Airbag Energetics",
          "back": "Managing the highly exothermic heat release to ensure passenger safety."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-301-l13-a1",
          "type": "image",
          "title": "Airbag Chemistry Map",
          "content": "A visual breakdown connecting NaN3 decomposition to Stoichiometry, Kinetics, and Energetics."
        },
        {
          "id": "chemistry-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "If you wanted the airbag to inflate slightly slower, what could you change about the solid reactant?"
        }
      ]
    },
    {
      "id": "chemistry-301-l14",
      "title": "Chemistry Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A 3D illustration of a friendly robotic chemistry tutor pointing at a glowing digital whiteboard filled with corrected chemical equations and a big green checkmark. Imagen 4.",
      "conceptVideoPrompt": "A 3D animation showing a student making a common math error in a stoichiometry problem. The screen rewinds, highlights the mistake in red, and shows the correct step in glowing green, demonstrating the learning process. Veo 3.1.",
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent chemistry calculations.",
          "How can writing out your units help prevent mistakes?",
          "Write a specific goal for your final mastery check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each common calculation error to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Forgetting to use the mole ratio"
              },
              {
                "id": "l2",
                "label": "Mixing up endothermic and exothermic graphs"
              },
              {
                "id": "l3",
                "label": "Shifting equilibrium the wrong way"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Always write the balanced equation first and circle coefficients"
              },
              {
                "id": "r2",
                "label": "Remember: Exo ends LOW (releases), Endo ends HIGH (absorbs)"
              },
              {
                "id": "r3",
                "label": "Use the 'Add away, Take towards' rule of thumb"
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
      "learningAids": [
        {
          "id": "chemistry-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the error, Correct the step, Transfer to a new problem."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l14.png"
    },
    {
      "id": "chemistry-301-l15",
      "title": "Chemistry III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A dynamic 3D illustration of a glowing finish line ribbon being broken by a fast-moving molecule, with fireworks of chemical reactions in the background. Imagen 4.",
      "conceptVideoPrompt": "A high-energy 3D motion graphic showing a rapid-fire sequence of chemistry concepts—balancing equations, shifting seesaws, and energy rollercoasters—culminating in a 'Course Complete' badge. Veo 3.1.",
      "questions": [
        {
          "id": "chemistry-301-l15-q1",
          "text": "What is the molarity of a solution containing 0.5 moles of NaCl in 2.0 Liters of water?",
          "skillId": "chemistry-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "0.25 M"
            },
            {
              "id": "b",
              "text": "1.0 M"
            },
            {
              "id": "c",
              "text": "4.0 M"
            },
            {
              "id": "d",
              "text": "0.5 M"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l15-q2",
          "text": "Which of the following is true about a catalyst?",
          "skillId": "chemistry-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It lowers the activation energy of the reaction."
            },
            {
              "id": "b",
              "text": "It is consumed during the reaction."
            },
            {
              "id": "c",
              "text": "It increases the enthalpy (ΔH) of the reaction."
            },
            {
              "id": "d",
              "text": "It shifts the equilibrium to favor the products."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l15-q3",
          "text": "In the reaction N2(g) + 3H2(g) <-> 2NH3(g) + Heat, what happens if you increase the temperature?",
          "skillId": "chemistry-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "The system shifts left, producing more N2 and H2."
            },
            {
              "id": "b",
              "text": "The system shifts right, producing more NH3."
            },
            {
              "id": "c",
              "text": "The pressure of the system decreases."
            },
            {
              "id": "d",
              "text": "The reaction stops completely."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-301-l15-q4",
          "text": "If you calculate a theoretical yield of 100g, but your actual yield is 85g, what is your percent yield?",
          "skillId": "chemistry-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "85%"
            },
            {
              "id": "b",
              "text": "115%"
            },
            {
              "id": "c",
              "text": "15%"
            },
            {
              "id": "d",
              "text": "100%"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Final Sprint Match",
          "description": "Match the final chemistry concepts to their core formulas or rules.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the concept on the left.",
            "Pick the correct formula or rule on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Dilution Formula"
              },
              {
                "id": "l2",
                "label": "Percent Yield Formula"
              },
              {
                "id": "l3",
                "label": "Le Chatelier's Principle"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "M1V1 = M2V2"
              },
              {
                "id": "r2",
                "label": "(Actual / Theoretical) x 100"
              },
              {
                "id": "r3",
                "label": "Systems shift to relieve applied stress"
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
          "id": "chemistry-301-l15-a1",
          "type": "mnemonic",
          "title": "Final Tip",
          "content": "Trust your units! If the units cancel out correctly, your math is probably right."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-301-l15.png"
    }
  ]
};
