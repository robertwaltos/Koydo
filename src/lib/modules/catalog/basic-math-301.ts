import type { LearningModule } from "@/lib/modules/types";

export const basic_math_301_Module: LearningModule = {
  "id": "basic-math-301",
  "title": "Quantitative Reasoning Lab",
  "description": "Strengthen quantitative reasoning with multi-step, data-rich, real-world problem sets.",
  "subject": "Math",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in ratios, proportions, and data modeling.",
    "Apply multi-step verification strategies through guided practice.",
    "Demonstrate mastery with subject-specific quizzes and real-world scenarios."
  ],
  "lessons": [
    {
      "id": "basic-math-301-l01",
      "title": "Ratio and Proportion in Context",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "A vibrant, 3D animated illustration of a diverse group of students dividing a giant pizza. Floating math symbols like ratios (e.g., 1:4) and fractions glow in the background. Bright, engaging lighting, Pixar style.",
      "conceptVideoPrompt": "A dynamic 3D animation showing a glowing neon scale balancing different weights. The camera pans around the scale as numbers transform into fractions and ratios, visually demonstrating equivalence. High quality, educational, smooth 60fps.",
      "chunks": [
        {
          "id": "basic-math-301-l01-c1",
          "title": "Welcome to Ratios!",
          "content": "In this lesson, we will dive into the fascinating world of ratios and proportions! These concepts are not just numbers on a page; they help us understand how different quantities relate to each other in our everyday lives. For example, when we share a pizza among friends or mix different colors of paint to get the perfect shade, we are using ratios. Our main goal today is to learn how to recognize these relationships so we can become better problem solvers."
        },
        {
          "id": "basic-math-301-l01-c2",
          "title": "The Core Concept",
          "content": "A ratio is simply a way to compare two things. If you have 2 apples and 3 oranges, the ratio of apples to oranges is 2 to 3 (or 2:3). A proportion is when we set two ratios equal to each other. Imagine a recipe that calls for 1 cup of sugar for every 2 cups of flour. If you want to double the recipe, you'll need 2 cups of sugar and 4 cups of flour. The ratio stays the same! Understanding this helps us scale things up or down perfectly."
        },
        {
          "id": "basic-math-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! Imagine a car travels 150 miles on 5 gallons of gas. We want to know how far it can travel on 10 gallons. First, we define our goal: find the distance for 10 gallons. Next, we set up our proportion: 150 miles / 5 gallons = X miles / 10 gallons. Since 10 is double 5, we just double 150 to get 300 miles. Finally, we verify our result: does 300 miles on 10 gallons make sense? Yes, it's the exact same rate!"
        },
        {
          "id": "basic-math-301-l01-c4",
          "title": "Your Turn to Shine",
          "content": "Now it's your turn! Take the process we just learned and apply it to a new situation. If 3 movie tickets cost $30, how much would 5 tickets cost? As you work through your example, be sure to explain why the method you chose makes sense. Writing down your steps will not only help you understand the concept better but also show how well you can think through problems and share your ideas with others."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-301-l01-f1",
          "front": "Ratio",
          "back": "A comparison of two different quantities (e.g., 2 apples to 3 oranges)."
        },
        {
          "id": "basic-math-301-l01-f2",
          "front": "Proportion",
          "back": "An equation stating that two ratios are equal."
        },
        {
          "id": "basic-math-301-l01-f3",
          "front": "Verification",
          "back": "Checking that your final answer makes sense and matches the original rules."
        },
        {
          "id": "basic-math-301-l01-f4",
          "front": "Scaling",
          "back": "Multiplying or dividing both parts of a ratio by the same number to keep it equal."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic showing how to write ratios in three ways: with a colon (2:3), with the word 'to' (2 to 3), and as a fraction (2/3)."
        },
        {
          "id": "basic-math-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation showing a recipe being doubled, visually demonstrating proportions."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l01.png"
    },
    {
      "id": "basic-math-301-l02",
      "title": "Percent Change and Comparison",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A colorful digital storefront window with a bright neon '20% OFF' sign. A friendly animated character is calculating the new price on a glowing holographic tablet.",
      "conceptVideoPrompt": "A sleek, modern animation of a price tag morphing. It starts at $100, a '25% off' stamp hits it, and the number smoothly rolls down to $75, with a glowing formula appearing below it.",
      "metadata": {
        "prompts": [
          "Identify one core idea about ratio and proportion from this lesson.",
          "Explain where percent reasoning appears in real life.",
          "Describe one question you still have about quantitative reasoning under constraints."
        ]
      },
      "interactiveActivities": [
        {
          "id": "basic-math-301-l02-ia1",
          "type": "drag_and_drop",
          "title": "Discount Flow Builder",
          "description": "Sort each action into the correct phase of solving a percent discount problem.",
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
                "label": "Identify the original price and the discount percentage.",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Multiply the original price by the decimal form of the percent.",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Check if the final price is lower than the original price.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on calculating a 15% tip on a restaurant bill."
        }
      ]
    },
    {
      "id": "basic-math-301-l03",
      "title": "Checkpoint: Quantitative Setup",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A 3D animated checkpoint flag on a digital racetrack. The track is made of math symbols and glowing grids, symbolizing progress in learning.",
      "conceptVideoPrompt": "A fast-paced, engaging animation of a quiz interface where correct answers light up in bright green, accompanied by satisfying particle effects and a rising progress bar.",
      "questions": [
        {
          "id": "basic-math-301-l03-q1",
          "text": "What is the best definition of a ratio?",
          "skillId": "basic-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A comparison of two different quantities."
            },
            {
              "id": "b",
              "text": "The total sum of all numbers in a dataset."
            },
            {
              "id": "c",
              "text": "A number that is always less than zero."
            },
            {
              "id": "d",
              "text": "The process of guessing an answer."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l03-q2",
          "text": "If a $40 video game is on sale for 25% off, what is the first step to find the discount amount?",
          "skillId": "basic-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Multiply $40 by 0.25."
            },
            {
              "id": "b",
              "text": "Add $40 and 25."
            },
            {
              "id": "c",
              "text": "Subtract 25 from 40."
            },
            {
              "id": "d",
              "text": "Divide 25 by 40."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l03-q3",
          "text": "Why is it important to verify your answer in a math problem?",
          "skillId": "basic-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "To ensure the result makes sense in the context of the real-world problem."
            },
            {
              "id": "b",
              "text": "To make the problem take longer to solve."
            },
            {
              "id": "c",
              "text": "Because the first answer you guess is usually wrong."
            },
            {
              "id": "d",
              "text": "To change the original numbers in the question."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l03-q4",
          "text": "If a recipe calls for 2 cups of milk for every 1 cup of water, how much milk is needed for 3 cups of water?",
          "skillId": "basic-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "6 cups"
            },
            {
              "id": "b",
              "text": "3 cups"
            },
            {
              "id": "c",
              "text": "4 cups"
            },
            {
              "id": "d",
              "text": "5 cups"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Fix the Mistake",
          "description": "Match the common math mistake with the best way to fix it.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the mistake on the left.",
            "Pick the best correction strategy on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I added the ratio numbers instead of multiplying."
              },
              {
                "id": "l2",
                "label": "My discount price is higher than the original price."
              },
              {
                "id": "l3",
                "label": "I forgot what the question was asking for."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review how to scale proportions using multiplication."
              },
              {
                "id": "r2",
                "label": "Remember to subtract the discount from the original price."
              },
              {
                "id": "r3",
                "label": "Re-read the prompt and underline the final goal."
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
          "id": "basic-math-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase 'Plan, Check, Explain' for each question to avoid rushing."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l03.png"
    },
    {
      "id": "basic-math-301-l04",
      "title": "Data Modeling from Tables",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A futuristic, glowing digital spreadsheet floating in mid-air. A young student wearing high-tech glasses is pointing at a specific cell, causing a 3D bar chart to pop out of the table.",
      "conceptVideoPrompt": "A cinematic animation of a data table. The rows and columns slide into place like puzzle pieces. Suddenly, the numbers lift off the grid and form a beautiful, glowing line graph showing an upward trend.",
      "chunks": [
        {
          "id": "basic-math-301-l04-c1",
          "title": "Unlocking Data Tables",
          "content": "In this lesson, we will learn how to read and use data tables. Tables are like organized treasure maps for information! Instead of a messy pile of numbers, a table puts everything into neat rows and columns. By learning how to read these maps, we can spot patterns, make predictions, and make smart decisions based on real evidence."
        },
        {
          "id": "basic-math-301-l04-c2",
          "title": "The 3-Step Method",
          "content": "Here are the steps we will follow to effectively model data from a table. Step 1: Read the headers. What is this table actually about? Step 2: Look for the pattern. Are the numbers going up, going down, or staying the same? Step 3: Use the pattern to find your answer. By following these steps, we make sure our conclusions are supported by the data, not just wild guesses."
        },
        {
          "id": "basic-math-301-l04-c3",
          "title": "Watch Out for Traps!",
          "content": "As we work with data, it's important to avoid common mistakes. A frequent error is skipping the headers and just looking at the numbers. If you don't know what the numbers represent (like dollars, miles, or hours), you can't solve the problem! Another trap is assuming a pattern continues without checking the evidence. Always verify your thoughts with the data provided."
        },
        {
          "id": "basic-math-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try! Look at a table showing the temperature over 5 days. If it goes up by 2 degrees every day, what will the temperature be on day 6? After you figure it out, take a moment to compare your process to the 3-step method we discussed. Did you read the headers? Did you find the pattern? Great job!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-301-l04-f1",
          "front": "Data Table",
          "back": "Information organized into rows and columns to make it easy to read."
        },
        {
          "id": "basic-math-301-l04-f2",
          "front": "Header",
          "back": "The title at the top of a column or row that tells you what the numbers mean."
        },
        {
          "id": "basic-math-301-l04-f3",
          "front": "Pattern",
          "back": "A repeating sequence or trend in the data (e.g., increasing by 5 each time)."
        },
        {
          "id": "basic-math-301-l04-f4",
          "front": "Prediction",
          "back": "Using data patterns to guess what will happen next."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-301-l04-a1",
          "type": "image",
          "title": "Table Anatomy",
          "content": "A visual guide pointing out the Title, Headers, Rows, Columns, and Data Cells of a standard table."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l04.png"
    },
    {
      "id": "basic-math-301-l05",
      "title": "Constraint-Based Problem Solving",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "An animated illustration of a student looking at a blueprint. Around them are floating icons representing constraints: a ticking clock (time), a piggy bank (budget), and a toolbox (materials).",
      "conceptVideoPrompt": "A 3D animation showing a character trying to pack a suitcase. The suitcase glows red when it's too full (a constraint). The character swaps items until the suitcase glows green and closes perfectly.",
      "metadata": {
        "prompts": [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      "interactiveActivities": [
        {
          "id": "basic-math-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Identify the Constraint",
          "description": "Sort each real-world limitation into the correct constraint category: Time, Budget, or Material.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "time",
                "label": "Time Constraint"
              },
              {
                "id": "budget",
                "label": "Budget Constraint"
              },
              {
                "id": "material",
                "label": "Material Constraint"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "You only have 45 minutes to finish the exam.",
                "correctBucketId": "time"
              },
              {
                "id": "i2",
                "label": "You can only spend $20 on party snacks.",
                "correctBucketId": "budget"
              },
              {
                "id": "i3",
                "label": "You only have 3 cups of flour left for baking.",
                "correctBucketId": "material"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-301-l05-a1",
          "type": "animation",
          "title": "Constraint Walkthrough",
          "content": "Animated sequence showing how to plan a trip while staying under a $100 budget."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l05.png"
    },
    {
      "id": "basic-math-301-l06",
      "title": "Checkpoint: Multi-Step Verification",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A 3D animated magnifying glass hovering over a complex math equation, highlighting the final answer with a bright green checkmark.",
      "conceptVideoPrompt": "A dynamic animation of a multi-step math problem solving itself line by line. After the final answer appears, a glowing scanner sweeps over it to 'verify' it, turning the text gold.",
      "questions": [
        {
          "id": "basic-math-301-l06-q1",
          "text": "When reading a data table, what should you look at first?",
          "skillId": "basic-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The title and column headers to understand what the data means."
            },
            {
              "id": "b",
              "text": "The largest number in the table."
            },
            {
              "id": "c",
              "text": "The smallest number in the table."
            },
            {
              "id": "d",
              "text": "The very last row of data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l06-q2",
          "text": "If a table shows a plant growing 2 inches every week, how tall will it be after 4 weeks if it started at 0 inches?",
          "skillId": "basic-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "8 inches"
            },
            {
              "id": "b",
              "text": "6 inches"
            },
            {
              "id": "c",
              "text": "4 inches"
            },
            {
              "id": "d",
              "text": "10 inches"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l06-q3",
          "text": "Which of the following is an example of a budget constraint?",
          "skillId": "basic-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "You cannot spend more than $50 on groceries."
            },
            {
              "id": "b",
              "text": "You must finish your homework before 8 PM."
            },
            {
              "id": "c",
              "text": "You need 4 tires to build a toy car."
            },
            {
              "id": "d",
              "text": "You want to run 3 miles today."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l06-q4",
          "text": "Why is multi-step verification important in math?",
          "skillId": "basic-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It helps catch small mistakes made early in the problem."
            },
            {
              "id": "b",
              "text": "It makes the problem impossible to solve."
            },
            {
              "id": "c",
              "text": "It allows you to skip reading the instructions."
            },
            {
              "id": "d",
              "text": "It changes the final goal of the question."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Verification Match",
          "description": "Match the error signal to the best correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each error signal on the left.",
            "Pick the best response on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I misread the table headers."
              },
              {
                "id": "l2",
                "label": "I forgot about the $20 budget limit."
              },
              {
                "id": "l3",
                "label": "I made an addition error in step 1."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Always highlight the title and labels first."
              },
              {
                "id": "r2",
                "label": "Write down all constraints before calculating."
              },
              {
                "id": "r3",
                "label": "Check your work after every single step."
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
          "id": "basic-math-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Check twice, submit once!"
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l06.png"
    },
    {
      "id": "basic-math-301-l07",
      "title": "Estimation and Reasonableness",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A fun 3D illustration of a student holding a giant foam finger pointing at a target. Around them are floating bubbles with estimated numbers like '~50' and '~100'.",
      "conceptVideoPrompt": "A playful animation showing a jar full of jellybeans. A digital counter rapidly spins, then stops at an estimated number 'About 500!'. The camera zooms in to show the exact count is 498, proving the estimate was reasonable.",
      "chunks": [
        {
          "id": "basic-math-301-l07-c1",
          "title": "The Power of Guessing (Smartly!)",
          "content": "Sometimes in math, and in life, we don't need an exact answer right away. We just need a really good guess! This is called estimation. Estimation helps us quickly figure out if we have enough money at the store or enough time to finish a game. By rounding numbers to make them easier to work with, we set ourselves up for quick success."
        },
        {
          "id": "basic-math-301-l07-c2",
          "title": "Rounding Rules",
          "content": "To estimate, we usually round numbers. If a video game costs $48.99, it's much easier to pretend it costs $50 in your head. If you want to buy two games, you can quickly estimate: 50 + 50 = 100. So, you need about $100. This is much faster than trying to add 48.99 + 48.99 in your head!"
        },
        {
          "id": "basic-math-301-l07-c3",
          "title": "Does it Make Sense?",
          "content": "Once you solve a problem, you must ask yourself: 'Is this reasonable?' Reasonableness is your built-in quality control. If you calculate that a normal bicycle costs $5,000,000, your brain should say, 'Wait, that's not reasonable!' Checking for reasonableness catches huge mistakes before they happen."
        },
        {
          "id": "basic-math-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round today, take a moment to write down one time you used estimation. Did it help you find the answer faster? Reflecting on how you use these tools will help you grow as a math learner and enhance your skills in future exercises."
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-301-l07-f1",
          "front": "Estimation",
          "back": "Finding a value that is close enough to the right answer, usually to save time."
        },
        {
          "id": "basic-math-301-l07-f2",
          "front": "Rounding",
          "back": "Adjusting a number to make it easier to work with (e.g., 48 becomes 50)."
        },
        {
          "id": "basic-math-301-l07-f3",
          "front": "Reasonableness",
          "back": "Checking if an answer makes logical sense in the real world."
        },
        {
          "id": "basic-math-301-l07-f4",
          "front": "Quality Control",
          "back": "Reviewing your work for accuracy and completeness before finishing."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-301-l07-a1",
          "type": "practice",
          "title": "Estimation Planner",
          "content": "A quick worksheet where you round grocery prices to the nearest dollar to estimate a total bill."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l07.png"
    },
    {
      "id": "basic-math-301-l08",
      "title": "Applied Math Lab Session",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "A 3D animated science-math lab. Beakers are bubbling with glowing numbers, and a chalkboard in the background shows a mix of fractions, percentages, and estimated totals.",
      "conceptVideoPrompt": "A first-person view animation of hands assembling a puzzle made of math symbols. When a piece doesn't fit, the hands pause, rotate it, and try again until the puzzle glows brightly.",
      "metadata": {
        "prompts": [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "basic-math-301-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match",
          "description": "Match each reflection prompt with the best follow-up action to improve your math skills.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "My final answer was way too big."
              },
              {
                "id": "l2",
                "label": "I rush and make avoidable addition mistakes."
              },
              {
                "id": "l3",
                "label": "I understand the notes but freeze on quizzes."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Use estimation first to see if the answer is reasonable."
              },
              {
                "id": "r2",
                "label": "Use a short checklist to verify steps before submitting."
              },
              {
                "id": "r3",
                "label": "Practice with a timed mini-quiz to build confidence."
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
          "id": "basic-math-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember: Observe your mistake, Adjust your strategy, Repeat the practice."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l08.png"
    },
    {
      "id": "basic-math-301-l09",
      "title": "Review: Quantitative Strategies",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing 3D brain lifting weights shaped like percentage signs and division symbols, set in a bright, colorful gym environment.",
      "conceptVideoPrompt": "A fast-paced montage animation showing previous lessons: a pizza being sliced, a price tag dropping, and a data table building itself. It ends with a golden trophy.",
      "questions": [
        {
          "id": "basic-math-301-l09-q1",
          "text": "Which is the best estimate for 48 multiplied by 11?",
          "skillId": "basic-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "500 (because 50 x 10 = 500)"
            },
            {
              "id": "b",
              "text": "100 (because 50 + 50 = 100)"
            },
            {
              "id": "c",
              "text": "1000 (because 100 x 10 = 1000)"
            },
            {
              "id": "d",
              "text": "50 (because 50 x 1 = 50)"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l09-q2",
          "text": "If you have $20, is it reasonable to think you can buy three items that cost $8.99 each?",
          "skillId": "basic-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "No, because 3 x $9 is $27, which is more than $20."
            },
            {
              "id": "b",
              "text": "Yes, because $8.99 is less than $20."
            },
            {
              "id": "c",
              "text": "Yes, because 3 items is a small amount."
            },
            {
              "id": "d",
              "text": "No, because you need exactly $30."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l09-q3",
          "text": "What does it mean to check for 'reasonableness'?",
          "skillId": "basic-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Asking yourself if the final answer makes logical sense."
            },
            {
              "id": "b",
              "text": "Making sure the numbers are written neatly."
            },
            {
              "id": "c",
              "text": "Guessing the answer without doing any math."
            },
            {
              "id": "d",
              "text": "Asking a friend for the answer."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l09-q4",
          "text": "Why is rounding helpful in math?",
          "skillId": "basic-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It makes numbers easier to work with for quick estimation."
            },
            {
              "id": "b",
              "text": "It gives you the exact, perfect answer every time."
            },
            {
              "id": "c",
              "text": "It makes the problem harder to solve."
            },
            {
              "id": "d",
              "text": "It removes the need to learn multiplication."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Strategy Match",
          "description": "Match the math scenario to the best strategy to solve it.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each scenario on the left.",
            "Pick the best strategy on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "You need to know roughly how much 5 items at $3.95 will cost."
              },
              {
                "id": "l2",
                "label": "You need to find a pattern in daily temperatures."
              },
              {
                "id": "l3",
                "label": "You need to scale a recipe for 10 people."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Use rounding and estimation."
              },
              {
                "id": "r2",
                "label": "Use a data table."
              },
              {
                "id": "r3",
                "label": "Use ratios and proportions."
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
          "id": "basic-math-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Round up, round down, makes the math go round the town!"
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l09.png"
    },
    {
      "id": "basic-math-301-l10",
      "title": "Mastery: Quantitative Reasoning",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A 3D animated golden key unlocking a glowing treasure chest filled with math symbols, representing mastery of the subject.",
      "conceptVideoPrompt": "A cinematic animation of a student standing at the top of a mountain made of geometric shapes. They plant a flag with a percentage sign on it, and fireworks explode in the background.",
      "questions": [
        {
          "id": "basic-math-301-l10-q1",
          "text": "If a car travels 60 miles in 1 hour, how far will it travel in 3.5 hours at the same speed?",
          "skillId": "basic-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "210 miles"
            },
            {
              "id": "b",
              "text": "180 miles"
            },
            {
              "id": "c",
              "text": "200 miles"
            },
            {
              "id": "d",
              "text": "240 miles"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l10-q2",
          "text": "A jacket originally costs $80. It is on sale for 10% off. What is the sale price?",
          "skillId": "basic-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "$72"
            },
            {
              "id": "b",
              "text": "$70"
            },
            {
              "id": "c",
              "text": "$88"
            },
            {
              "id": "d",
              "text": "$8"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l10-q3",
          "text": "You have a budget of $50. You buy a shirt for $25 and a hat for $15. How much money is left?",
          "skillId": "basic-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "$10"
            },
            {
              "id": "b",
              "text": "$15"
            },
            {
              "id": "c",
              "text": "$20"
            },
            {
              "id": "d",
              "text": "$5"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l10-q4",
          "text": "Which of the following is the best estimate for 19% of 50?",
          "skillId": "basic-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "10 (because 20% of 50 is 10)"
            },
            {
              "id": "b",
              "text": "20 (because 19 is close to 20)"
            },
            {
              "id": "c",
              "text": "5 (because 10% of 50 is 5)"
            },
            {
              "id": "d",
              "text": "50 (because it's the original number)"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Mastery Match",
          "description": "Match the math term to its real-world example.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each term on the left.",
            "Pick the best example on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Ratio"
              },
              {
                "id": "l2",
                "label": "Percent Discount"
              },
              {
                "id": "l3",
                "label": "Constraint"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "2 slices of pizza for every 1 person."
              },
              {
                "id": "r2",
                "label": "Saving $5 on a $20 toy."
              },
              {
                "id": "r3",
                "label": "Only having 30 minutes to play."
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
          "id": "basic-math-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Take a deep breath. You have all the tools you need!"
        }
      ]
    },
    {
      "id": "basic-math-301-l11",
      "title": "Applied Math Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A 3D animated art studio, but instead of paint, the canvases are filled with colorful math equations, charts, and graphs. A student is 'painting' a solution with a glowing stylus.",
      "conceptVideoPrompt": "A time-lapse animation of a complex word problem being broken down. Highlighters magically appear to color-code the numbers, constraints, and the final question, organizing the chaos into a clear plan.",
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using data modeling.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "basic-math-301-l11-ia1",
          "type": "sorting_buckets",
          "title": "Word Problem Ladder",
          "description": "Sort the actions into the correct phase of solving a tough word problem: Diagnose, Fix, and Transfer.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "diagnose",
                "label": "Diagnose (Understand)"
              },
              {
                "id": "fix",
                "label": "Fix (Solve)"
              },
              {
                "id": "transfer",
                "label": "Transfer (Check)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Highlight the key numbers and what the question is asking.",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Write out the equation and do the math.",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Ask if the answer makes sense in the real world.",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult word problem."
        }
      ]
    },
    {
      "id": "basic-math-301-l12",
      "title": "Quantitative Reasoning Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A 3D animated glowing 'Level Up' badge surrounded by floating math symbols, set against a dark, sleek background.",
      "conceptVideoPrompt": "A dynamic animation of a student running through a digital obstacle course. They jump over a division sign, slide under a percentage, and cross the finish line to cheers.",
      "questions": [
        {
          "id": "basic-math-301-l12-q1",
          "text": "A recipe uses 3 eggs for every 2 cups of flour. If you use 6 cups of flour, how many eggs do you need?",
          "skillId": "basic-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "9 eggs"
            },
            {
              "id": "b",
              "text": "6 eggs"
            },
            {
              "id": "c",
              "text": "12 eggs"
            },
            {
              "id": "d",
              "text": "3 eggs"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l12-q2",
          "text": "A pair of shoes costs $60. If there is a 20% discount, how much money do you save?",
          "skillId": "basic-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "$12"
            },
            {
              "id": "b",
              "text": "$20"
            },
            {
              "id": "c",
              "text": "$48"
            },
            {
              "id": "d",
              "text": "$10"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l12-q3",
          "text": "You have 2 hours to finish 4 chores. If each chore takes 25 minutes, do you have enough time?",
          "skillId": "basic-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Yes, because 4 x 25 = 100 minutes, which is less than 120 minutes (2 hours)."
            },
            {
              "id": "b",
              "text": "No, because 4 x 25 = 100 minutes, which is more than 2 hours."
            },
            {
              "id": "c",
              "text": "Yes, because 25 minutes is very fast."
            },
            {
              "id": "d",
              "text": "No, because you need exactly 120 minutes."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l12-q4",
          "text": "Which is the most reasonable estimate for the cost of 4 books that are $9.95 each?",
          "skillId": "basic-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "$40"
            },
            {
              "id": "b",
              "text": "$30"
            },
            {
              "id": "c",
              "text": "$50"
            },
            {
              "id": "d",
              "text": "$100"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Retest Review Match",
          "description": "Match the math problem to the core skill it tests.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each problem on the left.",
            "Pick the matching skill on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Finding 15% of $40."
              },
              {
                "id": "l2",
                "label": "Guessing that 49 x 2 is about 100."
              },
              {
                "id": "l3",
                "label": "Checking if you have enough time to finish a test."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Percent Reasoning"
              },
              {
                "id": "r2",
                "label": "Estimation"
              },
              {
                "id": "r3",
                "label": "Constraint Checking"
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
          "id": "basic-math-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Read carefully. The answer is often hiding in the details!"
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l12.png"
    },
    {
      "id": "basic-math-301-l13",
      "title": "Math Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A 3D animated scene of a school gymnasium being decorated for a dance. A student holds a glowing digital clipboard showing a budget pie chart and a checklist.",
      "conceptVideoPrompt": "A fast-paced, fun animation showing a party being planned. A budget bar at the top of the screen fills up as items (DJ, pizza, balloons) are added. When it hits the limit, it flashes red, prompting the planner to swap items until it's green.",
      "chunks": [
        {
          "id": "basic-math-301-l13-c1",
          "title": "The Big Project",
          "content": "In this exciting scenario, we are going to plan a school dance! We will use everything we've learned: ratios for mixing punch, percentages for discounts on decorations, and data tables to compare DJ prices. This is where math comes to life. Get ready to think critically and creatively as you tackle this real-world challenge!"
        },
        {
          "id": "basic-math-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To effectively plan the dance, start by breaking it down into smaller decisions. First, what is our total budget? Let's say it's $500. Next, what are our constraints? We need music, food, and decorations. By organizing our approach, we make sure we don't spend all our money on a DJ and have nothing left for snacks!"
        },
        {
          "id": "basic-math-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! If the DJ costs $200, what percentage of our $500 budget is that? (Hint: It's 40%). As you make choices, explain your reasoning. 'I chose the $50 pizza package because it feeds 20 people, which is a better ratio than the $30 package that only feeds 10.' Use evidence to support your choices!"
        },
        {
          "id": "basic-math-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your budget, take a moment to evaluate the outcome. Did you stay under the $500 limit? Did you get everything you needed? Reflect on what worked well and what might need some adjustments. This step is crucial for learning how to manage complex projects in the future!"
        }
      ],
      "flashcards": [
        {
          "id": "basic-math-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Splitting a big, complex task into smaller, clear decision points."
        },
        {
          "id": "basic-math-301-l13-f2",
          "front": "Evidence Link",
          "back": "Making sure every choice you make is backed up by math and data."
        },
        {
          "id": "basic-math-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Changing your plan if you hit a constraint (like running out of money)."
        },
        {
          "id": "basic-math-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Using math skills in a real-world situation, not just on a worksheet."
        }
      ],
      "learningAids": [
        {
          "id": "basic-math-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting ratio and proportion, data modeling, and multi-step verification to planning a party."
        },
        {
          "id": "basic-math-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case: Planning a weekend camping trip budget."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l13.png"
    },
    {
      "id": "basic-math-301-l14",
      "title": "Math Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A 3D animated sports locker room, but for mathletes. A coach is pointing at a glowing digital whiteboard showing a game plan for solving tough equations.",
      "conceptVideoPrompt": "An animation of a math 'playbook'. The pages flip rapidly, stopping on a play called 'The Double Check'. X's and O's move around the screen to demonstrate how to verify an answer before submitting.",
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "basic-math-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each common math mistake to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I keep setting up my ratios backwards."
              },
              {
                "id": "l2",
                "label": "I make silly mistakes because I rush."
              },
              {
                "id": "l3",
                "label": "I get it right in practice, but freeze on the test."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Always write the words (e.g., apples/oranges) before the numbers."
              },
              {
                "id": "r2",
                "label": "Use checkpoint pacing and verify before you submit."
              },
              {
                "id": "r3",
                "label": "Do timed practice drills to get used to the pressure."
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
          "id": "basic-math-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the mistake, Correct the habit, Transfer to the test."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l14.png"
    },
    {
      "id": "basic-math-301-l15",
      "title": "Quantitative Reasoning Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A 3D animated finish line ribbon being broken by a glowing, fast-moving math symbol. Confetti made of numbers falls from the sky.",
      "conceptVideoPrompt": "A high-energy animation of a countdown timer. As the timer ticks down, complex math problems are solved rapidly on screen, ending with a massive '100% MASTERY' graphic.",
      "questions": [
        {
          "id": "basic-math-301-l15-q1",
          "text": "A store buys a toy for $10 and sells it for $15. What is the profit ratio of profit to cost?",
          "skillId": "basic-math-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "5 to 10 (or 1:2)"
            },
            {
              "id": "b",
              "text": "15 to 10"
            },
            {
              "id": "c",
              "text": "10 to 5"
            },
            {
              "id": "d",
              "text": "5 to 15"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l15-q2",
          "text": "If a data table shows that 4 out of 5 students prefer pizza, what percentage of students prefer pizza?",
          "skillId": "basic-math-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "80%"
            },
            {
              "id": "b",
              "text": "40%"
            },
            {
              "id": "c",
              "text": "50%"
            },
            {
              "id": "d",
              "text": "20%"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l15-q3",
          "text": "You need to buy 3 shirts that cost $14.99 each. You have $50. Is it reasonable to think you have enough money?",
          "skillId": "basic-math-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Yes, because 3 x $15 is $45, which is less than $50."
            },
            {
              "id": "b",
              "text": "No, because 3 x $15 is $60."
            },
            {
              "id": "c",
              "text": "Yes, because $14.99 is a small number."
            },
            {
              "id": "d",
              "text": "No, because you need exactly $45."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "basic-math-301-l15-q4",
          "text": "Why is it important to identify constraints (like time or budget) before solving a problem?",
          "skillId": "basic-math-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It sets the rules for what a correct and possible answer looks like."
            },
            {
              "id": "b",
              "text": "It makes the math equations easier to write."
            },
            {
              "id": "c",
              "text": "It allows you to skip the estimation step."
            },
            {
              "id": "d",
              "text": "It changes the numbers in the data table."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "basic-math-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Final Sprint Match",
          "description": "Match the math concept to its final definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each concept on the left.",
            "Pick the best definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Proportion"
              },
              {
                "id": "l2",
                "label": "Estimation"
              },
              {
                "id": "l3",
                "label": "Constraint"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "An equation showing two ratios are equal."
              },
              {
                "id": "r2",
                "label": "A smart guess using rounded numbers."
              },
              {
                "id": "r3",
                "label": "A real-world limit, like a budget or time limit."
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
          "id": "basic-math-301-l15-a1",
          "type": "mnemonic",
          "title": "Final Tip",
          "content": "You've mastered the lab! Trust your reasoning and finish strong."
        }
      ],
      "imageUrl": "/generated-images/refinery/basic-math-301-l15.png"
    }
  ]
};
