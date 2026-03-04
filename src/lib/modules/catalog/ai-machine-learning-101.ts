import type { LearningModule } from "@/lib/modules/types";

export const AiMachineLearning101Module: LearningModule = {
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
  "version": "2.0.0",
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
      "objectives": [
        "Trace the history of AI from the 1956 Dartmouth Conference to modern deep learning",
        "Distinguish Narrow AI (ANI) from Artificial General Intelligence (AGI)",
        "Explain the Turing Test and its significance in evaluating machine intelligence"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l01-c1",
          "title": "A Brief History of AI",
          "content": "Artificial Intelligence, commonly referred to as AI, is an exciting branch of science that aims to create machines capable of thinking, learning, and acting similarly to humans. The story of AI began in 1956 during a pivotal gathering known as the Dartmouth Conference. It was here that a brilliant scientist named John McCarthy first coined the term 'Artificial Intelligence.' In those early days, researchers primarily focused on a method called symbolic AI. This approach involved creating specific rules that machines could follow to perform tasks. A notable example from this era is MYCIN, a system developed in 1976 that was designed to diagnose bacterial infections.\nHowever, the journey of AI was not always smooth. In the 1980s, the field encountered significant challenges, leading to a period known as the first 'AI winter.' During this time, progress in AI research slowed down considerably, and many people became skeptical about the future of AI.\nFortunately, the excitement around AI was reignited in the 2000s thanks to remarkable advancements in technology. Faster computer processors, the availability of massive datasets, and innovative algorithms played a crucial role in revitalizing the field. A key turning point in AI history occurred in 2006 when Geoffrey Hinton made groundbreaking discoveries in deep learning, a subset of AI that mimics the way humans learn.\nSince then, we have witnessed incredible milestones in AI development. For instance, in 1997, IBM's Deep Blue made headlines by defeating the world chess champion Garry Kasparov. Then, in 2011, IBM Watson showcased its capabilities by winning the popular quiz show Jeopardy! More recently, in 2016, AlphaGo achieved a remarkable feat by defeating the world champion Lee Sedol in the complex game of Go. Additionally, the introduction of the GPT series of language models from 2018 onward has revolutionized how machines understand and generate human language, making interactions with technology more natural and intuitive.\nAI continues to evolve, and its potential applications are vast, ranging from healthcare to entertainment, making it an exciting field to explore and understand.\nContext recap: Artificial Intelligence, commonly referred to as AI, is an exciting branch of science that aims to create machines capable of thinking, learning, and acting similarly to humans. The story of AI began in 1956 during a pivotal gathering known as the Dartmouth Conference. It was here that a brilliant scientist named John McCarthy first coined the term 'Artificial Intelligence.' In those early days, researchers primarily focused on a method called symbolic AI. This approach involved creating specific rules that machines could follow to perform tasks.\nWhy this matters: A Brief History of AI helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-ml-101-l01-c2",
          "title": "Narrow AI vs. General AI",
          "content": "In the fascinating world of artificial intelligence (AI), we can categorize AI into two main types: Narrow AI and General AI. Right now, all the AI systems we interact with are examples of Narrow AI, which means they are specifically designed to excel at one particular task. For example, a spam filter is great at identifying unwanted emails, but it cannot drive a car or translate languages. This specialization allows Narrow AI to sometimes outperform humans in its designated area. A notable instance of this occurred in 2015 when AI systems that classify images achieved higher accuracy than humans in a competition known as ImageNet.\nOn the other hand, we have the concept of Artificial General Intelligence (AGI). AGI refers to a type of AI that would possess the ability to understand and learn any intellectual task that a human can do. This means that an AGI could potentially learn how to cook, write poetry, or even diagnose medical conditions without needing specific training for each individual task. However, it is important to note that AGI is still a theoretical idea, and experts in the field do not have a consensus on when or if we will ever achieve it.\nBeyond AGI, there is an even more advanced concept called Artificial Super Intelligence (ASI). ASI describes a hypothetical form of AI that would surpass human intelligence in every possible way. This idea remains largely speculative and is a topic of much discussion and imagination among researchers and enthusiasts alike. As we explore these concepts, it is essential to think critically about the implications and possibilities of AI in our future.\nContext recap: In the fascinating world of artificial intelligence (AI), we can categorize AI into two main types: Narrow AI and General AI. Right now, all the AI systems we interact with are examples of Narrow AI, which means they are specifically designed to excel at one particular task. For example, a spam filter is great at identifying unwanted emails, but it cannot drive a car or translate languages. This specialization allows Narrow AI to sometimes outperform humans in its designated area.\nWhy this matters: Narrow AI vs. General AI helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ai-ml-101-l01-c3",
          "title": "The Turing Test and Machine Intelligence",
          "content": "In 1950, a brilliant mathematician named Alan Turing introduced an interesting idea known as the 'imitation game.' The concept is simple: if a human evaluator cannot tell the difference between responses from a machine and those from a human, then we can say that the machine is exhibiting intelligent behavior. This idea, known as the Turing Test, has influenced AI research for many years. However, it has some limitations. For example, a machine might pass the test by cleverly avoiding questions rather than truly understanding them. Today, researchers use more advanced methods to evaluate AI. They employ benchmarks like GLUE, SuperGLUE, and MMLU to measure how well machines understand language. For visual tasks, benchmarks like ImageNet and COCO are used to assess how well machines perceive images. A big question remains: does passing these tests mean that a machine truly understands what it is doing, or is it just simulating understanding? This philosophical debate, highlighted by John Searle's Chinese Room argument, continues to be a topic of discussion among experts.\nTo dive deeper, let's explore what these benchmarks really mean. GLUE, for instance, is a collection of tasks that test a machine's ability to understand and process human language. SuperGLUE is an even tougher version, designed to challenge the most advanced AI systems. Similarly, MMLU assesses how well machines can answer questions across various subjects, from science to history.\nOn the visual side, ImageNet is a massive database of images that helps train AI to recognize objects, while COCO focuses on understanding images in a more complex way, like identifying relationships between objects. These tools help researchers understand the capabilities and limitations of AI.\nUltimately, the question of whether machines can truly 'understand' remains open. Some argue that even if a machine can perform tasks that seem intelligent, it doesn't mean it has consciousness or genuine comprehension. This ongoing debate encourages us to think critically about the nature of intelligence, both human and artificial, and what it means to understand something deeply. As technology continues to evolve, so too will our understanding of these complex issues.\nContext recap: In 1950, a brilliant mathematician named Alan Turing introduced an interesting idea known as the 'imitation game.' The concept is simple: if a human evaluator cannot tell the difference between responses from a machine and those from a human, then we can say that the machine is exhibiting intelligent behavior. This idea, known as the Turing Test, has influenced AI research for many years. However, it has some limitations. For example, a machine might pass the test by cleverly avoiding questions rather than truly understanding them.\nWhy this matters: The Turing Test and Machine Intelligence helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "ai-ml-101-l02",
      "title": "Supervised Learning: Regression & Classification",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Differentiate regression (continuous output) from classification (discrete output)",
        "Explain how linear regression minimizes mean squared error using gradient descent",
        "Compare decision trees, random forests, and gradient boosting for classification tasks"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l02-c1",
          "title": "Regression: Predicting Continuous Values",
          "content": "Supervised learning is an important technique in artificial intelligence (AI) that helps us teach models how to make predictions based on examples we provide. In supervised learning, we use labeled data, which means that each example includes both the input features and the correct output label. This helps the model learn the relationship between the inputs and the outputs. One of the key tasks in supervised learning is called regression, which is used to predict continuous values. For example, we might want to predict how much a house will sell for, how the stock market will perform, or what the temperature will be like tomorrow.\nTo perform regression, we often use a method called linear regression. This method finds the best-fitting line that represents the relationship between our input features and the output we want to predict. The goal is to minimize the Mean Squared Error (MSE), which is a way to measure how far off our predictions are from the actual values. A lower MSE means our predictions are more accurate.\nTo improve our model's accuracy, we use a technique called gradient descent. This involves calculating the slope of the loss function, which tells us how much we need to adjust each weight in our model to reduce the error. By making these adjustments repeatedly over many iterations, we can find the line that best fits our data.\nIf we have more than one input feature, we can extend our approach to something called multiple linear regression. This method combines all the features into a single formula to make predictions. Additionally, if the relationship between our input features and the output is not a straight line, we can use polynomial regression. This technique allows us to include squared or cubed terms in our calculations, which helps us model more complex, non-linear relationships. By understanding these concepts, we can better utilize supervised learning to make accurate predictions in various fields, from real estate to finance and beyond.\nContext recap: Supervised learning is an important technique in artificial intelligence (AI) that helps us teach models how to make predictions based on examples we provide. In supervised learning, we use labeled data, which means that each example includes both the input features and the correct output label. This helps the model learn the relationship between the inputs and the outputs. One of the key tasks in supervised learning is called regression, which is used to predict continuous values.\nWhy this matters: Regression: Predicting Continuous Values helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-ml-101-l02-c2",
          "title": "Classification: Predicting Categories",
          "content": "Classification is a key concept in supervised learning, where we categorize inputs into specific groups or classes. For instance, we can classify emails as either spam or not spam, or we might determine if an image shows a cat or a dog. One popular method for performing classification is called logistic regression. Although it has the word 'regression' in its name, logistic regression is actually used for classification tasks.\nThis method works by taking a combination of the input features and processing it through a special mathematical function known as the sigmoid function. The sigmoid function transforms the output into a value between 0 and 1, which indicates the likelihood or probability that the input belongs to a particular class. After calculating this probability, we set a threshold—commonly at 0.5—to decide the final class label. If the probability exceeds this threshold, we classify the input into one category; if it falls below, we classify it into another.\nTo evaluate how well our classification is performing, we use a loss function called binary cross-entropy. This function is important because it heavily penalizes predictions that are made with high confidence but are incorrect, encouraging the model to improve its accuracy.\nIn cases where there are more than two classes to choose from, we use a technique called softmax regression. This method calculates a probability for each possible class, ensuring that all probabilities add up to 1.\nIn the real world, logistic regression is commonly used in applications like email spam filters, which help keep our inboxes free from unwanted messages. Similarly, in the medical field, logistic regression can be used to classify test results as either positive or negative, helping doctors make informed decisions about patient care.\nContext recap: Classification is a key concept in supervised learning, where we categorize inputs into specific groups or classes. For instance, we can classify emails as either spam or not spam, or we might determine if an image shows a cat or a dog. One popular method for performing classification is called logistic regression. Although it has the word 'regression' in its name, logistic regression is actually used for classification tasks.\nWhy this matters: Classification: Predicting Categories helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-ml-101-l02-c3",
          "title": "Tree-Based and Ensemble Methods",
          "content": "Tree-based methods are an exciting and powerful approach in supervised learning, which is a type of machine learning where we teach computers to make predictions based on labeled data. One of the most popular tree-based methods is called a decision tree. Imagine a decision tree as a flowchart that helps us make decisions by asking a series of yes or no questions about the features of our data. For example, if we were trying to predict whether a fruit is an apple or an orange, the tree might first ask, 'Is it red?' If the answer is yes, it might then ask, 'Is it round?' This process continues until we reach the end of the tree, known as the leaves, which contain our final predictions. Decision trees are intuitive and easy to understand, but they can sometimes become too complex, leading to a problem known as overfitting. Overfitting happens when the model learns the training data too well, including its noise and outliers, which can make it perform poorly on new, unseen data. To overcome this issue, we can use a technique called random forests. A random forest is like a team of decision trees. Instead of relying on just one tree, we train many decision trees on different random subsets of the data and features. When it’s time to make a prediction, we combine the results from all these trees. For regression tasks, we average the predictions, while for classification tasks, we let the trees vote on the most popular class. This method is known as bagging, and it helps improve the model's accuracy and robustness. Another advanced technique is called gradient boosting. In gradient boosting, we build trees one after another, where each new tree is designed to fix the errors made by the previous trees in the ensemble. This sequential approach allows gradient boosting to be very effective, especially in competitions like Kaggle, where participants strive to create the best predictive models. However, there is a trade-off to consider: while random forests are generally more robust to noise and can handle a variety of data well, gradient boosting can achieve lower error rates but requires careful tuning of parameters like the learning rate, maximum depth of the trees, and the number of trees in the model. Understanding these methods can greatly enhance our ability to make accurate predictions in various applications, from finance to healthcare and beyond.\nContext recap: Tree-based methods are an exciting and powerful approach in supervised learning, which is a type of machine learning where we teach computers to make predictions based on labeled data. One of the most popular tree-based methods is called a decision tree. Imagine a decision tree as a flowchart that helps us make decisions by asking a series of yes or no questions about the features of our data. For example, if we were trying to predict whether a fruit is an apple or an orange, the tree might first ask, 'Is it red?' If the answer is yes, it might then ask, 'Is it round?' This process continues until we reach the end of the tree, known as the leaves, which contain our final predictions."
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
          "back": "Fits y = wx + b by minimizing Mean Squared Error — predicts continuous values like price or temperature"
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
          "back": "Sequential ensemble where each tree corrects errors of previous trees — often wins competitions (XGBoost, LightGBM)"
        }
      ],
      "learningAids": [
        {
          "id": "ai-ml-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "ai-ml-101-l03",
      "title": "AI Foundations & Supervised Learning Checkpoint",
      "type": "quiz",
      "duration": 8,
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
              "text": "1956 Dartmouth Conference by John McCarthy"
            },
            {
              "id": "b",
              "text": "1969 Moon landing by NASA engineers"
            },
            {
              "id": "c",
              "text": "1984 Apple Macintosh launch"
            },
            {
              "id": "d",
              "text": "2012 ImageNet competition"
            }
          ],
          "correctOptionId": "a",
          "explanation": "John McCarthy organized the 1956 Dartmouth Conference and coined the term 'Artificial Intelligence' to describe the new research field."
        },
        {
          "id": "ai-ml-101-l03-q2",
          "text": "Linear regression minimizes which loss function?",
          "options": [
            {
              "id": "a",
              "text": "Mean Squared Error (MSE)"
            },
            {
              "id": "b",
              "text": "Binary cross-entropy"
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
          "correctOptionId": "a",
          "explanation": "MSE averages the squared differences between predictions and actual values, penalizing large errors more heavily."
        },
        {
          "id": "ai-ml-101-l03-q3",
          "text": "Logistic regression outputs a probability by applying which function?",
          "options": [
            {
              "id": "a",
              "text": "Sigmoid (logistic) function"
            },
            {
              "id": "b",
              "text": "Square root"
            },
            {
              "id": "c",
              "text": "Logarithmic function"
            },
            {
              "id": "d",
              "text": "Absolute value"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The sigmoid function σ(z) = 1/(1+e⁻ᶻ) squashes any real number into the range (0, 1), yielding a probability."
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
      },
      "learningAids": [
        {
          "id": "ai-ml-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "ai-ml-101-l04",
      "title": "Unsupervised Learning: Clustering & Dimensionality Reduction",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain how k-means clustering partitions data into k groups using centroid updates",
        "Describe Principal Component Analysis (PCA) and why dimensionality reduction matters",
        "Identify real-world applications of unsupervised learning in recommendation systems and anomaly detection"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l04-c1",
          "title": "Clustering with K-Means",
          "content": "Unsupervised learning is an exciting part of artificial intelligence (AI) that helps us find patterns in data that doesn't have any labels or predefined answers. Imagine trying to sort a box of mixed-up LEGO pieces without knowing what the final model should look like. That's similar to what unsupervised learning does! One of the most popular techniques in this area is called K-means clustering. This method helps us group data points into a specific number of clusters, which can be very useful in various applications.\nHere's how K-means clustering works: First, we start by randomly selecting a few points from our data, which we call centroids. These centroids act like the center of each cluster. Next, we look at all the data points and assign each one to the nearest centroid based on how far away it is. This distance is usually calculated using a method called Euclidean distance, which is like measuring the straight-line distance between two points on a map.\nAfter assigning the points to their nearest centroids, we then recalculate the position of each centroid by finding the average location of all the points that belong to it. This means we take all the points in a cluster and find their average position to update the centroid's location. We repeat this process of assigning points and recalculating centroids until the groups stabilize, meaning that the assignments no longer change.\nChoosing the right number of clusters, known as k, is very important for the success of K-means clustering. One effective way to find the best value for k is by using something called the elbow method. This involves creating a graph where we plot the within-cluster sum of squares (WCSS) against different values of k. We look for a point on the graph that resembles an elbow, where adding more clusters doesn't significantly improve the results.\nIt's important to note that K-means works best when the clusters are roughly spherical and of similar size. However, it can have difficulties when dealing with irregularly shaped clusters. In the real world, K-means clustering is used in many interesting ways, such as customer segmentation, where companies like Netflix group viewers based on their tastes and preferences. It is also used for organizing documents and simplifying the colors in images, making it a versatile tool in the field of AI.\nContext recap: Unsupervised learning is an exciting part of artificial intelligence (AI) that helps us find patterns in data that doesn't have any labels or predefined answers. Imagine trying to sort a box of mixed-up LEGO pieces without knowing what the final model should look like. That's similar to what unsupervised learning does! One of the most popular techniques in this area is called K-means clustering.\nWhy this matters: Clustering with K-Means helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ai-ml-101-l04-c2",
          "title": "Dimensionality Reduction with PCA",
          "content": "When we analyze real-world data, we often come across datasets that contain a large number of features, sometimes reaching into the hundreds or even thousands. This situation can create a challenge known as the 'curse of dimensionality.' Essentially, as the number of dimensions increases, our models require significantly more data to function effectively. Additionally, the distances between data points can become less meaningful, which can slow down the training process considerably. To address this challenge, we can use a powerful technique called Principal Component Analysis, or PCA for short. PCA helps us reduce the number of dimensions in our dataset while keeping as much important information as possible.\nThe way PCA works is by projecting the data into a lower-dimensional space that captures the most variance, or spread, in the data. It does this by calculating special vectors known as eigenvectors from the covariance matrix of the dataset. Each eigenvector corresponds to a principal component, and the eigenvalue associated with it tells us how much variance that component captures. By selecting only the top components—let's say those that account for 95% of the total variance—we can effectively reduce a dataset with 1,000 features down to just 50 features without losing much information.\nPCA is also a fantastic tool for visualization. It allows us to create 2D or 3D scatter plots that represent high-dimensional data in a way that we can easily understand. In addition to PCA, there are other techniques like t-SNE and UMAP that focus on preserving the local structure of the data. These methods are particularly useful for visualizing complex datasets, such as word embeddings in natural language processing or features in images. By using these techniques, we can gain valuable insights from our data while making it easier to interpret and analyze.\nContext recap: When we analyze real-world data, we often come across datasets that contain a large number of features, sometimes reaching into the hundreds or even thousands. This situation can create a challenge known as the 'curse of dimensionality.' Essentially, as the number of dimensions increases, our models require significantly more data to function effectively. Additionally, the distances between data points can become less meaningful, which can slow down the training process considerably. To address this challenge, we can use a powerful technique called Principal Component Analysis, or PCA for short.\nWhy this matters: Dimensionality Reduction with PCA helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ai-ml-101-l04-c3",
          "title": "Other Unsupervised Techniques and Applications",
          "content": "In the fascinating world of unsupervised learning, there are several techniques that help us understand data without needing labeled examples. One such technique is hierarchical clustering. This method builds a tree-like structure known as a dendrogram, which visually represents how data points are grouped into clusters. This is particularly helpful when we are unsure about the number of clusters we should look for in our data.\nAnother interesting method is called DBSCAN, which stands for Density-Based Spatial Clustering of Applications with Noise. This technique is unique because it can identify clusters of various shapes. It works by grouping together points that are close to each other while marking points that are far away as noise. This makes DBSCAN especially useful for analyzing geographic data, such as finding clusters of locations, and for detecting unusual patterns or anomalies in data.\nWe also have a technique known as association rule mining, which includes algorithms like Apriori. This method helps us discover patterns in data by identifying items that frequently occur together. For instance, it might show us that 'customers who buy bread and butter often also buy milk.' This kind of information is valuable for businesses, as it can guide them in making recommendations to their customers.\nA great example of this is Amazon's recommendation engine, which uses collaborative filtering. This unsupervised approach groups users based on their similar purchasing histories, allowing Amazon to suggest products that users might be interested in based on what others with similar tastes have bought.\nLastly, we have anomaly detection, a technique that identifies data points that deviate significantly from expected patterns. This is particularly important in various fields, such as detecting credit card fraud, monitoring network security for intrusions, and ensuring quality control in manufacturing processes. By using these techniques, we can gain valuable insights from data and make informed decisions based on our findings.\nContext recap: In the fascinating world of unsupervised learning, there are several techniques that help us understand data without needing labeled examples. One such technique is hierarchical clustering. This method builds a tree-like structure known as a dendrogram, which visually represents how data points are grouped into clusters. This is particularly helpful when we are unsure about the number of clusters we should look for in our data.\nWhy this matters: Other Unsupervised Techniques and Applications helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "ai-ml-101-l05",
      "title": "Neural Networks & Deep Learning Foundations",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Describe the architecture of a feedforward neural network: input, hidden, and output layers",
        "Explain forward propagation, loss computation, backpropagation, and weight updates via gradient descent",
        "Compare CNNs for image tasks and RNNs for sequential data"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l05-c1",
          "title": "Anatomy of a Neural Network",
          "content": "A feedforward neural network is a key building block in the field of deep learning. This type of network is organized into several layers that work together to process information. It begins with an input layer, where each neuron represents a specific feature of the data we are analyzing. After the input layer, there are one or more hidden layers, and finally, an output layer that gives us the final prediction or result. Each neuron in the network performs a specific calculation. It takes the inputs, applies weights to them, sums them up, and adds a bias term. This can be represented by the equation z = Σ(wᵢxᵢ) + b, where 'w' represents the weights, 'x' represents the inputs, and 'b' is the bias. After this calculation, we apply a non-linear activation function to the result to introduce complexity into the model. One commonly used activation function is called ReLU, which stands for Rectified Linear Unit. This function helps to avoid problems like the vanishing gradient problem, which can hinder learning in deep networks. For tasks that require binary outputs, we often use the sigmoid function, which compresses the output to a value between 0 and 1. In cases where we have multiple classes to predict, the softmax function is used to normalize the outputs so that they add up to 1, effectively representing probabilities for each class. By increasing the number of neurons in each layer, we enhance the network's ability to learn intricate patterns in the data. Moreover, adding more layers enables the network to extract features in a hierarchical manner. For instance, the early layers might focus on detecting simple shapes, while the later layers can identify more complex objects. When a neural network contains two or more hidden layers, it is classified as a 'deep' neural network, which is the foundation of deep learning techniques that are widely used today.\nContext recap: A feedforward neural network is a key building block in the field of deep learning. This type of network is organized into several layers that work together to process information. It begins with an input layer, where each neuron represents a specific feature of the data we are analyzing. After the input layer, there are one or more hidden layers, and finally, an output layer that gives us the final prediction or result.\nWhy this matters: Anatomy of a Neural Network helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-ml-101-l05-c2",
          "title": "Training: Forward Pass, Loss, and Backpropagation",
          "content": "Training a neural network is an exciting process that involves several important steps, and we repeat these steps for each small batch of data we use. First, we start with the forward pass. During this step, the input data moves through the different layers of the network, and the network makes a prediction based on that input. This is like how our brain processes information to come up with an answer.\nNext, we need to check how accurate our prediction is. This is done by calculating the loss, which tells us how far off our prediction is from the actual result. Depending on what we are trying to achieve, we use different loss functions. For example, if we are predicting a number (like the price of a house), we might use Mean Squared Error (MSE). On the other hand, if we are classifying things (like identifying whether an image is of a cat or a dog), we often use cross-entropy.\nAfter we know how much we missed the mark with our prediction, we move on to the backward pass, also known as backpropagation. This step is really interesting because it uses a concept from calculus called the chain rule. It helps us understand how much each weight in the network contributed to the error we made. This is like figuring out which parts of our reasoning were wrong when we make a mistake.\nFinally, we need to update the weights to improve our predictions. We do this using a method called gradient descent. In this step, we adjust each weight by subtracting a small portion of the gradient, which is influenced by a value called the learning rate (α). This learning rate helps us decide how big of a change we should make to each weight.\nWhen we complete one full pass through all the data we have, we call this an epoch. In practice, we usually run through the data many times, often dozens or even hundreds of epochs, to ensure our model learns well. There are also advanced techniques like Adam and RMSProp that help us adjust the learning rate for each weight, which can make the training process faster and more efficient.\nA major milestone in deep learning happened in 2012 when a network called AlexNet participated in the ImageNet competition. It managed to reduce the error rate from 26% to 16%, showing that deep networks could do much better than traditional methods that were used before. This breakthrough opened up new possibilities for using deep learning in various applications, from image recognition to natural language processing.\nContext recap: Training a neural network is an exciting process that involves several important steps, and we repeat these steps for each small batch of data we use. First, we start with the forward pass. During this step, the input data moves through the different layers of the network, and the network makes a prediction based on that input. This is like how our brain processes information to come up with an answer.\nWhy this matters: Training: Forward Pass, Loss, and Backpropagation helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-ml-101-l05-c3",
          "title": "CNNs, RNNs, and Transformers",
          "content": "Neural networks come in various types, each tailored for specific kinds of data. One of the most popular types is the Convolutional Neural Network, or CNN. CNNs are especially good at handling grid-like data, such as images. They work by using layers called convolutional layers, which apply small filters, known as kernels, that slide over the image. This process helps the network identify important features like edges, textures, and patterns within the image. To make the processing more efficient, CNNs also use pooling layers. These layers help reduce the size of the data being processed, which means the network can work faster and use less computational power. Modern CNN architectures, such as ResNet and EfficientNet, can stack many convolutional layers on top of each other, leading to remarkable performance in various tasks. CNNs are widely applied in fields like facial recognition, where they help identify people in photos, and in medical imaging, where they can assist doctors in detecting tumors in X-rays. They are also crucial for self-driving cars, enabling them to understand and navigate their surroundings.\nAnother important type of neural network is the Recurrent Neural Network, or RNN. RNNs are designed to work with sequential data, which means they are great for processing information that comes in a specific order, like text or time series data. RNNs maintain a hidden state that carries information from previous time steps, allowing them to remember what they have processed before. However, traditional RNNs can face challenges when dealing with long sequences due to a problem called vanishing gradients, which makes it hard for them to learn from earlier data. To address this issue, more advanced versions of RNNs, such as Long Short-Term Memory (LSTM) networks and Gated Recurrent Units (GRUs), have been developed. These models include special mechanisms that help them remember important information over longer periods.\nIn recent years, Transformers have emerged as the leading architecture for many language-related tasks. Introduced by researchers including Vaswani et al. in 2017, Transformers utilize a self-attention mechanism. This allows each token, or piece of information, in the input to connect with every other token at the same time. This capability enables Transformers to scale efficiently and handle large amounts of data. Notable models like GPT, BERT, and Vision Transformers (ViT) are built on this innovative architecture, showcasing the power and versatility of Transformers in various applications.\nContext recap: Neural networks come in various types, each tailored for specific kinds of data. One of the most popular types is the Convolutional Neural Network, or CNN. CNNs are especially good at handling grid-like data, such as images. They work by using layers called convolutional layers, which apply small filters, known as kernels, that slide over the image.\nWhy this matters: CNNs, RNNs, and Transformers helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms data, transformers, rnns, network, layers, cnns, neural, them while answering to reinforce vocabulary and precision."
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
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "ai-ml-101-l06",
      "title": "Unsupervised Learning & Neural Networks Checkpoint",
      "type": "quiz",
      "duration": 8,
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
              "text": "Points are assigned to the nearest centroid, then centroids are recomputed as the mean of assigned points"
            },
            {
              "id": "b",
              "text": "New features are created from the data"
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
          "correctOptionId": "a",
          "explanation": "K-means alternates between assignment (nearest centroid) and update (recompute centroid) until convergence."
        },
        {
          "id": "ai-ml-101-l06-q2",
          "text": "PCA reduces dimensionality by:",
          "options": [
            {
              "id": "a",
              "text": "Projecting data onto the directions of maximum variance (principal components)"
            },
            {
              "id": "b",
              "text": "Randomly deleting features"
            },
            {
              "id": "c",
              "text": "Duplicating important features"
            },
            {
              "id": "d",
              "text": "Converting all features to binary"
            }
          ],
          "correctOptionId": "a",
          "explanation": "PCA finds orthogonal axes (eigenvectors of the covariance matrix) capturing the most variance, then projects data onto the top components."
        },
        {
          "id": "ai-ml-101-l06-q3",
          "text": "During backpropagation, gradients are computed using:",
          "options": [
            {
              "id": "a",
              "text": "The chain rule of calculus, propagating loss backward through each layer"
            },
            {
              "id": "b",
              "text": "Random number generation"
            },
            {
              "id": "c",
              "text": "Forward pass only"
            },
            {
              "id": "d",
              "text": "Manual weight adjustment by the programmer"
            }
          ],
          "correctOptionId": "a",
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
      "objectives": [
        "Explain the bias-variance trade-off and its impact on model generalization",
        "Identify overfitting and underfitting through learning curves",
        "Describe k-fold cross-validation and regularization techniques"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l07-c1",
          "title": "The Bias-Variance Trade-Off",
          "content": "When we build models to analyze and understand data, it's important to consider three main types of errors that can occur: bias, variance, and irreducible noise. Let's break these down.\nBias is the error that arises when our model is too simplistic to accurately capture the real patterns present in the data. For instance, if we try to fit a straight line to a set of points that actually follow a curved path, our model will struggle to make accurate predictions. This situation is known as underfitting, where we experience high bias and low variance. Essentially, the model is not complex enough to understand the true relationships in the data.\nOn the flip side, we have variance, which refers to the error that happens when our model is overly sensitive to the specific details of the training data. Imagine using a very complex model that memorizes every single detail, including random noise. While this model might perform exceptionally well on the training data, it will likely fail when faced with new, unseen data. This phenomenon is called overfitting, characterized by low bias and high variance.\nThe key to effective modeling is to find a balance between bias and variance. We want our model to be complex enough to capture the genuine patterns in the data, but not so complex that it gets distracted by noise. To achieve this balance, we can use techniques like ensemble methods, such as random forests and gradient boosting, which help reduce variance. Additionally, regularization techniques can simplify our models to prevent overfitting.\nIn practice, we monitor two types of errors: training error and validation error. Training error measures how well our model performs on the data it was trained on, while validation error assesses its performance on new data. If we notice that the training error is low but the validation error is high, it suggests that our model is overfitting. This means it is not generalizing well to new situations, which is something we want to avoid. By understanding and managing bias and variance, we can create models that are both accurate and reliable.\nContext recap: When we build models to analyze and understand data, it's important to consider three main types of errors that can occur: bias, variance, and irreducible noise. Let's break these down. Bias is the error that arises when our model is too simplistic to accurately capture the real patterns present in the data. For instance, if we try to fit a straight line to a set of points that actually follow a curved path, our model will struggle to make accurate predictions.\nWhy this matters: The Bias-Variance Trade-Off helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-ml-101-l07-c2",
          "title": "Evaluation Metrics and the Confusion Matrix",
          "content": "To understand how well our machine learning model is working, we use a special tool called a confusion matrix. This matrix helps us organize and interpret the results of our predictions by showing four important outcomes: True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN). Let's break these terms down a bit.\n- **True Positives (TP)** are the cases where our model correctly predicted a positive outcome. For example, if we are trying to identify whether an email is spam, a true positive would be an email that is actually spam and our model correctly labeled it as spam.\n- **True Negatives (TN)** are the cases where our model correctly predicted a negative outcome. In our spam example, this would be an email that is not spam, and our model correctly identified it as not spam.\n- **False Positives (FP)** occur when our model incorrectly predicts a positive outcome. This means our model said an email was spam, but it was actually not spam.\n- **False Negatives (FN)** are the opposite; this is when our model fails to identify a positive case. For instance, it might miss a spam email and label it as not spam.\nFrom these outcomes, we can calculate several important metrics to evaluate our model's performance.\n- **Accuracy** tells us how often our model is correct overall. We calculate it by adding True Positives and True Negatives together, and then dividing by the total number of predictions made. However, we need to be careful with accuracy, especially when our data is imbalanced. For example, if 99% of our data is negative, a model that always predicts 'negative' could still show a high accuracy of 99%, but that wouldn't be very useful.\n- **Precision** measures how many of the cases we predicted as positive were actually positive. This is important because we want to know how reliable our positive predictions are.\n- **Recall**, also known as sensitivity, tells us how many actual positive cases we successfully identified. This is crucial in situations like medical screenings where we want to catch as many true cases as possible.\n- The **F1-score** combines both precision and recall into a single score, which helps us understand the balance between the two metrics.\nIn different scenarios, we might prioritize one metric over another. For instance, in spam filtering, we want high precision to avoid blocking important emails, while in medical tests, high recall is essential to ensure we don't miss any serious conditions.\nAdditionally, we can use **ROC curves** to visualize the trade-off between true positive rates and false positive rates at different thresholds. The **area under the curve (AUC)** gives us a single number that summarizes the overall performance of our model, making it easier to compare different models. Understanding these metrics helps us improve our models and make better predictions in the future.\nContext recap: To understand how well our machine learning model is working, we use a special tool called a confusion matrix. This matrix helps us organize and interpret the results of our predictions by showing four important outcomes: True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN). Let's break these terms down a bit. - **True Positives (TP)** are the cases where our model correctly predicted a positive outcome.\nWhy this matters: Evaluation Metrics and the Confusion Matrix helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-ml-101-l07-c3",
          "title": "Cross-Validation and Regularization",
          "content": "To evaluate how well our machine learning model will perform on new, unseen data, we can use a technique called cross-validation. One straightforward method is to split our dataset into two parts using an 80/20 ratio. This means we use 80% of the data to train our model and the remaining 20% to test it. While this approach is simple, it can sometimes lead to unreliable estimates of how well our model will generalize to new data. To improve this, we can use K-fold cross-validation. In this method, we divide our dataset into 'k' equal parts, known as folds. Each fold will take turns being the test set, while the other folds are used to train the model. By averaging the results from all the folds, we can obtain a more accurate estimate of our model's performance. Common choices for 'k' are 5 or 10, which are widely used in practice.\nFor datasets where certain classes are not well represented, we can use a technique called stratified K-fold. This ensures that each fold maintains the same proportion of classes as the original dataset, which is crucial for achieving reliable results in imbalanced datasets.\nAnother key concept in machine learning is regularization, which helps prevent overfitting. Overfitting occurs when a model learns the training data too well, including its noise, and performs poorly on new data. Regularization introduces a penalty for large weights in our model, which helps to keep the model simpler and more generalizable. There are different types of regularization techniques. For example, L1 regularization, also known as Lasso, encourages some weights to become exactly zero. This effectively selects important features and ignores the less important ones. On the other hand, L2 regularization, known as Ridge, adds a penalty based on the square of the weights, which helps to smooth out the weights without forcing them to zero. There is also a method called Elastic Net, which combines both L1 and L2 regularization techniques.\nIn the context of neural networks, dropout is a useful technique where we randomly deactivate some neurons during the training process. This encourages the model to learn more robust features, as it cannot rely on any single neuron. Lastly, early stopping is a strategy where we monitor the model's performance on validation data and stop training if we notice that the performance starts to decline. This helps to ensure that we do not overfit the model to the training data and maintain its ability to generalize well to new data.\nContext recap: To evaluate how well our machine learning model will perform on new, unseen data, we can use a technique called cross-validation. One straightforward method is to split our dataset into two parts using an 80/20 ratio. This means we use 80% of the data to train our model and the remaining 20% to test it. While this approach is simple, it can sometimes lead to unreliable estimates of how well our model will generalize to new data.\nWhy this matters: Cross-Validation and Regularization helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
      ]
    },
    {
      "id": "ai-ml-101-l08",
      "title": "Real-World ML Pipeline: Data Prep, Feature Engineering & Deployment",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Outline the end-to-end ML pipeline from raw data to production deployment",
        "Apply feature scaling, one-hot encoding, and feature selection techniques",
        "Explain MLOps concepts: model versioning, monitoring, and retraining triggers"
      ],
      "chunks": [
        {
          "id": "ai-ml-101-l08-c1",
          "title": "Data Preparation in Practice",
          "content": "In the exciting field of machine learning, we often start with data that can be quite messy and unorganized. This is where the important process of data cleaning comes into play. Data cleaning is essential because it helps us prepare our data for analysis so that we can make accurate predictions. One of the first things we do is handle missing values. For numerical data, we can fill in these gaps using the median, which is the middle value when all the numbers are arranged in order. For categorical data, we use the mode, which is the most frequently occurring value. Additionally, we need to remove any duplicate entries to ensure that our data is unique and reliable. It's also important to fix any inconsistencies in how the data is formatted, so everything is uniform and easy to work with.\nOnce our data is cleaned, we move on to a step called Exploratory Data Analysis, or EDA for short. EDA is a fascinating process where we use various tools to visualize our data. For example, we might create histograms to see how data is distributed, scatter plots to explore relationships between different variables, and correlation matrices to understand how closely related different features are. This step is crucial because it helps us identify any outliers—data points that are significantly different from the rest—and discover interesting patterns that can inform our modeling decisions.\nBefore we start building our machine learning models, we need to split our data into different sets. This is known as the train/test split. It's important to do this before applying any transformations that rely on overall statistics, like calculating the mean for filling in missing values. This helps us avoid a problem called data leakage, where information from the test set accidentally influences the training process. A common way to split the data is to use 70% for training our model, 15% for validation to fine-tune our model, and the remaining 15% for testing its performance. If we are working with time-series data, we must respect the order of time when splitting. This means we train our model on past data and test it on future data to ensure that our predictions are realistic and applicable to real-world scenarios.\nContext recap: In the exciting field of machine learning, we often start with data that can be quite messy and unorganized. This is where the important process of data cleaning comes into play. Data cleaning is essential because it helps us prepare our data for analysis so that we can make accurate predictions. One of the first things we do is handle missing values.\nWhy this matters: Data Preparation in Practice helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms data, different, important, process, helps, split, test, model while answering to reinforce vocabulary and precision."
        },
        {
          "id": "ai-ml-101-l08-c2",
          "title": "Feature Engineering and Encoding",
          "content": "Feature engineering is a crucial part of preparing our data for machine learning, and one of the key components of this process is feature scaling. Feature scaling helps ensure that all features contribute equally to the performance of our model. One popular method for feature scaling is called min-max scaling. This technique transforms the values of a feature so that they fit within a range of 0 to 1. We can do this using the formula x' = (x − min) / (max − min), where 'x' is the original value, 'min' is the smallest value in the feature, and 'max' is the largest value. Another important method is standardization, which adjusts the data so that it has a mean of 0 and a standard deviation of 1. This is calculated using the formula z = (x − μ) / σ, where 'μ' is the mean and 'σ' is the standard deviation. Some algorithms, particularly those that rely on distance calculations, such as k-means clustering or k-nearest neighbors, as well as those that use gradient descent like neural networks, are sensitive to the scale of the features. This means that if the features are not scaled properly, the performance of these algorithms can be negatively impacted. However, tree-based models, like decision trees, do not require feature scaling and can handle features of different scales without any issues. Additionally, when we work with categorical variables, such as colors (like red, blue, and green), we can use a technique called one-hot encoding. This method converts these categorical variables into binary columns, creating a separate column for each category. For features that have many unique values, such as zip codes, we might prefer to use techniques like target encoding or embedding layers, which can help manage the complexity of the data. Feature selection is another important process in feature engineering, where we identify and remove irrelevant or redundant features. We can use methods like correlation thresholds or L1 regularization to help with this. Ultimately, having good features is often more important than using complex algorithms, and having domain knowledge is essential for effective feature engineering. By understanding the data and the problem we are trying to solve, we can create features that significantly improve the performance of our machine learning models.\nContext recap: Feature engineering is a crucial part of preparing our data for machine learning, and one of the key components of this process is feature scaling. Feature scaling helps ensure that all features contribute equally to the performance of our model. One popular method for feature scaling is called min-max scaling. This technique transforms the values of a feature so that they fit within a range of 0 to 1.\nWhy this matters: Feature Engineering and Encoding helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "ai-ml-101-l08-c3",
          "title": "MLOps: From Notebook to Production",
          "content": "When we create a machine learning model using a Jupyter notebook, we are only at the starting point of a much larger journey; this model is not yet a finished product. To effectively move from the experimentation phase to a production-ready state, we utilize a practice called MLOps, which stands for Machine Learning Operations. MLOps is essential for ensuring that our models can be reliably used in real-world applications. There are several important practices that we need to follow in MLOps.\nFirst, we must implement version control for our data and models. This can be done using tools like DVC (Data Version Control) or MLflow. Version control helps us keep track of which specific dataset and code were used to create each model, making it easier to manage changes and improvements over time.\nNext, we should establish reproducible pipelines. This means creating automated workflows that handle the processes of data ingestion, preprocessing, training, and evaluation. Tools like Kubeflow and Airflow can help us set up these pipelines, ensuring that our work is efficient and consistent.\nAnother crucial aspect is model serving. This involves deploying our machine learning model so that it can be accessed and used by other applications. We can do this by placing our model behind a REST API or a gRPC endpoint. Additionally, we can use containerization tools like Docker to package our model, which makes it easier to run in different environments without compatibility issues.\nMonitoring our models is also very important. We need to track various metrics, such as prediction latency (how long it takes to get a prediction), throughput (how many predictions can be made in a given time), and data drift (which happens when the incoming data changes from what the model was trained on).\nFurthermore, we should set up retraining triggers. This means we can schedule regular retraining sessions for our model or automatically retrain it if we notice that its accuracy drops below a certain level.\nFinally, Continuous Integration and Continuous Delivery (CI/CD) for machine learning automates the processes of testing, validating, and deploying our models. This ensures that our models are not only reliable but also reproducible. Many leading companies, such as Uber, Google, and Netflix, have developed their own machine learning platforms to manage and serve millions of predictions every second, showcasing the power and importance of MLOps in the field of artificial intelligence.\nContext recap: When we create a machine learning model using a Jupyter notebook, we are only at the starting point of a much larger journey; this model is not yet a finished product. To effectively move from the experimentation phase to a production-ready state, we utilize a practice called MLOps, which stands for Machine Learning Operations. MLOps is essential for ensuring that our models can be reliably used in real-world applications. There are several important practices that we need to follow in MLOps.\nWhy this matters: MLOps: From Notebook to Production helps learners in AI & Machine Learning connect ideas from AI & Machine Learning Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ai-ml-101-l08-a1",
          "title": "Order the ML Pipeline Steps",
          "type": "timeline_builder",
          "description": "Arrange the steps in correct order: Collect and explore raw data (EDA) → Clean data: handle missing values, remove duplicates → Split into train / validation / test sets → Feature engineering: scaling, encoding, selection → Train the model on the training set → Evaluate on the validation set and tune hyperparameters → Final evaluation on the held-out test set → Deploy model behind an API and monitor in production."
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
      ]
    },
    {
      "id": "ai-ml-101-l09",
      "title": "Model Training & ML Pipeline Checkpoint",
      "type": "quiz",
      "duration": 8,
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
              "text": "Overfitting — it memorized training noise and fails to generalize"
            },
            {
              "id": "b",
              "text": "Underfitting — it is too simple to learn any patterns"
            },
            {
              "id": "c",
              "text": "Perfectly calibrated"
            },
            {
              "id": "d",
              "text": "Experiencing hardware failure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A large gap between training and test performance is the hallmark of overfitting — the model has high variance."
        },
        {
          "id": "ai-ml-101-l09-q2",
          "text": "In a medical screening test, which metric should be prioritized to avoid missing true cases?",
          "options": [
            {
              "id": "a",
              "text": "Recall (sensitivity) — catching all actual positives"
            },
            {
              "id": "b",
              "text": "Precision — avoiding false positives"
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
          "correctOptionId": "a",
          "explanation": "High recall minimizes false negatives — critical when missing a case (e.g., undetected cancer) is more dangerous than a false alarm."
        },
        {
          "id": "ai-ml-101-l09-q3",
          "text": "One-hot encoding is used to:",
          "options": [
            {
              "id": "a",
              "text": "Convert categorical variables into binary columns so ML algorithms can process them"
            },
            {
              "id": "b",
              "text": "Scale numerical features to [0, 1]"
            },
            {
              "id": "c",
              "text": "Remove outliers from the dataset"
            },
            {
              "id": "d",
              "text": "Split data into train and test sets"
            }
          ],
          "correctOptionId": "a",
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
              "text": "Reinforcement learning combined with deep neural networks"
            },
            {
              "id": "b",
              "text": "Linear regression on historical game data"
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
          "correctOptionId": "a",
          "explanation": "AlphaGo used Monte Carlo tree search guided by deep neural networks trained via reinforcement learning from self-play."
        },
        {
          "id": "ai-ml-101-l10-q2",
          "text": "Gradient descent updates model weights by:",
          "options": [
            {
              "id": "a",
              "text": "Moving weights in the direction that reduces the loss: w ← w − α·∂L/∂w"
            },
            {
              "id": "b",
              "text": "Randomly reassigning all weights each epoch"
            },
            {
              "id": "c",
              "text": "Doubling all weights after each forward pass"
            },
            {
              "id": "d",
              "text": "Keeping weights fixed and changing the data"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Gradient descent subtracts a fraction (learning rate α) of the loss gradient from each weight, iteratively minimizing the loss."
        },
        {
          "id": "ai-ml-101-l10-q3",
          "text": "The F1-score is the harmonic mean of:",
          "options": [
            {
              "id": "a",
              "text": "Precision and recall"
            },
            {
              "id": "b",
              "text": "Accuracy and loss"
            },
            {
              "id": "c",
              "text": "Bias and variance"
            },
            {
              "id": "d",
              "text": "Training time and model size"
            }
          ],
          "correctOptionId": "a",
          "explanation": "F1 = 2·(Precision·Recall)/(Precision+Recall) balances false positives (precision) and false negatives (recall)."
        },
        {
          "id": "ai-ml-101-l10-q4",
          "text": "Which technique prevents data leakage during preprocessing?",
          "options": [
            {
              "id": "a",
              "text": "Splitting into train/test before computing any global statistics"
            },
            {
              "id": "b",
              "text": "Using the entire dataset to compute the mean before splitting"
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
          "correctOptionId": "a",
          "explanation": "Computing statistics (mean, std) on the full dataset before splitting leaks test-set information into training preprocessing."
        },
        {
          "id": "ai-ml-101-l10-q5",
          "text": "L2 regularization (Ridge) reduces overfitting by:",
          "options": [
            {
              "id": "a",
              "text": "Adding the sum of squared weights to the loss, penalizing large weights"
            },
            {
              "id": "b",
              "text": "Removing all hidden layers"
            },
            {
              "id": "c",
              "text": "Increasing the learning rate"
            },
            {
              "id": "d",
              "text": "Adding more training data automatically"
            }
          ],
          "correctOptionId": "a",
          "explanation": "L2 adds λΣw² to the loss function, shrinking weights toward zero and discouraging the model from relying too heavily on any single feature."
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
