import type { LearningModule } from "@/lib/modules/types";

export const Math401Module: LearningModule = {
  "id": "math-401",
  "title": "Mathematical Systems, Proof, and Decision Science",
  "description": "Expert-level mathematics curriculum integrating proof strategy, optimization, uncertainty, and high-stakes quantitative decision frameworks.",
  "subject": "Math",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "proof",
    "optimization",
    "decision-science"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Construct mathematically rigorous arguments using proof frameworks",
    "Evaluate optimization problems under constraints and trade-offs",
    "Interpret uncertainty, sensitivity, and error propagation in quantitative systems",
    "Compare deterministic and probabilistic model assumptions",
    "Communicate technical conclusions with transparent limitations",
    "Design and defend a capstone quantitative decision proposal"
  ],
  "lessons": [
    {
      "id": "math-401-l01",
      "title": "Proof Strategy and Mathematical Argumentation",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "math-401-l01-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l01-c1",
          "kind": "concept",
          "title": "Claim-Evidence-Logic Structure",
          "content": "The quality of a mathematical proof is determined by how clearly the claims are stated, how well the steps are justified, and how smoothly the logical transitions flow from one idea to the next. It is important to remember that the structure of an argument is just as crucial as the mathematical symbols and calculations used. A well-organized proof helps others follow your reasoning and understand your conclusions.\nContext recap: The quality of a mathematical proof is determined by how clearly the claims are stated, how well the steps are justified, and how smoothly the logical transitions flow from one idea to the next. It is important to remember that the structure of an argument is just as crucial as the mathematical symbols and calculations used. A well-organized proof helps others follow your reasoning and understand your conclusions."
        },
        {
          "id": "math-401-l01-c2",
          "kind": "concept",
          "title": "Direct, Contrapositive, and Contradiction",
          "content": "There are various forms of proofs, such as direct proofs, contrapositive proofs, and proofs by contradiction, and each type is best suited for different kinds of mathematical statements. Experienced mathematicians carefully select their proof strategy based on the specific structure of the hypotheses they are working with and the conclusion they aim to reach. Understanding these strategies can greatly enhance your problem-solving skills.\nContext recap: There are various forms of proofs, such as direct proofs, contrapositive proofs, and proofs by contradiction, and each type is best suited for different kinds of mathematical statements. Experienced mathematicians carefully select their proof strategy based on the specific structure of the hypotheses they are working with and the conclusion they aim to reach. Understanding these strategies can greatly enhance your problem-solving skills."
        },
        {
          "id": "math-401-l01-c3",
          "kind": "recap",
          "title": "Proof Review Standards",
          "content": "A strong proof clearly defines all assumptions, avoids any hidden steps that could confuse the reader, and maintains a logical flow of implications throughout the argument. This means that every step should be justified and lead logically to the next, ensuring that the proof is not only valid but also easy to follow. By adhering to these standards, you can create robust and convincing mathematical arguments.\nContext recap: A strong proof clearly defines all assumptions, avoids any hidden steps that could confuse the reader, and maintains a logical flow of implications throughout the argument. This means that every step should be justified and lead logically to the next, ensuring that the proof is not only valid but also easy to follow. By adhering to these standards, you can create robust and convincing mathematical arguments."
        }
      ],
      "flashcards": [
        {
          "id": "math-401-l01-f1",
          "front": "Direct proof",
          "back": "Derive conclusion directly from assumptions through valid implications."
        },
        {
          "id": "math-401-l01-f2",
          "front": "Contrapositive",
          "back": "Prove not-Q implies not-P instead of P implies Q."
        },
        {
          "id": "math-401-l01-f3",
          "front": "Proof by contradiction",
          "back": "Assume opposite of claim and derive logical impossibility."
        }
      ]
    },
    {
      "id": "math-401-l02",
      "title": "Optimization and Constraint Reasoning Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "math-401-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l02-c1",
          "kind": "concept",
          "title": "Objective and Feasible Region",
          "content": "When tackling optimization problems, it is essential to have a clear definition of your objective, which is the goal you want to achieve. Additionally, you must identify the constraints that define the feasible region, which is the set of possible solutions that meet all requirements. Understanding these concepts will help you effectively navigate and solve optimization challenges.\nContext recap: When tackling optimization problems, it is essential to have a clear definition of your objective, which is the goal you want to achieve. Additionally, you must identify the constraints that define the feasible region, which is the set of possible solutions that meet all requirements. Understanding these concepts will help you effectively navigate and solve optimization challenges."
        },
        {
          "id": "math-401-l02-c2",
          "kind": "practice",
          "title": "Trade-off Analysis",
          "content": "In real-world optimization scenarios, you often face competing objectives, which means you may need to balance different goals against each other. Additionally, the outcomes can be sensitive to changes in parameters, meaning that small adjustments can lead to different results. Learning how to analyze these trade-offs is crucial for making informed decisions in complex situations.\nContext recap: In real-world optimization scenarios, you often face competing objectives, which means you may need to balance different goals against each other. Additionally, the outcomes can be sensitive to changes in parameters, meaning that small adjustments can lead to different results. Learning how to analyze these trade-offs is crucial for making informed decisions in complex situations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-401-l02-act1",
          "type": "matching_pairs",
          "title": "Optimization Concept Match",
          "description": "Match optimization terms to strongest interpretation.",
          "pairs": [
            {
              "left": "Objective function",
              "right": "Quantity to maximize or minimize"
            },
            {
              "left": "Constraint",
              "right": "Limit defining feasible solutions"
            },
            {
              "left": "Feasible region",
              "right": "All solutions satisfying constraints"
            },
            {
              "left": "Sensitivity",
              "right": "How solution changes with parameter shifts"
            }
          ]
        },
        {
          "id": "math-401-l02-act2",
          "type": "scenario_practice",
          "title": "Resource Allocation Drill",
          "description": "Defend an optimization choice under budget and capacity limits.",
          "instructions": [
            "State objective and constraints clearly.",
            "Explain one sensitivity risk in your solution."
          ]
        }
      ]
    },
    {
      "id": "math-401-l03",
      "title": "Checkpoint 1: Proof and Optimization",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "math-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "math-401-l03-q1",
          "text": "Why choose proof by contradiction for some claims?",
          "skillId": "math-401-skill-proof",
          "options": [
            {
              "id": "a",
              "text": "To avoid assumptions"
            },
            {
              "id": "b",
              "text": "To show opposite assumption leads to impossibility"
            },
            {
              "id": "c",
              "text": "To skip logical steps"
            },
            {
              "id": "d",
              "text": "To remove conclusion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Contradiction is effective when direct proof is cumbersome."
        },
        {
          "id": "math-401-l03-q2",
          "text": "A solution outside all constraints is:",
          "skillId": "math-401-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "Optimal"
            },
            {
              "id": "b",
              "text": "Feasible"
            },
            {
              "id": "c",
              "text": "Infeasible"
            },
            {
              "id": "d",
              "text": "Guaranteed best"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Only feasible candidates can be considered for optimality."
        },
        {
          "id": "math-401-l03-q3",
          "text": "Why perform sensitivity analysis?",
          "skillId": "math-401-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "To hide uncertainty"
            },
            {
              "id": "b",
              "text": "To assess robustness of solution under parameter change"
            },
            {
              "id": "c",
              "text": "To force one answer"
            },
            {
              "id": "d",
              "text": "To avoid constraints"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Sensitivity analysis evaluates stability of decisions."
        },
        {
          "id": "math-401-l03-q4",
          "text": "A rigorous proof should always include:",
          "skillId": "math-401-skill-proof",
          "options": [
            {
              "id": "a",
              "text": "Hidden assumptions"
            },
            {
              "id": "b",
              "text": "Clearly stated assumptions and valid logical transitions"
            },
            {
              "id": "c",
              "text": "Only final statement"
            },
            {
              "id": "d",
              "text": "No definitions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparency and valid logic are core proof requirements."
        }
      ]
    },
    {
      "id": "math-401-l04",
      "title": "Uncertainty, Inference, and Error Propagation",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "math-401-l04-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l04-c1",
          "kind": "concept",
          "title": "Measurement and Model Uncertainty",
          "content": "When making quantitative conclusions, it is important to recognize that uncertainty can arise from both the quality of the data you are using and the assumptions made in your models. This means that the results you obtain may not be completely certain, and understanding the sources of this uncertainty is vital for interpreting your findings accurately.\nContext recap: When making quantitative conclusions, it is important to recognize that uncertainty can arise from both the quality of the data you are using and the assumptions made in your models. This means that the results you obtain may not be completely certain, and understanding the sources of this uncertainty is vital for interpreting your findings accurately."
        },
        {
          "id": "math-401-l04-c2",
          "kind": "concept",
          "title": "Error Propagation",
          "content": "Even small errors in input data can grow larger through nonlinear operations, which can significantly affect the credibility of your output results. This phenomenon, known as error propagation, highlights the importance of accuracy in your initial measurements and calculations. Being aware of how errors can compound helps you to better manage and minimize uncertainty in your work.\nContext recap: Even small errors in input data can grow larger through nonlinear operations, which can significantly affect the credibility of your output results. This phenomenon, known as error propagation, highlights the importance of accuracy in your initial measurements and calculations. Being aware of how errors can compound helps you to better manage and minimize uncertainty in your work."
        },
        {
          "id": "math-401-l04-c3",
          "kind": "recap",
          "title": "Responsible Communication",
          "content": "Effective communication of expert findings involves reporting not just point estimates, but also ranges, confidence levels, and known limitations. This approach provides a more comprehensive understanding of the results and their implications. By communicating responsibly, you help others grasp the uncertainty and reliability of your conclusions.\nContext recap: Effective communication of expert findings involves reporting not just point estimates, but also ranges, confidence levels, and known limitations. This approach provides a more comprehensive understanding of the results and their implications. By communicating responsibly, you help others grasp the uncertainty and reliability of your conclusions."
        }
      ],
      "flashcards": [
        {
          "id": "math-401-l04-f1",
          "front": "Uncertainty interval",
          "back": "Range of plausible values for a quantity."
        },
        {
          "id": "math-401-l04-f2",
          "front": "Sensitivity",
          "back": "Degree to which outputs respond to input changes."
        },
        {
          "id": "math-401-l04-f3",
          "front": "Error propagation",
          "back": "How uncertainty transfers through calculations."
        }
      ]
    },
    {
      "id": "math-401-l05",
      "title": "Decision Modeling and Risk Trade-off Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "math-401-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l05-c1",
          "kind": "practice",
          "title": "Model Selection Under Uncertainty",
          "content": "The quality of your decisions can be greatly enhanced when you compare different alternatives using clear assumptions, potential payoffs, and various risk scenarios. By systematically evaluating these factors, you can make more informed choices that take into account the uncertainties and potential outcomes associated with each option.\nContext recap: The quality of your decisions can be greatly enhanced when you compare different alternatives using clear assumptions, potential payoffs, and various risk scenarios. By systematically evaluating these factors, you can make more informed choices that take into account the uncertainties and potential outcomes associated with each option."
        },
        {
          "id": "math-401-l05-c2",
          "kind": "recap",
          "title": "Robustness Criteria",
          "content": "Robust decisions are those that remain acceptable even when faced with a reasonable range of uncertainty. This means that your choices should be resilient to changes in the conditions or assumptions that underlie them. Understanding robustness criteria helps you to make decisions that are not only effective but also adaptable to varying circumstances.\nContext recap: Robust decisions are those that remain acceptable even when faced with a reasonable range of uncertainty. This means that your choices should be resilient to changes in the conditions or assumptions that underlie them. Understanding robustness criteria helps you to make decisions that are not only effective but also adaptable to varying circumstances."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Risk Signal Sort",
          "description": "Sort indicators by strategic interpretation.",
          "buckets": [
            "Data Risk",
            "Model Risk",
            "Execution Risk"
          ],
          "items": [
            {
              "text": "Sparse sample size",
              "bucket": "Data Risk"
            },
            {
              "text": "Unvalidated structural assumption",
              "bucket": "Model Risk"
            },
            {
              "text": "Resource bottleneck in implementation",
              "bucket": "Execution Risk"
            },
            {
              "text": "High measurement variance",
              "bucket": "Data Risk"
            }
          ]
        },
        {
          "id": "math-401-l05-act2",
          "type": "scenario_practice",
          "title": "Policy Choice Debate",
          "description": "Defend one quantitative policy option under uncertainty.",
          "instructions": [
            "State one strongest quantitative argument.",
            "State one limitation that could change your recommendation."
          ]
        }
      ]
    },
    {
      "id": "math-401-l06",
      "title": "Checkpoint 2: Uncertainty and Decision Logic",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "math-401-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "math-401-l06-q1",
          "text": "Why report uncertainty intervals with estimates?",
          "skillId": "math-401-skill-uncertainty",
          "options": [
            {
              "id": "a",
              "text": "To reduce clarity"
            },
            {
              "id": "b",
              "text": "To communicate plausible range and confidence"
            },
            {
              "id": "c",
              "text": "To avoid data collection"
            },
            {
              "id": "d",
              "text": "To eliminate model assumptions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Intervals communicate uncertainty more honestly than single values."
        },
        {
          "id": "math-401-l06-q2",
          "text": "A robust decision is one that:",
          "skillId": "math-401-skill-decision",
          "options": [
            {
              "id": "a",
              "text": "Depends on one narrow assumption"
            },
            {
              "id": "b",
              "text": "Performs acceptably across reasonable uncertainty cases"
            },
            {
              "id": "c",
              "text": "Ignores constraints"
            },
            {
              "id": "d",
              "text": "Maximizes one metric only"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Robustness reflects stability under changing conditions."
        },
        {
          "id": "math-401-l06-q3",
          "text": "Most credible quantitative recommendation includes:",
          "skillId": "math-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Result only"
            },
            {
              "id": "b",
              "text": "Assumptions, uncertainty, trade-offs, and evidence"
            },
            {
              "id": "c",
              "text": "No risk discussion"
            },
            {
              "id": "d",
              "text": "No scenario analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision-makers need transparent assumptions and limitations."
        },
        {
          "id": "math-401-l06-q4",
          "text": "Error propagation is most important when:",
          "skillId": "math-401-skill-uncertainty",
          "options": [
            {
              "id": "a",
              "text": "Inputs are exact"
            },
            {
              "id": "b",
              "text": "Calculated outputs depend on uncertain inputs"
            },
            {
              "id": "c",
              "text": "No calculations occur"
            },
            {
              "id": "d",
              "text": "Model is linear and perfect"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Uncertain inputs transmit uncertainty into outputs."
        }
      ]
    },
    {
      "id": "math-401-l07",
      "title": "Capstone: Quantitative Decision Proposal Studio",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "math-401-l07-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "In this capstone project, you will develop a comprehensive decision model that addresses a complex scenario. This model will need to account for multiple constraints, various sources of uncertainty, and competing objectives. Engaging in this process will allow you to apply your knowledge and skills in a practical setting, preparing you for real-world decision-making challenges.\nContext recap: In this capstone project, you will develop a comprehensive decision model that addresses a complex scenario. This model will need to account for multiple constraints, various sources of uncertainty, and competing objectives. Engaging in this process will allow you to apply your knowledge and skills in a practical setting, preparing you for real-world decision-making challenges."
        },
        {
          "id": "math-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "When assessing the quality of your proposals, it is important to include rigorous logic, clearly stated assumptions, sensitivity checks, and well-defined boundaries for your recommendations. These criteria ensure that your proposals are not only well-founded but also practical and actionable. By adhering to these standards, you can enhance the effectiveness of your decision-making process.\nContext recap: When assessing the quality of your proposals, it is important to include rigorous logic, clearly stated assumptions, sensitivity checks, and well-defined boundaries for your recommendations. These criteria ensure that your proposals are not only well-founded but also practical and actionable. By adhering to these standards, you can enhance the effectiveness of your decision-making process."
        }
      ],
      "metadata": {
        "prompts": [
          "State your objective function and constraints clearly.",
          "Identify your top three uncertainty drivers.",
          "Define what evidence would overturn your recommendation."
        ]
      }
    }
  ]
};
