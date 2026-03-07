import type { LearningModule } from "@/lib/modules/types";

export const public_health_601_Module: LearningModule = {
  "id": "public-health-601",
  "title": "Public Health Research and Leadership",
  "description": "Post-401 specialization in Public Health, focused on population risk modeling, intervention architecture, outcome equity analytics, and health governance and trust through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "public-health",
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
    "Apply advanced methods for population risk modeling in high-constraint environments",
    "Design robust systems for intervention architecture with measurable control gates",
    "Evaluate interventions in outcome equity analytics with research-grade rigor",
    "Operationalize health governance and trust with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "public-health-601-l01",
      "title": "Public Health Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-601-l01-a1",
          "type": "image",
          "title": "Foundational Pillars of Public Health Strategy",
          "content": "An infographic illustrating the interplay between Scope Design, Causal Modeling, and Evidence Thresholds."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Explore the advanced concepts of scope boundaries in Public Health. Focus on how to assess risks faced by different populations and design effective interventions to address those risks. Understanding these boundaries is critical for creating targeted health strategies that improve community well-being."
        },
        {
          "id": "public-health-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Map the causal pathways connecting different factors to health outcomes. Examine uncertainty ranges and system interdependencies. This foundational knowledge is crucial for planning effective health interventions that account for real-world complexity."
        },
        {
          "id": "public-health-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "Emphasize the importance of ensuring all claims are supported by measurable indicators. Learn to establish confidence bounds and set up review checkpoints to verify findings. This process is essential for maintaining the integrity and defensibility of public health research."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-601-l01-f1",
          "front": "Population Risk Modeling",
          "back": "A specialization axis requiring explicit assumptions and measurable constraints to forecast health outcomes."
        },
        {
          "id": "public-health-601-l01-f2",
          "front": "Intervention Architecture",
          "back": "The design of a public health program's execution, including control gates and feedback loops, that determines its reliability under stress."
        },
        {
          "id": "public-health-601-l01-f3",
          "front": "Outcome Equity Analytics",
          "back": "An evaluation discipline for identifying the distribution of benefits, costs, and side effects across different population segments."
        }
      ]
    },
    {
      "id": "public-health-601-l02",
      "title": "Public Health Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "public-health-601-l02-a1",
          "type": "practice",
          "title": "Intervention Workflow Template",
          "content": "A downloadable template for designing and stress-testing public health interventions with built-in control gates."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, design specialized workflows for public health practice. Conduct stress tests on these workflows by simulating adverse scenarios to evaluate their resilience. This hands-on experience is vital for building robust, real-world applications."
        },
        {
          "id": "public-health-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "Structure workflows to include critical checkpoints, criteria for rolling back decisions, and thresholds that trigger escalation. This architecture is crucial for ensuring that public health interventions are effective and responsive to changing conditions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-601-l02-act1",
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
      "id": "public-health-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-601-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review Sheet",
          "content": "A one-page summary of core concepts from Lessons 1 and 2, including risk modeling, intervention architecture, and control gates."
        }
      ],
      "questions": [
        {
          "id": "public-health-601-l03-q1",
          "text": "Which practice most improves the quality of population risk modeling?",
          "skillId": "skill-risk-modeling",
          "options": [
            {
              "id": "a",
              "text": "Proceed without a baseline or stated assumptions"
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
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit and measurable."
        },
        {
          "id": "public-health-601-l03-q2",
          "text": "A robust intervention architecture requires:",
          "skillId": "skill-intervention-architecture",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Ambiguous roles and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-implementation review"
            },
            {
              "id": "d",
              "text": "No rollback or fallback conditions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs ownership clarity, regular checkpoints, and threshold-driven governance."
        },
        {
          "id": "public-health-601-l03-q3",
          "text": "A defensible approach to outcome equity analytics includes:",
          "skillId": "skill-equity-analytics",
          "options": [
            {
              "id": "a",
              "text": "Anecdotes without a comparison group"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after outcomes are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult-to-measure populations from analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, comprehensive side-effect checks, and transparent disclosure of uncertainty."
        },
        {
          "id": "public-health-601-l03-q4",
          "text": "Mature health governance and trust systems connect:",
          "skillId": "skill-governance",
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
      "id": "public-health-601-l04",
      "title": "Public Health Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-601-l04-a1",
          "type": "mnemonic",
          "title": "Case Study Brief",
          "content": "A downloadable PDF detailing the City Health Taskforce case, including background, data sets, and key challenges."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "Analyze the role of a city health taskforce responsible for disease prevention, public communication, and resource allocation during an outbreak. Dive into the challenges, risk profiles, and governance boundaries that shape their decision-making process to understand the complexities of public health leadership."
        },
        {
          "id": "public-health-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "Introduce the tradeoff matrix, a tool for evaluating alternatives against multiple criteria such as effectiveness, feasibility, risk, equity, and implementation cost. This structured approach helps in making transparent and defensible decisions about public health strategies."
        },
        {
          "id": "public-health-601-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "Focus on mapping failure signatures to specific remediation actions. Discuss how to define measurable recovery triggers that signal when an intervention is off-track and requires adaptation. This is crucial for creating resilient strategies that improve public health outcomes over time."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-601-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured model for comparing alternative solutions across a set of competing priorities or criteria."
        },
        {
          "id": "public-health-601-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring pattern of data or events that indicates a predictable class of risk is materializing."
        },
        {
          "id": "public-health-601-l04-f3",
          "front": "Recovery Trigger",
          "back": "A pre-defined, measurable threshold that, when crossed, initiates a corrective action or contingency plan."
        }
      ]
    },
    {
      "id": "public-health-601-l05",
      "title": "Public Health Simulation and Defense Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "public-health-601-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "An image of the simulation interface where learners configure interventions, constraints, and escalation logic."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "Configure interventions, set constraints, and establish escalation logic for high-stakes scenarios. This practical experience helps develop skills in managing dynamic public health challenges and making decisions under pressure."
        },
        {
          "id": "public-health-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Adaptation",
          "content": "Review simulation outcomes, analyzing the intended gains, observed side effects, and any gaps in governance compliance. This reflective process is essential for refining strategies and fostering continuous improvement in public health practice."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Evaluate intervention options across population risk modeling and health governance priorities.",
          "instructions": [
            "Define your objective and boundary conditions first.",
            "Document the short- and long-term tradeoffs of your chosen path.",
            "Specify the metrics and triggers that would validate or invalidate your recommendation."
          ]
        }
      ]
    },
    {
      "id": "public-health-601-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-601-l06-a1",
          "type": "practice",
          "title": "Case Analysis Review Sheet",
          "content": "A summary of key concepts from the case study and simulation lessons, including tradeoff matrices and recovery design."
        }
      ],
      "questions": [
        {
          "id": "public-health-601-l06-q1",
          "text": "When using a tradeoff matrix to compare two interventions, what is the most critical first step?",
          "skillId": "skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Choose the intervention with the lowest immediate cost"
            },
            {
              "id": "b",
              "text": "Agree on a shared set of evaluation criteria and their relative importance"
            },
            {
              "id": "c",
              "text": "Select the option that is easiest to explain to the public"
            },
            {
              "id": "d",
              "text": "Pick the intervention that was successful in a different city"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible comparison requires establishing common, agreed-upon criteria before evaluating the options."
        },
        {
          "id": "public-health-601-l06-q2",
          "text": "In a simulation, if infection rates in a specific demographic unexpectedly triple, this represents a:",
          "skillId": "skill-equity-analytics",
          "options": [
            {
              "id": "a",
              "text": "Recovery trigger"
            },
            {
              "id": "b",
              "text": "Failure signature"
            },
            {
              "id": "c",
              "text": "Successful outcome"
            },
            {
              "id": "d",
              "text": "Pre-commit gate"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This pattern of adverse events is a failure signature, indicating a specific risk (e.g., inequitable impact) is materializing."
        },
        {
          "id": "public-health-601-l06-q3",
          "text": "What is the primary purpose of a 'debrief and adaptation' phase after a simulation?",
          "skillId": "skill-intervention-architecture",
          "options": [
            {
              "id": "a",
              "text": "To assign blame for poor outcomes"
            },
            {
              "id": "b",
              "text": "To prove the initial hypothesis was correct regardless of the data"
            },
            {
              "id": "c",
              "text": "To analyze results, identify gaps, and refine the intervention strategy"
            },
            {
              "id": "d",
              "text": "To immediately discard the entire strategy and start from scratch"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The debrief phase is a critical feedback loop for learning and improving the strategy based on evidence from the simulation."
        },
        {
          "id": "public-health-601-l06-q4",
          "text": "A city taskforce must choose between a fast, low-cost intervention with uncertain equity outcomes and a slower, more expensive one with proven equity. This is a classic example of:",
          "skillId": "skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "A scenario with no correct answer"
            },
            {
              "id": "b",
              "text": "A decision requiring explicit tradeoff analysis"
            },
            {
              "id": "c",
              "text": "A failure of causal modeling"
            },
            {
              "id": "d",
              "text": "An issue to be solved by better marketing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This situation forces a direct comparison between competing values (speed/cost vs. equity), which is the core of tradeoff analysis."
        }
      ]
    },
    {
      "id": "public-health-601-l07",
      "title": "Public Health Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "public-health-601-l07-a1",
          "type": "image",
          "title": "Accountability Architecture Diagram",
          "content": "A visual diagram showing the flow of decision traceability, stakeholder review rights, and remediation obligations."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Explore how to map the distribution of benefits and burdens among different stakeholder groups. Examine both immediate and delayed effects of public health decisions to ensure a comprehensive understanding of equity."
        },
        {
          "id": "public-health-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Define the architecture of accountability in public health. This includes ensuring decision traceability, upholding stakeholder rights to review, and fulfilling obligations to remediate negative impacts. These elements are vital for maintaining public trust and transparent governance."
        },
        {
          "id": "public-health-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Utilize a checklist to connect intervention outcomes with ethical considerations, policy adherence, and adaptive capacity. This tool helps leaders ensure their decisions promote positive, equitable, and sustainable public health impacts."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (benefits, costs, risks) are allocated across different populations and over various timescales."
        },
        {
          "id": "public-health-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record linking a decision to the evidence, rationale, and ownership behind it."
        },
        {
          "id": "public-health-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance objectives with accountability, ethical duties, and public trust."
        }
      ]
    },
    {
      "id": "public-health-601-l08",
      "title": "Public Health Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "public-health-601-l08-a1",
          "type": "practice",
          "title": "Defense Brief Template",
          "content": "A structured document template for assembling claims, evidence, uncertainty analysis, and remediation plans for the capstone defense."
        }
      ],
      "chunks": [
        {
          "id": "public-health-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Collaborate to create a detailed defense brief. This brief must include well-supported claims, corroborating evidence, a transparent assessment of uncertainties, and clear pathways for remediation. This exercise hones critical thinking and communication skills."
        },
        {
          "id": "public-health-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Practice responding to critiques from multiple perspectives, including technical experts, governance representatives, and community stakeholders. This rehearsal is crucial for building confidence and learning to defend complex positions in a professional setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your specialization recommendations under adversarial cross-examination from a simulated panel of experts."
        }
      ]
    },
    {
      "id": "public-health-601-l09",
      "title": "Checkpoint 3: Capstone Assessment",
      "type": "quiz",
      "duration": 12,
      "learningAids": [
        {
          "id": "public-health-601-l09-a1",
          "type": "practice",
          "title": "Full Module Review Sheet",
          "content": "A comprehensive review sheet covering all key concepts from the module, from risk modeling to governance and defense."
        }
      ],
      "questions": [
        {
          "id": "public-health-601-l09-q1",
          "text": "What is the primary goal of creating an 'accountability architecture' in public health governance?",
          "skillId": "skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To increase the speed of all decisions"
            },
            {
              "id": "b",
              "text": "To ensure decisions are transparent, traceable, and subject to review"
            },
            {
              "id": "c",
              "text": "To centralize all decision-making power in a single leader"
            },
            {
              "id": "d",
              "text": "To eliminate the need for stakeholder feedback"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Accountability architecture is designed to build trust by making the decision-making process transparent, auditable, and open to stakeholder review and remediation."
        },
        {
          "id": "public-health-601-l09-q2",
          "text": "When defending a recommendation to an expert panel, what is the most effective way to address uncertainty?",
          "skillId": "skill-defense",
          "options": [
            {
              "id": "a",
              "text": "Ignore it and present all findings as certain"
            },
            {
              "id": "b",
              "text": "Acknowledge it, quantify it with confidence bounds, and explain its impact on the recommendation"
            },
            {
              "id": "c",
              "text": "Blame the uncertainty on poor data from other departments"
            },
            {
              "id": "d",
              "text": "Suggest that uncertainty makes any decision impossible"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong defense involves transparently acknowledging and quantifying uncertainty, which builds credibility and shows analytical rigor."
        },
        {
          "id": "public-health-601-l09-q3",
          "text": "A 'responsible leadership checklist' connects which three domains?",
          "skillId": "skill-leadership",
          "options": [
            {
              "id": "a",
              "text": "Speed, cost, and popularity"
            },
            {
              "id": "b",
              "text": "Outcomes, ethics, and policy adherence"
            },
            {
              "id": "c",
              "text": "Technology, marketing, and fundraising"
            },
            {
              "id": "d",
              "text": "Individual preference, historical precedent, and media coverage"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible leadership requires balancing the achievement of desired outcomes with ethical duties and compliance with established governance."
        },
        {
          "id": "public-health-601-l09-q4",
          "text": "Connecting population risk modeling (L01) to stakeholder impact distribution (L07) allows a leader to:",
          "skillId": "skill-risk-modeling",
          "options": [
            {
              "id": "a",
              "text": "Focus only on the majority population"
            },
            {
              "id": "b",
              "text": "Forecast not just overall risk, but how that risk is distributed across different communities"
            },
            {
              "id": "c",
              "text": "Create a single intervention that works identically for everyone"
            },
            {
              "id": "d",
              "text": "Prove that all risks are distributed equally"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This synthesis of skills allows for a more equitable approach, moving from a simple overall risk assessment to a nuanced understanding of how different groups are affected."
        }
      ]
    }
  ]
};
