import type { LearningModule } from "@/lib/modules/types";

export const negotiation_conflict_resolution_401_Module: LearningModule = {
  "id": "negotiation-conflict-resolution-401",
  "title": "Negotiation and Conflict Resolution Leadership and Capstone",
  "description": "Level 401 curriculum in Negotiation and Conflict Resolution, focused on interest mapping, agreement design, de-escalation methods, and durable relationship repair through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Human Development",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "leadership",
    "communication"
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
    "Apply interest mapping with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for agreement design under realistic constraints",
    "Evaluate de-escalation methods decisions with baseline and side-effect analysis",
    "Strengthen durable relationship repair with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "negotiation-conflict-resolution-401-l01",
      "title": "Core Foundations of Negotiation",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "negotiation-conflict-resolution-401-l01-a1",
          "type": "diagram",
          "title": "Interest Map Example",
          "content": "A visual diagram showing multiple stakeholders, their stated positions, and their underlying interests, with lines connecting shared and conflicting points."
        }
      ],
      "chunks": [
        {
          "id": "negotiation-conflict-resolution-401-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "In this lesson, we will establish a shared vocabulary for negotiation. We'll define operational language, set clear boundaries for discussion, and see how interest mapping and agreement design work together in practice. Understanding these core elements is the first step to resolving conflicts successfully."
        },
        {
          "id": "negotiation-conflict-resolution-401-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Here, we will model cause-and-effect pathways to understand how actions lead to outcomes. We will practice identifying hidden assumptions that can lead to errors, especially under pressure. This skill helps you select the right interventions and avoid predictable failures."
        },
        {
          "id": "negotiation-conflict-resolution-401-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, all claims must be supported by observable evidence. We will practice defining clear indicators, establishing uncertainty bounds, and using review checkpoints to ensure our conclusions are reliable and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "negotiation-conflict-resolution-401-l01-f1",
          "front": "Interest Mapping",
          "back": "The process of identifying and analyzing the underlying needs, desires, and concerns of all parties in a negotiation, distinct from their stated positions."
        },
        {
          "id": "negotiation-conflict-resolution-401-l01-f2",
          "front": "Agreement Design",
          "back": "The structured process of creating a durable, practical, and verifiable plan that meets the core interests of all parties and can withstand real-world challenges."
        },
        {
          "id": "negotiation-conflict-resolution-401-l01-f3",
          "front": "De-escalation Methods",
          "back": "Specific techniques and strategies used to reduce tension, manage emotions, and create a more constructive environment for resolving conflict."
        }
      ]
    },
    {
      "id": "negotiation-conflict-resolution-401-l02",
      "title": "Negotiation Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "negotiation-conflict-resolution-401-l02-a1",
          "type": "diagram",
          "title": "Workflow with Control Gates",
          "content": "A flowchart illustrating a decision-making process, showing key stages, control gates for review, and feedback loops for continuous improvement."
        }
      ],
      "chunks": [
        {
          "id": "negotiation-conflict-resolution-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a negotiation workflow that aligns strategic policies with day-to-day operations. We will stress-test your design against uncertainty to build resilience and prepare you for the capstone defense."
        },
        {
          "id": "negotiation-conflict-resolution-401-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To ensure operational readiness, a robust workflow must map responsibilities, establish control gates for quality assurance, and include verification hooks to check decisions after they are made. This structure provides control and enables effective response."
        }
      ],
      "interactiveActivities": [
        {
          "id": "negotiation-conflict-resolution-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each control mechanism to its strongest expected system benefit.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Reduces preventable defects"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits blast radius during failures"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "negotiation-conflict-resolution-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Classification",
          "description": "Sort constraints into technical, policy, and stakeholder-impact buckets.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Service latency target",
              "bucket": "Technical"
            },
            {
              "text": "Compliance retention rule",
              "bucket": "Policy"
            },
            {
              "text": "Community trust risk",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Incident disclosure protocol",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "negotiation-conflict-resolution-401-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "negotiation-conflict-resolution-401-l03-a1",
          "type": "checklist",
          "title": "Pre-Quiz Checklist",
          "content": "Review these key concepts before you begin: Interest Mapping vs. Positions, Causal Reasoning, Evidence Standards, and Workflow Control Gates."
        }
      ],
      "questions": [
        {
          "id": "negotiation-conflict-resolution-401-l03-q1",
          "text": "Which action most improves interest mapping quality in practice?",
          "skillId": "negotiation-conflict-resolution-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Skip explicit constraints and rely on intuition"
            },
            {
              "id": "b",
              "text": "Define assumptions, monitor indicators, and test failure cases"
            },
            {
              "id": "c",
              "text": "Treat all outcomes as equivalent"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and variance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions require explicit assumptions and measurable stress tests."
        },
        {
          "id": "negotiation-conflict-resolution-401-l03-q2",
          "text": "At level 401, the strongest emphasis is on:",
          "skillId": "negotiation-conflict-resolution-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Strategic leadership, policy and operations alignment, and capstone defense and review"
            },
            {
              "id": "b",
              "text": "Fast execution with no review loops"
            },
            {
              "id": "c",
              "text": "Single stakeholder perspective only"
            },
            {
              "id": "d",
              "text": "Outcome claims without baselines"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 401 layer is explicitly designed around strategic leadership, policy and operations alignment, and capstone defense and review."
        },
        {
          "id": "negotiation-conflict-resolution-401-l03-q3",
          "text": "What best strengthens agreement design reliability?",
          "skillId": "negotiation-conflict-resolution-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "No ownership for incident response"
            },
            {
              "id": "b",
              "text": "Clear control points, owner mapping, and escalation thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc changes without logs"
            },
            {
              "id": "d",
              "text": "No postmortem process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation are explicit and repeatable."
        },
        {
          "id": "negotiation-conflict-resolution-401-l03-q4",
          "text": "When evaluating de-escalation methods, which approach is most defensible?",
          "skillId": "negotiation-conflict-resolution-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal examples only"
            },
            {
              "id": "b",
              "text": "Compare interventions against a baseline and monitor side effects"
            },
            {
              "id": "c",
              "text": "Remove difficult scenarios from evaluation"
            },
            {
              "id": "d",
              "text": "Change target definitions after results are known"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline comparison and side-effect monitoring reduce overclaiming and hidden risk."
        },
        {
          "id": "negotiation-conflict-resolution-401-l03-q5",
          "text": "A mature durable relationship repair model should include:",
          "skillId": "negotiation-conflict-resolution-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "One-time review with no corrective pathway"
            },
            {
              "id": "b",
              "text": "Policy links, measurable thresholds, and remediation triggers"
            },
            {
              "id": "c",
              "text": "No public or stakeholder transparency"
            },
            {
              "id": "d",
              "text": "Unbounded discretion without guardrails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects policy goals to measurable thresholds and corrective pathways."
        }
      ]
    },
    {
      "id": "negotiation-conflict-resolution-401-l04",
      "title": "Case Analysis: The Waterfront Dispute",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "negotiation-conflict-resolution-401-l04-a1",
          "type": "image",
          "title": "Sample Tradeoff Matrix",
          "content": "A table comparing three proposed solutions against criteria like 'Cost,' 'Timeline,' 'Community Impact,' and 'Long-Term Viability,' with cells color-coded for clarity."
        }
      ],
      "chunks": [
        {
          "id": "negotiation-conflict-resolution-401-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this case, we analyze a multi-party dispute where trust has broken down. You will map the stakes for each party and identify hidden risks. This exercise highlights the complexity of negotiation when communication is fractured and interests are deeply opposed."
        },
        {
          "id": "negotiation-conflict-resolution-401-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "We will construct a tradeoff matrix to systematically compare potential interventions. This tool helps you evaluate options based on criteria like effectiveness, reliability, fairness, and feasibility, leading to more structured and defensible decisions."
        },
        {
          "id": "negotiation-conflict-resolution-401-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "This lesson focuses on turning failures into safeguards. We will practice creating response playbooks for potential setbacks and establishing monitoring protocols to track progress. This proactive approach ensures we learn from experience and improve future outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "negotiation-conflict-resolution-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A decision-making tool used to systematically compare multiple options against a set of weighted criteria, making tradeoffs explicit."
        },
        {
          "id": "negotiation-conflict-resolution-401-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring, observable pattern of indicators that signals a specific type of systemic risk or impending failure."
        },
        {
          "id": "negotiation-conflict-resolution-401-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented, step-by-step plan designed to guide a safe, timely, and effective response during and after an adverse event."
        }
      ]
    },
    {
      "id": "negotiation-conflict-resolution-401-l05",
      "title": "Simulation Studio: Crisis Response",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "negotiation-conflict-resolution-401-l05-a1",
          "type": "image",
          "title": "Simulation Interface",
          "content": "A screenshot of the interactive simulation, showing a scenario description, intervention options with sliders for resource allocation, and a dashboard with key performance indicators."
        }
      ],
      "chunks": [
        {
          "id": "negotiation-conflict-resolution-401-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive simulation, you will configure and test different interventions in a crisis scenario. You will define uncertainty parameters and set measurable thresholds for success to see how your choices impact the outcome."
        },
        {
          "id": "negotiation-conflict-resolution-401-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation, we will debrief the results. This involves assessing whether expected gains were achieved, identifying unintended side effects, and ensuring all actions complied with governance standards. This reflective process is essential for improving your strategic judgment."
        }
      ],
      "interactiveActivities": [
        {
          "id": "negotiation-conflict-resolution-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances interest mapping and durable relationship repair.",
          "instructions": [
            "Define your primary objective and non-negotiable guardrails before selecting an intervention.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that will either confirm or falsify the effectiveness of your choice."
          ]
        },
        {
          "id": "negotiation-conflict-resolution-401-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Create explicit role and escalation map"
            },
            {
              "left": "Weak signal quality",
              "right": "Strengthen intake validation and quality checks"
            },
            {
              "left": "Policy drift",
              "right": "Re-anchor controls to documented standards"
            },
            {
              "left": "Stakeholder backlash",
              "right": "Increase transparency and two-way communication"
            }
          ]
        }
      ]
    },
    {
      "id": "negotiation-conflict-resolution-401-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "negotiation-conflict-resolution-401-l06-a1",
          "type": "diagram",
          "title": "Risk Mitigation Pathways",
          "content": "A decision tree diagram showing a primary risk, branching into potential mitigation strategies, and leading to different potential outcomes with associated probabilities."
        }
      ],
      "questions": [
        {
          "id": "negotiation-conflict-resolution-401-l06-q1",
          "text": "In a case analysis, what is the primary function of a tradeoff matrix?",
          "skillId": "negotiation-conflict-resolution-401-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To visually compare potential solutions across multiple, competing criteria"
            },
            {
              "id": "c",
              "text": "To document only the financial costs of a decision"
            },
            {
              "id": "d",
              "text": "To replace direct communication with stakeholders"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is designed for structured comparison across conflicting priorities like cost, fairness, and reliability."
        },
        {
          "id": "negotiation-conflict-resolution-401-l06-q2",
          "text": "Identifying a 'failure signature' during a case analysis helps leaders to:",
          "skillId": "negotiation-conflict-resolution-401-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Assign blame to a single individual"
            },
            {
              "id": "b",
              "text": "Ignore the problem until it escalates"
            },
            {
              "id": "c",
              "text": "Recognize and proactively address a recurring pattern of systemic risk"
            },
            {
              "id": "d",
              "text": "Justify using the same solution for every problem"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A failure signature is a recurring pattern that points to a systemic risk, enabling proactive mitigation."
        },
        {
          "id": "negotiation-conflict-resolution-401-l06-q3",
          "text": "A well-designed recovery playbook should primarily focus on:",
          "skillId": "negotiation-conflict-resolution-401-skill-response",
          "options": [
            {
              "id": "a",
              "text": "A rigid, unchangeable set of rules"
            },
            {
              "id": "b",
              "text": "Documenting a sequence of actions for safe and timely response during a crisis"
            },
            {
              "id": "c",
              "text": "A list of people to blame after an incident"
            },
            {
              "id": "d",
              "text": "Theoretical concepts without practical steps"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Playbooks provide clear, actionable steps to manage adverse events safely and efficiently."
        },
        {
          "id": "negotiation-conflict-resolution-401-l06-q4",
          "text": "During a simulation debrief, what is a critical step for learning and improvement?",
          "skillId": "negotiation-conflict-resolution-401-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on the successful outcomes"
            },
            {
              "id": "b",
              "text": "Ignoring any unexpected side effects"
            },
            {
              "id": "c",
              "text": "Comparing the actual results against expected gains and governance standards"
            },
            {
              "id": "d",
              "text": "Declaring the simulation a success regardless of the data"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The debrief process is for critically evaluating outcomes, including side effects and compliance, to refine strategies."
        },
        {
          "id": "negotiation-conflict-resolution-401-l06-q5",
          "text": "In the 'Mitigation Alignment' simulation, if you identify 'ambiguous ownership' as a key risk, what is the strongest mitigation response?",
          "skillId": "negotiation-conflict-resolution-401-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Hope that someone takes charge"
            },
            {
              "id": "b",
              "text": "Increase the project budget"
            },
            {
              "id": "c",
              "text": "Create an explicit map of roles, responsibilities, and escalation paths"
            },
            {
              "id": "d",
              "text": "Cancel the project immediately"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Ambiguity in ownership is best solved with clarity through explicit documentation of roles and processes."
        }
      ]
    },
    {
      "id": "negotiation-conflict-resolution-401-l07",
      "title": "Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "negotiation-conflict-resolution-401-l07-a1",
          "type": "infographic",
          "title": "Stakeholder Impact Map",
          "content": "An infographic showing a central decision point with radiating lines to different stakeholder groups, detailing the positive, negative, and neutral impacts for each."
        }
      ],
      "chunks": [
        {
          "id": "negotiation-conflict-resolution-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will map the impact of our decisions on all stakeholders. It is critical to identify how benefits and burdens are distributed, especially when the effects are unequal. This analysis helps ensure our decisions are equitable and fair."
        },
        {
          "id": "negotiation-conflict-resolution-401-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "To ensure accountability, we must design clear pathways for tracing decisions back to their origins. This includes defining rights for review and appeal, and setting clear standards for remediation when things go wrong. This structure fosters responsibility and transparency."
        },
        {
          "id": "negotiation-conflict-resolution-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "We conclude by creating a final checklist for responsible execution. This tool integrates four key criteria: policy adherence, ethical considerations, technical reliability, and stakeholder trust. Using this checklist ensures a holistic and responsible approach to implementing agreements."
        }
      ],
      "flashcards": [
        {
          "id": "negotiation-conflict-resolution-401-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the benefits and harms of a decision are allocated across different stakeholder groups."
        },
        {
          "id": "negotiation-conflict-resolution-401-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to reconstruct and explain why a decision was made, by whom, and based on what evidence and criteria."
        },
        {
          "id": "negotiation-conflict-resolution-401-l07-f3",
          "front": "Responsible Execution",
          "back": "A mode of delivery that balances effectiveness with fairness, transparency, and the capacity for correction."
        }
      ]
    },
    {
      "id": "negotiation-conflict-resolution-401-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "negotiation-conflict-resolution-401-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "A document template with clearly marked sections for 'Project Scope,' 'Success Metrics,' 'Identified Constraints,' and 'Governance Checkpoints.'"
        }
      ],
      "chunks": [
        {
          "id": "negotiation-conflict-resolution-401-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this interactive lab, you will draft a decision charter for your capstone project. This document will define the project's scope, constraints, success metrics, and governance checkpoints, providing a clear roadmap for execution and evaluation."
        },
        {
          "id": "negotiation-conflict-resolution-401-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "To prepare for your final presentation, we will focus on building evidence-based justifications for your approach. This includes anticipating critical feedback and developing robust, data-driven responses to defend your work effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "negotiation-conflict-resolution-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your primary objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Document a governance escalation pathway for critical failures."
          ]
        },
        {
          "id": "negotiation-conflict-resolution-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against technical, policy, and stakeholder critiques."
        }
      ]
    }
  ]
};
