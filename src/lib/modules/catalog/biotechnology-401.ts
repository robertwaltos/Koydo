import type { LearningModule } from "@/lib/modules/types";

export const Biotechnology401Module: LearningModule = {
  "id": "biotechnology-401",
  "title": "Biotechnology Mastery and Leadership",
  "description": "Level 401 curriculum in Biotechnology, emphasizing genetic engineering, bioprocess systems, clinical translation, bioethics, and real-world decision quality through structured practice and assessment.",
  "subject": "Biotechnology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "stem",
    "life-sciences"
  ],
  "minAge": 16,
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
      "id": "biotechnology-401-l01",
      "title": "Core Models for Biotechnology",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biotechnology-401-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-401-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In our advanced Biotechnology course, it's crucial to communicate using clear and precise language. This helps everyone understand the concepts we are discussing. We will learn how to define the boundaries of our study, which means understanding what we will focus on and what we will not. Additionally, we will identify the main focus of our analysis, which is the specific aspect of biotechnology we are examining. To ensure that everyone is on the same page, we will align our terminology, meaning we will agree on the specific words we use. This consistency allows us to make informed decisions that can be easily compared across different teams. By working together effectively, we can achieve better results in our projects and research."
        },
        {
          "id": "biotechnology-401-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To truly excel in the field of Biotechnology, it's essential to grasp the underlying reasons for events, rather than merely focusing on their outcomes. In this lesson, we will explore how to identify our assumptions, which are the beliefs we hold that may influence our understanding. We will also examine the relationships between various factors that play a role in biotechnological processes, as well as any limitations or constraints we might encounter in our work. By concentrating on the root causes of issues, we can develop more effective solutions that address the core problems instead of just treating the symptoms. This approach will not only enhance our problem-solving skills but also lead to more innovative and impactful advancements in Biotechnology."
        },
        {
          "id": "biotechnology-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we will introduce important practices that are essential for successful Biotechnology projects. These include setting high standards for evidence, maintaining a disciplined approach to logging our work, and creating clear accountability systems. By following these practices, we can ensure that our projects are executed reliably and effectively.\nContext recap: In this section, we will introduce important practices that are essential for successful Biotechnology projects. These include setting high standards for evidence, maintaining a disciplined approach to logging our work, and creating clear accountability systems. By following these practices, we can ensure that our projects are executed reliably and effectively."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-401-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "biotechnology-401-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "biotechnology-401-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "biotechnology-401-l02",
      "title": "Biotechnology Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "biotechnology-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will have the opportunity to design a complete workflow for genetic engineering and bioprocess systems. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, outlining the expected outputs, and creating rollback triggers to address any issues that arise. This hands-on experience will help you understand the complexities of biotechnology workflows.\nContext recap: In this interactive lab, you will have the opportunity to design a complete workflow for genetic engineering and bioprocess systems. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, outlining the expected outputs, and creating rollback triggers to address any issues that arise. This hands-on experience will help you understand the complexities of biotechnology workflows."
        },
        {
          "id": "biotechnology-401-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "As part of our recap, we will emphasize the importance of documenting every decision made during the workflow process. Each decision should be accompanied by a clear rationale, an expected outcome, and a point for verification. This practice will enable you to analyze the results after the project is completed, helping you learn and improve for future projects.\nContext recap: As part of our recap, we will emphasize the importance of documenting every decision made during the workflow process. Each decision should be accompanied by a clear rationale, an expected outcome, and a point for verification. This practice will enable you to analyze the results after the project is completed, helping you learn and improve for future projects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-401-l02-act1",
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
          "id": "biotechnology-401-l02-act2",
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
      "id": "biotechnology-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-401-l03-q1",
          "text": "Which action best improves decisions in genetic engineering work?",
          "skillId": "biotechnology-401-skill-core",
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
          "id": "biotechnology-401-l03-q2",
          "text": "In bioprocess systems, what is the strongest indicator of process quality?",
          "skillId": "biotechnology-401-skill-process",
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
          "id": "biotechnology-401-l03-q3",
          "text": "When evaluating clinical translation, which practice supports trustworthy conclusions?",
          "skillId": "biotechnology-401-skill-eval",
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
          "id": "biotechnology-401-l03-q4",
          "text": "A mature bioethics strategy should prioritize:",
          "skillId": "biotechnology-401-skill-strategy",
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
      "id": "biotechnology-401-l04",
      "title": "Methods, Metrics, and Failure Modes in Biotechnology",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-401-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When we choose methods for our biotechnology projects, it's important to think about several key factors. First, we need to consider any constraints we might face, such as time limits or available resources. Next, we should evaluate the quality of the information we have; is it reliable and accurate? Lastly, we must think about the costs associated with making mistakes—what could go wrong if we choose the wrong method? In this lesson, you will explore different alternatives and explain why some methods are better suited for specific biotechnology scenarios than others. This process of critical thinking will not only help you make informed decisions but also improve your problem-solving skills in the field of biotechnology."
        },
        {
          "id": "biotechnology-401-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "In this example, we will delve into the concept of metric architecture and how it serves as a framework that links leading indicators, lagging outcomes, and diagnostic measures. By establishing these connections, teams can spot any deviations from expected results at an early stage. This early detection enables them to respond thoughtfully and make informed decisions. Grasping the importance of this architecture is essential for effective monitoring and management in biotechnology projects, ensuring that teams can navigate challenges and achieve their goals successfully.\nContext recap: In this example, we will delve into the concept of metric architecture and how it serves as a framework that links leading indicators, lagging outcomes, and diagnostic measures. By establishing these connections, teams can spot any deviations from expected results at an early stage. This early detection enables them to respond thoughtfully and make informed decisions. Grasping the importance of this architecture is essential for effective monitoring and management in biotechnology projects, ensuring that teams can navigate challenges and achieve their goals successfully."
        },
        {
          "id": "biotechnology-401-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In our recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures in this way, we can develop specific plans to address each type of issue rather than using generic solutions. This targeted approach will help improve our overall project outcomes.\nContext recap: In our recap, we will categorize failures into four main groups: data-related issues, process problems, execution errors, and governance challenges. By organizing failures in this way, we can develop specific plans to address each type of issue rather than using generic solutions. This targeted approach will help improve our overall project outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-401-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "biotechnology-401-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "biotechnology-401-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "biotechnology-401-l05",
      "title": "Case Studio: Improve a Biotechnology System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biotechnology-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic biotechnology scenario into its key components: objectives, context, constraints, and possible intervention options. You will also take notes on the trade-offs involved in each option. This exercise will help you develop analytical skills and understand the complexities of real-world biotechnology challenges.\nContext recap: In this interactive case study, you will break down a realistic biotechnology scenario into its key components: objectives, context, constraints, and possible intervention options. You will also take notes on the trade-offs involved in each option. This exercise will help you develop analytical skills and understand the complexities of real-world biotechnology challenges."
        },
        {
          "id": "biotechnology-401-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "As a recap of your learning, you will create a structured improvement proposal based on the case study. This proposal should include clear success criteria, a mapping of who will be responsible for each part of the project, and a timeline for follow-up actions. This exercise will help you practice presenting your ideas in a professional manner.\nContext recap: As a recap of your learning, you will create a structured improvement proposal based on the case study. This proposal should include clear success criteria, a mapping of who will be responsible for each part of the project, and a timeline for follow-up actions. This exercise will help you practice presenting your ideas in a professional manner."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-401-l05-act1",
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
          "id": "biotechnology-401-l05-act2",
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
      "id": "biotechnology-401-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-401-l06-q1",
          "text": "Which action best improves decisions in genetic engineering work?",
          "skillId": "biotechnology-401-skill-core",
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
          "id": "biotechnology-401-l06-q2",
          "text": "In bioprocess systems, what is the strongest indicator of process quality?",
          "skillId": "biotechnology-401-skill-process",
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
          "id": "biotechnology-401-l06-q3",
          "text": "When evaluating clinical translation, which practice supports trustworthy conclusions?",
          "skillId": "biotechnology-401-skill-eval",
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
          "id": "biotechnology-401-l06-q4",
          "text": "A mature bioethics strategy should prioritize:",
          "skillId": "biotechnology-401-skill-strategy",
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
