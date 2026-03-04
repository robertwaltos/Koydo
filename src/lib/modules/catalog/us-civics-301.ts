import type { LearningModule } from "@/lib/modules/types";

export const UsCivics301Module: LearningModule = {
  "id": "us-civics-301",
  "title": "U.S. Civics Systems and Analysis",
  "description": "Level 301 curriculum in U.S. Civics, emphasizing constitutional principles, institutional design, public policy, civic participation, and real-world decision quality through structured practice and assessment.",
  "subject": "Social Studies",
  "tags": [
    "civics",
    "government",
    "history",
    "curriculum",
    "interactive"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for constitutional principles and institutional design",
    "Apply structured methods to plan, execute, and review public policy tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in U.S. Civics"
  ],
  "lessons": [
    {
      "id": "us-civics-301-l01",
      "title": "Core Models for U.S. Civics",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "us-civics-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In U.S. Civics at the 301 level, using clear and precise language is essential for effective communication. This involves establishing clear boundaries around the topics we are discussing, which helps everyone understand the context. Additionally, we need to identify the main unit we are analyzing, whether it's a specific law, policy, or civic issue. It's also crucial to ensure that everyone understands the terms we are using, as this promotes a common language among all participants. By achieving this clarity, we can make sure that decisions made by different teams can be compared fairly and accurately. This shared understanding not only enhances collaboration but also strengthens our ability to engage in meaningful discussions about civic matters.\nContext recap: In U.S. Civics at the 301 level, using clear and precise language is essential for effective communication. This involves establishing clear boundaries around the topics we are discussing, which helps everyone understand the context. Additionally, we need to identify the main unit we are analyzing, whether it's a specific law, policy, or civic issue.\nWhy this matters: Operating Vocabulary and Scope helps learners in Social Studies connect ideas from U.S. Civics Systems and Analysis to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "us-civics-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To truly succeed in understanding U.S. Civics, it is essential to grasp the reasons behind events, not merely their outcomes. This lesson will guide you in exploring our assumptions about civic issues, identifying how different factors are interconnected, and recognizing any limitations we may encounter. By focusing on the root causes of problems instead of just treating the symptoms, we can develop more effective solutions and interventions. This approach not only helps us understand the complexities of civic life but also empowers us to make meaningful changes that can positively impact our communities.\nContext recap: To truly succeed in understanding U.S. Civics, it is essential to grasp the reasons behind events, not merely their outcomes. This lesson will guide you in exploring our assumptions about civic issues, identifying how different factors are interconnected, and recognizing any limitations we may encounter. By focusing on the root causes of problems instead of just treating the symptoms, we can develop more effective solutions and interventions."
        },
        {
          "id": "us-civics-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this lesson, we introduce the importance of having strong evidence standards, maintaining discipline in logging our activities, and establishing clear accountability loops. These practices are essential for ensuring that our actions are reliable and effective. By adhering to these non-negotiable standards, we can build trust in our processes and outcomes, making sure that everyone is held accountable for their contributions.\nContext recap: In this lesson, we introduce the importance of having strong evidence standards, maintaining discipline in logging our activities, and establishing clear accountability loops. These practices are essential for ensuring that our actions are reliable and effective. By adhering to these non-negotiable standards, we can build trust in our processes and outcomes, making sure that everyone is held accountable for their contributions."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "us-civics-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "us-civics-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "us-civics-301-l02",
      "title": "U.S. Civics Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "us-civics-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive activity, learners will create a comprehensive workflow that outlines the principles of the Constitution and the design of our institutions. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, defining the expected outputs, and setting up rollback triggers to address any issues that arise. This hands-on experience will help learners understand how these components work together in practice.\nContext recap: In this interactive activity, learners will create a comprehensive workflow that outlines the principles of the Constitution and the design of our institutions. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, defining the expected outputs, and setting up rollback triggers to address any issues that arise. This hands-on experience will help learners understand how these components work together in practice."
        },
        {
          "id": "us-civics-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we emphasize the importance of documenting every decision made during the workflow process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point to ensure that we can analyze the outcomes later. This practice not only helps in understanding the decision-making process but also allows for reflection and improvement in future workflows.\nContext recap: In this recap, we emphasize the importance of documenting every decision made during the workflow process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point to ensure that we can analyze the outcomes later. This practice not only helps in understanding the decision-making process but also allows for reflection and improvement in future workflows."
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-301-l02-act1",
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
          "id": "us-civics-301-l02-act2",
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
      "id": "us-civics-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "us-civics-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "us-civics-301-l03-q1",
          "text": "Which action best improves decisions in constitutional principles work?",
          "skillId": "us-civics-301-skill-core",
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
          "id": "us-civics-301-l03-q2",
          "text": "In institutional design, what is the strongest indicator of process quality?",
          "skillId": "us-civics-301-skill-process",
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
          "id": "us-civics-301-l03-q3",
          "text": "When evaluating public policy, which practice supports trustworthy conclusions?",
          "skillId": "us-civics-301-skill-eval",
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
          "id": "us-civics-301-l03-q4",
          "text": "A mature civic participation strategy should prioritize:",
          "skillId": "us-civics-301-skill-strategy",
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
      "id": "us-civics-301-l04",
      "title": "Methods, Metrics, and Failure Modes in U.S. Civics",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "us-civics-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When selecting methods for our civics projects, we need to consider various factors such as constraints, the quality of information available, and the potential cost of making errors. In this lesson, learners will compare different alternatives and justify why a particular method is suitable for specific U.S. Civics scenarios. This critical thinking exercise will help them understand the importance of method selection in achieving successful outcomes.\nContext recap: When selecting methods for our civics projects, we need to consider various factors such as constraints, the quality of information available, and the potential cost of making errors. In this lesson, learners will compare different alternatives and justify why a particular method is suitable for specific U.S. Civics scenarios. This critical thinking exercise will help them understand the importance of method selection in achieving successful outcomes."
        },
        {
          "id": "us-civics-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-structured metric architecture connects leading indicators, which show early signs of progress, with lagging outcomes, which reflect the results of our actions. It also includes diagnostic measures that help teams identify any deviations from the expected path early on. By having this framework in place, teams can respond thoughtfully and make necessary adjustments to stay on track toward their goals.\nContext recap: A well-structured metric architecture connects leading indicators, which show early signs of progress, with lagging outcomes, which reflect the results of our actions. It also includes diagnostic measures that help teams identify any deviations from the expected path early on. By having this framework in place, teams can respond thoughtfully and make necessary adjustments to stay on track toward their goals."
        },
        {
          "id": "us-civics-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures in this way, we can create specific mitigation plans that address the root causes of each type of failure, rather than applying generic solutions. This targeted approach helps ensure that we learn from our mistakes and improve our processes over time.\nContext recap: In this recap, we categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures in this way, we can create specific mitigation plans that address the root causes of each type of failure, rather than applying generic solutions. This targeted approach helps ensure that we learn from our mistakes and improve our processes over time."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "us-civics-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "us-civics-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "us-civics-301-l05",
      "title": "Case Studio: Improve a U.S. Civics System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "us-civics-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, learners will break down a realistic scenario into its key components: the objective of the case, the context in which it occurs, the constraints that limit options, and the various intervention strategies available. Each option will include explicit notes on trade-offs, helping learners understand the complexities involved in making decisions within a civic framework.\nContext recap: In this interactive case study, learners will break down a realistic scenario into its key components: the objective of the case, the context in which it occurs, the constraints that limit options, and the various intervention strategies available. Each option will include explicit notes on trade-offs, helping learners understand the complexities involved in making decisions within a civic framework."
        },
        {
          "id": "us-civics-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, learners will present a structured improvement proposal based on their analysis of the case. This proposal will include clear success criteria, a mapping of who is responsible for each part of the plan, and a timeline for follow-up actions. This exercise encourages learners to think critically about how to implement changes effectively and ensures accountability in the improvement process.\nContext recap: In this recap, learners will present a structured improvement proposal based on their analysis of the case. This proposal will include clear success criteria, a mapping of who is responsible for each part of the plan, and a timeline for follow-up actions. This exercise encourages learners to think critically about how to implement changes effectively and ensures accountability in the improvement process."
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve public policy outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "us-civics-301-l05-act2",
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
      "id": "us-civics-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "us-civics-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "us-civics-301-l06-q1",
          "text": "Which action best improves decisions in constitutional principles work?",
          "skillId": "us-civics-301-skill-core",
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
          "id": "us-civics-301-l06-q2",
          "text": "In institutional design, what is the strongest indicator of process quality?",
          "skillId": "us-civics-301-skill-process",
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
          "id": "us-civics-301-l06-q3",
          "text": "When evaluating public policy, which practice supports trustworthy conclusions?",
          "skillId": "us-civics-301-skill-eval",
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
          "id": "us-civics-301-l06-q4",
          "text": "A mature civic participation strategy should prioritize:",
          "skillId": "us-civics-301-skill-strategy",
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
