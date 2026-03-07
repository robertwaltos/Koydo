import type { LearningModule } from "@/lib/modules/types";

export const chemistry_401_Module: LearningModule = {
  "id": "chemistry-401",
  "title": "Chemistry Capstone Systems",
  "description": "Synthesize quantitative chemistry models for equilibrium, rate, and energetic systems.",
  "subject": "Chemistry",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "capstone"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in chemical equilibrium and kinetics.",
    "Apply Chemical Argument Quality strategies through guided practice.",
    "Demonstrate mastery of quantitative modeling and error analysis with subject-specific quizzes."
  ],
  "lessons": [
    {
      "id": "chemistry-401-l01",
      "title": "Quantitative Modeling Across Reactions",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant, 3D isometric illustration of a chemistry laboratory desk with glowing beakers, a digital scale, and floating mathematical symbols representing quantitative modeling, clean and modern educational style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation zooming into a chemical reaction, showing molecules colliding and transforming, with glowing numbers and graphs appearing to represent quantitative modeling and system equilibrium, 4k resolution, cinematic lighting.",
      "chunks": [
        {
          "id": "chemistry-401-l01-c1",
          "title": "Quantitative Modeling Overview",
          "content": "In this lesson, we are going to dive into the fascinating world of quantitative modeling in chemical systems. Quantitative modeling is like a special mathematical tool that helps scientists understand, measure, and predict how different chemicals interact. Instead of just saying a reaction happens, we use numbers to say exactly *how much* product will form. By the end of this lesson, you will be able to spot the key elements of chemical reasoning, making you a much stronger problem solver!"
        },
        {
          "id": "chemistry-401-l01-c2",
          "title": "Core Concept: System Equilibrium",
          "content": "We will explore the exciting relationship between quantitative modeling and system equilibrium. Equilibrium is a state where the forward and reverse reactions happen at the exact same rate, meaning the overall amounts of reactants and products stay constant. First, we pinpoint our main goal: understanding how these reactions balance each other. Next, we gather numerical evidence to support our conclusions. This thoughtful process empowers us to make informed decisions based on strong scientific reasoning."
        },
        {
          "id": "chemistry-401-l01-c3",
          "title": "Worked Example: Finding Balance",
          "content": "Let's embark on a guided example together! Imagine a sealed flask where a gas is reacting to form a new gas, but the new gas is also breaking down into the original one. First, we define our goal: finding the point of equilibrium. Then, we apply a mathematical strategy, like an ICE (Initial, Change, Equilibrium) table, to track the amounts of each gas. Finally, we verify our result by plugging the numbers back into our equilibrium expression to make sure everything is correct."
        },
        {
          "id": "chemistry-401-l01-c4",
          "title": "Transfer Prompt: Your Turn",
          "content": "Now it's your turn to shine! Take the ICE table process we just learned and apply it to a new situation provided in your workbook. As you go through this exercise, remember to explain why your approach makes sense in just one clear sentence. This activity will help you strengthen your understanding of equilibrium concepts and give you a chance to practice sharing your scientific thoughts clearly and confidently."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-401-l01-f1",
          "front": "Quantitative Modeling",
          "back": "Using mathematical data and equations to predict the amounts of reactants and products."
        },
        {
          "id": "chemistry-401-l01-f2",
          "front": "System Equilibrium",
          "back": "A state where the forward and reverse chemical reactions occur at the exact same rate."
        },
        {
          "id": "chemistry-401-l01-f3",
          "front": "ICE Table",
          "back": "A tool used to track Initial, Change, and Equilibrium concentrations in a reaction."
        },
        {
          "id": "chemistry-401-l01-f4",
          "front": "Verification",
          "back": "Checking that your calculated result matches the original goal and chemical constraints."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic showing a seesaw balancing reactants and products to represent equilibrium."
        },
        {
          "id": "chemistry-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Chemistry vocabulary like 'Reactants', 'Products', and 'Equilibrium'."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l01.png"
    },
    {
      "id": "chemistry-401-l02",
      "title": "Equilibrium Systems and Shifts",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A colorful, interactive digital interface showing a chemical equation with drag-and-drop elements, arrows indicating shifts in equilibrium, modern UI design, educational theme.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a chemical seesaw tipping back and forth as different colored molecules are added and removed, demonstrating Le Chatelier's Principle in a visually intuitive way.",
      "metadata": {
        "prompts": [
          "Identify one core idea about Le Chatelier's Principle.",
          "Explain how adding a reactant shifts the system.",
          "Describe one question you still have about equilibrium shifts."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-401-l02-ia1",
          "type": "drag_and_drop",
          "title": "Le Chatelier's Shift Builder",
          "description": "Sort each action into how it shifts the equilibrium: Shifts Right (Products), Shifts Left (Reactants), or No Shift.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "right",
                "label": "Shifts Right (Towards Products)"
              },
              {
                "id": "left",
                "label": "Shifts Left (Towards Reactants)"
              },
              {
                "id": "none",
                "label": "No Shift"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Add more reactant",
                "correctTargetId": "right"
              },
              {
                "id": "d2",
                "label": "Remove a product",
                "correctTargetId": "right"
              },
              {
                "id": "d3",
                "label": "Add more product",
                "correctTargetId": "left"
              },
              {
                "id": "d4",
                "label": "Add a catalyst",
                "correctTargetId": "none"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on predicting equilibrium shifts and write one reflection on your process."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l02.png"
    },
    {
      "id": "chemistry-401-l03",
      "title": "Checkpoint: Capstone Chemistry Setup",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A stylized 3D graphic of a glowing checkpoint flag planted on a stack of chemistry textbooks and a bubbling flask, symbolizing a knowledge check.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, engaging 3D motion graphic summarizing the concepts of quantitative modeling and equilibrium, transitioning into a glowing question mark.",
      "questions": [
        {
          "id": "chemistry-401-l03-q1",
          "text": "What is the primary purpose of quantitative modeling in chemistry?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To use mathematical data to predict the amounts of reactants and products."
            },
            {
              "id": "b",
              "text": "To guess the color of a chemical solution without measuring."
            },
            {
              "id": "c",
              "text": "To memorize the names of all elements on the periodic table."
            },
            {
              "id": "d",
              "text": "To explain why chemicals have different physical states."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l03-q2",
          "text": "What happens to a system at equilibrium if you add more of a reactant?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The system shifts to the right, creating more products to restore balance."
            },
            {
              "id": "b",
              "text": "The system shifts to the left, creating even more reactants."
            },
            {
              "id": "c",
              "text": "The system completely stops reacting."
            },
            {
              "id": "d",
              "text": "The equilibrium constant changes permanently."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l03-q3",
          "text": "Which tool is most helpful for tracking concentrations in an equilibrium system?",
          "skillId": "chemistry-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "An ICE (Initial, Change, Equilibrium) table."
            },
            {
              "id": "b",
              "text": "A standard thermometer."
            },
            {
              "id": "c",
              "text": "A litmus paper test."
            },
            {
              "id": "d",
              "text": "A simple bar graph of atomic weights."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l03-q4",
          "text": "Why is verifying your final result an important step in chemical reasoning?",
          "skillId": "chemistry-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It ensures your calculated values make sense within the chemical constraints."
            },
            {
              "id": "b",
              "text": "It makes the calculation look longer and more impressive."
            },
            {
              "id": "c",
              "text": "It allows you to change the original data to fit your answer."
            },
            {
              "id": "d",
              "text": "It is only required when working with highly toxic chemicals."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Equilibrium Setup",
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
                "label": "Confusion about setting up an ICE table"
              },
              {
                "id": "l2",
                "label": "Inconsistent predictions on equilibrium shifts"
              },
              {
                "id": "l3",
                "label": "Forgetting to check if the equation is balanced"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review the Initial, Change, and Equilibrium steps with a simple example"
              },
              {
                "id": "r2",
                "label": "Use the 'seesaw' visualization to apply Le Chatelier's Principle"
              },
              {
                "id": "r3",
                "label": "Add a 'Balance Check' step to the very beginning of your routine"
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
          "id": "chemistry-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Remember ICE: Initial, Change, Equilibrium to track your reaction data!"
        }
      ]
    },
    {
      "id": "chemistry-401-l04",
      "title": "Kinetics and Energetic Tradeoffs",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A dynamic 3D illustration of a roller coaster representing an energy activation curve, with a glowing catalyst tunnel lowering the hill, set in a futuristic science lab.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing molecules colliding with varying speeds. A glowing energy barrier appears, and only the fastest molecules make it over, illustrating activation energy and reaction kinetics.",
      "chunks": [
        {
          "id": "chemistry-401-l04-c1",
          "title": "Kinetics Focus",
          "content": "In this lesson, we will dive into chemical kinetics, which is the study of how fast reactions happen. We will also look at energetic tradeoffs. Sometimes, a reaction might produce a lot of product (good equilibrium), but it happens incredibly slowly (poor kinetics). We will learn how scientists use structured reasoning to balance these tradeoffs in real-world chemical processes."
        },
        {
          "id": "chemistry-401-l04-c2",
          "title": "Method Steps: Analyzing Rates",
          "content": "Let's break down how to analyze reaction rates. Step 1: Identify the factors involved. Is it temperature, concentration, or surface area? Step 2: Choose a strategy. For example, if we need a reaction to go faster without changing the temperature, we might introduce a catalyst. Step 3: Justify your choice. A catalyst lowers the activation energy, allowing more molecules to react successfully. By following these steps, we can solve kinetic problems systematically."
        },
        {
          "id": "chemistry-401-l04-c3",
          "title": "Common Mistakes in Kinetics",
          "content": "It's important to be aware of common mistakes. A major one is confusing thermodynamics (whether a reaction *will* happen) with kinetics (how *fast* it will happen). Another mistake is assuming that increasing temperature always increases the final yield; it increases the *rate*, but it might actually shift equilibrium the wrong way! Recognizing these errors helps you build stronger chemical arguments."
        },
        {
          "id": "chemistry-401-l04-c4",
          "title": "Independent Try: Energy Diagrams",
          "content": "Now, I encourage you to look at an energy diagram on your own. Try to identify the reactants, products, and the activation energy peak. After you complete it, take a moment to compare your process to the lesson sequence we discussed. Did you correctly identify how a catalyst would change the shape of the curve? This reflection will help you master energetic tradeoffs."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-401-l04-f1",
          "front": "Chemical Kinetics",
          "back": "The study of reaction rates and the factors that affect how fast a reaction occurs."
        },
        {
          "id": "chemistry-401-l04-f2",
          "front": "Activation Energy",
          "back": "The minimum amount of energy required to start a chemical reaction."
        },
        {
          "id": "chemistry-401-l04-f3",
          "front": "Catalyst",
          "back": "A substance that speeds up a reaction by lowering the activation energy, without being consumed."
        },
        {
          "id": "chemistry-401-l04-f4",
          "front": "Kinetics vs. Equilibrium",
          "back": "Kinetics is about 'how fast', while equilibrium is about 'how much' product is formed."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l04-a1",
          "type": "image",
          "title": "Energy Diagram Sheet",
          "content": "Step-by-step visuals showing how activation energy changes with and without a catalyst."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l04.png"
    },
    {
      "id": "chemistry-401-l05",
      "title": "Validating Chemical Explanations",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek digital sorting interface with glowing neon buckets labeled 'Concept', 'Process', and 'Review', with floating chemistry icons like stopwatches and thermometers being sorted into them.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person view of a student's digital tablet where they are dragging and dropping chemical factors like 'Heat' and 'Pressure' into different categories, with satisfying glowing effects on correct placement.",
      "metadata": {
        "prompts": [
          "Pick one kinetic challenge and outline your approach.",
          "Test your approach on a reaction rate problem.",
          "Revise your approach based on the results."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Kinetics Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes to build a strong study habit for kinetics.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Kinetics Concept"
              },
              {
                "id": "process",
                "label": "Validation Process"
              },
              {
                "id": "review",
                "label": "Review Loop"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Define 'Activation Energy' in your own words",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Check if your rate calculation matches the experimental data",
                "correctBucketId": "process"
              },
              {
                "id": "i3",
                "label": "Retest the same energy diagram skill tomorrow",
                "correctBucketId": "review"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence showing how to validate a claim about reaction rates using experimental data."
        }
      ]
    },
    {
      "id": "chemistry-401-l06",
      "title": "Checkpoint: Chemical Argument Quality",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D rendering of a glowing magnifying glass examining a chemical equation, symbolizing the validation of chemical arguments and evidence.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation showing a checklist appearing next to a bubbling beaker, with green checkmarks appearing as kinetic and equilibrium conditions are met.",
      "questions": [
        {
          "id": "chemistry-401-l06-q1",
          "text": "How does a catalyst affect a chemical reaction?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It speeds up the reaction by lowering the activation energy."
            },
            {
              "id": "b",
              "text": "It increases the temperature of the system."
            },
            {
              "id": "c",
              "text": "It changes the final equilibrium amounts of the products."
            },
            {
              "id": "d",
              "text": "It is consumed completely during the reaction."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l06-q2",
          "text": "If you want to increase the rate of a reaction between a solid and a liquid, what is the best first step?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Crush the solid to increase its surface area."
            },
            {
              "id": "b",
              "text": "Place the reaction in a dark room."
            },
            {
              "id": "c",
              "text": "Decrease the temperature of the liquid."
            },
            {
              "id": "d",
              "text": "Add more of the product to the mixture."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l06-q3",
          "text": "Which option shows strong reasoning when discussing energetic tradeoffs?",
          "skillId": "chemistry-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Acknowledging that while high heat increases rate, it might lower the yield of an exothermic reaction."
            },
            {
              "id": "b",
              "text": "Assuming that faster reactions always produce more product."
            },
            {
              "id": "c",
              "text": "Ignoring the activation energy because it doesn't affect the final state."
            },
            {
              "id": "d",
              "text": "Stating that catalysts change the thermodynamics of the system."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l06-q4",
          "text": "Why is it important to validate chemical explanations with experimental data?",
          "skillId": "chemistry-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Because theoretical models must be confirmed by real-world observations."
            },
            {
              "id": "b",
              "text": "Because data makes the explanation longer."
            },
            {
              "id": "c",
              "text": "Because experiments always perfectly match the theory without error."
            },
            {
              "id": "d",
              "text": "Because it is the only way to memorize the periodic table."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Kinetics & Energy",
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
                "label": "Confusing kinetics with equilibrium"
              },
              {
                "id": "l2",
                "label": "Forgetting how a catalyst works"
              },
              {
                "id": "l3",
                "label": "Struggling to read an energy diagram"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Remember: Kinetics is 'how fast', Equilibrium is 'how much'"
              },
              {
                "id": "r2",
                "label": "Review the definition: It lowers activation energy without being consumed"
              },
              {
                "id": "r3",
                "label": "Practice labeling the reactants, products, and the peak (activation energy)"
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
          "id": "chemistry-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Catalysts are like a tunnel through a mountain: they give you a faster, lower-energy path!"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l06.png"
    },
    {
      "id": "chemistry-401-l07",
      "title": "Error Analysis in Quantitative Chemistry",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a chemistry lab notebook with a red pen circling a data point on a graph, surrounded by precision instruments like a digital caliper and a volumetric flask.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a student measuring liquid in a graduated cylinder. The camera zooms in on the meniscus to show the difference between accurate and inaccurate readings, highlighting error analysis.",
      "chunks": [
        {
          "id": "chemistry-401-l07-c1",
          "title": "Error Analysis Setup",
          "content": "Before you finalize any chemical calculation, it's essential to perform error analysis. In the real world, no measurement is perfect. Planning your steps to identify potential errors in advance can significantly improve the quality of your lab work. We will look at the difference between random errors (like a slight breeze affecting a scale) and systematic errors (like a scale that is always off by 1 gram)."
        },
        {
          "id": "chemistry-401-l07-c2",
          "title": "Decision Rules for Data",
          "content": "When you have multiple data points, it can be tricky to decide which ones are reliable. A great decision rule is to look for precision and accuracy. If one data point is wildly different from the rest (an outlier), you need to investigate why. Always choose to base your conclusions on the data that has the strongest experimental evidence and the clearest connection to your procedure."
        },
        {
          "id": "chemistry-401-l07-c3",
          "title": "Quality Control: Percent Error",
          "content": "As you review your work, you should calculate your Percent Error. This compares your experimental result to the accepted, true value. Checking for accuracy, completeness, and alignment with the original objective ensures your work meets high scientific standards. A low percent error means your technique was solid!"
        },
        {
          "id": "chemistry-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing an experiment or practice problem, take a moment to write down one technique you did well and one you want to improve. Maybe you need to read the meniscus more carefully next time, or double-check your significant figures. This reflection encourages continuous growth in your chemistry skills."
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-401-l07-f1",
          "front": "Systematic Error",
          "back": "A consistent, repeatable error associated with faulty equipment or a flawed experimental design."
        },
        {
          "id": "chemistry-401-l07-f2",
          "front": "Random Error",
          "back": "Unpredictable variations in measurements, often reduced by taking multiple trials."
        },
        {
          "id": "chemistry-401-l07-f3",
          "front": "Percent Error",
          "back": "A calculation that compares an experimental value to the accepted theoretical value."
        },
        {
          "id": "chemistry-401-l07-f4",
          "front": "Accuracy vs. Precision",
          "back": "Accuracy is how close you are to the true value; precision is how close your measurements are to each other."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l07-a1",
          "type": "practice",
          "title": "Error Planner",
          "content": "Template for planning a mini project focused on identifying and minimizing experimental errors."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l07.png"
    },
    {
      "id": "chemistry-401-l08",
      "title": "Chemistry Capstone Problem Lab",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A highly detailed 3D isometric view of a modern chemistry lab bench with interactive glowing hotspots over different pieces of equipment, inviting the user to solve a problem.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a virtual chemistry lab where a student avatar is troubleshooting a failed experiment, checking the temperature, pressure, and measurements to find the error.",
      "metadata": {
        "prompts": [
          "What error did you identify most clearly?",
          "Where did you struggle in the calculation and why?",
          "What is your next improvement target for lab accuracy?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-401-l08-ia1",
          "type": "matching_pairs",
          "title": "Troubleshooting Match",
          "description": "Match each experimental problem with the best follow-up action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "My percent error is consistently 10% too high"
              },
              {
                "id": "l2",
                "label": "My data points are scattered all over the graph"
              },
              {
                "id": "l3",
                "label": "I understand the formula but get the wrong answer"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Check for a systematic error, like an uncalibrated scale"
              },
              {
                "id": "r2",
                "label": "Perform more trials to reduce random error"
              },
              {
                "id": "r3",
                "label": "Double-check your significant figures and unit conversions"
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
          "id": "chemistry-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember: Observe the data, Adjust the method, Repeat the trial."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l08.png"
    },
    {
      "id": "chemistry-401-l09",
      "title": "Review: Advanced Chemical Systems",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D graphic of a glowing brain made of interconnected chemical structures, symbolizing the review and synthesis of advanced chemical systems.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced 3D montage reviewing equilibrium seesaws, kinetic roller coasters, and error analysis targets, culminating in a glowing 'Review Complete' badge.",
      "questions": [
        {
          "id": "chemistry-401-l09-q1",
          "text": "Which of the following best describes a system at chemical equilibrium?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The rates of the forward and reverse reactions are equal."
            },
            {
              "id": "b",
              "text": "The concentrations of reactants and products are exactly equal."
            },
            {
              "id": "c",
              "text": "The reaction has completely stopped."
            },
            {
              "id": "d",
              "text": "All reactants have been converted into products."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l09-q2",
          "text": "If a student consistently reads the volume of a liquid from the top of the meniscus instead of the bottom, what type of error is this?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Systematic error."
            },
            {
              "id": "b",
              "text": "Random error."
            },
            {
              "id": "c",
              "text": "Calculation error."
            },
            {
              "id": "d",
              "text": "No error, this is the correct method."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l09-q3",
          "text": "How does increasing the temperature generally affect the rate of a chemical reaction?",
          "skillId": "chemistry-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It increases the rate by causing molecules to collide more frequently and with more energy."
            },
            {
              "id": "b",
              "text": "It decreases the rate by destroying the reactant molecules."
            },
            {
              "id": "c",
              "text": "It has no effect on the rate, only on the equilibrium."
            },
            {
              "id": "d",
              "text": "It increases the activation energy required."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l09-q4",
          "text": "Why is it important to calculate percent error in an experiment?",
          "skillId": "chemistry-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To quantify how accurate your experimental results are compared to the accepted value."
            },
            {
              "id": "b",
              "text": "To prove that your hypothesis was 100% correct."
            },
            {
              "id": "c",
              "text": "To determine the speed of the reaction."
            },
            {
              "id": "d",
              "text": "To balance the chemical equation."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review Systems",
          "description": "Match each concept to its best real-world application.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side concept.",
            "Pick the best application on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Le Chatelier's Principle"
              },
              {
                "id": "l2",
                "label": "Activation Energy & Catalysts"
              },
              {
                "id": "l3",
                "label": "Percent Error Analysis"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Adjusting pressure to maximize ammonia production in a factory"
              },
              {
                "id": "r2",
                "label": "Using enzymes in laundry detergent to clean clothes faster at low temps"
              },
              {
                "id": "r3",
                "label": "Evaluating the accuracy of a new digital thermometer"
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
          "id": "chemistry-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Review the big three: Equilibrium (Balance), Kinetics (Speed), Error (Accuracy)."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l09.png"
    },
    {
      "id": "chemistry-401-l10",
      "title": "Mastery: Chemistry IV",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A majestic 3D golden trophy shaped like an Erlenmeyer flask, glowing with a soft blue light, representing mastery in Chemistry IV.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic 3D animation of a complex chemical reaction successfully completing, with a glowing 'Mastery Achieved' text appearing over the perfectly balanced equation.",
      "questions": [
        {
          "id": "chemistry-401-l10-q1",
          "text": "In an exothermic reaction at equilibrium, what happens if you increase the temperature?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The equilibrium shifts to the left, favoring the reactants."
            },
            {
              "id": "b",
              "text": "The equilibrium shifts to the right, favoring the products."
            },
            {
              "id": "c",
              "text": "The equilibrium is unaffected by temperature."
            },
            {
              "id": "d",
              "text": "The reaction stops completely."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l10-q2",
          "text": "Which of the following is the best way to decrease random error in an experiment?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Perform multiple trials and calculate the average."
            },
            {
              "id": "b",
              "text": "Use a different formula to calculate the result."
            },
            {
              "id": "c",
              "text": "Ignore data points that don't fit your hypothesis."
            },
            {
              "id": "d",
              "text": "Only measure the data once to save time."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l10-q3",
          "text": "Why does crushing a solid reactant increase the rate of a reaction?",
          "skillId": "chemistry-401-skill-reasoning",
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
              "text": "It changes the chemical composition of the solid."
            },
            {
              "id": "d",
              "text": "It increases the temperature of the solid."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l10-q4",
          "text": "What is the main advantage of using an ICE table in quantitative chemistry?",
          "skillId": "chemistry-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It provides a structured way to track changes in concentration to find equilibrium values."
            },
            {
              "id": "b",
              "text": "It automatically balances the chemical equation for you."
            },
            {
              "id": "c",
              "text": "It calculates the percent error of the experiment."
            },
            {
              "id": "d",
              "text": "It determines the activation energy of the reaction."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery Check",
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
                "label": "Confusion about temperature shifts in equilibrium"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to kinetic tradeoffs"
              },
              {
                "id": "l3",
                "label": "Weak transfer of error analysis under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Treat heat as a reactant (endothermic) or product (exothermic)"
              },
              {
                "id": "r2",
                "label": "Use a checklist to verify if you need speed (kinetics) or yield (equilibrium)"
              },
              {
                "id": "r3",
                "label": "Retest the percent error formula with a short timed sprint"
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
          "id": "chemistry-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "For exothermic reactions, think of Heat as a Product. For endothermic, Heat is a Reactant!"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l10.png"
    },
    {
      "id": "chemistry-401-l11",
      "title": "Applied Chemistry Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a futuristic chemistry studio with holographic displays showing complex molecular structures and data charts, inviting the user to solve a challenge.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a student interacting with a holographic interface, dragging and dropping chemical formulas to fix a broken reaction pathway, with satisfying visual feedback.",
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using kinetic tradeoffs.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-401-l11-ia1",
          "type": "sorting_buckets",
          "title": "Transfer Ladder: Chemistry Fixes",
          "description": "Sort actions into Diagnose, Fix, and Transfer phases to improve your problem-solving process.",
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
                "label": "Identify that you keep missing questions about exothermic shifts",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed ICE table problem with full reasoning written out",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Take a timed mini-quiz on Le Chatelier's principle to prove mastery",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult chemistry problem you encounter."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l11.png"
    },
    {
      "id": "chemistry-401-l12",
      "title": "Chemistry IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D graphic of a glowing 'Retest' button surrounded by floating chemistry symbols like atoms, beakers, and equilibrium arrows, set against a dark blue background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced 3D motion graphic showing a student's test score increasing as they apply new strategies to solve complex chemistry problems, ending with a perfect score.",
      "questions": [
        {
          "id": "chemistry-401-l12-q1",
          "text": "If a reaction has a very high activation energy, what can you infer about its rate at room temperature?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The reaction will likely be very slow."
            },
            {
              "id": "b",
              "text": "The reaction will likely be very fast."
            },
            {
              "id": "c",
              "text": "The reaction is already at equilibrium."
            },
            {
              "id": "d",
              "text": "The reaction will produce a 100% yield."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l12-q2",
          "text": "When calculating the equilibrium constant (K), which states of matter are excluded from the expression?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Pure solids and pure liquids."
            },
            {
              "id": "b",
              "text": "Gases and aqueous solutions."
            },
            {
              "id": "c",
              "text": "Only pure solids."
            },
            {
              "id": "d",
              "text": "Only gases."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l12-q3",
          "text": "A student measures the boiling point of water as 98°C at sea level. The accepted value is 100°C. What is the percent error?",
          "skillId": "chemistry-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "2%"
            },
            {
              "id": "b",
              "text": "98%"
            },
            {
              "id": "c",
              "text": "-2%"
            },
            {
              "id": "d",
              "text": "0.02%"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l12-q4",
          "text": "Why is spaced review useful for mastering complex chemical systems?",
          "skillId": "chemistry-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and allows you to transfer skills to new problems over time."
            },
            {
              "id": "b",
              "text": "It ensures you forget the older, less important material."
            },
            {
              "id": "c",
              "text": "It is only useful for memorizing vocabulary, not math."
            },
            {
              "id": "d",
              "text": "It has no value in chemistry."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Applied Retest",
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
                "label": "Including solids in the equilibrium expression"
              },
              {
                "id": "l2",
                "label": "Miscalculating percent error"
              },
              {
                "id": "l3",
                "label": "Forgetting the effect of activation energy"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Cross out (s) and (l) before writing the K expression"
              },
              {
                "id": "r2",
                "label": "Review the formula: |Experimental - Accepted| / Accepted * 100"
              },
              {
                "id": "r3",
                "label": "Visualize the 'hill' on the energy diagram"
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
          "id": "chemistry-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Solids and Liquids are Solidly Left out of the equilibrium expression!"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l12.png"
    },
    {
      "id": "chemistry-401-l13",
      "title": "Chemistry Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of an industrial chemical plant with glowing pipes and gauges, representing a real-world chemistry scenario like the Haber process.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing the Haber process for synthesizing ammonia. The animation highlights the tradeoff between using high heat for speed and high pressure for yield, with dynamic gauges adjusting.",
      "chunks": [
        {
          "id": "chemistry-401-l13-c1",
          "title": "Scenario Brief: The Haber Process",
          "content": "In this exciting scenario, we will explore a real-world application: the Haber process for making ammonia. This process is crucial for making fertilizers that feed the world! We will look at the trade-offs involved. The reaction is exothermic, meaning low temperatures give a better yield (equilibrium). But low temperatures make the reaction too slow (kinetics). How do engineers solve this?"
        },
        {
          "id": "chemistry-401-l13-c2",
          "title": "Plan the Approach: Balancing Tradeoffs",
          "content": "To tackle this scenario, we break it down. Decision 1: Temperature. We can't use a super low temperature because it's too slow, so we compromise with a moderate temperature. Decision 2: Pressure. High pressure shifts the equilibrium to the right (more ammonia), so we use very high pressure. Decision 3: Speed. We add an iron catalyst to speed up the reaction without needing extreme heat."
        },
        {
          "id": "chemistry-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put our plan into action! As we execute each step, we explain our choices clearly using Le Chatelier's principle and collision theory. We rely on facts and data rather than just making guesses. This is exactly how chemical engineers design massive factories to be safe and efficient."
        },
        {
          "id": "chemistry-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing our scenario, we evaluate the results. Did we maximize the yield of ammonia while keeping the reaction fast enough to be profitable? We compare our outcomes to the goals we set at the beginning. Reflecting on these real-world tradeoffs is a key part of mastering capstone chemistry!"
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-401-l13-f1",
          "front": "Haber Process",
          "back": "The industrial synthesis of ammonia from nitrogen and hydrogen gas."
        },
        {
          "id": "chemistry-401-l13-f2",
          "front": "Kinetic Tradeoff",
          "back": "Sacrificing some equilibrium yield (by raising temp) to ensure the reaction happens at a useful speed."
        },
        {
          "id": "chemistry-401-l13-f3",
          "front": "Pressure Shift",
          "back": "Increasing pressure shifts equilibrium toward the side with fewer moles of gas."
        },
        {
          "id": "chemistry-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Using concepts like catalysts, pressure, and temperature together to solve a real-world problem."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting quantitative modeling, kinetic tradeoffs, and evidence validation in the Haber process."
        },
        {
          "id": "chemistry-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply the Haber process strategy to a new case (like Contact process for sulfuric acid) and explain your reasoning."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l13.png"
    },
    {
      "id": "chemistry-401-l14",
      "title": "Chemistry Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a digital clipboard with a glowing checklist, sitting next to a microscope and a beaker, representing a coaching clinic for chemistry skills.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a virtual coach pointing to a whiteboard with chemical equations, highlighting common errors in red and correcting them in glowing green.",
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "chemistry-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on ICE table setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed Le Chatelier decisions"
              },
              {
                "id": "l3",
                "label": "Correct in notes but weak transfer in new tasks"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Rebuild setup steps and retest one parallel item"
              },
              {
                "id": "r2",
                "label": "Use checkpoint pacing + verify the shift direction before submit"
              },
              {
                "id": "r3",
                "label": "Pair correction with one timed transfer item"
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
          "id": "chemistry-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the error, Correct the method, Transfer to a new problem."
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l14.png"
    },
    {
      "id": "chemistry-401-l15",
      "title": "Chemistry IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D graphic of a glowing finish line ribbon being broken by a fast-moving molecule, symbolizing the completion of the final mastery sprint.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A high-energy 3D motion graphic showing a rapid-fire sequence of chemistry problems being solved perfectly, ending with a burst of glowing particles and a 'Course Complete' message.",
      "questions": [
        {
          "id": "chemistry-401-l15-q1",
          "text": "In the Haber process, why is a high pressure used?",
          "skillId": "chemistry-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To shift the equilibrium toward the side with fewer moles of gas, increasing ammonia yield."
            },
            {
              "id": "b",
              "text": "To decrease the rate of the reaction."
            },
            {
              "id": "c",
              "text": "To shift the equilibrium toward the side with more moles of gas."
            },
            {
              "id": "d",
              "text": "To act as a catalyst."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l15-q2",
          "text": "What is the best first step when analyzing a kinetic tradeoff scenario?",
          "skillId": "chemistry-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Identify the goal: do you need to maximize speed, yield, or find a compromise?"
            },
            {
              "id": "b",
              "text": "Guess quickly without checking the enthalpy (heat) of the reaction."
            },
            {
              "id": "c",
              "text": "Assume that higher temperature is always the best choice."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l15-q3",
          "text": "Which option shows strong reasoning when evaluating experimental error?",
          "skillId": "chemistry-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Identifying a systematic error in the equipment to explain why all results are consistently high."
            },
            {
              "id": "b",
              "text": "Ignoring outliers without investigating them."
            },
            {
              "id": "c",
              "text": "Assuming random error is the only type of error possible."
            },
            {
              "id": "d",
              "text": "Changing the data to match the expected result."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "chemistry-401-l15-q4",
          "text": "What does a catalyst do to the equilibrium constant (K) of a reaction?",
          "skillId": "chemistry-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It does not change the equilibrium constant; it only helps the system reach equilibrium faster."
            },
            {
              "id": "b",
              "text": "It increases the equilibrium constant."
            },
            {
              "id": "c",
              "text": "It decreases the equilibrium constant."
            },
            {
              "id": "d",
              "text": "It reverses the direction of the equilibrium."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Final Sprint",
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
                "label": "Confusion about pressure shifts"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to catalysts"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone reasoning under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Count the moles of gas on each side of the equation"
              },
              {
                "id": "r2",
                "label": "Remember: Catalysts change speed, not the final yield"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
          "id": "chemistry-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each capstone question you face!"
        }
      ],
      "imageUrl": "/generated-images/refinery/chemistry-401-l15.png"
    }
  ]
};
