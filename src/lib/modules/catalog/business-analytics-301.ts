import type { LearningModule } from "@/lib/modules/types";

export const business_analytics_301_Module: LearningModule = {
  "id": "business-analytics-301",
  "title": "Predictive Analytics & Machine Learning for Business",
  "description": "Harness the power of predictive models and machine learning to anticipate customer behavior, forecast demand, and uncover hidden patterns. Learn classification, clustering, time series, recommendation systems, and text analytics with a business-first approach.",
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
    "Build classification models using logistic regression and decision trees",
    "Evaluate model performance using a confusion matrix, accuracy, precision, and recall",
    "Apply clustering techniques for customer segmentation",
    "Forecast business metrics using time series methods",
    "Explain how recommendation systems generate personalized suggestions",
    "Extract insights from unstructured text using sentiment analysis",
    "Manage the end-to-end analytics workflow from question to deployment"
  ],
  "lessons": [
    {
      "id": "business-analytics-301-l01",
      "title": "Classification Models: Logistic Regression",
      "type": "video",
      "duration": 14,
      "objectives": [
        "Explain why logistic regression is used for classification rather than linear regression",
        "Interpret logistic regression coefficients as odds ratios",
        "Apply logistic regression to business problems like churn prediction"
      ],
      "chunks": [
        {
          "id": "business-analytics-301-l01-c1",
          "title": "Why Logistic Regression?",
          "content": "Logistic regression is a statistical method for predicting binary outcomes, like 'yes/no' or 'churn/stay'. Unlike linear regression, which can predict values outside a logical range, logistic regression uses a special S-shaped curve (the sigmoid function) to ensure its output is always a probability between 0 and 1. We can then set a threshold, typically 0.5, to classify the outcome. For example, a predicted probability of 0.8 (80%) for customer churn would be classified as 'churn', providing a clear, actionable prediction."
        },
        {
          "id": "business-analytics-301-l01-c2",
          "title": "Interpreting Coefficients",
          "content": "In logistic regression, coefficients tell us how each input variable affects the outcome. By converting these coefficients, we get 'odds ratios.' An odds ratio of 1.4 means that for every one-unit increase in a predictor variable (like an additional customer service call), the odds of the outcome (like churning) increase by 40%. This helps businesses pinpoint the key drivers of behavior and take targeted action to improve retention or mitigate risk."
        },
        {
          "id": "business-analytics-301-l01-c3",
          "title": "Business Applications",
          "content": "Logistic regression is a powerful and widely used tool for making smart business decisions. In finance, it's used for credit scoring to predict loan defaults. In marketing, it helps identify which customers are most likely to respond to a campaign. It's also critical for customer churn prediction, allowing companies to proactively retain at-risk customers, and for fraud detection to flag suspicious transactions. A key advantage is its interpretability; because we can see which factors drive predictions, it's highly valued in regulated industries where decisions must be explainable."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l01-f1",
          "front": "Logistic Regression",
          "back": "A classification model that uses the sigmoid function to predict the probability of a binary outcome (0 or 1). Its output is always constrained between 0 and 1."
        },
        {
          "id": "business-analytics-301-l01-f2",
          "front": "Odds Ratio",
          "back": "The exponentiated coefficient in logistic regression. An odds ratio of 1.4 means a one-unit increase in the predictor makes the outcome 40% more likely."
        },
        {
          "id": "business-analytics-301-l01-f3",
          "front": "Why is logistic regression valued in regulated industries?",
          "back": "Its coefficients are interpretable, allowing stakeholders and regulators to understand which factors drive predictions, unlike 'black-box' models."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l01-a1",
          "type": "image",
          "title": "The Logistic S-Curve",
          "content": "A diagram showing a logistic (S-shaped) curve mapping inputs (e.g., customer tenure) to a probability between 0 and 1, with a clear decision threshold at 0.5."
        }
      ]
    },
    {
      "id": "business-analytics-301-l02",
      "title": "Decision Trees and Ensemble Methods",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain how decision trees split data to make predictions",
        "Identify the tradeoff between tree complexity and overfitting",
        "Describe how random forests improve on single decision trees"
      ],
      "chunks": [
        {
          "id": "business-analytics-301-l02-c1",
          "title": "How Decision Trees Work",
          "content": "A decision tree makes predictions by splitting data into smaller, more manageable groups based on a series of 'if-then' questions. It starts with the entire dataset at the 'root' and, at each 'branch,' selects the feature that best separates the data into purer subgroups. The process continues until it reaches 'leaf' nodes, which represent the final prediction. For example, a rule might be: 'IF income > $80k AND tenure > 2 years, THEN predict 'low churn risk'.' Their flowchart-like structure makes them highly interpretable for business stakeholders."
        },
        {
          "id": "business-analytics-301-l02-c2",
          "title": "Overfitting and Pruning",
          "content": "A major risk with decision trees is overfitting, where the model becomes too complex and memorizes the training data, including its noise. This leads to excellent performance on known data but poor predictions on new, unseen data. To prevent this, we use pruning techniques. Pruning simplifies the tree by setting limits, such as a maximum tree depth or a minimum number of samples required at a leaf node. The goal is to find the right balance: a model complex enough to capture true patterns but simple enough to generalize to new situations."
        },
        {
          "id": "business-analytics-301-l02-c3",
          "title": "Random Forests",
          "content": "A random forest is an ensemble method that improves upon single decision trees by building hundreds of them. Each tree is trained on a random sample of the data and a random subset of the features. To make a prediction, the random forest aggregates the results from all individual trees—by taking a majority vote for classification or an average for regression. This approach dramatically reduces overfitting and increases accuracy. While a single tree is easy to interpret, a forest is more of a 'black box.' However, we can still measure feature importance to understand which variables are the most influential drivers of the predictions."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l02-f1",
          "front": "Gini Impurity",
          "back": "A metric measuring how often a randomly chosen element would be misclassified. Decision trees select splits that minimize Gini impurity to create purer subgroups."
        },
        {
          "id": "business-analytics-301-l02-f2",
          "front": "Overfitting in Decision Trees",
          "back": "When a tree is too deep and memorizes training data noise. It performs well on training data but poorly on unseen data. Prevented by pruning and setting depth limits."
        },
        {
          "id": "business-analytics-301-l02-f3",
          "front": "Random Forest",
          "back": "An ensemble of hundreds of decision trees trained on random data and feature subsets. It aggregates predictions via voting or averaging to reduce overfitting and improve accuracy."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l02-a1",
          "type": "image",
          "title": "Decision Tree Split",
          "content": "An animated flowchart illustrating how a decision tree splits a dataset of customers into 'Churn' and 'No Churn' groups based on features like 'Contract Type' and 'Monthly Charges'."
        }
      ]
    },
    {
      "id": "business-analytics-301-l03",
      "title": "Evaluating Model Performance",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define the components of a confusion matrix",
        "Calculate and interpret accuracy, precision, and recall",
        "Explain the tradeoff between precision and recall for different business problems"
      ],
      "chunks": [
        {
          "id": "business-analytics-301-l03-c1",
          "title": "The Confusion Matrix",
          "content": "To evaluate a classification model, we start with a confusion matrix. It's a simple table that compares the model's predictions to the actual outcomes, breaking them down into four categories: True Positives (correctly predicted positive), True Negatives (correctly predicted negative), False Positives (incorrectly predicted positive, a 'false alarm'), and False Negatives (incorrectly predicted negative, a 'miss'). Visualizing performance this way is the first step to understanding where a model succeeds and where it fails."
        },
        {
          "id": "business-analytics-301-l03-c2",
          "title": "Accuracy and Its Pitfalls",
          "content": "Accuracy is the most intuitive metric: it's the percentage of total correct predictions (TP + TN) out of all predictions. While simple, accuracy can be misleading, especially with imbalanced datasets. For example, in fraud detection where only 1% of transactions are fraudulent, a model that always predicts 'not fraud' would be 99% accurate but completely useless. This is why we need more nuanced metrics to understand true performance."
        },
        {
          "id": "business-analytics-301-l03-c3",
          "title": "Precision vs. Recall",
          "content": "Precision and recall provide a deeper look. Precision answers: 'Of all the positive predictions we made, how many were actually correct?' It measures the cost of false alarms. Recall answers: 'Of all the actual positive cases, how many did we catch?' It measures the cost of misses. There is often a tradeoff: for medical diagnoses, high recall is critical (don't miss a disease), while for marketing campaigns, high precision is better (don't annoy uninterested customers). Choosing the right metric depends on the business cost of each type of error."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l03-f1",
          "front": "Confusion Matrix",
          "back": "A 2x2 table that summarizes a classification model's performance by showing True Positives, True Negatives, False Positives, and False Negatives."
        },
        {
          "id": "business-analytics-301-l03-f2",
          "front": "Precision",
          "back": "The fraction of positive predictions that were actually correct (TP / (TP + FP)). High precision minimizes false alarms."
        },
        {
          "id": "business-analytics-301-l03-f3",
          "front": "Recall",
          "back": "The fraction of actual positive cases that were correctly identified (TP / (TP + FN)). High recall minimizes missed cases."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l03-a1",
          "type": "image",
          "title": "Annotated Confusion Matrix",
          "content": "An annotated 2x2 confusion matrix with clear labels for True Positive, True Negative, False Positive, and False Negative, using a business example like fraud detection."
        }
      ]
    },
    {
      "id": "business-analytics-301-l04",
      "title": "Clustering for Customer Segmentation",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain how K-means clustering groups similar observations",
        "Determine the optimal number of clusters using the elbow method",
        "Translate cluster results into actionable customer segments"
      ],
      "chunks": [
        {
          "id": "business-analytics-301-l04-c1",
          "title": "K-Means Clustering",
          "content": "K-means clustering is an unsupervised learning technique that groups data into a pre-defined number of clusters (K) based on similarity. The algorithm works iteratively: 1) It randomly places K initial 'centroids'. 2) It assigns each data point to its nearest centroid. 3) It recalculates each centroid's position as the average of all points assigned to it. Steps 2 and 3 are repeated until the cluster assignments no longer change. This process reveals natural groupings in the data without needing pre-existing labels."
        },
        {
          "id": "business-analytics-301-l04-c2",
          "title": "Choosing K: The Elbow Method",
          "content": "The most critical decision in K-means is choosing the right number of clusters, K. The elbow method helps with this. We run the algorithm for different values of K and plot a metric called the within-cluster sum of squares (WCSS). As K increases, WCSS will decrease. We look for the 'elbow' point on the plot where the rate of decrease sharply flattens, indicating diminishing returns from adding more clusters. This point suggests the optimal K, balancing model simplicity with its ability to explain the data's variance."
        },
        {
          "id": "business-analytics-301-l04-c3",
          "title": "From Clusters to Business Segments",
          "content": "Once clusters are formed, the final step is to interpret them as actionable business segments. By analyzing the average characteristics of each cluster, we can create descriptive personas. For example, one cluster might be 'High-Value Loyalists' (high frequency, high monetary value), while another could be 'Price-Sensitive Newcomers.' These segments allow businesses to move beyond one-size-fits-all strategies and develop targeted marketing campaigns, product recommendations, and service models for each distinct customer group."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l04-f1",
          "front": "K-Means Clustering",
          "back": "An unsupervised algorithm that partitions data into K groups by iteratively assigning points to the nearest centroid and recalculating centroids until convergence."
        },
        {
          "id": "business-analytics-301-l04-f2",
          "front": "Elbow Method",
          "back": "A technique for choosing the optimal K in K-means. Plot WCSS vs. K and select the 'elbow' point where adding more clusters yields diminishing returns."
        },
        {
          "id": "business-analytics-301-l04-f3",
          "front": "Translating Clusters to Segments",
          "back": "Interpreting cluster characteristics in business terms (e.g., 'High-Value Loyal' or 'Price-Sensitive') to design differentiated strategies for each group."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l04-a1",
          "type": "practice",
          "title": "Interactive Cluster Explorer",
          "content": "An interactive tool where users can upload a sample dataset, choose the number of clusters (K), and see how the K-means algorithm groups the data points visually."
        }
      ]
    },
    {
      "id": "business-analytics-301-l05",
      "title": "Time Series Forecasting",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Decompose a time series into trend, seasonality, and residual components",
        "Apply moving averages and exponential smoothing for forecasting",
        "Explain when ARIMA models are appropriate for business forecasting"
      ],
      "chunks": [
        {
          "id": "business-analytics-301-l05-c1",
          "title": "Time Series Components",
          "content": "A time series is a sequence of data points collected over time. To understand it, we decompose it into three components: Trend (the long-term upward or downward direction), Seasonality (predictable, repeating patterns at fixed intervals, like holiday sales spikes), and Residuals (the random, unexplained noise left over). By separating these components, we can better understand the underlying structure of our data and choose the right forecasting model. For example, a retailer can see their long-term growth trend separately from their Q4 seasonal peak."
        },
        {
          "id": "business-analytics-301-l05-c2",
          "title": "Moving Averages and Exponential Smoothing",
          "content": "Simple forecasting methods are often highly effective. A moving average smooths out short-term fluctuations by averaging observations from a fixed window of past periods, revealing the underlying trend. Exponential smoothing is an enhancement that gives more weight to recent observations, allowing the forecast to adapt more quickly to changes. A popular extension, the Holt-Winters method, can explicitly model both trend and seasonality, making it a powerful yet intuitive tool for many business forecasting needs."
        },
        {
          "id": "business-analytics-301-l05-c3",
          "title": "ARIMA Models",
          "content": "ARIMA (AutoRegressive Integrated Moving Average) is a more advanced class of models for capturing complex time-based patterns. The 'AutoRegressive' (AR) part uses past values to predict future values, while the 'Moving Average' (MA) part uses past forecast errors. The 'Integrated' (I) part involves differencing the data to make it stationary (i.e., its statistical properties don't change over time). While more complex to configure, ARIMA models are powerful for forecasting when the underlying data has dependencies that simpler methods can't capture."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l05-f1",
          "front": "Three Components of a Time Series",
          "back": "Trend (long-term direction), Seasonality (repeating fixed-interval patterns), and Residual (unexplained random variation)."
        },
        {
          "id": "business-analytics-301-l05-f2",
          "front": "Exponential Smoothing",
          "back": "A forecasting method that weights recent observations more heavily. The Holt-Winters method extends it to handle both trend and seasonality."
        },
        {
          "id": "business-analytics-301-l05-f3",
          "front": "ARIMA(p,d,q)",
          "back": "AutoRegressive Integrated Moving Average. A sophisticated model where p is the AR order (past values), d is differencing (for stationarity), and q is the MA order (past errors)."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l05-a1",
          "type": "image",
          "title": "Time Series Decomposition",
          "content": "A chart decomposing a single time series (e.g., quarterly sales) into three separate charts stacked vertically: the overall Trend, the repeating Seasonality, and the random Residual noise."
        }
      ]
    },
    {
      "id": "business-analytics-301-l06",
      "title": "Checkpoint: Core Predictive Models",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "business-analytics-301-l06-q1",
          "text": "A bank wants to predict whether a loan applicant will default (yes/no). Which model is MOST appropriate?",
          "options": [
            {
              "id": "a",
              "text": "Linear regression"
            },
            {
              "id": "b",
              "text": "Logistic regression"
            },
            {
              "id": "c",
              "text": "K-means clustering"
            },
            {
              "id": "d",
              "text": "Moving average"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Logistic regression is designed for binary classification problems (default/no default). Linear regression is for continuous outcomes, K-means is for unsupervised grouping, and moving average is for time series."
        },
        {
          "id": "business-analytics-301-l06-q2",
          "text": "A decision tree perfectly classifies the training data but performs poorly on test data. This is a classic sign of:",
          "options": [
            {
              "id": "a",
              "text": "Underfitting"
            },
            {
              "id": "b",
              "text": "Insufficient training data"
            },
            {
              "id": "c",
              "text": "Overfitting"
            },
            {
              "id": "d",
              "text": "Data leakage"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Perfect training accuracy but poor test performance is the hallmark of overfitting—the model has memorized noise in the training data rather than learning generalizable patterns."
        },
        {
          "id": "business-analytics-301-l06-q3",
          "text": "A medical screening model is designed to detect a rare but serious disease. Which metric is most critical to maximize?",
          "options": [
            {
              "id": "a",
              "text": "Accuracy"
            },
            {
              "id": "b",
              "text": "Precision"
            },
            {
              "id": "c",
              "text": "Recall"
            },
            {
              "id": "d",
              "text": "F1-Score"
            }
          ],
          "correctOptionId": "c",
          "explanation": "For a serious disease, the cost of a false negative (missing a case) is extremely high. Therefore, maximizing recall (the ability to find all actual positive cases) is the top priority, even if it means accepting more false positives (lower precision)."
        },
        {
          "id": "business-analytics-301-l06-q4",
          "text": "A retailer's monthly sales show a repeating December spike every year. This pattern is called:",
          "options": [
            {
              "id": "a",
              "text": "Trend"
            },
            {
              "id": "b",
              "text": "Residual noise"
            },
            {
              "id": "c",
              "text": "Seasonality"
            },
            {
              "id": "d",
              "text": "Autocorrelation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Seasonality is a repeating pattern at fixed intervals. A December spike that occurs every year is classic seasonality. Trend refers to the long-term direction, not periodic patterns."
        }
      ]
    },
    {
      "id": "business-analytics-301-l07",
      "title": "Advanced Applications: Recommendation & Text Analytics",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Compare collaborative and content-based recommendation approaches",
        "Explain the 'cold-start' problem in recommendation systems",
        "Apply sentiment analysis to extract insights from customer feedback"
      ],
      "chunks": [
        {
          "id": "business-analytics-301-l07-c1",
          "title": "Recommendation Systems",
          "content": "Recommendation systems predict user preferences to suggest relevant items. The two main types are collaborative filtering and content-based filtering. Collaborative filtering finds users with similar tastes and recommends items that similar users have liked ('people who bought X also bought Y'). Its main challenge is the 'cold-start problem'—it struggles with new users or items that have no interaction history. Content-based filtering recommends items based on their attributes, matching them to a user's profile (e.g., recommending more action movies to a user who rates action movies highly). Many modern systems use a hybrid approach to get the best of both worlds."
        },
        {
          "id": "business-analytics-301-l07-c2",
          "title": "Text Analytics and Sentiment Analysis",
          "content": "Text analytics extracts meaningful, structured insights from unstructured text data like customer reviews, emails, and social media posts. A key technique is sentiment analysis, which automatically classifies text as positive, negative, or neutral. This allows businesses to quantify customer satisfaction and track brand perception at scale. Other techniques include topic modeling, which identifies common themes in large volumes of text, and named entity recognition, which extracts key information like product names or locations. These tools can uncover insights that would be impossible to find through manual reading."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l07-f1",
          "front": "Cold-Start Problem",
          "back": "The challenge collaborative filtering faces with new users or items. With no historical interaction data, it cannot generate recommendations, requiring content-based or popularity-based fallbacks."
        },
        {
          "id": "business-analytics-301-l07-f2",
          "front": "Sentiment Analysis",
          "back": "A Natural Language Processing (NLP) technique that classifies text (reviews, social media, emails) as positive, negative, or neutral to extract structured insights from unstructured data."
        },
        {
          "id": "business-analytics-301-l07-f3",
          "front": "Collaborative vs. Content-Based Filtering",
          "back": "Collaborative filtering uses user-item interactions (ratings, purchases). Content-based filtering uses item attributes (genre, brand). Hybrid models combine both."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l07-a1",
          "type": "image",
          "title": "Collaborative vs. Content-Based",
          "content": "A side-by-side comparison diagram. Collaborative Filtering shows users connected by shared item ratings. Content-Based Filtering shows a user connected to items based on shared attributes (e.g., genre, author)."
        }
      ]
    },
    {
      "id": "business-analytics-301-l08",
      "title": "Final Assessment: Predictive Analytics & ML",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "business-analytics-301-l08-q1",
          "text": "A fraud detection model catches 95% of fraudulent transactions but also flags 20% of legitimate transactions as fraud. This indicates the model has high recall but would benefit from improved:",
          "options": [
            {
              "id": "a",
              "text": "Recall"
            },
            {
              "id": "b",
              "text": "Precision"
            },
            {
              "id": "c",
              "text": "Accuracy"
            },
            {
              "id": "d",
              "text": "Speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The model has high recall (catches 95% of actual fraud) but low precision (many of its positive predictions are false alarms). Improving precision would reduce the number of legitimate transactions that are incorrectly flagged."
        },
        {
          "id": "business-analytics-301-l08-q2",
          "text": "Amazon's 'Customers who bought this also bought...' feature is a classic example of:",
          "options": [
            {
              "id": "a",
              "text": "Content-based filtering"
            },
            {
              "id": "b",
              "text": "Collaborative filtering"
            },
            {
              "id": "c",
              "text": "Sentiment analysis"
            },
            {
              "id": "d",
              "text": "Time series forecasting"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This approach relies on the collective behavior of users ('customers who...') rather than the attributes of the products themselves, which is the definition of collaborative filtering."
        },
        {
          "id": "business-analytics-301-l08-q3",
          "text": "A random forest improves on a single decision tree primarily by:",
          "options": [
            {
              "id": "a",
              "text": "Using a simpler model that is easier to interpret"
            },
            {
              "id": "b",
              "text": "Training multiple trees on random subsets and aggregating predictions to reduce overfitting"
            },
            {
              "id": "c",
              "text": "Eliminating the need for training data"
            },
            {
              "id": "d",
              "text": "Always selecting the deepest possible tree"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Random forests build many trees on random data and feature subsets, then aggregate predictions. This ensemble approach reduces the variance and overfitting that can plague individual deep trees."
        },
        {
          "id": "business-analytics-301-l08-q4",
          "text": "Which step in the analytics workflow should come FIRST?",
          "options": [
            {
              "id": "a",
              "text": "Select the machine learning algorithm"
            },
            {
              "id": "b",
              "text": "Collect and clean the data"
            },
            {
              "id": "c",
              "text": "Define the business question and success criteria"
            },
            {
              "id": "d",
              "text": "Deploy the model to production"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The analytics workflow must start with a clear business question and success criteria. Without knowing what problem you are solving and how you will measure success, all subsequent efforts may be wasted."
        }
      ]
    }
  ]
};
