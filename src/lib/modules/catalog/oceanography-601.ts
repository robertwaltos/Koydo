import type { LearningModule } from "@/lib/modules/types";

export const oceanography_601_Module: LearningModule = {
  "id": "oceanography-601",
  "title": "Oceanography Research and Leadership",
  "description": "A post-401 specialization in Oceanography focused on diagnosing ocean systems, forecasting marine risks, analyzing resource-climate tradeoffs, and implementing stewardship governance through advanced case studies, simulations, and defense-based checkpoints.",
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
    "Apply advanced diagnostic methods to analyze complex ocean systems.",
    "Design robust forecasting systems for marine risks with measurable quality controls.",
    "Evaluate resource-climate tradeoff interventions with research-grade rigor.",
    "Implement stewardship policies with clear accountability and escalation pathways.",
    "Lead cross-functional decision reviews, communicating tradeoffs and uncertainty effectively.",
    "Defend research recommendations under expert critique using evidence and uncertainty analysis."
  ],
  "lessons": [
    {
      "id": "oceanography-601-l01",
      "title": "Advanced Foundations in Ocean Systems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "oceanography-601-l01-a1",
          "type": "image",
          "title": "Ocean System Interconnections",
          "content": "A diagram showing the interconnectedness of physical, chemical, and biological systems in the ocean, highlighting key variables for diagnostic analysis."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-601-l01-c1",
          "kind": "concept",
          "title": "Defining Scope and Boundaries",
          "content": "This lesson introduces the advanced scope of modern oceanography. We will learn to diagnose the health of complex ocean systems by defining clear analytical boundaries and understanding their core functions. We will also explore methods for forecasting marine risks, such as pollution events or climate change impacts, which is essential for protecting marine ecosystems and ensuring their sustainability."
        },
        {
          "id": "oceanography-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Effective intervention requires understanding the connections between different factors in an ocean system. We will practice mapping these causal pathways, identifying system dependencies, and quantifying ranges of uncertainty. This modeling process is critical for planning robust and effective management strategies in a constantly changing environment."
        },
        {
          "id": "oceanography-601-l01-c3",
          "kind": "recap",
          "title": "Establishing Evidence Thresholds",
          "content": "In advanced research, all claims must be supported by verifiable evidence. We will recap the importance of using measurable indicators, establishing statistical confidence bounds for our findings, and implementing review checkpoints to ensure all conclusions are reliable, accurate, and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-601-l01-f1",
          "front": "Ocean System Diagnostics",
          "back": "The systematic analysis of an ocean environment's condition by defining explicit assumptions, constraints, and measurable indicators."
        },
        {
          "id": "oceanography-601-l01-f2",
          "front": "Marine Risk Forecasting",
          "back": "The process of predicting future threats to marine ecosystems, such as harmful algal blooms or deoxygenation events, using data-driven models."
        },
        {
          "id": "oceanography-601-l01-f3",
          "front": "Resource-Climate Tradeoff Analysis",
          "back": "A structured evaluation method for identifying the benefits, costs, and side effects of interventions that affect both natural resources and climate outcomes."
        }
      ]
    },
    {
      "id": "oceanography-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "oceanography-601-l02-a1",
          "type": "practice",
          "title": "Workflow Design Template",
          "content": "An interactive template for designing a research workflow, including stages for data intake, analysis, quality control checkpoints, and reporting."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Testing",
          "content": "In this interactive lab, you will design a specialized workflow to address a specific oceanographic challenge, such as monitoring coastal erosion. You will then conduct stress tests by simulating adverse scenarios, like equipment failure or unexpected storm surges, to evaluate the resilience and reliability of your design."
        },
        {
          "id": "oceanography-601-l02-c2",
          "kind": "recap",
          "title": "Workflow Management and Quality Control",
          "content": "We will recap the importance of integrating quality control gates into any research workflow. These include predefined checkpoints for peer review, clear criteria for halting or rolling back a process if data is flawed, and threshold-based escalation procedures to alert leadership when significant anomalies are detected."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each quality control mechanism with its primary benefit for research reliability and governance.",
          "pairs": [
            {
              "left": "Initial Review Gate",
              "right": "Prevents avoidable downstream failures by catching errors early."
            },
            {
              "left": "Rollback Trigger",
              "right": "Limits the impact of unforeseen negative outcomes."
            },
            {
              "left": "Baseline Data Dashboard",
              "right": "Supports defensible attribution of an intervention's impact."
            },
            {
              "left": "Post-Project Retrospective",
              "right": "Improves the quality of future project planning and execution."
            }
          ]
        }
      ]
    },
    {
      "id": "oceanography-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-601-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review",
          "content": "A one-page summary of key terms and concepts from Lessons 1 and 2, including causal modeling, evidence thresholds, and workflow controls."
        }
      ],
      "questions": [
        {
          "id": "oceanography-601-l03-q1",
          "text": "Which practice most improves the quality of ocean system diagnostics?",
          "skillId": "oceanography-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or stated assumptions"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators upfront"
            },
            {
              "id": "c",
              "text": "Optimizing only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and potential edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced analytical quality improves when assumptions, constraints, and metrics are made explicit from the start."
        },
        {
          "id": "oceanography-601-l03-q2",
          "text": "A robust operational framework for marine risk forecasting requires:",
          "skillId": "oceanography-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, a regular checkpoint cadence, and defined escalation thresholds"
            },
            {
              "id": "b",
              "text": "Vague role clarity and frequent, undocumented process changes"
            },
            {
              "id": "c",
              "text": "Eliminating retrospectives or post-project reviews"
            },
            {
              "id": "d",
              "text": "No pre-planned conditions for rolling back a flawed process"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced operations require clear ownership and threshold-driven governance to manage complexity and risk."
        },
        {
          "id": "oceanography-601-l03-q3",
          "text": "A defensible approach to resource-climate tradeoff analysis includes:",
          "skillId": "oceanography-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Relying on anecdotes without systematic comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and explicit uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing the success criteria after the results are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult or inconvenient scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, a thorough check for unintended side effects, and honest disclosure of uncertainty."
        },
        {
          "id": "oceanography-601-l03-q4",
          "text": "Mature stewardship governance systems effectively connect:",
          "skillId": "oceanography-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy goals, measurable controls, and clear corrective action pathways"
            },
            {
              "id": "b",
              "text": "Policy language that has no measurable enforcement mechanism"
            },
            {
              "id": "c",
              "text": "Ambitious targets without clear ownership or an escalation plan"
            },
            {
              "id": "d",
              "text": "Operational activities that lack transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance creates an operational link between the stated intent of a policy, how it is measured, and what happens when it fails."
        }
      ]
    },
    {
      "id": "oceanography-601-l04",
      "title": "Advanced Case Analysis: Coastal Zone Management",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "oceanography-601-l04-a1",
          "type": "image",
          "title": "Stakeholder Map",
          "content": "A visual map of a coastal community showing different stakeholders (fisheries, tourism, conservation groups, residents) and their primary interests and concerns."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-601-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "We will analyze the case of a coastal governance council tasked with balancing the economic viability of local fisheries against the ecological threats of ocean warming and disaster preparedness. As we explore this case, we will map the council's operational constraints, identify different classes of risk, and define the governance boundaries that shape their decision-making."
        },
        {
          "id": "oceanography-601-l04-c2",
          "kind": "concept",
          "title": "Using a Tradeoff Matrix",
          "content": "To structure the council's decision, we will use a tradeoff matrix. This tool helps compare different policy alternatives by scoring them against a common set of criteria, such as ecological effectiveness, economic feasibility, social equity, and implementation cost. This systematic comparison allows for a more transparent and defensible final recommendation."
        },
        {
          "id": "oceanography-601-l04-c3",
          "kind": "recap",
          "title": "Designing for Recovery and Adaptation",
          "content": "In our recap, we will discuss how to design policies that can adapt to failure. This involves linking predictable problems (e.g., a sudden fish stock decline) to pre-planned corrective actions. We will also identify measurable recovery triggers—clear signals that indicate whether an intervention has succeeded or if a new approach is needed."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-601-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured decision-making tool for comparing multiple options across a range of competing priorities and criteria."
        },
        {
          "id": "oceanography-601-l04-f2",
          "front": "Failure Signature",
          "back": "A pattern of data or a specific indicator that signals a known type of system failure, such as the chemical signature of an industrial pollutant."
        },
        {
          "id": "oceanography-601-l04-f3",
          "front": "Recovery Trigger",
          "back": "A measurable threshold that, when met, initiates a pre-planned corrective action or confirms that a system has returned to a stable state."
        }
      ]
    },
    {
      "id": "oceanography-601-l05",
      "title": "Simulation and Defense Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "oceanography-601-l05-a1",
          "type": "image",
          "title": "Simulation Interface",
          "content": "A screenshot of a simulation tool's dashboard, showing adjustable parameters for a coastal management scenario (e.g., fishing quotas, sea wall height, MPA size)."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-601-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive session, you will use a simulation tool to test different policy interventions for the coastal governance case study. You will configure variables, set constraints based on the case, and define the escalation logic for high-stakes scenarios, applying your knowledge in a dynamic, hands-on environment."
        },
        {
          "id": "oceanography-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Adaptation",
          "content": "After running the simulations, we will debrief the outcomes as a group. We will analyze the projected benefits, unintended side effects, and any gaps in governance that the simulation revealed. This reflective practice is crucial for refining recommendations and improving real-world ocean management strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Evaluate intervention options for the coastal zone case study, balancing ocean system health and stewardship governance priorities.",
          "instructions": [
            "First, define your primary objective and boundary conditions.",
            "Document the short-term and long-term tradeoffs of your chosen intervention.",
            "Specify the key metrics and triggers you would use to validate your recommendation's success."
          ]
        }
      ]
    },
    {
      "id": "oceanography-601-l06",
      "title": "Checkpoint 2: Research and Governance Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-601-l06-a1",
          "type": "practice",
          "title": "Case Study Decision Framework",
          "content": "A summary of the decision-making framework used in the case analysis and simulation, including the tradeoff matrix and recovery triggers."
        }
      ],
      "questions": [
        {
          "id": "oceanography-601-l06-q1",
          "text": "When using a tradeoff matrix to evaluate policy options, what is the primary goal?",
          "skillId": "oceanography-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect in all categories"
            },
            {
              "id": "b",
              "text": "To systematically compare alternatives across shared, explicit criteria"
            },
            {
              "id": "c",
              "text": "To select the option that is cheapest, regardless of other factors"
            },
            {
              "id": "d",
              "text": "To create a complex model that is difficult for stakeholders to understand"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is designed for transparent, systematic comparison of options against a consistent set of criteria, making the rationale for a decision clear."
        },
        {
          "id": "oceanography-601-l06-q2",
          "text": "In the coastal management case study, identifying a 'failure signature' like rising water toxicity would be most useful for:",
          "skillId": "oceanography-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame after a disaster has already occurred"
            },
            {
              "id": "b",
              "text": "Ignoring the problem until it becomes a crisis"
            },
            {
              "id": "c",
              "text": "Activating a pre-planned remediation response quickly"
            },
            {
              "id": "d",
              "text": "Proving that the initial policy was flawless"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A failure signature is a pre-identified indicator that allows for a rapid, planned response to a known risk, rather than a reactive, ad-hoc one."
        },
        {
          "id": "oceanography-601-l06-q3",
          "text": "A key lesson from running policy simulations is that:",
          "skillId": "oceanography-601-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Simulations can perfectly predict the future with no uncertainty"
            },
            {
              "id": "b",
              "text": "Well-intentioned interventions can have unexpected negative side effects"
            },
            {
              "id": "c",
              "text": "The simplest policy is always the most effective one"
            },
            {
              "id": "d",
              "text": "Stakeholder concerns are irrelevant if the model works"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations are powerful tools for exploring potential unintended consequences and side effects that may not be obvious without dynamic modeling."
        },
        {
          "id": "oceanography-601-l06-q4",
          "text": "When presenting a recommendation from a case analysis, what is the most critical element to communicate to stakeholders?",
          "skillId": "oceanography-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only the positive outcomes, omitting all risks and tradeoffs"
            },
            {
              "id": "b",
              "text": "The technical data in a way that only experts can understand"
            },
            {
              "id": "c",
              "text": "The key tradeoffs, underlying assumptions, and range of uncertainty"
            },
            {
              "id": "d",
              "text": "A single, confident conclusion without any supporting evidence"
            }
          ],
          "correctOptionId": "c",
          "explanation": "For responsible governance and leadership, it is crucial to communicate not just the recommendation, but also the tradeoffs considered, the assumptions made, and the uncertainty involved."
        }
      ]
    },
    {
      "id": "oceanography-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "oceanography-601-l07-a1",
          "type": "image",
          "title": "Accountability Framework",
          "content": "A flowchart illustrating a governance structure with clear lines of accountability, including points for stakeholder review, public comment, and formal remediation requests."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-601-l07-c1",
          "kind": "concept",
          "title": "Analyzing Stakeholder Impact Distribution",
          "content": "Responsible governance requires understanding how decisions affect different groups. We will learn to map the distribution of impacts—including benefits, burdens, and delayed effects—across all relevant stakeholders. This analysis is essential for promoting equitable outcomes and building public trust."
        },
        {
          "id": "oceanography-601-l07-c2",
          "kind": "concept",
          "title": "Frameworks for Accountability",
          "content": "This section explores the architecture of accountability in governance. Key components include making decision-making processes traceable, ensuring stakeholders have rights to review and appeal, and defining clear obligations for remediation when policies cause harm. These elements are vital for maintaining institutional legitimacy."
        },
        {
          "id": "oceanography-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We will conclude with a practical checklist for responsible leadership. This tool helps decision-makers connect desired outcomes with ethical considerations, ensure compliance with governance policies, and maintain the flexibility to adapt to new information or changing circumstances."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the positive and negative outcomes of a decision are allocated across different populations and over various timescales."
        },
        {
          "id": "oceanography-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of a decision-making process, documenting the evidence used, who was responsible, and the rationale behind the final choice."
        },
        {
          "id": "oceanography-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance goals with accountability to stakeholders and core ethical principles."
        }
      ]
    },
    {
      "id": "oceanography-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "oceanography-601-l08-a1",
          "type": "practice",
          "title": "Defense Brief Template",
          "content": "A structured slide deck template for the capstone defense, with sections for the research claim, supporting evidence, uncertainty analysis, and proposed remediation pathways."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-601-l08-c1",
          "kind": "practice",
          "title": "Assembling the Defense Brief",
          "content": "In this interactive workshop, you will assemble a comprehensive defense brief for your capstone recommendation. This brief must clearly state your claims, present the supporting evidence, define the bounds of uncertainty, and propose pathways for remediation if your intervention fails to perform as expected."
        },
        {
          "id": "oceanography-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "To conclude, you will rehearse defending your brief against critiques from an expert panel. This session prepares you to answer challenging questions related to your technical methods, your governance proposal, and the diverse perspectives of affected stakeholders, building confidence for your final presentation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your capstone recommendation against adversarial cross-examination from a simulated panel of scientific, economic, and community experts."
        }
      ]
    }
  ]
};
