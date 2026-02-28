import type { LearningModule } from "@/lib/modules/types";

export const AiMachineLearning101Module: LearningModule = {
  id: "ai-machine-learning-101",
  title: "AI & Machine Learning Fundamentals",
  description:
    "Understand the technology shaping the future. Learn what AI really is, explore the three types of machine learning, discover how data is prepared for models, dive into neural networks, see real-world applications, and confront the critical ethical questions surrounding AI.",
  subject: "AI and ML",
  tags: ["curriculum", "interactive", "technology", "ai"],
  minAge: 14,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  learningObjectives: [
    "Define artificial intelligence and distinguish it from machine learning and deep learning",
    "Compare supervised, unsupervised, and reinforcement learning with real-world examples",
    "Explain the data preparation pipeline: collection, cleaning, splitting, and feature engineering",
    "Describe how neural networks work at a conceptual level (neurons, layers, activation)",
    "Identify real-world AI applications across healthcare, transportation, finance, and creative fields",
    "Analyze ethical issues in AI including bias, privacy, job displacement, and accountability"
  ],
  lessons: [
    /* ── L01 What Is AI? ── */
    {
      id: "ai-machine-learning-101-l01",
      title: "What Is Artificial Intelligence?",
      type: "video",
      duration: 12,
      chunks: [
        { id: "ai-machine-learning-101-l01-c1", title: "AI: Definition and History", content: "Artificial Intelligence (AI) is the simulation of human intelligence by machines — systems that can learn, reason, and make decisions. The term was coined by John McCarthy at the 1956 Dartmouth Conference. AI is NOT a single technology — it's an umbrella term covering many approaches. Early AI used hand-coded rules (expert systems). Modern AI uses machine learning — algorithms that improve through experience with data rather than explicit programming. Think of it this way: traditional programming = you write rules; machine learning = the machine discovers rules from data." },
        { id: "ai-machine-learning-101-l01-c2", title: "AI vs. ML vs. Deep Learning", content: "AI is the broadest concept: any machine that mimics human intelligence. Machine Learning (ML) is a SUBSET of AI: algorithms that learn patterns from data without being explicitly programmed. Deep Learning is a SUBSET of ML: neural networks with many layers that can learn from massive amounts of unstructured data (images, text, audio). Think of nested circles: AI (largest) → ML (inside) → Deep Learning (innermost). ChatGPT, image generators, and self-driving cars all use deep learning." },
        { id: "ai-machine-learning-101-l01-c3", title: "Narrow AI vs. General AI", content: "Today's AI is Narrow AI (ANI) — it excels at ONE specific task: playing chess, translating languages, recognizing faces. It cannot do anything else. Siri can set a timer but can't write a poem (well). Artificial General Intelligence (AGI) would match human-level intelligence across ALL tasks — it doesn't exist yet and remains theoretical. Artificial Super Intelligence (ASI) would surpass human intelligence entirely — this is science fiction for now. The key takeaway: all AI you interact with today is narrow/specialized." }
      ],
      flashcards: [
        { id: "ai-machine-learning-101-l01-f1", front: "Simulation of human intelligence by machines — learning, reasoning, deciding", back: "Artificial Intelligence (AI)" },
        { id: "ai-machine-learning-101-l01-f2", front: "AI ⊃ ML ⊃ Deep Learning — from broadest to most specific", back: "AI is the umbrella; ML is a subset; Deep Learning uses neural networks with many layers" },
        { id: "ai-machine-learning-101-l01-f3", front: "AI that excels at one specific task (all current AI)", back: "Narrow AI (ANI)" },
        { id: "ai-machine-learning-101-l01-f4", front: "Coined the term 'Artificial Intelligence' at 1956 Dartmouth Conference", back: "John McCarthy" }
      ],
      questions: [
        { id: "ai-machine-learning-101-l01-q1", text: "Machine Learning is best described as", options: [{ id: "a", text: "A subset of AI where algorithms learn patterns from data" }, { id: "b", text: "A robot that looks human" }, { id: "c", text: "A programming language" }, { id: "d", text: "A type of computer hardware" }], correctOptionId: "a", explanation: "ML = algorithms that learn from data rather than being explicitly programmed with rules!" },
        { id: "ai-machine-learning-101-l01-q2", text: "Deep Learning is a subset of", options: [{ id: "a", text: "Machine Learning" }, { id: "b", text: "Robotics" }, { id: "c", text: "Database management" }, { id: "d", text: "Web development" }], correctOptionId: "a", explanation: "AI ⊃ ML ⊃ Deep Learning — Deep Learning uses neural networks with many layers!" },
        { id: "ai-machine-learning-101-l01-q3", text: "All AI systems in use today are classified as", options: [{ id: "a", text: "Narrow AI — excelling at one specific task" }, { id: "b", text: "General AI — matching human intelligence across all tasks" }, { id: "c", text: "Super AI — surpassing human intelligence" }, { id: "d", text: "Conscious AI — with self-awareness" }], correctOptionId: "a", explanation: "Every AI you use today (Siri, ChatGPT, face recognition) is narrow/specialized!" }
      ],
      activities: [{ id: "ai-machine-learning-101-l01-act1", type: "sorting_buckets", title: "AI, ML, or Deep Learning?", description: "Classify: AI (chess-playing program, rule-based chatbot), ML (spam filter learning from data, recommendation engine), Deep Learning (image recognition, language translation, voice assistant)." }]
    },

    /* ── L02 Types of Machine Learning ── */
    {
      id: "ai-machine-learning-101-l02",
      title: "Types of Machine Learning",
      type: "video",
      duration: 13,
      chunks: [
        { id: "ai-machine-learning-101-l02-c1", title: "Supervised Learning", content: "Supervised learning trains on LABELED data — you give the algorithm inputs AND the correct answers (labels). The model learns the relationship between inputs and outputs, then predicts labels for new, unseen data. Example: Training a model on 10,000 emails labeled 'spam' or 'not spam' → it learns patterns and can classify new emails. Common algorithms: Linear Regression (predicting numbers like house prices), Logistic Regression (yes/no classification), Decision Trees, and Random Forests. About 80% of real-world ML uses supervised learning." },
        { id: "ai-machine-learning-101-l02-c2", title: "Unsupervised Learning", content: "Unsupervised learning works with UNLABELED data — no correct answers are provided. The algorithm finds hidden patterns and structures on its own. Example: Clustering — group customers by purchasing behavior without predefined categories (the algorithm discovers the groups). Common algorithms: K-Means Clustering (grouping data points), Principal Component Analysis (reducing data dimensions), Association Rules (finding item relationships — 'people who buy X also buy Y'). Netflix and Spotify use unsupervised learning to discover content clusters." },
        { id: "ai-machine-learning-101-l02-c3", title: "Reinforcement Learning", content: "Reinforcement learning learns through trial and error — an agent takes actions in an environment, receives rewards for good actions and penalties for bad ones, and learns the optimal strategy (policy). Think of training a dog: good behavior → treat (reward), bad behavior → no treat (penalty). Example: Google's AlphaGo learned Go by playing millions of games against itself. Real-world uses: robotics (teaching robots to walk), game AI, autonomous driving, and recommendation systems. The agent maximizes cumulative reward over time." }
      ],
      flashcards: [
        { id: "ai-machine-learning-101-l02-f1", front: "Learning from labeled data (inputs + correct answers)", back: "Supervised Learning" },
        { id: "ai-machine-learning-101-l02-f2", front: "Finding hidden patterns in unlabeled data", back: "Unsupervised Learning" },
        { id: "ai-machine-learning-101-l02-f3", front: "Learning through trial, error, rewards, and penalties", back: "Reinforcement Learning" },
        { id: "ai-machine-learning-101-l02-f4", front: "About 80% of real-world ML uses this type", back: "Supervised Learning" }
      ],
      questions: [
        { id: "ai-machine-learning-101-l02-q1", text: "A spam filter trained on emails labeled 'spam' and 'not spam' uses", options: [{ id: "a", text: "Supervised learning" }, { id: "b", text: "Unsupervised learning" }, { id: "c", text: "Reinforcement learning" }, { id: "d", text: "No machine learning" }], correctOptionId: "a", explanation: "Labeled data (spam/not spam) = supervised learning!" },
        { id: "ai-machine-learning-101-l02-q2", text: "Grouping customers by behavior without predefined categories is", options: [{ id: "a", text: "Unsupervised learning (clustering)" }, { id: "b", text: "Supervised learning" }, { id: "c", text: "Reinforcement learning" }, { id: "d", text: "Rule-based programming" }], correctOptionId: "a", explanation: "No labels provided — the algorithm discovers groups on its own = unsupervised!" },
        { id: "ai-machine-learning-101-l02-q3", text: "AlphaGo learned to play Go through millions of self-play games using", options: [{ id: "a", text: "Reinforcement learning" }, { id: "b", text: "Supervised learning" }, { id: "c", text: "Unsupervised learning" }, { id: "d", text: "Traditional programming" }], correctOptionId: "a", explanation: "Trial and error with rewards (winning) and penalties (losing) = reinforcement learning!" }
      ],
      activities: [{ id: "ai-machine-learning-101-l02-act1", type: "matching_pairs", title: "ML type matcher", description: "Match: Email spam detection → Supervised, Customer segmentation → Unsupervised, Robot learning to walk → Reinforcement, House price prediction → Supervised, Music recommendation clusters → Unsupervised, Game-playing AI → Reinforcement." }]
    },

    /* ── L03 Data Preparation ── */
    {
      id: "ai-machine-learning-101-l03",
      title: "Data Preparation",
      type: "video",
      duration: 12,
      chunks: [
        { id: "ai-machine-learning-101-l03-c1", title: "Data Collection and Quality", content: "ML models are only as good as their data — 'garbage in, garbage out.' Data can come from databases, APIs, web scraping, sensors, surveys, or public datasets. Key quality issues: missing values (empty cells in spreadsheets), duplicates (the same record entered twice), outliers (extreme values like a $1 million house in a dataset of $200,000 homes), and inconsistent formats (dates written as '01/15/2024' vs. 'January 15, 2024'). Data scientists spend roughly 80% of their time cleaning data — it's the most important and least glamorous part of ML." },
        { id: "ai-machine-learning-101-l03-c2", title: "Cleaning and Transforming Data", content: "Data cleaning steps: handle missing values (fill with average/median, or remove the row), remove duplicates, fix inconsistencies, and handle outliers. Feature engineering creates new meaningful variables from raw data — for example, from a 'birthdate' column, you might create an 'age' feature. Normalization scales all features to the same range (0 to 1) so no single feature dominates. Encoding converts categorical data (like 'red', 'blue', 'green') into numbers the algorithm can process." },
        { id: "ai-machine-learning-101-l03-c3", title: "Train/Test Split", content: "You NEVER test a model on data it was trained on — that would be like giving a student the exact test they practiced on. Split your data: Training set (70-80%) — the model learns from this. Test set (20-30%) — evaluates how well the model generalizes to unseen data. Sometimes you also use a Validation set (carved from training data) to tune hyperparameters during development. Cross-validation splits data into K folds and rotates which fold is the test set — giving a more robust performance estimate." }
      ],
      flashcards: [
        { id: "ai-machine-learning-101-l03-f1", front: "ML models are only as good as their data", back: "'Garbage in, garbage out'" },
        { id: "ai-machine-learning-101-l03-f2", front: "Data scientists spend ~80% of their time doing this", back: "Cleaning and preparing data" },
        { id: "ai-machine-learning-101-l03-f3", front: "Typical train/test split ratio", back: "70-80% training, 20-30% testing" },
        { id: "ai-machine-learning-101-l03-f4", front: "Creating new meaningful variables from raw data", back: "Feature engineering" }
      ],
      questions: [
        { id: "ai-machine-learning-101-l03-q1", text: "Why do we split data into training and test sets?", options: [{ id: "a", text: "To evaluate how well the model generalizes to unseen data" }, { id: "b", text: "To make the dataset smaller" }, { id: "c", text: "To speed up training" }, { id: "d", text: "To save storage space" }], correctOptionId: "a", explanation: "Testing on unseen data tells you if the model truly learned patterns or just memorized!" },
        { id: "ai-machine-learning-101-l03-q2", text: "Feature engineering is", options: [{ id: "a", text: "Creating new meaningful variables from raw data" }, { id: "b", text: "Deleting all data" }, { id: "c", text: "Writing code faster" }, { id: "d", text: "Building hardware" }], correctOptionId: "a", explanation: "Example: deriving 'age' from 'birthdate' — creating useful features the model can learn from!" },
        { id: "ai-machine-learning-101-l03-q3", text: "'Garbage in, garbage out' means", options: [{ id: "a", text: "Poor quality data produces poor quality predictions" }, { id: "b", text: "Computers need to be recycled" }, { id: "c", text: "Old data is always bad" }, { id: "d", text: "More data is always better" }], correctOptionId: "a", explanation: "If your input data has errors, biases, or missing values, your model will learn garbage!" }
      ],
      activities: [{ id: "ai-machine-learning-101-l03-act1", type: "timeline_builder", title: "Data pipeline order", description: "Arrange: Collect raw data → Check for missing values → Remove duplicates → Handle outliers → Feature engineering → Normalize/scale → Split into train/test sets → Train the model → Evaluate on test set." }]
    },

    /* ── L04 AI/ML Checkpoint ── */
    {
      id: "ai-machine-learning-101-l04",
      title: "AI & ML Checkpoint",
      type: "quiz",
      duration: 8,
      questions: [
        { id: "ai-machine-learning-101-l04-q1", text: "The relationship between AI, ML, and Deep Learning is", options: [{ id: "a", text: "AI ⊃ ML ⊃ Deep Learning (nested subsets)" }, { id: "b", text: "They are all the same thing" }, { id: "c", text: "Deep Learning is the largest category" }, { id: "d", text: "ML contains AI" }], correctOptionId: "a", explanation: "AI is the broadest, ML is a subset, Deep Learning is the innermost subset!" },
        { id: "ai-machine-learning-101-l04-q2", text: "Supervised learning requires", options: [{ id: "a", text: "Labeled data (inputs with correct answers)" }, { id: "b", text: "No data at all" }, { id: "c", text: "Only images" }, { id: "d", text: "Physical robots" }], correctOptionId: "a", explanation: "Supervised = labeled data. The model learns from examples with known correct answers!" },
        { id: "ai-machine-learning-101-l04-q3", text: "The typical train/test split is", options: [{ id: "a", text: "70-80% training, 20-30% testing" }, { id: "b", text: "50-50" }, { id: "c", text: "99-1" }, { id: "d", text: "10-90" }], correctOptionId: "a", explanation: "Most data goes to training (70-80%), with enough held out for reliable testing (20-30%)!" }
      ],
      flashcards: [
        { id: "ai-machine-learning-101-l04-f1", front: "AI ⊃ ML ⊃ Deep Learning", back: "From broadest to most specific" },
        { id: "ai-machine-learning-101-l04-f2", front: "Three types of ML", back: "Supervised, Unsupervised, Reinforcement" },
        { id: "ai-machine-learning-101-l04-f3", front: "80% of data science time goes to", back: "Data cleaning and preparation" },
        { id: "ai-machine-learning-101-l04-f4", front: "Never test on training data because", back: "It would be like giving a student the exact test they practiced on" }
      ]
    },

    /* ── L05 Neural Networks ── */
    {
      id: "ai-machine-learning-101-l05",
      title: "Neural Networks",
      type: "video",
      duration: 14,
      chunks: [
        { id: "ai-machine-learning-101-l05-c1", title: "How Neural Networks Work", content: "Neural networks are inspired by the human brain — but they're really just math. A network has layers of 'neurons': an Input Layer (receives data), Hidden Layers (process data through weighted connections), and an Output Layer (produces the prediction). Each neuron takes inputs, multiplies them by weights, adds a bias, and applies an activation function to produce an output. Training adjusts the weights to minimize prediction errors. More layers = 'deeper' network = deep learning." },
        { id: "ai-machine-learning-101-l05-c2", title: "Training: Forward and Backward Passes", content: "Training a neural network: 1) Forward pass — data flows through the network, producing a prediction; 2) Calculate loss — compare the prediction to the correct answer using a loss function; 3) Backward pass (backpropagation) — the error signal flows backward, calculating how much each weight contributed to the error; 4) Update weights — using gradient descent (moving weights in the direction that reduces error). Repeat for thousands of examples (epochs) until the loss is minimized. It's like a student taking practice tests and adjusting their study approach based on mistakes." },
        { id: "ai-machine-learning-101-l05-c3", title: "Types of Neural Networks", content: "Convolutional Neural Networks (CNNs) — specialize in images. They use filters that scan across the image detecting edges, textures, and objects. Used in: facial recognition, medical imaging, self-driving cars. Recurrent Neural Networks (RNNs) — handle sequential data (text, time series). They have memory — each step uses information from previous steps. Used in: language translation, speech recognition. Transformers — the architecture behind GPT, BERT, and modern LLMs. They process all tokens in parallel using 'attention' mechanisms, making them faster and more powerful than RNNs for language tasks." }
      ],
      flashcards: [
        { id: "ai-machine-learning-101-l05-f1", front: "Input Layer → Hidden Layers → Output Layer", back: "The three types of layers in a neural network" },
        { id: "ai-machine-learning-101-l05-f2", front: "Algorithm that propagates errors backward to update weights", back: "Backpropagation" },
        { id: "ai-machine-learning-101-l05-f3", front: "Neural network architecture specialized for images", back: "Convolutional Neural Network (CNN)" },
        { id: "ai-machine-learning-101-l05-f4", front: "Architecture behind GPT and modern language models", back: "Transformer" }
      ],
      questions: [
        { id: "ai-machine-learning-101-l05-q1", text: "In a neural network, backpropagation is used to", options: [{ id: "a", text: "Calculate how much each weight contributed to the error and update weights" }, { id: "b", text: "Delete incorrect data" }, { id: "c", text: "Add new layers" }, { id: "d", text: "Collect training data" }], correctOptionId: "a", explanation: "Backpropagation sends error signals backward through the network to improve weights!" },
        { id: "ai-machine-learning-101-l05-q2", text: "CNNs are best suited for", options: [{ id: "a", text: "Image recognition and visual data" }, { id: "b", text: "Text translation" }, { id: "c", text: "Playing board games" }, { id: "d", text: "Database queries" }], correctOptionId: "a", explanation: "CNNs use convolutional filters to detect visual patterns — edges, textures, objects!" },
        { id: "ai-machine-learning-101-l05-q3", text: "ChatGPT and similar LLMs are built on", options: [{ id: "a", text: "Transformer architecture" }, { id: "b", text: "CNN architecture" }, { id: "c", text: "Rule-based systems" }, { id: "d", text: "K-Means clustering" }], correctOptionId: "a", explanation: "Transformers use attention mechanisms to process language in parallel — powering all modern LLMs!" }
      ],
      activities: [{ id: "ai-machine-learning-101-l05-act1", type: "matching_pairs", title: "Network architecture matcher", description: "Match: Image classification → CNN, Language translation → Transformer, Time series forecasting → RNN, Chatbot (GPT) → Transformer, Face recognition → CNN, Speech recognition → RNN/Transformer." }]
    },

    /* ── L06 Real-World AI Applications ── */
    {
      id: "ai-machine-learning-101-l06",
      title: "Real-World AI Applications",
      type: "video",
      duration: 12,
      chunks: [
        { id: "ai-machine-learning-101-l06-c1", title: "Healthcare and Science", content: "AI is revolutionizing healthcare. Medical imaging: AI detects cancers in X-rays and MRIs with accuracy matching or exceeding radiologists. Drug discovery: AI analyzes millions of molecular combinations to find potential drugs — reducing years of lab work to months. Google's DeepMind predicted protein structures (AlphaFold) — a problem scientists worked on for 50 years. Personalized medicine: AI analyzes a patient's genetics, lifestyle, and history to recommend targeted treatments. Wearable AI monitors heart rhythms and can detect atrial fibrillation before symptoms appear." },
        { id: "ai-machine-learning-101-l06-c2", title: "Transportation and Finance", content: "Self-driving cars use AI to perceive the environment (cameras, LiDAR, radar), make decisions (when to brake, turn, accelerate), and navigate. Tesla, Waymo, and Cruise are leading this space. In finance, AI powers: fraud detection (flagging unusual transactions in milliseconds), algorithmic trading (executing trades at superhuman speed), credit scoring (evaluating loan risk), and robo-advisors (automated investment management). JPMorgan's AI system reviews legal documents in seconds that took lawyers 360,000 hours annually." },
        { id: "ai-machine-learning-101-l06-c3", title: "Creative AI and Daily Life", content: "Generative AI creates new content: DALL-E and Midjourney generate images from text descriptions, ChatGPT writes essays and code, AI composes music and creates video. In daily life: virtual assistants (Siri, Alexa), email spam filters, social media feeds (AI curates what you see), autocorrect and predictive text, Google Translate (supporting 130+ languages), and recommendation engines (Netflix, Spotify, Amazon suggest content based on your behavior). AI is already deeply embedded in your daily routine — most people just don't notice." }
      ],
      flashcards: [
        { id: "ai-machine-learning-101-l06-f1", front: "Google DeepMind's breakthrough in predicting protein structures", back: "AlphaFold" },
        { id: "ai-machine-learning-101-l06-f2", front: "AI systems that generate new content (images, text, music)", back: "Generative AI" },
        { id: "ai-machine-learning-101-l06-f3", front: "AI in finance detecting unusual transactions in milliseconds", back: "Fraud detection" },
        { id: "ai-machine-learning-101-l06-f4", front: "Technologies self-driving cars use to perceive their environment", back: "Cameras, LiDAR, and radar" }
      ],
      questions: [
        { id: "ai-machine-learning-101-l06-q1", text: "AlphaFold by DeepMind solved a 50-year problem in", options: [{ id: "a", text: "Protein structure prediction" }, { id: "b", text: "Chess strategy" }, { id: "c", text: "Weather forecasting" }, { id: "d", text: "Stock market prediction" }], correctOptionId: "a", explanation: "AlphaFold predicted 3D protein structures — a massive breakthrough for biology and drug discovery!" },
        { id: "ai-machine-learning-101-l06-q2", text: "DALL-E and Midjourney are examples of", options: [{ id: "a", text: "Generative AI (creating images from text)" }, { id: "b", text: "Self-driving car systems" }, { id: "c", text: "Medical diagnostic tools" }, { id: "d", text: "Fraud detection systems" }], correctOptionId: "a", explanation: "These are generative AI models that create new images from text descriptions!" },
        { id: "ai-machine-learning-101-l06-q3", text: "Netflix and Spotify use AI primarily for", options: [{ id: "a", text: "Recommending content based on your behavior" }, { id: "b", text: "Self-driving vehicles" }, { id: "c", text: "Medical diagnosis" }, { id: "d", text: "Manufacturing robots" }], correctOptionId: "a", explanation: "Recommendation engines analyze your watching/listening history to suggest new content!" }
      ],
      activities: [{ id: "ai-machine-learning-101-l06-act1", type: "sorting_buckets", title: "AI application domains", description: "Classify: Healthcare (cancer detection, drug discovery, AlphaFold), Transportation (self-driving cars, route optimization), Finance (fraud detection, algorithmic trading), Creative (DALL-E, ChatGPT, AI music), Daily Life (Siri, spam filter, autocorrect)." }]
    },

    /* ── L07 AI Ethics and Bias ── */
    {
      id: "ai-machine-learning-101-l07",
      title: "AI Ethics & Bias",
      type: "video",
      duration: 13,
      chunks: [
        { id: "ai-machine-learning-101-l07-c1", title: "Bias in AI Systems", content: "AI systems can be biased because they learn from biased data. If historical hiring data favored men, the AI will learn to favor men — Amazon scrapped such a system in 2018. Facial recognition has higher error rates for darker-skinned faces because training data was predominantly white faces — a study by Joy Buolamwini (MIT) proved this. Types of bias: sampling bias (non-representative data), label bias (humans applying labels incorrectly), confirmation bias (model reinforcing existing patterns). Bias doesn't mean the algorithm is 'racist' — it means the data or design reflects historical inequalities." },
        { id: "ai-machine-learning-101-l07-c2", title: "Privacy and Surveillance", content: "AI enables surveillance at an unprecedented scale. Facial recognition can identify individuals in crowds. Social media platforms track behavior to predict and influence decisions. China's social credit system uses AI to score citizens' behavior. Key privacy concerns: Who owns your data? Can you opt out? How long is data retained? The EU's GDPR gives citizens the 'right to explanation' — if an AI makes a decision about you (loan denial, job rejection), you can demand to know why. The tension: AI needs data to work well, but collecting data risks privacy." },
        { id: "ai-machine-learning-101-l07-c3", title: "Accountability and the Future", content: "When an AI makes a harmful decision, who is responsible? The developer? The company? The user? The data provider? This is the accountability problem — and there's no clear legal framework yet. Job displacement is real: AI automates routine tasks (data entry, customer service, driving), but also creates new jobs (ML engineer, AI ethicist, prompt engineer). Responsible AI principles: fairness (treating all groups equitably), transparency (explainable decisions), accountability (clear responsibility), privacy (data protection), and safety (preventing harm). Building ethical AI isn't optional — it's essential." }
      ],
      flashcards: [
        { id: "ai-machine-learning-101-l07-f1", front: "AI learning from biased historical data and perpetuating inequalities", back: "AI bias" },
        { id: "ai-machine-learning-101-l07-f2", front: "EU regulation giving citizens the 'right to explanation' for AI decisions", back: "GDPR (General Data Protection Regulation)" },
        { id: "ai-machine-learning-101-l07-f3", front: "MIT researcher who proved facial recognition bias against darker-skinned faces", back: "Joy Buolamwini" },
        { id: "ai-machine-learning-101-l07-f4", front: "Five principles of responsible AI", back: "Fairness, Transparency, Accountability, Privacy, Safety" }
      ],
      questions: [
        { id: "ai-machine-learning-101-l07-q1", text: "Amazon scrapped its AI hiring tool in 2018 because", options: [{ id: "a", text: "It learned gender bias from historical hiring data" }, { id: "b", text: "It was too slow" }, { id: "c", text: "It cost too much" }, { id: "d", text: "It hired too many people" }], correctOptionId: "a", explanation: "The model was trained on 10 years of resumes — mostly from men — so it penalized female candidates!" },
        { id: "ai-machine-learning-101-l07-q2", text: "The 'right to explanation' under GDPR means", options: [{ id: "a", text: "You can demand to know why an AI made a decision about you" }, { id: "b", text: "AI must explain itself in plain English" }, { id: "c", text: "All AI source code must be public" }, { id: "d", text: "AI cannot make any decisions" }], correctOptionId: "a", explanation: "GDPR gives EU citizens the right to understand automated decisions that affect them!" },
        { id: "ai-machine-learning-101-l07-q3", text: "Responsible AI requires", options: [{ id: "a", text: "Fairness, transparency, accountability, privacy, and safety" }, { id: "b", text: "Only speed and accuracy" }, { id: "c", text: "Maximum data collection" }, { id: "d", text: "Eliminating all human oversight" }], correctOptionId: "a", explanation: "Responsible AI balances performance with ethical principles to prevent harm!" }
      ],
      activities: [{ id: "ai-machine-learning-101-l07-act1", type: "sorting_buckets", title: "Ethical AI principles", description: "Classify issues: Bias (facial recognition errors, biased hiring), Privacy (surveillance, data tracking), Accountability (who's responsible for AI errors), Job Impact (automation replacing jobs, new roles created), Transparency (explainable AI, black-box models)." }]
    },

    /* ── L08 AI & ML Final Assessment ── */
    {
      id: "ai-machine-learning-101-l08",
      title: "AI & ML Final Assessment",
      type: "quiz",
      duration: 10,
      questions: [
        { id: "ai-machine-learning-101-l08-q1", text: "The three types of machine learning are", options: [{ id: "a", text: "Supervised, Unsupervised, and Reinforcement" }, { id: "b", text: "Fast, Medium, and Slow" }, { id: "c", text: "Input, Output, and Hidden" }, { id: "d", text: "CNN, RNN, and Transformer" }], correctOptionId: "a", explanation: "Supervised (labeled data), Unsupervised (unlabeled), Reinforcement (trial and error with rewards)!" },
        { id: "ai-machine-learning-101-l08-q2", text: "Backpropagation in neural networks", options: [{ id: "a", text: "Sends error signals backward to update weights and improve predictions" }, { id: "b", text: "Deletes bad data" }, { id: "c", text: "Adds more neurons" }, { id: "d", text: "Reverses the input" }], correctOptionId: "a", explanation: "Backpropagation calculates how much each weight contributed to the error, then updates them!" },
        { id: "ai-machine-learning-101-l08-q3", text: "AI bias primarily comes from", options: [{ id: "a", text: "Biased training data reflecting historical inequalities" }, { id: "b", text: "Random chance" }, { id: "c", text: "Hardware failures" }, { id: "d", text: "Internet speed" }], correctOptionId: "a", explanation: "AI learns from data — if the data contains human biases, the AI will too!" }
      ],
      flashcards: [
        { id: "ai-machine-learning-101-l08-f1", front: "AI ⊃ ML ⊃ Deep Learning", back: "Nested subsets from broadest to most specific" },
        { id: "ai-machine-learning-101-l08-f2", front: "Supervised, Unsupervised, Reinforcement", back: "Three types of Machine Learning" },
        { id: "ai-machine-learning-101-l08-f3", front: "CNN, RNN, Transformer", back: "Three major neural network architectures" },
        { id: "ai-machine-learning-101-l08-f4", front: "Fairness, Transparency, Accountability, Privacy, Safety", back: "Five principles of Responsible AI" }
      ]
    }
  ]
};
