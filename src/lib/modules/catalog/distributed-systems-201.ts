import type { LearningModule } from "@/lib/modules/types";

export const DistributedSystems201Module: LearningModule = {
  "id": "distributed-systems-201",
  "title": "Distributed Systems Applied Practice",
  "description": "Level 201 curriculum in Distributed Systems, focused on consistency and availability, fault tolerance, distributed coordination, and observability and operations through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "systems",
    "engineering"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
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
      "id": "distributed-systems-201-l01",
      "title": "Distributed Systems Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "distributed-systems-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "In this lesson, we will explore the important concepts of operational language and scope boundaries. We will learn how these ideas relate to key principles such as consistency, availability, and fault tolerance in real-world systems. Understanding these connections will help us grasp how distributed systems function effectively and maintain their reliability.\nContext recap: In this lesson, we will explore the important concepts of operational language and scope boundaries. We will learn how these ideas relate to key principles such as consistency, availability, and fault tolerance in real-world systems. Understanding these connections will help us grasp how distributed systems function effectively and maintain their reliability."
        },
        {
          "id": "distributed-systems-201-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "In this section, learners will engage in modeling cause-and-effect pathways. This involves identifying assumptions that may lead to failures in a system. By recognizing these potential pitfalls, learners can make informed decisions about which interventions to implement, ensuring that their approaches are thoughtful and effective.\nContext recap: In this section, learners will engage in modeling cause-and-effect pathways. This involves identifying assumptions that may lead to failures in a system. By recognizing these potential pitfalls, learners can make informed decisions about which interventions to implement, ensuring that their approaches are thoughtful and effective."
        },
        {
          "id": "distributed-systems-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, it is essential that all claims we make are supported by observable indicators. This means we will establish clear boundaries of uncertainty and set up review checkpoints to ensure our findings are accurate and reliable. This approach helps us maintain a high standard of evidence in our work.\nContext recap: Throughout this module, it is essential that all claims we make are supported by observable indicators. This means we will establish clear boundaries of uncertainty and set up review checkpoints to ensure our findings are accurate and reliable. This approach helps us maintain a high standard of evidence in our work."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-201-l01-f1",
          "front": "consistency and availability",
          "back": "A central decision axis in Distributed Systems requiring explicit tradeoff treatment."
        },
        {
          "id": "distributed-systems-201-l01-f2",
          "front": "fault tolerance",
          "back": "The reliability layer that determines whether plans survive real-world variability."
        },
        {
          "id": "distributed-systems-201-l01-f3",
          "front": "distributed coordination",
          "back": "The analytical process for assessing intervention quality and consequence spread."
        }
      ]
    },
    {
      "id": "distributed-systems-201-l02",
      "title": "Distributed Systems Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, learners will have the opportunity to design a workflow that emphasizes the execution of methods. This involves structured practice and the interpretation of evidence based on their findings. After creating their workflows, learners will test their designs to see how resilient they are when faced with uncertainty, which is a crucial skill in distributed systems.\nContext recap: In this interactive lab, learners will have the opportunity to design a workflow that emphasizes the execution of methods. This involves structured practice and the interpretation of evidence based on their findings. After creating their workflows, learners will test their designs to see how resilient they are when faced with uncertainty, which is a crucial skill in distributed systems."
        },
        {
          "id": "distributed-systems-201-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To ensure operational readiness, it is important to map out the roles of different owners within the system. This includes establishing control gates and verification hooks that come into play after decisions are made. These elements help maintain oversight and ensure that the system operates smoothly and effectively.\nContext recap: To ensure operational readiness, it is important to map out the roles of different owners within the system. This includes establishing control gates and verification hooks that come into play after decisions are made. These elements help maintain oversight and ensure that the system operates smoothly and effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-201-l02-act1",
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
          "id": "distributed-systems-201-l02-act2",
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
      "id": "distributed-systems-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-201-l03-q1",
          "text": "Which action most improves consistency and availability quality in practice?",
          "skillId": "distributed-systems-201-skill-core",
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
          "id": "distributed-systems-201-l03-q2",
          "text": "At level 201, the strongest emphasis is:",
          "skillId": "distributed-systems-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "method execution, structured workflow practice, and evidence-based interpretation"
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
          "explanation": "The 201 layer is explicitly designed around method execution, structured workflow practice, and evidence-based interpretation."
        },
        {
          "id": "distributed-systems-201-l03-q3",
          "text": "What best strengthens fault tolerance reliability?",
          "skillId": "distributed-systems-201-skill-reliability",
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
          "id": "distributed-systems-201-l03-q4",
          "text": "When evaluating distributed coordination, which approach is most defensible?",
          "skillId": "distributed-systems-201-skill-eval",
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
          "id": "distributed-systems-201-l03-q5",
          "text": "A mature observability and operations model should include:",
          "skillId": "distributed-systems-201-skill-governance",
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
      "id": "distributed-systems-201-l04",
      "title": "Distributed Systems Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "distributed-systems-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this engaging case study, we will explore a global service that is facing several important challenges. These include experiencing partial outages, which means that some parts of the service are not working properly, and dealing with stale reads, where users receive outdated information. Additionally, the service is under pressure to recover quickly during busy times when there is a lot of traffic. As learners, you will have the opportunity to analyze the stakes involved in making decisions in such a complex environment. You will also work on identifying risks that might not be immediately obvious, which will help you develop your critical thinking and problem-solving skills. This exercise is designed to encourage you to think deeply about the implications of technology in real-world scenarios and prepare you for future challenges in the field of computer science."
        },
        {
          "id": "distributed-systems-201-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "In this section, we will construct a tradeoff matrix to compare different interventions. This matrix will evaluate each option based on its effectiveness, reliability, fairness, and how feasible it is to implement. This systematic approach helps learners make informed choices when addressing challenges in distributed systems.\nContext recap: In this section, we will construct a tradeoff matrix to compare different interventions. This matrix will evaluate each option based on its effectiveness, reliability, fairness, and how feasible it is to implement. This systematic approach helps learners make informed choices when addressing challenges in distributed systems."
        },
        {
          "id": "distributed-systems-201-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "In this recap, we will discuss how to transform the signs of failure into proactive safeguards. This includes creating response playbooks that outline steps to take in case of issues and updating monitoring systems to keep track of performance. These strategies are essential for improving resilience in distributed systems.\nContext recap: In this recap, we will discuss how to transform the signs of failure into proactive safeguards. This includes creating response playbooks that outline steps to take in case of issues and updating monitoring systems to keep track of performance. These strategies are essential for improving resilience in distributed systems."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-201-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured comparison of options under conflicting priorities."
        },
        {
          "id": "distributed-systems-201-l04-f2",
          "front": "Failure signature",
          "back": "A recurring observable pattern indicating a class of system risk."
        },
        {
          "id": "distributed-systems-201-l04-f3",
          "front": "Recovery playbook",
          "back": "A documented sequence for safe and timely response during adverse events."
        }
      ]
    },
    {
      "id": "distributed-systems-201-l05",
      "title": "Distributed Systems Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "distributed-systems-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this practice session, learners will set up scenarios for simulation by configuring various interventions. They will define parameters of uncertainty and establish measurable success thresholds. This hands-on experience will help them understand how to prepare for different outcomes in distributed systems.\nContext recap: In this practice session, learners will set up scenarios for simulation by configuring various interventions. They will define parameters of uncertainty and establish measurable success thresholds. This hands-on experience will help them understand how to prepare for different outcomes in distributed systems."
        },
        {
          "id": "distributed-systems-201-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation run, learners will review the results to assess expected improvements, any side effects that may have occurred, and ensure compliance with governance standards. This reflective process is crucial for understanding the impact of their decisions and refining their approaches.\nContext recap: After each simulation run, learners will review the results to assess expected improvements, any side effects that may have occurred, and ensure compliance with governance standards. This reflective process is crucial for understanding the impact of their decisions and refining their approaches."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-201-l05-act1",
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
          "id": "distributed-systems-201-l05-act2",
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
      "id": "distributed-systems-201-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-201-l06-q1",
          "text": "Which action most improves consistency and availability quality in practice?",
          "skillId": "distributed-systems-201-skill-core",
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
          "id": "distributed-systems-201-l06-q2",
          "text": "At level 201, the strongest emphasis is:",
          "skillId": "distributed-systems-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "method execution, structured workflow practice, and evidence-based interpretation"
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
          "explanation": "The 201 layer is explicitly designed around method execution, structured workflow practice, and evidence-based interpretation."
        },
        {
          "id": "distributed-systems-201-l06-q3",
          "text": "What best strengthens fault tolerance reliability?",
          "skillId": "distributed-systems-201-skill-reliability",
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
          "id": "distributed-systems-201-l06-q4",
          "text": "When evaluating distributed coordination, which approach is most defensible?",
          "skillId": "distributed-systems-201-skill-eval",
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
          "id": "distributed-systems-201-l06-q5",
          "text": "A mature observability and operations model should include:",
          "skillId": "distributed-systems-201-skill-governance",
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
      "id": "distributed-systems-201-l07",
      "title": "Distributed Systems Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "distributed-systems-201-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will identify how the impacts of decisions are distributed among different stakeholders. It is important to understand where benefits and burdens may diverge across various groups, as this knowledge can guide us in making fair and equitable choices in distributed systems.\nContext recap: In this lesson, we will identify how the impacts of decisions are distributed among different stakeholders. It is important to understand where benefits and burdens may diverge across various groups, as this knowledge can guide us in making fair and equitable choices in distributed systems."
        },
        {
          "id": "distributed-systems-201-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "To ensure accountability in our systems, it is essential to have clear pathways for tracing decisions. This includes establishing rights for review and setting standards for remediation. By doing so, we can create a more transparent and responsible environment in distributed systems.\nContext recap: To ensure accountability in our systems, it is essential to have clear pathways for tracing decisions. This includes establishing rights for review and setting standards for remediation. By doing so, we can create a more transparent and responsible environment in distributed systems."
        },
        {
          "id": "distributed-systems-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "To ensure we are acting responsibly in our distributed systems projects, we can use a final checklist. This checklist will help us combine important elements such as policies we need to follow, ethical considerations, the reliability of our technical solutions, and the trust of all stakeholders involved. By checking off each item, we can be more confident that we are making decisions that are fair and effective.\nContext recap: To ensure we are acting responsibly in our distributed systems projects, we can use a final checklist. This checklist will help us combine important elements such as policies we need to follow, ethical considerations, the reliability of our technical solutions, and the trust of all stakeholders involved. By checking off each item, we can be more confident that we are making decisions that are fair and effective."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-201-l07-f1",
          "front": "Impact distribution",
          "back": "How benefits and harms are allocated across stakeholders."
        },
        {
          "id": "distributed-systems-201-l07-f2",
          "front": "Decision traceability",
          "back": "The ability to explain why a decision was made, by whom, and with what evidence."
        },
        {
          "id": "distributed-systems-201-l07-f3",
          "front": "Responsible execution",
          "back": "A delivery mode that combines effectiveness, fairness, and corrective capacity."
        }
      ]
    },
    {
      "id": "distributed-systems-201-l08",
      "title": "Distributed Systems Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this activity, learners will work together to create a detailed draft for their capstone project. This draft will include important aspects such as the scope of the project, any constraints we need to consider, the metrics we will use to measure success, and the governance checkpoints that will guide our decisions. By putting all of this information into one decision charter, we can ensure that everyone is on the same page and understands the goals of our project.\nContext recap: In this activity, learners will work together to create a detailed draft for their capstone project. This draft will include important aspects such as the scope of the project, any constraints we need to consider, the metrics we will use to measure success, and the governance checkpoints that will guide our decisions. By putting all of this information into one decision charter, we can ensure that everyone is on the same page and understands the goals of our project."
        },
        {
          "id": "distributed-systems-201-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As we prepare for the final stages of our project, it is crucial to focus on being ready to defend our work. This means we need to gather strong evidence to support our decisions and be prepared to respond thoughtfully to any critical feedback we might receive. By practicing our responses and ensuring we have solid justifications for our choices, we can build confidence in our project and its outcomes.\nContext recap: As we prepare for the final stages of our project, it is crucial to focus on being ready to defend our work. This means we need to gather strong evidence to support our decisions and be prepared to respond thoughtfully to any critical feedback we might receive. By practicing our responses and ensuring we have solid justifications for our choices, we can build confidence in our project and its outcomes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-201-l08-act1",
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
          "id": "distributed-systems-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against technical, policy, and stakeholder critiques."
        }
      ]
    }
  ]
};
