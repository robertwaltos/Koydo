import type { LearningModule } from "@/lib/modules/types";

export const EthicsOfTechnology301Module: LearningModule = {
  "id": "ethics-of-technology-301",
  "title": "Ethics of Technology Systems and Governance",
  "description": "Level 301 curriculum in Ethics of Technology, focused on normative frameworks, sociotechnical harms, responsible design practice, and governance and accountability through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ethics",
    "technology"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply normative frameworks with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for sociotechnical harms under realistic constraints",
    "Evaluate responsible design practice decisions with baseline and side-effect analysis",
    "Strengthen governance and accountability with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "ethics-of-technology-301-l01",
      "title": "Ethics of Technology Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "In this lesson, we will explore important concepts related to technology ethics. We will define what we mean by operational language, which helps us communicate clearly about technology. We will also discuss the boundaries of our scope, meaning the limits of what we are studying. Additionally, we will learn how normative frameworks, which are guidelines for what is considered right or wrong, connect with sociotechnical harms, or the negative impacts technology can have on society. Understanding these connections is crucial for analyzing real-world technology systems.\nContext recap: In this lesson, we will explore important concepts related to technology ethics. We will define what we mean by operational language, which helps us communicate clearly about technology. We will also discuss the boundaries of our scope, meaning the limits of what we are studying. Additionally, we will learn how normative frameworks, which are guidelines for what is considered right or wrong, connect with sociotechnical harms, or the negative impacts technology can have on society."
        },
        {
          "id": "ethics-of-technology-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "In this part of the lesson, learners will practice modeling cause-and-effect pathways. This means they will learn how to trace the relationships between actions and their outcomes. They will also identify assumptions that might lead to failures in technology systems. By recognizing these assumptions, learners can make better choices when selecting interventions, or actions taken to improve a situation. This skill is essential for understanding how to navigate challenges in technology effectively.\nContext recap: In this part of the lesson, learners will practice modeling cause-and-effect pathways. This means they will learn how to trace the relationships between actions and their outcomes. They will also identify assumptions that might lead to failures in technology systems. By recognizing these assumptions, learners can make better choices when selecting interventions, or actions taken to improve a situation."
        },
        {
          "id": "ethics-of-technology-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, it is important to ensure that all claims we make are supported by observable indicators. This means we need evidence that can be seen or measured. We will also discuss the concept of uncertainty bounds, which help us understand the limits of our knowledge. Additionally, we will establish review checkpoints, which are moments when we can assess our progress and make necessary adjustments. This approach ensures that our conclusions are grounded in solid evidence and can be trusted.\nContext recap: Throughout this module, it is important to ensure that all claims we make are supported by observable indicators. This means we need evidence that can be seen or measured. We will also discuss the concept of uncertainty bounds, which help us understand the limits of our knowledge. Additionally, we will establish review checkpoints, which are moments when we can assess our progress and make necessary adjustments."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-301-l01-f1",
          "front": "normative frameworks",
          "back": "A central decision axis in Ethics of Technology requiring explicit tradeoff treatment."
        },
        {
          "id": "ethics-of-technology-301-l01-f2",
          "front": "sociotechnical harms",
          "back": "The reliability layer that determines whether plans survive real-world variability."
        },
        {
          "id": "ethics-of-technology-301-l01-f3",
          "front": "responsible design practice",
          "back": "The analytical process for assessing intervention quality and consequence spread."
        }
      ]
    },
    {
      "id": "ethics-of-technology-301-l02",
      "title": "Ethics of Technology Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, learners will have the opportunity to design a workflow. This workflow will focus on analyzing trade-offs within systems, which means weighing the pros and cons of different choices. They will also integrate metrics, or measurements, and governance, which refers to the rules and processes that guide decision-making. Furthermore, learners will collaborate across teams to design decisions that take into account various perspectives. Finally, they will test the resilience of their workflow against uncertainties, ensuring it can adapt to unexpected challenges.\nContext recap: In this interactive lab, learners will have the opportunity to design a workflow. This workflow will focus on analyzing trade-offs within systems, which means weighing the pros and cons of different choices. They will also integrate metrics, or measurements, and governance, which refers to the rules and processes that guide decision-making. Furthermore, learners will collaborate across teams to design decisions that take into account various perspectives."
        },
        {
          "id": "ethics-of-technology-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "For a system to be operationally ready, it is essential to map out the owners, or those responsible for different parts of the system. This mapping helps clarify roles and responsibilities. Additionally, we will discuss the importance of control gates, which are checkpoints that ensure everything is on track before moving forward. Lastly, we will introduce post-decision verification hooks, which are mechanisms that allow us to check if the decisions made were effective and aligned with our goals. These elements are crucial for maintaining accountability and ensuring successful outcomes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-301-l02-act1",
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
          "id": "ethics-of-technology-301-l02-act2",
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
      "id": "ethics-of-technology-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-301-l03-q1",
          "text": "Which action most improves normative frameworks quality in practice?",
          "skillId": "ethics-of-technology-301-skill-core",
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
          "id": "ethics-of-technology-301-l03-q2",
          "text": "At level 301, the strongest emphasis is:",
          "skillId": "ethics-of-technology-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoff analysis, metrics and governance integration, and cross-team decision design"
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
          "explanation": "The 301 layer is explicitly designed around system tradeoff analysis, metrics and governance integration, and cross-team decision design."
        },
        {
          "id": "ethics-of-technology-301-l03-q3",
          "text": "What best strengthens sociotechnical harms reliability?",
          "skillId": "ethics-of-technology-301-skill-reliability",
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
          "id": "ethics-of-technology-301-l03-q4",
          "text": "When evaluating responsible design practice, which approach is most defensible?",
          "skillId": "ethics-of-technology-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal examples only"
            },
            {
              "id": "b",
              "text": "Compare interventions against baseline and monitor side effects"
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
          "id": "ethics-of-technology-301-l03-q5",
          "text": "A mature governance and accountability model should include:",
          "skillId": "ethics-of-technology-301-skill-governance",
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
      "id": "ethics-of-technology-301-l04",
      "title": "Ethics of Technology Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this case analysis, we will focus on a specific technology rollout that brings significant convenience to users. However, we must also consider the emerging risks related to fairness, privacy, and autonomy. Learners will map out the stakes involved in the decision-making process, identifying both the benefits and the potential drawbacks. This exercise will help them recognize non-obvious risks that may not be immediately apparent but are crucial for understanding the full impact of technology on society.\nContext recap: In this case analysis, we will focus on a specific technology rollout that brings significant convenience to users. However, we must also consider the emerging risks related to fairness, privacy, and autonomy. Learners will map out the stakes involved in the decision-making process, identifying both the benefits and the potential drawbacks. This exercise will help them recognize non-obvious risks that may not be immediately apparent but are crucial for understanding the full impact of technology on society."
        },
        {
          "id": "ethics-of-technology-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "In this section, we will learn how to construct a tradeoff matrix. This matrix will allow us to compare different interventions based on several important criteria. We will evaluate each intervention's effectiveness, reliability, equity, and feasibility of implementation. By using this matrix, learners will gain a clearer understanding of how different choices can impact various stakeholders and help them make informed decisions about technology interventions.\nContext recap: In this section, we will learn how to construct a tradeoff matrix. This matrix will allow us to compare different interventions based on several important criteria. We will evaluate each intervention's effectiveness, reliability, equity, and feasibility of implementation. By using this matrix, learners will gain a clearer understanding of how different choices can impact various stakeholders and help them make informed decisions about technology interventions."
        },
        {
          "id": "ethics-of-technology-301-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "In this recap, we will focus on the lessons learned from failures that may have occurred during the analysis. We will convert these failure signatures, or patterns of failure, into actionable safeguards. This means creating response playbooks, which are plans for how to react to similar situations in the future, and monitoring updates to keep track of changes. By learning from past mistakes, we can improve our systems and ensure better outcomes in the future.\nContext recap: In this recap, we will focus on the lessons learned from failures that may have occurred during the analysis. We will convert these failure signatures, or patterns of failure, into actionable safeguards. This means creating response playbooks, which are plans for how to react to similar situations in the future, and monitoring updates to keep track of changes. By learning from past mistakes, we can improve our systems and ensure better outcomes in the future."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured comparison of options under conflicting priorities."
        },
        {
          "id": "ethics-of-technology-301-l04-f2",
          "front": "Failure signature",
          "back": "A recurring observable pattern indicating a class of system risk."
        },
        {
          "id": "ethics-of-technology-301-l04-f3",
          "front": "Recovery playbook",
          "back": "A documented sequence for safe and timely response during adverse events."
        }
      ]
    },
    {
      "id": "ethics-of-technology-301-l05",
      "title": "Ethics of Technology Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive simulation studio, learners will configure various interventions. This involves defining the parameters of uncertainty, which are the unknown factors that could affect the outcomes. Additionally, they will set measurable success thresholds, which are specific criteria that will help determine whether the interventions are successful. This hands-on experience will allow learners to apply their knowledge in a practical setting and understand the complexities of decision-making in technology.\nContext recap: In this interactive simulation studio, learners will configure various interventions. This involves defining the parameters of uncertainty, which are the unknown factors that could affect the outcomes. Additionally, they will set measurable success thresholds, which are specific criteria that will help determine whether the interventions are successful. This hands-on experience will allow learners to apply their knowledge in a practical setting and understand the complexities of decision-making in technology."
        },
        {
          "id": "ethics-of-technology-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation run, learners will participate in a debriefing session. During this time, they will review the results to assess expected gains, which are the positive outcomes anticipated from their interventions. They will also examine any side effects that may have occurred, as well as ensure that their actions comply with governance standards. This reflective process is essential for understanding the effectiveness of their decisions and making improvements for future simulations.\nContext recap: After each simulation run, learners will participate in a debriefing session. During this time, they will review the results to assess expected gains, which are the positive outcomes anticipated from their interventions. They will also examine any side effects that may have occurred, as well as ensure that their actions comply with governance standards. This reflective process is essential for understanding the effectiveness of their decisions and making improvements for future simulations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances normative frameworks and governance and accountability.",
          "instructions": [
            "Define objective and guardrails before selecting interventions.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that confirm or falsify your choice."
          ]
        },
        {
          "id": "ethics-of-technology-301-l05-act2",
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
      "id": "ethics-of-technology-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-301-l06-q1",
          "text": "Which action most improves normative frameworks quality in practice?",
          "skillId": "ethics-of-technology-301-skill-core",
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
          "id": "ethics-of-technology-301-l06-q2",
          "text": "At level 301, the strongest emphasis is:",
          "skillId": "ethics-of-technology-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoff analysis, metrics and governance integration, and cross-team decision design"
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
          "explanation": "The 301 layer is explicitly designed around system tradeoff analysis, metrics and governance integration, and cross-team decision design."
        },
        {
          "id": "ethics-of-technology-301-l06-q3",
          "text": "What best strengthens sociotechnical harms reliability?",
          "skillId": "ethics-of-technology-301-skill-reliability",
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
          "id": "ethics-of-technology-301-l06-q4",
          "text": "When evaluating responsible design practice, which approach is most defensible?",
          "skillId": "ethics-of-technology-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal examples only"
            },
            {
              "id": "b",
              "text": "Compare interventions against baseline and monitor side effects"
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
          "id": "ethics-of-technology-301-l06-q5",
          "text": "A mature governance and accountability model should include:",
          "skillId": "ethics-of-technology-301-skill-governance",
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
      "id": "ethics-of-technology-301-l07",
      "title": "Ethics of Technology Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will focus on mapping the impact of technology on various stakeholders. This means identifying how benefits and burdens are distributed among different groups of people. It is important to recognize where these benefits and burdens diverge, as this can highlight inequalities and areas that need attention. By understanding the impact distribution, learners can advocate for fairer technology practices that consider the needs of all stakeholders.\nContext recap: In this lesson, we will focus on mapping the impact of technology on various stakeholders. This means identifying how benefits and burdens are distributed among different groups of people. It is important to recognize where these benefits and burdens diverge, as this can highlight inequalities and areas that need attention. By understanding the impact distribution, learners can advocate for fairer technology practices that consider the needs of all stakeholders."
        },
        {
          "id": "ethics-of-technology-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss the concept of accountability in technology governance. Accountability requires that decisions made within technology systems are traceable, meaning we can follow the decision-making process step by step. We will also explore the importance of review rights, which allow stakeholders to question and assess decisions. Lastly, we will establish remediation standards, which are guidelines for how to address issues when they arise. These elements are crucial for ensuring that technology systems operate fairly and responsibly.\nContext recap: In this section, we will discuss the concept of accountability in technology governance. Accountability requires that decisions made within technology systems are traceable, meaning we can follow the decision-making process step by step. We will also explore the importance of review rights, which allow stakeholders to question and assess decisions. Lastly, we will establish remediation standards, which are guidelines for how to address issues when they arise."
        },
        {
          "id": "ethics-of-technology-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "To ensure that technology is used responsibly, we can create a final checklist. This checklist will include important aspects such as policies that guide our actions, ethical considerations that help us make the right choices, the reliability of the technology we are using, and the trust we build with everyone involved. By combining these criteria, we can make sure that our technology is not only effective but also aligns with our values and the needs of the community.\nContext recap: To ensure that technology is used responsibly, we can create a final checklist. This checklist will include important aspects such as policies that guide our actions, ethical considerations that help us make the right choices, the reliability of the technology we are using, and the trust we build with everyone involved. By combining these criteria, we can make sure that our technology is not only effective but also aligns with our values and the needs of the community."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-301-l07-f1",
          "front": "Impact distribution",
          "back": "How benefits and harms are allocated across stakeholders."
        },
        {
          "id": "ethics-of-technology-301-l07-f2",
          "front": "Decision traceability",
          "back": "The ability to explain why a decision was made, by whom, and with what evidence."
        },
        {
          "id": "ethics-of-technology-301-l07-f3",
          "front": "Responsible execution",
          "back": "A delivery mode that combines effectiveness, fairness, and corrective capacity."
        }
      ]
    },
    {
      "id": "ethics-of-technology-301-l08",
      "title": "Ethics of Technology Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this interactive activity, learners will work on drafting a charter for their capstone project. This charter will outline the scope of the project, which defines what will be included and what will not. Additionally, learners will identify any constraints that may limit their project, establish metrics to measure success, and set governance checkpoints to ensure everything stays on track. This comprehensive approach will help guide their project from start to finish.\nContext recap: In this interactive activity, learners will work on drafting a charter for their capstone project. This charter will outline the scope of the project, which defines what will be included and what will not. Additionally, learners will identify any constraints that may limit their project, establish metrics to measure success, and set governance checkpoints to ensure everything stays on track. This comprehensive approach will help guide their project from start to finish."
        },
        {
          "id": "ethics-of-technology-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As we prepare for the final presentation of our capstone projects, it is crucial to focus on being ready to defend our ideas. This means we should gather evidence that supports our decisions and be prepared to explain our reasoning clearly. Additionally, we must develop strong responses to any critical feedback we might receive. This preparation will help us present our work confidently and effectively, showcasing our understanding and commitment to our project.\nContext recap: As we prepare for the final presentation of our capstone projects, it is crucial to focus on being ready to defend our ideas. This means we should gather evidence that supports our decisions and be prepared to explain our reasoning clearly. Additionally, we must develop strong responses to any critical feedback we might receive. This preparation will help us present our work confidently and effectively, showcasing our understanding and commitment to our project."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Document a governance escalation pathway for critical failures."
          ]
        },
        {
          "id": "ethics-of-technology-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against technical, policy, and stakeholder critiques."
        }
      ]
    }
  ]
};
