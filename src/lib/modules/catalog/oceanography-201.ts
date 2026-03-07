import type { LearningModule } from "@/lib/modules/types";

export const oceanography_201_Module: LearningModule = {
  "id": "oceanography-201",
  "title": "Oceanography Applied Practice",
  "description": "Level 201 curriculum in Oceanography, focused on ocean circulation dynamics, marine ecosystem interactions, observation and measurement methods, and climate-ocean coupling through case analysis, simulation practice, and mastery checkpoints.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ocean",
    "science"
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
    "Apply principles of ocean circulation dynamics using explicit assumptions and constraints.",
    "Design and execute workflows for studying marine ecosystem interactions with reliable controls.",
    "Evaluate ocean observation and measurement methods using baseline and side-effect analysis.",
    "Analyze climate-ocean coupling using models that include accountable governance mechanisms.",
    "Communicate scientific uncertainty and tradeoffs effectively to diverse stakeholder groups.",
    "Build defensible recommendations for marine policy that are resilient to critical review."
  ],
  "lessons": [
    {
      "id": "oceanography-201-l01",
      "title": "Oceanography Core Foundations",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "oceanography-201-l01-a1",
          "type": "diagram",
          "title": "Concept Map: Branches of Oceanography",
          "content": "A visual diagram illustrating the interconnected fields of physical, chemical, biological, and geological oceanography."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-201-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "This lesson defines the scope of oceanography and introduces key vocabulary. We will explore the fundamentals of ocean circulation and how marine ecosystems interact, providing a crucial foundation for the topics ahead."
        },
        {
          "id": "oceanography-201-l01-c2",
          "kind": "concept",
          "title": "Understanding Cause and Effect",
          "content": "Learn to identify and map causal pathways in marine systems. This involves understanding how different factors are connected and influence each other, and how to surface hidden assumptions before making decisions."
        },
        {
          "id": "oceanography-201-l01-c3",
          "kind": "recap",
          "title": "The Importance of Evidence",
          "content": "This recap emphasizes grounding claims in observable evidence. We will discuss how to support statements with measurable indicators, note uncertainties, and use review checkpoints to ensure findings are reliable."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-201-l01-f1",
          "front": "Ocean Circulation Dynamics",
          "back": "The study of how ocean water moves, driven by winds, tides, and differences in water density. Requires careful control of assumptions in analysis."
        },
        {
          "id": "oceanography-201-l01-f2",
          "front": "Marine Ecosystem Interactions",
          "back": "The complex relationships between organisms and their ocean environment. Studying them requires well-designed, reliable methods."
        },
        {
          "id": "oceanography-201-l01-f3",
          "front": "Observation and Measurement Methods",
          "back": "The techniques and tools used to collect data from the ocean, which are evaluated to validate outcomes and detect hidden costs or side effects."
        }
      ]
    },
    {
      "id": "oceanography-201-l02",
      "title": "Oceanography Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "oceanography-201-l02-a1",
          "type": "diagram",
          "title": "Scientific Workflow Template",
          "content": "A visual template for designing a scientific investigation, including hypothesis, methods, data collection, analysis, and conclusion."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Testing",
          "content": "In this interactive lab, you will design and test a scientific workflow. The goal is to practice disciplined, evidence-based reasoning and to see how your plan holds up when faced with uncertainty."
        },
        {
          "id": "oceanography-201-l02-c2",
          "kind": "recap",
          "title": "Building Reliable Checkpoints",
          "content": "This recap covers how to build a reliable workflow. This includes mapping out responsibilities, establishing control gates to ensure quality, planning for rollback conditions if something goes wrong, and using verification signals to confirm success."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-201-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match controls to the strongest expected reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-release gate",
              "right": "Reduces preventable failures"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains the impact of a failure quickly"
            },
            {
              "left": "Baseline monitor",
              "right": "Helps attribute the cause of an impact"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves the quality of future decisions"
            }
          ]
        },
        {
          "id": "oceanography-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraint types into technical, policy, and stakeholder-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Data processing budget",
              "bucket": "Technical"
            },
            {
              "text": "Regulatory data retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Risk of eroding public trust",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Requirement for audit evidence",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "oceanography-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Before answering, document your assumptions, show your reasoning, and verify your conclusions."
        }
      ],
      "questions": [
        {
          "id": "oceanography-201-l03-q1",
          "text": "Which approach most improves decisions when studying ocean circulation dynamics?",
          "skillId": "oceanography-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on assumptions that are never tested"
            },
            {
              "id": "b",
              "text": "Define constraints, test for potential failures, and monitor key indicators"
            },
            {
              "id": "c",
              "text": "Treat all ocean environments as identical"
            },
            {
              "id": "d",
              "text": "Avoid analyzing any uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require defining explicit constraints, testing for failures, and monitoring measured signals."
        },
        {
          "id": "oceanography-201-l03-q2",
          "text": "This intermediate (201) level of study should emphasize:",
          "skillId": "oceanography-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Method execution, workflow discipline, and evidence-based reasoning"
            },
            {
              "id": "b",
              "text": "Speed of execution without any review"
            },
            {
              "id": "c",
              "text": "Working without baselines or controls"
            },
            {
              "id": "d",
              "text": "Making decisions from a single perspective"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This level is explicitly structured around applying methods, maintaining a disciplined workflow, and using evidence to reason."
        },
        {
          "id": "oceanography-201-l03-q3",
          "text": "What best strengthens the reliability of a study on marine ecosystem interactions?",
          "skillId": "oceanography-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Unassigned tasks and unclear escalation paths"
            },
            {
              "id": "b",
              "text": "Control checkpoints, clear ownership, and defined response thresholds"
            },
            {
              "id": "c",
              "text": "Making untracked changes to the procedure"
            },
            {
              "id": "d",
              "text": "Skipping any review of incidents or errors"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on having clear controls, owners for each task, and threshold-driven responses to problems."
        },
        {
          "id": "oceanography-201-l03-q4",
          "text": "For observation and measurement methods, which practice is most scientifically defensible?",
          "skillId": "oceanography-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using only anecdotal evidence of success"
            },
            {
              "id": "b",
              "text": "Comparing results against a baseline and checking for side effects"
            },
            {
              "id": "c",
              "text": "Ignoring scenarios where the method might fail"
            },
            {
              "id": "d",
              "text": "Adjusting success criteria after seeing the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing to a baseline and analyzing side effects are crucial for preventing biased or incomplete conclusions."
        },
        {
          "id": "oceanography-201-l03-q5",
          "text": "A mature model for climate-ocean coupling should include:",
          "skillId": "oceanography-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policies that are disconnected from scientific measurement"
            },
            {
              "id": "b",
              "text": "Links to policy, measurable thresholds, and pathways for corrective action"
            },
            {
              "id": "c",
              "text": "No obligation for transparency in methods or data"
            },
            {
              "id": "d",
              "text": "No expectation of remediation if the model is flawed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects scientific intention, measurement, and a clear process for corrective responses."
        }
      ]
    },
    {
      "id": "oceanography-201-l04",
      "title": "Oceanography Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "oceanography-201-l04-a1",
          "type": "diagram",
          "title": "Tradeoff Matrix Example",
          "content": "An example of a matrix used to compare policy options, scoring each on effectiveness, reliability, fairness, and feasibility."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-201-l04-c1",
          "kind": "example",
          "title": "Case Study: Coastal Ecosystem Management",
          "content": "We will analyze a case study of a coastal ecosystem, balancing the needs of local fisheries with the effects of climate change and various policy interventions. The goal is to map high-impact risks and competing constraints."
        },
        {
          "id": "oceanography-201-l04-c2",
          "kind": "concept",
          "title": "Using a Tradeoff Matrix",
          "content": "This section introduces the tradeoff matrix, a tool for evaluating different options. Each option is scored on criteria like effectiveness, reliability, fairness, and feasibility to clarify complex decisions."
        },
        {
          "id": "oceanography-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Failures",
          "content": "This recap discusses how to transform failures into valuable lessons. This includes creating safeguards, developing response playbooks for when problems arise, and establishing monitoring to track progress."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing alternative choices based on competing priorities or criteria."
        },
        {
          "id": "oceanography-201-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of risk or error that can be analyzed to design targeted preventative measures."
        },
        {
          "id": "oceanography-201-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined sequence of actions to ensure a safe and timely recovery from a problem or failure."
        }
      ]
    },
    {
      "id": "oceanography-201-l05",
      "title": "Oceanography Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "oceanography-201-l05-a1",
          "type": "image",
          "title": "Interactive Simulation Dashboard",
          "content": "A screenshot of the simulation interface, showing adjustable parameters for interventions, uncertainty, and success thresholds."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, you will set up your own simulation. This involves configuring different intervention scenarios, defining uncertainty parameters, and establishing measurable success thresholds."
        },
        {
          "id": "oceanography-201-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After the simulation, we will conduct a post-run review. This involves evaluating outcomes, identifying any unintended side effects, and checking how well the actions aligned with governance constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three strategies for managing a marine protected area and justify which best balances ecosystem health and economic needs.",
          "instructions": [
            "Define your primary objective and ethical guardrails before starting.",
            "Record the near-term and long-term tradeoffs for each option.",
            "Select metrics to confirm success and triggers for escalation if things go wrong."
          ]
        },
        {
          "id": "oceanography-201-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match risk conditions to the strongest mitigation responses.",
          "pairs": [
            {
              "left": "Ambiguous ownership of tasks",
              "right": "Define a role map and escalation authority"
            },
            {
              "left": "Poor quality of incoming data",
              "right": "Strengthen data intake validation and monitoring"
            },
            {
              "left": "Policy goals are becoming outdated",
              "right": "Re-anchor controls to explicit, current standards"
            },
            {
              "left": "Opposition from local stakeholders",
              "right": "Increase transparency and create feedback channels"
            }
          ]
        }
      ]
    },
    {
      "id": "oceanography-201-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "For each question, consider the case study and simulation. Document your reasoning before selecting an answer."
        }
      ],
      "questions": [
        {
          "id": "oceanography-201-l06-q1",
          "text": "When analyzing a case study with multiple competing priorities, what is the primary function of a tradeoff matrix?",
          "skillId": "oceanography-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To ignore the negative aspects of a preferred option"
            },
            {
              "id": "c",
              "text": "To systematically compare options across consistent criteria"
            },
            {
              "id": "d",
              "text": "To make the decision based on a single factor"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A tradeoff matrix provides a structured way to evaluate multiple options against the same set of important criteria, clarifying their respective strengths and weaknesses."
        },
        {
          "id": "oceanography-201-l06-q2",
          "text": "In a simulation of fishery management, you notice your chosen intervention accidentally harms a non-target species. This is an example of a:",
          "skillId": "oceanography-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Baseline measurement"
            },
            {
              "id": "b",
              "text": "Negative side effect"
            },
            {
              "id": "c",
              "text": "Success threshold"
            },
            {
              "id": "d",
              "text": "Causal pathway"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A negative side effect is an unintended and harmful consequence of an action, which is a key finding from simulations and case analyses."
        },
        {
          "id": "oceanography-201-l06-q3",
          "text": "What is the main purpose of developing a 'response playbook' after identifying a failure pattern in a case study?",
          "skillId": "oceanography-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "To assign blame for the failure"
            },
            {
              "id": "b",
              "text": "To have a predefined plan for safe and quick recovery from similar future failures"
            },
            {
              "id": "c",
              "text": "To ensure the same failure never happens again under any circumstances"
            },
            {
              "id": "d",
              "text": "To document the failure for historical purposes only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A response playbook provides a clear, pre-planned set of actions to manage a recurring type of problem effectively and safely."
        },
        {
          "id": "oceanography-201-l06-q4",
          "text": "When setting up a simulation, defining 'success thresholds' is important because it:",
          "skillId": "oceanography-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Guarantees the simulation will be successful"
            },
            {
              "id": "b",
              "text": "Creates clear, measurable goals to evaluate the outcome"
            },
            {
              "id": "c",
              "text": "Allows you to change the goals after you see the results"
            },
            {
              "id": "d",
              "text": "Removes all uncertainty from the model"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Success thresholds are measurable criteria defined before the simulation runs, allowing for an objective evaluation of whether an intervention worked."
        },
        {
          "id": "oceanography-201-l06-q5",
          "text": "A simulation debrief that checks alignment with 'governance constraints' is evaluating if the outcomes:",
          "skillId": "oceanography-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Were the most profitable"
            },
            {
              "id": "b",
              "text": "Were scientifically interesting"
            },
            {
              "id": "c",
              "text": "Violated any established rules, laws, or ethical policies"
            },
            {
              "id": "d",
              "text": "Used the newest technology"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Governance constraints refer to the set of rules, policies, and ethical guidelines that must be followed, and a debrief should confirm they were not violated."
        }
      ]
    },
    {
      "id": "oceanography-201-l07",
      "title": "Oceanography Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "oceanography-201-l07-a1",
          "type": "diagram",
          "title": "Stakeholder Map Diagram",
          "content": "A diagram showing how a central policy decision affects various stakeholders (e.g., fishers, tourism operators, coastal residents, conservation groups)."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "Learn to map how decisions in oceanography affect various stakeholders. We will examine how benefits and burdens are distributed among different groups and over time, which is essential for making fair and equitable decisions."
        },
        {
          "id": "oceanography-201-l07-c2",
          "kind": "concept",
          "title": "Frameworks for Accountability",
          "content": "This section covers accountability in oceanography. This includes ensuring actions can be traced to their source (traceability), the right to review decisions, and the obligation to correct issues, all vital for responsible practice."
        },
        {
          "id": "oceanography-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "We will conclude with a checklist that connects technical execution with policy, ethics, and stakeholder trust. This tool will guide you in making responsible decisions that consider the broader impact of your work."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-201-l07-f1",
          "front": "Impact Distribution",
          "back": "How the outcomes (both positive and negative) of a decision are spread across different stakeholder groups and time periods."
        },
        {
          "id": "oceanography-201-l07-f2",
          "front": "Decision Traceability",
          "back": "The evidence chain that shows how and why a decision was made, allowing for review and accountability."
        },
        {
          "id": "oceanography-201-l07-f3",
          "front": "Responsible Execution",
          "back": "Conducting work in a way that balances effectiveness with ethical safeguards and policy compliance."
        }
      ]
    },
    {
      "id": "oceanography-201-l08",
      "title": "Oceanography Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "oceanography-201-l08-a1",
          "type": "document",
          "title": "Project Charter Template",
          "content": "A fillable template for a project charter, with sections for objective, scope, success metrics, risks, and governance rules."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-201-l08-c1",
          "kind": "practice",
          "title": "Building Your Capstone Charter",
          "content": "In this lab, you will create a detailed plan, or charter, for your capstone project. This includes defining your main objective, constraints, success metrics, and the governance rules that will guide your decisions."
        },
        {
          "id": "oceanography-201-l08-c2",
          "kind": "recap",
          "title": "Preparing to Defend Your Plan",
          "content": "This recap focuses on defense readiness. You will practice gathering strong evidence to support your project plan, preparing you to confidently respond to critiques related to your technical, policy, and stakeholder considerations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and remediation pathways.",
          "instructions": [
            "Define a clear objective and the project's boundary conditions.",
            "List at least three measurable success indicators.",
            "Define criteria for when to escalate a problem and what corrective actions to take."
          ]
        },
        {
          "id": "oceanography-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against simulated technical, policy, and stakeholder objections."
        }
      ]
    },
    {
      "id": "oceanography-201-l09",
      "title": "Capstone Project: Marine Management Proposal",
      "type": "project",
      "duration": 45,
      "learningAids": [
        {
          "id": "oceanography-201-l09-a1",
          "type": "document",
          "title": "Capstone Project Rubric",
          "content": "A detailed rubric outlining the grading criteria for the capstone proposal, including sections on problem definition, workflow design, tradeoff analysis, and ethical considerations."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-201-l09-c1",
          "kind": "practice",
          "title": "Project Brief",
          "content": "For your capstone, you will develop a comprehensive management proposal for a real-world marine scenario (e.g., mitigating coral bleaching, managing an invasive species, or establishing a new marine protected area). Your proposal must apply the concepts from this module, including a clear workflow, a tradeoff analysis of at least two alternative interventions, and a stakeholder impact assessment."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-201-l09-act1",
          "type": "project_submission",
          "title": "Submit Your Capstone Proposal",
          "description": "Upload your completed capstone project proposal here. Ensure it meets all the criteria outlined in the project brief and rubric."
        }
      ]
    },
    {
      "id": "oceanography-201-l10",
      "title": "Final Exam: Applied Oceanography",
      "type": "quiz",
      "duration": 15,
      "learningAids": [
        {
          "id": "oceanography-201-l10-a1",
          "type": "document",
          "title": "Module Study Guide",
          "content": "A summary of key concepts, vocabulary, and frameworks from all lessons to help you prepare for the final exam."
        }
      ],
      "questions": [
        {
          "id": "oceanography-201-l10-q1",
          "text": "A scientist proposes a new method for measuring ocean salinity. To make a defensible evaluation of this method, what is the most crucial step?",
          "skillId": "oceanography-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ensuring the method is cheaper than all other methods"
            },
            {
              "id": "b",
              "text": "Comparing its results against an established baseline and checking for potential side effects"
            },
            {
              "id": "c",
              "text": "Only testing the method in ideal, easy-to-measure conditions"
            },
            {
              "id": "d",
              "text": "Asking for opinions from people who are not scientists"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible evaluation requires comparison to a known standard (baseline) and an analysis of any unintended consequences (side effects)."
        },
        {
          "id": "oceanography-201-l10-q2",
          "text": "When designing a workflow to monitor a coral reef, establishing 'control gates' is a key part of ensuring:",
          "skillId": "oceanography-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "The project is finished as fast as possible"
            },
            {
              "id": "b",
              "text": "Only one person is responsible for the entire project"
            },
            {
              "id": "c",
              "text": "The project's data and methods are reliable and high-quality"
            },
            {
              "id": "d",
              "text": "The project is hidden from public review"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Control gates are checkpoints in a workflow designed to verify the quality and reliability of the work before proceeding to the next step."
        },
        {
          "id": "oceanography-201-l10-q3",
          "text": "A policy decision about fishing quotas has a positive economic impact on commercial fishers but a negative impact on the local indigenous community's subsistence fishing. This is an example of:",
          "skillId": "oceanography-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A perfect policy with no tradeoffs"
            },
            {
              "id": "b",
              "text": "An unequal impact distribution across stakeholders"
            },
            {
              "id": "c",
              "text": "A technical failure in measurement"
            },
            {
              "id": "d",
              "text": "A successful simulation outcome"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stakeholder impact analysis involves understanding how the benefits and burdens of a decision are distributed, and in this case, the distribution is unequal."
        },
        {
          "id": "oceanography-201-l10-q4",
          "text": "Communicating uncertainty in a climate-ocean model to policymakers is crucial for:",
          "skillId": "oceanography-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proving the model is wrong"
            },
            {
              "id": "b",
              "text": "Making responsible, risk-informed decisions"
            },
            {
              "id": "c",
              "text": "Hiding the model's weaknesses"
            },
            {
              "id": "d",
              "text": "Stopping all future funding for research"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clearly communicating the range of possible outcomes and the level of certainty allows decision-makers to understand the risks and make more responsible choices."
        },
        {
          "id": "oceanography-201-l10-q5",
          "text": "The primary goal of building a 'defensible recommendation' in applied oceanography is to:",
          "skillId": "oceanography-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Create a recommendation that no one can possibly disagree with"
            },
            {
              "id": "b",
              "text": "Ensure the recommendation is supported by strong evidence and can withstand critical review"
            },
            {
              "id": "c",
              "text": "Choose the option that is the most popular with the public"
            },
            {
              "id": "d",
              "text": "Present a recommendation without showing any of the supporting data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible recommendation is one that is resilient to critical review because it is built on a foundation of solid evidence, clear reasoning, and transparent analysis of tradeoffs."
        }
      ]
    }
  ]
};
