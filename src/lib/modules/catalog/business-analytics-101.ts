import type { LearningModule } from "@/lib/modules/types";

export const BusinessAnalytics101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "Business analytics is an essential practice that helps organizations use data effectively to make smart decisions and plan for the future. It involves gathering and analyzing data, applying statistical methods, and using quantitative analysis to uncover insights that can guide business strategies. This practice is unique because it merges three important areas: knowledge of the business environment, expertise in information technology, and skills in statistical science. Unlike pure data science, which may focus on the data itself without a specific context, business analytics always relates back to key business questions. For example, businesses might ask how they can increase their revenue, lower their costs, manage potential risks, or improve the value they provide to customers. By focusing on these critical questions, business analytics ensures that the insights gained from data analysis are not only relevant but also actionable, ultimately contributing to the success and growth of the business."
        },
        {
          "id": "business-analytics-101-l01-c2",
          "title": "Three Types of Analytics",
          "content": "Analytics can be understood through three main types, each serving a different purpose on a maturity spectrum. The first type, descriptive analytics, helps answer the question 'What happened?' by providing detailed reports, interactive dashboards, and summaries of past events. This type of analytics is essential for organizations to understand their historical performance and identify trends over time.\nThe second type, predictive analytics, looks forward and answers the question 'What is likely to happen?' This is achieved by using statistical models and advanced machine learning techniques to forecast future trends based on historical data. Organizations use predictive analytics to anticipate customer behavior, market changes, and other critical factors that can influence their decision-making.\nFinally, prescriptive analytics goes a step further by answering the question 'What should we do?' This type utilizes optimization and simulation methods to recommend actions that can lead to desired outcomes. By employing prescriptive analytics, organizations can make informed decisions that enhance their strategies and operations.\nMost organizations begin their analytics journey with descriptive analytics, gradually building their capabilities to include predictive and prescriptive analytics as they grow and evolve in their understanding of data-driven decision-making."
        },
        {
          "id": "business-analytics-101-l01-c3",
          "title": "Analytics as Competitive Advantage",
          "content": "In today's competitive business landscape, companies that effectively integrate analytics into their decision-making processes often see greater success compared to their rivals. For instance, Amazon is a prime example of this practice; they utilize analytics to fine-tune their pricing strategies, offer personalized product recommendations to customers, and enhance their logistics operations for better efficiency. Similarly, Netflix harnesses the power of viewing data to make informed decisions about which shows to produce, ensuring that they cater to the preferences of their audience by personalizing content. The true advantage of using analytics goes beyond merely having access to vast amounts of data. It involves developing the organizational skills and capabilities necessary to interpret that data effectively. This means being able to make quicker and more informed decisions at every level of the business. When companies can do this, they often experience significant improvements in their overall performance, leading to a stronger position in the market and better outcomes for their stakeholders."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l01-f1",
          "front": "Business analytics",
          "back": "The practice of using data, statistical methods, and quantitative analysis to drive business planning and decision-making — always tied to a business question"
        },
        {
          "id": "business-analytics-101-l01-f2",
          "front": "Three types of analytics",
          "back": "Descriptive (what happened), Predictive (what will happen), Prescriptive (what should we do) — a maturity spectrum from reporting to optimization"
        },
        {
          "id": "business-analytics-101-l01-f3",
          "front": "Why analytics is a competitive advantage",
          "back": "It enables better, faster decisions across every business level — the advantage comes from organizational capability, not just data ownership"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "title": "From Gut Feel to Evidence",
          "content": "Data-driven decision making, often referred to as DDDM, represents a significant shift in how organizations approach their choices. Instead of relying solely on gut feelings or personal instincts, DDDM emphasizes the importance of gathering systematic evidence and conducting thorough analysis. This approach is backed by research from prestigious institutions like MIT and McKinsey, which shows that companies that adopt DDDM practices tend to be 5-6% more productive and profitable than those that do not. It's crucial to understand that embracing DDDM does not mean disregarding the valuable insights gained from experience. In fact, the most effective decision-making occurs when domain expertise is combined with solid empirical evidence. This powerful combination helps to reduce uncertainty in the decision-making process and leads to more consistent and reliable outcomes for organizations. By prioritizing data and evidence, businesses can make informed choices that drive success and growth."
        },
        {
          "id": "business-analytics-101-l02-c2",
          "title": "The DDDM Framework",
          "content": "A structured approach to data-driven decision making (DDDM) consists of five important steps that help guide businesses in making informed choices. The first step is to clearly define the business question you want to answer. This means being specific about what you are trying to find out, as a well-defined question sets the foundation for the entire process. The second step involves gathering relevant and high-quality data. This data should be accurate and pertinent to the question at hand, as it will serve as the basis for your analysis. The third step is to analyze the data using suitable methods. This could involve statistical techniques, data visualization, or other analytical tools that help uncover patterns and insights. The fourth step is to interpret the findings within the context of the business. This ensures that the insights gained are relevant and can be applied effectively. Finally, the fifth step is to take action based on the insights gained and measure the outcomes to evaluate effectiveness. Each of these steps is crucial; even the best analysis of a poorly defined question or low-quality data can lead to misguided decisions. By following this structured framework, businesses can enhance their decision-making processes and achieve better results."
        },
        {
          "id": "business-analytics-101-l02-c3",
          "title": "Overcoming Cognitive Biases",
          "content": "When making decisions, people often experience cognitive biases that can cloud their judgment. One common bias is confirmation bias, which happens when individuals look for information that only supports what they already believe, ignoring anything that might challenge those beliefs. Another bias is anchoring, where the first piece of information someone sees influences their thinking too much, leading them to make decisions based on that initial number rather than considering all relevant data. Additionally, there's survivorship bias, which occurs when we only focus on successful outcomes and overlook failures, which can provide valuable lessons. Data analytics plays a crucial role in overcoming these biases. It encourages decision-makers to analyze complete datasets rather than cherry-picking information. By doing so, they are prompted to consider evidence that contradicts their initial assumptions and rigorously test their ideas. The aim is not to remove human judgment from the decision-making process but to enhance and refine it, leading to more informed and effective choices."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l02-f1",
          "front": "Data-driven decision making (DDDM)",
          "back": "Replacing intuition with systematic evidence gathering and analysis — organizations using DDDM are 5-6% more productive and profitable"
        },
        {
          "id": "business-analytics-101-l02-f2",
          "front": "Five steps of the DDDM framework",
          "back": "Define the question → Collect data → Analyze → Interpret in context → Act and measure outcomes"
        },
        {
          "id": "business-analytics-101-l02-f3",
          "front": "Confirmation bias in decision making",
          "back": "The tendency to seek and favor data that supports existing beliefs — analytics counters this by examining complete datasets and disconfirming evidence"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "title": "Measures of Central Tendency",
          "content": "Measures of central tendency are important tools that help us find out where the 'center' of our data is located. The first measure is the mean, which is also known as the average. To calculate the mean, you add all the values together and then divide that total by the number of values you have. This measure is particularly useful when dealing with symmetric data, such as monthly revenue figures, where the values are evenly distributed.\nNext, we have the median, which is the middle value in a sorted list of numbers. To find the median, you arrange your data in order from smallest to largest and then identify the middle number. This measure is often a better choice for skewed data, such as household incomes or home prices, where extreme values can distort the average.\nLastly, the mode is the value that appears most frequently in a dataset. This measure is especially helpful for categorical data, such as when you want to find out which product size is the most popular among customers. By understanding these three measures—mean, median, and mode—businesses can effectively summarize their data and make informed decisions based on their findings. These concepts are foundational in business analytics and can greatly enhance your ability to interpret data accurately."
        },
        {
          "id": "business-analytics-101-l03-c2",
          "title": "Measures of Variability",
          "content": "Variability is an important concept in statistics that helps us understand how spread out our data is. It can reveal significant insights about the information we are analyzing. One way to measure variability is through the range, which is calculated by taking the maximum value in a dataset and subtracting the minimum value. This gives us a basic idea of how much the data varies. However, it's important to note that the range can be heavily influenced by outliers—values that are much higher or lower than the rest of the data.\nTo gain a deeper understanding of variability, we can look at variance. Variance measures the average of the squared differences from the mean, which helps us see how much the data points deviate from the average. This gives us a more comprehensive view of how our data is spread out.\nAnother useful measure is the standard deviation, which is simply the square root of the variance. The standard deviation is expressed in the same units as the original data, making it easier to interpret and understand.\nIn the world of business, understanding variability is crucial. For example, consider two products that have the same average revenue. If one product has a high variability while the other has low variability, they represent different risk profiles. This means that the product with higher variability could be riskier to invest in, as its revenue may fluctuate more widely. Therefore, analyzing variability helps businesses make informed decisions and manage risks effectively."
        },
        {
          "id": "business-analytics-101-l03-c3",
          "title": "Choosing the Right Statistics",
          "content": "When we talk about choosing the right summary statistic, it's important to think about the type of data we have and the specific questions we want to answer. For example, if we are looking at revenue data that is normally distributed, which means it follows a bell-shaped curve, using the mean (the average) and the standard deviation (which tells us how spread out the data is) can give us a good understanding of the situation.\nOn the other hand, if we are examining salary data that might have some extreme outliers—like a few very high salaries that could skew the average—it's better to use the median (the middle value) and the interquartile range (which shows the range of the middle 50% of the data). This approach helps us get a clearer picture of what most people earn without being misled by those few high numbers.\nAdditionally, when we look at customer satisfaction ratings on a scale from 1 to 5, we can use the mode (the most frequently occurring rating) and frequency distributions (which show how often each rating was given) to effectively communicate how customers feel overall.\nTo truly understand the data, it's essential to pair a measure of central tendency, like the mean or median, with a measure of variability, like the standard deviation or interquartile range. This combination gives us a complete understanding of the data we are analyzing, allowing us to make informed decisions based on our findings."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l03-f1",
          "front": "When to use median instead of mean",
          "back": "When data is skewed or contains extreme outliers — the median is not pulled by extreme values, making it better for salary, home price, or revenue distributions with outliers"
        },
        {
          "id": "business-analytics-101-l03-f2",
          "front": "Standard deviation",
          "back": "The square root of variance — measures the average distance of data points from the mean, expressed in the original units for easy interpretation"
        },
        {
          "id": "business-analytics-101-l03-f3",
          "front": "Why pair center with spread",
          "back": "Two datasets can have identical means but vastly different spreads — a measure of center alone hides the variability and risk profile of the data"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "title": "Principles of Good Visualization",
          "content": "Edward Tufte, a well-known expert in data visualization, highlights the importance of maximizing the data-ink ratio in effective charts and graphs. This concept means that every single element on a visualization should serve a purpose and convey valuable information. To create clear and impactful visualizations, it is crucial to remove unnecessary components, often referred to as 'chartjunk.' This includes things like decorative gridlines that do not add value, flashy 3D effects that can confuse the viewer, and extra legends that may not be needed.\nGood visualizations are characterized by three key principles: honesty, clarity, and efficiency. Honesty means that the visual representation should not mislead the audience with distorted scales or manipulated data. Clarity ensures that the main insights are immediately apparent to the viewer, allowing them to understand the message without confusion. Efficiency refers to the ability of a visualization to convey complex patterns and relationships quickly, so viewers can grasp the essential information at a glance.\nMoreover, it is vital to consider the audience when designing visualizations. For instance, executives often require high-level dashboards that summarize key metrics, while analysts may need more detailed breakdowns to explore the data thoroughly. By tailoring visualizations to the specific needs of the audience, you can enhance understanding and facilitate better decision-making."
        },
        {
          "id": "business-analytics-101-l04-c2",
          "title": "Choosing the Right Chart Type",
          "content": "Choosing the right type of chart is essential for clearly sharing the stories that data can tell us. Each chart type serves a specific purpose and helps us understand different aspects of the data. For example, line charts are perfect for showing how things change over time, like tracking sales growth month by month. On the other hand, bar charts are excellent for comparing different categories, such as the sales of different products in a store. If you want to explore the relationship between two variables, scatter plots are your best choice, as they can show how one variable affects another.\nPie charts can be useful for showing how parts make up a whole, but remember to use them only when you have a small number of categories to avoid confusion. Histograms are great for displaying how data is distributed, helping us see patterns in things like test scores. Heatmaps are fantastic for visualizing patterns in large tables of data, making it easier to spot trends at a glance. Lastly, box plots are useful for comparing distributions across different groups, such as comparing test scores between classes.\nChoosing the wrong type of chart can make it harder for your audience to understand the insights you want to share, so it's important to think carefully about which chart will best represent your data and its story. By selecting the right chart type, you can enhance your communication and ensure your audience grasps the key messages you want to convey."
        },
        {
          "id": "business-analytics-101-l04-c3",
          "title": "Common Visualization Pitfalls",
          "content": "When creating data visualizations, it's important to be aware of some common mistakes that can lead to misunderstandings. One major issue is the use of truncated Y-axes. This means that the scale on the Y-axis starts at a point other than zero, which can make small differences between data points appear much larger than they really are. Another pitfall is the use of dual Y-axes, which can suggest that two different sets of data are related when they might not be.\nAdditionally, when we use area or volume to represent one-dimensional quantities, it can confuse our viewers. Our brains are not very good at judging the size of areas compared to lengths, which can lead to misinterpretations.\nAnother common mistake is cherry-picking specific time ranges to present data. This can create a misleading narrative, as it may ignore important context. Lastly, using too many colors can overwhelm the audience and make it difficult to focus on the key messages.\nTo avoid these pitfalls, always ask yourself: 'Does this visualization accurately represent the data? Does it help the audience understand the information and draw the right conclusions?' By keeping these questions in mind, you can create clearer and more effective visualizations."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l04-f1",
          "front": "Data-ink ratio (Tufte)",
          "back": "The proportion of ink used to present actual data versus total ink used in the chart — maximize it by removing chartjunk, 3D effects, and decorative elements"
        },
        {
          "id": "business-analytics-101-l04-f2",
          "front": "When to use a scatter plot",
          "back": "To reveal the relationship between two continuous variables — each point represents one observation with x and y values"
        },
        {
          "id": "business-analytics-101-l04-f3",
          "front": "Why truncated Y-axes are misleading",
          "back": "Starting the Y-axis above zero exaggerates small differences, making minor changes appear dramatic — distorts the audience's perception of magnitude"
        }
      ],
      "learningAids": [
        {
          "id": "business-analytics-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "title": "Spreadsheet Analytics Essentials",
          "content": "Microsoft Excel is one of the most widely used tools for analyzing data in the business world. It provides a variety of important features that help users work with data in an effective and efficient manner. One of the key functions is VLOOKUP, which allows users to find specific information within large datasets quickly. Another important function is INDEX-MATCH, which serves a similar purpose but offers more flexibility in data retrieval.\nPivot tables are another powerful feature that enables users to summarize and analyze data dynamically. This means that users can easily change how they view their data to identify trends and patterns, making it a valuable tool for decision-making. Conditional formatting is also a helpful feature, as it allows users to highlight important information visually, making it easier to spot key insights at a glance.\nMoreover, functions like IF, SUMIFS, and COUNTIFS are essential for applying conditional logic to data analysis. These functions help users perform calculations based on specific criteria, which can lead to more informed business decisions.\nAdditionally, Power Query is a robust feature that assists users in cleaning and transforming their data, ensuring it is ready for thorough analysis. For many managers, mastering pivot tables can significantly enhance their ability to explore and understand data without needing to write any code, making data analysis more accessible and intuitive. Overall, becoming proficient in these Excel features can greatly improve one's analytical skills and contribute to better business outcomes."
        },
        {
          "id": "business-analytics-101-l06-c2",
          "title": "Business Intelligence Platforms",
          "content": "Business Intelligence (BI) tools, including popular options like Tableau, Power BI, Looker, and Qlik, are designed to enhance the way we analyze and visualize data. Unlike traditional spreadsheets, which can only handle a limited amount of information, BI tools connect directly to live data sources. This capability allows them to manage much larger datasets, making them incredibly powerful for organizations that need to work with vast amounts of information. One of the standout features of these platforms is their ability to create interactive dashboards. These dashboards automatically update with the latest data, ensuring that users always have access to the most current information. This innovation transforms the way teams collaborate, as it replaces the old method of emailing spreadsheets back and forth. Instead, everyone can access shared dashboards that provide a single source of truth for the organization. The most significant shift here is from static reports, which present fixed data that doesn’t change, to dynamic dashboards that empower users to explore data independently. This self-service exploration makes it much easier for individuals to uncover insights and make informed decisions based on real-time data."
        },
        {
          "id": "business-analytics-101-l06-c3",
          "title": "Choosing the Right Tool",
          "content": "Choosing the right analytics tool is an important decision that can greatly impact how effectively you analyze and visualize your data. There are several key factors to consider when making this choice. First, think about the volume of data you will be working with. If you are dealing with smaller datasets and need to perform quick analyses, Excel is often a suitable and accessible option. It allows users to perform calculations and create basic charts easily.\nNext, consider the skill level of the users who will be using the tool. Some tools, like Power BI, are designed to be user-friendly, especially for those who are already familiar with Microsoft products. Power BI integrates seamlessly with other Microsoft applications, making it a cost-effective choice for organizations that rely on this ecosystem.\nOn the other hand, if your goal is to create complex visualizations and tell compelling stories with your data, Tableau is an excellent choice. It offers advanced features that allow users to create stunning graphics and dashboards that can effectively communicate insights.\nFor organizations that want a centralized way to manage their data definitions and semantics, Looker is particularly beneficial. It helps ensure that everyone in the organization is on the same page regarding data interpretation.\nUltimately, the best tool is the one that your team will find easy to use and will consistently engage with in their work. It’s important to choose a tool that fits your specific needs and encourages collaboration among team members."
        }
      ],
      "flashcards": [
        {
          "id": "business-analytics-101-l06-f1",
          "front": "Pivot tables",
          "back": "Excel's most powerful analytics feature — dynamically summarize, group, filter, and cross-tabulate large datasets without writing formulas"
        },
        {
          "id": "business-analytics-101-l06-f2",
          "front": "Business intelligence (BI) platform",
          "back": "Software (Tableau, Power BI, Looker) that connects to live data, creates interactive dashboards, and enables self-service analytics across the organization"
        },
        {
          "id": "business-analytics-101-l06-f3",
          "front": "Self-service BI",
          "back": "Empowering business users to explore data and create visualizations without depending on IT — shifts from static reports to dynamic, interactive exploration"
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
