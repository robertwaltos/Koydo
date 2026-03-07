import type { LearningModule } from "@/lib/modules/types";

export const marketing_management_301_Module: LearningModule = {
  "id": "marketing-management-301",
  "title": "Marketing Analytics & Consumer Insights",
  "description": "Harness data to drive marketing decisions. Master marketing analytics, attribution modeling, A/B testing, customer segmentation with data, predictive analytics, and the science of turning consumer insights into competitive advantage.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mba",
    "marketing",
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
    "Design marketing experiments using A/B and multivariate testing",
    "Build attribution models to measure channel contribution",
    "Apply RFM analysis and clustering for customer segmentation",
    "Use predictive analytics for churn prevention and CLV forecasting",
    "Interpret marketing dashboards and KPIs for executive reporting",
    "Evaluate the ethics of data-driven marketing and consumer privacy",
    "Translate analytical findings into actionable marketing strategies"
  ],
  "lessons": [
    {
      "id": "marketing-management-301-l01",
      "title": "Marketing Analytics Foundations",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Distinguish descriptive, diagnostic, predictive, and prescriptive analytics",
        "Identify key marketing KPIs by business objective",
        "Design a marketing analytics stack"
      ],
      "chunks": [
        {
          "id": "marketing-management-301-l01-c1",
          "title": "The Four Levels of Analytics",
          "content": "Marketing analytics provides a framework for understanding performance through four distinct levels of analysis. The first is Descriptive Analytics, which answers 'What happened?' It summarizes historical data, such as reporting that last quarter's customer acquisition cost was $50. The second level is Diagnostic Analytics, which explores 'Why did it happen?' For example, discovering that the acquisition cost increased because of higher bids in a competitive ad auction is a diagnostic insight. Building on this, Predictive Analytics addresses 'What will happen?' It uses statistical models and machine learning to forecast future outcomes, such as a churn model identifying customers with a high probability of leaving. The final and most advanced level is Prescriptive Analytics, which recommends 'What should we do?' It suggests specific actions to optimize outcomes, like recommending a targeted retention offer for at-risk customers identified by the predictive model. Mastering each level sequentially is crucial for building a mature, data-driven marketing function."
        },
        {
          "id": "marketing-management-301-l01-c2",
          "title": "Key Marketing KPIs",
          "content": "Key Performance Indicators (KPIs) are quantifiable measures used to evaluate the success of marketing activities against specific objectives. For customer acquisition, critical KPIs include Cost per Acquisition (CPA), Conversion Rate, and Click-Through Rate (CTR). To measure customer engagement, marketers track metrics like session duration, pages per session, and email open rates. Revenue-focused objectives rely on KPIs such as Average Order Value (AOV), Revenue per User, and Marketing Return on Investment (ROI). For customer retention, key metrics are Churn Rate, Repeat Purchase Rate, and Net Promoter Score (NPS). Finally, to assess long-term health, businesses monitor Customer Lifetime Value (CLV) and the CLV to CAC ratio. The selection of KPIs must align with the company's strategic priorities and stage of growth; for instance, a startup may prioritize acquisition metrics, while a mature company might focus on retention and CLV."
        },
        {
          "id": "marketing-management-301-l01-c3",
          "title": "The Marketing Analytics Stack",
          "content": "A modern marketing analytics stack is a suite of integrated tools that form a data pipeline for decision-making. The process begins with Data Collection, using platforms like Google Analytics, event tracking systems, and CRM databases to capture customer interactions. This data is then consolidated and stored in a Data Warehouse, such as BigQuery or Snowflake, which serves as a central repository. Next, the raw data undergoes Transformation, where tools like dbt or SQL are used to clean, model, and prepare it for analysis. The transformed data is then fed into Visualization tools like Tableau, Looker, or Power BI, which create dashboards and reports to reveal insights. Finally, Experimentation platforms like Optimizely or Google Optimize enable activation of these insights through controlled testing. The goal is to establish a 'single source of truth'—a unified, reliable dataset that ensures analytical models and strategic decisions are based on accurate information."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l01-f1",
          "front": "Four levels of analytics",
          "back": "Descriptive (What happened?) → Diagnostic (Why?) → Predictive (What will happen?) → Prescriptive (What should we do?)"
        },
        {
          "id": "marketing-management-301-l01-f2",
          "front": "CLV:CAC ratio benchmark",
          "back": "A healthy business model typically aims for a ratio of at least 3:1. For every dollar spent on acquiring a customer, they should generate at least three dollars in lifetime value."
        },
        {
          "id": "marketing-management-301-l01-f3",
          "front": "Single source of truth",
          "back": "An integrated data architecture where all marketing data converges, providing a unified and reliable foundation for all analytics. Without it, insights are prone to error."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-301-l01-a1",
          "type": "image",
          "title": "The Analytics Maturity Curve",
          "content": "An infographic illustrating the four levels of marketing analytics as steps on a curve, showing increasing complexity and business value. Each step includes the key question it answers (What, Why, What will, What should) and a sample business application."
        }
      ]
    },
    {
      "id": "marketing-management-301-l02",
      "title": "Attribution Modeling",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Compare first-touch, last-touch, and multi-touch attribution",
        "Explain the mechanics of data-driven attribution models",
        "Evaluate attribution challenges in a privacy-first world"
      ],
      "chunks": [
        {
          "id": "marketing-management-301-l02-c1",
          "title": "The Attribution Challenge",
          "content": "Attribution modeling is the analytical science of determining which marketing touchpoints should receive credit for a conversion. Consider a customer journey: a user sees a Facebook ad, reads a blog post, receives an email, and finally clicks a Google ad before purchasing. The core challenge is assigning value to each of these interactions. Single-touch models offer a simplistic view. First-touch attribution assigns 100% of the credit to the initial touchpoint (the Facebook ad), emphasizing demand generation. Conversely, last-touch attribution gives all credit to the final touchpoint (the Google ad), highlighting the channel that closed the deal. Both models are flawed because they ignore the complex, non-linear nature of the customer journey and the influence of mid-funnel interactions."
        },
        {
          "id": "marketing-management-301-l02-c2",
          "title": "Multi-Touch Models",
          "content": "Multi-touch attribution models provide a more nuanced view by distributing credit across multiple touchpoints. The Linear model assigns equal credit to every interaction, valuing each step of the journey identically. The Time-Decay model gives more credit to touchpoints that occurred closer in time to the conversion, assuming recent interactions are more influential. The U-shaped (or Position-Based) model assigns 40% of the credit to the first touch and 40% to the last, distributing the remaining 20% among the intermediate touchpoints, thus balancing discovery and conversion. The most sophisticated approach is Data-Driven Attribution, which uses machine learning algorithms to analyze conversion paths and assign credit based on the actual contribution of each touchpoint. This model, available in platforms like Google Analytics 4, is considered best practice but requires a significant volume of data to be effective."
        },
        {
          "id": "marketing-management-301-l02-c3",
          "title": "Privacy and Attribution",
          "content": "The digital marketing landscape is undergoing a seismic shift due to privacy regulations like GDPR, the deprecation of third-party cookies, and Apple's App Tracking Transparency (ATT). These changes limit the ability to track users across different websites and apps, making traditional user-level attribution more challenging. In response, marketers are pivoting to new measurement techniques. First-party data strategies, which rely on data collected directly from customers (e.g., via CRM, loyalty programs, email lists), are now paramount. Methodologies like Media Mix Modeling (MMM) use aggregate data to correlate marketing spend with outcomes, while Incrementality Testing uses controlled experiments to measure the true causal lift of a marketing channel. A modern measurement strategy requires a portfolio of these techniques, moving away from reliance on a single attribution model to a more holistic and privacy-compliant approach."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l02-f1",
          "front": "First-touch vs. last-touch attribution",
          "back": "First-touch credits the discovery channel, while last-touch credits the conversion channel. Both are incomplete as they ignore the mid-funnel nurturing process."
        },
        {
          "id": "marketing-management-301-l02-f2",
          "front": "U-shaped (position-based) attribution",
          "back": "Assigns 40% credit to the first touchpoint, 40% to the last, and splits the remaining 20% across middle touchpoints, balancing discovery and conversion credit."
        },
        {
          "id": "marketing-management-301-l02-f3",
          "front": "Incrementality testing",
          "back": "A method using controlled experiments (e.g., holdout groups) to measure the true causal lift of a marketing channel. It is the gold standard for attribution in a cookie-less world."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-301-l02-a1",
          "type": "image",
          "title": "Attribution Model Comparison",
          "content": "A diagram comparing First-Touch, Last-Touch, Linear, and U-Shaped attribution models. It shows a sample 4-step customer journey and visualizes how each model distributes a $100 conversion value across the touchpoints."
        }
      ]
    },
    {
      "id": "marketing-management-301-l03",
      "title": "Experimentation & A/B Testing",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Design rigorous A/B tests for marketing decisions",
        "Calculate statistical significance and sample size",
        "Avoid common experimentation pitfalls"
      ],
      "chunks": [
        {
          "id": "marketing-management-301-l03-c1",
          "title": "A/B Testing Fundamentals",
          "content": "A/B testing, or split testing, is a controlled experiment used to compare two versions of a marketing asset to determine which performs better. Users are randomly assigned to either a control group (Version A) or a treatment group (Version B). The objective is to measure the impact of a single change on a key metric, such as conversion rate or click-through rate. A rigorous A/B test begins with a clear hypothesis (e.g., 'Changing the call-to-action button color from green to orange will increase click-through rate by 10%'). Key requirements for a valid test include isolating a single variable, ensuring a sufficient sample size to detect a meaningful effect, and running the test long enough to achieve statistical significance, typically defined by a p-value less than 0.05. It is critical to avoid 'peeking' at results prematurely, as this can lead to acting on random fluctuations and increases the rate of false positives."
        },
        {
          "id": "marketing-management-301-l03-c2",
          "title": "Beyond Simple A/B Testing",
          "content": "Advanced experimentation techniques offer greater sophistication. Multivariate testing allows for the simultaneous testing of multiple variables (e.g., headline, image, and call-to-action) to identify the most effective combination, though it requires significantly more traffic than a simple A/B test. Bandit algorithms, a form of reinforcement learning, dynamically allocate more traffic to the better-performing variant during the test. This approach maximizes conversions while the test is running, making it ideal for revenue-critical optimizations. Sequential testing provides a framework for stopping experiments early as soon as a statistically significant result is reached, increasing testing velocity. Leading tech companies like Booking.com foster a culture of 'testing everything,' running thousands of concurrent experiments to drive continuous, data-informed improvement."
        },
        {
          "id": "marketing-management-301-l03-c3",
          "title": "Common Experimentation Pitfalls",
          "content": "Several common pitfalls can invalidate experimental results. Testing too many variables at once in a non-multivariate setup makes it impossible to attribute causation. Stopping tests too early based on initial trends can lead to false conclusions, as results may not have stabilized. The novelty effect, where a change initially performs well simply because it is new, can be misleading if not accounted for by running the test for an adequate duration. Failing to segment results can mask important insights; an overall neutral result might hide a strong positive effect for one user segment and a negative effect for another. Finally, HiPPO bias (Highest Paid Person's Opinion) occurs when executive intuition overrides empirical data, undermining a data-driven culture. To mitigate these risks, teams should pre-register hypotheses, define success metrics upfront, and commit to acting on the results, regardless of the outcome."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l03-f1",
          "front": "A/B test requirements",
          "back": "A clear hypothesis, a single variable change, sufficient sample size, statistical significance (p < 0.05), and adequate test duration to avoid novelty effects."
        },
        {
          "id": "marketing-management-301-l03-f2",
          "front": "Multi-armed bandit",
          "back": "An algorithm that dynamically allocates more traffic to winning variants during a test. It maximizes revenue while learning, often reaching conclusions faster than traditional A/B tests."
        },
        {
          "id": "marketing-management-301-l03-f3",
          "front": "HiPPO bias",
          "back": "Stands for 'Highest Paid Person's Opinion.' It's the tendency for executive preferences to override empirical evidence from experiments, which can stifle a data-driven culture."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-301-l03-a1",
          "type": "practice",
          "title": "A/B Test Design Wizard",
          "content": "A step-by-step interactive tool where the user designs an A/B test for a sample scenario (e.g., improving an email campaign's open rate). The user will: 1. Formulate a clear hypothesis. 2. Identify the single variable to test. 3. Define the primary success metric. 4. Use a simple calculator to estimate the required sample size."
        }
      ]
    },
    {
      "id": "marketing-management-301-l04",
      "title": "Customer Analytics & Segmentation",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Apply RFM analysis for customer segmentation",
        "Use cohort analysis to track customer behavior over time",
        "Build predictive models for churn and CLV"
      ],
      "chunks": [
        {
          "id": "marketing-management-301-l04-c1",
          "title": "RFM Analysis",
          "content": "RFM analysis is a powerful segmentation technique that groups customers based on their transaction history. It scores each customer on three dimensions: Recency (How recently did they purchase?), Frequency (How often do they purchase?), and Monetary Value (How much do they spend?). Customers are typically scored on a scale of 1 to 5 for each dimension. This creates distinct segments. For example, a customer with a 5-5-5 score is a 'Champion'—a recent, frequent, high-spending, and loyal customer. A customer with a 1-1-5 score might be a 'Lost High-Value Customer'—someone who spent a lot in the past but has not purchased in a long time. RFM segmentation enables highly targeted marketing actions, such as rewarding champions, sending win-back campaigns to at-risk customers, and upselling frequent but low-spending customers."
        },
        {
          "id": "marketing-management-301-l04-c2",
          "title": "Cohort Analysis",
          "content": "Cohort analysis is a behavioral analytics tool that breaks down data into groups of people with common characteristics over time. A common cohort is users who signed up in the same month. By tracking these cohorts, businesses can analyze how their behavior evolves. For example, you can determine if customers acquired in May have a higher retention rate than those acquired in January, or if product changes have improved long-term engagement for newer cohorts. This method is superior to analyzing aggregate metrics, which can be misleading. For instance, overall revenue might be increasing due to aggressive acquisition, while cohort analysis could reveal that underlying customer retention is declining. The retention curve, a key visual from cohort analysis, plots the percentage of a cohort that remains active over time, providing a clear view of customer loyalty trends."
        },
        {
          "id": "marketing-management-301-l04-c3",
          "title": "Predictive Customer Models",
          "content": "Predictive customer models leverage machine learning to forecast future customer behavior based on historical data. These models can answer critical business questions: Which customers are most likely to churn? What is the 'next best action' or offer for a specific customer? Who are the future high-value customers (predictive CLV)? Which customers are most likely to respond to a new product launch? Common modeling techniques include logistic regression for binary outcomes (e.g., churn/no churn), survival analysis to predict time-to-event (e.g., time until churn), and gradient-boosted trees for capturing complex, non-linear patterns in data. The business impact is significant; for example, a 5% reduction in customer churn has been shown to increase profitability by 25% to 95%, demonstrating the immense value of proactive, data-driven retention strategies."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l04-f1",
          "front": "RFM Analysis",
          "back": "A segmentation method based on Recency, Frequency, and Monetary value. It scores customers on each dimension to create actionable segments like 'Champions' or 'At-Risk'."
        },
        {
          "id": "marketing-management-301-l04-f2",
          "front": "Cohort analysis",
          "back": "Groups customers by a shared characteristic (e.g., sign-up month) and tracks their behavior over time. It reveals underlying retention trends that aggregate metrics can hide."
        },
        {
          "id": "marketing-management-301-l04-f3",
          "front": "Impact of 5% churn reduction",
          "back": "Can increase profits by 25-95%. This highlights that retention is often more profitable than acquisition due to lower costs and higher lifetime value."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-301-l04-a1",
          "type": "image",
          "title": "RFM Segmentation Matrix",
          "content": "A visual matrix plotting Recency against Frequency. The cells are color-coded by Monetary value and labeled with customer segment names (e.g., Champions, Loyal Customers, At-Risk, Lost Customers), with a brief description of the suggested marketing action for each segment."
        }
      ]
    },
    {
      "id": "marketing-management-301-l05",
      "title": "Checkpoint: Marketing Analytics",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "marketing-management-301-l05-q1",
          "text": "A customer who scored 5-1-5 in RFM analysis (high Recency, low Frequency, high Monetary) likely represents:",
          "options": [
            {
              "id": "a",
              "text": "A loyal regular customer"
            },
            {
              "id": "b",
              "text": "A new big spender who hasn't repeated yet"
            },
            {
              "id": "c",
              "text": "A dormant former high-value customer"
            },
            {
              "id": "d",
              "text": "A low-value occasional buyer"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High recency (bought recently) and high monetary value (spent a lot) but low frequency (hasn't repeated) is the classic profile of a new customer who made a large first purchase. The key marketing goal is to nurture them into a repeat customer."
        },
        {
          "id": "marketing-management-301-l05-q2",
          "text": "Which attribution model gives equal credit to all touchpoints in the conversion path?",
          "options": [
            {
              "id": "a",
              "text": "Last-touch"
            },
            {
              "id": "b",
              "text": "Linear"
            },
            {
              "id": "c",
              "text": "Time-decay"
            },
            {
              "id": "d",
              "text": "U-shaped"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Linear attribution model distributes credit equally across all touchpoints in the customer journey. It is simple to implement but doesn't account for the varying influence of touchpoints at different stages."
        },
        {
          "id": "marketing-management-301-l05-q3",
          "text": "What is the primary statistical risk of 'peeking' at A/B test results before the test has concluded?",
          "options": [
            {
              "id": "a",
              "text": "It increases the cost of running the test"
            },
            {
              "id": "b",
              "text": "You might make a decision based on random noise rather than a true effect"
            },
            {
              "id": "c",
              "text": "It significantly slows down the test completion time"
            },
            {
              "id": "d",
              "text": "It biases the random assignment of users"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Repeatedly checking results before reaching the predetermined sample size inflates the false positive rate. Temporary random fluctuations can appear to be a significant effect, leading to incorrect conclusions based on statistical noise rather than a true signal."
        }
      ]
    },
    {
      "id": "marketing-management-301-l06",
      "title": "Data Ethics & Privacy in Marketing",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Evaluate ethical implications of data-driven marketing",
        "Navigate GDPR and CCPA privacy regulations",
        "Build consumer trust through transparent data practices"
      ],
      "chunks": [
        {
          "id": "marketing-management-301-l06-c1",
          "title": "The Evolving Privacy Landscape",
          "content": "The regulatory environment for consumer data is rapidly evolving, driven by public demand for greater privacy. Landmark regulations like the European Union's General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA) have established stringent rules for data handling. GDPR requires explicit, informed consent for data collection and grants consumers rights like data access and deletion. CCPA provides consumers with the right to know what data is collected about them and to opt out of its sale. Concurrently, tech companies like Apple are implementing privacy-centric features such as App Tracking Transparency (ATT), further limiting third-party tracking. This shift marks a move away from the era of 'surveillance capitalism,' forcing marketers to transition from a 'collect everything' mindset to a more deliberate, privacy-first approach focused on necessary data collected with clear consumer consent."
        },
        {
          "id": "marketing-management-301-l06-c2",
          "title": "Principles of Ethical Data Practice",
          "content": "Ethical data handling is foundational to building long-term customer trust. Key principles include: Transparency, which involves clearly communicating what data is collected and for what purpose; Consent, ensuring permission is obtained explicitly and is easy to withdraw; Proportionality, collecting only the data that is strictly necessary for the stated purpose; Security, implementing robust measures to protect data from breaches; and Fairness, using data in ways that do not create discriminatory outcomes. Marketers must also avoid 'dark patterns'—deceptive user interface designs that trick users into sharing more data than they intend. In the modern economy, brands that prioritize ethical data stewardship and build genuine trust with their customers will have a significant and sustainable competitive advantage."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l06-f1",
          "front": "GDPR key requirements",
          "back": "Explicit consent for data collection, data subject rights (access, deletion), data protection by design, and mandatory breach notification within 72 hours."
        },
        {
          "id": "marketing-management-301-l06-f2",
          "front": "Dark patterns",
          "back": "Manipulative user interface designs that trick users into actions they didn't intend, such as sharing data or making a purchase. These are facing increasing regulatory scrutiny."
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-301-l06-a1",
          "type": "image",
          "title": "Pillars of Data Ethics",
          "content": "An infographic showing five pillars labeled Transparency, Consent, Proportionality, Security, and Fairness. Each pillar has a concise definition and an icon representing the concept."
        }
      ]
    },
    {
      "id": "marketing-management-301-l07",
      "title": "Final Assessment: Marketing Analytics & Consumer Insights",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "marketing-management-301-l07-q1",
          "text": "Predictive analytics is the level of analysis that primarily answers which question?",
          "options": [
            {
              "id": "a",
              "text": "What happened?"
            },
            {
              "id": "b",
              "text": "Why did it happen?"
            },
            {
              "id": "c",
              "text": "What will happen?"
            },
            {
              "id": "d",
              "text": "What should we do?"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Predictive analytics uses historical data and statistical models to forecast future outcomes (what will happen). Descriptive analytics answers 'what happened,' Diagnostic answers 'why,' and Prescriptive answers 'what to do.'"
        },
        {
          "id": "marketing-management-301-l07-q2",
          "text": "Booking.com's practice of running thousands of simultaneous experiments is a prime example of:",
          "options": [
            {
              "id": "a",
              "text": "HiPPO-driven decision making"
            },
            {
              "id": "b",
              "text": "A deeply ingrained experimentation culture"
            },
            {
              "id": "c",
              "text": "A focus on short-term cost-cutting"
            },
            {
              "id": "d",
              "text": "A strategy to comply with privacy regulations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Booking.com is renowned for its extreme experimentation culture, where nearly every change is tested to let empirical data, rather than opinions, drive product and marketing decisions."
        },
        {
          "id": "marketing-management-301-l07-q3",
          "text": "First-party data strategies are becoming increasingly critical for marketers primarily because:",
          "options": [
            {
              "id": "a",
              "text": "First-party data is always cheaper to collect than third-party data"
            },
            {
              "id": "b",
              "text": "Third-party cookies are being deprecated and privacy regulations are tightening"
            },
            {
              "id": "c",
              "text": "First-party data is inherently more anonymous"
            },
            {
              "id": "d",
              "text": "Consumers have shown a strong preference for third-party tracking"
            }
          ],
          "correctOptionId": "b",
          "explanation": "With the demise of third-party cookies and stricter privacy laws like GDPR and CCPA, the ability to track users across external sites is diminishing. Brands that build direct relationships and collect first-party data (e.g., from their CRM, loyalty programs, and email lists) will have a significant competitive advantage in personalization and measurement."
        }
      ]
    }
  ]
};
