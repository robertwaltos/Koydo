import type { LearningModule } from "@/lib/modules/types";

export const DistributedSystems301Module: LearningModule = {
  "id": "distributed-systems-301",
  "title": "Distributed Systems Systems and Governance",
  "description": "Level 301 curriculum in Distributed Systems, focused on consistency and availability, fault tolerance, distributed coordination, and observability and operations through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "systems",
    "engineering"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply consistency and availability with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for fault tolerance under realistic constraints",
    "Evaluate distributed coordination decisions with baseline and side-effect analysis",
    "Strengthen observability and operations with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "distributed-systems-301-l01",
      "title": "Distributed Systems Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "distributed-systems-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "In this lesson, we will explore the important concepts of operational language and scope boundaries. We will learn how these ideas help us understand the connections between consistency, availability, and fault tolerance in real-world systems. By the end of this lesson, you will have a clearer understanding of how these elements work together to ensure that distributed systems function effectively.\nContext recap: In this lesson, we will explore the important concepts of operational language and scope boundaries. We will learn how these ideas help us understand the connections between consistency, availability, and fault tolerance in real-world systems. By the end of this lesson, you will have a clearer understanding of how these elements work together to ensure that distributed systems function effectively."
        },
        {
          "id": "distributed-systems-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "In this part of the lesson, learners will engage in modeling cause-and-effect pathways. This means you will identify potential assumptions that could lead to failures in a system. By recognizing these assumptions, you will be better prepared to select appropriate interventions that can help improve system performance and reliability. This skill is crucial for making informed decisions in complex environments.\nContext recap: In this part of the lesson, learners will engage in modeling cause-and-effect pathways. This means you will identify potential assumptions that could lead to failures in a system. By recognizing these assumptions, you will be better prepared to select appropriate interventions that can help improve system performance and reliability. This skill is crucial for making informed decisions in complex environments."
        },
        {
          "id": "distributed-systems-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, it is essential that all claims are supported by observable indicators. This means we need to establish clear boundaries of uncertainty and set up review checkpoints. By adhering to these evidence standards, we can ensure that our conclusions are based on solid data and reliable observations, which is vital for effective decision-making in distributed systems.\nContext recap: Throughout this module, it is essential that all claims are supported by observable indicators. This means we need to establish clear boundaries of uncertainty and set up review checkpoints. By adhering to these evidence standards, we can ensure that our conclusions are based on solid data and reliable observations, which is vital for effective decision-making in distributed systems."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-301-l01-f1",
          "front": "consistency and availability",
          "back": "A central decision axis in Distributed Systems requiring explicit tradeoff treatment."
        },
        {
          "id": "distributed-systems-301-l01-f2",
          "front": "fault tolerance",
          "back": "The reliability layer that determines whether plans survive real-world variability."
        },
        {
          "id": "distributed-systems-301-l01-f3",
          "front": "distributed coordination",
          "back": "The analytical process for assessing intervention quality and consequence spread."
        }
      ]
    },
    {
      "id": "distributed-systems-301-l02",
      "title": "Distributed Systems Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, learners will have the opportunity to design a workflow that emphasizes the analysis of system trade-offs. You will focus on integrating metrics and governance into your workflow while also considering how different teams can make decisions collaboratively. After designing your workflow, you will test its resilience against uncertainties, ensuring that it can withstand unexpected challenges.\nContext recap: In this interactive lab, learners will have the opportunity to design a workflow that emphasizes the analysis of system trade-offs. You will focus on integrating metrics and governance into your workflow while also considering how different teams can make decisions collaboratively. After designing your workflow, you will test its resilience against uncertainties, ensuring that it can withstand unexpected challenges."
        },
        {
          "id": "distributed-systems-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To achieve operational readiness, it is crucial to map out the roles of different owners, establish control gates, and create verification hooks for post-decision processes. These elements help ensure that decisions are made effectively and that there are checks in place to confirm that the outcomes align with our goals. This lesson will reinforce the importance of these components in maintaining a well-functioning system.\nContext recap: To achieve operational readiness, it is crucial to map out the roles of different owners, establish control gates, and create verification hooks for post-decision processes. These elements help ensure that decisions are made effectively and that there are checks in place to confirm that the outcomes align with our goals. This lesson will reinforce the importance of these components in maintaining a well-functioning system."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-301-l02-act1",
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
          "id": "distributed-systems-301-l02-act2",
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
      "id": "distributed-systems-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-301-l03-q1",
          "text": "Which action most improves consistency and availability quality in practice?",
          "skillId": "distributed-systems-301-skill-core",
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
          "id": "distributed-systems-301-l03-q2",
          "text": "At level 301, the strongest emphasis is:",
          "skillId": "distributed-systems-301-skill-level",
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
          "id": "distributed-systems-301-l03-q3",
          "text": "What best strengthens fault tolerance reliability?",
          "skillId": "distributed-systems-301-skill-reliability",
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
          "id": "distributed-systems-301-l03-q4",
          "text": "When evaluating distributed coordination, which approach is most defensible?",
          "skillId": "distributed-systems-301-skill-eval",
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
          "id": "distributed-systems-301-l03-q5",
          "text": "A mature observability and operations model should include:",
          "skillId": "distributed-systems-301-skill-governance",
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
      "id": "distributed-systems-301-l04",
      "title": "Distributed Systems Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "distributed-systems-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this engaging case analysis, we will explore a global service that is encountering several significant challenges. These include experiencing partial outages, which means that some parts of the service are not functioning properly, as well as dealing with stale reads, where users receive outdated information. Additionally, the service faces intense pressure to recover quickly during times of high traffic, which can be very stressful for the system. Throughout this lesson, you will learn how to carefully map out the various stakes involved in making important decisions and identify risks that may not be immediately obvious. This exercise is designed to deepen your understanding of the complexities involved in managing distributed systems, especially when they are under stress, and to prepare you for real-world scenarios in the field of computer science."
        },
        {
          "id": "distributed-systems-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "In this section, we will construct a trade-off matrix to compare different interventions. You will evaluate these interventions based on their effectiveness, reliability, fairness, and how feasible they are to implement. This matrix will help you make informed decisions by clearly illustrating the pros and cons of each option, which is essential for effective governance in distributed systems.\nContext recap: In this section, we will construct a trade-off matrix to compare different interventions. You will evaluate these interventions based on their effectiveness, reliability, fairness, and how feasible they are to implement. This matrix will help you make informed decisions by clearly illustrating the pros and cons of each option, which is essential for effective governance in distributed systems."
        },
        {
          "id": "distributed-systems-301-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "This lesson will teach you how to transform failure signatures into valuable safeguards. You will learn to create response playbooks and develop monitoring updates that can help prevent future issues. By understanding these concepts, you will be better equipped to handle failures and improve the overall resilience of distributed systems.\nContext recap: This lesson will teach you how to transform failure signatures into valuable safeguards. You will learn to create response playbooks and develop monitoring updates that can help prevent future issues. By understanding these concepts, you will be better equipped to handle failures and improve the overall resilience of distributed systems."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-301-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured comparison of options under conflicting priorities."
        },
        {
          "id": "distributed-systems-301-l04-f2",
          "front": "Failure signature",
          "back": "A recurring observable pattern indicating a class of system risk."
        },
        {
          "id": "distributed-systems-301-l04-f3",
          "front": "Recovery playbook",
          "back": "A documented sequence for safe and timely response during adverse events."
        }
      ]
    },
    {
      "id": "distributed-systems-301-l05",
      "title": "Distributed Systems Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "distributed-systems-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive simulation studio, learners will configure various interventions, define parameters of uncertainty, and establish measurable success thresholds. This hands-on experience will allow you to experiment with different scenarios and understand how to set realistic goals for success in distributed systems.\nContext recap: In this interactive simulation studio, learners will configure various interventions, define parameters of uncertainty, and establish measurable success thresholds. This hands-on experience will allow you to experiment with different scenarios and understand how to set realistic goals for success in distributed systems."
        },
        {
          "id": "distributed-systems-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation run, we will conduct a debriefing session where we review the results. This will include analyzing expected gains, identifying any side effects, and ensuring compliance with governance standards. This reflective practice is crucial for learning from our experiences and improving future simulations.\nContext recap: After each simulation run, we will conduct a debriefing session where we review the results. This will include analyzing expected gains, identifying any side effects, and ensuring compliance with governance standards. This reflective practice is crucial for learning from our experiences and improving future simulations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances consistency and availability and observability and operations.",
          "instructions": [
            "Define objective and guardrails before selecting interventions.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that confirm or falsify your choice."
          ]
        },
        {
          "id": "distributed-systems-301-l05-act2",
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
      "id": "distributed-systems-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-301-l06-q1",
          "text": "Which action most improves consistency and availability quality in practice?",
          "skillId": "distributed-systems-301-skill-core",
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
          "id": "distributed-systems-301-l06-q2",
          "text": "At level 301, the strongest emphasis is:",
          "skillId": "distributed-systems-301-skill-level",
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
          "id": "distributed-systems-301-l06-q3",
          "text": "What best strengthens fault tolerance reliability?",
          "skillId": "distributed-systems-301-skill-reliability",
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
          "id": "distributed-systems-301-l06-q4",
          "text": "When evaluating distributed coordination, which approach is most defensible?",
          "skillId": "distributed-systems-301-skill-eval",
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
          "id": "distributed-systems-301-l06-q5",
          "text": "A mature observability and operations model should include:",
          "skillId": "distributed-systems-301-skill-governance",
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
      "id": "distributed-systems-301-l07",
      "title": "Distributed Systems Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "distributed-systems-301-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will identify how the impacts of decisions are distributed among different stakeholders. We will pay special attention to situations where the benefits and burdens of decisions do not align across various groups. Understanding these dynamics is essential for promoting fairness and equity in distributed systems.\nContext recap: In this lesson, we will identify how the impacts of decisions are distributed among different stakeholders. We will pay special attention to situations where the benefits and burdens of decisions do not align across various groups. Understanding these dynamics is essential for promoting fairness and equity in distributed systems."
        },
        {
          "id": "distributed-systems-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Accountability in decision-making requires a clear structure that allows for traceability of decisions. This means establishing rights for review and setting standards for remediation when necessary. In this lesson, you will learn how to create an accountability architecture that ensures responsible governance in distributed systems.\nContext recap: Accountability in decision-making requires a clear structure that allows for traceability of decisions. This means establishing rights for review and setting standards for remediation when necessary. In this lesson, you will learn how to create an accountability architecture that ensures responsible governance in distributed systems."
        },
        {
          "id": "distributed-systems-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "To ensure that we are acting responsibly in distributed systems, we can use a final checklist. This checklist includes important elements such as policies we need to follow, ethical considerations, the reliability of our technical systems, and the trust of all stakeholders involved. By combining these criteria, we can make better decisions that are fair and effective.\nContext recap: To ensure that we are acting responsibly in distributed systems, we can use a final checklist. This checklist includes important elements such as policies we need to follow, ethical considerations, the reliability of our technical systems, and the trust of all stakeholders involved. By combining these criteria, we can make better decisions that are fair and effective."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-301-l07-f1",
          "front": "Impact distribution",
          "back": "How benefits and harms are allocated across stakeholders."
        },
        {
          "id": "distributed-systems-301-l07-f2",
          "front": "Decision traceability",
          "back": "The ability to explain why a decision was made, by whom, and with what evidence."
        },
        {
          "id": "distributed-systems-301-l07-f3",
          "front": "Responsible execution",
          "back": "A delivery mode that combines effectiveness, fairness, and corrective capacity."
        }
      ]
    },
    {
      "id": "distributed-systems-301-l08",
      "title": "Distributed Systems Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-301-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this activity, learners will work on drafting a capstone project charter. This document will outline the scope of the project, identify any constraints we might face, establish metrics for measuring success, and set governance checkpoints to ensure everything stays on track. This process helps us think critically about our project and plan effectively for its execution.\nContext recap: In this activity, learners will work on drafting a capstone project charter. This document will outline the scope of the project, identify any constraints we might face, establish metrics for measuring success, and set governance checkpoints to ensure everything stays on track. This process helps us think critically about our project and plan effectively for its execution."
        },
        {
          "id": "distributed-systems-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As we prepare for our final project presentation, we will focus on gathering strong evidence to support our ideas. It's important to be ready to respond thoughtfully to any critical feedback we might receive. This preparation will help us defend our project effectively and demonstrate our understanding of the material.\nContext recap: As we prepare for our final project presentation, we will focus on gathering strong evidence to support our ideas. It's important to be ready to respond thoughtfully to any critical feedback we might receive. This preparation will help us defend our project effectively and demonstrate our understanding of the material."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-301-l08-act1",
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
          "id": "distributed-systems-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against technical, policy, and stakeholder critiques."
        }
      ]
    }
  ]
};
