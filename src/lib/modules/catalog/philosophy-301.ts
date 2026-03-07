import type { LearningModule } from "@/lib/modules/types";

export const philosophy_301_Module: LearningModule = {
  "id": "philosophy-301",
  "title": "Philosophy Systems and Analysis",
  "description": "Level 301 curriculum in Philosophy, emphasizing argument structure, epistemology, ethics and politics, applied reasoning, and real-world decision quality through structured practice and assessment.",
  "subject": "Humanities",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "critical-thinking",
    "ethics"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for argument structure and epistemology.",
    "Apply structured methods to plan, execute, and review ethics and politics tasks.",
    "Interpret evidence using metrics, constraints, and context.",
    "Diagnose common failure modes and design recovery actions.",
    "Communicate tradeoffs clearly to technical and non-technical audiences.",
    "Build repeatable systems for sustained improvement in philosophical reasoning."
  ],
  "lessons": [
    {
      "id": "philosophy-301-l01",
      "title": "Core Models for Philosophical Analysis",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "philosophy-301-l01-a1",
          "type": "image",
          "title": "Diagram: The Anatomy of an Argument",
          "content": "Visualize the components of a logical argument: premises, inferences, and conclusions."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-301-l01-c1",
          "kind": "concept",
          "title": "Defining Your Terms: Scope and Vocabulary",
          "content": "In advanced philosophy, precise language is critical. We will learn to define the scope of our discussions, identify the main focus of our analysis, and use consistent terminology. This precision allows us to compare ideas and decisions effectively, leading to more meaningful and productive discussions."
        },
        {
          "id": "philosophy-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To excel in philosophy, we must understand the underlying reasons for events, not just their outcomes. We will practice examining our assumptions, exploring connections between ideas, and identifying constraints that limit our options. Focusing on root causes rather than symptoms helps us develop more effective solutions."
        },
        {
          "id": "philosophy-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "This section introduces practices that ensure our work is reliable and accountable. We will cover the importance of setting evidence standards, maintaining a disciplined log of our findings, and creating clear accountability loops. These practices are essential for conducting philosophical inquiries with integrity and rigor."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity, concept, or process you evaluate to make a defensible decision."
        },
        {
          "id": "philosophy-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying the boundaries and limitations that shape the available options."
        },
        {
          "id": "philosophy-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality and relevance threshold data must meet before it is used to support a conclusion."
        }
      ]
    },
    {
      "id": "philosophy-301-l02",
      "title": "Philosophy Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "philosophy-301-l02-a1",
          "type": "image",
          "title": "Flowchart: Your First Philosophy Workflow",
          "content": "Map the steps from initial question to final conclusion, including checkpoints for evidence and feedback loops."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this activity, you'll build a workflow for analyzing arguments and exploring epistemology (the study of knowledge). Your workflow will include inputs, quality checkpoints, outputs, and feedback loops that allow you to revisit earlier steps. This exercise helps you organize and analyze philosophical arguments systematically."
        },
        {
          "id": "philosophy-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "We will review the importance of documenting every key decision in our philosophical inquiries. Each entry should include a clear rationale, an expected outcome, and a method for verification. This practice enables post-project analysis, helping us learn from our experiences and improve future decision-making."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-301-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Governance",
          "description": "Match each workflow component to its primary governance function.",
          "pairs": [
            {
              "left": "Input audit",
              "right": "Prevents low-quality evidence from entering the analysis."
            },
            {
              "left": "Checkpoint gate",
              "right": "Prevents known errors from moving to the next step."
            },
            {
              "left": "Outcome metric",
              "right": "Measures whether the primary objective was achieved."
            },
            {
              "left": "Retrospective log",
              "right": "Captures lessons learned to improve the next cycle."
            }
          ]
        },
        {
          "id": "philosophy-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort each risk into the appropriate category: Strategic, Operational, or Quality.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "The philosophical question is irrelevant to the overall goal.",
              "bucket": "Strategic"
            },
            {
              "text": "The handoff between research and argumentation is unclear.",
              "bucket": "Operational"
            },
            {
              "text": "The criteria for accepting a premise are inconsistent.",
              "bucket": "Quality"
            },
            {
              "text": "No baseline argument exists for comparison.",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "philosophy-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "philosophy-301-l03-a1",
          "type": "image",
          "title": "Recap: Key Concepts",
          "content": "A one-page visual summary of core models and workflow components from the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "philosophy-301-l03-q1",
          "text": "Which action best improves the reliability of an argument's structure?",
          "skillId": "philosophy-301-skill-core",
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
              "text": "Focus only on the conclusion, not the premises"
            },
            {
              "id": "d",
              "text": "Avoid documenting your reasoning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria, alternative analysis, and assumption testing improve the reliability and transferability of an argument."
        },
        {
          "id": "philosophy-301-l03-q2",
          "text": "In epistemology, what is the strongest indicator of a high-quality inquiry process?",
          "skillId": "philosophy-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The speed of reaching a conclusion"
            },
            {
              "id": "b",
              "text": "Traceable steps, quality checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured thinking without documentation"
            },
            {
              "id": "d",
              "text": "A single, compelling anecdote"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A high-quality process is observable, repeatable, and measurable, ensuring its conclusions are well-founded."
        },
        {
          "id": "philosophy-301-l03-q3",
          "text": "When evaluating an ethical argument, which practice supports a trustworthy conclusion?",
          "skillId": "philosophy-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignoring inconvenient edge cases"
            },
            {
              "id": "b",
              "text": "Using baseline comparisons and analyzing potential failures"
            },
            {
              "id": "c",
              "text": "Changing your success criteria after seeing the results"
            },
            {
              "id": "d",
              "text": "Removing all context from the findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent overstating claims and improve the robustness of ethical conclusions."
        },
        {
          "id": "philosophy-301-l03-q4",
          "text": "A mature system for applied reasoning should prioritize:",
          "skillId": "philosophy-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Optimizing for a single factor at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
            },
            {
              "id": "c",
              "text": "Decisions based only on initial intuition"
            },
            {
              "id": "d",
              "text": "No review after a decision has been made"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A balanced approach ensures that long-term performance and accountability are aligned, avoiding unintended consequences."
        }
      ]
    },
    {
      "id": "philosophy-301-l04",
      "title": "Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "philosophy-301-l04-a1",
          "type": "image",
          "title": "Dashboard: Leading vs. Lagging Indicators",
          "content": "An image comparing a dashboard showing early warning signs (leading indicators) with one showing final results (lagging outcomes)."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When selecting a philosophical method, we must consider constraints, information quality, and the potential cost of being wrong. In this lesson, you will learn to compare different analytical methods and justify why a particular approach is the most suitable for a specific philosophical problem."
        },
        {
          "id": "philosophy-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "We will explore how a metric architecture connects 'leading indicators' (early signs of progress) with 'lagging outcomes' (the final results). We will also look at diagnostic metrics that help teams identify deviations from their goals early. Understanding this architecture empowers you to respond thoughtfully to challenges."
        },
        {
          "id": "philosophy-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "We will categorize different types of failures that can occur in philosophical work, such as those related to data, process, or governance. By classifying failures, we can develop specific, targeted plans to address them, rather than relying on generic solutions. This improves the resilience of our philosophical practice."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-301-l04-f1",
          "front": "Leading indicator",
          "back": "A predictive metric that signals probable future outcomes before final results are clear."
        },
        {
          "id": "philosophy-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted and effective fixes."
        },
        {
          "id": "philosophy-301-l04-f3",
          "front": "Cost of error",
          "back": "The total negative impact (e.g., logical, ethical, social) caused by an incorrect decision or flawed argument."
        }
      ]
    },
    {
      "id": "philosophy-301-l05",
      "title": "Case Studio: Improving a Philosophical System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "philosophy-301-l05-a1",
          "type": "image",
          "title": "Decision Tree: Case Study Analysis",
          "content": "A visual template of a decision tree to help you map out choices, potential outcomes, and associated risks in the case study."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic philosophical scenario into its essential components. This includes identifying the main objective, understanding the context, recognizing constraints, and exploring various intervention options while noting the trade-offs for each."
        },
        {
          "id": "philosophy-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "You will present a structured proposal for improving the philosophical system from the case study. Your proposal must include clear success criteria, a map of responsibilities, and a timeline for follow-up actions. This exercise hones your ability to articulate complex ideas clearly and effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to resolve a classic ethical dilemma (e.g., a resource allocation problem) under system constraints.",
          "instructions": [
            "Define your success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit for your chosen path.",
            "Specify a metric that would confirm the success of your intervention in the next cycle."
          ]
        },
        {
          "id": "philosophy-301-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect each intervention with its most likely system-level effect.",
          "pairs": [
            {
              "left": "Tighter evidence criteria",
              "right": "Higher signal quality and less downstream rework"
            },
            {
              "left": "Automated logic checker",
              "right": "Faster detection of preventable fallacies"
            },
            {
              "left": "Post-argument retrospective",
              "right": "Improved adaptation and learning in later cycles"
            },
            {
              "left": "Cross-functional ethical review",
              "right": "Reduced ambiguity and blind spots"
            }
          ]
        }
      ]
    },
    {
      "id": "philosophy-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "philosophy-301-l06-a1",
          "type": "image",
          "title": "Recap: Systems Thinking",
          "content": "A one-page visual summary of methods, metrics, and failure analysis from the previous two lessons."
        }
      ],
      "questions": [
        {
          "id": "philosophy-301-l06-q1",
          "text": "When choosing a philosophical method for a new problem, what is the most critical first step?",
          "skillId": "philosophy-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Immediately apply the method you know best"
            },
            {
              "id": "b",
              "text": "Select the fastest method available"
            },
            {
              "id": "c",
              "text": "Analyze the problem's constraints, goals, and cost of error"
            },
            {
              "id": "d",
              "text": "Wait for someone else to choose the method"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A thorough analysis of the problem's context is essential for selecting the most appropriate and effective method."
        },
        {
          "id": "philosophy-301-l06-q2",
          "text": "What is the primary function of a 'leading indicator' in a metric architecture?",
          "skillId": "philosophy-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To provide the final, definitive result of a process"
            },
            {
              "id": "b",
              "text": "To act as an early warning signal that predicts future outcomes"
            },
            {
              "id": "c",
              "text": "To measure something that is easy to count, regardless of relevance"
            },
            {
              "id": "d",
              "text": "To confirm a decision that has already been made"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators are predictive and allow for course correction before the final outcome is known."
        },
        {
          "id": "philosophy-301-l06-q3",
          "text": "A 'failure taxonomy' is most useful for which of the following tasks?",
          "skillId": "philosophy-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Applying a single, generic solution to all problems"
            },
            {
              "id": "b",
              "text": "Assigning blame to individuals after a failure"
            },
            {
              "id": "c",
              "text": "Ignoring failures to focus only on successes"
            },
            {
              "id": "d",
              "text": "Designing specific, targeted fixes based on the type of error"
            }
          ],
          "correctOptionId": "d",
          "explanation": "By classifying types of failures, we can develop precise and effective solutions instead of relying on one-size-fits-all approaches."
        },
        {
          "id": "philosophy-301-l06-q4",
          "text": "In a case study analysis, what is the main risk of ignoring system-level trade-offs?",
          "skillId": "philosophy-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The analysis will be completed faster"
            },
            {
              "id": "b",
              "text": "A locally optimal solution might create larger, unintended problems elsewhere"
            },
            {
              "id": "c",
              "text": "The conclusion will be too simple to understand"
            },
            {
              "id": "d",
              "text": "There are no risks; focusing on one part is always best"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Systems thinking requires understanding that improving one part of a system can have negative consequences for another part."
        }
      ]
    },
    {
      "id": "philosophy-301-l07",
      "title": "Capstone: Building a Personal Philosophical Framework",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "philosophy-301-l07-a1",
          "type": "template",
          "title": "My Philosophical Framework",
          "content": "A downloadable worksheet to guide you in building your own repeatable system for ethical and logical decision-making."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-301-l07-c1",
          "kind": "practice",
          "title": "Synthesizing Your System",
          "content": "In this final project, you will combine all the concepts from this course—core models, workflows, metrics, and failure analysis—to construct your own personal framework for analyzing complex problems. This framework will serve as your repeatable system for clear and rigorous thinking."
        },
        {
          "id": "philosophy-301-l07-c2",
          "kind": "recap",
          "title": "Course Review and Next Steps",
          "content": "We will conclude with a review of the key learning objectives, from argument structure to systems thinking. We'll discuss how to apply these skills continuously in academic, personal, and professional contexts to improve the quality of your reasoning and decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-301-l07-act1",
          "type": "long_form_response",
          "title": "Framework Articulation",
          "description": "Using the provided template, describe your personal philosophical framework. Define your core principles, your process for evaluating evidence, your key metrics for a successful argument, and how you plan to learn from failures in reasoning."
        }
      ]
    }
  ]
};
