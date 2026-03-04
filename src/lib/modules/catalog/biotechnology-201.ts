import type { LearningModule } from "@/lib/modules/types";

export const Biotechnology201Module: LearningModule = {
  "id": "biotechnology-201",
  "title": "Biotechnology Applied Practice",
  "description": "Level 201 curriculum in Biotechnology, emphasizing genetic engineering, bioprocess systems, clinical translation, bioethics, and real-world decision quality through structured practice and assessment.",
  "subject": "Biotechnology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "stem",
    "life-sciences"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
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
      "id": "biotechnology-201-l01",
      "title": "Core Models for Biotechnology",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biotechnology-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-201-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In our exploration of Biotechnology at level 201, using clear and precise language is essential for effective communication. We will focus on defining the boundaries of our work, which helps us understand what is included in our study and what is not. Additionally, we will identify the specific unit we are analyzing, whether it's a cell, a gene, or a process. By aligning our terminology, we ensure that everyone on the team is on the same page. This approach allows us to make decisions that can be easily compared across different teams, fostering better collaboration and understanding among all members. Clear communication is key to our success in biotechnology!"
        },
        {
          "id": "biotechnology-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To succeed in the field of Biotechnology, it's important to grasp the reasons why things happen, not just the outcomes we observe. In this lesson, we will dive into the process of identifying and mapping our assumptions, dependencies, and constraints. By doing this, we can better understand the underlying factors that contribute to various challenges. This approach allows us to tackle the root causes of problems instead of merely addressing the symptoms, which is a vital skill for effective problem-solving in Biotechnology and beyond.\nContext recap: To succeed in the field of Biotechnology, it's important to grasp the reasons why things happen, not just the outcomes we observe. In this lesson, we will dive into the process of identifying and mapping our assumptions, dependencies, and constraints. By doing this, we can better understand the underlying factors that contribute to various challenges. This approach allows us to tackle the root causes of problems instead of merely addressing the symptoms, which is a vital skill for effective problem-solving in Biotechnology and beyond."
        },
        {
          "id": "biotechnology-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we will introduce important practices that are essential for reliable execution in Biotechnology. These include setting evidence standards, maintaining discipline in logging our work, and creating clear accountability loops. By following these practices, we can ensure that our work is trustworthy and that we can track our progress effectively.\nContext recap: In this section, we will introduce important practices that are essential for reliable execution in Biotechnology. These include setting evidence standards, maintaining discipline in logging our work, and creating clear accountability loops. By following these practices, we can ensure that our work is trustworthy and that we can track our progress effectively."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-201-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "biotechnology-201-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "biotechnology-201-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "biotechnology-201-l02",
      "title": "Biotechnology Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "biotechnology-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will have the opportunity to construct a complete workflow for genetic engineering and bioprocess systems. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, outlining the expected outputs, and determining rollback triggers to address any issues that may arise. This hands-on experience will deepen your understanding of the workflow process.\nContext recap: In this interactive lab, you will have the opportunity to construct a complete workflow for genetic engineering and bioprocess systems. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, outlining the expected outputs, and determining rollback triggers to address any issues that may arise. This hands-on experience will deepen your understanding of the workflow process."
        },
        {
          "id": "biotechnology-201-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of logging every decision made during the workflow process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point. This practice will enable us to conduct thorough post-run analyses, helping us learn from our experiences and improve future outcomes.\nContext recap: In this recap, we will emphasize the importance of logging every decision made during the workflow process. Each decision should be accompanied by a clear rationale, an expected effect, and a verification point. This practice will enable us to conduct thorough post-run analyses, helping us learn from our experiences and improve future outcomes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-201-l02-act1",
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
          "id": "biotechnology-201-l02-act2",
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
      "id": "biotechnology-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-201-l03-q1",
          "text": "Which action best improves decisions in genetic engineering work?",
          "skillId": "biotechnology-201-skill-core",
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
          "id": "biotechnology-201-l03-q2",
          "text": "In bioprocess systems, what is the strongest indicator of process quality?",
          "skillId": "biotechnology-201-skill-process",
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
          "id": "biotechnology-201-l03-q3",
          "text": "When evaluating clinical translation, which practice supports trustworthy conclusions?",
          "skillId": "biotechnology-201-skill-eval",
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
          "id": "biotechnology-201-l03-q4",
          "text": "A mature bioethics strategy should prioritize:",
          "skillId": "biotechnology-201-skill-strategy",
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
      "id": "biotechnology-201-l04",
      "title": "Methods, Metrics, and Failure Modes in Biotechnology",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-201-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "In Biotechnology, choosing the right method is very important and involves thinking about several key factors. First, we need to look at any constraints we might face, such as time, resources, or regulations. Next, we should evaluate the quality of the information we have; reliable data is crucial for making informed decisions. Lastly, we must consider the potential cost of errors, as mistakes can lead to significant consequences. In this lesson, you will explore different methods and compare their advantages and disadvantages. You will also learn how to justify your choice of method for specific Biotechnology scenarios. This exercise will not only help you understand the importance of method selection but will also improve your critical thinking and decision-making skills, which are essential in the field of Biotechnology."
        },
        {
          "id": "biotechnology-201-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "In this example, we will explore how a metric architecture connects leading indicators, lagging outcomes, and diagnostic measures. Leading indicators are early signs that can predict future performance, while lagging outcomes show the results of past actions. Diagnostic measures help teams understand why certain outcomes occurred. By using this framework, teams can spot any deviations from what they expect to happen early on and respond thoughtfully. Understanding this architecture is key to maintaining effective oversight in Biotechnology projects, ensuring that everything runs smoothly and efficiently.\nContext recap: In this example, we will explore how a metric architecture connects leading indicators, lagging outcomes, and diagnostic measures. Leading indicators are early signs that can predict future performance, while lagging outcomes show the results of past actions. Diagnostic measures help teams understand why certain outcomes occurred. By using this framework, teams can spot any deviations from what they expect to happen early on and respond thoughtfully."
        },
        {
          "id": "biotechnology-201-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will categorize failures into four main groups: data, process, execution, and governance. By organizing failures this way, we can create specific mitigation plans that address the unique challenges of each category, rather than using generic solutions. This targeted approach will improve our ability to prevent and respond to issues.\nContext recap: In this recap, we will categorize failures into four main groups: data, process, execution, and governance. By organizing failures this way, we can create specific mitigation plans that address the unique challenges of each category, rather than using generic solutions. This targeted approach will improve our ability to prevent and respond to issues."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-201-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "biotechnology-201-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "biotechnology-201-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "biotechnology-201-l05",
      "title": "Case Studio: Improve a Biotechnology System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biotechnology-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-201-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic scenario into its key components: objectives, context, constraints, and possible intervention options. You will also note the trade-offs involved in each option. This exercise will help you develop critical analysis skills and understand the complexities of improving a Biotechnology system.\nContext recap: In this interactive case study, you will break down a realistic scenario into its key components: objectives, context, constraints, and possible intervention options. You will also note the trade-offs involved in each option. This exercise will help you develop critical analysis skills and understand the complexities of improving a Biotechnology system."
        },
        {
          "id": "biotechnology-201-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a structured improvement proposal based on your analysis of the case study. Your proposal should include clear success criteria, mapping out who is responsible for each part of the plan, and a timeline for follow-up actions. This exercise will enhance your ability to communicate ideas effectively and plan for successful implementation.\nContext recap: In this recap, you will present a structured improvement proposal based on your analysis of the case study. Your proposal should include clear success criteria, mapping out who is responsible for each part of the plan, and a timeline for follow-up actions. This exercise will enhance your ability to communicate ideas effectively and plan for successful implementation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-201-l05-act1",
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
          "id": "biotechnology-201-l05-act2",
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
      "id": "biotechnology-201-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-201-l06-q1",
          "text": "Which action best improves decisions in genetic engineering work?",
          "skillId": "biotechnology-201-skill-core",
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
          "id": "biotechnology-201-l06-q2",
          "text": "In bioprocess systems, what is the strongest indicator of process quality?",
          "skillId": "biotechnology-201-skill-process",
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
          "id": "biotechnology-201-l06-q3",
          "text": "When evaluating clinical translation, which practice supports trustworthy conclusions?",
          "skillId": "biotechnology-201-skill-eval",
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
          "id": "biotechnology-201-l06-q4",
          "text": "A mature bioethics strategy should prioritize:",
          "skillId": "biotechnology-201-skill-strategy",
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
