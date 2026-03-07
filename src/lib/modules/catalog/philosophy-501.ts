import type { LearningModule } from "@/lib/modules/types";

export const philosophy_501_Module: LearningModule = {
  "id": "philosophy-501",
  "title": "Philosophy Specialization Studio",
  "description": "An advanced studio for applying philosophical frameworks to complex, real-world systems. Learners will master techniques for diagnosing ethical challenges, designing operational solutions, analyzing trade-offs, and leading with accountable governance, culminating in a capstone defense of their work.",
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
    "Apply advanced philosophical frameworks to diagnose systemic challenges in high-stakes environments.",
    "Design robust operational systems for ethical action with clear checkpoints and success metrics.",
    "Evaluate the impact and trade-offs of interventions with research-grade rigor.",
    "Develop and implement accountable governance models with clear leadership roles and escalation pathways.",
    "Lead cross-functional reviews, clearly communicating complex trade-offs.",
    "Defend complex ethical and systemic recommendations against expert critique, using evidence and clearly stated uncertainty."
  ],
  "lessons": [
    {
      "id": "philosophy-501-l01",
      "title": "Philosophy Advanced Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "philosophy-501-l01-a1",
          "type": "image",
          "title": "System Mapping",
          "content": "Visualize a complex system (e.g., a social program, a corporate policy) with its key components, stakeholders, inputs, and feedback loops. Identify points of friction or ethical tension."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-501-l01-c1",
          "kind": "concept",
          "title": "Defining the Problem Space",
          "content": "Before we can solve a problem, we must define it. This lesson introduces methods for mapping the boundaries of a complex ethical or social system. We'll learn to identify key components, stakeholders, and the rules that govern their interactions, setting a clear scope for our analysis."
        },
        {
          "id": "philosophy-501-l01-c2",
          "kind": "concept",
          "title": "Modeling Causes and Uncertainties",
          "content": "Complex systems are full of hidden connections and unpredictable outcomes. Here, we'll practice mapping potential causal chains ('if we do X, then Y might happen') and identifying areas of uncertainty. This is crucial for anticipating the consequences of any proposed intervention."
        },
        {
          "id": "philosophy-501-l01-c3",
          "kind": "recap",
          "title": "Setting Standards for Evidence",
          "content": "A strong philosophical argument requires strong evidence. We'll recap the importance of grounding claims in measurable data, establishing confidence levels for our conclusions, and planning regular checkpoints to review our analysis against new information."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-501-l01-f1",
          "front": "Humanities Systems Diagnostics",
          "back": "The structured process of identifying the root causes of ethical or systemic problems by mapping components, assumptions, and constraints."
        },
        {
          "id": "philosophy-501-l01-f2",
          "front": "Humanities Operations Design",
          "back": "Creating a reliable, repeatable process for implementing an ethical solution, including clear roles and checkpoints."
        },
        {
          "id": "philosophy-501-l01-f3",
          "front": "Impact and Trade-off Analysis",
          "back": "A method for evaluating the potential positive and negative consequences of a decision across different stakeholders and values."
        }
      ]
    },
    {
      "id": "philosophy-501-l02",
      "title": "Philosophy Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "philosophy-501-l02-a1",
          "type": "practice",
          "title": "Decision Flowchart",
          "content": "Sketch a flowchart for a complex decision process. Include decision points, criteria for advancing (checkpoints), conditions for stopping or reversing (rollback triggers), and pathways for escalating difficult problems."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-501-l02-c1",
          "kind": "practice",
          "title": "Designing and Testing Analytical Methods",
          "content": "In this lab, you will design your own workflow for analyzing a philosophical problem. We will then 'stress test' these workflows against challenging scenarios to see how they perform under pressure, revealing weaknesses and areas for improvement."
        },
        {
          "id": "philosophy-501-l02-c2",
          "kind": "recap",
          "title": "Building in Controls and Safeguards",
          "content": "A robust workflow needs safeguards. We'll recap how to build in key control gates: checkpoints to review progress, rollback criteria to reverse a failing decision, and escalation paths to bring in senior leaders when a predefined risk threshold is crossed."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their strongest reliability and governance effects.",
          "pairs": [
            {
              "left": "Pre-commitment Gate",
              "right": "Prevents action on a flawed plan before resources are wasted."
            },
            {
              "left": "Rollback Trigger",
              "right": "Contains the damage from an unexpected negative outcome."
            },
            {
              "left": "Performance Dashboard",
              "right": "Provides objective evidence for attributing success or failure."
            },
            {
              "left": "Post-Mortem Review",
              "right": "Ensures lessons from one cycle improve the next."
            }
          ]
        }
      ]
    },
    {
      "id": "philosophy-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "philosophy-501-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "philosophy-501-l03-q1",
          "text": "Which practice most improves the quality of a humanities systems diagnosis?",
          "skillId": "philosophy-501-skill-core",
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
          "id": "philosophy-501-l03-q2",
          "text": "Strong operational design in this field requires:",
          "skillId": "philosophy-501-skill-execution",
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
          "id": "philosophy-501-l03-q3",
          "text": "A defensible impact and trade-off analysis includes:",
          "skillId": "philosophy-501-skill-eval",
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
          "id": "philosophy-501-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "philosophy-501-skill-governance",
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
      "id": "philosophy-501-l04",
      "title": "Philosophy Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "philosophy-501-l04-a1",
          "type": "image",
          "title": "Trade-off Matrix",
          "content": "Create a matrix to compare two proposed solutions to an ethical dilemma. Score each option against key values like equity, safety, cost, and transparency. Use this visual to identify the core trade-offs."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-501-l04-c1",
          "kind": "concept",
          "title": "Deconstructing Complex Cases",
          "content": "This lesson focuses on analyzing real-world case studies. We'll learn to frame the central dilemma, identify the competing values and constraints at play, and map the potential consequences of different paths forward."
        },
        {
          "id": "philosophy-501-l04-c2",
          "kind": "practice",
          "title": "Framing and Quantifying Trade-offs",
          "content": "Every difficult decision involves trade-offs. During this practice, you'll learn to systematically compare options across multiple dimensions—such as safety, reliability, cost, and equity—to make the hidden costs and benefits of each choice explicit."
        },
        {
          "id": "philosophy-501-l04-c3",
          "kind": "recap",
          "title": "Structuring a Recommendation",
          "content": "A good recommendation is more than just an opinion. We'll recap a standard pattern for a decision memo: state your recommendation, list the core assumptions, present the supporting evidence, outline risk controls, and describe a fallback plan."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-501-l04-act1",
          "type": "drag_and_drop_sort",
          "title": "Prioritizing Ethical Values",
          "description": "In a medical ethics scenario involving a new AI diagnostic tool, drag and drop the following values into order of priority: Patient Autonomy, Medical Accuracy, Data Privacy, and Cost Efficiency."
        }
      ]
    },
    {
      "id": "philosophy-501-l05",
      "title": "Philosophy Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "philosophy-501-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "An interactive dashboard showing key metrics (e.g., public trust, budget, system reliability) in real-time. Your decisions will cause these metrics to change, forcing you to adapt your strategy."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-501-l05-c1",
          "kind": "practice",
          "title": "Navigating a Live Scenario",
          "content": "This interactive clinic puts you in the driver's seat. You will manage a complex scenario in real-time, making decisions that balance performance goals with ethical governance constraints. This is where theory meets practice."
        },
        {
          "id": "philosophy-501-l05-c2",
          "kind": "recap",
          "title": "Designing Adaptive Responses",
          "content": "Situations change. This recap focuses on how to adapt your strategy mid-stream. We'll discuss how to modify your operational controls in response to new information without losing accountability or a clear record of why decisions were changed."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-501-l05-act1",
          "type": "scenario",
          "title": "High-Stakes Decision Simulation",
          "description": "Manage a public health crisis using a simulated dashboard. Balance resource allocation, public communication, and ethical guidelines under evolving conditions and uncertainty."
        }
      ]
    },
    {
      "id": "philosophy-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "philosophy-501-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "philosophy-501-l06-q1",
          "text": "In advanced casework, the first requirement for defensible recommendations is:",
          "skillId": "philosophy-501-skill-case1",
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
          "id": "philosophy-501-l06-q2",
          "text": "A resilient strategy for humanities operations and execution design should include:",
          "skillId": "philosophy-501-skill-case2",
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
          "id": "philosophy-501-l06-q3",
          "text": "When evaluating humanities impact and tradeoff analysis, which method is most rigorous?",
          "skillId": "philosophy-501-skill-case3",
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
          "id": "philosophy-501-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "philosophy-501-skill-case4",
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
          "id": "philosophy-501-l06-q5",
          "text": "When analyzing a case study, what is the primary purpose of a 'trade-off matrix'?",
          "skillId": "philosophy-501-skill-case-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To make the comparative costs and benefits of different options explicit"
            },
            {
              "id": "c",
              "text": "To hide the negative aspects of a preferred solution"
            },
            {
              "id": "d",
              "text": "To choose the cheapest option automatically"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A trade-off matrix is a tool for systematically comparing options across multiple criteria, making the relative advantages and disadvantages clear."
        },
        {
          "id": "philosophy-501-l06-q6",
          "text": "In the 'Decision Memo Pattern', why is it crucial to state your assumptions?",
          "skillId": "philosophy-501-skill-case-memo",
          "options": [
            {
              "id": "a",
              "text": "To make the memo longer"
            },
            {
              "id": "b",
              "text": "Assumptions are not important"
            },
            {
              "id": "c",
              "text": "To clarify the conditions under which your recommendation is valid"
            },
            {
              "id": "d",
              "text": "To confuse the reader"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Explicitly stating assumptions clarifies the logical foundation of your argument and identifies potential points of failure if those assumptions prove false."
        },
        {
          "id": "philosophy-501-l06-q7",
          "text": "What is the key learning objective of a 'Live Scenario' simulation?",
          "skillId": "philosophy-501-skill-sim-objective",
          "options": [
            {
              "id": "a",
              "text": "To prove you can follow instructions without deviation"
            },
            {
              "id": "b",
              "text": "To find a single, perfect solution"
            },
            {
              "id": "c",
              "text": "To practice making decisions under pressure and adapting to changing conditions"
            },
            {
              "id": "d",
              "text": "To memorize a specific set of facts"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Simulations are designed to test and improve decision-making skills in dynamic environments where adaptation is necessary."
        },
        {
          "id": "philosophy-501-l06-q8",
          "text": "An 'adaptive response' during a simulation means:",
          "skillId": "philosophy-501-skill-sim-adaptive",
          "options": [
            {
              "id": "a",
              "text": "Sticking to the original plan no matter what"
            },
            {
              "id": "b",
              "text": "Making random changes to see what happens"
            },
            {
              "id": "c",
              "text": "Ignoring new data that contradicts your plan"
            },
            {
              "id": "d",
              "text": "Updating your strategy based on new data while maintaining accountability"
            }
          ],
          "correctOptionId": "d",
          "explanation": "A mature adaptive response involves thoughtful, evidence-based changes to a plan, with clear documentation of why the changes were made."
        }
      ]
    },
    {
      "id": "philosophy-501-l07",
      "title": "Philosophy Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "philosophy-501-l07-a1",
          "type": "image",
          "title": "Accountability Flowchart",
          "content": "Diagram the flow of accountability for a major public decision. Show who makes the decision, who has oversight, how the public can appeal, and what the process for remediation is."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-501-l07-c1",
          "kind": "concept",
          "title": "Mapping Stakeholder Impacts",
          "content": "Decisions are never made in a vacuum. In this lesson, we'll map how the benefits and burdens of a policy are distributed across different groups, including delayed or second-order effects. This is a cornerstone of ethical analysis and just governance."
        },
        {
          "id": "philosophy-501-l07-c2",
          "kind": "concept",
          "title": "Designing for Accountability",
          "content": "Who is responsible when things go wrong? This section explores the architecture of accountability: ensuring decisions are traceable, creating clear rights of review and appeal, and defining obligations for remediation. These systems build public trust and ensure fairness."
        },
        {
          "id": "philosophy-501-l07-c3",
          "kind": "recap",
          "title": "The Responsible Leadership Checklist",
          "content": "We'll conclude by developing a practical checklist for responsible leadership. This tool connects strategic outcomes to ethical principles, ensures compliance with governance policies, and promotes resilient, accountable decision-making."
        }
      ],
      "flashcards": [
        {
          "id": "philosophy-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how a decision's positive and negative effects are spread across different populations and over time."
        },
        {
          "id": "philosophy-501-l07-f2",
          "front": "Decision Traceability",
          "back": "Maintaining a clear, auditable record of who made a decision, when, and based on what evidence and rationale."
        },
        {
          "id": "philosophy-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A leadership style that balances achieving goals with ethical conduct, public accountability, and systemic resilience."
        }
      ]
    },
    {
      "id": "philosophy-501-l08",
      "title": "Philosophy Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "philosophy-501-l08-a1",
          "type": "practice",
          "title": "Argument Structure Template",
          "content": "Use a template to structure your capstone argument. Sections include: 1. Core Thesis, 2. Key Evidence, 3. Acknowledged Uncertainties & Counterarguments, 4. Proposed Mitigation/Controls, 5. Conclusion."
        }
      ],
      "chunks": [
        {
          "id": "philosophy-501-l08-c1",
          "kind": "practice",
          "title": "Assembling the Capstone Brief",
          "content": "In this lab, you will synthesize your work into a persuasive defense brief. This involves formulating a clear central claim, supporting it with evidence, honestly acknowledging uncertainties and risks, and proposing clear remediation pathways."
        },
        {
          "id": "philosophy-501-l08-c2",
          "kind": "recap",
          "title": "Rehearsing for Expert Review",
          "content": "A strong argument must withstand scrutiny. Here, you will practice defending your brief against critical questions from peers acting as an expert panel. This rehearsal builds confidence and sharpens your ability to think on your feet."
        }
      ],
      "interactiveActivities": [
        {
          "id": "philosophy-501-l08-act1",
          "type": "debate_simulator",
          "title": "Capstone Defense Simulation",
          "description": "Present your final recommendation to a simulated expert panel. Respond to challenging questions and adversarial critiques that test the rigor of your analysis and the resilience of your proposal."
        }
      ]
    }
  ]
};
