import type { LearningModule } from "@/lib/modules/types";

export const science_501_Module: LearningModule = {
  "id": "science-501",
  "title": "Science Specialization Studio",
  "description": "Post-401 specialization in Science, focused on science systems diagnostics, science operations and execution design, science impact and tradeoff analysis, and science governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "science",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply advanced methods for science systems diagnostics in high-constraint environments.",
    "Design robust systems for science operations and execution with measurable control gates.",
    "Evaluate interventions and their tradeoffs with research-grade rigor.",
    "Operationalize science governance and leadership with accountable processes and escalation pathways.",
    "Lead cross-functional decision reviews, communicating explicit tradeoffs.",
    "Defend recommendations under expert critique using evidence and clearly stated uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "science-501-l01",
      "title": "Advanced Scientific Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "science-501-l01-a1",
          "type": "image",
          "title": "System Scoping Diagram",
          "content": "A diagram showing a complex system, like a climate model, with a dotted line indicating the 'scope boundary'. Inside are core components and interactions; outside are labeled external factors like 'policy changes' and 'economic shifts'."
        }
      ],
      "chunks": [
        {
          "id": "science-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces the critical concept of defining scope boundaries in advanced science. We will learn to diagnose complex scientific systems by identifying key issues and component interactions. We will also cover the design of efficient operations and execution strategies, which are essential for conducting successful research. This foundational knowledge is vital for specializing in any scientific field.\nWhy this matters: Properly defining a system's scope prevents analysis from becoming unfocused. It forces you to explicitly state what is being studied and what is being excluded, which is the first step in rigorous scientific inquiry.\nStep-by-step approach: (1) Define the primary goal in a single, precise sentence. (2) Identify the key evidence required to support or refute the goal. (3) Explain how each piece of evidence influences your conclusion. (4) Verify the final recommendation against the original goal and all stated constraints."
        },
        {
          "id": "science-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "In this section, you will learn to map causal pathways—the chain of events connecting a cause to an effect. A key part of this is identifying and quantifying ranges of uncertainty for each step. Understanding these dependencies is an essential prerequisite for planning any effective intervention."
        },
        {
          "id": "science-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "To recap, every claim in scientific research must be linked to measurable indicators. This requires establishing clear confidence bounds and implementing review checkpoints to ensure all findings are reliable and valid. This practice is fundamental to maintaining the integrity of your work."
        }
      ],
      "flashcards": [
        {
          "id": "science-501-l01-f1",
          "front": "Science Systems Diagnostics",
          "back": "A specialization focused on problem analysis that requires explicit assumptions and measurable constraints."
        },
        {
          "id": "science-501-l01-f2",
          "front": "Science Operations Design",
          "back": "The architecture for executing a scientific plan that determines its reliability under stress."
        },
        {
          "id": "science-501-l01-f3",
          "front": "Science Tradeoff Analysis",
          "back": "An evaluation discipline for identifying the true gains and hidden costs of a decision."
        }
      ]
    },
    {
      "id": "science-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "science-501-l02-a1",
          "type": "practice",
          "title": "Workflow Design Template",
          "content": "A flowchart template for designing a scientific workflow, with designated boxes for 'Hypothesis', 'Data Collection', 'Analysis', 'Checkpoint', and 'Escalation Path'."
        }
      ],
      "chunks": [
        {
          "id": "science-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Testing",
          "content": "In this interactive segment, you will design a specialized workflow for a specific scientific task. You will then conduct a stress test by simulating adverse scenarios, such as data loss or equipment failure, to evaluate its performance under pressure. This hands-on experience is vital for developing practical skills."
        },
        {
          "id": "science-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "In review, robust workflows must include key control features. These include checkpoints for formal review, rollback criteria to undo failing steps, and threshold-based escalation to alert leadership when risks exceed acceptable levels. These elements ensure a workflow can adapt to changing conditions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their primary reliability and governance effects.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits the blast radius of an adverse outcome"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible impact attribution"
            },
            {
              "left": "Retrospective loop",
              "right": "Improves next-cycle decision quality"
            }
          ]
        }
      ]
    },
    {
      "id": "science-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "science-501-l03-a1",
          "type": "practice",
          "title": "Core Concepts Map",
          "content": "A concept map connecting 'Systems Diagnostics', 'Execution Design', 'Impact Analysis', and 'Governance'. Each concept has branches showing key principles like 'Explicit Assumptions' and 'Measurable Indicators'."
        }
      ],
      "questions": [
        {
          "id": "science-501-l03-q1",
          "text": "Which practice most improves the decision quality of science systems diagnostics?",
          "skillId": "science-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without a baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Define assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimize only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit."
        },
        {
          "id": "science-501-l03-q2",
          "text": "At this level, strong science operations and execution design requires:",
          "skillId": "science-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-run review"
            },
            {
              "id": "d",
              "text": "No rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs ownership clarity and threshold-driven governance."
        },
        {
          "id": "science-501-l03-q3",
          "text": "A defensible approach to science impact and tradeoff analysis includes:",
          "skillId": "science-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without a comparison group"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after seeing the outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, side-effect checks, and uncertainty disclosure."
        },
        {
          "id": "science-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "science-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language with no measurable enforcement"
            },
            {
              "id": "c",
              "text": "Targets without ownership or an escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between intent, measurement, and corrective action."
        },
        {
          "id": "science-501-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Science?",
          "skillId": "science-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Choose the option with the most persuasive narrative"
            },
            {
              "id": "b",
              "text": "Score alternatives against shared metrics, side effects, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Switch metrics after results arrive"
            },
            {
              "id": "d",
              "text": "Prioritize whichever option has the shortest memo"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible comparisons require shared metrics, side-effect accounting, and uncertainty disclosure."
        },
        {
          "id": "science-501-l03-q6",
          "text": "In high-stakes execution, which communication protocol is strongest?",
          "skillId": "science-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Broadcast conclusions without assumptions"
            },
            {
              "id": "b",
              "text": "Publish assumptions, confidence ranges, and decision checkpoints to stakeholders"
            },
            {
              "id": "c",
              "text": "Share only final outcomes after completion"
            },
            {
              "id": "d",
              "text": "Limit updates to a single informal channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-stakes communication must expose assumptions, confidence, and checkpoints for transparency and accountability."
        },
        {
          "id": "science-501-l03-q7",
          "text": "A mature remediation loop in advanced Science should prioritize:",
          "skillId": "science-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Blame assignment without system updates"
            },
            {
              "id": "b",
              "text": "Root-cause analysis, control redesign, and measurable follow-up verification"
            },
            {
              "id": "c",
              "text": "One-time fixes without retesting"
            },
            {
              "id": "d",
              "text": "Issue closure based on elapsed time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature remediation ties root causes to control redesign and verification to prevent recurrence."
        },
        {
          "id": "science-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience?",
          "skillId": "science-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and maintaining contingency capacity"
            },
            {
              "id": "c",
              "text": "Ignore correlated failure modes"
            },
            {
              "id": "d",
              "text": "Commit all resources to one irreversible pathway"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced portfolios combine value optimization with explicit risk limits and contingency options."
        }
      ]
    },
    {
      "id": "science-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "science-501-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "An infographic comparing two proposed public health interventions. Columns for each option show ratings for 'Cost', 'Effectiveness', 'Equity', and 'Implementation Risk', with a summary of tradeoffs at the bottom."
        }
      ],
      "chunks": [
        {
          "id": "science-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "In this lesson, we will construct cases that highlight competing constraints in scientific systems diagnostics. We will analyze the impacts and tradeoffs involved in various scientific decisions. Understanding these dynamics is crucial for making informed choices in complex environments.\nWhy this matters: Real-world problems are rarely simple. Architecting a scenario helps you isolate variables and understand how different constraints, like budget versus safety, influence the optimal decision."
        },
        {
          "id": "science-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice section, you will compare different options across several critical dimensions, including safety, reliability, cost, equity, and governance. This comparative analysis will help you understand the full implications of each choice and the importance of balancing these factors."
        },
        {
          "id": "science-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "To recap, every recommendation should be presented in a structured format. This includes stating clear assumptions, presenting the supporting evidence, defining risk controls, and outlining fallback plans. This approach ensures that decisions are well-founded and prepared for potential challenges."
        }
      ]
    },
    {
      "id": "science-501-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "science-501-l05-a1",
          "type": "practice",
          "title": "Simulation Control Dashboard",
          "content": "A screenshot of a simulation dashboard with sliders for 'Resource Allocation' and 'Safety Thresholds', and real-time graphs showing 'System Performance' and 'Risk Level'."
        }
      ],
      "chunks": [
        {
          "id": "science-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive practice, you will operate scenario controls to manage a simulated scientific crisis. Your goal is to balance performance metrics with governance constraints, such as ethical guidelines and budget limits. This exercise highlights the challenge of maintaining oversight while striving for optimal performance.\nWhy this matters: Making decisions under pressure is a key skill. This simulation provides a safe environment to practice managing tradeoffs in real-time without real-world consequences."
        },
        {
          "id": "science-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "In review, effective responses to dynamic challenges require updating control gates without losing traceability or accountability. For example, if you must relax a safety protocol to achieve a critical objective, the decision and its rationale must be documented. This principle is vital for ensuring all actions are transparent and auditable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure science scenario and tune controls to manage outcomes under uncertainty."
        }
      ]
    },
    {
      "id": "science-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "science-501-l06-a1",
          "type": "practice",
          "title": "Decision Tree Guide",
          "content": "A decision tree diagram illustrating a complex scientific choice. Each branch represents a different action, leading to nodes with potential outcomes, probabilities, and associated tradeoffs."
        }
      ],
      "questions": [
        {
          "id": "science-501-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "science-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and success criteria"
            },
            {
              "id": "c",
              "text": "High confidence without evidence logs"
            },
            {
              "id": "d",
              "text": "Single-metric optimization only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with explicit assumptions, constraints, and measurable targets."
        },
        {
          "id": "science-501-l06-q2",
          "text": "A resilient strategy for science operations and execution design should include:",
          "skillId": "science-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Checkpointed execution with fallback and escalation criteria"
            },
            {
              "id": "b",
              "text": "One-way execution with no rollback capability"
            },
            {
              "id": "c",
              "text": "No ownership mapping across teams"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience depends on checkpoints, fallback options, and explicit escalation design."
        },
        {
          "id": "science-501-l06-q3",
          "text": "When evaluating science impact and tradeoffs, which method is most rigorous?",
          "skillId": "science-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "A single success story without controls"
            },
            {
              "id": "b",
              "text": "Comparative baselines plus side-effect and uncertainty analysis"
            },
            {
              "id": "c",
              "text": "An outcome-only narrative without process evidence"
            },
            {
              "id": "d",
              "text": "Retrospective scope changes to fit outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons, side-effect analysis, and uncertainty disclosure."
        },
        {
          "id": "science-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "science-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Aligns authority, measurement, and remediation obligations"
            },
            {
              "id": "b",
              "text": "Separates policy from operational controls"
            },
            {
              "id": "c",
              "text": "Avoids external review and transparency"
            },
            {
              "id": "d",
              "text": "Treats accountability as optional under pressure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links authority, measurable controls, and corrective action."
        },
        {
          "id": "science-501-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Science?",
          "skillId": "science-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Choose the option with the most persuasive narrative"
            },
            {
              "id": "b",
              "text": "Score alternatives against shared metrics, side effects, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Switch metrics after results arrive"
            },
            {
              "id": "d",
              "text": "Prioritize whichever option has the shortest memo"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible comparisons require shared metrics, side-effect accounting, and uncertainty disclosure."
        },
        {
          "id": "science-501-l06-q6",
          "text": "In high-stakes execution, which communication protocol is strongest?",
          "skillId": "science-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Broadcast conclusions without assumptions"
            },
            {
              "id": "b",
              "text": "Publish assumptions, confidence ranges, and decision checkpoints to stakeholders"
            },
            {
              "id": "c",
              "text": "Share only final outcomes after completion"
            },
            {
              "id": "d",
              "text": "Limit updates to a single informal channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-stakes communication must expose assumptions, confidence, and checkpoints for transparency and accountability."
        },
        {
          "id": "science-501-l06-q7",
          "text": "A mature remediation loop in advanced Science should prioritize:",
          "skillId": "science-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Blame assignment without system updates"
            },
            {
              "id": "b",
              "text": "Root-cause analysis, control redesign, and measurable follow-up verification"
            },
            {
              "id": "c",
              "text": "One-time fixes without retesting"
            },
            {
              "id": "d",
              "text": "Issue closure based on elapsed time"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature remediation ties root causes to control redesign and verification to prevent recurrence."
        },
        {
          "id": "science-501-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience?",
          "skillId": "science-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and maintaining contingency capacity"
            },
            {
              "id": "c",
              "text": "Ignore correlated failure modes"
            },
            {
              "id": "d",
              "text": "Commit all resources to one irreversible pathway"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced portfolios combine value optimization with explicit risk limits and contingency options."
        }
      ]
    },
    {
      "id": "science-501-l07",
      "title": "Science Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "science-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A stakeholder map for a new dam project, showing concentric circles of impact. Inner circles include local residents and ecosystems (high impact), while outer circles include national taxpayers and future generations (delayed impact)."
        }
      ],
      "chunks": [
        {
          "id": "science-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, you will learn to map the distribution of benefits, burdens, and delayed effects across different stakeholder groups. This is essential for understanding how scientific decisions truly impact various communities and individuals, both now and in the future.\nWhy this matters: Science does not happen in a vacuum. Understanding who benefits and who pays the price is a core component of ethical and responsible scientific leadership."
        },
        {
          "id": "science-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores accountability architecture. This framework integrates decision traceability, review rights for affected parties, and clear remediation obligations into scientific governance. These elements are crucial for ensuring responsible and ethical scientific practices.\nWhy this matters: A strong accountability structure builds public trust and ensures that when things go wrong, there is a clear and fair process for correction and redress."
        },
        {
          "id": "science-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "In our recap, we will introduce a checklist for responsible leadership. This tool helps connect scientific outcomes with ethical considerations, ensure compliance with policy, and promote resilience in leadership practices. It serves as a practical guide for reflecting on how your decisions impact society and the environment."
        }
      ],
      "flashcards": [
        {
          "id": "science-501-l07-f1",
          "front": "Impact Distribution",
          "back": "How the outcomes (benefits, costs, and risks) of a decision are allocated across different populations and timescales."
        },
        {
          "id": "science-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of the evidence, ownership, and rationale behind a decision."
        },
        {
          "id": "science-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Decision-making behavior that balances performance, accountability, and ethical considerations."
        }
      ]
    },
    {
      "id": "science-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "science-501-l08-a1",
          "type": "practice",
          "title": "Defense Brief Template",
          "content": "A template for a 'Defense Brief' slide, with sections for 'Core Claim', 'Supporting Evidence (Data)', 'Acknowledged Uncertainties', and 'Proposed Mitigation Plan'."
        }
      ],
      "chunks": [
        {
          "id": "science-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive activity, you will assemble a comprehensive defense brief for a complex scientific proposal. This brief must include a central, well-supported claim, the evidence backing it, a frank assessment of uncertainties, and clear pathways for remediation if risks materialize."
        },
        {
          "id": "science-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this rehearsal, you will practice responding to critiques from the perspectives of experts, governance bodies, and public stakeholders. This exercise is designed to build confidence and improve your ability to defend your work in a professional, high-stakes setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your specialization recommendations under adversarial cross-examination from a simulated expert panel."
        }
      ]
    }
  ]
};
