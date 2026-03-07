import type { LearningModule } from "@/lib/modules/types";

export const data_science_401_Module: LearningModule = {
  "id": "data-science-401",
  "title": "Data Science Systems",
  "description": "A comprehensive guide to designing, deploying, monitoring, and governing production-grade data science systems using MLOps principles.",
  "subject": "Data Science",
  "tags": [
    "curriculum",
    "interactive",
    "mlops",
    "production",
    "governance",
    "responsible-ai"
  ],
  "minAge": 17,
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
    "Design and architect scalable, resilient production machine learning pipelines.",
    "Implement robust monitoring strategies to detect and automatically respond to data and concept drift.",
    "Establish and apply AI governance frameworks to ensure compliance, fairness, and risk management.",
    "Execute end-to-end MLOps workflows for continuous integration, delivery, and training (CI/CD/CT)."
  ],
  "lessons": [
    {
      "id": "data-science-401-l01",
      "title": "Architecting Production Data Science Systems",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "data-science-401-l01-a1",
          "type": "image",
          "title": "Production ML Architecture Blueprint",
          "content": "[Visual Prompt] A high-level architecture diagram illustrating the transition from a local Jupyter notebook environment to a scalable production pipeline using Docker containers, Kubernetes orchestration, a Feature Store, and REST/gRPC APIs."
        },
        {
          "id": "data-science-401-l01-a2",
          "type": "animation",
          "title": "Anatomy of an Inference Request",
          "content": "[Visual Prompt] An animation tracing a single data payload as it moves through an API gateway, undergoes real-time feature engineering via a Feature Store, passes into a model inference container, and finally logs the prediction to a telemetry database."
        }
      ]
    },
    {
      "id": "data-science-401-l02",
      "title": "Interactive Lab: Designing a Scalable ML Pipeline",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Identify the single point of failure in the provided monolithic batch-scoring architecture.",
          "Propose a microservices-based solution to decouple feature extraction from model inference.",
          "Explain how your proposed architecture improves system resilience and scalability using a service mesh."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-401-l02-a1",
          "type": "practice",
          "title": "Architecture Builder",
          "content": "[Visual Prompt] An interactive drag-and-drop workspace where learners connect components like 'API Gateway', 'Feature Store', 'Model Registry', and 'Inference Service' to build a valid real-time scoring pipeline."
        }
      ]
    },
    {
      "id": "data-science-401-l03",
      "title": "Checkpoint 1: Production Architecture",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "data-science-401-l03-q1",
          "text": "What is the primary advantage of using a Feature Store in a production machine learning system?",
          "skillId": "data-science-401-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "It ensures consistency between offline training features and online inference features, preventing skew."
            },
            {
              "id": "b",
              "text": "It automatically trains models without human intervention."
            },
            {
              "id": "c",
              "text": "It replaces the need for a version control system like Git."
            },
            {
              "id": "d",
              "text": "It compresses data to reduce cloud storage costs."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Feature stores serve as a centralized repository that guarantees the exact same feature transformations are used during model training (offline) and real-time serving (online), preventing training-serving skew."
        },
        {
          "id": "data-science-401-l03-q2",
          "text": "When deploying a model that requires ultra-low latency and high throughput, which communication protocol is generally preferred over standard REST?",
          "skillId": "data-science-401-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "gRPC"
            },
            {
              "id": "b",
              "text": "SOAP"
            },
            {
              "id": "c",
              "text": "FTP"
            },
            {
              "id": "d",
              "text": "SMTP"
            }
          ],
          "correctOptionId": "a",
          "explanation": "gRPC uses HTTP/2 and Protocol Buffers (Protobuf) to serialize data efficiently, making it significantly faster and more suitable for low-latency microservice communication than standard REST over HTTP/1.1."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-401-l03-a1",
          "type": "mnemonic",
          "title": "Pipeline Pillars",
          "content": "Remember the 3 Cs of Production ML: Consistency (Feature Stores), Containerization (Docker), and Concurrency (Scalable APIs)."
        }
      ]
    },
    {
      "id": "data-science-401-l04",
      "title": "Model Monitoring: Detecting Data and Concept Drift",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "data-science-401-l04-a1",
          "type": "image",
          "title": "Visualizing Drift",
          "content": "[Visual Prompt] A dual-axis line chart showing model accuracy degrading over time (red line trending down) while the statistical distribution of a key input feature shifts away from its training baseline (shaded area charts diverging)."
        },
        {
          "id": "data-science-401-l04-a2",
          "type": "animation",
          "title": "Concept vs. Data Drift",
          "content": "[Visual Prompt] An animation comparing Data Drift (the input data distribution changes, e.g., average purchase price increases) with Concept Drift (the relationship between input and target changes, e.g., what constitutes 'fraud' evolves)."
        }
      ]
    },
    {
      "id": "data-science-401-l05",
      "title": "Interactive Lab: Drift Detection and Response",
      "type": "interactive",
      "duration": 15,
      "metadata": {
        "prompts": [
          "Analyze the provided Population Stability Index (PSI) and KL Divergence metrics for the incoming data streams.",
          "Determine if the model requires immediate retraining, or if the drift is a temporary seasonal anomaly.",
          "Draft an automated alert and retraining trigger policy for the MLOps team."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-401-l05-a1",
          "type": "practice",
          "title": "Telemetry Dashboard",
          "content": "[Visual Prompt] A simulated Grafana-style dashboard displaying real-time metrics, prediction distributions, and drift alerts. The user must click on anomalous spikes to investigate root causes."
        }
      ]
    },
    {
      "id": "data-science-401-l06",
      "title": "Checkpoint 2: Monitoring and Drift",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "data-science-401-l06-q1",
          "text": "Which scenario is a clear example of Concept Drift?",
          "skillId": "data-science-401-skill-monitoring",
          "options": [
            {
              "id": "a",
              "text": "A spam filter becomes less accurate because spammers start using new vocabulary to bypass the rules."
            },
            {
              "id": "b",
              "text": "A camera sensor degrades, causing all input images to have a slight green tint."
            },
            {
              "id": "c",
              "text": "A marketing model receives data from a new geographic region not present in the training set."
            },
            {
              "id": "d",
              "text": "The database schema changes, causing null values in a previously populated feature column."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Concept drift occurs when the statistical properties of the target variable (what you are trying to predict) change over time. The definition of 'spam' has fundamentally changed, even if the input data looks similar."
        },
        {
          "id": "data-science-401-l06-q2",
          "text": "Which metric is commonly used to measure the divergence between the training data distribution and the live inference data distribution?",
          "skillId": "data-science-401-skill-monitoring",
          "options": [
            {
              "id": "a",
              "text": "Kullback-Leibler (KL) Divergence"
            },
            {
              "id": "b",
              "text": "Root Mean Square Error (RMSE)"
            },
            {
              "id": "c",
              "text": "F1 Score"
            },
            {
              "id": "d",
              "text": "Silhouette Coefficient"
            }
          ],
          "correctOptionId": "a",
          "explanation": "KL Divergence (along with Population Stability Index and Wasserstein Distance) is a statistical measure used to quantify how much one probability distribution differs from a reference distribution, making it ideal for detecting data drift."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-401-l06-a1",
          "type": "mnemonic",
          "title": "Drift Distinction",
          "content": "Data Drift = The inputs changed. Concept Drift = The rules of the game changed."
        }
      ]
    },
    {
      "id": "data-science-401-l07",
      "title": "AI Governance, Risk, and Compliance",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "data-science-401-l07-a1",
          "type": "image",
          "title": "The Pillars of AI Governance",
          "content": "[Visual Prompt] A diagram showing three pillars: 'Risk Management' (model validation, security), 'Compliance' (GDPR, industry regulations), and 'Ethical AI' (fairness, transparency, explainability)."
        },
        {
          "id": "data-science-401-l07-a2",
          "type": "animation",
          "title": "The Model Audit Trail",
          "content": "[Visual Prompt] An animation showing a model artifact being tagged with metadata (training data lineage, hyperparameter configs, fairness metrics) before being cryptographically signed and approved for deployment by a governance board."
        }
      ]
    },
    {
      "id": "data-science-401-l08",
      "title": "Interactive Lab: Auditing a Model for Fairness and Bias",
      "type": "interactive",
      "duration": 18,
      "metadata": {
        "prompts": [
          "Review the model's fairness metrics (e.g., disparate impact ratio, equal opportunity difference) across different demographic cohorts.",
          "Identify potential compliance violations under GDPR regarding the 'right to explanation' for automated decisions.",
          "Formulate a mitigation strategy to reduce bias without severely compromising overall model accuracy."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-401-l08-a1",
          "type": "practice",
          "title": "Bias Mitigation Sandbox",
          "content": "[Visual Prompt] An interactive interface where learners adjust class weights and decision thresholds on a simulated credit-scoring model, observing real-time trade-offs between the False Positive Rate across demographics and overall predictive accuracy."
        }
      ]
    },
    {
      "id": "data-science-401-l09",
      "title": "Checkpoint 3: Governance and Responsible AI",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "data-science-401-l09-q1",
          "text": "Under regulations like GDPR, the 'right to explanation' implies that a company must be able to:",
          "skillId": "data-science-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Provide meaningful information about the logic involved in an automated decision."
            },
            {
              "id": "b",
              "text": "Share the complete source code of the model with any user who asks."
            },
            {
              "id": "c",
              "text": "Guarantee that the model will never make an incorrect prediction."
            },
            {
              "id": "d",
              "text": "Delete all user data immediately after a prediction is made."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 'right to explanation' requires that individuals can get a clear, understandable reason for a significant automated decision made about them, which necessitates model explainability (e.g., using SHAP or LIME)."
        },
        {
          "id": "data-science-401-l09-q2",
          "text": "Which of the following best describes 'Disparate Impact' in the context of AI Governance?",
          "skillId": "data-science-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "When a seemingly neutral algorithmic process disproportionately affects a protected class negatively."
            },
            {
              "id": "b",
              "text": "The financial cost incurred when a model's infrastructure scales up unexpectedly."
            },
            {
              "id": "c",
              "text": "The degradation of model accuracy caused by sudden shifts in data pipelines."
            },
            {
              "id": "d",
              "text": "A cyberattack that alters the weights of a neural network in production."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Disparate impact refers to practices or algorithms that adversely affect one group of people of a protected characteristic more than another, even if the rules applied are formally neutral."
        }
      ]
    },
    {
      "id": "data-science-401-l10",
      "title": "The MLOps Lifecycle: CI/CD/CT",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "data-science-401-l10-a1",
          "type": "animation",
          "title": "The Automated MLOps Loop",
          "content": "[Visual Prompt] An animated infinity loop diagram. One side shows CI/CD: Code Commit -> Test -> Build -> Deploy. The other side shows CT (Continuous Training): Monitor Production Data -> Detect Drift -> Trigger Retraining -> Evaluate -> Promote New Model. The two loops feed into each other."
        }
      ]
    },
    {
      "id": "data-science-401-l11",
      "title": "Interactive Lab: Building an Automated MLOps Pipeline",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Configure a Git repository webhook to trigger the pipeline on a new commit.",
          "Add a data validation step to ensure incoming training data matches the expected schema.",
          "Set up a model evaluation gate that only promotes models to staging if their accuracy exceeds the production model's by 2%."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-401-l11-a1",
          "type": "practice",
          "title": "MLOps Pipeline Builder",
          "content": "[Visual Prompt] A visual, node-based editor resembling GitHub Actions or Kubeflow Pipelines. Learners drag and connect nodes like 'Code Checkout', 'Data Validation', 'Model Training', 'Fairness Check', and 'Staging Deployment' to build a complete CI/CD/CT pipeline."
        }
      ]
    },
    {
      "id": "data-science-401-l12",
      "title": "Checkpoint 4: MLOps Principles",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "data-science-401-l12-q1",
          "text": "What is the key difference between Continuous Delivery (CD) and Continuous Training (CT) in MLOps?",
          "skillId": "data-science-401-skill-mlops",
          "options": [
            {
              "id": "a",
              "text": "CD automates the release of model packages, while CT automates the retraining of models on new data."
            },
            {
              "id": "b",
              "text": "CD is only for web applications, while CT is only for machine learning."
            },
            {
              "id": "c",
              "text": "CD runs daily, while CT runs hourly."
            },
            {
              "id": "d",
              "text": "CD focuses on testing code, while CT focuses on testing data."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Continuous Delivery (CD) is about reliably shipping the model artifact and its serving code. Continuous Training (CT) is a unique MLOps concept about automatically triggering and executing the model training process itself based on new data or performance degradation."
        },
        {
          "id": "data-science-401-l12-q2",
          "text": "In a mature MLOps pipeline, what is the purpose of a 'Shadow Deployment'?",
          "skillId": "data-science-401-skill-mlops",
          "options": [
            {
              "id": "a",
              "text": "To run a new model alongside the current production model, scoring live traffic without returning the new predictions to the user."
            },
            {
              "id": "b",
              "text": "To deploy a model in a dark web environment for security testing."
            },
            {
              "id": "c",
              "text": "To hide the model's architecture from competitors using obfuscation techniques."
            },
            {
              "id": "d",
              "text": "To route 100% of user traffic to a newly trained model immediately to test its breaking point."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Shadow deployments allow teams to evaluate a new model's performance, latency, and prediction stability on real-world data safely, as its predictions are logged for analysis but not served to the end user."
        }
      ]
    },
    {
      "id": "data-science-401-l13",
      "title": "Capstone Project: Deploying a Governed Production Model",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Scenario: You are the lead MLOps engineer for a fintech startup. Your task is to deploy a new loan approval model.",
          "Step 1: Choose an architecture. Select the most appropriate deployment pattern (e.g., real-time API vs. batch) for the use case.",
          "Step 2: Configure monitoring. Set thresholds for data drift on the 'annual_income' feature and for model accuracy decay.",
          "Step 3: Conduct a governance review. Analyze a fairness report and reject a biased model version, providing a justification.",
          "Step 4: Automate deployment. Approve the final, fair model for a canary release, routing 10% of traffic to it initially."
        ]
      },
      "learningAids": [
        {
          "id": "data-science-401-l13-a1",
          "type": "practice",
          "title": "Production Control Tower",
          "content": "[Visual Prompt] A unified dashboard interface with multiple tabs. The user clicks through 'Architecture', 'Monitoring', 'Governance', and 'Deployment' tabs, making decisions at each stage using interactive forms, sliders, and approval buttons to complete the capstone project."
        }
      ]
    },
    {
      "id": "data-science-401-l14",
      "title": "Final Assessment: Data Science Systems",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "data-science-401-l14-q1",
          "text": "Why is data lineage tracking critical for production data science systems, especially in regulated industries?",
          "skillId": "data-science-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "It provides an audit trail of the origin, transformations, and usage of data, ensuring reproducibility and compliance."
            },
            {
              "id": "b",
              "text": "It automatically cleanses missing values from incoming data streams."
            },
            {
              "id": "c",
              "text": "It encrypts data at rest to prevent unauthorized access."
            },
            {
              "id": "d",
              "text": "It increases the execution speed of deep learning model inference."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Data lineage tracks the lifecycle of data. In highly regulated industries like finance or healthcare, proving exactly what data a model was trained on and how it was transformed is a strict compliance requirement for audits."
        },
        {
          "id": "data-science-401-l14-q2",
          "text": "An automated Continuous Training (CT) pipeline should be triggered when:",
          "skillId": "data-science-401-skill-mlops",
          "options": [
            {
              "id": "a",
              "text": "A monitoring system detects significant performance degradation or data drift."
            },
            {
              "id": "b",
              "text": "A data scientist commits new code to the feature engineering library."
            },
            {
              "id": "c",
              "text": "The cloud infrastructure costs exceed the monthly budget."
            },
            {
              "id": "d",
              "text": "A new software engineer joins the team."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The core principle of Continuous Training is to automate the retraining process in response to real-world signals that the current model is no longer optimal, such as detected drift or a drop in key business metrics."
        },
        {
          "id": "data-science-401-l14-q3",
          "text": "You are designing a system to serve personalized product recommendations on a high-traffic e-commerce site. Which architectural component is most crucial for ensuring low-latency feature lookups during inference?",
          "skillId": "data-science-401-skill-architecture",
          "options": [
            {
              "id": "a",
              "text": "An online Feature Store"
            },
            {
              "id": "b",
              "text": "A data warehouse for batch analytics"
            },
            {
              "id": "c",
              "text": "A Git repository for model versioning"
            },
            {
              "id": "d",
              "text": "A dashboard for visualizing model accuracy"
            }
          ],
          "correctOptionId": "a",
          "explanation": "An online feature store is specifically designed for high-throughput, low-latency retrieval of pre-computed features, which is essential for real-time applications like personalized recommendations."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-401-l14-a1",
          "type": "mnemonic",
          "title": "System Success",
          "content": "A successful Data Science System requires alignment across Code (CI/CD), Data (Lineage/Drift), and Models (Governance/Monitoring)."
        }
      ]
    }
  ]
};
