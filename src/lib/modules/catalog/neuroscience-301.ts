import type { LearningModule } from "@/lib/modules/types";

export const neuroscience_301_Module: LearningModule = {
  "id": "neuroscience-301",
  "title": "Neuroscience Systems and Governance",
  "description": "Level 301 curriculum in Neuroscience, focused on neural signaling, cognitive systems, experimental methods, and clinical translation, with rigorous scenario analysis and assessment-backed mastery.",
  "subject": "Neuroscience",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "biology",
    "cognition"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain and apply neural signaling principles using clear assumptions and constraints.",
    "Build repeatable workflows for cognitive systems with measurable checkpoints.",
    "Evaluate experimental method outcomes against baseline and target metrics.",
    "Use governance patterns to improve clinical translation decision quality.",
    "Communicate tradeoffs across technical, policy, and user-impact dimensions.",
    "Synthesize neuroscience methods into defensible recommendations."
  ],
  "lessons": [
    {
      "id": "neuroscience-301-l01",
      "title": "Neuroscience Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "neuroscience-301-l01-a1",
          "type": "image",
          "title": "Concept Map: Neural Systems",
          "content": "A visual diagram showing the relationships between neural signaling, cognitive systems, and environmental factors."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-301-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "This lesson establishes a common vocabulary for understanding neuroscience. By setting clear definitions for concepts like neural signaling and cognitive systems, we define the boundaries for our analysis. We will explore how these systems interact in real-world environments, providing a crucial foundation for effective communication and complex problem-solving. A shared vocabulary helps connect abstract concepts to practical decisions during assessment and practice."
        },
        {
          "id": "neuroscience-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "Learners will model causal paths to understand the relationships between different factors and their influence on outcomes. This process involves identifying hidden assumptions and verifying constraints before proposing interventions. Engaging in this critical thinking ensures that solutions are well-reasoned and robust, accounting for the complex web of causes and effects in neural systems."
        },
        {
          "id": "neuroscience-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This module introduces an evidence-first workflow. Every claim must be linked to observable, measurable indicators, and must account for expected uncertainty. This discipline ensures that conclusions are based on solid data, a critical practice in neuroscience for highlighting tradeoffs, verifying assumptions, and making defensible decisions."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-301-l01-f1",
          "front": "Neural Signaling",
          "back": "The process of communication between neurons. In systems analysis, this requires defining clear assumptions and measurable controls to model its effects."
        },
        {
          "id": "neuroscience-301-l01-f2",
          "front": "Cognitive Systems",
          "back": "The mental processes for acquiring and using knowledge. In a governance context, these are operational workflows that translate strategy into reliable, measurable actions."
        },
        {
          "id": "neuroscience-301-l01-f3",
          "front": "Experimental Methods",
          "back": "Procedures for testing hypotheses. In this curriculum, it's the evaluation layer that validates whether interventions improve outcomes against a baseline."
        }
      ]
    },
    {
      "id": "neuroscience-301-l02",
      "title": "Neuroscience Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "neuroscience-301-l02-a1",
          "type": "image",
          "title": "Method Sequence Diagram",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-301-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will construct and stress-test a sequence of methods for making system-level decisions. This hands-on experience involves balancing trade-offs, designing a metrics architecture, and making governance choices to understand how each step holds up under uncertainty. The goal is to build a robust, defensible decision-making process from start to finish."
        },
        {
          "id": "neuroscience-301-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "This recap assesses the readiness of a method for implementation. Key checks include mapping responsible owners, establishing a cadence for review checkpoints, defining triggers for rolling back decisions, and maintaining clear evidence logs. These steps ensure that methods are robust, accountable, and prepared for real-world application."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-301-l02-act1",
          "type": "matching_pairs",
          "title": "Method-to-Outcome Mapping",
          "description": "Match each design choice to the strongest expected system effect.",
          "pairs": [
            {
              "left": "Pre-release stress tests",
              "right": "Lower severe failure probability"
            },
            {
              "left": "Checkpoint gating",
              "right": "Prevents defect propagation"
            },
            {
              "left": "Baseline comparison",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Retrospective review",
              "right": "Improves next-iteration decisions"
            }
          ]
        },
        {
          "id": "neuroscience-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraints into technical, policy, and user-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "User Impact"
          ],
          "items": [
            {
              "text": "Latency budget",
              "bucket": "Technical"
            },
            {
              "text": "Audit retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Accessibility burden",
              "bucket": "User Impact"
            },
            {
              "text": "Human review threshold",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "neuroscience-301-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-301-l03-q1",
          "text": "Which practice most strengthens the analysis of neural signaling in real deployments?",
          "skillId": "neuroscience-301-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Use assumptions without documenting them"
            },
            {
              "id": "b",
              "text": "Define failure criteria and monitor leading indicators"
            },
            {
              "id": "c",
              "text": "Evaluate outcomes only once per year"
            },
            {
              "id": "d",
              "text": "Avoid stress-testing edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit failure criteria and leading indicators improve early detection and response, making the analysis more robust."
        },
        {
          "id": "neuroscience-301-l03-q2",
          "text": "At level 301, Neuroscience work should prioritize:",
          "skillId": "neuroscience-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoffs, metrics architecture, and governance decisions"
            },
            {
              "id": "b",
              "text": "Speed over traceability in all cases"
            },
            {
              "id": "c",
              "text": "No validation loops after release"
            },
            {
              "id": "d",
              "text": "Single-metric optimization without context"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 301 sequence is designed around system tradeoffs, metrics architecture, and governance decisions."
        },
        {
          "id": "neuroscience-301-l03-q3",
          "text": "What is the strongest indicator of a healthy cognitive system workflow?",
          "skillId": "neuroscience-301-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Untracked interventions and ad-hoc approvals"
            },
            {
              "id": "b",
              "text": "Clear owner mapping, review cadence, and measurable thresholds"
            },
            {
              "id": "c",
              "text": "Skipping post-incident analysis"
            },
            {
              "id": "d",
              "text": "Changing targets after observing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stable systems require clear ownership, decision cadence, and measurable controls."
        },
        {
          "id": "neuroscience-301-l03-q4",
          "text": "When improving experimental methods, which approach is most defensible?",
          "skillId": "neuroscience-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal wins as sole evidence"
            },
            {
              "id": "b",
              "text": "Compare against baselines and include failure analysis"
            },
            {
              "id": "c",
              "text": "Remove difficult test scenarios"
            },
            {
              "id": "d",
              "text": "Ignore lagging outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis reduce bias and reveal true system performance."
        },
        {
          "id": "neuroscience-301-l03-q5",
          "text": "A mature clinical translation strategy should include:",
          "skillId": "neuroscience-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No escalation path for critical defects"
            },
            {
              "id": "b",
              "text": "Policy, measurement, and escalation pathways linked to impact tiers"
            },
            {
              "id": "c",
              "text": "One-time governance review only"
            },
            {
              "id": "d",
              "text": "Separation between metrics and decisions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective governance connects policy intent to measurement and response action."
        }
      ]
    },
    {
      "id": "neuroscience-301-l04",
      "title": "Neuroscience Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "neuroscience-301-l04-a1",
          "type": "image",
          "title": "Decision Tradeoff Matrix Template",
          "content": "A structured grid for comparing intervention options across criteria like performance, cost, and risk."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-301-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this case study, we analyze a patient with cognitive symptoms. Learners will link these symptoms to specific neural circuits, evaluate potential interventions, and distinguish between evidence and assumptions. The analysis will highlight the significant risks and real-world implications of each decision, deepening the understanding of applied neuroscience."
        },
        {
          "id": "neuroscience-301-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "We will use a decision tradeoff matrix to systematically evaluate intervention alternatives. This tool helps compare options across multiple criteria, such as performance, reliability, cost, and equity. By scoring each alternative, learners can make a well-informed and balanced selection for the most appropriate intervention path."
        },
        {
          "id": "neuroscience-301-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "This recap focuses on categorizing failure patterns to transform isolated incidents into reusable design safeguards. By analyzing what went wrong in past cases, learners can develop proactive strategies to prevent similar issues, creating more resilient and effective systems."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing options across competing priorities before choosing an intervention."
        },
        {
          "id": "neuroscience-301-l04-f2",
          "front": "Failure Mode",
          "back": "A specific way in which a system can fail to perform its intended function, often revealing underlying vulnerabilities."
        },
        {
          "id": "neuroscience-301-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined condition or metric value that triggers a higher-level review or corrective action."
        }
      ]
    },
    {
      "id": "neuroscience-301-l05",
      "title": "Neuroscience Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "neuroscience-301-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard Mockup",
          "content": "A visual representation of a simulation interface, showing key inputs, variables, and output metrics."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive session, learners configure a simulation scenario. This involves setting up a model with clear assumptions about uncertainties and defining success metrics linked to clinical translation. This controlled environment allows for the exploration of various outcomes and the impact of different decisions."
        },
        {
          "id": "neuroscience-301-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, learners engage in a review loop. This reflective practice involves examining the evidence generated, checking for alignment with policy guidelines, and identifying actions for improvement. This iterative process is crucial for enhancing decision-making skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-301-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies and justify which option best advances neural signaling and clinical translation.",
          "instructions": [
            "Define the primary objective and guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "neuroscience-301-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Mapping",
          "description": "Match each failure condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Unreliable input data",
              "right": "Introduce quality contracts and quarantine checks"
            },
            {
              "left": "Policy ambiguity",
              "right": "Define decision authority and escalation rules"
            },
            {
              "left": "Metric drift",
              "right": "Re-baseline and monitor leading indicators"
            },
            {
              "left": "User trust decline",
              "right": "Increase transparency and corrective feedback loops"
            }
          ]
        }
      ]
    },
    {
      "id": "neuroscience-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson scaffold, show your reasoning, and verify assumptions before finalizing your answer."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-301-l06-q1",
          "text": "What is the primary purpose of a decision tradeoff matrix in a clinical case analysis?",
          "skillId": "neuroscience-301-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To systematically compare intervention options across multiple, competing criteria"
            },
            {
              "id": "c",
              "text": "To select the cheapest option regardless of other factors"
            },
            {
              "id": "d",
              "text": "To document decisions after they have already been made"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate options based on criteria like performance, cost, and equity, making the final decision more defensible."
        },
        {
          "id": "neuroscience-301-l06-q2",
          "text": "Analyzing failure modes from past incidents is most valuable for:",
          "skillId": "neuroscience-301-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame to individuals"
            },
            {
              "id": "b",
              "text": "Developing reusable design safeguards to prevent future issues"
            },
            {
              "id": "c",
              "text": "Ignoring the incidents to focus on new features"
            },
            {
              "id": "d",
              "text": "Proving that the system is flawless"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of failure analysis is to learn from mistakes and build more resilient systems by creating proactive safeguards."
        },
        {
          "id": "neuroscience-301-l06-q3",
          "text": "When setting up a simulation for a new intervention, what is a critical first step?",
          "skillId": "neuroscience-301-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "Running the simulation with random inputs to see what happens"
            },
            {
              "id": "b",
              "text": "Hiding all assumptions to avoid biasing the results"
            },
            {
              "id": "c",
              "text": "Defining clear success metrics and documenting key assumptions about uncertainty"
            },
            {
              "id": "d",
              "text": "Ensuring the simulation always produces a positive outcome"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A useful simulation requires a clear definition of success and explicit assumptions to ensure the results are interpretable and meaningful."
        },
        {
          "id": "neuroscience-301-l06-q4",
          "text": "If a system suffers from 'policy ambiguity', what is the strongest mitigation?",
          "skillId": "neuroscience-301-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Increase the amount of data processed"
            },
            {
              "id": "b",
              "text": "Define clear decision authority and rules for escalation"
            },
            {
              "id": "c",
              "text": "Re-baseline all performance metrics"
            },
            {
              "id": "d",
              "text": "Launch a marketing campaign to improve user trust"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Policy ambiguity is a governance problem, best solved by clarifying who has the authority to make decisions and when to escalate issues."
        },
        {
          "id": "neuroscience-301-l06-q5",
          "text": "The main function of a 'decision review loop' after a simulation round is to:",
          "skillId": "neuroscience-301-skill-review-loop",
          "options": [
            {
              "id": "a",
              "text": "Immediately start the next round without changes"
            },
            {
              "id": "b",
              "text": "Reflect on evidence, check policy alignment, and identify actions for improvement"
            },
            {
              "id": "c",
              "text": "Delete the simulation results to save space"
            },
            {
              "id": "d",
              "text": "Confirm that the initial hypothesis was correct, regardless of the data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The review loop is a structured process for learning and iteration, ensuring that each simulation round provides actionable insights."
        }
      ]
    },
    {
      "id": "neuroscience-301-l07",
      "title": "Neuroscience Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "neuroscience-301-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual tool for identifying and analyzing the effects of a decision on various stakeholder groups."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this section, learners conduct a stakeholder analysis to identify who benefits from a decision, who bears the risks, and how policy choices shape outcomes for different groups. This is essential for making equitable and ethically-informed decisions in neuroscience."
        },
        {
          "id": "neuroscience-301-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "This section explores how governance mechanisms create accountability. We will connect governance frameworks to measurable controls, transparency obligations, and clear pathways for remediation, ensuring that decisions are responsible and their consequences are managed."
        },
        {
          "id": "neuroscience-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before deploying new neuroscience technologies, a responsible execution checklist ensures decisions are well-informed. This involves a systematic review of legal compliance, ethical implications, technical robustness, and user impact. This practice balances innovation with safety and public trust, highlighting tradeoffs and verifying assumptions."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-301-l07-f1",
          "front": "Stakeholder Map",
          "back": "A framework that visualizes and tracks the distribution of impact across all affected groups."
        },
        {
          "id": "neuroscience-301-l07-f2",
          "front": "Accountability Loop",
          "back": "A repeatable process connecting outcomes to ownership, enabling review and corrective action."
        },
        {
          "id": "neuroscience-301-l07-f3",
          "front": "Responsible Execution",
          "back": "A delivery practice that balances system performance with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "neuroscience-301-l08",
      "title": "Neuroscience Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "neuroscience-301-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "A one-page document outline for defining a project's scope, goals, metrics, and governance."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this interactive lab, learners create a detailed capstone charter. This document serves as a project roadmap, outlining primary goals, potential risks, success metrics, and governance checkpoints. This exercise develops critical project management and strategic planning skills by preparing learners to tackle real-world challenges."
        },
        {
          "id": "neuroscience-301-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "This lesson provides a defense preparation template to help learners structure their arguments. The template focuses on making strong, evidence-backed claims and clearly articulating decision tradeoffs. This practice builds confidence and enhances the ability to defend choices in a thoughtful, persuasive manner."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a one-page capstone charter with metrics, controls, and success criteria.",
          "instructions": [
            "State the primary objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Identify one ethical or policy risk and a corresponding mitigation plan."
          ]
        },
        {
          "id": "neuroscience-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your capstone approach against cost, risk, and equity critiques."
        }
      ]
    }
  ]
};
