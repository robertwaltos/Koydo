import type { LearningModule } from "@/lib/modules/types";

export const Math301Module: LearningModule = {
  "id": "math-301",
  "title": "Functions, Modeling, and Advanced Algebra III",
  "description": "Advanced mathematics curriculum on function families, quadratic behavior, exponential and logarithmic reasoning, and model evaluation under constraints.",
  "subject": "Math",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "functions",
    "modeling"
  ],
  "minAge": 14,
  "maxAge": 18,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Analyze and compare linear, quadratic, and exponential function behavior",
    "Interpret function parameters in contextual models",
    "Solve polynomial and exponential equations with structured methods",
    "Use transformations to predict graph behavior",
    "Evaluate model fit and limitations against real datasets",
    "Construct defensible mathematical arguments from symbolic and graphical evidence"
  ],
  "lessons": [
    {
      "id": "math-301-l01",
      "title": "Function Thinking and Transformations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "math-301-l01-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-301-l01-c1",
          "kind": "concept",
          "title": "Functions as Mappings",
          "content": "Functions are like special rules that connect inputs to outputs. When we think about functions, we need to understand how these connections work and what limits we have on the inputs we can use. By learning about how these mappings behave, we can make predictions and understand what the outputs will be based on different inputs. This helps us in many areas of math and real-life situations.\nContext recap: Functions are like special rules that connect inputs to outputs. When we think about functions, we need to understand how these connections work and what limits we have on the inputs we can use. By learning about how these mappings behave, we can make predictions and understand what the outputs will be based on different inputs. This helps us in many areas of math and real-life situations."
        },
        {
          "id": "math-301-l01-c2",
          "kind": "concept",
          "title": "Transformation Language",
          "content": "In mathematics, we use specific terms to describe how graphs change. These terms include shifts, stretches, compressions, and reflections. By using this language, we can easily understand how a graph looks without having to go through the entire process of rewriting the equations. This makes it simpler to analyze and interpret the variations in graphs.\nContext recap: In mathematics, we use specific terms to describe how graphs change. These terms include shifts, stretches, compressions, and reflections. By using this language, we can easily understand how a graph looks without having to go through the entire process of rewriting the equations. This makes it simpler to analyze and interpret the variations in graphs."
        },
        {
          "id": "math-301-l01-c3",
          "kind": "recap",
          "title": "Contextual Interpretation",
          "content": "When we talk about parameters in mathematical models, it's important to remember that their meaning depends on the context of the model. We must interpret these parameters in a way that makes sense with the units we are using and the real-world situations we are trying to describe. This ensures that our understanding aligns with what we observe in reality.\nContext recap: When we talk about parameters in mathematical models, it's important to remember that their meaning depends on the context of the model. We must interpret these parameters in a way that makes sense with the units we are using and the real-world situations we are trying to describe. This ensures that our understanding aligns with what we observe in reality."
        }
      ],
      "flashcards": [
        {
          "id": "math-301-l01-f1",
          "front": "Domain",
          "back": "Set of allowed input values for a function."
        },
        {
          "id": "math-301-l01-f2",
          "front": "Range",
          "back": "Set of output values produced by a function."
        },
        {
          "id": "math-301-l01-f3",
          "front": "Transformation",
          "back": "Graph modification such as shift, scale, or reflection."
        }
      ]
    },
    {
      "id": "math-301-l02",
      "title": "Quadratic Models and Structural Features Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "math-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-301-l02-c1",
          "kind": "concept",
          "title": "Vertex and Symmetry",
          "content": "Quadratic functions have unique characteristics that we can identify, such as the turning point, which is the highest or lowest point on the graph, the axis of symmetry that divides the graph into two mirror-image halves, and the direction in which the graph curves. Understanding these features helps us analyze and graph quadratic functions effectively.\nContext recap: Quadratic functions have unique characteristics that we can identify, such as the turning point, which is the highest or lowest point on the graph, the axis of symmetry that divides the graph into two mirror-image halves, and the direction in which the graph curves. Understanding these features helps us analyze and graph quadratic functions effectively."
        },
        {
          "id": "math-301-l02-c2",
          "kind": "practice",
          "title": "Equivalent Forms",
          "content": "Quadratic functions can be expressed in different forms, including standard, vertex, and factored forms. Each of these forms highlights different useful features of the same function. By learning to recognize and convert between these forms, we can better understand the properties of quadratic functions and how they behave.\nContext recap: Quadratic functions can be expressed in different forms, including standard, vertex, and factored forms. Each of these forms highlights different useful features of the same function. By learning to recognize and convert between these forms, we can better understand the properties of quadratic functions and how they behave."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-301-l02-act1",
          "type": "matching_pairs",
          "title": "Form-to-Feature Match",
          "description": "Match expression form to easiest extracted feature.",
          "pairs": [
            {
              "left": "a(x-h)^2 + k",
              "right": "Vertex"
            },
            {
              "left": "ax^2 + bx + c",
              "right": "Y-intercept"
            },
            {
              "left": "a(x-r1)(x-r2)",
              "right": "Roots / x-intercepts"
            },
            {
              "left": "Axis x = h",
              "right": "Symmetry line"
            }
          ]
        },
        {
          "id": "math-301-l02-act2",
          "type": "scenario_practice",
          "title": "Trajectory Model Drill",
          "description": "Interpret a quadratic model for motion data.",
          "instructions": [
            "Identify peak and time at peak.",
            "State one realistic model limitation."
          ]
        }
      ]
    },
    {
      "id": "math-301-l03",
      "title": "Checkpoint 1: Functions and Quadratics",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "math-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "math-301-l03-q1",
          "text": "Why is vertex form useful?",
          "skillId": "math-301-skill-functions",
          "options": [
            {
              "id": "a",
              "text": "It hides key features"
            },
            {
              "id": "b",
              "text": "It gives turning point directly"
            },
            {
              "id": "c",
              "text": "It removes symmetry"
            },
            {
              "id": "d",
              "text": "It prevents graphing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Vertex form exposes the maximum or minimum coordinate immediately."
        },
        {
          "id": "math-301-l03-q2",
          "text": "A positive leading coefficient in a quadratic means:",
          "skillId": "math-301-skill-quadratics",
          "options": [
            {
              "id": "a",
              "text": "Parabola opens downward"
            },
            {
              "id": "b",
              "text": "Parabola opens upward"
            },
            {
              "id": "c",
              "text": "No vertex"
            },
            {
              "id": "d",
              "text": "No real outputs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Positive leading coefficient yields upward concavity."
        },
        {
          "id": "math-301-l03-q3",
          "text": "Most defensible function interpretation includes:",
          "skillId": "math-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Equation only"
            },
            {
              "id": "b",
              "text": "Parameter meaning with units and assumptions"
            },
            {
              "id": "c",
              "text": "Graph shape only"
            },
            {
              "id": "d",
              "text": "No domain statement"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Context and units are needed for meaningful interpretation."
        },
        {
          "id": "math-301-l03-q4",
          "text": "Factored form is most directly useful for identifying:",
          "skillId": "math-301-skill-quadratics",
          "options": [
            {
              "id": "a",
              "text": "Y-intercept only"
            },
            {
              "id": "b",
              "text": "Roots / x-intercepts"
            },
            {
              "id": "c",
              "text": "Domain restrictions"
            },
            {
              "id": "d",
              "text": "Rate of change constant"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Factored form exposes zero-value inputs."
        }
      ]
    },
    {
      "id": "math-301-l04",
      "title": "Exponential, Logarithmic, and Growth Reasoning",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "math-301-l04-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-301-l04-c1",
          "kind": "concept",
          "title": "Growth and Decay Dynamics",
          "content": "Exponential models are special because they show how things grow or shrink at a rate that multiplies over equal intervals of time. This is different from linear models, which add the same amount over time. Understanding this difference helps us analyze situations like population growth or radioactive decay more accurately.\nContext recap: Exponential models are special because they show how things grow or shrink at a rate that multiplies over equal intervals of time. This is different from linear models, which add the same amount over time. Understanding this difference helps us analyze situations like population growth or radioactive decay more accurately."
        },
        {
          "id": "math-301-l04-c2",
          "kind": "concept",
          "title": "Logarithms as Inverse Tools",
          "content": "Logarithms are powerful tools in mathematics because they help us reverse exponential relationships. When we encounter problems where we need to find unknown exponents, logarithms allow us to solve these equations effectively. This makes them very useful in various applied math scenarios.\nContext recap: Logarithms are powerful tools in mathematics because they help us reverse exponential relationships. When we encounter problems where we need to find unknown exponents, logarithms allow us to solve these equations effectively. This makes them very useful in various applied math scenarios."
        },
        {
          "id": "math-301-l04-c3",
          "kind": "recap",
          "title": "Model Choice Discipline",
          "content": "When choosing a mathematical model to represent data, it is important to base our decision on the patterns we observe in the data rather than personal preferences. This ensures that our model accurately reflects the underlying trends and can provide reliable predictions.\nContext recap: When choosing a mathematical model to represent data, it is important to base our decision on the patterns we observe in the data rather than personal preferences. This ensures that our model accurately reflects the underlying trends and can provide reliable predictions."
        }
      ],
      "flashcards": [
        {
          "id": "math-301-l04-f1",
          "front": "Exponential growth",
          "back": "Change by constant factor per interval."
        },
        {
          "id": "math-301-l04-f2",
          "front": "Decay factor",
          "back": "Multiplier between 0 and 1 reducing quantity each interval."
        },
        {
          "id": "math-301-l04-f3",
          "front": "Logarithm",
          "back": "Inverse operation to exponentiation."
        }
      ]
    },
    {
      "id": "math-301-l05",
      "title": "Model Fit and Assumption Testing Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "math-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "chunks": [
        {
          "id": "math-301-l05-c1",
          "kind": "practice",
          "title": "Residual Thinking",
          "content": "Residuals are the differences between the observed values and the values predicted by our model. By examining the patterns of these residuals, we can identify where our model assumptions might not hold true and where we may need to make adjustments or refinements to improve our model's accuracy.\nContext recap: Residuals are the differences between the observed values and the values predicted by our model. By examining the patterns of these residuals, we can identify where our model assumptions might not hold true and where we may need to make adjustments or refinements to improve our model's accuracy."
        },
        {
          "id": "math-301-l05-c2",
          "kind": "recap",
          "title": "Predictive Limits",
          "content": "When we make predictions based on our models, especially outside the range of our observed data, we need to be careful. This is called extrapolation, and it comes with uncertainties. It is essential to clearly state these uncertainties so that we understand the limitations of our predictions.\nContext recap: When we make predictions based on our models, especially outside the range of our observed data, we need to be careful. This is called extrapolation, and it comes with uncertainties. It is essential to clearly state these uncertainties so that we understand the limitations of our predictions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-301-l05-act1",
          "type": "sorting_buckets",
          "title": "Model Family Sort",
          "description": "Sort contexts by likely primary model type.",
          "buckets": [
            "Linear",
            "Quadratic",
            "Exponential"
          ],
          "items": [
            {
              "text": "Constant monthly fee plus fixed add-on",
              "bucket": "Linear"
            },
            {
              "text": "Object height over time under gravity",
              "bucket": "Quadratic"
            },
            {
              "text": "Population doubling behavior",
              "bucket": "Exponential"
            },
            {
              "text": "Simple constant speed distance",
              "bucket": "Linear"
            }
          ]
        },
        {
          "id": "math-301-l05-act2",
          "type": "scenario_practice",
          "title": "Forecast Critique",
          "description": "Evaluate a forecast and challenge one weak assumption.",
          "instructions": [
            "State one missing variable.",
            "Suggest one validation data check."
          ]
        }
      ]
    },
    {
      "id": "math-301-l06",
      "title": "Checkpoint 2: Advanced Algebra and Modeling",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "math-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the lesson process and record your reasoning steps."
        }
      ],
      "questions": [
        {
          "id": "math-301-l06-q1",
          "text": "Why examine residuals after fitting a model?",
          "skillId": "math-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "To hide model error"
            },
            {
              "id": "b",
              "text": "To detect pattern mismatches and assumption failure"
            },
            {
              "id": "c",
              "text": "To avoid recalibration"
            },
            {
              "id": "d",
              "text": "To remove all uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Residual structure signals missing dynamics or misfit."
        },
        {
          "id": "math-301-l06-q2",
          "text": "A multiplicative growth pattern is best modeled first by:",
          "skillId": "math-301-skill-growth",
          "options": [
            {
              "id": "a",
              "text": "Linear function"
            },
            {
              "id": "b",
              "text": "Exponential function"
            },
            {
              "id": "c",
              "text": "Constant function"
            },
            {
              "id": "d",
              "text": "Random choice"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Constant factor change aligns with exponential structure."
        },
        {
          "id": "math-301-l06-q3",
          "text": "Why state domain restrictions explicitly?",
          "skillId": "math-301-skill-functions",
          "options": [
            {
              "id": "a",
              "text": "To make model vague"
            },
            {
              "id": "b",
              "text": "To prevent invalid interpretations outside context"
            },
            {
              "id": "c",
              "text": "To remove outputs"
            },
            {
              "id": "d",
              "text": "To avoid units"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Domain keeps interpretation aligned with real context."
        },
        {
          "id": "math-301-l06-q4",
          "text": "Best practice when extrapolating beyond observed data is:",
          "skillId": "math-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Claim certainty"
            },
            {
              "id": "b",
              "text": "State uncertainty and assumption sensitivity"
            },
            {
              "id": "c",
              "text": "Ignore model limits"
            },
            {
              "id": "d",
              "text": "Drop context entirely"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Extrapolation risk increases with distance from known data region."
        }
      ]
    }
  ]
};
