import type { LearningModule } from "@/lib/modules/types";

export const Entrepreneurship201Module: LearningModule = {
  "id": "entrepreneurship-201",
  "title": "Entrepreneurship Applied Practice",
  "description": "Level 201 curriculum in Entrepreneurship, emphasizing opportunity discovery, business modeling, capital strategy, venture operations, and real-world decision quality through structured practice and assessment.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "business",
    "innovation"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
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
      "id": "entrepreneurship-201-l01",
      "title": "Core Models for Entrepreneurship",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "entrepreneurship-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-201-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In Entrepreneurship 201, using clear and specific language is essential for our success. We will explore how to define the boundaries of our projects, which helps us understand what is included and what is not. Additionally, we will identify the main focus of our analysis, allowing us to concentrate on the most important aspects of our work. It's also crucial that everyone uses the same terms and vocabulary. This consistency enables us to compare decisions made by different teams effectively, ensuring that everyone understands each other and is working towards the same goals. By mastering this operating vocabulary, we can enhance our collaboration and make better-informed decisions together."
        },
        {
          "id": "entrepreneurship-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To achieve success in Entrepreneurship, it is essential to grasp the reasons behind our results, rather than merely looking at the outcomes. In this lesson, we will delve into our assumptions, dependencies, and the limitations we face. By understanding these elements, we can concentrate on tackling the root causes of problems instead of just addressing the symptoms. This approach will empower us to make more informed and effective decisions in our entrepreneurial journey, leading to better outcomes and sustainable growth.\nContext recap: To achieve success in Entrepreneurship, it is essential to grasp the reasons behind our results, rather than merely looking at the outcomes. In this lesson, we will delve into our assumptions, dependencies, and the limitations we face. By understanding these elements, we can concentrate on tackling the root causes of problems instead of just addressing the symptoms. This approach will empower us to make more informed and effective decisions in our entrepreneurial journey, leading to better outcomes and sustainable growth."
        },
        {
          "id": "entrepreneurship-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this recap, we will discuss the importance of having high standards for evidence, maintaining a disciplined approach to logging our work, and establishing clear accountability practices. These elements are essential for ensuring that our projects are executed reliably and that we can trust the outcomes we achieve.\nContext recap: In this recap, we will discuss the importance of having high standards for evidence, maintaining a disciplined approach to logging our work, and establishing clear accountability practices. These elements are essential for ensuring that our projects are executed reliably and that we can trust the outcomes we achieve."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-201-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "entrepreneurship-201-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "entrepreneurship-201-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "entrepreneurship-201-l02",
      "title": "Entrepreneurship Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "entrepreneurship-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this engaging interactive activity, you will have the chance to design a comprehensive workflow that will help you discover exciting business opportunities and create effective business models. You will start by identifying the essential inputs needed for your workflow. Next, you will set up checkpoints that will allow you to monitor your progress along the way. It's important to define the expected outputs, which are the results you hope to achieve. Additionally, you will establish rollback triggers, which are important steps to take if any challenges arise during your process. This activity will not only enhance your understanding of entrepreneurship but also equip you with practical skills for your future endeavors."
        },
        {
          "id": "entrepreneurship-201-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of logging every decision made during our projects. Each decision should be accompanied by a clear explanation of the reasoning behind it, the expected effects, and a point for verification. This practice will enable us to analyze our decisions after the project is completed and learn from our experiences.\nContext recap: In this recap, we will emphasize the importance of logging every decision made during our projects. Each decision should be accompanied by a clear explanation of the reasoning behind it, the expected effects, and a point for verification. This practice will enable us to analyze our decisions after the project is completed and learn from our experiences."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-201-l02-act1",
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
          "id": "entrepreneurship-201-l02-act2",
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
      "id": "entrepreneurship-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-201-l03-q1",
          "text": "Which action best improves decisions in opportunity discovery work?",
          "skillId": "entrepreneurship-201-skill-core",
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
          "id": "entrepreneurship-201-l03-q2",
          "text": "In business modeling, what is the strongest indicator of process quality?",
          "skillId": "entrepreneurship-201-skill-process",
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
          "id": "entrepreneurship-201-l03-q3",
          "text": "When evaluating capital strategy, which practice supports trustworthy conclusions?",
          "skillId": "entrepreneurship-201-skill-eval",
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
          "id": "entrepreneurship-201-l03-q4",
          "text": "A mature venture operations strategy should prioritize:",
          "skillId": "entrepreneurship-201-skill-strategy",
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
      "id": "entrepreneurship-201-l04",
      "title": "Methods, Metrics, and Failure Modes in Entrepreneurship",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "entrepreneurship-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-201-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When we choose methods for our projects in entrepreneurship, it's important to think about several key factors. First, we need to look at any constraints we might have, such as time, resources, or regulations. Next, we should evaluate the quality of the information we have; is it reliable and accurate? Finally, we must consider the potential cost of making mistakes—what could happen if we choose the wrong method? In this lesson, you will explore different alternatives and explain why some methods work better than others in specific entrepreneurship situations. This will help you make informed decisions in your future projects."
        },
        {
          "id": "entrepreneurship-201-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "In this example, we will explore the concept of metric architecture. This framework connects three important elements: leading indicators, lagging outcomes, and diagnostic measures. Leading indicators are signs that show how well a team is progressing towards their goals. Lagging outcomes are the results that come after efforts have been made. Diagnostic measures help teams understand why they are or aren't meeting their goals. By linking these elements together, teams can spot any changes or issues early on. This allows them to respond thoughtfully and make necessary adjustments, ensuring they stay on the right path to achieve their objectives."
        },
        {
          "id": "entrepreneurship-201-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will explore how to categorize failures into four important groups: data, process, execution, and governance. By organizing failures in this way, we can develop tailored plans to tackle each specific type of failure. This approach helps us avoid using one-size-fits-all solutions that might not work well in every situation. Instead, we can focus on what really needs to be fixed, making our strategies more effective and relevant to the challenges we face in entrepreneurship.\nContext recap: In this recap, we will explore how to categorize failures into four important groups: data, process, execution, and governance. By organizing failures in this way, we can develop tailored plans to tackle each specific type of failure. This approach helps us avoid using one-size-fits-all solutions that might not work well in every situation. Instead, we can focus on what really needs to be fixed, making our strategies more effective and relevant to the challenges we face in entrepreneurship."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-201-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "entrepreneurship-201-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "entrepreneurship-201-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "entrepreneurship-201-l05",
      "title": "Case Studio: Improve a Entrepreneurship System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "entrepreneurship-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-201-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic business scenario into its key components: the objective, the context in which it operates, the constraints it faces, and the various options for intervention. Make sure to include notes on the trade-offs involved in each option to help guide your decision-making.\nContext recap: In this interactive case study, you will break down a realistic business scenario into its key components: the objective, the context in which it operates, the constraints it faces, and the various options for intervention. Make sure to include notes on the trade-offs involved in each option to help guide your decision-making."
        },
        {
          "id": "entrepreneurship-201-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a structured improvement proposal based on your analysis. This proposal should include clear success criteria, a mapping of who will be responsible for each part of the plan, and a timeline for follow-up actions to ensure that the improvements are implemented effectively.\nContext recap: In this recap, you will present a structured improvement proposal based on your analysis. This proposal should include clear success criteria, a mapping of who will be responsible for each part of the plan, and a timeline for follow-up actions to ensure that the improvements are implemented effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-201-l05-act1",
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
          "id": "entrepreneurship-201-l05-act2",
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
      "id": "entrepreneurship-201-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-201-l06-q1",
          "text": "Which action best improves decisions in opportunity discovery work?",
          "skillId": "entrepreneurship-201-skill-core",
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
          "id": "entrepreneurship-201-l06-q2",
          "text": "In business modeling, what is the strongest indicator of process quality?",
          "skillId": "entrepreneurship-201-skill-process",
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
          "id": "entrepreneurship-201-l06-q3",
          "text": "When evaluating capital strategy, which practice supports trustworthy conclusions?",
          "skillId": "entrepreneurship-201-skill-eval",
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
          "id": "entrepreneurship-201-l06-q4",
          "text": "A mature venture operations strategy should prioritize:",
          "skillId": "entrepreneurship-201-skill-strategy",
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
