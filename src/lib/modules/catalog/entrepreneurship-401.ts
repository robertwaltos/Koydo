import type { LearningModule } from "@/lib/modules/types";

export const Entrepreneurship401Module: LearningModule = {
  "id": "entrepreneurship-401",
  "title": "Entrepreneurship Mastery and Leadership",
  "description": "Level 401 curriculum in Entrepreneurship, emphasizing opportunity discovery, business modeling, capital strategy, venture operations, and real-world decision quality through structured practice and assessment.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "business",
    "innovation"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for opportunity discovery and business modeling",
    "Apply structured methods to plan, execute, and review capital strategy tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Entrepreneurship"
  ],
  "lessons": [
    {
      "id": "entrepreneurship-401-l01",
      "title": "Core Models for Entrepreneurship",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-401-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In Entrepreneurship at level 401, it's essential to use clear and precise language. This means we need to define the boundaries of our work, identify the specific unit we are analyzing, and ensure that everyone is using the same terms. By doing this, we can make better decisions and compare our results across different teams effectively. Clear communication helps us all stay on the same page and work towards our common goals.\nContext recap: In Entrepreneurship at level 401, it's essential to use clear and precise language. This means we need to define the boundaries of our work, identify the specific unit we are analyzing, and ensure that everyone is using the same terms. By doing this, we can make better decisions and compare our results across different teams effectively. Clear communication helps us all stay on the same page and work towards our common goals."
        },
        {
          "id": "entrepreneurship-401-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To succeed in Entrepreneurship, it is crucial to understand not just the results of our actions but also the reasons behind them. This lesson focuses on mapping out our assumptions, dependencies, and any limitations we might face. By identifying the root causes of issues, we can create solutions that address the real problems instead of just treating the symptoms. This approach helps us make informed decisions that lead to better outcomes.\nContext recap: To succeed in Entrepreneurship, it is crucial to understand not just the results of our actions but also the reasons behind them. This lesson focuses on mapping out our assumptions, dependencies, and any limitations we might face. By identifying the root causes of issues, we can create solutions that address the real problems instead of just treating the symptoms. This approach helps us make informed decisions that lead to better outcomes."
        },
        {
          "id": "entrepreneurship-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we introduce important practices that are essential for reliable execution in our projects. These include setting clear standards for evidence, maintaining a disciplined approach to logging our activities, and establishing accountability loops. These practices ensure that we can track our progress and hold ourselves responsible for our actions, which is vital for achieving success in any entrepreneurial endeavor.\nContext recap: In this section, we introduce important practices that are essential for reliable execution in our projects. These include setting clear standards for evidence, maintaining a disciplined approach to logging our activities, and establishing accountability loops. These practices ensure that we can track our progress and hold ourselves responsible for our actions, which is vital for achieving success in any entrepreneurial endeavor."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-401-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "entrepreneurship-401-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "entrepreneurship-401-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "entrepreneurship-401-l02",
      "title": "Entrepreneurship Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, learners will have the opportunity to create a comprehensive workflow for discovering business opportunities and developing business models. This includes identifying the necessary inputs, setting up checkpoints to monitor progress, defining expected outputs, and establishing rollback triggers to address any issues that arise. This hands-on experience will help learners understand the importance of structured processes in entrepreneurship.\nContext recap: In this interactive lab, learners will have the opportunity to create a comprehensive workflow for discovering business opportunities and developing business models. This includes identifying the necessary inputs, setting up checkpoints to monitor progress, defining expected outputs, and establishing rollback triggers to address any issues that arise. This hands-on experience will help learners understand the importance of structured processes in entrepreneurship."
        },
        {
          "id": "entrepreneurship-401-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we emphasize the importance of logging every decision made during the entrepreneurial process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point. This practice allows us to analyze our choices after the fact, helping us learn from our experiences and improve our decision-making skills in future projects.\nContext recap: In this recap, we emphasize the importance of logging every decision made during the entrepreneurial process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point. This practice allows us to analyze our choices after the fact, helping us learn from our experiences and improve our decision-making skills in future projects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-401-l02-act1",
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
          "id": "entrepreneurship-401-l02-act2",
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
      "id": "entrepreneurship-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-401-l03-q1",
          "text": "Which action best improves decisions in opportunity discovery work?",
          "skillId": "entrepreneurship-401-skill-core",
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
          "id": "entrepreneurship-401-l03-q2",
          "text": "In business modeling, what is the strongest indicator of process quality?",
          "skillId": "entrepreneurship-401-skill-process",
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
          "id": "entrepreneurship-401-l03-q3",
          "text": "When evaluating capital strategy, which practice supports trustworthy conclusions?",
          "skillId": "entrepreneurship-401-skill-eval",
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
          "id": "entrepreneurship-401-l03-q4",
          "text": "A mature venture operations strategy should prioritize:",
          "skillId": "entrepreneurship-401-skill-strategy",
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
      "id": "entrepreneurship-401-l04",
      "title": "Methods, Metrics, and Failure Modes in Entrepreneurship",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When selecting methods for our entrepreneurial projects, we must consider various factors such as constraints, the quality of information available, and the potential cost of making mistakes. In this lesson, learners will compare different alternatives and justify their chosen methods based on specific scenarios in entrepreneurship. This critical thinking process is essential for making informed decisions that can lead to successful outcomes.\nContext recap: When selecting methods for our entrepreneurial projects, we must consider various factors such as constraints, the quality of information available, and the potential cost of making mistakes. In this lesson, learners will compare different alternatives and justify their chosen methods based on specific scenarios in entrepreneurship. This critical thinking process is essential for making informed decisions that can lead to successful outcomes."
        },
        {
          "id": "entrepreneurship-401-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-structured metric architecture is crucial for any entrepreneurial team. It connects leading indicators, which predict future performance, with lagging outcomes, which reflect past results, and diagnostic measures that help us understand our current situation. By establishing this framework, teams can detect any deviations from their goals early on and respond thoughtfully, ensuring they stay on track toward success.\nContext recap: A well-structured metric architecture is crucial for any entrepreneurial team. It connects leading indicators, which predict future performance, with lagging outcomes, which reflect past results, and diagnostic measures that help us understand our current situation. By establishing this framework, teams can detect any deviations from their goals early on and respond thoughtfully, ensuring they stay on track toward success."
        },
        {
          "id": "entrepreneurship-401-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific plans to address each type of issue rather than using generic solutions. This targeted approach helps us learn from our mistakes and improve our processes in the future.\nContext recap: In this recap, we categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific plans to address each type of issue rather than using generic solutions. This targeted approach helps us learn from our mistakes and improve our processes in the future."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-401-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "entrepreneurship-401-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "entrepreneurship-401-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "entrepreneurship-401-l05",
      "title": "Case Studio: Improve a Entrepreneurship System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, learners will break down a realistic entrepreneurial scenario into its key components. This includes identifying the main objective, understanding the context in which the business operates, recognizing any constraints that may limit options, and exploring various intervention strategies. Additionally, learners will take notes on the trade-offs involved in each option, which is crucial for making informed decisions.\nContext recap: In this interactive case study, learners will break down a realistic entrepreneurial scenario into its key components. This includes identifying the main objective, understanding the context in which the business operates, recognizing any constraints that may limit options, and exploring various intervention strategies. Additionally, learners will take notes on the trade-offs involved in each option, which is crucial for making informed decisions."
        },
        {
          "id": "entrepreneurship-401-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, learners will present a structured improvement proposal based on their analysis of the case study. This proposal will include clear success criteria, mapping out who is responsible for each part of the plan, and establishing a timeline for follow-up actions. This exercise helps learners practice articulating their ideas and ensures they understand the importance of planning and accountability in entrepreneurship.\nContext recap: In this recap, learners will present a structured improvement proposal based on their analysis of the case study. This proposal will include clear success criteria, mapping out who is responsible for each part of the plan, and establishing a timeline for follow-up actions. This exercise helps learners practice articulating their ideas and ensures they understand the importance of planning and accountability in entrepreneurship."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-401-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve capital strategy outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "entrepreneurship-401-l05-act2",
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
      "id": "entrepreneurship-401-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-401-l06-q1",
          "text": "Which action best improves decisions in opportunity discovery work?",
          "skillId": "entrepreneurship-401-skill-core",
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
          "id": "entrepreneurship-401-l06-q2",
          "text": "In business modeling, what is the strongest indicator of process quality?",
          "skillId": "entrepreneurship-401-skill-process",
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
          "id": "entrepreneurship-401-l06-q3",
          "text": "When evaluating capital strategy, which practice supports trustworthy conclusions?",
          "skillId": "entrepreneurship-401-skill-eval",
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
          "id": "entrepreneurship-401-l06-q4",
          "text": "A mature venture operations strategy should prioritize:",
          "skillId": "entrepreneurship-401-skill-strategy",
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
