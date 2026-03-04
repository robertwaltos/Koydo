import type { LearningModule } from "@/lib/modules/types";

export const Biotechnology301Module: LearningModule = {
  "id": "biotechnology-301",
  "title": "Biotechnology Systems and Analysis",
  "description": "Level 301 curriculum in Biotechnology, emphasizing genetic engineering, bioprocess systems, clinical translation, bioethics, and real-world decision quality through structured practice and assessment.",
  "subject": "Biotechnology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "stem",
    "life-sciences"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for genetic engineering and bioprocess systems",
    "Apply structured methods to plan, execute, and review clinical translation tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Biotechnology"
  ],
  "lessons": [
    {
      "id": "biotechnology-301-l01",
      "title": "Core Models for Biotechnology",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biotechnology-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In our Biotechnology 301 course, it is essential to use clear and precise language to communicate effectively. This helps us to define the boundaries of our work, which means understanding what is included in our studies and what is not. We will also learn how to identify the main focus of our analysis, which is the specific area we are examining closely. Additionally, we will ensure that everyone uses the same terms consistently. By doing this, we can make decisions that are easy to compare across different teams. This shared understanding will help us collaborate more effectively and achieve our goals together."
        },
        {
          "id": "biotechnology-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To succeed in the field of Biotechnology, it's essential to grasp the underlying reasons for various events, not merely their outcomes. In this lesson, we will delve into the process of identifying our assumptions, dependencies, and constraints. By understanding these elements, we can direct our efforts towards tackling the root causes of problems instead of just addressing the symptoms. This approach will help us develop more effective and sustainable solutions in our biotechnological endeavors.\nContext recap: To succeed in the field of Biotechnology, it's essential to grasp the underlying reasons for various events, not merely their outcomes. In this lesson, we will delve into the process of identifying our assumptions, dependencies, and constraints. By understanding these elements, we can direct our efforts towards tackling the root causes of problems instead of just addressing the symptoms. This approach will help us develop more effective and sustainable solutions in our biotechnological endeavors."
        },
        {
          "id": "biotechnology-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we will introduce important practices that are essential for reliable work in Biotechnology. We will discuss the importance of having clear evidence standards, maintaining discipline in logging our work, and creating accountability loops. These practices are non-negotiable and help ensure that our projects are executed reliably and effectively.\nContext recap: In this section, we will introduce important practices that are essential for reliable work in Biotechnology. We will discuss the importance of having clear evidence standards, maintaining discipline in logging our work, and creating accountability loops. These practices are non-negotiable and help ensure that our projects are executed reliably and effectively."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "biotechnology-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "biotechnology-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "biotechnology-301-l02",
      "title": "Biotechnology Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "biotechnology-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will have the opportunity to create a complete workflow for genetic engineering and bioprocess systems. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, outlining the expected outputs, and determining rollback triggers in case adjustments are needed. This hands-on experience will help you understand the complexities of biotechnology workflows.\nContext recap: In this interactive lab, you will have the opportunity to create a complete workflow for genetic engineering and bioprocess systems. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, outlining the expected outputs, and determining rollback triggers in case adjustments are needed. This hands-on experience will help you understand the complexities of biotechnology workflows."
        },
        {
          "id": "biotechnology-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of logging every decision made during our projects. Each decision should be accompanied by a clear rationale, an expected effect, and a point for verification. This practice will enable us to analyze our work after completion, helping us learn from our experiences and improve future projects.\nContext recap: In this recap, we will emphasize the importance of logging every decision made during our projects. Each decision should be accompanied by a clear rationale, an expected effect, and a point for verification. This practice will enable us to analyze our work after completion, helping us learn from our experiences and improve future projects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-301-l02-act1",
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
          "id": "biotechnology-301-l02-act2",
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
      "id": "biotechnology-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-301-l03-q1",
          "text": "Which action best improves decisions in genetic engineering work?",
          "skillId": "biotechnology-301-skill-core",
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
          "id": "biotechnology-301-l03-q2",
          "text": "In bioprocess systems, what is the strongest indicator of process quality?",
          "skillId": "biotechnology-301-skill-process",
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
          "id": "biotechnology-301-l03-q3",
          "text": "When evaluating clinical translation, which practice supports trustworthy conclusions?",
          "skillId": "biotechnology-301-skill-eval",
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
          "id": "biotechnology-301-l03-q4",
          "text": "A mature bioethics strategy should prioritize:",
          "skillId": "biotechnology-301-skill-strategy",
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
      "id": "biotechnology-301-l04",
      "title": "Methods, Metrics, and Failure Modes in Biotechnology",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When we choose methods for our biotechnology projects, it's important to think about several key factors. These include the constraints we face, the quality of the information we have, and the potential costs that could arise from making mistakes. In this lesson, you will explore how to compare different options and explain why certain methods are more suitable for specific biotechnology situations. This will help you make smart and informed decisions in your work.\nContext recap: When we choose methods for our biotechnology projects, it's important to think about several key factors. These include the constraints we face, the quality of the information we have, and the potential costs that could arise from making mistakes. In this lesson, you will explore how to compare different options and explain why certain methods are more suitable for specific biotechnology situations. This will help you make smart and informed decisions in your work."
        },
        {
          "id": "biotechnology-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-structured metric architecture is essential for tracking our progress in biotechnology. It connects leading indicators, which show early signs of performance, with lagging outcomes, which reflect the results of our efforts, and diagnostic measures that help us understand what is happening. This system allows teams to detect any deviations early and respond thoughtfully to keep projects on track.\nContext recap: A well-structured metric architecture is essential for tracking our progress in biotechnology. It connects leading indicators, which show early signs of performance, with lagging outcomes, which reflect the results of our efforts, and diagnostic measures that help us understand what is happening. This system allows teams to detect any deviations early and respond thoughtfully to keep projects on track."
        },
        {
          "id": "biotechnology-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific plans to address each type of issue, rather than using generic solutions. This targeted approach will help us improve our processes and outcomes in biotechnology.\nContext recap: In this recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific plans to address each type of issue, rather than using generic solutions. This targeted approach will help us improve our processes and outcomes in biotechnology."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "biotechnology-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "biotechnology-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "biotechnology-301-l05",
      "title": "Case Studio: Improve a Biotechnology System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biotechnology-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic biotechnology scenario into its key components. This includes identifying the main objective, understanding the context, recognizing constraints, and exploring various intervention options. You will also take notes on the trade-offs involved in each option, which will help you think critically about the best solutions.\nContext recap: In this interactive case study, you will break down a realistic biotechnology scenario into its key components. This includes identifying the main objective, understanding the context, recognizing constraints, and exploring various intervention options. You will also take notes on the trade-offs involved in each option, which will help you think critically about the best solutions."
        },
        {
          "id": "biotechnology-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a structured improvement proposal based on your analysis of the case study. This proposal will include clear success criteria, mapping out who is responsible for each part of the plan, and establishing a timeline for follow-up actions. This exercise will help you practice how to communicate your ideas effectively and ensure that everyone is on the same page.\nContext recap: In this recap, you will present a structured improvement proposal based on your analysis of the case study. This proposal will include clear success criteria, mapping out who is responsible for each part of the plan, and establishing a timeline for follow-up actions. This exercise will help you practice how to communicate your ideas effectively and ensure that everyone is on the same page."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve clinical translation outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "biotechnology-301-l05-act2",
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
      "id": "biotechnology-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-301-l06-q1",
          "text": "Which action best improves decisions in genetic engineering work?",
          "skillId": "biotechnology-301-skill-core",
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
          "id": "biotechnology-301-l06-q2",
          "text": "In bioprocess systems, what is the strongest indicator of process quality?",
          "skillId": "biotechnology-301-skill-process",
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
          "id": "biotechnology-301-l06-q3",
          "text": "When evaluating clinical translation, which practice supports trustworthy conclusions?",
          "skillId": "biotechnology-301-skill-eval",
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
          "id": "biotechnology-301-l06-q4",
          "text": "A mature bioethics strategy should prioritize:",
          "skillId": "biotechnology-301-skill-strategy",
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
