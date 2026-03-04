import type { LearningModule } from "@/lib/modules/types";

export const AiWorkflows401Module: LearningModule = {
  "id": "ai-workflows-401",
  "title": "AI Workflows Mastery and Leadership",
  "description": "Level 401 curriculum in AI Workflows, emphasizing prompt design, retrieval pipelines, agent orchestration, evaluation metrics, and real-world decision quality through structured practice and assessment.",
  "subject": "AI Workflows",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "ai-engineering"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for prompt design and retrieval pipelines",
    "Apply structured methods to plan, execute, and review agent orchestration tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in AI Workflows"
  ],
  "lessons": [
    {
      "id": "ai-workflows-401-l01",
      "title": "Core Models for AI Workflows",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ai-workflows-401-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-401-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In the advanced study of AI Workflows, it is essential to use clear and precise language. This means we need to carefully define the boundaries of our work, identify the specific unit we are analyzing, and ensure that everyone uses the same terms. By doing this, we can make sure that decisions made by different teams can be compared fairly and accurately. This clarity helps everyone understand their roles and responsibilities better, leading to more effective collaboration.\nContext recap: In the advanced study of AI Workflows, it is essential to use clear and precise language. This means we need to carefully define the boundaries of our work, identify the specific unit we are analyzing, and ensure that everyone uses the same terms. By doing this, we can make sure that decisions made by different teams can be compared fairly and accurately. This clarity helps everyone understand their roles and responsibilities better, leading to more effective collaboration."
        },
        {
          "id": "ai-workflows-401-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To excel in AI Workflows, it is crucial to understand not just the results we see, but also the reasons behind them. This lesson focuses on mapping out our assumptions, recognizing dependencies, and identifying any constraints we might face. By doing so, we can ensure that our interventions are aimed at addressing the root causes of issues, rather than just treating the symptoms. This deeper understanding will help us create more effective solutions and improve our overall performance.\nContext recap: To excel in AI Workflows, it is crucial to understand not just the results we see, but also the reasons behind them. This lesson focuses on mapping out our assumptions, recognizing dependencies, and identifying any constraints we might face. By doing so, we can ensure that our interventions are aimed at addressing the root causes of issues, rather than just treating the symptoms. This deeper understanding will help us create more effective solutions and improve our overall performance."
        },
        {
          "id": "ai-workflows-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we introduce important practices that are essential for executing AI workflows reliably. These include maintaining high standards for evidence, keeping detailed logs of our activities, and establishing clear accountability loops. These practices are not optional; they are fundamental to ensuring that our work is trustworthy and that we can learn from our experiences. By adhering to these standards, we can improve our processes and outcomes over time.\nContext recap: In this section, we introduce important practices that are essential for executing AI workflows reliably. These include maintaining high standards for evidence, keeping detailed logs of our activities, and establishing clear accountability loops. These practices are not optional; they are fundamental to ensuring that our work is trustworthy and that we can learn from our experiences. By adhering to these standards, we can improve our processes and outcomes over time."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-401-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "ai-workflows-401-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "ai-workflows-401-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "ai-workflows-401-l02",
      "title": "AI Workflows Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ai-workflows-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, learners will have the opportunity to construct a complete workflow for designing prompts and managing retrieval pipelines. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, determining the expected outputs, and setting up rollback triggers to revert changes if needed. This hands-on experience will help learners understand the components of a workflow and how they interact with one another.\nContext recap: In this interactive lab, learners will have the opportunity to construct a complete workflow for designing prompts and managing retrieval pipelines. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, determining the expected outputs, and setting up rollback triggers to revert changes if needed. This hands-on experience will help learners understand the components of a workflow and how they interact with one another."
        },
        {
          "id": "ai-workflows-401-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we emphasize the importance of decision logging in our workflows. Every decision made during the process should be accompanied by a clear rationale, an expected effect, and a verification point. This practice allows us to conduct thorough analyses after the workflow has run, helping us to understand what worked well and what could be improved. By documenting our decisions in this way, we can enhance our learning and make better choices in the future.\nContext recap: In this recap, we emphasize the importance of decision logging in our workflows. Every decision made during the process should be accompanied by a clear rationale, an expected effect, and a verification point. This practice allows us to conduct thorough analyses after the workflow has run, helping us to understand what worked well and what could be improved. By documenting our decisions in this way, we can enhance our learning and make better choices in the future."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-401-l02-act1",
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
          "id": "ai-workflows-401-l02-act2",
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
      "id": "ai-workflows-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-workflows-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-401-l03-q1",
          "text": "Which action best improves decisions in prompt design work?",
          "skillId": "ai-workflows-401-skill-core",
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
          "id": "ai-workflows-401-l03-q2",
          "text": "In retrieval pipelines, what is the strongest indicator of process quality?",
          "skillId": "ai-workflows-401-skill-process",
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
          "id": "ai-workflows-401-l03-q3",
          "text": "When evaluating agent orchestration, which practice supports trustworthy conclusions?",
          "skillId": "ai-workflows-401-skill-eval",
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
          "id": "ai-workflows-401-l03-q4",
          "text": "A mature evaluation metrics strategy should prioritize:",
          "skillId": "ai-workflows-401-skill-strategy",
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
      "id": "ai-workflows-401-l04",
      "title": "Methods, Metrics, and Failure Modes in AI Workflows",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-workflows-401-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When selecting methods for AI workflows, it is important to consider various factors such as constraints, the quality of information available, and the potential cost of errors. In this lesson, learners will compare different alternatives and justify why certain methods are better suited for specific AI workflow scenarios. This critical thinking exercise will help learners develop the skills needed to make informed decisions in real-world applications.\nContext recap: When selecting methods for AI workflows, it is important to consider various factors such as constraints, the quality of information available, and the potential cost of errors. In this lesson, learners will compare different alternatives and justify why certain methods are better suited for specific AI workflow scenarios. This critical thinking exercise will help learners develop the skills needed to make informed decisions in real-world applications."
        },
        {
          "id": "ai-workflows-401-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-structured metric architecture is vital for monitoring the performance of AI workflows. This architecture connects leading indicators, which predict future performance, with lagging outcomes, which reflect past results, and diagnostic measures that help us understand the reasons behind those results. By establishing this framework, teams can detect any deviations from expected performance early on and respond in a thoughtful and deliberate manner, ensuring continuous improvement.\nContext recap: A well-structured metric architecture is vital for monitoring the performance of AI workflows. This architecture connects leading indicators, which predict future performance, with lagging outcomes, which reflect past results, and diagnostic measures that help us understand the reasons behind those results. By establishing this framework, teams can detect any deviations from expected performance early on and respond in a thoughtful and deliberate manner, ensuring continuous improvement."
        },
        {
          "id": "ai-workflows-401-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we categorize failures into four main groups: data-related failures, process failures, execution failures, and governance failures. By organizing failures in this way, we can create specific plans to address each type, rather than applying generic solutions. This targeted approach allows us to effectively mitigate issues and improve the overall reliability of our AI workflows.\nContext recap: In this recap, we categorize failures into four main groups: data-related failures, process failures, execution failures, and governance failures. By organizing failures in this way, we can create specific plans to address each type, rather than applying generic solutions. This targeted approach allows us to effectively mitigate issues and improve the overall reliability of our AI workflows."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-401-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "ai-workflows-401-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "ai-workflows-401-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "ai-workflows-401-l05",
      "title": "Case Studio: Improve a AI Workflows System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ai-workflows-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, learners will break down a realistic scenario into its key components: the objective, the context in which it occurs, the constraints that limit options, and the various intervention strategies available. Each component will be examined closely, and learners will take notes on the trade-offs involved in each option. This exercise will enhance critical thinking and problem-solving skills as learners navigate complex situations.\nContext recap: In this interactive case study, learners will break down a realistic scenario into its key components: the objective, the context in which it occurs, the constraints that limit options, and the various intervention strategies available. Each component will be examined closely, and learners will take notes on the trade-offs involved in each option. This exercise will enhance critical thinking and problem-solving skills as learners navigate complex situations."
        },
        {
          "id": "ai-workflows-401-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, learners will present a structured improvement proposal based on their analysis of the case. This proposal will include clear success criteria to measure effectiveness, a mapping of who is responsible for each part of the plan, and a timeline for follow-up actions. By delivering this proposal, learners will practice articulating their ideas and ensuring that their recommendations are actionable and well thought out.\nContext recap: In this recap, learners will present a structured improvement proposal based on their analysis of the case. This proposal will include clear success criteria to measure effectiveness, a mapping of who is responsible for each part of the plan, and a timeline for follow-up actions. By delivering this proposal, learners will practice articulating their ideas and ensuring that their recommendations are actionable and well thought out."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-401-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve agent orchestration outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "ai-workflows-401-l05-act2",
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
      "id": "ai-workflows-401-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-workflows-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-401-l06-q1",
          "text": "Which action best improves decisions in prompt design work?",
          "skillId": "ai-workflows-401-skill-core",
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
          "id": "ai-workflows-401-l06-q2",
          "text": "In retrieval pipelines, what is the strongest indicator of process quality?",
          "skillId": "ai-workflows-401-skill-process",
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
          "id": "ai-workflows-401-l06-q3",
          "text": "When evaluating agent orchestration, which practice supports trustworthy conclusions?",
          "skillId": "ai-workflows-401-skill-eval",
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
          "id": "ai-workflows-401-l06-q4",
          "text": "A mature evaluation metrics strategy should prioritize:",
          "skillId": "ai-workflows-401-skill-strategy",
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
