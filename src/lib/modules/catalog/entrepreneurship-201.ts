import type { LearningModule } from "@/lib/modules/types";

export const entrepreneurship_201_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "title": "Visual Prompt: The Entrepreneur's Blueprint",
          "content": "A dynamic infographic showing a magnifying glass over a target (Opportunity Discovery) linking to a structured blueprint (Business Modeling)."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-201-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In Entrepreneurship 201, clear communication is our superpower. We will explore how to define the boundaries of our projects, which helps us understand exactly what is included and what is left out. By identifying the main focus of our analysis, we can concentrate on the most critical aspects of our work. It is also vital that everyone uses the same terms and vocabulary. This consistency allows us to compare decisions made by different teams effectively, ensuring that everyone is on the same page and working towards the same goals."
        },
        {
          "id": "entrepreneurship-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "Why did that product go viral? Why did this startup fail? To achieve success in entrepreneurship, it is essential to grasp the root causes behind our results, rather than merely looking at the final outcomes. In this lesson, we will dive into our assumptions, dependencies, and the real-world limitations we face. By understanding these elements, we can tackle the root causes of problems instead of just treating the symptoms. This approach empowers us to make smarter, more effective decisions."
        },
        {
          "id": "entrepreneurship-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "Great entrepreneurs don't just guess; they use evidence. In this recap, we will discuss the importance of having high standards for the data we use, maintaining a disciplined approach to logging our work, and establishing clear accountability. These elements are essential for ensuring that our projects are executed reliably and that we can trust the outcomes we achieve."
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
          "back": "A method for identifying boundaries (like time or money) that shape feasible options."
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
          "type": "image",
          "title": "Visual Prompt: Workflow Engine",
          "content": "An interactive drag-and-drop dashboard where students place 'Inputs', 'Checkpoints', and 'Outputs' onto a conveyor belt representing a business workflow."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "Welcome to the lab! In this engaging interactive activity, you will design a comprehensive workflow to help you discover exciting business opportunities. You will start by identifying the essential inputs needed for your engine. Next, you will set up checkpoints to monitor your progress and catch errors early. It's important to define the expected outputs—the results you hope to achieve. Finally, you will establish rollback triggers, which are safety steps to take if challenges arise. This activity equips you with practical systems-building skills."
        },
        {
          "id": "entrepreneurship-201-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "Ever made a choice and later wondered, 'What was I thinking?' Decision logging solves that. We will emphasize the importance of logging every major decision made during our projects. Each log should include a clear explanation of the reasoning, the expected effects, and a point for verification. This practice enables us to analyze our decisions after the project is completed and learn from our experiences."
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
          "type": "image",
          "title": "Visual Prompt: Milestone Reached",
          "content": "A stylized checklist with a glowing checkmark, symbolizing a completed milestone in the learning journey."
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
              "text": "Avoid documenting rationale to save time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and make your business models easier to explain to investors."
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
          "explanation": "Quality processes are observable, repeatable, and measurable. If you can't trace the steps, you can't fix the errors."
        },
        {
          "id": "entrepreneurship-201-l03-q3",
          "text": "When evaluating capital strategy, which practice supports trustworthy conclusions?",
          "skillId": "entrepreneurship-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore edge cases and outliers"
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
          "explanation": "Baselines and failure analysis prevent overclaiming and improve the overall design quality of your strategy."
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
          "explanation": "Balanced scorecards align long-term performance with accountability, ensuring the business doesn't burn out while chasing a single goal."
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
          "type": "image",
          "title": "Visual Prompt: The Metrics Dashboard",
          "content": "A dashboard showing a green 'Leading Indicator' dial, a blue 'Lagging Outcome' bar chart, and a red 'Diagnostic' alert icon."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-201-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "How do you choose the right tool for the job? When we select methods for our entrepreneurial projects, we must weigh several key factors. First, look at constraints like time, budget, or regulations. Next, evaluate the quality of your information—is it reliable? Finally, consider the 'cost of error'—what happens if we choose the wrong method? In this lesson, you will explore different alternatives and learn how to match the right method to the right situation."
        },
        {
          "id": "entrepreneurship-201-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "Imagine driving a car. The road ahead is your leading indicator, telling you what's coming. The rearview mirror is your lagging outcome, showing where you've been. The check-engine light is your diagnostic measure, telling you why something is wrong. In business, linking these three types of metrics allows teams to spot issues early, respond thoughtfully, and make necessary adjustments to stay on the path to success."
        },
        {
          "id": "entrepreneurship-201-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "Failure is just data in disguise. To learn from it, we categorize failures into four important groups: data, process, execution, and governance. By organizing failures this way, we can develop tailored plans to tackle the exact root cause. This helps us avoid one-size-fits-all solutions and focus on what really needs fixing, making our strategies much more resilient."
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
      "title": "Case Studio: Improve an Entrepreneurship System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "entrepreneurship-201-l05-a1",
          "type": "image",
          "title": "Visual Prompt: Before and After",
          "content": "A split-screen view showing a messy, failing business process on the left, and a streamlined, optimized version on the right."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-201-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "Time to play business detective. In this interactive case study, you will break down a realistic business scenario into its key components: the main objective, the context in which it operates, the constraints it faces, and the various options for intervention. Make sure to document the trade-offs involved in each option to help guide your final decision."
        },
        {
          "id": "entrepreneurship-201-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "Now that you've found the problems, how do we fix them? You will present a structured improvement proposal based on your analysis. This proposal must include clear success criteria, a mapping of who is responsible for each part of the plan, and a timeline for follow-up actions to ensure the improvements actually stick."
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
          "type": "image",
          "title": "Visual Prompt: Systems Thinking",
          "content": "A glowing brain icon connected to various gears, representing systems thinking, metrics, and problem-solving."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-201-l06-q1",
          "text": "What is the primary purpose of a leading indicator in a business metric architecture?",
          "skillId": "entrepreneurship-201-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "To report on revenue from the previous quarter"
            },
            {
              "id": "b",
              "text": "To signal probable future outcomes before final results appear"
            },
            {
              "id": "c",
              "text": "To diagnose why a specific failure occurred"
            },
            {
              "id": "d",
              "text": "To replace the need for human decision-making"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators act like a windshield, helping you see what is coming so you can adjust your strategy before the final outcome is locked in."
        },
        {
          "id": "entrepreneurship-201-l06-q2",
          "text": "If a startup fails to launch a product because they relied on outdated market research, which category of the failure taxonomy does this best represent?",
          "skillId": "entrepreneurship-201-skill-failure",
          "options": [
            {
              "id": "a",
              "text": "Execution failure"
            },
            {
              "id": "b",
              "text": "Governance failure"
            },
            {
              "id": "c",
              "text": "Data failure"
            },
            {
              "id": "d",
              "text": "Process failure"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Relying on outdated or incorrect information is a data failure, as the inputs used to make the decision were flawed from the start."
        },
        {
          "id": "entrepreneurship-201-l06-q3",
          "text": "When designing an improvement proposal, why is it critical to map out trade-offs?",
          "skillId": "entrepreneurship-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Because every intervention has a cost or downside that must be managed"
            },
            {
              "id": "b",
              "text": "To make the proposal look more complicated to investors"
            },
            {
              "id": "c",
              "text": "Because trade-offs guarantee that the project will succeed"
            },
            {
              "id": "d",
              "text": "To avoid taking responsibility for the final outcome"
            }
          ],
          "correctOptionId": "a",
          "explanation": "No solution is perfect. Mapping trade-offs shows you understand the costs (like time or money) required to achieve the benefits."
        },
        {
          "id": "entrepreneurship-201-l06-q4",
          "text": "What is the main benefit of conducting a post-run retrospective?",
          "skillId": "entrepreneurship-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It allows the team to assign blame for mistakes"
            },
            {
              "id": "b",
              "text": "It captures lessons learned to improve adaptation in later cycles"
            },
            {
              "id": "c",
              "text": "It automatically fixes data errors in the system"
            },
            {
              "id": "d",
              "text": "It replaces the need for leading indicators"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Retrospectives are designed to capture insights and lessons so the team can perform better in the next iteration."
        }
      ]
    }
  ]
};
