import type { LearningModule } from "@/lib/modules/types";

export const ai_workflows_101_Module: LearningModule = {
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
  "version": "1.1.0",
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
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a glowing, futuristic assembly line representing an AI pipeline, with five distinct glowing stations, modern tech aesthetic, neon blue and purple lighting, shot on 35mm lens, cinematic lighting, 8k resolution, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video panning across a high-tech digital assembly line. Glowing data particles move smoothly through five distinct stages, transforming from raw code into a glowing, intelligent robotic brain. Smooth camera movement, neon blue and purple lighting, shallow depth of field.",
      "objectives": [
        "Identify the five core stages of a production AI workflow",
        "Distinguish between traditional ML pipelines and LLM-based workflows",
        "Explain why iteration loops and human oversight are essential at every stage"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l01-c1",
          "title": "The Five-Stage AI Pipeline",
          "content": "Building a successful AI system isn't just about writing code; it requires a well-defined process known as the AI pipeline. This pipeline consists of five essential stages. First is Problem Definition, where we clearly articulate the specific business question we want to address and define what success looks like. Next is Data Acquisition, which involves gathering the necessary data from various sources, cleaning it to eliminate errors, and labeling it so the AI can learn effectively. The third stage is Model Development, where we select algorithms, fine-tune models, or craft prompts for large language models (LLMs). After development comes Evaluation, where we rigorously assess the model's accuracy, fairness, speed, and cost against our initial benchmarks. Finally, we reach Deployment & Monitoring, making the model accessible via APIs while continuously tracking its performance. Why this matters: Understanding this pipeline helps you connect high-level ideas to the practical decisions you'll make when building and deploying models. It's a highly iterative process—if evaluation reveals issues, you simply loop back to data or development to refine your approach."
        },
        {
          "id": "ai-workflows-101-l01-c2",
          "title": "Traditional ML vs. LLM-Based Workflows",
          "content": "When creating AI systems, we generally choose between two primary approaches: traditional machine learning (ML) and large language models (LLMs). Traditional ML workflows rely heavily on a process called ETL (Extract, Transform, Load). You extract data, transform it into a usable format, and load it into a model for training using tools like scikit-learn or PyTorch. The biggest bottleneck here is the need for massive amounts of labeled data. In contrast, LLM-based workflows shift the focus away from training models from scratch. Instead, the bottleneck becomes crafting effective prompts and managing the context. You design system prompts to guide the model, provide a few examples, and retrieve relevant external information to ground the model's answers. Despite these differences, both approaches share the same overarching five-stage pipeline. Recognizing these distinctions allows you to choose the right tool for the job, balancing the need for custom data against the rapid deployment capabilities of LLMs."
        },
        {
          "id": "ai-workflows-101-l01-c3",
          "title": "Human-in-the-Loop and Iteration",
          "content": "In high-stakes fields like healthcare, finance, and education, AI shouldn't operate entirely on its own. This is where 'human-in-the-loop' (HITL) comes in. HITL is the practice of integrating human oversight at critical checkpoints. During evaluation, humans review outputs for nuance that automated tests might miss. During deployment, a model might be released in a 'shadow mode' or require manual approval before taking action. If the model's confidence drops, the system can automatically route the task to a human expert. It's vital to understand that AI development is never a straight line. You should expect to go through multiple cycles of testing and refining—often tweaking prompts or cleaning data three to five times before achieving production-ready quality. Embracing this iterative, human-guided approach ensures that your AI systems remain safe, reliable, and aligned with real-world needs."
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
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-101-l01.png"
    },
    {
      "id": "ai-workflows-101-l02",
      "title": "Data Collection, Cleaning & Labeling",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a digital sorting facility where glowing data blocks are being cleaned, organized, and labeled by sleek robotic arms, bright and clean lighting, 8k resolution, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video showing chaotic, floating data streams being pulled into a sleek, futuristic funnel. Inside the funnel, the data is scrubbed clean and neatly stacked into glowing, labeled cubes. Smooth slow-motion effect, high contrast, vibrant colors.",
      "objectives": [
        "Design a data collection strategy that balances coverage, cost, and quality",
        "Apply data cleaning techniques including deduplication, normalization, and outlier detection",
        "Compare labeling tools and workflows such as Label Studio and Prodigy"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l02-c1",
          "title": "Data Collection Strategies",
          "content": "An AI model is only as good as the data it learns from. To gather high-quality data, teams use several strategies. Web scraping involves extracting information from websites, though it requires strict adherence to rules like robots.txt. API ingestion pulls structured data directly from other software platforms. You can also leverage user-generated content, purchase datasets from vendors, or even generate 'synthetic data' using other AI models to simulate real-world scenarios. When collecting data, three factors are paramount: representativeness (does it reflect the real world?), freshness (is it up-to-date?), and legal compliance (does it adhere to privacy laws like GDPR or CCPA?). To keep track of all this, engineers use a 'data card'—a standardized document that acts like a nutrition label for your dataset, detailing its source, collection date, known biases, and intended use."
        },
        {
          "id": "ai-workflows-101-l02-c2",
          "title": "Cleaning and Preprocessing",
          "content": "Raw data is almost always messy. Before an AI can learn from it, it must go through a rigorous cleaning and preprocessing pipeline. This involves handling missing values by either estimating them (imputation) or removing them entirely. You must also hunt down and remove duplicate entries that could skew the model's learning. Normalization ensures that dates, currencies, and text encodings follow a consistent format across the board. For text data specifically, preprocessing includes tokenization (breaking text into smaller pieces), converting characters to lowercase, and stripping out messy HTML tags. A golden rule in AI engineering is to spend 60% to 80% of your project time on data quality. A smaller, impeccably clean dataset will almost always outperform a massive, noisy one."
        },
        {
          "id": "ai-workflows-101-l02-c3",
          "title": "Labeling Tools and Workflows",
          "content": "Labeling transforms raw data into the specific examples an AI needs to learn a task. Industry-standard tools make this process efficient. Label Studio is a popular open-source platform that lets teams customize interfaces for annotating text, images, audio, and video. Another powerful tool is Prodigy, which utilizes 'active learning.' Instead of humans doing all the work from scratch, the AI suggests a label, and the human simply corrects or approves it—a workflow that can speed up labeling by up to 10x. To ensure quality, teams measure 'inter-annotator agreement' using metrics like Cohen's kappa; a score of 0.8 or higher means your human labelers are consistently agreeing. In modern LLM workflows, labeling also includes gathering human preference data (ranking AI outputs from best to worst) to help fine-tune the model's behavior."
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
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-101-l02.png"
    },
    {
      "id": "ai-workflows-101-l03",
      "title": "Quiz 1: Data & Workflow Fundamentals",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a futuristic holographic quiz interface floating in a modern laboratory, displaying glowing checkmarks and data nodes, 8k resolution, cinematic lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video of a glowing holographic interface projecting a multiple-choice question. A digital cursor selects the correct answer, triggering a satisfying burst of green light and data particles. Shallow depth of field.",
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
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-101-l03.png"
    },
    {
      "id": "ai-workflows-101-l04",
      "title": "Prompt Engineering & LLM Integration",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a person typing on a glowing, transparent keyboard, with complex holographic text prompts and glowing nodes floating above the screen, cyberpunk aesthetic, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video of a user typing a prompt into a futuristic console. As they type, glowing text expands into a complex web of interconnected thoughts and logical steps, illuminating the dark room with warm amber light.",
      "objectives": [
        "Apply zero-shot, few-shot, and chain-of-thought prompting strategies",
        "Configure LLM parameters including temperature, top-p, and max tokens for different use cases",
        "Design system prompts that enforce output structure, tone, and safety constraints"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l04-c1",
          "title": "Zero-Shot, Few-Shot, and Chain-of-Thought",
          "content": "Prompt engineering is the art of communicating effectively with an AI. The simplest method is 'zero-shot prompting,' where you ask the model to perform a task without providing any examples, relying entirely on its pre-trained knowledge. If the task is more complex or requires a specific format, you upgrade to 'few-shot prompting.' By providing 2 to 5 examples of the desired input and output, you drastically improve the model's accuracy. For the most complex logical or mathematical tasks, we use 'chain-of-thought' (CoT) prompting. This technique forces the model to break down its reasoning step-by-step before arriving at an answer. Simply adding the phrase 'Let's think step by step' or providing an example that shows the reasoning process can boost a model's accuracy by 20% to 40% on difficult problems."
        },
        {
          "id": "ai-workflows-101-l04-c2",
          "title": "Temperature, Top-p, and Sampling Parameters",
          "content": "Beyond the text of your prompt, you can control an LLM's behavior using specific parameters. The most important is 'temperature,' which controls randomness. A temperature of 0.0 makes the model deterministic and highly predictable—perfect for coding, data extraction, or factual Q&A. Raising the temperature to 1.0 or higher makes the output more creative and varied, which is ideal for brainstorming or creative writing. Another parameter is 'top-p' (nucleus sampling), which restricts the model's vocabulary choices to only the most probable words that add up to a certain threshold. As a best practice, you should adjust either temperature or top-p, but rarely both at the same time. You can also set 'max tokens' to limit the length of the response, and use frequency penalties to prevent the model from repeating the same words."
        },
        {
          "id": "ai-workflows-101-l04-c3",
          "title": "System Prompts and Output Structuring",
          "content": "A system prompt acts as the foundational rulebook for an LLM. It is sent behind the scenes before the user even types a message. A robust system prompt includes four key elements: a clear role definition (e.g., 'You are a senior Python developer'), behavioral constraints ('Never use deprecated libraries'), an output schema ('Respond only in valid JSON format'), and safety rails ('If you do not know the answer, state that you are unsure'). Enforcing an output structure, like JSON, is critical when building applications because it allows your traditional code to easily parse and use the AI's response. Just like traditional software, prompts should be version-controlled. A slight tweak to a system prompt can drastically alter the model's performance, so tracking these changes is essential for maintaining a stable AI workflow."
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
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-101-l04.png"
    },
    {
      "id": "ai-workflows-101-l05",
      "title": "Retrieval-Augmented Generation (RAG) & Vector Databases",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a massive, futuristic library where books are replaced by glowing geometric vectors and data chunks, connected by beams of light, 8k resolution, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video flying through a vast, 3D grid of glowing data points representing a vector database. A beam of light shoots through the grid, instantly retrieving specific glowing cubes and assembling them into a coherent structure.",
      "objectives": [
        "Explain how RAG pipelines ground LLM outputs in external knowledge",
        "Compare embedding models and vector databases including Pinecone, Chroma, and pgvector",
        "Design chunking strategies that balance retrieval precision and context completeness"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l05-c1",
          "title": "The RAG Architecture",
          "content": "Retrieval-Augmented Generation (RAG) is a breakthrough architecture that solves one of the biggest problems with LLMs: their tendency to confidently invent false information (hallucinate) or rely on outdated training data. RAG works by combining a 'retriever' and a 'generator.' When a user asks a question, the system first converts that question into a mathematical format. It then searches a specialized database to retrieve the most relevant, up-to-date document chunks related to the query. Finally, it feeds both the user's question and the retrieved documents to the LLM. The LLM acts as a synthesizer, reading the provided documents and generating an accurate answer grounded in real evidence. This pipeline ensures that your AI application can answer questions about private company data or recent events without needing to be retrained."
        },
        {
          "id": "ai-workflows-101-l05-c2",
          "title": "Embeddings and Vector Databases",
          "content": "To make RAG work, we need a way for computers to understand the 'meaning' of text. We do this using 'embeddings'—models that translate text into long lists of numbers (vectors). In this mathematical space, sentences with similar meanings are placed close together. Popular embedding models include OpenAI's text-embedding-3 and open-source options like sentence-transformers. Once text is converted into vectors, it is stored in a Vector Database. Pinecone is a popular fully managed service that scales automatically. Chroma is a lightweight, open-source option perfect for local prototyping. If your team already uses PostgreSQL, the pgvector extension allows you to store and search vectors right alongside your traditional relational data. Choosing the right database depends on your scale, budget, and existing infrastructure."
        },
        {
          "id": "ai-workflows-101-l05-c3",
          "title": "Chunking Strategies",
          "content": "You can't feed an entire 500-page manual into an LLM all at once; you have to break it down into smaller pieces called 'chunks.' The simplest method is fixed-size chunking (e.g., 512 tokens per chunk with a 50-token overlap), but this can awkwardly cut sentences in half. A better approach is semantic chunking, which respects natural boundaries like the ends of sentences or paragraphs, preserving the actual meaning of the text. Recursive chunking takes this further by trying to split by paragraphs first, then sentences, then words if necessary. The size of your chunks is a balancing act: smaller chunks provide highly precise search results, while larger chunks give the LLM more context to understand the broader topic. Adding metadata to these chunks—like the source URL or page number—is crucial so the AI can cite its sources in the final answer."
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
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a sleek, modern testing terminal with a glowing blue screen displaying AI prompt structures and vector graphs, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video of a futuristic digital lock clicking into place as the correct answers to a test are inputted. Glowing blue energy pulses through the circuitry, signifying success.",
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
      },
      "imageUrl": "/generated-images/refinery/ai-workflows-101-l06.png"
    },
    {
      "id": "ai-workflows-101-l07",
      "title": "AI Agents, Tool Use & Orchestration",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a robotic hand holding a glowing, multi-tool device, surrounded by floating holographic icons representing search, math, and code, 8k resolution, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video of an AI agent represented as a glowing orb of light. The orb pauses to 'think', then extends digital tendrils to interact with floating holographic tools—a calculator, a web browser, and a database—before synthesizing a glowing core of knowledge.",
      "objectives": [
        "Describe the ReAct pattern and how agents interleave reasoning with action",
        "Explain function calling and how LLMs invoke external tools via structured output",
        "Compare orchestration frameworks including LangChain and LlamaIndex"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l07-c1",
          "title": "The ReAct Pattern",
          "content": "While standard LLMs just generate text, AI 'agents' can actually get things done. They achieve this using the ReAct (Reasoning and Acting) pattern. Instead of guessing an answer immediately, a ReAct agent operates in a loop. First, it generates a 'Thought' (e.g., 'I need to find the current stock price of Apple'). Next, it takes an 'Action' by using a tool (e.g., querying a financial API). Then, it receives an 'Observation' (the API returns the price). The agent evaluates this observation and decides if it has enough information to provide a final answer, or if it needs to loop back and take another action. This iterative process allows AI to solve complex, multi-step problems, verify facts in real-time, and drastically reduce hallucinations by relying on external tools rather than internal memory."
        },
        {
          "id": "ai-workflows-101-l07-c2",
          "title": "Function Calling and Tool Use",
          "content": "How exactly does an AI 'use a tool'? The magic lies in a feature called Function Calling. Developers provide the LLM with a list of available functions, detailing their names, descriptions, and the exact data format they require. When the LLM decides it needs to use a tool, instead of generating conversational text, it outputs a perfectly structured JSON object containing the function name and the necessary arguments. Your application code intercepts this JSON, executes the actual code (like searching the web or running a database query), and feeds the result back to the LLM. It is critical to implement safety measures here: always validate the AI's inputs, set strict timeouts, and never give an AI unrestricted 'write' access to production databases without a human approving the action first."
        },
        {
          "id": "ai-workflows-101-l07-c3",
          "title": "Orchestration Frameworks",
          "content": "Building these complex agent loops from scratch can be tedious, which is why developers use orchestration frameworks. LangChain is the most popular framework for building complex workflows. It allows you to snap together different components—like memory modules, tools, and LLMs—into logical 'chains' using its expressive LangChain Expression Language (LCEL). LlamaIndex, on the other hand, is a framework specifically optimized for data ingestion and retrieval, making it the go-to choice for building advanced RAG pipelines. While these frameworks speed up development, they add a layer of abstraction. For simpler applications, many developers prefer writing direct API calls to maintain full control and visibility over their code. Choosing the right framework depends entirely on the complexity of the AI workflow you are trying to build."
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
      ],
      "learningAids": [
        {
          "id": "ai-workflows-101-l07-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the ReAct pattern and tool orchestration."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-101-l07.png"
    },
    {
      "id": "ai-workflows-101-l08",
      "title": "Evaluation, Guardrails & Responsible AI Deployment",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a futuristic security checkpoint for data, with glowing red and green laser scanners evaluating streams of code for safety and accuracy, 8k resolution, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video of a stream of data passing through a high-tech digital filter. Unsafe or incorrect data particles are instantly vaporized by red lasers, while clean, verified data passes through a green glowing shield. Dynamic lighting.",
      "objectives": [
        "Build evaluation rubrics that score factuality, relevance, safety, and format compliance",
        "Implement guardrails for hallucination detection, content filtering, and output validation",
        "Apply responsible AI practices including RLHF, red-teaming, and model cards"
      ],
      "chunks": [
        {
          "id": "ai-workflows-101-l08-c1",
          "title": "Evaluation Frameworks",
          "content": "Evaluating an AI model is much harder than grading a math test because language is subjective. To do this effectively, engineers build evaluation rubrics based on specific criteria. 'Factuality' checks if the AI's claims are true and grounded in reliable sources. 'Relevance' ensures the model actually answered the user's specific question. 'Completeness' verifies that no requested details were left out. 'Safety' ensures the output is free from bias, toxicity, or private data leaks. Finally, 'Format compliance' checks if the model followed structural rules, like outputting valid JSON. Because manually grading thousands of responses is impossible, teams use an approach called 'LLM-as-a-judge.' This involves using a highly capable model (like GPT-4) to automatically score the outputs of a smaller, faster model against these exact criteria, using a golden dataset of 50 to 100 verified examples as a benchmark."
        },
        {
          "id": "ai-workflows-101-l08-c2",
          "title": "Hallucination Detection and Guardrails",
          "content": "Even the best models occasionally 'hallucinate'—generating plausible but entirely false information. To protect users, we implement 'guardrails,' which act as automated security checkpoints. Input guardrails scan the user's prompt before it reaches the AI, blocking malicious attempts to hack the model (prompt injection) or requests for inappropriate content. Output guardrails scan the AI's response before showing it to the user. They can cross-reference the AI's claims against trusted documents to ensure RAG faithfulness, check the model's internal confidence scores, and verify that the output doesn't contain sensitive data like credit card numbers. Frameworks like NeMo Guardrails or Guardrails AI make it easy to implement these protective layers, ensuring that if the AI makes a mistake, the system catches it before the user ever sees it."
        },
        {
          "id": "ai-workflows-101-l08-c3",
          "title": "RLHF, Red-Teaming, and Model Cards",
          "content": "Deploying AI responsibly requires rigorous testing and transparency. One of the most powerful alignment techniques is RLHF (Reinforcement Learning from Human Feedback). Here, human testers rank different AI responses, and the model is fine-tuned to favor the types of answers humans prefer, making it more helpful and polite. Before launch, security teams engage in 'red-teaming'—acting as adversaries who intentionally try to break the AI by feeding it tricky, biased, or harmful prompts to expose vulnerabilities. Finally, when a model is released, responsible organizations publish a 'Model Card.' Think of this as a spec sheet that transparently documents what data the model was trained on, its intended use cases, its known limitations, and its performance across different demographic groups. This transparency is vital for building public trust in AI systems."
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
      ],
      "learningAids": [
        {
          "id": "ai-workflows-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning for implementing guardrails."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-101-l08.png"
    },
    {
      "id": "ai-workflows-101-l09",
      "title": "Quiz 3: Agents & Responsible AI",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a glowing digital shield with a checkmark in the center, surrounded by floating data nodes and security locks, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video of a holographic shield being tested by various digital projectiles. The shield successfully deflects the harmful ones and absorbs the helpful ones, glowing brighter with each successful defense.",
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
      },
      "learningAids": [
        {
          "id": "ai-workflows-101-l09-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Remember RLHF: Rank, Learn, Human, Feedback."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-101-l09.png"
    },
    {
      "id": "ai-workflows-101-l10",
      "title": "Comprehensive Final: AI Workflows Mastery",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A photorealistic image of a grand, futuristic control room with a massive holographic globe in the center, displaying a fully optimized and deployed AI workflow, 8k resolution, highly detailed.",
      "conceptVideoPrompt": "Veo 3.1 prompt: Cinematic 4k video zooming out from a single glowing data point to reveal a massive, interconnected global network of AI workflows. The network pulses with golden light, representing mastery and successful deployment. Epic, sweeping camera movement.",
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
      },
      "learningAids": [
        {
          "id": "ai-workflows-101-l10-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the complete AI Workflow."
        }
      ],
      "imageUrl": "/generated-images/refinery/ai-workflows-101-l10.png"
    }
  ]
};
