import type { LearningModule } from "@/lib/modules/types";

export const math_301_Module: LearningModule = {
  "id": "math-301",
  "title": "Functions, Modeling, and Advanced Algebra",
  "description": "An advanced mathematics curriculum focused on analyzing function families, modeling real-world phenomena with quadratic and exponential functions, and evaluating models under constraints.",
  "subject": "Math",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "functions",
    "modeling",
    "algebra"
  ],
  "minAge": 14,
  "maxAge": 18,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Analyze and compare linear, quadratic, and exponential function behavior.",
    "Interpret function parameters in contextual models.",
    "Solve polynomial and exponential equations with structured methods.",
    "Use transformations to predict graph behavior.",
    "Evaluate model fit and limitations against real datasets.",
    "Construct defensible mathematical arguments from symbolic and graphical evidence."
  ],
  "skills": [
    {
      "id": "math-301-skill-functions",
      "description": "Understanding and applying function transformations and properties."
    },
    {
      "id": "math-301-skill-quadratics",
      "description": "Analyzing quadratic functions in various forms."
    },
    {
      "id": "math-301-skill-modeling",
      "description": "Evaluating and interpreting mathematical models."
    },
    {
      "id": "math-301-skill-growth",
      "description": "Modeling with exponential and logarithmic functions."
    }
  ],
  "lessons": [
    {
      "id": "math-301-l01",
      "title": "Introduction to Function Families and Transformations",
      "type": "video",
      "duration": 14,
      "learningObjectiveIds": [
        "Analyze and compare linear, quadratic, and exponential function behavior",
        "Interpret function parameters in contextual models",
        "Use transformations to predict graph behavior"
      ],
      "learningAids": [
        {
          "id": "math-301-l01-a1",
          "type": "practice",
          "title": "Guided Practice Worksheet",
          "content": "Worksheet with parent functions (linear, quadratic, exponential) and prompts to apply and describe transformations (e.g., f(x) -> f(x+2) - 3)."
        }
      ],
      "chunks": [
        {
          "id": "math-301-l01-c1",
          "kind": "concept",
          "title": "What is a Function?",
          "content": "A function is a rule that assigns exactly one output to each input. We'll explore the concepts of domain (valid inputs) and range (possible outputs) which define a function's boundaries.",
          "visualPrompts": [
            "A 'function machine' diagram showing an input (x) going in, a rule (f(x)) being applied, and an output (y) coming out.",
            "Side-by-side graphs of a relation that is a function and one that is not (fails the vertical line test)."
          ]
        },
        {
          "id": "math-301-l01-c2",
          "kind": "concept",
          "title": "The Language of Transformations",
          "content": "We can change a function's graph using transformations. Key moves include shifts (sliding), stretches/compressions (resizing), and reflections (flipping). Understanding these helps predict a graph's appearance from its equation.",
          "visualPrompts": [
            "Animation of a parabola f(x) = x^2 transforming to g(x) = a(x-h)^2 + k, showing each parameter's effect one by one."
          ]
        },
        {
          "id": "math-301-l01-c3",
          "kind": "recap",
          "title": "Interpreting Parameters in Context",
          "content": "In a real-world model, the numbers in a function's equation (parameters) have specific meanings. We must always interpret them with units to understand what they represent, like a starting amount or a rate of change.",
          "visualPrompts": [
            "A graph of a linear cost function C(t) = 50t + 200, with the y-intercept (200) labeled as 'Initial Fee' and the slope (50) labeled as 'Hourly Rate'."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "math-301-l01-f1",
          "front": "Domain",
          "back": "The set of all possible input values (x-values) for a function."
        },
        {
          "id": "math-301-l01-f2",
          "front": "Range",
          "back": "The set of all possible output values (y-values) produced by a function."
        },
        {
          "id": "math-301-l01-f3",
          "front": "Transformation",
          "back": "A change to a function's graph, such as a shift, stretch, compression, or reflection."
        }
      ]
    },
    {
      "id": "math-301-l02",
      "title": "Exploring Quadratic Functions",
      "type": "interactive",
      "duration": 16,
      "learningObjectiveIds": [
        "Analyze and compare linear, quadratic, and exponential function behavior",
        "Interpret function parameters in contextual models",
        "Solve polynomial and exponential equations with structured methods"
      ],
      "learningAids": [
        {
          "id": "math-301-l02-a1",
          "type": "practice",
          "title": "Interactive Graphing Tool",
          "content": "Use a graphing tool to adjust parameters in vertex, standard, and factored forms and observe the changes to the parabola."
        }
      ],
      "chunks": [
        {
          "id": "math-301-l02-c1",
          "kind": "concept",
          "title": "Key Features of a Parabola",
          "content": "Every quadratic function graphs as a parabola. We can identify its key features: the vertex (the peak or valley), the axis of symmetry (the line that splits it in half), and its direction of opening (up or down).",
          "visualPrompts": [
            "A diagram of a parabola with its vertex, axis of symmetry, roots (x-intercepts), and y-intercept clearly labeled."
          ]
        },
        {
          "id": "math-301-l02-c2",
          "kind": "practice",
          "title": "The Three Forms of a Quadratic",
          "content": "Quadratic functions can be written in standard, vertex, and factored form. Each form is useful because it immediately reveals different key features of the parabola, like its y-intercept, vertex, or roots.",
          "visualPrompts": [
            "A table comparing the three forms (Standard, Vertex, Factored) side-by-side, listing the key feature each form reveals most easily."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-301-l02-act1",
          "type": "matching_pairs",
          "title": "Form-to-Feature Match",
          "description": "Match each quadratic form to the key feature it reveals most directly.",
          "pairs": [
            {
              "left": "Vertex Form: a(x-h)² + k",
              "right": "Vertex"
            },
            {
              "left": "Standard Form: ax² + bx + c",
              "right": "Y-intercept"
            },
            {
              "left": "Factored Form: a(x-r₁)(x-r₂)",
              "right": "Roots / x-intercepts"
            }
          ]
        },
        {
          "id": "math-301-l02-act2",
          "type": "scenario_practice",
          "title": "Projectile Motion Model",
          "description": "Given a quadratic model for a thrown ball's height over time, analyze its trajectory.",
          "instructions": [
            "Find the ball's maximum height and the time it takes to reach it.",
            "Determine how long the ball is in the air.",
            "State one limitation of this model in a real-world scenario (e.g., air resistance is ignored)."
          ]
        }
      ]
    },
    {
      "id": "math-301-l03",
      "title": "Checkpoint: Functions and Quadratics",
      "type": "quiz",
      "duration": 10,
      "learningObjectiveIds": [
        "Analyze and compare linear, quadratic, and exponential function behavior",
        "Interpret function parameters in contextual models",
        "Use transformations to predict graph behavior",
        "Solve polynomial and exponential equations with structured methods"
      ],
      "learningAids": [
        {
          "id": "math-301-l03-a1",
          "type": "practice",
          "title": "Review Sheet",
          "content": "Review sheet summarizing key concepts: function definitions, transformation rules (shifts, stretches, reflections), and the three forms of quadratic equations."
        }
      ],
      "questions": [
        {
          "id": "math-301-l03-q1",
          "text": "Why is vertex form, a(x-h)² + k, particularly useful for analyzing a quadratic function?",
          "skillId": "math-301-skill-quadratics",
          "options": [
            {
              "id": "a",
              "text": "It directly shows the y-intercept."
            },
            {
              "id": "b",
              "text": "It directly shows the coordinates of the turning point (vertex)."
            },
            {
              "id": "c",
              "text": "It directly shows the x-intercepts (roots)."
            },
            {
              "id": "d",
              "text": "It is the only form that can be graphed."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Vertex form, a(x-h)² + k, is named for its primary advantage: the vertex coordinates (h, k) are immediately visible."
        },
        {
          "id": "math-301-l03-q2",
          "text": "A positive leading coefficient 'a' in a standard form quadratic (ax² + bx + c) indicates that the parabola:",
          "skillId": "math-301-skill-quadratics",
          "options": [
            {
              "id": "a",
              "text": "Opens downward"
            },
            {
              "id": "b",
              "text": "Opens upward"
            },
            {
              "id": "c",
              "text": "Has no vertex"
            },
            {
              "id": "d",
              "text": "Is a straight line"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A positive leading coefficient 'a' means the parabola opens upward, resulting in a minimum value at the vertex."
        },
        {
          "id": "math-301-l03-q3",
          "text": "A complete interpretation of a function parameter in a real-world model must include:",
          "skillId": "math-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "The equation only"
            },
            {
              "id": "b",
              "text": "The parameter's meaning, its value, its units, and any assumptions."
            },
            {
              "id": "c",
              "text": "The shape of the graph only"
            },
            {
              "id": "d",
              "text": "A list of all possible outputs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "For a meaningful interpretation, you must connect the parameter's numerical value to its real-world context, including units and underlying assumptions."
        },
        {
          "id": "math-301-l03-q4",
          "text": "Factored form, a(x-r₁)(x-r₂), is most directly useful for identifying a parabola's:",
          "skillId": "math-301-skill-quadratics",
          "options": [
            {
              "id": "a",
              "text": "Y-intercept"
            },
            {
              "id": "b",
              "text": "Roots / x-intercepts"
            },
            {
              "id": "c",
              "text": "Vertex"
            },
            {
              "id": "d",
              "text": "Axis of symmetry"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The values r₁ and r₂ in factored form directly correspond to the x-intercepts, where the function's output is zero."
        }
      ]
    },
    {
      "id": "math-301-l04",
      "title": "Exponential and Logarithmic Functions",
      "type": "video",
      "duration": 14,
      "learningObjectiveIds": [
        "Analyze and compare linear, quadratic, and exponential function behavior",
        "Solve polynomial and exponential equations with structured methods",
        "Construct defensible mathematical arguments from symbolic and graphical evidence"
      ],
      "learningAids": [
        {
          "id": "math-301-l04-a1",
          "type": "practice",
          "title": "Growth Pattern Comparison",
          "content": "A table comparing linear, quadratic, and exponential growth patterns using numerical examples and graphs to highlight their differences."
        }
      ],
      "chunks": [
        {
          "id": "math-301-l04-c1",
          "kind": "concept",
          "title": "Multiplicative Change: Growth and Decay",
          "content": "Exponential functions model situations where a quantity changes by a constant multiplicative factor over equal intervals. This is different from linear functions, which change by a constant additive amount.",
          "visualPrompts": [
            "A split-screen graph comparing linear growth (a straight line) with exponential growth (a J-shaped curve).",
            "An animation showing a population doubling each year versus a population growing by 100 each year."
          ]
        },
        {
          "id": "math-301-l04-c2",
          "kind": "concept",
          "title": "Logarithms: The Inverse of Exponents",
          "content": "Logarithms are the tool we use to solve for an unknown exponent. They 'undo' exponentiation, allowing us to answer questions like, 'How long will it take for an investment to double?'",
          "visualPrompts": [
            "A diagram showing the relationship: if b^x = y, then log_b(y) = x.",
            "Graphs of y = 2^x and y = log₂(x) on the same axes, showing their reflection across the line y = x."
          ]
        },
        {
          "id": "math-301-l04-c3",
          "kind": "recap",
          "title": "Choosing the Right Model",
          "content": "When analyzing data, the pattern of change tells us which function family to use. Look at the differences or ratios between consecutive data points to decide if a linear, quadratic, or exponential model is the best fit.",
          "visualPrompts": [
            "A flowchart guiding the model selection process based on patterns in a data table (e.g., 'Are first differences constant? -> Linear')."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "math-301-l04-f1",
          "front": "Exponential Growth",
          "back": "Growth where the rate of change is proportional to the current quantity, resulting in a constant multiplication factor per interval."
        },
        {
          "id": "math-301-l04-f2",
          "front": "Decay Factor",
          "back": "In an exponential model, the constant multiplier (between 0 and 1) that reduces the quantity in each time interval."
        },
        {
          "id": "math-301-l04-f3",
          "front": "Logarithm",
          "back": "The inverse operation of exponentiation; it finds the exponent to which a base must be raised to produce a given number."
        }
      ]
    },
    {
      "id": "math-301-l05",
      "title": "Building and Evaluating Models",
      "type": "interactive",
      "duration": 16,
      "learningObjectiveIds": [
        "Evaluate model fit and limitations against real datasets",
        "Construct defensible mathematical arguments from symbolic and graphical evidence"
      ],
      "learningAids": [
        {
          "id": "math-301-l05-a1",
          "type": "practice",
          "title": "Dataset Analysis Lab",
          "content": "A sample dataset (e.g., world population over time) with instructions to fit different models (linear, exponential) and compare their residual plots."
        }
      ],
      "chunks": [
        {
          "id": "math-301-l05-c1",
          "kind": "practice",
          "title": "Analyzing Residuals",
          "content": "A residual is the difference between an actual data point and the value predicted by our model. Plotting these residuals helps us see if our model is a good fit. A random scatter is good; a clear pattern suggests our model is missing something.",
          "visualPrompts": [
            "Side-by-side residual plots: one showing a random scatter (good fit) and one showing a U-shaped pattern (poor fit)."
          ]
        },
        {
          "id": "math-301-l05-c2",
          "kind": "recap",
          "title": "The Danger of Extrapolation",
          "content": "Extrapolation means making predictions outside the range of your original data. It can be unreliable because you are assuming the trend continues indefinitely. Always state the limitations and uncertainty when extrapolating.",
          "visualPrompts": [
            "A graph showing a data trend with a fitted line. The line is solid within the data range and becomes a dashed line outside of it, labeled 'Extrapolation Zone - High Uncertainty'."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-301-l05-act1",
          "type": "sorting_buckets",
          "title": "Model Family Sort",
          "description": "Drag and drop real-world scenarios into the bucket of the function family that would best model them.",
          "buckets": [
            "Linear",
            "Quadratic",
            "Exponential"
          ],
          "items": [
            {
              "text": "A phone bill with a constant monthly fee plus a fixed cost per gigabyte of data.",
              "bucket": "Linear"
            },
            {
              "text": "The height of an object thrown into the air over time, under the influence of gravity.",
              "bucket": "Quadratic"
            },
            {
              "text": "A bacterial population that doubles in size every hour.",
              "bucket": "Exponential"
            },
            {
              "text": "The total distance traveled by a car moving at a constant speed.",
              "bucket": "Linear"
            }
          ]
        },
        {
          "id": "math-301-l05-act2",
          "type": "scenario_practice",
          "title": "Critiquing a Business Forecast",
          "description": "Analyze a business revenue forecast based on a mathematical model.",
          "instructions": [
            "Identify one key assumption the model makes.",
            "Suggest one way to test the model's validity (e.g., check against historical data)."
          ]
        }
      ]
    },
    {
      "id": "math-301-l06",
      "title": "Checkpoint: Advanced Modeling",
      "type": "quiz",
      "duration": 11,
      "learningObjectiveIds": [
        "Evaluate model fit and limitations against real datasets",
        "Construct defensible mathematical arguments from symbolic and graphical evidence",
        "Interpret function parameters in contextual models"
      ],
      "learningAids": [
        {
          "id": "math-301-l06-a1",
          "type": "practice",
          "title": "Concept Map Review",
          "content": "A concept map connecting key terms: model, data, residual, extrapolation, assumption, linear, quadratic, exponential."
        }
      ],
      "questions": [
        {
          "id": "math-301-l06-q1",
          "text": "What is the primary reason for examining a residual plot after fitting a model to data?",
          "skillId": "math-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "To confirm the model is perfect."
            },
            {
              "id": "b",
              "text": "To detect systematic patterns that indicate the model is a poor fit."
            },
            {
              "id": "c",
              "text": "To calculate the exact values of the original data."
            },
            {
              "id": "d",
              "text": "To eliminate all sources of error."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A pattern in the residuals (e.g., a curve) indicates that the chosen model does not capture the underlying structure of the data."
        },
        {
          "id": "math-301-l06-q2",
          "text": "A quantity that changes by a constant multiplicative factor per unit of time is best modeled by which type of function?",
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
              "text": "Quadratic function"
            },
            {
              "id": "d",
              "text": "Constant function"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The defining characteristic of an exponential function is change by a constant ratio or factor over equal intervals."
        },
        {
          "id": "math-301-l06-q3",
          "text": "Why is it critical to state a model's domain restrictions when applying it to a real-world problem?",
          "skillId": "math-301-skill-functions",
          "options": [
            {
              "id": "a",
              "text": "To make the model more complicated."
            },
            {
              "id": "b",
              "text": "To prevent nonsensical interpretations outside the model's valid context (e.g., negative time)."
            },
            {
              "id": "c",
              "text": "To ensure the range is always positive."
            },
            {
              "id": "d",
              "text": "To eliminate the need for units."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The domain defines the set of valid inputs. In a real-world context, this prevents applying the model to situations where it is not meaningful."
        },
        {
          "id": "math-301-l06-q4",
          "text": "The best practice when extrapolating (predicting beyond the range of observed data) is to:",
          "skillId": "math-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Claim the prediction is certain to be accurate."
            },
            {
              "id": "b",
              "text": "Acknowledge the increased uncertainty and state the assumptions being made."
            },
            {
              "id": "c",
              "text": "Use a linear model regardless of the data's pattern."
            },
            {
              "id": "d",
              "text": "Ignore the model's limitations."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Extrapolation is inherently risky because the observed trend may not continue. Responsible modeling requires acknowledging this uncertainty."
        }
      ]
    }
  ]
};
