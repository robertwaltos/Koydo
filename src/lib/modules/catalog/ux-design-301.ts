import type { LearningModule } from "@/lib/modules/types";

export const ux_design_301_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "title": "Visual Prompt: Unit of Analysis",
          "content": "Visual: A diagram showing a magnifying glass focusing on a specific 'Unit of Analysis' within a larger, complex project scope map."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In UX Design, clear communication is your superpower. This lesson helps you define your project's scope—knowing exactly what is included and what isn't. We will also identify the 'unit of analysis,' which is the specific part of the project you are evaluating. When everyone on your team uses the same vocabulary, you avoid confusion and make decisions that are easier to compare, defend, and execute."
        },
        {
          "id": "ux-design-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To level up in UX Design, you need to understand why things happen, not just what happens. We will map out assumptions, dependencies, and constraints. This means looking closely at what we believe to be true, how different elements rely on each other, and the limits (like time or budget) we face. By mapping these out, you can solve root problems instead of just patching surface issues."
        },
        {
          "id": "ux-design-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "Great design is backed by evidence. Here, we introduce key practices for successful execution: maintaining high standards for evidence, keeping a disciplined log of your design process, and establishing clear accountability loops. These habits ensure your work is reliable, trackable, and easy to justify to stakeholders."
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
          "title": "Visual Prompt: Workflow Builder",
          "content": "Visual: A drag-and-drop interface showing a timeline with empty slots for 'Inputs', 'Checkpoints', 'Outputs', and 'Rollback Triggers'."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "Welcome to the interactive lab! Here, you will build a complete workflow for user research and interaction modeling. You will identify necessary inputs, set up checkpoints to monitor progress, define expected outputs, and create 'rollback triggers'—safety nets that tell you when to revert to a previous step. This hands-on practice reveals how information and decisions flow in real-world UX."
        },
        {
          "id": "ux-design-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "Every design decision needs a paper trail. We will emphasize the importance of 'decision logging.' Each choice you make should include a clear rationale, an expected effect, and a verification point (how you will know if it worked). This practice makes post-project analysis a breeze and helps you continuously improve your design instincts."
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
          "title": "Visual Prompt: Progress Tracker",
          "content": "Visual: A progress bar filling up as the student answers questions, with a glowing 'Hint' button for complex scenarios."
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
          "title": "Visual Prompt: Metric Dashboard",
          "content": "Visual: A dashboard displaying leading indicators as a speedometer and lagging outcomes as a historical bar chart."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right UX method requires balancing several factors. First, consider your constraints, like time limits or budget. Next, evaluate your data quality—is it reliable? Finally, weigh the 'cost of error': what happens if you choose the wrong method? Exploring these alternatives helps you develop critical thinking and select the best tool for the job."
        },
        {
          "id": "ux-design-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A strong metric architecture connects the dots between different types of data. It links 'leading indicators' (which predict future performance) with 'lagging outcomes' (which reflect past results), alongside diagnostic measures that explain why things happened. This setup helps teams spot deviations early and course-correct before a project goes off track."
        },
        {
          "id": "ux-design-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "Not all failures are created equal. We can categorize them into four main groups: data issues, process problems, execution errors, and governance challenges. By using this 'failure taxonomy,' you can design specific, targeted fixes rather than relying on generic band-aids, ultimately strengthening your entire UX process."
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
          "title": "Visual Prompt: System Transformation",
          "content": "Visual: A split-screen showing a messy, failing design system on the left, and a structured, improved system on the right."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this case study, you will tackle a realistic UX challenge by breaking it down into its core parts: the project objective, the context, the constraints, and your intervention options. You will weigh the trade-offs of each choice, sharpening your analytical skills for real-world design scenarios."
        },
        {
          "id": "ux-design-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "Now it is time to pitch your solution. You will create a structured improvement proposal that includes clear success criteria, a map of who is responsible for what, and a timeline for follow-up actions. This exercise ensures your ideas aren't just theoretical, but actionable and well-organized."
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
          "title": "Visual Prompt: Decision Tree",
          "content": "Visual: A branching decision tree highlighting the consequences of different design choices."
        }
      ],
      "questions": [
        {
          "id": "ux-design-301-l06-q1",
          "text": "When selecting a UX research method under strict budget constraints, what is the most important factor to evaluate?",
          "skillId": "ux-design-301-skill-methods",
          "options": [
            {
              "id": "a",
              "text": "The popularity of the method in the industry"
            },
            {
              "id": "b",
              "text": "The cost of error if the method yields poor data"
            },
            {
              "id": "c",
              "text": "The number of participants available"
            },
            {
              "id": "d",
              "text": "The aesthetic appeal of the final deliverables"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Evaluating the cost of error ensures that constraints do not force you into a method that produces unacceptably risky or flawed data."
        },
        {
          "id": "ux-design-301-l06-q2",
          "text": "Which of the following is an example of a leading indicator in a UX metric architecture?",
          "skillId": "ux-design-301-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "Total revenue from the last quarter"
            },
            {
              "id": "b",
              "text": "The number of user errors during a prototype usability test"
            },
            {
              "id": "c",
              "text": "The final customer satisfaction score after launch"
            },
            {
              "id": "d",
              "text": "The total number of app uninstalls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "User errors during prototyping predict future usability issues before the product is finalized, making it a leading indicator."
        },
        {
          "id": "ux-design-301-l06-q3",
          "text": "How does using a 'failure taxonomy' improve a UX design system?",
          "skillId": "ux-design-301-skill-failure",
          "options": [
            {
              "id": "a",
              "text": "It hides mistakes from stakeholders"
            },
            {
              "id": "b",
              "text": "It allows teams to apply targeted fixes based on the specific type of error"
            },
            {
              "id": "c",
              "text": "It guarantees that no future errors will occur"
            },
            {
              "id": "d",
              "text": "It speeds up the design process by skipping testing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Categorizing failures helps teams understand the root cause (e.g., data vs. execution) and apply the correct mitigation strategy."
        },
        {
          "id": "ux-design-301-l06-q4",
          "text": "In an improvement proposal, why is it critical to define success criteria before implementing an intervention?",
          "skillId": "ux-design-301-skill-proposals",
          "options": [
            {
              "id": "a",
              "text": "To ensure the design team gets paid faster"
            },
            {
              "id": "b",
              "text": "To establish a measurable baseline to verify if the intervention actually worked"
            },
            {
              "id": "c",
              "text": "To limit the number of features the development team has to build"
            },
            {
              "id": "d",
              "text": "To make the proposal look more professional"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Pre-defined success criteria provide an objective standard to measure the actual impact of your design changes."
        }
      ]
    }
  ]
};
