import type { LearningModule } from "@/lib/modules/types";

export const ai_machine_learning_401_Module: LearningModule = {
  "id": "ai-machine-learning-401",
  "title": "AI Systems and Governance",
  "description": "Senior AI systems design with governance, policy controls, safety instrumentation, and lifecycle management.",
  "subject": "AI and ML",
  "tags": [
    "curriculum",
    "interactive",
    "governance",
    "ai-safety",
    "policy"
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
    "Design comprehensive AI governance frameworks and policy controls.",
    "Implement safety instrumentation and monitoring for production AI systems.",
    "Evaluate AI systems against global regulatory standards and compliance audits."
  ],
  "lessons": [
    {
      "id": "ai-machine-learning-401-l01",
      "title": "Foundations of AI Governance",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A highly detailed, photorealistic 8k render of a sleek, futuristic digital dashboard showing AI neural networks overlaid with glowing shield icons and compliance checkmarks, representing AI governance and security, high-tech corporate aesthetic, volumetric lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic 3D animation with a slow, smooth pan. A complex neural network is gradually enclosed by a glowing, protective geometric structure, symbolizing policy controls and safety guardrails. Professional, sleek, corporate tech style, 4k resolution, ray-traced lighting.",
      "chunks": [
        {
          "id": "ai-machine-learning-401-l01-c1",
          "title": "The Imperative of AI Governance",
          "content": "AI governance is the framework of rules, practices, and processes ensuring that AI technologies are developed and used responsibly. It bridges the gap between technical capabilities and ethical, legal, and societal expectations.",
          "duration": 4
        },
        {
          "id": "ai-machine-learning-401-l01-c2",
          "title": "Mapping the AI Lifecycle",
          "content": "Governance cannot be an afterthought. It must be integrated at every stage of the AI lifecycle: from problem formulation and data acquisition, through model training and evaluation, to deployment and continuous monitoring.",
          "duration": 4
        },
        {
          "id": "ai-machine-learning-401-l01-c3",
          "title": "The NIST AI Risk Management Framework",
          "content": "The NIST AI RMF provides a voluntary, structured approach to managing AI risks. Its core functions—Govern, Map, Measure, and Manage—help organizations cultivate trust and operationalize safety protocols.",
          "duration": 4
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l01-a1",
          "type": "image",
          "title": "The AI Lifecycle",
          "content": "Visual summary of the AI lifecycle from ideation to deployment, highlighting key governance intervention points."
        },
        {
          "id": "ai-machine-learning-401-l01-a2",
          "type": "animation",
          "title": "Governance Frameworks in Action",
          "content": "Animated walkthrough of how the NIST AI Risk Management Framework maps to system design."
        }
      ]
    },
    {
      "id": "ai-machine-learning-401-l02",
      "title": "Designing Policy Controls",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech architectural blueprint of a server room with holographic text displaying 'Policy Controls' and 'Access Management', rendered in a clean, modern style with glowing cyan and white accents, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth tracking shot over a digital landscape of glowing data streams. Red unauthorized data packets are dynamically blocked by a pulsing blue energy barrier, illustrating automated policy controls and access management in real-time.",
      "chunks": [
        {
          "id": "ai-machine-learning-401-l02-c1",
          "title": "Defining Policy Controls",
          "content": "Policy controls are the technical and procedural guardrails that enforce governance rules. They dictate what an AI system can and cannot do, ensuring outputs align with organizational policies and legal constraints.",
          "duration": 5
        },
        {
          "id": "ai-machine-learning-401-l02-c2",
          "title": "Access Management and Guardrails",
          "content": "Implementing Role-Based Access Control (RBAC) for model endpoints and establishing input/output guardrails prevents unauthorized use and filters out malicious or non-compliant prompts and responses.",
          "duration": 5
        },
        {
          "id": "ai-machine-learning-401-l02-c3",
          "title": "Latency vs. Security Trade-offs",
          "content": "Every policy control adds computational overhead. Designing efficient controls requires balancing the need for rigorous security checks with the system's latency requirements to maintain a seamless user experience.",
          "duration": 5
        }
      ],
      "metadata": {
        "prompts": [
          "Identify the primary compliance risk in the provided AI deployment scenario.",
          "Draft a specific policy control to mitigate this risk.",
          "Explain how this control impacts system latency and user experience."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l02-a1",
          "type": "practice",
          "title": "Policy Drafting Exercise",
          "content": "Review the enterprise scenario and draft three non-negotiable policy controls for the new LLM deployment."
        }
      ]
    },
    {
      "id": "ai-machine-learning-401-l03",
      "title": "Checkpoint 1: Governance Foundations",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A minimalist, modern graphic of a glowing checkpoint flag on a digital grid, surrounded by floating data nodes and lock icons, depth of field, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic motion graphics sequence showing a glowing lock securing a data node, followed by a crisp green checkmark appearing, symbolizing successful knowledge validation in AI governance. High contrast, sleek animation.",
      "questions": [
        {
          "id": "ai-machine-learning-401-l03-q1",
          "text": "In the context of AI lifecycle management, when is the most effective time to introduce governance protocols?",
          "skillId": "ai-machine-learning-401-skill-lifecycle",
          "options": [
            {
              "id": "a",
              "text": "During the design and ideation phase, before data collection."
            },
            {
              "id": "b",
              "text": "Immediately after model training is complete."
            },
            {
              "id": "c",
              "text": "During the final deployment to production."
            },
            {
              "id": "d",
              "text": "After the first user incident is reported."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Integrating governance at the design phase ensures that safety, privacy, and compliance are built into the system's architecture from the ground up."
        },
        {
          "id": "ai-machine-learning-401-l03-q2",
          "text": "What is the primary purpose of the NIST AI Risk Management Framework (AI RMF)?",
          "skillId": "ai-machine-learning-401-skill-frameworks",
          "options": [
            {
              "id": "a",
              "text": "To provide a voluntary resource to help organizations manage AI risks and promote trustworthy AI."
            },
            {
              "id": "b",
              "text": "To enforce strict legal penalties for AI misuse globally."
            },
            {
              "id": "c",
              "text": "To provide open-source code for training large language models."
            },
            {
              "id": "d",
              "text": "To replace human oversight with automated compliance bots."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The NIST AI RMF is a voluntary framework designed to cultivate trust in AI technologies and promote AI risk management across organizations."
        },
        {
          "id": "ai-machine-learning-401-l03-q3",
          "text": "Which of the following best describes 'Model Drift'?",
          "skillId": "ai-machine-learning-401-skill-monitoring",
          "options": [
            {
              "id": "a",
              "text": "The degradation of a model's predictive power due to changes in the real-world environment or data over time."
            },
            {
              "id": "b",
              "text": "The process of migrating an AI model from a local server to the cloud."
            },
            {
              "id": "c",
              "text": "The intentional shifting of model parameters to increase bias."
            },
            {
              "id": "d",
              "text": "The speed at which a model processes incoming inference requests."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Model drift occurs when the statistical properties of the target variable change over time, causing the model's predictions to become less accurate."
        },
        {
          "id": "ai-machine-learning-401-l03-q4",
          "text": "When designing policy controls for an AI system, what is the primary trade-off engineers must balance?",
          "skillId": "ai-machine-learning-401-skill-policy",
          "options": [
            {
              "id": "a",
              "text": "Rigorous security and compliance checks versus system latency and user experience."
            },
            {
              "id": "b",
              "text": "The cost of cloud storage versus the cost of local servers."
            },
            {
              "id": "c",
              "text": "The size of the training dataset versus the number of parameters in the model."
            },
            {
              "id": "d",
              "text": "Open-source licensing versus proprietary software patents."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Every policy control adds computational overhead. Engineers must balance the need for strict security with the requirement for low latency to ensure a smooth user experience."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l03-a1",
          "type": "mnemonic",
          "title": "Governance Pillars",
          "content": "Remember MAP: Map, Measure, Manage (Core functions of the NIST AI RMF)."
        }
      ]
    },
    {
      "id": "ai-machine-learning-401-l04",
      "title": "Safety Instrumentation in Practice",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic control room dashboard displaying real-time telemetry graphs, anomaly detection alerts, and AI health metrics in neon blue and orange, photorealistic, highly detailed UI elements.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A first-person perspective moving rapidly through a digital tunnel of code. Suddenly, an anomaly appears as a sharp red spike on a floating graph, and automated safety instruments instantly deploy a glowing containment field around it.",
      "chunks": [
        {
          "id": "ai-machine-learning-401-l04-c1",
          "title": "Telemetry and Real-time Logging",
          "content": "Safety instrumentation begins with comprehensive telemetry. By logging inputs, outputs, latency, and confidence scores in real-time, engineers can create a transparent, observable AI system capable of immediate auditing.",
          "duration": 5
        },
        {
          "id": "ai-machine-learning-401-l04-c2",
          "title": "Identifying Model and Data Drift",
          "content": "Continuous monitoring allows for the automated detection of data drift (changes in input distribution) and concept drift (changes in the relationship between inputs and outputs), triggering alerts before system degradation impacts users.",
          "duration": 5
        },
        {
          "id": "ai-machine-learning-401-l04-c3",
          "title": "Designing Fallback Mechanisms",
          "content": "When an AI system encounters an edge case or its confidence score drops below a safe threshold, automated fallback mechanisms must seamlessly route the task to a deterministic rule-based system or a human operator.",
          "duration": 5
        }
      ],
      "metadata": {
        "prompts": [
          "Define the telemetry metrics needed to detect data drift in this scenario.",
          "Design a monitoring dashboard layout prioritizing critical safety alerts.",
          "Propose an automated fallback mechanism if the AI confidence score drops below 70%."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l04-a1",
          "type": "practice",
          "title": "Telemetry Design",
          "content": "Map out the logging and telemetry architecture for a high-frequency trading AI."
        }
      ]
    },
    {
      "id": "ai-machine-learning-401-l05",
      "title": "Red Teaming and Adversarial Testing",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A dramatic, high-contrast cinematic image of two AI avatars facing off—one glowing blue representing the defender, and one glowing red representing the attacker—symbolizing adversarial testing and red teaming, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, cinematic sequence showing a red digital virus attempting to penetrate a complex, glowing blue AI neural network. The network dynamically adapts, shifting its geometric structure to block the attacks, illustrating adversarial robustness.",
      "chunks": [
        {
          "id": "ai-machine-learning-401-l05-c1",
          "title": "The Adversarial Mindset",
          "content": "Red teaming involves adopting an attacker's perspective to proactively discover vulnerabilities, biases, and failure modes in an AI system before it is deployed to the public.",
          "duration": 4
        },
        {
          "id": "ai-machine-learning-401-l05-c2",
          "title": "Attack Vectors: Poisoning and Evasion",
          "content": "Adversaries may use data poisoning to corrupt the training process, or evasion attacks (like prompt injection in LLMs) to bypass safety filters during inference. Understanding these vectors is critical for defense.",
          "duration": 5
        },
        {
          "id": "ai-machine-learning-401-l05-c3",
          "title": "Executing a Red Team Operation",
          "content": "A structured red team operation includes reconnaissance, payload crafting, exploitation, and reporting. The goal is to generate actionable insights that engineering teams can use to patch vulnerabilities.",
          "duration": 5
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l05-a1",
          "type": "image",
          "title": "Adversarial Attack Vectors",
          "content": "Diagram showing prompt injection, data poisoning, and model evasion techniques."
        },
        {
          "id": "ai-machine-learning-401-l05-a2",
          "type": "animation",
          "title": "The Red Teaming Process",
          "content": "Step-by-step animation of a red team discovering, exploiting, and patching an LLM vulnerability."
        }
      ]
    },
    {
      "id": "ai-machine-learning-401-l06",
      "title": "Checkpoint 2: Safety & Risk Mitigation",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital shield with a crisp checkmark in the center, surrounded by binary code and red warning signs that are dissolving into dust, photorealistic, 8k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a red warning light flashing on a high-tech server rack. An automated robotic arm swiftly swaps a faulty module, instantly turning the light a steady, safe green. Cinematic lighting.",
      "questions": [
        {
          "id": "ai-machine-learning-401-l06-q1",
          "text": "What is the main objective of 'Red Teaming' an AI system?",
          "skillId": "ai-machine-learning-401-skill-redteaming",
          "options": [
            {
              "id": "a",
              "text": "To proactively discover vulnerabilities, biases, and failure modes by simulating adversarial attacks."
            },
            {
              "id": "b",
              "text": "To optimize the model's inference speed and reduce cloud computing costs."
            },
            {
              "id": "c",
              "text": "To market the AI system's capabilities to potential enterprise clients."
            },
            {
              "id": "d",
              "text": "To automatically generate training data for future models."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Red teaming involves adopting an adversarial mindset to stress-test the AI system, uncovering hidden flaws before deployment."
        },
        {
          "id": "ai-machine-learning-401-l06-q2",
          "text": "Which metric is most critical for monitoring fairness in an automated loan-approval AI?",
          "skillId": "ai-machine-learning-401-skill-fairness",
          "options": [
            {
              "id": "a",
              "text": "Disparate impact ratio across protected demographic groups."
            },
            {
              "id": "b",
              "text": "Total number of loans processed per hour."
            },
            {
              "id": "c",
              "text": "The F1 score of the model on the training dataset."
            },
            {
              "id": "d",
              "text": "The latency of the API response."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Disparate impact ratio measures whether the model disproportionately denies loans to specific protected classes, which is a critical fairness and compliance metric."
        },
        {
          "id": "ai-machine-learning-401-l06-q3",
          "text": "What is a 'fallback mechanism' in AI safety instrumentation?",
          "skillId": "ai-machine-learning-401-skill-safety",
          "options": [
            {
              "id": "a",
              "text": "A deterministic, rule-based system or human-in-the-loop process that takes over when the AI outputs low-confidence predictions."
            },
            {
              "id": "b",
              "text": "A process that deletes the AI model if it gets hacked."
            },
            {
              "id": "c",
              "text": "A backup generator for the data center."
            },
            {
              "id": "d",
              "text": "An algorithm that automatically rewrites the AI's core code."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Fallback mechanisms ensure system reliability and safety by reverting to a trusted, non-AI method when the AI encounters edge cases or low confidence."
        },
        {
          "id": "ai-machine-learning-401-l06-q4",
          "text": "Which type of drift refers to a fundamental change in the relationship between input data and the target variable?",
          "skillId": "ai-machine-learning-401-skill-drift",
          "options": [
            {
              "id": "a",
              "text": "Concept Drift"
            },
            {
              "id": "b",
              "text": "Data Drift"
            },
            {
              "id": "c",
              "text": "Hardware Drift"
            },
            {
              "id": "d",
              "text": "Latency Drift"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Concept drift occurs when the underlying relationship between the input features and the target variable changes, meaning the model's learned rules are no longer valid."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l06-a1",
          "type": "mnemonic",
          "title": "Safety First",
          "content": "Detect, Deflect, Direct (Detect anomaly, Deflect attack, Direct to fallback)."
        }
      ]
    },
    {
      "id": "ai-machine-learning-401-l07",
      "title": "Global AI Regulations and Standards",
      "type": "video",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A stylized, photorealistic digital globe with glowing connection lines, overlaid with holographic legal documents and scales of justice, representing global AI law, cinematic lighting, 8k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A sweeping camera move over a glowing, holographic map of the world. Different regions light up with specific compliance badges (EU AI Act, NIST, GDPR), showing the interconnected web of global AI regulations. High-end broadcast graphics style.",
      "chunks": [
        {
          "id": "ai-machine-learning-401-l07-c1",
          "title": "The Global Regulatory Landscape",
          "content": "AI regulation is rapidly evolving worldwide. Understanding the patchwork of international laws, from data privacy regulations like GDPR to specific AI frameworks, is essential for global deployment.",
          "duration": 5
        },
        {
          "id": "ai-machine-learning-401-l07-c2",
          "title": "Decoding the EU AI Act",
          "content": "The EU AI Act introduces a risk-based classification system: Unacceptable, High, Limited, and Minimal risk. High-risk systems face stringent requirements regarding data quality, transparency, and human oversight.",
          "duration": 5
        },
        {
          "id": "ai-machine-learning-401-l07-c3",
          "title": "Navigating Cross-Border Compliance",
          "content": "For multinational organizations, achieving compliance means mapping AI features to overlapping global requirements, ensuring that a single system can legally operate across different jurisdictions.",
          "duration": 5
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l07-a1",
          "type": "image",
          "title": "EU AI Act Risk Tiers",
          "content": "Pyramid diagram showing Unacceptable, High, Limited, and Minimal risk categories."
        },
        {
          "id": "ai-machine-learning-401-l07-a2",
          "type": "animation",
          "title": "Compliance Mapping",
          "content": "Animation showing how a single AI feature maps to multiple global regulatory requirements."
        }
      ]
    },
    {
      "id": "ai-machine-learning-401-l08",
      "title": "Conducting an AI Audit",
      "type": "interactive",
      "duration": 18,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic magnifying glass hovering over lines of code and complex data matrices, revealing hidden biases highlighted in bright glowing yellow, macro photography style, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A point-of-view shot of a digital auditor interface scanning rapidly through thousands of AI decisions. The interface flags a biased decision, isolates the data point in 3D space, and generates a compliance report in real-time.",
      "chunks": [
        {
          "id": "ai-machine-learning-401-l08-c1",
          "title": "Structuring an AI Audit",
          "content": "An AI audit evaluates a system's performance, fairness, and compliance against predefined standards. It requires a clear scope, defined objectives, and an independent auditing team to ensure objectivity.",
          "duration": 6
        },
        {
          "id": "ai-machine-learning-401-l08-c2",
          "title": "Essential Audit Artifacts",
          "content": "Auditors rely on specific artifacts, including Model Cards, Data Datasheets, feature importance logs (like SHAP/LIME values), and historical telemetry data to verify explainability and fairness.",
          "duration": 6
        },
        {
          "id": "ai-machine-learning-401-l08-c3",
          "title": "Incident Response Planning",
          "content": "If an audit uncovers a critical failure or compliance breach, a robust incident response plan dictates the immediate steps for containment, remediation, and regulatory reporting.",
          "duration": 6
        }
      ],
      "metadata": {
        "prompts": [
          "Outline the scope and objectives for auditing a healthcare diagnostic AI.",
          "Identify the key artifacts required from the engineering team for the audit.",
          "Draft an incident response plan for a critical audit failure."
        ]
      },
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l08-a1",
          "type": "practice",
          "title": "Audit Simulation",
          "content": "Step into the role of an external auditor and evaluate the provided model cards and system logs."
        }
      ]
    },
    {
      "id": "ai-machine-learning-401-l09",
      "title": "Checkpoint 3: Compliance & Auditing",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek digital clipboard with a glowing green checkmark, surrounded by floating legal gavels and binary code, professional corporate aesthetic, 8k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a complex geometric puzzle assembling itself in mid-air. The final piece, shaped like a legal document, snaps into place, illuminating the entire structure with a warm golden light.",
      "questions": [
        {
          "id": "ai-machine-learning-401-l09-q1",
          "text": "Under the EU AI Act, how are AI systems primarily categorized?",
          "skillId": "ai-machine-learning-401-skill-regulation",
          "options": [
            {
              "id": "a",
              "text": "By their level of risk: Unacceptable, High, Limited, and Minimal."
            },
            {
              "id": "b",
              "text": "By their parameter size and compute power."
            },
            {
              "id": "c",
              "text": "By the industry they are deployed in (e.g., Healthcare, Finance)."
            },
            {
              "id": "d",
              "text": "By whether they are open-source or proprietary."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The EU AI Act takes a risk-based approach, categorizing systems into four tiers, with strict requirements for High-Risk systems and bans on Unacceptable ones."
        },
        {
          "id": "ai-machine-learning-401-l09-q2",
          "text": "What is a core requirement for an AI system deemed 'High-Risk' under most emerging global frameworks?",
          "skillId": "ai-machine-learning-401-skill-compliance",
          "options": [
            {
              "id": "a",
              "text": "Mandatory conformity assessments, robust data governance, and human oversight."
            },
            {
              "id": "b",
              "text": "The system must be made entirely open-source."
            },
            {
              "id": "c",
              "text": "The system cannot process any user data."
            },
            {
              "id": "d",
              "text": "The system must operate with zero latency."
            }
          ],
          "correctOptionId": "a",
          "explanation": "High-risk systems require rigorous governance, including human-in-the-loop oversight, detailed documentation, and strict data quality controls."
        },
        {
          "id": "ai-machine-learning-401-l09-q3",
          "text": "During an AI audit, what artifact is most crucial for verifying model explainability?",
          "skillId": "ai-machine-learning-401-skill-auditing",
          "options": [
            {
              "id": "a",
              "text": "Feature importance logs and SHAP/LIME value reports."
            },
            {
              "id": "b",
              "text": "The marketing brochure for the AI product."
            },
            {
              "id": "c",
              "text": "The raw, unannotated training dataset."
            },
            {
              "id": "d",
              "text": "The hardware specifications of the training servers."
            }
          ],
          "correctOptionId": "a",
          "explanation": "SHAP and LIME are techniques used to explain individual predictions of complex models, making them essential artifacts for proving explainability during an audit."
        },
        {
          "id": "ai-machine-learning-401-l09-q4",
          "text": "If an AI audit uncovers a critical compliance breach, what is the immediate next step?",
          "skillId": "ai-machine-learning-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Execute the incident response plan for containment and regulatory reporting."
            },
            {
              "id": "b",
              "text": "Delete the model and all associated training data immediately."
            },
            {
              "id": "c",
              "text": "Ignore the breach if the model is highly profitable."
            },
            {
              "id": "d",
              "text": "Wait for the next scheduled audit to see if the issue resolves itself."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A robust incident response plan is essential to quickly contain the issue, remediate the vulnerability, and fulfill any legal obligations for reporting the breach."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l09-a1",
          "type": "mnemonic",
          "title": "Audit Readiness",
          "content": "Document, Defend, Demonstrate."
        }
      ]
    },
    {
      "id": "ai-machine-learning-401-l10",
      "title": "Final Assessment: End-to-End AI Governance",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A grand, futuristic hall of records with glowing data pillars and a central holographic globe, representing mastery of global AI systems governance, epic scale, cinematic lighting, 8k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A cinematic zoom out from a single glowing line of code, revealing a massive, perfectly structured, glowing neural network city, symbolizing a fully governed, safe, and scalable AI ecosystem.",
      "questions": [
        {
          "id": "ai-machine-learning-401-l10-q1",
          "text": "Which combination of controls best ensures end-to-end AI safety in a production environment?",
          "skillId": "ai-machine-learning-401-skill-comprehensive",
          "options": [
            {
              "id": "a",
              "text": "Continuous telemetry monitoring, pre-deployment red teaming, and strict access-control policies."
            },
            {
              "id": "b",
              "text": "A one-time security scan and a strong firewall."
            },
            {
              "id": "c",
              "text": "Relying solely on the cloud provider's default security settings."
            },
            {
              "id": "d",
              "text": "Training the model on encrypted data and ignoring post-deployment monitoring."
            }
          ],
          "correctOptionId": "a",
          "explanation": "End-to-end safety requires a defense-in-depth approach: proactive testing (red teaming), active monitoring (telemetry), and preventative measures (access controls)."
        },
        {
          "id": "ai-machine-learning-401-l10-q2",
          "text": "How does 'differential privacy' contribute to AI governance?",
          "skillId": "ai-machine-learning-401-skill-privacy",
          "options": [
            {
              "id": "a",
              "text": "It adds mathematical noise to datasets to ensure individual data points cannot be re-identified, protecting user privacy."
            },
            {
              "id": "b",
              "text": "It encrypts the model weights so competitors cannot steal the intellectual property."
            },
            {
              "id": "c",
              "text": "It ensures the model runs at different speeds depending on the user's subscription tier."
            },
            {
              "id": "d",
              "text": "It automatically deletes user data after 30 days."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Differential privacy is a cryptographic technique that allows organizations to extract insights from datasets while mathematically guaranteeing the privacy of individuals within that data."
        },
        {
          "id": "ai-machine-learning-401-l10-q3",
          "text": "What is the primary role of an AI Ethics Board in corporate governance?",
          "skillId": "ai-machine-learning-401-skill-ethics",
          "options": [
            {
              "id": "a",
              "text": "To evaluate the societal impact of AI projects and enforce alignment with the organization's core values and legal obligations."
            },
            {
              "id": "b",
              "text": "To write the code for the safety instrumentation."
            },
            {
              "id": "c",
              "text": "To maximize the financial return on investment for AI research."
            },
            {
              "id": "d",
              "text": "To manage the day-to-day cloud infrastructure."
            }
          ],
          "correctOptionId": "a",
          "explanation": "An AI Ethics Board provides high-level oversight, ensuring that AI initiatives do not cause societal harm and align with ethical guidelines and regulatory requirements."
        },
        {
          "id": "ai-machine-learning-401-l10-q4",
          "text": "In the context of AI red teaming, what is a 'prompt injection' attack?",
          "skillId": "ai-machine-learning-401-skill-evasion",
          "options": [
            {
              "id": "a",
              "text": "An evasion technique where malicious inputs are crafted to bypass safety filters and manipulate the model's output."
            },
            {
              "id": "b",
              "text": "A method of speeding up model inference by injecting pre-computed prompts."
            },
            {
              "id": "c",
              "text": "A hardware vulnerability in the GPU processing the model."
            },
            {
              "id": "d",
              "text": "A technique used by auditors to verify the model's training data."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Prompt injection is a common evasion attack against Large Language Models (LLMs) where an attacker uses carefully crafted inputs to override the model's original instructions and safety guardrails."
        },
        {
          "id": "ai-machine-learning-401-l10-q5",
          "text": "Which document is considered an essential artifact during an AI audit to understand the model's intended use cases and limitations?",
          "skillId": "ai-machine-learning-401-skill-artifacts",
          "options": [
            {
              "id": "a",
              "text": "The Model Card."
            },
            {
              "id": "b",
              "text": "The End User License Agreement (EULA)."
            },
            {
              "id": "c",
              "text": "The source code repository's README file."
            },
            {
              "id": "d",
              "text": "The company's annual financial report."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A Model Card is a standardized document that provides essential details about a machine learning model, including its intended use, performance metrics, limitations, and potential biases, making it crucial for audits."
        }
      ],
      "learningAids": [
        {
          "id": "ai-machine-learning-401-l10-a1",
          "type": "mnemonic",
          "title": "The Governance Master Key",
          "content": "Safety, Privacy, Fairness, Transparency, Accountability."
        }
      ]
    }
  ]
};
