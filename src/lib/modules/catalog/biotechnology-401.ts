import type { LearningModule } from "@/lib/modules/types";

export const biotechnology_401_Module: LearningModule = {
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
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for genetic engineering and bioprocess systems.",
    "Apply structured methods to plan, execute, and review clinical translation tasks.",
    "Interpret evidence using metrics, constraints, and context.",
    "Diagnose common failure modes and design recovery actions.",
    "Communicate tradeoffs clearly to technical and non-technical audiences.",
    "Build repeatable systems for sustained improvement in Biotechnology."
  ],
  "lessons": [
    {
      "id": "biotechnology-401-l01",
      "title": "A Framework for Biotechnology Decisions",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biotechnology-401-l01-a1",
          "type": "image",
          "title": "Structured Thinking Template",
          "content": "A visual of a template with sections for 'Objective,' 'Key Assumptions,' 'Potential Constraints,' and 'Evidence Needed' to guide your reasoning."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-401-l01-c1",
          "kind": "concept",
          "title": "Defining Our Focus: Scope and Terminology",
          "content": "In advanced biotechnology, clear communication is key. We'll start by learning how to define the scope of our work—what we are focusing on and what is outside our current analysis. We will identify the primary 'unit of analysis,' which is the specific process or entity we are evaluating. To ensure everyone works together effectively, we will agree on common definitions for key terms. This precision helps us make clear, comparable decisions across different projects and teams."
        },
        {
          "id": "biotechnology-401-l01-c2",
          "kind": "concept",
          "title": "Understanding Cause and Effect",
          "content": "To solve problems effectively in biotechnology, we must focus on *why* things happen, not just *what* happens. This involves identifying our assumptions—the beliefs we hold that might influence our conclusions. We will map the relationships between different factors in a system and identify the constraints, or limits, we must work within. By focusing on root causes, we can develop more robust and innovative solutions instead of just addressing symptoms."
        },
        {
          "id": "biotechnology-401-l01-c3",
          "kind": "recap",
          "title": "Ensuring Quality: Evidence and Accountability",
          "content": "In this section, we will introduce practices that are essential for successful projects. These include setting high standards for the evidence we accept, keeping disciplined logs of our work, and creating clear systems of accountability. Following these practices ensures our work is reliable, repeatable, and that we learn from both our successes and failures."
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
          "type": "image",
          "title": "Workflow Design Canvas",
          "content": "A visual of a flowchart template with boxes for 'Inputs,' 'Process Step,' 'Checkpoint,' 'Output,' and 'Rollback Trigger' for you to fill in."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a complete workflow for a genetic engineering or bioprocess system. This includes defining the necessary inputs, establishing checkpoints to monitor quality and progress, outlining the expected outputs, and creating rollback triggers to correct issues as they arise. This hands-on experience will help you master the design of robust biotechnology processes."
        },
        {
          "id": "biotechnology-401-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "As we conclude the lab, we will emphasize the importance of documenting every key decision. Each entry in your decision log should include the rationale, the expected outcome, and a specific point for verification. This disciplined practice enables powerful post-project analysis, helping you and your team learn and improve for the future."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-401-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Match",
          "description": "Match each workflow component to its primary purpose.",
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
              "right": "Captures lessons for the next iteration"
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
              "text": "Misaligned project goals",
              "bucket": "Strategic"
            },
            {
              "text": "Unclear handoff timing between teams",
              "bucket": "Operational"
            },
            {
              "text": "Inconsistent acceptance criteria for results",
              "bucket": "Quality"
            },
            {
              "text": "No performance benchmark to compare against",
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
      "title": "Methods, Metrics, and Failure Modes",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-401-l04-a1",
          "type": "mnemonic",
          "title": "Method Selection: CQC",
          "content": "Remember CQC when choosing a method: Constraints (time, budget), Quality of information available, and Cost of error if the decision is wrong."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-401-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right method requires careful thought. We must consider our constraints, like time and resources; evaluate the quality of our available data; and understand the cost of error—the consequences of a mistake. In this lesson, you will practice comparing alternative methods for specific biotechnology scenarios and justifying your choice. This critical thinking is essential for making efficient and effective decisions in the lab and beyond."
        },
        {
          "id": "biotechnology-401-l04-c2",
          "kind": "example",
          "title": "Building a Measurement System",
          "content": "A good measurement system connects leading indicators, which are early signals, with lagging outcomes, which are the final results. It also includes diagnostic measures to understand why something happened. This framework allows teams to detect deviations from the plan early, enabling them to respond thoughtfully instead of reacting to a crisis. Understanding how to build this system is key to maintaining control over complex biotechnology projects."
        },
        {
          "id": "biotechnology-401-l04-c3",
          "kind": "recap",
          "title": "Classifying and Learning from Failures",
          "content": "We will categorize failures into four main groups: data issues, process problems, execution errors, and governance challenges. By classifying failures this way, we can move beyond generic solutions and develop targeted fixes for each type of problem. This structured approach to failure analysis is a powerful tool for continuous improvement."
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
      "title": "Case Study: Improving a Biotechnology System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biotechnology-401-l05-a1",
          "type": "image",
          "title": "Case Analysis Framework",
          "content": "A visual template with four quadrants: 'Objectives & Context,' 'Constraints & Resources,' 'Intervention Options,' and 'Trade-offs & Metrics.'"
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-401-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will analyze a realistic biotechnology scenario. Your task is to break it down into its key components: the main objectives, the surrounding context, the constraints you must work within, and the possible interventions. As you evaluate each option, you will document the trade-offs involved. This exercise sharpens the analytical skills needed to solve complex, real-world challenges."
        },
        {
          "id": "biotechnology-401-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "To conclude the case study, you will synthesize your analysis into a structured improvement proposal. This proposal must include clear success criteria, a responsibility assignment matrix (who does what), and a timeline for implementation and follow-up. This exercise will give you practice in creating actionable plans that drive real improvement."
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
              "right": "Clearer responsibilities between teams"
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
          "text": "A lab has limited funding and a tight deadline for a gene-editing experiment. Which method selection criterion is most critical?",
          "skillId": "biotechnology-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Choosing the newest, most advanced technology available."
            },
            {
              "id": "b",
              "text": "Prioritizing methods that fit within budget and time constraints."
            },
            {
              "id": "c",
              "text": "Selecting the method used by a competitor lab."
            },
            {
              "id": "d",
              "text": "Ignoring constraints and focusing only on potential outcomes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective method selection requires balancing ambitious goals with practical constraints like cost and time."
        },
        {
          "id": "biotechnology-401-l06-q2",
          "text": "To monitor a fermentation process, your team measures final product yield weekly. To improve control, you add daily pH and temperature checks. These daily checks are examples of:",
          "skillId": "biotechnology-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Lagging outcomes"
            },
            {
              "id": "b",
              "text": "Leading indicators"
            },
            {
              "id": "c",
              "text": "Final success criteria"
            },
            {
              "id": "d",
              "text": "Retrospective data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators are early measurements that predict final outcomes, allowing for adjustments before the process is complete."
        },
        {
          "id": "biotechnology-401-l06-q3",
          "text": "A batch of engineered cells fails to grow because the wrong nutrient medium was used. According to the failure taxonomy, this is best classified as:",
          "skillId": "biotechnology-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "A governance failure"
            },
            {
              "id": "b",
              "text": "A data-related issue"
            },
            {
              "id": "c",
              "text": "An execution error"
            },
            {
              "id": "d",
              "text": "A strategic misalignment"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An execution error is a mistake made while performing a defined task, such as using the incorrect material in a process."
        },
        {
          "id": "biotechnology-401-l06-q4",
          "text": "What is the most important element to include in a proposal to improve a biotechnology workflow?",
          "skillId": "biotechnology-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "A vague goal to 'make things better'"
            },
            {
              "id": "b",
              "text": "A list of problems without any proposed solutions"
            },
            {
              "id": "c",
              "text": "Clear success criteria and a plan for measuring impact"
            },
            {
              "id": "d",
              "text": "A decision to change the entire process without any analysis"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A strong improvement proposal defines what success looks like with measurable criteria, ensuring the changes can be evaluated for effectiveness."
        }
      ]
    }
  ]
};
