import type { LearningModule } from "@/lib/modules/types";

export const MarketingManagement301Module: LearningModule = {
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
  "version": "2.0.0",
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
        "Distinguish descriptive, predictive, and prescriptive analytics",
        "Identify key marketing KPIs by business stage",
        "Design a marketing analytics stack"
      ],
      "chunks": [
        {
          "id": "marketing-management-301-l01-c1",
          "title": "Three Levels of Analytics",
          "content": "Descriptive analytics tells you what happened (last month's conversion rate was 3.2%). Diagnostic analytics explains why (mobile conversion dropped because checkout was broken on iOS). Predictive analytics forecasts what will happen (churn models flag at-risk customers). Prescriptive analytics recommends action (send a retention offer to high-CLV customers with churn probability above 70%). Each level builds on the previous, and most companies still struggle with descriptive before attempting predictive."
        },
        {
          "id": "marketing-management-301-l01-c2",
          "title": "Key Marketing KPIs",
          "content": "Essential metrics vary by goal: Acquisition (Cost per Acquisition, conversion rate, click-through rate), Engagement (time on site, pages per session, email open rate), Revenue (Average Order Value, Revenue per User, Marketing ROI), Retention (churn rate, repeat purchase rate, NPS), and Lifetime Value (CLV, CLV:CAC ratio). The metric hierarchy should align with business stage: startups prioritize acquisition, mature businesses focus on retention and CLV optimization."
        },
        {
          "id": "marketing-management-301-l01-c3",
          "title": "The Analytics Stack",
          "content": "A modern marketing analytics stack includes: data collection (Google Analytics, event tracking, CRM data), data storage (data warehouse — BigQuery, Snowflake), data transformation (dbt, SQL), visualization (Looker, Tableau, Power BI), and experimentation platforms (Optimizely, Google Optimize). The goal is a 'single source of truth' where all marketing data converges. Without clean, integrated data, even the best analytical techniques produce misleading results."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l01-f1",
          "front": "Four levels of analytics",
          "back": "Descriptive (what happened) → Diagnostic (why) → Predictive (what will happen) → Prescriptive (what should we do)"
        },
        {
          "id": "marketing-management-301-l01-f2",
          "front": "CLV:CAC ratio benchmark",
          "back": "At least 3:1 — if you spend $100 to acquire a customer, they should generate at least $300 in lifetime value"
        },
        {
          "id": "marketing-management-301-l01-f3",
          "front": "Single source of truth",
          "back": "One integrated data system where all marketing data converges — essential for accurate analytics; without it, insights are unreliable"
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-301-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
        "Design data-driven attribution models",
        "Evaluate attribution challenges in a privacy-first world"
      ],
      "chunks": [
        {
          "id": "marketing-management-301-l02-c1",
          "title": "The Attribution Challenge",
          "content": "A customer sees a Facebook ad, reads a blog post, receives an email, then clicks a Google ad and buys. Which channel gets credit for the sale? Attribution modeling answers this. First-touch attribution credits the first interaction (Facebook). Last-touch credits the final click (Google). Both are flawed — first-touch ignores nurturing, last-touch ignores discovery. Multi-touch models distribute credit across the journey."
        },
        {
          "id": "marketing-management-301-l02-c2",
          "title": "Multi-Touch Models",
          "content": "Common multi-touch models: Linear (equal credit to all touchpoints), Time-decay (more credit to recent interactions), U-shaped/Position-based (40% to first and last touch, 20% spread across the middle), and Data-driven (algorithmic models using machine learning to weight contributions based on actual conversion data). Data-driven attribution is the gold standard but requires significant data volume. Google Analytics 4 offers data-driven attribution by default."
        },
        {
          "id": "marketing-management-301-l02-c3",
          "title": "Privacy and Attribution",
          "content": "Cookie deprecation, iOS App Tracking Transparency, and GDPR have disrupted digital attribution. Third-party cookies that tracked users across sites are disappearing. Solutions include: first-party data strategies (CRM, loyalty programs, email), server-side tracking, media mix modeling (statistical analysis of aggregate spend vs. outcomes), and incrementality testing (controlled experiments measuring lift). Marketers must combine multiple measurement approaches rather than relying on any single method."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l02-f1",
          "front": "First-touch vs. last-touch attribution",
          "back": "First-touch credits discovery channel; last-touch credits conversion channel — both are incomplete; multi-touch distributes credit across the journey"
        },
        {
          "id": "marketing-management-301-l02-f2",
          "front": "U-shaped (position-based) attribution",
          "back": "40% credit to first touchpoint, 40% to last, 20% split across middle touchpoints — balances discovery and conversion credit"
        },
        {
          "id": "marketing-management-301-l02-f3",
          "front": "Incrementality testing",
          "back": "Controlled experiments measuring the true lift of a marketing channel — the gold standard for causal attribution in a cookie-less world"
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-301-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "A/B testing randomly assigns users to a control (A) or treatment (B) group and measures the difference in a key metric (conversion rate, click-through rate, revenue per user). Proper tests require: a clear hypothesis ('Changing the CTA button from green to orange will increase click-through by 10%'), a single variable change, sufficient sample size, and statistical significance (typically p < 0.05). Running tests for too short a period or 'peeking' at results early invalidates conclusions."
        },
        {
          "id": "marketing-management-301-l03-c2",
          "title": "Beyond Simple A/B",
          "content": "Multivariate testing tests multiple variables simultaneously (headline × image × CTA button) to find the best combination — but requires much larger samples. Bandit algorithms (like multi-armed bandits) dynamically allocate traffic to winning variants during the test, maximizing revenue while learning. Sequential testing allows early stopping when results are clear without sacrificing statistical validity. The best experimentation programs build a culture of 'testing everything' — Booking.com runs thousands of simultaneous experiments."
        },
        {
          "id": "marketing-management-301-l03-c3",
          "title": "Common Pitfalls",
          "content": "Experimentation mistakes include: testing too many things at once (can't isolate causes), stopping tests too early (results may not be stable), ignoring novelty effects (new designs get attention temporarily), not segmenting results (overall null result may hide strong effects in segments), and HiPPO bias (Highest Paid Person's Opinion overrides data). The solution: pre-register hypotheses, define success metrics before running, and commit to acting on results even when they surprise you."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l03-f1",
          "front": "A/B test requirements",
          "back": "Clear hypothesis, single variable change, sufficient sample size, statistical significance (p < 0.05), adequate test duration"
        },
        {
          "id": "marketing-management-301-l03-f2",
          "front": "Multi-armed bandit",
          "back": "Algorithm that dynamically allocates more traffic to winning variants during a test — maximizes revenue while learning, faster than traditional A/B"
        },
        {
          "id": "marketing-management-301-l03-f3",
          "front": "HiPPO bias",
          "back": "Highest Paid Person's Opinion — when executives override experimental data with personal preferences, undermining data-driven culture"
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "RFM segments customers by: Recency (how recently they purchased), Frequency (how often they purchase), and Monetary value (how much they spend). Each customer gets a score (1-5) on each dimension. A 5-5-5 customer is your best (recent, frequent, high-spending). A 1-1-5 used to be valuable but has gone dormant. RFM enables targeted marketing: send win-back campaigns to high-monetary but low-recency customers, loyalty rewards to 5-5-5 customers, and upsell offers to high-frequency low-monetary customers."
        },
        {
          "id": "marketing-management-301-l04-c2",
          "title": "Cohort Analysis",
          "content": "Cohort analysis groups customers by a shared characteristic (usually sign-up month) and tracks their behavior over time. This reveals: do newer cohorts retain better than older ones? Is CLV improving? Are seasonal customers behaving differently? Without cohort analysis, aggregate metrics can be misleading — total revenue might grow while per-cohort retention worsens (because new customer acquisition masks churn). The retention curve — plotting percentage still active by month — is the most important cohort chart."
        },
        {
          "id": "marketing-management-301-l04-c3",
          "title": "Predictive Customer Models",
          "content": "Machine learning enables predictive customer analytics: churn prediction (which customers are likely to leave?), next-best-action (which offer to present?), CLV prediction (which customers will be most valuable?), and propensity modeling (who is likely to buy a specific product?). Common techniques: logistic regression for binary outcomes, survival analysis for time-to-event, and gradient-boosted trees for complex pattern recognition. The business impact: reducing churn by 5% can increase profits by 25-95%."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l04-f1",
          "front": "RFM Analysis",
          "back": "Recency, Frequency, Monetary — score customers 1-5 on each dimension to segment by value and enable targeted marketing"
        },
        {
          "id": "marketing-management-301-l04-f2",
          "front": "Cohort analysis",
          "back": "Group customers by shared characteristic (e.g., sign-up month) and track behavior over time — reveals retention trends that aggregate metrics hide"
        },
        {
          "id": "marketing-management-301-l04-f3",
          "front": "Impact of 5% churn reduction",
          "back": "Can increase profits by 25-95% — retention is typically more profitable than acquisition because of reduced CAC and higher CLV"
        }
      ],
      "learningAids": [
        {
          "id": "marketing-management-301-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
              "text": "A dormant former customer"
            },
            {
              "id": "d",
              "text": "A low-value occasional buyer"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High recency (bought recently) and high monetary (spent a lot) but low frequency (hasn't repeated) — this is a new big spender who needs nurturing to become a repeat customer."
        },
        {
          "id": "marketing-management-301-l05-q2",
          "text": "Which attribution model gives equal credit to all touchpoints?",
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
          "explanation": "Linear attribution distributes credit equally across all touchpoints in the customer journey — simple but doesn't account for varying influence at different stages."
        },
        {
          "id": "marketing-management-301-l05-q3",
          "text": "What is the main risk of 'peeking' at A/B test results before the test reaches statistical significance?",
          "options": [
            {
              "id": "a",
              "text": "The test costs more money"
            },
            {
              "id": "b",
              "text": "You may act on random noise rather than real effects"
            },
            {
              "id": "c",
              "text": "The test takes longer to complete"
            },
            {
              "id": "d",
              "text": "Customers notice they're being tested"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Early peeking inflates false positive rates — temporary random fluctuations may look like real effects, leading to decisions based on noise rather than signal."
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
        "Navigate GDPR and privacy regulations",
        "Build trust through transparent data practices"
      ],
      "chunks": [
        {
          "id": "marketing-management-301-l06-c1",
          "title": "The Privacy Landscape",
          "content": "Consumer privacy regulations have transformed marketing: GDPR (EU) requires explicit consent for data collection and grants data subject rights. CCPA (California) gives consumers the right to know what data is collected and opt out of sales. Apple's App Tracking Transparency lets users block cross-app tracking. These regulations reflect growing consumer concern about surveillance capitalism. Marketers must shift from 'collect everything' to 'collect what you need with permission.'"
        },
        {
          "id": "marketing-management-301-l06-c2",
          "title": "Ethical Data Practices",
          "content": "Ethical marketing analytics follows principles: transparency (tell customers what data you collect and why), consent (get meaningful permission, not buried terms), proportionality (only collect data you actually need), security (protect the data you hold), and fairness (don't use data in discriminatory ways). Dark patterns — manipulative design that tricks users into sharing data — erode trust and increasingly face regulatory scrutiny. The most successful brands build competitive advantage from trust, not from data exploitation."
        }
      ],
      "flashcards": [
        {
          "id": "marketing-management-301-l06-f1",
          "front": "GDPR key requirements",
          "back": "Explicit consent for data collection, data subject rights (access, deletion, portability), data protection by design, breach notification within 72 hours"
        },
        {
          "id": "marketing-management-301-l06-f2",
          "front": "Dark patterns",
          "back": "Manipulative UI design that tricks users into sharing data or making purchases they didn't intend — increasingly scrutinized by regulators and consumers"
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
          "text": "Predictive analytics answers which question?",
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
          "explanation": "Predictive analytics forecasts future outcomes (what will happen). Descriptive = what happened, Diagnostic = why, Prescriptive = what to do about it."
        },
        {
          "id": "marketing-management-301-l07-q2",
          "text": "Booking.com's culture of running thousands of simultaneous experiments exemplifies:",
          "options": [
            {
              "id": "a",
              "text": "HiPPO-driven decision making"
            },
            {
              "id": "b",
              "text": "A testing-everything experimentation culture"
            },
            {
              "id": "c",
              "text": "Cost-cutting through automation"
            },
            {
              "id": "d",
              "text": "Regulatory compliance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Booking.com is famous for its extreme experimentation culture — testing every change, no matter how small, to let data rather than opinions drive decisions."
        },
        {
          "id": "marketing-management-301-l07-q3",
          "text": "First-party data strategies are gaining importance because:",
          "options": [
            {
              "id": "a",
              "text": "First-party data is cheaper to collect"
            },
            {
              "id": "b",
              "text": "Third-party cookies are being deprecated and privacy regulations tighten"
            },
            {
              "id": "c",
              "text": "First-party data is more anonymous"
            },
            {
              "id": "d",
              "text": "Consumers prefer third-party tracking"
            }
          ],
          "correctOptionId": "b",
          "explanation": "As third-party cookies disappear and privacy laws tighten, brands that build direct relationships and first-party data (CRM, loyalty, email) gain a competitive advantage in targeting and measurement."
        }
      ]
    }
  ]
};
