import type { LearningModule } from "@/lib/modules/types";

export const BusinessAnalytics101Module: LearningModule = {
  id: "business-analytics-101",
  title: "Business Analytics Foundations",
  description:
    "Discover how data-driven thinking transforms business decisions. Learn descriptive statistics, data visualization, spreadsheet analytics, and business intelligence tools to become a data-literate manager who turns raw numbers into actionable insights.",
  subject: "Business",
  tags: ["core", "curriculum", "interactive", "mba", "analytics"],
  minAge: 18,
  maxAge: 99,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Define business analytics and its role in modern organizations",
    "Explain how data-driven decision making improves outcomes",
    "Apply descriptive statistics to summarize business data",
    "Design effective data visualizations for different audiences",
    "Use Excel and spreadsheets for common analytics tasks",
    "Evaluate business intelligence tools and dashboards",
    "Build data literacy skills for managerial communication"
  ],
  lessons: [
    {
      id: "business-analytics-101-l01",
      title: "What Is Business Analytics?",
      type: "video",
      duration: 12,
      objectives: [
        "Define business analytics and distinguish it from related fields",
        "Identify the three types of analytics: descriptive, predictive, and prescriptive",
        "Explain why analytics capabilities are a competitive advantage"
      ],
      chunks: [
        {
          id: "business-analytics-101-l01-c1",
          title: "Defining Business Analytics",
          content:
            "Business analytics is the practice of using data, statistical methods, and quantitative analysis to drive business planning and decision-making. It sits at the intersection of business domain knowledge, information technology, and statistical science. Unlike pure data science, business analytics always ties analysis back to a business question — revenue, cost, risk, or customer value."
        },
        {
          id: "business-analytics-101-l01-c2",
          title: "Three Types of Analytics",
          content:
            "Analytics exists on a maturity spectrum. Descriptive analytics answers 'What happened?' through reports, dashboards, and summaries. Predictive analytics answers 'What is likely to happen?' using statistical models and machine learning. Prescriptive analytics answers 'What should we do?' through optimization and simulation. Most organizations begin with descriptive analytics and gradually build toward predictive and prescriptive capabilities."
        },
        {
          id: "business-analytics-101-l01-c3",
          title: "Analytics as Competitive Advantage",
          content:
            "Companies that embed analytics into their decision-making consistently outperform peers. Amazon uses analytics for pricing, recommendations, and logistics. Netflix leverages viewing data to green-light shows and personalize content. The advantage is not just having data — it is having the organizational capability to translate data into better, faster decisions at every level of the business."
        }
      ],
      flashcards: [
        { id: "business-analytics-101-l01-f1", front: "Business analytics", back: "The practice of using data, statistical methods, and quantitative analysis to drive business planning and decision-making — always tied to a business question" },
        { id: "business-analytics-101-l01-f2", front: "Three types of analytics", back: "Descriptive (what happened), Predictive (what will happen), Prescriptive (what should we do) — a maturity spectrum from reporting to optimization" },
        { id: "business-analytics-101-l01-f3", front: "Why analytics is a competitive advantage", back: "It enables better, faster decisions across every business level — the advantage comes from organizational capability, not just data ownership" }
      ]
    },
    {
      id: "business-analytics-101-l02",
      title: "Data-Driven Decision Making",
      type: "video",
      duration: 11,
      objectives: [
        "Contrast data-driven and intuition-based decision making",
        "Describe the DDDM framework for structured analytical decisions",
        "Recognize common cognitive biases that data can counteract"
      ],
      chunks: [
        {
          id: "business-analytics-101-l02-c1",
          title: "From Gut Feel to Evidence",
          content:
            "Data-driven decision making (DDDM) replaces gut instinct with systematic evidence gathering and analysis. Research by MIT and McKinsey shows that organizations adopting DDDM are 5-6% more productive and profitable than competitors. This does not mean ignoring experience — it means combining domain expertise with empirical evidence to reduce uncertainty and improve consistency."
        },
        {
          id: "business-analytics-101-l02-c2",
          title: "The DDDM Framework",
          content:
            "A structured DDDM process follows five steps: (1) Define the business question clearly. (2) Collect relevant, high-quality data. (3) Analyze the data using appropriate methods. (4) Interpret findings in business context. (5) Act on insights and measure outcomes. Each step matters — a brilliant analysis of the wrong question or poor data still leads to bad decisions."
        },
        {
          id: "business-analytics-101-l02-c3",
          title: "Overcoming Cognitive Biases",
          content:
            "Humans suffer from confirmation bias (seeking data that supports existing beliefs), anchoring (over-weighting the first number seen), and survivorship bias (studying only successes). Data analytics counteracts these biases by forcing decision-makers to examine complete datasets, consider disconfirming evidence, and test assumptions rigorously. The goal is not to remove human judgment but to discipline it."
        }
      ],
      flashcards: [
        { id: "business-analytics-101-l02-f1", front: "Data-driven decision making (DDDM)", back: "Replacing intuition with systematic evidence gathering and analysis — organizations using DDDM are 5-6% more productive and profitable" },
        { id: "business-analytics-101-l02-f2", front: "Five steps of the DDDM framework", back: "Define the question → Collect data → Analyze → Interpret in context → Act and measure outcomes" },
        { id: "business-analytics-101-l02-f3", front: "Confirmation bias in decision making", back: "The tendency to seek and favor data that supports existing beliefs — analytics counters this by examining complete datasets and disconfirming evidence" }
      ]
    },
    {
      id: "business-analytics-101-l03",
      title: "Descriptive Statistics for Business",
      type: "interactive",
      duration: 14,
      objectives: [
        "Calculate and interpret measures of central tendency",
        "Explain measures of variability and why they matter",
        "Select appropriate summary statistics for different business scenarios"
      ],
      chunks: [
        {
          id: "business-analytics-101-l03-c1",
          title: "Measures of Central Tendency",
          content:
            "Central tendency tells us where the 'center' of our data lies. The mean (average) sums all values and divides by count — useful for symmetric data like monthly revenue. The median is the middle value when data is sorted — better for skewed data like household income or home prices. The mode is the most frequent value — useful for categorical data like the most popular product size."
        },
        {
          id: "business-analytics-101-l03-c2",
          title: "Measures of Variability",
          content:
            "Variability describes how spread out data is. Range (max minus min) gives a rough picture but is sensitive to outliers. Variance measures the average squared deviation from the mean. Standard deviation — the square root of variance — is expressed in the original units, making it more interpretable. In business, variability matters: two products with the same average revenue but different variability represent different risk profiles."
        },
        {
          id: "business-analytics-101-l03-c3",
          title: "Choosing the Right Statistics",
          content:
            "The best summary statistic depends on the data and the question. For normally distributed revenue data, mean and standard deviation work well. For salary data with extreme outliers, median and interquartile range are more informative. For customer satisfaction ratings on a 1-5 scale, mode and frequency distributions tell the story. Always pair a measure of center with a measure of spread for a complete picture."
        }
      ],
      flashcards: [
        { id: "business-analytics-101-l03-f1", front: "When to use median instead of mean", back: "When data is skewed or contains extreme outliers — the median is not pulled by extreme values, making it better for salary, home price, or revenue distributions with outliers" },
        { id: "business-analytics-101-l03-f2", front: "Standard deviation", back: "The square root of variance — measures the average distance of data points from the mean, expressed in the original units for easy interpretation" },
        { id: "business-analytics-101-l03-f3", front: "Why pair center with spread", back: "Two datasets can have identical means but vastly different spreads — a measure of center alone hides the variability and risk profile of the data" }
      ]
    },
    {
      id: "business-analytics-101-l04",
      title: "Data Visualization Principles",
      type: "video",
      duration: 13,
      objectives: [
        "Apply Tufte's principles of effective data visualization",
        "Select appropriate chart types for different data relationships",
        "Identify and avoid common visualization mistakes"
      ],
      chunks: [
        {
          id: "business-analytics-101-l04-c1",
          title: "Principles of Good Visualization",
          content:
            "Edward Tufte's core principle is to maximize the data-ink ratio — every drop of ink on a chart should convey information. Eliminate chartjunk: decorative gridlines, 3D effects, and unnecessary legends. Good visualizations are honest (no misleading scales), clear (the main insight is immediately apparent), and efficient (they convey complex patterns at a glance). Design for your audience — executives need high-level dashboards; analysts need detailed drilldowns."
        },
        {
          id: "business-analytics-101-l04-c2",
          title: "Choosing the Right Chart Type",
          content:
            "Match chart type to the data relationship. Use line charts for trends over time. Bar charts compare categories. Scatter plots reveal relationships between two variables. Pie charts show parts of a whole (but only with few categories). Histograms display distributions. Heatmaps visualize patterns in large tables. Box plots compare distributions across groups. The wrong chart type can obscure the very insight you are trying to communicate."
        },
        {
          id: "business-analytics-101-l04-c3",
          title: "Common Visualization Pitfalls",
          content:
            "Truncated Y-axes exaggerate small differences. Dual Y-axes can imply false correlations. Using area or volume to represent one-dimensional quantities distorts perception (our brains misjudge area ratios). Cherry-picking time ranges can mislead. Color overuse creates noise instead of signal. The solution is always to ask: 'Does this visualization accurately represent the data and support the audience in drawing correct conclusions?'"
        }
      ],
      flashcards: [
        { id: "business-analytics-101-l04-f1", front: "Data-ink ratio (Tufte)", back: "The proportion of ink used to present actual data versus total ink used in the chart — maximize it by removing chartjunk, 3D effects, and decorative elements" },
        { id: "business-analytics-101-l04-f2", front: "When to use a scatter plot", back: "To reveal the relationship between two continuous variables — each point represents one observation with x and y values" },
        { id: "business-analytics-101-l04-f3", front: "Why truncated Y-axes are misleading", back: "Starting the Y-axis above zero exaggerates small differences, making minor changes appear dramatic — distorts the audience's perception of magnitude" }
      ]
    },
    {
      id: "business-analytics-101-l05",
      title: "Checkpoint: Analytics Fundamentals",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "business-analytics-101-l05-q1",
          text: "Which type of analytics answers the question 'What is likely to happen next?'",
          options: [
            { id: "a", text: "Descriptive analytics" },
            { id: "b", text: "Diagnostic analytics" },
            { id: "c", text: "Predictive analytics" },
            { id: "d", text: "Prescriptive analytics" }
          ],
          correctOptionId: "c",
          explanation: "Predictive analytics uses statistical models and machine learning to forecast future outcomes. Descriptive looks at the past, and prescriptive recommends actions."
        },
        {
          id: "business-analytics-101-l05-q2",
          text: "A company's employee salary data is heavily right-skewed. Which measure of central tendency is MOST appropriate?",
          options: [
            { id: "a", text: "Mean" },
            { id: "b", text: "Median" },
            { id: "c", text: "Mode" },
            { id: "d", text: "Range" }
          ],
          correctOptionId: "b",
          explanation: "The median is resistant to extreme values and provides a better 'typical' value for skewed distributions. The mean would be pulled upward by high salaries."
        },
        {
          id: "business-analytics-101-l05-q3",
          text: "According to Tufte's principles, what should a data visualization maximize?",
          options: [
            { id: "a", text: "The number of colors used" },
            { id: "b", text: "The data-ink ratio" },
            { id: "c", text: "The number of chart types on one page" },
            { id: "d", text: "Three-dimensional effects for visual appeal" }
          ],
          correctOptionId: "b",
          explanation: "Tufte's core principle is to maximize the data-ink ratio — every element in a visualization should convey data, and non-data ink (chartjunk) should be removed."
        },
        {
          id: "business-analytics-101-l05-q4",
          text: "What is the FIRST step in the data-driven decision making framework?",
          options: [
            { id: "a", text: "Collect all available data" },
            { id: "b", text: "Choose an analytics tool" },
            { id: "c", text: "Define the business question clearly" },
            { id: "d", text: "Build a predictive model" }
          ],
          correctOptionId: "c",
          explanation: "The DDDM framework begins with defining the business question. Without a clear question, even perfect data collection and analysis will not lead to useful insights."
        }
      ]
    },
    {
      id: "business-analytics-101-l06",
      title: "Excel, Spreadsheets & BI Tools",
      type: "interactive",
      duration: 15,
      objectives: [
        "Use key Excel functions for business analytics tasks",
        "Explain the role of business intelligence platforms",
        "Compare self-service BI tools for different organizational needs"
      ],
      chunks: [
        {
          id: "business-analytics-101-l06-c1",
          title: "Spreadsheet Analytics Essentials",
          content:
            "Excel remains the most widely used analytics tool in business. Essential functions include VLOOKUP/INDEX-MATCH for data retrieval, pivot tables for dynamic summarization, conditional formatting for pattern spotting, and IF/SUMIFS/COUNTIFS for conditional logic. Power Query handles data cleaning and transformation. For most managers, mastering pivot tables alone transforms their ability to explore data without writing code."
        },
        {
          id: "business-analytics-101-l06-c2",
          title: "Business Intelligence Platforms",
          content:
            "Business intelligence (BI) tools — Tableau, Power BI, Looker, Qlik — go beyond spreadsheets by connecting to live data sources, handling larger datasets, and creating interactive dashboards that update automatically. BI platforms provide a single source of truth across the organization, replacing emailed spreadsheets with shared dashboards. The key shift is from static reports to dynamic, self-service exploration."
        },
        {
          id: "business-analytics-101-l06-c3",
          title: "Choosing the Right Tool",
          content:
            "Tool selection depends on data volume, user skill level, budget, and integration needs. Excel works for small datasets and ad-hoc analysis. Power BI integrates naturally with Microsoft ecosystems and is cost-effective. Tableau excels at complex visualizations and data storytelling. Looker is ideal for organizations wanting a centralized semantic layer. The best tool is the one your team will actually use consistently."
        }
      ],
      flashcards: [
        { id: "business-analytics-101-l06-f1", front: "Pivot tables", back: "Excel's most powerful analytics feature — dynamically summarize, group, filter, and cross-tabulate large datasets without writing formulas" },
        { id: "business-analytics-101-l06-f2", front: "Business intelligence (BI) platform", back: "Software (Tableau, Power BI, Looker) that connects to live data, creates interactive dashboards, and enables self-service analytics across the organization" },
        { id: "business-analytics-101-l06-f3", front: "Self-service BI", back: "Empowering business users to explore data and create visualizations without depending on IT — shifts from static reports to dynamic, interactive exploration" }
      ]
    },
    {
      id: "business-analytics-101-l07",
      title: "Final Assessment: Business Analytics Foundations",
      type: "quiz",
      duration: 15,
      questions: [
        {
          id: "business-analytics-101-l07-q1",
          text: "A retail chain wants to understand which product categories generated the most revenue last quarter. This is an example of:",
          options: [
            { id: "a", text: "Predictive analytics" },
            { id: "b", text: "Prescriptive analytics" },
            { id: "c", text: "Descriptive analytics" },
            { id: "d", text: "Diagnostic analytics" }
          ],
          correctOptionId: "c",
          explanation: "Summarizing past revenue by category is descriptive analytics — answering 'What happened?' Predictive would forecast future revenue; prescriptive would recommend actions."
        },
        {
          id: "business-analytics-101-l07-q2",
          text: "Which Excel feature is BEST suited for dynamically summarizing sales data by region, product, and time period?",
          options: [
            { id: "a", text: "VLOOKUP" },
            { id: "b", text: "Conditional formatting" },
            { id: "c", text: "Pivot tables" },
            { id: "d", text: "Goal Seek" }
          ],
          correctOptionId: "c",
          explanation: "Pivot tables allow dynamic summarization, grouping, and cross-tabulation across multiple dimensions — perfect for slicing sales data by region, product, and time."
        },
        {
          id: "business-analytics-101-l07-q3",
          text: "Two stores have the same average monthly revenue of $50,000, but Store A has a standard deviation of $2,000 and Store B has $15,000. What does this tell you?",
          options: [
            { id: "a", text: "Store B is more profitable" },
            { id: "b", text: "Store A has more consistent, predictable revenue" },
            { id: "c", text: "Both stores have identical risk profiles" },
            { id: "d", text: "Store A is likely to outperform Store B next month" }
          ],
          correctOptionId: "b",
          explanation: "Standard deviation measures variability. Store A's lower SD ($2,000 vs $15,000) means its revenue is more consistent and predictable, while Store B's revenue swings widely."
        },
        {
          id: "business-analytics-101-l07-q4",
          text: "Which cognitive bias involves only studying successful companies and ignoring failed ones?",
          options: [
            { id: "a", text: "Anchoring bias" },
            { id: "b", text: "Confirmation bias" },
            { id: "c", text: "Survivorship bias" },
            { id: "d", text: "Availability bias" }
          ],
          correctOptionId: "c",
          explanation: "Survivorship bias occurs when analysis focuses only on surviving or successful cases, ignoring those that failed — leading to distorted conclusions about what drives success."
        }
      ]
    }
  ],
};
