import type { LearningModule } from "@/lib/modules/types";

export const UxDesign301Module: LearningModule = {
  "id": "ux-design-301",
  "title": "UX Design Systems and Analysis",
  "description": "Level 301 curriculum in UX Design, emphasizing user research, interaction modeling, accessibility, product experimentation, and real-world decision quality through structured practice and assessment.",
  "subject": "UX Design",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "design",
    "human-computer-interaction"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
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
      "id": "ux-design-301-l01",
      "title": "Core Models for UX Design",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ux-design-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In UX Design at the 301 level, using clear and precise language is very important. This lesson will help us understand how to define the boundaries of our project scope, which means knowing what is included and what is not in our design project. We will also learn how to identify the specific unit we are analyzing, which is the part of the project we are focusing on. Additionally, we will ensure that everyone on our team uses the same terminology. This alignment is crucial because it helps us make informed decisions that can be easily compared across different teams. By doing this, we can work together more effectively and understand each other better, leading to a more successful design process.\nContext recap: In UX Design at the 301 level, using clear and precise language is very important. This lesson will help us understand how to define the boundaries of our project scope, which means knowing what is included and what is not in our design project. We will also learn how to identify the specific unit we are analyzing, which is the part of the project we are focusing on. Additionally, we will ensure that everyone on our team uses the same terminology.\nWhy this matters: Operating Vocabulary and Scope helps learners in UX Design connect ideas from UX Design Systems and Analysis to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ux-design-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To become really good at UX Design, it's essential to grasp why things happen, not just what happens. In this lesson, we will dive into the process of mapping out our assumptions, dependencies, and constraints. This means we will look closely at what we think is true, how different elements rely on each other, and the limits we face. By understanding these factors, we can concentrate on solving the real problems instead of just fixing the surface issues. This method helps us create better solutions and gain a richer understanding of how users interact with designs.\nContext recap: To become really good at UX Design, it's essential to grasp why things happen, not just what happens. In this lesson, we will dive into the process of mapping out our assumptions, dependencies, and constraints. This means we will look closely at what we think is true, how different elements rely on each other, and the limits we face. By understanding these factors, we can concentrate on solving the real problems instead of just fixing the surface issues."
        },
        {
          "id": "ux-design-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this recap, we will introduce some key practices that are essential for successful execution in UX Design. These include maintaining high standards for evidence, keeping a disciplined log of our processes, and establishing clear accountability loops. By following these practices, we can ensure that our work is reliable and that we can track our progress effectively.\nContext recap: In this recap, we will introduce some key practices that are essential for successful execution in UX Design. These include maintaining high standards for evidence, keeping a disciplined log of our processes, and establishing clear accountability loops. By following these practices, we can ensure that our work is reliable and that we can track our progress effectively."
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "ux-design-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "ux-design-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "ux-design-301-l02",
      "title": "UX Design Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ux-design-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will have the opportunity to create a complete workflow for user research and interaction modeling. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, defining the expected outputs, and setting up rollback triggers in case we need to revert to a previous step. This hands-on experience will help you understand the flow of information and decisions in UX Design.\nContext recap: In this interactive lab, you will have the opportunity to create a complete workflow for user research and interaction modeling. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, defining the expected outputs, and setting up rollback triggers in case we need to revert to a previous step. This hands-on experience will help you understand the flow of information and decisions in UX Design."
        },
        {
          "id": "ux-design-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of logging every decision made during the design process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point. This practice will enable us to conduct thorough analyses after our project runs, helping us learn from our experiences and improve future designs.\nContext recap: In this recap, we will emphasize the importance of logging every decision made during the design process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point. This practice will enable us to conduct thorough analyses after our project runs, helping us learn from our experiences and improve future designs."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ux-design-301-l02-act1",
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
          "id": "ux-design-301-l02-act2",
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
      "id": "ux-design-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ux-design-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ux-design-301-l03-q1",
          "text": "Which action best improves decisions in user research work?",
          "skillId": "ux-design-301-skill-core",
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
          "id": "ux-design-301-l03-q2",
          "text": "In interaction modeling, what is the strongest indicator of process quality?",
          "skillId": "ux-design-301-skill-process",
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
          "id": "ux-design-301-l03-q3",
          "text": "When evaluating accessibility, which practice supports trustworthy conclusions?",
          "skillId": "ux-design-301-skill-eval",
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
          "id": "ux-design-301-l03-q4",
          "text": "A mature product experimentation strategy should prioritize:",
          "skillId": "ux-design-301-skill-strategy",
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
      "id": "ux-design-301-l04",
      "title": "Methods, Metrics, and Failure Modes in UX Design",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ux-design-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When choosing methods for UX Design, it's important to think about several key factors. First, consider any constraints you might face, such as time limits or available resources. Next, evaluate the quality of the information you have; is it reliable and relevant? Finally, think about the potential cost of making mistakes—what could go wrong if you choose the wrong method? In this lesson, you will explore different alternatives and explain why certain methods are more suitable for specific UX Design situations. This exercise will help you develop your critical thinking skills and make better decisions in your design projects.\nContext recap: When choosing methods for UX Design, it's important to think about several key factors. First, consider any constraints you might face, such as time limits or available resources. Next, evaluate the quality of the information you have; is it reliable and relevant? Finally, think about the potential cost of making mistakes—what could go wrong if you choose the wrong method?\nWhy this matters: Method Selection helps learners in UX Design connect ideas from UX Design Systems and Analysis to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ux-design-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-structured metric architecture is crucial for effective UX Design. It connects leading indicators, which predict future performance, with lagging outcomes, which reflect past results, and diagnostic measures that help us understand the reasons behind those outcomes. By establishing this architecture, teams can identify any deviations from expected performance early on and respond thoughtfully to keep projects on track.\nContext recap: A well-structured metric architecture is crucial for effective UX Design. It connects leading indicators, which predict future performance, with lagging outcomes, which reflect past results, and diagnostic measures that help us understand the reasons behind those outcomes. By establishing this architecture, teams can identify any deviations from expected performance early on and respond thoughtfully to keep projects on track."
        },
        {
          "id": "ux-design-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures in this way, we can create specific mitigation plans that address the unique aspects of each category, rather than applying generic solutions. This targeted approach will help us improve our UX Design processes.\nContext recap: In this recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures in this way, we can create specific mitigation plans that address the unique aspects of each category, rather than applying generic solutions. This targeted approach will help us improve our UX Design processes."
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "ux-design-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "ux-design-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "ux-design-301-l05",
      "title": "Case Studio: Improve a UX Design System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ux-design-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic UX design challenge into its key components: the objective of the project, the context in which it operates, the constraints we face, and the various intervention options available. You will also take notes on the trade-offs involved in each option. This exercise will enhance your analytical skills and prepare you for real-world design scenarios.\nContext recap: In this interactive case study, you will break down a realistic UX design challenge into its key components: the objective of the project, the context in which it operates, the constraints we face, and the various intervention options available. You will also take notes on the trade-offs involved in each option. This exercise will enhance your analytical skills and prepare you for real-world design scenarios."
        },
        {
          "id": "ux-design-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a structured improvement proposal based on the case study. Your proposal should include clear success criteria, a mapping of who is responsible for each part of the project, and a timeline for follow-up actions. This exercise will help you practice articulating your ideas and ensuring that your proposals are actionable and well-organized.\nContext recap: In this recap, you will present a structured improvement proposal based on the case study. Your proposal should include clear success criteria, a mapping of who is responsible for each part of the project, and a timeline for follow-up actions. This exercise will help you practice articulating your ideas and ensuring that your proposals are actionable and well-organized."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ux-design-301-l05-act1",
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
          "id": "ux-design-301-l05-act2",
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
      "id": "ux-design-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ux-design-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "ux-design-301-l06-q1",
          "text": "Which action best improves decisions in user research work?",
          "skillId": "ux-design-301-skill-core",
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
          "id": "ux-design-301-l06-q2",
          "text": "In interaction modeling, what is the strongest indicator of process quality?",
          "skillId": "ux-design-301-skill-process",
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
          "id": "ux-design-301-l06-q3",
          "text": "When evaluating accessibility, which practice supports trustworthy conclusions?",
          "skillId": "ux-design-301-skill-eval",
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
          "id": "ux-design-301-l06-q4",
          "text": "A mature product experimentation strategy should prioritize:",
          "skillId": "ux-design-301-skill-strategy",
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
