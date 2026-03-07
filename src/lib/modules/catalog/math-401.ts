import type { LearningModule } from "@/lib/modules/types";

export const math_401_Module: LearningModule = {
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
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "skills": [
    {
      "id": "math-401-skill-proof",
      "name": "Proof and Argumentation"
    },
    {
      "id": "math-401-skill-optimization",
      "name": "Optimization and Constraints"
    },
    {
      "id": "math-401-skill-uncertainty",
      "name": "Uncertainty and Error Analysis"
    },
    {
      "id": "math-401-skill-decision",
      "name": "Decision Modeling"
    },
    {
      "id": "math-401-skill-communication",
      "name": "Technical Communication"
    }
  ],
  "learningObjectives": [
    "Construct rigorous mathematical arguments using formal proof frameworks.",
    "Formulate and evaluate optimization problems under specified constraints and trade-offs.",
    "Analyze and interpret the impact of uncertainty, sensitivity, and error propagation in quantitative models.",
    "Distinguish between deterministic and probabilistic modeling assumptions and their implications.",
    "Communicate complex technical conclusions, including transparent assumptions and limitations.",
    "Design, justify, and defend a comprehensive quantitative decision proposal in a capstone project."
  ],
  "lessons": [
    {
      "id": "math-401-l01",
      "title": "Proof Strategy and Mathematical Argumentation",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "math-401-l01-a1",
          "type": "practice",
          "title": "Proof Construction",
          "content": "Construct a short proof for a given theorem using each of the three primary strategies: direct, contrapositive, and contradiction."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l01-c1",
          "kind": "concept",
          "title": "The Anatomy of a Proof",
          "content": "A mathematical proof is a structured argument that demonstrates the truth of a statement. Its quality depends on three pillars: a clear claim (the theorem), valid evidence (axioms, definitions, and prior results), and sound logic (the inferential steps connecting evidence to the claim). A well-organized proof is not just correct; it is persuasive and comprehensible.",
          "visualPrompt": "A diagram showing three connected boxes: 'Claim (What you want to prove)', 'Evidence (What you know)', and 'Logic (How you connect them)'."
        },
        {
          "id": "math-401-l01-c2",
          "kind": "concept",
          "title": "Strategies: Direct, Contrapositive, and Contradiction",
          "content": "Mathematicians select from a toolkit of proof strategies. A direct proof proceeds linearly from premises to conclusion. A proof by contrapositive establishes 'if P, then Q' by proving the equivalent 'if not-Q, then not-P'. A proof by contradiction assumes the opposite of the claim and derives a logical impossibility, thereby affirming the original claim.",
          "visualPrompt": "A flowchart with three paths illustrating the logical flow of a Direct Proof (P -> ... -> Q), Contrapositive (¬Q -> ... -> ¬P), and Contradiction (P ∧ ¬Q -> ... -> False)."
        },
        {
          "id": "math-401-l01-c3",
          "kind": "recap",
          "title": "Standards for a Rigorous Proof",
          "content": "A high-quality proof is transparent and robust. It explicitly states all assumptions, justifies every logical step, defines all terms, and avoids ambiguity. The argument must flow seamlessly, with each inference validly following from the previous statements. Adhering to these standards ensures your arguments are convincing and withstand scrutiny."
        }
      ],
      "flashcards": [
        {
          "id": "math-401-l01-f1",
          "front": "Direct Proof",
          "back": "A proof that derives the conclusion directly from the assumptions through a chain of valid implications."
        },
        {
          "id": "math-401-l01-f2",
          "front": "Proof by Contrapositive",
          "back": "Proving 'if P, then Q' by demonstrating that 'if not-Q, then not-P' is true."
        },
        {
          "id": "math-401-l01-f3",
          "front": "Proof by Contradiction",
          "back": "A proof that assumes the negation of the claim and derives a logical impossibility (a contradiction)."
        }
      ]
    },
    {
      "id": "math-401-l02",
      "title": "Optimization and Constraint Reasoning Lab",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "math-401-l02-a1",
          "type": "practice",
          "title": "Optimization Formulation",
          "content": "For a given real-world problem, define the objective function, identify all relevant constraints, and sketch the feasible region."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l02-c0",
          "kind": "introduction",
          "title": "From Proof to Optimization",
          "content": "Optimization applies rigorous logic to find the best possible solution within a set of limitations. The logical certainty developed in proof-building is essential for formulating optimization problems and verifying that a proposed solution is truly optimal."
        },
        {
          "id": "math-401-l02-c1",
          "kind": "concept",
          "title": "Objective Function and Feasible Region",
          "content": "Every optimization problem has two core components. The objective function is the quantity you aim to maximize or minimize (e.g., profit, cost, efficiency). The constraints are a system of equations or inequalities that define the feasible region—the set of all possible solutions that satisfy the problem's limitations.",
          "visualPrompt": "A 2D graph with axes x1 and x2. Several lines representing constraints cut through the space, and a shaded polygon shows the resulting 'Feasible Region'."
        },
        {
          "id": "math-401-l02-c2",
          "kind": "practice",
          "title": "Analyzing Trade-offs and Sensitivity",
          "content": "Often, objectives compete with one another, creating trade-offs. The Pareto frontier is a curve representing solutions where improving one objective necessitates worsening another. Furthermore, solutions can be sensitive to changes in parameters. Sensitivity analysis examines how the optimal solution changes when constraints or coefficients are altered.",
          "visualPrompt": "A 2D graph with 'Objective 1' on the y-axis and 'Objective 2' on the x-axis. A concave curve (the Pareto Frontier) shows the optimal trade-offs."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-401-l02-act1",
          "type": "matching_pairs",
          "title": "Optimization Concept Match",
          "description": "Match optimization terms to their precise definitions.",
          "pairs": [
            {
              "left": "Objective Function",
              "right": "The specific quantity to be maximized or minimized."
            },
            {
              "left": "Constraint",
              "right": "A condition or limit that defines the space of valid solutions."
            },
            {
              "left": "Feasible Region",
              "right": "The set of all possible solutions that satisfy all constraints."
            },
            {
              "left": "Sensitivity Analysis",
              "right": "The study of how parameter changes affect the optimal solution."
            }
          ]
        },
        {
          "id": "math-401-l02-act2",
          "type": "scenario_practice",
          "title": "Resource Allocation Drill",
          "description": "Defend an optimization choice for a factory's production schedule under budget and capacity limits.",
          "instructions": [
            "State your objective function and all constraints clearly.",
            "Explain one key sensitivity risk in your proposed solution."
          ]
        }
      ]
    },
    {
      "id": "math-401-l03",
      "title": "Checkpoint 1: Proof and Optimization",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "math-401-l03-q1",
          "text": "When is proof by contradiction a particularly effective strategy?",
          "skillId": "math-401-skill-proof",
          "options": [
            {
              "id": "a",
              "text": "When you want to avoid making any assumptions."
            },
            {
              "id": "b",
              "text": "When assuming the negation of the claim leads to a clear logical impossibility."
            },
            {
              "id": "c",
              "text": "When the logical steps are too complex for a direct proof."
            },
            {
              "id": "d",
              "text": "When the conclusion is intuitively obvious."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Proof by contradiction is powerful when the direct path is complex, but negating the claim creates a structure that quickly falls apart into a contradiction."
        },
        {
          "id": "math-401-l03-q2",
          "text": "In an optimization problem, a solution that violates at least one constraint is defined as:",
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
              "text": "A corner solution"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The feasible region contains all valid solutions. Any point outside this region is infeasible and cannot be considered for optimality."
        },
        {
          "id": "math-401-l03-q3",
          "text": "What is the primary purpose of sensitivity analysis in optimization?",
          "skillId": "math-401-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "To prove the model has no errors."
            },
            {
              "id": "b",
              "text": "To assess the robustness of the optimal solution to changes in model parameters."
            },
            {
              "id": "c",
              "text": "To find a completely different objective function."
            },
            {
              "id": "d",
              "text": "To ignore the constraints temporarily."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Sensitivity analysis tests how stable the solution is. If a small change in an input parameter causes a large shift in the optimal solution, the solution is not robust."
        },
        {
          "id": "math-401-l03-q4",
          "text": "A rigorous mathematical proof must always include:",
          "skillId": "math-401-skill-proof",
          "options": [
            {
              "id": "a",
              "text": "At least one diagram."
            },
            {
              "id": "b",
              "text": "Clearly stated assumptions and a sequence of valid logical transitions."
            },
            {
              "id": "c",
              "text": "A reference to a historical mathematician."
            },
            {
              "id": "d",
              "text": "An appeal to intuition."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Transparency of assumptions and the validity of the logical chain are the non-negotiable core of any rigorous proof."
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
          "title": "Error Propagation Calculation",
          "content": "Given a simple function and inputs with specified uncertainties, calculate the uncertainty of the output."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l04-c0",
          "kind": "introduction",
          "title": "Beyond Deterministic Models",
          "content": "The optimization models we've studied assumed perfect knowledge of all parameters. In reality, data is noisy and models are approximations. We now introduce uncertainty to build more realistic and reliable quantitative systems."
        },
        {
          "id": "math-401-l04-c1",
          "kind": "concept",
          "title": "Sources of Uncertainty",
          "content": "Uncertainty in quantitative conclusions arises from multiple sources. Measurement uncertainty stems from the limitations of data collection instruments. Model uncertainty comes from the simplifying assumptions made to represent a complex system. Distinguishing between these helps in assessing the reliability of a result.",
          "visualPrompt": "A funnel diagram where 'Measurement Noise', 'Sampling Error', and 'Model Assumptions' are inputs at the top, flowing down into a single output labeled 'Total Result Uncertainty'."
        },
        {
          "id": "math-401-l04-c2",
          "kind": "concept",
          "title": "Error Propagation",
          "content": "Initial uncertainties in input variables do not simply add up; they propagate through calculations. In nonlinear functions, small input errors can be amplified, leading to large output errors. Understanding error propagation is critical for assessing the credibility of any calculated result derived from uncertain data.",
          "visualPrompt": "A graph of a steep curve y=f(x). A small uncertainty interval [x-Δx, x+Δx] on the x-axis is shown to map to a much larger interval [y-Δy, y+Δy] on the y-axis."
        },
        {
          "id": "math-401-l04-c3",
          "kind": "recap",
          "title": "Responsible Communication of Results",
          "content": "Ethical and effective communication requires acknowledging uncertainty. Instead of reporting only a single point estimate, a credible analysis presents results as a range of plausible values, such as a confidence interval. Clearly stating all known limitations and sources of error is a hallmark of expert practice."
        }
      ],
      "flashcards": [
        {
          "id": "math-401-l04-f1",
          "front": "Uncertainty Interval",
          "back": "A range of plausible values for a quantity, reflecting the degree of uncertainty in its measurement or estimation."
        },
        {
          "id": "math-401-l04-f2",
          "front": "Sensitivity",
          "back": "The degree to which the outputs of a model respond to changes in its input parameters."
        },
        {
          "id": "math-401-l04-f3",
          "front": "Error Propagation",
          "back": "The process by which uncertainties in input variables are transferred and transformed through mathematical operations to create uncertainty in the output."
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
          "title": "Decision Tree Construction",
          "content": "Model a simple business decision using a decision tree, including probabilities, payoffs, and expected values for each branch."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l05-c1",
          "kind": "practice",
          "title": "Structuring Decisions Under Uncertainty",
          "content": "Decision theory provides frameworks for making optimal choices when outcomes are uncertain. Tools like decision trees and payoff matrices help structure a problem by mapping out choices, uncertain events, probabilities, and resulting payoffs. This allows for a systematic comparison of alternatives based on criteria like expected value.",
          "visualPrompt": "A simple decision tree with a square 'decision node' branching into two choices, each leading to a circular 'chance node' that branches into possible outcomes with associated probabilities and payoffs."
        },
        {
          "id": "math-401-l05-c2",
          "kind": "recap",
          "title": "Robustness as a Decision Criterion",
          "content": "A robust decision is one that performs acceptably well across a wide range of plausible future scenarios. Instead of maximizing the expected outcome under one set of assumptions, robust decision-making seeks strategies that are resilient to uncertainty and less likely to result in catastrophic failure if assumptions prove wrong."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Risk Signal Sort",
          "description": "Categorize each risk indicator by its primary source.",
          "buckets": [
            "Data Risk",
            "Model Risk",
            "Execution Risk"
          ],
          "items": [
            {
              "text": "Sparse or unrepresentative sample size",
              "bucket": "Data Risk"
            },
            {
              "text": "An unvalidated structural assumption in the model",
              "bucket": "Model Risk"
            },
            {
              "text": "A resource bottleneck in the implementation plan",
              "bucket": "Execution Risk"
            },
            {
              "text": "High variance in key input measurements",
              "bucket": "Data Risk"
            },
            {
              "text": "The model ignores a known confounding variable",
              "bucket": "Model Risk"
            }
          ]
        },
        {
          "id": "math-401-l05-act2",
          "type": "scenario_practice",
          "title": "Policy Choice Debate",
          "description": "Defend one of two public investment policies, each with different quantitative forecasts and uncertainties.",
          "instructions": [
            "State your single strongest quantitative argument for your chosen policy.",
            "Identify one key uncertainty or limitation that could cause you to reverse your recommendation."
          ]
        }
      ]
    },
    {
      "id": "math-401-l06",
      "title": "Checkpoint 2: Uncertainty and Decision Logic",
      "type": "quiz",
      "duration": 11,
      "learningAids": [],
      "questions": [
        {
          "id": "math-401-l06-q1",
          "text": "Why is it best practice to report an uncertainty interval along with a point estimate?",
          "skillId": "math-401-skill-uncertainty",
          "options": [
            {
              "id": "a",
              "text": "To make the result appear more complex."
            },
            {
              "id": "b",
              "text": "To honestly communicate the plausible range of values and the confidence in the estimate."
            },
            {
              "id": "c",
              "text": "To show that no more data collection is needed."
            },
            {
              "id": "d",
              "text": "To prove that all model assumptions are correct."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A point estimate alone can be misleadingly precise. An interval provides crucial context about the result's reliability and potential variability."
        },
        {
          "id": "math-401-l06-q2",
          "text": "A 'robust' decision is one that:",
          "skillId": "math-401-skill-decision",
          "options": [
            {
              "id": "a",
              "text": "Depends on a single, narrow assumption being correct."
            },
            {
              "id": "b",
              "text": "Performs acceptably well across a range of plausible future scenarios."
            },
            {
              "id": "c",
              "text": "Ignores all constraints to maximize a single metric."
            },
            {
              "id": "d",
              "text": "Is the most optimistic choice available."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Robustness prioritizes stability and satisfactory performance under uncertainty over achieving the absolute maximum payoff under a single, potentially wrong, set of assumptions."
        },
        {
          "id": "math-401-l06-q3",
          "text": "What should the most credible quantitative recommendation to a decision-maker include?",
          "skillId": "math-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Only the final number or conclusion."
            },
            {
              "id": "b",
              "text": "The conclusion, supported by evidence, key assumptions, uncertainties, and potential trade-offs."
            },
            {
              "id": "c",
              "text": "A guarantee that the recommended course of action will succeed."
            },
            {
              "id": "d",
              "text": "A complex mathematical formula without explanation."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A credible recommendation is transparent. It equips decision-makers with the context they need to understand the basis of the recommendation and its limitations."
        },
        {
          "id": "math-401-l06-q4",
          "text": "Error propagation is of greatest concern when:",
          "skillId": "math-401-skill-uncertainty",
          "options": [
            {
              "id": "a",
              "text": "All input values are known with perfect certainty."
            },
            {
              "id": "b",
              "text": "The final calculated output depends on multiple uncertain inputs."
            },
            {
              "id": "c",
              "text": "No calculations are performed."
            },
            {
              "id": "d",
              "text": "The model is perfectly linear and all errors are additive."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The core concept of error propagation is how uncertainty in inputs is transmitted through a system of calculations to create uncertainty in the output."
        }
      ]
    },
    {
      "id": "math-401-l07",
      "title": "Capstone: Quantitative Decision Proposal Studio",
      "type": "interactive",
      "duration": 25,
      "learningAids": [
        {
          "id": "math-401-l07-a1",
          "type": "practice",
          "title": "Peer Review",
          "content": "Review a classmate's draft proposal using the official assessment criteria, providing constructive feedback on their logic, assumptions, and communication."
        }
      ],
      "chunks": [
        {
          "id": "math-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Project Brief",
          "content": "Synthesize all the skills from this module to address a complex, real-world decision scenario. You will select a problem, model it quantitatively, and produce a formal proposal. Your model must incorporate constraints, account for key uncertainties, and justify a final recommendation among competing alternatives. This is your opportunity to demonstrate end-to-end expert quantitative reasoning."
        },
        {
          "id": "math-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria for the Proposal",
          "content": "Your proposal will be evaluated on its rigor, clarity, and honesty. Key criteria include: 1. **Problem Formulation:** A clearly defined objective function and accurately identified constraints. 2. **Logical Rigor:** Valid mathematical and logical structure. 3. **Uncertainty Handling:** Sophisticated identification and analysis of key uncertainties. 4. **Transparency:** Clear statement of all assumptions and limitations. 5. **Communication:** Persuasive and clear communication of the final recommendation and its rationale to a non-expert audience."
        }
      ],
      "metadata": {
        "prompts": [
          "State your primary objective function and all critical constraints.",
          "Identify and rank your top three drivers of uncertainty and explain how you modeled them.",
          "Define the specific evidence or future event that would most likely cause you to change your recommendation."
        ]
      }
    }
  ]
};
