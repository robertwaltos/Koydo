import type { LearningModule } from "@/lib/modules/types";

export const DataScience101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "Data science is a fascinating and rapidly growing field that focuses on uncovering valuable knowledge and insights from data. It employs a variety of scientific methods, statistical techniques, and algorithms to make sense of the vast amounts of information we encounter every day. To understand how data science works, we can think of it as a pipeline made up of five essential stages.\nThe first stage is question formulation. Here, we take the time to clearly define what we want to learn or discover. This step is crucial because a well-defined question guides the entire process. Next, we move on to data collection, where we gather the necessary information from various sources. This could include surveys, databases, or even online resources.\nOnce we have our data, we enter the data cleaning stage. This is where we ensure that the data is accurate, complete, and ready for analysis. Cleaning the data is vital because messy or incorrect data can lead to misleading results. After cleaning, we proceed to the analysis and modeling stage. In this phase, we explore the data, looking for patterns and trends, and create models that help us understand the information better.\nFinally, we reach the last stage: communication of results. This is where we share our findings with others, using visualizations and clear explanations to convey what we have learned. Each stage of the data science pipeline is interconnected. For example, if we start with a vague question, we may end up collecting irrelevant data, and if our data is not clean, our models will not be reliable. Understanding this entire workflow is essential for anyone who wants to become a successful data scientist and make meaningful contributions to the field."
        },
        {
          "id": "data-science-101-l01-c2",
          "title": "Types of Data",
          "content": "Data can be divided into two main categories: structured data and unstructured data. Structured data is organized in a clear and systematic way, typically arranged in rows and columns. This organization makes it straightforward to analyze and work with. Common examples of structured data include spreadsheets, SQL databases, and CSV files, which are often used in various applications to store and manage information efficiently.\nIn contrast, unstructured data does not have a specific format or organization, making it more complex to analyze. This type of data encompasses a wide range of formats, including text documents, images, audio recordings, and social media posts. Because unstructured data lacks a predefined structure, it requires more advanced techniques to process and analyze effectively.\nThere is also a third category known as semi-structured data, which falls somewhere in between structured and unstructured data. Formats like JSON and XML are examples of semi-structured data, as they contain some organizational properties but do not fit neatly into traditional databases.\nInterestingly, it is estimated that around 80 percent of the data generated globally is unstructured. This significant proportion is one reason why modern data science increasingly relies on advanced techniques such as natural language processing (NLP) and computer vision. NLP helps computers understand and interpret human language, while computer vision enables them to analyze and make sense of visual information, such as images and videos. These technologies are crucial for extracting valuable insights from the vast amounts of unstructured data available today."
        },
        {
          "id": "data-science-101-l01-c3",
          "title": "Roles in Data Science",
          "content": "In the fascinating world of data science, there are several specialized roles that work together to make sense of data and drive decisions. First, we have data analysts. These professionals are like detectives of the data world; they examine historical data to uncover trends and insights. They create dashboards that visually represent this information, making it easier for others to understand and use. Next, we have data engineers. Think of them as the architects of data systems. They design and build the pipelines that collect, store, and transform vast amounts of data, ensuring that it is organized and accessible for analysis. Then, we have machine learning engineers. These experts focus on taking predictive models—algorithms that can make forecasts based on data—and deploying them into production systems. This means they ensure these models function correctly in real-world applications, helping businesses make informed decisions. Finally, at the heart of it all, are data scientists. They blend skills in statistical reasoning, programming, and specific knowledge about the industry they work in. This unique combination allows them to solve complex problems and guide strategic decisions effectively. Each of these roles plays a vital part in the success of data-driven projects, showcasing the collaborative nature of the data science field."
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Measures of central tendency are essential statistical tools that help us understand and summarize a dataset by providing a single representative value. There are three main measures: the mean, the median, and the mode.\nThe mean, commonly known as the arithmetic average, is calculated by adding all the values in a dataset together and then dividing that sum by the total number of values. For example, if we have the numbers 2, 3, and 10, we would add them to get 15, and then divide by 3, resulting in a mean of 5. However, it's important to note that the mean can be significantly affected by outliers—these are extreme values that are much higher or lower than the rest of the data. For instance, if we added a value of 100 to our previous example, the mean would increase dramatically, which might not accurately reflect the typical values in the dataset.\nNext, we have the median, which is the middle value of a dataset when the numbers are arranged in order from smallest to largest. If there is an even number of values, the median is the average of the two middle numbers. The median is particularly useful because it is less influenced by outliers, making it a better choice when dealing with skewed distributions, where one side of the data is stretched further than the other.\nLastly, the mode is the value that occurs most frequently in a dataset. For example, in the dataset {1, 2, 2, 3, 4}, the mode is 2 because it appears more times than any other number. The mode is unique because it can be used with categorical data, where we might want to know which category is the most common.\nWhen deciding which measure of central tendency to use, it’s important to consider the type of data you have and the shape of its distribution. Each measure provides different insights, and choosing the right one can help you better understand the data you are working with."
        },
        {
          "id": "data-science-101-l02-c2",
          "title": "Variance and Standard Deviation",
          "content": "Understanding how data points vary is crucial in data analysis, and this is where spread measures come into play. One of the key measures is called variance. Variance helps us understand how much the values in a dataset differ from the average, or mean. To calculate variance, we first find the differences between each data point and the mean, then we square those differences. Squaring is important because it prevents negative values from canceling each other out, giving us a clearer picture of the overall spread.\nAnother important measure is the standard deviation, which is simply the square root of the variance. This calculation brings the spread back to the original unit of measurement, making it much easier to understand and interpret. When we look at standard deviation, a small value indicates that the data points are tightly clustered around the mean, suggesting consistency in the dataset. Conversely, a large standard deviation means that the data points are spread out over a wider range, indicating more variability.\nIn a normal distribution, which is a common way to represent data, about 68 percent of the data points will fall within one standard deviation of the mean. This fact underscores the importance of understanding variance and standard deviation in data analysis, as they provide valuable insights into the nature of the data we are working with."
        },
        {
          "id": "data-science-101-l02-c3",
          "title": "Percentiles and Distribution Shape",
          "content": "Percentiles are a helpful way to break down a dataset into 100 equal parts, which allows us to better understand how the data is distributed. For example, the 25th percentile, often referred to as Q1, and the 75th percentile, known as Q3, are key figures in statistics. Together, they define what is called the interquartile range (IQR). The IQR is important because it captures the middle 50 percent of the data, giving us a clearer view of where most of the values fall. To visualize this information, we can use box plots. These plots provide a quick snapshot of the data by showing Q1, the median, Q3, and any outliers, all in one easy-to-read graphic. Additionally, understanding the shape of the distribution is crucial. For instance, a right-skewed distribution has a long tail on the high-value side, which is often seen in income data where a few individuals earn significantly more than the rest. Conversely, a left-skewed distribution has a tail that extends toward lower values. Lastly, symmetrical distributions, like the well-known bell curve, indicate that the mean, median, and mode are approximately equal, which is a key characteristic of many natural phenomena. By grasping these concepts, we can analyze and interpret data more effectively, leading to better insights and decisions."
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
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "When we collect data, it often comes in a messy form that isn't ready for analysis. This is where the important process of data wrangling comes into play. Data wrangling involves taking this messy data and transforming it into a clean and consistent format that makes it easier to analyze and draw conclusions from. One of the biggest challenges we face during data wrangling is dealing with missing values. Missing values can occur for various reasons, and there are several strategies we can use to handle them effectively. For instance, if a row of data has too many missing values, we might choose to remove that entire row to maintain the quality of our analysis. Alternatively, for numeric fields, we can fill in the missing values with the median, which is the middle value in a sorted list of numbers. For categorical fields, we can replace missing values with the mode, which is the most frequently occurring value in that category. Another issue we often encounter is duplicate records. These duplicates can inflate our counts and distort our statistics, so it's crucial to identify and remove them. Finally, standardizing formats is an essential step in data wrangling. This means ensuring that all dates, currencies, and capitalization are consistent throughout the dataset. By following these steps, we can prepare our data for meaningful analysis and insights."
        },
        {
          "id": "data-science-101-l04-c2",
          "title": "Handling Outliers",
          "content": "Outliers are special data points that are very different from the other data in a set. They can happen for several reasons, such as mistakes made while measuring, errors when entering data, or they might even be real occurrences that are just very rare. Understanding outliers is important because they can affect the results of your analysis. To find outliers, there are some common techniques you can use. One popular method is called the interquartile range (IQR) rule. This rule helps you identify outliers by looking for values that are either much lower than the first quartile (Q1) minus 1.5 times the IQR or much higher than the third quartile (Q3) plus 1.5 times the IQR. Another method is using z-scores, which tell you how far away a data point is from the average, measured in standard deviations. If a z-score is greater than 3 or less than -3, that data point is often considered an outlier. When you find outliers, it’s important to think about what to do with them. If they are caused by errors, it’s usually best to remove them from your data set. If they are valid but extreme values, you might want to limit their impact on your analysis. However, if they represent real and interesting phenomena, it could be beneficial to keep them for further investigation. This careful consideration helps ensure that your data analysis is accurate and meaningful."
        },
        {
          "id": "data-science-101-l04-c3",
          "title": "Chart Types and Storytelling with Data",
          "content": "Choosing the right type of chart is essential for effectively communicating data insights. Different charts serve different purposes, and understanding these can help you tell a compelling story with your data. For instance, bar charts are great for comparing different categories, such as sales figures for various products. Line charts are ideal for showing trends over time, like how a company's revenue has changed each month. Scatter plots are particularly useful for revealing relationships between two numeric variables, such as the correlation between study hours and exam scores. Histograms are excellent for displaying frequency distributions, allowing you to see how often certain values occur within a dataset. On the other hand, pie charts are best used for a small number of categories that add up to 100 percent, such as showing the market share of different companies in a specific industry.\nEffective data storytelling follows a narrative arc, which includes three key components: setting the context, presenting the insight, and recommending an action based on the findings. This structure helps the audience understand the significance of the data. To enhance clarity, it is helpful to annotate important data points and use consistent color scales throughout your visualizations. This way, your audience can quickly grasp the key points and insights you want to convey, making your data presentation more impactful and engaging."
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Conditional probability is an important concept in statistics and data science that helps us understand how likely one event is to happen based on the occurrence of another event. We express this idea mathematically as P(A|B), which means 'the probability of event A happening given that event B has already occurred.' This relationship helps us make informed predictions and decisions based on available information.\nBayes' theorem is a remarkable formula that allows us to flip this relationship around. It is written as P(A|B) = P(B|A) × P(A) / P(B). This means that we can calculate the probability of event A happening after we know that event B has occurred.\nThis theorem is especially useful in the field of data science. For instance, spam filters use Bayes' theorem to determine whether an email is likely to be spam based on the words and phrases it contains. In this example, P(A) represents our initial belief about whether the email is spam, P(B|A) shows how probable the words in the email are if it is indeed spam, and P(A|B) gives us our updated belief about the email being spam after we analyze its content. Understanding these concepts not only enhances our analytical skills but also empowers us to apply them in real-world situations, such as improving email filtering systems or making predictions in various fields. By mastering conditional probability and Bayes' theorem, we can become more effective problem solvers and decision-makers in our everyday lives."
        },
        {
          "id": "data-science-101-l05-c2",
          "title": "Hypothesis Testing and P-Values",
          "content": "Hypothesis testing is an important and structured method used in statistics to help us make informed decisions based on data. It all starts with a statement called the null hypothesis, denoted as H₀. This hypothesis typically claims that there is 'no effect' or 'no difference' between the groups we are studying. For example, if we are testing a new medication, the null hypothesis might state that the medication has no impact on patients compared to a placebo. In contrast, we also propose an alternative hypothesis, known as H₁, which suggests that there is indeed an effect or difference.\nOnce we have our hypotheses set up, the next step is to collect data through experiments or observations. After gathering this data, we calculate a test statistic, which is a numerical value that helps us understand how our data compares to what we would expect under the null hypothesis. From this test statistic, we derive a p-value. The p-value is a crucial piece of information; it represents the probability of observing results at least as extreme as the ones we found, assuming that the null hypothesis is true.\nIf we find a small p-value, typically less than 0.05, it suggests that the results we observed are unlikely to occur if the null hypothesis were correct. This leads us to consider rejecting the null hypothesis in favor of the alternative hypothesis. However, it is essential to understand that a p-value does not tell us the probability that the null hypothesis is true; instead, it indicates how strong the evidence is against it. This distinction is vital for making accurate conclusions based on our data."
        },
        {
          "id": "data-science-101-l05-c3",
          "title": "Confidence Intervals",
          "content": "A confidence interval is a helpful statistical tool that gives us a range of values that are likely to include a specific population parameter, which is a characteristic we want to estimate. For instance, when we say we have a 95 percent confidence interval, it means that if we were to conduct the same study many times, about 95 percent of the intervals we create would capture the true value of the parameter we are estimating. This is important because it helps us understand how reliable our estimate is.\nWhen we see wider confidence intervals, it indicates that there is more uncertainty about the estimate. This can happen for a couple of reasons: one reason could be that we have a small sample size, meaning we didn't collect enough data to make a strong conclusion. Another reason could be high variability in the data, which means that the data points are spread out over a wide range.\nConfidence intervals are particularly useful because they provide more information than just p-values. While p-values tell us whether a result is statistically significant, confidence intervals give us a clearer picture of the size and precision of our estimate. This helps researchers and decision-makers understand not just if something is likely true, but also how much we can trust that estimate and how much it might vary. Overall, confidence intervals are a key part of making informed decisions based on data analysis."
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
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "Machine learning is a fascinating part of artificial intelligence that allows computers to learn from data rather than just following strict rules. This means that instead of being programmed with specific instructions for every task, computers can analyze data and identify patterns on their own. There are two main types of learning in machine learning: supervised learning and unsupervised learning.\nIn supervised learning, we provide the computer with examples that are labeled. This means we show it inputs along with the correct answers, which helps the computer learn how to make predictions. For example, if we want the computer to predict house prices, we give it data about various features of houses, like their size, location, and number of bedrooms, along with the actual prices. This process is known as regression. Another example of supervised learning is classification, where the computer learns to categorize things. For instance, it can analyze emails and determine whether they are 'spam' or 'not spam' based on the characteristics of the messages.\nOn the other hand, unsupervised learning is quite different because we don’t provide any labels. Instead, the computer explores the data and tries to find patterns all by itself. This can be really useful for businesses that want to understand their customers better. For example, the computer might group customers into different segments based on their buying habits, which can help businesses tailor their marketing strategies. Techniques like clustering, which groups similar data points together, and dimensionality reduction, which simplifies complex data for easier visualization, are often used in unsupervised learning. These methods allow us to see the data in a clearer way and uncover insights that might not be immediately obvious."
        },
        {
          "id": "data-science-101-l07-c2",
          "title": "Regression and Classification",
          "content": "In the fascinating field of machine learning, we often encounter two fundamental techniques known as regression and classification. Let's start with linear regression. This method involves fitting a straight line to a set of data points, allowing us to make predictions about numerical outcomes. For instance, we can use linear regression to estimate a student's exam score based on the number of hours they dedicate to studying. It's a powerful tool for understanding relationships between variables.\nOn the other hand, we have logistic regression. Despite its name, this technique is primarily used for classification tasks rather than regression. It helps us determine the likelihood of an event occurring, such as whether an email is spam or not. This is achieved through a mathematical function called the sigmoid function, which outputs a probability between 0 and 1.\nNext, we explore decision trees. These are intuitive models that make decisions by splitting data into branches based on specific criteria. Each split helps to classify the data more accurately. To enhance the performance of decision trees, we can use random forests. This method combines multiple decision trees to create a more robust model, which helps to minimize errors and improve accuracy.\nLastly, we have k-Nearest Neighbors (k-NN). This algorithm classifies a new data point by looking at the majority vote of its closest neighbors in the dataset. Each of these machine learning methods comes with its own set of advantages and disadvantages, particularly regarding their speed, ease of interpretation, and overall accuracy. Understanding these trade-offs is crucial for selecting the right method for a given problem."
        },
        {
          "id": "data-science-101-l07-c3",
          "title": "Overfitting and the Bias-Variance Trade-off",
          "content": "Overfitting is a common challenge in the field of machine learning. It occurs when a model learns the training data too thoroughly, including all the noise and errors present in that data. As a result, the model performs poorly when it encounters new, unseen data. This is a significant issue because the ultimate goal of a machine learning model is to make accurate predictions on data it has not seen before. On the other hand, we have underfitting, which happens when a model is too simplistic. Such a model fails to capture the important patterns and relationships within the data, leading to poor performance as well. This situation creates a balance known as the bias-variance trade-off. Models with high bias, like simple linear regression, tend to underfit the data, while those with high variance, such as complex decision trees, often overfit. To effectively manage overfitting, several strategies can be employed. For instance, we can gather more training data to provide the model with a broader understanding of the patterns. Additionally, we can apply regularization techniques, which introduce penalties to the model to discourage it from fitting the noise. Another approach is to prune decision trees, simplifying them to enhance their generalization capabilities. Finally, validating our models using separate test sets is crucial to ensure they perform well on new data, confirming their reliability and effectiveness in real-world applications."
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
          "content": "To truly understand how well a machine learning model will perform when faced with new, unseen data, it's essential to evaluate it in a thoughtful way. One of the most common methods for doing this is by splitting our dataset into two distinct parts: a training set and a test set. Generally, we allocate about 70 to 80 percent of our data for training the model, which is where the model learns from the patterns in the data. The remaining 20 to 30 percent is reserved for testing, which helps us see how well the model can predict outcomes based on what it has learned.\nHowever, relying on just one split can lead to unreliable results. This is because if our test set happens to be particularly easy or difficult, it might not accurately reflect the model's true performance. To overcome this challenge, we can use a more sophisticated technique known as k-fold cross-validation.\nIn k-fold cross-validation, we divide our entire dataset into k equal parts, which we call folds. We then train our model using k-1 of these folds and test it on the remaining fold. This process is repeated multiple times, with each fold getting a chance to be the test set. By averaging the performance results from all these iterations, we can obtain a much more stable and accurate estimate of how our model is likely to perform in real-world scenarios. This method not only helps us assess the model's effectiveness but also ensures that we are making the most of our data for training and evaluation, leading to better and more reliable machine learning outcomes."
        },
        {
          "id": "data-science-101-l08-c2",
          "title": "Accuracy, Precision, Recall, and F1",
          "content": "When we assess how well a machine learning model performs, it's essential to choose the right metrics to get a true understanding of its effectiveness. Relying solely on accuracy can sometimes give us a false sense of security. For instance, imagine a model that always predicts 'not fraud.' If only 1 percent of transactions are actually fraudulent, this model could boast an impressive 99 percent accuracy. However, this doesn't mean the model is doing a good job! To gain a clearer insight, we need to consider additional metrics like precision and recall.\nPrecision is a measure that tells us how many of the positive predictions made by the model were actually correct. This is important because it helps us reduce the number of false positives, which are instances where the model incorrectly identifies something as positive. On the other hand, recall focuses on how many of the actual positive cases the model successfully identified. This metric helps minimize false negatives, where the model fails to recognize a positive case.\nTo combine these two important metrics, we use the F1-score, which provides a single score that balances both precision and recall. Depending on the context, we might prioritize one metric over the other. For example, in medical screenings, having a high recall is crucial to ensure that as many cases as possible are detected. Conversely, in email verification, high precision is vital to prevent legitimate emails from being mistakenly marked as spam. Understanding these metrics helps us make informed decisions about how to improve our models and their applications in real-world scenarios."
        },
        {
          "id": "data-science-101-l08-c3",
          "title": "Confusion Matrix and ROC-AUC",
          "content": "A confusion matrix is an important tool in the field of machine learning, especially when we are working with binary classification tasks. Imagine it as a simple 2x2 table that helps us understand how well our model is doing. This table displays four key outcomes: true positives, true negatives, false positives, and false negatives. By looking at these values, we can get a complete picture of the errors our model is making and how accurately it is predicting outcomes.\nAnother crucial concept to understand is the ROC curve, which stands for Receiver Operating Characteristic curve. This curve is a graphical representation that plots the true positive rate, also known as recall, against the false positive rate at various thresholds for classification. It helps us visualize how our model performs across different settings.\nTo summarize the performance of the model in a single number, we use the Area Under the Curve (AUC). This score provides a quick way to assess how well our model is doing: a score of 1.0 indicates that the model is performing perfectly, while a score of 0.5 suggests that the model is merely guessing, similar to flipping a coin. The AUC is particularly useful for comparing different models because it does not rely on a specific threshold and is effective even when the classes we are trying to predict are imbalanced. This means that we can confidently evaluate and choose the best model for our data, ensuring that we make informed decisions based on the performance metrics we gather."
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
