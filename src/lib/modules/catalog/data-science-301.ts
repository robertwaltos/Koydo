import type { LearningModule } from "@/lib/modules/types";

export const data_science_301_Module: LearningModule = {
  "id": "data-science-301",
  "title": "Data Science Modeling",
  "description": "Advanced predictive modeling, uncertainty handling, model diagnostics, and deployment tradeoffs.",
  "subject": "Data Science",
  "tags": [
    "curriculum",
    "interactive",
    "machine-learning",
    "mlops",
    "predictive-modeling"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design and tune advanced predictive models to minimize generalization error.",
    "Quantify and manage model uncertainty using probabilistic frameworks.",
    "Diagnose model performance issues and navigate production deployment tradeoffs."
  ],
  "lessons": [
    {
      "id": "data-science-301-l01",
      "title": "Advanced Predictive Modeling",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "data-science-301-l01-a1",
          "type": "image",
          "title": "Algorithm Architecture",
          "content": "Visual prompt: A split-screen diagram comparing the parallel tree building of Random Forests (multiple independent trees voting) with the sequential error-correction architecture of Gradient Boosting (trees built sequentially to correct previous errors)."
        },
        {
          "id": "data-science-301-l01-a2",
          "type": "animation",
          "title": "Hyperparameter Tuning",
          "content": "Visual prompt: An animated 3D surface plot showing a gradient descent algorithm navigating a complex loss landscape, adjusting learning rate and depth to find optimal hyperparameters."
        }
      ]
    },
    {
      "id": "data-science-301-l02",
      "title": "Practice: Predictive Modeling",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Select the optimal algorithm for a high-dimensional, sparse dataset.",
          "Apply L1 regularization to perform automated feature selection.",
          "Explain how your hyperparameter choices balance the bias-variance tradeoff."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-301-l02-a1",
          "type": "practice",
          "title": "Regularization Sandbox",
          "content": "Visual prompt: An interactive widget where learners adjust a regularization strength slider (Lambda). As Lambda increases, a bar chart of feature weights dynamically shrinks, with less important features hitting exactly zero (L1/Lasso effect)."
        }
      ]
    },
    {
      "id": "data-science-301-l03",
      "title": "Handling Uncertainty",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "data-science-301-l03-a1",
          "type": "image",
          "title": "Bayesian vs. Frequentist",
          "content": "Visual prompt: A concept card illustrating the difference between a fixed population parameter (Frequentist: a single pin on a map) and a probability distribution of a parameter (Bayesian: a heatmap of likely locations)."
        },
        {
          "id": "data-science-301-l03-a2",
          "type": "animation",
          "title": "Monte Carlo Simulation",
          "content": "Visual prompt: An animation generating thousands of simulated scatter plot trend lines, gradually forming a dense, shaded confidence band around the mean prediction line."
        }
      ]
    },
    {
      "id": "data-science-301-l04",
      "title": "Practice: Quantifying Uncertainty",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Construct a 95% prediction interval for the regression output.",
          "Implement a bootstrap sampling method to estimate the variance of your model.",
          "Interpret the resulting probability distribution in a business context."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-301-l04-a1",
          "type": "practice",
          "title": "Bootstrapping Simulator",
          "content": "Visual prompt: An interactive tool allowing learners to draw random samples with replacement from a dataset. A histogram dynamically updates to show how the distribution of the mean stabilizes into a bell curve as iterations increase."
        }
      ]
    },
    {
      "id": "data-science-301-l05",
      "title": "Checkpoint 1: Modeling & Uncertainty",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "data-science-301-l05-q1",
          "text": "Which technique is most effective for reducing model variance without substantially increasing bias?",
          "skillId": "data-science-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Bagging (e.g., Random Forests)"
            },
            {
              "id": "b",
              "text": "Increasing the depth of a single Decision Tree"
            },
            {
              "id": "c",
              "text": "Applying strict L1 Regularization"
            },
            {
              "id": "d",
              "text": "Using a smaller training dataset"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Bagging reduces variance by averaging multiple models trained on different subsets of data, generally preserving the low bias of complex base learners like deep trees."
        },
        {
          "id": "data-science-301-l05-q2",
          "text": "What does a 95% prediction interval indicate in a regression model?",
          "skillId": "data-science-301-skill-uncertainty",
          "options": [
            {
              "id": "a",
              "text": "There is a 95% probability that a new, individual observation will fall within this range."
            },
            {
              "id": "b",
              "text": "The model is 95% accurate on the training data."
            },
            {
              "id": "c",
              "text": "The true population mean falls within this range 95% of the time."
            },
            {
              "id": "d",
              "text": "95% of the features used in the model are statistically significant."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A prediction interval estimates the range where a future individual observation will fall, accounting for both the uncertainty of the population mean and the random variation of individual data points."
        },
        {
          "id": "data-science-301-l05-q3",
          "text": "In the context of regularization, what is the primary effect of increasing the L2 penalty (Ridge)?",
          "skillId": "data-science-301-skill-modeling",
          "options": [
            {
              "id": "a",
              "text": "Shrinking model weights evenly to prevent overfitting."
            },
            {
              "id": "b",
              "text": "Forcing exactly half of the weights to zero."
            },
            {
              "id": "c",
              "text": "Increasing the model's variance."
            },
            {
              "id": "d",
              "text": "Eliminating the need for cross-validation."
            }
          ],
          "correctOptionId": "a",
          "explanation": "L2 regularization penalizes large weights, shrinking them proportionally to reduce model complexity and mitigate overfitting, without necessarily forcing them to absolute zero (unlike L1)."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-301-l05-a1",
          "type": "mnemonic",
          "title": "Bias-Variance Tradeoff",
          "content": "Visual prompt: A target board graphic showing High Bias (shots tightly clustered but far off-center) versus High Variance (shots scattered widely but centered around the bullseye)."
        }
      ]
    },
    {
      "id": "data-science-301-l06",
      "title": "Model Diagnostics",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "data-science-301-l06-a1",
          "type": "image",
          "title": "Confusion Matrix Deep Dive",
          "content": "Visual prompt: A comprehensive, color-coded confusion matrix mapping True Positives, False Positives, True Negatives, and False Negatives to their respective formulas for Precision, Recall, and F1-Score."
        },
        {
          "id": "data-science-301-l06-a2",
          "type": "animation",
          "title": "ROC Curve Dynamics",
          "content": "Visual prompt: An animated ROC curve demonstrating how shifting the classification threshold dynamically alters the True Positive Rate and False Positive Rate, changing the curve's shape."
        },
        {
          "id": "data-science-301-l06-a3",
          "type": "image",
          "title": "Residual Analysis",
          "content": "Visual prompt: A scatter plot showing predicted values versus residuals, highlighting a funnel shape to illustrate heteroscedasticity (unequal variance)."
        }
      ]
    },
    {
      "id": "data-science-301-l07",
      "title": "Practice: Diagnosing Performance",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Analyze the residual plot to detect heteroscedasticity or non-linear patterns.",
          "Calculate the F1-score for a highly imbalanced fraud detection dataset.",
          "Determine the optimal decision threshold using the Precision-Recall curve."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-301-l07-a1",
          "type": "practice",
          "title": "Threshold Optimizer",
          "content": "Visual prompt: An interactive dashboard where learners drag a classification threshold slider and watch the confusion matrix, Precision-Recall curve, and F1-score update in real-time."
        }
      ]
    },
    {
      "id": "data-science-301-l08",
      "title": "Deployment Tradeoffs & MLOps",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "data-science-301-l08-a1",
          "type": "image",
          "title": "Deployment Architectures",
          "content": "Visual prompt: An architecture diagram contrasting batch prediction pipelines (data warehouse to dashboard) with real-time API deployments (user app to microservices)."
        },
        {
          "id": "data-science-301-l08-a2",
          "type": "animation",
          "title": "Concept Drift Pipeline",
          "content": "Visual prompt: A flowchart illustrating incoming data distributions shifting over time (concept drift), which triggers an automated model retraining and validation pipeline."
        }
      ]
    },
    {
      "id": "data-science-301-l09",
      "title": "Practice: Deploying Models",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Evaluate the tradeoff between model complexity (inference latency) and accuracy for a real-time application.",
          "Design a monitoring strategy to detect data drift in production.",
          "Select the appropriate deployment pattern (e.g., shadow mode, A/B testing) for rolling out a new model version."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-301-l09-a1",
          "type": "practice",
          "title": "MLOps Simulator",
          "content": "Visual prompt: A scenario simulator where learners must balance server costs, inference latency, and predictive accuracy to meet strict business SLAs, with gauges showing real-time tradeoffs."
        }
      ]
    },
    {
      "id": "data-science-301-l10",
      "title": "Checkpoint 2: Diagnostics & Deployment",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "data-science-301-l10-q1",
          "text": "When evaluating a model on a highly imbalanced dataset (e.g., 1% positive class), which metric is generally most informative?",
          "skillId": "data-science-301-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Area Under the Precision-Recall Curve (PR-AUC)"
            },
            {
              "id": "b",
              "text": "Overall Accuracy"
            },
            {
              "id": "c",
              "text": "Mean Absolute Error (MAE)"
            },
            {
              "id": "d",
              "text": "True Negative Rate (Specificity) alone"
            }
          ],
          "correctOptionId": "a",
          "explanation": "PR-AUC focuses on the performance of the minority (positive) class, making it much more informative than overall accuracy, which can be misleadingly high in imbalanced datasets."
        },
        {
          "id": "data-science-301-l10-q2",
          "text": "What is the primary indicator of 'concept drift' in a deployed machine learning model?",
          "skillId": "data-science-301-skill-deployment",
          "options": [
            {
              "id": "a",
              "text": "A degradation in predictive performance over time as the underlying relationship between features and target changes."
            },
            {
              "id": "b",
              "text": "A sudden change in the data schema, such as a missing or renamed column."
            },
            {
              "id": "c",
              "text": "An increase in server latency during real-time inference."
            },
            {
              "id": "d",
              "text": "The model's training loss failing to converge during the initial training phase."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Concept drift occurs when the statistical properties of the target variable change over time, meaning the model's learned patterns are no longer valid, leading to degraded performance."
        },
        {
          "id": "data-science-301-l10-q3",
          "text": "Which deployment strategy involves running a new model alongside the current model in production without using its predictions for actual business decisions?",
          "skillId": "data-science-301-skill-deployment",
          "options": [
            {
              "id": "a",
              "text": "Shadow deployment"
            },
            {
              "id": "b",
              "text": "Canary release"
            },
            {
              "id": "c",
              "text": "Blue-Green deployment"
            },
            {
              "id": "d",
              "text": "A/B testing"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Shadow deployment allows teams to safely evaluate a new model's performance on real-world production data without impacting end users or business outcomes."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-301-l10-a1",
          "type": "mnemonic",
          "title": "Deployment Checklist",
          "content": "Visual prompt: A checklist graphic highlighting 'Monitor Drift', 'Check Latency', and 'Evaluate Imbalance' as key final steps before model sign-off."
        }
      ]
    }
  ]
};
