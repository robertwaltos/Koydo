import type { LearningModule } from "@/lib/modules/types";

export const Science401Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "To conduct impactful research, it is essential to create a well-structured design that connects the research questions, the methods used to investigate them, the data collection processes, and the goals for drawing conclusions. This alignment should be maintained throughout all stages of the study to ensure clarity and effectiveness.\nContext recap: To conduct impactful research, it is essential to create a well-structured design that connects the research questions, the methods used to investigate them, the data collection processes, and the goals for drawing conclusions. This alignment should be maintained throughout all stages of the study to ensure clarity and effectiveness."
        },
        {
          "id": "science-401-l01-c2",
          "kind": "concept",
          "title": "Validity Dimensions",
          "content": "When evaluating research, it is important to consider four key types of validity: internal validity, which assesses whether the study accurately reflects the relationship between variables; external validity, which examines the generalizability of the findings; construct validity, which ensures that the study accurately measures the concepts it intends to; and measurement validity, which checks the accuracy of the tools used for data collection. All these dimensions must be carefully evaluated to support credible conclusions.\nContext recap: When evaluating research, it is important to consider four key types of validity: internal validity, which assesses whether the study accurately reflects the relationship between variables; external validity, which examines the generalizability of the findings; construct validity, which ensures that the study accurately measures the concepts it intends to; and measurement validity, which checks the accuracy of the tools used for data collection. All these dimensions must be carefully evaluated to support credible conclusions."
        },
        {
          "id": "science-401-l01-c3",
          "kind": "recap",
          "title": "Governance and Reproducibility",
          "content": "Research governance involves several important practices that help ensure the integrity and reliability of scientific studies. This includes preregistration of studies to outline the research plan in advance, maintaining transparency in research protocols, responsible management of data, and creating pathways for reproducible analysis. These practices are crucial for building trust in scientific findings.\nContext recap: Research governance involves several important practices that help ensure the integrity and reliability of scientific studies. This includes preregistration of studies to outline the research plan in advance, maintaining transparency in research protocols, responsible management of data, and creating pathways for reproducible analysis. These practices are crucial for building trust in scientific findings."
        }
      ],
      "flashcards": [
        {
          "id": "science-401-l01-f1",
          "front": "Internal validity",
          "back": "Confidence that observed effect is caused by intended factors."
        },
        {
          "id": "science-401-l01-f2",
          "front": "External validity",
          "back": "Generalizability of findings beyond study conditions."
        },
        {
          "id": "science-401-l01-f3",
          "front": "Preregistration",
          "back": "Documenting hypotheses and analysis plans before data outcomes are known."
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
          "content": "In the field of science, experts often compare various plausible models to explain phenomena. This involves assessing how well each model fits the data, its complexity, its ability to make accurate predictions, and the assumptions it relies on. By weighing these factors, scientists can determine which model provides the best explanation for the observed outcomes.\nContext recap: In the field of science, experts often compare various plausible models to explain phenomena. This involves assessing how well each model fits the data, its complexity, its ability to make accurate predictions, and the assumptions it relies on. By weighing these factors, scientists can determine which model provides the best explanation for the observed outcomes."
        },
        {
          "id": "science-401-l02-c2",
          "kind": "practice",
          "title": "Uncertainty Decomposition",
          "content": "To effectively communicate decisions based on scientific findings, it is important to break down uncertainty into three main components: measurement uncertainty, which relates to the accuracy of the data collected; structural uncertainty, which pertains to the assumptions made in the model; and sampling uncertainty, which involves the representativeness of the data sample. By understanding these components, clearer communication about the implications of the findings can be achieved.\nContext recap: To effectively communicate decisions based on scientific findings, it is important to break down uncertainty into three main components: measurement uncertainty, which relates to the accuracy of the data collected; structural uncertainty, which pertains to the assumptions made in the model; and sampling uncertainty, which involves the representativeness of the data sample. By understanding these components, clearer communication about the implications of the findings can be achieved."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-401-l02-act1",
          "type": "matching_pairs",
          "title": "Model Metric Match",
          "description": "Match comparison metric to interpretive role.",
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
            "State strongest evidence for your preferred model.",
            "State one result that would falsify your position."
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
              "text": "It removes need for replication"
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
              "text": "It prevents all bias"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Preregistration strengthens transparency and inference integrity."
        },
        {
          "id": "science-401-l03-q2",
          "text": "Residual structure after fitting often suggests:",
          "skillId": "science-401-skill-models",
          "options": [
            {
              "id": "a",
              "text": "Perfect model adequacy"
            },
            {
              "id": "b",
              "text": "Potential unmodeled process or assumption mismatch"
            },
            {
              "id": "c",
              "text": "No need for further analysis"
            },
            {
              "id": "d",
              "text": "Guaranteed causal interpretation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Structured residuals indicate likely model deficiency."
        },
        {
          "id": "science-401-l03-q3",
          "text": "External validity addresses whether findings:",
          "skillId": "science-401-skill-validity",
          "options": [
            {
              "id": "a",
              "text": "Generalize beyond the sample context"
            },
            {
              "id": "b",
              "text": "Use proper units"
            },
            {
              "id": "c",
              "text": "Contain no noise"
            },
            {
              "id": "d",
              "text": "Are mathematically elegant"
            }
          ],
          "correctOptionId": "a",
          "explanation": "External validity concerns broader applicability of results."
        },
        {
          "id": "science-401-l03-q4",
          "text": "Model comparison should balance fit with:",
          "skillId": "science-401-skill-models",
          "options": [
            {
              "id": "a",
              "text": "Complexity and robustness"
            },
            {
              "id": "b",
              "text": "Narrative appeal"
            },
            {
              "id": "c",
              "text": "Single metric only"
            },
            {
              "id": "d",
              "text": "Author preference"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Overfitting risk and robustness are central comparison dimensions."
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
          "content": "There are different types of bias that can affect research findings, including selection bias, which occurs when certain groups are favored in the study; measurement bias, which happens when the data collection methods are flawed; publication bias, where only certain results are published; and analytic bias, which arises from errors in data analysis. Each of these biases can independently distort the conclusions drawn from research.\nContext recap: There are different types of bias that can affect research findings, including selection bias, which occurs when certain groups are favored in the study; measurement bias, which happens when the data collection methods are flawed; publication bias, where only certain results are published; and analytic bias, which arises from errors in data analysis. Each of these biases can independently distort the conclusions drawn from research."
        },
        {
          "id": "science-401-l04-c2",
          "kind": "concept",
          "title": "Confounding Architecture",
          "content": "Confounding pathways can create misleading interpretations of research results. These pathways can mimic the effects of the variables being studied unless the research design or statistical controls are strong enough to account for them. It is crucial for researchers to identify and manage these confounding factors to ensure accurate conclusions.\nContext recap: Confounding pathways can create misleading interpretations of research results. These pathways can mimic the effects of the variables being studied unless the research design or statistical controls are strong enough to account for them. It is crucial for researchers to identify and manage these confounding factors to ensure accurate conclusions."
        },
        {
          "id": "science-401-l04-c3",
          "kind": "recap",
          "title": "Meta-Evidence Reasoning",
          "content": "Scientific confidence increases when multiple independent studies yield similar results and support the same direction of effect. Additionally, the plausibility of the mechanisms behind these effects strengthens the overall confidence in the findings. This convergence of evidence is essential for establishing reliable scientific knowledge.\nContext recap: Scientific confidence increases when multiple independent studies yield similar results and support the same direction of effect. Additionally, the plausibility of the mechanisms behind these effects strengthens the overall confidence in the findings. This convergence of evidence is essential for establishing reliable scientific knowledge."
        }
      ],
      "flashcards": [
        {
          "id": "science-401-l04-f1",
          "front": "Publication bias",
          "back": "Distortion from selective reporting of positive or significant outcomes."
        },
        {
          "id": "science-401-l04-f2",
          "front": "Confounder",
          "back": "Variable associated with both predictor and outcome, distorting causal inference."
        },
        {
          "id": "science-401-l04-f3",
          "front": "Evidence convergence",
          "back": "Agreement across independent methods and datasets."
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
          "content": "When communicating scientific findings to policy audiences, it is important to present clear conclusions that summarize the research outcomes. Additionally, providing ranges of confidence, discussing the implications of different scenarios, and outlining explicit boundaries of uncertainty are essential for effective communication. This helps policymakers make informed decisions based on the evidence presented.\nContext recap: When communicating scientific findings to policy audiences, it is important to present clear conclusions that summarize the research outcomes. Additionally, providing ranges of confidence, discussing the implications of different scenarios, and outlining explicit boundaries of uncertainty are essential for effective communication. This helps policymakers make informed decisions based on the evidence presented."
        },
        {
          "id": "science-401-l05-c2",
          "kind": "recap",
          "title": "Avoiding Overclaim",
          "content": "Experts should clearly communicate what the data supports, while also pointing out any areas that are still unclear or unresolved. Additionally, it is crucial to specify what further evidence could lead to changes in the recommendations provided. This level of transparency is essential for fostering trust and understanding between scientists and policymakers, ensuring that decisions are based on the best available information.\nContext recap: Experts should clearly communicate what the data supports, while also pointing out any areas that are still unclear or unresolved. Additionally, it is crucial to specify what further evidence could lead to changes in the recommendations provided. This level of transparency is essential for fostering trust and understanding between scientists and policymakers, ensuring that decisions are based on the best available information."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Statement Quality Sort",
          "description": "Sort statements by communication rigor.",
          "buckets": [
            "Rigor Strong",
            "Rigor Weak"
          ],
          "items": [
            {
              "text": "Result with uncertainty interval and assumption note",
              "bucket": "Rigor Strong"
            },
            {
              "text": "Absolute claim without confidence bounds",
              "bucket": "Rigor Weak"
            },
            {
              "text": "Recommendation with scenario sensitivity",
              "bucket": "Rigor Strong"
            },
            {
              "text": "Policy demand with no evidence link",
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
            "State one uncertainty condition that changes interpretation."
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
          "text": "Why is overconfident policy communication risky?",
          "skillId": "science-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "It improves uncertainty tracking"
            },
            {
              "id": "b",
              "text": "It hides assumptions and can misguide decisions"
            },
            {
              "id": "c",
              "text": "It always increases evidence quality"
            },
            {
              "id": "d",
              "text": "It removes model limitations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decisions degrade when uncertainty and assumptions are hidden."
        },
        {
          "id": "science-401-l06-q2",
          "text": "Most credible high-stakes scientific recommendation includes:",
          "skillId": "science-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Single estimate only"
            },
            {
              "id": "b",
              "text": "Evidence, uncertainty bounds, assumptions, and decision implications"
            },
            {
              "id": "c",
              "text": "No model comparison"
            },
            {
              "id": "d",
              "text": "No bias discussion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Complete framing supports responsible and traceable decisions."
        },
        {
          "id": "science-401-l06-q3",
          "text": "Evidence convergence from independent methods primarily improves:",
          "skillId": "science-401-skill-evidence",
          "options": [
            {
              "id": "a",
              "text": "Narrative simplicity"
            },
            {
              "id": "b",
              "text": "Confidence robustness"
            },
            {
              "id": "c",
              "text": "Model complexity"
            },
            {
              "id": "d",
              "text": "Bias certainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Independent convergence reduces single-method fragility."
        },
        {
          "id": "science-401-l06-q4",
          "text": "Confounding risk is best addressed by:",
          "skillId": "science-401-skill-validity",
          "options": [
            {
              "id": "a",
              "text": "Ignoring alternative pathways"
            },
            {
              "id": "b",
              "text": "Design controls and transparent adjustment strategy"
            },
            {
              "id": "c",
              "text": "Only increasing sample size"
            },
            {
              "id": "d",
              "text": "Removing all variables"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Confounding requires explicit design and analytic controls."
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
          "content": "In this capstone project, you will design a comprehensive research program that addresses a complex scientific question. Your proposal should include a phased methodology that outlines how you will conduct the research, controls for uncertainty to ensure reliable results, an ethical framework to guide your work, and outputs that are useful for decision-making. This project will help you apply what you have learned in a practical way.\nContext recap: In this capstone project, you will design a comprehensive research program that addresses a complex scientific question. Your proposal should include a phased methodology that outlines how you will conduct the research, controls for uncertainty to ensure reliable results, an ethical framework to guide your work, and outputs that are useful for decision-making. This project will help you apply what you have learned in a practical way."
        },
        {
          "id": "science-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "When assessing research proposals, it is important to ensure that the methods used align with the research questions being asked. Additionally, strong proposals should clearly define the safeguards for validity and effectively communicate the boundaries of interpretation for the results. This clarity is essential for ensuring that the research can be understood and applied appropriately.\nContext recap: When assessing research proposals, it is important to ensure that the methods used align with the research questions being asked. Additionally, strong proposals should clearly define the safeguards for validity and effectively communicate the boundaries of interpretation for the results. This clarity is essential for ensuring that the research can be understood and applied appropriately."
        }
      ],
      "metadata": {
        "prompts": [
          "Define your primary question and measurable outcomes.",
          "List top three uncertainty drivers and mitigation plan.",
          "State what future evidence would revise your recommendations."
        ]
      }
    }
  ]
};
