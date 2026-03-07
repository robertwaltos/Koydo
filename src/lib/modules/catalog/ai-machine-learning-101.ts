import type { LearningModule } from "@/lib/modules/types";

export const ai_machine_learning_101_Module: LearningModule = {
  "id": "ai-machine-learning-101",
  "title": "AI & Machine Learning Fundamentals",
  "description": "Master the foundations of artificial intelligence and machine learning — from classical algorithms and neural networks to real-world pipelines and deployment. Build intuition for how models learn, evaluate, and generalize through hands-on concepts and concrete examples.",
  "subject": "AI & Machine Learning",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "technology",
    "ai",
    "data-science"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Define artificial intelligence, trace its history, and distinguish Narrow AI from General AI",
    "Explain supervised learning algorithms including linear regression, logistic regression, decision trees, and ensemble methods",
    "Describe unsupervised techniques such as k-means clustering and principal component analysis",
    "Illustrate how neural networks learn through forward propagation, loss functions, and gradient descent",
    "Analyze model performance using accuracy, precision, recall, F1-score, and confusion matrices",
    "Apply the end-to-end ML pipeline: data cleaning, feature engineering, training, validation, and deployment",
    "Evaluate real-world AI systems and articulate MLOps principles for production machine learning"
  ],
  "lessons": [
    {
      "id": "ai-ml-101-l01",
      "title": "What Is Artificial Intelligence?",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, modern digital illustration of a glowing artificial brain connected to a timeline of technological milestones, set against a dark blue background with neon cyan and purple accents. High quality, vector art style, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation starting with a vintage 1950s computer that rapidly evolves into a futuristic, glowing neural network. The camera pans through the glowing nodes as they light up, symbolizing the evolution of AI from simple rules to complex deep learning. Cinematic lighting, smooth 60fps motion.",
      "objectives": [
        "Trace the history of AI from the 1956 Dartmouth Conference to modern deep learning",
        "Distinguish Narrow AI (ANI) from Artificial General Intelligence (AGI)",
        "Explain the Turing Test and its significance in evaluating machine intelligence"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l01-c1",
          "title": "A Brief History of AI",
          "content": "Artificial Intelligence (AI) is an exciting branch of computer science that aims to create machines capable of thinking, learning, and acting similarly to humans. The story of AI officially began in 1956 during a pivotal gathering known as the Dartmouth Conference, where scientist John McCarthy first coined the term 'Artificial Intelligence.' In those early days, researchers primarily focused on 'symbolic AI,' which involved creating specific, hard-coded rules that machines could follow to perform tasks. A notable example is MYCIN, a 1970s system designed to diagnose bacterial infections.\n\nHowever, the journey of AI was not always smooth. In the 1980s, the field encountered significant challenges, leading to a period known as the 'AI winter,' where funding and progress slowed down considerably. Fortunately, the excitement was reignited in the 2000s thanks to remarkable advancements in technology. Faster computer processors, the availability of massive datasets (Big Data), and innovative algorithms revitalized the field. A key turning point occurred in 2006 when researchers like Geoffrey Hinton made groundbreaking discoveries in deep learning, a subset of AI that mimics the way human brains learn.\n\nSince then, we have witnessed incredible milestones. In 1997, IBM's Deep Blue defeated world chess champion Garry Kasparov. In 2011, IBM Watson won the quiz show Jeopardy! In 2016, DeepMind's AlphaGo achieved a remarkable feat by defeating world champion Lee Sedol in the complex game of Go. More recently, the introduction of large language models (like the GPT series) has revolutionized how machines understand and generate human language, making interactions with technology more natural than ever before."
        },
        {
          "id": "ai-ml-101-l01-c2",
          "title": "Narrow AI vs. General AI",
          "content": "In the fascinating world of artificial intelligence, we categorize AI into two main types: Narrow AI and General AI. Right now, all the AI systems we interact with are examples of Narrow AI (also known as Artificial Narrow Intelligence, or ANI). This means they are specifically designed to excel at one particular task. For example, a spam filter is great at identifying unwanted emails, a recommendation algorithm is great at suggesting movies, and a self-driving car system is great at navigating roads. However, the spam filter cannot drive a car, and the car cannot translate languages. This specialization allows Narrow AI to sometimes outperform humans in its designated area, such as when AI image classifiers surpassed human accuracy in the 2015 ImageNet competition.\n\nOn the other hand, we have the concept of Artificial General Intelligence (AGI). AGI refers to a type of AI that would possess the ability to understand, learn, and apply knowledge across any intellectual task that a human can do. An AGI could potentially learn how to cook, write poetry, and diagnose medical conditions without needing to be rebuilt or specifically trained from scratch for each individual task. It is important to note that AGI is still a theoretical idea, and experts do not have a consensus on when or if we will ever achieve it.\n\nBeyond AGI, there is an even more advanced concept called Artificial Super Intelligence (ASI). ASI describes a hypothetical form of AI that would surpass human intelligence in every possible way, including creativity, problem-solving, and social intelligence. While ASI remains largely speculative, understanding these categories helps us think critically about the current capabilities and future implications of AI."
        },
        {
          "id": "ai-ml-101-l01-c3",
          "title": "The Turing Test and Machine Intelligence",
          "content": "In 1950, a brilliant mathematician named Alan Turing introduced an interesting idea known as the 'imitation game.' The concept is simple: if a human evaluator having a text-based conversation cannot tell the difference between responses from a machine and those from a human, then we can say that the machine is exhibiting intelligent behavior. This idea, known as the Turing Test, has heavily influenced AI research for decades.\n\nHowever, the Turing Test has limitations. A machine might pass the test by cleverly avoiding questions or using conversational tricks rather than truly understanding the topic. To address this, modern researchers use more advanced, rigorous benchmarks to evaluate AI. For language, they employ benchmarks like GLUE, SuperGLUE, and MMLU to measure how well machines comprehend complex text, answer questions, and reason across various subjects. For visual tasks, benchmarks like ImageNet and COCO assess how well machines perceive and categorize images.\n\nA big philosophical question remains: does passing these tests mean that a machine truly 'understands' what it is doing, or is it just simulating understanding? This debate is famously highlighted by philosopher John Searle's 'Chinese Room' argument, which suggests that a system can manipulate symbols perfectly to give the illusion of understanding without actually comprehending anything. As AI technology continues to evolve and models become more sophisticated, this ongoing debate encourages us to think critically about the true nature of intelligence and consciousness."
        }
      ],
      "flashcards": [
        {
          "id": "ai-ml-101-l01-f1",
          "front": "Dartmouth Conference (1956)",
          "back": "The event where John McCarthy coined 'Artificial Intelligence' and the field was formally established"
        },
        {
          "id": "ai-ml-101-l01-f2",
          "front": "Narrow AI (ANI)",
          "back": "AI optimized for a single task — all current production systems (spam filters, image classifiers, chatbots) are narrow AI"
        },
        {
          "id": "ai-ml-101-l01-f3",
          "front": "Turing Test",
          "back": "Alan Turing's 1950 proposal: if a human evaluator cannot distinguish a machine's responses from a human's, the machine exhibits intelligent behavior"
        },
        {
          "id": "ai-ml-101-l01-f4",
          "front": "AlphaGo (2016)",
          "back": "DeepMind's reinforcement-learning system that defeated world champion Lee Sedol at Go — a game with more positions than atoms in the universe"
        }
      ],
      "learningAids": [
        {
          "id": "ai-ml-101-l01-a1",
          "type": "image",
          "title": "The AI Evolution Timeline",
          "content": "Visual summary of the lesson's main concept: A timeline showing Symbolic AI -> AI Winter -> Deep Learning Boom -> Modern LLMs."
        }
      ]
    },
    {
      "id": "ai-ml-101-l02",
      "title": "Supervised Learning: Regression & Classification",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant, abstract 3D representation of data points being sorted. On the left, a smooth glowing trend line passes through scattered dots. On the right, a clear neon boundary separates blue circles from orange squares. Clean, modern UI aesthetic, volumetric lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A smooth, educational 3D motion graphics animation. The screen splits: one side shows a line smoothly adjusting to fit a scatter plot of housing prices, while the other side shows a glowing boundary line shifting to separate spam emails from safe emails. High-end corporate tech style.",
      "objectives": [
        "Differentiate regression (continuous output) from classification (discrete output)",
        "Explain how linear regression minimizes mean squared error using gradient descent",
        "Compare decision trees, random forests, and gradient boosting for classification tasks"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l02-c1",
          "title": "Regression: Predicting Continuous Values",
          "content": "Now that we understand what AI is, let's dive into how machines actually learn. Supervised learning is a foundational technique in machine learning where we teach models to make predictions by providing them with examples. In supervised learning, we use 'labeled data,' meaning each example includes both the input features (like the size and location of a house) and the correct output label (the price of the house). The model's job is to learn the mathematical relationship between the inputs and the outputs.\n\nOne of the primary tasks in supervised learning is called regression, which is used to predict continuous, numerical values. Examples include predicting tomorrow's temperature, a company's future revenue, or a car's fuel efficiency. The most common method to perform this is linear regression. This algorithm tries to find the 'line of best fit' through the data points. \n\nTo find this perfect line, the model needs a way to measure how wrong its current predictions are. It uses a metric called Mean Squared Error (MSE), which calculates the average of the squared differences between the predicted values and the actual values. The goal is to make the MSE as small as possible. To achieve this, the model uses an optimization technique called gradient descent. Gradient descent calculates the slope of the error and takes small steps to adjust the model's internal weights, slowly walking down the 'hill' of error until it finds the lowest possible point. If the relationship in the data is more complex than a straight line, we can use polynomial regression to fit curves to the data instead."
        },
        {
          "id": "ai-ml-101-l02-c2",
          "title": "Classification: Predicting Categories",
          "content": "While regression predicts continuous numbers, classification is used when we want to categorize inputs into specific, discrete groups or classes. For instance, a classification model might determine if an email is 'spam' or 'not spam,' or if an image contains a 'cat' or a 'dog.'\n\nOne of the most popular algorithms for binary classification (choosing between two categories) is called logistic regression. Despite having 'regression' in its name, it is strictly a classification tool. Logistic regression works by taking the input features and passing them through a mathematical formula called the sigmoid function. The sigmoid function is shaped like an 'S' and squashes any input number into a value strictly between 0 and 1. This output represents a probability. For example, an output of 0.85 might mean there is an 85% chance an email is spam.\n\nOnce we have this probability, we apply a threshold—usually 0.5. If the probability is above 0.5, the model predicts 'spam'; if it's below, it predicts 'not spam.' To evaluate and improve a classification model during training, we use a loss function called binary cross-entropy. This function heavily penalizes the model if it makes an incorrect prediction with high confidence. If we need to classify data into more than two categories (like identifying whether an image is a cat, dog, or bird), we use an extension called softmax regression, which calculates a probability for each possible class, ensuring all probabilities add up to 100%."
        },
        {
          "id": "ai-ml-101-l02-c3",
          "title": "Tree-Based and Ensemble Methods",
          "content": "Beyond drawing lines and calculating probabilities, another powerful approach to supervised learning involves tree-based methods. The most fundamental of these is the decision tree. Imagine a decision tree as a flowchart that makes predictions by asking a series of yes-or-no questions about the data. For example, to predict if a fruit is an apple or a lemon, the tree might first ask, 'Is it yellow?' If yes, it might ask, 'Is it sour?' This process continues down the branches until it reaches a final leaf, which contains the prediction.\n\nWhile decision trees are highly intuitive, they have a major flaw: they are prone to overfitting. Overfitting happens when a tree becomes too deep and complex, essentially memorizing the training data (including its random noise) rather than learning the general patterns. As a result, it performs poorly on new, unseen data.\n\nTo fix this, we use ensemble methods, which combine multiple models to create a stronger, more robust predictor. A popular ensemble method is the Random Forest. Instead of relying on one deep decision tree, a random forest trains hundreds of different trees on random subsets of the data. When making a prediction, all the trees 'vote,' and the majority rules. This technique, known as bagging, drastically reduces overfitting.\n\nAnother advanced ensemble technique is Gradient Boosting. Instead of building trees independently like a random forest, gradient boosting builds trees sequentially. Each new tree is specifically designed to correct the errors made by the previous trees. Algorithms based on this concept, like XGBoost and LightGBM, are incredibly powerful and frequently win global machine learning competitions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-ml-101-l02-a1",
          "title": "Regression or Classification?",
          "type": "sorting_buckets",
          "buckets": [
            "Regression",
            "Classification"
          ],
          "items": [
            {
              "text": "Predicting tomorrow's temperature in °C",
              "bucket": "Regression"
            },
            {
              "text": "Detecting whether an email is spam",
              "bucket": "Classification"
            },
            {
              "text": "Estimating a home's sale price",
              "bucket": "Regression"
            },
            {
              "text": "Diagnosing a tumor as benign or malignant",
              "bucket": "Classification"
            },
            {
              "text": "Forecasting quarterly revenue",
              "bucket": "Regression"
            },
            {
              "text": "Classifying a handwritten digit (0-9)",
              "bucket": "Classification"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "ai-ml-101-l02-f1",
          "front": "Linear regression",
          "back": "Fits a line (y = wx + b) by minimizing Mean Squared Error — predicts continuous values like price or temperature"
        },
        {
          "id": "ai-ml-101-l02-f2",
          "front": "Logistic regression",
          "back": "Classification algorithm that uses the sigmoid function to output a probability between 0 and 1; loss = binary cross-entropy"
        },
        {
          "id": "ai-ml-101-l02-f3",
          "front": "Random forest",
          "back": "Ensemble of many decision trees trained on random data/feature subsets — reduces overfitting via bagging and majority vote"
        },
        {
          "id": "ai-ml-101-l02-f4",
          "front": "Gradient boosting",
          "back": "Sequential ensemble where each tree corrects errors of previous trees — highly accurate and often wins ML competitions"
        }
      ],
      "learningAids": [
        {
          "id": "ai-ml-101-l02-a1",
          "type": "practice",
          "title": "Algorithm Selection Guide",
          "content": "Ask yourself: Is the target output a number (Regression) or a category (Classification)? If it's a category, do I need a simple baseline (Logistic Regression) or high accuracy on complex tabular data (Random Forest / Gradient Boosting)?"
        }
      ]
    },
    {
      "id": "ai-ml-101-l03",
      "title": "AI Foundations & Supervised Learning Checkpoint",
      "type": "quiz",
      "duration": 8,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic glowing checkpoint gate in a digital landscape, symbolizing the completion of the first learning phase. Holographic checkmarks float in the air. Cyberpunk aesthetic, unreal engine 5 render style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced 3D montage summarizing AI history zooming into a scatter plot, which then transforms into a glowing decision tree. The camera flies through the branches of the tree, ending on a glowing holographic question mark. Cinematic depth of field.",
      "objectives": [
        "Demonstrate understanding of AI history, the Turing Test, and supervised learning algorithms"
      ],
      "questions": [
        {
          "id": "ai-ml-101-l03-q1",
          "text": "The term 'Artificial Intelligence' was coined at which event?",
          "options": [
            {
              "id": "a",
              "text": "1984 Apple Macintosh launch"
            },
            {
              "id": "b",
              "text": "1969 Moon landing by NASA engineers"
            },
            {
              "id": "c",
              "text": "1956 Dartmouth Conference by John McCarthy"
            },
            {
              "id": "d",
              "text": "2012 ImageNet competition"
            }
          ],
          "correctOptionId": "c",
          "explanation": "John McCarthy organized the 1956 Dartmouth Conference and coined the term 'Artificial Intelligence' to describe the new research field."
        },
        {
          "id": "ai-ml-101-l03-q2",
          "text": "Linear regression minimizes which loss function?",
          "options": [
            {
              "id": "a",
              "text": "Binary cross-entropy"
            },
            {
              "id": "b",
              "text": "Mean Squared Error (MSE)"
            },
            {
              "id": "c",
              "text": "Hinge loss"
            },
            {
              "id": "d",
              "text": "Kullback–Leibler divergence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "MSE averages the squared differences between predictions and actual values, penalizing large errors more heavily."
        },
        {
          "id": "ai-ml-101-l03-q3",
          "text": "Logistic regression outputs a probability by applying which function?",
          "options": [
            {
              "id": "a",
              "text": "Square root"
            },
            {
              "id": "b",
              "text": "Logarithmic function"
            },
            {
              "id": "c",
              "text": "Absolute value"
            },
            {
              "id": "d",
              "text": "Sigmoid (logistic) function"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The sigmoid function squashes any real number into the range (0, 1), yielding a probability."
        },
        {
          "id": "ai-ml-101-l03-q4",
          "text": "Random forests reduce overfitting compared to a single decision tree by:",
          "options": [
            {
              "id": "a",
              "text": "Training many trees on random subsets and aggregating their predictions"
            },
            {
              "id": "b",
              "text": "Using a single deep tree with no pruning"
            },
            {
              "id": "c",
              "text": "Ignoring all features"
            },
            {
              "id": "d",
              "text": "Only using one data point per tree"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Bagging — training diverse trees on random samples and averaging/voting — smooths out individual tree variance."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      }
    },
    {
      "id": "ai-ml-101-l04",
      "title": "Unsupervised Learning: Clustering & Dimensionality Reduction",
      "type": "video",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D visualization of a galaxy of glowing data points slowly organizing themselves into distinct, color-coded clusters. High contrast, dark background, scientific aesthetic, 8k resolution, ray tracing.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A chaotic swarm of thousands of glowing particles floats on screen. An invisible magnetic force begins to pull them together, organizing them into three distinct, tightly packed, color-coded spheres, visually demonstrating the concept of clustering. Fluid simulation, glowing particles.",
      "objectives": [
        "Explain how k-means clustering partitions data into k groups using centroid updates",
        "Describe Principal Component Analysis (PCA) and why dimensionality reduction matters",
        "Identify real-world applications of unsupervised learning in recommendation systems and anomaly detection"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l04-c1",
          "title": "Clustering with K-Means",
          "content": "While supervised learning relies on labeled data, unsupervised learning is used when we have data without any labels or predefined answers. Imagine being handed a massive box of mixed-up LEGO pieces without an instruction manual or a picture of the final model. Your natural instinct might be to group them by color or size. That is exactly what unsupervised learning does: it finds hidden structures and patterns in raw data.\n\nOne of the most popular unsupervised techniques is K-means clustering. This algorithm groups data points into a specific number of clusters, represented by the letter 'k'. Here is how it works: First, the algorithm randomly places 'k' points, called centroids, into the data space. Next, it measures the distance (usually the straight-line Euclidean distance) from every data point to these centroids, assigning each point to the centroid it is closest to. \n\nOnce all points are assigned, the algorithm calculates the actual center of each newly formed group and moves the centroid to that new center. It repeats this process—assigning points and moving centroids—until the centroids stop moving, meaning the clusters have stabilized. A common challenge is deciding what 'k' (the number of clusters) should be. Data scientists often use the 'elbow method,' plotting the error against different values of k and looking for a sharp bend (an elbow) in the graph to find the optimal number. K-means is widely used in the real world for customer segmentation, allowing companies to group users with similar purchasing habits."
        },
        {
          "id": "ai-ml-101-l04-c2",
          "title": "Dimensionality Reduction with PCA",
          "content": "In real-world machine learning, datasets often contain hundreds or even thousands of features (columns). For example, a high-resolution image might have millions of pixels, each acting as a separate feature. This creates a problem known as the 'curse of dimensionality.' As the number of dimensions increases, models require exponentially more data to learn effectively, training becomes incredibly slow, and the mathematical distances between points become less meaningful.\n\nTo solve this, we use a technique called dimensionality reduction. The most famous algorithm for this is Principal Component Analysis (PCA). PCA's goal is to compress the data, reducing the number of features while retaining as much important information (variance) as possible. It does this by finding new, artificial axes—called principal components—that capture the widest spread of the data. \n\nImagine looking at a 3D cloud of points shaped like a pancake. Instead of needing 3 coordinates (x, y, z) to describe where a point is, PCA realizes the data is mostly flat and projects it onto a 2D plane, effectively dropping the least important dimension. By keeping only the top principal components, we might reduce a dataset from 1,000 features down to just 50, while still keeping 95% of the original information. PCA is also an invaluable tool for data visualization, allowing us to squash complex, high-dimensional data down to 2D or 3D so human eyes can actually look at it."
        },
        {
          "id": "ai-ml-101-l04-c3",
          "title": "Other Unsupervised Techniques and Applications",
          "content": "Beyond K-means and PCA, the unsupervised learning toolkit contains several other powerful methods. One is Hierarchical Clustering, which doesn't require you to guess the number of clusters upfront. Instead, it builds a tree-like visual structure called a dendrogram, showing how individual data points merge into larger and larger clusters. You can then 'cut' the tree at whatever level makes the most sense for your project.\n\nAnother highly effective clustering algorithm is DBSCAN (Density-Based Spatial Clustering of Applications with Noise). Unlike K-means, which assumes clusters are roughly spherical, DBSCAN groups together points that are densely packed together, regardless of their shape. It is also excellent at identifying outliers—points that sit alone in low-density areas are simply labeled as 'noise.'\n\nUnsupervised learning also powers Association Rule Mining, which discovers 'if-this-then-that' patterns. For example, a grocery store might use the Apriori algorithm to discover that customers who buy bread and peanut butter are highly likely to also buy jelly. This logic is the foundation of recommendation engines used by Amazon and Netflix, which use collaborative filtering to group users with similar tastes and suggest products they haven't seen yet.\n\nFinally, unsupervised learning is crucial for Anomaly Detection. By learning what 'normal' data looks like, algorithms can instantly flag data points that deviate significantly from the pattern. This is how banks detect credit card fraud in real-time and how cybersecurity systems identify network intrusions."
        }
      ],
      "flashcards": [
        {
          "id": "ai-ml-101-l04-f1",
          "front": "K-means clustering",
          "back": "Partitions data into k groups by iteratively assigning points to the nearest centroid and recomputing centroids until convergence"
        },
        {
          "id": "ai-ml-101-l04-f2",
          "front": "Elbow method",
          "back": "Plots within-cluster sum of squares (WCSS) vs. k to find the optimal number of clusters — the 'elbow' point"
        },
        {
          "id": "ai-ml-101-l04-f3",
          "front": "Principal Component Analysis (PCA)",
          "back": "Linear dimensionality reduction that projects data onto directions of maximum variance — reduces features while preserving information"
        },
        {
          "id": "ai-ml-101-l04-f4",
          "front": "DBSCAN",
          "back": "Density-based clustering that finds clusters of arbitrary shape and identifies outliers as noise — no need to specify k"
        }
      ],
      "learningAids": [
        {
          "id": "ai-ml-101-l04-a1",
          "type": "image",
          "title": "Clustering vs Dimensionality Reduction",
          "content": "Visual summary: Clustering groups rows (data points) together. Dimensionality reduction compresses columns (features) together."
        }
      ]
    },
    {
      "id": "ai-ml-101-l05",
      "title": "Neural Networks & Deep Learning Foundations",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: A highly detailed, glowing 3D model of a multi-layer artificial neural network. Nodes in the input layer connect via glowing lines to hidden layers, culminating in an output layer. Cyberpunk color palette with deep blacks, neon pinks, and electric blues. Macro photography style.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A glowing data point enters the left side of a 3D neural network. As it travels through the connections, the lines pulse with bright light. The camera follows the signal as it passes through hidden layers, mathematically transforming, until it lights up a specific node on the output layer. High-tech, sleek animation.",
      "objectives": [
        "Describe the architecture of a feedforward neural network: input, hidden, and output layers",
        "Explain forward propagation, loss computation, backpropagation, and weight updates via gradient descent",
        "Compare CNNs for image tasks and RNNs for sequential data"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l05-c1",
          "title": "Anatomy of a Neural Network",
          "content": "Deep learning is a specialized subset of machine learning powered by Artificial Neural Networks, which are algorithms loosely inspired by the structure of the human brain. The most basic architecture is the feedforward neural network. It is organized into distinct layers of interconnected nodes, called 'neurons.'\n\nThe network begins with an Input Layer, where each neuron represents a specific feature of the data (like the pixels of an image). The data then flows into one or more Hidden Layers. Finally, the processed information reaches the Output Layer, which delivers the final prediction. When a network has multiple hidden layers, it is considered a 'deep' neural network.\n\nInside each neuron, a specific mathematical operation occurs. The neuron takes the inputs it receives from the previous layer, multiplies them by specific 'weights' (which determine the importance of each input), sums them all up, and adds a 'bias' term. However, if networks only did this basic math, they would just be giant linear regression models. To allow the network to learn complex, non-linear patterns, the result is passed through an Activation Function. \n\nThe most common activation function in hidden layers is ReLU (Rectified Linear Unit), which simply turns any negative number into a zero, helping the network train faster. For the output layer, we use different functions depending on the task: a Sigmoid function for binary classification (outputting a probability between 0 and 1), or a Softmax function for multi-class problems (ensuring all output probabilities sum to 100%)."
        },
        {
          "id": "ai-ml-101-l05-c2",
          "title": "Training: Forward Pass, Loss, and Backpropagation",
          "content": "Training a neural network is an iterative process of making guesses, calculating errors, and making adjustments. This process happens in three main phases for every batch of data.\n\nFirst is the Forward Pass. The input data is fed into the network, flows through the hidden layers, and produces a prediction at the output layer. Initially, because the network's weights are randomized, this prediction will likely be completely wrong.\n\nNext, we measure how wrong the prediction is by calculating the Loss. The loss function compares the network's prediction to the actual correct answer. For regression tasks, we use Mean Squared Error (MSE); for classification, we use Cross-Entropy Loss. The goal of training is to minimize this loss.\n\nThe magic of deep learning happens in the third phase: the Backward Pass, or Backpropagation. Using a calculus concept called the chain rule, backpropagation works backward from the output layer to the input layer, calculating exactly how much each individual weight and bias contributed to the overall error. It figures out which weights need to increase and which need to decrease.\n\nFinally, the network updates its weights using an optimization algorithm like Gradient Descent (or modern variants like Adam). It adjusts the weights by a tiny amount, controlled by a parameter called the Learning Rate. If the learning rate is too high, the model might overshoot the optimal weights; if it's too low, training will take forever. The network repeats this entire cycle—forward pass, loss calculation, backpropagation, and weight update—thousands of times across multiple 'epochs' (full passes through the dataset) until it becomes highly accurate."
        },
        {
          "id": "ai-ml-101-l05-c3",
          "title": "CNNs, RNNs, and Transformers",
          "content": "While standard feedforward networks are great for basic tabular data, specialized architectures have been developed to handle more complex data types like images, audio, and text.\n\nFor visual data, we use Convolutional Neural Networks (CNNs). Instead of looking at an image as a flat list of pixels, CNNs use 'convolutional layers' that slide small filters (kernels) over the image. These filters act like magnifying glasses, scanning for spatial patterns. Early layers might detect simple edges and textures, while deeper layers combine those edges to recognize complex objects like eyes, wheels, or faces. CNNs also use 'pooling layers' to shrink the image size, making the computation faster. CNNs are the backbone of facial recognition, medical image analysis, and self-driving cars.\n\nFor sequential data—where the order of the data matters, like a sentence of text or a stock market time series—we historically used Recurrent Neural Networks (RNNs). RNNs have a 'memory' (hidden state) that allows them to remember previous inputs in the sequence while processing the current one. Advanced versions of RNNs, like LSTMs (Long Short-Term Memory networks), were designed to remember information over longer sequences without forgetting.\n\nHowever, in 2017, a revolutionary architecture called the Transformer changed everything. Instead of processing data sequentially one step at a time like an RNN, Transformers use a mechanism called 'Self-Attention.' This allows the network to look at every word in a sentence simultaneously and understand the context and relationships between all words, no matter how far apart they are. Because they process data in parallel, Transformers can be scaled up massively. They are the foundational architecture behind modern Large Language Models (LLMs) like GPT, BERT, and Claude."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-ml-101-l05-a1",
          "title": "Match Architecture to Task",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Classifying chest X-rays",
              "right": "CNN"
            },
            {
              "left": "Translating English to French",
              "right": "Transformer"
            },
            {
              "left": "Predicting stock price from time series",
              "right": "RNN / LSTM"
            },
            {
              "left": "Generating text completions (GPT)",
              "right": "Transformer"
            },
            {
              "left": "Detecting objects in self-driving car video",
              "right": "CNN"
            },
            {
              "left": "Sentiment analysis of product reviews",
              "right": "Transformer / RNN"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "ai-ml-101-l05-f1",
          "front": "Backpropagation",
          "back": "Uses the chain rule to propagate loss gradients backward through the network, computing each weight's contribution to the error"
        },
        {
          "id": "ai-ml-101-l05-f2",
          "front": "ReLU activation",
          "back": "max(0, z) — the default hidden-layer activation; avoids vanishing gradients and allows fast training"
        },
        {
          "id": "ai-ml-101-l05-f3",
          "front": "Convolutional Neural Network (CNN)",
          "back": "Uses convolutional filters and pooling to extract spatial features from images — powers vision tasks like ImageNet classification"
        },
        {
          "id": "ai-ml-101-l05-f4",
          "front": "Transformer architecture",
          "back": "Uses self-attention to process all tokens in parallel — the foundation of GPT, BERT, and modern large language models"
        }
      ],
      "learningAids": [
        {
          "id": "ai-ml-101-l05-a1",
          "type": "practice",
          "title": "The Deep Learning Cycle",
          "content": "Memorize the loop: 1. Forward Pass (Predict) -> 2. Calculate Loss (Error) -> 3. Backpropagation (Find Gradients) -> 4. Gradient Descent (Update Weights)."
        }
      ]
    },
    {
      "id": "ai-ml-101-l06",
      "title": "Unsupervised Learning & Neural Networks Checkpoint",
      "type": "quiz",
      "duration": 8,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing digital lock unlocking, revealing a bright core of data. The lock is made of interconnected neural network nodes. High-tech, futuristic security concept, neon green and blue lighting.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced visual recap animation: A cluster of 3D data points snaps into three distinct groups, then the camera zooms infinitely into one point, revealing it is actually a complex, pulsing neural network processing an image of a cat. Seamless transition, 4k resolution.",
      "objectives": [
        "Demonstrate understanding of clustering, dimensionality reduction, and neural network training"
      ],
      "questions": [
        {
          "id": "ai-ml-101-l06-q1",
          "text": "In k-means clustering, what happens during each iteration?",
          "options": [
            {
              "id": "a",
              "text": "New features are created from the data"
            },
            {
              "id": "b",
              "text": "Points are assigned to the nearest centroid, then centroids are recomputed as the mean of assigned points"
            },
            {
              "id": "c",
              "text": "The number of clusters is automatically determined"
            },
            {
              "id": "d",
              "text": "Labels are assigned by a human supervisor"
            }
          ],
          "correctOptionId": "b",
          "explanation": "K-means alternates between assignment (nearest centroid) and update (recompute centroid) until convergence."
        },
        {
          "id": "ai-ml-101-l06-q2",
          "text": "PCA reduces dimensionality by:",
          "options": [
            {
              "id": "a",
              "text": "Randomly deleting features"
            },
            {
              "id": "b",
              "text": "Duplicating important features"
            },
            {
              "id": "c",
              "text": "Projecting data onto the directions of maximum variance (principal components)"
            },
            {
              "id": "d",
              "text": "Converting all features to binary"
            }
          ],
          "correctOptionId": "c",
          "explanation": "PCA finds orthogonal axes (eigenvectors of the covariance matrix) capturing the most variance, then projects data onto the top components."
        },
        {
          "id": "ai-ml-101-l06-q3",
          "text": "During backpropagation, gradients are computed using:",
          "options": [
            {
              "id": "a",
              "text": "Random number generation"
            },
            {
              "id": "b",
              "text": "Forward pass only"
            },
            {
              "id": "c",
              "text": "Manual weight adjustment by the programmer"
            },
            {
              "id": "d",
              "text": "The chain rule of calculus, propagating loss backward through each layer"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Backpropagation applies the chain rule to decompose the overall loss gradient into per-weight gradients layer by layer."
        },
        {
          "id": "ai-ml-101-l06-q4",
          "text": "CNNs are preferred for image tasks because they:",
          "options": [
            {
              "id": "a",
              "text": "Use convolutional filters to detect spatial patterns like edges and textures"
            },
            {
              "id": "b",
              "text": "Have no trainable parameters"
            },
            {
              "id": "c",
              "text": "Process text more efficiently than transformers"
            },
            {
              "id": "d",
              "text": "Require no training data"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Convolutional layers scan local regions of an image with learnable filters, building hierarchical feature representations."
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
      "id": "ai-ml-101-l07",
      "title": "Model Training: Bias, Variance, Overfitting & Cross-Validation",
      "type": "video",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A visual 3D representation of three archery target boards. One board has arrows tightly clustered but off-center. Another has arrows scattered widely around the center. A third has arrows perfectly in the glowing bullseye. Studio lighting, realistic textures.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a glowing line trying to fit a set of floating data points. First, it's a stiff straight line that misses the curves. Then, it becomes a wildly squiggly line that touches every single point perfectly but looks chaotic. Finally, it relaxes into a smooth, elegant curve that captures the general trend perfectly.",
      "objectives": [
        "Explain the bias-variance trade-off and its impact on model generalization",
        "Identify overfitting and underfitting through learning curves",
        "Describe k-fold cross-validation and regularization techniques"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l07-c1",
          "title": "The Bias-Variance Trade-Off",
          "content": "When training machine learning models, our ultimate goal is 'generalization'—we want the model to perform well on new, unseen data, not just the data it was trained on. To achieve this, we must navigate the Bias-Variance Trade-Off, which involves balancing two main sources of error.\n\nBias is the error introduced when a model is too simple to capture the underlying patterns in the data. Imagine trying to fit a straight line to data that curves like a bowl. The straight line will make poor predictions because it assumes the relationship is simpler than it actually is. This is called Underfitting. A model with high bias pays very little attention to the training data and oversimplifies the problem.\n\nVariance is the exact opposite. It is the error introduced when a model is too complex and highly sensitive to the specific quirks and random noise in the training data. Imagine a wildly squiggly line that perfectly connects every single data point, including the outliers. While this model gets a perfect score on the training data, it will fail miserably when given new data because it memorized the noise rather than learning the true pattern. This is called Overfitting.\n\nThe sweet spot is finding a model complex enough to capture the true signal (low bias) but simple enough to ignore the noise (low variance). We monitor this by looking at learning curves. If both training error and validation error are high, the model is underfitting. If training error is very low but validation error is high, the model is overfitting."
        },
        {
          "id": "ai-ml-101-l07-c2",
          "title": "Evaluation Metrics and the Confusion Matrix",
          "content": "To know if our model is actually good, we need the right metrics. For classification tasks, we start with a tool called the Confusion Matrix. It breaks down our predictions into four categories:\n- True Positives (TP): The model predicted 'Yes', and the actual answer was 'Yes'.\n- True Negatives (TN): The model predicted 'No', and the actual answer was 'No'.\n- False Positives (FP): The model predicted 'Yes', but the actual answer was 'No' (a false alarm).\n- False Negatives (FN): The model predicted 'No', but the actual answer was 'Yes' (a missed detection).\n\nFrom this matrix, we calculate several key metrics. Accuracy is the percentage of total correct predictions. However, accuracy can be misleading if the data is imbalanced. If 99% of emails are normal and 1% are spam, a broken model that always guesses 'normal' will be 99% accurate, but completely useless at finding spam.\n\nTo fix this, we use Precision and Recall. Precision asks: 'Out of all the items the model claimed were positive, how many actually were?' (High precision means few false alarms). Recall asks: 'Out of all the actual positive items in the data, how many did the model successfully find?' (High recall means few missed detections). \n\nThere is often a trade-off between the two. In a medical test for a severe disease, you want high Recall (you don't want to miss anyone who is sick, even if it means a few false alarms). For a spam filter, you want high Precision (you don't want to accidentally send an important work email to the spam folder). The F1-Score is a metric that combines both Precision and Recall into a single number to give a balanced view of performance."
        },
        {
          "id": "ai-ml-101-l07-c3",
          "title": "Cross-Validation and Regularization",
          "content": "To ensure our model's evaluation metrics are reliable, we can't just test it on the data it trained on. The simplest approach is a Train/Test split (e.g., 80% for training, 20% for testing). However, if we get 'lucky' or 'unlucky' with how the data is split, our evaluation might be skewed. \n\nA more robust method is K-Fold Cross-Validation. We divide the dataset into 'k' equal chunks (folds), usually 5 or 10. The model trains on 4 folds and tests on the 1st fold. Then it resets, trains on a different combination of 4 folds, and tests on the 2nd fold. It repeats this until every fold has been used as the test set exactly once. We then average the scores to get a highly reliable estimate of how the model will perform in the real world.\n\nIf we discover our model is overfitting during cross-validation, we use Regularization techniques to force the model to be simpler. \n- L1 Regularization (Lasso) adds a penalty to the loss function that forces the weights of unimportant features to become exactly zero, effectively ignoring them.\n- L2 Regularization (Ridge) adds a penalty that shrinks all weights closer to zero, preventing any single feature from having too much influence.\n- In Neural Networks, we use Dropout, which randomly turns off a percentage of neurons during training. This prevents the network from relying too heavily on any specific pathway, forcing it to learn more robust, generalized features. We also use Early Stopping, which automatically halts training the moment the validation error starts to increase, preventing the model from memorizing the noise."
        }
      ],
      "flashcards": [
        {
          "id": "ai-ml-101-l07-f1",
          "front": "Overfitting",
          "back": "Model memorizes training noise and performs poorly on new data — high variance, low bias; detected when training error ≪ validation error"
        },
        {
          "id": "ai-ml-101-l07-f2",
          "front": "Confusion matrix",
          "back": "Table of TP, TN, FP, FN — the foundation for computing accuracy, precision, recall, and F1-score"
        },
        {
          "id": "ai-ml-101-l07-f3",
          "front": "F1-score",
          "back": "Harmonic mean of precision and recall: F1 = 2·(P·R)/(P+R) — balances false positives and false negatives"
        },
        {
          "id": "ai-ml-101-l07-f4",
          "front": "K-fold cross-validation",
          "back": "Splits data into k folds; each fold serves as test set once, averaging scores for a robust generalization estimate"
        }
      ],
      "learningAids": [
        {
          "id": "ai-ml-101-l07-a1",
          "type": "image",
          "title": "The Bullseye Analogy",
          "content": "Visual summary: High Bias is missing the target entirely (underfitting). High Variance is hitting all over the board (overfitting). Low Bias & Low Variance is a tight cluster in the bullseye."
        }
      ]
    },
    {
      "id": "ai-ml-101-l08",
      "title": "Real-World ML Pipeline: Data Prep, Feature Engineering & Deployment",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "Imagen 4 prompt: An isometric 3D illustration of a futuristic factory assembly line. Raw, messy data blocks enter on a conveyor belt, pass through glowing cleaning and processing machines, and emerge as polished, glowing AI models ready for deployment. Clean, vibrant tech aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A continuous tracking shot following a glowing block of data on a digital conveyor belt. It gets scrubbed clean of dirt, painted with new colors, compressed, and finally inserted into a glowing server rack. High-quality 3D motion graphics, seamless loop style.",
      "objectives": [
        "Outline the end-to-end ML pipeline from raw data to production deployment",
        "Apply feature scaling, one-hot encoding, and feature selection techniques",
        "Explain MLOps concepts: model versioning, monitoring, and retraining triggers"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l08-c1",
          "title": "Data Preparation in Practice",
          "content": "In the real world, data scientists spend up to 80% of their time preparing data before a machine learning model is ever trained. Raw data is often messy, incomplete, and formatted inconsistently. The first step in the ML pipeline is Data Cleaning. This involves handling missing values—either by deleting rows with missing data or filling the gaps (imputation) using the median or mean for numbers, and the mode for categories. We also must remove duplicate entries and fix formatting errors.\n\nOnce the data is clean, we perform Exploratory Data Analysis (EDA). During EDA, we use visualizations like histograms, scatter plots, and correlation matrices to understand the distribution of our data, spot outliers, and find relationships between variables.\n\nCrucially, before we apply any mathematical transformations to our data, we must perform the Train/Test Split. We typically divide the data into a Training set (e.g., 70%), a Validation set for tuning the model (15%), and a Test set for final evaluation (15%). It is vital to split the data early to prevent Data Leakage. Data leakage occurs when information from the test set accidentally influences the training process. For example, if you calculate the average price of all houses in your dataset to fill in missing values, and then split the data, the training set has 'seen' the average of the test set. This will make your model look artificially successful during testing, but it will fail in the real world."
        },
        {
          "id": "ai-ml-101-l08-c2",
          "title": "Feature Engineering and Encoding",
          "content": "Machine learning models only understand numbers, and they are highly sensitive to the scale of those numbers. Feature Engineering is the process of transforming raw data into a format that algorithms can easily digest.\n\nOne major step is Feature Scaling. Imagine a dataset predicting house prices using 'Number of Bedrooms' (values 1-5) and 'Square Footage' (values 500-5000). Because the square footage numbers are so much larger, algorithms like K-Means or Neural Networks might mistakenly assume square footage is a thousand times more important than bedrooms. To fix this, we use Min-Max Scaling (squashing all values between 0 and 1) or Standardization (centering the data around a mean of 0 with a standard deviation of 1). Note: Tree-based models like Random Forests do not require feature scaling.\n\nNext, we must handle categorical text data, like a column for 'Color' containing 'Red', 'Green', and 'Blue'. We cannot simply assign them numbers (1, 2, 3) because the model will assume Blue (3) is mathematically greater than Red (1). Instead, we use One-Hot Encoding. This creates a new binary column for every category. If a row is 'Red', it gets a 1 in the 'Is_Red' column and a 0 in the others.\n\nFinally, we perform Feature Selection. Feeding a model too many irrelevant features adds noise and slows down training. We drop columns that have no predictive value or are highly correlated with each other, ensuring the model only learns from the most impactful data."
        },
        {
          "id": "ai-ml-101-l08-c3",
          "title": "MLOps: From Notebook to Production",
          "content": "Training a model in a Jupyter notebook is only the beginning. To make a model useful, it must be deployed into the real world where users can interact with it. This transition is managed by a field called MLOps (Machine Learning Operations), which combines ML with software engineering best practices.\n\nThe first pillar of MLOps is Version Control. Just as software developers track changes to code, data scientists use tools like DVC and MLflow to track exactly which dataset, code, and hyperparameters were used to train a specific version of a model. This ensures reproducibility.\n\nNext is Model Serving. Once trained, the model is often packaged into a container (like Docker) and deployed to a cloud server. It is placed behind an API (Application Programming Interface). When a user's app needs a prediction, it sends the data to the API, the model processes it, and sends the prediction back in milliseconds.\n\nHowever, the real world is constantly changing. A model trained to predict housing prices in 2019 will perform terribly in 2024 because the economy changed. This degradation is called Data Drift. MLOps requires continuous Monitoring of the model's predictions in production. If the system detects that the incoming data looks different from the training data, or if the model's confidence drops, it triggers an automated Retraining Pipeline. This pipeline fetches the latest data, retrains the model, tests it, and seamlessly deploys the updated version, ensuring the AI remains accurate over time."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-ml-101-l08-a1",
          "title": "Order the ML Pipeline Steps",
          "type": "timeline_builder",
          "steps": [
            {
              "id": "s1",
              "text": "Collect and explore raw data (EDA)"
            },
            {
              "id": "s2",
              "text": "Clean data: handle missing values and duplicates"
            },
            {
              "id": "s3",
              "text": "Split data into train, validation, and test sets"
            },
            {
              "id": "s4",
              "text": "Feature engineering: scaling and one-hot encoding"
            },
            {
              "id": "s5",
              "text": "Train the model on the training set"
            },
            {
              "id": "s6",
              "text": "Evaluate and tune using the validation set"
            },
            {
              "id": "s7",
              "text": "Deploy the model behind an API and monitor for drift"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "ai-ml-101-l08-f1",
          "front": "Data leakage",
          "back": "When information from the test set contaminates training — e.g., computing global statistics before splitting — leads to over-optimistic metrics"
        },
        {
          "id": "ai-ml-101-l08-f2",
          "front": "One-hot encoding",
          "back": "Converts a categorical feature with k categories into k binary columns — each row has a single 1 indicating its category"
        },
        {
          "id": "ai-ml-101-l08-f3",
          "front": "Feature scaling (standardization)",
          "back": "Transforms features to mean 0 and standard deviation 1: z = (x − μ)/σ — essential for distance-based algorithms and gradient descent"
        },
        {
          "id": "ai-ml-101-l08-f4",
          "front": "Data drift",
          "back": "When the distribution of production data shifts away from training data, degrading model performance and triggering retraining"
        }
      ],
      "learningAids": [
        {
          "id": "ai-ml-101-l08-a1",
          "type": "practice",
          "title": "The Golden Rule of Data Splitting",
          "content": "Always split your data BEFORE applying any transformations like scaling or imputation to prevent Data Leakage!"
        }
      ]
    },
    {
      "id": "ai-ml-101-l09",
      "title": "Model Training & ML Pipeline Checkpoint",
      "type": "quiz",
      "duration": 8,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic holographic dashboard displaying various charts, graphs, and a glowing green 'System Optimal' sign, representing successful model evaluation and deployment. UI/UX design focus, dark mode, glowing accents.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A quick 3D motion graphics montage showing a target board with arrows hitting the bullseye, smoothly transitioning to a glowing confusion matrix lighting up with green checkmarks, and ending with a massive server rack powering on with blue LEDs.",
      "objectives": [
        "Demonstrate understanding of bias-variance trade-off, evaluation metrics, and MLOps practices"
      ],
      "questions": [
        {
          "id": "ai-ml-101-l09-q1",
          "text": "A model with high training accuracy but low test accuracy is most likely:",
          "options": [
            {
              "id": "a",
              "text": "Underfitting — it is too simple to learn any patterns"
            },
            {
              "id": "b",
              "text": "Perfectly calibrated"
            },
            {
              "id": "c",
              "text": "Overfitting — it memorized training noise and fails to generalize"
            },
            {
              "id": "d",
              "text": "Experiencing hardware failure"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A large gap between training and test performance is the hallmark of overfitting — the model has high variance."
        },
        {
          "id": "ai-ml-101-l09-q2",
          "text": "In a medical screening test, which metric should be prioritized to avoid missing true cases?",
          "options": [
            {
              "id": "a",
              "text": "Precision — avoiding false positives"
            },
            {
              "id": "b",
              "text": "Recall (sensitivity) — catching all actual positives"
            },
            {
              "id": "c",
              "text": "Accuracy alone"
            },
            {
              "id": "d",
              "text": "Training speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High recall minimizes false negatives — critical when missing a case (e.g., undetected cancer) is more dangerous than a false alarm."
        },
        {
          "id": "ai-ml-101-l09-q3",
          "text": "One-hot encoding is used to:",
          "options": [
            {
              "id": "a",
              "text": "Scale numerical features to [0, 1]"
            },
            {
              "id": "b",
              "text": "Remove outliers from the dataset"
            },
            {
              "id": "c",
              "text": "Split data into train and test sets"
            },
            {
              "id": "d",
              "text": "Convert categorical variables into binary columns so ML algorithms can process them"
            }
          ],
          "correctOptionId": "d",
          "explanation": "One-hot encoding creates k binary columns for k categories — each row has exactly one '1' indicating its category."
        },
        {
          "id": "ai-ml-101-l09-q4",
          "text": "Data drift in a production ML system refers to:",
          "options": [
            {
              "id": "a",
              "text": "Production data distributions shifting from what the model was trained on, degrading accuracy"
            },
            {
              "id": "b",
              "text": "The model's weights randomly changing after deployment"
            },
            {
              "id": "c",
              "text": "Data being deleted from the database"
            },
            {
              "id": "d",
              "text": "The learning rate increasing over time"
            }
          ],
          "correctOptionId": "a",
          "explanation": "When real-world data changes (e.g., customer behavior shifts), the model's assumptions become stale and performance degrades."
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
      "id": "ai-ml-101-l10",
      "title": "Mastery Quiz: AI & Machine Learning",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A grand, glowing golden trophy shaped like a stylized human brain intertwined with digital circuitry, resting on a sleek obsidian pedestal. High-end 3D render, dramatic studio lighting, 8k resolution.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A sweeping drone-style camera move over a vast, glowing digital landscape where all the concepts from the course—decision trees, neural networks, data pipelines, and clustering—are operating in perfect harmony, culminating in a bright flash of light that forms a golden mastery badge.",
      "objectives": [
        "Synthesize all AI & Machine Learning concepts across the module"
      ],
      "questions": [
        {
          "id": "ai-ml-101-l10-q1",
          "text": "AlphaGo's victory over Lee Sedol in 2016 demonstrated the power of:",
          "options": [
            {
              "id": "a",
              "text": "Linear regression on historical game data"
            },
            {
              "id": "b",
              "text": "Reinforcement learning combined with deep neural networks"
            },
            {
              "id": "c",
              "text": "A hand-written rule-based expert system"
            },
            {
              "id": "d",
              "text": "Unsupervised clustering of board positions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "AlphaGo used Monte Carlo tree search guided by deep neural networks trained via reinforcement learning from self-play."
        },
        {
          "id": "ai-ml-101-l10-q2",
          "text": "Gradient descent updates model weights by:",
          "options": [
            {
              "id": "a",
              "text": "Randomly reassigning all weights each epoch"
            },
            {
              "id": "b",
              "text": "Doubling all weights after each forward pass"
            },
            {
              "id": "c",
              "text": "Moving weights in the direction that reduces the loss, controlled by the learning rate"
            },
            {
              "id": "d",
              "text": "Keeping weights fixed and changing the data"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Gradient descent subtracts a fraction (learning rate) of the loss gradient from each weight, iteratively minimizing the loss."
        },
        {
          "id": "ai-ml-101-l10-q3",
          "text": "The F1-score is the harmonic mean of:",
          "options": [
            {
              "id": "a",
              "text": "Bias and variance"
            },
            {
              "id": "b",
              "text": "Accuracy and loss"
            },
            {
              "id": "c",
              "text": "Precision and recall"
            },
            {
              "id": "d",
              "text": "Training time and model size"
            }
          ],
          "correctOptionId": "c",
          "explanation": "F1 = 2·(Precision·Recall)/(Precision+Recall) balances false positives (precision) and false negatives (recall)."
        },
        {
          "id": "ai-ml-101-l10-q4",
          "text": "Which technique prevents data leakage during preprocessing?",
          "options": [
            {
              "id": "a",
              "text": "Using the entire dataset to compute the mean before splitting"
            },
            {
              "id": "b",
              "text": "Splitting into train/test before computing any global statistics"
            },
            {
              "id": "c",
              "text": "Training and testing on the same data"
            },
            {
              "id": "d",
              "text": "Ignoring the test set entirely"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Computing statistics (mean, std) on the full dataset before splitting leaks test-set information into training preprocessing."
        },
        {
          "id": "ai-ml-101-l10-q5",
          "text": "L2 regularization (Ridge) reduces overfitting by:",
          "options": [
            {
              "id": "a",
              "text": "Removing all hidden layers"
            },
            {
              "id": "b",
              "text": "Increasing the learning rate"
            },
            {
              "id": "c",
              "text": "Adding more training data automatically"
            },
            {
              "id": "d",
              "text": "Adding a penalty to the loss function that shrinks weights toward zero"
            }
          ],
          "correctOptionId": "d",
          "explanation": "L2 adds a penalty based on squared weights to the loss function, shrinking weights and discouraging the model from relying too heavily on any single feature."
        },
        {
          "id": "ai-ml-101-l10-q6",
          "text": "A recommendation system that groups users by viewing history without predefined labels uses:",
          "options": [
            {
              "id": "a",
              "text": "Unsupervised learning (collaborative filtering / clustering)"
            },
            {
              "id": "b",
              "text": "Supervised regression"
            },
            {
              "id": "c",
              "text": "Reinforcement learning"
            },
            {
              "id": "d",
              "text": "Manual curation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Collaborative filtering clusters users or items by similarity in an unsupervised manner — no predefined categories needed."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 2,
          "analyze": 1
        }
      }
    }
  ]
};
