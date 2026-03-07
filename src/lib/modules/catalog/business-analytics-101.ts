import type { LearningModule } from "@/lib/modules/types";

export const business_analytics_101_Module: LearningModule = {
  "id": "business-analytics-101",
  "title": "Business Analytics Foundations",
  "description": "Discover how data-driven thinking transforms business decisions. Learn descriptive statistics, data visualization, spreadsheet analytics, and business intelligence tools to become a data-literate manager who turns raw numbers into actionable insights.",
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
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Define business analytics and its role in modern organizations",
    "Explain how data-driven decision making improves outcomes",
    "Apply descriptive statistics to summarize business data",
    "Design effective data visualizations for different audiences",
    "Use Excel and spreadsheets for common analytics tasks",
    "Evaluate business intelligence tools and dashboards",
    "Build data literacy skills for managerial communication"
  ],
  "lessons": [
    {
      "id": "business-analytics-101-l01",
      "title": "What Is Business Analytics?",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define business analytics and distinguish it from related fields",
        "Identify the three types of analytics: descriptive, predictive, and prescriptive",
        "Explain why analytics capabilities are a competitive advantage"
      ],
      "chunks": [
        {
          "id": "business-analytics-101-l01-c1",
          "title": "Defining Business Analytics",
          "content": "Business analytics is the process of using data, statistical methods, and technology to gain insights that drive strategic business decisions. It's a practical discipline that combines business knowledge, information technology, and statistics. Unlike pure data science, which might explore data without a specific goal, business analytics always starts with a business question, such as 'How can we increase customer retention?' or 'Which marketing campaign had the best return on investment?'. The goal is to transform raw data into actionable intelligence that improves performance, reduces costs, and creates value."
        },
        {
          "id": "business-analytics-101-l01-c2",
          "title": "The Three Types of Analytics",
          "content": "Analytics can be broken down into three distinct types, which represent a journey from hindsight to foresight. First is Descriptive Analytics, which answers 'What happened?'. This involves summarizing past data through reports and dashboards to understand historical performance. Next is Predictive Analytics, which answers 'What is likely to happen?'. It uses statistical models and machine learning to forecast future trends, like anticipating customer demand. Finally, Prescriptive Analytics answers 'What should we do?'. This advanced stage uses optimization and simulation to recommend specific actions to achieve a desired outcome. Most organizations build their capabilities by mastering descriptive analytics before moving on to predictive and prescriptive."
        },
        {
          "id": "business-analytics-101-l01-c3",
          "title": "Analytics as a Competitive Advantage",
          "content": "In today's market, companies that master analytics gain a significant edge. For example, Amazon uses analytics to optimize pricing, personalize product recommendations, and streamline its supply chain. Netflix analyzes viewing data to decide which original content to produce, minimizing risk and maximizing viewership. The advantage isn't just about having data; it's about building the organizational capability to interpret that data and make smarter, faster decisions at every level. This data-driven culture leads to improved efficiency, greater profitability, and a stronger market position."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l01-f1",
          "front": "Business Analytics",
          "back": "The process of using data and statistical methods to answer business questions and drive strategic decision-making."
        },
        {
          "id": "business-analytics-101-l01-f2",
          "front": "Three Types of Analytics",
          "back": "Descriptive (What happened?), Predictive (What will happen?), and Prescriptive (What should we do?)."
        },
        {
          "id": "business-analytics-101-l01-f3",
          "front": "Why is analytics a competitive advantage?",
          "back": "It enables organizations to make smarter, faster decisions, leading to improved efficiency and profitability. The advantage comes from the capability, not just the data."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-101-l01-a1",
          "type": "image",
          "title": "Infographic: From Hindsight to Foresight",
          "content": "A visual diagram showing the progression from Descriptive (looking in the rearview mirror) to Predictive (looking at the road ahead) to Prescriptive (GPS suggesting the best route)."
        }
      ]
    },
    {
      "id": "business-analytics-101-l02",
      "title": "Data-Driven Decision Making",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Contrast data-driven and intuition-based decision making",
        "Describe the DDDM framework for structured analytical decisions",
        "Recognize common cognitive biases that data can counteract"
      ],
      "chunks": [
        {
          "id": "business-analytics-101-l02-c1",
          "title": "From Gut Feel to Hard Evidence",
          "content": "Data-Driven Decision Making (DDDM) is a fundamental shift from relying on intuition to making choices based on verifiable data and analysis. Research from institutions like MIT shows that companies embracing DDDM are consistently more productive and profitable. This doesn't mean ignoring experience; the most powerful decisions combine domain expertise with empirical evidence. This synergy reduces uncertainty, challenges assumptions, and leads to more consistent, successful outcomes. It's about augmenting your judgment with facts, not replacing it."
        },
        {
          "id": "business-analytics-101-l02-c2",
          "title": "A Framework for Better Decisions",
          "content": "A structured approach ensures that analysis is effective. The DDDM framework follows five key steps: 1. Define the business question clearly and specifically. 2. Collect relevant, high-quality data to address that question. 3. Analyze the data using appropriate methods to uncover patterns and insights. 4. Interpret the findings in the business context to derive meaning. 5. Act on the insights and measure the results to learn and iterate. Skipping or rushing any step, especially the first one, can lead to flawed conclusions, no matter how sophisticated the analysis."
        },
        {
          "id": "business-analytics-101-l02-c3",
          "title": "Overcoming Hidden Biases",
          "content": "Our minds often take shortcuts that can lead to poor decisions. Data helps counteract these cognitive biases. Confirmation Bias is the tendency to favor information that confirms our existing beliefs. Anchoring is relying too heavily on the first piece of information we receive. Survivorship Bias is focusing only on successful examples while ignoring failures. A data-driven approach forces us to examine the complete dataset, consider disconfirming evidence, and test our hypotheses rigorously. The goal is not to eliminate intuition, but to refine it with objective evidence."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l02-f1",
          "front": "Data-Driven Decision Making (DDDM)",
          "back": "The practice of making decisions based on data analysis rather than solely on intuition. It combines expertise with evidence."
        },
        {
          "id": "business-analytics-101-l02-f2",
          "front": "Five Steps of the DDDM Framework",
          "back": "1. Define Question → 2. Collect Data → 3. Analyze Data → 4. Interpret Findings → 5. Act & Measure."
        },
        {
          "id": "business-analytics-101-l02-f3",
          "front": "Confirmation Bias",
          "back": "The tendency to seek out and interpret data in a way that supports one's pre-existing beliefs. Analytics helps by forcing a look at all the evidence."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-101-l02-a1",
          "type": "image",
          "title": "Diagram: The DDDM Cycle",
          "content": "A circular flow diagram illustrating the five steps of the Data-Driven Decision Making framework, emphasizing its iterative nature."
        }
      ]
    },
    {
      "id": "business-analytics-101-l03",
      "title": "Descriptive Statistics for Business",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Calculate and interpret measures of central tendency",
        "Explain measures of variability and why they matter",
        "Select appropriate summary statistics for different business scenarios"
      ],
      "chunks": [
        {
          "id": "business-analytics-101-l03-c1",
          "title": "Finding the 'Center' of Your Data",
          "content": "Measures of central tendency help us find a typical value in a dataset. The Mean is the average, calculated by summing all values and dividing by the count; it's best for symmetric data like monthly sales figures. The Median is the middle value when the data is sorted; it's ideal for skewed data like employee salaries, as it isn't affected by a few extremely high earners. The Mode is the most frequent value, which is useful for categorical data, like identifying the most popular product size. Each tells a different story about your data's center."
        },
        {
          "id": "business-analytics-101-l03-c2",
          "title": "Measuring the Spread",
          "content": "Measures of variability, or spread, tell us how dispersed the data is. The Range (maximum minus minimum) is simple but easily skewed by outliers. Variance and Standard Deviation are more robust. They measure the average distance of each data point from the mean. Standard deviation is particularly useful because it's in the same units as the data itself. In business, spread equals risk. Two investment options might have the same average return (mean), but the one with a higher standard deviation is more volatile and unpredictable."
        },
        {
          "id": "business-analytics-101-l03-c3",
          "title": "Telling the Whole Story",
          "content": "Choosing the right statistic depends on your data's shape and your business question. For normally distributed data (a bell curve), the mean and standard deviation provide a complete picture. For skewed data, like home prices, the median and interquartile range (the range of the middle 50% of data) are more representative. A measure of center alone is incomplete. Always pair a measure of central tendency (like the mean) with a measure of spread (like the standard deviation) to understand both the typical value and its consistency."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l03-f1",
          "front": "When should you use the median instead of the mean?",
          "back": "When the data is skewed or has significant outliers (e.g., salaries, home prices), as the median provides a more representative 'typical' value."
        },
        {
          "id": "business-analytics-101-l03-f2",
          "front": "Standard Deviation",
          "back": "A measure of how spread out the data points are from the mean. A low standard deviation indicates data is clustered around the mean; a high one indicates it's spread out."
        },
        {
          "id": "business-analytics-101-l03-f3",
          "front": "Why pair a measure of center with a measure of spread?",
          "back": "Because the center alone is misleading. Two datasets can have the same average but vastly different levels of consistency and risk, which is revealed by the spread."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-101-l03-a1",
          "type": "practice",
          "title": "Interactive Calculator: Central Tendency & Spread",
          "content": "An interactive tool where you can input a small set of business numbers (e.g., daily sales) and see the mean, median, mode, and standard deviation calculated instantly with a visual explanation."
        }
      ]
    },
    {
      "id": "business-analytics-101-l04",
      "title": "Data Visualization Principles",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Apply Tufte's principles of effective data visualization",
        "Select appropriate chart types for different data relationships",
        "Identify and avoid common visualization mistakes"
      ],
      "chunks": [
        {
          "id": "business-analytics-101-l04-c1",
          "title": "Clarity, Honesty, and Efficiency",
          "content": "Effective data visualization tells a clear and honest story. Pioneer Edward Tufte introduced the concept of the 'data-ink ratio'—the idea that every bit of ink on a chart should be used to represent data. To achieve this, eliminate 'chartjunk' like unnecessary gridlines, 3D effects, and distracting backgrounds. A good visualization is honest (it doesn't distort the data), clear (the main point is obvious), and efficient (it conveys complex information quickly). Always design with your audience in mind: an executive needs a high-level summary dashboard, while an analyst needs a detailed, explorable chart."
        },
        {
          "id": "business-analytics-101-l04-c2",
          "title": "Choosing the Right Chart for the Job",
          "content": "The right chart type makes your data's message intuitive. Use a Line Chart to show a trend over time. Use a Bar Chart to compare quantities across categories. Use a Scatter Plot to investigate the relationship between two variables. Use a Histogram to understand the distribution of a single variable. While a Pie Chart can show parts of a whole, a bar chart is often clearer, especially with more than a few categories. The key is to match the chart to the relationship you want to communicate: is it a time-series, a comparison, a distribution, or a correlation?"
        },
        {
          "id": "business-analytics-101-l04-c3",
          "title": "Common Visualization Pitfalls to Avoid",
          "content": "Simple mistakes can make a visualization misleading. A top offender is a truncated Y-axis, where the vertical axis doesn't start at zero, which exaggerates small differences. Using dual Y-axes can falsely imply a relationship between two different scales. Another error is using area or volume (like in bubble charts) to represent a one-dimensional value, as our brains are poor at comparing areas accurately. Always ask yourself: 'Could this chart mislead a busy reader?' Strive for accuracy and clarity above all else."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l04-f1",
          "front": "Data-Ink Ratio",
          "back": "A principle by Edward Tufte. It's the proportion of a graphic's ink devoted to the non-redundant display of data. Maximize it by removing 'chartjunk'."
        },
        {
          "id": "business-analytics-101-l04-f2",
          "front": "When should you use a bar chart vs. a line chart?",
          "back": "Use a bar chart to compare distinct categories (e.g., sales by product). Use a line chart to show a continuous trend over time (e.g., sales by month)."
        },
        {
          "id": "business-analytics-101-l04-f3",
          "front": "Why is a truncated Y-axis misleading?",
          "back": "Because starting the axis above zero makes small differences look much larger than they are, distorting the scale and the viewer's perception of the data."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-101-l04-a1",
          "type": "image",
          "title": "Gallery: Good Chart vs. Bad Chart",
          "content": "A side-by-side comparison gallery showing common visualization mistakes and their corrected versions (e.g., a 3D pie chart vs. a simple bar chart, a chart with a truncated axis vs. one starting at zero)."
        }
      ]
    },
    {
      "id": "business-analytics-101-l05",
      "title": "Checkpoint: Analytics Fundamentals",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "business-analytics-101-l05-q1",
          "text": "Which type of analytics answers the question 'What is likely to happen next?'",
          "options": [
            {
              "id": "a",
              "text": "Descriptive analytics"
            },
            {
              "id": "b",
              "text": "Diagnostic analytics"
            },
            {
              "id": "c",
              "text": "Predictive analytics"
            },
            {
              "id": "d",
              "text": "Prescriptive analytics"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Predictive analytics uses statistical models and machine learning to forecast future outcomes. Descriptive looks at the past, and prescriptive recommends actions."
        },
        {
          "id": "business-analytics-101-l05-q2",
          "text": "A company's employee salary data is heavily right-skewed. Which measure of central tendency is MOST appropriate?",
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
              "text": "Range"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The median is resistant to extreme values and provides a better 'typical' value for skewed distributions. The mean would be pulled upward by high salaries."
        },
        {
          "id": "business-analytics-101-l05-q3",
          "text": "According to Tufte's principles, what should a data visualization maximize?",
          "options": [
            {
              "id": "a",
              "text": "The number of colors used"
            },
            {
              "id": "b",
              "text": "The data-ink ratio"
            },
            {
              "id": "c",
              "text": "The number of chart types on one page"
            },
            {
              "id": "d",
              "text": "Three-dimensional effects for visual appeal"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tufte's core principle is to maximize the data-ink ratio — every element in a visualization should convey data, and non-data ink (chartjunk) should be removed."
        },
        {
          "id": "business-analytics-101-l05-q4",
          "text": "What is the FIRST step in the data-driven decision making framework?",
          "options": [
            {
              "id": "a",
              "text": "Collect all available data"
            },
            {
              "id": "b",
              "text": "Choose an analytics tool"
            },
            {
              "id": "c",
              "text": "Define the business question clearly"
            },
            {
              "id": "d",
              "text": "Build a predictive model"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The DDDM framework begins with defining the business question. Without a clear question, even perfect data collection and analysis will not lead to useful insights."
        }
      ]
    },
    {
      "id": "business-analytics-101-l06",
      "title": "Excel, Spreadsheets & BI Tools",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Use key Excel functions for business analytics tasks",
        "Explain the role of business intelligence platforms",
        "Compare self-service BI tools for different organizational needs"
      ],
      "chunks": [
        {
          "id": "business-analytics-101-l06-c1",
          "title": "Spreadsheet Analytics: The Workhorse",
          "content": "For many business professionals, Microsoft Excel is the starting point for data analysis. Its power lies in a few key features. Pivot Tables are essential for dynamically summarizing large datasets without writing formulas, allowing you to slice and dice data by different categories. Functions like VLOOKUP and the more flexible INDEX-MATCH are crucial for merging data from different tables. Conditional logic with IF, SUMIFS, and COUNTIFS enables you to perform calculations based on specific criteria. For managers, mastering Pivot Tables is often the single most impactful skill for exploring data and finding quick answers."
        },
        {
          "id": "business-analytics-101-l06-c2",
          "title": "Beyond Spreadsheets: Business Intelligence Platforms",
          "content": "When data becomes too large or complex for Excel, Business Intelligence (BI) platforms like Tableau, Power BI, and Looker take over. These tools connect directly to live data sources, from databases to cloud services, handling millions of rows of data with ease. Their primary output is interactive dashboards that update automatically. This creates a 'single source of truth' for the entire organization, ending the confusion of emailing different versions of a spreadsheet. The key shift is from static reports to dynamic, self-service analytics, where users can explore data and ask their own questions."
        },
        {
          "id": "business-analytics-101-l06-c3",
          "title": "Choosing the Right Tool for the Task",
          "content": "The best tool depends on your specific needs. Excel is perfect for quick, small-scale analysis and is universally available. Power BI is a strong choice for organizations already in the Microsoft ecosystem, offering a user-friendly interface and strong integration with Excel. Tableau is renowned for its powerful and beautiful data visualization capabilities, making it ideal for creating compelling data stories. Looker excels at creating a centralized data model, ensuring everyone in the company uses the same definitions and metrics. The ultimate goal is to choose a tool that your team will actually use to make better decisions."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l06-f1",
          "front": "Pivot Tables",
          "back": "An Excel feature that allows you to dynamically summarize, group, and analyze large datasets with a simple drag-and-drop interface."
        },
        {
          "id": "business-analytics-101-l06-f2",
          "front": "Business Intelligence (BI) Platform",
          "back": "Software (like Tableau or Power BI) that connects to live data sources to create interactive, shareable dashboards, enabling self-service analytics."
        },
        {
          "id": "business-analytics-101-l06-f3",
          "front": "Self-Service BI",
          "back": "An approach that empowers business users to explore data and build their own reports and visualizations without needing help from a dedicated IT or data team."
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-101-l06-a1",
          "type": "image",
          "title": "Flowchart: Which Tool Should I Use?",
          "content": "A decision-tree flowchart that guides the user through questions like 'How large is your dataset?', 'Do you need live data?', and 'What is your primary goal (calculation vs. visualization)?' to help them choose between Excel, Power BI, and Tableau."
        }
      ]
    },
    {
      "id": "business-analytics-101-l07",
      "title": "Final Assessment: Business Analytics Foundations",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "business-analytics-101-l07-q1",
          "text": "A retail chain wants to understand which product categories generated the most revenue last quarter. This is an example of:",
          "options": [
            {
              "id": "a",
              "text": "Predictive analytics"
            },
            {
              "id": "b",
              "text": "Prescriptive analytics"
            },
            {
              "id": "c",
              "text": "Descriptive analytics"
            },
            {
              "id": "d",
              "text": "Diagnostic analytics"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Summarizing past revenue by category is descriptive analytics — answering 'What happened?' Predictive would forecast future revenue; prescriptive would recommend actions."
        },
        {
          "id": "business-analytics-101-l07-q2",
          "text": "Which Excel feature is BEST suited for dynamically summarizing sales data by region, product, and time period?",
          "options": [
            {
              "id": "a",
              "text": "VLOOKUP"
            },
            {
              "id": "b",
              "text": "Conditional formatting"
            },
            {
              "id": "c",
              "text": "Pivot tables"
            },
            {
              "id": "d",
              "text": "Goal Seek"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Pivot tables allow dynamic summarization, grouping, and cross-tabulation across multiple dimensions — perfect for slicing sales data by region, product, and time."
        },
        {
          "id": "business-analytics-101-l07-q3",
          "text": "Two stores have the same average monthly revenue of $50,000, but Store A has a standard deviation of $2,000 and Store B has $15,000. What does this tell you?",
          "options": [
            {
              "id": "a",
              "text": "Store B is more profitable"
            },
            {
              "id": "b",
              "text": "Store A has more consistent, predictable revenue"
            },
            {
              "id": "c",
              "text": "Both stores have identical risk profiles"
            },
            {
              "id": "d",
              "text": "Store A is likely to outperform Store B next month"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Standard deviation measures variability. Store A's lower SD ($2,000 vs $15,000) means its revenue is more consistent and predictable, while Store B's revenue swings widely."
        },
        {
          "id": "business-analytics-101-l07-q4",
          "text": "Which cognitive bias involves only studying successful companies and ignoring failed ones?",
          "options": [
            {
              "id": "a",
              "text": "Anchoring bias"
            },
            {
              "id": "b",
              "text": "Confirmation bias"
            },
            {
              "id": "c",
              "text": "Survivorship bias"
            },
            {
              "id": "d",
              "text": "Availability bias"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Survivorship bias occurs when analysis focuses only on surviving or successful cases, ignoring those that failed — leading to distorted conclusions about what drives success."
        }
      ]
    }
  ]
};
