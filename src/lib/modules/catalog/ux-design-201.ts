import type { LearningModule } from "@/lib/modules/types";

export const UxDesign201Module: LearningModule = {
  "id": "ux-design-201",
  "title": "UX Design Applied Practice",
  "description": "Level 201 curriculum in UX Design, emphasizing user research, interaction modeling, accessibility, product experimentation, and real-world decision quality through structured practice and assessment.",
  "subject": "UX Design",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "design",
    "human-computer-interaction"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for user research and interaction modeling",
    "Apply structured methods to plan, execute, and review accessibility tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in UX Design"
  ],
  "lessons": [
    {
      "id": "ux-design-201-l01",
      "title": "Core Models for UX Design",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ux-design-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-201-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In UX Design at level 201, using clear and specific language is super important! This means we need to learn how to set clear boundaries for our projects, which helps us understand what we are focusing on. We will also identify the specific things we are analyzing, like user behavior or design elements. Additionally, it's crucial that everyone on our team understands the terms we are using. When everyone is on the same page, it helps us make better decisions and allows us to compare our work effectively with other teams. This way, we can all work together more smoothly and create amazing user experiences!\nContext recap: In UX Design at level 201, using clear and specific language is super important! This means we need to learn how to set clear boundaries for our projects, which helps us understand what we are focusing on. We will also identify the specific things we are analyzing, like user behavior or design elements. Additionally, it's crucial that everyone on our team understands the terms we are using.\nWhy this matters: Operating Vocabulary and Scope helps learners in UX Design connect ideas from UX Design Applied Practice to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ux-design-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To become really good at UX Design, it's important to look deeper than just the results we see. We need to understand why things happen in the first place. In this lesson, we will learn how to identify our assumptions—what we think is true, our dependencies—how different elements rely on each other, and our constraints—what limits us in our designs. By doing this, we can create better solutions that tackle the real problems at their source, rather than just fixing the surface issues that we notice. This approach helps us design experiences that truly meet the needs of users and improve their overall satisfaction.\nContext recap: To become really good at UX Design, it's important to look deeper than just the results we see. We need to understand why things happen in the first place. In this lesson, we will learn how to identify our assumptions—what we think is true, our dependencies—how different elements rely on each other, and our constraints—what limits us in our designs. By doing this, we can create better solutions that tackle the real problems at their source, rather than just fixing the surface issues that we notice."
        },
        {
          "id": "ux-design-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we will introduce some important practices that are essential for successful execution in UX Design. We will discuss the importance of having clear evidence standards, maintaining a disciplined approach to logging our work, and establishing accountability loops. These practices help ensure that our projects are reliable and effective.\nContext recap: In this section, we will introduce some important practices that are essential for successful execution in UX Design. We will discuss the importance of having clear evidence standards, maintaining a disciplined approach to logging our work, and establishing accountability loops. These practices help ensure that our projects are reliable and effective."
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-201-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "ux-design-201-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "ux-design-201-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "ux-design-201-l02",
      "title": "UX Design Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ux-design-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this hands-on activity, you will create a complete workflow for conducting user research and modeling interactions. This will include identifying the necessary inputs, setting up checkpoints to monitor progress, defining the expected outputs, and establishing rollback triggers in case we need to revert to a previous step. This exercise will help you understand how to structure your design process effectively.\nContext recap: In this hands-on activity, you will create a complete workflow for conducting user research and modeling interactions. This will include identifying the necessary inputs, setting up checkpoints to monitor progress, defining the expected outputs, and establishing rollback triggers in case we need to revert to a previous step. This exercise will help you understand how to structure your design process effectively."
        },
        {
          "id": "ux-design-201-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of logging every decision made during the design process. Each decision should be accompanied by a clear rationale, an expected effect, and a point for verification. This practice allows us to analyze our decisions after the project is completed, helping us learn and improve for future projects.\nContext recap: In this recap, we will emphasize the importance of logging every decision made during the design process. Each decision should be accompanied by a clear rationale, an expected effect, and a point for verification. This practice allows us to analyze our decisions after the project is completed, helping us learn and improve for future projects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ux-design-201-l02-act1",
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
          "id": "ux-design-201-l02-act2",
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
      "id": "ux-design-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ux-design-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ux-design-201-l03-q1",
          "text": "Which action best improves decisions in user research work?",
          "skillId": "ux-design-201-skill-core",
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
          "id": "ux-design-201-l03-q2",
          "text": "In interaction modeling, what is the strongest indicator of process quality?",
          "skillId": "ux-design-201-skill-process",
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
          "id": "ux-design-201-l03-q3",
          "text": "When evaluating accessibility, which practice supports trustworthy conclusions?",
          "skillId": "ux-design-201-skill-eval",
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
          "id": "ux-design-201-l03-q4",
          "text": "A mature product experimentation strategy should prioritize:",
          "skillId": "ux-design-201-skill-strategy",
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
      "id": "ux-design-201-l04",
      "title": "Methods, Metrics, and Failure Modes in UX Design",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ux-design-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-201-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When we choose methods for UX Design, it's important to think about several key factors. First, we need to look at any constraints we might have, such as time or resources. Next, we should evaluate the quality of the information we have; is it reliable and useful? Finally, we must consider the potential cost of making mistakes—what could go wrong if we choose the wrong method? In this lesson, you will practice comparing different methods and explaining why a specific one is the best choice for certain UX Design situations. Developing this skill is essential for making smart and informed decisions in your design projects.\nContext recap: When we choose methods for UX Design, it's important to think about several key factors. First, we need to look at any constraints we might have, such as time or resources. Next, we should evaluate the quality of the information we have; is it reliable and useful? Finally, we must consider the potential cost of making mistakes—what could go wrong if we choose the wrong method?\nWhy this matters: Method Selection helps learners in UX Design connect ideas from UX Design Applied Practice to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ux-design-201-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-organized metric architecture is like a roadmap for teams working in UX Design. It connects three important types of measurements: leading indicators, which help us predict future success; lagging outcomes, which show us the results of our past actions; and diagnostic measures, which help us understand why things are happening. By using this framework, teams can spot any changes or problems early on and make informed decisions to stay on track. In this lesson, we will learn how to build a strong metric architecture that can improve our UX Design processes and help us achieve our goals more effectively.\nContext recap: A well-organized metric architecture is like a roadmap for teams working in UX Design. It connects three important types of measurements: leading indicators, which help us predict future success; lagging outcomes, which show us the results of our past actions; and diagnostic measures, which help us understand why things are happening. By using this framework, teams can spot any changes or problems early on and make informed decisions to stay on track. In this lesson, we will learn how to build a strong metric architecture that can improve our UX Design processes and help us achieve our goals more effectively.\nContext recap: A well-organized metric architecture is like a roadmap for teams working in UX Design. It connects three important types of measurements: leading indicators, which help us predict future success; lagging outcomes, which show us the results of our past actions; and diagnostic measures, which help us understand why things are happening. By using this framework, teams can spot any changes or problems early on and make informed decisions to stay on track. In this lesson, we will learn how to build a strong metric architecture that can improve our UX Design processes and help us achieve our goals more effectively.\nWhy this matters: Metric Architecture helps learners in UX Design connect ideas from UX Design Applied Practice to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ux-design-201-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will categorize different types of failures that can occur in UX Design. These failures can be related to data, processes, execution, or governance. By grouping them this way, we can create specific plans to address each type of failure, making our approach to problem-solving more effective and tailored.\nContext recap: In this recap, we will categorize different types of failures that can occur in UX Design. These failures can be related to data, processes, execution, or governance. By grouping them this way, we can create specific plans to address each type of failure, making our approach to problem-solving more effective and tailored."
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-201-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "ux-design-201-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "ux-design-201-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "ux-design-201-l05",
      "title": "Case Studio: Improve a UX Design System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ux-design-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-201-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic scenario into its key components, including the objective, context, constraints, and possible intervention options. You will also note the trade-offs involved in each option. This exercise will help you develop critical thinking skills and understand the complexities of UX Design.\nContext recap: In this interactive case study, you will break down a realistic scenario into its key components, including the objective, context, constraints, and possible intervention options. You will also note the trade-offs involved in each option. This exercise will help you develop critical thinking skills and understand the complexities of UX Design."
        },
        {
          "id": "ux-design-201-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a staged improvement proposal based on the case study you worked on. Your proposal should include clear success criteria, a mapping of who will be responsible for each part of the project, and a timeline for follow-up actions. This will help you practice how to communicate your ideas effectively and plan for successful implementation.\nContext recap: In this recap, you will present a staged improvement proposal based on the case study you worked on. Your proposal should include clear success criteria, a mapping of who will be responsible for each part of the project, and a timeline for follow-up actions. This will help you practice how to communicate your ideas effectively and plan for successful implementation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ux-design-201-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve accessibility outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "ux-design-201-l05-act2",
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
      "id": "ux-design-201-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ux-design-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ux-design-201-l06-q1",
          "text": "Which action best improves decisions in user research work?",
          "skillId": "ux-design-201-skill-core",
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
          "id": "ux-design-201-l06-q2",
          "text": "In interaction modeling, what is the strongest indicator of process quality?",
          "skillId": "ux-design-201-skill-process",
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
          "id": "ux-design-201-l06-q3",
          "text": "When evaluating accessibility, which practice supports trustworthy conclusions?",
          "skillId": "ux-design-201-skill-eval",
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
          "id": "ux-design-201-l06-q4",
          "text": "A mature product experimentation strategy should prioritize:",
          "skillId": "ux-design-201-skill-strategy",
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
