import type { LearningModule } from "@/lib/modules/types";

export const biology_501_Module: LearningModule = {
  "id": "biology-501",
  "title": "Advanced Biological Systems",
  "description": "A specialization module for advanced students focusing on the diagnosis, design, and governance of complex biological systems. Through advanced casework, simulation, and proposal defense, learners will master systems diagnostics, intervention design, impact analysis, and scientific leadership.",
  "subject": "Biology",
  "tags": [
    "systems biology",
    "bioethics",
    "experimental design",
    "advanced",
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
    "Diagnose disruptions in complex biological systems, such as a coral reef ecosystem or a metabolic pathway, using advanced modeling techniques.",
    "Design robust biological interventions, like gene therapies or conservation programs, with measurable controls and ethical oversight.",
    "Evaluate the multifaceted impacts of biological interventions, quantifying tradeoffs between intended benefits and unintended consequences.",
    "Develop and apply governance frameworks for biological research and application, ensuring accountability and ethical compliance.",
    "Lead cross-functional scientific reviews, clearly communicating complex data, assumptions, and uncertainty bounds to diverse stakeholders.",
    "Defend a novel research proposal against expert critique, using evidence-based arguments and rigorous scientific reasoning."
  ],
  "lessons": [
    {
      "id": "biology-501-l01",
      "title": "Advanced Biological Principles",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "biology-501-l01-a1",
          "type": "image",
          "title": "Complex Biological System",
          "content": "A diagram of a complex biological system, like a neural network or a food web, with key components and feedback loops highlighted."
        }
      ],
      "chunks": [
        {
          "id": "biology-501-l01-c1",
          "kind": "concept",
          "title": "Defining Biological Systems",
          "content": "This lesson introduces the advanced study of biology by focusing on how to define and scope complex systems. We will learn to diagnose system health by understanding the interactions between components, from the molecular to the ecosystem level. This is crucial for applications in medicine, environmental science, and biotechnology."
        },
        {
          "id": "biology-501-l01-c2",
          "kind": "concept",
          "title": "Modeling Causal Pathways and Uncertainty",
          "content": "Learners will map causal pathways that connect biological factors, such as the relationship between a pollutant and algae bloom formation. We will also practice identifying and quantifying uncertainty and system dependencies, which is foundational for planning effective and predictable interventions."
        },
        {
          "id": "biology-501-l01-c3",
          "kind": "recap",
          "title": "Establishing Scientific Rigor",
          "content": "We will recap the importance of linking all claims to measurable, empirical evidence. This involves establishing clear confidence bounds for data and defining checkpoints for peer and ethical review to ensure all findings are reliable and valid."
        }
      ],
      "flashcards": [
        {
          "id": "biology-501-l01-f1",
          "front": "Systems Diagnostics",
          "back": "The process of identifying the root causes of malfunction in a complex biological system, like determining why a bee colony is collapsing."
        },
        {
          "id": "biology-501-l01-f2",
          "front": "Intervention Design",
          "back": "The planning and architecture of a biological intervention, such as a gene therapy protocol or a reforestation project, ensuring it is robust and scalable."
        },
        {
          "id": "biology-501-l01-f3",
          "front": "Impact & Tradeoff Analysis",
          "back": "A systematic evaluation of the intended and unintended consequences of a biological intervention, including ecological, ethical, and economic factors."
        }
      ]
    },
    {
      "id": "biology-501-l02",
      "title": "Experimental Design and Modeling Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "biology-501-l02-a1",
          "type": "practice",
          "title": "CRISPR Experiment Designer",
          "content": "An interactive simulation for designing a CRISPR-based gene editing experiment, where you define target genes, control groups, and success metrics."
        }
      ],
      "chunks": [
        {
          "id": "biology-501-l02-c1",
          "kind": "practice",
          "title": "Designing and Simulating Experiments",
          "content": "In this interactive lab, learners will design specialized experimental workflows for a biological problem. You will then conduct stress tests by simulating adverse scenarios, such as sample contamination or equipment failure, to evaluate the robustness of your design."
        },
        {
          "id": "biology-501-l02-c2",
          "kind": "recap",
          "title": "Implementing Controls and Checkpoints",
          "content": "We will recap how to structure experimental workflows with critical checkpoints, such as positive and negative controls, criteria for halting an experiment (e.g., unexpected animal distress), and procedures for ethical review board escalation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-501-l02-act1",
          "type": "matching_pairs",
          "title": "Match the Control to its Function",
          "description": "Match the scientific control or governance practice with its primary effect on research reliability and ethics.",
          "pairs": [
            {
              "left": "Peer Review Before Funding",
              "right": "Prevents investment in flawed experimental designs."
            },
            {
              "left": "Halting a Clinical Trial",
              "right": "Limits harm when adverse effects exceed a predefined threshold."
            },
            {
              "left": "Ecosystem Health Monitoring",
              "right": "Allows for accurate measurement of an intervention's impact against a control state."
            },
            {
              "left": "Post-Project Analysis",
              "right": "Uses results, both expected and unexpected, to improve future research designs."
            }
          ]
        }
      ]
    },
    {
      "id": "biology-501-l03",
      "title": "Checkpoint 1: Methods and Experimental Design",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biology-501-l03-a1",
          "type": "practice",
          "title": "Review Key Concepts",
          "content": "Review the principles of systems diagnostics, intervention design, and scientific controls before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "biology-501-l03-q1",
          "text": "When diagnosing a sudden fish die-off in a lake, which practice is most critical for decision quality?",
          "skillId": "biology-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately introduce a new fish species."
            },
            {
              "id": "b",
              "text": "Define assumptions, establish a baseline of water quality, and identify measurable indicators of contamination."
            },
            {
              "id": "c",
              "text": "Focus only on the most obvious symptom without considering the broader ecosystem."
            },
            {
              "id": "d",
              "text": "Ignore historical data on the lake's health."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced diagnostics require making assumptions explicit, defining a baseline for comparison, and using measurable indicators to test hypotheses."
        },
        {
          "id": "biology-501-l03-q2",
          "text": "A robust design for a reforestation project requires:",
          "skillId": "biology-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear roles for team members, regular monitoring checkpoints, and thresholds for when to seek expert help."
            },
            {
              "id": "b",
              "text": "Planting trees randomly with no follow-up monitoring."
            },
            {
              "id": "c",
              "text": "No analysis of the project's success or failure after completion."
            },
            {
              "id": "d",
              "text": "No contingency plan for events like drought or disease."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution in biology requires clear ownership, scheduled checkpoints, and predefined thresholds for escalating issues."
        },
        {
          "id": "biology-501-l03-q3",
          "text": "A defensible analysis of introducing a genetically modified, drought-resistant crop includes:",
          "skillId": "biology-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Relying on anecdotal farmer testimonials alone."
            },
            {
              "id": "b",
              "text": "Comparison to non-GM crops, analysis of potential cross-pollination, and clear bounds on yield uncertainty."
            },
            {
              "id": "c",
              "text": "Changing the definition of 'success' after the harvest data is collected."
            },
            {
              "id": "d",
              "text": "Excluding data from fields where the crop performed poorly."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis requires a control group (baseline), analysis of side effects, and honest disclosure of uncertainty."
        },
        {
          "id": "biology-501-l03-q4",
          "text": "Mature governance for a national biobank connects:",
          "skillId": "biology-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The policy on data privacy, measurable controls on data access, and clear pathways for addressing a data breach."
            },
            {
              "id": "b",
              "text": "A strong privacy policy with no way to enforce it."
            },
            {
              "id": "c",
              "text": "Data collection targets without assigning responsibility for data security."
            },
            {
              "id": "d",
              "text": "Operations that lack transparent accountability for how samples are used."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance operationally links policy intent, measurable controls, and a plan for remediation."
        }
      ]
    },
    {
      "id": "biology-501-l04",
      "title": "Case Study: Ecosystem Intervention Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biology-501-l04-a1",
          "type": "image",
          "title": "Intervention Decision Tree",
          "content": "A decision tree showing potential interventions for a struggling coral reef, with branches for costs, ecological benefits, and risks."
        }
      ],
      "chunks": [
        {
          "id": "biology-501-l04-c1",
          "kind": "concept",
          "title": "Framing the Case Study",
          "content": "We will frame a case study on a declining coral reef ecosystem, highlighting the competing constraints of ecological preservation, tourism revenue, and local fishing rights. We will analyze the impacts and tradeoffs of potential interventions."
        },
        {
          "id": "biology-501-l04-c2",
          "kind": "practice",
          "title": "Analyzing Intervention Tradeoffs",
          "content": "Learners will compare different intervention options, such as creating a no-fishing zone, introducing heat-resistant coral species, or reducing land-based pollution. The comparison will be based on dimensions like ecological impact, cost, social equity, and scientific uncertainty."
        },
        {
          "id": "biology-501-l04-c3",
          "kind": "recap",
          "title": "Structuring a Scientific Recommendation",
          "content": "We will recap a structured pattern for making recommendations. Each proposal must include clear assumptions, supporting data, risk mitigation strategies, and a contingency plan if the intervention does not perform as expected."
        }
      ]
    },
    {
      "id": "biology-501-l05",
      "title": "Interactive Simulation: Managing a Viral Outbreak",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "biology-501-l05-a1",
          "type": "practice",
          "title": "Pandemic Response Dashboard",
          "content": "A dashboard from a pandemic simulation, showing infection rates, hospital capacity, resource allocation, and public trust metrics."
        }
      ],
      "chunks": [
        {
          "id": "biology-501-l05-c1",
          "kind": "practice",
          "title": "Real-Time Decision Making",
          "content": "In this interactive simulation, learners will manage a response to a novel viral outbreak. You will make decisions on resource allocation, public health messaging, and research funding, balancing epidemiological data with economic and social constraints."
        },
        {
          "id": "biology-501-l05-c2",
          "kind": "recap",
          "title": "Adapting Strategy Based on New Data",
          "content": "We will recap how effective crisis response requires adapting strategies as new data emerges, such as a virus mutation or a new treatment becoming available. This involves updating plans while maintaining clear communication and accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-501-l05-act1",
          "type": "scenario",
          "title": "Pandemic Response Simulation",
          "description": "Run a high-pressure simulation of a public health crisis. Make critical decisions about interventions and resource allocation under conditions of uncertainty and time pressure."
        }
      ]
    },
    {
      "id": "biology-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "biology-501-l06-a1",
          "type": "practice",
          "title": "Review Case Study",
          "content": "Review your decisions from the coral reef case study and the pandemic simulation to prepare for the quiz."
        }
      ],
      "questions": [
        {
          "id": "biology-501-l06-q1",
          "text": "In the coral reef case study, the first requirement for a defensible recommendation is:",
          "skillId": "biology-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "Choosing an option without stating why it's better than others."
            },
            {
              "id": "b",
              "text": "A clear baseline of reef health, explicit constraints (e.g., budget), and measurable success criteria (e.g., coral cover increase)."
            },
            {
              "id": "c",
              "text": "High confidence in an outcome without providing supporting data."
            },
            {
              "id": "d",
              "text": "Optimizing only for tourism revenue."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations begin with an explicit baseline, constraints, and measurable targets."
        },
        {
          "id": "biology-501-l06-q2",
          "text": "A resilient strategy for managing the simulated viral outbreak should include:",
          "skillId": "biology-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Checkpoints to review strategy, with fallback plans (e.g., if a vaccine is delayed) and clear criteria for escalating measures."
            },
            {
              "id": "b",
              "text": "A single, unchangeable plan with no ability to adapt to new information."
            },
            {
              "id": "c",
              "text": "No clear assignment of who is responsible for different parts of the response."
            },
            {
              "id": "d",
              "text": "Making key decisions without documenting the rationale."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in a crisis depends on checkpoints for review, fallback options, and explicit escalation design."
        },
        {
          "id": "biology-501-l06-q3",
          "text": "When evaluating the impact of a public health intervention in the simulation, which method is most rigorous?",
          "skillId": "biology-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Highlighting one city where it worked well, without mentioning others."
            },
            {
              "id": "b",
              "text": "Comparing outcomes to a baseline, analyzing side effects (e.g., economic impact), and acknowledging uncertainty in the data."
            },
            {
              "id": "c",
              "text": "A narrative of the outcome without providing the underlying data."
            },
            {
              "id": "d",
              "text": "Changing the metrics for success halfway through the simulation."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparisons to a baseline, analysis of side effects, and disclosure of uncertainty."
        },
        {
          "id": "biology-501-l06-q4",
          "text": "Advanced governance of a pandemic response is strongest when it:",
          "skillId": "biology-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Aligns the authority to make decisions, the data to measure their impact, and the obligation to correct course when they fail."
            },
            {
              "id": "b",
              "text": "Separates scientific advice from political decision-making entirely."
            },
            {
              "id": "c",
              "text": "Avoids transparency to prevent public panic."
            },
            {
              "id": "d",
              "text": "Treats accountability for mistakes as optional during a crisis."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links the authority to act, the measurement of impact, and the responsibility for corrective action."
        }
      ]
    },
    {
      "id": "biology-501-l07",
      "title": "Bioethics and Governance",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biology-501-l07-a1",
          "type": "image",
          "title": "Ethical Review Flowchart",
          "content": "A flowchart illustrating the ethical review process for a human gene-editing proposal, from initial submission to final approval."
        }
      ],
      "chunks": [
        {
          "id": "biology-501-l07-c1",
          "kind": "concept",
          "title": "Analyzing Societal and Ethical Impacts",
          "content": "Learners will map the distribution of benefits, burdens, and long-term effects of a biological technology across different stakeholder groups. This is essential for understanding the ethical dimensions and ensuring equitable outcomes."
        },
        {
          "id": "biology-501-l07-c2",
          "kind": "concept",
          "title": "Frameworks for Scientific Accountability",
          "content": "We will explore frameworks for accountability in science, including decision traceability (audit trails), the rights of research subjects, and the obligations of scientists and institutions for remediation when harm occurs."
        },
        {
          "id": "biology-501-l07-c3",
          "kind": "recap",
          "title": "A Framework for Ethical Leadership in Biology",
          "content": "We will conclude with a practical checklist for responsible leadership. This guide connects scientific outcomes with ethical principles, policy compliance, and system resilience, serving as a tool for ethical decision-making in your career."
        }
      ],
      "flashcards": [
        {
          "id": "biology-501-l07-f1",
          "front": "Equity in Biotechnology",
          "back": "Assessing how the benefits and risks of a new technology, like personalized medicine, are distributed across different socioeconomic groups."
        },
        {
          "id": "biology-501-l07-f2",
          "front": "Research Audit Trail",
          "back": "A verifiable record of a research project's methodology, data, and decisions, crucial for reproducibility and accountability."
        },
        {
          "id": "biology-501-l07-f3",
          "front": "Ethical Scientific Leadership",
          "back": "Guiding research and its application in a way that prioritizes scientific integrity, public safety, and social responsibility."
        }
      ]
    },
    {
      "id": "biology-501-l08",
      "title": "Capstone: Defending a Research Proposal",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biology-501-l08-a1",
          "type": "practice",
          "title": "Capstone Defense Slide",
          "content": "A slide from a capstone defense presentation, showing a complex data visualization and the key takeaway claim it supports."
        }
      ],
      "chunks": [
        {
          "id": "biology-501-l08-c1",
          "kind": "practice",
          "title": "Constructing Your Proposal",
          "content": "In this activity, you will assemble a comprehensive research proposal. This brief will include your central hypothesis, supporting evidence from literature, experimental design, potential uncertainties, and ethical considerations."
        },
        {
          "id": "biology-501-l08-c2",
          "kind": "recap",
          "title": "Simulating a Peer Review Defense",
          "content": "You will practice responding to critiques from different perspectives: a skeptical scientific expert, an institutional ethics board representative, and a public stakeholder. This rehearsal will build your ability to communicate and defend your work effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biology-501-l08-act1",
          "type": "debate_simulator",
          "title": "Mock Grant Proposal Defense",
          "description": "Present and defend your research proposal to a simulated expert panel. Respond to adversarial cross-examination on your methods, ethics, and potential impact."
        }
      ]
    }
  ]
};
