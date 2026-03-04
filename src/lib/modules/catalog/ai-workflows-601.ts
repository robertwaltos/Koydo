import type { LearningModule } from "@/lib/modules/types";

export const AiWorkflows601Module: LearningModule = {
  "id": "ai-workflows-601",
  "title": "AI Workflows Research and Leadership",
  "description": "Post-401 specialization in AI Workflows, focused on agent orchestration, retrieval quality, evaluation pipelines, and operational governance through advanced casework, simulation, and capstone-level defense.",
  "subject": "AI Workflows",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ai-engineering",
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
    "Apply advanced methods for agent orchestration in high-constraint environments",
    "Engineer repeatable workflows that improve retrieval quality under uncertainty",
    "Evaluate interventions in evaluation pipelines with research-grade evidence standards",
    "Operationalize operational governance with transparent accountability and remediation loops",
    "Lead cross-functional decision reviews with clear tradeoff reasoning",
    "Deliver capstone-quality artifacts that withstand expert critique"
  ],
  "lessons": [
    {
      "id": "ai-workflows-601-l01",
      "title": "AI Workflows Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-workflows-601-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-601-l01-c1",
          "kind": "concept",
          "title": "Advanced Scope and Decision Boundaries",
          "content": "In this lesson, we will explore the advanced boundaries that define AI Workflows. We will discuss how the orchestration of agents, which are the components that work together in AI systems, interacts with the quality of information retrieval. This interaction is crucial when we are dealing with complex systems, as it helps us understand the limits and possibilities of AI applications.\nContext recap: In this lesson, we will explore the advanced boundaries that define AI Workflows. We will discuss how the orchestration of agents, which are the components that work together in AI systems, interacts with the quality of information retrieval. This interaction is crucial when we are dealing with complex systems, as it helps us understand the limits and possibilities of AI applications."
        },
        {
          "id": "ai-workflows-601-l01-c2",
          "kind": "concept",
          "title": "Causal Structure Under Uncertainty",
          "content": "In this section, learners will engage in modeling causal pathways, which are the connections between causes and effects. They will also explore ranges of uncertainty and identify hidden assumptions that may affect their designs. This foundational understanding is essential before creating interventions, as it allows learners to anticipate potential challenges and outcomes.\nContext recap: In this section, learners will engage in modeling causal pathways, which are the connections between causes and effects. They will also explore ranges of uncertainty and identify hidden assumptions that may affect their designs. This foundational understanding is essential before creating interventions, as it allows learners to anticipate potential challenges and outcomes."
        },
        {
          "id": "ai-workflows-601-l01-c3",
          "kind": "recap",
          "title": "Evidence and Rigor Standards",
          "content": "It is important to note that all advanced claims made in our work must be supported by measurable indicators. This means we need to establish confidence bounds and set up review checkpoints to ensure our findings are reliable. By adhering to these standards, we can maintain rigor in our research and ensure that our conclusions are well-founded.\nContext recap: It is important to note that all advanced claims made in our work must be supported by measurable indicators. This means we need to establish confidence bounds and set up review checkpoints to ensure our findings are reliable. By adhering to these standards, we can maintain rigor in our research and ensure that our conclusions are well-founded."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-601-l01-f1",
          "front": "agent orchestration",
          "back": "A specialization axis in AI Workflows requiring explicit assumptions and measured tradeoff choices."
        },
        {
          "id": "ai-workflows-601-l01-f2",
          "front": "retrieval quality",
          "back": "Operational design capability that governs whether complex workflows remain reliable."
        },
        {
          "id": "ai-workflows-601-l01-f3",
          "front": "evaluation pipelines",
          "back": "Evaluation practice for validating outcomes beyond headline metrics."
        }
      ]
    },
    {
      "id": "ai-workflows-601-l02",
      "title": "AI Workflows Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "ai-workflows-601-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-601-l02-c1",
          "kind": "practice",
          "title": "Method Sequence and Stress Test",
          "content": "In this engaging interactive lab, participants will have the opportunity to design a specialized workflow that focuses on developing strong research reasoning skills, making informed leadership decisions, and preparing to defend their work in a way that is suitable for publication. Once they have constructed their workflows, they will face a series of challenging scenarios, referred to as adversarial or edge-case conditions. This testing phase is crucial as it allows learners to assess the strength and effectiveness of their workflows under pressure, ensuring they are well-prepared for real-world applications."
        },
        {
          "id": "ai-workflows-601-l02-c2",
          "kind": "recap",
          "title": "Controls and Failure Gates",
          "content": "To ensure that our specialized workflows are effective, we must incorporate control gates, rollback criteria, and accountability checkpoints. These elements are essential for managing risks and ensuring that we can respond appropriately if something goes wrong. By having these safeguards in place, we can enhance the reliability of our workflows.\nContext recap: To ensure that our specialized workflows are effective, we must incorporate control gates, rollback criteria, and accountability checkpoints. These elements are essential for managing risks and ensuring that we can respond appropriately if something goes wrong. By having these safeguards in place, we can enhance the reliability of our workflows."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-601-l02-act1",
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
          "id": "ai-workflows-601-l02-act2",
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
      "id": "ai-workflows-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "ai-workflows-601-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-601-l03-q1",
          "text": "Which practice most improves specialist performance in agent orchestration?",
          "skillId": "ai-workflows-601-skill-specialist",
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
          "id": "ai-workflows-601-l03-q2",
          "text": "At level 601, the curriculum emphasizes:",
          "skillId": "ai-workflows-601-skill-level",
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
          "id": "ai-workflows-601-l03-q3",
          "text": "What best strengthens retrieval quality execution quality?",
          "skillId": "ai-workflows-601-skill-execution",
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
          "id": "ai-workflows-601-l03-q4",
          "text": "A rigorous approach to evaluation pipelines should include:",
          "skillId": "ai-workflows-601-skill-evaluation",
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
          "id": "ai-workflows-601-l03-q5",
          "text": "A mature operational governance system should connect:",
          "skillId": "ai-workflows-601-skill-governance",
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
          "id": "ai-workflows-601-l03-q6",
          "text": "In high-stakes AI Workflows Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "ai-workflows-601-skill-advanced-6",
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
          "id": "ai-workflows-601-l03-q7",
          "text": "A mature remediation loop in advanced AI Workflows should prioritize:",
          "skillId": "ai-workflows-601-skill-advanced-7",
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
          "id": "ai-workflows-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in AI Workflows Research and Leadership?",
          "skillId": "ai-workflows-601-skill-advanced-8",
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
      "id": "ai-workflows-601-l04",
      "title": "AI Workflows Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ai-workflows-601-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-601-l04-c1",
          "kind": "example",
          "title": "Case Stakes and Competing Objectives",
          "content": "In this case study, we will explore an enterprise AI workflow that combines information retrieval, a variety of tools, and the enforcement of policies while operating under a production load. As learners, you will engage in mapping out the strategic objectives that guide the workflow. Additionally, you will identify potential risks that could lead to failures and understand the governance constraints that must be adhered to before taking any action. This thorough approach ensures that we consider all important aspects of the workflow, leading to more effective and responsible outcomes."
        },
        {
          "id": "ai-workflows-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "In this section, we will discuss how to score different options based on several important criteria. These criteria include effectiveness, reliability, equity, feasibility, and long-term maintainability. By evaluating options through this tradeoff matrix, learners can make informed decisions that balance various factors in their workflows.\nContext recap: In this section, we will discuss how to score different options based on several important criteria. These criteria include effectiveness, reliability, equity, feasibility, and long-term maintainability. By evaluating options through this tradeoff matrix, learners can make informed decisions that balance various factors in their workflows."
        },
        {
          "id": "ai-workflows-601-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "When we encounter failures, it is crucial to translate these experiences into actionable safeguards. This involves creating response playbooks and measurable adaptation loops that guide us in improving our processes. By learning from failures, we can design better systems that are more resilient and adaptable to change.\nContext recap: When we encounter failures, it is crucial to translate these experiences into actionable safeguards. This involves creating response playbooks and measurable adaptation loops that guide us in improving our processes. By learning from failures, we can design better systems that are more resilient and adaptable to change."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-601-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A scoring framework for choosing among competing options under real constraints."
        },
        {
          "id": "ai-workflows-601-l04-f2",
          "front": "Failure signature",
          "back": "A recurrent signal indicating a predictable class of breakdown risk."
        },
        {
          "id": "ai-workflows-601-l04-f3",
          "front": "Adaptation loop",
          "back": "A measured process for converting incident learning into improved future behavior."
        }
      ]
    },
    {
      "id": "ai-workflows-601-l05",
      "title": "AI Workflows Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "ai-workflows-601-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-601-l05-c1",
          "kind": "practice",
          "title": "Scenario Modeling",
          "content": "In this practice session, learners will configure various assumptions, thresholds, and intervention pathways for their simulations. This exercise will take place under high-stakes conditions, allowing learners to understand the complexities and challenges that can arise in real-world scenarios. This hands-on experience is vital for developing practical skills.\nContext recap: In this practice session, learners will configure various assumptions, thresholds, and intervention pathways for their simulations. This exercise will take place under high-stakes conditions, allowing learners to understand the complexities and challenges that can arise in real-world scenarios. This hands-on experience is vital for developing practical skills."
        },
        {
          "id": "ai-workflows-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "After each simulation run, teams will conduct a thorough review to assess how well they met their targets. They will analyze any side effects that occurred and identify any gaps in governance compliance. This debriefing process is essential for improving future performance and ensuring that all aspects of the workflow are aligned with best practices.\nContext recap: After each simulation run, teams will conduct a thorough review to assess how well they met their targets. They will analyze any side effects that occurred and identify any gaps in governance compliance. This debriefing process is essential for improving future performance and ensuring that all aspects of the workflow are aligned with best practices."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Compare three advanced interventions and justify which best improves agent orchestration and operational governance.",
          "instructions": [
            "Define objective, constraints, and escalation triggers.",
            "Record near-term and long-term tradeoffs for each intervention.",
            "Select the metric set that confirms or falsifies your chosen approach."
          ]
        },
        {
          "id": "ai-workflows-601-l05-act2",
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
      "id": "ai-workflows-601-l06",
      "title": "Checkpoint 2: Research and Systems Decisions",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "ai-workflows-601-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "ai-workflows-601-l06-q1",
          "text": "Which practice most improves specialist performance in agent orchestration?",
          "skillId": "ai-workflows-601-skill-specialist",
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
          "id": "ai-workflows-601-l06-q2",
          "text": "At level 601, the curriculum emphasizes:",
          "skillId": "ai-workflows-601-skill-level",
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
          "id": "ai-workflows-601-l06-q3",
          "text": "What best strengthens retrieval quality execution quality?",
          "skillId": "ai-workflows-601-skill-execution",
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
          "id": "ai-workflows-601-l06-q4",
          "text": "A rigorous approach to evaluation pipelines should include:",
          "skillId": "ai-workflows-601-skill-evaluation",
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
          "id": "ai-workflows-601-l06-q5",
          "text": "A mature operational governance system should connect:",
          "skillId": "ai-workflows-601-skill-governance",
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
          "id": "ai-workflows-601-l06-q6",
          "text": "In high-stakes AI Workflows Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "ai-workflows-601-skill-advanced-6",
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
          "id": "ai-workflows-601-l06-q7",
          "text": "A mature remediation loop in advanced AI Workflows should prioritize:",
          "skillId": "ai-workflows-601-skill-advanced-7",
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
          "id": "ai-workflows-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in AI Workflows Research and Leadership?",
          "skillId": "ai-workflows-601-skill-advanced-8",
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
      "id": "ai-workflows-601-l07",
      "title": "AI Workflows Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ai-workflows-601-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, learners will evaluate how the outcomes of their workflows are distributed among various stakeholders. This includes considering both delayed and indirect effects that may not be immediately apparent. Understanding these impacts is crucial for ensuring that all voices are heard and that the benefits and drawbacks of AI systems are fairly distributed.\nContext recap: In this lesson, learners will evaluate how the outcomes of their workflows are distributed among various stakeholders. This includes considering both delayed and indirect effects that may not be immediately apparent. Understanding these impacts is crucial for ensuring that all voices are heard and that the benefits and drawbacks of AI systems are fairly distributed."
        },
        {
          "id": "ai-workflows-601-l07-c2",
          "kind": "concept",
          "title": "Accountability System Design",
          "content": "Designing an accountability system is essential for maintaining trust and transparency in AI workflows. This involves implementing traceability standards, establishing review rights, and defining remediation obligations. By creating a robust accountability framework, we can ensure that all stakeholders are held responsible for their actions and that there is a clear path for addressing any issues that arise.\nContext recap: Designing an accountability system is essential for maintaining trust and transparency in AI workflows. This involves implementing traceability standards, establishing review rights, and defining remediation obligations. By creating a robust accountability framework, we can ensure that all stakeholders are held responsible for their actions and that there is a clear path for addressing any issues that arise."
        },
        {
          "id": "ai-workflows-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "A responsible leadership checklist is an important tool that helps leaders connect their strategies with ethical considerations, policies, and operational controls. This checklist serves as a comprehensive review document that ensures all aspects of leadership are considered and aligned for effective governance.\nContext recap: A responsible leadership checklist is an important tool that helps leaders connect their strategies with ethical considerations, policies, and operational controls. This checklist serves as a comprehensive review document that ensures all aspects of leadership are considered and aligned for effective governance."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-601-l07-f1",
          "front": "Impact distribution",
          "back": "How benefits and harms are allocated across groups and timeframes."
        },
        {
          "id": "ai-workflows-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable explanation of evidence, rationale, and ownership behind a decision."
        },
        {
          "id": "ai-workflows-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision practice that balances performance, risk, ethics, and accountability."
        }
      ]
    },
    {
      "id": "ai-workflows-601-l08",
      "title": "AI Workflows Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ai-workflows-601-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "ai-workflows-601-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter and Evidence Pack",
          "content": "In this activity, learners will work together to create a capstone charter. This charter will outline the main objectives of their project, identify any constraints they might face, establish metrics for success, and define governance controls. Additionally, they will develop a plan for gathering evidence to support their findings and decisions.\nContext recap: In this activity, learners will work together to create a capstone charter. This charter will outline the main objectives of their project, identify any constraints they might face, establish metrics for success, and define governance controls. Additionally, they will develop a plan for gathering evidence to support their findings and decisions."
        },
        {
          "id": "ai-workflows-601-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal",
          "content": "During the final practice round, learners will have the opportunity to rehearse their defense. This session will prepare them to confidently present their decisions and respond to critiques from technical experts, governance representatives, and stakeholders. It is a crucial step in ensuring they are ready to articulate their reasoning and defend their choices effectively.\nContext recap: During the final practice round, learners will have the opportunity to rehearse their defense. This session will prepare them to confidently present their decisions and respond to critiques from technical experts, governance representatives, and stakeholders. It is a crucial step in ensuring they are ready to articulate their reasoning and defend their choices effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-workflows-601-l08-act1",
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
          "id": "ai-workflows-601-l08-act2",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel",
          "description": "Defend your capstone against expert critique on rigor, risk, and accountability."
        }
      ]
    }
  ]
};
