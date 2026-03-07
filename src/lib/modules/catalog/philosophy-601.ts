import type { LearningModule } from "@/lib/modules/types";

export const philosophy_601_Module: LearningModule = {
  "id": "philosophy-601",
  "title": "Philosophy Research and Leadership",
  "description": "Post-401 specialization in Philosophy, focused on humanities systems diagnostics, humanities operations and execution design, humanities impact and tradeoff analysis, and humanities governance and leadership through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Humanities",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "philosophy",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Diagnose complex humanities systems by identifying core assumptions, constraints, and measurable indicators.",
    "Design operational workflows for humanities projects, including checkpoints, risk mitigation, and clear accountability.",
    "Analyze the impact and tradeoffs of different interventions using comparative baselines and uncertainty modeling.",
    "Develop governance frameworks that connect policy intent to measurable outcomes and transparent remediation processes.",
    "Lead decision-making processes by clearly communicating tradeoffs, evidence, and risk factors to diverse stakeholders.",
    "Construct and defend evidence-based recommendations against rigorous expert critique."
  ],
  "lessons": [
    {
      "id": "philosophy-601-l01",
      "title": "Philosophy Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "philosophy-601-l01-a1",
          "type": "image",
          "title": "Conceptual Model of a Humanities System",
          "content": "A diagram illustrating the interconnected components of a complex social or cultural system, showing inputs, processes, outputs, and feedback loops."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this lesson, we will explore the advanced application of philosophy to analyze and diagnose complex systems within the humanities. We will learn to define the scope and boundaries of a problem, a critical first step for designing effective operations and interventions. Understanding these boundaries helps manage the inherent complexity of philosophical inquiry in real-world scenarios."
        },
        {
          "id": "philosophy-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Here, you will learn to map causal pathways—the chains of cause and effect—within a system. We will also practice identifying and quantifying uncertainty. This foundational knowledge is crucial for planning effective interventions, allowing you to anticipate potential outcomes and challenges."
        },
        {
          "id": "philosophy-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "This recap emphasizes a core principle: all claims must be linked to measurable evidence. You will learn to establish confidence levels for your conclusions and set up review checkpoints to ensure your arguments are well-supported, credible, and maintain intellectual integrity."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-601-l01-f1",
          "front": "Humanities Systems Diagnostics",
          "back": "The discipline of analyzing complex social or cultural systems by making assumptions explicit and defining measurable constraints."
        },
        {
          "id": "philosophy-601-l01-f2",
          "front": "Humanities Operations Design",
          "back": "The architectural design of a project or intervention that determines its reliability and effectiveness under stress."
        },
        {
          "id": "philosophy-601-l01-f3",
          "front": "Humanities Tradeoff Analysis",
          "back": "The evaluation discipline for systematically identifying the true gains and hidden costs of a decision across competing values."
        }
      ]
    },
    {
      "id": "philosophy-601-l02",
      "title": "Philosophy Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "philosophy-601-l02-a1",
          "type": "image",
          "title": "Workflow with Control Gates",
          "content": "A flowchart diagram showing a project workflow with clear checkpoints (gates), decision points, and escalation paths for when things go wrong."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design a specialized workflow for a philosophical research project. You will then stress-test your design by simulating adverse scenarios, such as data loss or stakeholder disagreement. This hands-on experience will help you build adaptable and resilient problem-solving methods."
        },
        {
          "id": "philosophy-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap focuses on structuring workflows with built-in safeguards. We will review how to design checkpoints, criteria for rolling back a decision, and thresholds for escalating a problem. This architecture ensures you can maintain control and make informed decisions even when facing unexpected challenges."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match key governance controls to their primary function in ensuring a project's reliability and accountability.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits damage from adverse outcomes"
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
      "id": "philosophy-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "philosophy-601-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "philosophy-601-l03-q1",
          "text": "Which practice most improves the decision quality of humanities systems diagnostics?",
          "skillId": "philosophy-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without a baseline or assumptions"
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit from the start."
        },
        {
          "id": "philosophy-601-l03-q2",
          "text": "At an advanced level, strong execution for humanities operations requires:",
          "skillId": "philosophy-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, regular checkpoints, and defined escalation thresholds"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-project review"
            },
            {
              "id": "d",
              "text": "No rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs ownership clarity and threshold-driven governance to manage complexity."
        },
        {
          "id": "philosophy-601-l03-q3",
          "text": "A defensible approach to humanities impact and tradeoff analysis includes:",
          "skillId": "philosophy-601-skill-eval",
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
              "text": "Changing success criteria after seeing the outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, checks for unintended consequences, and honest disclosure of uncertainty."
        },
        {
          "id": "philosophy-601-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "philosophy-601-skill-governance",
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
              "text": "Targets without ownership or an escalation plan"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between intent, measurement, and corrective action."
        }
      ]
    },
    {
      "id": "philosophy-601-l04",
      "title": "Philosophy Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "philosophy-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "A table comparing three different policy options across multiple criteria like cost, equity, safety, and reliability, with color-coded scores."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "This lesson introduces case studies that highlight the competing constraints often found in humanities-related problems. We will deconstruct complex scenarios to analyze the impacts and trade-offs of potential decisions, appreciating the complexity of real-world ethical and philosophical challenges."
        },
        {
          "id": "philosophy-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "In this practice session, you will formally compare different options using a structured framework. You will weigh each option against key dimensions like safety, reliability, cost, equity, and governance, honing your critical thinking and multi-faceted decision-making skills."
        },
        {
          "id": "philosophy-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "We will recap by introducing a standard pattern for a decision memo. A strong recommendation must clearly state its underlying assumptions, present supporting evidence, outline risk controls, and include fallback plans. This structure ensures your proposals are well-reasoned, transparent, and accountable."
        }
      ]
    },
    {
      "id": "philosophy-601-l05",
      "title": "Philosophy Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "philosophy-601-l05-a1",
          "type": "image",
          "title": "Interactive Simulation Dashboard",
          "content": "A user interface for a simulation showing adjustable control levers, real-time data feedback, and performance metrics."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive simulation, you will take control of a complex scenario in real-time. Your task is to make decisions that balance performance goals with governance constraints, navigating unexpected events and resource limitations."
        },
        {
          "id": "philosophy-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "This recap focuses on designing adaptive responses. We will discuss how to update your strategy and controls during a live scenario without losing traceability or accountability. This is a key skill for effective leadership in dynamic environments."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Navigate a high-pressure simulation of a humanities crisis, making real-time decisions to manage outcomes while adhering to ethical and operational constraints."
        }
      ]
    },
    {
      "id": "philosophy-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "philosophy-601-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "philosophy-601-l06-q1",
          "text": "When analyzing a case study, what is the most critical first step before comparing options?",
          "skillId": "philosophy-601-skill-case-analysis",
          "options": [
            {
              "id": "a",
              "text": "Choosing the easiest solution"
            },
            {
              "id": "b",
              "text": "Establishing a clear baseline and defining success criteria"
            },
            {
              "id": "c",
              "text": "Writing the final report"
            },
            {
              "id": "d",
              "text": "Ignoring stakeholder perspectives"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A clear baseline and success criteria are essential for objectively evaluating the impact of any proposed solution."
        },
        {
          "id": "philosophy-601-l06-q2",
          "text": "In a simulation, an unexpected negative event occurs. What does a resilient operational design prioritize?",
          "skillId": "philosophy-601-skill-simulation-response",
          "options": [
            {
              "id": "a",
              "text": "Continuing the original plan without changes"
            },
            {
              "id": "b",
              "text": "Executing a pre-defined fallback plan and escalating to leadership"
            },
            {
              "id": "c",
              "text": "Assigning blame to a team member"
            },
            {
              "id": "d",
              "text": "Hiding the negative event from stakeholders"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Resilience requires having pre-planned contingencies and clear communication channels for when things go wrong."
        },
        {
          "id": "philosophy-601-l06-q3",
          "text": "A 'tradeoff analysis' in a humanities context primarily involves:",
          "skillId": "philosophy-601-skill-tradeoff-analysis",
          "options": [
            {
              "id": "a",
              "text": "Proving one option is perfect"
            },
            {
              "id": "b",
              "text": "Only considering the financial costs"
            },
            {
              "id": "c",
              "text": "Systematically comparing how different options perform across multiple competing values (e.g., equity vs. efficiency)"
            },
            {
              "id": "d",
              "text": "Choosing the most popular option"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Rigorous tradeoff analysis requires evaluating options against a range of important, and often conflicting, criteria."
        },
        {
          "id": "philosophy-601-l06-q4",
          "text": "What is the purpose of a 'decision memo' as outlined in the case analysis lesson?",
          "skillId": "philosophy-601-skill-decision-memo",
          "options": [
            {
              "id": "a",
              "text": "To hide the real reasons for a decision"
            },
            {
              "id": "b",
              "text": "To create a formal, auditable record of the recommendation, evidence, risks, and assumptions"
            },
            {
              "id": "c",
              "text": "To informally share opinions with a small group"
            },
            {
              "id": "d",
              "text": "To be written only after a project is successful"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A decision memo provides a transparent and accountable record, making the reasoning behind a choice clear to all stakeholders."
        }
      ]
    },
    {
      "id": "philosophy-601-l07",
      "title": "Philosophy Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "philosophy-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "An infographic visualizing how a single policy decision creates different positive and negative impacts on various community groups over time."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "In this lesson, you will learn to map the distribution of benefits, burdens, and long-term effects of a decision across different stakeholder groups. This ethical analysis helps foster a deeper sense of responsibility by revealing the broader human implications of philosophical and policy choices."
        },
        {
          "id": "philosophy-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we will explore 'accountability architecture'—the formal systems that ensure transparency and responsibility. This includes practices for decision traceability, defining stakeholder review rights, and establishing clear obligations for fixing problems when they arise."
        },
        {
          "id": "philosophy-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We will conclude with a responsible leadership checklist. This tool connects project outcomes with ethical principles, policy adherence, and system resilience, serving as a practical guide for ensuring that leadership is both effective and accountable."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (benefits, costs, risks) are allocated across different populations and timescales."
        },
        {
          "id": "philosophy-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record connecting a decision to its underlying evidence, ownership, and rationale."
        },
        {
          "id": "philosophy-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A mode of decision-making that balances performance goals with accountability and ethical considerations."
        }
      ]
    },
    {
      "id": "philosophy-601-l08",
      "title": "Philosophy Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "philosophy-601-l08-a1",
          "type": "image",
          "title": "Argument Structure Diagram",
          "content": "A visual breakdown of a defensible argument, showing the core claim supported by evidence, with explicit acknowledgment of limitations and risks."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive lab, you will assemble a capstone defense brief for a complex scenario. Your brief must integrate a well-supported claim, verifiable evidence, a clear articulation of uncertainty, and concrete remediation pathways for potential risks. This exercise hones your synthesis and critical thinking skills."
        },
        {
          "id": "philosophy-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Here, you will rehearse your defense in front of a simulated expert panel. This involves preparing responses to sharp critiques about your technical methods, governance structures, and stakeholder considerations. This rehearsal builds confidence and sharpens your communication skills under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your policy recommendation for a complex humanities problem against adversarial questioning from a simulated expert panel."
        }
      ]
    },
    {
      "id": "philosophy-601-l09",
      "title": "Final Checkpoint: Capstone Defense",
      "type": "quiz",
      "duration": 15,
      "learningAids": [
        {
          "id": "philosophy-601-l09-a1",
          "type": "practice",
          "title": "Self-Review Checklist",
          "content": "Review the core principles of the course: structured methods, explicit assumptions, measurable evidence, and accountable governance."
        }
      ],
      "questions": [
        {
          "id": "philosophy-601-l09-q1",
          "text": "In a capstone defense, what is the strongest way to handle a question about the potential negative side effects of your proposal?",
          "skillId": "philosophy-601-skill-defense-risk",
          "options": [
            {
              "id": "a",
              "text": "Deny that any negative side effects are possible."
            },
            {
              "id": "b",
              "text": "Acknowledge the risk, present your mitigation plan, and explain the residual uncertainty."
            },
            {
              "id": "c",
              "text": "Change the subject to a strength of your proposal."
            },
            {
              "id": "d",
              "text": "State that side effects are not your responsibility."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong defense demonstrates foresight by acknowledging risks and presenting a clear plan to manage them."
        },
        {
          "id": "philosophy-601-l09-q2",
          "text": "A mature governance model, as discussed in the course, must link policy intent with:",
          "skillId": "philosophy-601-skill-governance-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Vague aspirations and no oversight."
            },
            {
              "id": "b",
              "text": "The personal opinions of the leader."
            },
            {
              "id": "c",
              "text": "Measurable controls, clear accountability, and a process for remediation."
            },
            {
              "id": "d",
              "text": "A one-time report that is never updated."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective governance translates high-level intent into concrete, measurable, and accountable operations."
        },
        {
          "id": "philosophy-601-l09-q3",
          "text": "When presenting a complex tradeoff analysis, effective leadership communication involves:",
          "skillId": "philosophy-601-skill-leadership-communication",
          "options": [
            {
              "id": "a",
              "text": "Hiding the tradeoffs to make the decision seem easy."
            },
            {
              "id": "b",
              "text": "Explicitly stating the competing values and explaining why one path was chosen over others."
            },
            {
              "id": "c",
              "text": "Using jargon to confuse the audience."
            },
            {
              "id": "d",
              "text": "Presenting only the data that supports your preferred option."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparent leadership involves clearly articulating the difficult choices and justifying the final recommendation in the face of competing options."
        },
        {
          "id": "philosophy-601-l09-q4",
          "text": "What is the primary purpose of mapping stakeholder impact distribution?",
          "skillId": "philosophy-601-skill-stakeholder-analysis",
          "options": [
            {
              "id": "a",
              "text": "To identify which groups can be safely ignored."
            },
            {
              "id": "b",
              "text": "To ensure that all benefits go to a single group."
            },
            {
              "id": "c",
              "text": "To fulfill a bureaucratic requirement."
            },
            {
              "id": "d",
              "text": "To ethically evaluate how benefits and burdens are allocated and identify potential inequities."
            }
          ],
          "correctOptionId": "d",
          "explanation": "Mapping impact distribution is a core ethical practice for ensuring fairness and anticipating the full human consequences of a decision."
        }
      ]
    }
  ]
};
