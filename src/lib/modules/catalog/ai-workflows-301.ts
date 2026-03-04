import type { LearningModule } from "@/lib/modules/types";

export const AiWorkflows301Module: LearningModule = {
  "id": "ai-workflows-301",
  "title": "AI Workflows Systems and Analysis",
  "description": "Level 301 curriculum in AI Workflows, emphasizing prompt design, retrieval pipelines, agent orchestration, evaluation metrics, and real-world decision quality through structured practice and assessment.",
  "subject": "AI Workflows",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "ai-engineering"
  ],
  "minAge": 15,
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
      "id": "ai-workflows-301-l01",
      "title": "Core Models for AI Workflows",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ai-workflows-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In AI Workflows at the 301 level, using clear and precise language is very important. This means we need to carefully define the boundaries of our work, which helps us understand what is included and what is not. We will also identify the specific unit we are analyzing, which is the main focus of our study. Additionally, it is crucial that everyone involved uses the same terms consistently. By doing this, we can make decisions that are easy to compare across different teams. This approach fosters better collaboration and understanding among all participants, ensuring that everyone is on the same page and working towards common goals."
        },
        {
          "id": "ai-workflows-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To truly excel in AI Workflows, it is essential to grasp the reasons behind events, rather than merely focusing on their outcomes. In this lesson, we will delve into the process of mapping our assumptions, identifying the dependencies that connect different elements, and recognizing the constraints that may limit our actions. By adopting this comprehensive approach, we can concentrate on addressing the root causes of problems instead of just treating the symptoms. This deeper understanding will enable us to develop more effective and sustainable solutions to the challenges we encounter in AI workflows."
        },
        {
          "id": "ai-workflows-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In our recap, we will discuss the importance of having high standards for evidence, maintaining a disciplined approach to logging our work, and establishing clear accountability loops. These practices are essential for ensuring that our execution is reliable and that we can trust the results we achieve.\nContext recap: In our recap, we will discuss the importance of having high standards for evidence, maintaining a disciplined approach to logging our work, and establishing clear accountability loops. These practices are essential for ensuring that our execution is reliable and that we can trust the results we achieve."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "ai-workflows-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "ai-workflows-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "ai-workflows-301-l02",
      "title": "AI Workflows Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ai-workflows-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will have the opportunity to construct a complete workflow for designing prompts and creating retrieval pipelines. This includes identifying the necessary inputs, setting up checkpoints to monitor progress, defining the expected outputs, and establishing rollback triggers to manage any issues that arise during the process.\nContext recap: In this interactive lab, you will have the opportunity to construct a complete workflow for designing prompts and creating retrieval pipelines. This includes identifying the necessary inputs, setting up checkpoints to monitor progress, defining the expected outputs, and establishing rollback triggers to manage any issues that arise during the process."
        },
        {
          "id": "ai-workflows-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "As we recap our decision logging process, we will emphasize that every decision made should be accompanied by a clear rationale, an expected effect, and a verification point. This approach enables us to conduct thorough analyses after our workflows run, helping us learn from our experiences and improve future outcomes.\nContext recap: As we recap our decision logging process, we will emphasize that every decision made should be accompanied by a clear rationale, an expected effect, and a verification point. This approach enables us to conduct thorough analyses after our workflows run, helping us learn from our experiences and improve future outcomes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-301-l02-act1",
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
          "id": "ai-workflows-301-l02-act2",
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
      "id": "ai-workflows-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-workflows-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-301-l03-q1",
          "text": "Which action best improves decisions in prompt design work?",
          "skillId": "ai-workflows-301-skill-core",
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
          "id": "ai-workflows-301-l03-q2",
          "text": "In retrieval pipelines, what is the strongest indicator of process quality?",
          "skillId": "ai-workflows-301-skill-process",
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
          "id": "ai-workflows-301-l03-q3",
          "text": "When evaluating agent orchestration, which practice supports trustworthy conclusions?",
          "skillId": "ai-workflows-301-skill-eval",
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
          "id": "ai-workflows-301-l03-q4",
          "text": "A mature evaluation metrics strategy should prioritize:",
          "skillId": "ai-workflows-301-skill-strategy",
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
      "id": "ai-workflows-301-l04",
      "title": "Methods, Metrics, and Failure Modes in AI Workflows",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-workflows-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When we choose methods for our AI Workflows, it's important to think about several key factors. First, we need to look at the constraints we are working with, such as time limits or resource availability. Next, we should evaluate the quality of the information we have; is it reliable and accurate? Finally, we must consider the potential cost of making mistakes, as errors can lead to significant consequences. In this lesson, you will explore various alternatives and explain why a specific method is the best fit for certain situations in AI Workflows. This will help you develop critical thinking skills and make informed decisions in your future projects."
        },
        {
          "id": "ai-workflows-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-designed metric architecture is like a roadmap for teams working on AI projects. It connects three important types of measurements: leading indicators, which help us predict future performance; lagging outcomes, which show us the results of our actions; and diagnostic measures, which help us understand why things are happening. By using this framework, teams can spot any changes or issues early on, allowing them to respond thoughtfully and make adjustments as needed. This proactive approach helps ensure that we stay on track and successfully reach our goals in our AI workflows."
        },
        {
          "id": "ai-workflows-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In our recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific mitigation plans that address the unique aspects of each type of failure, rather than relying on generic solutions.\nContext recap: In our recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific mitigation plans that address the unique aspects of each type of failure, rather than relying on generic solutions."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "ai-workflows-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "ai-workflows-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "ai-workflows-301-l05",
      "title": "Case Studio: Improve a AI Workflows System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ai-workflows-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this practice session, you will break down a realistic case into its key components: the objective we aim to achieve, the context in which we are working, the constraints we face, and the various options for intervention. Be sure to include notes on the trade-offs involved in each option to guide your decision-making.\nContext recap: In this practice session, you will break down a realistic case into its key components: the objective we aim to achieve, the context in which we are working, the constraints we face, and the various options for intervention. Be sure to include notes on the trade-offs involved in each option to guide your decision-making."
        },
        {
          "id": "ai-workflows-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "As we wrap up, you will present a staged improvement proposal that outlines the criteria for success, identifies who will be responsible for each part of the plan, and includes a timeline for follow-up actions. This structured approach will help ensure that your proposal is clear and actionable.\nContext recap: As we wrap up, you will present a staged improvement proposal that outlines the criteria for success, identifies who will be responsible for each part of the plan, and includes a timeline for follow-up actions. This structured approach will help ensure that your proposal is clear and actionable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-301-l05-act1",
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
          "id": "ai-workflows-301-l05-act2",
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
      "id": "ai-workflows-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ai-workflows-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-301-l06-q1",
          "text": "Which action best improves decisions in prompt design work?",
          "skillId": "ai-workflows-301-skill-core",
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
          "id": "ai-workflows-301-l06-q2",
          "text": "In retrieval pipelines, what is the strongest indicator of process quality?",
          "skillId": "ai-workflows-301-skill-process",
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
          "id": "ai-workflows-301-l06-q3",
          "text": "When evaluating agent orchestration, which practice supports trustworthy conclusions?",
          "skillId": "ai-workflows-301-skill-eval",
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
          "id": "ai-workflows-301-l06-q4",
          "text": "A mature evaluation metrics strategy should prioritize:",
          "skillId": "ai-workflows-301-skill-strategy",
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
