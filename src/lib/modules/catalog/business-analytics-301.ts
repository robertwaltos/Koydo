import type { LearningModule } from "@/lib/modules/types";

export const BusinessAnalytics301Module: LearningModule = {
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
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Build classification models using logistic regression and decision trees",
    "Apply clustering techniques for customer segmentation",
    "Forecast business metrics using time series methods",
    "Explain how recommendation systems generate personalized suggestions",
    "Extract insights from unstructured text using sentiment analysis",
    "Evaluate model performance using accuracy, precision, and recall",
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
          "content": "When the outcome is binary — will a customer churn (yes/no), will a loan default (yes/no) — linear regression fails because it can predict values outside 0 and 1. Logistic regression solves this by using the logistic (sigmoid) function to constrain predictions between 0 and 1, outputting a probability. If the predicted probability exceeds a threshold (typically 0.5), the observation is classified into the positive class."
        },
        {
          "id": "business-analytics-301-l01-c2",
          "title": "Interpreting Coefficients",
          "content": "In logistic regression, coefficients represent the change in log-odds for a one-unit increase in the predictor. Exponentiated coefficients give odds ratios: an odds ratio of 1.3 means a one-unit increase in X makes the outcome 1.3 times more likely. For example, if each additional customer service complaint increases churn odds by 1.4x, a customer with three complaints is significantly more likely to leave than one with zero."
        },
        {
          "id": "business-analytics-301-l01-c3",
          "title": "Business Applications",
          "content": "Logistic regression powers many business decisions: credit scoring (will this applicant default?), customer churn prediction (who will cancel?), marketing response modeling (who will respond to this campaign?), and fraud detection (is this transaction fraudulent?). Its transparency — you can see which factors drive the prediction — makes it preferred in regulated industries where model explainability is required."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l01-f1",
          "front": "Logistic regression",
          "back": "A classification model that uses the sigmoid function to predict the probability of a binary outcome (0 or 1) — outputs values constrained between 0 and 1"
        },
        {
          "id": "business-analytics-301-l01-f2",
          "front": "Odds ratio in logistic regression",
          "back": "The exponentiated coefficient — an odds ratio of 1.4 means a one-unit increase in the predictor makes the outcome 1.4 times more likely"
        },
        {
          "id": "business-analytics-301-l01-f3",
          "front": "Why logistic regression is preferred in regulated industries",
          "back": "Its coefficients are interpretable — stakeholders and regulators can see which factors drive predictions, unlike black-box models"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "A decision tree recursively splits data based on feature values to create pure subgroups. At each node, the algorithm selects the feature and threshold that best separates the classes (using metrics like Gini impurity or information gain). The result is a flowchart-like structure: 'If annual income > $80K AND account age > 2 years, then low churn risk.' Trees are intuitive — business users can follow the logic without statistical training."
        },
        {
          "id": "business-analytics-301-l02-c2",
          "title": "Overfitting and Pruning",
          "content": "A deep, complex tree can memorize training data perfectly but fail on new data — this is overfitting. The tree captures noise instead of signal. Pruning strategies include setting a maximum depth, requiring a minimum number of observations per leaf, or using cost-complexity pruning that penalizes tree size. The goal is a tree simple enough to generalize but complex enough to capture real patterns."
        },
        {
          "id": "business-analytics-301-l02-c3",
          "title": "Random Forests",
          "content": "Random forests build hundreds of decision trees, each trained on a random subset of data and features, then aggregate their predictions through voting (classification) or averaging (regression). This ensemble approach reduces overfitting and improves accuracy. The tradeoff is interpretability — while a single tree is easy to explain, a forest of 500 trees is a black box. Feature importance scores help identify which variables the forest relies on most."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l02-f1",
          "front": "Gini impurity",
          "back": "A metric measuring how often a randomly chosen element would be misclassified — decision trees select splits that minimize Gini impurity to create purer subgroups"
        },
        {
          "id": "business-analytics-301-l02-f2",
          "front": "Overfitting in decision trees",
          "back": "When a tree is too deep and memorizes training data noise — it performs well on training data but poorly on unseen data. Prevented by pruning and depth limits."
        },
        {
          "id": "business-analytics-301-l02-f3",
          "front": "Random forest",
          "back": "An ensemble of hundreds of decision trees trained on random data and feature subsets — aggregates predictions via voting or averaging to reduce overfitting and improve accuracy"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "business-analytics-301-l03",
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
          "id": "business-analytics-301-l03-c1",
          "title": "K-Means Clustering",
          "content": "K-means is an unsupervised algorithm that partitions data into K groups based on similarity. It works iteratively: (1) initialize K centroids randomly, (2) assign each data point to the nearest centroid, (3) recalculate centroids as the mean of assigned points, (4) repeat until assignments stabilize. Unlike classification, clustering has no predefined labels — the algorithm discovers natural groupings in the data."
        },
        {
          "id": "business-analytics-301-l03-c2",
          "title": "Choosing K: The Elbow Method",
          "content": "The key question in K-means is how many clusters to use. The elbow method plots the within-cluster sum of squares (WCSS) against K. As K increases, WCSS decreases. The 'elbow' — where adding another cluster yields diminishing improvement — suggests the optimal K. The silhouette score offers another perspective, measuring how similar each point is to its own cluster versus neighboring clusters. Business context should also guide K — three segments may be more actionable than seven."
        },
        {
          "id": "business-analytics-301-l03-c3",
          "title": "From Clusters to Business Segments",
          "content": "Raw clusters become valuable when interpreted in business terms. If Cluster 1 has high purchase frequency, high average order value, and long tenure, label them 'Loyal High-Value Customers.' Cluster 2 might be 'Price-Sensitive Bargain Hunters' with low margins but high volume. Each segment then receives a tailored strategy — loyalty rewards for high-value, promotions for price-sensitive, onboarding campaigns for new customers. The analytics only matter if they drive differentiated action."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l03-f1",
          "front": "K-means clustering",
          "back": "An unsupervised algorithm that partitions data into K groups by iteratively assigning points to the nearest centroid and recalculating centroids until convergence"
        },
        {
          "id": "business-analytics-301-l03-f2",
          "front": "Elbow method",
          "back": "A technique for choosing the optimal K in K-means — plot WCSS vs. K and select the point where additional clusters yield diminishing improvement (the 'elbow')"
        },
        {
          "id": "business-analytics-301-l03-f3",
          "front": "Translating clusters to segments",
          "back": "Interpreting cluster characteristics in business terms (e.g., 'High-Value Loyal' or 'Price-Sensitive') and designing differentiated strategies for each group"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "business-analytics-301-l04",
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
          "id": "business-analytics-301-l04-c1",
          "title": "Time Series Components",
          "content": "A time series can be decomposed into three components: trend (long-term upward or downward movement), seasonality (repeating patterns at fixed intervals — weekly, monthly, quarterly), and residual (random noise that cannot be explained). Decomposition reveals the underlying structure. A retailer might see a clear upward trend, strong December seasonality, and random week-to-week noise. Understanding these components is essential before choosing a forecasting method."
        },
        {
          "id": "business-analytics-301-l04-c2",
          "title": "Moving Averages and Exponential Smoothing",
          "content": "Moving averages smooth out noise by averaging the last N observations. A 12-month moving average removes annual seasonality. Exponential smoothing (ETS) improves on this by giving more weight to recent observations — the smoothing parameter α controls how quickly the model adapts. Holt-Winters extends ETS to handle both trend and seasonality simultaneously. These methods are simple, interpretable, and often surprisingly effective for business forecasting."
        },
        {
          "id": "business-analytics-301-l04-c3",
          "title": "ARIMA Models",
          "content": "ARIMA (AutoRegressive Integrated Moving Average) models capture complex temporal dependencies. AR terms use past values to predict the future. MA terms model residual errors. The 'I' (integrated) component handles non-stationary data through differencing. ARIMA(p,d,q) requires choosing three parameters: p (AR order), d (differencing), q (MA order). While more powerful than simple methods, ARIMA requires stationarity testing and careful parameter selection — automated tools like auto-ARIMA simplify this process."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l04-f1",
          "front": "Three components of a time series",
          "back": "Trend (long-term direction), seasonality (repeating fixed-interval patterns), and residual (unexplained random variation)"
        },
        {
          "id": "business-analytics-301-l04-f2",
          "front": "Exponential smoothing",
          "back": "A forecasting method that weights recent observations more heavily — the smoothing parameter α controls adaptation speed. Holt-Winters extends it to handle trend and seasonality."
        },
        {
          "id": "business-analytics-301-l04-f3",
          "front": "ARIMA(p,d,q)",
          "back": "AutoRegressive Integrated Moving Average — p is the AR order (past values), d is differencing (stationarity), q is MA order (past errors). Captures complex temporal patterns."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-301-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "business-analytics-301-l05",
      "title": "Checkpoint: Predictive Models",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "business-analytics-301-l05-q1",
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
          "explanation": "Logistic regression is designed for binary classification problems (default/no default). Linear regression is for continuous outcomes, K-means is unsupervised, and moving average is for time series."
        },
        {
          "id": "business-analytics-301-l05-q2",
          "text": "A decision tree perfectly classifies the training data but performs poorly on test data. This is likely caused by:",
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
              "text": "Using the wrong target variable"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Perfect training accuracy but poor test performance is the hallmark of overfitting — the tree has memorized noise in the training data rather than learning generalizable patterns."
        },
        {
          "id": "business-analytics-301-l05-q3",
          "text": "In K-means clustering, the elbow method helps determine:",
          "options": [
            {
              "id": "a",
              "text": "The best features to include"
            },
            {
              "id": "b",
              "text": "The optimal number of clusters (K)"
            },
            {
              "id": "c",
              "text": "Whether the data is normally distributed"
            },
            {
              "id": "d",
              "text": "The correct distance metric to use"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The elbow method plots within-cluster sum of squares against K and identifies the point of diminishing returns — helping select the optimal number of clusters."
        },
        {
          "id": "business-analytics-301-l05-q4",
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
          "explanation": "Seasonality is a repeating pattern at fixed intervals. A December spike that occurs every year is classic seasonality. Trend refers to long-term direction, not periodic patterns."
        }
      ]
    },
    {
      "id": "business-analytics-301-l06",
      "title": "Recommendation Systems, Text Analytics & Model Evaluation",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Compare collaborative and content-based recommendation approaches",
        "Apply sentiment analysis to extract insights from customer feedback",
        "Evaluate classification models using accuracy, precision, and recall"
      ],
      "chunks": [
        {
          "id": "business-analytics-301-l06-c1",
          "title": "Recommendation Systems",
          "content": "Recommendation systems predict what users will like based on past behavior. Collaborative filtering finds users with similar preferences ('customers who bought X also bought Y') — it needs no product knowledge but suffers from the cold-start problem for new users. Content-based filtering matches product attributes to user preferences ('you liked action movies, here is another action movie'). Hybrid systems combine both approaches. Netflix estimates recommendations drive 80% of viewer activity."
        },
        {
          "id": "business-analytics-301-l06-c2",
          "title": "Text Analytics and Sentiment Analysis",
          "content": "Text analytics transforms unstructured text — reviews, emails, social media — into structured insights. Sentiment analysis classifies text as positive, negative, or neutral. Topic modeling identifies recurring themes in large text corpora. Named entity recognition extracts people, organizations, and products. A hotel chain analyzing thousands of reviews might discover that 'cleanliness' drives satisfaction more than 'amenities' — an insight buried in unstructured data that surveys might miss."
        },
        {
          "id": "business-analytics-301-l06-c3",
          "title": "Model Evaluation Metrics",
          "content": "Accuracy (correct predictions / total) can be misleading with imbalanced data — a model predicting 'no fraud' on 99% non-fraud data achieves 99% accuracy while catching zero fraud. Precision measures what fraction of positive predictions were correct (avoiding false alarms). Recall measures what fraction of actual positives were caught (avoiding misses). The F1 score balances precision and recall. In fraud detection, high recall matters most; in email marketing, high precision avoids annoying customers with irrelevant messages."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-301-l06-f1",
          "front": "Cold-start problem",
          "back": "The challenge collaborative filtering faces with new users or items — no historical interaction data exists to generate recommendations, requiring content-based or popularity-based fallbacks"
        },
        {
          "id": "business-analytics-301-l06-f2",
          "front": "Sentiment analysis",
          "back": "An NLP technique that classifies text (reviews, social media, emails) as positive, negative, or neutral — extracts structured insights from unstructured text data"
        },
        {
          "id": "business-analytics-301-l06-f3",
          "front": "Precision vs. recall",
          "back": "Precision: fraction of positive predictions that were correct (minimizes false alarms). Recall: fraction of actual positives that were caught (minimizes misses). Choose based on business cost of each error type."
        }
      ]
    },
    {
      "id": "business-analytics-301-l07",
      "title": "Final Assessment: Predictive Analytics & ML",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "business-analytics-301-l07-q1",
          "text": "A fraud detection model catches 95% of fraudulent transactions but also flags 20% of legitimate transactions as fraud. Which metric needs improvement?",
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
              "text": "R-squared"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The model has high recall (catches 95% of fraud) but low precision (many false positives among legitimate transactions). Improving precision would reduce false alarms without sacrificing fraud detection."
        },
        {
          "id": "business-analytics-301-l07-q2",
          "text": "Amazon's 'Customers who bought this also bought...' feature is an example of:",
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
          "explanation": "Collaborative filtering uses patterns in user behavior ('customers who bought X also bought Y') rather than product attributes. It does not need to understand the products themselves."
        },
        {
          "id": "business-analytics-301-l07-q3",
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
          "explanation": "Random forests build many trees on random data and feature subsets, then aggregate predictions. This ensemble approach reduces the overfitting that plagues individual deep trees."
        },
        {
          "id": "business-analytics-301-l07-q4",
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
          "explanation": "The analytics workflow starts with a clear business question and success criteria. Without knowing what problem you are solving and how you will measure success, data collection and modeling efforts may be wasted."
        }
      ]
    }
  ]
};
