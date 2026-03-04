import type { LearningModule } from "@/lib/modules/types";

export const GeneralScience401Module: LearningModule = {
  "id": "general-science-401",
  "title": "Science Capstone Inquiry",
  "description": "Run end-to-end inquiry cycles from question framing to evidence-based claims and redesign.",
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
    "Apply Scientific Argument Quality strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "general-science-401-l01",
      "title": "Research Question Architecture",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "general-science-401-l01-c1",
          "title": "Research Question Architecture Overview",
          "content": "In this lesson, we will dive into the exciting world of research design by examining the important steps involved in scientific inquiry. We will learn how to create a solid foundation for our research projects. Our main goal is to understand what strong reasoning means and how it can guide us before we begin solving problems. By developing this understanding, we will be able to ask more thoughtful questions and discover more effective solutions in our research endeavors. This will not only enhance our critical thinking skills but also make our scientific investigations more meaningful and impactful."
        },
        {
          "id": "general-science-401-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will learn how research design and evidence synthesis work together to create a strong foundation for our projects. First, we will identify the main question or target we want to focus on. Then, we will look for the evidence or steps that support our main idea. This process will help us build a clear and logical argument in our research.\nContext recap: In this section, we will learn how research design and evidence synthesis work together to create a strong foundation for our projects. First, we will identify the main question or target we want to focus on. Then, we will look for the evidence or steps that support our main idea. This process will help us build a clear and logical argument in our research."
        },
        {
          "id": "general-science-401-l01-c3",
          "title": "Worked Example",
          "content": "Let's explore a guided example together! First, we will clearly define our research goal. This means we need to think about what we want to learn or discover. Next, we will use a special strategy to gather and organize our evidence. This could involve looking for facts, data, or information that supports our goal. Finally, we will check our results to ensure everything makes sense and aligns with what we set out to find. By following this step-by-step approach, we will gain a better understanding of how to apply these important concepts in our own research projects. Remember, taking your time and being thorough is key to successful research!"
        },
        {
          "id": "general-science-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the same steps we just learned and apply them to a new situation. Once you've worked through the process, write one clear sentence explaining why your approach makes sense. This exercise will help you practice your reasoning skills and strengthen your understanding of the concepts we've covered. Remember, thinking critically is an important part of science!\nContext recap: Now it's your turn to shine! Take the same steps we just learned and apply them to a new situation. Once you've worked through the process, write one clear sentence explaining why your approach makes sense. This exercise will help you practice your reasoning skills and strengthen your understanding of the concepts we've covered."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-401-l01-f1",
          "front": "research design",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "general-science-401-l01-f2",
          "front": "evidence synthesis",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "general-science-401-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "general-science-401-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about research design and evidence synthesis."
        },
        {
          "id": "general-science-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Science vocabulary."
        }
      ]
    },
    {
      "id": "general-science-401-l02",
      "title": "Evidence Synthesis Methods",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about research design from this lesson.",
          "Explain where evidence synthesis appears in real life.",
          "Describe one question you still have about capstone scientific inquiry."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-401-l02-ia1",
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
                "label": "Set a goal for research design",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for evidence synthesis",
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
          "id": "general-science-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on evidence synthesis and write one reflection."
        }
      ]
    },
    {
      "id": "general-science-401-l03",
      "title": "Checkpoint: Capstone Inquiry Design",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-401-l03-q1",
          "text": "Which statement best explains research design in Science?",
          "skillId": "general-science-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains research design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how research design works in practice."
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
          "id": "general-science-401-l03-q2",
          "text": "What is the best first step when analyzing evidence synthesis?",
          "skillId": "general-science-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence synthesis."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence synthesis."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l03-q3",
          "text": "Which option shows strong reasoning about capstone scientific inquiry?",
          "skillId": "general-science-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l03-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-401-skill-review",
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
          "id": "general-science-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Capstone Inquiry Design",
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
                "label": "Confusion about research design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence synthesis"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone scientific inquiry under timing"
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
          "id": "general-science-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-401-l04",
      "title": "Model Revision from Data",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "general-science-401-l04-c1",
          "title": "Model Revision from Data Focus",
          "content": "In this lesson, we will take a deeper look at how to revise our models using structured reasoning. We will move from simply understanding concepts to making informed decisions based on data. This approach will help us improve our models and make them more accurate.\nContext recap: In this lesson, we will take a deeper look at how to revise our models using structured reasoning. We will move from simply understanding concepts to making informed decisions based on data. This approach will help us improve our models and make them more accurate."
        },
        {
          "id": "general-science-401-l04-c2",
          "title": "Method Steps",
          "content": "Here are the steps we will follow for model revision: Step 1 is to clearly identify what is being asked in the problem. Step 2 involves choosing a strategy that aligns with our goal of revising the model. Finally, Step 3 is to justify our choices with solid evidence. Following these steps will help us create better models.\nContext recap: Here are the steps we will follow for model revision: Step 1 is to clearly identify what is being asked in the problem. Step 2 involves choosing a strategy that aligns with our goal of revising the model. Finally, Step 3 is to justify our choices with solid evidence. Following these steps will help us create better models."
        },
        {
          "id": "general-science-401-l04-c3",
          "title": "Common Mistakes",
          "content": "As we work on model revision, it's important to be aware of common mistakes that can happen. Some common errors include skipping the setup process, using assumptions that are not related to the problem, or failing to verify the final results. By recognizing these mistakes, we can avoid them and improve our work.\nContext recap: As we work on model revision, it's important to be aware of common mistakes that can happen. Some common errors include skipping the setup process, using assumptions that are not related to the problem, or failing to verify the final results. By recognizing these mistakes, we can avoid them and improve our work."
        },
        {
          "id": "general-science-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, let's put our skills to the test! Try solving a similar problem on your own. After you finish, compare your process to the steps we discussed in the lesson. This will help you see how well you understood the material and where you might improve.\nContext recap: Now, let's put our skills to the test! Try solving a similar problem on your own. After you finish, compare your process to the steps we discussed in the lesson. This will help you see how well you understood the material and where you might improve."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-401-l04-f1",
          "front": "model revision",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "general-science-401-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "general-science-401-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "general-science-401-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for model revision scenarios."
        }
      ]
    },
    {
      "id": "general-science-401-l05",
      "title": "Uncertainty and Confidence Claims",
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
          "id": "general-science-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "model revision Concept"
              },
              {
                "id": "process",
                "label": "scientific communication Process"
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
          "id": "general-science-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a model revision challenge."
        }
      ]
    },
    {
      "id": "general-science-401-l06",
      "title": "Checkpoint: Scientific Argument Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-401-l06-q1",
          "text": "Which statement best explains model revision in Science?",
          "skillId": "general-science-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains model revision using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how model revision works in practice."
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
          "id": "general-science-401-l06-q2",
          "text": "What is the best first step when analyzing scientific communication?",
          "skillId": "general-science-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for scientific communication."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to scientific communication."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l06-q3",
          "text": "Which option shows strong reasoning about capstone scientific inquiry?",
          "skillId": "general-science-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l06-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-401-skill-review",
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
          "id": "general-science-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Scientific Argument Quality",
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
                "label": "Confusion about model revision"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to scientific communication"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone scientific inquiry under timing"
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
          "id": "general-science-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-401-l07",
      "title": "Communicating Findings",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-science-401-l07-c1",
          "title": "Communicating Findings Setup",
          "content": "Before you start working on your findings, it's important to use scientific communication to organize your approach. Planning ahead can greatly improve the quality of your work and help you complete tasks more quickly. This preparation will set you up for success in your research.\nContext recap: Before you start working on your findings, it's important to use scientific communication to organize your approach. Planning ahead can greatly improve the quality of your work and help you complete tasks more quickly. This preparation will set you up for success in your research."
        },
        {
          "id": "general-science-401-l07-c2",
          "title": "Decision Rules",
          "content": "When you are faced with making decisions in your research, it's important to have a guiding principle to help you. A good rule to follow is to always select the option that has the strongest evidence supporting it and the clearest connection to your research goal. By doing this, you will be able to make smart choices that improve the quality of your findings and help you achieve your objectives more effectively.\nContext recap: When you are faced with making decisions in your research, it's important to have a guiding principle to help you. A good rule to follow is to always select the option that has the strongest evidence supporting it and the clearest connection to your research goal. By doing this, you will be able to make smart choices that improve the quality of your findings and help you achieve your objectives more effectively."
        },
        {
          "id": "general-science-401-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, check for three important things: accuracy, completeness, and whether your findings align with the original objective. This quality control step is crucial to ensure that your research is reliable and valid.\nContext recap: As you review your work, check for three important things: accuracy, completeness, and whether your findings align with the original objective. This quality control step is crucial to ensure that your research is reliable and valid.\nWhy this matters: Quality Control helps learners in Science connect ideas from Science Capstone Inquiry to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "general-science-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round, take a moment to write down one action you want to repeat in your next practice and one action you want to improve. This reflection will help you grow and develop your skills as a researcher.\nContext recap: After completing your practice round, take a moment to write down one action you want to repeat in your next practice and one action you want to improve. This reflection will help you grow and develop your skills as a researcher."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-401-l07-f1",
          "front": "scientific communication",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "general-science-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "general-science-401-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "general-science-401-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on scientific communication."
        }
      ]
    },
    {
      "id": "general-science-401-l08",
      "title": "Capstone Investigation Studio",
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
          "id": "general-science-401-l08-ia1",
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
          "id": "general-science-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "general-science-401-l09",
      "title": "Review: Inquiry to Impact",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-401-l09-q1",
          "text": "Which statement best explains evidence synthesis in Science?",
          "skillId": "general-science-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains evidence synthesis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how evidence synthesis works in practice."
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
          "id": "general-science-401-l09-q2",
          "text": "What is the best first step when analyzing scientific communication?",
          "skillId": "general-science-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for scientific communication."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to scientific communication."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l09-q3",
          "text": "Which option shows strong reasoning about capstone scientific inquiry?",
          "skillId": "general-science-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l09-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-401-skill-review",
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
          "id": "general-science-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Inquiry to Impact",
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
                "label": "Confusion about evidence synthesis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to scientific communication"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone scientific inquiry under timing"
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
          "id": "general-science-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-401-l10",
      "title": "Mastery: Science IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-401-l10-q1",
          "text": "Which statement best explains research design in Science?",
          "skillId": "general-science-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains research design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how research design works in practice."
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
          "id": "general-science-401-l10-q2",
          "text": "What is the best first step when analyzing model revision?",
          "skillId": "general-science-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for model revision."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to model revision."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l10-q3",
          "text": "Which option shows strong reasoning about capstone scientific inquiry?",
          "skillId": "general-science-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l10-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-401-skill-review",
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
          "id": "general-science-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Science IV",
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
                "label": "Confusion about research design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to model revision"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone scientific inquiry under timing"
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
          "id": "general-science-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-401-l11",
      "title": "Applied Science Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using model revision.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "general-science-401-l11-ia1",
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
                "label": "Tag repeated mistakes in evidence synthesis",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on scientific communication",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "general-science-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "general-science-401-l12",
      "title": "Science IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-401-l12-q1",
          "text": "Which statement best explains research design in Science?",
          "skillId": "general-science-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains research design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how research design works in practice."
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
          "id": "general-science-401-l12-q2",
          "text": "What is the best first step when analyzing scientific communication?",
          "skillId": "general-science-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for scientific communication."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to scientific communication."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l12-q3",
          "text": "Which option shows strong reasoning about capstone scientific inquiry?",
          "skillId": "general-science-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l12-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-401-skill-review",
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
          "id": "general-science-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Science IV Mastery Applied Retest",
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
                "label": "Confusion about research design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to scientific communication"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone scientific inquiry under timing"
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
          "id": "general-science-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "general-science-401-l13",
      "title": "Science Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "general-science-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will get to explore how scientists design their research, make improvements to their models, and communicate their findings effectively. This challenge will help you understand the importance of these skills in real-world science applications.\nContext recap: In this exciting scenario, you will get to explore how scientists design their research, make improvements to their models, and communicate their findings effectively. This challenge will help you understand the importance of these skills in real-world science applications."
        },
        {
          "id": "general-science-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario successfully, start by breaking it down into smaller, manageable decisions. For each decision point, think about one specific strategy that you can use. This will help you stay organized and focused as you work through the challenge.\nContext recap: To tackle this scenario successfully, start by breaking it down into smaller, manageable decisions. For each decision point, think about one specific strategy that you can use. This will help you stay organized and focused as you work through the challenge."
        },
        {
          "id": "general-science-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Once you have your plan in place, it's time to put it into action! As you execute your plan, make sure to explain each step you take. Use evidence from your research to support your choices, rather than making guesses. This will strengthen your conclusions.\nContext recap: Once you have your plan in place, it's time to put it into action! As you execute your plan, make sure to explain each step you take. Use evidence from your research to support your choices, rather than making guesses. This will strengthen your conclusions."
        },
        {
          "id": "general-science-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your project, take a moment to evaluate the outcome. Compare your results to the goals you set at the beginning. Identify what worked well and what might need some changes. This reflection is key to improving your future scientific endeavors.\nContext recap: After you have completed your project, take a moment to evaluate the outcome. Compare your results to the goals you set at the beginning. Identify what worked well and what might need some changes. This reflection is key to improving your future scientific endeavors."
        }
      ],
      "flashcards": [
        {
          "id": "general-science-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "general-science-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "general-science-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "general-science-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "general-science-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting research design, model revision, and scientific communication."
        },
        {
          "id": "general-science-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "general-science-401-l14",
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
          "id": "general-science-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on research design setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed scientific communication decisions"
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
          "id": "general-science-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "general-science-401-l15",
      "title": "Science IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "general-science-401-l15-q1",
          "text": "Which statement best explains evidence synthesis in Science?",
          "skillId": "general-science-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains evidence synthesis using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how evidence synthesis works in practice."
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
          "id": "general-science-401-l15-q2",
          "text": "What is the best first step when analyzing model revision?",
          "skillId": "general-science-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for model revision."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to model revision."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l15-q3",
          "text": "Which option shows strong reasoning about capstone scientific inquiry?",
          "skillId": "general-science-401-skill-reasoning",
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
              "text": "Use assumptions unrelated to capstone scientific inquiry."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "general-science-401-l15-q4",
          "text": "Why is spaced review useful for Science mastery?",
          "skillId": "general-science-401-skill-review",
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
          "id": "general-science-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Science IV Mastery Mastery Sprint",
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
                "label": "Confusion about evidence synthesis"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to model revision"
              },
              {
                "id": "l3",
                "label": "Weak transfer of capstone scientific inquiry under timing"
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
          "id": "general-science-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
