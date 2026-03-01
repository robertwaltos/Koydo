import type { LearningModule } from "@/lib/modules/types";

export const BusinessAnalytics401Module: LearningModule = {
  "id": "business-analytics-401",
  "title": "Advanced Analytics & AI Strategy",
  "description": "Lead the analytics transformation in your organization. Master prescriptive analytics, A/B testing at scale, deep learning applications, NLP, data governance, and the organizational models needed to build a world-class analytics culture.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "analytics"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Apply prescriptive analytics and optimization to business problems",
    "Design and manage A/B testing and experimentation programs",
    "Identify business applications for deep learning and neural networks",
    "Explain how NLP technologies create business value",
    "Compare centralized, decentralized, and hub-and-spoke analytics models",
    "Establish data governance frameworks and ethical AI guidelines",
    "Build high-performing analytics teams and embed a data-driven culture"
  ],
  "lessons": [
    {
      "id": "business-analytics-401-l01",
      "title": "Prescriptive Analytics and Optimization",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Define prescriptive analytics and how it differs from predictive",
        "Explain linear programming and constraint optimization",
        "Apply optimization thinking to supply chain and pricing decisions"
      ],
      "chunks": [
        {
          "id": "business-analytics-401-l01-c1",
          "title": "What Is Prescriptive Analytics?",
          "content": "Prescriptive analytics goes beyond predicting what will happen to recommending what you should do. It uses optimization, simulation, and decision models to identify the best course of action given constraints. While predictive analytics forecasts demand, prescriptive analytics determines the optimal inventory levels, pricing, and distribution routes to maximize profit given that forecast. It is the most mature and valuable form of analytics."
        },
        {
          "id": "business-analytics-401-l01-c2",
          "title": "Linear Programming and Optimization",
          "content": "Linear programming maximizes or minimizes an objective function (like profit or cost) subject to constraints (budget limits, capacity, demand). A manufacturer might maximize profit by deciding how many units of each product to produce, constrained by machine hours, raw materials, and labor. The simplex algorithm solves these problems efficiently. Modern optimization extends to integer programming (whole-number decisions), nonlinear models, and stochastic optimization under uncertainty."
        },
        {
          "id": "business-analytics-401-l01-c3",
          "title": "Business Applications of Optimization",
          "content": "Airlines use optimization for revenue management — dynamically pricing seats to maximize total revenue across flights. Supply chains optimize routing, inventory placement, and supplier selection simultaneously. Marketing teams optimize budget allocation across channels to maximize return on ad spend. Workforce scheduling optimizes staffing levels to minimize labor costs while meeting service targets. The common thread: making the best possible decision given limited resources and known constraints."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l01-f1",
          "front": "Prescriptive analytics",
          "back": "The most advanced analytics type — recommends optimal actions using optimization, simulation, and decision models, going beyond prediction to actionable recommendations"
        },
        {
          "id": "business-analytics-401-l01-f2",
          "front": "Linear programming",
          "back": "A mathematical method that maximizes or minimizes an objective function subject to linear constraints — used for production planning, resource allocation, and logistics optimization"
        },
        {
          "id": "business-analytics-401-l01-f3",
          "front": "Revenue management (optimization application)",
          "back": "Dynamically pricing products or services (airline seats, hotel rooms) to maximize total revenue — uses optimization to balance demand, capacity, and willingness to pay"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-401-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "business-analytics-401-l02",
      "title": "A/B Testing and Experimentation Platforms",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Design a rigorous A/B test with proper controls",
        "Calculate required sample size and test duration",
        "Explain how experimentation platforms scale testing across organizations"
      ],
      "chunks": [
        {
          "id": "business-analytics-401-l02-c1",
          "title": "Designing Rigorous A/B Tests",
          "content": "A/B testing randomly assigns users to a control group (existing experience) and a treatment group (modified experience) to measure causal impact. Rigorous design requires: a clear hypothesis, a single primary metric, random assignment to eliminate selection bias, sufficient sample size for statistical power, and a pre-committed analysis plan. Common pitfalls include peeking at results early (inflates false positives), testing too many variants simultaneously, and ignoring novelty effects."
        },
        {
          "id": "business-analytics-401-l02-c2",
          "title": "Sample Size and Duration",
          "content": "Sample size depends on the minimum detectable effect (MDE), significance level (α), and desired power (1-β, typically 80%). Detecting a 1% conversion lift requires far more users than detecting a 10% lift. Test duration must account for weekly cycles — running for full weeks avoids day-of-week bias. The business tension: smaller effects require larger, longer tests. If a 0.5% lift means millions in revenue, investing in a large sample is worthwhile."
        },
        {
          "id": "business-analytics-401-l02-c3",
          "title": "Experimentation Platforms at Scale",
          "content": "Companies like Google, Netflix, and Booking.com run thousands of experiments simultaneously using experimentation platforms. These systems automate randomization, monitor guardrail metrics (ensuring tests do not harm key metrics), handle multiple concurrent experiments, and provide statistical rigor at scale. Building an experimentation culture means democratizing testing — empowering product managers and marketers to test ideas quickly rather than relying on intuition or HiPPOs (Highest Paid Person's Opinion)."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l02-f1",
          "front": "Minimum detectable effect (MDE)",
          "back": "The smallest effect size an A/B test is designed to detect — smaller MDEs require larger sample sizes and longer test durations"
        },
        {
          "id": "business-analytics-401-l02-f2",
          "front": "Peeking problem in A/B testing",
          "back": "Checking results before the test reaches its required sample size inflates false positive rates — sequential testing methods or pre-committed analysis plans prevent this"
        },
        {
          "id": "business-analytics-401-l02-f3",
          "front": "HiPPO (experimentation culture)",
          "back": "Highest Paid Person's Opinion — the tendency for decisions to be driven by seniority rather than data. Experimentation culture replaces HiPPO with evidence-based decision-making."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-401-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "business-analytics-401-l03",
      "title": "Deep Learning Applications in Business",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain how neural networks learn from data",
        "Identify business domains where deep learning outperforms traditional methods",
        "Assess when deep learning is and is not appropriate"
      ],
      "chunks": [
        {
          "id": "business-analytics-401-l03-c1",
          "title": "How Neural Networks Work",
          "content": "Neural networks consist of layers of interconnected nodes (neurons). The input layer receives data, hidden layers learn increasingly abstract representations, and the output layer produces predictions. During training, the network adjusts connection weights to minimize prediction error using backpropagation and gradient descent. Deep learning refers to networks with many hidden layers that can learn complex, hierarchical patterns — from pixels to edges to shapes to objects in image recognition."
        },
        {
          "id": "business-analytics-401-l03-c2",
          "title": "Where Deep Learning Excels",
          "content": "Deep learning dominates tasks involving unstructured data. Computer vision powers quality inspection on manufacturing lines, autonomous vehicles, and medical imaging. Speech recognition enables virtual assistants and call center automation. Language models transform customer service through chatbots and automated email responses. Recommendation engines at Netflix and Spotify use deep learning to model complex user preferences. The common factor: massive data and complex patterns that traditional models cannot capture."
        },
        {
          "id": "business-analytics-401-l03-c3",
          "title": "When Not to Use Deep Learning",
          "content": "Deep learning is not always the right choice. It requires large amounts of labeled data — with small datasets, simpler models often outperform. It is computationally expensive to train and deploy. Its black-box nature creates challenges in regulated industries requiring explainability. For structured tabular data (spreadsheets, databases), gradient-boosted trees often match or beat neural networks. The decision framework: use deep learning when you have abundant unstructured data and complex patterns; use traditional methods when data is limited, structured, or explainability is critical."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l03-f1",
          "front": "Backpropagation",
          "back": "The algorithm neural networks use to learn — calculates how much each weight contributed to prediction error and adjusts weights to reduce that error iteratively"
        },
        {
          "id": "business-analytics-401-l03-f2",
          "front": "When deep learning outperforms traditional ML",
          "back": "With large amounts of unstructured data (images, text, audio) and complex patterns — it struggles with small datasets, structured tabular data, and explainability requirements"
        },
        {
          "id": "business-analytics-401-l03-f3",
          "front": "Computer vision in business",
          "back": "Deep learning applied to images and video — powers manufacturing quality inspection, autonomous vehicles, medical imaging, retail shelf monitoring, and security surveillance"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-401-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "business-analytics-401-l04",
      "title": "Natural Language Processing for Business",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Describe core NLP tasks and their business applications",
        "Explain how large language models are transforming business operations",
        "Evaluate risks and limitations of NLP deployments"
      ],
      "chunks": [
        {
          "id": "business-analytics-401-l04-c1",
          "title": "Core NLP Tasks",
          "content": "Natural language processing enables computers to understand, interpret, and generate human language. Core tasks include text classification (routing support tickets to the right team), named entity recognition (extracting company names from news articles), machine translation (localizing content across markets), summarization (condensing long reports), and question answering (powering FAQ bots). Each task transforms unstructured text into structured, actionable data."
        },
        {
          "id": "business-analytics-401-l04-c2",
          "title": "Large Language Models in Business",
          "content": "Large language models (LLMs) like GPT and Claude have transformed what is possible with NLP. They can draft emails, generate marketing copy, summarize meeting notes, write code, and answer complex questions with human-like fluency. Business applications include automated customer support, contract analysis, content generation, and knowledge management. The key shift: instead of building task-specific models, organizations can leverage pre-trained LLMs and fine-tune them for specific domains."
        },
        {
          "id": "business-analytics-401-l04-c3",
          "title": "Risks and Limitations",
          "content": "NLP systems have significant limitations. Hallucinations — generating plausible but false information — can mislead decision-makers. Bias in training data propagates to model outputs, potentially causing discriminatory outcomes. Privacy concerns arise when models are trained on or process sensitive data. Context window limitations mean models may miss critical information in long documents. Responsible deployment requires human oversight, output verification, bias auditing, and clear communication about what the system can and cannot reliably do."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l04-f1",
          "front": "Named entity recognition (NER)",
          "back": "An NLP task that identifies and extracts specific entities (people, companies, locations, dates) from unstructured text — used for information extraction from documents and news"
        },
        {
          "id": "business-analytics-401-l04-f2",
          "front": "LLM hallucination",
          "back": "When a large language model generates plausible-sounding but factually incorrect information — a critical risk requiring human verification before using outputs for business decisions"
        },
        {
          "id": "business-analytics-401-l04-f3",
          "front": "Fine-tuning an LLM",
          "back": "Adapting a pre-trained large language model to a specific domain or task using a smaller, specialized dataset — more efficient than training from scratch"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-401-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "business-analytics-401-l05",
      "title": "Checkpoint: Advanced Analytics Technologies",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "business-analytics-401-l05-q1",
          "text": "A logistics company wants to minimize total delivery costs while meeting all customer delivery windows. This is an example of:",
          "options": [
            {
              "id": "a",
              "text": "Descriptive analytics"
            },
            {
              "id": "b",
              "text": "Predictive analytics"
            },
            {
              "id": "c",
              "text": "Prescriptive analytics"
            },
            {
              "id": "d",
              "text": "Diagnostic analytics"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Minimizing costs subject to constraints (delivery windows) is an optimization problem — the defining characteristic of prescriptive analytics. It recommends what to do, not just what will happen."
        },
        {
          "id": "business-analytics-401-l05-q2",
          "text": "An A/B test shows a statistically significant result after checking only 20% of the planned sample. What should you do?",
          "options": [
            {
              "id": "a",
              "text": "Stop the test and implement the winning variant immediately"
            },
            {
              "id": "b",
              "text": "Continue to the planned sample size — early peeking inflates false positive rates"
            },
            {
              "id": "c",
              "text": "Double the sample size to be safe"
            },
            {
              "id": "d",
              "text": "Restart the test with different groups"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Peeking at results before reaching the planned sample size inflates the false positive rate. The test should run to completion unless using sequential testing methods designed for early stopping."
        },
        {
          "id": "business-analytics-401-l05-q3",
          "text": "For which scenario is deep learning LEAST appropriate?",
          "options": [
            {
              "id": "a",
              "text": "Image classification with millions of labeled examples"
            },
            {
              "id": "b",
              "text": "Predicting customer churn from a 500-row spreadsheet"
            },
            {
              "id": "c",
              "text": "Real-time speech recognition"
            },
            {
              "id": "d",
              "text": "Generating natural language responses to customer queries"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Deep learning requires large datasets and excels with unstructured data. A 500-row spreadsheet is too small and too structured — simpler models like logistic regression or gradient-boosted trees would perform better."
        },
        {
          "id": "business-analytics-401-l05-q4",
          "text": "What is the PRIMARY risk of deploying an LLM for automated customer responses without human oversight?",
          "options": [
            {
              "id": "a",
              "text": "The model will be too slow to respond"
            },
            {
              "id": "b",
              "text": "The model may hallucinate incorrect information and mislead customers"
            },
            {
              "id": "c",
              "text": "The model will always refuse to answer questions"
            },
            {
              "id": "d",
              "text": "The model requires too much training data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "LLMs can generate plausible but factually wrong responses (hallucinations). Without human oversight, incorrect information could mislead customers, damage trust, or create legal liability."
        }
      ]
    },
    {
      "id": "business-analytics-401-l06",
      "title": "Analytics Organization, Governance & Ethics",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Compare centralized, decentralized, and hub-and-spoke analytics models",
        "Design a data governance framework for analytics programs",
        "Apply ethical principles to analytics and AI initiatives"
      ],
      "chunks": [
        {
          "id": "business-analytics-401-l06-c1",
          "title": "Analytics Organizational Models",
          "content": "Centralized analytics places all analysts in one team — ensuring consistency and skill development but risking disconnection from business units. Decentralized analytics embeds analysts within business functions — enabling deep domain expertise but creating silos and inconsistent methods. The hub-and-spoke model combines both: a central Center of Excellence sets standards, tools, and best practices, while embedded analysts apply them in business units. Most mature organizations evolve toward hub-and-spoke."
        },
        {
          "id": "business-analytics-401-l06-c2",
          "title": "Data Governance Framework",
          "content": "Data governance ensures data is accurate, consistent, secure, and used responsibly. Key components: data quality standards (accuracy, completeness, timeliness), data ownership (who is accountable for each dataset), access controls (who can see and use what data), data lineage (tracking where data comes from and how it transforms), and retention policies (how long data is stored). Without governance, analytics teams build models on unreliable data — garbage in, garbage out at industrial scale."
        },
        {
          "id": "business-analytics-401-l06-c3",
          "title": "Ethics in Analytics and AI",
          "content": "Ethical analytics requires fairness (models should not discriminate based on protected characteristics), transparency (stakeholders should understand how decisions are made), privacy (collecting and using only necessary data with consent), and accountability (clear ownership when models cause harm). Bias auditing tests models across demographic groups. Privacy-preserving techniques like differential privacy and federated learning enable analytics without exposing individual data. Ethics is not a constraint on analytics — it is a requirement for sustainable trust."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l06-f1",
          "front": "Hub-and-spoke analytics model",
          "back": "A central Center of Excellence sets standards and tools while embedded analysts in business units apply them — combines consistency of centralized with domain expertise of decentralized"
        },
        {
          "id": "business-analytics-401-l06-f2",
          "front": "Data lineage",
          "back": "Tracking data from its origin through all transformations to its final use — essential for debugging data quality issues and meeting regulatory compliance requirements"
        },
        {
          "id": "business-analytics-401-l06-f3",
          "front": "Bias auditing in AI",
          "back": "Systematically testing model predictions across demographic groups to identify and mitigate discriminatory outcomes — ensures fairness before and after deployment"
        }
      ]
    },
    {
      "id": "business-analytics-401-l07",
      "title": "Final Assessment: Advanced Analytics & AI Strategy",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "business-analytics-401-l07-q1",
          "text": "A company's analytics team is isolated from business units and frequently works on projects that business leaders consider irrelevant. Which organizational change would MOST likely address this?",
          "options": [
            {
              "id": "a",
              "text": "Hiring more data scientists to the central team"
            },
            {
              "id": "b",
              "text": "Moving to a hub-and-spoke model with embedded analysts"
            },
            {
              "id": "c",
              "text": "Eliminating the analytics team entirely"
            },
            {
              "id": "d",
              "text": "Purchasing more advanced BI tools"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Hub-and-spoke embeds analysts in business units (ensuring relevance and domain knowledge) while maintaining central standards (ensuring quality). This bridges the gap between analytics capability and business needs."
        },
        {
          "id": "business-analytics-401-l07-q2",
          "text": "A hiring algorithm trained on historical data rejects a disproportionate number of female applicants. The company's data governance team should FIRST:",
          "options": [
            {
              "id": "a",
              "text": "Increase the training data size"
            },
            {
              "id": "b",
              "text": "Deploy the model anyway since it reflects historical patterns"
            },
            {
              "id": "c",
              "text": "Conduct a bias audit and identify which features drive the discriminatory outcome"
            },
            {
              "id": "d",
              "text": "Switch from a neural network to logistic regression"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A bias audit identifies the root cause of discriminatory predictions. Historical data may encode past discrimination — reflecting it is not acceptable. The model type is secondary to understanding and fixing the bias."
        },
        {
          "id": "business-analytics-401-l07-q3",
          "text": "An airline uses optimization to set ticket prices dynamically based on demand, competition, and time until departure. This is an application of:",
          "options": [
            {
              "id": "a",
              "text": "Descriptive analytics"
            },
            {
              "id": "b",
              "text": "A/B testing"
            },
            {
              "id": "c",
              "text": "Prescriptive analytics and revenue management"
            },
            {
              "id": "d",
              "text": "Sentiment analysis"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Dynamic pricing using optimization to maximize revenue across constraints is prescriptive analytics applied to revenue management — recommending the optimal price for each seat at each moment."
        },
        {
          "id": "business-analytics-401-l07-q4",
          "text": "Which practice BEST helps build a data-driven culture across an organization?",
          "options": [
            {
              "id": "a",
              "text": "Restricting data access to the analytics team only"
            },
            {
              "id": "b",
              "text": "Requiring all decisions to be made by machine learning models"
            },
            {
              "id": "c",
              "text": "Democratizing experimentation and empowering teams to run their own A/B tests"
            },
            {
              "id": "d",
              "text": "Replacing all managers with data scientists"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Democratizing experimentation empowers teams to test ideas with data rather than relying on opinion. It scales analytics culture beyond the analytics team to the entire organization."
        }
      ]
    }
  ]
};
