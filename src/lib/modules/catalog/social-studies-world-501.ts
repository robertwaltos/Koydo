import type { LearningModule } from "@/lib/modules/types";

export const social_studies_world_501_Module: LearningModule = {
  "id": "social-studies-world-501",
  "title": "Advanced Methods in Global Systems Analysis",
  "description": "A specialization studio for analyzing complex global systems. This course focuses on advanced techniques for diagnosing social systems, designing effective interventions, analyzing impacts and tradeoffs, and applying principles of governance and leadership through rigorous case studies, simulations, and capstone defenses.",
  "subject": "Social Studies World",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "social-studies-world",
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
    "Apply advanced diagnostic methods to analyze complex social systems in high-constraint environments.",
    "Design robust operational plans for social interventions with measurable checkpoints and controls.",
    "Evaluate the impacts and tradeoffs of interventions with research-grade analytical rigor.",
    "Develop and implement governance frameworks with clear accountability and escalation procedures.",
    "Lead cross-functional decision reviews, clearly communicating tradeoffs and uncertainties.",
    "Defend policy and intervention recommendations against expert critique using evidence-based arguments."
  ],
  "lessons": [
    {
      "id": "social-studies-world-501-l01",
      "title": "Foundations of Systems Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "social-studies-world-501-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "social-studies-world-501-l01-c1",
          "kind": "concept",
          "title": "Defining Scope and Boundaries",
          "content": "To analyze complex global issues, we must first define the scope of our analysis. This lesson introduces how to set clear boundaries for a system, focusing on what is included and excluded. We will learn to diagnose the key components of a social system and their interactions, which is the first step toward designing effective and targeted interventions. Understanding scope is critical for connecting high-level theories to practical decisions.",
          "visualPrompts": [
            "A diagram of a complex social network (like a city's economy) with a dotted line drawn around a specific subsystem to be analyzed, illustrating a 'scope boundary'.",
            "An animation showing how expanding or contracting the scope of analysis changes the key factors being considered for a problem like public health."
          ]
        },
        {
          "id": "social-studies-world-501-l01-c2",
          "kind": "concept",
          "title": "Modeling Causality and Uncertainty",
          "content": "This section focuses on mapping the causal pathways that connect actions to outcomes. We will explore how to identify potential cause-and-effect relationships and, just as importantly, how to quantify the uncertainty surrounding them. This foundational skill is crucial for planning effective interventions, as it allows us to anticipate a range of potential outcomes and prepare for interdependencies between different systems.",
          "visualPrompts": [
            "A flowchart or causal loop diagram showing how a new policy leads to multiple direct and indirect outcomes, with some arrows dashed to represent uncertainty.",
            "A graph showing a predicted outcome with a 'cone of uncertainty' that widens over time."
          ]
        },
        {
          "id": "social-studies-world-501-l01-c3",
          "kind": "recap",
          "title": "Establishing Evidence Thresholds",
          "content": "In this recap, we emphasize that all claims must be supported by measurable evidence. We will learn to establish confidence bounds to understand the reliability of our data and set up review checkpoints to ensure our conclusions are well-founded. This practice maintains a high standard of rigor and accountability in any analysis.",
          "visualPrompts": [
            "An infographic showing a claim at the top, with branches leading to different pieces of measurable evidence (statistics, survey results), each with a 'confidence score' or a +/- percentage."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-world-501-l01-f1",
          "front": "Systems Diagnostics",
          "back": "The structured process of analyzing a social system by defining its boundaries, key components, and their interactions, while making assumptions explicit."
        },
        {
          "id": "social-studies-world-501-l01-f2",
          "front": "Operational Design",
          "back": "The architecture for implementing an intervention, including defining roles, processes, and controls to ensure reliability under stress."
        },
        {
          "id": "social-studies-world-501-l01-f3",
          "front": "Tradeoff Analysis",
          "back": "The discipline of evaluating and comparing the intended benefits of an action against its potential negative consequences and hidden costs."
        }
      ]
    },
    {
      "id": "social-studies-world-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "social-studies-world-501-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "social-studies-world-501-l02-c1",
          "kind": "practice",
          "title": "Designing and Stress-Testing Methods",
          "content": "In this interactive lab, you will design a structured analytical workflow for a given social problem. After designing your method, you will stress-test it against unexpected challenges and edge cases. This practice is essential for building robust, adaptable plans that can withstand real-world pressures and complexities.",
          "visualPrompts": [
            "An animation of a workflow diagram being built step-by-step on a digital whiteboard.",
            "A visual of the workflow being 'hit' by a 'stress event' (an unexpected variable), showing how the system adapts or breaks."
          ]
        },
        {
          "id": "social-studies-world-501-l02-c2",
          "kind": "recap",
          "title": "Designing Review and Control Processes",
          "content": "This recap covers how to integrate control gates, or formal review checkpoints, into your workflows. We will discuss the importance of establishing clear criteria for proceeding, rolling back to a previous stage if necessary, and escalating issues when certain thresholds are met. These processes ensure that projects stay on track and are managed responsibly.",
          "visualPrompts": [
            "A project timeline with key decision points marked as 'gates'. An icon shows a 'go/no-go' decision at each gate, with an arrow illustrating a 'rollback' to a previous stage."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "social-studies-world-501-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Controls to Outcomes",
          "description": "Match each governance control with its primary purpose in ensuring project reliability.",
          "pairs": [
            {
              "left": "Initial Proposal Review",
              "right": "Prevents avoidable downstream failures by vetting the plan."
            },
            {
              "left": "Contingency Plan Activation",
              "right": "Limits the negative impact of adverse outcomes."
            },
            {
              "left": "Performance Dashboard",
              "right": "Supports defensible analysis of a project's impact."
            },
            {
              "left": "Post-Project Retrospective",
              "right": "Improves the quality of future decisions and projects."
            }
          ]
        }
      ]
    },
    {
      "id": "social-studies-world-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "social-studies-world-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "social-studies-world-501-l03-q1",
          "text": "What is the most effective first step for improving decision quality when diagnosing a complex social system?",
          "skillId": "social-studies-world-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without a baseline or stated assumptions"
            },
            {
              "id": "b",
              "text": "Define clear assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimize only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and potential edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit from the start."
        },
        {
          "id": "social-studies-world-501-l03-q2",
          "text": "A robust operational plan for a social intervention requires:",
          "skillId": "social-studies-world-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, a regular review cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "Vague roles and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-implementation review"
            },
            {
              "id": "d",
              "text": "No contingency or fallback plans"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution requires clear ownership, regular reviews, and threshold-driven governance to manage complexity."
        },
        {
          "id": "social-studies-world-501-l03-q3",
          "text": "A defensible approach to impact and tradeoff analysis includes:",
          "skillId": "social-studies-world-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotes without a comparison group"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and acknowledging uncertainty"
            },
            {
              "id": "c",
              "text": "Changing success criteria after the results are known"
            },
            {
              "id": "d",
              "text": "Excluding difficult or inconvenient scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, checks for unintended side-effects, and transparently discloses uncertainty."
        },
        {
          "id": "social-studies-world-501-l03-q4",
          "text": "A mature governance system effectively connects:",
          "skillId": "social-studies-world-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy goals, measurable controls, and clear paths for remediation"
            },
            {
              "id": "b",
              "text": "Policy language with no measurable way to enforce it"
            },
            {
              "id": "c",
              "text": "Ambitious targets without clear ownership or escalation plans"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability for outcomes"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance creates an operational link between the stated intent, how it's measured, and what happens when it fails."
        },
        {
          "id": "social-studies-world-501-l03-q5",
          "text": "What is the best way to compare competing interventions in a complex system?",
          "skillId": "social-studies-world-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Choose the option with the most persuasive narrative"
            },
            {
              "id": "b",
              "text": "Score alternatives against shared metrics, side effects, and uncertainty"
            },
            {
              "id": "c",
              "text": "Switch the evaluation metrics after the results are in"
            },
            {
              "id": "d",
              "text": "Prioritize whichever option is described in the shortest memo"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible comparisons require scoring all options against the same criteria, including potential side-effects and known uncertainties."
        },
        {
          "id": "social-studies-world-501-l03-q6",
          "text": "In a high-stakes project, which communication protocol is strongest?",
          "skillId": "social-studies-world-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Broadcast conclusions without sharing the underlying assumptions"
            },
            {
              "id": "b",
              "text": "Publish assumptions, confidence ranges, and decision checkpoints to stakeholders"
            },
            {
              "id": "c",
              "text": "Share only the final outcomes after the project is complete"
            },
            {
              "id": "d",
              "text": "Limit all updates to a single, informal channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Strong, high-stakes communication requires transparency about assumptions, confidence levels, and key decision points."
        },
        {
          "id": "social-studies-world-501-l03-q7",
          "text": "A mature remediation loop for when things go wrong should prioritize:",
          "skillId": "social-studies-world-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame without updating the system"
            },
            {
              "id": "b",
              "text": "Root-cause analysis, control redesign, and measurable follow-up"
            },
            {
              "id": "c",
              "text": "Implementing a one-time fix without retesting the system"
            },
            {
              "id": "d",
              "text": "Closing the issue after a certain amount of time has passed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature remediation focuses on learning and system improvement by linking root causes to control redesign and verification."
        },
        {
          "id": "social-studies-world-501-l03-q8",
          "text": "Which portfolio decision rule best balances performance and resilience?",
          "skillId": "social-studies-world-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains regardless of concentration risk"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and having contingencies"
            },
            {
              "id": "c",
              "text": "Ignore the possibility of correlated failure modes"
            },
            {
              "id": "d",
              "text": "Commit all resources to a single, irreversible pathway"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A balanced portfolio of interventions combines optimizing for the most likely positive outcome with explicit risk limits and contingency plans."
        }
      ]
    },
    {
      "id": "social-studies-world-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "social-studies-world-501-l04-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "social-studies-world-501-l04-c1",
          "kind": "concept",
          "title": "Analyzing Competing Constraints",
          "content": "Real-world problems rarely have perfect solutions. This lesson explores how to structure a case analysis around competing constraints, such as balancing economic growth with environmental protection. We will analyze the impacts of various decisions and learn to articulate the tradeoffs we must consider, appreciating the complexity of real-world social systems.",
          "visualPrompts": [
            "A visual of a balancing scale, with 'Economic Growth' on one side and 'Environmental Protection' on the other, representing competing constraints in a policy scenario."
          ]
        },
        {
          "id": "social-studies-world-501-l04-c2",
          "kind": "practice",
          "title": "Framing and Evaluating Tradeoffs",
          "content": "In this practice session, you will learn to compare different policy options by evaluating them across multiple dimensions. These include not just cost and benefit, but also safety, reliability, equity, and governance. By analyzing these factors, you will develop a deeper understanding of how to make informed decisions that balance various priorities.",
          "visualPrompts": [
            "A comparison table (matrix) with different policy options as rows and evaluation criteria (safety, cost, equity) as columns, with cells filled with ratings or brief notes."
          ]
        },
        {
          "id": "social-studies-world-501-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Framework",
          "content": "In our recap, we introduce a structured framework for presenting recommendations. Each recommendation should include a clear outline of the core assumptions, supporting evidence, risk controls, and fallback plans. This structured approach ensures that your decisions are well-supported and that you have strategies in place to address potential challenges.",
          "visualPrompts": [
            "A template of a decision memo with clear headings: 1. Recommendation, 2. Key Assumptions, 3. Supporting Evidence, 4. Risk Analysis, 5. Contingency Plan."
          ]
        }
      ]
    },
    {
      "id": "social-studies-world-501-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "social-studies-world-501-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "social-studies-world-501-l05-c1",
          "kind": "practice",
          "title": "Managing a Live Scenario",
          "content": "In this interactive clinic, you will operate controls within a live policy simulation, such as adjusting budgets or regulations in a model of a city. You will need to balance performance metrics with governance constraints, ensuring your actions align with established guidelines. This experience will enhance your ability to make sound decisions under pressure.",
          "visualPrompts": [
            "A dashboard interface from a simulation (e.g., SimCity-style) showing key metrics like unemployment, pollution, and public happiness, with levers the user can adjust."
          ]
        },
        {
          "id": "social-studies-world-501-l05-c2",
          "kind": "recap",
          "title": "Documenting Decisions and Adapting Plans",
          "content": "In our recap, we discuss the importance of adaptive response. This involves making and documenting decisions in a way that maintains traceability and accountability. By ensuring all changes can be tracked and justified, you will learn how to manage evolving, complex situations while maintaining a clear record of your actions and rationale.",
          "visualPrompts": [
            "An animated diagram showing a decision log. As a decision is made in the simulation, a new entry automatically appears in the log with the rationale and expected outcome."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "social-studies-world-501-l05-act1",
          "type": "scenario",
          "title": "High-Stakes Scenario Simulation",
          "description": "Manage a high-pressure social policy scenario, making decisions and adjusting controls under conditions of uncertainty and time pressure."
        }
      ]
    },
    {
      "id": "social-studies-world-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "social-studies-world-501-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "social-studies-world-501-l06-q1",
          "text": "In advanced case analysis, what is the primary purpose of framing a problem with explicit constraints and success criteria?",
          "skillId": "social-studies-world-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "To make the problem seem more complicated"
            },
            {
              "id": "b",
              "text": "To create a clear, objective basis for evaluating and comparing solutions"
            },
            {
              "id": "c",
              "text": "To guarantee that only one possible solution exists"
            },
            {
              "id": "d",
              "text": "To avoid discussing difficult tradeoffs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit constraints and criteria provide a stable, objective framework for rigorously comparing different approaches to a problem."
        },
        {
          "id": "social-studies-world-501-l06-q2",
          "text": "A resilient strategy developed from a case analysis should always include:",
          "skillId": "social-studies-world-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "A primary plan along with contingency plans and fallback options"
            },
            {
              "id": "b",
              "text": "A single, unchangeable course of action"
            },
            {
              "id": "c",
              "text": "A plan that ignores potential risks to appear more confident"
            },
            {
              "id": "d",
              "text": "A recommendation without any supporting evidence"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in strategic planning comes from anticipating potential failures and having pre-defined fallback and contingency plans."
        },
        {
          "id": "social-studies-world-501-l06-q3",
          "text": "During a live policy simulation, you notice an unexpected negative outcome. What is the best immediate action?",
          "skillId": "social-studies-world-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Ignore the outcome and hope it resolves itself"
            },
            {
              "id": "b",
              "text": "Analyze the new data, document the event, and consider adjusting your strategy"
            },
            {
              "id": "c",
              "text": "End the simulation immediately to avoid a poor score"
            },
            {
              "id": "d",
              "text": "Double down on your initial strategy without re-evaluating"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective management in a dynamic situation involves analyzing new information and adapting your plan, while maintaining a clear record."
        },
        {
          "id": "social-studies-world-501-l06-q4",
          "text": "What is the primary learning benefit of using interactive simulations over static case studies?",
          "skillId": "social-studies-world-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "They allow you to experience the consequences of your decisions in a dynamic system"
            },
            {
              "id": "b",
              "text": "They are always easier and have a single correct answer"
            },
            {
              "id": "c",
              "text": "They remove the need to understand the underlying theory"
            },
            {
              "id": "d",
              "text": "They perfectly predict the future with 100% accuracy"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Simulations excel at teaching how systems react to interventions over time, providing feedback that a static case study cannot."
        },
        {
          "id": "social-studies-world-501-l06-q5",
          "text": "When evaluating policy options in a case study, why is it crucial to analyze dimensions like equity and safety, in addition to cost?",
          "skillId": "social-studies-world-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Because they are unimportant and can be ignored"
            },
            {
              "id": "b",
              "text": "To identify hidden costs and unintended consequences that affect different stakeholders"
            },
            {
              "id": "c",
              "text": "To make the analysis longer and more complex"
            },
            {
              "id": "d",
              "text": "Because cost is the only metric that truly matters"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A rigorous analysis must account for non-financial impacts, as these often represent significant tradeoffs and affect public trust and sustainability."
        },
        {
          "id": "social-studies-world-501-l06-q6",
          "text": "In a simulation, how should a leader communicate a decision made under high uncertainty?",
          "skillId": "social-studies-world-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "By presenting the decision as a guaranteed success"
            },
            {
              "id": "b",
              "text": "By clearly stating the recommendation, the rationale, and the known uncertainties"
            },
            {
              "id": "c",
              "text": "By avoiding communication until the outcome is certain"
            },
            {
              "id": "d",
              "text": "By blaming others for the uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective leadership involves transparent communication about not just the decision, but also the risks and uncertainties involved."
        },
        {
          "id": "social-studies-world-501-l06-q7",
          "text": "A strong decision memo based on a case analysis should always include:",
          "skillId": "social-studies-world-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Only the final recommendation without any reasoning"
            },
            {
              "id": "b",
              "text": "A clear recommendation, key evidence, risk analysis, and a contingency plan"
            },
            {
              "id": "c",
              "text": "A long, narrative story without structured points"
            },
            {
              "id": "d",
              "text": "A list of opinions without any supporting data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The decision memo framework ensures a recommendation is well-supported, risks are considered, and a fallback plan exists."
        },
        {
          "id": "social-studies-world-501-l06-q8",
          "text": "If a simulation reveals that a planned intervention has severe, unintended consequences for a specific group, what does this most likely indicate a failure of?",
          "skillId": "social-studies-world-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "The simulation being poorly designed"
            },
            {
              "id": "b",
              "text": "The initial stakeholder and impact analysis"
            },
            {
              "id": "c",
              "text": "The group that was negatively affected"
            },
            {
              "id": "d",
              "text": "The need for any intervention at all"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Such outcomes often stem from an incomplete initial analysis that failed to consider how different groups would be affected by the intervention."
        }
      ]
    },
    {
      "id": "social-studies-world-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "social-studies-world-501-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "social-studies-world-501-l07-c1",
          "kind": "concept",
          "title": "Mapping Stakeholder Impacts",
          "content": "Decisions rarely affect everyone equally. In this lesson, you will learn how to map the distribution of impacts across various stakeholders, identifying who benefits, who bears the burdens, and what delayed effects might arise. Understanding these dynamics is crucial for making fair, equitable, and sustainable decisions.",
          "visualPrompts": [
            "A map of a community showing how a new project (e.g., a factory) creates positive impacts (jobs) in one area and negative impacts (pollution) in another.",
            "A timeline showing short-term benefits versus long-term costs of a policy."
          ]
        },
        {
          "id": "social-studies-world-501-l07-c2",
          "kind": "concept",
          "title": "Frameworks for Accountability",
          "content": "This section focuses on building accountability into a system. This means ensuring that decisions are traceable, stakeholders have the right to review outcomes, and there are clear obligations to remediate negative impacts. A strong accountability framework is essential for fostering public trust and ensuring responsible governance.",
          "visualPrompts": [
            "An organizational chart that shows not just reporting lines, but also lines of accountability to the public, with a clear process for appeals or reviews."
          ]
        },
        {
          "id": "social-studies-world-501-l07-c3",
          "kind": "recap",
          "title": "The Responsible Leadership Checklist",
          "content": "This recap provides a checklist for responsible leadership, connecting key principles from the course. It covers aligning actions with ethical standards, ensuring policy adherence, engaging stakeholders, and maintaining resilience. This checklist serves as a guide for navigating complex responsibilities and making a positive, defensible impact.",
          "visualPrompts": [
            "An infographic checklist with icons for key leadership principles: Ethical Standards, Stakeholder Engagement, Data-Driven Decisions, Transparency, and Long-Term Resilience."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "social-studies-world-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the positive and negative outcomes of a decision are allocated across different populations and over time."
        },
        {
          "id": "social-studies-world-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record connecting a decision to the evidence, rationale, and individuals responsible for it."
        },
        {
          "id": "social-studies-world-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A mode of decision-making that balances performance goals with accountability, ethical considerations, and stakeholder impact."
        }
      ]
    },
    {
      "id": "social-studies-world-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "social-studies-world-501-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "social-studies-world-501-l08-c1",
          "kind": "practice",
          "title": "Constructing a Defensible Argument",
          "content": "In this activity, you will synthesize your work into a comprehensive defense brief. This brief must include a clear recommendation supported by evidence, an honest assessment of uncertainties, and potential pathways for remediation. This process will hone your critical thinking and communication skills.",
          "visualPrompts": [
            "A visual metaphor of building a structure, where the foundation is 'Evidence,' the pillars are 'Key Arguments,' and the roof is the 'Main Recommendation'."
          ]
        },
        {
          "id": "social-studies-world-501-l08-c2",
          "kind": "recap",
          "title": "Anticipating and Addressing Critiques",
          "content": "In this rehearsal session, you will practice responding to critiques from an expert panel. These critiques will cover technical methods, governance concerns, and stakeholder impacts. Preparing for these questions will enhance your ability to articulate your viewpoints and defend your recommendations with confidence and clarity.",
          "visualPrompts": [
            "A 'red team' exercise visual, where one team presents their plan and another team (the expert panel) points out potential flaws, represented by red arrows and question marks."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "social-studies-world-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your capstone recommendations against adversarial cross-examination from a simulated panel of experts."
        }
      ]
    }
  ]
};
