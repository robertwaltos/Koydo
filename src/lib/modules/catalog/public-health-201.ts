import type { LearningModule } from "@/lib/modules/types";

export const public_health_201_Module: LearningModule = {
  "id": "public-health-201",
  "title": "Public Health Applied Practice",
  "description": "Level 201 curriculum in Public Health, focused on population health metrics, epidemiologic reasoning, prevention strategy, and health equity governance through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "health",
    "policy"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply population health metrics with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for epidemiologic reasoning under realistic constraints",
    "Evaluate prevention strategy decisions with baseline and side-effect analysis",
    "Strengthen health equity governance with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "public-health-201-l01",
      "title": "Public Health Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "public-health-201-l01-a1",
          "type": "image",
          "title": "Conceptual Map",
          "content": "A diagram showing how population health metrics, epidemiologic reasoning, and prevention strategy interrelate to form the basis of public health decisions."
        }
      ],
      "chunks": [
        {
          "id": "public-health-201-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "This lesson introduces the essential terms and concepts for understanding public health. We will define key operational language, establish the scope of our study, and see how population health metrics and epidemiologic reasoning work together in real-world situations. This foundation is key to understanding the professional practice of public health."
        },
        {
          "id": "public-health-201-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Here, we will practice modeling cause-and-effect pathways to understand how different factors lead to specific health outcomes. A critical part of this is identifying our own assumptions, which can be weak points in our reasoning. By carefully analyzing these pathways before choosing an intervention, we ensure our decisions are based on solid evidence and logic, even when facing real-world constraints."
        },
        {
          "id": "public-health-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, all claims must be supported by observable, measurable evidence. We will also define uncertainty bounds to understand the limits of our knowledge and establish review checkpoints to ensure our findings are reliable. This rigorous approach strengthens every public health recommendation we make."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-201-l01-f1",
          "front": "Population Health Metrics",
          "back": "Measurements used to assess the health of a population, which require clear analysis of tradeoffs between different goals (e.g., effectiveness vs. cost)."
        },
        {
          "id": "public-health-201-l01-f2",
          "front": "Epidemiologic Reasoning",
          "back": "The systematic process of analyzing health data to understand the patterns, causes, and effects of health conditions, ensuring plans are robust against real-world challenges."
        },
        {
          "id": "public-health-201-l01-f3",
          "front": "Prevention Strategy",
          "back": "The method of evaluating the quality of a public health intervention and analyzing its potential positive and negative consequences."
        }
      ]
    },
    {
      "id": "public-health-201-l02",
      "title": "Public Health Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "public-health-201-l02-a1",
          "type": "practice",
          "title": "Workflow Template",
          "content": "A downloadable template to structure your workflow, including sections for goals, evidence, interpretation, and resilience testing."
        }
      ],
      "chunks": [
        {
          "id": "public-health-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a structured workflow for executing public health methods. We will practice creating evidence-based processes, interpreting results, and testing the workflow's resilience against uncertainty to ensure our approach is both robust and adaptable."
        },
        {
          "id": "public-health-201-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To ensure our work is effective, we must focus on operational readiness. This involves mapping responsibilities, establishing 'control gates' to monitor progress, and creating verification steps for key decisions. These strategies help keep our workflows organized and prepared for any challenge."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-201-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each control mechanism to its strongest expected system benefit.",
          "pairs": [
            {
              "left": "Pre-approval review",
              "right": "Reduces preventable errors"
            },
            {
              "left": "Trigger to reverse a change",
              "right": "Limits the scope of impact during failures"
            },
            {
              "left": "Baseline performance dashboard",
              "right": "Supports well-supported claims about impact"
            },
            {
              "left": "Post-project review cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "public-health-201-l02-act2",
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
              "text": "Data processing speed target",
              "bucket": "Technical"
            },
            {
              "text": "Data privacy regulation",
              "bucket": "Policy"
            },
            {
              "text": "Risk to community trust",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Public incident disclosure protocol",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "public-health-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-201-l03-a1",
          "type": "practice",
          "title": "Knowledge Check Prep",
          "content": "Review the flashcards and key concepts from the first two lessons. Focus on how the core ideas connect to form a repeatable workflow."
        }
      ],
      "questions": [
        {
          "id": "public-health-201-l03-q1",
          "text": "Which action most improves the quality of population health metrics in practice?",
          "skillId": "public-health-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on intuition instead of defining constraints"
            },
            {
              "id": "b",
              "text": "Define assumptions, monitor key indicators, and test for potential failures"
            },
            {
              "id": "c",
              "text": "Treat all health outcomes as equally important"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and statistical variance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions require explicit assumptions, measurable indicators, and stress tests to be reliable."
        },
        {
          "id": "public-health-201-l03-q2",
          "text": "At the 201 level, the strongest emphasis is on:",
          "skillId": "public-health-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Executing methods within a structured workflow and interpreting results with evidence"
            },
            {
              "id": "b",
              "text": "Making decisions quickly without review"
            },
            {
              "id": "c",
              "text": "Considering only a single stakeholder's perspective"
            },
            {
              "id": "d",
              "text": "Claiming positive outcomes without baseline data"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 201 level focuses on the practical application of methods through structured, evidence-based workflows."
        },
        {
          "id": "public-health-201-l03-q3",
          "text": "What best strengthens the reliability of epidemiologic reasoning?",
          "skillId": "public-health-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Having no clear ownership for incident response"
            },
            {
              "id": "b",
              "text": "Establishing clear control points, owner mapping, and escalation paths"
            },
            {
              "id": "c",
              "text": "Making undocumented, ad-hoc changes to a plan"
            },
            {
              "id": "d",
              "text": "Skipping post-project reviews"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation procedures are explicit and repeatable."
        },
        {
          "id": "public-health-201-l03-q4",
          "text": "When evaluating a prevention strategy, which approach is most defensible?",
          "skillId": "public-health-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using only anecdotal stories as evidence"
            },
            {
              "id": "b",
              "text": "Comparing the intervention against a baseline and monitoring for side effects"
            },
            {
              "id": "c",
              "text": "Removing difficult scenarios from the evaluation"
            },
            {
              "id": "d",
              "text": "Changing the definition of success after seeing the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing against a baseline and monitoring side effects prevents exaggerated claims and reveals hidden risks."
        },
        {
          "id": "public-health-201-l03-q5",
          "text": "A mature health equity governance model should include:",
          "skillId": "public-health-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A one-time review with no path for corrective action"
            },
            {
              "id": "b",
              "text": "Links to policy, measurable thresholds, and triggers for corrective action"
            },
            {
              "id": "c",
              "text": "A lack of transparency to the public and stakeholders"
            },
            {
              "id": "d",
              "text": "Unbounded discretion for decision-makers without any guardrails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects policy goals to measurable thresholds and clear pathways for corrective action."
        }
      ]
    },
    {
      "id": "public-health-201-l04",
      "title": "Public Health Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-201-l04-a1",
          "type": "mnemonic",
          "title": "The TRACE Framework",
          "content": "Use TRACE to guide your case analysis: Tradeoffs, Risks, Assumptions, Consequences, Evidence."
        }
      ],
      "chunks": [
        {
          "id": "public-health-201-l04-c1",
          "kind": "example",
          "title": "Case Context: Regional Outbreak Response",
          "content": "In this case analysis, we examine a regional outbreak response, balancing surveillance, communication, and intervention resources. You will map the stakes involved in each decision and identify hidden risks. This exercise highlights the complexity of managing public health crises and the need for thorough planning."
        },
        {
          "id": "public-health-201-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "We will construct a tradeoff matrix to compare different interventions. Each option will be evaluated on its effectiveness, reliability, fairness, and feasibility. This structured comparison helps us make informed decisions by weighing all critical factors in our public health strategies."
        },
        {
          "id": "public-health-201-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "This recap focuses on learning from failures. We will practice turning lessons learned into safeguards that prevent future issues. We will also outline response playbooks for adverse events and establish monitoring routines to ensure accountability and continuous improvement."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool for systematically comparing different options across multiple, often conflicting, criteria like cost, effectiveness, and equity."
        },
        {
          "id": "public-health-201-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring, observable pattern of events or data that indicates a specific type of systemic risk or weakness."
        },
        {
          "id": "public-health-201-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented, step-by-step plan for responding safely and efficiently to a crisis or adverse event."
        }
      ]
    },
    {
      "id": "public-health-201-l05",
      "title": "Public Health Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "public-health-201-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "An interactive dashboard to configure intervention variables, adjust uncertainty levels, and track success metrics in real-time."
        }
      ],
      "chunks": [
        {
          "id": "public-health-201-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive practice, you will set up simulation scenarios by configuring interventions, defining uncertainty parameters, and establishing measurable success thresholds. This preparation allows us to analyze potential outcomes and understand an intervention's full range of impacts."
        },
        {
          "id": "public-health-201-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation, we will conduct a debrief to review the results. We will assess the expected gains, analyze any unintended side effects, and verify compliance with governance standards. This reflective process is essential for refining our strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances population health metrics and health equity governance.",
          "instructions": [
            "Define your primary objective and ethical guardrails before starting.",
            "For each option, record one near-term and one long-term tradeoff.",
            "Select metrics that would either confirm or disprove your final choice."
          ]
        },
        {
          "id": "public-health-201-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership of tasks",
              "right": "Create an explicit map of roles and escalation paths"
            },
            {
              "left": "Poor quality of incoming data",
              "right": "Strengthen data intake validation and quality checks"
            },
            {
              "left": "Deviation from policy over time",
              "right": "Re-anchor controls to documented standards with regular audits"
            },
            {
              "left": "Negative stakeholder reaction",
              "right": "Increase transparency and establish two-way communication channels"
            }
          ]
        }
      ]
    },
    {
      "id": "public-health-201-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 12,
      "learningAids": [
        {
          "id": "public-health-201-l06-a1",
          "type": "practice",
          "title": "Scenario Review",
          "content": "Revisit the case study and simulation scenarios. Consider how the core principles apply under pressure and when facing complex tradeoffs."
        }
      ],
      "questions": [
        {
          "id": "public-health-201-l06-q1",
          "text": "In the regional outbreak case, what is the most critical first step for establishing reliable population health metrics?",
          "skillId": "public-health-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately deploy the most expensive intervention available."
            },
            {
              "id": "b",
              "text": "Agree on a consistent case definition and data collection standard across all jurisdictions."
            },
            {
              "id": "c",
              "text": "Focus only on data that is easy to collect."
            },
            {
              "id": "d",
              "text": "Wait for the outbreak to end before collecting any data."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable metrics depend on a consistent, shared standard for what is being measured and how it is collected."
        },
        {
          "id": "public-health-201-l06-q2",
          "text": "When running the intervention simulation, what is the primary purpose of defining 'uncertainty parameters'?",
          "skillId": "public-health-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "To stress-test a strategy and see how it performs under various potential conditions."
            },
            {
              "id": "b",
              "text": "To guarantee a positive outcome for the simulation."
            },
            {
              "id": "c",
              "text": "To make the simulation more complicated and difficult to interpret."
            },
            {
              "id": "d",
              "text": "To prove that the chosen intervention is perfect."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Uncertainty parameters allow us to test the robustness of a strategy against real-world variability, a key skill at the 201 level."
        },
        {
          "id": "public-health-201-l06-q3",
          "text": "A simulation shows your intervention fails when community transmission is high. What is the most reliable next step based on epidemiologic reasoning?",
          "skillId": "public-health-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Ignore the simulation result because it is not real."
            },
            {
              "id": "b",
              "text": "Analyze the failure to understand the causal mechanism and adjust the intervention or add a new one."
            },
            {
              "id": "c",
              "text": "Delete the simulation data and do not report the failure."
            },
            {
              "id": "d",
              "text": "Recommend the intervention anyway but hope for low transmission."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable reasoning involves using failure analysis to understand root causes and improve the strategy, not ignoring inconvenient data."
        },
        {
          "id": "public-health-201-l06-q4",
          "text": "Your case analysis shows a strategy is effective but disproportionately burdens a vulnerable community. What is the most defensible evaluation approach?",
          "skillId": "public-health-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Focus only on the overall effectiveness and ignore the unequal burden."
            },
            {
              "id": "b",
              "text": "Explicitly document the inequitable side effect in a tradeoff matrix and seek alternative or mitigating strategies."
            },
            {
              "id": "c",
              "text": "Define the vulnerable community as 'out of scope' for the evaluation."
            },
            {
              "id": "d",
              "text": "Proceed with the strategy, assuming the benefits outweigh the harms without analysis."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible evaluation must transparently account for all significant outcomes, including side effects and equity impacts."
        },
        {
          "id": "public-health-201-l06-q5",
          "text": "After a policy leads to an unexpected negative outcome for one group, what feature of a mature health equity governance model is most essential?",
          "skillId": "public-health-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A policy that prevents anyone from ever making a mistake."
            },
            {
              "id": "b",
              "text": "A pre-defined pathway for review, accountability, and corrective action."
            },
            {
              "id": "c",
              "text": "A communication strategy that denies the negative outcome occurred."
            },
            {
              "id": "d",
              "text": "The ability to assign blame to a single individual without a system review."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance isn't about preventing all errors, but about having a robust, transparent process to correct them and restore equity."
        }
      ]
    },
    {
      "id": "public-health-201-l07",
      "title": "Public Health Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "public-health-201-l07-a1",
          "type": "image",
          "title": "Accountability Framework",
          "content": "A diagram illustrating a framework for accountability, showing links between policy, decision-makers, review boards, and community stakeholders."
        }
      ],
      "chunks": [
        {
          "id": "public-health-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will map how the benefits and burdens of public health decisions are distributed across different groups. It is critical to identify where these impacts may be unequal. This mapping helps us design policies that are fair and equitable for all communities."
        },
        {
          "id": "public-health-201-l07-c2",
          "kind": "concept",
          "title": "Framework for Accountability",
          "content": "To ensure accountability, we must establish a clear structure for decision-making. This includes the ability to trace decisions to their origins, provide rights for appeal or review, and set standards for corrective action when needed. This framework builds trust and transparency in public health systems."
        },
        {
          "id": "public-health-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "A successful public health initiative requires a comprehensive checklist. This includes integrating policy guidelines, upholding ethical principles, ensuring technical reliability, and maintaining stakeholder trust. Addressing these criteria creates a strong foundation for responsible action."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-201-l07-f1",
          "front": "Impact Distribution",
          "back": "The way in which the positive benefits and negative burdens of a policy or intervention are spread across different stakeholder groups."
        },
        {
          "id": "public-health-201-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to reconstruct and explain why a decision was made, by whom, and based on what evidence and assumptions."
        },
        {
          "id": "public-health-201-l07-f3",
          "front": "Responsible Execution",
          "back": "A mode of delivery that successfully combines effectiveness (achieving goals) with fairness (equitable process and outcomes) and the capacity to correct errors."
        }
      ]
    },
    {
      "id": "public-health-201-l08",
      "title": "Public Health Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "public-health-201-l08-a1",
          "type": "practice",
          "title": "Capstone Charter Template",
          "content": "A structured document to guide your capstone planning, with sections for problem statement, scope, metrics, risks, and governance."
        }
      ],
      "chunks": [
        {
          "id": "public-health-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this activity, you will draft a detailed charter for your capstone project. The charter will define the project's scope, identify constraints, establish measurable success metrics, and set governance checkpoints. This structured approach clarifies your goals and plan of action."
        },
        {
          "id": "public-health-201-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you prepare to present your capstone project, focus on two key areas: providing strong, clear evidence for your recommendations, and being prepared to respond thoughtfully to critical feedback. This preparation will help you present your work confidently and professionally."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your project objective and boundary conditions in one or two sentences.",
            "Define at least three measurable indicators that will define success.",
            "Document a governance escalation pathway for critical failures or unexpected results."
          ]
        },
        {
          "id": "public-health-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against simulated critiques from technical, policy, and community stakeholder perspectives."
        }
      ]
    },
    {
      "id": "public-health-201-l09",
      "title": "Final Assessment: Capstone Defense",
      "type": "quiz",
      "duration": 15,
      "learningAids": [
        {
          "id": "public-health-201-l09-a1",
          "type": "practice",
          "title": "Module Synthesis Review",
          "content": "Review your work from the entire module, from core concepts to the capstone charter. Synthesize your learnings to prepare a comprehensive and defensible final recommendation."
        }
      ],
      "questions": [
        {
          "id": "public-health-201-l09-q1",
          "text": "When presenting a capstone recommendation, what is the most effective way to handle uncertainty in your data?",
          "skillId": "public-health-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Ignore the uncertainty to make your recommendation sound more confident."
            },
            {
              "id": "b",
              "text": "State the uncertainty bounds clearly and explain how your recommendation is robust despite them."
            },
            {
              "id": "c",
              "text": "Magnify the uncertainty to suggest that no decision can be made."
            },
            {
              "id": "d",
              "text": "Use a different dataset that has less uncertainty, even if it's less relevant."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Communicating uncertainty transparently while demonstrating the robustness of your plan builds credibility and leads to better decisions."
        },
        {
          "id": "public-health-201-l09-q2",
          "text": "A stakeholder panel questions the fairness of your proposed intervention. What is the strongest response?",
          "skillId": "public-health-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Dismiss their concern by stating that effectiveness is the only goal."
            },
            {
              "id": "b",
              "text": "Show your stakeholder impact map and tradeoff matrix, explaining how equity was considered and what mitigations are in place."
            },
            {
              "id": "c",
              "text": "Agree to cancel the project immediately without discussion."
            },
            {
              "id": "d",
              "text": "Argue that their perspective is not valid."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong, governance-aware response uses evidence and structured tools to show that fairness was a core part of the decision-making process."
        },
        {
          "id": "public-health-201-l09-q3",
          "text": "Your capstone plan relies on a workflow you designed. How do you defend its reliability?",
          "skillId": "public-health-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "By stating that you are confident it will work."
            },
            {
              "id": "b",
              "text": "By explaining its control gates, verification steps, and how it was tested against potential failures."
            },
            {
              "id": "c",
              "text": "By claiming it is based on a secret, proprietary method."
            },
            {
              "id": "d",
              "text": "By asserting that no workflow is ever truly reliable."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defending reliability requires showing the specific, structural elements of the workflow that make it robust and repeatable."
        }
      ]
    }
  ]
};
