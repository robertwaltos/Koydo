import type { LearningModule } from "@/lib/modules/types";

export const AiMachineLearning601Module: LearningModule = {
  "id": "ai-machine-learning-601",
  "title": "AI and Machine Learning Research and Leadership",
  "description": "Post-401 specialization in AI and Machine Learning, focused on model architecture tradeoffs, evaluation robustness, deployment reliability, and governance controls through advanced casework, simulation, and capstone-level defense.",
  "subject": "AI and ML",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ai",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply advanced methods for model architecture tradeoffs in high-constraint environments",
    "Engineer repeatable workflows that improve evaluation robustness under uncertainty",
    "Evaluate interventions in deployment reliability with research-grade evidence standards",
    "Operationalize governance controls with transparent accountability and remediation loops",
    "Lead cross-functional decision reviews with clear tradeoff reasoning",
    "Deliver capstone-quality artifacts that withstand expert critique"
  ],
  "lessons": [
    {
      "id": "ai-machine-learning-601-l01",
      "title": "AI and Machine Learning Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-machine-learning-601-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-machine-learning-601-l01-c1",
          "kind": "concept",
          "title": "Advanced Scope and Decision Boundaries",
          "content": "In this lesson, we will explore the advanced boundaries that define the fields of Artificial Intelligence (AI) and Machine Learning (ML). We will discuss how different model architectures can influence the performance of AI systems and how we can evaluate their effectiveness across complex systems. Understanding these trade-offs is crucial for developing robust AI models that can adapt to various challenges.\nContext recap: In this lesson, we will explore the advanced boundaries that define the fields of Artificial Intelligence (AI) and Machine Learning (ML). We will discuss how different model architectures can influence the performance of AI systems and how we can evaluate their effectiveness across complex systems. Understanding these trade-offs is crucial for developing robust AI models that can adapt to various challenges."
        },
        {
          "id": "ai-machine-learning-601-l01-c2",
          "kind": "concept",
          "title": "Causal Structure Under Uncertainty",
          "content": "In this section, learners will engage in modeling causal pathways, which are the routes through which one event leads to another. We will also examine ranges of uncertainty and identify hidden assumptions that may affect our designs. This foundational understanding is essential before we create interventions that aim to solve problems effectively.\nContext recap: In this section, learners will engage in modeling causal pathways, which are the routes through which one event leads to another. We will also examine ranges of uncertainty and identify hidden assumptions that may affect our designs. This foundational understanding is essential before we create interventions that aim to solve problems effectively."
        },
        {
          "id": "ai-machine-learning-601-l01-c3",
          "kind": "recap",
          "title": "Evidence and Rigor Standards",
          "content": "It is important to remember that all advanced claims we make in AI and ML must be supported by measurable indicators. This means we need to establish confidence bounds and set up review checkpoints to ensure our findings are reliable. By adhering to these standards, we can maintain rigor in our research and decision-making processes.\nContext recap: It is important to remember that all advanced claims we make in AI and ML must be supported by measurable indicators. This means we need to establish confidence bounds and set up review checkpoints to ensure our findings are reliable. By adhering to these standards, we can maintain rigor in our research and decision-making processes."
        }
      ],
      "flashcards": [
        {
          "id": "ai-machine-learning-601-l01-f1",
          "front": "model architecture tradeoffs",
          "back": "A specialization axis in AI and Machine Learning requiring explicit assumptions and measured tradeoff choices."
        },
        {
          "id": "ai-machine-learning-601-l01-f2",
          "front": "evaluation robustness",
          "back": "Operational design capability that governs whether complex workflows remain reliable."
        },
        {
          "id": "ai-machine-learning-601-l01-f3",
          "front": "deployment reliability",
          "back": "Evaluation practice for validating outcomes beyond headline metrics."
        }
      ]
    },
    {
      "id": "ai-machine-learning-601-l02",
      "title": "AI and Machine Learning Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "ai-machine-learning-601-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-machine-learning-601-l02-c1",
          "kind": "practice",
          "title": "Method Sequence and Stress Test",
          "content": "In this engaging interactive lab, learners will have the opportunity to design a specialized workflow that emphasizes the importance of high-quality research reasoning. This involves making thoughtful and informed decisions as leaders in the field of AI and machine learning. Additionally, learners will prepare a capstone project that is suitable for publication, showcasing their skills and knowledge. Once the workflow is developed, we will rigorously test it by introducing challenging adversarial conditions or edge cases. This will help us understand how well the workflow performs under stress and identify areas for improvement, ensuring that it is robust and effective."
        },
        {
          "id": "ai-machine-learning-601-l02-c2",
          "kind": "recap",
          "title": "Controls and Failure Gates",
          "content": "To ensure that our specialist workflows are robust, we need to incorporate control gates, rollback criteria, and accountability checkpoints. These elements help us manage risks and maintain the integrity of our processes, ensuring that we can respond effectively to any issues that arise.\nContext recap: To ensure that our specialist workflows are robust, we need to incorporate control gates, rollback criteria, and accountability checkpoints. These elements help us manage risks and maintain the integrity of our processes, ensuring that we can respond effectively to any issues that arise."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-machine-learning-601-l02-act1",
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
          "id": "ai-machine-learning-601-l02-act2",
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
      "id": "ai-machine-learning-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "ai-machine-learning-601-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "ai-machine-learning-601-l03-q1",
          "text": "Which practice most improves specialist performance in model architecture tradeoffs?",
          "skillId": "ai-machine-learning-601-skill-specialist",
          "options": [
            {
              "id": "a",
              "text": "Rely on undocumented assumptions"
            },
            {
              "id": "b",
              "text": "Define constraints, monitor leading indicators, and test edge cases"
            },
            {
              "id": "c",
              "text": "Avoid post-decision review"
            },
            {
              "id": "d",
              "text": "Optimize only for speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced performance depends on explicit constraints, monitoring, and stress testing."
        },
        {
          "id": "ai-machine-learning-601-l03-q2",
          "text": "At level 601, the curriculum emphasizes:",
          "skillId": "ai-machine-learning-601-skill-level",
          "options": [
            {
              "id": "a",
              "text": "research-grade reasoning, leadership decision quality, and publishable capstone defense"
            },
            {
              "id": "b",
              "text": "Unbounded iteration with no controls"
            },
            {
              "id": "c",
              "text": "Single-metric decision making"
            },
            {
              "id": "d",
              "text": "No uncertainty communication"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 601 design is built around research-grade reasoning, leadership decision quality, and publishable capstone defense."
        },
        {
          "id": "ai-machine-learning-601-l03-q3",
          "text": "What best strengthens evaluation robustness execution quality?",
          "skillId": "ai-machine-learning-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "No owner mapping or escalation path"
            },
            {
              "id": "b",
              "text": "Explicit ownership, checkpoints, and governance thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc process changes without logs"
            },
            {
              "id": "d",
              "text": "Skipping retrospective review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality execution needs ownership clarity, checkpoints, and threshold-driven governance."
        },
        {
          "id": "ai-machine-learning-601-l03-q4",
          "text": "A rigorous approach to deployment reliability should include:",
          "skillId": "ai-machine-learning-601-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Outcome claims without baselines"
            },
            {
              "id": "b",
              "text": "Baseline comparison, side-effect checks, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Removal of difficult scenarios"
            },
            {
              "id": "d",
              "text": "Changing criteria after seeing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines, side-effect checks, and uncertainty disclosure make results defensible."
        },
        {
          "id": "ai-machine-learning-601-l03-q5",
          "text": "A mature governance controls system should connect:",
          "skillId": "ai-machine-learning-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy and practice without measurement"
            },
            {
              "id": "b",
              "text": "Policy, measurable thresholds, and remediation pathways"
            },
            {
              "id": "c",
              "text": "Technical delivery with no accountability"
            },
            {
              "id": "d",
              "text": "Performance targets with no risk controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governance quality comes from linking policy intent to measurable controls and action."
        },
        {
          "id": "ai-machine-learning-601-l03-q6",
          "text": "In high-stakes AI and Machine Learning Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "ai-machine-learning-601-skill-advanced-6",
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
          "explanation": "High-stakes communication must expose assumptions, confidence, and checkpoints."
        },
        {
          "id": "ai-machine-learning-601-l03-q7",
          "text": "A mature remediation loop in advanced AI and ML should prioritize:",
          "skillId": "ai-machine-learning-601-skill-advanced-7",
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
          "explanation": "Mature remediation ties root causes to control redesign and verification."
        },
        {
          "id": "ai-machine-learning-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in AI and Machine Learning Research and Leadership?",
          "skillId": "ai-machine-learning-601-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and contingency capacity"
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
      "id": "ai-machine-learning-601-l04",
      "title": "AI and Machine Learning Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-machine-learning-601-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-machine-learning-601-l04-c1",
          "kind": "example",
          "title": "Case Stakes and Competing Objectives",
          "content": "In this case study, we will explore a significant Machine Learning system that encounters challenges because of evolving data patterns and the need for strict accountability. As learners, you will engage in mapping out the strategic goals of the project, pinpointing possible risks of failure, and examining the governance rules that must be followed before any actions are taken. This thorough analysis is essential for making well-informed decisions that can lead to successful outcomes in the field of AI and Machine Learning.\nContext recap: In this case study, we will explore a significant Machine Learning system that encounters challenges because of evolving data patterns and the need for strict accountability. As learners, you will engage in mapping out the strategic goals of the project, pinpointing possible risks of failure, and examining the governance rules that must be followed before any actions are taken. This thorough analysis is essential for making well-informed decisions that can lead to successful outcomes in the field of AI and Machine Learning."
        },
        {
          "id": "ai-machine-learning-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "In this section, we will learn about a tradeoff matrix that helps us evaluate different options based on several criteria. These criteria include effectiveness, reliability, equity, feasibility, and long-term maintainability. Scoring options in this way allows us to make better decisions when faced with competing objectives.\nContext recap: In this section, we will learn about a tradeoff matrix that helps us evaluate different options based on several criteria. These criteria include effectiveness, reliability, equity, feasibility, and long-term maintainability. Scoring options in this way allows us to make better decisions when faced with competing objectives."
        },
        {
          "id": "ai-machine-learning-601-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "When we encounter failures in our systems, it is essential to translate these failure signatures into actionable safeguards. This includes creating response playbooks and measurable adaptation loops that allow us to learn from our mistakes and improve our systems over time.\nContext recap: When we encounter failures in our systems, it is essential to translate these failure signatures into actionable safeguards. This includes creating response playbooks and measurable adaptation loops that allow us to learn from our mistakes and improve our systems over time."
        }
      ],
      "flashcards": [
        {
          "id": "ai-machine-learning-601-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A scoring framework for choosing among competing options under real constraints."
        },
        {
          "id": "ai-machine-learning-601-l04-f2",
          "front": "Failure signature",
          "back": "A recurrent signal indicating a predictable class of breakdown risk."
        },
        {
          "id": "ai-machine-learning-601-l04-f3",
          "front": "Adaptation loop",
          "back": "A measured process for converting incident learning into improved future behavior."
        }
      ]
    },
    {
      "id": "ai-machine-learning-601-l05",
      "title": "AI and Machine Learning Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "ai-machine-learning-601-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-machine-learning-601-l05-c1",
          "kind": "practice",
          "title": "Scenario Modeling",
          "content": "In this practice session, learners will configure simulation assumptions, set thresholds, and design intervention pathways while operating under high-stakes conditions. This hands-on experience will help us understand how to navigate complex scenarios and make informed decisions based on our simulations.\nContext recap: In this practice session, learners will configure simulation assumptions, set thresholds, and design intervention pathways while operating under high-stakes conditions. This hands-on experience will help us understand how to navigate complex scenarios and make informed decisions based on our simulations."
        },
        {
          "id": "ai-machine-learning-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "After each simulation run, teams will conduct a thorough review to assess whether they met their targets. We will also examine any side effects that occurred and identify gaps in governance compliance. This debriefing process is crucial for improving our decision-making and ensuring accountability.\nContext recap: After each simulation run, teams will conduct a thorough review to assess whether they met their targets. We will also examine any side effects that occurred and identify gaps in governance compliance. This debriefing process is crucial for improving our decision-making and ensuring accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-machine-learning-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Compare three advanced interventions and justify which best improves model architecture tradeoffs and governance controls.",
          "instructions": [
            "Define objective, constraints, and escalation triggers.",
            "Record near-term and long-term tradeoffs for each intervention.",
            "Select the metric set that confirms or falsifies your chosen approach."
          ]
        },
        {
          "id": "ai-machine-learning-601-l05-act2",
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
      "id": "ai-machine-learning-601-l06",
      "title": "Checkpoint 2: Research and Systems Decisions",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "ai-machine-learning-601-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "ai-machine-learning-601-l06-q1",
          "text": "Which practice most improves specialist performance in model architecture tradeoffs?",
          "skillId": "ai-machine-learning-601-skill-specialist",
          "options": [
            {
              "id": "a",
              "text": "Rely on undocumented assumptions"
            },
            {
              "id": "b",
              "text": "Define constraints, monitor leading indicators, and test edge cases"
            },
            {
              "id": "c",
              "text": "Avoid post-decision review"
            },
            {
              "id": "d",
              "text": "Optimize only for speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced performance depends on explicit constraints, monitoring, and stress testing."
        },
        {
          "id": "ai-machine-learning-601-l06-q2",
          "text": "At level 601, the curriculum emphasizes:",
          "skillId": "ai-machine-learning-601-skill-level",
          "options": [
            {
              "id": "a",
              "text": "research-grade reasoning, leadership decision quality, and publishable capstone defense"
            },
            {
              "id": "b",
              "text": "Unbounded iteration with no controls"
            },
            {
              "id": "c",
              "text": "Single-metric decision making"
            },
            {
              "id": "d",
              "text": "No uncertainty communication"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 601 design is built around research-grade reasoning, leadership decision quality, and publishable capstone defense."
        },
        {
          "id": "ai-machine-learning-601-l06-q3",
          "text": "What best strengthens evaluation robustness execution quality?",
          "skillId": "ai-machine-learning-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "No owner mapping or escalation path"
            },
            {
              "id": "b",
              "text": "Explicit ownership, checkpoints, and governance thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc process changes without logs"
            },
            {
              "id": "d",
              "text": "Skipping retrospective review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality execution needs ownership clarity, checkpoints, and threshold-driven governance."
        },
        {
          "id": "ai-machine-learning-601-l06-q4",
          "text": "A rigorous approach to deployment reliability should include:",
          "skillId": "ai-machine-learning-601-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Outcome claims without baselines"
            },
            {
              "id": "b",
              "text": "Baseline comparison, side-effect checks, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Removal of difficult scenarios"
            },
            {
              "id": "d",
              "text": "Changing criteria after seeing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines, side-effect checks, and uncertainty disclosure make results defensible."
        },
        {
          "id": "ai-machine-learning-601-l06-q5",
          "text": "A mature governance controls system should connect:",
          "skillId": "ai-machine-learning-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy and practice without measurement"
            },
            {
              "id": "b",
              "text": "Policy, measurable thresholds, and remediation pathways"
            },
            {
              "id": "c",
              "text": "Technical delivery with no accountability"
            },
            {
              "id": "d",
              "text": "Performance targets with no risk controls"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governance quality comes from linking policy intent to measurable controls and action."
        },
        {
          "id": "ai-machine-learning-601-l06-q6",
          "text": "In high-stakes AI and Machine Learning Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "ai-machine-learning-601-skill-advanced-6",
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
          "explanation": "High-stakes communication must expose assumptions, confidence, and checkpoints."
        },
        {
          "id": "ai-machine-learning-601-l06-q7",
          "text": "A mature remediation loop in advanced AI and ML should prioritize:",
          "skillId": "ai-machine-learning-601-skill-advanced-7",
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
          "explanation": "Mature remediation ties root causes to control redesign and verification."
        },
        {
          "id": "ai-machine-learning-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in AI and Machine Learning Research and Leadership?",
          "skillId": "ai-machine-learning-601-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and contingency capacity"
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
      "id": "ai-machine-learning-601-l07",
      "title": "AI and Machine Learning Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ai-machine-learning-601-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-machine-learning-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, learners will evaluate how the outcomes of our AI and ML systems are distributed among different stakeholders. We will consider not only the direct effects but also any delayed and indirect impacts that may arise. Understanding this distribution is vital for ensuring fairness and equity in our systems.\nContext recap: In this lesson, learners will evaluate how the outcomes of our AI and ML systems are distributed among different stakeholders. We will consider not only the direct effects but also any delayed and indirect impacts that may arise. Understanding this distribution is vital for ensuring fairness and equity in our systems."
        },
        {
          "id": "ai-machine-learning-601-l07-c2",
          "kind": "concept",
          "title": "Accountability System Design",
          "content": "Designing an effective accountability system is essential for maintaining trust in AI and ML systems. This involves implementing traceability standards, establishing review rights, and setting up remediation obligations. By doing so, we can ensure that all stakeholders are held accountable for their actions and decisions.\nContext recap: Designing an effective accountability system is essential for maintaining trust in AI and ML systems. This involves implementing traceability standards, establishing review rights, and setting up remediation obligations. By doing so, we can ensure that all stakeholders are held accountable for their actions and decisions."
        },
        {
          "id": "ai-machine-learning-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "A responsible leadership checklist is an important tool that helps leaders connect their strategies, ethical considerations, policies, and operational controls. This checklist serves as a comprehensive review document that ensures all aspects of leadership are aligned and accountable, promoting transparency and good governance in AI and machine learning projects.\nContext recap: A responsible leadership checklist is an important tool that helps leaders connect their strategies, ethical considerations, policies, and operational controls. This checklist serves as a comprehensive review document that ensures all aspects of leadership are aligned and accountable, promoting transparency and good governance in AI and machine learning projects."
        }
      ],
      "flashcards": [
        {
          "id": "ai-machine-learning-601-l07-f1",
          "front": "Impact distribution",
          "back": "How benefits and harms are allocated across groups and timeframes."
        },
        {
          "id": "ai-machine-learning-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable explanation of evidence, rationale, and ownership behind a decision."
        },
        {
          "id": "ai-machine-learning-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision practice that balances performance, risk, ethics, and accountability."
        }
      ]
    },
    {
      "id": "ai-machine-learning-601-l08",
      "title": "AI and Machine Learning Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ai-machine-learning-601-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-machine-learning-601-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter and Evidence Pack",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of their project, identify any constraints they may face, establish metrics for measuring success, and define governance controls. Additionally, they will develop a plan for gathering evidence to support their findings, ensuring that their work is well-structured and thoroughly documented.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of their project, identify any constraints they may face, establish metrics for measuring success, and define governance controls. Additionally, they will develop a plan for gathering evidence to support their findings, ensuring that their work is well-structured and thoroughly documented."
        },
        {
          "id": "ai-machine-learning-601-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal",
          "content": "During the final practice round, learners will engage in a defense rehearsal. This session is designed to prepare them to confidently defend their decisions and project outcomes. They will practice responding to critiques from technical experts, governance bodies, and stakeholders, helping them to articulate their reasoning and demonstrate the robustness of their work in AI and machine learning.\nContext recap: During the final practice round, learners will engage in a defense rehearsal. This session is designed to prepare them to confidently defend their decisions and project outcomes. They will practice responding to critiques from technical experts, governance bodies, and stakeholders, helping them to articulate their reasoning and demonstrate the robustness of their work in AI and machine learning."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-machine-learning-601-l08-act1",
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
          "id": "ai-machine-learning-601-l08-act2",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel",
          "description": "Defend your capstone against expert critique on rigor, risk, and accountability."
        }
      ]
    }
  ]
};
