import type { LearningModule } from "@/lib/modules/types";

export const GeneralScience201Module: LearningModule = {
  "id": "general-science-201",
  "title": "General Science Investigations",
  "description": "Run structured investigations with evidence claims, controls, and data-based conclusions.",
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
    "Apply Evidence Analysis strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "general-science-201-l01",
      "title": "Designing Testable Questions",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "general-science-201-l01-c1",
          "title": "Designing Testable Questions Overview",
          "content": "In this lesson, we will dive into the fascinating world of experimental design by examining the scientific investigation cycles. These cycles help scientists ask questions, make observations, and conduct experiments to learn more about the world around us. Our main goal is to understand what strong reasoning looks like, which is essential for solving problems effectively. By the end of this lesson, you will be able to identify the key elements of a good scientific question and learn how to approach it thoughtfully. This understanding will empower you to think critically and creatively as you explore various scientific challenges."
        },
        {
          "id": "general-science-201-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will learn how experimental design and variables work together to help us answer scientific questions. First, we will start by clearly naming the main target of our investigation. Next, we will identify the evidence or the steps that support our target. This process will help us understand how to structure our experiments effectively and make our findings more reliable.\nContext recap: In this section, we will learn how experimental design and variables work together to help us answer scientific questions. First, we will start by clearly naming the main target of our investigation. Next, we will identify the evidence or the steps that support our target. This process will help us understand how to structure our experiments effectively and make our findings more reliable."
        },
        {
          "id": "general-science-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! We will define a clear goal for our investigation, apply a strategy to identify the variables involved, and then verify our results with a quick check. This example will help you see how to put the concepts we learned into practice, making it easier to design your own experiments in the future.\nContext recap: Let's walk through a guided example together! We will define a clear goal for our investigation, apply a strategy to identify the variables involved, and then verify our results with a quick check. This example will help you see how to put the concepts we learned into practice, making it easier to design your own experiments in the future."
        },
        {
          "id": "general-science-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Think about a different situation and use the same steps we talked about to create your own testable question. Once you've done that, take a moment to write down why you believe your approach is a good one, using just one clear sentence. This activity will not only help you practice your reasoning skills but also strengthen your understanding of how to design effective testable questions. Remember, the clearer your explanation, the better you'll understand the process!\nContext recap: Now it's your turn to shine! Think about a different situation and use the same steps we talked about to create your own testable question. Once you've done that, take a moment to write down why you believe your approach is a good one, using just one clear sentence. This activity will not only help you practice your reasoning skills but also strengthen your understanding of how to design effective testable questions."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-201-l01-f1",
          "front": "experimental design",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "general-science-201-l01-f2",
          "front": "variables",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "general-science-201-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "general-science-201-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about experimental design and variables."
        },
        {
          "id": "general-science-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Science vocabulary."
        }
      ]
    },
    {
      "id": "general-science-201-l02",
      "title": "Variables and Fair Testing",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about experimental design from this lesson.",
          "Explain where variables appears in real life.",
          "Describe one question you still have about scientific investigation cycles."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-201-l02-ia1",
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
                "label": "Set a goal for experimental design",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for variables",
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
          "id": "general-science-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on variables and write one reflection."
        }
      ]
    },
    {
      "id": "general-science-201-l03",
      "title": "Checkpoint: Investigation Design",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-201-l03-q1",
          "text": "Which statement best explains experimental design in Science?",
          "skillId": "general-science-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains experimental design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how experimental design works in practice."
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
          "id": "general-science-201-l03-q2",
          "text": "What is the best first step when analyzing variables?",
          "skillId": "general-science-201-skill-process",
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
          "id": "general-science-201-l03-q3",
          "text": "Which option shows strong reasoning about scientific investigation cycles?",
          "skillId": "general-science-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to scientific investigation cycles."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l03-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-201-skill-review",
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
          "id": "general-science-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Investigation Design",
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
                "label": "Confusion about experimental design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to variables"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific investigation cycles under timing"
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
          "id": "general-science-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-201-l04",
      "title": "Data Collection Quality",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "general-science-201-l04-c1",
          "title": "Data Collection Quality Focus",
          "content": "In this lesson, we will deepen our understanding of data analysis by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on the data we collect. This transition is important because it helps us apply what we learn in real-world situations, making our scientific investigations more effective.\nContext recap: In this lesson, we will deepen our understanding of data analysis by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on the data we collect. This transition is important because it helps us apply what we learn in real-world situations, making our scientific investigations more effective."
        },
        {
          "id": "general-science-201-l04-c2",
          "title": "Method Steps",
          "content": "Let's explore the important steps for collecting data effectively! Step 1: First, you need to clearly identify what question or problem you are trying to solve in your investigation. This helps you understand what information you need. Step 2: Next, choose a strategy that fits well with your goals for analyzing the data. This could be a specific method or tool that will help you gather the right information. Step 3: Finally, make sure to justify your choices by providing evidence. This means explaining why you chose that strategy and how it will help you answer your question. By following these steps, you will be organized and focused, making your data collection process much smoother and more effective."
        },
        {
          "id": "general-science-201-l04-c3",
          "title": "Common Mistakes",
          "content": "It's important to be aware of common mistakes that can occur during data collection. Some of these include skipping the setup process, using unrelated assumptions, or failing to verify the final results. By recognizing these pitfalls, you can improve your approach and ensure that your data is accurate and reliable.\nContext recap: It's important to be aware of common mistakes that can occur during data collection. Some of these include skipping the setup process, using unrelated assumptions, or failing to verify the final results. By recognizing these pitfalls, you can improve your approach and ensure that your data is accurate and reliable."
        },
        {
          "id": "general-science-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, let's put your skills to the test! Solve a similar problem on your own and then compare your process to the sequence we discussed in the lesson. This independent practice will help reinforce your learning and give you confidence in your abilities.\nContext recap: Now, let's put your skills to the test! Solve a similar problem on your own and then compare your process to the sequence we discussed in the lesson. This independent practice will help reinforce your learning and give you confidence in your abilities."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-201-l04-f1",
          "front": "data analysis",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "general-science-201-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "general-science-201-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "general-science-201-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for data analysis scenarios."
        }
      ]
    },
    {
      "id": "general-science-201-l05",
      "title": "Interpreting Patterns and Outliers",
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
          "id": "general-science-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "data analysis Concept"
              },
              {
                "id": "process",
                "label": "claims and evidence Process"
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
          "id": "general-science-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a data analysis challenge."
        }
      ]
    },
    {
      "id": "general-science-201-l06",
      "title": "Checkpoint: Evidence Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-201-l06-q1",
          "text": "Which statement best explains data analysis in Science?",
          "skillId": "general-science-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains data analysis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how data analysis works in practice."
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
          "id": "general-science-201-l06-q2",
          "text": "What is the best first step when analyzing claims and evidence?",
          "skillId": "general-science-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for claims and evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to claims and evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l06-q3",
          "text": "Which option shows strong reasoning about scientific investigation cycles?",
          "skillId": "general-science-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to scientific investigation cycles."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l06-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-201-skill-review",
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
          "id": "general-science-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Evidence Analysis",
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
                "label": "Confusion about data analysis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to claims and evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific investigation cycles under timing"
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
          "id": "general-science-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-201-l07",
      "title": "Building Scientific Claims",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-science-201-l07-c1",
          "title": "Building Scientific Claims Setup",
          "content": "Before you start building your scientific claims, it's important to organize your approach using claims and evidence. Planning ahead will not only improve the quality of your work but also help you complete tasks more quickly. This preparation is key to successful scientific investigations.\nContext recap: Before you start building your scientific claims, it's important to organize your approach using claims and evidence. Planning ahead will not only improve the quality of your work but also help you complete tasks more quickly. This preparation is key to successful scientific investigations."
        },
        {
          "id": "general-science-201-l07-c2",
          "title": "Decision Rules",
          "content": "When you find yourself with several choices to make, it can sometimes be tricky to decide which one is the best. A great way to help you make your decision is to follow a simple rule: always choose the option that has the strongest evidence supporting it and is most clearly connected to what you want to achieve. By using this strategy, you will not only make better decisions but also strengthen your scientific claims, making them more convincing and reliable.\nContext recap: When you find yourself with several choices to make, it can sometimes be tricky to decide which one is the best. A great way to help you make your decision is to follow a simple rule: always choose the option that has the strongest evidence supporting it and is most clearly connected to what you want to achieve. By using this strategy, you will not only make better decisions but also strengthen your scientific claims, making them more convincing and reliable."
        },
        {
          "id": "general-science-201-l07-c3",
          "title": "Quality Control",
          "content": "To ensure the quality of your scientific claims, check for three important things: accuracy, completeness, and alignment with your original objective. By focusing on these aspects, you can enhance the reliability of your findings and make sure your claims are well-supported.\nContext recap: To ensure the quality of your scientific claims, check for three important things: accuracy, completeness, and alignment with your original objective. By focusing on these aspects, you can enhance the reliability of your findings and make sure your claims are well-supported."
        },
        {
          "id": "general-science-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "As you reflect on your practice, write down one action you would like to repeat and one action you want to improve in your next round of practice. This self-assessment will help you grow as a scientist and refine your skills for future investigations.\nContext recap: As you reflect on your practice, write down one action you would like to repeat and one action you want to improve in your next round of practice. This self-assessment will help you grow as a scientist and refine your skills for future investigations."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-201-l07-f1",
          "front": "claims and evidence",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "general-science-201-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "general-science-201-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "general-science-201-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on claims and evidence."
        }
      ]
    },
    {
      "id": "general-science-201-l08",
      "title": "Lab Reflection Protocol",
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
          "id": "general-science-201-l08-ia1",
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
          "id": "general-science-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "general-science-201-l09",
      "title": "Review: Inquiry to Conclusion",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-201-l09-q1",
          "text": "Which statement best explains variables in Science?",
          "skillId": "general-science-201-skill-core",
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
          "id": "general-science-201-l09-q2",
          "text": "What is the best first step when analyzing claims and evidence?",
          "skillId": "general-science-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for claims and evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to claims and evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l09-q3",
          "text": "Which option shows strong reasoning about scientific investigation cycles?",
          "skillId": "general-science-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to scientific investigation cycles."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l09-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-201-skill-review",
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
          "id": "general-science-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Inquiry to Conclusion",
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
                "label": "Inconsistent approach to claims and evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific investigation cycles under timing"
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
          "id": "general-science-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-201-l10",
      "title": "Mastery: Science Investigations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-201-l10-q1",
          "text": "Which statement best explains experimental design in Science?",
          "skillId": "general-science-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains experimental design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how experimental design works in practice."
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
          "id": "general-science-201-l10-q2",
          "text": "What is the best first step when analyzing data analysis?",
          "skillId": "general-science-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for data analysis."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to data analysis."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l10-q3",
          "text": "Which option shows strong reasoning about scientific investigation cycles?",
          "skillId": "general-science-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to scientific investigation cycles."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l10-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-201-skill-review",
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
          "id": "general-science-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Science Investigations",
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
                "label": "Confusion about experimental design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to data analysis"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific investigation cycles under timing"
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
          "id": "general-science-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-201-l11",
      "title": "Applied Science Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using data analysis.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-201-l11-ia1",
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
                "label": "Tag repeated mistakes in variables",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on claims and evidence",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "general-science-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "general-science-201-l12",
      "title": "Science Investigations Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-201-l12-q1",
          "text": "Which statement best explains experimental design in Science?",
          "skillId": "general-science-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains experimental design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how experimental design works in practice."
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
          "id": "general-science-201-l12-q2",
          "text": "What is the best first step when analyzing claims and evidence?",
          "skillId": "general-science-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for claims and evidence."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to claims and evidence."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l12-q3",
          "text": "Which option shows strong reasoning about scientific investigation cycles?",
          "skillId": "general-science-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to scientific investigation cycles."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l12-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-201-skill-review",
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
          "id": "general-science-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Science Investigations Mastery Applied Retest",
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
                "label": "Confusion about experimental design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to claims and evidence"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific investigation cycles under timing"
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
          "id": "general-science-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-201-l13",
      "title": "Science Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-science-201-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will get to explore how to design experiments, analyze data, and understand the importance of claims and evidence. This challenge will help you apply what you have learned in a real-world context, making science both fun and practical!\nContext recap: In this exciting scenario, you will get to explore how to design experiments, analyze data, and understand the importance of claims and evidence. This challenge will help you apply what you have learned in a real-world context, making science both fun and practical!"
        },
        {
          "id": "general-science-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about a specific strategy that you can use. This will help you stay organized and focused as you work through the challenge step by step.\nContext recap: To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. For each decision point, think about a specific strategy that you can use. This will help you stay organized and focused as you work through the challenge step by step."
        },
        {
          "id": "general-science-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Once you have your plan ready, it's time to put it into action! As you execute each step, make sure to explain your reasoning clearly. Use evidence to support your choices instead of making guesses. This will strengthen your understanding and help you communicate your findings effectively.\nContext recap: Once you have your plan ready, it's time to put it into action! As you execute each step, make sure to explain your reasoning clearly. Use evidence to support your choices instead of making guesses. This will strengthen your understanding and help you communicate your findings effectively."
        },
        {
          "id": "general-science-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing your experiment, take a moment to evaluate the outcome. Compare your results to the original target you set. Identify what worked well and what might need some adjustments. This reflection is crucial for improving your future experiments and understanding the scientific process better.\nContext recap: After completing your experiment, take a moment to evaluate the outcome. Compare your results to the original target you set. Identify what worked well and what might need some adjustments. This reflection is crucial for improving your future experiments and understanding the scientific process better."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "general-science-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "general-science-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "general-science-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting experimental design, data analysis, and claims and evidence."
        },
        {
          "id": "general-science-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "general-science-201-l14",
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
          "id": "general-science-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on experimental design setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed claims and evidence decisions"
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
          "id": "general-science-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "general-science-201-l15",
      "title": "Science Investigations Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-201-l15-q1",
          "text": "Which statement best explains variables in Science?",
          "skillId": "general-science-201-skill-core",
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
          "id": "general-science-201-l15-q2",
          "text": "What is the best first step when analyzing data analysis?",
          "skillId": "general-science-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for data analysis."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to data analysis."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l15-q3",
          "text": "Which option shows strong reasoning about scientific investigation cycles?",
          "skillId": "general-science-201-skill-reasoning",
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
              "text": "Use assumptions unrelated to scientific investigation cycles."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-201-l15-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-201-skill-review",
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
          "id": "general-science-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Science Investigations Mastery Mastery Sprint",
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
                "label": "Inconsistent approach to data analysis"
              },
              {
                "id": "l3",
                "label": "Weak transfer of scientific investigation cycles under timing"
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
          "id": "general-science-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
