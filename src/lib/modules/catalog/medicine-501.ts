import type { LearningModule } from "@/lib/modules/types";

export const Medicine501Module: LearningModule = {
  "id": "medicine-501",
  "title": "Medicine Specialization Studio",
  "description": "Post-401 specialization in Medicine, focused on medicine systems diagnostics, medicine operations and execution design, medicine impact and tradeoff analysis, and medicine governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Medicine",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "medicine",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply advanced methods for medicine systems diagnostics in high-constraint environments",
    "Design robust systems for medicine operations and execution design with measurable control gates",
    "Evaluate interventions in medicine impact and tradeoff analysis with research-grade rigor",
    "Operationalize medicine governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "medicine-501-l01",
      "title": "Medicine Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "medicine-501-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this lesson, we will delve into the advanced boundaries of medical practice. We will examine how to accurately diagnose medical systems and design effective operations for carrying out medical procedures. By understanding these boundaries, medical professionals can ensure they deliver the highest quality of care while following established guidelines and protocols. This knowledge is essential for maintaining patient safety and improving health outcomes.\nContext recap: In this lesson, we will delve into the advanced boundaries of medical practice. We will examine how to accurately diagnose medical systems and design effective operations for carrying out medical procedures. By understanding these boundaries, medical professionals can ensure they deliver the highest quality of care while following established guidelines and protocols. This knowledge is essential for maintaining patient safety and improving health outcomes."
        },
        {
          "id": "medicine-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "In this section, learners will engage in mapping out causal pathways, which are the connections between different factors that can lead to health outcomes. Additionally, we will examine uncertainty ranges and the dependencies within medical systems. This foundational knowledge is essential for planning effective interventions in healthcare.\nContext recap: In this section, learners will engage in mapping out causal pathways, which are the connections between different factors that can lead to health outcomes. Additionally, we will examine uncertainty ranges and the dependencies within medical systems. This foundational knowledge is essential for planning effective interventions in healthcare."
        },
        {
          "id": "medicine-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "In our recap, we will emphasize that all claims made in medical practice must be linked to measurable indicators. This includes establishing confidence bounds and setting up review checkpoints to ensure that the information is reliable and can be verified. This practice is crucial for maintaining high standards in healthcare.\nContext recap: In our recap, we will emphasize that all claims made in medical practice must be linked to measurable indicators. This includes establishing confidence bounds and setting up review checkpoints to ensure that the information is reliable and can be verified. This practice is crucial for maintaining high standards in healthcare."
        }
      ],
      "flashcards": [
        {
          "id": "medicine-501-l01-f1",
          "front": "medicine systems diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "medicine-501-l01-f2",
          "front": "medicine operations and execution design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "medicine-501-l01-f3",
          "front": "medicine impact and tradeoff analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "medicine-501-l02",
      "title": "Medicine Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "medicine-501-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive segment, learners will have the opportunity to design specialized workflows that are essential for medical practice. They will also conduct stress tests on these workflows by simulating adverse scenarios. This hands-on experience will help learners understand how to prepare for unexpected challenges in healthcare settings.\nContext recap: In this interactive segment, learners will have the opportunity to design specialized workflows that are essential for medical practice. They will also conduct stress tests on these workflows by simulating adverse scenarios. This hands-on experience will help learners understand how to prepare for unexpected challenges in healthcare settings."
        },
        {
          "id": "medicine-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "In our recap, we will discuss how workflows should incorporate various checkpoints, rollback criteria, and escalation thresholds. These elements are vital for ensuring that medical processes are efficient and can adapt to changing circumstances while maintaining safety and quality.\nContext recap: In our recap, we will discuss how workflows should incorporate various checkpoints, rollback criteria, and escalation thresholds. These elements are vital for ensuring that medical processes are efficient and can adapt to changing circumstances while maintaining safety and quality."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their strongest reliability and governance effects.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits blast radius under adverse outcomes"
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
      "id": "medicine-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "medicine-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "medicine-501-l03-q1",
          "text": "Which practice most improves medicine systems diagnostics decision quality?",
          "skillId": "medicine-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without baseline or assumptions"
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are explicit."
        },
        {
          "id": "medicine-501-l03-q2",
          "text": "At level 501, strong execution for medicine operations and execution design requires:",
          "skillId": "medicine-501-skill-execution",
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
          "id": "medicine-501-l03-q3",
          "text": "A defensible approach to medicine impact and tradeoff analysis includes:",
          "skillId": "medicine-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, side-effect checks, and uncertainty disclosure."
        },
        {
          "id": "medicine-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "medicine-501-skill-governance",
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
              "text": "Targets without ownership or escalation design"
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
          "id": "medicine-501-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Medicine?",
          "skillId": "medicine-501-skill-advanced-5",
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
          "id": "medicine-501-l03-q6",
          "text": "In high-stakes Medicine Specialization Studio execution, which communication protocol is strongest?",
          "skillId": "medicine-501-skill-advanced-6",
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
          "id": "medicine-501-l03-q7",
          "text": "A mature remediation loop in advanced Medicine should prioritize:",
          "skillId": "medicine-501-skill-advanced-7",
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
          "id": "medicine-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Medicine Specialization Studio?",
          "skillId": "medicine-501-skill-advanced-8",
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
      "id": "medicine-501-l04",
      "title": "Medicine Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "medicine-501-l04-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "In this lesson, we will frame cases that highlight the competing constraints faced in medical systems diagnostics. We will analyze the impacts and trade-offs involved in making medical decisions. Understanding these complexities is essential for developing effective solutions in healthcare.\nContext recap: In this lesson, we will frame cases that highlight the competing constraints faced in medical systems diagnostics. We will analyze the impacts and trade-offs involved in making medical decisions. Understanding these complexities is essential for developing effective solutions in healthcare."
        },
        {
          "id": "medicine-501-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice segment, learners will compare different options available in medical decision-making. They will evaluate these options based on various dimensions, including safety, reliability, cost, equity, and governance. This comparative analysis is crucial for making informed and balanced healthcare decisions.\nContext recap: In this practice segment, learners will compare different options available in medical decision-making. They will evaluate these options based on various dimensions, including safety, reliability, cost, equity, and governance. This comparative analysis is crucial for making informed and balanced healthcare decisions."
        },
        {
          "id": "medicine-501-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "In our recap, we will review the importance of including assumptions, evidence, risk controls, and fallback plans in each recommendation made in medical practice. This structured approach ensures that decisions are well-informed and prepared for potential challenges.\nContext recap: In our recap, we will review the importance of including assumptions, evidence, risk controls, and fallback plans in each recommendation made in medical practice. This structured approach ensures that decisions are well-informed and prepared for potential challenges."
        }
      ]
    },
    {
      "id": "medicine-501-l05",
      "title": "Medicine Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "medicine-501-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive practice, learners will operate scenario controls while balancing performance with governance constraints. This experience will help them understand the importance of maintaining high standards while effectively managing healthcare scenarios.\nContext recap: In this interactive practice, learners will operate scenario controls while balancing performance with governance constraints. This experience will help them understand the importance of maintaining high standards while effectively managing healthcare scenarios.\nWhy this matters: Live Scenario Controls helps learners in Medicine connect ideas from Medicine Specialization Studio to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "medicine-501-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "In our recap, we will discuss how effective responses to medical scenarios should update control gates without losing traceability or accountability. This principle is vital for ensuring that all actions taken in healthcare are transparent and can be tracked.\nContext recap: In our recap, we will discuss how effective responses to medical scenarios should update control gates without losing traceability or accountability. This principle is vital for ensuring that all actions taken in healthcare are transparent and can be tracked."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure medicine scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "medicine-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "medicine-501-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "medicine-501-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "medicine-501-skill-case1",
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
          "id": "medicine-501-l06-q2",
          "text": "A resilient strategy for medicine operations and execution design should include:",
          "skillId": "medicine-501-skill-case2",
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
          "id": "medicine-501-l06-q3",
          "text": "When evaluating medicine impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "medicine-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Single success story without controls"
            },
            {
              "id": "b",
              "text": "Comparative baselines plus side-effect and uncertainty analysis"
            },
            {
              "id": "c",
              "text": "Outcome-only narrative without process evidence"
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
          "id": "medicine-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "medicine-501-skill-case4",
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
          "id": "medicine-501-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Medicine?",
          "skillId": "medicine-501-skill-advanced-5",
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
          "id": "medicine-501-l06-q6",
          "text": "In high-stakes Medicine Specialization Studio execution, which communication protocol is strongest?",
          "skillId": "medicine-501-skill-advanced-6",
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
          "id": "medicine-501-l06-q7",
          "text": "A mature remediation loop in advanced Medicine should prioritize:",
          "skillId": "medicine-501-skill-advanced-7",
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
          "id": "medicine-501-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Medicine Specialization Studio?",
          "skillId": "medicine-501-skill-advanced-8",
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
      "id": "medicine-501-l07",
      "title": "Medicine Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "medicine-501-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, learners will map out the distribution of benefits, burdens, and delayed effects across different stakeholder groups in healthcare. Understanding these dynamics is essential for ensuring that all voices are considered in medical decision-making.\nContext recap: In this lesson, learners will map out the distribution of benefits, burdens, and delayed effects across different stakeholder groups in healthcare. Understanding these dynamics is essential for ensuring that all voices are considered in medical decision-making.\nWhy this matters: Stakeholder Impact Distribution helps learners in Medicine connect ideas from Medicine Specialization Studio to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "medicine-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will explore the architecture of accountability in medical decision-making. This includes understanding how decision traceability, review rights, and remediation obligations are integrated into healthcare practices. These elements are crucial for maintaining trust and integrity in medical systems.\nContext recap: In this section, we will explore the architecture of accountability in medical decision-making. This includes understanding how decision traceability, review rights, and remediation obligations are integrated into healthcare practices. These elements are crucial for maintaining trust and integrity in medical systems."
        },
        {
          "id": "medicine-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "At the end of our lesson, we have a helpful checklist that connects important outcomes with ethical considerations, ensures we follow policies correctly, and promotes resilience in our leadership practices. This checklist serves as a guide to help us reflect on our responsibilities as leaders in the medical field.\nContext recap: At the end of our lesson, we have a helpful checklist that connects important outcomes with ethical considerations, ensures we follow policies correctly, and promotes resilience in our leadership practices. This checklist serves as a guide to help us reflect on our responsibilities as leaders in the medical field."
        }
      ],
      "flashcards": [
        {
          "id": "medicine-501-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "medicine-501-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "medicine-501-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "medicine-501-l08",
      "title": "Medicine Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "medicine-501-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "medicine-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive activity, learners will work together to create a comprehensive brief. This brief will include well-supported claims, relevant evidence, an understanding of uncertainty, and clear pathways for remediation. This exercise helps develop critical thinking and communication skills essential for defending medical decisions.\nContext recap: In this interactive activity, learners will work together to create a comprehensive brief. This brief will include well-supported claims, relevant evidence, an understanding of uncertainty, and clear pathways for remediation. This exercise helps develop critical thinking and communication skills essential for defending medical decisions."
        },
        {
          "id": "medicine-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this session, learners will practice their responses to various critiques that may arise from technical experts, governance bodies, and stakeholders. This rehearsal is crucial for building confidence and ensuring that learners can effectively communicate their ideas and defend their positions in a professional setting.\nContext recap: During this session, learners will practice their responses to various critiques that may arise from technical experts, governance bodies, and stakeholders. This rehearsal is crucial for building confidence and ensuring that learners can effectively communicate their ideas and defend their positions in a professional setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "medicine-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
