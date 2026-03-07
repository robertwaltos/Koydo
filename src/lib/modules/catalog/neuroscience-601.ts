import type { LearningModule } from "@/lib/modules/types";

export const neuroscience_601_Module: LearningModule = {
  "id": "neuroscience-601",
  "title": "Neuroscience Research and Leadership",
  "description": "Post-401 specialization in Neuroscience, focused on neural systems and circuit modeling, cognition-behavior experiment design, clinical-neuro translational reasoning, and neuroethics and societal impact governance through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Biology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "neuroscience",
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
    "Apply advanced methods for neural systems and circuit modeling in high-constraint environments",
    "Design robust systems for cognition-behavior experiment design with measurable control gates",
    "Evaluate interventions in clinical-neuro translational reasoning with research-grade rigor",
    "Operationalize neuroethics and societal impact governance with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "neuroscience-601-l01",
      "title": "Neuroscience Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "neuroscience-601-l01-a1",
          "type": "image",
          "title": "The Research Cycle in Advanced Neuroscience",
          "content": "A diagram showing the iterative process: defining boundaries, modeling causality, setting evidence thresholds, and validating recommendations."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-601-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "Explore the advanced frontiers of neuroscience by examining the intricate workings of neural systems—the vast networks of communicating neurons. Learn to construct models of these neural circuits to visualize and understand their function, and design experiments to probe the relationship between cognition (thought) and behavior (action)."
        },
        {
          "id": "neuroscience-601-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Identify and map causal pathways that connect different factors to specific outcomes. This involves understanding system dependencies—how different parts of a system rely on each other—and defining uncertainty ranges to acknowledge the limits of current knowledge. This foundation is crucial for planning effective and responsible interventions."
        },
        {
          "id": "neuroscience-601-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "All scientific claims must be linked to measurable indicators and supported by clear evidence. This recap covers the importance of defining confidence bounds to express the certainty of findings and establishing review checkpoints to ensure research integrity and progress."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-601-l01-f1",
          "front": "Neural Systems And Circuit Modeling",
          "back": "A method for representing brain circuits that requires clearly stated assumptions and measurable limits to ensure accuracy and testability."
        },
        {
          "id": "neuroscience-601-l01-f2",
          "front": "Cognition-Behavior Experiment Design",
          "back": "The process of creating a structured experiment that can reliably test hypotheses about the relationship between thought and action, especially under stress."
        },
        {
          "id": "neuroscience-601-l01-f3",
          "front": "Clinical-Neuro Translational Reasoning",
          "back": "The discipline of applying neuroscience findings to clinical settings, rigorously evaluating both the potential benefits and hidden costs of new interventions."
        }
      ]
    },
    {
      "id": "neuroscience-601-l02",
      "title": "Neuroscience Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "neuroscience-601-l02-a1",
          "type": "image",
          "title": "Workflow with Control Gates",
          "content": "A flowchart of an experimental workflow, highlighting key checkpoints, decision points (thresholds), and potential rollback loops."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, design a specialized research workflow tailored to a specific neuroscience challenge. Then, conduct a stress test by simulating adverse conditions to evaluate how well the design holds up under pressure and identify potential points of failure."
        },
        {
          "id": "neuroscience-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "Effective workflows must include control gates to ensure quality and manage risk. This includes checkpoints to monitor progress, rollback criteria to revert to a previous state if an error occurs, and threshold-based escalation to trigger a higher-level review when specific criteria are met."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-601-l02-act1",
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
      "id": "neuroscience-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-601-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-601-l03-q1",
          "text": "Which practice most improves neural systems and circuit modeling decision quality?",
          "skillId": "neuroscience-601-skill-core",
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
          "id": "neuroscience-601-l03-q2",
          "text": "At level 601, strong execution for cognition-behavior experiment design requires:",
          "skillId": "neuroscience-601-skill-execution",
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
          "id": "neuroscience-601-l03-q3",
          "text": "A defensible approach to clinical-neuro translational reasoning includes:",
          "skillId": "neuroscience-601-skill-eval",
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
          "id": "neuroscience-601-l03-q4",
          "text": "Mature governance systems connect:",
          "skillId": "neuroscience-601-skill-governance",
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
      "id": "neuroscience-601-l04",
      "title": "Neuroscience Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "neuroscience-601-l04-a1",
          "type": "image",
          "title": "Tradeoff Analysis Matrix",
          "content": "An example of a matrix comparing multiple research proposals across criteria like safety, cost, equity, and scientific impact."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-601-l04-c1",
          "kind": "concept",
          "title": "Scenario Architecture",
          "content": "Analyze a complex case study that highlights the competing constraints in neuroscience research, from modeling neural circuits to applying findings in clinical settings. This exercise demonstrates the real-world complexities of translating laboratory discoveries into practical applications."
        },
        {
          "id": "neuroscience-601-l04-c2",
          "kind": "practice",
          "title": "Tradeoff Framing",
          "content": "Compare alternative courses of action by evaluating them across multiple dimensions, including safety, reliability, cost, equity, and governance. This practice develops the critical skill of identifying and weighing trade-offs to make balanced and justifiable decisions."
        },
        {
          "id": "neuroscience-601-l04-c3",
          "kind": "recap",
          "title": "Decision Memo Pattern",
          "content": "Learn to structure a formal decision memo. A strong recommendation must clearly state the underlying assumptions, present the supporting evidence, detail the risk controls in place, and outline fallback plans in case of unexpected outcomes. This ensures decisions are well-reasoned and transparent."
        }
      ]
    },
    {
      "id": "neuroscience-601-l05",
      "title": "Neuroscience Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "neuroscience-601-l05-a1",
          "type": "image",
          "title": "Simulation Control Dashboard",
          "content": "An interactive mock-up of a simulation interface showing real-time data, adjustable parameters, and governance alerts."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "Assume the role of a lead researcher in a dynamic simulation. Manage project variables and make critical decisions in real-time, balancing the drive for performance with strict ethical and governance constraints. This experience hones decision-making skills under pressure."
        },
        {
          "id": "neuroscience-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response Design",
          "content": "Effective leadership requires adapting to new information. Learn how to design responses that can update experimental controls or project direction mid-stream, while maintaining full traceability and accountability for every change made."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure neuroscience scenario and tune controls under uncertainty."
        }
      ]
    },
    {
      "id": "neuroscience-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "neuroscience-601-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-601-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "neuroscience-601-skill-case1",
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
          "id": "neuroscience-601-l06-q2",
          "text": "A resilient strategy for cognition-behavior experiment design should include:",
          "skillId": "neuroscience-601-skill-case2",
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
          "id": "neuroscience-601-l06-q3",
          "text": "When evaluating clinical-neuro translational reasoning, which method is most rigorous?",
          "skillId": "neuroscience-601-skill-case3",
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
          "id": "neuroscience-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "neuroscience-601-skill-case4",
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
        },
        {
          "id": "neuroscience-601-l06-q5",
          "text": "In a case analysis involving a novel neuro-therapeutic, what does 'tradeoff framing' primarily help you do?",
          "skillId": "neuroscience-601-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Focus only on the most positive outcome"
            },
            {
              "id": "b",
              "text": "Systematically compare options across multiple criteria like safety, cost, and equity"
            },
            {
              "id": "c",
              "text": "Choose the option that is fastest to implement, regardless of risk"
            },
            {
              "id": "d",
              "text": "Ignore all factors except for the primary scientific goal"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tradeoff framing is a structured method for evaluating choices by comparing their pros and cons across a shared set of important criteria."
        },
        {
          "id": "neuroscience-601-l06-q6",
          "text": "When running a high-pressure simulation of a clinical trial, an 'adaptive response' means:",
          "skillId": "neuroscience-601-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Sticking to the original plan no matter what new data emerges"
            },
            {
              "id": "b",
              "text": "Adjusting protocol controls based on new information while maintaining accountability"
            },
            {
              "id": "c",
              "text": "Stopping the simulation at the first sign of trouble"
            },
            {
              "id": "d",
              "text": "Making undocumented changes to ensure a successful outcome"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An adaptive response involves making informed, traceable adjustments to a plan as new evidence becomes available during execution."
        },
        {
          "id": "neuroscience-601-l06-q7",
          "text": "A 'decision memo' for a complex neuroscience case should always include a fallback plan. Why is this critical?",
          "skillId": "neuroscience-601-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "It proves that the primary recommendation is likely to fail"
            },
            {
              "id": "b",
              "text": "It is a formality that is rarely used in practice"
            },
            {
              "id": "c",
              "text": "It prepares the team for potential risks and ensures a resilient strategy"
            },
            {
              "id": "d",
              "text": "It complicates the decision and should be avoided"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A fallback plan is a key component of risk management, ensuring that if the primary plan fails, there is a pre-approved alternative to mitigate negative consequences."
        },
        {
          "id": "neuroscience-601-l06-q8",
          "text": "During a simulation, a sudden adverse event occurs. What is the first step according to a robust governance protocol?",
          "skillId": "neuroscience-601-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Immediately assign blame to a team member"
            },
            {
              "id": "b",
              "text": "Activate pre-defined escalation pathways and notify the correct stakeholders"
            },
            {
              "id": "c",
              "text": "Wait to see if the problem resolves itself"
            },
            {
              "id": "d",
              "text": "Continue the simulation as if nothing happened"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A mature governance system relies on clear, pre-established protocols for escalating issues to ensure a timely and structured response."
        }
      ]
    },
    {
      "id": "neuroscience-601-l07",
      "title": "Neuroscience Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "neuroscience-601-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual map illustrating the direct, indirect, and long-term effects of a neuro-intervention on various stakeholder groups (e.g., patients, families, society)."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-601-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learn to map the potential impacts of a neuroscience innovation across all affected stakeholders. This includes analyzing the distribution of benefits and burdens, as well as considering delayed or second-order effects that may emerge over time. This is essential for equitable and ethical decision-making."
        },
        {
          "id": "neuroscience-601-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Design systems that ensure accountability in research and implementation. This architecture includes mechanisms for decision traceability (who decided what, and why), rights for independent review, and clear obligations for remediation when negative outcomes occur."
        },
        {
          "id": "neuroscience-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "Review a comprehensive checklist for responsible leadership in neuroscience. This tool connects project outcomes with ethical principles, ensures compliance with governance policies, and reinforces the importance of building resilient, accountable systems."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the positive and negative outcomes of a decision are allocated across different populations and over various timescales."
        },
        {
          "id": "neuroscience-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record that connects a decision to the evidence, rationale, and individuals responsible for making it."
        },
        {
          "id": "neuroscience-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that actively balances high performance with ethical considerations and institutional accountability."
        }
      ]
    },
    {
      "id": "neuroscience-601-l08",
      "title": "Neuroscience Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "neuroscience-601-l08-a1",
          "type": "image",
          "title": "Capstone Defense Brief Template",
          "content": "A structured document template outlining the key sections of a research defense: claim, evidence, uncertainty analysis, and remediation plan."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-601-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "Synthesize your work into a capstone defense brief. This document must articulate your central claims, present the supporting evidence, honestly assess the limits and uncertainties of your findings, and propose potential pathways for remediation or future work."
        },
        {
          "id": "neuroscience-601-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Prepare for your final defense by rehearsing responses to critical questions from different perspectives, including scientific experts, governance bodies, and public stakeholders. This practice builds confidence and sharpens your ability to defend your research under scrutiny."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend specialization recommendations under adversarial cross-examination."
        }
      ]
    }
  ]
};
