import type { LearningModule } from "@/lib/modules/types";

export const DataScience101Module: LearningModule = {
  id: "data-science-101",
  title: "Data Science Foundations",
  description:
    "Master the fundamentals of data science — from descriptive statistics and data wrangling to probability, machine learning, and model evaluation. Learn to transform raw data into actionable insights and make data-driven decisions with confidence.",
  subject: "Computer Science",
  tags: ["core", "curriculum", "interactive", "data-science", "analytics"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe the data science pipeline and distinguish structured from unstructured data",
    "Compute and interpret measures of central tendency, spread, and distribution shape",
    "Clean datasets by handling missing values, duplicates, and outliers using standard techniques",
    "Apply conditional probability and Bayes' theorem to real-world inference problems",
    "Differentiate supervised from unsupervised learning and select appropriate algorithms for a given task",
    "Evaluate model performance using accuracy, precision, recall, F1-score, and ROC-AUC metrics",
    "Communicate data findings effectively through appropriate chart types and narrative structure"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  What Is Data Science?  (video)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l01",
      title: "What Is Data Science?",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "data-science-101-l01-c1",
          title: "The Data Science Pipeline",
          content:
            "Data science is the practice of extracting knowledge and insights from data using scientific methods, statistics, and algorithms. The typical pipeline has five stages: question formulation, data collection, data cleaning, analysis and modeling, and communication of results. Each stage feeds into the next — a poorly framed question leads to irrelevant data, and unclean data produces unreliable models. Understanding this end-to-end workflow is the first step to becoming an effective data scientist."
        },
        {
          id: "data-science-101-l01-c2",
          title: "Types of Data",
          content:
            "Data comes in two broad categories. Structured data lives in rows and columns — spreadsheets, SQL databases, and CSV files are classic examples. Unstructured data lacks a predefined schema: text documents, images, audio recordings, and social media posts all qualify. Semi-structured data (JSON, XML) sits in between. Roughly 80 percent of the world's data is unstructured, which is why modern data science increasingly relies on natural language processing and computer vision techniques."
        },
        {
          id: "data-science-101-l01-c3",
          title: "Roles in Data Science",
          content:
            "The data science ecosystem includes several specialized roles. Data analysts focus on summarizing historical data and building dashboards. Data engineers design the pipelines that collect, store, and transform data at scale. Machine learning engineers deploy predictive models into production systems. Data scientists sit at the intersection — they blend statistical reasoning, programming skill, and domain expertise to solve complex problems and guide strategic decisions."
        }
      ],
      flashcards: [
        { id: "data-science-101-l01-f1", front: "The five-stage workflow from question to communication", back: "Data Science Pipeline" },
        { id: "data-science-101-l01-f2", front: "Data organized in rows and columns (e.g., SQL tables, CSVs)", back: "Structured Data" },
        { id: "data-science-101-l01-f3", front: "Data without a predefined schema (e.g., images, text, audio)", back: "Unstructured Data" },
        { id: "data-science-101-l01-f4", front: "Role that designs data collection and transformation pipelines", back: "Data Engineer" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Descriptive Statistics  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l02",
      title: "Descriptive Statistics",
      type: "interactive",
      duration: 15,
      chunks: [
        {
          id: "data-science-101-l02-c1",
          title: "Mean, Median, and Mode",
          content:
            "Measures of central tendency summarize a dataset with a single representative value. The mean (arithmetic average) sums all values and divides by the count — it is sensitive to outliers. The median is the middle value when data is sorted; it resists extreme values and is preferred for skewed distributions. The mode is the most frequently occurring value and is the only measure suitable for categorical data. Choosing the right measure depends on data type and distribution shape."
        },
        {
          id: "data-science-101-l02-c2",
          title: "Variance and Standard Deviation",
          content:
            "Spread measures tell you how much values differ from the center. Variance is the average of squared deviations from the mean — squaring ensures negative differences do not cancel out. Standard deviation is the square root of variance, returning the spread to the original unit of measurement. A small standard deviation means data points cluster tightly around the mean; a large one signals wide dispersion. In a normal distribution, about 68 percent of data falls within one standard deviation of the mean."
        },
        {
          id: "data-science-101-l02-c3",
          title: "Percentiles and Distribution Shape",
          content:
            "Percentiles divide data into 100 equal parts. The 25th percentile (Q1) and 75th percentile (Q3) define the interquartile range (IQR), which captures the middle 50 percent of observations. Box plots display Q1, median, Q3, and outliers at a glance. Distribution shape matters too: a right-skewed distribution has a long tail of high values (e.g., income data), while a left-skewed distribution tails toward low values. Symmetrical distributions, like the classic bell curve, have mean ≈ median ≈ mode."
        }
      ],
      flashcards: [
        { id: "data-science-101-l02-f1", front: "Sum of all values divided by the count", back: "Mean (Arithmetic Average)" },
        { id: "data-science-101-l02-f2", front: "The middle value in a sorted dataset", back: "Median" },
        { id: "data-science-101-l02-f3", front: "Average of squared deviations from the mean", back: "Variance" },
        { id: "data-science-101-l02-f4", front: "The range between Q1 and Q3 capturing the middle 50%", back: "Interquartile Range (IQR)" }
      ],
      interactiveActivities: [
        {
          id: "data-science-101-l02-a1",
          type: "sorting_buckets",
          title: "Classify the Statistic",
          description: "Sort each statistical measure into the correct category: Central Tendency or Spread.",
          buckets: ["Central Tendency", "Spread"],
          items: [
            { text: "Mean", bucket: "Central Tendency" },
            { text: "Median", bucket: "Central Tendency" },
            { text: "Mode", bucket: "Central Tendency" },
            { text: "Variance", bucket: "Spread" },
            { text: "Standard Deviation", bucket: "Spread" },
            { text: "Interquartile Range", bucket: "Spread" },
            { text: "Range", bucket: "Spread" }
          ]
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Foundations Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l03",
      title: "Foundations Checkpoint",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        timeLimitMinutes: 8,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1 }],
        difficultyDistribution: { easy: 50, medium: 25, hard: 25 },
        feedbackMode: "after_each",
        masteryThreshold: 0.75
      },
      questions: [
        {
          id: "data-science-101-l03-q1",
          text: "Which stage of the data science pipeline involves removing duplicates and handling missing values?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Question formulation" },
            { id: "b", text: "Data collection" },
            { id: "c", text: "Data cleaning" },
            { id: "d", text: "Communication of results" }
          ],
          correctOptionId: "c",
          explanation: "Data cleaning (also called data wrangling) is the pipeline stage where you fix quality issues such as missing values, duplicates, and inconsistent formatting before analysis."
        },
        {
          id: "data-science-101-l03-q2",
          text: "A dataset of household incomes is heavily right-skewed. Which measure of central tendency best represents the typical household?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Mean" },
            { id: "b", text: "Median" },
            { id: "c", text: "Mode" },
            { id: "d", text: "Variance" }
          ],
          correctOptionId: "b",
          explanation: "The median is resistant to extreme values. In right-skewed income data, a few very high earners pull the mean upward, making the median a more representative center."
        },
        {
          id: "data-science-101-l03-q3",
          text: "In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "50%" },
            { id: "b", text: "68%" },
            { id: "c", text: "95%" },
            { id: "d", text: "99.7%" }
          ],
          correctOptionId: "b",
          explanation: "The empirical rule (68-95-99.7 rule) states that about 68% of observations in a normal distribution lie within ±1 standard deviation of the mean."
        },
        {
          id: "data-science-101-l03-q4",
          text: "Which of the following is an example of unstructured data?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "A CSV file of sales transactions" },
            { id: "b", text: "A relational SQL database" },
            { id: "c", text: "A collection of customer review text" },
            { id: "d", text: "A spreadsheet with employee records" }
          ],
          correctOptionId: "c",
          explanation: "Free-form customer review text has no fixed schema or tabular structure, making it unstructured data. It typically requires NLP techniques to analyze."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L04  Data Wrangling and Visualization  (video)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l04",
      title: "Data Wrangling and Visualization",
      type: "video",
      duration: 14,
      chunks: [
        {
          id: "data-science-101-l04-c1",
          title: "Cleaning and Missing Values",
          content:
            "Raw data is rarely analysis-ready. Data wrangling is the process of transforming messy data into a clean, consistent format. Missing values are the most common issue — you can drop rows with too many gaps, impute numeric fields with the median, or fill categorical fields with the mode. Duplicate records inflate counts and skew statistics, so deduplication is essential. Standardizing formats (dates, currencies, capitalization) ensures consistency across the dataset."
        },
        {
          id: "data-science-101-l04-c2",
          title: "Handling Outliers",
          content:
            "Outliers are data points that deviate significantly from the rest. They can result from measurement errors, data entry mistakes, or genuine rare events. Common detection methods include the IQR rule (values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR) and z-scores (absolute value greater than 3). Deciding what to do with outliers depends on context: remove them if they are errors, cap them to reduce influence, or keep them if they represent real phenomena worth studying."
        },
        {
          id: "data-science-101-l04-c3",
          title: "Chart Types and Storytelling with Data",
          content:
            "Choosing the right chart is critical for clear communication. Bar charts compare categories; line charts show trends over time; scatter plots reveal relationships between two numeric variables; histograms display frequency distributions. Pie charts work only for a small number of categories that sum to 100 percent. Effective data storytelling follows a narrative arc: set context, present the insight, and recommend an action. Annotating key data points and using consistent color scales help the audience grasp findings quickly."
        }
      ],
      flashcards: [
        { id: "data-science-101-l04-f1", front: "Replacing missing numeric values with the column median", back: "Median Imputation" },
        { id: "data-science-101-l04-f2", front: "Values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR", back: "IQR Outlier Rule" },
        { id: "data-science-101-l04-f3", front: "Chart that shows the relationship between two numeric variables", back: "Scatter Plot" },
        { id: "data-science-101-l04-f4", front: "The practice of presenting data insights through a narrative arc", back: "Data Storytelling" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Probability and Inference  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l05",
      title: "Probability and Inference",
      type: "interactive",
      duration: 16,
      chunks: [
        {
          id: "data-science-101-l05-c1",
          title: "Conditional Probability and Bayes' Theorem",
          content:
            "Conditional probability measures the likelihood of event A occurring given that event B has already occurred, written P(A|B). Bayes' theorem reverses the conditioning: P(A|B) = P(B|A) × P(A) / P(B). This is foundational in data science — spam filters, for instance, compute the probability that an email is spam given the words it contains. The prior P(A) represents your initial belief, the likelihood P(B|A) is how probable the evidence is under A, and the posterior P(A|B) is the updated belief after seeing the evidence."
        },
        {
          id: "data-science-101-l05-c2",
          title: "Hypothesis Testing and P-Values",
          content:
            "Hypothesis testing is a formal framework for making decisions from data. You start with a null hypothesis (H₀) — typically 'no effect' or 'no difference' — and an alternative hypothesis (H₁). You collect data, compute a test statistic, and derive a p-value: the probability of seeing results at least as extreme as the observed data if H₀ were true. A small p-value (commonly below 0.05) suggests the data is unlikely under H₀, leading you to reject it. A p-value is not the probability that H₀ is true."
        },
        {
          id: "data-science-101-l05-c3",
          title: "Confidence Intervals",
          content:
            "A confidence interval provides a range of plausible values for a population parameter. A 95 percent confidence interval means if you repeated the study many times, about 95 percent of the constructed intervals would contain the true parameter. Wider intervals indicate more uncertainty, often caused by small sample sizes or high variability. Confidence intervals complement p-values by showing the magnitude and precision of an estimate, not just whether it is statistically significant."
        }
      ],
      flashcards: [
        { id: "data-science-101-l05-f1", front: "P(A|B) = P(B|A) × P(A) / P(B)", back: "Bayes' Theorem" },
        { id: "data-science-101-l05-f2", front: "The default assumption of no effect or no difference", back: "Null Hypothesis (H₀)" },
        { id: "data-science-101-l05-f3", front: "Probability of observing data as extreme as the result if H₀ is true", back: "P-Value" },
        { id: "data-science-101-l05-f4", front: "A range of plausible values for a population parameter", back: "Confidence Interval" }
      ],
      interactiveActivities: [
        {
          id: "data-science-101-l05-a1",
          type: "matching_pairs",
          title: "Match Probability Concepts",
          description: "Match each probability or inference concept with its correct definition.",
          pairs: [
            { left: "Conditional Probability", right: "P(A given B has occurred)" },
            { left: "Prior Probability", right: "Initial belief before seeing evidence" },
            { left: "Posterior Probability", right: "Updated belief after seeing evidence" },
            { left: "P-Value", right: "Probability of data as extreme under H₀" },
            { left: "Null Hypothesis", right: "Assumption of no effect or no difference" },
            { left: "Confidence Interval", right: "Range of plausible parameter values" }
          ]
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Wrangling & Probability Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l06",
      title: "Wrangling & Probability Checkpoint",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        timeLimitMinutes: 8,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1 }],
        difficultyDistribution: { easy: 25, medium: 50, hard: 25 },
        feedbackMode: "after_each",
        masteryThreshold: 0.75
      },
      questions: [
        {
          id: "data-science-101-l06-q1",
          text: "A numeric column has 15% missing values. Which imputation strategy is most resistant to outliers?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Replace with the column mean" },
            { id: "b", text: "Replace with the column median" },
            { id: "c", text: "Replace with zero" },
            { id: "d", text: "Delete all rows with missing values" }
          ],
          correctOptionId: "b",
          explanation: "The median is robust to outliers. Mean imputation is pulled toward extreme values, and replacing with zero introduces artificial data."
        },
        {
          id: "data-science-101-l06-q2",
          text: "Using the IQR outlier rule, a data point is considered an outlier if it falls:",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Below Q1 − 1.5×IQR or above Q3 + 1.5×IQR" },
            { id: "b", text: "More than 1 standard deviation from the mean" },
            { id: "c", text: "Outside the 25th to 75th percentile range" },
            { id: "d", text: "Below the mode or above the median" }
          ],
          correctOptionId: "a",
          explanation: "The IQR rule flags observations that fall more than 1.5 times the interquartile range below Q1 or above Q3."
        },
        {
          id: "data-science-101-l06-q3",
          text: "In Bayes' theorem, what does the term P(A) represent?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "The likelihood of the evidence given the hypothesis" },
            { id: "b", text: "The prior probability of the hypothesis before seeing evidence" },
            { id: "c", text: "The posterior probability after updating" },
            { id: "d", text: "The total probability of the evidence across all hypotheses" }
          ],
          correctOptionId: "b",
          explanation: "P(A) is the prior — your initial belief in hypothesis A before incorporating the new evidence B."
        },
        {
          id: "data-science-101-l06-q4",
          text: "A researcher obtains a p-value of 0.03. Which statement is correct?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "There is a 3% chance the null hypothesis is true" },
            { id: "b", text: "There is a 3% probability of observing data this extreme if H₀ is true" },
            { id: "c", text: "The alternative hypothesis is proven correct" },
            { id: "d", text: "97% of the data supports the alternative hypothesis" }
          ],
          correctOptionId: "b",
          explanation: "A p-value is the probability of the observed (or more extreme) data assuming H₀ is true. It is not the probability that H₀ itself is true or false."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L07  Machine Learning Fundamentals  (video)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l07",
      title: "Machine Learning Fundamentals",
      type: "video",
      duration: 14,
      chunks: [
        {
          id: "data-science-101-l07-c1",
          title: "Supervised vs. Unsupervised Learning",
          content:
            "Machine learning is a branch of artificial intelligence where algorithms learn patterns from data instead of following explicit rules. In supervised learning, you provide labeled examples — the algorithm sees inputs paired with correct outputs and learns a mapping function. Common tasks include regression (predicting a continuous value like house price) and classification (predicting a category like 'spam' or 'not spam'). In unsupervised learning, the data has no labels; the algorithm discovers hidden structure, such as customer segments via clustering or dimensionality reduction for visualization."
        },
        {
          id: "data-science-101-l07-c2",
          title: "Regression and Classification",
          content:
            "Linear regression fits a line (or hyperplane) to predict a numeric target — for example, predicting exam scores from study hours. Logistic regression, despite its name, is a classification method that outputs a probability between 0 and 1 using the sigmoid function. Decision trees recursively split data on feature thresholds, and random forests combine many trees (ensemble method) to reduce error. k-Nearest Neighbors classifies a point by majority vote of its closest neighbors. Each algorithm has trade-offs in speed, interpretability, and accuracy."
        },
        {
          id: "data-science-101-l07-c3",
          title: "Overfitting and the Bias-Variance Trade-off",
          content:
            "Overfitting occurs when a model memorizes the training data — including its noise — and performs poorly on unseen data. Underfitting means the model is too simple to capture the underlying pattern. The bias-variance trade-off frames this tension: high-bias models (e.g., simple linear regression) underfit, while high-variance models (e.g., deep decision trees) overfit. Strategies to control overfitting include using more training data, applying regularization (L1/L2 penalties), pruning trees, and validating on held-out test sets."
        }
      ],
      flashcards: [
        { id: "data-science-101-l07-f1", front: "Learning from labeled input-output pairs", back: "Supervised Learning" },
        { id: "data-science-101-l07-f2", front: "Discovering hidden structure in data without labels", back: "Unsupervised Learning" },
        { id: "data-science-101-l07-f3", front: "When a model memorizes training noise and fails on new data", back: "Overfitting" },
        { id: "data-science-101-l07-f4", front: "Trade-off between model simplicity errors and sensitivity to training data", back: "Bias-Variance Trade-off" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Model Evaluation  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l08",
      title: "Model Evaluation",
      type: "interactive",
      duration: 16,
      chunks: [
        {
          id: "data-science-101-l08-c1",
          title: "Train/Test Split and Cross-Validation",
          content:
            "To estimate how a model will perform on unseen data, you split the dataset into a training set (typically 70–80 percent) for learning and a test set (20–30 percent) for evaluation. A single split can be unreliable if the test set happens to be unusually easy or hard. K-fold cross-validation addresses this by dividing data into k equally sized folds, training on k−1 folds, and testing on the remaining fold, rotating through all folds. The average score across folds gives a more stable performance estimate."
        },
        {
          id: "data-science-101-l08-c2",
          title: "Accuracy, Precision, Recall, and F1",
          content:
            "Accuracy alone can be misleading — a model that always predicts 'not fraud' achieves 99 percent accuracy when only 1 percent of transactions are fraudulent. Precision measures what fraction of positive predictions were actually correct (low false positives). Recall measures what fraction of actual positives the model caught (low false negatives). The F1-score is the harmonic mean of precision and recall, balancing both. Choosing the right metric depends on business costs: in medical screening, high recall is critical; in email verification, high precision matters more."
        },
        {
          id: "data-science-101-l08-c3",
          title: "Confusion Matrix and ROC-AUC",
          content:
            "A confusion matrix is a 2×2 table for binary classification showing true positives, true negatives, false positives, and false negatives. It gives a complete picture of model errors. The ROC curve plots true positive rate (recall) against false positive rate at varying classification thresholds. AUC (Area Under the Curve) summarizes this into a single number: 1.0 is perfect, 0.5 is random guessing. AUC is useful for comparing models because it is threshold-independent and works well even with imbalanced classes."
        }
      ],
      flashcards: [
        { id: "data-science-101-l08-f1", front: "Dividing data into k folds and rotating the test fold", back: "K-Fold Cross-Validation" },
        { id: "data-science-101-l08-f2", front: "Fraction of positive predictions that were actually correct", back: "Precision" },
        { id: "data-science-101-l08-f3", front: "Fraction of actual positives the model correctly identified", back: "Recall (Sensitivity)" },
        { id: "data-science-101-l08-f4", front: "Area under the ROC curve; 1.0 = perfect, 0.5 = random", back: "AUC (Area Under the Curve)" }
      ],
      interactiveActivities: [
        {
          id: "data-science-101-l08-a1",
          type: "sorting_buckets",
          title: "Classify Evaluation Concepts",
          description: "Sort each concept into the correct category: Splitting Strategy or Performance Metric.",
          buckets: ["Splitting Strategy", "Performance Metric"],
          items: [
            { text: "Train/Test Split", bucket: "Splitting Strategy" },
            { text: "K-Fold Cross-Validation", bucket: "Splitting Strategy" },
            { text: "Leave-One-Out CV", bucket: "Splitting Strategy" },
            { text: "Precision", bucket: "Performance Metric" },
            { text: "Recall", bucket: "Performance Metric" },
            { text: "F1-Score", bucket: "Performance Metric" },
            { text: "AUC", bucket: "Performance Metric" },
            { text: "Accuracy", bucket: "Performance Metric" }
          ]
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  ML & Evaluation Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l09",
      title: "ML & Evaluation Checkpoint",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        timeLimitMinutes: 8,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1 }],
        difficultyDistribution: { easy: 25, medium: 50, hard: 25 },
        feedbackMode: "after_each",
        masteryThreshold: 0.75
      },
      questions: [
        {
          id: "data-science-101-l09-q1",
          text: "A model achieves 98% training accuracy but only 60% test accuracy. This is most likely an example of:",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Underfitting" },
            { id: "b", text: "Overfitting" },
            { id: "c", text: "High bias" },
            { id: "d", text: "Optimal generalization" }
          ],
          correctOptionId: "b",
          explanation: "A large gap between training and test accuracy is a hallmark of overfitting — the model memorized training data patterns (including noise) and fails to generalize."
        },
        {
          id: "data-science-101-l09-q2",
          text: "In a medical screening test where missing a disease is very costly, which metric should be maximized?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Precision" },
            { id: "b", text: "Recall" },
            { id: "c", text: "Accuracy" },
            { id: "d", text: "Specificity" }
          ],
          correctOptionId: "b",
          explanation: "High recall minimizes false negatives, ensuring as many true disease cases as possible are detected, even at the expense of some false positives."
        },
        {
          id: "data-science-101-l09-q3",
          text: "What does an AUC of 0.5 indicate about a binary classifier?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "The model is perfect" },
            { id: "b", text: "The model performs no better than random guessing" },
            { id: "c", text: "The model has high precision but low recall" },
            { id: "d", text: "The model is overfitting" }
          ],
          correctOptionId: "b",
          explanation: "An AUC of 0.5 corresponds to the diagonal on the ROC plot, meaning the model's predictions are equivalent to random coin flips."
        },
        {
          id: "data-science-101-l09-q4",
          text: "Which technique reduces the variance of performance estimates by averaging results across multiple data partitions?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "One-hot encoding" },
            { id: "b", text: "K-fold cross-validation" },
            { id: "c", text: "Feature scaling" },
            { id: "d", text: "Principal component analysis" }
          ],
          correctOptionId: "b",
          explanation: "K-fold cross-validation trains and tests across k different splits, and averaging those results produces a more robust performance estimate than a single train/test split."
        }
      ]
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Data Science  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "data-science-101-l10",
      title: "Mastery Quiz: Data Science",
      type: "quiz",
      duration: 12,
      quizBlueprint: {
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 2 }],
        difficultyDistribution: { easy: 0, medium: 50, hard: 50 },
        feedbackMode: "after_each",
        masteryThreshold: 0.75
      },
      questions: [
        {
          id: "data-science-101-l10-q1",
          text: "A data scientist discovers that 30% of a key feature's values are missing. After investigation, the missingness appears related to lower-income respondents skipping the question. Which approach is most appropriate?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Delete all rows with missing values since 70% remain" },
            { id: "b", text: "Impute with the overall mean" },
            { id: "c", text: "Use a model-based imputation that accounts for income level" },
            { id: "d", text: "Replace missing values with zero" }
          ],
          correctOptionId: "c",
          explanation: "Because the missingness is systematically related to income (not missing at random), model-based imputation that conditions on income preserves the data's distributional properties better than mean imputation or deletion."
        },
        {
          id: "data-science-101-l10-q2",
          text: "An email spam filter has 99% precision but only 40% recall. What does this mean in practice?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Almost all flagged emails are truly spam, but most spam emails are missed" },
            { id: "b", text: "The filter catches most spam but flags many legitimate emails" },
            { id: "c", text: "The filter is random" },
            { id: "d", text: "The filter has equal rates of false positives and false negatives" }
          ],
          correctOptionId: "a",
          explanation: "High precision (99%) means when the filter says 'spam,' it is almost always correct. Low recall (40%) means 60% of actual spam emails slip through to the inbox undetected."
        },
        {
          id: "data-science-101-l10-q3",
          text: "Which statement correctly describes the bias-variance trade-off?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Increasing model complexity always improves generalization" },
            { id: "b", text: "Reducing bias tends to increase variance, and vice versa" },
            { id: "c", text: "Bias and variance both decrease with more features" },
            { id: "d", text: "The trade-off only applies to unsupervised learning" }
          ],
          correctOptionId: "b",
          explanation: "The bias-variance trade-off states that as a model becomes more complex (lower bias), it becomes more sensitive to the specific training data (higher variance). The goal is to find the sweet spot that minimizes total error."
        },
        {
          id: "data-science-101-l10-q4",
          text: "A company wants to segment customers into groups based on purchasing behavior without pre-defined categories. Which approach is most appropriate?",
          skillId: "data-science-101-skill-core",
          options: [
            { id: "a", text: "Linear regression" },
            { id: "b", text: "Logistic regression" },
            { id: "c", text: "K-means clustering" },
            { id: "d", text: "Decision tree classification" }
          ],
          correctOptionId: "c",
          explanation: "K-means clustering is an unsupervised algorithm that groups data points into k clusters based on similarity — perfect for discovering customer segments when no labels exist."
        }
      ]
    }
  ],
};
