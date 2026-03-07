import type { LearningModule } from "@/lib/modules/types";

export const media_literacy_501_Module: LearningModule = {
  "id": "media-literacy-501",
  "title": "Media Literacy Specialization Studio",
  "description": "A specialization in Media Literacy focused on diagnosing information ecosystems, detecting misinformation, analyzing platform incentives, and safeguarding public discourse. The module uses advanced casework, simulations, and defense-based checkpoints to build resilience.",
  "subject": "Social Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "media-literacy",
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
    "Apply advanced methods for information ecosystem diagnostics in high-constraint environments.",
    "Design robust systems for misinformation detection and verification workflows with measurable control gates.",
    "Evaluate interventions in platform incentives and narrative influence analysis with research-grade rigor.",
    "Operationalize public discourse resilience and democratic safeguards with accountable governance and escalation pathways.",
    "Lead cross-functional decision reviews with explicit tradeoff communication.",
    "Defend recommendations under expert critique using evidence and uncertainty bounds."
  ],
  "lessons": [
    {
      "id": "media-literacy-501-l01",
      "title": "Advanced Foundations of Media Literacy",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "media-literacy-501-l01-a1",
          "type": "image",
          "title": "Structured Method Flowchart",
          "content": "A flowchart diagram showing the structured method: 1. State Assumptions -> 2. Gather Measurable Evidence -> 3. Validate Recommendations."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-501-l01-c1",
          "kind": "concept",
          "title": "Analyzing the Information Ecosystem",
          "content": "In this lesson, we'll explore the advanced concepts of Media Literacy. We will start by learning how to analyze an 'information ecosystem'—the complex network of sources, platforms, and audiences that shape our news and media. We will also introduce structured workflows for detecting misinformation and verifying facts, giving you a reliable process for navigating today's media landscape."
        },
        {
          "id": "media-literacy-501-l01-c2",
          "kind": "concept",
          "title": "Modeling Cause and Effect",
          "content": "Here, we will map the causal pathways in media systems to understand how one event leads to another. We will also define 'uncertainty ranges' to acknowledge the limits of our knowledge and identify key system dependencies. This foundation is essential for planning effective interventions and understanding the potential impact of our actions."
        },
        {
          "id": "media-literacy-501-l01-c3",
          "kind": "recap",
          "title": "Setting Evidence Thresholds",
          "content": "In this recap, we'll establish the importance of linking all claims to measurable evidence. We will discuss how to set 'confidence bounds' to communicate how certain we are about our conclusions. Finally, we'll introduce review checkpoints as a formal process for re-evaluating our analysis and ensuring its continued accuracy."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-501-l01-f1",
          "front": "Information Ecosystem Diagnostics",
          "back": "The systematic analysis of information sources, flows, and impacts within a defined environment, requiring explicit assumptions and measurable constraints."
        },
        {
          "id": "media-literacy-501-l01-f2",
          "front": "Misinformation Verification Workflows",
          "back": "A structured, repeatable process with clear checkpoints designed to reliably assess the accuracy of information, especially under pressure."
        },
        {
          "id": "media-literacy-501-l01-f3",
          "front": "Narrative Influence Analysis",
          "back": "The evaluation of how stories and messaging campaigns shape public perception, focusing on identifying their true impact versus their hidden costs."
        }
      ]
    },
    {
      "id": "media-literacy-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "media-literacy-501-l02-a1",
          "type": "practice",
          "title": "Workflow Stress Test",
          "content": "An animated infographic of a workflow being 'stress-tested' by various challenging scenarios, represented by icons like a storm cloud, a ticking clock, and a magnifying glass."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress-Testing",
          "content": "In this interactive lab, you will design your own specialist workflow for analyzing a piece of media. After designing your step-by-step process, you will stress-test it against challenging scenarios to see how it holds up under pressure. This practice will help you build adaptable and effective methods for real-world situations."
        },
        {
          "id": "media-literacy-501-l02-c2",
          "kind": "recap",
          "title": "Designing Control Gates",
          "content": "We'll recap the architecture of 'control gates'—the safety checks in your workflow. This includes integrating review checkpoints, defining rollback criteria for when things go wrong, and setting clear thresholds for escalating an issue. Mastering these elements is key to managing complex information challenges effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-501-l02-act1",
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
      "id": "media-literacy-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-501-l03-a1",
          "type": "practice",
          "title": "Key Practices Checklist",
          "content": "A checklist icon with the key practice points: Structured Method, Explicit Assumptions, Measurable Evidence."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-501-l03-q1",
          "text": "Which practice most improves information ecosystem diagnostics decision quality?",
          "skillId": "media-literacy-501-skill-core",
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
          "id": "media-literacy-501-l03-q2",
          "text": "At level 501, strong execution for misinformation detection and verification workflows requires:",
          "skillId": "media-literacy-501-skill-execution",
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
          "id": "media-literacy-501-l03-q3",
          "text": "A defensible approach to platform incentives and narrative influence analysis includes:",
          "skillId": "media-literacy-501-skill-eval",
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
          "id": "media-literacy-501-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "media-literacy-501-skill-governance",
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
      "id": "media-literacy-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "media-literacy-501-l04-a1",
          "type": "image",
          "title": "Weighing the Tradeoffs",
          "content": "An image of a balance scale, with icons representing safety, cost, and reliability on one side, and equity and governance on the other, illustrating the concept of tradeoffs."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-501-l04-c1",
          "kind": "concept",
          "title": "Deconstructing a Case Study",
          "content": "In this lesson, we will deconstruct a complex case study that highlights the competing pressures within an information ecosystem. We will analyze how platform incentives and narrative influence campaigns can distort public discourse. By breaking down these dynamics, you will be better equipped to navigate the complexities of modern media."
        },
        {
          "id": "media-literacy-501-l04-c2",
          "kind": "practice",
          "title": "Framing the Tradeoffs",
          "content": "In this practice session, you will compare different potential responses to the case study. You will evaluate each option across key dimensions: safety, reliability, cost, equity, and governance. This exercise will help you articulate the difficult tradeoffs involved in media literacy decisions and develop a more nuanced approach to problem-solving."
        },
        {
          "id": "media-literacy-501-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo",
          "content": "We'll conclude by introducing a structured format for presenting your analysis: the decision memo. We will emphasize that every recommendation must clearly state its underlying assumptions, supporting evidence, risk controls, and fallback plans. This structured approach is critical for making clear and defensible decisions."
        }
      ]
    },
    {
      "id": "media-literacy-501-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "media-literacy-501-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "A dashboard interface from the simulation, showing performance metrics (e.g., information accuracy) and governance constraint alerts (e.g., budget limits) that the user must manage."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-501-l05-c1",
          "kind": "practice",
          "title": "Managing a Live Scenario",
          "content": "In this interactive simulation, you will manage a developing media crisis in real time. You will be responsible for making decisions that balance performance goals, such as correcting misinformation, with governance constraints, like adhering to ethical guidelines. This will test your ability to apply your skills under pressure."
        },
        {
          "id": "media-literacy-501-l05-c2",
          "kind": "recap",
          "title": "Designing an Adaptive Response",
          "content": "In our recap, we will discuss how to adapt your strategy during a live event. This includes updating your control gates and decision-making process without losing traceability or accountability. We will explore how to ensure every action is transparent and defensible, which is crucial for maintaining trust and integrity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-501-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure media literacy scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "media-literacy-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "media-literacy-501-l06-a1",
          "type": "practice",
          "title": "Mastery Badge",
          "content": "A certificate icon with the key practice points: Structured Method, Explicit Assumptions, Measurable Evidence."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-501-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "media-literacy-501-skill-case1",
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
          "id": "media-literacy-501-l06-q2",
          "text": "A resilient strategy for misinformation detection and verification workflows should include:",
          "skillId": "media-literacy-501-skill-case2",
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
          "id": "media-literacy-501-l06-q3",
          "text": "When evaluating platform incentives and narrative influence analysis, which method is most rigorous?",
          "skillId": "media-literacy-501-skill-case3",
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
          "id": "media-literacy-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "media-literacy-501-skill-case4",
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
        }
      ]
    },
    {
      "id": "media-literacy-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "media-literacy-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing a central decision point with arrows pointing to various stakeholder groups (e.g., community, government, business), illustrating the distribution of impact."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-501-l07-c1",
          "kind": "concept",
          "title": "Mapping Stakeholder Impact",
          "content": "In this lesson, you will learn to map the distribution of impact across various stakeholders. This involves identifying who benefits from a media decision, who bears the costs, and what delayed or indirect effects might arise. Understanding these dynamics is key to making equitable and responsible choices."
        },
        {
          "id": "media-literacy-501-l07-c2",
          "kind": "concept",
          "title": "Building Accountability Systems",
          "content": "Here, we will explore the architecture of accountability. This includes systems for tracing decisions back to their origins, ensuring the right to review and appeal, and establishing clear obligations to fix problems. By designing these systems, we can build a foundation for ethical and transparent decision-making."
        },
        {
          "id": "media-literacy-501-l07-c3",
          "kind": "recap",
          "title": "The Responsible Leadership Checklist",
          "content": "To conclude, we will introduce a checklist for responsible leadership. This tool connects expected outcomes with ethical guardrails, policy compliance, and resilience planning. Using this checklist helps ensure that decisions are not only effective but also fair, transparent, and accountable to the public."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-501-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative outcomes of a decision are allocated across different populations and over time."
        },
        {
          "id": "media-literacy-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record that connects a decision to its underlying evidence, rationale, and ownership, ensuring transparency."
        },
        {
          "id": "media-literacy-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance goals with accountability, ethical considerations, and public impact."
        }
      ]
    },
    {
      "id": "media-literacy-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "media-literacy-501-l08-a1",
          "type": "practice",
          "title": "Building a Defense Brief",
          "content": "An animation of a presentation slide being built, with sections for 'Claim,' 'Evidence,' 'Uncertainty,' and 'Remediation Plan' being filled in."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-501-l08-c1",
          "kind": "practice",
          "title": "Assembling Your Defense Brief",
          "content": "In this activity, you will assemble a comprehensive defense brief for your capstone project. This brief must include a clear central claim, the evidence supporting it, a frank assessment of uncertainties, and potential pathways for remediation if your proposed solution fails. This is the foundation of a defensible recommendation."
        },
        {
          "id": "media-literacy-501-l08-c2",
          "kind": "recap",
          "title": "Rehearsing for the Expert Panel",
          "content": "To prepare for your final defense, you will rehearse responses to critiques from multiple expert perspectives, including technical, governance, and stakeholder viewpoints. This practice is crucial for building the confidence and communication skills needed to defend your work under rigorous cross-examination."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    },
    {
      "id": "media-literacy-501-l09",
      "title": "Checkpoint 3: Capstone Defense",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-501-l09-a1",
          "type": "image",
          "title": "Capstone Badge",
          "content": "A final capstone badge icon, symbolizing the integration of all learned skills: analysis, execution, governance, and defense."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-501-l09-q1",
          "text": "What is the primary function of a 'defense brief' in a high-stakes decision review?",
          "skillId": "media-literacy-501-skill-defense",
          "options": [
            {
              "id": "a",
              "text": "To present a conclusion without revealing the underlying evidence or assumptions."
            },
            {
              "id": "b",
              "text": "To persuasively argue for one position while ignoring all potential risks and tradeoffs."
            },
            {
              "id": "c",
              "text": "To transparently present a recommendation, including its evidence, assumptions, uncertainties, and risks."
            },
            {
              "id": "d",
              "text": "To provide a detailed history of the project without making a clear recommendation."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A strong defense brief is built on transparency, clearly articulating the full context of a recommendation, including its weaknesses and risks."
        },
        {
          "id": "media-literacy-501-l09-q2",
          "text": "Effective stakeholder impact analysis requires a leader to primarily focus on:",
          "skillId": "media-literacy-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The immediate benefits to the most powerful stakeholder group."
            },
            {
              "id": "b",
              "text": "The distribution of benefits, burdens, and risks across all affected groups, including long-term effects."
            },
            {
              "id": "c",
              "text": "Only the financial costs and benefits of a decision."
            },
            {
              "id": "d",
              "text": "Public relations messages that create a perception of fairness."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible governance requires a comprehensive analysis of how a decision's outcomes are distributed across all stakeholders and timescales."
        },
        {
          "id": "media-literacy-501-l09-q3",
          "text": "In an expert critique, what is the strongest way to respond to a question about uncertainty in your data?",
          "skillId": "media-literacy-501-skill-defense",
          "options": [
            {
              "id": "a",
              "text": "Dismiss the question by stating that all data has some uncertainty."
            },
            {
              "id": "b",
              "text": "Acknowledge the uncertainty, state its potential impact on your conclusion, and explain how you've accounted for it."
            },
            {
              "id": "c",
              "text": "Defend the data as perfect and without any limitations."
            },
            {
              "id": "d",
              "text": "Change the subject to a stronger part of your argument."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible position acknowledges uncertainty transparently and explains how it was factored into the decision-making process."
        }
      ]
    }
  ]
};
