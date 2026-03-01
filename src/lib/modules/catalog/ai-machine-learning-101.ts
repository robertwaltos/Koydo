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
          "content": "Artificial Intelligence is the science of building systems that can perceive, reason, learn, and act. The field was formally founded at the 1956 Dartmouth Conference, where John McCarthy coined the term. Early decades relied on symbolic AI — hand-crafted rules and expert systems like MYCIN (1976), which diagnosed bacterial infections. The 1980s brought the first 'AI winter' when progress stalled. The renaissance began in the 2000s: faster GPUs, massive datasets, and algorithmic breakthroughs (notably Geoffrey Hinton's deep-learning work in 2006) reignited the field. Landmark milestones include IBM Deep Blue defeating Kasparov at chess (1997), IBM Watson winning Jeopardy! (2011), AlphaGo defeating world champion Lee Sedol at Go (2016), and GPT-series language models transforming natural-language processing from 2018 onward."
        },
        {
          "id": "ai-ml-101-l01-c2",
          "title": "Narrow AI vs. General AI",
          "content": "All AI in production today is Narrow AI (ANI) — systems optimized for a single task. A spam filter cannot drive a car; a chess engine cannot translate languages. Narrow AI can exceed human performance within its domain (ImageNet classifiers surpassed human-level accuracy in 2015) yet has zero capability outside it. Artificial General Intelligence (AGI) would match human cognitive flexibility across arbitrary tasks — learning to cook, write poetry, and diagnose diseases without task-specific retraining. AGI remains a theoretical goal with no consensus timeline. Beyond AGI lies Artificial Super Intelligence (ASI), a hypothetical system surpassing all human intellect — firmly in the realm of speculation."
        },
        {
          "id": "ai-ml-101-l01-c3",
          "title": "The Turing Test and Machine Intelligence",
          "content": "In 1950, Alan Turing proposed the 'imitation game': if a human evaluator cannot reliably distinguish a machine's text responses from a human's, the machine exhibits intelligent behavior. The Turing Test shaped decades of AI research but has limitations — a system can pass by being cleverly evasive rather than truly understanding. Modern evaluation goes further: benchmarks like GLUE, SuperGLUE, and MMLU measure language understanding; ImageNet and COCO measure visual perception; ARC-AGI tests fluid reasoning. Still, the philosophical question persists: does passing a benchmark mean a machine 'understands,' or does it merely simulate understanding? This debate — the Chinese Room argument by John Searle — remains unresolved."
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
          "content": "Supervised learning trains on labeled data — each example pairs inputs (features) with a known output (label). Regression predicts continuous values: house prices, stock returns, temperature. Linear regression fits a line y = wx + b that minimizes the Mean Squared Error (MSE) — the average of squared differences between predicted and actual values. The algorithm uses gradient descent: compute the gradient (slope) of the loss function with respect to each weight, then nudge weights in the direction that reduces loss. Repeating this over many iterations (epochs) converges on the best-fit line. Multiple linear regression extends to many features: y = w₁x₁ + w₂x₂ + … + b. Polynomial regression handles non-linear relationships by adding squared or cubed terms."
        },
        {
          "id": "ai-ml-101-l02-c2",
          "title": "Classification: Predicting Categories",
          "content": "Classification assigns inputs to discrete categories: spam vs. not-spam, cat vs. dog, benign vs. malignant. Logistic regression — despite its name — is a classifier. It passes the linear combination through a sigmoid function σ(z) = 1/(1+e⁻ᶻ), squashing output to a probability between 0 and 1. A threshold (typically 0.5) converts the probability into a class label. The loss function is binary cross-entropy, which penalizes confident wrong predictions heavily. Multi-class problems use softmax regression (one probability per class, summing to 1). Real-world examples: email spam filters use logistic regression; medical screening classifies test results as positive or negative."
        },
        {
          "id": "ai-ml-101-l02-c3",
          "title": "Tree-Based and Ensemble Methods",
          "content": "A decision tree splits data by asking yes/no questions on features, creating branches until leaves contain pure classes. It is intuitive but prone to overfitting. Random forests combat this by training hundreds of trees on random subsets of data and features, then averaging (regression) or voting (classification) — this is called bagging. Gradient boosting (XGBoost, LightGBM) builds trees sequentially: each new tree corrects the errors of the previous ensemble. Boosting often wins Kaggle competitions because it aggressively reduces bias. Trade-off: random forests are more robust to noise; gradient boosting achieves lower error but requires careful hyperparameter tuning (learning rate, max depth, number of estimators)."
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
          "content": "Unsupervised learning finds structure in unlabeled data — no correct answers are provided. K-means clustering partitions n data points into k groups. The algorithm: (1) randomly initialize k centroids; (2) assign each point to the nearest centroid (using Euclidean distance); (3) recompute each centroid as the mean of its assigned points; (4) repeat steps 2–3 until assignments stabilize. Choosing k is critical — the elbow method plots within-cluster sum of squares (WCSS) against k and looks for the 'elbow' where adding clusters yields diminishing returns. K-means assumes roughly spherical, equally sized clusters; it struggles with irregular shapes. Real-world uses include customer segmentation (Netflix grouping viewers by taste), document clustering, and image color quantization."
        },
        {
          "id": "ai-ml-101-l04-c2",
          "title": "Dimensionality Reduction with PCA",
          "content": "Real-world datasets may have hundreds or thousands of features. High dimensionality causes the 'curse of dimensionality' — models need exponentially more data, distances become meaningless, and training slows dramatically. Principal Component Analysis (PCA) projects data onto a lower-dimensional subspace that retains maximum variance. PCA computes eigenvectors of the covariance matrix; each eigenvector defines a principal component, and its eigenvalue indicates the variance captured. Keeping the top components (e.g., 95% of total variance) can reduce 1,000 features to 50 with minimal information loss. PCA is also used for visualization — projecting high-dimensional data into 2D or 3D scatter plots. t-SNE and UMAP are non-linear alternatives that preserve local structure, commonly used to visualize word embeddings and image features."
        },
        {
          "id": "ai-ml-101-l04-c3",
          "title": "Other Unsupervised Techniques and Applications",
          "content": "Beyond k-means, hierarchical clustering builds a tree (dendrogram) of nested clusters — useful when the number of clusters is unknown. DBSCAN identifies clusters of arbitrary shape by grouping points with many nearby neighbors and marking isolated points as noise — excellent for geographic data and anomaly detection. Association rule mining (Apriori algorithm) discovers co-occurrence patterns: 'customers who buy bread and butter also buy milk.' Amazon's recommendation engine uses collaborative filtering — an unsupervised approach that groups users with similar purchase histories. Anomaly detection flags data points that deviate significantly from learned patterns — used in credit-card fraud detection, network intrusion monitoring, and manufacturing quality control."
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
          "content": "A feedforward neural network has an input layer (one neuron per feature), one or more hidden layers, and an output layer. Each neuron computes z = Σ(wᵢxᵢ) + b (weighted sum plus bias), then applies a non-linear activation function: ReLU (max(0, z)) is the default for hidden layers because it avoids the vanishing-gradient problem; sigmoid squashes to (0,1) for binary output; softmax normalizes outputs to probabilities summing to 1 for multi-class tasks. Adding more neurons per layer increases capacity (ability to learn complex patterns); adding more layers enables hierarchical feature extraction — early layers detect edges, later layers detect objects. A network with two or more hidden layers is called a 'deep' neural network — hence 'deep learning.'"
        },
        {
          "id": "ai-ml-101-l05-c2",
          "title": "Training: Forward Pass, Loss, and Backpropagation",
          "content": "Training iterates over four steps per batch: (1) Forward pass — input flows through layers to produce a prediction. (2) Loss computation — a loss function quantifies prediction error: MSE for regression, cross-entropy for classification. (3) Backward pass (backpropagation) — the chain rule of calculus propagates the loss gradient from the output layer back through every weight, revealing each weight's contribution to the error. (4) Weight update — gradient descent subtracts a fraction (the learning rate α) of the gradient from each weight: w ← w − α·∂L/∂w. One pass through the entire dataset is an epoch; practical training runs for dozens to hundreds of epochs. Variants like Adam and RMSProp adapt the learning rate per parameter for faster convergence. The 2012 ImageNet breakthrough — AlexNet reducing error from 26% to 16% — proved deep networks could outperform hand-engineered features."
        },
        {
          "id": "ai-ml-101-l05-c3",
          "title": "CNNs, RNNs, and Transformers",
          "content": "Convolutional Neural Networks (CNNs) are designed for grid-structured data (images). Convolutional layers slide small filters (kernels) across the image, detecting edges, textures, and patterns. Pooling layers down-sample feature maps, reducing computation. Modern architectures — ResNet, EfficientNet — stack dozens of convolutional layers. CNNs power facial recognition, medical imaging (detecting tumors in X-rays), and autonomous-vehicle perception. Recurrent Neural Networks (RNNs) process sequential data (text, time series) by maintaining a hidden state that carries information from previous time steps. Vanilla RNNs suffer from vanishing gradients; LSTMs and GRUs add gating mechanisms to remember long-range dependencies. Transformers (Vaswani et al., 2017) replaced RNNs for most language tasks: self-attention lets every token attend to every other token in parallel, enabling massive scaling. GPT, BERT, and Vision Transformers (ViT) all build on this architecture."
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
          "content": "Every model's total error decomposes into bias, variance, and irreducible noise. Bias is the error from overly simplistic assumptions — a linear model fitting a curved relationship underfits (high bias, low variance). Variance is the error from excessive sensitivity to training data — a 20-degree polynomial memorizes noise and fails on new data, overfitting (low bias, high variance). The sweet spot minimizes total error: complex enough to capture true patterns, simple enough to ignore noise. Ensembles (random forests, gradient boosting) reduce variance; regularization reduces model complexity. In practice, you monitor training error vs. validation error: if training error is low but validation error is high, the model is overfitting."
        },
        {
          "id": "ai-ml-101-l07-c2",
          "title": "Evaluation Metrics and the Confusion Matrix",
          "content": "A confusion matrix tabulates True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN). From it derive: Accuracy = (TP+TN)/(TP+TN+FP+FN) — misleading when classes are imbalanced (99% accuracy on a dataset with 99% negatives means predicting 'negative' every time). Precision = TP/(TP+FP) — 'of those we predicted positive, how many were actually positive?' Recall (sensitivity) = TP/(TP+FN) — 'of all actual positives, how many did we catch?' F1-score = 2·(Precision·Recall)/(Precision+Recall) — the harmonic mean, balancing both. In medical screening, high recall is critical (don't miss cancer); in spam filtering, high precision avoids blocking legitimate email. ROC curves plot true-positive rate vs. false-positive rate across thresholds; AUC (area under the curve) summarizes classifier performance in a single number."
        },
        {
          "id": "ai-ml-101-l07-c3",
          "title": "Cross-Validation and Regularization",
          "content": "A simple train/test split (e.g., 80/20) gives one estimate of generalization error, which may be noisy. K-fold cross-validation splits data into k folds; each fold takes a turn as the test set while the remaining k−1 train the model. Averaging the k test scores gives a more reliable estimate. 5-fold and 10-fold are standard. Stratified k-fold preserves class proportions in each fold — essential for imbalanced datasets. Regularization penalizes large weights to reduce overfitting: L1 (Lasso) adds |w| to the loss, encouraging sparsity (some weights go to exactly zero, selecting features). L2 (Ridge) adds w² to the loss, shrinking weights smoothly. Elastic Net combines both. Dropout in neural networks randomly deactivates neurons during training, forcing the network to learn redundant representations. Early stopping halts training when validation loss starts increasing."
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
          "content": "Production ML starts with messy data. Data cleaning handles missing values (impute with median for numerical features, mode for categorical), removes duplicates, and corrects format inconsistencies. Exploratory Data Analysis (EDA) — using histograms, scatter plots, and correlation matrices — reveals distributions, outliers, and relationships before modeling. The train/test split must happen before any transformation that uses global statistics (e.g., computing the mean for imputation) to prevent data leakage — information from the test set bleeding into training. A common split is 70% train, 15% validation, 15% test. For time-series data, the split must be temporal: train on the past, test on the future."
        },
        {
          "id": "ai-ml-101-l08-c2",
          "title": "Feature Engineering and Encoding",
          "content": "Feature scaling ensures all features contribute equally. Min-max scaling maps values to [0, 1]: x' = (x − min)/(max − min). Standardization (z-score) maps to mean 0, standard deviation 1: z = (x − μ)/σ. Algorithms that use distance (k-means, kNN, SVMs) or gradient descent (neural networks) are sensitive to scale; tree-based models are not. One-hot encoding converts categorical variables (e.g., color: red, blue, green) into binary columns — one per category. For high-cardinality features (e.g., zip code with 40,000 values), target encoding or embedding layers are preferable. Feature selection removes irrelevant or redundant features: correlation thresholds, mutual information, or L1 regularization. Good features often matter more than fancy algorithms — domain expertise drives the best feature engineering."
        },
        {
          "id": "ai-ml-101-l08-c3",
          "title": "MLOps: From Notebook to Production",
          "content": "A model in a Jupyter notebook is not a product. MLOps bridges the gap between experimentation and production. Key practices: (1) Version control for data and models (DVC, MLflow) — track which dataset and code produced each model. (2) Reproducible pipelines (Kubeflow, Airflow) — automate data ingestion, preprocessing, training, and evaluation. (3) Model serving — deploy behind a REST API or gRPC endpoint; containerize with Docker for portability. (4) Monitoring — track prediction latency, throughput, and data drift (when incoming data distributions shift from training data). (5) Retraining triggers — schedule periodic retraining or trigger it when accuracy drops below a threshold. CI/CD for ML (continuous integration/delivery) automates testing, validation, and deployment, ensuring models are reproducible and reliable. Companies like Uber (Michelangelo), Google (TFX), and Netflix run ML platforms serving millions of predictions per second."
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
