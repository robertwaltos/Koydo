import type { LearningModule } from "@/lib/modules/types";

export const EthicsOfTechnology101Module: LearningModule = {
  "id": "ethics-of-technology-101",
  "title": "Ethics of Technology Foundations",
  "description": "Level 101 curriculum in Ethics of Technology, focused on normative frameworks, sociotechnical harms, responsible design practice, and governance and accountability through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ethics",
    "technology"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
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
      "id": "ethics-of-technology-101-l01",
      "title": "Ethics of Technology Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "In this lesson, we will explore important concepts related to technology ethics. We will define what we mean by operational language, which helps us communicate clearly about technology. We will also discuss the boundaries of our discussions, known as scope boundaries, and how these relate to normative frameworks. Additionally, we will examine how sociotechnical harms can arise in real-world systems, helping us understand the ethical implications of technology use.\nContext recap: In this lesson, we will explore important concepts related to technology ethics. We will define what we mean by operational language, which helps us communicate clearly about technology. We will also discuss the boundaries of our discussions, known as scope boundaries, and how these relate to normative frameworks. Additionally, we will examine how sociotechnical harms can arise in real-world systems, helping us understand the ethical implications of technology use."
        },
        {
          "id": "ethics-of-technology-101-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "In this part of the lesson, learners will engage in modeling cause-and-effect pathways. This means we will look at how different actions can lead to specific outcomes. We will also identify assumptions that might lead to failures in our reasoning. By doing this, learners will be better prepared to select effective interventions that can help address the issues we identify.\nContext recap: In this part of the lesson, learners will engage in modeling cause-and-effect pathways. This means we will look at how different actions can lead to specific outcomes. We will also identify assumptions that might lead to failures in our reasoning. By doing this, learners will be better prepared to select effective interventions that can help address the issues we identify."
        },
        {
          "id": "ethics-of-technology-101-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, it is essential that all claims we make are supported by observable indicators. This means we need to have evidence that we can see or measure. We will also discuss the importance of understanding uncertainty bounds, which help us know the limits of our knowledge. Finally, we will establish review checkpoints to ensure that our findings are accurate and reliable.\nContext recap: Throughout this module, it is essential that all claims we make are supported by observable indicators. This means we need to have evidence that we can see or measure. We will also discuss the importance of understanding uncertainty bounds, which help us know the limits of our knowledge. Finally, we will establish review checkpoints to ensure that our findings are accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-101-l01-f1",
          "front": "normative frameworks",
          "back": "A central decision axis in Ethics of Technology requiring explicit tradeoff treatment."
        },
        {
          "id": "ethics-of-technology-101-l01-f2",
          "front": "sociotechnical harms",
          "back": "The reliability layer that determines whether plans survive real-world variability."
        },
        {
          "id": "ethics-of-technology-101-l01-f3",
          "front": "responsible design practice",
          "back": "The analytical process for assessing intervention quality and consequence spread."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l02",
      "title": "Ethics of Technology Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, learners will have the opportunity to design a workflow. This will involve using foundational vocabulary to communicate effectively, mapping out core mechanisms to understand how things work, and conducting basic scenario analyses to predict outcomes. After creating their workflows, learners will test their designs to see how resilient they are when faced with uncertainty.\nContext recap: In this interactive lab, learners will have the opportunity to design a workflow. This will involve using foundational vocabulary to communicate effectively, mapping out core mechanisms to understand how things work, and conducting basic scenario analyses to predict outcomes. After creating their workflows, learners will test their designs to see how resilient they are when faced with uncertainty."
        },
        {
          "id": "ethics-of-technology-101-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To ensure that our operations are ready to go, we need to focus on several key elements. This includes mapping out who is responsible for what, which we call owner mapping. We will also establish control gates, which are checkpoints that help us monitor progress. Finally, we will create post-decision verification hooks to confirm that our decisions are effective and appropriate.\nContext recap: To ensure that our operations are ready to go, we need to focus on several key elements. This includes mapping out who is responsible for what, which we call owner mapping. We will also establish control gates, which are checkpoints that help us monitor progress. Finally, we will create post-decision verification hooks to confirm that our decisions are effective and appropriate."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-101-l02-act1",
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
          "id": "ethics-of-technology-101-l02-act2",
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
      "id": "ethics-of-technology-101-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-101-l03-q1",
          "text": "Which action most improves normative frameworks quality in practice?",
          "skillId": "ethics-of-technology-101-skill-core",
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
          "id": "ethics-of-technology-101-l03-q2",
          "text": "At level 101, the strongest emphasis is:",
          "skillId": "ethics-of-technology-101-skill-level",
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
          "id": "ethics-of-technology-101-l03-q3",
          "text": "What best strengthens sociotechnical harms reliability?",
          "skillId": "ethics-of-technology-101-skill-reliability",
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
          "id": "ethics-of-technology-101-l03-q4",
          "text": "When evaluating responsible design practice, which approach is most defensible?",
          "skillId": "ethics-of-technology-101-skill-eval",
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
          "id": "ethics-of-technology-101-l03-q5",
          "text": "A mature governance and accountability model should include:",
          "skillId": "ethics-of-technology-101-skill-governance",
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
      "id": "ethics-of-technology-101-l04",
      "title": "Ethics of Technology Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this case analysis, we will explore a new technology that is being introduced, which offers users a lot of convenience and makes tasks easier. However, it is important to think about the potential problems that could arise, especially concerning fairness, privacy, and the freedom of individuals to make their own choices. As part of this lesson, learners will create a map that outlines the important factors involved in making decisions about this technology. They will also identify risks that might not be obvious at first glance. This exercise will encourage critical thinking about how technology affects our lives and the responsibilities that come with it."
        },
        {
          "id": "ethics-of-technology-101-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "In this section, we will construct a tradeoff matrix to compare different interventions. This matrix will help us evaluate each option based on several important criteria, including effectiveness, reliability, equity, and how feasible it is to implement. By analyzing these factors, learners will gain a clearer understanding of the trade-offs involved in making ethical decisions about technology.\nContext recap: In this section, we will construct a tradeoff matrix to compare different interventions. This matrix will help us evaluate each option based on several important criteria, including effectiveness, reliability, equity, and how feasible it is to implement. By analyzing these factors, learners will gain a clearer understanding of the trade-offs involved in making ethical decisions about technology."
        },
        {
          "id": "ethics-of-technology-101-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "In this recap, we will focus on how to learn from failures. We will convert what we call failure signatures—patterns that indicate where things went wrong—into actionable safeguards. Additionally, we will create response playbooks that outline steps to take in case of failure and establish monitoring updates to keep track of our progress and ensure we are learning from our experiences.\nContext recap: In this recap, we will focus on how to learn from failures. We will convert what we call failure signatures—patterns that indicate where things went wrong—into actionable safeguards. Additionally, we will create response playbooks that outline steps to take in case of failure and establish monitoring updates to keep track of our progress and ensure we are learning from our experiences."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-101-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured comparison of options under conflicting priorities."
        },
        {
          "id": "ethics-of-technology-101-l04-f2",
          "front": "Failure signature",
          "back": "A recurring observable pattern indicating a class of system risk."
        },
        {
          "id": "ethics-of-technology-101-l04-f3",
          "front": "Recovery playbook",
          "back": "A documented sequence for safe and timely response during adverse events."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l05",
      "title": "Ethics of Technology Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive practice session, learners will configure various interventions. This means they will set up different strategies to address the issues we have discussed. They will also define uncertainty parameters, which help us understand the limits of our predictions, and establish measurable success thresholds to determine whether our interventions are effective.\nContext recap: In this interactive practice session, learners will configure various interventions. This means they will set up different strategies to address the issues we have discussed. They will also define uncertainty parameters, which help us understand the limits of our predictions, and establish measurable success thresholds to determine whether our interventions are effective."
        },
        {
          "id": "ethics-of-technology-101-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation run, we will conduct a debriefing session. During this time, we will review the results to see if we achieved the expected gains. We will also look for any side effects that may have occurred and check for compliance with governance standards. This process will help us learn from our experiences and improve future interventions.\nContext recap: After each simulation run, we will conduct a debriefing session. During this time, we will review the results to see if we achieved the expected gains. We will also look for any side effects that may have occurred and check for compliance with governance standards. This process will help us learn from our experiences and improve future interventions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-101-l05-act1",
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
          "id": "ethics-of-technology-101-l05-act2",
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
      "id": "ethics-of-technology-101-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-101-l06-q1",
          "text": "Which action most improves normative frameworks quality in practice?",
          "skillId": "ethics-of-technology-101-skill-core",
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
          "id": "ethics-of-technology-101-l06-q2",
          "text": "At level 101, the strongest emphasis is:",
          "skillId": "ethics-of-technology-101-skill-level",
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
          "id": "ethics-of-technology-101-l06-q3",
          "text": "What best strengthens sociotechnical harms reliability?",
          "skillId": "ethics-of-technology-101-skill-reliability",
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
          "id": "ethics-of-technology-101-l06-q4",
          "text": "When evaluating responsible design practice, which approach is most defensible?",
          "skillId": "ethics-of-technology-101-skill-eval",
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
          "id": "ethics-of-technology-101-l06-q5",
          "text": "A mature governance and accountability model should include:",
          "skillId": "ethics-of-technology-101-skill-governance",
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
      "id": "ethics-of-technology-101-l07",
      "title": "Ethics of Technology Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will focus on mapping the impacts of technology on different stakeholders. This means we will identify how benefits and burdens are distributed among various groups. Understanding where these impacts diverge is crucial for ensuring that technology is used ethically and fairly, as it helps us recognize who may be disadvantaged or advantaged by certain technological decisions.\nContext recap: In this lesson, we will focus on mapping the impacts of technology on different stakeholders. This means we will identify how benefits and burdens are distributed among various groups. Understanding where these impacts diverge is crucial for ensuring that technology is used ethically and fairly, as it helps us recognize who may be disadvantaged or advantaged by certain technological decisions."
        },
        {
          "id": "ethics-of-technology-101-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "In this section, we will discuss the importance of accountability in technology use. This requires us to have clear decision traceability, which means we can track how decisions were made. We will also explore the rights of individuals to review decisions that affect them and establish standards for remediation, ensuring that there are processes in place to address any issues that arise.\nContext recap: In this section, we will discuss the importance of accountability in technology use. This requires us to have clear decision traceability, which means we can track how decisions were made. We will also explore the rights of individuals to review decisions that affect them and establish standards for remediation, ensuring that there are processes in place to address any issues that arise."
        },
        {
          "id": "ethics-of-technology-101-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "To ensure responsible use of technology, we can create a final checklist. This checklist will include important elements such as policies that guide our actions, ethical considerations that reflect our values, the reliability of the technology we use, and the trust we build with everyone involved. By combining these criteria, we can make better decisions that benefit all stakeholders.\nContext recap: To ensure responsible use of technology, we can create a final checklist. This checklist will include important elements such as policies that guide our actions, ethical considerations that reflect our values, the reliability of the technology we use, and the trust we build with everyone involved. By combining these criteria, we can make better decisions that benefit all stakeholders."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-101-l07-f1",
          "front": "Impact distribution",
          "back": "How benefits and harms are allocated across stakeholders."
        },
        {
          "id": "ethics-of-technology-101-l07-f2",
          "front": "Decision traceability",
          "back": "The ability to explain why a decision was made, by whom, and with what evidence."
        },
        {
          "id": "ethics-of-technology-101-l07-f3",
          "front": "Responsible execution",
          "back": "A delivery mode that combines effectiveness, fairness, and corrective capacity."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l08",
      "title": "Ethics of Technology Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the lesson structure, document assumptions, and validate your conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this activity, you will have the opportunity to draft a charter for your capstone project. This charter will outline the scope of your project, the constraints you might face, the metrics you will use to measure success, and the governance checkpoints that will help keep your project on track. This is an important step in planning your project effectively.\nContext recap: In this activity, you will have the opportunity to draft a charter for your capstone project. This charter will outline the scope of your project, the constraints you might face, the metrics you will use to measure success, and the governance checkpoints that will help keep your project on track. This is an important step in planning your project effectively."
        },
        {
          "id": "ethics-of-technology-101-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As we prepare for the final presentation of our projects, it is crucial to focus on gathering strong evidence to support our ideas. This preparation will help us respond effectively to any critical feedback we might receive. By being ready to justify our decisions and defend our work, we can demonstrate the thoughtfulness and rigor behind our projects.\nContext recap: As we prepare for the final presentation of our projects, it is crucial to focus on gathering strong evidence to support our ideas. This preparation will help us respond effectively to any critical feedback we might receive. By being ready to justify our decisions and defend our work, we can demonstrate the thoughtfulness and rigor behind our projects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-101-l08-act1",
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
          "id": "ethics-of-technology-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against technical, policy, and stakeholder critiques."
        }
      ]
    }
  ]
};
