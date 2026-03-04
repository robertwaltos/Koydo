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
          "content": "In the fascinating field of artificial intelligence, developing a successful AI system requires following a well-defined process known as the AI pipeline. This pipeline is made up of five essential stages, each of which can be revisited and refined as necessary to ensure the best outcomes. The first stage is called Problem Definition. Here, we take the time to clearly articulate the specific business question we want to address, as well as the criteria we will use to determine whether we have achieved success. This step is crucial because it sets the foundation for the entire project.\nNext, we move on to the second stage: Data Acquisition. This involves gathering the data we need, which may come from various sources. Once we have collected this data, we must clean it to eliminate any errors or inconsistencies. Additionally, we label the data appropriately so that the AI can learn from it effectively. This stage is vital because the quality of our data directly impacts the performance of our AI model.\nThe third stage is Model Development. In this phase, we select the most suitable algorithms and techniques to train our AI model. This may include fine-tuning the model for specific tasks or using advanced methods like prompt engineering for large language models (LLMs).\nAfter developing our model, we enter the Evaluation stage. Here, we rigorously assess how well our model performs by measuring its accuracy, fairness, speed, and cost against the benchmarks we established earlier. This evaluation helps us understand if our model is ready for deployment or if it requires further adjustments.\nFinally, we reach the Deployment & Monitoring stage. In this phase, we make our model accessible for use through application programming interfaces (APIs). We also continuously monitor its performance to ensure it operates as expected and make any necessary adjustments. It is important to remember that each stage of the AI pipeline is interconnected. If we encounter issues during evaluation, we may need to revisit earlier stages, such as data acquisition or model development, to enhance our results. This iterative process is key to building effective AI systems.\nContext recap: In the fascinating field of artificial intelligence, developing a successful AI system requires following a well-defined process known as the AI pipeline. This pipeline is made up of five essential stages, each of which can be revisited and refined as necessary to ensure the best outcomes. The first stage is called Problem Definition. Here, we take the time to clearly articulate the specific business question we want to address, as well as the criteria we will use to determine whether we have achieved success.\nWhy this matters: The Five-Stage AI Pipeline helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-workflows-101-l01-c2",
          "title": "Traditional ML vs. LLM-Based Workflows",
          "content": "When we explore the different ways to create AI systems, we can identify two primary approaches: traditional machine learning (ML) workflows and those that utilize large language models (LLMs). Traditional ML workflows are built around a process known as ETL, which stands for Extract, Transform, Load. This process involves three key steps: first, we extract data from various sources; next, we transform this data to make it suitable for our needs; and finally, we load it into a model for training. We often use popular tools like scikit-learn or PyTorch to help with this training. However, one significant challenge we face in traditional ML is the need for labeled data, which is essential for teaching our models how to make accurate predictions.\nIn contrast, LLM-based workflows change the focus from labeling data to crafting effective prompts and managing the context in which the model operates. Instead of starting from the ground up, we can design system prompts that guide the model's responses, provide a few examples to illustrate what we want, and improve the model's performance by retrieving relevant information from external sources.\nDespite these differences in approach, both traditional ML and LLM workflows share a common framework. This framework includes several key steps: defining the problem we want to solve, building the model, evaluating how well it performs, deploying it for use, and continuously monitoring its effectiveness. By understanding this shared structure, we can make informed decisions about which method to use for different types of problems, ensuring we choose the best approach for each unique situation.\nContext recap: When we explore the different ways to create AI systems, we can identify two primary approaches: traditional machine learning (ML) workflows and those that utilize large language models (LLMs). Traditional ML workflows are built around a process known as ETL, which stands for Extract, Transform, Load. This process involves three key steps: first, we extract data from various sources; next, we transform this data to make it suitable for our needs; and finally, we load it into a model for training. We often use popular tools like scikit-learn or PyTorch to help with this training.\nWhy this matters: Traditional ML vs. LLM-Based Workflows helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ai-workflows-101-l01-c3",
          "title": "Human-in-the-Loop and Iteration",
          "content": "In the development of AI systems, especially in important fields like healthcare, finance, and education, it is crucial to have human involvement at every stage. This practice is referred to as 'human-in-the-loop' (HITL). There are several key moments in the process where human oversight is particularly important. First, during the evaluation phase, we carefully review the outputs generated by the AI model before they are finalized. This ensures that the results are accurate and reliable. Next, during deployment, we may conduct limited releases of the model, which require manual approval to ensure everything is functioning as intended. Finally, during the monitoring phase, we have established procedures to address any potential issues that may arise, especially if the model's confidence levels drop. It's essential to understand that revisiting and improving our work is not a sign of failure; instead, it is a natural and necessary part of the design process. Typically, we should expect to go through three to five cycles of testing and refining our prompts before achieving a quality level that is suitable for production. Furthermore, we should always plan for continuous improvements even after the model is deployed, ensuring that it remains effective and reliable over time.\nContext recap: In the development of AI systems, especially in important fields like healthcare, finance, and education, it is crucial to have human involvement at every stage. This practice is referred to as 'human-in-the-loop' (HITL). There are several key moments in the process where human oversight is particularly important. First, during the evaluation phase, we carefully review the outputs generated by the AI model before they are finalized.\nWhy this matters: Human-in-the-Loop and Iteration helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "The quality of data is extremely important for the success of any artificial intelligence (AI) system. To gather this data effectively, there are several strategies that we can employ. One common method is called web scraping. This involves collecting information from websites while making sure to follow their rules, such as those outlined in a file called robots.txt, which tells us what we can and cannot scrape. Another approach is known as API ingestion, where we pull data from other software applications that provide data through an Application Programming Interface (API). Additionally, we can utilize user-generated content, which is data created by users, or we can create synthetic data, which is artificially generated data that mimics real-world data. Collaborating with data vendors is another way to obtain the necessary information. When we collect data, it’s essential to consider several important factors. First is representativeness, which means ensuring that the data accurately reflects the population we are studying. Next is freshness, which refers to how quickly the data can become outdated. Lastly, we must ensure legal compliance, which involves following regulations like the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). To keep track of our data sources and their characteristics, we can create a data card. This card documents where the data came from, when it was collected, any known biases, and how we plan to use it. Think of this data card as a nutrition label that helps us understand the quality and suitability of our datasets, ensuring we use the best data possible for our AI projects.\nContext recap: The quality of data is extremely important for the success of any artificial intelligence (AI) system. To gather this data effectively, there are several strategies that we can employ. One common method is called web scraping. This involves collecting information from websites while making sure to follow their rules, such as those outlined in a file called robots.txt, which tells us what we can and cannot scrape.\nWhy this matters: Data Collection Strategies helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-workflows-101-l02-c2",
          "title": "Cleaning and Preprocessing",
          "content": "When we gather data for our projects, it often comes in a raw and unorganized state. This is why it is essential to clean and preprocess the data before we can use it effectively for training artificial intelligence models. Cleaning pipelines are tools that help us address various problems with the data. For instance, we might encounter missing values, which we can fix by either filling them in with appropriate estimates (a process called imputation) or by removing them entirely (known as deletion). Another common issue is duplicate entries, which can be exact copies or similar ones that need to be identified and eliminated.\nNormalizing formats is also a crucial step in the cleaning process. This means we ensure that all dates, currencies, and text encodings are consistent throughout the dataset. Additionally, we need to identify outliers—these are data points that are significantly different from the majority of the data.\nWhen it comes to text data, preprocessing involves several steps. We break the text into smaller parts, a process called tokenization, convert all characters to lowercase to maintain uniformity, remove unnecessary HTML tags, and address any special character issues that may arise. For image data, we might need to resize the images, normalize their colors, and apply techniques to enhance their quality.\nA helpful guideline is to spend about 60 to 80 percent of our project time focusing on data quality. This is because models that are trained on clean and well-organized data usually perform much better than those trained on messy or disorganized data. By prioritizing data quality, we set ourselves up for success in our AI projects.\nContext recap: When we gather data for our projects, it often comes in a raw and unorganized state. This is why it is essential to clean and preprocess the data before we can use it effectively for training artificial intelligence models. Cleaning pipelines are tools that help us address various problems with the data. For instance, we might encounter missing values, which we can fix by either filling them in with appropriate estimates (a process called imputation) or by removing them entirely (known as deletion).\nWhy this matters: Cleaning and Preprocessing helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ai-workflows-101-l02-c3",
          "title": "Labeling Tools and Workflows",
          "content": "Labeling is an essential process that helps turn raw data into examples that our AI models can learn from effectively. One of the most widely used tools for this task is Label Studio. This is an open-source platform that allows users to annotate various types of data, including text, images, audio, and video. What makes Label Studio special is that it offers customizable interfaces, meaning users can tailor the tool to fit their specific needs and preferences. Another powerful tool in the field is Prodigy, which was created by a company called Explosion AI. Prodigy employs a method known as active learning. In this method, the AI model proposes labels for the data, and then human annotators review these suggestions and make corrections as needed. This collaborative approach can speed up the labeling process significantly, sometimes by as much as ten times! To ensure that the labeling is done accurately and consistently, it is crucial to establish clear guidelines for annotators to follow. Additionally, measuring how much different annotators agree on their labels is important; one common metric for this is called Cohen's kappa, where a score of 0.8 or higher indicates strong agreement. Including test questions within the labeling tasks can also help assess how well the annotators are performing. Regular calibration sessions, where annotators come together to discuss and align their understanding, can further enhance consistency in labeling. In workflows that involve large language models, labeling can also include gathering preference data for a technique called Reinforcement Learning from Human Feedback (RLHF). In this case, human raters evaluate and rank the quality of the outputs generated by the model, ensuring that the AI learns from high-quality examples.\nContext recap: Labeling is an essential process that helps turn raw data into examples that our AI models can learn from effectively. One of the most widely used tools for this task is Label Studio. This is an open-source platform that allows users to annotate various types of data, including text, images, audio, and video. What makes Label Studio special is that it offers customizable interfaces, meaning users can tailor the tool to fit their specific needs and preferences.\nWhy this matters: Labeling Tools and Workflows helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "When we interact with large language models, we can use various techniques to help guide their responses effectively. One of these techniques is called zero-shot prompting. In this method, we ask the model to perform a task without giving it any examples to follow. This means that the model has to rely entirely on the knowledge it has learned during its training. For example, if we say, 'Classify the sentiment of this review: …', we expect the model to understand what we want it to do based on its previous learning.\nAnother useful technique is called few-shot prompting. In this approach, we provide the model with 2 to 5 examples of input and output before we ask it to complete the actual task. This can significantly improve the model's accuracy, especially for structured tasks like extracting specific information or converting formats. By seeing examples, the model can better understand what is expected of it.\nLastly, we have chain-of-thought (CoT) prompting. This technique encourages the model to think through the problem step by step. We can enhance this process by adding instructions like 'Let's think step by step' or by providing examples that illustrate the reasoning process. This method is particularly effective for complex tasks, such as solving math problems or logical reasoning challenges. Research shows that using CoT prompting can improve the model's accuracy by 20 to 40 percent on these types of tasks. By encouraging the model to articulate its thought process, we can achieve better and more reliable outcomes in its responses.\nContext recap: When we interact with large language models, we can use various techniques to help guide their responses effectively. One of these techniques is called zero-shot prompting. In this method, we ask the model to perform a task without giving it any examples to follow. This means that the model has to rely entirely on the knowledge it has learned during its training.\nWhy this matters: Zero-Shot, Few-Shot, and Chain-of-Thought helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-workflows-101-l04-c2",
          "title": "Temperature, Top-p, and Sampling Parameters",
          "content": "When we work with large language models, there are several important settings, or parameters, that can shape how the model creates its responses. One key parameter is called temperature. This setting controls how much randomness is involved in the model's outputs. If we set the temperature to 0.0, the model will produce very consistent and predictable results. This is particularly useful for tasks that require accuracy, such as classifying information or generating code. On the other hand, if we increase the temperature to a range between 1.0 and 1.5, the model becomes more creative and generates a wider variety of outputs. This can be especially helpful when we are brainstorming ideas or writing stories.\nAnother crucial parameter is known as top-p, or nucleus sampling. This setting establishes a threshold for cumulative probability. For instance, if we set top_p to 0.9, the model will only select from the smallest group of words (or tokens) whose probabilities add up to 0.9. This means that less likely options are ignored, allowing the model to focus on more probable choices.\nWhen we adjust these parameters, it's best to change either the temperature or the top-p setting, but not both at the same time, as this can lead to unpredictable results. Additionally, we have a setting called max tokens, which limits how long the model's responses can be. There are also frequency and presence penalties, which help to reduce repetition in the model's outputs and encourage a wider range of topics.\nTo keep track of the settings we choose, it's a good idea to document them on a prompt card, which we can keep alongside the prompt text itself. This practice helps us understand how different settings affect the model's responses and can improve our future interactions with it.\nContext recap: When we work with large language models, there are several important settings, or parameters, that can shape how the model creates its responses. One key parameter is called temperature. This setting controls how much randomness is involved in the model's outputs. If we set the temperature to 0.0, the model will produce very consistent and predictable results.\nWhy this matters: Temperature, Top-p, and Sampling Parameters helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-workflows-101-l04-c3",
          "title": "System Prompts and Output Structuring",
          "content": "A system prompt is an essential tool that helps shape how a large language model (LLM) behaves and what kind of responses it generates. Before a user sends their message, the system prompt establishes the model's role, the rules it must follow, and the format of its replies. To create effective system prompts, we typically include several important elements. First, we need a clear role definition, such as 'You are a medical coding assistant.' This tells the model what its job is and sets the context for its responses. Second, we incorporate behavioral constraints, like 'Never provide diagnoses; only suggest ICD-10 codes.' This guides the model to respond appropriately and within safe boundaries. Third, we define the output schema, which is the structure we want the model's responses to follow. For example, we might say, 'Respond with valid JSON: {code, description, confidence}.' This ensures that the output is organized and easy to understand. Lastly, we add safety rails, instructing the model to express uncertainty when it is unsure about something. This is crucial for maintaining trust and safety in interactions. For applications that use production APIs, it's important to enforce this output structure, often using JSON format or function calling to ensure consistency. Additionally, we should keep track of different versions of our prompts alongside our application code. Just like code changes can affect performance, changes to prompts can also impact how well the model performs its tasks. By managing both carefully, we can create a more reliable and effective AI system.\nContext recap: A system prompt is an essential tool that helps shape how a large language model (LLM) behaves and what kind of responses it generates. Before a user sends their message, the system prompt establishes the model's role, the rules it must follow, and the format of its replies. To create effective system prompts, we typically include several important elements. First, we need a clear role definition, such as 'You are a medical coding assistant.' This tells the model what its job is and sets the context for its responses.\nWhy this matters: System Prompts and Output Structuring helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "Retrieval-Augmented Generation, commonly known as RAG, is a cutting-edge method that merges two essential components: a retriever and a generator. Let’s break it down step by step! When someone asks a question, the first thing the system does is convert that question into a vector. A vector is a special kind of numerical representation that helps the system understand the question better. After this conversion, the retriever gets to work. It searches through a vector database, which is like a library of information, to find the most relevant document chunks that relate to the question asked. These chunks are snippets of information that can help answer the question accurately. Once the retriever finds these chunks, they are added to the context that the large language model (LLM) uses to generate its answer. This is a crucial step because it allows the model to provide responses that not only make sense but also reference the sources from which the information was drawn. This referencing is important as it helps ensure that the information is both accurate and up-to-date. One of the significant advantages of using RAG is that it helps reduce the chances of the model producing incorrect or misleading information, a phenomenon often referred to as 'hallucination.' In a typical RAG pipeline, there are several important steps involved: First, we have ingestion, where we break down larger documents into smaller, manageable chunks and convert them into vectors. Next comes indexing, where we organize these vectors in a database for easy access. After that is retrieval, where we search for similar chunks and rank them based on relevance. Finally, we reach the generation stage, where the LLM creates a response using the augmented context provided by the retrieved chunks. This entire process makes RAG a powerful tool for generating accurate and reliable information.\nContext recap: Retrieval-Augmented Generation, commonly known as RAG, is a cutting-edge method that merges two essential components: a retriever and a generator. Let’s break it down step by step! When someone asks a question, the first thing the system does is convert that question into a vector. A vector is a special kind of numerical representation that helps the system understand the question better.\nWhy this matters: The RAG Architecture helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-workflows-101-l05-c2",
          "title": "Embeddings and Vector Databases",
          "content": "Embeddings are an exciting and important concept in the field of artificial intelligence (AI). They allow us to transform text into numerical vectors, which are essentially lists of numbers that represent the meaning of the text. This transformation is significant because it means that similar pieces of text will be represented by points that are located close to each other in a special space called vector space. This is similar to how we might think of words that have similar meanings being grouped together.\nThere are several popular models that we can use to create these embeddings. One well-known model is OpenAI's text-embedding-3-small, which has 1536 dimensions and is designed for general use, making it versatile for various applications. Another option is sentence-transformers, which are open-source and can be customized to fit specific needs. Additionally, we have Cohere Embed, which is particularly useful because it supports multiple languages, making it a great choice for projects that require multilingual capabilities.\nTo manage and efficiently search through these embeddings, we utilize vector databases. For instance, Pinecone is a managed service that automatically scales to meet the needs of your project and allows for filtering based on metadata, which can help in organizing and retrieving information more effectively. On the other hand, Chroma is an open-source option that is user-friendly and ideal for creating prototypes locally. Lastly, pgvector is a tool that enhances PostgreSQL by adding vector search capabilities, making it an excellent choice if you are already using PostgreSQL for your database needs.\nWhen deciding which vector database to use, it’s important to consider factors such as the scale of your project, your budget, and the infrastructure you already have in place. Each option has its strengths, and the best choice will depend on your specific requirements and goals.\nContext recap: Embeddings are an exciting and important concept in the field of artificial intelligence (AI). They allow us to transform text into numerical vectors, which are essentially lists of numbers that represent the meaning of the text. This transformation is significant because it means that similar pieces of text will be represented by points that are located close to each other in a special space called vector space. This is similar to how we might think of words that have similar meanings being grouped together.\nWhy this matters: Embeddings and Vector Databases helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-workflows-101-l05-c3",
          "title": "Chunking Strategies",
          "content": "The way we divide documents into smaller pieces, known as chunks, plays a crucial role in how effectively we can retrieve information later on. One popular method for chunking is called fixed-size chunking. In this approach, we create chunks of a specific size, such as 512 tokens, and include some overlap, like 50 tokens, to ensure that the information flows smoothly from one chunk to the next. However, a downside to this method is that it can sometimes cut off sentences in awkward places, making it harder to understand the content.\nAnother method is called semantic chunking. This technique respects the natural boundaries of sentences or paragraphs, which helps to preserve the meaning of the text. By keeping the chunks aligned with these boundaries, we can ensure that the information remains coherent and easier to comprehend.\nThere is also a technique known as recursive chunking. This method takes the idea of semantic chunking a step further by breaking down paragraphs into sentences and then into individual characters in a hierarchical manner. This allows for a more detailed approach to chunking, which can be beneficial in certain contexts.\nAdditionally, we can use a sliding window technique. This method overlaps chunks to maintain context at the edges, ensuring that important information is not lost when transitioning from one chunk to another.\nWhen it comes to best practices for chunking, it is generally recommended to keep chunks between 256 and 1024 tokens in size. It’s also important to add metadata to each chunk, such as the source, page number, and section title, to help with organization and retrieval. Furthermore, testing the retrieval quality using a set of question-answer pairs can provide valuable insights into how well our chunking strategy is working. Smaller chunks can enhance precision, while larger chunks offer more context, so it’s essential to find the right balance based on empirical testing and specific needs.\nContext recap: The way we divide documents into smaller pieces, known as chunks, plays a crucial role in how effectively we can retrieve information later on. One popular method for chunking is called fixed-size chunking. In this approach, we create chunks of a specific size, such as 512 tokens, and include some overlap, like 50 tokens, to ensure that the information flows smoothly from one chunk to the next. However, a downside to this method is that it can sometimes cut off sentences in awkward places, making it harder to understand the content.\nWhy this matters: Chunking Strategies helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "The ReAct pattern, which stands for Reasoning and Acting, is an innovative approach used by AI agents to enhance their problem-solving abilities. This method operates in a continuous loop that consists of several important steps. First, the AI engages in a process of thought, where it carefully considers what information it needs to solve a particular problem. This step is crucial because it sets the stage for the actions that will follow. Next, the AI takes action by utilizing various tools at its disposal, such as search engines, calculators, or application programming interfaces (APIs). These tools help the AI gather the necessary data to inform its decisions. After the action is taken, the AI observes the results produced by these tools. This observation is vital as it allows the AI to integrate new information back into its understanding of the problem. The loop then repeats, with the AI continuing to think, act, and observe until it has collected enough information to formulate a final answer. This iterative process is beneficial because it helps prevent the AI from generating incorrect or misleading information, often referred to as 'hallucinations.' By verifying facts through its tools, the AI's decision-making becomes more transparent and understandable. ReAct agents have shown to be particularly effective in scenarios that require real-time data or involve complex calculations, often outperforming simpler methods that rely solely on a linear thought process. This makes the ReAct pattern a powerful tool in the development of advanced AI systems that can tackle challenging tasks efficiently and accurately.\nContext recap: The ReAct pattern, which stands for Reasoning and Acting, is an innovative approach used by AI agents to enhance their problem-solving abilities. This method operates in a continuous loop that consists of several important steps. First, the AI engages in a process of thought, where it carefully considers what information it needs to solve a particular problem. This step is crucial because it sets the stage for the actions that will follow.\nWhy this matters: The ReAct Pattern helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ai-workflows-101-l07-c2",
          "title": "Function Calling and Tool Use",
          "content": "Function calling is a crucial feature that enables artificial intelligence (AI) models to interact with external tools by generating structured data formats, such as JSON, instead of relying solely on plain text. This process begins with defining a list of functions that the AI can utilize. Each function comes with specific details, including its name, the type of data it requires, and a brief description of what it does. Once this setup is complete, the AI analyzes the situation and determines which function to call and what information to provide as input. After the function is executed, the results are sent back to the AI, which interprets the data and uses it to inform its next steps. This method is widely used in various applications, including web searches, database queries, code execution, API calls, and file management. Many AI models, including those developed by OpenAI, Anthropic, and various open-source projects, support function calling. When designing these functions, it is essential to follow some key principles: keep the descriptions of the tools clear and concise, validate inputs to ensure they are correct before executing any function, implement time limits for how long a function can run, and never allow tools to have unrestricted write access to critical production systems without human oversight and approval. By adhering to these guidelines, we can ensure that the use of function calling is both effective and safe, allowing AI to perform complex tasks while minimizing risks.\nContext recap: Function calling is a crucial feature that enables artificial intelligence (AI) models to interact with external tools by generating structured data formats, such as JSON, instead of relying solely on plain text. This process begins with defining a list of functions that the AI can utilize. Each function comes with specific details, including its name, the type of data it requires, and a brief description of what it does. Once this setup is complete, the AI analyzes the situation and determines which function to call and what information to provide as input.\nWhy this matters: Function Calling and Tool Use helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-workflows-101-l07-c3",
          "title": "Orchestration Frameworks",
          "content": "Orchestration frameworks are essential tools for developers who want to create advanced applications using artificial intelligence (AI). Two popular frameworks are LangChain and LlamaIndex, each designed to help with different aspects of application development. LangChain is particularly useful for building complex workflows. It allows developers to create chains of tasks, which can include agents and memory modules. This means that you can design applications that perform multiple steps in a logical sequence. To make this process even easier, LangChain uses a special language called LCEL, or LangChain Expression Language. This language helps developers connect different components of their applications in a clear and organized way, making it easier to manage the flow of information and tasks.\nOn the other hand, LlamaIndex specializes in organizing and retrieving data. This framework is excellent for connecting AI models to various data sources, whether that data is structured (like databases) or unstructured (like text documents). LlamaIndex has powerful query engines that allow it to efficiently find and retrieve the information needed for AI applications. Both LangChain and LlamaIndex support the use of tools and can handle complex tasks, making them versatile options for developers.\nFor simpler projects, developers might prefer to use direct API calls with custom orchestration. This approach gives them more control and clarity over how their applications function. When deciding which framework to use, it’s important to consider the complexity of the task at hand. For straightforward tasks, direct API calls are often sufficient. If your project involves heavy data retrieval, LlamaIndex is the way to go. However, if you are working on a more intricate application that requires multiple agents and decision-making processes, LangChain is the best choice. By understanding the strengths of each framework, developers can choose the right tools to create effective AI applications.\nContext recap: Orchestration frameworks are essential tools for developers who want to create advanced applications using artificial intelligence (AI). Two popular frameworks are LangChain and LlamaIndex, each designed to help with different aspects of application development. LangChain is particularly useful for building complex workflows. It allows developers to create chains of tasks, which can include agents and memory modules.\nWhy this matters: Orchestration Frameworks helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "When we evaluate AI workflows, we need to think about more than just how accurate the model is. It's essential to use a variety of criteria to assess how well these models perform, especially those that generate content. One important criterion is Factuality. This means we check if the claims made by the AI can be verified against reliable sources. For example, if the AI states a fact, we should be able to find that fact in trustworthy books or articles. Another criterion is Relevance. This ensures that the output actually answers the question that was asked. If someone asks for information about a specific topic, the AI's response should directly relate to that topic. Completeness is also crucial. This checks whether all the requested information is included in the response. If a user asks for three specific points, the AI should provide all three. Safety is another important aspect. We need to ensure that the output avoids harmful, biased, or private content. This means the AI should not produce anything that could hurt someone or spread false information. Lastly, we have Format compliance, which checks if the response follows the required structure. For instance, if the answer needs to be in a list format, it should be presented that way. To make the evaluation process more efficient, we can use automated methods. This might involve using a stronger AI model to evaluate a weaker one, comparing the outputs to reference answers, and applying specific rules to check for correctness. Additionally, it's essential to maintain a collection of 50 to 100 carefully chosen examples with expected results. These examples serve as a benchmark for evaluation, helping us to ensure that the AI is performing as expected and meeting the necessary standards.\nContext recap: When we evaluate AI workflows, we need to think about more than just how accurate the model is. It's essential to use a variety of criteria to assess how well these models perform, especially those that generate content. One important criterion is Factuality. This means we check if the claims made by the AI can be verified against reliable sources.\nWhy this matters: Evaluation Frameworks helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-workflows-101-l08-c2",
          "title": "Hallucination Detection and Guardrails",
          "content": "In the world of artificial intelligence, the term 'hallucination' describes a situation where an AI model generates information that sounds believable but is actually false or misleading. This can be problematic, especially when users rely on the information provided by AI systems. To address this issue, there are several effective strategies for detecting these inaccuracies. One common method involves cross-referencing the AI's outputs with trustworthy source documents to verify their accuracy. This process is known as RAG faithfulness, where RAG stands for Retrieval-Augmented Generation. Another useful technique is to employ a second AI model to act as a fact-checker for the first model's claims. This approach is often referred to as LLM-as-judge, where LLM stands for Large Language Model. Furthermore, confidence calibration plays a crucial role in identifying outputs that may be less reliable. By assessing the model's confidence levels, developers can flag outputs that have low probabilities, indicating that they might not be trustworthy. To ensure user safety, guardrails are implemented as protective filters that intercept any unsafe or incorrect outputs before they reach the end user. For instance, input guardrails can block harmful prompts from being processed, while output guardrails ensure that the AI's responses comply with safety standards and formats, such as adhering to JSON schema compliance and maintaining appropriate word limits. Tools like Guardrails AI and NeMo Guardrails provide developers with frameworks that make it easier to implement these essential protective measures effectively, ensuring a safer and more reliable AI experience for everyone.\nContext recap: In the world of artificial intelligence, the term 'hallucination' describes a situation where an AI model generates information that sounds believable but is actually false or misleading. This can be problematic, especially when users rely on the information provided by AI systems. To address this issue, there are several effective strategies for detecting these inaccuracies. One common method involves cross-referencing the AI's outputs with trustworthy source documents to verify their accuracy.\nWhy this matters: Hallucination Detection and Guardrails helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ai-workflows-101-l08-c3",
          "title": "RLHF, Red-Teaming, and Model Cards",
          "content": "Reinforcement Learning from Human Feedback, commonly known as RLHF, is an innovative approach used to enhance artificial intelligence (AI) models by training them based on what humans prefer. In this process, human raters are asked to evaluate various outputs generated by the AI and rank them according to their quality. This ranking helps the AI model learn what kinds of responses are considered better or more appropriate. The model is then fine-tuned to maximize the positive feedback it receives, which helps ensure that the AI behaves in ways that align with human values and expectations. However, it's important to choose the raters carefully and to provide them with clear guidelines on how to evaluate the outputs effectively.\nAnother crucial practice in AI development is known as red-teaming. This involves assembling a dedicated group of testers who challenge the AI by trying to provoke harmful, biased, or inappropriate responses through creative and sometimes tricky prompts. The goal of red-teaming is to identify potential weaknesses in the AI's responses. The insights gained from these tests are invaluable; they feed back into the development process to enhance safety measures and improve the AI's guardrails, ensuring that the AI operates within safe and ethical boundaries.\nAdditionally, model cards play a vital role in the responsible deployment of AI models. These documents provide essential information about how a model is intended to be used, the data it was trained on, its performance across different demographic groups, its limitations, and any ethical considerations that users should be aware of. By publishing a model card, developers promote transparency and accountability, allowing users to make informed decisions about whether the model is suitable for their specific needs. This practice not only builds trust but also encourages responsible use of AI technologies in various applications.\nContext recap: Reinforcement Learning from Human Feedback, commonly known as RLHF, is an innovative approach used to enhance artificial intelligence (AI) models by training them based on what humans prefer. In this process, human raters are asked to evaluate various outputs generated by the AI and rank them according to their quality. This ranking helps the AI model learn what kinds of responses are considered better or more appropriate. The model is then fine-tuned to maximize the positive feedback it receives, which helps ensure that the AI behaves in ways that align with human values and expectations.\nWhy this matters: RLHF, Red-Teaming, and Model Cards helps learners in AI Workflows connect ideas from AI Workflows Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
