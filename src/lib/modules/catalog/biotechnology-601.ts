import type { LearningModule } from "@/lib/modules/types";

export const biotechnology_601_Module: LearningModule = {
  "id": "biotechnology-601",
  "title": "Biotechnology Research and Leadership",
  "description": "Post-401 specialization in Biotechnology, focused on bioprocess optimization, translational validation, regulatory quality systems, and bioethics governance through advanced casework, simulation, and capstone-level defense.",
  "subject": "Biotechnology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "life-sciences",
    "biotech"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply advanced methods for bioprocess optimization in high-constraint environments",
    "Engineer repeatable workflows that improve translational validation under uncertainty",
    "Evaluate interventions in regulatory quality systems with research-grade evidence standards",
    "Operationalize bioethics governance with transparent accountability and remediation loops",
    "Lead cross-functional decision reviews with clear tradeoff reasoning",
    "Deliver capstone-quality artifacts that withstand expert critique"
  ],
  "lessons": [
    {
      "id": "biotechnology-601-l01",
      "title": "Biotechnology Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-601-l01-a1",
          "type": "image",
          "title": "Core Concepts Interplay",
          "content": "Diagram showing the intersection of Bioprocess Optimization, Translational Validation, and Regulatory Systems, highlighting their codependence."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-601-l01-c1",
          "kind": "concept",
          "title": "Advanced Scope and Decision Boundaries",
          "content": "In this lesson, we will explore the advanced boundaries of biotechnology. We will learn how bioprocess optimization—making biotechnological methods more efficient—interacts with translational validation and regulatory systems. Understanding how these complex systems work together is key to grasping the bigger picture of modern biotechnology."
        },
        {
          "id": "biotechnology-601-l01-c2",
          "kind": "concept",
          "title": "Causal Structure Under Uncertainty",
          "content": "Here, you will learn to model the cause-and-effect pathways in biotechnological processes. We will analyze the ranges of uncertainty that can affect decisions and identify hidden assumptions. This foundational understanding is crucial before designing any interventions or solutions."
        },
        {
          "id": "biotechnology-601-l01-c3",
          "kind": "recap",
          "title": "Evidence and Rigor Standards",
          "content": "To recap, all claims in advanced biotechnology must be supported by measurable indicators and clear evidence. We've discussed the importance of using confidence bounds and review checkpoints to ensure our findings are rigorous, reliable, and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-601-l01-f1",
          "front": "Bioprocess optimization",
          "back": "A specialization in Biotechnology focused on improving process efficiency and outcomes by making explicit assumptions and measured tradeoff choices."
        },
        {
          "id": "biotechnology-601-l01-f2",
          "front": "Translational validation",
          "back": "The process of ensuring that complex scientific workflows remain reliable and effective when transitioning from research to real-world application."
        },
        {
          "id": "biotechnology-601-l01-f3",
          "front": "Regulatory quality systems",
          "back": "The framework and practices used to evaluate and validate outcomes beyond headline metrics, ensuring safety, efficacy, and compliance."
        }
      ]
    },
    {
      "id": "biotechnology-601-l02",
      "title": "Biotechnology Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "biotechnology-601-l02-a1",
          "type": "image",
          "title": "Workflow Design Template",
          "content": "A visual flowchart template for building a research workflow, with placeholders for methods, control gates, and stress-test scenarios."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-601-l02-c1",
          "kind": "practice",
          "title": "Method Sequence and Stress Test",
          "content": "In this interactive lab, you will design a specialized workflow that requires research-grade reasoning and informed leadership decisions. After constructing your workflow, you will stress-test it against challenging scenarios to identify its strengths and weaknesses, preparing you for real-world applications."
        },
        {
          "id": "biotechnology-601-l02-c2",
          "kind": "recap",
          "title": "Controls and Failure Gates",
          "content": "In summary, effective workflows must incorporate control gates to monitor progress, rollback criteria to revert steps if necessary, and accountability checkpoints to ensure clear ownership and responsibility throughout the process."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match advanced controls with the strongest expected system effect.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Prevents avoidable downstream defects"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains impact quickly when failures emerge"
            },
            {
              "left": "Baseline monitoring",
              "right": "Enables defensible impact attribution"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves next-iteration design quality"
            }
          ]
        },
        {
          "id": "biotechnology-601-l02-act2",
          "type": "sorting_buckets",
          "title": "Advanced Constraint Classification",
          "description": "Sort constraints into technical, governance, and stakeholder-impact categories.",
          "buckets": [
            "Technical",
            "Governance",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Latency budget violation",
              "bucket": "Technical"
            },
            {
              "text": "Audit traceability requirement",
              "bucket": "Governance"
            },
            {
              "text": "Trust and adoption decline",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Escalation policy noncompliance",
              "bucket": "Governance"
            }
          ]
        }
      ]
    },
    {
      "id": "biotechnology-601-l03",
      "title": "Checkpoint 1: Foundations and Methods",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "biotechnology-601-l03-a1",
          "type": "image",
          "title": "Checkpoint 1 Review",
          "content": "A checklist summarizing key concepts from the Foundations and Methods Lab lessons to prepare for the quiz."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-601-l03-q1",
          "text": "What is the primary goal of modeling causal structures under uncertainty in biotechnology?",
          "skillId": "biotechnology-601-skill-foundations",
          "options": [
            {
              "id": "a",
              "text": "To guarantee a successful outcome for every project."
            },
            {
              "id": "b",
              "text": "To identify hidden assumptions and potential failure points before designing an intervention."
            },
            {
              "id": "c",
              "text": "To eliminate all variables from the research process."
            },
            {
              "id": "d",
              "text": "To focus only on the most optimistic scenarios."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Modeling causal pathways helps reveal underlying assumptions and risks, which is a critical foundational step for robust project design."
        },
        {
          "id": "biotechnology-601-l03-q2",
          "text": "In the context of a specialist methods lab, what is the main purpose of a 'stress test'?",
          "skillId": "biotechnology-601-skill-methods",
          "options": [
            {
              "id": "a",
              "text": "To prove the workflow is perfect and has no weaknesses."
            },
            {
              "id": "b",
              "text": "To identify the breaking points and limitations of a workflow by exposing it to difficult scenarios."
            },
            {
              "id": "c",
              "text": "To speed up the workflow under normal operating conditions."
            },
            {
              "id": "d",
              "text": "To simplify the workflow by removing complex steps."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stress testing is designed to proactively find vulnerabilities by simulating challenging conditions, which helps in building more resilient systems."
        },
        {
          "id": "biotechnology-601-l03-q3",
          "text": "A 'rollback threshold' is a control gate designed to:",
          "skillId": "biotechnology-601-skill-controls",
          "options": [
            {
              "id": "a",
              "text": "Ensure a project never encounters any failures."
            },
            {
              "id": "b",
              "text": "Automatically approve the next stage of a project."
            },
            {
              "id": "c",
              "text": "Define a clear trigger point for reverting to a previous, stable state when a failure occurs."
            },
            {
              "id": "d",
              "text": "Assign blame after a project is completed."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A rollback threshold is a pre-defined criterion that, when met, initiates a return to a known good state, thereby containing the impact of a failure."
        },
        {
          "id": "biotechnology-601-l03-q4",
          "text": "Why are evidence and rigor standards, such as confidence bounds, essential in advanced biotechnology?",
          "skillId": "biotechnology-601-skill-rigor",
          "options": [
            {
              "id": "a",
              "text": "They make research reports longer and more complex."
            },
            {
              "id": "b",
              "text": "They provide a defensible and transparent account of a finding's reliability and limitations."
            },
            {
              "id": "c",
              "text": "They are only important for academic publications, not for industry."
            },
            {
              "id": "d",
              "text": "They allow researchers to hide unfavorable data."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigor standards ensure that claims are backed by solid evidence and that the degree of uncertainty is clearly communicated, which is vital for high-stakes decisions."
        }
      ]
    },
    {
      "id": "biotechnology-601-l04",
      "title": "Biotechnology Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-601-l04-a1",
          "type": "image",
          "title": "Example Tradeoff Matrix",
          "content": "An image of a populated tradeoff matrix, scoring three potential therapeutic pathways against criteria like efficacy, feasibility, and ethical considerations."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-601-l04-c1",
          "kind": "example",
          "title": "Case Stakes and Competing Objectives",
          "content": "In this case study, we will analyze a therapeutic biotechnology program transitioning from lab results to clinical trials. You will map the program's strategic objectives, identify potential failure points, and examine the governance constraints that influence decision-making before any action is taken."
        },
        {
          "id": "biotechnology-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "We will use a tradeoff matrix to systematically score different strategic options. Each choice will be evaluated against key criteria such as effectiveness, reliability, equity, and feasibility. This structured scoring process enables more objective and defensible decision-making."
        },
        {
          "id": "biotechnology-601-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "In review, we've learned to translate potential failures into proactive safeguards. This involves creating response playbooks for known risks and establishing measurable adaptation loops to ensure the system learns and improves from any incidents."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-601-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A decision-making tool for evaluating and scoring competing options against a common set of weighted criteria under real-world constraints."
        },
        {
          "id": "biotechnology-601-l04-f2",
          "front": "Failure signature",
          "back": "A recurrent pattern of signals or events that indicates a predictable type of system breakdown is likely to occur."
        },
        {
          "id": "biotechnology-601-l04-f3",
          "front": "Adaptation loop",
          "back": "A structured, measurable process for converting learnings from incidents or failures into improved system design and future performance."
        }
      ]
    },
    {
      "id": "biotechnology-601-l05",
      "title": "Biotechnology Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "biotechnology-601-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "An interface mock-up of a simulation, showing input variables (e.g., funding, regulatory speed) and output metrics (e.g., trial success rate, public trust)."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-601-l05-c1",
          "kind": "practice",
          "title": "Scenario Modeling",
          "content": "In this interactive session, you will configure the assumptions, risk thresholds, and intervention pathways for a high-stakes simulation. This hands-on experience will help you understand how to prepare for various scenarios and make informed decisions under pressure."
        },
        {
          "id": "biotechnology-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "To summarize, after each simulation, teams must conduct a debrief to review performance against targets, analyze unintended side effects, and identify any gaps in governance. This review process is crucial for improving future decision-making."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Compare three advanced interventions and justify which best improves bioprocess optimization and bioethics governance.",
          "instructions": [
            "Define objective, constraints, and escalation triggers.",
            "Record near-term and long-term tradeoffs for each intervention.",
            "Select the metric set that confirms or falsifies your chosen approach."
          ]
        },
        {
          "id": "biotechnology-601-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match advanced risk scenarios with the strongest mitigation actions.",
          "pairs": [
            {
              "left": "Ambiguous ownership chain",
              "right": "Define accountable owner map and escalation rights"
            },
            {
              "left": "Weak measurement signal",
              "right": "Strengthen baseline instrumentation and quality checks"
            },
            {
              "left": "Policy-execution drift",
              "right": "Re-align controls to explicit governance standards"
            },
            {
              "left": "Stakeholder trust erosion",
              "right": "Increase transparency and corrective feedback cadence"
            }
          ]
        }
      ]
    },
    {
      "id": "biotechnology-601-l06",
      "title": "Checkpoint 2: Case Analysis and Simulation",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "biotechnology-601-l06-a1",
          "type": "image",
          "title": "Decision Review Flowchart",
          "content": "A flowchart illustrating the steps for a post-mortem analysis of a complex decision, from data gathering to implementing lessons learned."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-601-l06-q1",
          "text": "When using a tradeoff matrix in a case analysis, what is the primary benefit?",
          "skillId": "biotechnology-601-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "It guarantees the chosen option will be successful."
            },
            {
              "id": "b",
              "text": "It provides a structured, evidence-based way to compare competing options against defined criteria."
            },
            {
              "id": "c",
              "text": "It simplifies complex decisions by ignoring constraints and risks."
            },
            {
              "id": "d",
              "text": "It relies solely on intuition and expert opinion."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix formalizes the decision-making process, making it more transparent, objective, and defensible by scoring options against consistent criteria."
        },
        {
          "id": "biotechnology-601-l06-q2",
          "text": "What is the main purpose of a 'debrief and decision quality review' after a simulation?",
          "skillId": "biotechnology-601-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "To assign blame for any mistakes made during the simulation."
            },
            {
              "id": "b",
              "text": "To systematically analyze performance, identify gaps in strategy or governance, and generate actionable learnings."
            },
            {
              "id": "c",
              "text": "To quickly move on to the next simulation without reflection."
            },
            {
              "id": "d",
              "text": "To focus only on what went well and ignore any negative outcomes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The debrief is a critical learning phase focused on improving future performance by analyzing what happened, why it happened, and how to adapt."
        },
        {
          "id": "biotechnology-601-l06-q3",
          "text": "An 'adaptation loop' is designed to:",
          "skillId": "biotechnology-601-skill-adaptation",
          "options": [
            {
              "id": "a",
              "text": "Prevent any changes to a project plan once it is set."
            },
            {
              "id": "b",
              "text": "Ensure that learnings from failures are systematically converted into improvements in the system."
            },
            {
              "id": "c",
              "text": "Repeat the same mistakes in future projects."
            },
            {
              "id": "d",
              "text": "Document failures without taking any corrective action."
            }
          ],
          "correctOptionId": "b",
          "explanation": "An adaptation loop is a formal process for learning from experience, ensuring that insights from incidents lead to concrete, measurable improvements."
        },
        {
          "id": "biotechnology-601-l06-q4",
          "text": "In a high-stakes simulation, defining 'escalation triggers' beforehand is important because it:",
          "skillId": "biotechnology-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Creates unnecessary bureaucracy and slows down decision-making."
            },
            {
              "id": "b",
              "text": "Allows team members to ignore problems until they become critical."
            },
            {
              "id": "c",
              "text": "Provides a clear, pre-agreed plan for when and how to raise critical issues to higher levels of authority."
            },
            {
              "id": "d",
              "text": "Ensures that only the team leader is aware of potential risks."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Pre-defined escalation triggers remove ambiguity in a crisis, ensuring that significant problems are addressed by the right people at the right time."
        }
      ]
    },
    {
      "id": "biotechnology-601-l07",
      "title": "Biotechnology Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biotechnology-601-l07-a1",
          "type": "image",
          "title": "Governance Framework",
          "content": "An infographic connecting policy principles to operational controls and public impact assessment loops."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, you will learn to evaluate how the outcomes of biotechnology projects—both benefits and harms—are distributed among different stakeholders. We will consider immediate, delayed, and indirect effects to ensure a comprehensive and equitable analysis."
        },
        {
          "id": "biotechnology-601-l07-c2",
          "kind": "concept",
          "title": "Accountability System Design",
          "content": "Here, we will focus on designing robust accountability systems. This includes establishing clear traceability standards to track decisions, defining review rights for stakeholders, and outlining remediation obligations to address negative impacts."
        },
        {
          "id": "biotechnology-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "In summary, a responsible leadership checklist integrates strategy, ethics, policy, and operational controls into a unified framework. This tool helps leaders make decisions that are not only effective but also ethical and accountable."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-601-l07-f1",
          "front": "Impact distribution",
          "back": "The analysis of how benefits, costs, and harms from an intervention are allocated across different groups and timeframes."
        },
        {
          "id": "biotechnology-601-l07-f2",
          "front": "Decision traceability",
          "back": "The ability to reconstruct the evidence, rationale, and ownership behind a key decision, creating an auditable record."
        },
        {
          "id": "biotechnology-601-l07-f3",
          "front": "Responsible leadership",
          "back": "A decision-making practice that systematically balances performance objectives with risk management, ethical considerations, and stakeholder accountability."
        }
      ]
    },
    {
      "id": "biotechnology-601-l08",
      "title": "Biotechnology Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biotechnology-601-l08-a1",
          "type": "image",
          "title": "Capstone Project Canvas",
          "content": "A structured one-page template for outlining the capstone project's objective, methods, metrics, risks, and governance plan."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-601-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter and Evidence Pack",
          "content": "In this final lab, you will construct a capstone charter that defines your project's objectives, constraints, success metrics, and governance controls. You will also assemble an evidence pack to support your proposed approach and anticipated outcomes."
        },
        {
          "id": "biotechnology-601-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal",
          "content": "To conclude, you will rehearse defending your capstone decisions against critiques from technical, governance, and stakeholder perspectives. This practice is designed to build your confidence and sharpen your ability to communicate complex ideas effectively under scrutiny."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-601-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a specialization capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define objective, scope boundaries, and operating assumptions.",
            "Specify at least three measurable indicators and confidence thresholds.",
            "Define escalation and corrective-action criteria for failure scenarios."
          ]
        },
        {
          "id": "biotechnology-601-l08-act2",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel",
          "description": "Defend your capstone against expert critique on rigor, risk, and accountability."
        }
      ]
    }
  ]
};
