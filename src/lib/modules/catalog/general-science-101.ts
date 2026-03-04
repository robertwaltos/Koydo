import type { LearningModule } from "@/lib/modules/types";

export const GeneralScience101Module: LearningModule = {
  "id": "general-science-101",
  "title": "General Science Explorer",
  "description": "Understand scientific thinking, observation, experimentation, and real-world science.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Science",
    "Apply Experimental Design strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "general-science-101-l01",
      "title": "Observation and Questions",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "general-science-101-l01-c1",
          "title": "Observation and Questions Overview",
          "content": "In this lesson, we will embark on an exciting journey into the world of observation, which is a vital part of scientific inquiry. Observing carefully helps us notice details that we might otherwise miss. Our main goal is to learn how to recognize what strong reasoning looks like before we start solving problems. By improving our observation skills, we can ask more thoughtful questions and discover more accurate answers. This important first step is essential for anyone who dreams of becoming a scientist! Let's get ready to sharpen our eyes and minds together!"
        },
        {
          "id": "general-science-101-l01-c2",
          "title": "Core Concept",
          "content": "In science, observation and hypothesis work hand in hand to help us understand the world around us. First, we need to clearly name the main target of our investigation. Next, we will identify the evidence or steps that support our ideas. This process helps us build a strong foundation for our scientific reasoning and ensures that our conclusions are based on solid evidence.\nContext recap: In science, observation and hypothesis work hand in hand to help us understand the world around us. First, we need to clearly name the main target of our investigation. Next, we will identify the evidence or steps that support our ideas. This process helps us build a strong foundation for our scientific reasoning and ensures that our conclusions are based on solid evidence."
        },
        {
          "id": "general-science-101-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal clearly. Then, we will apply a strategy to form a hypothesis, which is an educated guess about what we think will happen. Finally, we will verify our result by doing a quick check to see if our hypothesis was correct. This step-by-step approach helps us learn how to think critically and solve problems effectively.\nContext recap: Let's walk through a guided example together! First, we will define our goal clearly. Then, we will apply a strategy to form a hypothesis, which is an educated guess about what we think will happen. Finally, we will verify our result by doing a quick check to see if our hypothesis was correct."
        },
        {
          "id": "general-science-101-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Apply the same process we just learned to a new scenario. Take a moment to explain why your approach is valid in one clear sentence. This exercise will help you practice your observation and reasoning skills, and it will show how you can use what you've learned in different situations.\nContext recap: Now it's your turn! Apply the same process we just learned to a new scenario. Take a moment to explain why your approach is valid in one clear sentence. This exercise will help you practice your observation and reasoning skills, and it will show how you can use what you've learned in different situations."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-101-l01-f1",
          "front": "observation",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "general-science-101-l01-f2",
          "front": "hypothesis",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "general-science-101-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "general-science-101-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-101-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about observation and hypothesis."
        },
        {
          "id": "general-science-101-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Science vocabulary."
        }
      ]
    },
    {
      "id": "general-science-101-l02",
      "title": "Hypothesis and Testing",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about observation from this lesson.",
          "Explain where hypothesis appears in real life.",
          "Describe one question you still have about scientific inquiry."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "Practice Flow Builder",
          "description": "Sort each action into Plan, Execute, or Reflect.",
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
                "label": "Set a goal for observation",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for hypothesis",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Record what worked and what to improve",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "general-science-101-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on hypothesis and write one reflection."
        }
      ]
    },
    {
      "id": "general-science-101-l03",
      "title": "Checkpoint: Scientific Method",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-101-l03-q1",
          "text": "Which statement best explains observation in Science?",
          "skillId": "general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains observation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how observation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l03-q2",
          "text": "What is the best first step when analyzing hypothesis?",
          "skillId": "general-science-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for hypothesis."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to hypothesis."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l03-q3",
          "text": "Which option shows strong reasoning about scientific inquiry?",
          "skillId": "general-science-101-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l03-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Scientific Method",
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
                "label": "Confusion about observation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to hypothesis"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific inquiry under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
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
          "id": "general-science-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-101-l04",
      "title": "Variables and Controls",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "general-science-101-l04-c1",
          "title": "Variables and Controls Focus",
          "content": "In this lesson, we will deepen our understanding of variables using structured reasoning. We will move from simply understanding concepts to making applied decisions based on our knowledge. This will help us see how different factors can affect our experiments and conclusions, making our scientific inquiries more robust and reliable.\nContext recap: In this lesson, we will deepen our understanding of variables using structured reasoning. We will move from simply understanding concepts to making applied decisions based on our knowledge. This will help us see how different factors can affect our experiments and conclusions, making our scientific inquiries more robust and reliable."
        },
        {
          "id": "general-science-101-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the method into clear steps! Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with the variables you have identified. Step 3: Justify your choices with evidence that supports your reasoning. Following these steps will help you stay organized and focused as you tackle scientific questions.\nContext recap: Let's break down the method into clear steps! Step 1: Identify what is being asked in the problem. Step 2: Choose a strategy that aligns with the variables you have identified. Step 3: Justify your choices with evidence that supports your reasoning."
        },
        {
          "id": "general-science-101-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can happen during scientific investigations. Some frequent errors include skipping the setup process, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, we can improve our approach and ensure that our scientific work is accurate and meaningful.\nContext recap: It's important to be aware of common mistakes that can happen during scientific investigations. Some frequent errors include skipping the setup process, using unrelated assumptions, or failing to verify the final result. By recognizing these pitfalls, we can improve our approach and ensure that our scientific work is accurate and meaningful."
        },
        {
          "id": "general-science-101-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you understand your own thinking and improve your problem-solving skills in the future.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process to the lesson sequence we discussed. This reflection will help you understand your own thinking and improve your problem-solving skills in the future."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-101-l04-f1",
          "front": "variables",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "general-science-101-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "general-science-101-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "general-science-101-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-101-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for variables scenarios."
        }
      ]
    },
    {
      "id": "general-science-101-l05",
      "title": "Interpreting Evidence",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-101-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "variables Concept"
              },
              {
                "id": "process",
                "label": "evidence Process"
              },
              {
                "id": "review",
                "label": "Review Loop"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Write one definition in your own words",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Follow the step-by-step method on a new example",
                "correctBucketId": "process"
              },
              {
                "id": "i3",
                "label": "Retest the same skill tomorrow",
                "correctBucketId": "review"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "general-science-101-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a variables challenge."
        }
      ]
    },
    {
      "id": "general-science-101-l06",
      "title": "Checkpoint: Experimental Design",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-101-l06-q1",
          "text": "Which statement best explains variables in Science?",
          "skillId": "general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains variables using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how variables works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l06-q2",
          "text": "What is the best first step when analyzing evidence?",
          "skillId": "general-science-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l06-q3",
          "text": "Which option shows strong reasoning about scientific inquiry?",
          "skillId": "general-science-101-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l06-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Experimental Design",
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
                "label": "Confusion about variables"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific inquiry under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
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
          "id": "general-science-101-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-101-l07",
      "title": "Science in Daily Life",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-science-101-l07-c1",
          "title": "Science in Daily Life Setup",
          "content": "Before you start any scientific task, it's important to use evidence to organize your approach. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. By taking the time to prepare, you set yourself up for success in your scientific endeavors.\nContext recap: Before you start any scientific task, it's important to use evidence to organize your approach. Planning ahead can significantly improve both the quality of your work and the speed at which you complete it. By taking the time to prepare, you set yourself up for success in your scientific endeavors."
        },
        {
          "id": "general-science-101-l07-c2",
          "title": "Decision Rules",
          "content": "When you find yourself with several choices to make, it can sometimes be tricky to decide which one is the best. A great way to help you choose is to follow a simple rule: always look for the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make smarter decisions that will improve your scientific work and help you reach your goals more effectively.\nContext recap: When you find yourself with several choices to make, it can sometimes be tricky to decide which one is the best. A great way to help you choose is to follow a simple rule: always look for the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make smarter decisions that will improve your scientific work and help you reach your goals more effectively."
        },
        {
          "id": "general-science-101-l07-c3",
          "title": "Quality Control",
          "content": "To ensure the quality of your scientific work, check for three important things: accuracy, completeness, and alignment with your original objective. By focusing on these aspects, you can enhance the reliability of your findings and ensure that your conclusions are well-supported.\nContext recap: To ensure the quality of your scientific work, check for three important things: accuracy, completeness, and alignment with your original objective. By focusing on these aspects, you can enhance the reliability of your findings and ensure that your conclusions are well-supported."
        },
        {
          "id": "general-science-101-l07-c4",
          "title": "Next-Step Plan",
          "content": "As you prepare for your next practice round, write down one action you want to repeat and one action you want to improve. This reflection will help you focus on your growth and development as a scientist, allowing you to build on your successes and learn from your challenges.\nContext recap: As you prepare for your next practice round, write down one action you want to repeat and one action you want to improve. This reflection will help you focus on your growth and development as a scientist, allowing you to build on your successes and learn from your challenges."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-101-l07-f1",
          "front": "evidence",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "general-science-101-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "general-science-101-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "general-science-101-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-101-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on evidence."
        }
      ]
    },
    {
      "id": "general-science-101-l08",
      "title": "Investigation Reflection",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-101-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match",
          "description": "Match each reflection prompt with the best follow-up action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I keep missing one skill pattern"
              },
              {
                "id": "l2",
                "label": "I rush and make avoidable mistakes"
              },
              {
                "id": "l3",
                "label": "I understand in notes but miss in quizzes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Do a focused drill on that exact pattern"
              },
              {
                "id": "r2",
                "label": "Use a short checklist before submitting answers"
              },
              {
                "id": "r3",
                "label": "Repeat the skill in a timed re-check"
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
          "id": "general-science-101-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "general-science-101-l09",
      "title": "Review: Inquiry Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-101-l09-q1",
          "text": "Which statement best explains hypothesis in Science?",
          "skillId": "general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains hypothesis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how hypothesis works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l09-q2",
          "text": "What is the best first step when analyzing evidence?",
          "skillId": "general-science-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l09-q3",
          "text": "Which option shows strong reasoning about scientific inquiry?",
          "skillId": "general-science-101-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l09-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Inquiry Skills",
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
                "label": "Confusion about hypothesis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific inquiry under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
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
          "id": "general-science-101-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-101-l10",
      "title": "Mastery: General Science",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-101-l10-q1",
          "text": "Which statement best explains observation in Science?",
          "skillId": "general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains observation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how observation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l10-q2",
          "text": "What is the best first step when analyzing variables?",
          "skillId": "general-science-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for variables."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to variables."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l10-q3",
          "text": "Which option shows strong reasoning about scientific inquiry?",
          "skillId": "general-science-101-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l10-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-101-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: General Science",
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
                "label": "Confusion about observation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to variables"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific inquiry under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
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
          "id": "general-science-101-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-101-l11",
      "title": "Applied Science Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using variables.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-101-l11-ia1",
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
                "label": "Tag repeated mistakes in hypothesis",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on evidence",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "general-science-101-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "general-science-101-l12",
      "title": "General Science Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-101-l12-q1",
          "text": "Which statement best explains observation in Science?",
          "skillId": "general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains observation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how observation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l12-q2",
          "text": "What is the best first step when analyzing evidence?",
          "skillId": "general-science-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l12-q3",
          "text": "Which option shows strong reasoning about scientific inquiry?",
          "skillId": "general-science-101-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l12-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: General Science Mastery Applied Retest",
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
                "label": "Confusion about observation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific inquiry under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
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
          "id": "general-science-101-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-101-l13",
      "title": "Science Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-science-101-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will use your skills of observation to explore different variables and gather evidence. This challenge will help you understand how these elements work together in real-life situations. Get ready to think critically and creatively!\nContext recap: In this exciting scenario, you will use your skills of observation to explore different variables and gather evidence. This challenge will help you understand how these elements work together in real-life situations. Get ready to think critically and creatively!"
        },
        {
          "id": "general-science-101-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about a specific strategy that you can use. This will help you stay organized and focused as you work through the challenge step by step.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about a specific strategy that you can use. This will help you stay organized and focused as you work through the challenge step by step."
        },
        {
          "id": "general-science-101-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute each step, make sure to explain your reasoning clearly. Use evidence to support your choices instead of making guesses. This will strengthen your understanding and help you communicate your thought process effectively.\nContext recap: Now it's time to put your plan into action! As you execute each step, make sure to explain your reasoning clearly. Use evidence to support your choices instead of making guesses. This will strengthen your understanding and help you communicate your thought process effectively."
        },
        {
          "id": "general-science-101-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing your scenario, take a moment to evaluate the outcome. Compare your results with the original target you aimed for. Identify what worked well and what might need some adjustments. This reflection will help you learn and improve for future challenges!\nContext recap: After completing your scenario, take a moment to evaluate the outcome. Compare your results with the original target you aimed for. Identify what worked well and what might need some adjustments. This reflection will help you learn and improve for future challenges!"
        }
      ],
      "flashcards": [
        {
          "id": "general-science-101-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "general-science-101-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "general-science-101-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "general-science-101-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-101-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting observation, variables, and evidence."
        },
        {
          "id": "general-science-101-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "general-science-101-l14",
      "title": "Science Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-101-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on observation setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed evidence decisions"
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
                "label": "Use checkpoint pacing + verify before submit"
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
          "id": "general-science-101-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "general-science-101-l15",
      "title": "General Science Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-101-l15-q1",
          "text": "Which statement best explains hypothesis in Science?",
          "skillId": "general-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains hypothesis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how hypothesis works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Science."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l15-q2",
          "text": "What is the best first step when analyzing variables?",
          "skillId": "general-science-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for variables."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to variables."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l15-q3",
          "text": "Which option shows strong reasoning about scientific inquiry?",
          "skillId": "general-science-101-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-101-l15-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-101-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "general-science-101-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: General Science Mastery Mastery Sprint",
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
                "label": "Confusion about hypothesis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to variables"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific inquiry under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
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
          "id": "general-science-101-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
