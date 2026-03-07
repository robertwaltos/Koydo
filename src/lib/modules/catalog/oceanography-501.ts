import type { LearningModule } from "@/lib/modules/types";

export const oceanography_501_Module: LearningModule = {
  "id": "oceanography-501",
  "title": "Oceanography Specialization Studio",
  "description": "Post-401 specialization in Oceanography, focused on ocean system diagnostics, marine risk forecasting, resource-climate tradeoff analysis, and stewardship governance through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "oceanography",
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
    "Apply advanced methods for ocean system diagnostics in high-constraint environments",
    "Design robust systems for marine risk forecasting with measurable control gates",
    "Evaluate interventions in resource-climate tradeoff analysis with research-grade rigor",
    "Operationalize stewardship governance with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "oceanography-501-l01",
      "title": "Oceanography Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "oceanography-501-l01-a1",
          "type": "diagram",
          "title": "Ocean System Interdependencies",
          "content": "A concept map illustrating the connections between physical, chemical, and biological components of an ocean ecosystem."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "In this lesson, we will define the advanced scope of Oceanography. We'll focus on diagnosing ocean systems by studying the complex factors affecting their health and behavior. You will also learn the principles of marine risk forecasting to predict potential challenges in marine environments. This knowledge is crucial for developing effective management and protection strategies for our oceans."
        },
        {
          "id": "oceanography-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "This section focuses on causal and uncertainty modeling. You will learn to map the cause-and-effect pathways within ocean systems, identify ranges of uncertainty in data and models, and understand system dependencies. This foundational work is essential for planning effective and robust interventions."
        },
        {
          "id": "oceanography-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "This recap emphasizes the importance of evidence-based claims in oceanographic studies. We will review the necessity of using measurable indicators, establishing confidence bounds for data, and implementing regular review checkpoints to validate findings and ensure research accuracy."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-501-l01-f1",
          "front": "Ocean system diagnostics",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "oceanography-501-l01-f2",
          "front": "Marine risk forecasting",
          "back": "An execution architecture that determines reliability under stress."
        },
        {
          "id": "oceanography-501-l01-f3",
          "front": "Resource-climate tradeoff analysis",
          "back": "An evaluation discipline for identifying true gains and hidden costs."
        }
      ]
    },
    {
      "id": "oceanography-501-l02",
      "title": "Oceanography Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "oceanography-501-l02-a1",
          "type": "infographic",
          "title": "Workflow Stress Testing",
          "content": "An infographic showing a sample oceanographic research workflow with potential failure points highlighted for a stress test simulation."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design specialized research workflows tailored to specific oceanographic challenges. You will then conduct stress tests on these workflows by simulating adverse scenarios, such as data loss or unexpected environmental shifts, to ensure their resilience and effectiveness."
        },
        {
          "id": "oceanography-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap focuses on designing robust control gate architecture within your workflows. We will cover the implementation of critical checkpoints, clear rollback criteria for when a process fails, and threshold-based escalation protocols to ensure issues are addressed promptly by the appropriate teams."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-501-l02-act1",
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
      "id": "oceanography-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-501-l03-a1",
          "type": "checklist",
          "title": "Pre-Quiz Review",
          "content": "Key concepts to review: Scope Design, Causal Modeling, Control Gates, and Evidence Thresholds."
        }
      ],
      "questions": [
        {
          "id": "oceanography-501-l03-q1",
          "text": "Which practice most improves ocean system diagnostics decision quality?",
          "skillId": "oceanography-501-skill-diagnostics",
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
          "id": "oceanography-501-l03-q2",
          "text": "At level 501, strong execution for marine risk forecasting requires:",
          "skillId": "oceanography-501-skill-forecasting",
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
          "id": "oceanography-501-l03-q3",
          "text": "A defensible approach to resource-climate tradeoff analysis includes:",
          "skillId": "oceanography-501-skill-tradeoff-analysis",
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
          "id": "oceanography-501-l03-q4",
          "text": "Mature stewardship governance systems connect:",
          "skillId": "oceanography-501-skill-governance-systems",
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
        }
      ]
    },
    {
      "id": "oceanography-501-l04",
      "title": "Oceanography Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "oceanography-501-l04-a1",
          "type": "case_brief",
          "title": "Coastal Council Case File",
          "content": "A one-page summary of the case study, outlining the stakeholders, primary challenges (fishery viability, climate change), and key decision points."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-501-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "This case study examines the challenges faced by a coastal governance council responsible for balancing local fishery viability with the impacts of warming oceans and the need for disaster resilience. You will map the operational constraints, identify different classes of risk, and analyze the governance boundaries that shape the council's decision-making process."
        },
        {
          "id": "oceanography-501-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "Here, you will construct a tradeoff matrix to systematically evaluate potential policy interventions. Each alternative will be scored against key criteria such as ecological effectiveness, economic feasibility, implementation risk, social equity, and cost. This structured approach ensures a comprehensive and defensible comparison of options."
        },
        {
          "id": "oceanography-501-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "This recap covers the design of recovery and adaptation plans. You will learn to map specific failure signatures (e.g., a sudden drop in fish stocks) to pre-planned remediation actions. We will also define measurable recovery triggers that activate these plans and help assess their effectiveness over time."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-501-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured model for comparing alternatives under competing priorities."
        },
        {
          "id": "oceanography-501-l04-f2",
          "front": "Failure signature",
          "back": "A recurring indicator of a predictable risk class."
        },
        {
          "id": "oceanography-501-l04-f3",
          "front": "Recovery trigger",
          "back": "A measurable threshold that initiates corrective action."
        }
      ]
    },
    {
      "id": "oceanography-501-l05",
      "title": "Oceanography Simulation Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "oceanography-501-l05-a1",
          "type": "simulation_dashboard",
          "title": "Intervention Simulator Interface",
          "content": "A screenshot of the simulation tool's dashboard, showing controls for adjusting intervention parameters, constraints, and escalation logic."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-501-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, you will apply your case analysis by configuring and testing different interventions. You will set boundary constraints, define escalation logic for unexpected outcomes, and run your chosen strategies through high-stakes scenarios to observe their performance and potential failures."
        },
        {
          "id": "oceanography-501-l05-c2",
          "kind": "recap",
          "title": "Debrief and Adaptation",
          "content": "Following the simulation, this debrief session will guide you through a structured review of the outcomes. We will analyze the intended gains versus the actual results, identify unintended side effects, and assess any gaps in governance compliance revealed by the stress test. This reflection is key to refining your recommendations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-501-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Evaluate intervention options across ocean system diagnostics and stewardship governance priorities.",
          "instructions": [
            "Define your primary objective and boundary conditions based on the case study.",
            "Document the short- and long-term tradeoffs of your chosen intervention.",
            "Specify the metrics and triggers that would validate your recommendation's success or failure."
          ]
        }
      ]
    },
    {
      "id": "oceanography-501-l06",
      "title": "Checkpoint 2: Application and Governance",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-501-l06-a1",
          "type": "scenario",
          "title": "Decision Scenario",
          "content": "Review the Coastal Council Case File. The following questions will test your ability to apply your analysis and simulation findings to make a final recommendation."
        }
      ],
      "questions": [
        {
          "id": "oceanography-501-l06-q1",
          "text": "In the Coastal Council case, a new model predicts a 20% higher risk of coral bleaching. What is the most appropriate first step in your diagnostic process?",
          "skillId": "oceanography-501-skill-adaptive-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Immediately recommend new fishing quotas based on the model"
            },
            {
              "id": "b",
              "text": "Validate the new model's assumptions, data sources, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Disregard the model as an outlier that contradicts previous findings"
            },
            {
              "id": "d",
              "text": "Announce the alarming findings to the public to create pressure for action"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Before acting on new information, a rigorous diagnostic process requires validating its credibility and understanding its limitations."
        },
        {
          "id": "oceanography-501-l06-q2",
          "text": "Your simulation of a proposed marine protected area (MPA) shows it protects biodiversity but displaces local fishing communities. How do you address this in your tradeoff analysis?",
          "skillId": "oceanography-501-skill-socio-ecological-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "Ignore the economic impact as it's outside the ecological scope"
            },
            {
              "id": "b",
              "text": "Recommend the MPA and suggest uncosted 'community support' as a talking point"
            },
            {
              "id": "c",
              "text": "Quantify the economic impact and propose a mitigation plan, like job retraining or subsidies, as an integral part of the recommendation"
            },
            {
              "id": "d",
              "text": "Cancel the MPA proposal entirely because it has a negative social impact"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A robust tradeoff analysis must account for all significant impacts and integrate mitigation strategies for negative side effects into the core proposal."
        },
        {
          "id": "oceanography-501-l06-q3",
          "text": "A key stakeholder, a fishing cooperative, disputes your data on fish stock decline. What is the most defensible governance action?",
          "skillId": "oceanography-501-skill-stakeholder-governance",
          "options": [
            {
              "id": "a",
              "text": "Dismiss their claims as unscientific and proceed with the plan"
            },
            {
              "id": "b",
              "text": "Host a transparent review presenting your methodology and data, and formally document their objection and any counter-evidence they provide"
            },
            {
              "id": "c",
              "text": "Alter your data to a compromise value to achieve consensus"
            },
            {
              "id": "d",
              "text": "Proceed with your recommendation but avoid mentioning the dispute in your report"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Good governance requires transparency, a right to review, and auditable records of dissent and evidence, which builds trust and defensibility."
        },
        {
          "id": "oceanography-501-l06-q4",
          "text": "Your intervention plan includes a trigger for emergency fishing restrictions if stocks fall below a critical threshold. This is an example of what?",
          "skillId": "oceanography-501-skill-control-architecture",
          "options": [
            {
              "id": "a",
              "text": "A stakeholder impact distribution"
            },
            {
              "id": "b",
              "text": "A retrospective loop"
            },
            {
              "id": "c",
              "text": "A rollback trigger in a control gate architecture"
            },
            {
              "id": "d",
              "text": "A pre-commit gate"
            }
          ],
          "correctOptionId": "c",
          "explanation": "This is a measurable threshold that initiates a pre-planned corrective action (rollback of fishing rights) to limit the blast radius of a negative outcome."
        }
      ]
    },
    {
      "id": "oceanography-501-l07",
      "title": "Oceanography Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "oceanography-501-l07-a1",
          "type": "diagram",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing how a single policy decision (e.g., establishing a no-take zone) creates a ripple effect of positive and negative impacts on different stakeholder groups over time."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "This lesson explores the distribution of impacts from ocean governance decisions across various stakeholders. You will learn to map out who benefits, who bears the burdens, and how to account for delayed or cascading effects on communities, industries, and ecosystems."
        },
        {
          "id": "oceanography-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Here, we focus on designing a robust accountability architecture. This involves creating systems for decision traceability, establishing clear rights for stakeholder review and appeal, and defining obligations for remediation when negative outcomes occur. This framework is essential for building trust and ensuring responsible governance."
        },
        {
          "id": "oceanography-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This recap provides a responsible leadership checklist to guide your final recommendations. It integrates key considerations including outcome evaluation against stated goals, ethical implications for all stakeholders, compliance with legal and policy frameworks, and the long-term resilience of your proposed solutions."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-501-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes are allocated across populations and timescales."
        },
        {
          "id": "oceanography-501-l07-f2",
          "front": "Decision traceability",
          "back": "An auditable record of evidence, ownership, and rationale."
        },
        {
          "id": "oceanography-501-l07-f3",
          "front": "Responsible leadership",
          "back": "Decision behavior balancing performance, accountability, and ethics."
        }
      ]
    },
    {
      "id": "oceanography-501-l08",
      "title": "Oceanography Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "oceanography-501-l08-a1",
          "type": "template",
          "title": "Defense Brief Template",
          "content": "A structured document template for assembling the capstone defense, with sections for Executive Summary, Evidence, Uncertainty Analysis, and Remediation Pathways."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this interactive lab, you will assemble your final capstone defense brief. This involves synthesizing your research into clear, evidence-backed claims, explicitly defining the uncertainty bounds of your analysis, and proposing concrete remediation pathways for potential risks associated with your recommendation."
        },
        {
          "id": "oceanography-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "This session is a full rehearsal for your defense. You will practice responding to a series of challenging critiques from an expert panel simulation, covering technical methodology, governance structures, and stakeholder impacts. This is your opportunity to refine your arguments and build confidence for the final presentation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination.",
          "instructions": [
            "Present your final recommendation based on the case study.",
            "Respond to critiques from simulated expert panelists (e.g., a skeptical climate scientist, a concerned industry representative, a government regulator).",
            "Justify your tradeoffs and defend your uncertainty analysis."
          ]
        }
      ]
    }
  ]
};
