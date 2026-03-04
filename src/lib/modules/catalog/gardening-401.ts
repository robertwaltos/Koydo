import type { LearningModule } from "@/lib/modules/types";

export const Gardening401Module: LearningModule = {
  "id": "gardening-401",
  "title": "Gardening Mastery and Leadership",
  "description": "Level 401 curriculum in Gardening, emphasizing soil systems, plant care, season planning, integrated pest management, and real-world decision quality through structured practice and assessment.",
  "subject": "Agriculture",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sustainability",
    "applied-science"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for soil systems and plant care",
    "Apply structured methods to plan, execute, and review season planning tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Gardening"
  ],
  "lessons": [
    {
      "id": "gardening-401-l01",
      "title": "Core Models for Gardening",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "gardening-401-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-401-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In advanced gardening, using clear and specific language is essential for success. We will explore how to establish well-defined boundaries for our gardening projects, which helps us understand what is included and what is not. Additionally, we will identify the main focus of our analysis, which is the key area we want to study or improve. It's also crucial that everyone involved uses the same terms and definitions. This consistency allows us to make informed decisions and compare our results across different teams effectively, leading to better collaboration and outcomes in our gardening efforts."
        },
        {
          "id": "gardening-401-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To truly succeed in gardening, it's important to grasp the reasons behind our outcomes, rather than just looking at the outcomes themselves. In this lesson, we will delve into our assumptions about gardening practices, examine how different factors are interconnected, and identify any limitations we may encounter. By doing this, we will learn to focus on solving the root causes of any challenges we face, instead of merely addressing the symptoms. This deeper understanding will empower us to make more effective decisions in our gardening efforts.\nContext recap: To truly succeed in gardening, it's important to grasp the reasons behind our outcomes, rather than just looking at the outcomes themselves. In this lesson, we will delve into our assumptions about gardening practices, examine how different factors are interconnected, and identify any limitations we may encounter. By doing this, we will learn to focus on solving the root causes of any challenges we face, instead of merely addressing the symptoms. This deeper understanding will empower us to make more effective decisions in our gardening efforts."
        },
        {
          "id": "gardening-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we will introduce important practices that help ensure our gardening projects run smoothly. We will discuss the importance of maintaining high standards for evidence, keeping detailed records, and establishing clear accountability measures. These practices are essential for achieving reliable and successful outcomes in our gardening efforts.\nContext recap: In this section, we will introduce important practices that help ensure our gardening projects run smoothly. We will discuss the importance of maintaining high standards for evidence, keeping detailed records, and establishing clear accountability measures. These practices are essential for achieving reliable and successful outcomes in our gardening efforts."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-401-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "gardening-401-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "gardening-401-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "gardening-401-l02",
      "title": "Gardening Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "gardening-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive activity, you will create a detailed workflow for managing soil systems and caring for plants. This includes identifying the necessary inputs, setting up checkpoints to monitor progress, defining expected outputs, and establishing rollback triggers to address any issues that arise. This hands-on experience will enhance your understanding of effective gardening practices.\nContext recap: In this interactive activity, you will create a detailed workflow for managing soil systems and caring for plants. This includes identifying the necessary inputs, setting up checkpoints to monitor progress, defining expected outputs, and establishing rollback triggers to address any issues that arise. This hands-on experience will enhance your understanding of effective gardening practices."
        },
        {
          "id": "gardening-401-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of documenting every decision made during our gardening projects. Each decision should include the reasoning behind it, the expected outcomes, and a point for verification. This approach will allow us to analyze our actions after the project is completed and learn from our experiences.\nContext recap: In this recap, we will emphasize the importance of documenting every decision made during our gardening projects. Each decision should include the reasoning behind it, the expected outcomes, and a point for verification. This approach will allow us to analyze our actions after the project is completed and learn from our experiences."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-401-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Match",
          "description": "Match each workflow component to its strongest governance function.",
          "pairs": [
            {
              "left": "Input audit",
              "right": "Prevents low-quality data from entering the system"
            },
            {
              "left": "Checkpoint gate",
              "right": "Stops propagation of known defects"
            },
            {
              "left": "Outcome metric",
              "right": "Measures whether the objective was met"
            },
            {
              "left": "Retrospective log",
              "right": "Captures lessons for next iteration"
            }
          ]
        },
        {
          "id": "gardening-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort items into strategic, operational, and quality-risk groups.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Misaligned goals",
              "bucket": "Strategic"
            },
            {
              "text": "Unclear handoff timing",
              "bucket": "Operational"
            },
            {
              "text": "Inconsistent acceptance criteria",
              "bucket": "Quality"
            },
            {
              "text": "No benchmark baseline",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "gardening-401-l03-q1",
          "text": "Which action best improves decisions in soil systems work?",
          "skillId": "gardening-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip metrics and move directly to execution"
            },
            {
              "id": "d",
              "text": "Avoid documenting rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability."
        },
        {
          "id": "gardening-401-l03-q2",
          "text": "In plant care, what is the strongest indicator of process quality?",
          "skillId": "gardening-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Output speed only"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured iteration without logs"
            },
            {
              "id": "d",
              "text": "One-time performance anecdotes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality processes are observable, repeatable, and measurable."
        },
        {
          "id": "gardening-401-l03-q3",
          "text": "When evaluating season planning, which practice supports trustworthy conclusions?",
          "skillId": "gardening-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore edge cases"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and failure analysis"
            },
            {
              "id": "c",
              "text": "Change targets after results are known"
            },
            {
              "id": "d",
              "text": "Remove context from findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent overclaiming and improve design quality."
        },
        {
          "id": "gardening-401-l03-q4",
          "text": "A mature integrated pest management strategy should prioritize:",
          "skillId": "gardening-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Single-metric optimization at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition"
            },
            {
              "id": "d",
              "text": "No post-implementation review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced scorecards align long-term performance with accountability."
        }
      ]
    },
    {
      "id": "gardening-401-l04",
      "title": "Methods, Metrics, and Failure Modes in Gardening",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-401-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When choosing the best methods for gardening, it's important to think about several key factors. First, we need to recognize any limitations we might face, such as space, resources, or time. Next, we should evaluate the quality of the information we have—this means looking at how reliable and accurate our sources are. Finally, we must consider the potential costs of making mistakes, as errors can lead to wasted time and resources. In this lesson, you will explore and compare different gardening methods. You will also learn to explain why certain methods are better suited for specific gardening situations. This process of critical thinking will empower you to make informed and effective choices in your gardening journey."
        },
        {
          "id": "gardening-401-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "In this example, we will delve into the process of creating a metric architecture that effectively links leading indicators, lagging outcomes, and diagnostic measures. This structured approach allows teams to spot any changes or deviations from what we expect to see in our gardening results at an early stage. By doing so, we can respond thoughtfully and strategically, ensuring that our gardening practices not only remain effective but also continue to improve over time. This proactive method helps us maintain a healthy garden and achieve our goals more efficiently.\nContext recap: In this example, we will delve into the process of creating a metric architecture that effectively links leading indicators, lagging outcomes, and diagnostic measures. This structured approach allows teams to spot any changes or deviations from what we expect to see in our gardening results at an early stage. By doing so, we can respond thoughtfully and strategically, ensuring that our gardening practices not only remain effective but also continue to improve over time. This proactive method helps us maintain a healthy garden and achieve our goals more efficiently."
        },
        {
          "id": "gardening-401-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will categorize different types of failures that can occur in gardening projects. These include issues related to data, processes, execution, and governance. By organizing failures in this way, we can create specific plans to address and mitigate these issues, rather than relying on generic solutions.\nContext recap: In this recap, we will categorize different types of failures that can occur in gardening projects. These include issues related to data, processes, execution, and governance. By organizing failures in this way, we can create specific plans to address and mitigate these issues, rather than relying on generic solutions."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-401-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "gardening-401-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "gardening-401-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "gardening-401-l05",
      "title": "Case Studio: Improve a Gardening System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "gardening-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic gardening scenario into its key components. This includes identifying the main objectives, understanding the context, recognizing any constraints, and exploring various intervention options. You will also note the trade-offs involved in each option, which will help you make better decisions.\nContext recap: In this interactive case study, you will break down a realistic gardening scenario into its key components. This includes identifying the main objectives, understanding the context, recognizing any constraints, and exploring various intervention options. You will also note the trade-offs involved in each option, which will help you make better decisions."
        },
        {
          "id": "gardening-401-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a structured improvement proposal based on the case study. Your proposal should include clear success criteria, identify who will be responsible for each part of the plan, and outline a timeline for follow-up actions. This exercise will help you practice effective communication and project management skills.\nContext recap: In this recap, you will present a structured improvement proposal based on the case study. Your proposal should include clear success criteria, identify who will be responsible for each part of the plan, and outline a timeline for follow-up actions. This exercise will help you practice effective communication and project management skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-401-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve season planning outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "gardening-401-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect interventions with the most likely system-level effects.",
          "pairs": [
            {
              "left": "Tighter intake criteria",
              "right": "Higher signal quality and lower downstream rework"
            },
            {
              "left": "Checkpoint automation",
              "right": "Faster detection of preventable defects"
            },
            {
              "left": "Post-run retrospective",
              "right": "Improved adaptation in later cycles"
            },
            {
              "left": "Cross-team briefing",
              "right": "Reduced ambiguity at handoff boundaries"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-401-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "gardening-401-l06-q1",
          "text": "Which action best improves decisions in soil systems work?",
          "skillId": "gardening-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip metrics and move directly to execution"
            },
            {
              "id": "d",
              "text": "Avoid documenting rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability."
        },
        {
          "id": "gardening-401-l06-q2",
          "text": "In plant care, what is the strongest indicator of process quality?",
          "skillId": "gardening-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Output speed only"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured iteration without logs"
            },
            {
              "id": "d",
              "text": "One-time performance anecdotes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality processes are observable, repeatable, and measurable."
        },
        {
          "id": "gardening-401-l06-q3",
          "text": "When evaluating season planning, which practice supports trustworthy conclusions?",
          "skillId": "gardening-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore edge cases"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and failure analysis"
            },
            {
              "id": "c",
              "text": "Change targets after results are known"
            },
            {
              "id": "d",
              "text": "Remove context from findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent overclaiming and improve design quality."
        },
        {
          "id": "gardening-401-l06-q4",
          "text": "A mature integrated pest management strategy should prioritize:",
          "skillId": "gardening-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Single-metric optimization at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition"
            },
            {
              "id": "d",
              "text": "No post-implementation review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced scorecards align long-term performance with accountability."
        }
      ]
    }
  ]
};
