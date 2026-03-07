import type { LearningModule } from "@/lib/modules/types";

export const advanced_math_301_Module: LearningModule = {
  "id": "advanced-math-301",
  "title": "Advanced Math Modeling",
  "description": "Apply algebra, functions, and probability to rigorous modeling and decision scenarios.",
  "subject": "Advanced Math",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Advanced Math Modeling",
    "Apply Quantitative Decisions strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "advanced-math-301-l01",
      "title": "Modeling with Functions",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant, 3D animated illustration of a glowing mathematical function graph transforming into a futuristic city skyline, showing the connection between math and the real world, appealing to students.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A high-quality educational video showing a time-lapse of a roller coaster being built, overlaid with glowing math equations and graphs that optimize its loops and drops, cinematic lighting, engaging for young learners.",
      "chunks": [
        {
          "id": "advanced-math-301-l01-c1",
          "title": "Modeling with Functions Overview",
          "content": "Welcome to the fascinating world of function modeling! A mathematical model is like a translation of a real-world problem into the language of math. Whether you are predicting how fast a spaceship will travel, how a population of animals will grow, or how much a lemonade stand will earn, functions help us understand how different quantities relate to each other. By the end of this lesson, you will be equipped to recognize what effective reasoning looks like and how it can assist you in finding solutions to various mathematical puzzles."
        },
        {
          "id": "advanced-math-301-l01-c2",
          "title": "Core Concept: Inputs and Outputs",
          "content": "Think of a function as a rule-following machine. You put something in (the input, often called 'x'), the machine applies a mathematical rule, and it gives you something out (the output, often called 'y'). In function modeling, we use these machines to optimize our results. For example, if we want to maximize our score in a video game, we identify our target (the highest score), and then we look at the inputs (time played, items collected) to see how they affect the output. This process helps us make informed, data-driven decisions."
        },
        {
          "id": "advanced-math-301-l01-c3",
          "title": "Worked Example: The Lemonade Stand",
          "content": "Let's walk through a guided example! Imagine you are selling lemonade. Your goal is to make the most profit (optimization). Your function model might look like this: Profit = (Price per cup * Cups sold) - Cost of supplies. If you raise the price too high, fewer people will buy. If you lower it too much, you won't cover your costs. By graphing this function, we can find the exact 'peak' of the curve—the perfect price that gives you the maximum profit! Finally, we verify our result by testing it with real numbers."
        },
        {
          "id": "advanced-math-301-l01-c4",
          "title": "Transfer Prompt: Your Turn!",
          "content": "Now it's your turn to shine! Imagine you are designing a battery for a new smartphone. You need it to last as long as possible (output) while keeping the weight of the phone low (input). How would you set up a function model for this? Take a moment to write down your goal, your inputs, and your outputs. Explain in one clear sentence why your approach makes sense. Remember, the clearer your explanation, the better you'll grasp these important concepts!"
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-301-l01-f1",
          "front": "Function Modeling",
          "back": "Translating a real-world situation into a mathematical equation to make predictions."
        },
        {
          "id": "advanced-math-301-l01-f2",
          "front": "Optimization",
          "back": "Finding the best possible outcome, such as the maximum profit or minimum cost."
        },
        {
          "id": "advanced-math-301-l01-f3",
          "front": "Verification",
          "back": "Checking that your mathematical result makes sense in the real world."
        },
        {
          "id": "advanced-math-301-l01-f4",
          "front": "Input / Output",
          "back": "The variables in a function; what you put in (x) and what you get out (y)."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic showing a 'function machine' turning raw materials into optimized products."
        },
        {
          "id": "advanced-math-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation showing a graph curving upwards to hit a 'maximum profit' star."
        }
      ]
    },
    {
      "id": "advanced-math-301-l02",
      "title": "Parameter Changes and Sensitivity",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A digital dashboard with glowing sliders and dials, showing a mathematical graph changing shape as the sliders are moved, colorful and engaging.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An interactive 3D animation of a suspension bridge. As a digital slider labeled 'wind speed' increases, the bridge sways more, demonstrating parameter sensitivity in a highly visual way.",
      "chunks": [
        {
          "id": "advanced-math-301-l02-c1",
          "title": "What is a Parameter?",
          "content": "While variables like 'x' and 'y' change constantly, a parameter is a value that stays the same for a specific situation but can be adjusted to see different scenarios. Think of it like the difficulty setting in a video game. The game plays the same way, but changing the parameter (Easy, Medium, Hard) shifts the entire experience. In math, changing a parameter shifts or stretches our function graph!"
        },
        {
          "id": "advanced-math-301-l02-c2",
          "title": "Sensitivity Analysis",
          "content": "Sensitivity analysis is a fancy term for asking, 'What happens if I tweak this one thing?' If a tiny change in a parameter causes a massive change in the output, the model is 'highly sensitive.' For example, if changing the angle of a rocket launch by just 1 degree causes it to miss its target by 100 miles, that's high sensitivity! Let's practice testing these changes."
        },
        {
          "id": "advanced-math-301-l02-c3",
          "title": "Visualizing the Shift",
          "content": "Imagine a graph showing how much money you save over time. If you change the parameter for 'weekly allowance', the line on your graph gets steeper! Visualizing these shifts helps us see the future and understand exactly how one small adjustment can lead to a completely different outcome over time."
        },
        {
          "id": "advanced-math-301-l02-c4",
          "title": "Real-World Sensitivity",
          "content": "In nature, a tiny change in temperature (a parameter) can completely change an ecosystem. Testing how sensitive our math models are helps scientists protect the environment! By understanding sensitivity, we can prepare for the unexpected and build models that are robust and reliable."
        }
      ],
      "metadata": {
        "prompts": [
          "Identify one core idea about function modeling from this lesson.",
          "Explain where optimization appears in real life.",
          "Describe one question you still have about advanced mathematical modeling."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l02-ia1",
          "type": "drag_and_drop",
          "title": "Practice Flow Builder",
          "description": "Sort each action into Plan, Execute, or Reflect when testing a math model.",
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
                "label": "Identify the variables and set a goal",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Change a parameter and calculate the new output",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Analyze why the graph shifted and what it means",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on changing the slope of a line and write one reflection on how it affects the model."
        }
      ]
    },
    {
      "id": "advanced-math-301-l03",
      "title": "Checkpoint: Function Modeling",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, futuristic checkpoint gate with mathematical symbols floating around it, symbolizing a test of knowledge.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, energetic recap video showing quick flashes of graphs, equations, and real-world applications like rockets and finance, ending with a 'Ready for the Quiz?' title.",
      "questions": [
        {
          "id": "advanced-math-301-l03-q1",
          "text": "What is the primary purpose of a mathematical model?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To represent a real-world system using math to make predictions."
            },
            {
              "id": "b",
              "text": "To make simple arithmetic problems more complicated."
            },
            {
              "id": "c",
              "text": "To memorize historical dates and facts."
            },
            {
              "id": "d",
              "text": "To draw shapes without using any numbers."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l03-q2",
          "text": "In a function model representing a car's speed over time, what is the best first step to optimize fuel efficiency?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal (max efficiency) and identify the variables (speed, fuel)."
            },
            {
              "id": "b",
              "text": "Guess a random speed and hope it works."
            },
            {
              "id": "c",
              "text": "Ignore the fuel variable and only look at the time."
            },
            {
              "id": "d",
              "text": "Skip the math and just drive faster."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l03-q3",
          "text": "If a model predicts a negative number of customers for a store, what does this indicate?",
          "skillId": "advanced-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "The model has a flaw or is being used outside its valid domain."
            },
            {
              "id": "b",
              "text": "The store owes people customers."
            },
            {
              "id": "c",
              "text": "The math is perfectly fine, just ignore the negative sign."
            },
            {
              "id": "d",
              "text": "Customers are walking backwards into the store."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l03-q4",
          "text": "Why is it important to verify a mathematical model?",
          "skillId": "advanced-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To ensure the mathematical results actually make sense in the real world."
            },
            {
              "id": "b",
              "text": "To make the equation longer."
            },
            {
              "id": "c",
              "text": "To remove all the variables."
            },
            {
              "id": "d",
              "text": "Verification is not important in advanced math."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Troubleshooting Models",
          "description": "Match each modeling error to the best correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side error signal.",
            "Pick the best response on the right.",
            "Use your matches to plan your next steps."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Model predicts impossible values (e.g., negative time)"
              },
              {
                "id": "l2",
                "label": "Output changes too wildly when inputs change slightly"
              },
              {
                "id": "l3",
                "label": "The model works in theory but fails in real life"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Check and restrict the domain constraints"
              },
              {
                "id": "r2",
                "label": "Perform a parameter sensitivity analysis"
              },
              {
                "id": "r3",
                "label": "Re-evaluate your real-world assumptions"
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
          "id": "advanced-math-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase 'Plan, Check, Explain' for each modeling question."
        }
      ]
    },
    {
      "id": "advanced-math-301-l04",
      "title": "Optimization Strategy",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a mountain peak with a glowing path leading to the top, representing the concept of finding the maximum value in optimization.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation showing a factory assembly line. As different variables are tweaked (speed, materials), a graph in the corner shows the 'efficiency score' rising to its peak.",
      "chunks": [
        {
          "id": "advanced-math-301-l04-c1",
          "title": "Optimization Strategy Focus",
          "content": "In this lesson, we will dive deeper into optimization and introduce probabilistic reasoning. Often, when we try to find the 'best' solution, the real world throws uncertainty at us. For example, a store wants to optimize its inventory, but they don't know exactly how many people will walk in tomorrow! Probabilistic reasoning is a way of making decisions based on the likelihood of different outcomes. By the end of this lesson, you will be able to use structured reasoning to make informed decisions even when you aren't 100% sure what will happen."
        },
        {
          "id": "advanced-math-301-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps for using an optimization strategy with probability! Step 1: Identify what is being asked (e.g., 'How many umbrellas should we stock?'). Step 2: Choose a strategy that aligns with probabilistic reasoning, like calculating the 'Expected Value' based on weather forecasts. Step 3: Justify your choice with evidence. If there is an 80% chance of rain, stocking more umbrellas is mathematically sound. Following these steps will guide you in making effective, data-backed decisions."
        },
        {
          "id": "advanced-math-301-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes. Some common errors include skipping the setup of the problem, assuming that a 50% chance means something will definitely happen half the time in a small sample, or failing to verify the final result against common sense. By recognizing these pitfalls, you can improve your problem-solving skills and avoid making the same mistakes."
        },
        {
          "id": "advanced-math-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! Imagine you are organizing an outdoor concert. You can buy rain insurance for $500. If it rains, the insurance pays you $2000. The weatherman says there is a 30% chance of rain. Should you buy the insurance? Compare your process to the lesson sequence we discussed. This will help you reflect on your approach and see how well you understood the concepts!"
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-301-l04-f1",
          "front": "Probabilistic Reasoning",
          "back": "Making decisions based on the mathematical likelihood (probability) of different outcomes."
        },
        {
          "id": "advanced-math-301-l04-f2",
          "front": "Expected Value",
          "back": "The average outcome if you repeated an event many times; calculated by multiplying outcomes by their probabilities."
        },
        {
          "id": "advanced-math-301-l04-f3",
          "front": "Assumption Check",
          "back": "Reviewing the beliefs your model is built on to ensure they are realistic."
        },
        {
          "id": "advanced-math-301-l04-f4",
          "front": "Optimization under Uncertainty",
          "back": "Finding the best possible choice when you don't have perfect information about the future."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for calculating Expected Value in a real-world scenario."
        }
      ]
    },
    {
      "id": "advanced-math-301-l05",
      "title": "Uncertainty and Probability Models",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A pair of glowing, translucent dice rolling on a digital grid, with probability percentages floating above them in bright neon colors.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An engaging animation showing a Plinko board. As balls drop, a bar chart dynamically builds at the bottom, visually demonstrating normal distribution and probability.",
      "chunks": [
        {
          "id": "advanced-math-301-l05-c1",
          "title": "Embracing Uncertainty",
          "content": "In math, we love exact answers. But the real world is messy! Probability models allow us to map out uncertainty. Instead of saying 'It will definitely rain,' we say 'There is a 70% chance of rain.' This allows us to build models that prepare for multiple futures, rather than just guessing one."
        },
        {
          "id": "advanced-math-301-l05-c2",
          "title": "The Power of Expected Value",
          "content": "Expected Value is your best friend in probability. It tells you what will happen on average if you repeat a scenario hundreds of times. By multiplying each possible outcome by its probability and adding them up, you get a mathematical compass pointing you toward the smartest decision."
        },
        {
          "id": "advanced-math-301-l05-c3",
          "title": "Visualizing Probability",
          "content": "Sometimes, numbers aren't enough. Drawing a 'Probability Tree' helps us branch out and see every possible future, like mapping out a 'Choose Your Own Adventure' story! This visual tool makes complex probability problems much easier to digest."
        },
        {
          "id": "advanced-math-301-l05-c4",
          "title": "Making the Call",
          "content": "Once you have your Expected Value, it's decision time. If the math shows a positive outcome on average, it might be worth the risk. Math gives you the superpower of informed choices, turning guesses into calculated strategies!"
        }
      ],
      "metadata": {
        "prompts": [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Probability Concept"
              },
              {
                "id": "process",
                "label": "Modeling Process"
              },
              {
                "id": "review",
                "label": "Review Loop"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Define 'Expected Value' in your own words",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Calculate the probability of rain for a new city",
                "correctBucketId": "process"
              },
              {
                "id": "i3",
                "label": "Check if your prediction matched the actual weather",
                "correctBucketId": "review"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a probabilistic reasoning challenge involving a carnival game."
        }
      ]
    },
    {
      "id": "advanced-math-301-l06",
      "title": "Checkpoint: Quantitative Decisions",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic crossroads signpost with different mathematical formulas pointing in different directions, symbolizing decision making.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced quiz intro showing a split screen of different choices (e.g., taking an umbrella vs. sunglasses) with probability percentages hovering over them.",
      "questions": [
        {
          "id": "advanced-math-301-l06-q1",
          "text": "What does 'Expected Value' tell us in a probability model?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The long-term average outcome of a random event if repeated many times."
            },
            {
              "id": "b",
              "text": "The exact result that will happen the very next time."
            },
            {
              "id": "c",
              "text": "The highest possible number in a dataset."
            },
            {
              "id": "d",
              "text": "A random guess with no mathematical backing."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l06-q2",
          "text": "If a weather model predicts a 70% chance of rain, what is the probability it does NOT rain?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "30%"
            },
            {
              "id": "b",
              "text": "70%"
            },
            {
              "id": "c",
              "text": "0%"
            },
            {
              "id": "d",
              "text": "100%"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l06-q3",
          "text": "How does uncertainty affect mathematical models?",
          "skillId": "advanced-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It requires us to use probabilities and ranges instead of exact guarantees."
            },
            {
              "id": "b",
              "text": "It makes mathematical models completely useless."
            },
            {
              "id": "c",
              "text": "It means we should always guess the lowest possible number."
            },
            {
              "id": "d",
              "text": "It allows us to ignore all the data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l06-q4",
          "text": "Which of the following is an example of probabilistic reasoning?",
          "skillId": "advanced-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Estimating the likelihood of a product succeeding based on market data."
            },
            {
              "id": "b",
              "text": "Measuring the exact length of a table with a ruler."
            },
            {
              "id": "c",
              "text": "Solving for x in the equation 2x = 4."
            },
            {
              "id": "d",
              "text": "Drawing a perfect circle."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Quantitative Decisions",
          "description": "Match each scenario to the best probabilistic strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side scenario.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Deciding how much inventory to buy for a store"
              },
              {
                "id": "l2",
                "label": "Predicting the outcome of a coin flip game"
              },
              {
                "id": "l3",
                "label": "Evaluating if a new medicine is effective"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Use historical sales data to find Expected Value"
              },
              {
                "id": "r2",
                "label": "Calculate theoretical probability (50/50)"
              },
              {
                "id": "r3",
                "label": "Analyze clinical trial data for statistical significance"
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
          "id": "advanced-math-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Remember: Probability is about the long game, not the next turn!"
        }
      ]
    },
    {
      "id": "advanced-math-301-l07",
      "title": "Argument and Proof Moves",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing, holographic blueprint of a geometric shape being built step-by-step, representing the structure of a mathematical proof.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic video showing a detective connecting clues on a corkboard with red string, transitioning into a student connecting logical steps in a math proof.",
      "chunks": [
        {
          "id": "advanced-math-301-l07-c1",
          "title": "Argument and Proof Moves Setup",
          "content": "Before you start working on a mathematical proof, it's essential to use a structured approach. A proof is simply a logical argument that shows why a mathematical statement is always true. Planning your proof first—by writing down what you know (the 'given') and what you want to show (the 'goal')—can significantly improve the quality of your work. This preparation will help you present your arguments clearly and effectively, just like a lawyer building a case!"
        },
        {
          "id": "advanced-math-301-l07-c2",
          "title": "Decision Rules",
          "content": "When building a proof, you have to choose which mathematical rules or theorems to use. A great way to make this decision easier is to follow a simple rule: Always choose the theorem that connects your current step directly to your goal. By using this strategy, you will build stronger arguments that leave no room for doubt. This approach encourages careful consideration and helps you understand the importance of backing up every single step with solid mathematical reasons."
        },
        {
          "id": "advanced-math-301-l07-c3",
          "title": "Quality Control",
          "content": "As you review your proof, check for three important things: accuracy (are the math rules applied correctly?), completeness (did you skip any steps?), and alignment (did you actually prove what you set out to prove?). Ensuring that your proof meets these criteria will help you maintain high standards in your mathematical reasoning. A single missing step can make a whole proof fall apart, like a bridge missing a support beam!"
        },
        {
          "id": "advanced-math-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice proofs, take a moment to write down one action you would like to repeat in your next round and one action you want to improve. Maybe you are great at setting up the 'given' information, but you struggle with finding the final connecting theorem. This reflection will help you set goals for your future practice and turn you into a master of mathematical logic!"
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-301-l07-f1",
          "front": "Mathematical Proof",
          "back": "A logical argument demonstrating that a specific statement is always true."
        },
        {
          "id": "advanced-math-301-l07-f2",
          "front": "The 'Given'",
          "back": "The starting information or assumptions you are provided at the beginning of a proof."
        },
        {
          "id": "advanced-math-301-l07-f3",
          "front": "Counterexample",
          "back": "A specific case that shows a mathematical statement is false."
        },
        {
          "id": "advanced-math-301-l07-f4",
          "front": "Logical Step",
          "back": "A single move in a proof that must be justified by a known rule, definition, or theorem."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on proof structure, starting with Given and ending with Prove."
        }
      ]
    },
    {
      "id": "advanced-math-301-l08",
      "title": "Model Critique Workshop",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A group of diverse, animated students looking at a glowing 3D graph on a table, pointing at it and discussing, representing a critique workshop.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse of a student drawing a math model on a whiteboard, stepping back, erasing a part, and improving it, showing the iterative process of critique.",
      "chunks": [
        {
          "id": "advanced-math-301-l08-c1",
          "title": "Why Critique?",
          "content": "No mathematical model is perfect on the first try. Critiquing a model means looking for its weak spots. Does it assume resources are infinite? Does it ignore friction or wind resistance? By finding these flaws, we can build stronger, more accurate models."
        },
        {
          "id": "advanced-math-301-l08-c2",
          "title": "The Critique Process",
          "content": "When critiquing, follow three steps: 1. Check the assumptions (Are they realistic?). 2. Test the extremes (What happens if x is zero, or a million?). 3. Compare to reality (Does the model's prediction match real-world data?). Let's practice this in our workshop!"
        },
        {
          "id": "advanced-math-301-l08-c3",
          "title": "Peer Review in Math",
          "content": "Did you know professional mathematicians rarely work alone? They share their models with peers to find hidden mistakes. Two brains are better than one when hunting for errors! Sharing your work helps you see blind spots you might have missed."
        },
        {
          "id": "advanced-math-301-l08-c4",
          "title": "Iterative Improvement",
          "content": "Critique isn't about being wrong; it's about getting better. Once you find a flaw, you tweak the model and test it again. This cycle of testing and fixing is called iteration, and it is the secret to building world-class mathematical models."
        }
      ],
      "metadata": {
        "prompts": [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match",
          "description": "Match each reflection prompt with the best follow-up action for improving a math model.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "My model's predictions are way off from real data"
              },
              {
                "id": "l2",
                "label": "I rush and make avoidable arithmetic mistakes"
              },
              {
                "id": "l3",
                "label": "I understand the theory but get stuck on proofs"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Re-evaluate the assumptions and parameters"
              },
              {
                "id": "r2",
                "label": "Use a step-by-step checklist before submitting"
              },
              {
                "id": "r3",
                "label": "Practice writing out the 'Given' and 'Goal' first"
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
          "id": "advanced-math-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember: Observe the error, Adjust the model, Repeat the test."
        }
      ]
    },
    {
      "id": "advanced-math-301-l09",
      "title": "Review: Advanced Math Models",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing golden trophy surrounded by floating math symbols like integral signs, pi, and graphs, symbolizing review and achievement.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic montage of previous lessons: a roller coaster graph, a Plinko probability board, and a glowing geometric proof, summarizing the module so far.",
      "questions": [
        {
          "id": "advanced-math-301-l09-q1",
          "text": "What is the purpose of a mathematical proof?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To logically demonstrate that a statement is always true without exception."
            },
            {
              "id": "b",
              "text": "To guess the most likely answer based on a few examples."
            },
            {
              "id": "c",
              "text": "To make a math problem longer."
            },
            {
              "id": "d",
              "text": "To show that math is confusing."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l09-q2",
          "text": "When critiquing a mathematical model, what should you check first?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The assumptions and constraints the model is based on."
            },
            {
              "id": "b",
              "text": "The color of the graph."
            },
            {
              "id": "c",
              "text": "How fast the computer calculated the answer."
            },
            {
              "id": "d",
              "text": "If the numbers are all even."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l09-q3",
          "text": "If a model's predictions consistently do not match real-world data, what is the best next step?",
          "skillId": "advanced-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Revise the model's parameters or underlying assumptions."
            },
            {
              "id": "b",
              "text": "Ignore the real-world data."
            },
            {
              "id": "c",
              "text": "Assume the real world is wrong."
            },
            {
              "id": "d",
              "text": "Stop using math entirely."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l09-q4",
          "text": "What does 'sensitivity analysis' do in a mathematical model?",
          "skillId": "advanced-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Tests how changes in input variables affect the final output."
            },
            {
              "id": "b",
              "text": "Checks if the model hurts people's feelings."
            },
            {
              "id": "c",
              "text": "Makes the model run faster on a computer."
            },
            {
              "id": "d",
              "text": "Erases all the negative numbers."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review Concepts",
          "description": "Match the advanced math term to its best definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each term on the left.",
            "Pick the best definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Optimization"
              },
              {
                "id": "l2",
                "label": "Proof Structure"
              },
              {
                "id": "l3",
                "label": "Probabilistic Reasoning"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Finding the maximum or minimum value"
              },
              {
                "id": "r2",
                "label": "Logical steps from 'Given' to 'Goal'"
              },
              {
                "id": "r3",
                "label": "Making decisions based on likelihoods"
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
          "id": "advanced-math-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Models Predict, Probabilities Guide, Proofs Guarantee."
        }
      ]
    },
    {
      "id": "advanced-math-301-l10",
      "title": "Mastery: Advanced Math III",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing badge with a star in the center, surrounded by a laurel wreath made of mathematical symbols, representing mastery.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A high-energy countdown timer ticking down, interspersed with quick flashes of students successfully solving complex math problems on a transparent board.",
      "questions": [
        {
          "id": "advanced-math-301-l10-q1",
          "text": "Which of these is an example of a continuous function model?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A graph showing the temperature of a room over 24 hours."
            },
            {
              "id": "b",
              "text": "A list of the number of students in each classroom."
            },
            {
              "id": "c",
              "text": "The number of cars sold each month."
            },
            {
              "id": "d",
              "text": "Counting the number of coins in a jar."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l10-q2",
          "text": "What is the expected value of a fair coin toss where Heads wins you 2 points and Tails wins you 0 points?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "1 point"
            },
            {
              "id": "b",
              "text": "2 points"
            },
            {
              "id": "c",
              "text": "0 points"
            },
            {
              "id": "d",
              "text": "0.5 points"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l10-q3",
          "text": "Why do we critique mathematical models?",
          "skillId": "advanced-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "To find flaws, improve accuracy, and ensure they apply to the real world."
            },
            {
              "id": "b",
              "text": "Because no mathematical model is ever useful."
            },
            {
              "id": "c",
              "text": "To make the math look more complicated."
            },
            {
              "id": "d",
              "text": "To prove that the original creator was bad at math."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l10-q4",
          "text": "What is the first step in the mathematical modeling cycle?",
          "skillId": "advanced-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Identifying the real-world problem and defining variables."
            },
            {
              "id": "b",
              "text": "Solving the equation."
            },
            {
              "id": "c",
              "text": "Graphing the final result."
            },
            {
              "id": "d",
              "text": "Writing a formal proof."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery Check",
          "description": "Match the modeling step to its correct action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each step on the left.",
            "Pick the best action on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Formulate"
              },
              {
                "id": "l2",
                "label": "Compute"
              },
              {
                "id": "l3",
                "label": "Interpret"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create the equation from the real-world problem"
              },
              {
                "id": "r2",
                "label": "Do the math to find the numerical answer"
              },
              {
                "id": "r3",
                "label": "Explain what the answer means in real life"
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
          "id": "advanced-math-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Formulate, Compute, Interpret, Validate!"
        }
      ]
    },
    {
      "id": "advanced-math-301-l11",
      "title": "Applied Advanced Math Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech laboratory setting with floating holographic screens displaying complex math problems, gears, and graphs, inviting the user to solve them.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person view of walking into a futuristic 'Challenge Studio' where math puzzles float in mid-air, waiting to be solved by connecting nodes.",
      "chunks": [
        {
          "id": "advanced-math-301-l11-c1",
          "title": "Welcome to the Studio",
          "content": "You've learned the core concepts, and now it's time to apply them! The Challenge Studio is where we take abstract math and use it to solve complex, multi-step problems. Here, you won't just find the value of 'x'; you will design solutions for real-world scenarios using everything you've learned about functions, probability, and proofs."
        },
        {
          "id": "advanced-math-301-l11-c2",
          "title": "The Transfer Ladder",
          "content": "To succeed in the studio, use the Transfer Ladder: Diagnose, Fix, and Transfer. First, diagnose what the problem is asking. Next, fix any errors in your initial setup. Finally, transfer your mathematical solution back to the real world to see if it makes sense. Let's jump into the activities!"
        },
        {
          "id": "advanced-math-301-l11-c3",
          "title": "Combining Skills",
          "content": "In the real world, problems don't come with labels like 'Use Probability Here'. You might need to use a function to find a cost, and probability to see if it will rain. Combining skills is the ultimate challenge, and it's what makes math so powerful!"
        },
        {
          "id": "advanced-math-301-l11-c4",
          "title": "Presenting Your Solution",
          "content": "Solving the math is only half the battle. You also need to explain it to others! Using clear graphs and simple language helps everyone understand your brilliant ideas. A great mathematician is also a great communicator."
        }
      ],
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using probabilistic reasoning.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l11-ia1",
          "type": "sorting_buckets",
          "title": "Transfer Ladder",
          "description": "Sort actions into Diagnose, Fix, and Transfer phases.",
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
                "label": "Identify that you keep forgetting to check domain constraints",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework a missed optimization problem step-by-step",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Apply the domain check rule to a brand new scenario",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem you encounter."
        }
      ]
    },
    {
      "id": "advanced-math-301-l12",
      "title": "Advanced Math III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, modern digital tablet displaying a math test with a glowing green checkmark, symbolizing a successful retest.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A short, encouraging animation of a runner jumping over hurdles shaped like math symbols, crossing a finish line.",
      "questions": [
        {
          "id": "advanced-math-301-l12-q1",
          "text": "If a model assumes infinite resources, what is its main flaw?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It ignores real-world constraints, making predictions unrealistic."
            },
            {
              "id": "b",
              "text": "It uses too many variables."
            },
            {
              "id": "c",
              "text": "It makes the math too easy to solve."
            },
            {
              "id": "d",
              "text": "Infinite resources are a standard assumption in all models."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l12-q2",
          "text": "How does a parameter differ from a variable in a function model?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "A parameter is a constant value that shapes the model, while a variable changes."
            },
            {
              "id": "b",
              "text": "They are exactly the same thing."
            },
            {
              "id": "c",
              "text": "A parameter is always a letter, and a variable is always a number."
            },
            {
              "id": "d",
              "text": "Variables are only used in geometry."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l12-q3",
          "text": "What is the purpose of a decision rule in probability?",
          "skillId": "advanced-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "To provide a logical, consistent way to choose between options under uncertainty."
            },
            {
              "id": "b",
              "text": "To guarantee you win every time."
            },
            {
              "id": "c",
              "text": "To eliminate all risk from a situation."
            },
            {
              "id": "d",
              "text": "To make the problem impossible to solve."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l12-q4",
          "text": "When should you revise a mathematical model?",
          "skillId": "advanced-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "When new data shows the model's predictions are consistently inaccurate."
            },
            {
              "id": "b",
              "text": "Only when the teacher tells you to."
            },
            {
              "id": "c",
              "text": "Never, a model is permanent once created."
            },
            {
              "id": "d",
              "text": "When the math gets too hard."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Applied Retest",
          "description": "Match the modeling concept to its real-world example.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each concept on the left.",
            "Pick the best example on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Constraint"
              },
              {
                "id": "l2",
                "label": "Optimization"
              },
              {
                "id": "l3",
                "label": "Probability"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "A factory can only run for 12 hours a day"
              },
              {
                "id": "r2",
                "label": "Finding the cheapest way to ship packages"
              },
              {
                "id": "r3",
                "label": "Estimating a 15% chance of a snow day"
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
          "id": "advanced-math-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Constraints limit us, Optimization guides us, Probability prepares us."
        }
      ]
    },
    {
      "id": "advanced-math-301-l13",
      "title": "Advanced Math Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A top-down view of a theme park map with glowing mathematical nodes connecting different rides, representing a complex scenario lab.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic video showing a team of young engineers looking at a blueprint of a city, using glowing math models to solve traffic jams.",
      "chunks": [
        {
          "id": "advanced-math-301-l13-c1",
          "title": "Scenario Brief: The Theme Park",
          "content": "In this exciting scenario, we will combine function modeling, probabilistic reasoning, and proof structure! Imagine you are the manager of a new theme park. You need to figure out how many food stands to open, how to manage the lines for the roller coasters, and what to do if it rains. This challenge will help you understand how these math ideas work together in real-life situations, making math a powerful tool for solving massive problems."
        },
        {
          "id": "advanced-math-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this massive scenario effectively, break it down into smaller decisions. Think of each decision point as a step in a journey. First, use a function model to predict how many people will ride the coaster based on the time of day. Next, use probability to decide if you need to close outdoor rides due to weather. By splitting a complex task into clear decision points, you can focus on one part at a time and build a strong, logical plan."
        },
        {
          "id": "advanced-math-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it’s time to put your plan into action! As you execute each step, make sure to explain your reasoning clearly. If you decide to open 5 food stands instead of 10, use evidence: 'The probability of rain is 80%, so park attendance will be lower, meaning we need fewer stands to optimize profit.' Use evidence and logical reasoning to support your choices, rather than relying on guesses. This is where your proof skills shine!"
        },
        {
          "id": "advanced-math-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your scenario, it’s essential to evaluate the outcome. Take a moment to compare your mathematical predictions with the target you aimed for. Did the lines get too long? Did you lose money on the food stands? Identify what worked well and what might need adjustments. This reflection loop is what real mathematicians and engineers do every single day to improve their models!"
        }
      ],
      "flashcards": [
        {
          "id": "advanced-math-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Splitting a complex, real-world task into clear, manageable mathematical decision points."
        },
        {
          "id": "advanced-math-301-l13-f2",
          "front": "Evidence Link",
          "back": "Ensuring every mathematical step connects directly to evidence in the real-world scenario."
        },
        {
          "id": "advanced-math-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Using the outcome of a model to refine and improve your next attempt."
        },
        {
          "id": "advanced-math-301-l13-f4",
          "front": "Applied Mastery",
          "back": "The ability to transfer mathematical processes to a brand new, unpredictable context."
        }
      ],
      "learningAids": [
        {
          "id": "advanced-math-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting function modeling, probabilistic reasoning, and proof structure in a theme park setting."
        },
        {
          "id": "advanced-math-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case (e.g., a traffic jam) and explain your reasoning."
        }
      ]
    },
    {
      "id": "advanced-math-301-l14",
      "title": "Advanced Math Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A cozy, futuristic classroom with a digital whiteboard showing a math problem being corrected step-by-step with green glowing ink.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A split-screen video showing a student making a math mistake on the left, and a coach guiding them to the correct method on the right, ending with a high-five.",
      "chunks": [
        {
          "id": "advanced-math-301-l14-c1",
          "title": "Identifying Error Patterns",
          "content": "Welcome to the Coaching Clinic! Even the best mathematicians make mistakes. The key to mastery is identifying your error patterns. Do you often rush the setup? Do you forget to check your final answer against the real-world constraints? Recognizing these habits is the first step to fixing them."
        },
        {
          "id": "advanced-math-301-l14-c2",
          "title": "The Correction Loop",
          "content": "Once you spot an error pattern, use the Correction Loop: Pause, Rewind, and Rebuild. Pause to understand why the mistake happened. Rewind to the exact step where things went wrong. Rebuild the solution using the correct mathematical rule. Let's practice this loop together!"
        },
        {
          "id": "advanced-math-301-l14-c3",
          "title": "Targeted Practice",
          "content": "If a basketball player misses free throws, they don't practice passing; they practice free throws! In math, focus your energy on the specific steps that trip you up. Targeted practice is the fastest way to turn a weakness into a strength."
        },
        {
          "id": "advanced-math-301-l14-c4",
          "title": "Building Confidence",
          "content": "Every mistake you fix is a step toward mastery. By tracking your progress and seeing your error rate drop, you'll build the confidence to tackle any math problem! Remember, math is a journey, and every correction makes you a better traveler."
        }
      ],
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on setting up the initial function"
              },
              {
                "id": "l2",
                "label": "Losing points due to rushed proof steps"
              },
              {
                "id": "l3",
                "label": "Correct in notes but blanking on the quiz"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Practice translating word problems into equations"
              },
              {
                "id": "r2",
                "label": "Write out the 'Given' and 'Goal' before starting"
              },
              {
                "id": "r3",
                "label": "Do timed practice drills to simulate test pressure"
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
          "id": "advanced-math-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the error, Correct the method, Transfer to a new problem."
        }
      ]
    },
    {
      "id": "advanced-math-301-l15",
      "title": "Advanced Math III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A dynamic, glowing finish line ribbon being broken by a fast-moving geometric shape, symbolizing the completion of the mastery sprint.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, exciting montage of all the math concepts learned, zooming through graphs, dice, and blueprints, ending with a 'Module Complete!' fireworks display.",
      "questions": [
        {
          "id": "advanced-math-301-l15-q1",
          "text": "What is the ultimate goal of advanced math modeling?",
          "skillId": "advanced-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To use mathematical structures to understand, predict, and optimize real-world scenarios."
            },
            {
              "id": "b",
              "text": "To memorize as many formulas as possible."
            },
            {
              "id": "c",
              "text": "To avoid using probability."
            },
            {
              "id": "d",
              "text": "To prove that the real world cannot be understood."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l15-q2",
          "text": "Which scenario best uses an optimization model?",
          "skillId": "advanced-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "A delivery company trying to find the shortest route to save gas."
            },
            {
              "id": "b",
              "text": "Flipping a coin to see who goes first in a game."
            },
            {
              "id": "c",
              "text": "Writing down the history of mathematics."
            },
            {
              "id": "d",
              "text": "Guessing how many jellybeans are in a jar."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l15-q3",
          "text": "How does evidence support a mathematical argument or proof?",
          "skillId": "advanced-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It provides logical justification for every step taken from the 'Given' to the 'Goal'."
            },
            {
              "id": "b",
              "text": "It makes the argument look longer and more impressive."
            },
            {
              "id": "c",
              "text": "Evidence is only used in science, not math."
            },
            {
              "id": "d",
              "text": "It allows you to skip steps."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "advanced-math-301-l15-q4",
          "text": "What does it mean to 'transfer' a math skill?",
          "skillId": "advanced-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Applying a concept learned in one context to a completely new and different problem."
            },
            {
              "id": "b",
              "text": "Moving your math homework from your desk to your backpack."
            },
            {
              "id": "c",
              "text": "Forgetting a skill after the test is over."
            },
            {
              "id": "d",
              "text": "Only being able to solve problems that look exactly like the examples."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "advanced-math-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Final Sprint",
          "description": "Match the core concept to its ultimate purpose.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each concept on the left.",
            "Pick the best purpose on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Function Modeling"
              },
              {
                "id": "l2",
                "label": "Probabilistic Reasoning"
              },
              {
                "id": "l3",
                "label": "Mathematical Proof"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Predicting outputs based on inputs"
              },
              {
                "id": "r2",
                "label": "Making smart choices under uncertainty"
              },
              {
                "id": "r3",
                "label": "Guaranteeing a statement is logically true"
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
          "id": "advanced-math-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "You've mastered the models! Keep applying math to the real world."
        }
      ]
    }
  ]
};
