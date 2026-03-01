import type { LearningModule } from "@/lib/modules/types";

export const AiWorkflows101Module: LearningModule = {
  "id": "ai-workflows-101",
  "title": "AI Workflows Foundations",
  "description": "Master the end-to-end AI workflow — from data collection and prompt engineering through RAG pipelines, autonomous agents, and responsible deployment with guardrails.",
  "subject": "AI Workflows",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "ai-engineering"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Map the stages of a production AI workflow from idea to deployed model",
    "Apply data collection, cleaning, and labeling best practices using industry tools",
    "Craft effective prompts using zero-shot, few-shot, and chain-of-thought techniques",
    "Design retrieval-augmented generation pipelines with vector databases and chunking strategies",
    "Build AI agent architectures using the ReAct pattern, function calling, and orchestration frameworks",
    "Implement evaluation frameworks including hallucination detection and automated scoring",
    "Apply responsible AI practices including RLHF, red-teaming, model cards, and guardrails"
  ],
  "lessons": [
    {
      "id": "ai-workflows-101-l01",
      "title": "Introduction to AI Workflows — From Idea to Deployed Model",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify the five core stages of a production AI workflow",
        "Distinguish between traditional ML pipelines and LLM-based workflows",
        "Explain why iteration loops and human oversight are essential at every stage"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l01-c1",
          "title": "The Five-Stage AI Pipeline",
          "content": "A production AI workflow follows five repeatable stages: (1) Problem Definition — framing the business question and success metrics; (2) Data Acquisition — collecting, cleaning, and labeling training data; (3) Model Development — selecting architectures, training or fine-tuning, and prompt engineering for LLMs; (4) Evaluation — measuring accuracy, fairness, latency, and cost against predefined thresholds; (5) Deployment & Monitoring — serving the model via APIs, tracking drift, and triggering retraining. Each stage feeds back into earlier stages: poor evaluation results loop back to data or model development, and production monitoring may restart the entire cycle."
        },
        {
          "id": "ai-workflows-101-l01-c2",
          "title": "Traditional ML vs. LLM-Based Workflows",
          "content": "Traditional ML workflows center on ETL pipelines (Extract, Transform, Load), feature engineering, and model training with frameworks like scikit-learn or PyTorch. The bottleneck is labeled data. LLM-based workflows shift the bottleneck to prompt design and context management — instead of training from scratch, you craft system prompts, provide few-shot examples, and augment the model with retrieved context (RAG). However, both paradigms share the same outer loop: define, build, evaluate, deploy, monitor. Understanding this shared skeleton lets you pick the right approach for each problem."
        },
        {
          "id": "ai-workflows-101-l01-c3",
          "title": "Human-in-the-Loop and Iteration",
          "content": "No AI system should ship without human oversight, especially for high-stakes domains like healthcare, finance, or education. A human-in-the-loop (HITL) checkpoint appears at evaluation (reviewing model outputs before promotion), deployment (canary releases with manual approval gates), and monitoring (escalation paths when confidence scores drop). Iteration is not a sign of failure — it is the design. Expect three to five prompt-evaluation cycles before reaching production quality, and plan for continuous improvement once deployed."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-101-l01-f1",
          "front": "Five stages of a production AI workflow",
          "back": "Problem Definition → Data Acquisition → Model Development → Evaluation → Deployment & Monitoring"
        },
        {
          "id": "ai-workflows-101-l01-f2",
          "front": "ETL pipeline",
          "back": "Extract, Transform, Load — the standard process for ingesting raw data, cleaning it, and storing it in a usable format"
        },
        {
          "id": "ai-workflows-101-l01-f3",
          "front": "Human-in-the-loop (HITL)",
          "back": "A design pattern where a human reviews, approves, or corrects AI outputs at critical checkpoints before they reach end users"
        },
        {
          "id": "ai-workflows-101-l01-f4",
          "front": "Key difference: traditional ML vs. LLM workflows",
          "back": "Traditional ML bottleneck is labeled data and feature engineering; LLM bottleneck is prompt design and context management"
        }
      ],
      "learningAids": [
        {
          "id": "ai-workflows-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "ai-workflows-101-l02",
      "title": "Data Collection, Cleaning & Labeling",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Design a data collection strategy that balances coverage, cost, and quality",
        "Apply data cleaning techniques including deduplication, normalization, and outlier detection",
        "Compare labeling tools and workflows such as Label Studio and Prodigy"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l02-c1",
          "title": "Data Collection Strategies",
          "content": "Good data is the foundation of every AI system. Collection strategies include web scraping (with robots.txt compliance), API ingestion, user-generated content, synthetic data generation, and partnerships with data vendors. Key considerations are representativeness (does the data reflect the target population?), freshness (how quickly does it go stale?), and legal compliance (GDPR, CCPA, copyright). A data card documents the source, collection date, known biases, and intended use — think of it as a nutrition label for datasets."
        },
        {
          "id": "ai-workflows-101-l02-c2",
          "title": "Cleaning and Preprocessing",
          "content": "Raw data is messy. Cleaning pipelines handle missing values (imputation vs. deletion), duplicate removal (exact and fuzzy deduplication), format normalization (dates, currencies, encodings), and outlier detection (z-scores, IQR method). For text data, preprocessing includes tokenization, lowercasing, removing HTML tags, and handling Unicode edge cases. For images, it means resizing, color normalization, and augmentation. The rule of thumb: spend 60–80% of project time on data quality — a model trained on clean, smaller data often outperforms one trained on noisy, larger data."
        },
        {
          "id": "ai-workflows-101-l02-c3",
          "title": "Labeling Tools and Workflows",
          "content": "Labeling converts raw data into supervised training examples. Label Studio is an open-source platform supporting text, image, audio, and video annotation with customizable interfaces. Prodigy (by Explosion AI) uses active learning — the model suggests labels, and annotators correct them, reducing labeling time by up to 10×. Best practices include clear annotation guidelines, inter-annotator agreement metrics (Cohen's kappa ≥ 0.8), gold-standard test questions embedded in labeling tasks, and regular calibration sessions. For LLM workflows, labeling extends to preference data for RLHF — human raters rank outputs by quality."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-101-l02-f1",
          "front": "Data card",
          "back": "A standardized document describing a dataset's source, collection date, known biases, and intended use — like a nutrition label for data"
        },
        {
          "id": "ai-workflows-101-l02-f2",
          "front": "Label Studio",
          "back": "An open-source data labeling platform supporting text, image, audio, and video annotation with customizable interfaces"
        },
        {
          "id": "ai-workflows-101-l02-f3",
          "front": "Prodigy",
          "back": "A labeling tool by Explosion AI that uses active learning — the model suggests labels and annotators correct them, dramatically reducing labeling time"
        },
        {
          "id": "ai-workflows-101-l02-f4",
          "front": "Inter-annotator agreement",
          "back": "A metric (often Cohen's kappa) measuring how consistently different annotators label the same data — target ≥ 0.8 for high-quality labels"
        }
      ],
      "learningAids": [
        {
          "id": "ai-workflows-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "ai-workflows-101-l03",
      "title": "Quiz 1: Data & Workflow Fundamentals",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "ai-workflows-101-l03-q1",
          "text": "What is the correct order of the five core stages in a production AI workflow?",
          "skillId": "ai-workflows-101-skill-pipeline",
          "options": [
            {
              "id": "a",
              "text": "Problem Definition → Data Acquisition → Model Development → Evaluation → Deployment & Monitoring"
            },
            {
              "id": "b",
              "text": "Model Development → Data Acquisition → Deployment → Problem Definition → Evaluation"
            },
            {
              "id": "c",
              "text": "Deployment → Evaluation → Data Acquisition → Model Development → Problem Definition"
            },
            {
              "id": "d",
              "text": "Data Acquisition → Deployment → Model Development → Evaluation → Problem Definition"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The workflow follows a logical sequence: define the problem first, then collect data, develop the model, evaluate it, and finally deploy and monitor."
        },
        {
          "id": "ai-workflows-101-l03-q2",
          "text": "What is the primary bottleneck in LLM-based workflows compared to traditional ML?",
          "skillId": "ai-workflows-101-skill-pipeline",
          "options": [
            {
              "id": "a",
              "text": "Feature engineering and hyperparameter tuning"
            },
            {
              "id": "b",
              "text": "Prompt design and context management"
            },
            {
              "id": "c",
              "text": "GPU memory allocation"
            },
            {
              "id": "d",
              "text": "Database schema design"
            }
          ],
          "correctOptionId": "b",
          "explanation": "LLM workflows shift the bottleneck from labeled data and feature engineering to prompt design, few-shot examples, and context management."
        },
        {
          "id": "ai-workflows-101-l03-q3",
          "text": "Which labeling tool uses active learning to suggest labels that annotators then correct?",
          "skillId": "ai-workflows-101-skill-data",
          "options": [
            {
              "id": "a",
              "text": "Label Studio"
            },
            {
              "id": "b",
              "text": "Prodigy"
            },
            {
              "id": "c",
              "text": "Amazon SageMaker Ground Truth"
            },
            {
              "id": "d",
              "text": "Labelbox"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Prodigy by Explosion AI uses active learning — the model suggests labels and annotators correct them, reducing labeling time by up to 10×."
        },
        {
          "id": "ai-workflows-101-l03-q4",
          "text": "What does ETL stand for in data engineering?",
          "skillId": "ai-workflows-101-skill-data",
          "options": [
            {
              "id": "a",
              "text": "Extract, Transform, Load"
            },
            {
              "id": "b",
              "text": "Evaluate, Train, Launch"
            },
            {
              "id": "c",
              "text": "Encode, Tokenize, Learn"
            },
            {
              "id": "d",
              "text": "Embed, Transfer, Label"
            }
          ],
          "correctOptionId": "a",
          "explanation": "ETL — Extract, Transform, Load — is the standard pipeline for ingesting raw data, cleaning/transforming it, and storing it in a usable format."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "ai-workflows-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "ai-workflows-101-l04",
      "title": "Prompt Engineering & LLM Integration",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Apply zero-shot, few-shot, and chain-of-thought prompting strategies",
        "Configure LLM parameters including temperature, top-p, and max tokens for different use cases",
        "Design system prompts that enforce output structure, tone, and safety constraints"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l04-c1",
          "title": "Zero-Shot, Few-Shot, and Chain-of-Thought",
          "content": "Zero-shot prompting asks the model to perform a task with no examples — it relies entirely on pre-training knowledge ('Classify the sentiment of this review: …'). Few-shot prompting provides 2–5 input/output examples before the actual query, dramatically improving accuracy on structured tasks like entity extraction or format conversion. Chain-of-thought (CoT) prompting adds the instruction 'Let's think step by step' or provides worked examples with explicit reasoning traces. CoT is especially powerful for math, logic, and multi-step reasoning — it can improve accuracy by 20–40% on complex tasks by forcing the model to externalize intermediate steps."
        },
        {
          "id": "ai-workflows-101-l04-c2",
          "title": "Temperature, Top-p, and Sampling Parameters",
          "content": "Temperature controls randomness: 0.0 produces deterministic outputs (best for classification, extraction, code generation), while 1.0–1.5 increases creativity (good for brainstorming, fiction). Top-p (nucleus sampling) sets a cumulative probability threshold — top_p=0.9 means the model samples from the smallest set of tokens whose probabilities sum to 0.9, cutting off the long tail. In practice, adjust temperature OR top-p, not both simultaneously. Max tokens caps response length. Frequency penalty reduces repetition, presence penalty encourages topic diversity. Document your parameter choices in a prompt card alongside the prompt text itself."
        },
        {
          "id": "ai-workflows-101-l04-c3",
          "title": "System Prompts and Output Structuring",
          "content": "A system prompt sets the model's persona, constraints, and output format before the user message arrives. Effective system prompts include: (1) role definition ('You are a medical coding assistant'), (2) behavioral constraints ('Never provide diagnoses; only suggest ICD-10 codes'), (3) output schema ('Respond with valid JSON: {code, description, confidence}'), and (4) safety rails ('If uncertain, say so'). For production APIs, enforce output structure with JSON mode or function calling. Version-control your prompts alongside application code — prompt regression is as real as code regression."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-101-l04-f1",
          "front": "Zero-shot prompting",
          "back": "Asking the model to perform a task with no examples, relying entirely on pre-training knowledge"
        },
        {
          "id": "ai-workflows-101-l04-f2",
          "front": "Chain-of-thought (CoT) prompting",
          "back": "A technique that instructs the model to show its reasoning step by step, improving accuracy 20–40% on complex tasks"
        },
        {
          "id": "ai-workflows-101-l04-f3",
          "front": "Temperature parameter",
          "back": "Controls randomness: 0.0 = deterministic (extraction, code), 1.0+ = creative (brainstorming, fiction)"
        },
        {
          "id": "ai-workflows-101-l04-f4",
          "front": "Top-p (nucleus sampling)",
          "back": "Samples from the smallest token set whose cumulative probability meets the threshold — e.g., top_p=0.9 cuts off the least likely 10% of tokens"
        }
      ],
      "learningAids": [
        {
          "id": "ai-workflows-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "ai-workflows-101-l05",
      "title": "Retrieval-Augmented Generation (RAG) & Vector Databases",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Explain how RAG pipelines ground LLM outputs in external knowledge",
        "Compare embedding models and vector databases including Pinecone, Chroma, and pgvector",
        "Design chunking strategies that balance retrieval precision and context completeness"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l05-c1",
          "title": "The RAG Architecture",
          "content": "Retrieval-Augmented Generation (RAG) combines a retriever with a generator. At query time, the user's question is embedded into a vector, the retriever searches a vector database for the most similar document chunks, and those chunks are injected into the LLM's context window as grounding material. The LLM then generates an answer that cites the retrieved sources. RAG reduces hallucination because the model has access to factual, up-to-date information rather than relying solely on training data. A production RAG pipeline includes: ingestion (chunking + embedding), indexing (vector DB), retrieval (similarity search + reranking), and generation (LLM with augmented context)."
        },
        {
          "id": "ai-workflows-101-l05-c2",
          "title": "Embeddings and Vector Databases",
          "content": "Embeddings convert text into dense numerical vectors that capture semantic meaning — similar texts map to nearby points in vector space. Popular embedding models include OpenAI's text-embedding-3-small (1536 dimensions, general purpose), sentence-transformers (open-source, customizable), and Cohere Embed (multilingual). Vector databases store and query these embeddings efficiently: Pinecone is a managed service with automatic scaling and metadata filtering; Chroma is open-source and easy to prototype with locally; pgvector adds vector search to PostgreSQL, ideal when you already use Postgres. The choice depends on scale, cost, and infrastructure preferences."
        },
        {
          "id": "ai-workflows-101-l05-c3",
          "title": "Chunking Strategies",
          "content": "How you split documents into chunks directly impacts retrieval quality. Fixed-size chunking (e.g., 512 tokens with 50-token overlap) is simple but may split mid-sentence. Semantic chunking uses sentence boundaries or paragraph breaks, preserving meaning. Recursive chunking tries paragraph → sentence → character splits hierarchically. Sliding window approaches overlap chunks to avoid lost context at boundaries. Best practices: keep chunks between 256–1024 tokens, add metadata (source, page number, section title) to each chunk, and test retrieval quality with a golden set of question-answer pairs. Smaller chunks improve precision; larger chunks provide more context — tune this trade-off empirically."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-101-l05-f1",
          "front": "RAG (Retrieval-Augmented Generation)",
          "back": "A pattern that retrieves relevant document chunks from a vector database and injects them into the LLM's context to ground responses in factual sources"
        },
        {
          "id": "ai-workflows-101-l05-f2",
          "front": "Pinecone",
          "back": "A managed vector database service with automatic scaling, metadata filtering, and high-performance similarity search"
        },
        {
          "id": "ai-workflows-101-l05-f3",
          "front": "Chroma",
          "back": "An open-source, lightweight vector database popular for local development and RAG prototyping"
        },
        {
          "id": "ai-workflows-101-l05-f4",
          "front": "pgvector",
          "back": "A PostgreSQL extension that adds vector storage and similarity search — ideal when you already use Postgres as your primary database"
        }
      ],
      "learningAids": [
        {
          "id": "ai-workflows-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "ai-workflows-101-l06",
      "title": "Quiz 2: Prompting & RAG",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "ai-workflows-101-l06-q1",
          "text": "Which prompting strategy provides worked examples with explicit reasoning traces to improve accuracy on multi-step problems?",
          "skillId": "ai-workflows-101-skill-prompting",
          "options": [
            {
              "id": "a",
              "text": "Zero-shot prompting"
            },
            {
              "id": "b",
              "text": "Few-shot prompting"
            },
            {
              "id": "c",
              "text": "Chain-of-thought prompting"
            },
            {
              "id": "d",
              "text": "Nucleus sampling"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Chain-of-thought prompting provides worked examples with step-by-step reasoning traces, improving accuracy 20–40% on complex tasks."
        },
        {
          "id": "ai-workflows-101-l06-q2",
          "text": "A temperature of 0.0 produces outputs that are:",
          "skillId": "ai-workflows-101-skill-prompting",
          "options": [
            {
              "id": "a",
              "text": "Highly creative and varied"
            },
            {
              "id": "b",
              "text": "Deterministic and consistent"
            },
            {
              "id": "c",
              "text": "Randomly sampled from the full vocabulary"
            },
            {
              "id": "d",
              "text": "Limited to single-word responses"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Temperature 0.0 removes randomness — the model always picks the highest-probability token, producing deterministic, consistent outputs."
        },
        {
          "id": "ai-workflows-101-l06-q3",
          "text": "In a RAG pipeline, what happens immediately after the user's query is embedded into a vector?",
          "skillId": "ai-workflows-101-skill-rag",
          "options": [
            {
              "id": "a",
              "text": "The model generates an answer from training data only"
            },
            {
              "id": "b",
              "text": "The retriever searches the vector database for similar document chunks"
            },
            {
              "id": "c",
              "text": "The system fine-tunes the model on the query"
            },
            {
              "id": "d",
              "text": "The query is discarded and a random chunk is selected"
            }
          ],
          "correctOptionId": "b",
          "explanation": "After embedding the query, the retriever performs similarity search against the vector database to find the most relevant document chunks."
        },
        {
          "id": "ai-workflows-101-l06-q4",
          "text": "Which vector database is a PostgreSQL extension best suited for teams already using Postgres?",
          "skillId": "ai-workflows-101-skill-rag",
          "options": [
            {
              "id": "a",
              "text": "Pinecone"
            },
            {
              "id": "b",
              "text": "Chroma"
            },
            {
              "id": "c",
              "text": "pgvector"
            },
            {
              "id": "d",
              "text": "Weaviate"
            }
          ],
          "correctOptionId": "c",
          "explanation": "pgvector is a PostgreSQL extension that adds vector storage and similarity search, making it the natural choice for existing Postgres users."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "ai-workflows-101-l07",
      "title": "AI Agents, Tool Use & Orchestration",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Describe the ReAct pattern and how agents interleave reasoning with action",
        "Explain function calling and how LLMs invoke external tools via structured output",
        "Compare orchestration frameworks including LangChain and LlamaIndex"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l07-c1",
          "title": "The ReAct Pattern",
          "content": "ReAct (Reasoning + Acting) is an agent architecture where the LLM alternates between thinking and tool use in a loop: (1) Thought — the model reasons about what information it needs; (2) Action — the model calls a tool (search, calculator, API); (3) Observation — the tool result is fed back into the context; (4) repeat until the model has enough information to produce a final answer. This interleaving prevents the model from hallucinating facts it could verify and makes its decision process transparent. ReAct agents outperform pure chain-of-thought on tasks requiring real-time data or multi-step computation."
        },
        {
          "id": "ai-workflows-101-l07-c2",
          "title": "Function Calling and Tool Use",
          "content": "Function calling lets the LLM invoke external tools by generating structured JSON rather than free text. You define a set of available functions with parameter schemas (name, type, description), the model decides which function to call and with what arguments, your application executes the function, and the result is returned to the model for interpretation. This pattern powers web search, database queries, code execution, API calls, and file operations. OpenAI, Anthropic, and open-source models all support function calling. Key design principles: keep tool descriptions concise, validate inputs before execution, implement timeouts, and never give tools write access to production systems without human approval."
        },
        {
          "id": "ai-workflows-101-l07-c3",
          "title": "Orchestration Frameworks",
          "content": "LangChain provides composable chains, agents, and memory modules for building multi-step LLM applications. Its LCEL (LangChain Expression Language) lets you pipe components together declaratively. LlamaIndex specializes in data indexing and retrieval — it excels at connecting LLMs to structured and unstructured data sources with sophisticated query engines. Both frameworks support tool use, RAG, and agent loops. For simpler use cases, direct API calls with custom orchestration offer more control and fewer abstractions. Choose based on complexity: direct API for single-step tasks, LlamaIndex for data-heavy retrieval, LangChain for multi-agent orchestration with branching logic."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-101-l07-f1",
          "front": "ReAct pattern",
          "back": "An agent loop of Thought → Action → Observation that interleaves reasoning with tool calls until the task is complete"
        },
        {
          "id": "ai-workflows-101-l07-f2",
          "front": "Function calling",
          "back": "The LLM generates structured JSON specifying a function name and arguments; the application executes the function and returns the result"
        },
        {
          "id": "ai-workflows-101-l07-f3",
          "front": "LangChain",
          "back": "A framework for composable chains, agents, and memory modules — specializes in multi-step LLM applications with branching logic"
        },
        {
          "id": "ai-workflows-101-l07-f4",
          "front": "LlamaIndex",
          "back": "A framework specializing in data indexing and retrieval — excels at connecting LLMs to structured and unstructured data sources"
        }
      ]
    },
    {
      "id": "ai-workflows-101-l08",
      "title": "Evaluation, Guardrails & Responsible AI Deployment",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Build evaluation rubrics that score factuality, relevance, safety, and format compliance",
        "Implement guardrails for hallucination detection, content filtering, and output validation",
        "Apply responsible AI practices including RLHF, red-teaming, and model cards"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l08-c1",
          "title": "Evaluation Frameworks",
          "content": "Evaluation in AI workflows goes beyond traditional accuracy metrics. For generative models, use multi-dimensional rubrics: Factuality — are claims verifiable against source material? Relevance — does the output address the query? Completeness — are all requested elements present? Safety — is the output free from harmful, biased, or private content? Format compliance — does the response follow the specified schema? Automated evaluation uses LLM-as-judge (a stronger model grades a weaker one), embedding similarity against reference answers, and rule-based checks (regex, JSON schema validation). Always maintain a golden test set of 50–100 curated examples with expected outputs."
        },
        {
          "id": "ai-workflows-101-l08-c2",
          "title": "Hallucination Detection and Guardrails",
          "content": "Hallucination occurs when the model generates plausible but factually incorrect claims. Detection strategies include: cross-referencing outputs against retrieved source documents (RAG faithfulness), asking a second model to fact-check the first (LLM-as-judge), and confidence calibration (flagging outputs where token probabilities are low). Guardrails are runtime filters that intercept unsafe or invalid outputs before they reach users. Examples: input guardrails block prompt injection attacks and PII leakage; output guardrails enforce JSON schema compliance, word limits, and content safety policies. Libraries like Guardrails AI and NeMo Guardrails provide declarative frameworks for implementing these checks."
        },
        {
          "id": "ai-workflows-101-l08-c3",
          "title": "RLHF, Red-Teaming, and Model Cards",
          "content": "Reinforcement Learning from Human Feedback (RLHF) trains a reward model on human preference data — raters rank multiple outputs by quality, and the LLM is fine-tuned to maximize the reward signal. This aligns model behavior with human values but requires careful rater selection and guideline design. Red-teaming is adversarial testing where a dedicated team tries to elicit harmful, biased, or policy-violating outputs through creative prompting. Findings feed back into safety training and guardrail design. Model cards document a model's intended use, training data, performance across subgroups, known limitations, and ethical considerations. Publishing a model card is a best practice for transparency and accountability — it lets downstream users make informed decisions about whether the model fits their use case."
        }
      ],
      "flashcards": [
        {
          "id": "ai-workflows-101-l08-f1",
          "front": "Hallucination (in AI)",
          "back": "When a model generates plausible but factually incorrect information — detected via source cross-referencing, LLM-as-judge, or confidence calibration"
        },
        {
          "id": "ai-workflows-101-l08-f2",
          "front": "RLHF (Reinforcement Learning from Human Feedback)",
          "back": "A training technique where human raters rank outputs by quality, a reward model learns from these preferences, and the LLM is fine-tuned to maximize the reward signal"
        },
        {
          "id": "ai-workflows-101-l08-f3",
          "front": "Red-teaming",
          "back": "Adversarial testing where a team tries to provoke harmful, biased, or policy-violating outputs to identify and fix safety gaps"
        },
        {
          "id": "ai-workflows-101-l08-f4",
          "front": "Model card",
          "back": "A document describing a model's intended use, training data, performance metrics, limitations, and ethical considerations — a transparency best practice"
        }
      ]
    },
    {
      "id": "ai-workflows-101-l09",
      "title": "Quiz 3: Agents & Responsible AI",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "ai-workflows-101-l09-q1",
          "text": "In the ReAct pattern, what immediately follows a 'Thought' step?",
          "skillId": "ai-workflows-101-skill-agents",
          "options": [
            {
              "id": "a",
              "text": "Final Answer"
            },
            {
              "id": "b",
              "text": "Action — the model calls a tool"
            },
            {
              "id": "c",
              "text": "Embedding the query into a vector"
            },
            {
              "id": "d",
              "text": "Retraining the model weights"
            }
          ],
          "correctOptionId": "b",
          "explanation": "ReAct alternates Thought → Action → Observation. After reasoning (Thought), the agent takes an Action by calling a tool."
        },
        {
          "id": "ai-workflows-101-l09-q2",
          "text": "What is the primary purpose of function calling in LLM applications?",
          "skillId": "ai-workflows-101-skill-agents",
          "options": [
            {
              "id": "a",
              "text": "To fine-tune the model's weights at inference time"
            },
            {
              "id": "b",
              "text": "To let the LLM invoke external tools by generating structured JSON"
            },
            {
              "id": "c",
              "text": "To compress the model for edge deployment"
            },
            {
              "id": "d",
              "text": "To increase temperature for more creative outputs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Function calling enables the LLM to invoke external tools by generating structured JSON with function names and arguments."
        },
        {
          "id": "ai-workflows-101-l09-q3",
          "text": "RLHF trains a reward model based on:",
          "skillId": "ai-workflows-101-skill-responsible",
          "options": [
            {
              "id": "a",
              "text": "Random gradient updates"
            },
            {
              "id": "b",
              "text": "Human preference rankings of model outputs"
            },
            {
              "id": "c",
              "text": "Automated web scraping results"
            },
            {
              "id": "d",
              "text": "Token frequency statistics from the training corpus"
            }
          ],
          "correctOptionId": "b",
          "explanation": "RLHF uses human raters who rank outputs by quality; these preference rankings train a reward model that guides LLM fine-tuning."
        },
        {
          "id": "ai-workflows-101-l09-q4",
          "text": "What is the purpose of a model card?",
          "skillId": "ai-workflows-101-skill-responsible",
          "options": [
            {
              "id": "a",
              "text": "To encrypt model weights for secure deployment"
            },
            {
              "id": "b",
              "text": "To document intended use, training data, limitations, and ethical considerations"
            },
            {
              "id": "c",
              "text": "To store embeddings in a vector database"
            },
            {
              "id": "d",
              "text": "To define the function calling schema"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A model card documents the model's intended use, training data, known limitations, and ethical considerations for transparency."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "ai-workflows-101-l10",
      "title": "Comprehensive Final: AI Workflows Mastery",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "ai-workflows-101-l10-q1",
          "text": "A team notices their LLM confidently states outdated facts. Which architectural pattern most directly addresses this?",
          "skillId": "ai-workflows-101-skill-rag",
          "options": [
            {
              "id": "a",
              "text": "Increasing temperature to 1.5"
            },
            {
              "id": "b",
              "text": "Retrieval-Augmented Generation (RAG) with up-to-date document sources"
            },
            {
              "id": "c",
              "text": "Switching from few-shot to zero-shot prompting"
            },
            {
              "id": "d",
              "text": "Adding more layers to the neural network"
            }
          ],
          "correctOptionId": "b",
          "explanation": "RAG grounds outputs in retrieved, up-to-date documents, directly addressing the problem of stale training data."
        },
        {
          "id": "ai-workflows-101-l10-q2",
          "text": "When building a semantic search pipeline, which component converts text into dense numerical vectors?",
          "skillId": "ai-workflows-101-skill-rag",
          "options": [
            {
              "id": "a",
              "text": "A tokenizer"
            },
            {
              "id": "b",
              "text": "An embedding model (e.g., sentence-transformers, OpenAI embeddings)"
            },
            {
              "id": "c",
              "text": "A SQL database"
            },
            {
              "id": "d",
              "text": "A load balancer"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Embedding models like sentence-transformers and OpenAI's text-embedding models convert text into dense vectors that capture semantic meaning."
        },
        {
          "id": "ai-workflows-101-l10-q3",
          "text": "You want deterministic, reproducible JSON output from an LLM API call. Which parameter configuration is most appropriate?",
          "skillId": "ai-workflows-101-skill-prompting",
          "options": [
            {
              "id": "a",
              "text": "temperature=0.0, JSON mode enabled"
            },
            {
              "id": "b",
              "text": "temperature=1.5, top_p=1.0"
            },
            {
              "id": "c",
              "text": "temperature=0.7, frequency_penalty=2.0"
            },
            {
              "id": "d",
              "text": "temperature=1.0, presence_penalty=2.0"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Temperature 0.0 produces deterministic outputs, and JSON mode enforces valid JSON structure — together they ensure reproducible structured output."
        },
        {
          "id": "ai-workflows-101-l10-q4",
          "text": "A red-team exercise reveals that the model leaks private training data when given a specific prompt pattern. What should be implemented?",
          "skillId": "ai-workflows-101-skill-responsible",
          "options": [
            {
              "id": "a",
              "text": "Input guardrails that detect and block the adversarial prompt pattern"
            },
            {
              "id": "b",
              "text": "Increasing the model's context window"
            },
            {
              "id": "c",
              "text": "Switching to a smaller model"
            },
            {
              "id": "d",
              "text": "Removing all system prompts"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Input guardrails intercept adversarial prompts before they reach the model, preventing known attack patterns from triggering data leakage."
        },
        {
          "id": "ai-workflows-101-l10-q5",
          "text": "Which chunking approach preserves sentence boundaries and meaning most effectively?",
          "skillId": "ai-workflows-101-skill-rag",
          "options": [
            {
              "id": "a",
              "text": "Fixed 100-character splits with no overlap"
            },
            {
              "id": "b",
              "text": "Semantic chunking using paragraph and sentence boundaries"
            },
            {
              "id": "c",
              "text": "Splitting on every whitespace character"
            },
            {
              "id": "d",
              "text": "Storing the entire document as a single chunk"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Semantic chunking respects natural text boundaries (paragraphs, sentences), preserving meaning and improving retrieval quality."
        },
        {
          "id": "ai-workflows-101-l10-q6",
          "text": "An engineering team needs a vector database that integrates with their existing PostgreSQL infrastructure. Which solution fits best?",
          "skillId": "ai-workflows-101-skill-rag",
          "options": [
            {
              "id": "a",
              "text": "Pinecone"
            },
            {
              "id": "b",
              "text": "Chroma"
            },
            {
              "id": "c",
              "text": "pgvector"
            },
            {
              "id": "d",
              "text": "Redis"
            }
          ],
          "correctOptionId": "c",
          "explanation": "pgvector is a PostgreSQL extension, making it the natural choice for teams that already use Postgres and want to avoid managing a separate database."
        },
        {
          "id": "ai-workflows-101-l10-q7",
          "text": "Which framework is specifically designed for data indexing and connecting LLMs to structured and unstructured data sources?",
          "skillId": "ai-workflows-101-skill-agents",
          "options": [
            {
              "id": "a",
              "text": "LangChain"
            },
            {
              "id": "b",
              "text": "LlamaIndex"
            },
            {
              "id": "c",
              "text": "Flask"
            },
            {
              "id": "d",
              "text": "TensorFlow"
            }
          ],
          "correctOptionId": "b",
          "explanation": "LlamaIndex specializes in data indexing and retrieval, connecting LLMs to diverse data sources with sophisticated query engines."
        },
        {
          "id": "ai-workflows-101-l10-q8",
          "text": "What is the recommended inter-annotator agreement threshold (Cohen's kappa) for high-quality data labeling?",
          "skillId": "ai-workflows-101-skill-data",
          "options": [
            {
              "id": "a",
              "text": "≥ 0.4"
            },
            {
              "id": "b",
              "text": "≥ 0.6"
            },
            {
              "id": "c",
              "text": "≥ 0.8"
            },
            {
              "id": "d",
              "text": "≥ 0.95"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A Cohen's kappa of ≥ 0.8 indicates strong inter-annotator agreement, which is the standard for high-quality labeled datasets."
        },
        {
          "id": "ai-workflows-101-l10-q9",
          "text": "In an LLM-as-judge evaluation, what role does the evaluator model play?",
          "skillId": "ai-workflows-101-skill-responsible",
          "options": [
            {
              "id": "a",
              "text": "It retrains the target model's weights"
            },
            {
              "id": "b",
              "text": "It scores or ranks the target model's outputs against quality criteria"
            },
            {
              "id": "c",
              "text": "It replaces the target model in production"
            },
            {
              "id": "d",
              "text": "It generates training data for supervised learning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "LLM-as-judge uses a stronger model to score or rank a target model's outputs against predefined quality criteria like factuality and relevance."
        },
        {
          "id": "ai-workflows-101-l10-q10",
          "text": "A data engineer spends 70% of project time on data cleaning. Is this unusual?",
          "skillId": "ai-workflows-101-skill-data",
          "options": [
            {
              "id": "a",
              "text": "Yes — data cleaning should take less than 10% of project time"
            },
            {
              "id": "b",
              "text": "No — spending 60–80% on data quality is the industry norm"
            },
            {
              "id": "c",
              "text": "Yes — all time should be spent on model architecture"
            },
            {
              "id": "d",
              "text": "No — but only because the data is especially messy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The industry rule of thumb is that 60–80% of an AI project's time goes to data quality. Clean, smaller data often outperforms noisy, larger data."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 10,
        "bloomProfile": {
          "remember": 2,
          "understand": 3,
          "apply": 3,
          "analyze": 2
        }
      }
    }
  ]
};
