import type { LearningModule } from "@/lib/modules/types";

export const SocialStudiesUs301Module: LearningModule = {
  "id": "social-studies-us-301",
  "title": "US Policy, Institutions, and Change",
  "description": "Evaluate policy choices, institutional tradeoffs, and civic outcomes in the United States.",
  "subject": "Social Studies US",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Social Studies US",
    "Apply Civic Evidence Analysis strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "social-studies-us-301-l01",
      "title": "Institutional Design and Incentives",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "social-studies-us-301-l01-c1",
          "title": "Institutional Design and Incentives Overview",
          "content": "In this lesson, we will dive into the fascinating concept of institutional design. This idea helps us understand how different policies and organizations interact and function together. By learning about institutional design, we can see how decisions are made and how they affect our lives. Our main goal is to develop critical thinking skills that allow us to recognize strong reasoning. This means we will practice identifying good arguments and evidence before we start solving problems. By improving these skills, we will be better equipped to make informed decisions and gain a clearer understanding of the world around us.\nContext recap: In this lesson, we will dive into the fascinating concept of institutional design. This idea helps us understand how different policies and organizations interact and function together. By learning about institutional design, we can see how decisions are made and how they affect our lives. Our main goal is to develop critical thinking skills that allow us to recognize strong reasoning.\nWhy this matters: Institutional Design and Incentives Overview helps learners in Social Studies US connect ideas from US Policy, Institutions, and Change to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "social-studies-us-301-l01-c2",
          "title": "Core Concept",
          "content": "In this part of our lesson, we will explore the important relationship between institutional design and the impact of policies. To begin, we will clearly define the main goal we aim to achieve. This could be anything from improving education to enhancing public health. Next, we will gather evidence or outline specific steps that can help us reach our goal. By doing this, we can better understand how to create effective policies that lead to positive changes in our communities. This process is essential because it allows us to think critically about how our decisions can shape the world around us and make it a better place for everyone.\nContext recap: In this part of our lesson, we will explore the important relationship between institutional design and the impact of policies. To begin, we will clearly define the main goal we aim to achieve. This could be anything from improving education to enhancing public health. Next, we will gather evidence or outline specific steps that can help us reach our goal.\nWhy this matters: Core Concept helps learners in Social Studies US connect ideas from US Policy, Institutions, and Change to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "social-studies-us-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's go through a guided example together! First, we will define a specific goal we want to achieve. Next, we will apply a strategy that helps us understand how to create an impact through policy. Finally, we will check our results to see if we reached our goal. This step-by-step approach will help us learn how to think critically about policy-making.\nContext recap: Let's go through a guided example together! First, we will define a specific goal we want to achieve. Next, we will apply a strategy that helps us understand how to create an impact through policy. Finally, we will check our results to see if we reached our goal."
        },
        {
          "id": "social-studies-us-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Try applying the same process we just learned to a new situation. After you come up with your approach, explain in one clear sentence why you believe your method is valid. This exercise will help you practice your reasoning skills and apply what you've learned in different contexts.\nContext recap: Now it's your turn! Try applying the same process we just learned to a new situation. After you come up with your approach, explain in one clear sentence why you believe your method is valid. This exercise will help you practice your reasoning skills and apply what you've learned in different contexts.\nContext recap: Now it's your turn! Try applying the same process we just learned to a new situation. After you come up with your approach, explain in one clear sentence why you believe your method is valid. This exercise will help you practice your reasoning skills and apply what you've learned in different contexts.\nWhy this matters: Transfer Prompt helps learners in Social Studies US connect ideas from US Policy, Institutions, and Change to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-us-301-l01-f1",
          "front": "institutional design",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "social-studies-us-301-l01-f2",
          "front": "policy impact",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "social-studies-us-301-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "social-studies-us-301-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about institutional design and policy impact."
        },
        {
          "id": "social-studies-us-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Social Studies US vocabulary."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l02",
      "title": "Policy Impact Frameworks",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about institutional design from this lesson.",
          "Explain where policy impact appears in real life.",
          "Describe one question you still have about policy and institutional analysis."
        ]
      },
      "interactiveActivities": [
        {
          "id": "social-studies-us-301-l02-ia1",
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
                "label": "Set a goal for institutional design",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for policy impact",
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
          "id": "social-studies-us-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on policy impact and write one reflection."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l03",
      "title": "Checkpoint: US Public Systems",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-301-l03-q1",
          "text": "Which statement best explains institutional design in Social Studies US?",
          "skillId": "social-studies-us-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains institutional design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how institutional design works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Social Studies US."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l03-q2",
          "text": "What is the best first step when analyzing policy impact?",
          "skillId": "social-studies-us-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for policy impact."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to policy impact."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l03-q3",
          "text": "Which option shows strong reasoning about policy and institutional analysis?",
          "skillId": "social-studies-us-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to policy and institutional analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l03-q4",
          "text": "Why is spaced review useful for Social Studies US mastery?",
          "skillId": "social-studies-us-301-skill-review",
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
          "id": "social-studies-us-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: US Public Systems",
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
                "label": "Confusion about institutional design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to policy impact"
              },
              {
                "id": "l3",
                "label": "Weak transfer of policy and institutional analysis under timing"
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
          "id": "social-studies-us-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l04",
      "title": "Rights, Equity, and Tradeoffs",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "social-studies-us-301-l04-c1",
          "title": "Rights, Equity, and Tradeoffs Focus",
          "content": "In this lesson, we will deepen our understanding of civic deliberation by using structured reasoning. We will move from simply understanding concepts to making informed decisions. This approach will help us think critically about our rights and responsibilities as citizens and how they relate to equity and trade-offs in society.\nContext recap: In this lesson, we will deepen our understanding of civic deliberation by using structured reasoning. We will move from simply understanding concepts to making informed decisions. This approach will help us think critically about our rights and responsibilities as citizens and how they relate to equity and trade-offs in society."
        },
        {
          "id": "social-studies-us-301-l04-c2",
          "title": "Method Steps",
          "content": "In this lesson, we will follow three important steps to help us think carefully about our choices. Step 1 is to clearly identify what question or issue we are being asked to consider. This means we need to understand the problem or topic at hand. Step 2 is to choose a strategy that aligns with civic deliberation, which is a way of discussing and thinking about community issues together. Finally, Step 3 is to support our decisions with evidence, which means we will use facts and information to explain why we made our choices. By following these steps, we can make thoughtful and informed decisions that reflect our values and beliefs.\nContext recap: In this lesson, we will follow three important steps to help us think carefully about our choices. Step 1 is to clearly identify what question or issue we are being asked to consider. This means we need to understand the problem or topic at hand. Step 2 is to choose a strategy that aligns with civic deliberation, which is a way of discussing and thinking about community issues together.\nWhy this matters: Method Steps helps learners in Social Studies US connect ideas from US Policy, Institutions, and Change to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "social-studies-us-301-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn, it's important to be aware of common mistakes that can happen. Some errors include skipping the setup process, using assumptions that are not related to the topic, or failing to verify our final results. By recognizing these pitfalls, we can improve our reasoning and decision-making skills.\nContext recap: As we learn, it's important to be aware of common mistakes that can happen. Some errors include skipping the setup process, using assumptions that are not related to the topic, or failing to verify our final results. By recognizing these pitfalls, we can improve our reasoning and decision-making skills."
        },
        {
          "id": "social-studies-us-301-l04-c4",
          "title": "Independent Try",
          "content": "Now, let's practice on our own! Solve a similar problem and then compare your process to the steps we discussed in the lesson. This will help you see how well you understand the material and where you might need to improve.\nContext recap: Now, let's practice on our own! Solve a similar problem and then compare your process to the steps we discussed in the lesson. This will help you see how well you understand the material and where you might need to improve.\nContext recap: Now, let's practice on our own! Solve a similar problem and then compare your process to the steps we discussed in the lesson. This will help you see how well you understand the material and where you might need to improve. Context recap: Now, let's practice on our own!\nWhy this matters: Independent Try helps learners in Social Studies US connect ideas from US Policy, Institutions, and Change to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-us-301-l04-f1",
          "front": "civic deliberation",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "social-studies-us-301-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "social-studies-us-301-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "social-studies-us-301-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for civic deliberation scenarios."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l05",
      "title": "Federal-State Governance Tensions",
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
          "id": "social-studies-us-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "civic deliberation Concept"
              },
              {
                "id": "process",
                "label": "evidence in public argument Process"
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
          "id": "social-studies-us-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a civic deliberation challenge."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l06",
      "title": "Checkpoint: Civic Evidence Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-301-l06-q1",
          "text": "Which statement best explains civic deliberation in Social Studies US?",
          "skillId": "social-studies-us-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains civic deliberation using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how civic deliberation works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Social Studies US."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l06-q2",
          "text": "What is the best first step when analyzing evidence in public argument?",
          "skillId": "social-studies-us-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence in public argument."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence in public argument."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l06-q3",
          "text": "Which option shows strong reasoning about policy and institutional analysis?",
          "skillId": "social-studies-us-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to policy and institutional analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l06-q4",
          "text": "Why is spaced review useful for Social Studies US mastery?",
          "skillId": "social-studies-us-301-skill-review",
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
          "id": "social-studies-us-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Civic Evidence Analysis",
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
                "label": "Confusion about civic deliberation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence in public argument"
              },
              {
                "id": "l3",
                "label": "Weak transfer of policy and institutional analysis under timing"
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
          "id": "social-studies-us-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l07",
      "title": "Media Literacy and Public Reasoning",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "social-studies-us-301-l07-c1",
          "title": "Media Literacy and Public Reasoning Setup",
          "content": "Before we start our public argument, it's important to use evidence to organize our approach. Planning ahead can significantly improve both the quality of our arguments and the speed at which we can present them. This preparation will help us communicate our ideas more effectively.\nContext recap: Before we start our public argument, it's important to use evidence to organize our approach. Planning ahead can significantly improve both the quality of our arguments and the speed at which we can present them. This preparation will help us communicate our ideas more effectively."
        },
        {
          "id": "social-studies-us-301-l07-c2",
          "title": "Decision Rules",
          "content": "When we encounter different choices that seem to compete with each other, we can use a helpful rule to guide our decision-making. This rule suggests that we should always select the option that is backed by the strongest evidence and has the clearest connection to what we want to achieve. By following this strategy, we can make informed decisions that are well-supported and lead us closer to our goals. It’s important to think critically about the information we have and how it relates to what we want to accomplish.\nContext recap: When we encounter different choices that seem to compete with each other, we can use a helpful rule to guide our decision-making. This rule suggests that we should always select the option that is backed by the strongest evidence and has the clearest connection to what we want to achieve. By following this strategy, we can make informed decisions that are well-supported and lead us closer to our goals. It’s important to think critically about the information we have and how it relates to what we want to accomplish.\nContext recap: When we encounter different choices that seem to compete with each other, we can use a helpful rule to guide our decision-making. This rule suggests that we should always select the option that is backed by the strongest evidence and has the clearest connection to what we want to achieve. By following this strategy, we can make informed decisions that are well-supported and lead us closer to our goals. It’s important to think critically about the information we have and how it relates to what we want to accomplish.\nWhy this matters: Decision Rules helps learners in Social Studies US connect ideas from US Policy, Institutions, and Change to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "social-studies-us-301-l07-c3",
          "title": "Quality Control",
          "content": "To ensure the quality of our work, we should check for three important things: accuracy, completeness, and alignment with our original objective. By focusing on these aspects, we can enhance the effectiveness of our arguments and ensure they are well-founded.\nContext recap: To ensure the quality of our work, we should check for three important things: accuracy, completeness, and alignment with our original objective. By focusing on these aspects, we can enhance the effectiveness of our arguments and ensure they are well-founded.\nContext recap: To ensure the quality of our work, we should check for three important things: accuracy, completeness, and alignment with our original objective. By focusing on these aspects, we can enhance the effectiveness of our arguments and ensure they are well-founded. Context recap: To ensure the quality of our work, we should check for three important things: accuracy, completeness, and alignment with our original objective. By focusing on these aspects, we can enhance the effectiveness of our arguments and ensure they are well-founded."
        },
        {
          "id": "social-studies-us-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "As we wrap up our practice, write down one action you would like to repeat in your next round and one action you would like to improve. This reflection will help you grow and develop your skills in public reasoning and media literacy.\nContext recap: As we wrap up our practice, write down one action you would like to repeat in your next round and one action you would like to improve. This reflection will help you grow and develop your skills in public reasoning and media literacy.\nContext recap: As we wrap up our practice, write down one action you would like to repeat in your next round and one action you would like to improve. This reflection will help you grow and develop your skills in public reasoning and media literacy. Context recap: As we wrap up our practice, write down one action you would like to repeat in your next round and one action you would like to improve. This reflection will help you grow and develop your skills in public reasoning and media literacy."
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-us-301-l07-f1",
          "front": "evidence in public argument",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "social-studies-us-301-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "social-studies-us-301-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "social-studies-us-301-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on evidence in public argument."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l08",
      "title": "Deliberation Workshop",
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
          "id": "social-studies-us-301-l08-ia1",
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
          "id": "social-studies-us-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l09",
      "title": "Review: US Civic Systems Thinking",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-301-l09-q1",
          "text": "Which statement best explains policy impact in Social Studies US?",
          "skillId": "social-studies-us-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains policy impact using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how policy impact works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Social Studies US."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l09-q2",
          "text": "What is the best first step when analyzing evidence in public argument?",
          "skillId": "social-studies-us-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence in public argument."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence in public argument."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l09-q3",
          "text": "Which option shows strong reasoning about policy and institutional analysis?",
          "skillId": "social-studies-us-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to policy and institutional analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l09-q4",
          "text": "Why is spaced review useful for Social Studies US mastery?",
          "skillId": "social-studies-us-301-skill-review",
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
          "id": "social-studies-us-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: US Civic Systems Thinking",
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
                "label": "Confusion about policy impact"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence in public argument"
              },
              {
                "id": "l3",
                "label": "Weak transfer of policy and institutional analysis under timing"
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
          "id": "social-studies-us-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l10",
      "title": "Mastery: US Social Studies III",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-301-l10-q1",
          "text": "Which statement best explains institutional design in Social Studies US?",
          "skillId": "social-studies-us-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains institutional design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how institutional design works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Social Studies US."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l10-q2",
          "text": "What is the best first step when analyzing civic deliberation?",
          "skillId": "social-studies-us-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for civic deliberation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to civic deliberation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l10-q3",
          "text": "Which option shows strong reasoning about policy and institutional analysis?",
          "skillId": "social-studies-us-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to policy and institutional analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l10-q4",
          "text": "Why is spaced review useful for Social Studies US mastery?",
          "skillId": "social-studies-us-301-skill-review",
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
          "id": "social-studies-us-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: US Social Studies III",
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
                "label": "Confusion about institutional design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to civic deliberation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of policy and institutional analysis under timing"
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
          "id": "social-studies-us-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l11",
      "title": "Applied Social Studies US Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using civic deliberation.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "social-studies-us-301-l11-ia1",
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
                "label": "Tag repeated mistakes in policy impact",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on evidence in public argument",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l12",
      "title": "US Social Studies III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-301-l12-q1",
          "text": "Which statement best explains institutional design in Social Studies US?",
          "skillId": "social-studies-us-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains institutional design using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how institutional design works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Social Studies US."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l12-q2",
          "text": "What is the best first step when analyzing evidence in public argument?",
          "skillId": "social-studies-us-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for evidence in public argument."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to evidence in public argument."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l12-q3",
          "text": "Which option shows strong reasoning about policy and institutional analysis?",
          "skillId": "social-studies-us-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to policy and institutional analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l12-q4",
          "text": "Why is spaced review useful for Social Studies US mastery?",
          "skillId": "social-studies-us-301-skill-review",
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
          "id": "social-studies-us-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: US Social Studies III Mastery Applied Retest",
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
                "label": "Confusion about institutional design"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to evidence in public argument"
              },
              {
                "id": "l3",
                "label": "Weak transfer of policy and institutional analysis under timing"
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
          "id": "social-studies-us-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l13",
      "title": "Social Studies US Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "social-studies-us-301-l13-c1",
          "title": "Scenario Brief",
          "content": "In this scenario, we will explore how different parts of our government work together. We will look at how laws are made, how citizens can share their opinions, and how we can use facts to support our arguments. This challenge will help us understand the importance of these elements in shaping our society.\nContext recap: In this scenario, we will explore how different parts of our government work together. We will look at how laws are made, how citizens can share their opinions, and how we can use facts to support our arguments. This challenge will help us understand the importance of these elements in shaping our society."
        },
        {
          "id": "social-studies-us-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, we should break it down into smaller, manageable decisions. For each decision point, we will choose a specific strategy to guide our actions. This will help us stay organized and focused as we work through the challenges presented in the scenario.\nContext recap: To tackle this scenario effectively, we should break it down into smaller, manageable decisions. For each decision point, we will choose a specific strategy to guide our actions. This will help us stay organized and focused as we work through the challenges presented in the scenario."
        },
        {
          "id": "social-studies-us-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Once we have our plan in place, it’s time to put it into action! As we execute our plan, we need to explain each step we take. It’s important to use evidence and facts to support our choices rather than making guesses. This will strengthen our arguments and help others understand our reasoning.\nContext recap: Once we have our plan in place, it’s time to put it into action! As we execute our plan, we need to explain each step we take. It’s important to use evidence and facts to support our choices rather than making guesses. This will strengthen our arguments and help others understand our reasoning.\nContext recap: Once we have our plan in place, it’s time to put it into action! As we execute our plan, we need to explain each step we take. It’s important to use evidence and facts to support our choices rather than making guesses. This will strengthen our arguments and help others understand our reasoning.\nWhy this matters: Execute and Justify helps learners in Social Studies US connect ideas from US Policy, Institutions, and Change to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "social-studies-us-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After we have completed our scenario, we should take a moment to evaluate the outcome. Let’s compare what we achieved with our original goals. We will identify what worked well and what might need some changes. This reflection will help us learn and improve for future challenges.\nContext recap: After we have completed our scenario, we should take a moment to evaluate the outcome. Let’s compare what we achieved with our original goals. We will identify what worked well and what might need some changes. This reflection will help us learn and improve for future challenges.\nContext recap: After we have completed our scenario, we should take a moment to evaluate the outcome. Let’s compare what we achieved with our original goals. We will identify what worked well and what might need some changes. This reflection will help us learn and improve for future challenges.\nWhy this matters: Evaluate Outcome helps learners in Social Studies US connect ideas from US Policy, Institutions, and Change to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-us-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "social-studies-us-301-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "social-studies-us-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "social-studies-us-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "social-studies-us-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting institutional design, civic deliberation, and evidence in public argument."
        },
        {
          "id": "social-studies-us-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l14",
      "title": "Social Studies US Coaching Clinic",
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
          "id": "social-studies-us-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on institutional design setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed evidence in public argument decisions"
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
          "id": "social-studies-us-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ]
    },
    {
      "id": "social-studies-us-301-l15",
      "title": "US Social Studies III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "social-studies-us-301-l15-q1",
          "text": "Which statement best explains policy impact in Social Studies US?",
          "skillId": "social-studies-us-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains policy impact using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how policy impact works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Social Studies US."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l15-q2",
          "text": "What is the best first step when analyzing civic deliberation?",
          "skillId": "social-studies-us-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for civic deliberation."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to civic deliberation."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l15-q3",
          "text": "Which option shows strong reasoning about policy and institutional analysis?",
          "skillId": "social-studies-us-301-skill-reasoning",
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
              "text": "Use assumptions unrelated to policy and institutional analysis."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "social-studies-us-301-l15-q4",
          "text": "Why is spaced review useful for Social Studies US mastery?",
          "skillId": "social-studies-us-301-skill-review",
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
          "id": "social-studies-us-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: US Social Studies III Mastery Mastery Sprint",
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
                "label": "Confusion about policy impact"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to civic deliberation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of policy and institutional analysis under timing"
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
          "id": "social-studies-us-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    }
  ]
};
