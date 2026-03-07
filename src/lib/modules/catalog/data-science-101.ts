import type { LearningModule } from "@/lib/modules/types";

export const data_science_101_Module: LearningModule = {
  "id": "data-science-101",
  "title": "Data Science Foundations",
  "description": "Master the fundamentals of data science — from descriptive statistics and data wrangling to probability, machine learning, and model evaluation. Learn to transform raw data into actionable insights and make data-driven decisions with confidence.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "data-science",
    "analytics"
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
    "Describe the data science pipeline and distinguish structured from unstructured data",
    "Compute and interpret measures of central tendency, spread, and distribution shape",
    "Clean datasets by handling missing values, duplicates, and outliers using standard techniques",
    "Apply conditional probability and Bayes' theorem to real-world inference problems",
    "Differentiate supervised from unsupervised learning and select appropriate algorithms for a given task",
    "Evaluate model performance using accuracy, precision, recall, F1-score, and ROC-AUC metrics",
    "Communicate data findings effectively through appropriate chart types and narrative structure"
  ],
  "lessons": [
    {
      "id": "data-science-101-l01",
      "title": "What Is Data Science?",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "data-science-101-l01-c1",
          "title": "The Data Science Pipeline",
          "content": "Data science is a dynamic, rapidly growing field that focuses on uncovering actionable insights from raw data. It employs a blend of scientific methods, statistical techniques, and algorithms to make sense of the vast amounts of information generated every day. To understand how data science works in practice, we can visualize it as a pipeline made up of five essential stages.\n\nThe first stage is question formulation. Here, we clearly define the problem we want to solve or the metric we want to improve. This step is crucial because a well-defined question guides the entire analytical process. Next is data collection, where we gather the necessary information from various sources, such as databases, APIs, or web scraping.\n\nOnce we have our data, we enter the data cleaning stage. This is where we ensure the data is accurate, complete, and formatted correctly. Cleaning is vital because messy data inevitably leads to misleading results—a concept often called 'garbage in, garbage out.' After cleaning, we proceed to analysis and modeling. In this phase, we explore the data for hidden patterns and build predictive models to forecast future trends.\n\nFinally, we reach the communication of results. This is where we share our findings with stakeholders using compelling visualizations and clear narratives. Each stage of this pipeline is deeply interconnected, forming a continuous loop of discovery and refinement."
        },
        {
          "id": "data-science-101-l01-c2",
          "title": "Types of Data",
          "content": "Data generally falls into two main categories: structured and unstructured. Structured data is highly organized and formatted in a systematic way, typically arranged in rows and columns. This rigid organization makes it straightforward to search, analyze, and manipulate. Common examples include spreadsheets, relational SQL databases, and CSV files, which form the backbone of traditional business intelligence.\n\nIn contrast, unstructured data lacks a predefined format or schema, making it much more complex to process. This category encompasses a massive variety of formats, including text documents, emails, images, audio recordings, and social media posts. Because it doesn't fit neatly into a table, unstructured data requires advanced techniques to analyze effectively.\n\nThere is also a hybrid category known as semi-structured data. Formats like JSON and XML fall into this group; they contain organizational tags or keys that separate semantic elements, but they don't enforce a strict tabular structure.\n\nInterestingly, industry experts estimate that around 80 percent of the world's data is unstructured. This overwhelming volume is exactly why modern data science relies heavily on cutting-edge fields like Natural Language Processing (NLP) and Computer Vision, which allow machines to 'read' text and 'see' images, unlocking the value hidden within unstructured formats."
        },
        {
          "id": "data-science-101-l01-c3",
          "title": "Roles in Data Science",
          "content": "The data science ecosystem relies on a collaborative team of specialists, each bringing unique skills to the table. First, we have Data Analysts. These professionals are the detectives of the data world; they query historical data to uncover trends, track key performance indicators (KPIs), and build visual dashboards that help business leaders understand current operations.\n\nNext are Data Engineers, the architects and builders of the data infrastructure. They design, construct, and maintain the complex pipelines that extract, transform, and load (ETL) massive volumes of data from various sources into centralized data warehouses, ensuring the data is reliable and accessible.\n\nThen, we have Machine Learning Engineers. These experts bridge the gap between data science and software engineering. They take the predictive models created by data scientists and optimize them so they can be deployed into live, production environments—ensuring a recommendation engine runs smoothly on a website, for example.\n\nFinally, at the intersection of these disciplines is the Data Scientist. Data scientists blend advanced statistical reasoning, programming skills, and deep domain expertise. They tackle open-ended, complex problems, design rigorous experiments, and build advanced predictive models to guide long-term strategic decisions."
        }
      ],
      "flashcards": [
        {
          "id": "data-science-101-l01-f1",
          "front": "The five-stage workflow from question to communication",
          "back": "Data Science Pipeline"
        },
        {
          "id": "data-science-101-l01-f2",
          "front": "Data organized in rows and columns (e.g., SQL tables, CSVs)",
          "back": "Structured Data"
        },
        {
          "id": "data-science-101-l01-f3",
          "front": "Data without a predefined schema (e.g., images, text, audio)",
          "back": "Unstructured Data"
        },
        {
          "id": "data-science-101-l01-f4",
          "front": "Role that designs data collection and transformation pipelines",
          "back": "Data Engineer"
        }
      ],
      "learningAids": [
        {
          "id": "data-science-101-l01-a1",
          "type": "image",
          "title": "Visual Prompt: The Data Science Pipeline",
          "content": "A vibrant, easy-to-read flowchart illustrating the five stages of the Data Science Pipeline: Question Formulation -> Data Collection -> Data Cleaning -> Analysis & Modeling -> Communication. Use distinct colors for each stage with simple icons (e.g., a question mark, a database, a broom, a gear, and a speech bubble)."
        }
      ]
    },
    {
      "id": "data-science-101-l02",
      "title": "Descriptive Statistics",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "data-science-101-l02-c1",
          "title": "Mean, Median, and Mode",
          "content": "Measures of central tendency are foundational statistical tools that summarize a dataset by identifying its center point. The three primary measures are the mean, the median, and the mode.\n\nThe mean, or arithmetic average, is calculated by summing all values in a dataset and dividing by the total number of observations. While highly useful, the mean is highly sensitive to outliers—extreme values that are significantly higher or lower than the rest of the data. For instance, if you calculate the average income of a group of teachers, and a billionaire walks into the room, the mean income will skyrocket, no longer representing the typical person in that room.\n\nTo counter this, we use the median. The median is the exact middle value when a dataset is ordered from smallest to largest. If there is an even number of observations, it is the average of the two middle numbers. The median is robust against outliers, making it the preferred metric for skewed data, such as housing prices or household incomes.\n\nLastly, the mode is the value that appears most frequently in a dataset. It is unique because it is the only measure of central tendency that can be applied to categorical data—for example, identifying the most common car color sold in a specific month. Choosing the right measure depends entirely on the shape of your data and the specific question you are trying to answer."
        },
        {
          "id": "data-science-101-l02-c2",
          "title": "Variance and Standard Deviation",
          "content": "While central tendency tells us where the middle of the data lies, measures of spread tell us how scattered or tightly clustered the data points are around that center. One of the most important measures of spread is variance. Variance calculates the average of the squared differences between each data point and the mean. We square these differences to ensure that negative and positive deviations don't cancel each other out, and to heavily penalize values that are far from the mean.\n\nHowever, because variance is measured in squared units (e.g., 'squared dollars'), it can be difficult to interpret intuitively. To fix this, we take the square root of the variance to find the standard deviation. The standard deviation brings our measure of spread back into the original units of the data.\n\nA small standard deviation indicates that the data points are tightly clustered around the mean, implying high consistency. A large standard deviation indicates that the data is spread out over a wider range, implying high volatility or variability. In a perfectly normal distribution (a bell curve), approximately 68 percent of all data points will fall within exactly one standard deviation of the mean, a principle known as the Empirical Rule."
        },
        {
          "id": "data-science-101-l02-c3",
          "title": "Percentiles and Distribution Shape",
          "content": "Percentiles divide a dataset into 100 equal parts, allowing us to understand the relative standing of a particular value. The 25th percentile (Q1) and the 75th percentile (Q3) are especially important. The distance between them is called the Interquartile Range (IQR). The IQR represents the middle 50 percent of the data, providing a reliable measure of spread that ignores extreme outliers.\n\nWe often visualize this using a box plot, a chart that displays the median, Q1, Q3, and highlights any outliers beyond the 'whiskers' of the plot. Beyond spread, understanding the overall shape of your data's distribution is critical. \n\nA right-skewed distribution has a long tail stretching toward higher values (like income data, pulled right by a few high earners). A left-skewed distribution has a tail stretching toward lower values (like scores on a very easy test, where most students score high, but a few score very low). Finally, a symmetrical distribution, like the classic bell curve, indicates that the mean, median, and mode are all perfectly aligned in the center."
        }
      ],
      "flashcards": [
        {
          "id": "data-science-101-l02-f1",
          "front": "Sum of all values divided by the count",
          "back": "Mean (Arithmetic Average)"
        },
        {
          "id": "data-science-101-l02-f2",
          "front": "The middle value in a sorted dataset",
          "back": "Median"
        },
        {
          "id": "data-science-101-l02-f3",
          "front": "Average of squared deviations from the mean",
          "back": "Variance"
        },
        {
          "id": "data-science-101-l02-f4",
          "front": "The range between Q1 and Q3 capturing the middle 50%",
          "back": "Interquartile Range (IQR)"
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-science-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Classify the Statistic",
          "description": "Sort each statistical measure into the correct category: Central Tendency or Spread.",
          "buckets": [
            "Central Tendency",
            "Spread"
          ],
          "items": [
            {
              "text": "Mean",
              "bucket": "Central Tendency"
            },
            {
              "text": "Median",
              "bucket": "Central Tendency"
            },
            {
              "text": "Mode",
              "bucket": "Central Tendency"
            },
            {
              "text": "Variance",
              "bucket": "Spread"
            },
            {
              "text": "Standard Deviation",
              "bucket": "Spread"
            },
            {
              "text": "Interquartile Range",
              "bucket": "Spread"
            },
            {
              "text": "Range",
              "bucket": "Spread"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "data-science-101-l02-a1",
          "type": "image",
          "title": "Visual Prompt: Distribution Shapes",
          "content": "A side-by-side comparison of three distribution curves: left-skewed, symmetrical (normal), and right-skewed. On each curve, vertical lines clearly mark the positions of the Mean, Median, and Mode to visually demonstrate how skewness pulls the mean away from the median."
        }
      ]
    },
    {
      "id": "data-science-101-l03",
      "title": "Foundations Checkpoint",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "timeLimitMinutes": 8,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1
          }
        ],
        "difficultyDistribution": {
          "easy": 50,
          "medium": 25,
          "hard": 25
        },
        "feedbackMode": "after_each",
        "masteryThreshold": 0.75
      },
      "questions": [
        {
          "id": "data-science-101-l03-q1",
          "text": "Which stage of the data science pipeline involves removing duplicates and handling missing values?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Question formulation"
            },
            {
              "id": "b",
              "text": "Data collection"
            },
            {
              "id": "c",
              "text": "Data cleaning"
            },
            {
              "id": "d",
              "text": "Communication of results"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Data cleaning (also called data wrangling) is the pipeline stage where you fix quality issues such as missing values, duplicates, and inconsistent formatting before analysis."
        },
        {
          "id": "data-science-101-l03-q2",
          "text": "A dataset of household incomes is heavily right-skewed. Which measure of central tendency best represents the typical household?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Mean"
            },
            {
              "id": "b",
              "text": "Median"
            },
            {
              "id": "c",
              "text": "Mode"
            },
            {
              "id": "d",
              "text": "Variance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The median is resistant to extreme values. In right-skewed income data, a few very high earners pull the mean upward, making the median a more representative center."
        },
        {
          "id": "data-science-101-l03-q3",
          "text": "In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "50%"
            },
            {
              "id": "b",
              "text": "68%"
            },
            {
              "id": "c",
              "text": "95%"
            },
            {
              "id": "d",
              "text": "99.7%"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The empirical rule (68-95-99.7 rule) states that about 68% of observations in a normal distribution lie within ±1 standard deviation of the mean."
        },
        {
          "id": "data-science-101-l03-q4",
          "text": "Which of the following is an example of unstructured data?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A CSV file of sales transactions"
            },
            {
              "id": "b",
              "text": "A relational SQL database"
            },
            {
              "id": "c",
              "text": "A collection of customer review text"
            },
            {
              "id": "d",
              "text": "A spreadsheet with employee records"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Free-form customer review text has no fixed schema or tabular structure, making it unstructured data. It typically requires NLP techniques to analyze."
        }
      ],
      "learningAids": [
        {
          "id": "data-science-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "data-science-101-l04",
      "title": "Data Wrangling and Visualization",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "data-science-101-l04-c1",
          "title": "Cleaning and Missing Values",
          "content": "Real-world data is rarely ready for immediate analysis. It is often messy, incomplete, or inconsistently formatted. The process of transforming this raw data into a clean, usable format is known as data wrangling. One of the most common hurdles in data wrangling is handling missing values.\n\nMissing data can occur for many reasons—a sensor might fail, or a user might skip a question on a survey. We have several strategies to address this. If a row is missing critical information or has too many blank fields, we might simply drop (delete) that row. However, dropping too much data can bias our results. \n\nAlternatively, we can use a technique called imputation, which involves filling in the blanks. For numeric data, we often impute missing values using the median, as it won't be skewed by extreme values. For categorical data, we might fill in the missing fields with the mode (the most frequent category). Beyond missing values, data wrangling also involves identifying and removing duplicate records, which can artificially inflate counts, and standardizing formats—ensuring all dates follow a YYYY-MM-DD format, or that text is uniformly capitalized."
        },
        {
          "id": "data-science-101-l04-c2",
          "title": "Handling Outliers",
          "content": "Outliers are data points that differ significantly from the majority of your dataset. They can arise from measurement errors, data entry typos, or they might represent genuine, albeit rare, anomalies. Identifying and handling outliers is a critical step because they can drastically skew your statistical analysis and machine learning models.\n\nTo detect outliers, data scientists frequently use the Interquartile Range (IQR) rule. According to this rule, any value that falls below Q1 minus 1.5 times the IQR, or above Q3 plus 1.5 times the IQR, is flagged as a potential outlier. Another common method is calculating the Z-score, which measures how many standard deviations a data point is from the mean. A Z-score greater than 3 or less than -3 is typically considered an outlier.\n\nOnce identified, you must decide how to handle them. If an outlier is clearly an error (like an age listed as 999), it should be removed or corrected. If it is a valid but extreme value, you might 'cap' it at a certain threshold to limit its influence. However, if the outlier represents a meaningful anomaly—like a fraudulent credit card transaction—it might actually be the most important data point in your entire set, and should be isolated for deeper study."
        },
        {
          "id": "data-science-101-l04-c3",
          "title": "Chart Types and Storytelling with Data",
          "content": "Data visualization is the bridge between complex analysis and human understanding. Choosing the right chart type is essential for communicating your insights accurately. \n\nBar charts are excellent for comparing categorical data, such as revenue across different regions. Line charts are the standard for displaying time-series data, showing trends and changes over time. Scatter plots are invaluable for revealing correlations between two continuous numerical variables, like the relationship between advertising spend and sales. Histograms are used to visualize the distribution of a single numerical variable, showing where values are concentrated.\n\nHowever, creating a chart is only half the battle; effective data storytelling is what drives action. A strong data narrative follows a clear arc: it sets the context (the business problem), presents the insight (the visual evidence), and concludes with a recommendation (the action to take). To make your visualizations impactful, remove unnecessary clutter, use consistent and accessible color palettes, and explicitly annotate the key data points you want your audience to notice."
        }
      ],
      "flashcards": [
        {
          "id": "data-science-101-l04-f1",
          "front": "Replacing missing numeric values with the column median",
          "back": "Median Imputation"
        },
        {
          "id": "data-science-101-l04-f2",
          "front": "Values below Q1 − 1.5×IQR or above Q3 + 1.5×IQR",
          "back": "IQR Outlier Rule"
        },
        {
          "id": "data-science-101-l04-f3",
          "front": "Chart that shows the relationship between two numeric variables",
          "back": "Scatter Plot"
        },
        {
          "id": "data-science-101-l04-f4",
          "front": "The practice of presenting data insights through a narrative arc",
          "back": "Data Storytelling"
        }
      ],
      "learningAids": [
        {
          "id": "data-science-101-l04-a1",
          "type": "image",
          "title": "Visual Prompt: Chart Selection Dashboard",
          "content": "A dashboard mockup showing four distinct chart types: a bar chart for categories, a line chart for time-series trends, a scatter plot for correlation, and a histogram for distribution. Each chart features a brief label explaining its best use case."
        }
      ]
    },
    {
      "id": "data-science-101-l05",
      "title": "Probability and Inference",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "data-science-101-l05-c1",
          "title": "Conditional Probability and Bayes' Theorem",
          "content": "Conditional probability is a fundamental concept that measures the likelihood of an event occurring, given that another event has already happened. We write this mathematically as P(A|B), read as 'the probability of A given B.' This is crucial because real-world events rarely happen in isolation; new information constantly changes our expectations.\n\nBayes' Theorem is a powerful mathematical formula that allows us to reverse conditional probabilities. It is expressed as P(A|B) = [P(B|A) × P(A)] / P(B). In plain terms, it lets us update our initial beliefs (the prior probability) based on new evidence to form a revised belief (the posterior probability).\n\nThis theorem is the backbone of many machine learning applications. For example, consider a spam filter. P(A) is the baseline probability that any incoming email is spam. P(B|A) is the likelihood of seeing words like 'Free Money' if the email is indeed spam. Using Bayes' Theorem, the filter calculates P(A|B): the probability that the email is spam, given that it contains the words 'Free Money'. By continuously updating probabilities as new data arrives, Bayesian logic allows systems to learn and adapt."
        },
        {
          "id": "data-science-101-l05-c2",
          "title": "Hypothesis Testing and P-Values",
          "content": "Hypothesis testing is a structured statistical method used to make data-driven decisions. The process begins by defining a Null Hypothesis (H₀), which acts as the default assumption that there is 'no effect' or 'no difference.' For example, if testing a new website layout, H₀ would state that the new layout has no impact on user click rates compared to the old one. Conversely, the Alternative Hypothesis (H₁) proposes that there is a significant effect or difference.\n\nAfter running an experiment and collecting data, we calculate a test statistic, which is then converted into a p-value. The p-value is one of the most misunderstood concepts in statistics. It represents the probability of observing results at least as extreme as the ones you gathered, assuming that the Null Hypothesis is entirely true.\n\nIf the p-value is very small (typically less than a threshold like 0.05), it means your observed data is highly unlikely under the assumption of 'no effect.' Consequently, you reject the Null Hypothesis in favor of the Alternative Hypothesis. It is vital to remember that a p-value does not tell you the probability that H₀ is true or false; it only measures the strength of the evidence against the default assumption."
        },
        {
          "id": "data-science-101-l05-c3",
          "title": "Confidence Intervals",
          "content": "While a p-value can tell you if an effect exists, it doesn't tell you how large that effect is. This is where confidence intervals come in. A confidence interval provides a range of plausible values for an unknown population parameter, such as the true average height of adults in a city or the true conversion rate of a marketing campaign.\n\nWhen we calculate a '95 percent confidence interval,' it means that if we were to repeat our sampling process 100 times, we would expect about 95 of those calculated intervals to contain the true population parameter. It gives us a margin of error around our estimate.\n\nThe width of a confidence interval is highly informative. A wide interval indicates a high degree of uncertainty, which usually stems from having a small sample size or highly variable data. A narrow interval indicates a precise estimate, usually the result of a large, consistent dataset. In business and research, confidence intervals are often preferred over p-values because they provide actionable context—showing not just whether a metric changed, but the realistic best-case and worst-case scenarios for that change."
        }
      ],
      "flashcards": [
        {
          "id": "data-science-101-l05-f1",
          "front": "P(A|B) = P(B|A) × P(A) / P(B)",
          "back": "Bayes' Theorem"
        },
        {
          "id": "data-science-101-l05-f2",
          "front": "The default assumption of no effect or no difference",
          "back": "Null Hypothesis (H₀)"
        },
        {
          "id": "data-science-101-l05-f3",
          "front": "Probability of observing data as extreme as the result if H₀ is true",
          "back": "P-Value"
        },
        {
          "id": "data-science-101-l05-f4",
          "front": "A range of plausible values for a population parameter",
          "back": "Confidence Interval"
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-science-101-l05-a1",
          "type": "matching_pairs",
          "title": "Match Probability Concepts",
          "description": "Match each probability or inference concept with its correct definition.",
          "pairs": [
            {
              "left": "Conditional Probability",
              "right": "P(A given B has occurred)"
            },
            {
              "left": "Prior Probability",
              "right": "Initial belief before seeing evidence"
            },
            {
              "left": "Posterior Probability",
              "right": "Updated belief after seeing evidence"
            },
            {
              "left": "P-Value",
              "right": "Probability of data as extreme under H₀"
            },
            {
              "left": "Null Hypothesis",
              "right": "Assumption of no effect or no difference"
            },
            {
              "left": "Confidence Interval",
              "right": "Range of plausible parameter values"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "data-science-101-l05-a1",
          "type": "image",
          "title": "Visual Prompt: Hypothesis Testing Scale",
          "content": "An infographic showing a scale balancing the Null Hypothesis (H₀) and Alternative Hypothesis (H₁). Next to it is a 'p-value thermometer' indicating that a low temperature (p < 0.05) tips the scale heavily towards H₁."
        }
      ]
    },
    {
      "id": "data-science-101-l06",
      "title": "Wrangling & Probability Checkpoint",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "timeLimitMinutes": 8,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1
          }
        ],
        "difficultyDistribution": {
          "easy": 25,
          "medium": 50,
          "hard": 25
        },
        "feedbackMode": "after_each",
        "masteryThreshold": 0.75
      },
      "questions": [
        {
          "id": "data-science-101-l06-q1",
          "text": "A numeric column has 15% missing values. Which imputation strategy is most resistant to outliers?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Replace with the column mean"
            },
            {
              "id": "b",
              "text": "Replace with the column median"
            },
            {
              "id": "c",
              "text": "Replace with zero"
            },
            {
              "id": "d",
              "text": "Delete all rows with missing values"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The median is robust to outliers. Mean imputation is pulled toward extreme values, and replacing with zero introduces artificial data."
        },
        {
          "id": "data-science-101-l06-q2",
          "text": "Using the IQR outlier rule, a data point is considered an outlier if it falls:",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Below Q1 − 1.5×IQR or above Q3 + 1.5×IQR"
            },
            {
              "id": "b",
              "text": "More than 1 standard deviation from the mean"
            },
            {
              "id": "c",
              "text": "Outside the 25th to 75th percentile range"
            },
            {
              "id": "d",
              "text": "Below the mode or above the median"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The IQR rule flags observations that fall more than 1.5 times the interquartile range below Q1 or above Q3."
        },
        {
          "id": "data-science-101-l06-q3",
          "text": "In Bayes' theorem, what does the term P(A) represent?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The likelihood of the evidence given the hypothesis"
            },
            {
              "id": "b",
              "text": "The prior probability of the hypothesis before seeing evidence"
            },
            {
              "id": "c",
              "text": "The posterior probability after updating"
            },
            {
              "id": "d",
              "text": "The total probability of the evidence across all hypotheses"
            }
          ],
          "correctOptionId": "b",
          "explanation": "P(A) is the prior — your initial belief in hypothesis A before incorporating the new evidence B."
        },
        {
          "id": "data-science-101-l06-q4",
          "text": "A researcher obtains a p-value of 0.03. Which statement is correct?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "There is a 3% chance the null hypothesis is true"
            },
            {
              "id": "b",
              "text": "There is a 3% probability of observing data this extreme if H₀ is true"
            },
            {
              "id": "c",
              "text": "The alternative hypothesis is proven correct"
            },
            {
              "id": "d",
              "text": "97% of the data supports the alternative hypothesis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A p-value is the probability of the observed (or more extreme) data assuming H₀ is true. It is not the probability that H₀ itself is true or false."
        }
      ]
    },
    {
      "id": "data-science-101-l07",
      "title": "Machine Learning Fundamentals",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "data-science-101-l07-c1",
          "title": "Supervised vs. Unsupervised Learning",
          "content": "Machine learning is a branch of artificial intelligence that enables computers to learn patterns from data without being explicitly programmed with rigid rules. The two primary paradigms in this field are supervised learning and unsupervised learning.\n\nIn supervised learning, the algorithm is trained on a 'labeled' dataset. This means every input provided to the model comes with the correct output or answer. For example, if we want an algorithm to predict house prices, we feed it historical data containing house features (size, location) alongside their actual sale prices. The model learns the relationship between the features and the target, allowing it to predict prices for new, unseen houses.\n\nUnsupervised learning, on the other hand, deals with 'unlabeled' data. The algorithm is given raw data without any correct answers and is tasked with discovering hidden structures on its own. A common application is customer segmentation. By analyzing purchasing behavior, an unsupervised clustering algorithm can group similar customers together, helping businesses tailor their marketing strategies. Dimensionality reduction is another unsupervised technique, used to simplify highly complex datasets while retaining their core patterns."
        },
        {
          "id": "data-science-101-l07-c2",
          "title": "Regression and Classification",
          "content": "Within supervised learning, tasks are generally divided into two categories based on the type of output we want to predict: regression and classification.\n\nRegression is used when the target variable is continuous and numerical. Linear regression is the most foundational algorithm here; it attempts to draw a 'line of best fit' through data points to predict a quantity, such as forecasting next month's sales revenue or estimating a person's age based on health metrics.\n\nClassification is used when the target variable is discrete and categorical. The goal is to assign an input into one of several predefined classes. Despite its confusing name, Logistic Regression is a classification algorithm. It uses a mathematical curve (the sigmoid function) to output a probability between 0 and 1, making it perfect for binary tasks like predicting whether an email is 'spam' or 'not spam'.\n\nOther popular algorithms can handle both regression and classification. Decision Trees split data into branches based on feature thresholds, mimicking human decision-making. Random Forests combine hundreds of decision trees to create a highly accurate 'ensemble' model. K-Nearest Neighbors (k-NN) classifies a new data point based on the majority vote of the data points closest to it in the feature space."
        },
        {
          "id": "data-science-101-l07-c3",
          "title": "Overfitting and the Bias-Variance Trade-off",
          "content": "One of the greatest challenges in machine learning is building a model that generalizes well to new, unseen data. When a model learns the training data too perfectly—memorizing the noise, outliers, and specific quirks rather than the underlying pattern—it suffers from overfitting. An overfitted model performs exceptionally well on training data but fails miserably in the real world.\n\nConversely, underfitting occurs when a model is too simplistic to capture the underlying patterns in the data, resulting in poor performance on both training and new data. This tension is known as the Bias-Variance Trade-off. Models with high bias (like simple linear regression) make strong assumptions and tend to underfit. Models with high variance (like deep, unpruned decision trees) are highly sensitive to the training data and tend to overfit.\n\nTo combat overfitting and find the sweet spot, data scientists use several techniques. Gathering more diverse training data is the most effective solution. Regularization techniques mathematically penalize overly complex models. For decision trees, 'pruning' cuts back unnecessary branches. Ultimately, the goal is to balance bias and variance to minimize the total error on future predictions."
        }
      ],
      "flashcards": [
        {
          "id": "data-science-101-l07-f1",
          "front": "Learning from labeled input-output pairs",
          "back": "Supervised Learning"
        },
        {
          "id": "data-science-101-l07-f2",
          "front": "Discovering hidden structure in data without labels",
          "back": "Unsupervised Learning"
        },
        {
          "id": "data-science-101-l07-f3",
          "front": "When a model memorizes training noise and fails on new data",
          "back": "Overfitting"
        },
        {
          "id": "data-science-101-l07-f4",
          "front": "Trade-off between model simplicity errors and sensitivity to training data",
          "back": "Bias-Variance Trade-off"
        }
      ],
      "learningAids": [
        {
          "id": "data-science-101-l07-a1",
          "type": "image",
          "title": "Visual Prompt: Bias-Variance Target Board",
          "content": "A target board analogy for the Bias-Variance Trade-off. Four targets showing: Low Bias/Low Variance (all darts tightly clustered in the bullseye), High Bias/Low Variance (darts tightly clustered but far off-center), Low Bias/High Variance (darts scattered widely but centered around the bullseye), and High Bias/High Variance (darts scattered randomly far from the center)."
        }
      ]
    },
    {
      "id": "data-science-101-l08",
      "title": "Model Evaluation",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "data-science-101-l08-c1",
          "title": "Train/Test Split and Cross-Validation",
          "content": "To know if a machine learning model will actually work in the real world, we must evaluate it on data it has never seen before. If we evaluate a model on the exact same data used to train it, we will get an artificially high score that masks overfitting. \n\nThe simplest way to prevent this is the Train/Test Split. We randomly divide our dataset, typically allocating 70 to 80 percent of the data to train the model, and holding back the remaining 20 to 30 percent as a 'test set' to evaluate its final performance.\n\nHowever, a single split can be risky. By pure chance, the test set might contain unusually easy or difficult examples. To get a more robust evaluation, we use K-Fold Cross-Validation. In this technique, the entire dataset is divided into 'k' equal parts, or folds (often 5 or 10). The model is trained on k-1 folds and tested on the remaining fold. This process is repeated k times, with a different fold serving as the test set each time. By averaging the performance across all iterations, we obtain a highly reliable estimate of how the model will perform on unseen data."
        },
        {
          "id": "data-science-101-l08-c2",
          "title": "Accuracy, Precision, Recall, and F1",
          "content": "When evaluating classification models, relying solely on 'Accuracy' (the percentage of total correct predictions) can be dangerously misleading, especially with imbalanced datasets. Imagine a credit card fraud detection model where only 1 percent of transactions are fraudulent. A useless model that simply predicts 'Not Fraud' every single time would achieve 99 percent accuracy, yet completely fail its actual purpose.\n\nTo get a true picture, we use Precision and Recall. Precision asks: 'Out of all the times the model predicted positive, how many were actually positive?' High precision means very few false positives. Recall (or Sensitivity) asks: 'Out of all the actual positive cases in the data, how many did the model successfully find?' High recall means very few false negatives.\n\nThere is usually a trade-off between the two. In medical cancer screening, we prioritize high Recall to ensure no sick patient is missed, even if it means some healthy patients get a false alarm. In email spam filtering, we prioritize high Precision to ensure legitimate emails aren't sent to the junk folder. When we need a balanced metric, we use the F1-Score, which is the harmonic mean of Precision and Recall."
        },
        {
          "id": "data-science-101-l08-c3",
          "title": "Confusion Matrix and ROC-AUC",
          "content": "A Confusion Matrix is a foundational tool for visualizing the performance of a classification model. It is a 2x2 grid that breaks down predictions into four distinct categories: True Positives (correctly predicted the event), True Negatives (correctly predicted the non-event), False Positives (predicted the event, but it didn't happen), and False Negatives (predicted the non-event, but the event did happen). This matrix allows data scientists to see exactly what kind of errors the model is making.\n\nAnother powerful evaluation tool is the ROC Curve (Receiver Operating Characteristic). This graph plots the True Positive Rate (Recall) against the False Positive Rate across various probability thresholds. A model that guesses randomly will produce a diagonal line, while a strong model will bow heavily toward the top-left corner.\n\nTo summarize the ROC curve into a single metric, we calculate the AUC (Area Under the Curve). An AUC of 1.0 represents a perfect model, while an AUC of 0.5 represents a model that is no better than a coin flip. The AUC is highly favored in data science because it evaluates the model's ability to distinguish between classes regardless of the specific threshold chosen, making it incredibly robust for imbalanced data."
        }
      ],
      "flashcards": [
        {
          "id": "data-science-101-l08-f1",
          "front": "Dividing data into k folds and rotating the test fold",
          "back": "K-Fold Cross-Validation"
        },
        {
          "id": "data-science-101-l08-f2",
          "front": "Fraction of positive predictions that were actually correct",
          "back": "Precision"
        },
        {
          "id": "data-science-101-l08-f3",
          "front": "Fraction of actual positives the model correctly identified",
          "back": "Recall (Sensitivity)"
        },
        {
          "id": "data-science-101-l08-f4",
          "front": "Area under the ROC curve; 1.0 = perfect, 0.5 = random",
          "back": "AUC (Area Under the Curve)"
        }
      ],
      "interactiveActivities": [
        {
          "id": "data-science-101-l08-a1",
          "type": "sorting_buckets",
          "title": "Classify Evaluation Concepts",
          "description": "Sort each concept into the correct category: Splitting Strategy or Performance Metric.",
          "buckets": [
            "Splitting Strategy",
            "Performance Metric"
          ],
          "items": [
            {
              "text": "Train/Test Split",
              "bucket": "Splitting Strategy"
            },
            {
              "text": "K-Fold Cross-Validation",
              "bucket": "Splitting Strategy"
            },
            {
              "text": "Leave-One-Out CV",
              "bucket": "Splitting Strategy"
            },
            {
              "text": "Precision",
              "bucket": "Performance Metric"
            },
            {
              "text": "Recall",
              "bucket": "Performance Metric"
            },
            {
              "text": "F1-Score",
              "bucket": "Performance Metric"
            },
            {
              "text": "AUC",
              "bucket": "Performance Metric"
            },
            {
              "text": "Accuracy",
              "bucket": "Performance Metric"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "data-science-101-l08-a2",
          "type": "image",
          "title": "Visual Prompt: Confusion Matrix",
          "content": "A colorful 2x2 grid representing a Confusion Matrix. The axes are labeled 'Actual' and 'Predicted'. The four quadrants are labeled True Positive (green), True Negative (green), False Positive (red), and False Negative (red), with simple icons illustrating correct vs. incorrect predictions."
        }
      ]
    },
    {
      "id": "data-science-101-l09",
      "title": "ML & Evaluation Checkpoint",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "timeLimitMinutes": 8,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1
          }
        ],
        "difficultyDistribution": {
          "easy": 25,
          "medium": 50,
          "hard": 25
        },
        "feedbackMode": "after_each",
        "masteryThreshold": 0.75
      },
      "questions": [
        {
          "id": "data-science-101-l09-q1",
          "text": "A model achieves 98% training accuracy but only 60% test accuracy. This is most likely an example of:",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Underfitting"
            },
            {
              "id": "b",
              "text": "Overfitting"
            },
            {
              "id": "c",
              "text": "High bias"
            },
            {
              "id": "d",
              "text": "Optimal generalization"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A large gap between training and test accuracy is a hallmark of overfitting — the model memorized training data patterns (including noise) and fails to generalize."
        },
        {
          "id": "data-science-101-l09-q2",
          "text": "In a medical screening test where missing a disease is very costly, which metric should be maximized?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Precision"
            },
            {
              "id": "b",
              "text": "Recall"
            },
            {
              "id": "c",
              "text": "Accuracy"
            },
            {
              "id": "d",
              "text": "Specificity"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High recall minimizes false negatives, ensuring as many true disease cases as possible are detected, even at the expense of some false positives."
        },
        {
          "id": "data-science-101-l09-q3",
          "text": "What does an AUC of 0.5 indicate about a binary classifier?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The model is perfect"
            },
            {
              "id": "b",
              "text": "The model performs no better than random guessing"
            },
            {
              "id": "c",
              "text": "The model has high precision but low recall"
            },
            {
              "id": "d",
              "text": "The model is overfitting"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An AUC of 0.5 corresponds to the diagonal on the ROC plot, meaning the model's predictions are equivalent to random coin flips."
        },
        {
          "id": "data-science-101-l09-q4",
          "text": "Which technique reduces the variance of performance estimates by averaging results across multiple data partitions?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "One-hot encoding"
            },
            {
              "id": "b",
              "text": "K-fold cross-validation"
            },
            {
              "id": "c",
              "text": "Feature scaling"
            },
            {
              "id": "d",
              "text": "Principal component analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "K-fold cross-validation trains and tests across k different splits, and averaging those results produces a more robust performance estimate than a single train/test split."
        }
      ]
    },
    {
      "id": "data-science-101-l10",
      "title": "Mastery Quiz: Data Science",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 2
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 50,
          "hard": 50
        },
        "feedbackMode": "after_each",
        "masteryThreshold": 0.75
      },
      "questions": [
        {
          "id": "data-science-101-l10-q1",
          "text": "A data scientist discovers that 30% of a key feature's values are missing. After investigation, the missingness appears related to lower-income respondents skipping the question. Which approach is most appropriate?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Delete all rows with missing values since 70% remain"
            },
            {
              "id": "b",
              "text": "Impute with the overall mean"
            },
            {
              "id": "c",
              "text": "Use a model-based imputation that accounts for income level"
            },
            {
              "id": "d",
              "text": "Replace missing values with zero"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Because the missingness is systematically related to income (not missing at random), model-based imputation that conditions on income preserves the data's distributional properties better than mean imputation or deletion."
        },
        {
          "id": "data-science-101-l10-q2",
          "text": "An email spam filter has 99% precision but only 40% recall. What does this mean in practice?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Almost all flagged emails are truly spam, but most spam emails are missed"
            },
            {
              "id": "b",
              "text": "The filter catches most spam but flags many legitimate emails"
            },
            {
              "id": "c",
              "text": "The filter is random"
            },
            {
              "id": "d",
              "text": "The filter has equal rates of false positives and false negatives"
            }
          ],
          "correctOptionId": "a",
          "explanation": "High precision (99%) means when the filter says 'spam,' it is almost always correct. Low recall (40%) means 60% of actual spam emails slip through to the inbox undetected."
        },
        {
          "id": "data-science-101-l10-q3",
          "text": "Which statement correctly describes the bias-variance trade-off?",
          "skillId": "data-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Increasing model complexity always improves generalization"
            },
            {
              "id": "b",
              "text": "Reducing bias tends to increase variance, and vice versa"
            },
            {
              "id": "c",
              "text": "Bias and variance both decrease with more features"
            },
            {
              "id": "d",
              "text": "The trade-off only applies to unsupervised learning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The bias-variance trade-off states that as a model becomes more complex (lower bias), it becomes more sensitive to the specific training data (higher variance). The goal is to find the sweet spot that minimizes total error."
        },
        {
          "id": "data-science-101-l10-q4",
          "text": "A company wants to segment customers into groups based on purchasing behavior without pre-defined categories. Which approach is most appropriate?",
          "skillId": "data-science-101-skill-core",
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
              "text": "Decision tree classification"
            }
          ],
          "correctOptionId": "c",
          "explanation": "K-means clustering is an unsupervised algorithm that groups data points into k clusters based on similarity — perfect for discovering customer segments when no labels exist."
        }
      ]
    }
  ]
};
