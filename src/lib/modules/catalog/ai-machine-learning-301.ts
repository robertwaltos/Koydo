import type { LearningModule } from "@/lib/modules/types";

export const ai_machine_learning_301_Module: LearningModule = {
  "id": "ai-machine-learning-301",
  "title": "Machine Learning Engineering",
  "description": "Advanced ML engineering including model optimization, serving patterns, reliability, MLOps, and responsible deployment.",
  "subject": "AI and ML",
  "tags": [
    "curriculum",
    "interactive",
    "mlops",
    "engineering"
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
    "Evaluate and apply model optimization techniques like quantization and pruning.",
    "Design robust ML serving architectures using batch and real-time patterns.",
    "Implement MLOps practices to detect drift and maintain model reliability.",
    "Deploy machine learning models responsibly, ensuring fairness and mitigating bias."
  ],
  "lessons": [
    {
      "id": "ai-machine-learning-301-l01",
      "title": "Model Optimization Concepts",
      "type": "video",
      "duration": 9,
      "lessonImagePrompt": "A futuristic isometric 3D render of a glowing neural network being compressed into a small, powerful microchip. Neon blue and purple accents, clean tech aesthetic, 8k resolution, Imagen 4.",
      "conceptVideoPrompt": "A cinematic 3D animation showing a massive, complex neural network with glowing nodes. The network smoothly compresses and prunes unnecessary connections, transforming into a sleek, efficient model. High-tech visual style, 4k, Veo 3.1.",
      "chunks": [
        {
          "id": "ai-machine-learning-301-l01-c1",
          "title": "The Need for Optimization",
          "content": "Large ML models require massive compute power. Optimization reduces their size and speeds up inference, making them cheaper and faster to run in production environments.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l01-c2",
          "title": "Quantization",
          "content": "Quantization reduces the precision of the numbers (weights) in a model, like converting 32-bit floats to 8-bit integers. This shrinks the model size significantly with minimal accuracy loss.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l01-c3",
          "title": "Pruning",
          "content": "Pruning involves removing neural network connections (weights) that are close to zero. It simplifies the model, making it faster without forgetting what it learned.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l01-c4",
          "title": "Knowledge Distillation",
          "content": "In Knowledge Distillation, a large, complex 'Teacher' model trains a smaller, faster 'Student' model to mimic its behavior, transferring knowledge efficiently.",
          "type": "concept"
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l01-a1",
          "type": "image",
          "title": "Optimization Techniques",
          "content": "Visual summary comparing Quantization (reducing precision), Pruning (removing weights), and Knowledge Distillation (teacher-student transfer)."
        },
        {
          "id": "ai-machine-learning-301-l01-a2",
          "type": "animation",
          "title": "How Pruning Works",
          "content": "Step-by-step walkthrough showing weights near zero being removed to speed up inference without losing significant accuracy."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l02",
      "title": "Optimizing for the Edge",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A first-person view of a sleek digital dashboard showing model performance metrics like latency, throughput, and accuracy, with interactive sliders for quantization and pruning. Modern UI/UX design, 8k, Imagen 4.",
      "conceptVideoPrompt": "A dynamic screen-recording style animation of an engineer adjusting sliders on a futuristic dashboard, instantly seeing a 3D model's inference speed increase as its size decreases. 4k, smooth motion, Veo 3.1.",
      "chunks": [
        {
          "id": "ai-machine-learning-301-l02-c1",
          "title": "What is Edge Computing?",
          "content": "Edge computing means running ML models directly on user devices like smartphones or IoT sensors, rather than in the cloud. This ensures privacy and zero network latency.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l02-c2",
          "title": "Hardware Constraints",
          "content": "Edge devices have strict limits on memory (RAM), battery life, and processing power. Models must be heavily optimized to function within these boundaries.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l02-c3",
          "title": "The Optimization Trade-off",
          "content": "When optimizing for the edge, engineers must balance three factors: Model Size, Inference Speed, and Accuracy. Improving size and speed often costs a small percentage of accuracy.",
          "type": "concept"
        }
      ],
      "metadata": {
        "prompts": [
          "Identify the primary constraint of your target edge device (e.g., memory, battery).",
          "Select the optimization technique that best addresses this constraint.",
          "Explain the trade-off between model accuracy and inference speed in your choice."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l02-a1",
          "type": "practice",
          "title": "Edge Deployment Challenge",
          "content": "Follow the challenge flow to compress a 500MB vision model to fit on a mobile device without dropping accuracy below 90%."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l03",
      "title": "Checkpoint 1: Optimization",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing 3D checkpoint marker shaped like a microchip, hovering over a digital grid. Cyberpunk lighting, highly detailed, 8k, Imagen 4.",
      "conceptVideoPrompt": "A short, looping 3D animation of a glowing microchip rotating on a pedestal, emitting soft blue light pulses to signify a saved checkpoint. 4k resolution, Veo 3.1.",
      "questions": [
        {
          "id": "ai-machine-learning-301-l03-q1",
          "text": "Which optimization technique involves training a smaller 'student' model to replicate the behavior of a larger 'teacher' model?",
          "skillId": "ai-machine-learning-301-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "Knowledge Distillation"
            },
            {
              "id": "b",
              "text": "Weight Pruning"
            },
            {
              "id": "c",
              "text": "Post-training Quantization"
            },
            {
              "id": "d",
              "text": "Feature Engineering"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Knowledge Distillation transfers knowledge from a large, complex model (teacher) to a smaller, faster model (student)."
        },
        {
          "id": "ai-machine-learning-301-l03-q2",
          "text": "What is the primary trade-off when applying aggressive quantization (e.g., FP32 to INT8) to a neural network?",
          "skillId": "ai-machine-learning-301-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "Reduced model size and latency at the cost of potential accuracy loss."
            },
            {
              "id": "b",
              "text": "Increased model accuracy at the cost of higher memory usage."
            },
            {
              "id": "c",
              "text": "Slower inference speed but better generalization."
            },
            {
              "id": "d",
              "text": "No trade-offs; quantization strictly improves all metrics."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Quantization reduces the precision of the numbers used in the model, which shrinks size and speeds up inference, but can slightly degrade accuracy."
        },
        {
          "id": "ai-machine-learning-301-l03-q3",
          "text": "If a model must be deployed on a microcontroller with strictly limited RAM, which approach is most critical?",
          "skillId": "ai-machine-learning-301-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "Model compression techniques like pruning and quantization."
            },
            {
              "id": "b",
              "text": "Increasing the batch size during inference."
            },
            {
              "id": "c",
              "text": "Deploying the model using a REST API."
            },
            {
              "id": "d",
              "text": "Using a larger ensemble of models."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Microcontrollers have severe memory constraints, making compression techniques essential to fit the model into RAM."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l03-a1",
          "type": "mnemonic",
          "title": "Optimization Triangle",
          "content": "Remember the trade-off triangle: Size, Speed, Accuracy. Improving two usually costs the third."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l04",
      "title": "Model Serving Patterns",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "An isometric 3D diagram showing data flowing from a user's smartphone through a cloud server to a machine learning model, with glowing data packets. Clean, professional tech illustration, 8k, Imagen 4.",
      "conceptVideoPrompt": "A 3D animated flowchart demonstrating different ML serving patterns. Glowing data streams show batch processing in large chunks, and real-time processing with rapid, single-packet flows. Cinematic lighting, 4k, Veo 3.1.",
      "chunks": [
        {
          "id": "ai-machine-learning-301-l04-c1",
          "title": "What is Model Serving?",
          "content": "Model serving is the process of hosting a trained ML model so that software applications can send it data and receive predictions in return.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l04-c2",
          "title": "Batch Prediction",
          "content": "Batch prediction processes large volumes of data all at once, usually offline. It's perfect for tasks like generating weekly recommendations where instant results aren't needed.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l04-c3",
          "title": "Real-Time Request-Response",
          "content": "Real-time serving uses APIs (like REST or gRPC) to process single requests instantly. It's essential for user-facing features like fraud detection or translation.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l04-c4",
          "title": "Streaming Prediction",
          "content": "Streaming prediction continuously processes live data feeds (like stock market tickers) using event brokers like Kafka, providing rolling, real-time insights.",
          "type": "concept"
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l04-a1",
          "type": "image",
          "title": "Serving Architectures",
          "content": "Diagram comparing Batch Prediction, Request-Response (REST/gRPC), and Streaming patterns."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l05",
      "title": "Designing a Serving Pipeline",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A digital blueprint of a cloud architecture for machine learning, featuring nodes for load balancers, model endpoints, and feature stores, glowing with a soft blue light. 8k, Imagen 4.",
      "conceptVideoPrompt": "An interactive 3D animation where different architectural components snap into place on a grid, building a robust ML serving pipeline. High-tech, sleek, 4k resolution, Veo 3.1.",
      "chunks": [
        {
          "id": "ai-machine-learning-301-l05-c1",
          "title": "Pipeline Components",
          "content": "A robust serving pipeline includes an API Gateway to route requests, a Load Balancer to distribute traffic, and Model Servers to execute the actual predictions.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l05-c2",
          "title": "The Feature Store",
          "content": "A Feature Store is a centralized database that serves pre-computed data features at ultra-low latency, ensuring the model gets the exact same data format in production as it did during training.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l05-c3",
          "title": "Handling Traffic Spikes",
          "content": "To handle sudden surges in users, serving pipelines use auto-scaling. This automatically spins up additional model server instances when traffic is high and scales them down to save costs when traffic drops.",
          "type": "concept"
        }
      ],
      "metadata": {
        "prompts": [
          "Determine if the use case requires real-time or batch predictions.",
          "Select the appropriate communication protocol (e.g., REST, gRPC, Kafka).",
          "Explain how your architecture handles sudden spikes in user traffic."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l05-a1",
          "type": "practice",
          "title": "Fraud Detection Architecture",
          "content": "Design a low-latency serving pipeline for a credit card fraud detection system."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l06",
      "title": "Checkpoint 2: Serving",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing 3D checkpoint marker shaped like a server rack, hovering over a digital grid. Cyberpunk lighting, highly detailed, 8k, Imagen 4.",
      "conceptVideoPrompt": "A short, looping 3D animation of a glowing server rack rotating on a pedestal, emitting soft blue light pulses to signify a saved checkpoint. 4k resolution, Veo 3.1.",
      "questions": [
        {
          "id": "ai-machine-learning-301-l06-q1",
          "text": "Which serving pattern is most appropriate for generating weekly product recommendations for millions of users?",
          "skillId": "ai-machine-learning-301-skill-serving",
          "options": [
            {
              "id": "a",
              "text": "Batch Prediction"
            },
            {
              "id": "b",
              "text": "Real-time Request-Response"
            },
            {
              "id": "c",
              "text": "Streaming Prediction"
            },
            {
              "id": "d",
              "text": "Edge Deployment"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Batch prediction is ideal for high-throughput, offline tasks where predictions don't need to be delivered instantly."
        },
        {
          "id": "ai-machine-learning-301-l06-q2",
          "text": "Why might an engineering team choose gRPC over REST for internal model serving?",
          "skillId": "ai-machine-learning-301-skill-serving",
          "options": [
            {
              "id": "a",
              "text": "gRPC uses Protocol Buffers, offering lower latency and smaller payload sizes."
            },
            {
              "id": "b",
              "text": "gRPC is easier to read for humans than JSON-based REST."
            },
            {
              "id": "c",
              "text": "gRPC does not require a network connection."
            },
            {
              "id": "d",
              "text": "REST cannot be used for machine learning models."
            }
          ],
          "correctOptionId": "a",
          "explanation": "gRPC uses binary serialization (Protocol Buffers), making it highly efficient and fast for microservice-to-microservice communication."
        },
        {
          "id": "ai-machine-learning-301-l06-q3",
          "text": "What is the primary purpose of a Feature Store in an ML serving architecture?",
          "skillId": "ai-machine-learning-301-skill-serving",
          "options": [
            {
              "id": "a",
              "text": "To serve pre-computed features at low latency for real-time inference."
            },
            {
              "id": "b",
              "text": "To store the final trained model weights."
            },
            {
              "id": "c",
              "text": "To act as a version control system for Python code."
            },
            {
              "id": "d",
              "text": "To compress the model for edge devices."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Feature stores ensure consistency between training and serving by providing a centralized repository of low-latency features for real-time models."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l06-a1",
          "type": "mnemonic",
          "title": "Serving Rule of Thumb",
          "content": "Batch for Throughput, REST/gRPC for Latency, Streaming for Continuous Events."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l07",
      "title": "Reliability & MLOps",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "A split-screen 3D illustration showing a healthy, glowing green data pipeline on the left, and a degraded, red-tinted pipeline on the right, symbolizing data drift. Professional tech style, 8k, Imagen 4.",
      "conceptVideoPrompt": "A 3D animation showing a stream of data points entering a model. Over time, the color and shape of the data points slowly change, triggering a glowing red 'Concept Drift' alert, followed by an automated retraining sequence. 4k, Veo 3.1.",
      "chunks": [
        {
          "id": "ai-machine-learning-301-l07-c1",
          "title": "Introduction to MLOps",
          "content": "MLOps (Machine Learning Operations) combines ML, DevOps, and Data Engineering to reliably deploy and maintain models in production.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l07-c2",
          "title": "Data Drift vs. Concept Drift",
          "content": "Data Drift happens when the input data changes (e.g., a new camera sensor alters image colors). Concept Drift happens when the real-world meaning changes (e.g., consumer buying habits shift after a major event).",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l07-c3",
          "title": "Continuous Training (CT)",
          "content": "A Continuous Training pipeline automatically detects when a model's performance drops and triggers a process to retrain the model on fresh data, ensuring it stays accurate over time.",
          "type": "concept"
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l07-a1",
          "type": "image",
          "title": "Types of Drift",
          "content": "Visual comparison of Data Drift (covariate shift) vs. Concept Drift."
        },
        {
          "id": "ai-machine-learning-301-l07-a2",
          "type": "animation",
          "title": "Continuous Training Pipeline",
          "content": "Animation showing how a drop in accuracy triggers automated data validation and model retraining."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l08",
      "title": "Debugging Production Models",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A high-tech command center interface showing multiple graphs of model accuracy dropping over time, with diagnostic tools and alert logs visible. Cyberpunk meets clean corporate tech, 8k, Imagen 4.",
      "conceptVideoPrompt": "A fast-paced animation zooming into a line graph where model accuracy dips. The view transitions into a diagnostic matrix, highlighting the exact feature causing the data drift. Cinematic, 4k, Veo 3.1.",
      "chunks": [
        {
          "id": "ai-machine-learning-301-l08-c1",
          "title": "Monitoring Dashboards",
          "content": "Production models require dashboards to track operational metrics (latency, memory usage) and ML metrics (prediction distributions, accuracy).",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l08-c2",
          "title": "Setting Alerts",
          "content": "Engineers configure automated alerts to notify them if a model's predictions suddenly skew or if the API response time exceeds acceptable limits.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l08-c3",
          "title": "Incident Response Strategies",
          "content": "When a model fails, engineers can roll back to a previous version, deploy a 'shadow' model to test fixes safely, or initiate an emergency retraining pipeline.",
          "type": "concept"
        }
      ],
      "metadata": {
        "prompts": [
          "Analyze the monitoring dashboard to identify the anomaly.",
          "Determine if the issue is caused by data drift, concept drift, or a system failure.",
          "Formulate a remediation plan (e.g., rollback, retrain, or update features)."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l08-a1",
          "type": "practice",
          "title": "Incident Response",
          "content": "Investigate a sudden 15% drop in accuracy for a live pricing model and deploy a fix."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l09",
      "title": "Checkpoint 3: MLOps",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing 3D checkpoint marker shaped like a continuous infinity loop, hovering over a digital grid. Cyberpunk lighting, highly detailed, 8k, Imagen 4.",
      "conceptVideoPrompt": "A short, looping 3D animation of a glowing infinity loop symbol rotating on a pedestal, emitting soft blue light pulses to signify a saved checkpoint. 4k resolution, Veo 3.1.",
      "questions": [
        {
          "id": "ai-machine-learning-301-l09-q1",
          "text": "What is 'Concept Drift' in the context of machine learning in production?",
          "skillId": "ai-machine-learning-301-skill-mlops",
          "options": [
            {
              "id": "a",
              "text": "When the statistical properties of the target variable change over time."
            },
            {
              "id": "b",
              "text": "When the distribution of the input features changes."
            },
            {
              "id": "c",
              "text": "When the model's code is accidentally altered during deployment."
            },
            {
              "id": "d",
              "text": "When the training data is lost from the database."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Concept drift occurs when the relationship between the input data and the target variable changes, meaning what the model learned is no longer valid."
        },
        {
          "id": "ai-machine-learning-301-l09-q2",
          "text": "Which MLOps practice ensures that a model is automatically updated when its performance degrades?",
          "skillId": "ai-machine-learning-301-skill-mlops",
          "options": [
            {
              "id": "a",
              "text": "Continuous Training (CT)"
            },
            {
              "id": "b",
              "text": "Continuous Integration (CI)"
            },
            {
              "id": "c",
              "text": "Hyperparameter Tuning"
            },
            {
              "id": "d",
              "text": "Data Augmentation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Continuous Training (CT) is an MLOps practice that automates the retraining and evaluation of models based on triggers like performance degradation."
        },
        {
          "id": "ai-machine-learning-301-l09-q3",
          "text": "If a model's input data suddenly contains a new categorical value that wasn't in the training set, what type of issue is this?",
          "skillId": "ai-machine-learning-301-skill-mlops",
          "options": [
            {
              "id": "a",
              "text": "Data Drift / Schema Violation"
            },
            {
              "id": "b",
              "text": "Concept Drift"
            },
            {
              "id": "c",
              "text": "Hardware Failure"
            },
            {
              "id": "d",
              "text": "Overfitting"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A new, unseen categorical value represents a change in the input data distribution or schema, known as data drift or a schema anomaly."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l09-a1",
          "type": "mnemonic",
          "title": "Drift Distinction",
          "content": "Data Drift = Inputs changed. Concept Drift = The 'Truth' (target) changed."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l10",
      "title": "Responsible AI & Fairness",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A balanced, glowing digital scale of justice made of fiber optic cables, resting on a sleek server rack. Soft warm lighting, 8k resolution, highly detailed 3D render, Imagen 4.",
      "conceptVideoPrompt": "A cinematic 3D animation showing a stream of diverse, multi-colored data points flowing into a neural network. A glowing filter actively balances the colors, ensuring an equal distribution emerges on the other side. 4k, smooth motion, Veo 3.1.",
      "chunks": [
        {
          "id": "ai-machine-learning-301-l10-c1",
          "title": "The Impact of AI Bias",
          "content": "Machine learning models can unintentionally learn and amplify human biases, leading to unfair or harmful outcomes in critical areas like hiring, lending, and healthcare.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l10-c2",
          "title": "Types of Bias",
          "content": "Historical Bias reflects past inequalities. Representation Bias occurs when a dataset lacks diversity. Measurement Bias happens when the tools used to collect data are flawed.",
          "type": "concept"
        },
        {
          "id": "ai-machine-learning-301-l10-c3",
          "title": "Mitigation Strategies",
          "content": "Engineers can mitigate bias by auditing datasets, re-weighting underrepresented groups during training, and using explainability tools to understand how the model makes decisions.",
          "type": "concept"
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l10-a1",
          "type": "image",
          "title": "Types of Bias",
          "content": "Visual breakdown of Historical Bias, Representation Bias, and Measurement Bias in ML datasets."
        },
        {
          "id": "ai-machine-learning-301-l10-a2",
          "type": "animation",
          "title": "Mitigation Strategies",
          "content": "Animation demonstrating re-weighting techniques to balance underrepresented groups during model training."
        }
      ]
    },
    {
      "id": "ai-machine-learning-301-l11",
      "title": "Final Assessment: ML Engineering",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "A grand, glowing 3D trophy shaped like a neural network brain, resting on a high-tech pedestal. Golden and neon blue lighting, cinematic composition, 8k, Imagen 4.",
      "conceptVideoPrompt": "A triumphant 3D animation of a neural network brain glowing brightly, surrounded by floating data particles that assemble into a golden badge of completion. Cinematic lighting, 4k, Veo 3.1.",
      "questions": [
        {
          "id": "ai-machine-learning-301-l11-q1",
          "text": "When deploying a model responsibly, what is the best way to mitigate historical bias in the training data?",
          "skillId": "ai-machine-learning-301-skill-responsible-ai",
          "options": [
            {
              "id": "a",
              "text": "Audit the dataset for underrepresented groups and apply re-weighting or resampling techniques."
            },
            {
              "id": "b",
              "text": "Remove all demographic features from the dataset and train normally."
            },
            {
              "id": "c",
              "text": "Deploy the model as-is, but add a disclaimer to the user interface."
            },
            {
              "id": "d",
              "text": "Use a more complex model architecture like a deep neural network."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Auditing and actively balancing the dataset (via resampling or re-weighting) addresses the root cause of historical bias. Simply removing demographic features often fails due to proxy variables."
        },
        {
          "id": "ai-machine-learning-301-l11-q2",
          "text": "You are deploying a latency-sensitive NLP model. Which combination of techniques is most appropriate?",
          "skillId": "ai-machine-learning-301-skill-comprehensive",
          "options": [
            {
              "id": "a",
              "text": "Quantization, gRPC serving, and a Feature Store."
            },
            {
              "id": "b",
              "text": "Batch prediction, FP32 precision, and REST API."
            },
            {
              "id": "c",
              "text": "Knowledge distillation, offline batching, and CSV storage."
            },
            {
              "id": "d",
              "text": "Increasing model layers, streaming prediction, and manual retraining."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Quantization speeds up inference, gRPC provides low-latency communication, and a Feature Store delivers fast feature retrieval, making this the perfect stack for latency-sensitive tasks."
        },
        {
          "id": "ai-machine-learning-301-l11-q3",
          "text": "A model in production shows a steady decline in accuracy over six months, but the input data schema hasn't changed. What is the most likely cause and solution?",
          "skillId": "ai-machine-learning-301-skill-comprehensive",
          "options": [
            {
              "id": "a",
              "text": "Concept drift; the model needs to be retrained on more recent data."
            },
            {
              "id": "b",
              "text": "Hardware degradation; the GPUs need to be replaced."
            },
            {
              "id": "c",
              "text": "Overfitting; the model needs to be pruned."
            },
            {
              "id": "d",
              "text": "Network latency; switch from REST to gRPC."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A slow decline in accuracy over time without schema changes is a classic sign of concept drift, requiring retraining on fresh data to capture new underlying patterns."
        },
        {
          "id": "ai-machine-learning-301-l11-q4",
          "text": "Which of the following best describes the role of a 'Teacher' model in Knowledge Distillation?",
          "skillId": "ai-machine-learning-301-skill-optimization",
          "options": [
            {
              "id": "a",
              "text": "A large, highly accurate model whose outputs are used to train a smaller, faster model."
            },
            {
              "id": "b",
              "text": "A human expert who manually labels the dataset for the model."
            },
            {
              "id": "c",
              "text": "A script that automatically prunes weights from a neural network."
            },
            {
              "id": "d",
              "text": "A monitoring tool that detects concept drift in production."
            }
          ],
          "correctOptionId": "a",
          "explanation": "In Knowledge Distillation, the 'Teacher' is the large, accurate model that generates soft labels to guide the training of the smaller 'Student' model."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-301-l11-a1",
          "type": "mnemonic",
          "title": "The ML Engineer's Checklist",
          "content": "Optimize for the hardware, Serve for the user, Monitor for the future, Deploy for fairness."
        }
      ]
    }
  ]
};
