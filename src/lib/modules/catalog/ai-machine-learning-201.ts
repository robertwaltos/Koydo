import type { LearningModule } from "@/lib/modules/types";

export const ai_machine_learning_201_Module: LearningModule = {
  "id": "ai-machine-learning-201",
  "title": "Machine Learning Practice",
  "description": "Intermediate ML workflows: feature pipelines, model selection, evaluation strategy, and iterative refinement.",
  "subject": "AI and ML",
  "tags": [
    "curriculum",
    "interactive",
    "machine-learning",
    "data-science"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
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
  "thumbnail": "/placeholders/lesson-ml-pipeline.svg",
  "learningObjectives": [
    "Design and implement robust feature engineering pipelines.",
    "Select appropriate baseline models and apply cross-validation.",
    "Evaluate model performance using advanced metrics like F1-score and ROC-AUC.",
    "Iteratively refine models through error analysis and hyperparameter tuning."
  ],
  "lessons": [
    {
      "id": "ai-machine-learning-201-l01",
      "title": "Feature Engineering & Pipelines",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic factory assembly line where raw, glowing data blocks are transformed into polished geometric shapes, representing a machine learning feature pipeline, 3D render, vibrant neon colors, high-tech aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation showing messy, raw data tables flowing through a series of glowing digital filters, emerging as clean, structured matrices ready to be fed into a glowing neural network core, cinematic lighting.",
      "chunks": [
        {
          "id": "ai-machine-learning-201-l01-c1",
          "title": "The Messy Reality of Data",
          "content": "Welcome to the ML Pipeline! In the real world, raw data is rarely ready for machine learning. It's often messy, incomplete, and in formats that algorithms simply cannot understand."
        },
        {
          "id": "ai-machine-learning-201-l01-c2",
          "title": "Feature Engineering",
          "content": "Feature engineering is the art of transforming raw data into a format models can use. This includes 'imputing' (filling in) missing values, scaling large numbers down to standard ranges, and encoding text categories into numerical values."
        },
        {
          "id": "ai-machine-learning-201-l01-c3",
          "title": "The Power of Pipelines",
          "content": "A 'Pipeline' bundles all these preprocessing steps together. This ensures your training data and your testing data undergo the exact same transformations in the exact same order, preventing a critical error known as 'data leakage'."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l01-a1",
          "type": "image",
          "title": "Pipeline Architecture",
          "content": "Visual summary of data flowing from imputation to scaling and encoding."
        },
        {
          "id": "ai-machine-learning-201-l01-a2",
          "type": "animation",
          "title": "Data Transformation",
          "content": "Step-by-step walkthrough of a categorical variable being one-hot encoded."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l02",
      "title": "Practice: Building a Pipeline",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A first-person view of a holographic coding interface where blocks of code representing 'Imputer' and 'Scaler' are being snapped together like puzzle pieces, cyberpunk style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A screen-capture style animation showing Python code being typed, where a scikit-learn ColumnTransformer is built, highlighting the syntax and structure in glowing neon colors against a dark IDE background.",
      "chunks": [
        {
          "id": "ai-machine-learning-201-l02-c1",
          "title": "Hands-on with Scikit-Learn",
          "content": "Let's build a pipeline using Python's scikit-learn library. You'll snap together an Imputer for missing data and a Scaler for numerical features to create a seamless workflow."
        },
        {
          "id": "ai-machine-learning-201-l02-c2",
          "title": "Your Mission",
          "content": "Follow the interactive prompts to construct your ColumnTransformer. Pay close attention to which transformations apply to numerical columns versus categorical columns."
        }
      ],
      "metadata": {
        "prompts": [
          "Identify the missing values in the provided dataset.",
          "Apply a standard scaler to the numerical features.",
          "Explain why scaling is critical for distance-based algorithms like KNN."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l02-a1",
          "type": "practice",
          "title": "Guided Pipeline Construction",
          "content": "Follow the challenge flow to build a scikit-learn pipeline and record your approach."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l03",
      "title": "Checkpoint 1: Pipelines",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital checkpoint gate in a cybernetic landscape, with the words 'Data Ready' floating above it in holographic text, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced looping animation of a data packet successfully passing through a security scanner, turning from red to green, symbolizing validated and cleaned data.",
      "questions": [
        {
          "id": "ai-machine-learning-201-l03-q1",
          "text": "What is the primary purpose of a machine learning feature pipeline?",
          "skillId": "ai-machine-learning-201-skill-pipelines",
          "options": [
            {
              "id": "a",
              "text": "To automate and standardize data transformations to prevent data leakage."
            },
            {
              "id": "b",
              "text": "To automatically select the best machine learning algorithm."
            },
            {
              "id": "c",
              "text": "To increase the processing speed of the computer's CPU."
            },
            {
              "id": "d",
              "text": "To generate new raw data when the dataset is too small."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Pipelines bundle data preprocessing steps, ensuring that transformations are applied consistently to both training and testing data, which prevents data leakage."
        },
        {
          "id": "ai-machine-learning-201-l03-q2",
          "text": "Why must missing values be imputed before applying a Standard Scaler?",
          "skillId": "ai-machine-learning-201-skill-preprocessing",
          "options": [
            {
              "id": "a",
              "text": "Because mathematical scaling functions cannot compute the mean and variance with null values present."
            },
            {
              "id": "b",
              "text": "Because the scaler will automatically delete rows with missing values."
            },
            {
              "id": "c",
              "text": "Because missing values are always outliers."
            },
            {
              "id": "d",
              "text": "Because imputation requires scaled data to work properly."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Standard scaling relies on calculating the mean and standard deviation of a feature, which requires complete numerical data."
        },
        {
          "id": "ai-machine-learning-201-l03-q3",
          "text": "Which technique is most appropriate for handling a categorical feature with 100 unique text labels?",
          "skillId": "ai-machine-learning-201-skill-encoding",
          "options": [
            {
              "id": "a",
              "text": "Target encoding or embedding layers."
            },
            {
              "id": "b",
              "text": "One-hot encoding."
            },
            {
              "id": "c",
              "text": "Leaving it as raw text."
            },
            {
              "id": "d",
              "text": "Dropping the column entirely without analysis."
            }
          ],
          "correctOptionId": "a",
          "explanation": "High-cardinality features (many unique labels) create massive, sparse matrices if one-hot encoded. Target encoding or embeddings are more efficient."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l03-a1",
          "type": "mnemonic",
          "title": "Pipeline Order",
          "content": "Remember: Clean, Encode, Scale (CES) - Handle missing data, convert text to numbers, then scale the ranges."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l04",
      "title": "Model Selection & Cross-Validation",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A digital arena where different robot avatars, each representing a different ML algorithm like Decision Trees and SVMs, stand ready for a competition, holographic UI, sci-fi style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animated flowchart showing a dataset being split into 5 distinct folds, with a model iteratively training on 4 folds and testing on the 1 remaining fold, highlighting the concept of k-fold cross-validation with glowing segments.",
      "chunks": [
        {
          "id": "ai-machine-learning-201-l04-c1",
          "title": "Establishing a Baseline",
          "content": "With so many algorithms available, where do you start? Always begin with a 'baseline' model. A simple algorithm like Logistic Regression sets a minimum performance standard that more complex models must beat to justify their complexity."
        },
        {
          "id": "ai-machine-learning-201-l04-c2",
          "title": "The Cross-Validation Concept",
          "content": "A single train/test split can be lucky or unlucky depending on how the data is divided. To truly test a model's robustness, we use K-Fold Cross-Validation."
        },
        {
          "id": "ai-machine-learning-201-l04-c3",
          "title": "How K-Fold Works",
          "content": "In K-Fold Cross-Validation, we split the data into 'K' equal chunks (folds). The model trains on K-1 folds and tests on the remaining fold. This process repeats K times, ensuring every data point is used for both training and testing."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l04-a1",
          "type": "image",
          "title": "K-Fold Cross Validation",
          "content": "Diagram showing how data is partitioned into training and validation sets across multiple iterations."
        },
        {
          "id": "ai-machine-learning-201-l04-a2",
          "type": "animation",
          "title": "Overfitting vs Underfitting",
          "content": "Visual comparison of model decision boundaries adapting to data points."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l05",
      "title": "Practice: Training & Comparing Models",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen holographic display showing two different neural network architectures racing to classify a stream of incoming data points, dynamic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A time-lapse animation of a bar chart dynamically updating as different machine learning models complete their training phases, comparing their final accuracy scores in a sleek, modern UI.",
      "chunks": [
        {
          "id": "ai-machine-learning-201-l05-c1",
          "title": "The Model Arena",
          "content": "Time to put models to the test. You will train a baseline Logistic Regression model and compare it against a more complex Random Forest classifier."
        },
        {
          "id": "ai-machine-learning-201-l05-c2",
          "title": "Evaluating Variance",
          "content": "Use 5-fold cross-validation to evaluate their performance. Pay close attention to the variance in their accuracy scores across the different folds to see which model is more stable."
        }
      ],
      "metadata": {
        "prompts": [
          "Select and train a baseline Logistic Regression model.",
          "Implement 5-fold cross-validation on a Random Forest classifier.",
          "Compare the variance in accuracy scores between the two models and explain your findings."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l05-a1",
          "type": "practice",
          "title": "Model Comparison Lab",
          "content": "Follow the challenge flow to train multiple models and record your evaluation approach."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l06",
      "title": "Checkpoint 2: Model Selection",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing podium with three holographic trophies, representing 1st, 2nd, and 3rd place machine learning models based on their performance metrics, dark background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A looping animation of a target board where darts are thrown; some are tightly clustered but off-center (high bias), while others are spread out but centered (high variance).",
      "questions": [
        {
          "id": "ai-machine-learning-201-l06-q1",
          "text": "What is the main advantage of k-fold cross-validation over a single train/test split?",
          "skillId": "ai-machine-learning-201-skill-validation",
          "options": [
            {
              "id": "a",
              "text": "It provides a more robust and less biased estimate of model performance on unseen data."
            },
            {
              "id": "b",
              "text": "It trains the model much faster than a single split."
            },
            {
              "id": "c",
              "text": "It automatically tunes the hyperparameters of the model."
            },
            {
              "id": "d",
              "text": "It prevents the need for data preprocessing."
            }
          ],
          "correctOptionId": "a",
          "explanation": "By testing on multiple different subsets of the data, cross-validation reduces the variance of the performance estimate, giving a truer picture of how the model will generalize."
        },
        {
          "id": "ai-machine-learning-201-l06-q2",
          "text": "Which model is typically best used as a simple baseline for a binary classification task?",
          "skillId": "ai-machine-learning-201-skill-baselines",
          "options": [
            {
              "id": "a",
              "text": "Logistic Regression"
            },
            {
              "id": "b",
              "text": "Deep Neural Network"
            },
            {
              "id": "c",
              "text": "K-Means Clustering"
            },
            {
              "id": "d",
              "text": "Principal Component Analysis (PCA)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Logistic Regression is a simple, interpretable, and fast algorithm, making it an ideal baseline to compare more complex models against."
        },
        {
          "id": "ai-machine-learning-201-l06-q3",
          "text": "What does high training accuracy but low validation accuracy indicate?",
          "skillId": "ai-machine-learning-201-skill-diagnostics",
          "options": [
            {
              "id": "a",
              "text": "Overfitting"
            },
            {
              "id": "b",
              "text": "Underfitting"
            },
            {
              "id": "c",
              "text": "Perfect generalization"
            },
            {
              "id": "d",
              "text": "Data leakage"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Overfitting occurs when a model learns the training data too well (including its noise), causing it to perform poorly on new, unseen validation data."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l06-a1",
          "type": "mnemonic",
          "title": "Bias-Variance Tradeoff",
          "content": "High Bias = Underfitting (Too simple). High Variance = Overfitting (Too complex)."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l07",
      "title": "Advanced Evaluation Metrics",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech dashboard displaying glowing charts, confusion matrices, and ROC curves, with a futuristic cybernetic aesthetic in dark mode, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A visual breakdown of a confusion matrix, with animated glowing dots representing true positives, false positives, true negatives, and false negatives sorting themselves into four distinct quadrants.",
      "chunks": [
        {
          "id": "ai-machine-learning-201-l07-c1",
          "title": "Beyond Accuracy",
          "content": "Accuracy isn't everything, especially when dealing with imbalanced data (like predicting a rare disease). If 99% of patients are healthy, a model that always guesses 'healthy' is 99% accurate, but completely useless."
        },
        {
          "id": "ai-machine-learning-201-l07-c2",
          "title": "The Confusion Matrix",
          "content": "Enter the Confusion Matrix: a grid showing True Positives, False Positives, True Negatives, and False Negatives. It tells you exactly *how* your model is confused."
        },
        {
          "id": "ai-machine-learning-201-l07-c3",
          "title": "Precision, Recall, and ROC",
          "content": "From this matrix, we calculate Precision (quality of positive predictions) and Recall (quantity of actual positives found). We also use the ROC Curve and AUC score to measure how well our model distinguishes between classes across different probability thresholds."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l07-a1",
          "type": "image",
          "title": "The Confusion Matrix",
          "content": "Visual grid explaining True Positives, False Positives, True Negatives, and False Negatives."
        },
        {
          "id": "ai-machine-learning-201-l07-a2",
          "type": "animation",
          "title": "ROC Curve Generation",
          "content": "Animation showing how changing the classification threshold plots the ROC curve."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l08",
      "title": "Practice: Evaluating Performance",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic magnifying glass hovering over a dataset, revealing hidden patterns and metrics like precision and recall in glowing neon text, 3D render.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An interactive slider animation where moving the threshold slider left or right dynamically changes the precision and recall scores on a digital gauge, demonstrating the tradeoff.",
      "chunks": [
        {
          "id": "ai-machine-learning-201-l08-c1",
          "title": "Calculating the Metrics",
          "content": "Let's calculate these advanced metrics in practice. You'll extract Precision and Recall directly from a generated confusion matrix."
        },
        {
          "id": "ai-machine-learning-201-l08-c2",
          "title": "Visualizing Trade-offs",
          "content": "Next, you'll plot an ROC curve to visualize your model's diagnostic ability and compute the F1-score to find the perfect balance between Precision and Recall."
        }
      ],
      "metadata": {
        "prompts": [
          "Calculate Precision and Recall from the provided confusion matrix.",
          "Plot an ROC curve and calculate the AUC score.",
          "Explain why F1-score is a better metric than accuracy for highly imbalanced datasets."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l08-a1",
          "type": "practice",
          "title": "Metrics Calculation Lab",
          "content": "Follow the challenge flow to compute advanced metrics and record your analysis."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l09",
      "title": "Checkpoint 3: Evaluation",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital scale balancing two weights labeled 'Precision' and 'Recall' in a futuristic laboratory setting, cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A looping animation of a radar chart expanding and contracting as different evaluation metrics are optimized, showing the trade-offs between them in real-time.",
      "questions": [
        {
          "id": "ai-machine-learning-201-l09-q1",
          "text": "In a medical diagnosis model for a severe, rare disease, which metric is most critical to maximize in order to minimize false negatives?",
          "skillId": "ai-machine-learning-201-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "Recall (Sensitivity)"
            },
            {
              "id": "b",
              "text": "Precision"
            },
            {
              "id": "c",
              "text": "Specificity"
            },
            {
              "id": "d",
              "text": "Overall Accuracy"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Recall measures the proportion of actual positives correctly identified. Maximizing recall minimizes false negatives, ensuring sick patients are not sent home untreated."
        },
        {
          "id": "ai-machine-learning-201-l09-q2",
          "text": "What does an ROC-AUC score of 0.5 imply about a binary classification model?",
          "skillId": "ai-machine-learning-201-skill-roc",
          "options": [
            {
              "id": "a",
              "text": "The model's predictions are no better than random guessing."
            },
            {
              "id": "b",
              "text": "The model is perfectly accurate."
            },
            {
              "id": "c",
              "text": "The model is perfectly inaccurate (predicts the opposite every time)."
            },
            {
              "id": "d",
              "text": "The dataset is perfectly balanced."
            }
          ],
          "correctOptionId": "a",
          "explanation": "An AUC of 0.5 represents the diagonal line on an ROC curve, meaning the model has no discrimination capacity to distinguish between positive and negative classes."
        },
        {
          "id": "ai-machine-learning-201-l09-q3",
          "text": "How is the F1-score calculated?",
          "skillId": "ai-machine-learning-201-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "The harmonic mean of precision and recall."
            },
            {
              "id": "b",
              "text": "The arithmetic average of precision and recall."
            },
            {
              "id": "c",
              "text": "True Positives divided by Total Population."
            },
            {
              "id": "d",
              "text": "The area under the precision-recall curve."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The F1-score is the harmonic mean of precision and recall, which punishes extreme values and provides a balanced metric when classes are imbalanced."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l09-a1",
          "type": "mnemonic",
          "title": "Precision vs Recall",
          "content": "Precision = Quality of positive predictions. Recall = Quantity of actual positives found."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l10",
      "title": "Iterative Refinement & Hyperparameter Tuning",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing spiral staircase made of data streams, representing the iterative process of improving a machine learning model, cybernetic environment, 3D render, vibrant colors, high-tech aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage showing a model's accuracy score increasing on a digital display as hyperparameters are tuned and new features are added in a continuous, glowing loop.",
      "chunks": [
        {
          "id": "ai-machine-learning-201-l10-c1",
          "title": "The Iterative Loop",
          "content": "No model is perfect on the first try. Machine learning is an iterative process. Once you have a baseline, you enter a loop of analyzing errors, tweaking settings, and retraining."
        },
        {
          "id": "ai-machine-learning-201-l10-c2",
          "title": "Error Analysis",
          "content": "We use Error Analysis to find out *where* the model fails. Are there specific types of data it always gets wrong? This guides us to engineer better features."
        },
        {
          "id": "ai-machine-learning-201-l10-c3",
          "title": "Hyperparameter Tuning",
          "content": "Algorithms have 'knobs and dials' called hyperparameters (like the maximum depth of a decision tree). We use techniques like Grid Search or Random Search to systematically test combinations and find the optimal settings."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l10-a1",
          "type": "image",
          "title": "Grid Search vs Random Search",
          "content": "Visual comparison of how Grid Search exhaustively checks combinations while Random Search samples them."
        },
        {
          "id": "ai-machine-learning-201-l10-a2",
          "type": "animation",
          "title": "The Error Analysis Loop",
          "content": "Animation showing the cycle of training, analyzing errors, engineering new features, and retraining."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l11",
      "title": "Practice: Tuning and Error Analysis",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A first-person view of a holographic control panel with glowing dials and sliders being adjusted to tune a machine learning model, sci-fi laboratory setting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A screen-capture style animation showing Python code executing a GridSearchCV, with a progress bar filling up and the best parameters highlighting in neon green.",
      "chunks": [
        {
          "id": "ai-machine-learning-201-l11-c1",
          "title": "Optimizing the Algorithm",
          "content": "In this final lab, you'll perform a Grid Search to optimize a Decision Tree's hyperparameters, finding the perfect balance between underfitting and overfitting."
        },
        {
          "id": "ai-machine-learning-201-l11-c2",
          "title": "Learning from Mistakes",
          "content": "After tuning, you will analyze the remaining errors in your model's predictions and propose new features that could help fix those specific blind spots."
        }
      ],
      "metadata": {
        "prompts": [
          "Perform a Grid Search to find the best max_depth for a Decision Tree.",
          "Analyze the confusion matrix of the tuned model to identify remaining errors.",
          "Propose one new feature that could help the model correctly classify the false positives."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l11-a1",
          "type": "practice",
          "title": "Hyperparameter Tuning Lab",
          "content": "Follow the challenge flow to optimize your model's parameters and document your findings."
        }
      ]
    },
    {
      "id": "ai-machine-learning-201-l12",
      "title": "Final Checkpoint: Iterative Refinement",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A grand, glowing finish line in a digital cyberspace, with floating holographic badges representing mastery of machine learning pipelines and evaluation.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A celebratory animation of a complex neural network fully lighting up, symbolizing a fully optimized and refined machine learning model ready for deployment.",
      "questions": [
        {
          "id": "ai-machine-learning-201-l12-q1",
          "text": "What is the recommended first step in iterative model refinement after evaluating a baseline model?",
          "skillId": "ai-machine-learning-201-skill-refinement",
          "options": [
            {
              "id": "a",
              "text": "Conducting error analysis to identify patterns where the model fails."
            },
            {
              "id": "b",
              "text": "Immediately switching to a deep learning neural network."
            },
            {
              "id": "c",
              "text": "Deleting 50% of the features randomly to reduce noise."
            },
            {
              "id": "d",
              "text": "Deploying the baseline model to production immediately."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Error analysis helps you understand *why* the model is failing, guiding you to engineer better features or choose a more appropriate algorithm."
        },
        {
          "id": "ai-machine-learning-201-l12-q2",
          "text": "Which technique is used to systematically search for the best model hyperparameters?",
          "skillId": "ai-machine-learning-201-skill-tuning",
          "options": [
            {
              "id": "a",
              "text": "Grid Search or Random Search."
            },
            {
              "id": "b",
              "text": "Principal Component Analysis (PCA)."
            },
            {
              "id": "c",
              "text": "K-Means Clustering."
            },
            {
              "id": "d",
              "text": "Data Imputation."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Grid Search and Random Search systematically test different combinations of hyperparameters (like learning rate or tree depth) to find the optimal configuration."
        },
        {
          "id": "ai-machine-learning-201-l12-q3",
          "text": "Why is it critical to keep a separate hold-out test set during the iterative refinement process?",
          "skillId": "ai-machine-learning-201-skill-validation",
          "options": [
            {
              "id": "a",
              "text": "To ensure the final model hasn't overfit to the validation set used during hyperparameter tuning."
            },
            {
              "id": "b",
              "text": "To increase the amount of data available for training."
            },
            {
              "id": "c",
              "text": "To speed up the grid search process."
            },
            {
              "id": "d",
              "text": "To replace missing values in the training set."
            }
          ],
          "correctOptionId": "a",
          "explanation": "If you repeatedly tune a model based on validation set performance, information leaks from the validation set into the model. A final hold-out test set provides an unbiased evaluation."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-201-l12-a1",
          "type": "mnemonic",
          "title": "The ML Lifecycle",
          "content": "Train -> Validate -> Tune -> Repeat. Only Test at the very end!"
        }
      ]
    }
  ]
};
