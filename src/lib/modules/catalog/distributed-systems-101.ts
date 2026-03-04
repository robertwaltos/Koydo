import type { LearningModule } from "@/lib/modules/types";

export const DistributedSystems101Module: LearningModule = {
  "id": "distributed-systems-101",
  "title": "Distributed Systems Foundations",
  "description": "Level 101 curriculum in Distributed Systems, focused on consistency and availability, fault tolerance, distributed coordination, and observability and operations through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "systems",
    "engineering"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
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
      "id": "distributed-systems-101-l01",
      "title": "Distributed Systems Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "distributed-systems-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "In this lesson, we will dive into some key ideas that are essential for understanding distributed systems. First, we will define what we mean by operational language, which is the way we communicate and describe the functions of these systems. Next, we will discuss scope boundaries, which help us understand the limits and areas of influence within a system. Additionally, we will explore how the concepts of consistency, availability, and fault tolerance are all connected. These principles are crucial for ensuring that distributed systems work smoothly and can handle problems effectively. By grasping these concepts, you will gain a better understanding of how these systems operate and why they are designed the way they are, especially when they encounter challenges in real-world scenarios."
        },
        {
          "id": "distributed-systems-101-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "In this part of the lesson, learners will practice modeling cause-and-effect pathways. This means they will identify what leads to certain outcomes and recognize assumptions that might lead to failures. Before deciding on solutions or interventions, it is crucial to understand these pathways to make informed choices.\nContext recap: In this part of the lesson, learners will practice modeling cause-and-effect pathways. This means they will identify what leads to certain outcomes and recognize assumptions that might lead to failures. Before deciding on solutions or interventions, it is crucial to understand these pathways to make informed choices."
        },
        {
          "id": "distributed-systems-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, it is essential that all claims we make are supported by observable indicators. This means we need to have clear evidence that can be measured. Additionally, we will establish uncertainty bounds and create review checkpoints to ensure that our findings are reliable and valid.\nContext recap: Throughout this module, it is essential that all claims we make are supported by observable indicators. This means we need to have clear evidence that can be measured. Additionally, we will establish uncertainty bounds and create review checkpoints to ensure that our findings are reliable and valid."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-101-l01-f1",
          "front": "consistency and availability",
          "back": "A central decision axis in Distributed Systems requiring explicit tradeoff treatment."
        },
        {
          "id": "distributed-systems-101-l01-f2",
          "front": "fault tolerance",
          "back": "The reliability layer that determines whether plans survive real-world variability."
        },
        {
          "id": "distributed-systems-101-l01-f3",
          "front": "distributed coordination",
          "back": "The analytical process for assessing intervention quality and consequence spread."
        }
      ]
    },
    {
      "id": "distributed-systems-101-l02",
      "title": "Distributed Systems Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, learners will design a workflow that emphasizes the use of foundational vocabulary and the mapping of core mechanisms. They will also conduct a basic analysis of different scenarios. After creating their workflows, they will test how resilient their designs are when faced with uncertainty, helping them understand the importance of adaptability.\nContext recap: In this interactive lab, learners will design a workflow that emphasizes the use of foundational vocabulary and the mapping of core mechanisms. They will also conduct a basic analysis of different scenarios. After creating their workflows, they will test how resilient their designs are when faced with uncertainty, helping them understand the importance of adaptability."
        },
        {
          "id": "distributed-systems-101-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To ensure operational readiness, it is important to map out who is responsible for different tasks, establish control gates, and create verification hooks that check decisions after they are made. This process helps maintain oversight and ensures that everything runs smoothly.\nContext recap: To ensure operational readiness, it is important to map out who is responsible for different tasks, establish control gates, and create verification hooks that check decisions after they are made. This process helps maintain oversight and ensures that everything runs smoothly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-101-l02-act1",
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
          "id": "distributed-systems-101-l02-act2",
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
      "id": "distributed-systems-101-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-101-l03-q1",
          "text": "Which action most improves consistency and availability quality in practice?",
          "skillId": "distributed-systems-101-skill-core",
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
          "id": "distributed-systems-101-l03-q2",
          "text": "At level 101, the strongest emphasis is:",
          "skillId": "distributed-systems-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "foundational vocabulary, core mechanism mapping, and basic scenario analysis"
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
          "explanation": "The 101 layer is explicitly designed around foundational vocabulary, core mechanism mapping, and basic scenario analysis."
        },
        {
          "id": "distributed-systems-101-l03-q3",
          "text": "What best strengthens fault tolerance reliability?",
          "skillId": "distributed-systems-101-skill-reliability",
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
          "id": "distributed-systems-101-l03-q4",
          "text": "When evaluating distributed coordination, which approach is most defensible?",
          "skillId": "distributed-systems-101-skill-eval",
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
          "id": "distributed-systems-101-l03-q5",
          "text": "A mature observability and operations model should include:",
          "skillId": "distributed-systems-101-skill-governance",
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
      "id": "distributed-systems-101-l04",
      "title": "Distributed Systems Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "distributed-systems-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this engaging case study, we will explore a global service that is encountering several significant challenges. These include experiencing partial outages, which means that some parts of the service are not working properly, and dealing with stale reads, where users receive outdated information instead of the most current data. Additionally, the service faces intense pressure to recover quickly during peak traffic times when many users are trying to access it at once. Throughout this lesson, learners will dive deep into the decision-making process, mapping out the stakes involved in each choice. They will also work on identifying risks that may not be immediately obvious, which will help sharpen their critical thinking and problem-solving skills. By the end of this lesson, students will have a better understanding of how to navigate complex situations in distributed systems and the importance of making informed decisions under pressure."
        },
        {
          "id": "distributed-systems-101-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "In this section, we will create a tradeoff matrix to compare different interventions. We will look at factors such as effectiveness, reliability, fairness, and how easy they are to implement. This comparison will help learners understand the complexities involved in making decisions in distributed systems.\nContext recap: In this section, we will create a tradeoff matrix to compare different interventions. We will look at factors such as effectiveness, reliability, fairness, and how easy they are to implement. This comparison will help learners understand the complexities involved in making decisions in distributed systems."
        },
        {
          "id": "distributed-systems-101-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "This lesson will teach us how to turn the lessons learned from failures into proactive measures. We will develop safeguards, create response playbooks, and implement monitoring updates to ensure that we can respond effectively to future challenges.\nContext recap: This lesson will teach us how to turn the lessons learned from failures into proactive measures. We will develop safeguards, create response playbooks, and implement monitoring updates to ensure that we can respond effectively to future challenges.\nWhy this matters: Failure Lessons and Recovery helps learners in Computer Science connect ideas from Distributed Systems Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured comparison of options under conflicting priorities."
        },
        {
          "id": "distributed-systems-101-l04-f2",
          "front": "Failure signature",
          "back": "A recurring observable pattern indicating a class of system risk."
        },
        {
          "id": "distributed-systems-101-l04-f3",
          "front": "Recovery playbook",
          "back": "A documented sequence for safe and timely response during adverse events."
        }
      ]
    },
    {
      "id": "distributed-systems-101-l05",
      "title": "Distributed Systems Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "distributed-systems-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive simulation setup, learners will configure various interventions, define parameters of uncertainty, and establish measurable thresholds for success. This hands-on experience will help them understand how to set realistic goals and evaluate their effectiveness.\nContext recap: In this interactive simulation setup, learners will configure various interventions, define parameters of uncertainty, and establish measurable thresholds for success. This hands-on experience will help them understand how to set realistic goals and evaluate their effectiveness.\nWhy this matters: Scenario Simulation Setup helps learners in Computer Science connect ideas from Distributed Systems Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "distributed-systems-101-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation run, learners will review the results to assess whether they achieved the expected gains. They will also analyze any side effects that occurred and check for compliance with governance standards. This reflective process is crucial for continuous improvement.\nContext recap: After each simulation run, learners will review the results to assess whether they achieved the expected gains. They will also analyze any side effects that occurred and check for compliance with governance standards. This reflective process is crucial for continuous improvement."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-101-l05-act1",
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
          "id": "distributed-systems-101-l05-act2",
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
      "id": "distributed-systems-101-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-101-l06-q1",
          "text": "Which action most improves consistency and availability quality in practice?",
          "skillId": "distributed-systems-101-skill-core",
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
          "id": "distributed-systems-101-l06-q2",
          "text": "At level 101, the strongest emphasis is:",
          "skillId": "distributed-systems-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "foundational vocabulary, core mechanism mapping, and basic scenario analysis"
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
          "explanation": "The 101 layer is explicitly designed around foundational vocabulary, core mechanism mapping, and basic scenario analysis."
        },
        {
          "id": "distributed-systems-101-l06-q3",
          "text": "What best strengthens fault tolerance reliability?",
          "skillId": "distributed-systems-101-skill-reliability",
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
          "id": "distributed-systems-101-l06-q4",
          "text": "When evaluating distributed coordination, which approach is most defensible?",
          "skillId": "distributed-systems-101-skill-eval",
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
          "id": "distributed-systems-101-l06-q5",
          "text": "A mature observability and operations model should include:",
          "skillId": "distributed-systems-101-skill-governance",
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
      "id": "distributed-systems-101-l07",
      "title": "Distributed Systems Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "distributed-systems-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will identify how the impacts of decisions are distributed among different stakeholders. We will pay special attention to situations where the benefits and burdens are not shared equally across groups, fostering a deeper understanding of fairness and equity in distributed systems.\nContext recap: In this lesson, we will identify how the impacts of decisions are distributed among different stakeholders. We will pay special attention to situations where the benefits and burdens are not shared equally across groups, fostering a deeper understanding of fairness and equity in distributed systems."
        },
        {
          "id": "distributed-systems-101-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "To ensure accountability in decision-making, it is important to have a clear structure that allows us to trace decisions back to their origins. This includes establishing rights for review and setting standards for remediation when issues arise. This framework helps maintain trust and responsibility.\nContext recap: To ensure accountability in decision-making, it is important to have a clear structure that allows us to trace decisions back to their origins. This includes establishing rights for review and setting standards for remediation when issues arise. This framework helps maintain trust and responsibility."
        },
        {
          "id": "distributed-systems-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "At the end of our lesson, we will create a comprehensive checklist that includes important aspects such as policies, ethical considerations, technical reliability, and the trust of all stakeholders involved. This checklist will help ensure that we are making responsible decisions in our distributed systems projects.\nContext recap: At the end of our lesson, we will create a comprehensive checklist that includes important aspects such as policies, ethical considerations, technical reliability, and the trust of all stakeholders involved. This checklist will help ensure that we are making responsible decisions in our distributed systems projects."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-101-l07-f1",
          "front": "Impact distribution",
          "back": "How benefits and harms are allocated across stakeholders."
        },
        {
          "id": "distributed-systems-101-l07-f2",
          "front": "Decision traceability",
          "back": "The ability to explain why a decision was made, by whom, and with what evidence."
        },
        {
          "id": "distributed-systems-101-l07-f3",
          "front": "Responsible execution",
          "back": "A delivery mode that combines effectiveness, fairness, and corrective capacity."
        }
      ]
    },
    {
      "id": "distributed-systems-101-l08",
      "title": "Distributed Systems Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this activity, you will work on drafting a detailed capstone charter. This document will outline the scope of your project, identify any constraints you might face, establish metrics for success, and set governance checkpoints to guide your work. This is an important step in ensuring that your project is well-planned and organized.\nContext recap: In this activity, you will work on drafting a detailed capstone charter. This document will outline the scope of your project, identify any constraints you might face, establish metrics for success, and set governance checkpoints to guide your work. This is an important step in ensuring that your project is well-planned and organized."
        },
        {
          "id": "distributed-systems-101-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As we prepare for the final stages of our project, we will focus on gathering strong evidence to support our decisions. Additionally, we will develop a solid plan to respond to any critical reviews or feedback we receive. This preparation is crucial for demonstrating the validity of our work and ensuring we are ready for any challenges that may arise.\nContext recap: As we prepare for the final stages of our project, we will focus on gathering strong evidence to support our decisions. Additionally, we will develop a solid plan to respond to any critical reviews or feedback we receive. This preparation is crucial for demonstrating the validity of our work and ensuring we are ready for any challenges that may arise."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-101-l08-act1",
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
          "id": "distributed-systems-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against technical, policy, and stakeholder critiques."
        }
      ]
    }
  ]
};
