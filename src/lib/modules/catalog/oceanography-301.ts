import type { LearningModule } from "@/lib/modules/types";

export const oceanography_301_Module: LearningModule = {
  "id": "oceanography-301",
  "title": "Oceanography Systems and Governance",
  "description": "An advanced curriculum in Oceanography focused on ocean circulation dynamics, marine ecosystem interactions, and climate-ocean coupling. Learn through case analysis, simulation, and mastery checkpoints.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ocean",
    "science"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply ocean circulation dynamics using explicit assumptions and constraints",
    "Design and execute workflows for marine ecosystem interactions with reliable control points",
    "Evaluate observation and measurement methods decisions using baseline and side-effect analysis",
    "Strengthen climate-ocean coupling with accountable governance mechanisms",
    "Communicate uncertainty and tradeoffs across stakeholder groups",
    "Build defensible recommendations resilient to critical review"
  ],
  "lessons": [
    {
      "id": "oceanography-301-l01",
      "title": "Oceanography Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "oceanography-301-l01-a1",
          "type": "image",
          "title": "Key Concepts Diagram",
          "content": "A visual map connecting the four branches of oceanography: physical, chemical, biological, and geological."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "We will explore the four main branches of oceanography—physical, chemical, biological, and geological—and establish a shared vocabulary. We'll then see how ocean circulation drives marine ecosystems and global climate, setting the stage for understanding climate change and conservation."
        },
        {
          "id": "oceanography-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "Here, you will create causal maps to visualize cause-and-effect relationships in ocean systems, like how nutrient upwelling affects fish populations. We will also uncover hidden assumptions that can bias our analysis, preparing you to design effective environmental interventions."
        },
        {
          "id": "oceanography-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This recap focuses on evidence-based reasoning. We'll cover how to select key indicators to validate claims, acknowledge uncertainties, and set up review checkpoints to ensure your conclusions are robust and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-301-l01-f1",
          "front": "Ocean Circulation Dynamics",
          "back": "A core analytical lens in Oceanography requiring careful assumption control."
        },
        {
          "id": "oceanography-301-l01-f2",
          "front": "Marine Ecosystem Interactions",
          "back": "Operational design practices that determine system reliability and execution quality."
        },
        {
          "id": "oceanography-301-l01-f3",
          "front": "Observation and Measurement Methods",
          "back": "The evaluation framework used to validate outcomes and detect hidden costs."
        }
      ]
    },
    {
      "id": "oceanography-301-l02",
      "title": "Oceanography Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "oceanography-301-l02-a1",
          "type": "practice",
          "title": "Workflow Blueprint",
          "content": "A template for designing a decision workflow, including stages for data intake, analysis, review gates, and action."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "In this lab, you'll design and test a decision-making workflow for managing ocean resources. You will integrate governance metrics and practice cross-functional collaboration to analyze system trade-offs. The goal is to build a process that remains reliable even when faced with incomplete data."
        },
        {
          "id": "oceanography-301-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "We'll review the critical components of a robust workflow: clear ownership mapping, defined criteria for decision gates, rollback plans for when things go wrong, and key performance indicators (KPIs) to track progress."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-301-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match controls to the strongest expected reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-release gate",
              "right": "Reduces preventable failures"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains blast radius quickly"
            },
            {
              "left": "Baseline monitor",
              "right": "Supports impact attribution"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "oceanography-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraint types into technical, policy, and stakeholder-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Throughput budget",
              "bucket": "Technical"
            },
            {
              "text": "Regulatory retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Public trust erosion risk",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Audit evidence requirement",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "oceanography-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-301-l03-a1",
          "type": "practice",
          "title": "Review Checklist",
          "content": "Before you start, review your notes on causal maps, workflow controls, and evidence discipline from the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "oceanography-301-l03-q1",
          "text": "Which approach most improves decisions in ocean circulation dynamics?",
          "skillId": "oceanography-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on assumptions that are never tested"
            },
            {
              "id": "b",
              "text": "Define constraints, test failure modes, and monitor indicators"
            },
            {
              "id": "c",
              "text": "Treat all contexts as identical"
            },
            {
              "id": "d",
              "text": "Avoid uncertainty analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require explicit constraints, failure tests, and measured signals."
        },
        {
          "id": "oceanography-301-l03-q2",
          "text": "The 301 level should emphasize:",
          "skillId": "oceanography-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoff analysis, metrics-governance integration, and cross-functional coordination"
            },
            {
              "id": "b",
              "text": "Execution speed without review"
            },
            {
              "id": "c",
              "text": "No baselines or controls"
            },
            {
              "id": "d",
              "text": "Single perspective decision-making"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This level is explicitly structured around system tradeoff analysis, metrics-governance integration, and cross-functional coordination."
        },
        {
          "id": "oceanography-301-l03-q3",
          "text": "What best strengthens marine ecosystem interactions reliability?",
          "skillId": "oceanography-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Unowned workflows and unclear escalation"
            },
            {
              "id": "b",
              "text": "Control checkpoints, ownership mapping, and response thresholds"
            },
            {
              "id": "c",
              "text": "Untracked changes"
            },
            {
              "id": "d",
              "text": "No incident review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on clear controls, owners, and threshold-driven responses."
        },
        {
          "id": "oceanography-301-l03-q4",
          "text": "For observation and measurement methods, which practice is most defensible?",
          "skillId": "oceanography-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal wins only"
            },
            {
              "id": "b",
              "text": "Compare against baselines and include side-effect checks"
            },
            {
              "id": "c",
              "text": "Ignore difficult scenarios"
            },
            {
              "id": "d",
              "text": "Adjust criteria after results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline and side-effect analysis prevents biased or incomplete conclusions."
        },
        {
          "id": "oceanography-301-l03-q5",
          "text": "A mature climate-ocean coupling model should include:",
          "skillId": "oceanography-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy disconnected from measurement"
            },
            {
              "id": "b",
              "text": "Policy links, measurable thresholds, and corrective pathways"
            },
            {
              "id": "c",
              "text": "No transparency obligations"
            },
            {
              "id": "d",
              "text": "No remediation expectations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governance maturity connects intention, measurement, and corrective response."
        }
      ]
    },
    {
      "id": "oceanography-301-l04",
      "title": "Oceanography Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "oceanography-301-l04-a1",
          "type": "image",
          "title": "Case Study Dashboard",
          "content": "A visual dashboard showing key data for the coastal ecosystem case: fishery yields, sea surface temperatures, and policy timelines."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-301-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "We will analyze a real-world case study of a coastal ecosystem, balancing the demands of a local fishery with the pressures of climate change and regulatory policies. Your task is to identify the highest-impact risks and the competing constraints that complicate decision-making."
        },
        {
          "id": "oceanography-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "You will use a tradeoff matrix to systematically evaluate potential interventions. This structured approach, which compares options against criteria like effectiveness and fairness, helps in making transparent and defensible choices."
        },
        {
          "id": "oceanography-301-l04-c3",
          "kind": "recap",
          "title": "Failure Learning and Recovery",
          "content": "This recap focuses on adaptive management. We will analyze common failure patterns to extract valuable lessons, then design safeguards, response playbooks, and monitoring protocols to build resilience and improve future outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured comparison of alternatives under competing priorities."
        },
        {
          "id": "oceanography-301-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring risk signature used to design targeted mitigations."
        },
        {
          "id": "oceanography-301-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined action sequence for safe and timely recovery."
        }
      ]
    },
    {
      "id": "oceanography-301-l05",
      "title": "Oceanography Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "oceanography-301-l05-a1",
          "type": "practice",
          "title": "Simulation Interface",
          "content": "An interactive dashboard where you can adjust variables (e.g., fishing quotas, carbon tax) and observe their impact on the ecosystem model over time."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this simulation, you will apply your analytical skills. You'll configure intervention scenarios by defining key parameters, setting uncertainty levels, and establishing clear thresholds for success. This is where theory meets practice."
        },
        {
          "id": "oceanography-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After running the simulations, we will hold a debrief session. You will present your results, analyze the outcomes and any unintended side effects, and evaluate how well your strategy adhered to the established governance constraints. This is a critical step for refining your decision-making process."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three strategies and justify which best advances ocean circulation dynamics and climate-ocean coupling.",
          "instructions": [
            "Define objective and guardrails before selecting interventions.",
            "Record near-term and long-term tradeoffs for each option.",
            "Select confirmation metrics and escalation triggers."
          ]
        },
        {
          "id": "oceanography-301-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match risk conditions to the strongest mitigation responses.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Define role map and escalation authority"
            },
            {
              "left": "Weak signal quality",
              "right": "Strengthen intake validation and monitoring"
            },
            {
              "left": "Policy drift",
              "right": "Re-anchor controls to explicit standards"
            },
            {
              "left": "Stakeholder opposition",
              "right": "Increase transparency and feedback channels"
            }
          ]
        }
      ]
    },
    {
      "id": "oceanography-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-301-l06-a1",
          "type": "practice",
          "title": "Case and Sim Review",
          "content": "Review your notes from the case analysis and simulation, focusing on tradeoff matrices, failure patterns, and intervention outcomes."
        }
      ],
      "questions": [
        {
          "id": "oceanography-301-l06-q1",
          "text": "When using a tradeoff matrix in a case analysis, what is its primary purpose?",
          "skillId": "oceanography-301-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To systematically compare multiple options against consistent criteria"
            },
            {
              "id": "c",
              "text": "To ignore stakeholder input"
            },
            {
              "id": "d",
              "text": "To focus only on financial cost"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structured comparison to make decision logic transparent, not to find a perfect or single-factor solution."
        },
        {
          "id": "oceanography-301-l06-q2",
          "text": "In the simulation studio, why is it important to define success thresholds *before* running the simulation?",
          "skillId": "oceanography-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To ensure the simulation always succeeds"
            },
            {
              "id": "b",
              "text": "To allow for changing the goals based on the results"
            },
            {
              "id": "c",
              "text": "To prevent confirmation bias and provide objective evaluation criteria"
            },
            {
              "id": "d",
              "text": "Because the software requires it"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Pre-defining success criteria establishes an objective baseline for evaluation and helps prevent the bias of adjusting goals to fit the outcome."
        },
        {
          "id": "oceanography-301-l06-q3",
          "text": "Analyzing failure patterns from past interventions helps to:",
          "skillId": "oceanography-301-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "Assign blame to specific individuals"
            },
            {
              "id": "b",
              "text": "Prove that all interventions are doomed to fail"
            },
            {
              "id": "c",
              "text": "Design targeted safeguards and more resilient future plans"
            },
            {
              "id": "d",
              "text": "Ignore the failures and focus only on successes"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The goal of analyzing failures is to learn and improve by creating better mitigations and more robust systems for the future."
        },
        {
          "id": "oceanography-301-l06-q4",
          "text": "What does a 'response playbook' (as discussed in the case analysis) provide?",
          "skillId": "oceanography-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "A rigid set of rules that can never be changed"
            },
            {
              "id": "b",
              "text": "A predefined action sequence for safe and timely recovery from known risks"
            },
            {
              "id": "c",
              "text": "A history of all past failures"
            },
            {
              "id": "d",
              "text": "A list of people to contact for any problem"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A response playbook contains pre-planned steps to manage a specific incident, ensuring a faster, safer, and more consistent recovery."
        },
        {
          "id": "oceanography-301-l06-q5",
          "text": "A key lesson from running intervention simulations with uncertainty is that:",
          "skillId": "oceanography-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The best plans work perfectly under all conditions"
            },
            {
              "id": "b",
              "text": "Uncertainty makes planning impossible"
            },
            {
              "id": "c",
              "text": "Robust strategies are those that perform reasonably well across a range of possible futures"
            },
            {
              "id": "d",
              "text": "Data from simulations is more important than real-world data"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Simulations teach us to design for resilience and robustness, favoring strategies that are not brittle and can handle a variety of conditions, rather than seeking a single 'perfect' outcome."
        }
      ]
    },
    {
      "id": "oceanography-301-l07",
      "title": "Oceanography Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "oceanography-301-l07-a1",
          "type": "image",
          "title": "Ethical Framework",
          "content": "A diagram illustrating the key pillars of responsible execution: fairness, transparency, and accountability."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "We will examine the ethical dimensions of ocean policy by mapping how benefits and burdens are distributed across different stakeholder groups and over time. This helps reveal issues of fairness and equity."
        },
        {
          "id": "oceanography-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section introduces the concept of an 'accountability architecture.' We will explore the mechanisms needed for decision traceability, stakeholder rights of review, and the obligation to remediate negative impacts. These are the pillars of trustworthy governance."
        },
        {
          "id": "oceanography-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "We conclude with a responsible execution checklist. This tool helps you connect technical implementation with policy compliance, ethical standards, and stakeholder trust, ensuring your work is not just effective but also principled."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-301-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes differ across stakeholder groups and timescales."
        },
        {
          "id": "oceanography-301-l07-f2",
          "front": "Decision Traceability",
          "back": "The evidence chain showing how and why a decision was made."
        },
        {
          "id": "oceanography-301-l07-f3",
          "front": "Responsible Execution",
          "back": "Delivery behavior that balances effectiveness with ethical and policy safeguards."
        }
      ]
    },
    {
      "id": "oceanography-301-l08",
      "title": "Oceanography Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "oceanography-301-l08-a1",
          "type": "practice",
          "title": "Capstone Charter Template",
          "content": "A structured document to guide your capstone project, with sections for problem statement, objectives, metrics, risks, and governance plan."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this lab, you will draft a charter for your capstone project. This document will serve as your blueprint, defining your project's objective, constraints, success metrics, and the governance gates you will use to manage progress and make key decisions."
        },
        {
          "id": "oceanography-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "A key part of the capstone is defending your proposal. You will practice preparing evidence-based arguments to address potential critiques from technical, policy, and stakeholder perspectives. This readiness exercise will build your confidence and strengthen your final project."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and remediation pathways.",
          "instructions": [
            "Define objective and boundary conditions.",
            "List at least three measurable success indicators.",
            "Define escalation and corrective action criteria."
          ]
        },
        {
          "id": "oceanography-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against technical, policy, and stakeholder objections."
        }
      ]
    }
  ]
};
