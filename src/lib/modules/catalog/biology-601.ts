import type { LearningModule } from "@/lib/modules/types";

export const Biology601Module: LearningModule = {
  "id": "biology-601",
  "title": "Biology Research and Leadership",
  "description": "Post-401 specialization in Biology, focused on biology systems diagnostics, biology operations and execution design, biology impact and tradeoff analysis, and biology governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Biology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "biology",
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
    "Apply advanced methods for biology systems diagnostics in high-constraint environments",
    "Design robust systems for biology operations and execution design with measurable control gates",
    "Evaluate interventions in biology impact and tradeoff analysis with research-grade rigor",
    "Operationalize biology governance and leadership with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "biology-601-l01",
      "title": "Biology Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biology-601-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this lesson, we will delve into the advanced boundaries of biology as a scientific discipline. We will examine how to effectively diagnose biological systems, which involves understanding the various components and interactions within living organisms. Additionally, we will discuss how to design efficient operations and execution strategies that can be applied in biological research. By grasping these concepts, we will be better equipped to define the limits and possibilities of biological research and its real-world applications, paving the way for innovative discoveries and solutions in the field of biology."
        },
        {
          "id": "biology-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "In this section, learners will create maps that illustrate causal pathways, which show how different factors influence one another. We will also explore uncertainty ranges and system dependencies, which are important for planning interventions. This mapping process is essential for understanding how to effectively address biological challenges.\nContext recap: In this section, learners will create maps that illustrate causal pathways, which show how different factors influence one another. We will also explore uncertainty ranges and system dependencies, which are important for planning interventions. This mapping process is essential for understanding how to effectively address biological challenges."
        },
        {
          "id": "biology-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "It is important that all claims we make in biology are supported by measurable indicators. This lesson emphasizes the need for confidence bounds and regular review checkpoints to ensure our findings are reliable. By mapping our claims to these indicators, we can strengthen our conclusions and enhance our research credibility.\nContext recap: It is important that all claims we make in biology are supported by measurable indicators. This lesson emphasizes the need for confidence bounds and regular review checkpoints to ensure our findings are reliable. By mapping our claims to these indicators, we can strengthen our conclusions and enhance our research credibility."
        }
      ],
      "flashcards": [
        {
          "id": "biology-601-l01-f1",
          "front": "biology systems diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "biology-601-l01-f2",
          "front": "biology operations and execution design",
          "back": "Execution architecture that determines reliability under stress."
        },
        {
          "id": "biology-601-l01-f3",
          "front": "biology impact and tradeoff analysis",
          "back": "Evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "biology-601-l02",
      "title": "Biology Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "biology-601-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, learners will design specialized workflows that are tailored to specific biological tasks. After creating these workflows, we will put them to the test by simulating adverse scenarios to see how they perform under stress. This practice will help us identify potential weaknesses and improve our methods.\nContext recap: In this interactive lab, learners will design specialized workflows that are tailored to specific biological tasks. After creating these workflows, we will put them to the test by simulating adverse scenarios to see how they perform under stress. This practice will help us identify potential weaknesses and improve our methods."
        },
        {
          "id": "biology-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "In this recap, we will discuss how workflows can be structured to include important checkpoints, rollback criteria, and escalation based on thresholds. These elements are crucial for ensuring that our processes are robust and can adapt to unexpected challenges while maintaining quality and safety.\nContext recap: In this recap, we will discuss how workflows can be structured to include important checkpoints, rollback criteria, and escalation based on thresholds. These elements are crucial for ensuring that our processes are robust and can adapt to unexpected challenges while maintaining quality and safety."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-601-l02-act1",
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
      "id": "biology-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biology-601-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "biology-601-l03-q1",
          "text": "Which practice most improves biology systems diagnostics decision quality?",
          "skillId": "biology-601-skill-core",
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
          "id": "biology-601-l03-q2",
          "text": "At level 601, strong execution for biology operations and execution design requires:",
          "skillId": "biology-601-skill-execution",
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
          "id": "biology-601-l03-q3",
          "text": "A defensible approach to biology impact and tradeoff analysis includes:",
          "skillId": "biology-601-skill-eval",
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
          "id": "biology-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "biology-601-skill-governance",
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
          "id": "biology-601-l03-q5",
          "text": "What is the best way to compare competing interventions in advanced Biology?",
          "skillId": "biology-601-skill-advanced-5",
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
          "id": "biology-601-l03-q6",
          "text": "In high-stakes Biology Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "biology-601-skill-advanced-6",
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
          "id": "biology-601-l03-q7",
          "text": "A mature remediation loop in advanced Biology should prioritize:",
          "skillId": "biology-601-skill-advanced-7",
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
          "id": "biology-601-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Biology Research and Leadership?",
          "skillId": "biology-601-skill-advanced-8",
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
      "id": "biology-601-l04",
      "title": "Biology Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biology-601-l04-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "In this lesson, we will frame cases that highlight the competing constraints found in biological systems diagnostics. We will analyze the impacts and trade-offs involved in making decisions within these systems. Understanding these dynamics is essential for effective case analysis in biology.\nContext recap: In this lesson, we will frame cases that highlight the competing constraints found in biological systems diagnostics. We will analyze the impacts and trade-offs involved in making decisions within these systems. Understanding these dynamics is essential for effective case analysis in biology."
        },
        {
          "id": "biology-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice session, learners will compare different options based on various dimensions such as safety, reliability, cost, equity, and governance. This comparative analysis will help us understand the trade-offs involved in decision-making and the importance of considering multiple factors.\nContext recap: In this practice session, learners will compare different options based on various dimensions such as safety, reliability, cost, equity, and governance. This comparative analysis will help us understand the trade-offs involved in decision-making and the importance of considering multiple factors."
        },
        {
          "id": "biology-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "In this recap, we will discuss the structure of decision memos. Each recommendation should include key components such as assumptions, supporting evidence, risk controls, and fallback plans. This structure ensures that our decisions are well-informed and prepared for potential challenges.\nContext recap: In this recap, we will discuss the structure of decision memos. Each recommendation should include key components such as assumptions, supporting evidence, risk controls, and fallback plans. This structure ensures that our decisions are well-informed and prepared for potential challenges."
        }
      ]
    },
    {
      "id": "biology-601-l05",
      "title": "Biology Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "biology-601-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive clinic, learners will have the opportunity to operate scenario controls while balancing performance and governance constraints. This hands-on experience will help us understand the complexities involved in managing biological scenarios effectively.\nContext recap: In this interactive clinic, learners will have the opportunity to operate scenario controls while balancing performance and governance constraints. This hands-on experience will help us understand the complexities involved in managing biological scenarios effectively.\nWhy this matters: Live Scenario Controls helps learners in Biology connect ideas from Biology Research and Leadership to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "biology-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "In this recap, we will explore how effective responses can update control gates while maintaining traceability and accountability. This is crucial for ensuring that our actions are transparent and that we can track the outcomes of our decisions.\nContext recap: In this recap, we will explore how effective responses can update control gates while maintaining traceability and accountability. This is crucial for ensuring that our actions are transparent and that we can track the outcomes of our decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure biology scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "biology-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "biology-601-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "biology-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "biology-601-skill-case1",
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
          "id": "biology-601-l06-q2",
          "text": "A resilient strategy for biology operations and execution design should include:",
          "skillId": "biology-601-skill-case2",
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
          "id": "biology-601-l06-q3",
          "text": "When evaluating biology impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "biology-601-skill-case3",
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
          "id": "biology-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "biology-601-skill-case4",
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
          "id": "biology-601-l06-q5",
          "text": "What is the best way to compare competing interventions in advanced Biology?",
          "skillId": "biology-601-skill-advanced-5",
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
          "id": "biology-601-l06-q6",
          "text": "In high-stakes Biology Research and Leadership execution, which communication protocol is strongest?",
          "skillId": "biology-601-skill-advanced-6",
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
          "id": "biology-601-l06-q7",
          "text": "A mature remediation loop in advanced Biology should prioritize:",
          "skillId": "biology-601-skill-advanced-7",
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
          "id": "biology-601-l06-q8",
          "text": "Which portfolio decision rule best balances performance and resilience in Biology Research and Leadership?",
          "skillId": "biology-601-skill-advanced-8",
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
      "id": "biology-601-l07",
      "title": "Biology Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biology-601-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, learners will map out the distribution of benefits, burdens, and delayed effects across different stakeholder groups. Understanding these impacts is vital for ensuring that our biological initiatives are equitable and considerate of all parties involved.\nContext recap: In this lesson, learners will map out the distribution of benefits, burdens, and delayed effects across different stakeholder groups. Understanding these impacts is vital for ensuring that our biological initiatives are equitable and considerate of all parties involved."
        },
        {
          "id": "biology-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss the architecture of accountability in decision-making. This includes ensuring that there is traceability for decisions made, rights for review, and obligations for remediation. These elements are essential for maintaining trust and responsibility in biological governance.\nContext recap: In this section, we will discuss the architecture of accountability in decision-making. This includes ensuring that there is traceability for decisions made, rights for review, and obligations for remediation. These elements are essential for maintaining trust and responsibility in biological governance."
        },
        {
          "id": "biology-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "At the end of our lesson, we will provide a comprehensive checklist that connects important outcomes with ethical considerations, ensures compliance with relevant policies, and emphasizes the importance of resilience in leadership. This checklist will serve as a valuable tool for evaluating our responsibilities as leaders in the field of biology.\nContext recap: At the end of our lesson, we will provide a comprehensive checklist that connects important outcomes with ethical considerations, ensures compliance with relevant policies, and emphasizes the importance of resilience in leadership. This checklist will serve as a valuable tool for evaluating our responsibilities as leaders in the field of biology."
        }
      ],
      "flashcards": [
        {
          "id": "biology-601-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "biology-601-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "biology-601-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "biology-601-l08",
      "title": "Biology Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biology-601-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "biology-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive activity, students will work together to create a detailed brief. This brief will include well-supported claims, evidence to back those claims, an understanding of the uncertainties involved, and potential pathways for remediation. This exercise will help students practice organizing their thoughts and presenting their ideas clearly.\nContext recap: In this interactive activity, students will work together to create a detailed brief. This brief will include well-supported claims, evidence to back those claims, an understanding of the uncertainties involved, and potential pathways for remediation. This exercise will help students practice organizing their thoughts and presenting their ideas clearly."
        },
        {
          "id": "biology-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "During this session, learners will practice their responses to a variety of critiques that may come from experts, governance bodies, and stakeholders. This rehearsal will help students build confidence in their ability to address challenging questions and defend their ideas effectively. It’s an important step in preparing for real-world discussions.\nContext recap: During this session, learners will practice their responses to a variety of critiques that may come from experts, governance bodies, and stakeholders. This rehearsal will help students build confidence in their ability to address challenging questions and defend their ideas effectively. It’s an important step in preparing for real-world discussions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
