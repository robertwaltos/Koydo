import type { LearningModule } from "@/lib/modules/types";

export const chemistry_201_Module: LearningModule = {
  "id": "chemistry-201",
  "title": "Chemistry Reactions and Models",
  "description": "Model reactions, conservation, and solution behavior with quantitative reasoning.",
  "subject": "Chemistry",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Chemistry",
    "Apply Chemical Change Evidence strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "chemistry-201-l01",
      "title": "Reaction Patterns and Clues",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant, engaging 3D illustration of a chemistry laboratory setup with colorful bubbling flasks, glowing molecules floating in the air, and a magnifying glass examining a chemical bond. Bright, inviting colors suitable for students.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic, educational 3D animation showing atoms rearranging themselves during a chemical reaction. The atoms glow in different colors, breaking old bonds and forming new ones, with a clear, cinematic lighting style.",
      "chunks": [
        {
          "id": "chemistry-201-l01-c1",
          "title": "Reaction Patterns and Clues Overview",
          "content": "Welcome to the fascinating world of chemical reactions! In this exciting lesson, we will explore various types of reactions and use models to help us understand how they work. Think of yourself as a chemistry detective: your main goal is to learn how to identify strong evidence that a reaction has occurred. By the end of this lesson, you will be able to spot patterns like color changes or bubbling gases, and use your reasoning skills to solve problems confidently!"
        },
        {
          "id": "chemistry-201-l01-c2",
          "title": "Core Concept: Conservation of Mass",
          "content": "Have you ever wondered where the wax goes when a candle burns? In this section, we will learn about the Law of Conservation of Mass. This important rule states that matter cannot be created or destroyed in a chemical reaction. The atoms just rearrange themselves! We will look for evidence of this by counting atoms before and after a reaction to ensure everything is perfectly balanced."
        },
        {
          "id": "chemistry-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! Imagine we are mixing baking soda and vinegar. First, we define our goal: to prove that the mass stays the same even though gas escapes. Next, we apply our strategy by imagining the reaction happening inside a sealed bag. Finally, we verify our result by 'weighing' the bag before and after. This step-by-step approach will help you feel more confident in solving similar problems on your own."
        },
        {
          "id": "chemistry-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the same steps we just practiced and apply them to a new situation: a rusting bicycle. As you work through this new example, explain in one clear sentence why the rusty bike might actually weigh slightly more than the shiny new bike (Hint: think about the oxygen in the air!). This will strengthen your understanding of how atoms combine in the real world."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-201-l01-f1",
          "front": "Chemical Reaction",
          "back": "A process where substances change into new substances with different properties."
        },
        {
          "id": "chemistry-201-l01-f2",
          "front": "Conservation of Mass",
          "back": "The rule that matter is neither created nor destroyed in a chemical reaction."
        },
        {
          "id": "chemistry-201-l01-f3",
          "front": "Reactants",
          "back": "The starting materials in a chemical reaction."
        },
        {
          "id": "chemistry-201-l01-f4",
          "front": "Products",
          "back": "The new substances formed as a result of a chemical reaction."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic showing a balanced scale with reactants on one side and products on the other."
        },
        {
          "id": "chemistry-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation showing atoms dancing and swapping partners to form new molecules."
        }
      ]
    },
    {
      "id": "chemistry-201-l02",
      "title": "Balancing and Conservation Thinking",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a vintage balancing scale. On one side, a cluster of red and white atoms; on the other side, the exact same atoms rearranged into different molecules. Bright, educational aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth 3D animation showing a chemical equation balancing itself. Numbers (coefficients) pop into place next to molecules, and a visual scale tips until it is perfectly level.",
      "metadata": {
        "prompts": [
          "Identify one core idea about reaction types from this lesson.",
          "Explain where conservation of mass appears in real life.",
          "Describe one question you still have about reaction modeling."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-201-l02-ia1",
          "type": "drag_and_drop",
          "title": "Practice Flow Builder",
          "description": "Sort each action into Plan, Execute, or Reflect when balancing an equation.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "execute",
                "label": "Execute"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Identify the reactants and products",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Add coefficients to balance the atoms",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Check if the atom count is equal on both sides",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on counting atoms and write one reflection on why balancing is important."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l02.png"
    },
    {
      "id": "chemistry-201-l03",
      "title": "Checkpoint: Reaction Models",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital checkpoint gate in a futuristic science lab, with holographic chemical equations floating around it. 3D render, vibrant colors.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, engaging 3D motion graphic summarizing the law of conservation of mass, showing a quick transformation of ice to water to steam, emphasizing that the number of molecules stays the same.",
      "questions": [
        {
          "id": "chemistry-201-l03-q1",
          "text": "What is the primary purpose of a chemical model?",
          "skillId": "chemistry-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To help visualize and explain how atoms rearrange during a reaction."
            },
            {
              "id": "b",
              "text": "To change the physical state of a substance."
            },
            {
              "id": "c",
              "text": "To prove that chemistry is unrelated to physics."
            },
            {
              "id": "d",
              "text": "To make chemical reactions happen faster."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l03-q2",
          "text": "According to the Law of Conservation of Mass, what must be true about a chemical reaction?",
          "skillId": "chemistry-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The total mass of the reactants must equal the total mass of the products."
            },
            {
              "id": "b",
              "text": "The products will always weigh more than the reactants."
            },
            {
              "id": "c",
              "text": "Mass is destroyed when a gas is produced."
            },
            {
              "id": "d",
              "text": "The reactants will always weigh more than the products."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l03-q3",
          "text": "When balancing a chemical equation, what are you allowed to change?",
          "skillId": "chemistry-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "The coefficients (the big numbers in front of the molecules)."
            },
            {
              "id": "b",
              "text": "The subscripts (the small numbers inside the molecules)."
            },
            {
              "id": "c",
              "text": "The types of atoms involved in the reaction."
            },
            {
              "id": "d",
              "text": "The chemical symbols of the elements."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l03-q4",
          "text": "If 12 grams of carbon react completely with 32 grams of oxygen, what is the mass of the carbon dioxide produced?",
          "skillId": "chemistry-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "44 grams"
            },
            {
              "id": "b",
              "text": "20 grams"
            },
            {
              "id": "c",
              "text": "12 grams"
            },
            {
              "id": "d",
              "text": "32 grams"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Reaction Models",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Equation is unbalanced"
              },
              {
                "id": "l2",
                "label": "Changed a subscript by mistake"
              },
              {
                "id": "l3",
                "label": "Forgot to count a hidden atom"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Adjust the coefficients instead"
              },
              {
                "id": "r2",
                "label": "Reset and only change the big numbers in front"
              },
              {
                "id": "r3",
                "label": "Make a T-chart to carefully tally all atoms"
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
          "id": "chemistry-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Remember MINOH for balancing: Metals, Ions, Non-metals, Oxygen, Hydrogen."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l03.png"
    },
    {
      "id": "chemistry-201-l04",
      "title": "Solutions and Concentration",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A bright, colorful 3D illustration of three beakers filled with blue liquid. The first is light blue, the second is medium blue, and the third is dark blue, representing different levels of concentration. Educational style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing sugar cubes dropping into a glass of water. The camera zooms in to a microscopic level, showing the sugar molecules spreading out evenly among the water molecules to form a solution.",
      "chunks": [
        {
          "id": "chemistry-201-l04-c1",
          "title": "Solutions and Concentration Focus",
          "content": "In this lesson, we will dive into the world of mixtures, specifically focusing on solutions and concentration. Have you ever made lemonade that was too sour or too watery? That's all about concentration! We will learn how to measure the amount of a substance dissolved in a liquid and how to use structured reasoning to adjust it."
        },
        {
          "id": "chemistry-201-l04-c2",
          "title": "Solutes and Solvents",
          "content": "Let's break down the parts of a solution. The 'solute' is the stuff that gets dissolved, like salt or sugar. The 'solvent' is the liquid doing the dissolving, usually water. When you mix them together perfectly, you get a solution! Understanding these two parts is the first step to mastering concentration."
        },
        {
          "id": "chemistry-201-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes. A frequent error is confusing 'dilute' with 'concentrated'. Remember, a concentrated solution has a LOT of solute packed into the solvent. A dilute solution has very little. Another mistake is thinking that adding more solvent changes the amount of solute—it doesn't, it just spreads it out more!"
        },
        {
          "id": "chemistry-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try! Imagine you have a cup of very salty water. How could you make the concentration of salt lower without taking any salt out? Think about what you could add to the cup. After you decide, compare your reasoning with the concepts of solute and solvent we just discussed."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-201-l04-f1",
          "front": "Solution",
          "back": "A perfectly mixed mixture of a solute dissolved in a solvent."
        },
        {
          "id": "chemistry-201-l04-f2",
          "front": "Solute",
          "back": "The substance that is being dissolved (e.g., sugar)."
        },
        {
          "id": "chemistry-201-l04-f3",
          "front": "Solvent",
          "back": "The substance doing the dissolving (e.g., water)."
        },
        {
          "id": "chemistry-201-l04-f4",
          "front": "Concentration",
          "back": "The measure of how much solute is dissolved in a specific amount of solvent."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals showing how adding water to a dark juice makes it lighter (dilution)."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l04.png"
    },
    {
      "id": "chemistry-201-l05",
      "title": "Rate, Temperature, and Catalysts",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a thermometer next to a bubbling flask on a hot plate, with a stopwatch floating nearby. Vibrant, engaging, and educational.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A split-screen 3D animation showing two identical chemical reactions. On the left, the reaction is cold and slow. On the right, the reaction is heated and moves rapidly, demonstrating the effect of temperature on reaction rate.",
      "metadata": {
        "prompts": [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort the actions based on how they affect the rate of a chemical reaction.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "speed_up",
                "label": "Speeds Up Reaction"
              },
              {
                "id": "slow_down",
                "label": "Slows Down Reaction"
              },
              {
                "id": "no_change",
                "label": "No Effect on Rate"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Adding a catalyst",
                "correctBucketId": "speed_up"
              },
              {
                "id": "i2",
                "label": "Putting the beaker in an ice bath",
                "correctBucketId": "slow_down"
              },
              {
                "id": "i3",
                "label": "Changing the color of the room's lighting",
                "correctBucketId": "no_change"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence showing how a catalyst provides a shortcut for a chemical reaction."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l05.png"
    },
    {
      "id": "chemistry-201-l06",
      "title": "Checkpoint: Chemical Change Evidence",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing digital quiz interface floating above a chemistry lab bench, with test tubes showing color changes and gas bubbles. High quality, educational.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced 3D motion graphic summarizing the four main signs of a chemical change: color change, temperature change, gas production, and precipitate formation.",
      "questions": [
        {
          "id": "chemistry-201-l06-q1",
          "text": "Which of the following is the strongest evidence that a chemical reaction has occurred?",
          "skillId": "chemistry-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "An unexpected change in color and the formation of bubbles."
            },
            {
              "id": "b",
              "text": "Ice melting into liquid water."
            },
            {
              "id": "c",
              "text": "Salt dissolving completely in a glass of warm water."
            },
            {
              "id": "d",
              "text": "A piece of paper being torn into smaller pieces."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l06-q2",
          "text": "If you want to decrease the concentration of a sugar solution, what is the best step to take?",
          "skillId": "chemistry-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Add more solvent (water) to the solution."
            },
            {
              "id": "b",
              "text": "Add more solute (sugar) to the solution."
            },
            {
              "id": "c",
              "text": "Evaporate some of the water."
            },
            {
              "id": "d",
              "text": "Stir the solution faster."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l06-q3",
          "text": "How does adding a catalyst affect a chemical reaction?",
          "skillId": "chemistry-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It speeds up the reaction without being consumed."
            },
            {
              "id": "b",
              "text": "It slows down the reaction to make it safer."
            },
            {
              "id": "c",
              "text": "It increases the total mass of the products."
            },
            {
              "id": "d",
              "text": "It stops the reaction completely."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l06-q4",
          "text": "Why does increasing the temperature usually speed up a chemical reaction?",
          "skillId": "chemistry-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It makes the particles move faster and collide more often."
            },
            {
              "id": "b",
              "text": "It makes the particles larger and heavier."
            },
            {
              "id": "c",
              "text": "It decreases the concentration of the reactants."
            },
            {
              "id": "d",
              "text": "It turns all the liquids into solids."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Chemical Change Evidence",
          "description": "Match the observation to the type of change it represents.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Baking soda and vinegar produce bubbles"
              },
              {
                "id": "l2",
                "label": "Water freezing into an ice cube"
              },
              {
                "id": "l3",
                "label": "Adding water to dark juice to make it lighter"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Chemical Change (Gas Production)"
              },
              {
                "id": "r2",
                "label": "Physical Change (State Change)"
              },
              {
                "id": "r3",
                "label": "Physical Change (Dilution)"
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
          "id": "chemistry-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Signs of a chemical change: City Girls Love Their Phones (Color, Gas, Light, Temperature, Precipitate)."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l06.png"
    },
    {
      "id": "chemistry-201-l07",
      "title": "Acids/Bases in Context",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a pH scale ranging from 0 to 14, with a lemon on the acidic side and a bar of soap on the basic side. Bright, educational, and visually appealing.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a piece of red litmus paper turning blue when dipped into a basic solution, followed by blue litmus paper turning red in an acidic solution. Clear, bright lighting.",
      "chunks": [
        {
          "id": "chemistry-201-l07-c1",
          "title": "Acids and Bases Setup",
          "content": "Welcome to the sour and slippery world of acids and bases! Before diving into reactions involving these special chemicals, it's crucial to organize your approach. We will learn how to identify acids (like lemon juice) and bases (like soap) using the pH scale and indicators. Planning ahead will help you predict what happens when they mix!"
        },
        {
          "id": "chemistry-201-l07-c2",
          "title": "The pH Scale",
          "content": "The pH scale is like a ruler for measuring how acidic or basic a liquid is. It goes from 0 to 14. Anything below 7 is an acid, anything above 7 is a base, and exactly 7 is neutral, like pure water. Always choose the strongest evidence, like a pH reading or a color change from an indicator, to classify your solution."
        },
        {
          "id": "chemistry-201-l07-c3",
          "title": "Neutralization Reactions",
          "content": "What happens when an unstoppable acid meets an immovable base? They neutralize each other! When you mix an acid and a base together, they react to form water and a salt. This is a perfect example of a chemical reaction where the properties of the reactants completely change."
        },
        {
          "id": "chemistry-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "After learning about the pH scale, take a moment to look around your kitchen or bathroom. Can you guess which items are acids and which are bases? Write down one item you think is an acid and one you think is a base, and explain why based on what we just learned."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-201-l07-f1",
          "front": "Acid",
          "back": "A substance with a pH less than 7; often tastes sour."
        },
        {
          "id": "chemistry-201-l07-f2",
          "front": "Base",
          "back": "A substance with a pH greater than 7; often feels slippery."
        },
        {
          "id": "chemistry-201-l07-f3",
          "front": "Neutralization",
          "back": "A reaction between an acid and a base that produces water and a salt."
        },
        {
          "id": "chemistry-201-l07-f4",
          "front": "pH Scale",
          "back": "A scale from 0 to 14 used to measure how acidic or basic a substance is."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project testing household liquids with cabbage juice indicator."
        }
      ]
    },
    {
      "id": "chemistry-201-l08",
      "title": "Chemistry Lab Review",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a student's chemistry notebook open on a desk, surrounded by colorful pens, a calculator, and a small beaker. The notebook has diagrams of molecules. Educational and inviting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a student's thought process as a glowing lightbulb. The lightbulb flickers when a mistake is made in a chemistry equation, then glows brightly when the student corrects the mistake by balancing the atoms.",
      "metadata": {
        "prompts": [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-201-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match",
          "description": "Match each lab challenge with the best follow-up action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I keep forgetting to balance the oxygen atoms"
              },
              {
                "id": "l2",
                "label": "I confuse solute and solvent"
              },
              {
                "id": "l3",
                "label": "I mix up acids and bases on the pH scale"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Use a T-chart to tally every atom before finishing"
              },
              {
                "id": "r2",
                "label": "Remember: SolvENT is the big tENT that holds the solute"
              },
              {
                "id": "r3",
                "label": "Draw a number line: 0-6 is Acid, 8-14 is Base"
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
          "id": "chemistry-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing your chemistry equations."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l08.png"
    },
    {
      "id": "chemistry-201-l09",
      "title": "Review: Chemical Reasoning",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing brain made of interconnected atoms and molecules, symbolizing chemical reasoning. High-tech, educational aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced 3D motion graphic showing a puzzle coming together. The puzzle pieces represent different chemistry concepts: conservation of mass, concentration, and pH, forming a complete picture of chemical reasoning.",
      "questions": [
        {
          "id": "chemistry-201-l09-q1",
          "text": "What happens to the total mass of the substances during a neutralization reaction?",
          "skillId": "chemistry-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The total mass remains exactly the same due to the conservation of mass."
            },
            {
              "id": "b",
              "text": "The mass decreases because water is formed."
            },
            {
              "id": "c",
              "text": "The mass increases because a salt is created."
            },
            {
              "id": "d",
              "text": "The mass disappears completely."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l09-q2",
          "text": "If a solution has a pH of 2, how would you classify it?",
          "skillId": "chemistry-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It is a strong acid."
            },
            {
              "id": "b",
              "text": "It is a strong base."
            },
            {
              "id": "c",
              "text": "It is completely neutral."
            },
            {
              "id": "d",
              "text": "It is a weak base."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l09-q3",
          "text": "Which action would increase the rate at which a solid solute dissolves in a liquid solvent?",
          "skillId": "chemistry-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Crushing the solid into smaller pieces to increase surface area."
            },
            {
              "id": "b",
              "text": "Cooling the liquid solvent down."
            },
            {
              "id": "c",
              "text": "Leaving the mixture completely still without stirring."
            },
            {
              "id": "d",
              "text": "Adding more of the solid solute."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l09-q4",
          "text": "Why is it important to use evidence, like a color change or temperature shift, when analyzing a reaction?",
          "skillId": "chemistry-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To prove that a chemical change actually occurred and new substances were formed."
            },
            {
              "id": "b",
              "text": "To make the experiment look more exciting."
            },
            {
              "id": "c",
              "text": "To change the law of conservation of mass."
            },
            {
              "id": "d",
              "text": "To guess what the products might be without testing."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review",
          "description": "Match the chemistry concept to its best real-world example.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Conservation of Mass"
              },
              {
                "id": "l2",
                "label": "Neutralization"
              },
              {
                "id": "l3",
                "label": "Concentration"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "A sealed terrarium weighing the same after a plant grows"
              },
              {
                "id": "r2",
                "label": "Taking an antacid (base) for an upset stomach (acid)"
              },
              {
                "id": "r3",
                "label": "Adding two scoops of drink mix instead of one"
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
          "id": "chemistry-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each chemistry problem."
        }
      ]
    },
    {
      "id": "chemistry-201-l10",
      "title": "Mastery: Chemistry II",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a golden trophy shaped like a beaker, surrounded by sparkling stars and chemical symbols. Represents mastery and achievement in chemistry.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A celebratory 3D animation showing a complex chemical equation successfully balancing itself, followed by a burst of colorful, stylized fireworks made of atoms.",
      "questions": [
        {
          "id": "chemistry-201-l10-q1",
          "text": "Which statement best explains the difference between a physical and chemical change?",
          "skillId": "chemistry-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Chemical changes create entirely new substances, while physical changes do not."
            },
            {
              "id": "b",
              "text": "Physical changes are always irreversible, while chemical changes can be easily undone."
            },
            {
              "id": "c",
              "text": "Chemical changes only happen in liquids, while physical changes happen in solids."
            },
            {
              "id": "d",
              "text": "There is no difference; they are two names for the same process."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l10-q2",
          "text": "If you have a highly concentrated saltwater solution, what does that mean?",
          "skillId": "chemistry-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "There is a large amount of salt (solute) dissolved in the water (solvent)."
            },
            {
              "id": "b",
              "text": "There is very little salt dissolved in a large amount of water."
            },
            {
              "id": "c",
              "text": "The water has evaporated completely."
            },
            {
              "id": "d",
              "text": "The salt has turned into a gas."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l10-q3",
          "text": "When modeling a reaction, why must the number of atoms on the reactant side equal the product side?",
          "skillId": "chemistry-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Because the Law of Conservation of Mass states atoms cannot be created or destroyed."
            },
            {
              "id": "b",
              "text": "Because it makes the equation look symmetrical."
            },
            {
              "id": "c",
              "text": "Because products always weigh twice as much as reactants."
            },
            {
              "id": "d",
              "text": "Because atoms multiply during a chemical reaction."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l10-q4",
          "text": "Which of the following would NOT speed up a chemical reaction?",
          "skillId": "chemistry-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Placing the reaction mixture in a freezer."
            },
            {
              "id": "b",
              "text": "Adding a catalyst."
            },
            {
              "id": "c",
              "text": "Increasing the temperature."
            },
            {
              "id": "d",
              "text": "Increasing the concentration of the reactants."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery",
          "description": "Match the chemistry term to its correct definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Catalyst"
              },
              {
                "id": "l2",
                "label": "Coefficient"
              },
              {
                "id": "l3",
                "label": "Precipitate"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "A substance that speeds up a reaction without being used up"
              },
              {
                "id": "r2",
                "label": "The large number used to balance a chemical equation"
              },
              {
                "id": "r3",
                "label": "A solid that forms and settles out of a liquid mixture"
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
          "id": "chemistry-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Mastery means you can explain it to a friend!"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l10.png"
    },
    {
      "id": "chemistry-201-l11",
      "title": "Applied Chemistry Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a high-tech chemistry studio with interactive holographic displays showing molecular structures and concentration graphs. Modern, bright, and engaging.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a student's hands interacting with a virtual reality chemistry set, dragging and dropping atoms to build molecules and balance equations in mid-air.",
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using concentration.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-201-l11-ia1",
          "type": "sorting_buckets",
          "title": "Transfer Ladder",
          "description": "Sort actions into Diagnose, Fix, and Transfer phases for a chemistry problem.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "diagnose",
                "label": "Diagnose"
              },
              {
                "id": "fix",
                "label": "Fix"
              },
              {
                "id": "transfer",
                "label": "Transfer"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Notice that I keep forgetting to count Oxygen atoms",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Use a T-chart to recount and adjust the coefficients",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Successfully balance a brand new combustion equation",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult chemistry problem."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l11.png"
    },
    {
      "id": "chemistry-201-l12",
      "title": "Chemistry II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing target board with a chemical flask hitting the bullseye, representing applied mastery and accuracy in chemistry.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced 3D motion graphic showing a rapid-fire sequence of chemistry concepts: a balancing scale, a pH strip changing color, and a thermometer rising, ending with a checkmark.",
      "questions": [
        {
          "id": "chemistry-201-l12-q1",
          "text": "Which of the following scenarios describes a chemical change?",
          "skillId": "chemistry-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "An iron nail rusting when left outside in the rain."
            },
            {
              "id": "b",
              "text": "Sugar dissolving in a cup of hot tea."
            },
            {
              "id": "c",
              "text": "Water boiling and turning into steam."
            },
            {
              "id": "d",
              "text": "Crushing a piece of chalk into powder."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l12-q2",
          "text": "If you mix an acid (pH 3) and a base (pH 11) together in the right amounts, what is the likely pH of the resulting solution?",
          "skillId": "chemistry-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Around 7 (Neutral)"
            },
            {
              "id": "b",
              "text": "Around 14 (Strong Base)"
            },
            {
              "id": "c",
              "text": "Around 1 (Strong Acid)"
            },
            {
              "id": "d",
              "text": "It will have no pH."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l12-q3",
          "text": "Why can't you change the subscripts (small numbers) when balancing a chemical equation?",
          "skillId": "chemistry-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Changing the subscripts changes the actual identity of the substance."
            },
            {
              "id": "b",
              "text": "It makes the math too difficult."
            },
            {
              "id": "c",
              "text": "Subscripts are only used for physical changes."
            },
            {
              "id": "d",
              "text": "You are allowed to change subscripts whenever you want."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l12-q4",
          "text": "What is the best way to prove that mass was conserved in a reaction that produces a gas?",
          "skillId": "chemistry-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Perform the reaction in a sealed container and weigh it before and after."
            },
            {
              "id": "b",
              "text": "Perform the reaction in an open beaker and weigh it before and after."
            },
            {
              "id": "c",
              "text": "Measure the temperature of the gas."
            },
            {
              "id": "d",
              "text": "Guess the weight of the gas based on its color."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Applied Retest",
          "description": "Match the chemistry problem to its solution.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Solution is too concentrated"
              },
              {
                "id": "l2",
                "label": "Reaction is happening too slowly"
              },
              {
                "id": "l3",
                "label": "Need to neutralize an acid spill"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add more solvent (dilute it)"
              },
              {
                "id": "r2",
                "label": "Add a catalyst or increase temperature"
              },
              {
                "id": "r3",
                "label": "Carefully add a base"
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
          "id": "chemistry-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Read carefully: Is it asking about a physical change or a chemical change?"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l12.png"
    },
    {
      "id": "chemistry-201-l13",
      "title": "Chemistry Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a virtual chemistry lab with a clipboard showing a 'Mission Briefing'. Beakers, safety goggles, and a microscope are on the table. Engaging and adventurous.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a first-person perspective of a student conducting a virtual chemistry experiment, pouring liquids, observing a color change, and writing down data on a glowing tablet.",
      "chunks": [
        {
          "id": "chemistry-201-l13-c1",
          "title": "Scenario Brief",
          "content": "Welcome to the Scenario Lab! In this exciting challenge, you are an environmental chemist tasked with cleaning up a mysterious spill in a local river. We will explore different types of chemical reactions, how concentration affects the water, and the evidence we can gather to solve the problem. This challenge will help you apply what you've learned in a fun, real-world way!"
        },
        {
          "id": "chemistry-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, let's break it down. First, we need to test the pH of the river water to see if the spill is an acid or a base. Then, we need to calculate the concentration of the spill to know how much neutralizer to add. For each decision point, we will assign a specific strategy that will guide our actions."
        },
        {
          "id": "chemistry-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put our plan into action! As you execute each step, be sure to explain your reasoning clearly. If you add a base to neutralize an acid, use evidence from your pH indicator to support your decision, rather than making guesses. This will ensure the river is safe for the fish!"
        },
        {
          "id": "chemistry-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing the scenario, it's important to evaluate the outcome. Did the pH return to 7? Did the concentration of the pollutant decrease? Compare your results with the target you aimed for. Identify what worked well and what might need to be adjusted for future environmental cleanups."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex chemistry task into clear decision points (e.g., Test pH -> Calculate Concentration -> Neutralize)."
        },
        {
          "id": "chemistry-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence, like a color change from an indicator."
        },
        {
          "id": "chemistry-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks (like re-testing the pH) to refine your next attempt."
        },
        {
          "id": "chemistry-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the chemistry process to a new, real-world context."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting reaction types, concentration, and evidence in a river cleanup."
        },
        {
          "id": "chemistry-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case (e.g., a rusty bridge) and explain your reasoning."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l13.png"
    },
    {
      "id": "chemistry-201-l14",
      "title": "Chemistry Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a friendly robot coach wearing a whistle, standing next to a whiteboard with chemistry equations. The robot is pointing to a balanced equation. Bright, encouraging colors.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a split screen: on one side, a common chemistry mistake (unbalanced equation), and on the other side, the 'coach's correction' showing the atoms perfectly balancing out with a green checkmark.",
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each chemistry error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on balancing equations"
              },
              {
                "id": "l2",
                "label": "Losses due to rushing pH questions"
              },
              {
                "id": "l3",
                "label": "Correct in notes but weak transfer in new tasks"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Rebuild setup steps: always draw a T-chart for atoms"
              },
              {
                "id": "r2",
                "label": "Use checkpoint pacing + verify the 0-14 scale before submit"
              },
              {
                "id": "r3",
                "label": "Pair correction with one timed real-world scenario item"
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
          "id": "chemistry-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the error, Correct the chemistry, Transfer to a new problem."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l14.png"
    },
    {
      "id": "chemistry-201-l15",
      "title": "Chemistry II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing finish line ribbon being broken by a fast-moving molecule. Represents completing the mastery sprint. Dynamic, bright, and celebratory.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, energetic 3D motion graphic summarizing the entire module: balancing equations, mixing solutions, checking pH, and observing chemical changes, ending with a 'Module Complete' badge.",
      "questions": [
        {
          "id": "chemistry-201-l15-q1",
          "text": "According to the conservation of mass, if a piece of wood burns completely in a sealed glass jar, what happens to the total mass of the jar and its contents?",
          "skillId": "chemistry-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It stays exactly the same."
            },
            {
              "id": "b",
              "text": "It decreases because the wood turns into ash."
            },
            {
              "id": "c",
              "text": "It increases because smoke is heavy."
            },
            {
              "id": "d",
              "text": "It becomes zero."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l15-q2",
          "text": "Which of the following is the best way to increase the concentration of a lemonade solution?",
          "skillId": "chemistry-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Add more lemonade powder (solute)."
            },
            {
              "id": "b",
              "text": "Add more water (solvent)."
            },
            {
              "id": "c",
              "text": "Pour half of the lemonade into another cup."
            },
            {
              "id": "d",
              "text": "Add ice cubes."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l15-q3",
          "text": "If a reaction produces bubbles and the container gets very hot, what can you conclude?",
          "skillId": "chemistry-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "A chemical change has occurred, producing a gas and releasing heat."
            },
            {
              "id": "b",
              "text": "A physical change has occurred, like water boiling."
            },
            {
              "id": "c",
              "text": "The reaction has stopped working."
            },
            {
              "id": "d",
              "text": "The substances are just mixing without reacting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-201-l15-q4",
          "text": "What is the purpose of a coefficient in a chemical equation?",
          "skillId": "chemistry-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To show the relative number of molecules needed to balance the mass."
            },
            {
              "id": "b",
              "text": "To change the type of atoms in the reaction."
            },
            {
              "id": "c",
              "text": "To indicate the temperature of the reaction."
            },
            {
              "id": "d",
              "text": "To show the pH of the solution."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery Sprint",
          "description": "Match the chemistry concept to its final review definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Conservation of Mass"
              },
              {
                "id": "l2",
                "label": "Concentration"
              },
              {
                "id": "l3",
                "label": "Chemical Change Evidence"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Matter cannot be created or destroyed"
              },
              {
                "id": "r2",
                "label": "Amount of solute divided by amount of solvent"
              },
              {
                "id": "r3",
                "label": "Color change, gas production, temperature shift"
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
          "id": "chemistry-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "You've mastered it! Remember: Chemistry is everywhere, from the food you eat to the air you breathe."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-201-l15.png"
    }
  ]
};
