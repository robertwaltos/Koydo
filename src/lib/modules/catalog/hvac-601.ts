import type { LearningModule } from "@/lib/modules/types";

export const hvac_601_Module: LearningModule = {
  "id": "hvac-601",
  "title": "HVAC Research and Leadership",
  "description": "An advanced specialization for HVAC professionals. Learn to diagnose complex systems, design robust operational plans, analyze trade-offs with research-grade rigor, and lead with accountable governance. This module uses advanced case studies, simulations, and defense-based checkpoints to build expert-level skills.",
  "subject": "HVAC",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "hvac",
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
    "Apply advanced diagnostic methods for HVAC systems in high-constraint environments.",
    "Design robust operational systems for HVAC with measurable controls and clear oversight.",
    "Evaluate the impact and trade-offs of HVAC interventions using rigorous, evidence-based analysis.",
    "Implement effective HVAC governance structures with clear accountability and escalation paths.",
    "Lead cross-functional teams in making complex decisions, clearly communicating trade-offs.",
    "Confidently defend technical and strategic recommendations to expert panels, citing evidence and acknowledging uncertainty."
  ],
  "lessons": [
    {
      "id": "hvac-601-l01",
      "title": "Advanced HVAC Foundations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "hvac-601-l01-a1",
          "type": "download",
          "title": "Diagnostic Principles Checklist",
          "content": "A PDF checklist summarizing the core principles of advanced diagnostics: defining scope, modeling causality, and setting evidence thresholds.",
          "visualPrompt": "Icon of a checklist with a magnifying glass."
        }
      ],
      "chunks": [
        {
          "id": "hvac-601-l01-c1",
          "kind": "concept",
          "title": "Defining System Scope and Boundaries",
          "content": "In this lesson, we will establish the advanced boundaries of HVAC systems. We will learn to effectively diagnose complex issues by defining what is in and out of scope for our analysis. We will also cover how to design operational plans that ensure systems run smoothly and efficiently, forming the foundation for expert-level management.",
          "visualPrompt": "An animated diagram showing an HVAC system for a large building, with dotted lines appearing to define the boundaries for a specific diagnostic task (e.g., a single air handling unit)."
        },
        {
          "id": "hvac-601-l01-c2",
          "kind": "concept",
          "title": "Modeling Cause-and-Effect and Uncertainty",
          "content": "Here, we will map the cause-and-effect relationships within HVAC systems. You will learn to identify how different components depend on each other and how to model the range of uncertainty in their performance. This knowledge is critical for planning effective interventions and predicting their outcomes.",
          "visualPrompt": "A flowchart animation where clicking on one component (e.g., 'Clogged Filter') highlights the downstream effects ('Increased Fan Power,' 'Reduced Airflow,' 'Higher Energy Cost') with variable percentages indicating uncertainty."
        },
        {
          "id": "hvac-601-l01-c3",
          "kind": "recap",
          "title": "Setting Evidence Thresholds",
          "content": "In this recap, we will reinforce that all claims in HVAC diagnostics must be supported by measurable evidence. We will discuss the importance of defining confidence levels for your data and establishing clear review checkpoints to ensure your findings are reliable and lead to sound decisions.",
          "visualPrompt": "A graphic of a dashboard with several key performance indicators (KPIs). Green, yellow, and red threshold lines are clearly marked for each metric."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-601-l01-f1",
          "front": "HVAC Systems Diagnostics",
          "back": "The systematic process of identifying faults by defining clear assumptions, working within known constraints, and using measurable data."
        },
        {
          "id": "hvac-601-l01-f2",
          "front": "HVAC Operations Design",
          "back": "The design of operational processes that ensures a system remains reliable, especially during high-demand or stressful situations."
        },
        {
          "id": "hvac-601-l01-f3",
          "front": "Impact and Trade-off Analysis",
          "back": "The discipline of evaluating interventions to identify their true benefits, hidden costs, and unintended consequences."
        }
      ]
    },
    {
      "id": "hvac-601-l02",
      "title": "HVAC Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "hvac-601-l02-a1",
          "type": "download",
          "title": "Lab Worksheet: Workflow Design",
          "content": "A structured worksheet to guide you through designing and stress-testing a specialized HVAC workflow.",
          "visualPrompt": "Icon of a worksheet with flowchart symbols."
        }
      ],
      "chunks": [
        {
          "id": "hvac-601-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, you will design a specialized workflow for managing a critical HVAC process. You will then run a stress test simulation to evaluate its performance under challenging conditions, providing vital, hands-on experience with real-world system pressures.",
          "visualPrompt": "A split-screen view: on the left, a drag-and-drop interface for building a workflow; on the right, a simulation dashboard showing system metrics under a 'heatwave' stress test."
        },
        {
          "id": "hvac-601-l02-c2",
          "kind": "recap",
          "title": "Designing Control Gates",
          "content": "In this recap, we will review how to structure workflows with essential control gates. These include quality checkpoints, criteria for rolling back a change if something goes wrong, and clear procedures for escalating issues. This structure is essential for maintaining control and ensuring safety.",
          "visualPrompt": "A simplified diagram of a process flow with distinct 'gate' icons, each labeled with a decision point (e.g., 'Pressure > 50 PSI?') and arrows pointing to 'Proceed' or 'Rollback'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "hvac-601-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Controls to Outcomes",
          "description": "Match each operational control with its primary effect on system reliability and governance.",
          "pairs": [
            {
              "left": "Pre-Commit Gate",
              "right": "Prevents predictable failures before they happen."
            },
            {
              "left": "Rollback Trigger",
              "right": "Limits the negative impact of an unexpected failure."
            },
            {
              "left": "Performance Dashboard",
              "right": "Provides evidence to attribute success or failure to a specific change."
            },
            {
              "left": "Post-Mortem Review",
              "right": "Improves the quality of future decisions and processes."
            }
          ]
        }
      ]
    },
    {
      "id": "hvac-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "hvac-601-l03-a1",
          "type": "download",
          "title": "Key Terminology Review Sheet",
          "content": "A one-page summary of key terms and concepts from the first two lessons to help you prepare for the checkpoint.",
          "visualPrompt": "Icon of a document with key terms highlighted."
        }
      ],
      "questions": [
        {
          "id": "hvac-601-l03-q1",
          "text": "Which practice most improves the quality of a decision in HVAC systems diagnostics?",
          "skillId": "hvac-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or stated assumptions."
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators upfront."
            },
            {
              "id": "c",
              "text": "Optimizing only for speed in every situation."
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and potential edge cases."
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions are improved when assumptions, constraints, and metrics are made explicit from the start."
        },
        {
          "id": "hvac-601-l03-q2",
          "text": "At an advanced level, strong execution design for HVAC operations requires:",
          "skillId": "hvac-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, a regular cadence for checkpoints, and defined escalation thresholds."
            },
            {
              "id": "b",
              "text": "Vague role definitions and process changes made on the fly."
            },
            {
              "id": "c",
              "text": "No process for reviewing performance after a project is complete."
            },
            {
              "id": "d",
              "text": "No pre-defined conditions for rolling back a change."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution requires clarity on ownership and governance driven by pre-defined thresholds."
        },
        {
          "id": "hvac-601-l03-q3",
          "text": "A defensible approach to analyzing the impact and trade-offs of an HVAC project includes:",
          "skillId": "hvac-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotes without a comparison group."
            },
            {
              "id": "b",
              "text": "Baseline comparisons, analysis of side-effects, and stating the bounds of uncertainty."
            },
            {
              "id": "c",
              "text": "Changing the criteria for success after the results are in."
            },
            {
              "id": "d",
              "text": "Excluding difficult or inconvenient scenarios from the analysis."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparisons to a baseline, checking for side-effects, and being transparent about uncertainty."
        },
        {
          "id": "hvac-601-l03-q4",
          "text": "Mature governance systems effectively connect:",
          "skillId": "hvac-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The intent of a policy, the controls to measure it, and the pathways to fix deviations."
            },
            {
              "id": "b",
              "text": "Policy language that has no measurable enforcement."
            },
            {
              "id": "c",
              "text": "Performance targets without clear ownership or an escalation plan."
            },
            {
              "id": "d",
              "text": "Operations that lack transparent accountability."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance creates an operational link between intent, measurement, and corrective action."
        }
      ]
    },
    {
      "id": "hvac-601-l04",
      "title": "Advanced HVAC Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "hvac-601-l04-a1",
          "type": "download",
          "title": "Case Study: Hospital HVAC Upgrade",
          "content": "The full text of the case study to be analyzed in this lesson, including technical specs, budget constraints, and stakeholder interviews.",
          "visualPrompt": "Icon of a detailed report or case file."
        }
      ],
      "chunks": [
        {
          "id": "hvac-601-l04-c1",
          "kind": "concept",
          "title": "Structuring the Case Study",
          "content": "In this lesson, we will dissect a complex case study that highlights the competing constraints common in HVAC systems diagnostics. We will analyze the impacts and trade-offs of different potential solutions, which is a crucial skill for effective problem-solving in high-stakes environments.",
          "visualPrompt": "A mind map on a whiteboard, with the central problem ('Hospital HVAC Upgrade') branching out to key constraints like 'Budget,' 'Uptime Requirement,' 'Patient Safety,' and 'Energy Efficiency'."
        },
        {
          "id": "hvac-601-l04-c2",
          "kind": "practice",
          "title": "Framing the Trade-offs",
          "content": "Using the case study, we will practice comparing different upgrade options. We will score them across key dimensions such as safety, reliability, cost, and regulatory compliance. This comparative analysis will help you understand the complexities of making fully-informed decisions.",
          "visualPrompt": "A comparison table on screen, with rows for 'Option A,' 'Option B,' and 'Option C,' and columns for 'Cost,' 'Reliability,' 'Safety,' etc. Cells are being populated with ratings."
        },
        {
          "id": "hvac-601-l04-c3",
          "kind": "recap",
          "title": "The Decision Memo Pattern",
          "content": "In this recap, we will review the essential components of a professional recommendation. This includes clearly stating your assumptions, presenting the evidence that supports your decision, defining the risk controls you've put in place, and outlining a fallback plan to ensure safety and accountability.",
          "visualPrompt": "A template for a decision memo, with sections for 'Recommendation,' 'Supporting Evidence,' 'Assumptions,' 'Risks,' and 'Fallback Plan' clearly labeled."
        }
      ]
    },
    {
      "id": "hvac-601-l05",
      "title": "HVAC Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "hvac-601-l05-a1",
          "type": "download",
          "title": "Simulation Control Panel Guide",
          "content": "A user guide explaining the controls, metrics, and objectives for the interactive simulation.",
          "visualPrompt": "Icon of a user manual or guide."
        }
      ],
      "chunks": [
        {
          "id": "hvac-601-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Controls",
          "content": "In this interactive clinic, you will manage an HVAC system through a live, simulated crisis. You will operate scenario controls to balance system performance with safety and budget constraints. This experience is designed to connect theory to practice, highlighting how your decisions on trade-offs, assumptions, and verification play out in real time.",
          "visualPrompt": "An interactive dashboard showing rising temperature alerts and declining air quality. The user has access to controls like 'Increase Chiller Output,' 'Divert Power,' and 'Notify Maintenance,' each with an associated cost and risk level."
        },
        {
          "id": "hvac-601-l05-c2",
          "kind": "recap",
          "title": "Designing an Adaptive Response",
          "content": "In this recap, we will focus on how to respond effectively when a system deviates from its expected performance. We will discuss how to update control gates and operational plans mid-stream, while maintaining a clear record of your decisions and rationale for accountability.",
          "visualPrompt": "An animation showing a process flowchart. An alert flashes, and a new 'Adaptive Response' branch is added to the chart, with a note icon indicating a decision log entry."
        }
      ],
      "interactiveActivities": [
        {
          "id": "hvac-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Simulation",
          "description": "Manage a high-pressure HVAC scenario. Your goal is to maintain critical operations during an unexpected equipment failure while managing costs and risks."
        }
      ]
    },
    {
      "id": "hvac-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "hvac-601-l06-a1",
          "type": "download",
          "title": "Case & Sim Key Concepts",
          "content": "A summary of the key decision-making frameworks from the case analysis and simulation lessons.",
          "visualPrompt": "Icon of a document with a flowchart and a dashboard."
        }
      ],
      "questions": [
        {
          "id": "hvac-601-l06-q1",
          "text": "In advanced casework, what is the first requirement for a defensible recommendation?",
          "skillId": "hvac-601-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without explicit assumptions."
            },
            {
              "id": "b",
              "text": "A clear baseline for comparison, explicit constraints, and pre-defined success criteria."
            },
            {
              "id": "c",
              "text": "High confidence without any logs of the evidence reviewed."
            },
            {
              "id": "d",
              "text": "Optimizing for a single metric, such as cost, above all others."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations must begin with explicit assumptions, constraints, and measurable targets to be credible."
        },
        {
          "id": "hvac-601-l06-q2",
          "text": "A resilient strategy for HVAC operations should always include:",
          "skillId": "hvac-601-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "A plan with checkpoints, as well as criteria for falling back and escalating issues."
            },
            {
              "id": "b",
              "text": "A one-way execution plan with no capability to roll back changes."
            },
            {
              "id": "c",
              "text": "No mapping of ownership or responsibilities across teams."
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions to maintain flexibility."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in operations depends on having checkpoints, fallback options, and an explicit escalation design."
        },
        {
          "id": "hvac-601-l06-q3",
          "text": "When evaluating HVAC project trade-offs, which method is the most rigorous?",
          "skillId": "hvac-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "A single success story without any control or comparison group."
            },
            {
              "id": "b",
              "text": "Comparing to a baseline, plus analyzing side-effects and uncertainty."
            },
            {
              "id": "c",
              "text": "A narrative focusing only on the outcome, without evidence from the process."
            },
            {
              "id": "d",
              "text": "Changing the scope of the analysis after the fact to better fit the outcomes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons against a baseline, a thorough analysis of side-effects, and a transparent disclosure of uncertainty."
        },
        {
          "id": "hvac-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "hvac-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Aligns decision-making authority, performance measurement, and the obligation to fix problems."
            },
            {
              "id": "b",
              "text": "Separates high-level policy from the operational controls that enforce it."
            },
            {
              "id": "c",
              "text": "Avoids external review and transparency to speed up decisions."
            },
            {
              "id": "d",
              "text": "Treats accountability as optional when under pressure."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links authority, measurable controls, and the responsibility for corrective action into a single, coherent system."
        },
        {
          "id": "hvac-601-l06-q5",
          "text": "In the hospital case study, if two upgrade options have similar costs, what is the best way to decide between them?",
          "skillId": "hvac-601-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Choose the option presented by the most senior engineer."
            },
            {
              "id": "b",
              "text": "Choose the option that uses the newest technology."
            },
            {
              "id": "c",
              "text": "Compare them based on non-cost factors like patient safety impact and system reliability."
            },
            {
              "id": "d",
              "text": "Select one at random to avoid analysis paralysis."
            }
          ],
          "correctOptionId": "c",
          "explanation": "When primary constraints like cost are equal, decisions should be based on a structured comparison of other critical factors and trade-offs."
        },
        {
          "id": "hvac-601-l06-q6",
          "text": "During the HVAC simulation, an unexpected power surge occurs. What is the most critical immediate action?",
          "skillId": "hvac-601-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Wait to see if the system corrects itself."
            },
            {
              "id": "b",
              "text": "Follow the pre-defined emergency protocol for power surges, which prioritizes safety."
            },
            {
              "id": "c",
              "text": "Increase cooling output to compensate for any potential heat increase."
            },
            {
              "id": "d",
              "text": "Document the event in the log but take no other action."
            }
          ],
          "correctOptionId": "b",
          "explanation": "In a crisis simulation, the primary goal is to test adherence to safety and emergency protocols, which are designed to manage risk effectively."
        },
        {
          "id": "hvac-601-l06-q7",
          "text": "A key part of the Decision Memo Pattern is the 'Fallback Plan'. What is its purpose?",
          "skillId": "hvac-601-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "To assign blame if the primary recommendation fails."
            },
            {
              "id": "b",
              "text": "To provide an alternative that is guaranteed to work."
            },
            {
              "id": "c",
              "text": "To define a pre-planned course of action to mitigate risk if the primary plan fails."
            },
            {
              "id": "d",
              "text": "To prove that the primary recommendation is the only viable option."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A fallback plan is a critical risk management tool that defines what to do if the initial plan does not succeed, ensuring a safer and more resilient strategy."
        },
        {
          "id": "hvac-601-l06-q8",
          "text": "After running a simulation, you find that your chosen strategy is less efficient than expected. What is the best next step?",
          "skillId": "hvac-601-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Conclude that the simulation is flawed and ignore the results."
            },
            {
              "id": "b",
              "text": "Analyze the simulation data to understand why the inefficiency occurred and refine your strategy."
            },
            {
              "id": "c",
              "text": "Adopt the most efficient strategy shown in the simulation without further analysis."
            },
            {
              "id": "d",
              "text": "Delete the results and run the simulation again until it produces the desired outcome."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations are for learning. The correct response to an unexpected outcome is to analyze the data to improve your understanding and strategy."
        }
      ]
    },
    {
      "id": "hvac-601-l07",
      "title": "HVAC Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "hvac-601-l07-a1",
          "type": "download",
          "title": "Ethical Decision-Making Framework",
          "content": "A PDF guide with a checklist for evaluating the stakeholder and public impact of major HVAC decisions.",
          "visualPrompt": "Icon of a document with a scale of justice."
        }
      ],
      "chunks": [
        {
          "id": "hvac-601-l07-c1",
          "kind": "concept",
          "title": "Mapping Stakeholder Impacts",
          "content": "In this lesson, you will learn to map the distribution of benefits, costs, and risks of HVAC decisions across various groups. Understanding who is affected, and how, is essential for responsible governance. This analysis helps connect technical decisions to their real-world consequences for employees, customers, and the public.",
          "visualPrompt": "An animated map showing a central decision ('New Cooling Plant Location') with arrows pointing to different stakeholder groups ('Local Residents,' 'Environment,' 'Company Finances'), each labeled with positive or negative impacts."
        },
        {
          "id": "hvac-601-l07-c2",
          "kind": "concept",
          "title": "Designing for Accountability",
          "content": "Here, we will explore the architecture of accountability. This includes creating clear records of why decisions were made, defining who has the right to review those decisions, and establishing who is responsible for fixing problems. This ensures all actions are transparent and answerable.",
          "visualPrompt": "A diagram showing three interconnected pillars: 'Decision Traceability' (a logbook icon), 'Review Rights' (an eye icon), and 'Remediation Duty' (a wrench icon)."
        },
        {
          "id": "hvac-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We will conclude with a practical checklist for responsible leadership. This tool connects project outcomes with ethical guidelines, ensures compliance with policy, and promotes long-term resilience. It serves as a final check to help you make sound and responsible decisions in the HVAC field.",
          "visualPrompt": "A simple, elegant checklist graphic with items like 'Impacts Assessed,' 'Accountability Clear,' and 'Ethical Review Complete' being checked off."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-601-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative outcomes of a decision are allocated across different groups and over time."
        },
        {
          "id": "hvac-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record that shows what decision was made, by whom, when, and based on what evidence and rationale."
        },
        {
          "id": "hvac-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances high performance with accountability and ethical considerations."
        }
      ]
    },
    {
      "id": "hvac-601-l08",
      "title": "HVAC Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "hvac-601-l08-a1",
          "type": "download",
          "title": "Capstone Defense Template",
          "content": "A presentation template to help you structure your final defense brief, with sections for claims, evidence, uncertainty, and remediation.",
          "visualPrompt": "Icon of a presentation slide deck."
        }
      ],
      "chunks": [
        {
          "id": "hvac-601-l08-c1",
          "kind": "practice",
          "title": "Assembling Your Defense Brief",
          "content": "In this interactive activity, you will assemble a comprehensive defense brief for a complex HVAC proposal. Your brief must include a clear claim, supporting evidence, an honest assessment of uncertainties, and a well-defined plan for remediation if things go wrong. This exercise hones your critical thinking and communication skills.",
          "visualPrompt": "A user interface where the learner populates fields in a defense brief template by dragging and dropping evidence files and writing summaries."
        },
        {
          "id": "hvac-601-l08-c2",
          "kind": "recap",
          "title": "Rehearsing for Expert Review",
          "content": "During this session, you will practice responding to critiques from different perspectives: a technical expert questioning your data, a governance officer challenging your process, and a stakeholder concerned about the impact. This rehearsal is essential for building the confidence to defend your work effectively.",
          "visualPrompt": "A video simulation of a panel review, with text prompts showing different types of challenging questions for the learner to practice answering."
        }
      ],
      "interactiveActivities": [
        {
          "id": "hvac-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel Simulation",
          "description": "Present and defend your final recommendations to a simulated panel of experts who will challenge your assumptions, evidence, and conclusions."
        }
      ]
    }
  ]
};
