import type { LearningModule } from "@/lib/modules/types";

export const data_science_201_Module: LearningModule = {
  "id": "data-science-201",
  "title": "Data Science Practice",
  "description": "Intermediate analytics pipelines, feature engineering, experimentation, and reproducible data workflows.",
  "subject": "Data Science",
  "tags": [
    "curriculum",
    "interactive",
    "pipelines",
    "feature-engineering",
    "ab-testing"
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
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design and implement reproducible analytics pipelines.",
    "Apply feature engineering techniques to improve model performance.",
    "Design and analyze A/B tests for data-driven experimentation.",
    "Demonstrate mastery of intermediate data workflows through applied practice."
  ],
  "lessons": [
    {
      "id": "data-science-201-l01",
      "title": "Analytics Pipelines & Workflows",
      "type": "video",
      "duration": 10,
      "learningAids": [
        {
          "id": "data-science-201-l01-a1",
          "type": "image",
          "title": "Pipeline Architecture",
          "content": "Visual summary of a reproducible data pipeline.",
          "visualPrompt": "A flowchart showing raw data entering a 'Data Ingestion' node, moving through 'Cleaning' and 'Transformation' nodes, and ending in a 'Modeling & Output' node, with version control icons at each step."
        },
        {
          "id": "data-science-201-l01-a2",
          "type": "animation",
          "title": "Data Flow in Action",
          "content": "Step-by-step walkthrough of data moving through a pipeline.",
          "visualPrompt": "Animated data packets flowing through a series of interconnected pipes, changing color as they pass through filters (cleaning) and gears (transformation) before assembling into a final chart."
        }
      ]
    },
    {
      "id": "data-science-201-l02",
      "title": "Practice: Building a Pipeline",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Identify the bottleneck in the provided raw data pipeline.",
          "Write a modular function to automate the missing data imputation step.",
          "Explain how implementing Git version control improves this specific workflow."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-201-l02-a1",
          "type": "practice",
          "title": "Guided Pipeline Construction",
          "content": "Follow the challenge flow to refactor a messy script into a reproducible pipeline."
        }
      ]
    },
    {
      "id": "data-science-201-l03",
      "title": "Checkpoint 1: Pipelines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "data-science-201-l03-q1",
          "text": "What is the primary benefit of a reproducible data workflow?",
          "skillId": "data-science-201-skill-pipelines",
          "options": [
            {
              "id": "a",
              "text": "It ensures that anyone can recreate the exact same results using the same data and code."
            },
            {
              "id": "b",
              "text": "It automatically increases the accuracy of machine learning models."
            },
            {
              "id": "c",
              "text": "It eliminates the need for data cleaning."
            },
            {
              "id": "d",
              "text": "It compresses the data to save storage space."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reproducibility ensures consistency, auditing, and collaboration by allowing others to verify and build upon your exact process."
        },
        {
          "id": "data-science-201-l03-q2",
          "text": "In an analytics pipeline, which step typically immediately follows data ingestion?",
          "skillId": "data-science-201-skill-pipelines",
          "options": [
            {
              "id": "a",
              "text": "Hyperparameter tuning"
            },
            {
              "id": "b",
              "text": "Data cleaning and preprocessing"
            },
            {
              "id": "c",
              "text": "A/B testing"
            },
            {
              "id": "d",
              "text": "Model deployment"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Once data is ingested, it must be cleaned and preprocessed (handling missing values, formatting) before any meaningful analysis or modeling can occur."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-201-l03-a1",
          "type": "mnemonic",
          "title": "Pipeline Stages",
          "content": "Remember I.C.T.M.: Ingest, Clean, Transform, Model."
        }
      ]
    },
    {
      "id": "data-science-201-l04",
      "title": "Feature Engineering Concepts",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "data-science-201-l04-a1",
          "type": "image",
          "title": "One-Hot Encoding",
          "content": "Visual summary of categorical encoding.",
          "visualPrompt": "A table transforming a single 'Color' column with values 'Red' and 'Blue' into two separate binary columns labeled 'Is_Red' (1s and 0s) and 'Is_Blue' (1s and 0s)."
        },
        {
          "id": "data-science-201-l04-a2",
          "type": "animation",
          "title": "Extracting Date Features",
          "content": "Step-by-step walkthrough of parsing timestamps.",
          "visualPrompt": "An animation showing a single timestamp '2023-10-31 08:00:00' splitting apart into three new distinct feature columns: 'Year: 2023', 'Month: 10', and 'Is_Morning: True'."
        }
      ]
    },
    {
      "id": "data-science-201-l05",
      "title": "Practice: Feature Engineering",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Select a categorical variable from the dataset and apply one-hot encoding.",
          "Create a new interaction feature by multiplying two existing numerical columns.",
          "Evaluate and explain the impact of your new feature on the baseline model's accuracy."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-201-l05-a1",
          "type": "practice",
          "title": "Feature Creation Sandbox",
          "content": "Experiment with creating and selecting features to optimize the provided dataset."
        }
      ]
    },
    {
      "id": "data-science-201-l06",
      "title": "Checkpoint 2: Feature Engineering",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "data-science-201-l06-q1",
          "text": "What is the primary goal of feature engineering?",
          "skillId": "data-science-201-skill-features",
          "options": [
            {
              "id": "a",
              "text": "To create new input variables from existing data that better represent the underlying problem to predictive models."
            },
            {
              "id": "b",
              "text": "To delete as much data as possible to speed up training times."
            },
            {
              "id": "c",
              "text": "To write the machine learning algorithm from scratch."
            },
            {
              "id": "d",
              "text": "To encrypt sensitive user information."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Feature engineering transforms raw data into meaningful inputs (features) that help machine learning algorithms understand patterns better."
        },
        {
          "id": "data-science-201-l06-q2",
          "text": "Why is feature scaling (like normalization or standardization) important for distance-based algorithms like K-Nearest Neighbors?",
          "skillId": "data-science-201-skill-features",
          "options": [
            {
              "id": "a",
              "text": "It prevents features with larger numerical ranges from disproportionately dominating the distance calculations."
            },
            {
              "id": "b",
              "text": "It converts categorical text data into numerical data."
            },
            {
              "id": "c",
              "text": "It automatically removes outliers from the dataset."
            },
            {
              "id": "d",
              "text": "It allows the algorithm to run without a target variable."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Without scaling, a feature measured in thousands (like salary) will outweigh a feature measured in decimals (like percentages) when calculating distances."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-201-l06-a1",
          "type": "mnemonic",
          "title": "Feature Checklist",
          "content": "Check for: Missing values, Outliers, Scaling, and Encoding (MOSE)."
        }
      ]
    },
    {
      "id": "data-science-201-l07",
      "title": "Experimentation & A/B Testing",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "data-science-201-l07-a1",
          "type": "image",
          "title": "Statistical Significance",
          "content": "Visual summary of A/B test distributions.",
          "visualPrompt": "Two overlapping bell curves on a graph, one blue labeled 'Control' and one green labeled 'Variant', with a vertical dashed line highlighting the statistical significance threshold (alpha)."
        },
        {
          "id": "data-science-201-l07-a2",
          "type": "animation",
          "title": "Random Assignment",
          "content": "Step-by-step walkthrough of splitting traffic.",
          "visualPrompt": "Animated user avatars arriving at a website and being randomly sorted by a coin-flip mechanism into two distinct buckets: Group A (Control) and Group B (Treatment)."
        }
      ]
    },
    {
      "id": "data-science-201-l08",
      "title": "Practice: Running an Experiment",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Define the null and alternative hypotheses for the proposed website change.",
          "Calculate the p-value based on the provided conversion rate data.",
          "Determine if the results are statistically significant and state your final recommendation."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-201-l08-a1",
          "type": "practice",
          "title": "A/B Test Simulator",
          "content": "Analyze the results of a simulated A/B test to make a data-driven product decision."
        }
      ]
    },
    {
      "id": "data-science-201-l09",
      "title": "Checkpoint 3: Experimentation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "data-science-201-l09-q1",
          "text": "In the context of an A/B test, what does the p-value represent?",
          "skillId": "data-science-201-skill-experimentation",
          "options": [
            {
              "id": "a",
              "text": "The probability of observing the test results (or more extreme) if the null hypothesis is actually true."
            },
            {
              "id": "b",
              "text": "The exact probability that the alternative hypothesis is correct."
            },
            {
              "id": "c",
              "text": "The percentage increase in conversion rate."
            },
            {
              "id": "d",
              "text": "The number of users required to reach statistical significance."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The p-value measures the evidence against the null hypothesis. A low p-value indicates that the observed results are highly unlikely under the null hypothesis."
        },
        {
          "id": "data-science-201-l09-q2",
          "text": "What is a Type I error in hypothesis testing?",
          "skillId": "data-science-201-skill-experimentation",
          "options": [
            {
              "id": "a",
              "text": "A false positive: rejecting the null hypothesis when it is actually true."
            },
            {
              "id": "b",
              "text": "A false negative: failing to reject the null hypothesis when it is false."
            },
            {
              "id": "c",
              "text": "A coding error in the data pipeline."
            },
            {
              "id": "d",
              "text": "Assigning too many users to the control group."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A Type I error occurs when you conclude there is a significant effect or difference, but in reality, there is none (false positive)."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-201-l09-a1",
          "type": "mnemonic",
          "title": "Error Types",
          "content": "Type I = False Positive (crying wolf). Type II = False Negative (missing the wolf)."
        }
      ]
    },
    {
      "id": "data-science-201-l10",
      "title": "Final Assessment: Data Science 201",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "data-science-201-l10-q1",
          "text": "You are building a model to predict house prices. You have a column for 'Neighborhood'. Which technique is most appropriate to prepare this column for a linear regression model?",
          "skillId": "data-science-201-skill-features",
          "options": [
            {
              "id": "a",
              "text": "One-hot encoding"
            },
            {
              "id": "b",
              "text": "Standardization"
            },
            {
              "id": "c",
              "text": "A/B testing"
            },
            {
              "id": "d",
              "text": "Leaving it as raw text"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Linear regression requires numerical inputs. One-hot encoding converts categorical text (like Neighborhood) into binary numerical columns without implying an artificial order."
        },
        {
          "id": "data-science-201-l10-q2",
          "text": "Why is random assignment crucial when setting up an A/B test?",
          "skillId": "data-science-201-skill-experimentation",
          "options": [
            {
              "id": "a",
              "text": "It ensures that the control and treatment groups are statistically comparable, isolating the effect of the intervention."
            },
            {
              "id": "b",
              "text": "It guarantees that the p-value will be less than 0.05."
            },
            {
              "id": "c",
              "text": "It prevents the data pipeline from crashing."
            },
            {
              "id": "d",
              "text": "It automatically scales numerical features."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Random assignment minimizes selection bias, ensuring that any differences in outcome between the groups are due to the treatment itself, not underlying differences in the users."
        },
        {
          "id": "data-science-201-l10-q3",
          "text": "Which practice best ensures that a data science workflow is reproducible?",
          "skillId": "data-science-201-skill-pipelines",
          "options": [
            {
              "id": "a",
              "text": "Using version control (like Git), documenting dependencies, and writing modular code."
            },
            {
              "id": "b",
              "text": "Running all code manually in a single, undocumented Jupyter notebook."
            },
            {
              "id": "c",
              "text": "Saving data files locally on a single developer's desktop."
            },
            {
              "id": "d",
              "text": "Overwriting raw data files with cleaned data to save space."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reproducibility relies on tracking changes (Git), managing environments (dependencies), and structuring code so it can be executed reliably by anyone."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-201-l10-a1",
          "type": "mnemonic",
          "title": "Module Summary",
          "content": "Pipelines ensure consistency. Features improve models. Experiments prove impact."
        }
      ]
    }
  ]
};
