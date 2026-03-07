import type { LearningModule } from "@/lib/modules/types";

export const data_science_601_Module: LearningModule = {
  "id": "data-science-601",
  "title": "Data Science Research and Leadership",
  "description": "Post-401 specialization in Data Science, focused on experimental design, causal inference, model interpretability, and decision governance through advanced casework, simulation, and capstone-level defense.",
  "subject": "Data Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "data",
    "analytics"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply advanced methods for experimental design in high-constraint environments",
    "Engineer repeatable workflows that improve causal inference under uncertainty",
    "Evaluate interventions in model interpretability with research-grade evidence standards",
    "Operationalize decision governance with transparent accountability and remediation loops",
    "Lead cross-functional decision reviews with clear tradeoff reasoning",
    "Deliver capstone-quality artifacts that withstand expert critique"
  ],
  "lessons": [
    {
      "id": "data-science-601-l01",
      "title": "Advanced Foundations in Research and Causality",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "data-science-601-l01-a1",
          "type": "image",
          "title": "Visual Prompt: Causal Inference Blueprint",
          "content": "An animated blueprint of a causal graph, where nodes representing variables flicker to show uncertainty ranges and decision pathways light up as they are selected."
        }
      ],
      "chunks": [
        {
          "id": "data-science-601-l01-c1",
          "kind": "concept",
          "title": "Advanced Scope and Decision Boundaries",
          "content": "Welcome to the frontiers of Data Science. Here, we move beyond prediction to explore experimental design and causal inference within complex systems. Mastering these concepts is critical for making defensible, high-stakes decisions, building your capacity for robust analysis and leadership."
        },
        {
          "id": "data-science-601-l01-c2",
          "kind": "concept",
          "title": "Modeling Causal Structure Under Uncertainty",
          "content": "You will learn to model causal pathways—the mechanisms through which variables interact. We will rigorously examine uncertainty ranges and hidden assumptions that threaten validity before any intervention is deployed, ensuring a critical evaluation of your analytical architecture."
        },
        {
          "id": "data-science-601-l01-c3",
          "kind": "recap",
          "title": "Standards for Evidence and Rigor",
          "content": "Advanced data science claims demand strict adherence to measurable indicators and research-grade evidence. You must establish confidence bounds and review checkpoints to guarantee reliability. This section emphasizes the uncompromising rigor required to produce defensible insights."
        }
      ],
      "flashcards": [
        {
          "id": "data-science-601-l01-f1",
          "front": "Experimental Design",
          "back": "A systematic process for designing studies to test hypotheses, requiring explicit assumptions and measured tradeoffs."
        },
        {
          "id": "data-science-601-l01-f2",
          "front": "Causal Inference",
          "back": "The practice of identifying and quantifying cause-and-effect relationships from data, crucial for reliable interventions."
        },
        {
          "id": "data-science-601-l01-f3",
          "front": "Model Interpretability",
          "back": "The ability to explain a model's predictions in human-understandable terms, essential for trust, debugging, and governance."
        }
      ]
    },
    {
      "id": "data-science-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "data-science-601-l02-a1",
          "type": "practice",
          "title": "Visual Prompt: Live Pipeline Dashboard",
          "content": "An interactive dashboard of a data pipeline. Users can click on red 'failure gates' to see the specific thresholds (e.g., data drift > 5%) that would trigger a system rollback."
        }
      ],
      "chunks": [
        {
          "id": "data-science-601-l02-c1",
          "kind": "practice",
          "title": "Workflow Engineering and Stress Testing",
          "content": "In this interactive lab, you will engineer a data science workflow grounded in rigorous research principles. After constructing your pipeline, you will stress-test it against edge cases and adversarial scenarios to ensure resilience in real-world applications."
        },
        {
          "id": "data-science-601-l02-c2",
          "kind": "recap",
          "title": "Implementing Controls and Failure Gates",
          "content": "Effective specialist workflows require robust control gates, rollback criteria, and accountability checkpoints. You will implement these safeguards to ensure your models remain reliable and can adapt gracefully to unexpected data drift or systemic anomalies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-science-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match advanced controls with the strongest expected system effect.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Prevents avoidable downstream defects"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains impact quickly when failures emerge"
            },
            {
              "left": "Baseline monitoring",
              "right": "Enables defensible impact attribution"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves next-iteration design quality"
            }
          ]
        },
        {
          "id": "data-science-601-l02-act2",
          "type": "sorting_buckets",
          "title": "Advanced Constraint Classification",
          "description": "Sort constraints into technical, governance, and stakeholder-impact categories.",
          "buckets": [
            "Technical",
            "Governance",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Latency budget violation",
              "bucket": "Technical"
            },
            {
              "text": "Audit traceability requirement",
              "bucket": "Governance"
            },
            {
              "text": "Trust and adoption decline",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Escalation policy noncompliance",
              "bucket": "Governance"
            }
          ]
        }
      ]
    },
    {
      "id": "data-science-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "data-science-601-l03-a1",
          "type": "practice",
          "title": "Visual Prompt: Assessment Interface",
          "content": "A clean, distraction-free assessment interface highlighting key terms like 'constraints', 'causal inference', and 'interpretability'."
        }
      ],
      "questions": [
        {
          "id": "data-science-601-l03-q1",
          "text": "Which practice most improves specialist performance in experimental design?",
          "skillId": "data-science-601-skill-specialist",
          "options": [
            {
              "id": "a",
              "text": "Rely on undocumented assumptions"
            },
            {
              "id": "b",
              "text": "Define constraints, monitor leading indicators, and test edge cases"
            },
            {
              "id": "c",
              "text": "Avoid post-decision review"
            },
            {
              "id": "d",
              "text": "Optimize only for speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced performance depends on explicit constraints, monitoring, and stress testing."
        },
        {
          "id": "data-science-601-l03-q2",
          "text": "At level 601, the curriculum emphasizes:",
          "skillId": "data-science-601-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Research-grade reasoning, leadership decision quality, and publishable capstone defense"
            },
            {
              "id": "b",
              "text": "Unbounded iteration with no controls"
            },
            {
              "id": "c",
              "text": "Single-metric decision making"
            },
            {
              "id": "d",
              "text": "No uncertainty communication"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 601 design is built around research-grade reasoning, leadership decision quality, and publishable capstone defense."
        },
        {
          "id": "data-science-601-l03-q3",
          "text": "What best strengthens causal inference execution quality?",
          "skillId": "data-science-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "No owner mapping or escalation path"
            },
            {
              "id": "b",
              "text": "Explicit ownership, checkpoints, and governance thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc process changes without logs"
            },
            {
              "id": "d",
              "text": "Skipping retrospective review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality execution needs ownership clarity, checkpoints, and threshold-driven governance."
        },
        {
          "id": "data-science-601-l03-q4",
          "text": "A rigorous approach to model interpretability should include:",
          "skillId": "data-science-601-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Outcome claims without baselines"
            },
            {
              "id": "b",
              "text": "Baseline comparison, side-effect checks, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Removal of difficult scenarios"
            },
            {
              "id": "d",
              "text": "Changing criteria after seeing results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines, side-effect checks, and uncertainty disclosure make results defensible."
        },
        {
          "id": "data-science-601-l03-q5",
          "text": "What is the primary function of a failure gate in a specialist workflow?",
          "skillId": "data-science-601-skill-controls",
          "options": [
            {
              "id": "a",
              "text": "To speed up data processing pipelines"
            },
            {
              "id": "b",
              "text": "To trigger rollback protocols when critical thresholds are breached"
            },
            {
              "id": "c",
              "text": "To bypass governance reviews for faster deployment"
            },
            {
              "id": "d",
              "text": "To increase the volume of data ingested"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Failure gates act as safeguards, automatically triggering rollbacks or alerts when system thresholds are violated."
        }
      ]
    },
    {
      "id": "data-science-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "data-science-601-l04-a1",
          "type": "mnemonic",
          "title": "Visual Prompt: Tradeoff Heat Map",
          "content": "A dynamic tradeoff matrix where sliders for 'Causal Confidence' and 'Predictive Speed' adjust a color-coded heat map, revealing the optimal balance point for a given scenario."
        }
      ],
      "chunks": [
        {
          "id": "data-science-601-l04-c1",
          "kind": "example",
          "title": "Case Study: Stakes and Competing Objectives",
          "content": "Explore a decision-support pipeline where the predictive power of correlations clashes with the need for causal confidence. You will map strategic objectives, identify catastrophic failure risks, and navigate strict governance constraints before recommending action."
        },
        {
          "id": "data-science-601-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix and Option Scoring",
          "content": "Learn to systematically score competing analytical options against criteria such as effectiveness, reliability, equity, and interpretability. This quantitative approach ensures your leadership decisions are not only objective but also explainable and defensible to stakeholders."
        },
        {
          "id": "data-science-601-l04-c3",
          "kind": "recap",
          "title": "Designing for Recovery and Adaptation",
          "content": "System failures are inevitable; your response shouldn't be improvised. You will design measurable adaptation loops that translate operational failures into automated safeguards and comprehensive response playbooks, driving continuous systemic improvement."
        }
      ],
      "flashcards": [
        {
          "id": "data-science-601-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A scoring framework for systematically evaluating and choosing among competing options under real-world constraints."
        },
        {
          "id": "data-science-601-l04-f2",
          "front": "Failure Signature",
          "back": "A recognizable pattern of indicators that precedes a specific type of system failure, enabling proactive mitigation."
        },
        {
          "id": "data-science-601-l04-f3",
          "front": "Adaptation Loop",
          "back": "A measured process for converting incident learning into improved system behavior and automated future safeguards."
        }
      ]
    },
    {
      "id": "data-science-601-l05",
      "title": "Simulation and Response Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "data-science-601-l05-a1",
          "type": "practice",
          "title": "Visual Prompt: Branching Decision Tree",
          "content": "An interactive simulation of a branching decision tree. As the user chooses a path (an intervention), subsequent nodes update to show new probabilities and potential outcomes, some leading to 'crisis averted' and others to 'system failure'."
        }
      ],
      "chunks": [
        {
          "id": "data-science-601-l05-c1",
          "kind": "practice",
          "title": "Scenario Modeling and Intervention",
          "content": "Configure simulation assumptions, establish critical thresholds, and map intervention pathways under high-stakes, time-constrained conditions. This hands-on modeling prepares you to navigate complex, multi-variable scenarios with confidence."
        },
        {
          "id": "data-science-601-l05-c2",
          "kind": "recap",
          "title": "Debrief and Decision Quality Review",
          "content": "Following each simulation, conduct a rigorous performance debrief. You will evaluate target achievement, identify unintended systemic side effects, and audit governance compliance to foster continuous analytical maturity and improve future decision-making."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-science-601-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Compare three advanced interventions and justify which best improves experimental design and decision governance.",
          "instructions": [
            "Define objective, constraints, and escalation triggers.",
            "Record near-term and long-term tradeoffs for each intervention.",
            "Select the metric set that confirms or falsifies your chosen approach."
          ]
        },
        {
          "id": "data-science-601-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match advanced risk scenarios with the strongest mitigation actions.",
          "pairs": [
            {
              "left": "Ambiguous ownership chain",
              "right": "Define accountable owner map and escalation rights"
            },
            {
              "left": "Weak measurement signal",
              "right": "Strengthen baseline instrumentation and quality checks"
            },
            {
              "left": "Policy-execution drift",
              "right": "Re-align controls to explicit governance standards"
            },
            {
              "left": "Stakeholder trust erosion",
              "right": "Increase transparency and corrective feedback cadence"
            }
          ]
        }
      ]
    },
    {
      "id": "data-science-601-l06",
      "title": "Checkpoint 2: Research and Systems Decisions",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "data-science-601-l06-a1",
          "type": "practice",
          "title": "Visual Prompt: Matrix Evaluation",
          "content": "An interactive quiz interface displaying a mini tradeoff matrix for learners to reference while answering questions."
        }
      ],
      "questions": [
        {
          "id": "data-science-601-l06-q1",
          "text": "What is the primary purpose of a tradeoff matrix in advanced data science?",
          "skillId": "data-science-601-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To eliminate all project risks"
            },
            {
              "id": "b",
              "text": "To systematically score competing options against constraints"
            },
            {
              "id": "c",
              "text": "To automate decision-making"
            },
            {
              "id": "d",
              "text": "To hide assumptions from stakeholders"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured, quantitative framework for evaluating competing options under real-world constraints."
        },
        {
          "id": "data-science-601-l06-q2",
          "text": "In the context of system reliability, what does a 'failure signature' indicate?",
          "skillId": "data-science-601-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "A successful model deployment"
            },
            {
              "id": "b",
              "text": "A recurrent signal pointing to a predictable class of breakdown risk"
            },
            {
              "id": "c",
              "text": "A user error in the interface"
            },
            {
              "id": "d",
              "text": "A random, unrepeatable anomaly"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Failure signatures are identifiable patterns that precede specific types of system or model breakdowns."
        },
        {
          "id": "data-science-601-l06-q3",
          "text": "A well-designed adaptation loop should primarily focus on:",
          "skillId": "data-science-601-skill-adaptation",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame for incidents"
            },
            {
              "id": "b",
              "text": "Converting incident learning into automated safeguards and improved future behavior"
            },
            {
              "id": "c",
              "text": "Archiving logs without review"
            },
            {
              "id": "d",
              "text": "Reverting to legacy systems"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Adaptation loops ensure that failures lead to systemic improvements rather than just temporary fixes."
        },
        {
          "id": "data-science-601-l06-q4",
          "text": "During a high-stakes simulation debrief, teams must evaluate:",
          "skillId": "data-science-601-skill-debrief",
          "options": [
            {
              "id": "a",
              "text": "Only the primary success metric"
            },
            {
              "id": "b",
              "text": "Target achievement, unintended side effects, and governance compliance"
            },
            {
              "id": "c",
              "text": "The aesthetic design of the dashboard"
            },
            {
              "id": "d",
              "text": "The speed of the simulation software"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A comprehensive debrief looks beyond primary metrics to assess holistic system impact and compliance."
        },
        {
          "id": "data-science-601-l06-q5",
          "text": "Which mitigation action best addresses an 'ambiguous ownership chain' in a data pipeline?",
          "skillId": "data-science-601-skill-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Increase server capacity"
            },
            {
              "id": "b",
              "text": "Define an accountable owner map and clear escalation rights"
            },
            {
              "id": "c",
              "text": "Ignore the ambiguity if the model works"
            },
            {
              "id": "d",
              "text": "Change the programming language"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear ownership and escalation paths are critical governance controls for resolving ambiguity."
        }
      ]
    },
    {
      "id": "data-science-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "data-science-601-l07-a1",
          "type": "image",
          "title": "Visual Prompt: Accountability Cycle",
          "content": "An animated infographic of the 'Accountability Cycle'. Arrows flow from 'Traceability' (a data log) to 'Review' (a panel icon), then to 'Remediation' (a wrench fixing a gear), and finally to 'Impact' (positive community outcomes)."
        }
      ],
      "chunks": [
        {
          "id": "data-science-601-l07-c1",
          "kind": "concept",
          "title": "Analyzing Stakeholder Impact Distribution",
          "content": "Evaluate how the outcomes of your data models are distributed across diverse stakeholder groups. You will analyze both immediate and delayed effects, ensuring a comprehensive understanding of your project's long-term societal and business impact."
        },
        {
          "id": "data-science-601-l07-c2",
          "kind": "concept",
          "title": "Designing Accountability Systems",
          "content": "Integrity in data science requires robust accountability frameworks. You will learn to implement strict traceability standards, establish transparent review rights, and define clear remediation obligations to build and maintain stakeholder trust."
        },
        {
          "id": "data-science-601-l07-c3",
          "kind": "recap",
          "title": "The Responsible Leadership Checklist",
          "content": "Bridge the gap between strategy, ethics, and operational controls using a responsible leadership checklist. This tool ensures all governance elements synchronize effectively to promote positive public impact and mitigate algorithmic harm."
        }
      ],
      "flashcards": [
        {
          "id": "data-science-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how a system's benefits and harms are allocated across different stakeholder groups and timeframes."
        },
        {
          "id": "data-science-601-l07-f2",
          "front": "Decision Traceability",
          "back": "A complete, auditable record of the data, logic, and ownership behind a decision, enabling accountability."
        },
        {
          "id": "data-science-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making practice that balances performance, risk, ethics, and accountability to ensure positive outcomes."
        }
      ]
    },
    {
      "id": "data-science-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "data-science-601-l08-a1",
          "type": "practice",
          "title": "Visual Prompt: Virtual Defense Panel",
          "content": "A simulated virtual defense room. The main screen shows the student's capstone presentation, while smaller windows show the faces of 'Expert Reviewers' with a live chat feed for Q&A."
        }
      ],
      "chunks": [
        {
          "id": "data-science-601-l08-c1",
          "kind": "practice",
          "title": "Constructing the Capstone Charter and Evidence Pack",
          "content": "Draft a comprehensive capstone charter outlining your project's objectives, scope boundaries, and operating assumptions. You will establish success metrics, define governance controls, and compile an evidence pack to substantiate your findings and recommendations."
        },
        {
          "id": "data-science-601-l08-c2",
          "kind": "recap",
          "title": "Defense Rehearsal and Expert Critique",
          "content": "Engage in a rigorous defense rehearsal to prepare for expert critique. You will simulate panel discussions with technical experts and governance bodies, refining your ability to articulate complex reasoning and defend your methodological choices under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-science-601-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a specialization capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define objective, scope boundaries, and operating assumptions.",
            "Specify at least three measurable indicators and confidence thresholds.",
            "Define escalation and corrective-action criteria for failure scenarios."
          ]
        },
        {
          "id": "data-science-601-l08-act2",
          "type": "debate_simulator",
          "title": "Capstone Defense Panel",
          "description": "Defend your capstone against simulated expert critique focusing on methodological rigor, risk assessment, and ethical accountability."
        }
      ]
    }
  ]
};
