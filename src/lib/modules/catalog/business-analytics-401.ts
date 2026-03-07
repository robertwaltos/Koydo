import type { LearningModule } from "@/lib/modules/types";

export const business_analytics_401_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "content": "Prescriptive analytics is the most advanced form of analytics, providing recommendations on the best actions to take to achieve a desired outcome. It goes beyond predicting future events by using techniques like optimization, simulation, and decision-making models to advise on optimal strategies. These methods work together to identify the most effective path forward while considering various business constraints. For example, while predictive analytics might forecast product demand, prescriptive analytics would recommend the optimal inventory levels, pricing strategies, and distribution routes to maximize profit based on that forecast. This makes prescriptive analytics a powerful tool for enhancing decision-making and driving business success."
        },
        {
          "id": "business-analytics-401-l01-c2",
          "title": "Linear Programming and Optimization",
          "content": "Linear programming is a mathematical method for determining the best outcome, such as maximum profit or minimum cost, in a model whose requirements are represented by linear relationships. It is used to solve problems with a clear objective function subject to a set of constraints, such as budget limits, resource availability, or production capacity. For instance, a manufacturer can use linear programming to determine the most profitable mix of products to produce given constraints on machine hours, raw materials, and labor. The simplex algorithm is a common method for solving these problems. Modern optimization extends to integer programming (for decisions requiring whole numbers), nonlinear models (for more complex relationships), and stochastic optimization (for decision-making under uncertainty), providing a flexible and accurate toolkit for business analytics."
        },
        {
          "id": "business-analytics-401-l01-c3",
          "title": "Business Applications of Optimization",
          "content": "Optimization is a critical tool used across many business functions to improve decision-making. Airlines use it for revenue management, dynamically adjusting ticket prices based on demand to maximize flight revenue. In supply chain management, companies optimize delivery routes, inventory placement, and supplier selection to enhance efficiency and reduce costs. Marketing teams apply optimization to allocate advertising budgets across different channels for the highest return on investment. Workforce scheduling is another key area, where businesses balance staffing levels to minimize labor costs while meeting service quality targets. In all these applications, the goal is to make the most effective decisions possible within the constraints of limited resources, thereby improving operational performance and achieving better business outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l01-f1",
          "front": "Prescriptive analytics",
          "back": "The most advanced analytics type — recommends optimal actions using optimization, simulation, and decision models, going beyond prediction to actionable recommendations."
        },
        {
          "id": "business-analytics-401-l01-f2",
          "front": "Linear programming",
          "back": "A mathematical method that maximizes or minimizes an objective function subject to linear constraints — used for production planning, resource allocation, and logistics optimization."
        },
        {
          "id": "business-analytics-401-l01-f3",
          "front": "Revenue management (optimization application)",
          "back": "Dynamically pricing products or services (airline seats, hotel rooms) to maximize total revenue — uses optimization to balance demand, capacity, and willingness to pay."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-401-l01-a1",
          "type": "image",
          "title": "Analytics Maturity Model",
          "content": "A diagram showing the progression from Descriptive Analytics (What happened?) to Diagnostic (Why did it happen?), Predictive (What will happen?), and finally Prescriptive Analytics (What should we do?)."
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
          "content": "A/B testing is a controlled experiment used to compare two versions of a product or experience to determine which one performs better. Users are randomly assigned to a control group (the existing version) or a treatment group (the modified version) to measure the causal impact of a change. Designing a rigorous A/B test requires several key elements: a clear hypothesis, a single primary success metric, and random assignment to eliminate selection bias. The sample size must be large enough to yield statistically significant results. Common pitfalls to avoid include checking results prematurely, which can lead to false positives; testing too many variations at once, which complicates analysis; and failing to account for novelty effects, where user behavior changes simply because something is new."
        },
        {
          "id": "business-analytics-401-l02-c2",
          "title": "Sample Size and Duration",
          "content": "Determining the correct sample size for an A/B test is critical for reliable results. This calculation depends on several factors: the minimum detectable effect (MDE), which is the smallest change you aim to measure; the significance level (α), which is the probability of a false positive; and the desired statistical power (1-β), typically set at 80%, which is the probability of detecting a real effect. Detecting a small effect, such as a 1% lift in conversion, requires a much larger sample size than detecting a 10% lift. The test must also run long enough to capture typical user behavior cycles, such as full weeks, to avoid day-of-week biases. This creates a trade-off: smaller effects require larger samples and longer tests, but if a small lift translates to significant revenue, the investment is often worthwhile."
        },
        {
          "id": "business-analytics-401-l02-c3",
          "title": "Experimentation Platforms at Scale",
          "content": "Leading technology companies like Google, Netflix, and Booking.com run thousands of concurrent experiments using sophisticated in-house experimentation platforms. These platforms automate key aspects of the testing process, including randomization and tracking of guardrail metrics to ensure experiments do not harm key performance indicators. By managing a high volume of tests with statistical rigor, these platforms enable rapid, data-driven decision-making. Building a true culture of experimentation involves democratizing this capability, empowering product managers, marketers, and other teams to test their ideas quickly. This shifts the basis of decision-making from intuition or the 'Highest Paid Person's Opinion' (HiPPO) to empirical evidence, fostering innovation and continuous improvement."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l02-f1",
          "front": "Minimum detectable effect (MDE)",
          "back": "The smallest effect size an A/B test is designed to detect — smaller MDEs require larger sample sizes and longer test durations."
        },
        {
          "id": "business-analytics-401-l02-f2",
          "front": "Peeking problem in A/B testing",
          "back": "Checking results before the test reaches its required sample size inflates false positive rates — sequential testing methods or pre-committed analysis plans prevent this."
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
          "title": "A/B Testing Workflow",
          "content": "A flowchart illustrating the key stages of an A/B test: 1. Formulate Hypothesis, 2. Determine Sample Size, 3. Randomly Assign Users to Control (A) and Variant (B), 4. Run Experiment & Collect Data, 5. Analyze Results for Statistical Significance."
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
          "content": "Neural networks, the foundation of deep learning, are computational models inspired by the human brain. They consist of layers of interconnected nodes, or 'neurons.' The input layer receives data, such as an image or text. One or more hidden layers then process this data, learning to identify increasingly complex patterns. For example, in image recognition, early layers might detect edges, while deeper layers combine these to recognize shapes and objects. The final output layer produces a prediction or classification. During training, the network adjusts the connection weights between neurons to minimize prediction errors, using algorithms like backpropagation and gradient descent. 'Deep' learning refers to networks with many hidden layers, enabling them to learn highly intricate, hierarchical patterns from vast datasets."
        },
        {
          "id": "business-analytics-401-l03-c2",
          "title": "Where Deep Learning Excels",
          "content": "Deep learning excels at finding patterns in large volumes of unstructured data, outperforming traditional methods in several key domains. In computer vision, it powers applications like manufacturing quality control, autonomous vehicles, and medical image analysis. In speech recognition, it enables virtual assistants like Siri and Alexa and automates call center interactions. Advanced language models use deep learning for sophisticated chatbots, automated email replies, and content creation. Recommendation systems, such as those used by Netflix and Spotify, leverage deep learning to analyze complex user behavior and suggest personalized content. The common thread is the ability to process massive, high-dimensional datasets and learn subtle patterns that are difficult for other techniques to capture."
        },
        {
          "id": "business-analytics-401-l03-c3",
          "title": "When Not to Use Deep Learning",
          "content": "Despite its power, deep learning is not a universal solution. It requires vast amounts of labeled training data; with small datasets, simpler, more interpretable models often perform better. Deep learning is also computationally expensive, demanding significant resources for training and deployment. A major consideration is its 'black-box' nature, making it difficult to explain how a model arrives at a specific decision. This lack of interpretability is a significant barrier in regulated industries like finance and healthcare. For structured, tabular data, methods like gradient-boosted trees frequently match or exceed the performance of neural networks with less complexity. The decision to use deep learning should be based on the scale and type of data, the complexity of the problem, and the need for model explainability."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l03-f1",
          "front": "Backpropagation",
          "back": "The algorithm neural networks use to learn — calculates how much each weight contributed to prediction error and adjusts weights to reduce that error iteratively."
        },
        {
          "id": "business-analytics-401-l03-f2",
          "front": "When deep learning outperforms traditional ML",
          "back": "With large amounts of unstructured data (images, text, audio) and complex patterns — it struggles with small datasets, structured tabular data, and explainability requirements."
        },
        {
          "id": "business-analytics-401-l03-f3",
          "front": "Computer vision in business",
          "back": "Deep learning applied to images and video — powers manufacturing quality inspection, autonomous vehicles, medical imaging, retail shelf monitoring, and security surveillance."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-401-l03-a1",
          "type": "practice",
          "title": "Deep Learning Use Case Analysis",
          "content": "Analyze a business case study to determine if a deep learning solution is appropriate. Justify your recommendation based on data availability, problem complexity, and explainability requirements."
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
          "content": "Natural Language Processing (NLP) is a field of AI that enables computers to understand, interpret, and generate human language. Core NLP tasks provide significant business value. Text classification automatically categorizes text, used for routing support tickets or analyzing sentiment. Named entity recognition (NER) identifies and extracts key information like company names or locations from documents. Machine translation breaks down language barriers for global operations. Summarization condenses long reports into concise overviews, saving valuable time. Question answering systems power FAQ bots to provide instant, accurate information. Each of these tasks helps transform unstructured text from sources like emails, reviews, and social media into structured, actionable data."
        },
        {
          "id": "business-analytics-401-l04-c2",
          "title": "Large Language Models in Business",
          "content": "Large language models (LLMs) like GPT and Claude represent a paradigm shift in NLP. These powerful, pre-trained models can perform a vast range of tasks with minimal specific training, including drafting emails, generating marketing copy, summarizing meetings, writing code, and answering complex questions with human-like fluency. In business, LLMs are being deployed for automated customer support, contract analysis, content generation, and knowledge management. A key advantage is that organizations can fine-tune these general-purpose models for their specific needs rather than building task-specific models from scratch. This dramatically accelerates development and deployment, enhancing productivity across numerous business functions."
        },
        {
          "id": "business-analytics-401-l04-c3",
          "title": "Risks and Limitations",
          "content": "Deploying NLP systems, especially LLMs, carries significant risks that require careful management. A primary concern is 'hallucination,' where a model generates plausible but factually incorrect information, which can lead to poor business decisions. Models can also perpetuate and amplify biases present in their training data, leading to unfair or discriminatory outcomes in applications like hiring or lending. Data privacy is another critical issue, as models trained on sensitive information can inadvertently expose it. Furthermore, models have context window limitations, potentially missing crucial details in long documents. Responsible deployment requires robust human oversight, including fact-checking outputs, auditing for bias, and clearly communicating the system's capabilities and limitations."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l04-f1",
          "front": "Named entity recognition (NER)",
          "back": "An NLP task that identifies and extracts specific entities (people, companies, locations, dates) from unstructured text — used for information extraction from documents and news."
        },
        {
          "id": "business-analytics-401-l04-f2",
          "front": "LLM hallucination",
          "back": "When a large language model generates plausible-sounding but factually incorrect information — a critical risk requiring human verification before using outputs for business decisions."
        },
        {
          "id": "business-analytics-401-l04-f3",
          "front": "Fine-tuning an LLM",
          "back": "Adapting a pre-trained large language model to a specific domain or task using a smaller, specialized dataset — more efficient than training from scratch."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-401-l04-a1",
          "type": "image",
          "title": "NLP Business Applications",
          "content": "An infographic illustrating core NLP tasks (e.g., Sentiment Analysis, Text Classification, NER) and their corresponding business use cases (e.g., Brand Monitoring, Support Ticket Routing, Contract Analysis)."
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
          "content": "Organizations structure their analytics teams in several ways. In a centralized model, all analysts belong to a single team, which promotes consistency and deep skill development but can create distance from business units. In a decentralized model, analysts are embedded within business functions, fostering deep domain expertise but risking inconsistent standards and data silos. The hub-and-spoke model offers a hybrid solution. A central Center of Excellence sets standards, provides tools, and promotes best practices, while embedded analysts apply these standards within their business units. As organizations mature, many adopt the hub-and-spoke model to balance central coordination with business-specific agility."
        },
        {
          "id": "business-analytics-401-l06-c2",
          "title": "Data Governance Framework",
          "content": "Data governance is the framework for managing data as a strategic asset, ensuring it is accurate, consistent, secure, and used responsibly. Key components include: data quality standards to ensure accuracy and completeness; data ownership to assign accountability for each dataset; access controls to protect sensitive information; data lineage to track data from its origin to its use; and retention policies to manage the data lifecycle. Without strong governance, analytics teams risk building models on unreliable data, leading to flawed insights and poor decisions. This is the principle of 'garbage in, garbage out'—the quality of the output is determined by the quality of the input."
        },
        {
          "id": "business-analytics-401-l06-c3",
          "title": "Ethics in Analytics and AI",
          "content": "Ethical considerations are fundamental to responsible analytics and AI. Key principles include fairness, ensuring models do not produce discriminatory outcomes against protected groups; transparency, making decision-making processes understandable to stakeholders; privacy, collecting and using personal data responsibly and with consent; and accountability, establishing clear ownership for model outcomes, especially when they cause harm. To operationalize these principles, organizations can conduct bias audits to test models for fairness across demographic groups and employ privacy-preserving techniques like differential privacy. Building and maintaining trust with customers and regulators depends on a strong ethical foundation for all analytics initiatives."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-401-l06-f1",
          "front": "Hub-and-spoke analytics model",
          "back": "A central Center of Excellence sets standards and tools while embedded analysts in business units apply them — combines consistency of centralized with domain expertise of decentralized."
        },
        {
          "id": "business-analytics-401-l06-f2",
          "front": "Data lineage",
          "back": "Tracking data from its origin through all transformations to its final use — essential for debugging data quality issues and meeting regulatory compliance requirements."
        },
        {
          "id": "business-analytics-401-l06-f3",
          "front": "Bias auditing in AI",
          "back": "Systematically testing model predictions across demographic groups to identify and mitigate discriminatory outcomes — ensures fairness before and after deployment."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-401-l06-a1",
          "type": "practice",
          "title": "Organizational Model Recommendation",
          "content": "Draft a memo outlining the pros and cons of centralized vs. hub-and-spoke analytics models for a fictional company, and recommend a path forward based on its strategic goals."
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
