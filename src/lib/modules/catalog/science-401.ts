import type { LearningModule } from "@/lib/modules/types";

export const science_401_Module: LearningModule = {
  "id": "science-401",
  "title": "Scientific Research Strategy and Evidence Governance",
  "description": "Expert-level science curriculum on research design governance, high-uncertainty inference, interdisciplinary evidence synthesis, and policy-facing scientific communication.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "research",
    "governance",
    "evidence"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Design research programs with explicit validity, ethics, and reproducibility controls",
    "Evaluate competing scientific models using uncertainty-aware comparison",
    "Integrate evidence across methods, scales, and disciplines",
    "Assess bias, confounding, and publication-risk influences on conclusions",
    "Communicate high-stakes findings to technical and policy audiences responsibly",
    "Build a capstone research proposal with rigorous decision criteria"
  ],
  "lessons": [
    {
      "id": "science-401-l01",
      "title": "Research Architecture and Validity Frameworks",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "science-401-l01-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-401-l01-c1",
          "kind": "concept",
          "title": "Program-Level Research Design",
          "content": "Impactful research requires a structured design that aligns research questions, methods, data collection, and analytical goals. This coherent framework ensures that every component of the study contributes directly to the intended conclusions.",
          "visualPrompts": [
            "A flowchart diagram illustrating the path from a research question to methods, data collection, analysis, and final conclusions."
          ]
        },
        {
          "id": "science-401-l01-c2",
          "kind": "concept",
          "title": "Validity Dimensions",
          "content": "Research credibility rests on four key validity dimensions. Internal validity confirms causal links. External validity addresses generalizability. Construct validity ensures you're measuring the intended concept. Measurement validity confirms the accuracy of your tools. A robust study must satisfy all four.",
          "visualPrompts": [
            "An infographic with four distinct quadrants, each representing a type of validity (Internal, External, Construct, Measurement) with a simple icon and a one-sentence definition."
          ]
        },
        {
          "id": "science-401-l01-c3",
          "kind": "recap",
          "title": "Governance and Reproducibility",
          "content": "Research governance ensures scientific integrity through key practices. Preregistration commits to an analysis plan before seeing the data. Transparent protocols, open data management, and reproducible analysis pipelines are essential for building trust and verifying findings.",
          "visualPrompts": [
            "A circular diagram showing the cycle of research governance: Preregistration -> Transparent Protocols -> Data Management -> Reproducible Analysis."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "science-401-l01-f1",
          "front": "Internal validity",
          "back": "Confidence that an observed effect is caused by the intended factors, not by other variables."
        },
        {
          "id": "science-401-l01-f2",
          "front": "External validity",
          "back": "The extent to which research findings can be generalized to other populations, settings, or times."
        },
        {
          "id": "science-401-l01-f3",
          "front": "Preregistration",
          "back": "Documenting hypotheses, methods, and analysis plans before research begins to prevent bias."
        }
      ]
    },
    {
      "id": "science-401-l02",
      "title": "Model Competition and Uncertainty Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "science-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-401-l02-c1",
          "kind": "concept",
          "title": "Competing Explanatory Models",
          "content": "Scientists evaluate competing models to find the best explanation for a phenomenon. This comparison involves a trade-off between a model's data fit, its complexity (parsimony), its predictive power, and the plausibility of its underlying assumptions.",
          "visualPrompts": [
            "A visual of a balance scale weighing two different scientific models. One side of the scale is labeled 'Data Fit & Prediction,' the other 'Simplicity & Plausible Assumptions'."
          ]
        },
        {
          "id": "science-401-l02-c2",
          "kind": "practice",
          "title": "Uncertainty Decomposition",
          "content": "Quantifying uncertainty is critical for responsible inference. Total uncertainty can be decomposed into key sources: measurement uncertainty (from data collection tools), structural uncertainty (from model assumptions), and sampling uncertainty (from using a sample to represent a population).",
          "visualPrompts": [
            "A stacked bar chart or a nested diagram breaking down 'Total Uncertainty' into its components: Measurement, Structural, and Sampling Uncertainty."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-401-l02-act1",
          "type": "matching_pairs",
          "title": "Model Metric Match",
          "description": "Match comparison metric to its interpretive role.",
          "pairs": [
            {
              "left": "Predictive error",
              "right": "Out-of-sample performance signal"
            },
            {
              "left": "Model complexity",
              "right": "Risk of overfitting trade-off"
            },
            {
              "left": "Residual structure",
              "right": "Indicator of unmodeled dynamics"
            },
            {
              "left": "Sensitivity profile",
              "right": "Dependence on uncertain assumptions"
            }
          ]
        },
        {
          "id": "science-401-l02-act2",
          "type": "scenario_practice",
          "title": "Competing Hypothesis Debate",
          "description": "Defend one model while acknowledging uncertainty and alternatives.",
          "instructions": [
            "State the strongest evidence for your preferred model.",
            "Identify one result that would falsify your position."
          ]
        }
      ]
    },
    {
      "id": "science-401-l03",
      "title": "Checkpoint 1: Research Validity and Model Inference",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "science-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "science-401-l03-q1",
          "text": "Why is preregistration useful in high-stakes research?",
          "skillId": "science-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "It removes the need for replication"
            },
            {
              "id": "b",
              "text": "It reduces post-hoc analytical drift and selective reporting"
            },
            {
              "id": "c",
              "text": "It guarantees causal proof"
            },
            {
              "id": "d",
              "text": "It prevents all forms of bias"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Preregistration strengthens transparency and inference integrity by committing researchers to a plan before results are known."
        },
        {
          "id": "science-401-l03-q2",
          "text": "A non-random pattern in the residuals after fitting a model often suggests:",
          "skillId": "science-401-skill-models",
          "options": [
            {
              "id": "a",
              "text": "Perfect model adequacy"
            },
            {
              "id": "b",
              "text": "An unmodeled process or a mismatched assumption"
            },
            {
              "id": "c",
              "text": "No need for further analysis"
            },
            {
              "id": "d",
              "text": "A guaranteed causal interpretation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Structured residuals indicate that the model has failed to capture some systematic pattern in the data, suggesting a model deficiency."
        },
        {
          "id": "science-401-l03-q3",
          "text": "External validity addresses whether findings:",
          "skillId": "science-401-skill-validity",
          "options": [
            {
              "id": "a",
              "text": "Generalize beyond the specific sample and context of the study"
            },
            {
              "id": "b",
              "text": "Use the proper measurement units"
            },
            {
              "id": "c",
              "text": "Contain no random noise"
            },
            {
              "id": "d",
              "text": "Are mathematically elegant"
            }
          ],
          "correctOptionId": "a",
          "explanation": "External validity is fundamentally about the broader applicability and generalizability of the study's results."
        },
        {
          "id": "science-401-l03-q4",
          "text": "A robust model comparison should balance goodness-of-fit with:",
          "skillId": "science-401-skill-models",
          "options": [
            {
              "id": "a",
              "text": "Model complexity and robustness to assumptions"
            },
            {
              "id": "b",
              "text": "The narrative appeal of the explanation"
            },
            {
              "id": "c",
              "text": "A single, definitive metric"
            },
            {
              "id": "d",
              "text": "The preference of the author"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Good model selection penalizes excessive complexity to avoid overfitting and considers how sensitive conclusions are to underlying assumptions."
        }
      ]
    },
    {
      "id": "science-401-l04",
      "title": "Bias, Confounding, and Meta-Evidence Evaluation",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "science-401-l04-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-401-l04-c1",
          "kind": "concept",
          "title": "Bias Taxonomy",
          "content": "Bias can systematically distort research conclusions. Key types include selection bias (non-representative samples), measurement bias (flawed data collection), publication bias (selective reporting of 'interesting' results), and analytic bias (flawed data analysis choices).",
          "visualPrompts": [
            "An icon-based graphic illustrating four types of bias: Selection (unbalanced groups), Measurement (a warped ruler), Publication (a file drawer with hidden papers), and Analytic (a deliberately skewed graph)."
          ]
        },
        {
          "id": "science-401-l04-c2",
          "kind": "concept",
          "title": "Confounding Architecture",
          "content": "A confounder is a third variable that creates a spurious association between an exposure and an outcome. Failing to control for confounding through careful study design or statistical adjustment can lead to incorrect causal inferences.",
          "visualPrompts": [
            "A simple directed acyclic graph (DAG) showing a Confounder variable with arrows pointing to both the 'Exposure' and the 'Outcome', creating a 'backdoor path'."
          ]
        },
        {
          "id": "science-401-l04-c3",
          "kind": "recap",
          "title": "Meta-Evidence Reasoning",
          "content": "Confidence in a scientific claim grows with the convergence of evidence. This occurs when multiple, independent lines of inquiry—using different methods, datasets, and assumptions—all point toward the same conclusion, supported by a plausible mechanism.",
          "visualPrompts": [
            "A funnel plot diagram where data points from multiple studies cluster around a central effect size, illustrating evidence convergence."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "science-401-l04-f1",
          "front": "Publication bias",
          "back": "Systematic distortion of the scientific literature due to the selective publication of studies with positive or statistically significant results."
        },
        {
          "id": "science-401-l04-f2",
          "front": "Confounder",
          "back": "A third variable that is associated with both the predictor and outcome variables, creating a spurious correlation."
        },
        {
          "id": "science-401-l04-f3",
          "front": "Evidence convergence",
          "back": "The principle that confidence in a conclusion increases when it is supported by multiple, independent lines of evidence."
        }
      ]
    },
    {
      "id": "science-401-l05",
      "title": "Policy-Facing Scientific Communication Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "science-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-401-l05-c1",
          "kind": "practice",
          "title": "Decision-Grade Science Communication",
          "content": "Communicating science for policy requires translating complex findings into decision-relevant information. This means providing a clear 'bottom line' conclusion, but also qualifying it with confidence intervals, key assumptions, and the potential implications of alternative scenarios.",
          "visualPrompts": [
            "A mock policy brief dashboard showing a headline finding, a confidence interval bar, a list of key assumptions, and a simple risk meter."
          ]
        },
        {
          "id": "science-401-l05-c2",
          "kind": "recap",
          "title": "Avoiding Overclaim",
          "content": "To maintain credibility, experts must avoid overclaiming. This involves clearly stating what the evidence supports, what remains unknown, and what specific future evidence would be required to change the current recommendation. This transparency builds trust and supports robust decision-making.",
          "visualPrompts": [
            "An illustration of a document with two columns labeled 'What We Know (Evidence-Based)' and 'What We Don't Know (Research Gaps)', highlighting the boundary of current knowledge."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Statement Quality Sort",
          "description": "Sort statements by their communication rigor.",
          "buckets": [
            "Rigor Strong",
            "Rigor Weak"
          ],
          "items": [
            {
              "text": "Result presented with an uncertainty interval and a note on key assumptions.",
              "bucket": "Rigor Strong"
            },
            {
              "text": "An absolute claim made without any confidence bounds or context.",
              "bucket": "Rigor Weak"
            },
            {
              "text": "A recommendation that includes an analysis of how it might change under different scenarios.",
              "bucket": "Rigor Strong"
            },
            {
              "text": "A policy demand that is not explicitly linked to the presented evidence.",
              "bucket": "Rigor Weak"
            }
          ]
        },
        {
          "id": "science-401-l05-act2",
          "type": "scenario_practice",
          "title": "Briefing Simulation",
          "description": "Prepare a concise science briefing for decision-makers.",
          "instructions": [
            "State one clear headline finding.",
            "State one key uncertainty or assumption that could change the interpretation."
          ]
        }
      ]
    },
    {
      "id": "science-401-l06",
      "title": "Checkpoint 2: Evidence Governance and Decision Communication",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "science-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "science-401-l06-q1",
          "text": "Why is overconfident communication of scientific results to policymakers risky?",
          "skillId": "science-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "It improves the tracking of uncertainty"
            },
            {
              "id": "b",
              "text": "It hides critical assumptions and can misguide high-stakes decisions"
            },
            {
              "id": "c",
              "text": "It always increases the quality of the evidence"
            },
            {
              "id": "d",
              "text": "It removes all limitations from the model"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decisions based on incomplete information are fragile. Hiding uncertainty and assumptions prevents decision-makers from understanding the full context and risks."
        },
        {
          "id": "science-401-l06-q2",
          "text": "A credible, high-stakes scientific recommendation should always include:",
          "skillId": "science-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only a single point estimate for simplicity"
            },
            {
              "id": "b",
              "text": "The core evidence, uncertainty bounds, key assumptions, and decision implications"
            },
            {
              "id": "c",
              "text": "No comparison to alternative models"
            },
            {
              "id": "d",
              "text": "No discussion of potential biases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This complete framing provides the necessary context for responsible, transparent, and traceable decision-making."
        },
        {
          "id": "science-401-l06-q3",
          "text": "Evidence convergence from independent methods primarily improves:",
          "skillId": "science-401-skill-evidence",
          "options": [
            {
              "id": "a",
              "text": "The simplicity of the narrative"
            },
            {
              "id": "b",
              "text": "The robustness of one's confidence in the finding"
            },
            {
              "id": "c",
              "text": "The complexity of the model"
            },
            {
              "id": "d",
              "text": "The certainty that no bias exists"
            }
          ],
          "correctOptionId": "b",
          "explanation": "If different methods with different assumptions all point to the same answer, the conclusion is less likely to be an artifact of a single flawed method."
        },
        {
          "id": "science-401-l06-q4",
          "text": "The risk of confounding is best addressed by:",
          "skillId": "science-401-skill-validity",
          "options": [
            {
              "id": "a",
              "text": "Ignoring alternative causal pathways"
            },
            {
              "id": "b",
              "text": "Careful design controls and a transparent statistical adjustment strategy"
            },
            {
              "id": "c",
              "text": "Only increasing the sample size"
            },
            {
              "id": "d",
              "text": "Removing all variables except the two of interest"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Confounding must be addressed proactively through study design (e.g., randomization) or reactively through principled statistical control."
        }
      ]
    },
    {
      "id": "science-401-l07",
      "title": "Capstone: Research Program Proposal Studio",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "science-401-l07-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "science-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "The capstone project requires you to design a complete research program for a complex scientific question. Your proposal must integrate a phased methodology, explicit uncertainty controls, a robust ethical framework, and a plan for generating decision-relevant outputs.",
          "visualPrompts": [
            "An icon of a detailed architectural blueprint, symbolizing the structure and planning of a research program."
          ]
        },
        {
          "id": "science-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "Your capstone proposal will be assessed on key criteria: the alignment between your research question and methods, the rigor of your proposed safeguards for validity and reproducibility, and the clarity with which you define the interpretive boundaries of your potential findings.",
          "visualPrompts": [
            "A simple checklist graphic with three items: 'Question-Method Alignment', 'Validity & Reproducibility Safeguards', and 'Clear Interpretive Boundaries'."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Define your primary research question and its measurable outcomes.",
          "List the top three drivers of uncertainty in your proposed study and your plan to mitigate them.",
          "State what specific future evidence would cause you to revise your conclusions or recommendations."
        ]
      }
    }
  ]
};
