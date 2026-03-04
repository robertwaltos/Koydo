import type { LearningModule } from "@/lib/modules/types";

export const Cybersecurity601Module: LearningModule = {
  "id": "cybersecurity-601",
  "title": "Cybersecurity Research and Leadership",
  "description": "Post-401 specialization in Cybersecurity, focused on threat modeling, defense-in-depth design, incident response systems, and security governance through advanced casework, simulation, and capstone-level defense.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "security",
    "defense"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply advanced methods for threat modeling in high-constraint environments",
    "Engineer repeatable workflows that improve defense-in-depth design under uncertainty",
    "Evaluate interventions in incident response systems with research-grade evidence standards",
    "Operationalize security governance with transparent accountability and remediation loops",
    "Lead cross-functional decision reviews with clear tradeoff reasoning",
    "Deliver capstone-quality artifacts that withstand expert critique"
  ],
  "lessons": [
    {
      "id": "cybersecurity-601-l01",
      "title": "Cybersecurity Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "cybersecurity-601-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l01-c1",
          "kind": "concept",
          "title": "Advanced Scope and Decision Boundaries",
          "content": "In this lesson, we will explore the advanced boundaries of Cybersecurity. We will learn how to define these boundaries and understand the importance of threat modeling. Additionally, we will discuss how the concept of defense-in-depth design plays a crucial role in protecting complex systems from various threats. By the end of this lesson, you will have a clearer understanding of how these elements interact to create a safer digital environment.\nContext recap: In this lesson, we will explore the advanced boundaries of Cybersecurity. We will learn how to define these boundaries and understand the importance of threat modeling. Additionally, we will discuss how the concept of defense-in-depth design plays a crucial role in protecting complex systems from various threats. By the end of this lesson, you will have a clearer understanding of how these elements interact to create a safer digital environment."
        },
        {
          "id": "cybersecurity-601-l01-c2",
          "kind": "concept",
          "title": "Causal Structure Under Uncertainty",
          "content": "In this section, learners will engage in modeling causal pathways, which helps us understand how different factors can lead to certain outcomes. We will also explore the ranges of uncertainty that can affect our decisions and identify hidden assumptions that might influence our designs. This foundational knowledge is essential for creating effective interventions in Cybersecurity, ensuring that we are prepared for various scenarios.\nContext recap: In this section, learners will engage in modeling causal pathways, which helps us understand how different factors can lead to certain outcomes. We will also explore the ranges of uncertainty that can affect our decisions and identify hidden assumptions that might influence our designs. This foundational knowledge is essential for creating effective interventions in Cybersecurity, ensuring that we are prepared for various scenarios."
        },
        {
          "id": "cybersecurity-601-l01-c3",
          "kind": "recap",
          "title": "Evidence and Rigor Standards",
          "content": "In our recap, we will emphasize the importance of grounding all advanced claims in measurable indicators. This means that every assertion we make should be supported by data that can be quantified. We will also discuss the significance of establishing confidence bounds and setting up review checkpoints to ensure that our findings are reliable and can withstand scrutiny. This rigorous approach is vital for maintaining high standards in Cybersecurity.\nContext recap: In our recap, we will emphasize the importance of grounding all advanced claims in measurable indicators. This means that every assertion we make should be supported by data that can be quantified. We will also discuss the significance of establishing confidence bounds and setting up review checkpoints to ensure that our findings are reliable and can withstand scrutiny. This rigorous approach is vital for maintaining high standards in Cybersecurity."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-601-l01-f1",
          "front": "threat modeling",
          "back": "A specialization axis in Cybersecurity requiring explicit assumptions and measured tradeoff choices."
        },
        {
          "id": "cybersecurity-601-l01-f2",
          "front": "defense-in-depth design",
          "back": "Operational design capability that governs whether complex workflows remain reliable."
        },
        {
          "id": "cybersecurity-601-l01-f3",
          "front": "incident response systems",
          "back": "Evaluation practice for validating outcomes beyond headline metrics."
        }
      ]
    },
    {
      "id": "cybersecurity-601-l02",
      "title": "Cybersecurity Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "cybersecurity-601-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l02-c1",
          "kind": "practice",
          "title": "Method Sequence and Stress Test",
          "content": "In this interactive lab, learners will create a specialist workflow that focuses on high-quality research reasoning and effective leadership decision-making. This workflow will culminate in a capstone defense that can be published. After building this workflow, students will put it to the test against challenging scenarios, including adversarial conditions or edge cases. This hands-on experience will help solidify their understanding of how to apply their knowledge in real-world situations.\nContext recap: In this interactive lab, learners will create a specialist workflow that focuses on high-quality research reasoning and effective leadership decision-making. This workflow will culminate in a capstone defense that can be published. After building this workflow, students will put it to the test against challenging scenarios, including adversarial conditions or edge cases. This hands-on experience will help solidify their understanding of how to apply their knowledge in real-world situations."
        },
        {
          "id": "cybersecurity-601-l02-c2",
          "kind": "recap",
          "title": "Controls and Failure Gates",
          "content": "In our recap, we will highlight the necessity of incorporating control gates, rollback criteria, and accountability checkpoints into robust specialist workflows. These elements are essential for ensuring that our processes are reliable and can adapt to unexpected challenges. By understanding and implementing these controls, learners will be better equipped to manage risks and maintain the integrity of their Cybersecurity practices.\nContext recap: In our recap, we will highlight the necessity of incorporating control gates, rollback criteria, and accountability checkpoints into robust specialist workflows. These elements are essential for ensuring that our processes are reliable and can adapt to unexpected challenges. By understanding and implementing these controls, learners will be better equipped to manage risks and maintain the integrity of their Cybersecurity practices."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-601-l02-act1",
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
          "id": "cybersecurity-601-l02-act2",
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
      "id": "cybersecurity-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "cybersecurity-601-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "cybersecurity-601-l03-q1",
          "text": "Which practice most improves specialist performance in threat modeling?",
          "skillId": "cybersecurity-601-skill-specialist",
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
          "id": "cybersecurity-601-l03-q2",
          "text": "At level 601, the curriculum emphasizes:",
          "skillId": "cybersecurity-601-skill-level",
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
          "id": "cybersecurity-601-l03-q3",
          "text": "What best strengthens defense-in-depth design execution quality?",
          "skillId": "cybersecurity-601-skill-execution",
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
          "id": "cybersecurity-601-l03-q4",
          "text": "A rigorous approach to incident response systems should include:",
          "skillId": "cybersecurity-601-skill-evaluation",
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
          "id": "cybersecurity-601-l03-q5",
          "text": "A mature security governance system should connect:",
          "skillId": "cybersecurity-601-skill-governance",
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
          "id": "cybersecurity-601-l03-q6",
          "text": "In high-stakes Cybersecurity Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "cybersecurity-601-skill-advanced-6",
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
          "id": "cybersecurity-601-l03-q7",
          "text": "A mature remediation loop in advanced Computer Science should prioritize:",
          "skillId": "cybersecurity-601-skill-advanced-7",
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
          "id": "cybersecurity-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Cybersecurity Research and Leadership?",
          "skillId": "cybersecurity-601-skill-advanced-8",
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
      "id": "cybersecurity-601-l04",
      "title": "Cybersecurity Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "cybersecurity-601-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l04-c1",
          "kind": "example",
          "title": "Case Stakes and Competing Objectives",
          "content": "In this engaging case study, we will explore a coordinated attack campaign that requires swift and effective responses, including detection, containment, communication, and recovery. As part of this exercise, learners will work on mapping out strategic objectives that guide their actions, identifying potential risks that could lead to failure, and understanding the governance constraints that must be adhered to before proceeding. This hands-on activity will not only deepen students' understanding of the complexities involved in Cybersecurity but also highlight the critical importance of thorough planning in high-stakes scenarios where every decision counts."
        },
        {
          "id": "cybersecurity-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "In this section, we will introduce the concept of a tradeoff matrix, where different options are evaluated based on various criteria. These criteria include effectiveness, reliability, equity, feasibility, and long-term maintainability. By scoring options across these dimensions, learners will develop a deeper understanding of how to make informed decisions in Cybersecurity, balancing competing priorities to achieve the best outcomes.\nContext recap: In this section, we will introduce the concept of a tradeoff matrix, where different options are evaluated based on various criteria. These criteria include effectiveness, reliability, equity, feasibility, and long-term maintainability. By scoring options across these dimensions, learners will develop a deeper understanding of how to make informed decisions in Cybersecurity, balancing competing priorities to achieve the best outcomes."
        },
        {
          "id": "cybersecurity-601-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "In our recap, we will discuss how to translate failure signatures into actionable safeguards, response playbooks, and measurable adaptation loops. This process is crucial for ensuring that we learn from past mistakes and improve our responses to future challenges. By establishing these mechanisms, learners will be better prepared to adapt and respond effectively in the ever-evolving landscape of Cybersecurity.\nContext recap: In our recap, we will discuss how to translate failure signatures into actionable safeguards, response playbooks, and measurable adaptation loops. This process is crucial for ensuring that we learn from past mistakes and improve our responses to future challenges. By establishing these mechanisms, learners will be better prepared to adapt and respond effectively in the ever-evolving landscape of Cybersecurity."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-601-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A scoring framework for choosing among competing options under real constraints."
        },
        {
          "id": "cybersecurity-601-l04-f2",
          "front": "Failure signature",
          "back": "A recurrent signal indicating a predictable class of breakdown risk."
        },
        {
          "id": "cybersecurity-601-l04-f3",
          "front": "Adaptation loop",
          "back": "A measured process for converting incident learning into improved future behavior."
        }
      ]
    },
    {
      "id": "cybersecurity-601-l05",
      "title": "Cybersecurity Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "cybersecurity-601-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l05-c1",
          "kind": "practice",
          "title": "Scenario Modeling",
          "content": "In this interactive practice session, learners will configure simulation assumptions, set thresholds, and outline intervention pathways while operating under high-stakes conditions. This hands-on experience will allow students to apply their theoretical knowledge in a practical setting, enhancing their understanding of how to navigate complex scenarios in Cybersecurity effectively.\nContext recap: In this interactive practice session, learners will configure simulation assumptions, set thresholds, and outline intervention pathways while operating under high-stakes conditions. This hands-on experience will allow students to apply their theoretical knowledge in a practical setting, enhancing their understanding of how to navigate complex scenarios in Cybersecurity effectively."
        },
        {
          "id": "cybersecurity-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "After each simulation run, teams will engage in a debriefing session where they will review their performance in terms of target attainment, any side effects that occurred, and gaps in governance compliance. This reflective practice is essential for continuous improvement and helps learners understand the importance of accountability in Cybersecurity operations.\nContext recap: After each simulation run, teams will engage in a debriefing session where they will review their performance in terms of target attainment, any side effects that occurred, and gaps in governance compliance. This reflective practice is essential for continuous improvement and helps learners understand the importance of accountability in Cybersecurity operations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Compare three advanced interventions and justify which best improves threat modeling and security governance.",
          "instructions": [
            "Define objective, constraints, and escalation triggers.",
            "Record near-term and long-term tradeoffs for each intervention.",
            "Select the metric set that confirms or falsifies your chosen approach."
          ]
        },
        {
          "id": "cybersecurity-601-l05-act2",
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
      "id": "cybersecurity-601-l06",
      "title": "Checkpoint 2: Research and Systems Decisions",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "cybersecurity-601-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "questions": [
        {
          "id": "cybersecurity-601-l06-q1",
          "text": "Which practice most improves specialist performance in threat modeling?",
          "skillId": "cybersecurity-601-skill-specialist",
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
          "id": "cybersecurity-601-l06-q2",
          "text": "At level 601, the curriculum emphasizes:",
          "skillId": "cybersecurity-601-skill-level",
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
          "id": "cybersecurity-601-l06-q3",
          "text": "What best strengthens defense-in-depth design execution quality?",
          "skillId": "cybersecurity-601-skill-execution",
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
          "id": "cybersecurity-601-l06-q4",
          "text": "A rigorous approach to incident response systems should include:",
          "skillId": "cybersecurity-601-skill-evaluation",
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
          "id": "cybersecurity-601-l06-q5",
          "text": "A mature security governance system should connect:",
          "skillId": "cybersecurity-601-skill-governance",
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
          "id": "cybersecurity-601-l06-q6",
          "text": "In high-stakes Cybersecurity Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "cybersecurity-601-skill-advanced-6",
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
          "id": "cybersecurity-601-l06-q7",
          "text": "A mature remediation loop in advanced Computer Science should prioritize:",
          "skillId": "cybersecurity-601-skill-advanced-7",
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
          "id": "cybersecurity-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Cybersecurity Research and Leadership?",
          "skillId": "cybersecurity-601-skill-advanced-8",
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
      "id": "cybersecurity-601-l07",
      "title": "Cybersecurity Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "cybersecurity-601-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, learners will evaluate how the outcomes of Cybersecurity decisions are distributed among various stakeholders. This includes considering both immediate effects and those that may be delayed or indirect. Understanding this distribution is crucial for making informed decisions that consider the broader impact on the community and society as a whole.\nContext recap: In this lesson, learners will evaluate how the outcomes of Cybersecurity decisions are distributed among various stakeholders. This includes considering both immediate effects and those that may be delayed or indirect. Understanding this distribution is crucial for making informed decisions that consider the broader impact on the community and society as a whole."
        },
        {
          "id": "cybersecurity-601-l07-c2",
          "kind": "concept",
          "title": "Accountability System Design",
          "content": "In this section, we will explore how to design an accountability system that ensures transparency and responsibility in Cybersecurity practices. This includes implementing traceability standards, establishing review rights, and defining remediation obligations. By understanding these components, learners will appreciate the importance of accountability in maintaining trust and integrity within Cybersecurity frameworks.\nContext recap: In this section, we will explore how to design an accountability system that ensures transparency and responsibility in Cybersecurity practices. This includes implementing traceability standards, establishing review rights, and defining remediation obligations. By understanding these components, learners will appreciate the importance of accountability in maintaining trust and integrity within Cybersecurity frameworks."
        },
        {
          "id": "cybersecurity-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "A responsible leadership checklist is an important tool that helps leaders connect their strategies, ethical considerations, policies, and operational controls. This checklist serves as a comprehensive review document that ensures all aspects of leadership are aligned and working together effectively to promote good governance in cybersecurity.\nContext recap: A responsible leadership checklist is an important tool that helps leaders connect their strategies, ethical considerations, policies, and operational controls. This checklist serves as a comprehensive review document that ensures all aspects of leadership are aligned and working together effectively to promote good governance in cybersecurity."
        }
      ],
      "flashcards": [
        {
          "id": "cybersecurity-601-l07-f1",
          "front": "Impact distribution",
          "back": "How benefits and harms are allocated across groups and timeframes."
        },
        {
          "id": "cybersecurity-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable explanation of evidence, rationale, and ownership behind a decision."
        },
        {
          "id": "cybersecurity-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision practice that balances performance, risk, ethics, and accountability."
        }
      ]
    },
    {
      "id": "cybersecurity-601-l08",
      "title": "Cybersecurity Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "cybersecurity-601-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, log assumptions, and verify conclusions against constraints and metrics."
        }
      ],
      "chunks": [
        {
          "id": "cybersecurity-601-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter and Evidence Pack",
          "content": "In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of their project, any constraints they might face, the metrics they will use to measure success, the governance controls they will implement, and a plan for gathering evidence to support their findings. This comprehensive approach helps ensure that all aspects of the project are well thought out and organized.\nContext recap: In this activity, learners will create a detailed capstone charter. This document will outline the main objectives of their project, any constraints they might face, the metrics they will use to measure success, the governance controls they will implement, and a plan for gathering evidence to support their findings. This comprehensive approach helps ensure that all aspects of the project are well thought out and organized."
        },
        {
          "id": "cybersecurity-601-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal",
          "content": "The final practice round is designed to prepare learners for defending their decisions. During this rehearsal, they will practice responding to critiques that may come from technical experts, governance bodies, and various stakeholders. This exercise is crucial for building confidence and ensuring that learners can effectively communicate and justify their choices in a real-world setting.\nContext recap: The final practice round is designed to prepare learners for defending their decisions. During this rehearsal, they will practice responding to critiques that may come from technical experts, governance bodies, and various stakeholders. This exercise is crucial for building confidence and ensuring that learners can effectively communicate and justify their choices in a real-world setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "cybersecurity-601-l08-act1",
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
          "id": "cybersecurity-601-l08-act2",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel",
          "description": "Defend your capstone against expert critique on rigor, risk, and accountability."
        }
      ]
    }
  ]
};
